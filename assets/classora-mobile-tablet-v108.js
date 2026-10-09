/* Classora mobile dock v108. Delegates to EXISTING Classora buttons.
 * The only new behavior is navigation, localization, and keyboard-aware display.
 * No auth, Firebase, chat, 3D or lesson logic is replaced.
 */
(() => {
  "use strict";
  const get = id => document.getElementById(id);
  const root = () => get("classoraMobilePageNav");
  const labels = [
    ["classoraMobileLobbyBtn", "اللوبي", "Lobby"],
    ["classoraMobileSubjectsBtn", "المواد", "Subjects"],
    ["classoraMobileClassesBtn", "صفوفي", "Classes"],
    ["classoraMobileChatBtn", "الشات", "Chat"],
    ["classoraMobileSettingsBtn", "الإعدادات", "Settings"]
  ];
  const language = () => document.documentElement.lang === "en" ? "en" : "ar";
  const select = id => {
    const nav=root();
    if(!nav)return;
    nav.querySelectorAll("button").forEach(btn=>{
      const current=btn.id===id;
      btn.classList.toggle("is-active", current);
      if(current)btn.setAttribute("aria-current","page");
      else btn.removeAttribute("aria-current");
    });
  };
  const translate = () => {
    const en=language()==="en",nav=root();
    if(!nav)return;
    nav.setAttribute("aria-label",en?"Quick navigation":"التنقّل السريع");
    for(const [id,ar,english] of labels){
      const b=get(id);
      if(!b)continue;
      const label=en?english:ar;
      b.querySelector("span")?.replaceChildren(document.createTextNode(label));
      b.setAttribute("aria-label",label);
    }
  };
  const leaveCurrentPage = () => {
    // Switching to another tab exits the old subject. The original Lobby button
    // still retains its existing "return to previous subject" logic unchanged.
    try{sessionStorage.removeItem("classora_subject_origin")}catch{}
    get("classoraMobileLobbyBtn")?.click();
  };
  const openLegacy = (targetId,selectedId) => {
    leaveCurrentPage();
    select(selectedId);
    window.setTimeout(()=>{
      if(!document.body.classList.contains("classora-authenticated"))return;
      get(targetId)?.click(); // existing permission checks and modal/room handlers
    },110);
  };
  const openSubjects = () => {
    leaveCurrentPage();
    select("classoraMobileSubjectsBtn");
    window.setTimeout(()=>{
      const lobby=get("platformLobby");
      const target=lobby?.querySelector(".hub-curriculum-shelf") ||
        lobby?.querySelector(".learning-hub") ||
        lobby?.querySelector(".pythag-action-grid");
      if(!lobby||!target)return;
      const top=Math.max(0,lobby.scrollTop+target.getBoundingClientRect().top-lobby.getBoundingClientRect().top-14);
      const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      lobby.scrollTo({top,behavior:reduce?"auto":"smooth"});
    },120);
  };
  const editable = 'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="hidden"]),textarea,select,[contenteditable="true"]';
  function start(){
    const nav=root();
    if(!nav||nav.dataset.classoraV108Ready)return;
    nav.dataset.classoraV108Ready="1";
    translate();
    select("classoraMobileLobbyBtn");

    get("classoraMobileSubjectsBtn")?.addEventListener("click",openSubjects);
    get("classoraMobileClassesBtn")?.addEventListener("click",()=>openLegacy("lobbyClassBtn","classoraMobileClassesBtn"));
    get("classoraMobileChatBtn")?.addEventListener("click",()=>openLegacy("lobbyChatBtn","classoraMobileChatBtn"));

    // Capture before the application's existing return handlers, without
    // preventing the existing buttons from working.
    document.addEventListener("click",e=>{
      const btn=e.target?.closest?.("#classoraMobilePageNav button");
      if(!btn)return;
      // The legacy Lobby handler stops propagation at document capture, so
      // we attach here before that handler and do not interfere with it.
      if(btn.id==="classoraMobileSettingsBtn"){
        try{sessionStorage.removeItem("classora_subject_origin")}catch{}
        select(btn.id);
      }else if(btn.id==="classoraMobileLobbyBtn")select(btn.id);
    },true);

    document.addEventListener("focusin",e=>{
      if(e.target?.matches?.(editable))document.body.classList.add("classora-mobile-typing");
    });
    document.addEventListener("focusout",()=>{
      window.setTimeout(()=>{
        if(!document.activeElement?.matches?.(editable))document.body.classList.remove("classora-mobile-typing");
      },100);
    });
    new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
    window.addEventListener("pageshow",translate);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});
  else start();
})();
