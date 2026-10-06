export function mountReturnNavigation(language){
 const L=(a,e)=>language()==='ar'?a:e;
 const arrow='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="m10 5-7 7 7 7M4 12h17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

 const CLASSORA_FLOATING_MOBILE_LOBBY='classoraFloatingMobileLobby';
 function ensureFloatingMobileLobby(){
  let style=document.getElementById('classoraFloatingLobbyStyle');
  if(!style){
   style=document.createElement('style');style.id='classoraFloatingLobbyStyle';
   style.textContent=`
    #${CLASSORA_FLOATING_MOBILE_LOBBY}{display:none}
    @media(max-width:760px){
      #${CLASSORA_FLOATING_MOBILE_LOBBY}{
        position:fixed!important;
        inset-inline-start:max(10px,env(safe-area-inset-left))!important;
        bottom:calc(max(12px,env(safe-area-inset-bottom)) + 72px)!important;
        z-index:2147483646!important;
        min-width:92px!important;
        min-height:48px!important;
        display:none!important;
        align-items:center!important;
        justify-content:center!important;
        gap:7px!important;
        padding:10px 14px!important;
        border:1px solid rgba(151,218,255,.24)!important;
        border-radius:16px!important;
        background:rgba(5,18,29,.94)!important;
        color:#f2fbff!important;
        box-shadow:0 12px 34px rgba(0,0,0,.5),0 0 24px rgba(72,191,255,.1)!important;
        backdrop-filter:blur(18px)!important;
        -webkit-backdrop-filter:blur(18px)!important;
        font:800 13px/1 system-ui,-apple-system,"Segoe UI",Arial,sans-serif!important;
        touch-action:manipulation!important;
        pointer-events:auto!important;
        -webkit-tap-highlight-color:transparent!important;
      }
      #${CLASSORA_FLOATING_MOBILE_LOBBY}.show{display:inline-flex!important}
      #${CLASSORA_FLOATING_MOBILE_LOBBY}:active{transform:scale(.96)!important}
      #${CLASSORA_FLOATING_MOBILE_LOBBY} svg{width:20px!important;height:20px!important;flex:0 0 auto!important}
    }`;
   document.head.append(style);
  }
  let btn=document.getElementById(CLASSORA_FLOATING_MOBILE_LOBBY);
  if(!btn){
   btn=document.createElement('button');btn.id=CLASSORA_FLOATING_MOBILE_LOBBY;btn.type='button';
   btn.dataset.noTranslate='';
   btn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10M9.5 20v-6h5v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span></span>';
   btn.addEventListener('click',event=>{
    event.preventDefault();event.stopPropagation();
    const canonical=document.getElementById('classoraMobileLobbyBtn');
    if(canonical&&canonical!==btn){canonical.click();return}
    if(typeof window.classoraGoLobby==='function'){window.classoraGoLobby();return}
    const fallback=document.getElementById('mobileReturnLobbyBtn')||document.getElementById('returnLobbyBtn');
    if(fallback){fallback.click();return}
    try{location.hash='platformLobby'}catch{}
   });
   document.body.append(btn);
  }
  const label=btn.querySelector('span');if(label)label.textContent=L('اللوبي','Lobby');
  btn.setAttribute('aria-label',L('الرجوع إلى اللوبي','Back to lobby'));
  btn.title=L('الرجوع إلى المكان السابق','Back to previous place');
  return btn;
 }
 function syncFloatingMobileLobby(){
  const btn=ensureFloatingMobileLobby();
  const phone=window.matchMedia?.('(max-width:760px)')?.matches??false;
  const authGate=document.getElementById('authGate');
  const blocked=!document.body.classList.contains('classora-authenticated')||
    document.body.classList.contains('classora-intro-active')||
    authGate?.classList.contains('show');
  const overlayOpen=!!document.querySelector('.modal.open,dialog[open],.classora-case-dialog,.subject-lab-page[open]');
  const awayHash=!!location.hash&&location.hash!=='#platformLobby';
  const lobby=document.querySelector('.platform-lobby');
  const lobbyHidden=!!lobby&&(getComputedStyle(lobby).display==='none'||lobby.getAttribute('aria-hidden')==='true');
  btn.classList.toggle('show',phone&&!blocked&&(overlayOpen||awayHash||lobbyHidden));
 }

 function refresh(root=document){
  root.querySelectorAll('button.close,button[id*="Close"],button[id*="close"],[data-close-modal],button[data-return-control]').forEach(b=>{
   if(!b.matches('button'))return;
   if(!b.dataset.returnControl&&!/^[\s×✕✖✗xX❌]+$/.test(b.textContent))return;
   b.dataset.returnControl='1';b.dataset.noTranslate='';const label=L('رجوع','Back');
   if(b.getAttribute('aria-label')===label&&b.querySelector('svg'))return;
   b.innerHTML=arrow;const s=document.createElement('span');s.textContent=label;b.append(s);b.setAttribute('aria-label',label);b.title=label;
  });
 }
 let origin=null;
 document.addEventListener('click',e=>{
  const back=e.target.closest('[data-return-control]'),modal=e.target.closest('.modal.open');
  if(back&&modal){const id=modal.dataset.returnOrigin;delete modal.dataset.returnOrigin;if(id){const target=document.getElementById(id);if(target)queueMicrotask(()=>{target.classList.add('open');target.scrollTop=Number(target.dataset.returnScroll)||0})}return}
  origin=modal?.id||null;if(modal)modal.dataset.returnScroll=String(modal.scrollTop);
 },true);
 const observer=new MutationObserver(records=>{for(const r of records){if(r.type==='attributes'&&r.target.matches('.modal.open')&&origin&&origin!==r.target.id)r.target.dataset.returnOrigin=origin;}refresh()});
 observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
 const mobileObserver=new MutationObserver(()=>syncFloatingMobileLobby());
 mobileObserver.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class','open','aria-hidden','hidden','style']});
 window.addEventListener('hashchange',syncFloatingMobileLobby);
 window.addEventListener('resize',syncFloatingMobileLobby,{passive:true});
 refresh();syncFloatingMobileLobby();
 return {refresh(root=document){refresh(root);syncFloatingMobileLobby()},syncMobileLobby:syncFloatingMobileLobby};
}
