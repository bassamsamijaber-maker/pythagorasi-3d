/* Classora v203 - return to actual lobby after leaving a science activity.
   Only responds to a deliberate science exit and does not change other navigation. */
(()=>{
 'use strict';
 if(window.__classoraScienceExit203)return;
 window.__classoraScienceExit203=true;
 let queued=false;
 function recoverLobby(){
  const body=document.body,html=document.documentElement,lobby=document.getElementById('platformLobby');
  if(!body||!lobby)return;
  const curriculum=document.querySelector('.classora-curriculum-modal');
  if(curriculum?.classList.contains('open')){
   // Calls its native cleanup so a suspended Science lesson does not leave an invisible modal.
   const close=curriculum.querySelector('.classora-curriculum-close');
   if(close)close.click();
   else {
    curriculum.classList.remove('open');
    curriculum.style.removeProperty('display');
    curriculum.removeAttribute('aria-hidden');
   }
  }
  html.classList.remove('classora-periodic-active');
  body.classList.remove('classora-periodic-active','classora-pythagoras-active');
  html.style.removeProperty('overflow');
  body.style.removeProperty('overflow');
  if(location.hash==='#periodic-table'){
   try{history.replaceState(history.state,'',location.pathname+location.search+'#platformLobby')}catch{}
  }
  lobby.classList.remove('hidden');
  lobby.removeAttribute('hidden');
  lobby.style.removeProperty('visibility');
  lobby.style.removeProperty('pointer-events');
  // Use the application's own Lobby navigation rather than inventing another page.
  const lobbyButton=document.getElementById('classoraMobileLobbyBtn');
  if(lobbyButton&&lobbyButton.isConnected)lobbyButton.click();
  if(getComputedStyle(lobby).display==='none'&&body.classList.contains('classora-authenticated')){
   lobby.style.setProperty('display','block','important');
  }
 }
 function schedule(){
  if(queued)return;
  queued=true;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{queued=false;recoverLobby()}));
 }
 window.addEventListener('message',e=>{
  if(e.origin!==location.origin)return;
  if(e.data?.type==='classora-close-subject'&&e.data.subject==='periodic-table')schedule();
 });
 document.addEventListener('classora:science-exit',schedule);
 window.addEventListener('hashchange',()=>{
  if(location.hash!=='#periodic-table'&&document.body?.classList.contains('classora-periodic-active'))schedule();
 });
})();
