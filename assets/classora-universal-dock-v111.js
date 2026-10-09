/* Classora v111: topbar actions now shown as settings shortcuts on phone.
 * The existing original buttons stay in place (CSS-hidden on phone) so their
 * actual Firebase permissions, confirmation flows and event handlers still apply.
 * No new account, chat, exam or navigation backend is introduced.
 */
(() => {
 "use strict";
 const get=id=>document.getElementById(id);
 const menu=()=>get("classoraSettingsShortcuts");
 const targets={
   chat:"lobbyChatBtn",
   classes:"lobbyClassBtn",
   notifications:"lobbyNotificationsBtn",
   support:"lobbySupportBtn",
   supportRequests:"lobbySupportRequestsBtn",
   admin:"adminPanelBtn",
   install:"installAppBtn",
   profile:"settingsOpenProfileBtn",
   logout:"settingsLogoutBtn"
 };
 function isPermitted(source){
   return Boolean(source&&!source.hidden&&
      !source.classList.contains("hidden")&&
      source.getAttribute("aria-hidden")!=="true"&&
      source.style.display!=="none");
 }
 function syncShortcuts(){
   const parent=menu();
   if(!parent)return;
   const english=document.documentElement.lang==="en";
   parent.setAttribute("lang",english?"en":"ar");
   parent.setAttribute("dir",english?"ltr":"rtl");
   parent.querySelectorAll("[data-quick-ar][data-quick-en]").forEach(el=>{
     const value=el.getAttribute(english?"data-quick-en":"data-quick-ar");
     if(value!==null&&el.textContent!==value)el.textContent=value;
   });
   for(const btn of parent.querySelectorAll("button[data-classora-quick]")){
     const key=btn.dataset.classoraQuick;
     const source=get(targets[key]);
     // Staff-only and install options must obey their original visibility.
     btn.hidden=!isPermitted(source);
   }
 }
 function execute(key){
   const source=get(targets[key]);
   if(!isPermitted(source))return;
   if(key==="profile"||key==="logout"||key==="install"){
     // These settings controls already own the required close/confirmation logic.
     (key==="install"?get("settingsInstallAppBtn"):source)?.click();
     return;
   }
   get("closeSettingsModal")?.click();
   window.setTimeout(()=>{
     if(!document.body.classList.contains("classora-authenticated"))return;
     if(!isPermitted(get(targets[key])))return;
     if(key==="chat"&&get("classoraMobileChatBtn")){
       get("classoraMobileChatBtn").click();return;
     }
     if(key==="classes"&&get("classoraMobileClassesBtn")){
       get("classoraMobileClassesBtn").click();return;
     }
     get(targets[key])?.click();
   },90);
 }
 function init(){
   const shortcuts=menu(),top=get("platformLobby")?.querySelector(".lobby-top-actions");
   if(!shortcuts||shortcuts.dataset.v111Ready)return;
   shortcuts.dataset.v111Ready="1";
   shortcuts.addEventListener("click",event=>{
     const button=event.target.closest("button[data-classora-quick]");
     if(!button||!shortcuts.contains(button))return;
     execute(button.dataset.classoraQuick);
   });
   if(top){
     new MutationObserver(syncShortcuts).observe(top,{
       attributes:true,attributeFilter:["class","style","hidden","aria-hidden"],
       subtree:true
     });
   }
   const settings=get("settingsModal");
   if(settings)new MutationObserver(syncShortcuts).observe(settings,{
     attributes:true,attributeFilter:["class"]
   });
   new MutationObserver(syncShortcuts).observe(document.documentElement,{
     attributes:true,attributeFilter:["lang"]
   });
   window.addEventListener("pageshow",syncShortcuts);
   syncShortcuts();
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
 else init();
})();
