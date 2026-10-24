// Classora AI: standalone Cloudflare Worker. Secrets belong in the dashboard.
const PROJECT = 'pythagorasi-school';
const MODEL = 'gpt-6-luna';
const ORIGINS = new Set(['https://classora.study', 'https://www.classora.study', 'https://classora.pages.dev']);
const JWKS = 'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com';
const encoder = new TextEncoder();
const LIMITS = {daily:100, monthly:2000, userDaily:25, gap:5000};
const INSTRUCTIONS = `You are Classora AI, a friendly general assistant for students and families.
Understand and respond naturally in Arabic, English, Spanish, Korean, German, Italian, Hindi and Turkish. Follow the user's explicit language or dialect preference, otherwise their message language; use the interface language only as a fallback.
Use conversation history to resolve follow-ups such as rewrite, arrange this sentence, longer, shorter, change the ending, and continue. Perform the actual edit on the relevant text. Answer new questions directly even when the previous topic was a story. Interpret obvious typos from context.
Write coherent original stories with connected events. In casual conversation, match the user's tone, use light humor and occasional appropriate emojis. Do not treat greetings or praise as dictionary questions. Do not copy canned examples, mix dialects randomly, or ask the user to choose a topic when they asked you to start one.
Explain school subjects clearly at the requested grade. Check arithmetic. Ask a brief clarification only when necessary. Never invent sources, current facts, browsing, or account actions: you have no tools or live web access. Distinguish fiction from facts and acknowledge uncertainty.
Keep responses appropriate for minors. Never request secrets or unnecessary personal data. Do not provide dangerous instructions, sexual content involving minors, or encouragement of self-harm. Be supportive and suggest trusted human help when needed. You are an AI, not a human friend with real-life experiences.
Default to concise answers unless the task calls for detail. Preserve constraints and names when revising. For a request too long for one answer, provide a clearly labeled first part rather than claiming completion.`;
let keyCache = {keys:[], until:0};
const initialized = new WeakMap();

export const SCHEMA = [
  'CREATE TABLE IF NOT EXISTS ai_requests (id TEXT PRIMARY KEY, uid TEXT NOT NULL, at INTEGER NOT NULL, day TEXT NOT NULL, month TEXT NOT NULL)',
  'CREATE INDEX IF NOT EXISTS ai_month ON ai_requests(month)',
  'CREATE INDEX IF NOT EXISTS ai_day ON ai_requests(day)',
  'CREATE INDEX IF NOT EXISTS ai_user_time ON ai_requests(uid, at)'
];
// One atomic INSERT decides admission across all Worker instances. Failed calls
// remain counted; no retries can accidentally exceed the reserved request cap.
export const ADMIT_SQL = `INSERT INTO ai_requests(id,uid,at,day,month)
SELECT ?,?,?,?,? WHERE
 (SELECT COUNT(*) FROM ai_requests WHERE month=?) < ? AND
 (SELECT COUNT(*) FROM ai_requests WHERE day=?) < ? AND
 (SELECT COUNT(*) FROM ai_requests WHERE uid=? AND day=?) < ? AND
 NOT EXISTS(SELECT 1 FROM ai_requests WHERE uid=? AND at>?)
RETURNING id`;

function reply(status, value, origin) {
  const headers = {'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','Vary':'Origin','X-Content-Type-Options':'nosniff'};
  if (ORIGINS.has(origin)) Object.assign(headers, {'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Headers':'Authorization, Content-Type','Access-Control-Allow-Methods':'GET, POST, OPTIONS','Access-Control-Max-Age':'600'});
  return new Response(status === 204 ? null : JSON.stringify(value), {status,headers});
}
function decode(value) {
  const raw = atob(value.replace(/-/g,'+').replace(/_/g,'/'));
  return Uint8Array.from(raw, c=>c.charCodeAt(0));
}
async function verifyToken(token) {
  if (!token || token.length > 8192) return null;
  let parts, head, claims, sig;
  try {
    parts=token.split('.'); if(parts.length!==3)return null;
    head=JSON.parse(new TextDecoder().decode(decode(parts[0])));
    claims=JSON.parse(new TextDecoder().decode(decode(parts[1])));
    sig=decode(parts[2]);
  } catch {return null;}
  const now=Math.floor(Date.now()/1000);
  if(head?.alg!=='RS256'||typeof head.kid!=='string'||!claims ||
    claims.aud!==PROJECT||claims.iss!==`https://securetoken.google.com/${PROJECT}`||
    typeof claims.sub!=='string'||!claims.sub||claims.sub.length>128||
    !Number.isFinite(claims.exp)||claims.exp<=now||
    !Number.isFinite(claims.iat)||claims.iat>now||
    !Number.isFinite(claims.auth_time)||claims.auth_time>now||
    !claims.firebase?.sign_in_provider||claims.firebase.sign_in_provider==='anonymous')return null;
  if(Date.now()>=keyCache.until){
    const r=await fetch(JWKS,{signal:AbortSignal.timeout(8000)});
    if(!r.ok)throw Error('auth-unavailable');
    const body=await r.json();
    if(!Array.isArray(body.keys))throw Error('auth-unavailable');
    const ttl=Math.min(3600,Math.max(60,Number(/max-age=(\d+)/.exec(r.headers.get('cache-control')||'')?.[1]||300)));
    keyCache={keys:body.keys,until:Date.now()+ttl*1000};
  }
  const jwk=keyCache.keys.find(k=>k.kid===head.kid&&k.kty==='RSA');
  if(!jwk)return null;
  const key=await crypto.subtle.importKey('jwk',jwk,{name:'RSASSA-PKCS1-v1_5',hash:'SHA-256'},false,['verify']);
  return await crypto.subtle.verify('RSASSA-PKCS1-v1_5',key,sig,encoder.encode(parts[0]+'.'+parts[1])) ? claims.sub : null;
}
async function init(db) {
  if(!initialized.has(db)){
    const p=db.batch(SCHEMA.map(sql=>db.prepare(sql))).catch(e=>{initialized.delete(db);throw e;});
    initialized.set(db,p);
  }
  await initialized.get(db);
}
async function readJson(request) {
  const reader=request.body?.getReader(); if(!reader)throw Error('invalid-request');
  const chunks=[]; let size=0;
  for(;;){const {done,value}=await reader.read();if(done)break;
    size+=value.byteLength; if(size>120000){await reader.cancel();throw Error('invalid-request');}chunks.push(value);}
  const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
  return JSON.parse(new TextDecoder().decode(bytes));
}
export function buildInput(data) {
  if(typeof data?.question!=='string'||!data.question.trim()||data.question.length>3500)throw Error('question-invalid');
  const question={role:'user',content:data.question.trim()};
  const history=[];let bytes=encoder.encode(question.content).length;
  const items=Array.isArray(data.history)?data.history.slice(-10):[];
  for(const m of items.reverse()){
    if(!m||!['user','assistant'].includes(m.role)||typeof m.content!=='string'||!m.content.trim())continue;
    const content=m.content.slice(0,m.role==='assistant'?6000:3500);
    const n=encoder.encode(content).length;
    if(bytes+n>24000)break;
    bytes+=n;history.unshift({role:m.role,content});
  }
  return [...history,question];
}
export function answerText(out) {
  return (out.output||[]).filter(i=>i.type==='message'&&i.role==='assistant')
    .flatMap(i=>i.content||[]).map(p=>p.type==='output_text'?p.text:p.type==='refusal'?p.refusal:'').filter(Boolean).join('\n').trim();
}
async function admit(db, uid) {
  const now=Date.now(), date=new Date(now).toISOString(), day=date.slice(0,10), month=date.slice(0,7);
  const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',encoder.encode(PROJECT+':'+uid))),b=>b.toString(16).padStart(2,'0')).join('');
  const row=await db.prepare(ADMIT_SQL).bind(crypto.randomUUID(),hash,now,day,month,month,LIMITS.monthly,day,LIMITS.daily,hash,day,LIMITS.userDaily,hash,now-LIMITS.gap).first();
  return Boolean(row);
}
export default {
  async fetch(request,env) {
    const origin=request.headers.get('Origin')||'', path=new URL(request.url).pathname;
    if(origin&&!ORIGINS.has(origin))return reply(403,{error:'origin-not-allowed'},'');
    if(request.method==='OPTIONS')return reply(origin?204:403,{error:'origin-required'},origin);
    if(request.method==='GET'&&(path==='/health'||path==='/')){
      let databaseReady=false;
      try{if(env.AI_USAGE){await init(env.AI_USAGE);databaseReady=true;}}catch{}
      return reply(200,{ok:true,service:'Classora Cloud AI',protocol:257,provider:'openai',model:MODEL,
        configured:Boolean(env.OPENAI_API_KEY)&&databaseReady,keyConfigured:Boolean(env.OPENAI_API_KEY),databaseReady,
        inferenceVerified:false},origin);
    }
    if(request.method!=='POST'||path!=='/api/chat')return reply(404,{error:'not-found'},origin);
    if(!env.OPENAI_API_KEY||!env.AI_USAGE)return reply(503,{error:'setup-required'},origin);
    const bearer=/^Bearer\s+(\S+)$/i.exec(request.headers.get('Authorization')||'');
    if(!bearer)return reply(401,{error:'sign-in-required'},origin);
    let uid;
    try{uid=await verifyToken(bearer[1]);}catch{return reply(503,{error:'auth-unavailable'},origin);}
    if(!uid)return reply(401,{error:'invalid-login'},origin);
    let data,input;
    try{data=await readJson(request);input=buildInput(data);}catch{return reply(400,{error:'invalid-request'},origin);}
    try{await init(env.AI_USAGE);if(!await admit(env.AI_USAGE,uid))return reply(429,{error:'daily-limit'},origin);}
    catch{return reply(503,{error:'usage-unavailable'},origin);}
    const languages={ar:'Arabic',en:'English',es:'Spanish',ko:'Korean',de:'German',it:'Italian',hi:'Hindi',tr:'Turkish'};
    const grade=[7,8,9,10].includes(Number(data.grade))?Number(data.grade):8;
    try {
      const r=await fetch('https://api.openai.com/v1/responses',{
        method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${env.OPENAI_API_KEY}`},
        signal:AbortSignal.timeout(90000),
        body:JSON.stringify({model:MODEL,store:false,reasoning:{effort:'low'},max_output_tokens:2000,
          instructions:INSTRUCTIONS+`\nInterface language: ${languages[data.language]||'Arabic'}. School grade when relevant: ${grade}.`,input})
      });
      if(!r.ok){
        const error=await r.json().catch(()=>({}));
        const code=error?.error?.code;
        return reply(503,{error:code==='insufficient_quota'?'billing-required':r.status===401?'provider-key-invalid':r.status===429?'busy':'model-unavailable'},origin);
      }
      const out=await r.json(),answer=answerText(out);
      if(!answer)return reply(503,{error:'model-empty'},origin);
      return reply(200,{answer,provider:'openai',model:MODEL,truncated:out.status==='incomplete'},origin);
    }catch{return reply(503,{error:'model-unavailable'},origin);}
  }
};
