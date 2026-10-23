import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const {parseHTML}=await import(process.env.CLASSORA_TEST_DOM_MODULE);
const read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const resolver=await import('data:text/javascript;base64,'+Buffer.from(read('assets/classora-membership-access-v238.js')).toString('base64'));
const now=1000,stamp=n=>({toMillis:()=>n});const base={uid:'a',role:'student',now};const grant={uid:'a',kind:'student',tier:'premium',revoked:false,expiresAt:stamp(2000)};
assert.equal(resolver.resolveMembership({...base,grant}).features.length,5);
for(const bad of [{...grant,uid:'b'},{...grant,kind:'teacher'},{...grant,expiresAt:stamp(now)},{...grant,revoked:true}])assert.equal(resolver.resolveMembership({...base,grant:bad}).features.length,0);
assert.deepEqual(resolver.resolveMembership({...base,grant:{...grant,features:['notes','injected']}}).features,['notes']);
assert.equal(resolver.resolveMembership({...base,grant:{...grant,tier:'plus'}}).features.includes('chatStyle'),false);
assert.equal(resolver.resolveMembership({...base,trial:grant}).features.length,5);
assert.equal(resolver.resolveMembership({...base,uid:'',admin:true}).features.length,0);
console.log('PASS membership role/UID binding, expiry, revoked grants, feature allowlist and trial resolution');
// Exercise actual mission handlers with deterministic question bank and DOM.
const {window,document}=parseHTML('<html lang="en"><body><main></main></body></html>');let completions=0,bankSize=5;
window.classoraAssessment={generate:()=>({questions:Array.from({length:bankSize},(_,i)=>({prompt:'Question '+i,type:'mcq',options:['right','wrong'],answer:'right'}))})};
const ctx=vm.createContext({window,document,console,Set,language:()=> 'en',owned:()=> 'a',L:(_a,e)=>e,byId:id=>document.getElementById(id),
 el:(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls;if(text)n.textContent=text;return n},button:(text,cls)=>{const b=document.createElement('button');b.textContent=text;b.className=cls;return b},svg:()=>'',
 progress:()=>0,gainTopic:()=>true,display:t=>t.title,student:()=>true,questSkipsLeft:()=>0,month:()=>'',state:()=>({}),finish:()=>{completions++},notify:()=>{},updateBeauty:()=>{},rewardClaimed:()=>false});
const source=read('assets/classora-quest-map-v223.js');const a=source.indexOf('function question('),b=source.indexOf('function finish(',a);
vm.runInContext("let challenge=null;const started=new Set(['topic|0']),opened=new Set();const topic={value:'topic',title:'Test'};const side=document.querySelector('main');function draw(){side.replaceChildren();mission(side,topic,{topics:[topic]})}\n"+source.slice(a,b)+'\ndraw()',ctx);
const clickRight=()=>[...document.querySelectorAll('.cl223-answer')].find(b=>b.textContent==='right').click();
for(let i=0;i<4;i++){assert.equal(document.querySelector('.cl223-question').textContent,'Question '+i);clickRight();assert.equal(completions,0)}
const fifth=[...document.querySelectorAll('.cl223-answer')].find(b=>b.textContent==='right');fifth.click();fifth.click();assert.equal(completions,1);
bankSize=4;vm.runInContext('challenge=null;draw()',ctx);assert.equal(document.querySelectorAll('.cl223-answer').length,0);assert(!document.body.textContent.includes('I finished practicing'));
console.log('PASS five distinct answers required, stale/double clicks blocked, insufficient bank cannot self-complete');
// Consent: acceptance is persisted before dismiss; a different device trusts account record.
const {window:w,document:d}=parseHTML('<html lang="en"><body><div id="authGate"></div></body></html>');w.requestAnimationFrame=fn=>fn();let writes=0,fail=false;w.classoraSaveLegalAcceptance=async()=>{writes++;if(fail)throw Error('offline')};w.PythagorasiUser={uid:'owner'};
const values=new Map(),storage={getItem:k=>values.get(k)||null,setItem:(k,v)=>values.set(k,v)};
const legalCtx=vm.createContext({window:w,document:d,console,localStorage:storage,sessionStorage:storage,MutationObserver:w.MutationObserver,navigator:{userAgent:'Android Mobile'},Date});
const legal=read('assets/classora-legal-v124.js').replace(/^import .*;\s*$/mg,'').replace('export function installClassoraLegal','function installClassoraLegal');
vm.runInContext(legal+'\nwindow.legal=installClassoraLegal()',legalCtx);
const flush=async()=>{for(let i=0;i<12;i++)await Promise.resolve()};
await w.legal.maybeShow({uid:'owner',profile:{}});assert.equal(d.getElementById('classoraLegalModal').hidden,false);
const check=d.getElementById('classoraLegalRead');assert.equal(check.disabled,false);check.checked=true;check.dispatchEvent(new w.Event('change'));
fail=true;d.querySelector('.classora-legal-continue').click();await flush();assert.equal(d.getElementById('classoraLegalModal').hidden,false);assert.equal(values.size,0);
fail=false;d.querySelector('.classora-legal-continue').click();await flush();assert.equal(d.getElementById('classoraLegalModal').hidden,true);assert.equal(writes,2);
values.clear();await w.legal.maybeShow({uid:'owner',profile:{legalAcceptance:{accepted:true}}});assert.equal(d.getElementById('classoraLegalModal').hidden,true);
await w.legal.maybeShow({uid:'other',profile:{}});assert.equal(d.getElementById('classoraLegalModal').hidden,false);
console.log('PASS mobile consent, save failure retry, durable account acceptance and new-account isolation');
// Trial callable: server-side immutable creation; parallel attempts are handled by transaction.
let stored=null,handler;const fakeDb={doc:path=>path,runTransaction:fn=>fn({get:async path=>path.startsWith('users/')?{exists:true,data:()=>({role:'student'})}:{exists:!!stored},create:(_r,v)=>{stored=v}})};
const functionCtx=vm.createContext({exports:{},db:fakeDb,require:name=>name.endsWith('/https')?{onCall:(_o,fn)=>(handler=fn),HttpsError:class extends Error{constructor(code,msg){super(msg);this.code=code}}}:{Timestamp:{now:()=>stamp(100000),fromMillis:stamp}}});
const backend=read('functions/index.js');vm.runInContext(backend.slice(backend.indexOf('// One non-renewing')),functionCtx);
await assert.rejects(()=>handler({}),e=>e.code==='unauthenticated');
await handler({auth:{uid:'a',token:{firebase:{sign_in_provider:'password'}}}});assert.equal(stored.expiresAt.toMillis()-stored.grantedAt.toMillis(),7*86400000);
await assert.rejects(()=>handler({auth:{uid:'a',token:{}}}),e=>e.code==='already-exists');
console.log('PASS authenticated server trial issuance, exact seven-day expiry and repeat rejection (mock transaction, not emulator)');
const html=read('index.html'),slice=(from,to)=>html.slice(html.indexOf(from),html.indexOf(to,html.indexOf(from)));
const {window:mw,document:md}=parseHTML('<html><body><div class="modal open" id="back"><span></span></div><dialog open id="front"><button>OK</button></dialog><div class="modal open hidden" id="stale"></div><nav id="classoraMobilePageNav"><button>Chat</button></nav></body></html>');
const mobile=vm.createContext({document:md,Element:mw.Element,getComputedStyle:()=>({display:'block'})});
vm.runInContext(slice('function classoraOpenOverlays(){','function classoraLockBackground(){')+slice('function classoraAllowScrollableOverlay(event){','function classoraResizeEquation3D(){'),mobile);
assert.equal(mobile.classoraOpenOverlays().length,2);
let prevented=false;mobile.classoraStopBackgroundScroll({target:md.querySelector('#front button'),cancelable:true,preventDefault:()=>prevented=true});assert.equal(prevented,false);
mobile.classoraStopBackgroundScroll({target:md.querySelector('nav button'),cancelable:true,preventDefault:()=>prevented=true});assert.equal(prevented,false);
mobile.classoraStopBackgroundScroll({target:md.body,cancelable:true,preventDefault:()=>prevented=true});assert.equal(prevented,true);
console.log('PASS top-layer touch/dock interaction, hidden-overlay filtering and background scroll guard');
