/* Classora v205 — close periodic iframe completely, restore responsive Lobby.
   No synthetic navigation clicks; no persistent scroll/pointer locks. */
(()=>{
 'use strict';
 if(window.__classoraReturnToLobbyV205)return;
 const PAGE_ID='periodic-table';
 let transitioning=false,wasPeriodic=location.hash==='#'+PAGE_ID;
 const page=()=>document.getElementById(PAGE_ID);
 function openSurface(){
   const el=page();if(!el)return;
   el.inert=false;el.removeAttribute('inert');el.removeAttribute('aria-hidden');
   for(const name of ['display','visibility','pointer-events'])el.style.removeProperty(name);
   const frame=el.querySelector('.classora-subject-frame');
   if(frame){frame.inert=false;frame.removeAttribute('inert');frame.removeAttribute('aria-hidden');frame.style.removeProperty('pointer-events')}
 }
 function hideSurface(){
   const el=page();if(!el)return;
   // A hidden fixed iframe can still trap clicks, focus and wheel events.
   const frame=el.querySelector('.classora-subject-frame');
   if(frame){if(document.activeElement===frame)frame.blur();frame.inert=true;frame.setAttribute('aria-hidden','true');frame.style.setProperty('pointer-events','none','important')}
   el.inert=true;el.setAttribute('aria-hidden','true');
   el.style.setProperty('display','none','important');
   el.style.setProperty('visibility','hidden','important');
   el.style.setProperty('pointer-events','none','important');
 }
 function closeCurriculum(){
   const modal=document.getElementById('classoraCurriculumModal')||document.querySelector('.classora-curriculum-modal');
   if(!modal)return;
   if(modal.classList.contains('open')){
     const close=modal.querySelector('.classora-curriculum-close');
     if(close)close.click();else modal.classList.remove('open');
   }
   // An earlier Science lesson was suspended with display:none!important.
   if(modal.style.getPropertyValue('display')==='none'){
     modal.classList.remove('open');
     modal.style.removeProperty('display');
     modal.removeAttribute('aria-hidden');
   }
 }
 function restoreLobby(){
   const lobby=document.getElementById('platformLobby');
   if(!lobby||!document.body)return false;
   if(transitioning)return true;
   transitioning=true;
   try{
     sessionStorage.setItem('classora_subject_origin','lobby');
   }catch{}
   try{
     closeCurriculum();
     document.documentElement.classList.remove('classora-periodic-active');
     document.body.classList.remove('classora-periodic-active','classora-pythagoras-active');
     if(location.hash==='#'+PAGE_ID){
       try{history.replaceState(history.state,'',location.pathname+location.search+'#platformLobby')}
       catch{location.hash='#platformLobby'}
     }
     hideSurface(); // key fix: removing "display" alone left an interactive cover
     document.documentElement.style.removeProperty('overflow');
     document.body.style.removeProperty('overflow');
     lobby.hidden=false;lobby.inert=false;
     lobby.classList.remove('hidden','is-hidden');
     lobby.style.removeProperty('display');
     lobby.style.removeProperty('visibility');
     lobby.style.removeProperty('pointer-events');
     lobby.style.removeProperty('overflow');
     // Highlight the Lobby dock item without calling .click(), which triggered
     // the old subject-return handler and sometimes re-locked scrolling.
     const nav=document.getElementById('classoraMobilePageNav');
     nav?.querySelectorAll('button').forEach(b=>{
       const active=b.id==='classoraMobileLobbyBtn';
       b.classList.toggle('is-active',active);
       if(active)b.setAttribute('aria-current','page');
       else b.removeAttribute('aria-current');
     });
     wasPeriodic=false;
     requestAnimationFrame(()=>{
       const node=document.getElementById('platformLobby');
       if(!node||location.hash==='#'+PAGE_ID)return;
       const style=getComputedStyle(node);
       if(style.pointerEvents==='none')node.style.setProperty('pointer-events','auto','important');
       if(style.visibility==='hidden')node.style.setProperty('visibility','visible','important');
       if(style.display==='none'&&document.body.classList.contains('classora-authenticated'))node.style.setProperty('display','block','important');
       if(getComputedStyle(node).overflowY==='hidden')node.style.setProperty('overflow-y','auto','important');
     });
     return true;
   }finally{transitioning=false}
 }
 window.__classoraReturnToLobbyV205=restoreLobby;
 window.addEventListener('message',e=>{
   if(e.origin===location.origin&&e.data?.type==='classora-go-lobby-v205'&&e.data.source==='periodic-table')restoreLobby();
 });
 window.addEventListener('hashchange',()=>{
   if(location.hash==='#'+PAGE_ID){wasPeriodic=true;openSurface();return}
   if(wasPeriodic||document.body?.classList.contains('classora-periodic-active'))restoreLobby();
 });
 function repairStaleReturn(){
   const body=document.body,el=page();
   if(!body||!el||location.hash==='#'+PAGE_ID)return;
   const staleFlag=body.classList.contains('classora-periodic-active')||document.documentElement.classList.contains('classora-periodic-active');
   const orphanVisible=getComputedStyle(el).display!=='none';
   if(staleFlag||orphanVisible)restoreLobby();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',repairStaleReturn,{once:true});
 else requestAnimationFrame(repairStaleReturn);
 window.addEventListener('pageshow',repairStaleReturn);
})();
