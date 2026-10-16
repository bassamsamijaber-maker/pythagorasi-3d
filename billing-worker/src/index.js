// Cloudflare Workers + D1 foundation for Classora Sandbox billing.
// NOT live-ready. Do not attach this to the production Classora domain.
import { createRemoteJWKSet, jwtVerify } from "jose";

const JWKS = createRemoteJWKSet(new URL("https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"));
const encoder = new TextEncoder();
const CATALOG = Object.freeze({
  student_plus: { monthly:"pri_01m52gdcxvavyvxm20syewn02p", annual:"pri_01m52gktppwtkyzpw6ra3b5gzp" },
  student_premium: { monthly:"pri_01m52gsd66av9fh42t98gn2xv9", annual:"pri_01m52gvc6w6q0v9d85v6grfz0x" },
  teacher_plus: { monthly:"pri_01m52h0nth9qp5g4x2rp755rw2", annual:"pri_01m52h21bkhnc9n0daf7zfz077" },
  teacher_premium: { monthly:"pri_01m52hmfdzpq8ed58thdb7nfkm", annual:"pri_01m52hnshxabs88wkr3yyw5t3p" },
  class_plus: { monthly:"pri_01m52htxwk9cxa9vzq1d47ntan", annual:"pri_01m52hwb8eswkwn1h0q6cn6qwj" },
  class_premium: { monthly:"pri_01m52j00j9jn00bd78215tzz4j", annual:"pri_01m52j122szjmbhxbp3h5per73" },
  school_plus: { monthly:"pri_01m52j311477jbe7a595msjfv1", annual:"pri_01m52j3z465tkzrvsfdc4dcrv2" },
  school_premium: { monthly:"pri_01m52j6p5yq3pz27axxzxfmf0n", annual:"pri_01m52j824aa3zwbqcfwe6dagzz" },
  extra_student: { monthly:"pri_01m52jggg0jqp9y2sm1zk5d6h4", annual:"pri_01m52jkc683jdqd6m5k2fkc9vt" },
  extra_teacher: { monthly:"pri_01m52jmvhpay4tp09cnkjnhgb1", annual:"pri_01m52jnxxw1x6v5xznr7vsz57c" },
});
const SUB_EVENTS = new Set(["subscription.created","subscription.activated","subscription.updated","subscription.canceled","subscription.past_due","subscription.paused","subscription.resumed","subscription.trialing"]);
const json = (body,status=200,extra={}) => new Response(JSON.stringify(body),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...extra}});
const fail = (message,status=400) => json({ok:false,error:message},status);
const asString = v => typeof v==="string"?v:"";
function commonHeaders(origin,allowed) { return origin===allowed?{"Access-Control-Allow-Origin":allowed,"Vary":"Origin","Access-Control-Allow-Headers":"Authorization,Content-Type","Access-Control-Allow-Methods":"GET,POST,OPTIONS"}:{}; }
function safeId(v,max=128) { return typeof v==="string" && v.length>0 && v.length<=max && /^[a-zA-Z0-9_-]+$/.test(v); }

async function firebaseUser(req, env) {
  if (!env.FIREBASE_PROJECT_ID || env.FIREBASE_PROJECT_ID==="REPLACE_WITH_TEST_PROJECT_ID") throw new Error("Firebase test project not configured");
  const bearer = req.headers.get("authorization")?.match(/^Bearer ([A-Za-z0-9._-]+)$/);
  if (!bearer) throw new Error("Missing Firebase session");
  const {payload}=await jwtVerify(bearer[1], JWKS,{
    audience:env.FIREBASE_PROJECT_ID,
    issuer:"https://securetoken.google.com/"+env.FIREBASE_PROJECT_ID,
    algorithms:["RS256"],
    clockTolerance:15
  });
  if (!safeId(payload.sub,128)) throw new Error("Invalid Firebase account");
  return {uid:payload.sub,token:bearer[1]};
}

// Server fetches account role/ownership with the user's Firebase ID token.
// Role, class and price submitted by a browser cannot be trusted.
async function firestoreDoc(env,auth,documentPath) {
  const u=new URL("https://firestore.googleapis.com/v1/projects/"+encodeURIComponent(env.FIREBASE_PROJECT_ID)+"/databases/(default)/documents/"+documentPath);
  const r=await fetch(u,{headers:{authorization:"Bearer "+auth.token}});
  if(!r.ok) throw new Error(r.status===404?"Classora account or class not found":"Cannot verify Firebase ownership");
  const record=await r.json();
  return record.fields||{};
}
function planItems(kind,tier,period,seats) {
  if(!["student","teacher","class","school"].includes(kind)||!["plus","premium"].includes(tier)||!["monthly","annual"].includes(period))throw new Error("Invalid plan");
  const base=kind==="class"?35:kind==="school"?55:1;
  if(!Number.isSafeInteger(seats)||seats<base||seats>1000||(base===1&&seats!==1))throw new Error("Invalid seat quantity");
  const items=[{priceId:CATALOG[kind+"_"+tier][period],quantity:1}];
  const extra=seats-base;
  if(extra)items.push({priceId:CATALOG[kind==="class"?"extra_student":"extra_teacher"][period],quantity:extra});
  return {items,base,extra};
}
function itemString(items) {
  if(!Array.isArray(items)||items.length<1||items.length>2) return null;
  const parsed=items.map(x=>({id:asString(x?.priceId||x?.price_id||x?.price?.id),quantity:Number(x?.quantity)}));
  if(parsed.some(x=>!x.id||!Number.isSafeInteger(x.quantity)||x.quantity<1))return null;
  parsed.sort((a,b)=>a.id.localeCompare(b.id));
  return JSON.stringify(parsed);
}
async function prepare(req,env) {
  let auth; try {auth=await firebaseUser(req,env);}catch(e){return fail(e.message,401);}
  let data;try{data=await req.json();}catch{return fail("Invalid JSON");}
  const kind=data?.kind,tier=data?.tier,period=data?.period,seats=data?.seats??(kind==="class"?35:kind==="school"?55:1);
  let plan;try{plan=planItems(kind,tier,period,seats);}catch(e){return fail(e.message);}
  if(kind==="school")return fail("School verification and seat allocator not connected yet",403);
  const scopeId=kind==="class"?data.scopeId:null;
  if(kind==="class"&&!safeId(scopeId))return fail("Missing class ID",400);
  try {
    const me=await firestoreDoc(env,auth,"users/"+encodeURIComponent(auth.uid));
    const role=me.role?.stringValue;
    if(kind==="student"&&role!=="student")return fail("Student account required",403);
    if((kind==="teacher"||kind==="class")&&role!=="teacher")return fail("Teacher account required",403);
    if(kind==="class"){
      const classroom=await firestoreDoc(env,auth,"classes/"+encodeURIComponent(scopeId));
      if(classroom.ownerId?.stringValue!==auth.uid)return fail("Only class owner may purchase class seats",403);
    }
  }catch(e){return fail(e.message,403);}
  const scope=kind==="class"?"class_"+scopeId:"user_"+auth.uid;
  const current=await env.BILLING_DB.prepare("SELECT status FROM billing_entitlements WHERE scope = ?").bind(scope).first();
  if(current?.status==="active")return fail("Subscription already active; use a verified plan-change flow",409);
  const recent=await env.BILLING_DB.prepare("SELECT created_at FROM billing_intents WHERE uid=? ORDER BY created_at DESC LIMIT 1").bind(auth.uid).first();
  const now=Date.now();
  if(recent&&now-recent.created_at<20000)return fail("Please wait before starting another checkout",429);
  const id=crypto.randomUUID();
  await env.BILLING_DB.prepare("INSERT INTO billing_intents (id,uid,scope,kind,tier,period,seats,items_json,created_at,expires_at,status) VALUES (?,?,?,?,?,?,?,?,?,?,?)")
    .bind(id,auth.uid,scope,kind,tier,period,seats,itemString(plan.items),now,now+48*3600000,"pending").run();
  return json({ok:true,checkoutIntentId:id,items:plan.items,kind,tier,period,seats});
}
async function entitlements(req,env) {
  let auth;try{auth=await firebaseUser(req,env);}catch(e){return fail(e.message,401);}
  const rows=await env.BILLING_DB.prepare("SELECT scope,kind,tier,period,seats,status,active,period_end FROM billing_entitlements WHERE uid=?").bind(auth.uid).all();
  return json({ok:true,entitlements:rows.results||[]});
}
function hexBytes(hex) {
  if(!/^[0-9a-fA-F]{64}$/.test(hex))return null;
  return Uint8Array.from(hex.match(/.{2}/g),v=>parseInt(v,16));
}
function constantEqual(a,b) {if(!a||!b||a.length!==b.length)return false;let diff=0;for(let i=0;i<a.length;i++)diff|=a[i]^b[i];return diff===0;}
async function validateSignature(request,env,raw) {
  if(!env.PADDLE_SANDBOX_WEBHOOK_SECRET)return false;
  const head=request.headers.get("paddle-signature")||"";
  const entries=head.split(";").map(s=>s.trim().split("="));
  const ts=entries.find(x=>x[0]==="ts")?.[1];
  const signatures=entries.filter(x=>x[0]==="h1").map(x=>x[1]);
  if(!/^\d{10}$/.test(ts||"")||Math.abs(Date.now()-Number(ts)*1000)>300000||!signatures.length)return false;
  const key=await crypto.subtle.importKey("raw",encoder.encode(env.PADDLE_SANDBOX_WEBHOOK_SECRET),{name:"HMAC",hash:"SHA-256"},false,["sign"]);
  const signed=new Uint8Array(encoder.encode(ts+":").length+raw.byteLength);
  signed.set(encoder.encode(ts+":"),0);
  signed.set(new Uint8Array(raw),encoder.encode(ts+":").length);
  const hmac=new Uint8Array(await crypto.subtle.sign("HMAC",key,signed));
  return signatures.some(h=>constantEqual(hmac,hexBytes(h)));
}
async function webhook(req,env) {
  const raw=await req.arrayBuffer();
  if(raw.byteLength>262144)return fail("Payload too large",413);
  if(!await validateSignature(req,env,raw))return fail("Invalid Paddle signature",401);
  let event;try{event=JSON.parse(new TextDecoder().decode(raw));}catch{return fail("Invalid JSON");}
  const eventId=event?.event_id,type=event?.event_type,sub=event?.data;
  if(!safeId(eventId)||!type)return fail("Invalid Paddle event");
  if(!SUB_EVENTS.has(type))return json({ok:true,ignored:true});
  if(!safeId(sub?.id)||!sub.id.startsWith("sub_"))return fail("Invalid subscription");
  const intentId=sub?.custom_data?.classora_checkout_intent;
  // Only a checkout intent created by the authenticated server can grant access.
  // For subsequent lifecycle events Paddle custom_data should be retained. If missing,
  // obtain an existing subscription-to-intent mapping before modifying entitlements.
  const linked=await env.BILLING_DB.prepare("SELECT intent_id FROM billing_subscriptions WHERE id=?").bind(sub.id).first();
  const target=linked?.intent_id||intentId;
  const sent=await env.BILLING_DB.prepare("SELECT 1 FROM billing_events WHERE id=?").bind(eventId).first();
  if(sent)return json({ok:true,duplicate:true});
  if(!safeId(target))return json({ok:true,unlinked:true}); // no privileges; delivery may be reprocessed later
  const intent=await env.BILLING_DB.prepare("SELECT * FROM billing_intents WHERE id=?").bind(target).first();
  if(!intent||(!linked&&intent.expires_at<Date.now()))return json({ok:true,unlinked:true});
  if((linked&&linked.intent_id!==target)||
     (intent.subscription_id&&intent.subscription_id!==sub.id)||
     itemString(sub.items)!==intent.items_json){
      console.warn("Checkout mismatch",eventId,sub.id);
      return json({ok:true,rejected:true});
  }
  const eventMs=Date.parse(event.occurred_at);
  if(!Number.isFinite(eventMs))return fail("Invalid Paddle event timestamp");
  const validStates=["active","trialing","past_due","paused","canceled"];
  if(!validStates.includes(sub.status))return json({ok:true,unsupported:true});
  const status=sub.status,active=status==="active"?1:0;
  const periodEnd=sub.current_billing_period?.ends_at||null;
  const now=Date.now();
  // The batch executes as an atomic D1 transaction; events are deduplicated and
  // older Paddle deliveries cannot replace a newer subscription state.
  await env.BILLING_DB.batch([
    env.BILLING_DB.prepare("INSERT INTO billing_events (id,type,subscription_id,received_at) VALUES (?,?,?,?) ON CONFLICT(id) DO NOTHING").bind(eventId,type,sub.id,now),
    env.BILLING_DB.prepare("INSERT INTO billing_subscriptions (id,intent_id,uid,status,event_ms,period_end) VALUES (?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET status=excluded.status,event_ms=excluded.event_ms,period_end=excluded.period_end WHERE excluded.event_ms>=billing_subscriptions.event_ms")
      .bind(sub.id,target,intent.uid,status,eventMs,periodEnd),
    env.BILLING_DB.prepare("INSERT INTO billing_entitlements (scope,uid,kind,tier,period,seats,subscription_id,status,active,event_ms,period_end) VALUES (?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(scope) DO UPDATE SET status=excluded.status,active=excluded.active,event_ms=excluded.event_ms,period_end=excluded.period_end WHERE excluded.event_ms>=billing_entitlements.event_ms AND (billing_entitlements.subscription_id=excluded.subscription_id OR billing_entitlements.active=0)")
      .bind(intent.scope,intent.uid,intent.kind,intent.tier,intent.period,intent.seats,sub.id,status,active,eventMs,periodEnd),
    env.BILLING_DB.prepare("UPDATE billing_intents SET status='linked',subscription_id=? WHERE id=? AND (subscription_id IS NULL OR subscription_id=?)")
      .bind(sub.id,target,sub.id)
  ]);
  return json({ok:true});
}

export default {
  async fetch(req,env) {
    const url=new URL(req.url);
    const origin=req.headers.get("origin")||"";
    const cross=commonHeaders(origin,env.ALLOWED_ORIGIN);
    if(url.pathname==="/api/health"&&req.method==="GET")return json({ok:true,mode:"sandbox-only"},200,cross);
    if(req.method==="OPTIONS")return new Response(null,{status:origin===env.ALLOWED_ORIGIN?204:403,headers:cross});
    if(url.pathname==="/api/paddle/webhook"&&req.method==="POST"){
      try{return await webhook(req,env);}catch(e){console.error("Webhook exception",String(e));return fail("Webhook processing failed",500);}
    }
    if(origin!==env.ALLOWED_ORIGIN) return fail("Origin not allowed",403);
    if(url.pathname==="/api/checkout/prepare"&&req.method==="POST"){
      try{const r=await prepare(req,env);const h=new Headers(r.headers);for(const [k,v] of Object.entries(cross))h.set(k,v);return new Response(r.body,{status:r.status,headers:h});}
      catch(e){console.error("Checkout preparation failed",String(e));return json({ok:false,error:"Checkout temporarily unavailable"},500,cross);}
    }
    if(url.pathname==="/api/me/entitlements"&&req.method==="GET"){
      try{const r=await entitlements(req,env);const h=new Headers(r.headers);for(const [k,v] of Object.entries(cross))h.set(k,v);return new Response(r.body,{status:r.status,headers:h});}
      catch(e){console.error("Entitlement lookup failed",String(e));return json({ok:false,error:"Entitlements temporarily unavailable"},500,cross);}
    }
    return json({ok:false,error:"Not found"},404,cross);
  }
};