/* One-shot profile opening effects. Public viewers only read the public directory. */
(()=>{
'use strict';
const $=id=>document.getElementById(id);
const T=(ar,en)=>document.documentElement.lang==='ar'?ar:(window.ClassoraLocale?.tFor?.(document.documentElement.lang||'en',en)||en);
const e=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls||'';if(text!==undefined)n.textContent=String(text);return n};
const button=(text,cls='cl236-secondary')=>{const n=e('button',cls,text);n.type='button';return n};
const effects=new Set(['flame','lightning','ice','plasma','rocket','comet','champion','starlight','aura','supernova','vortex','tatreez']);
const timers=new Map();
function stop(host){if(!host)return;clearTimeout(timers.get(host));timers.delete(host);host.querySelectorAll(':scope > .cl237-scene').forEach(n=>n.remove());host.classList.remove('cl237-scene-host')}
function motionAllowed(){return !matchMedia('(prefers-reduced-motion: reduce)').matches&&!document.body.classList.contains('reduce-motion')&&$('settingsMotionToggle')?.checked!==false}
function play(host,id){
 stop(host);if(!host||!effects.has(id)||!motionAllowed()||document.hidden)return;
 host.classList.add('cl237-scene-host');
 const scene=e('div','cl237-scene scene-'+id);scene.setAttribute('aria-hidden','true');
 scene.append(e('div','cl237-scene-halo'),e('div','cl237-scene-rays'));
 for(let n=0;n<18;n++){
  const p=e('i','cl237-particle'+(id==='tatreez'?' stitch':''));
  p.style.setProperty('--n',n);p.style.setProperty('--x',(8+(n*37)%84)+'%');p.style.setProperty('--dx',((n%2?-1:1)*(25+n*4))+'px');scene.append(p);
 }
 if(id==='champion'){
  const crown=e('span','cl237-crown');crown.innerHTML='<svg viewBox="0 0 100 70" fill="none" stroke="currentColor" stroke-width="3"><path d="m13 18 13 34h48l13-34-24 13L50 8 37 31 13 18Zm15 43h44"/></svg>';scene.append(crown);
 }
 host.append(scene);timers.set(host,setTimeout(()=>stop(host),3600));
}
let publicDialog=null,unwatch=null,publicOwner='';
function closePublic(){publicDialog?.close()}
function openPublic(uid){
 if(!uid||!window.classoraWatchPublicProfile)return;
 const old=publicDialog;if(old)old.close();if(unwatch){unwatch();unwatch=null}
 const dialog=e('dialog','cl236-gif-dialog cl237-public-dialog');publicDialog=dialog;publicOwner=window.PythagorasiUser?.uid||'';
 dialog.setAttribute('aria-labelledby','cl237PublicTitle');
 const head=e('header','cl236-dialog-head');const title=e('h2','',T('الملف الشخصي','Profile'));title.id='cl237PublicTitle';
 const close=button('×','cl236-close');close.setAttribute('aria-label',T('إغلاق','Close'));close.onclick=()=>dialog.close();head.append(title,close);
 const card=e('section','cl237-public-card');const status=e('p','cl236-status',T('جاري التحميل…','Loading...'));status.setAttribute('role','status');card.append(status);dialog.append(head,card);
 const cleanup=()=>{stop(card);dialog.remove();if(publicDialog===dialog){publicDialog=null;unwatch?.();unwatch=null}};
 dialog.addEventListener('close',cleanup,{once:true});
 dialog.addEventListener('click',ev=>{if(ev.target===dialog){const r=dialog.getBoundingClientRect();if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)dialog.close()}});
 document.body.append(dialog);dialog.showModal();close.focus();
 let shown='';
 const detach=window.classoraWatchPublicProfile(uid,p=>{
  if(publicDialog!==dialog||!dialog.open)return;stop(card);card.replaceChildren();
  if(!p){card.append(e('p','cl236-status',T('الملف الشخصي غير متاح.','Profile unavailable.')));return}
  const effect=effects.has(p.profileEffect)?p.profileEffect:'none';
  const avatar=window.ClassoraProfileEffects?.avatar(p,effect)||e('span','cl236-avatar',p.displayName[0]||'?');
  const name=e('h3','',p.displayName);name.setAttribute('data-no-translate','');
  const id=e('small','cl237-public-id',p.profileId?'ID · '+p.profileId:'');id.setAttribute('data-no-translate','');
  const role=e('p','cl236-note',p.role==='teacher'?T('معلم','Teacher'):T('طالب','Student'));
  card.append(avatar,name,id,role);
  if(effect!=='none'){
   const label=window.ClassoraProfileEffects?.names[effect];if(label)card.append(e('p','cl237-effect-name',T(...label)));
   const replay=button(T('إعادة التأثير','Replay effect'));replay.onclick=()=>play(card,effect);card.append(replay);
   if(shown!==effect)play(card,effect);
  }
  shown=effect;
 },()=>{if(publicDialog===dialog){stop(card);card.replaceChildren(e('p','cl236-status',T('تعذر تحميل الملف. أغلقه وحاول مجددًا.','Could not load this profile. Close it and retry.')))}});
 if(publicDialog===dialog)unwatch=detach;else detach?.();
}
function stopAll(){for(const host of [...timers.keys()])stop(host)}
function init(){
 for(const [id,selector] of [['profileModal','.profile-hero'],['settingsModal','.settings-profile-row']]){
  const modal=$(id);if(!modal)continue;let wasOpen=false;
  const update=()=>{const open=modal.classList.contains('open'),host=modal.querySelector(selector);if(open&&!wasOpen)play(host,window.PythagorasiUser?.questShop?.equipped||'none');if(!open)stop(host);wasOpen=open};
  new MutationObserver(update).observe(modal,{attributes:true,attributeFilter:['class']});update();
 }
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAll()});
 document.addEventListener('change',event=>{if(event.target?.id==='settingsMotionToggle'&&!event.target.checked)stopAll()});
 document.addEventListener('classora-auth-settled',()=>{stopAll();if(publicDialog&&publicOwner!==window.PythagorasiUser?.uid)closePublic()});
 window.addEventListener('pagehide',()=>{stopAll();closePublic()});
}
window.ClassoraProfileScenes={play,stop,openPublic};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
