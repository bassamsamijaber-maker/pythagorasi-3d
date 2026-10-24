import './classora-settings-polish-v241.js?v=242';
import './classora-member-hub-v239.js?v=263';
import './classora-device-sessions-v239.js?v=239';
import {getApps} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import {getAuth,onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';
import {getFirestore,doc,getDoc,onSnapshot,setDoc} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js';
import {getFunctions,httpsCallable} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-functions.js';
import {resolveMembership,FEATURES} from './classora-membership-access-v238.js?v=238';
import {memberText as T} from './classora-member-words-v238.js?v=238';
const app=getApps()[0];
if(app)install(app);
function install(app){
 const auth=getAuth(app),db=getFirestore(app),N=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n};
 let drafts={},owner='',generation=0,profile=null,admin=false,grant=null,trial=null,unsub=[],data={},active='focus',timer=null,remaining=1500,deadline=0,running=false,space,body,status,trialCard;
 const access=()=>resolveMembership({uid:owner,role:profile?.role,admin,grant,trial});
 const has=f=>access().features.includes(f);
 const button=(key,fn)=>{const b=N('button','',T(key));b.type='button';b.onclick=fn;return b};
 const url=()=> './subscriptions.html?lang='+encodeURIComponent(document.documentElement.lang||'ar');
 function stopTimer(){clearInterval(timer);timer=null;running=false;deadline=0}
 async function save(patch){
  const who=owner,gen=generation;if(!who||auth.currentUser?.uid!==who)throw Error('account');
  await setDoc(doc(db,'users',who),{memberWorkspace:patch},{merge:true});
  if(gen===generation){data={...data,...patch};if(status)status.textContent=T('saved')}
 }
 async function attempt(patch,feature){if(!has(feature)){if(status)status.textContent=T('locked');return}try{await save(patch)}catch{if(status)status.textContent=T('error')}}
 function applyStyle(){const chat=document.getElementById('chatMessages');if(chat)chat.dataset.memberTheme=has('chatStyle')&&['aurora','sunrise','ocean'].includes(data.chatStyle)?data.chatStyle:'normal'}
 function drawTool(){
  if(!body)return;body.replaceChildren();status=N('p','cl238-access-status');status.setAttribute('role','status');
  if(!has(active)){body.append(N('p','',T('locked')));const a=N('a','cl238-upgrade',T('upgrade'));a.href=url();body.append(a,status);return}
  if(active==='focus'){
   const clock=N('div','cl238-focus');clock.setAttribute('role','timer');
   const paint=()=>{const target=body.querySelector('.cl238-focus')||clock;target.textContent=String(Math.floor(remaining/60)).padStart(2,'0')+':'+String(remaining%60).padStart(2,'0')};paint();
   const controls=N('div','cl238-tools'),start=button(running?'pause':'start',()=>{
    if(!has('focus'))return;
    if(running){remaining=Math.max(0,Math.ceil((deadline-Date.now())/1000));stopTimer();start.textContent=T('start');paint();return}
    if(remaining===0)remaining=1500;deadline=Date.now()+remaining*1000;running=true;start.textContent=T('pause');
    clearInterval(timer);timer=setInterval(()=>{if(!has('focus')){stopTimer();refresh();return}remaining=Math.max(0,Math.ceil((deadline-Date.now())/1000));paint();if(!remaining){stopTimer();start.textContent=T('start')}},1000);
   });
   controls.append(start,button('reset',()=>{stopTimer();remaining=1500;paint();start.textContent=T('start')}));body.append(clock,controls);
  }else if(active==='notes'){
   const input=N('textarea');input.maxLength=12000;input.value=String(drafts.notes??data.notes??'');input.oninput=()=>{drafts.notes=input.value};input.setAttribute('aria-label',T('notes'));
   body.append(input,button('save',()=>attempt({notes:input.value},'notes')));
  }else if(active==='planner'||active==='library'){
   const kind=active,rows=Array.isArray(data[kind])?data[kind].slice(0,60):[],list=N('ul');
   const input=N('input');input.maxLength=kind==='library'?1000:240;input.type=kind==='library'?'url':'text';input.placeholder=T(kind==='library'?'url':'task');input.setAttribute('aria-label',input.placeholder);
   const render=()=>{list.replaceChildren();if(!rows.length)list.append(N('p','',T('empty')));rows.forEach((r,i)=>{const li=N('li'),label=N(kind==='library'?'a':'span','',String(r.text||''));if(kind==='library'){try{const u=new URL(r.text);if(!['https:','http:'].includes(u.protocol))return;label.href=u.href;label.target='_blank';label.rel='noopener noreferrer'}catch{return}}else{const check=N('input');check.type='checkbox';check.checked=r.done===true;check.setAttribute('aria-label',r.text);check.onchange=()=>{rows[i]={...r,done:check.checked};attempt({[kind]:rows},kind)};li.append(check)}li.append(label,button('remove',async()=>{rows.splice(i,1);await attempt({[kind]:rows},kind);render()}));list.append(li)})};
   const add=button('add',async()=>{const value=input.value.trim();if(!value||rows.length>=60)return;if(kind==='library'){try{const u=new URL(value);if(!['https:','http:'].includes(u.protocol))throw Error()}catch{status.textContent=T('error');return}}rows.push({text:value,done:false});await attempt({[kind]:rows},kind);input.value='';render()});render();body.append(input,add,list);
  }else if(active==='chatStyle'){
   const picker=N('select');picker.setAttribute('aria-label',T('chatStyle'));for(const key of ['normal','aurora','sunrise','ocean']){const option=N('option','',T(key));option.value=key;picker.append(option)}picker.value=data.chatStyle||'normal';body.append(picker,button('save',async()=>{await attempt({chatStyle:picker.value},'chatStyle');applyStyle()}));
  }
  body.append(status);
 }
 function refresh(){
  if(!has('focus'))stopTimer();applyStyle();
  const host=document.querySelector('#classoraMemberHubContent');
  if(space&&!space.isConnected)space=null;
  if(host&&!space){space=N('section','cl238-workspace');space.id='classoraMemberSpace';space.dataset.noTranslate='';host.append(space)}
  if(space){space.hidden=!owner;if(owner){space.replaceChildren(N('h3','',T('title')));const tabs=N('div','cl238-tools');for(const f of FEATURES){const b=button(f,()=>{if(active!==f){stopTimer();active=f;drawTool()}});b.setAttribute('aria-pressed',String(active===f));tabs.append(b)}body=N('div');space.append(tabs,body);drawTool()}}
  refreshTrial();document.dispatchEvent(new CustomEvent('classora:membership-updated',{detail:access()}));
 }
 function refreshTrial(){
  const host=document.querySelector('.cl-pricing');if(!host)return;
  if(!trialCard){trialCard=N('section','cl238-trial');host.before(trialCard)}
  trialCard.replaceChildren(N('h2','',T('trialTitle')),N('p','',T('trialInfo')));
  const message=N('p','cl238-access-status');message.setAttribute('role','status');
  if(trial){message.textContent=trial.expiresAt?.toMillis?.()>Date.now()?T('trialActive')+' '+trial.expiresAt.toDate().toLocaleDateString(document.documentElement.lang):T('trialUsed');trialCard.append(message);return}
  const start=button('trialStart',async()=>{
   if(!owner){message.textContent=T('signIn');return}const who=owner;start.disabled=true;
   try{await httpsCallable(getFunctions(app),'startMembershipTrial')({});if(who===owner)message.textContent=T('saved')}
   catch(e){if(who===owner)message.textContent=e.code==='functions/already-exists'?T('trialUsed'):T('trialPending')}
   finally{if(who===owner)start.disabled=false}
  });start.disabled=true;message.textContent=T('trialPending');trialCard.append(start,message); // Enable only after callable + rules deployment is verified.
 }
 onAuthStateChanged(auth,async user=>{
  const gen=++generation;unsub.forEach(fn=>fn());unsub=[];stopTimer();owner='';profile=null;admin=false;grant=trial=null;data={};drafts={};remaining=1500;refresh();
  if(!user||user.isAnonymous)return;
  try{
   const [p,s,o]=await Promise.all([getDoc(doc(db,'users',user.uid)),getDoc(doc(db,'staffAccess',user.uid)).catch(()=>null),getDoc(doc(db,'profileIds','3228667330')).catch(()=>null)]);
   if(gen!==generation||!p.exists())return;owner=user.uid;profile=p.data();data=profile.memberWorkspace||{};admin=o?.data()?.uid===owner||(s?.data()?.active===true&&s.data().role==='admin');
   for(const [collection,key]of [['membershipGrants','grant'],['membershipTrials','trial']])unsub.push(onSnapshot(doc(db,collection,owner),snap=>{if(gen!==generation)return;if(key==='grant')grant=snap.data()||null;else trial=snap.data()||null;refresh()},()=>{if(gen!==generation)return;if(key==='grant')grant=null;else trial=null;refresh()}));
   refresh();
  }catch{if(gen===generation)refresh()}
 });
 window.ClassoraMembership={get:()=>({...access(),role:profile?.role||null,admin}),openTool:(f)=>{if(FEATURES.includes(f)){stopTimer();active=f;refresh()}}};
 document.addEventListener('classora:benefits-drawn',refresh);
 document.addEventListener('classora:open-member-tool',e=>{if(FEATURES.includes(e.detail?.feature)){stopTimer();active=e.detail.feature;refresh()}});
 new MutationObserver(refresh).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh()});
 let lastSignature='';setInterval(()=>{const signature=JSON.stringify(access());if(signature!==lastSignature){lastSignature=signature;refresh()}},15000);
}
