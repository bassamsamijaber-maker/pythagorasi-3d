/* Classora v204: one explicit destination after closing the periodic table.
 * Called by the same-origin table iframe; never reopens Science/Curriculum. */
(()=>{
 'use strict';
 if(window.__classoraReturnToLobbyV204)return;
 function toLobby(){
   const body=document.body,html=document.documentElement;
   const lobby=document.getElementById('platformLobby');
   if(!body||!lobby)return false;
   try{sessionStorage.setItem('classora_subject_origin','lobby')}catch{}
   const curriculum=document.querySelector('.classora-curriculum-modal');
   if(curriculum?.classList.contains('open')){
     const close=curriculum.querySelector('.classora-curriculum-close');
     if(close)close.click();
     else curriculum.classList.remove('open');
   }
   if(curriculum?.style.getPropertyValue('display')==='none'){
     curriculum.style.removeProperty('display');
     curriculum.removeAttribute('aria-hidden');
     curriculum.classList.remove('open');
   }
   // Clear the :target fullscreen subject and the CSS flags that hide Lobby.
   html.classList.remove('classora-periodic-active');
   body.classList.remove('classora-periodic-active','classora-pythagoras-active');
   html.style.removeProperty('overflow');body.style.removeProperty('overflow');
   const periodic=document.getElementById('periodic-table');
   periodic?.classList.remove('open','active');
   if(periodic)periodic.style.removeProperty('display');
   if(location.hash==='#periodic-table'){
     try{history.replaceState(history.state,'',location.pathname+location.search+'#platformLobby')}
     catch{location.hash='platformLobby'}
   }
   lobby.removeAttribute('hidden');
   lobby.classList.remove('hidden','is-hidden');
   lobby.style.removeProperty('visibility');
   lobby.style.removeProperty('pointer-events');
   lobby.style.removeProperty('display');
   const lobbyButton=document.getElementById('classoraMobileLobbyBtn');
   if(lobbyButton?.isConnected)lobbyButton.click();
   // An older navigation implementation may leave inline styles behind.
   requestAnimationFrame(()=>{
     if(!document.body?.classList.contains('classora-authenticated'))return;
     if(getComputedStyle(lobby).visibility==='hidden')lobby.style.setProperty('visibility','visible','important');
     if(getComputedStyle(lobby).display==='none')lobby.style.setProperty('display','block','important');
     window.scrollTo({top:0,left:0,behavior:'instant'});
   });
   return true;
 }
 window.__classoraReturnToLobbyV204=toLobby;
 // Unique message, only for the new child if cross-frame direct access is unavailable.
 window.addEventListener('message',e=>{
   if(e.origin!==location.origin)return;
   if(e.data?.type==='classora-go-lobby-v204'&&e.data.source==='periodic-table')toLobby();
 });
})();