/* Classora v113 / phase 1: phone + iPad persistent dock.
 * Extends (does not replace) v108/v111 existing navigation handlers.
 * Zero polling, no Firebase writes, no lesson or 3D event interception.
 */
(() => {
 "use strict";
 const $ = id => document.getElementById(id);
 const nav = () => $("classoraMobilePageNav");
 const tablet = () => {
   const ua=navigator.userAgent||"";
   const ipad=/iPad/i.test(ua) || (navigator.platform==="MacIntel" && navigator.maxTouchPoints>1);
   const touchTablet=navigator.maxTouchPoints>1 &&
     window.matchMedia?.("(pointer: coarse)")?.matches;
   return window.innerWidth>760 && window.innerWidth<=1500 && (ipad||touchTablet);
 };
 const supported=()=>window.innerWidth<=760 || tablet();
 let raf=0;
 function syncLayout(){
   raf=0;
   document.body.classList.toggle("classora-dock-enabled",supported());
   if(nav()){
     // The existing authentication observer continues to own aria-hidden.
     nav().setAttribute("data-classora-dock-device",
       tablet()?"tablet":window.innerWidth<=760?"phone":"desktop");
   }
 }
 function schedule(){
   if(raf)return;
   raf=requestAnimationFrame(syncLayout);
 }
 function select(id){
   const bar=nav();if(!bar)return;
   bar.querySelectorAll("button").forEach(button=>{
     const active=button.id===id;
     button.classList.toggle("is-active",active);
     if(active)button.setAttribute("aria-current","page");
     else button.removeAttribute("aria-current");
   });
 }
 function refreshActive(){
   const settings=$("settingsModal");
   const chat=$("chatModal");
   if(settings?.classList.contains("open")){select("classoraMobileSettingsBtn");return}
   if(chat?.classList.contains("open")){select("classoraMobileChatBtn");return}
   if($("classModal")?.classList.contains("open")){select("classoraMobileClassesBtn");return}
   if($("classoraCurriculumModal")?.classList.contains("open")){select("classoraMobileSubjectsBtn");return}
   if(location.hash==="#periodic-table"){select("classoraMobileSubjectsBtn");return}
   const activeNav=nav()?.querySelector("button.is-active");
   if(!activeNav)select("classoraMobileLobbyBtn");
 }
 function monitorModal(modal){
   if(!modal||modal.dataset.classoraV113Observed)return;
   modal.dataset.classoraV113Observed="1";
   new MutationObserver(refreshActive).observe(modal,{attributes:true,attributeFilter:["class"]});
 }
 function init(){
   const bar=nav();
   if(!bar)return;
   if(bar.dataset.classoraV113Ready)return;
   bar.dataset.classoraV113Ready="1";
   syncLayout();
   monitorModal($("chatModal"));
   monitorModal($("settingsModal"));
   monitorModal($("classModal"));
   monitorModal($("classoraCurriculumModal"));
   // The old lobby return handler intercepts clicks at document capture level.
   // Capture on window first so the active indicator resets even when it stops propagation.
   window.addEventListener("click",event=>{
     const clicked=event.target?.closest?.(
       '#classoraMobileLobbyBtn,#mobileReturnLobbyBtn,#returnLobbyBtn,[data-return-control][data-return-target="lobby"]'
     );
     if(clicked)select("classoraMobileLobbyBtn");
   },true);
   new MutationObserver(()=>{
     if(!$("classModal")?.classList.contains("open") &&
        nav()?.querySelector("#classoraMobileClassesBtn.is-active") &&
        !$("settingsModal")?.classList.contains("open")){
       select("classoraMobileLobbyBtn");
     }
   }).observe($("classModal"),{attributes:true,attributeFilter:["class"]});
   const added=new MutationObserver(records=>{
     for(const record of records){
       for(const item of record.addedNodes){
         if(item.nodeType===1&&item.id==="classoraCurriculumModal")monitorModal(item);
       }
     }
   });
   // Curriculum adds one modal directly to body; avoid observing subtrees or
   // every message/3D animation to keep mobile CPU usage low.
   added.observe(document.body,{childList:true});
   const clickNav=event=>{
     const button=event.target.closest?.("#classoraMobilePageNav button");
     if(button){
       select(button.id);
       return; // Do not prevent/stop propagation — legacy routes must run.
     }
   };
   // Existing document-level capture handlers already govern Lobby.
   document.addEventListener("click",clickNav,true);
   window.addEventListener("hashchange",refreshActive,{passive:true});
   window.addEventListener("resize",schedule,{passive:true});
   window.addEventListener("orientationchange",schedule,{passive:true});
   window.visualViewport?.addEventListener("resize",schedule,{passive:true});
   window.addEventListener("pageshow",()=>{syncLayout();refreshActive()});
   refreshActive();
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
 else init();
})();
