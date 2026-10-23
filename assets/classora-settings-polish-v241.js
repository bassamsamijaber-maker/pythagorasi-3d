/* Classora v242 — clean settings shortcut copy, keep current polished styles and original admin route. */
(()=>{"use strict";
const L={
 ar:{title:"خدماتك السريعة",body:"بتحتاج مساعدة أو بدك توصل لخدمة بسرعة؟ من هون بتلاقي الشات، الدعم، الإشعارات وإدارة حسابك بسهولة."},
 en:{title:"Quick access",body:"Need help or looking for something? Easily open chat, support, notifications, and account tools here."},
 es:{title:"Acceso rápido",body:"¿Necesitas ayuda? Accede fácilmente al chat, soporte, notificaciones y opciones de tu cuenta."},
 ko:{title:"빠른 서비스",body:"도움이 필요하신가요? 여기에서 채팅, 고객 지원, 알림 및 계정 관리를 쉽게 이용하세요."},
 de:{title:"Schnellzugriff",body:"Brauchst du Hilfe? Hier findest du Chat, Support, Benachrichtigungen und deine Kontoverwaltung."},
 it:{title:"Accesso rapido",body:"Serve aiuto? Da qui trovi chat, supporto, notifiche e gestione dell’account."},
 hi:{title:"त्वरित सेवाएँ",body:"मदद चाहिए? यहाँ चैट, सहायता, सूचनाएँ और खाता प्रबंधन आसानी से खोलें।"},
 tr:{title:"Hızlı erişim",body:"Yardıma mı ihtiyacın var? Sohbete, desteğe, bildirimlere ve hesap ayarlarına buradan kolayca ulaş."}
};
function copy(){return L[document.documentElement.lang]||L.en}
function updateShortcuts(){
 // The redundant v241 settings navigation is removed; keep only the original useful shortcut buttons.
 document.getElementById("cl241SettingsNav")?.remove();
 const shortcut=document.getElementById("classoraSettingsShortcuts");
 if(!shortcut)return;
 const title=shortcut.querySelector("h3[data-quick-ar]");
 const body=shortcut.querySelector("p[data-quick-ar]");
 if(!title||!body)return;
 const selected=copy();
 title.dataset.quickAr=L.ar.title;title.dataset.quickEn=L.en.title;
 body.dataset.quickAr=L.ar.body;body.dataset.quickEn=L.en.body;
 if(title.textContent!==selected.title)title.textContent=selected.title;
 if(body.textContent!==selected.body)body.textContent=selected.body;
}
function checkReturnToAdmin(){
 const btn=document.getElementById("adminPanelBtn");if(!btn)return;
 let request;
 try{request=JSON.parse(sessionStorage.getItem("classora_open_admin_from_memberships")||"null")}catch{return}
 if(!request)return;
 if(!request.uid||!Number.isFinite(request.at)||Date.now()-request.at>45000||request.at>Date.now()+1000){
  try{sessionStorage.removeItem("classora_open_admin_from_memberships")}catch{}
  return;
 }
 if(btn.classList.contains("hidden")||btn.hidden||!document.body.classList.contains("classora-authenticated"))return;
 if(window.PythagorasiUser?.uid!==request.uid)return;
 try{sessionStorage.removeItem("classora_open_admin_from_memberships")}catch{}
 btn.click();
}
let pending=false;
function queue(){
 if(pending)return;pending=true;
 requestAnimationFrame(()=>{pending=false;updateShortcuts();checkReturnToAdmin()});
}
function init(){
 if(document.getElementById("settingsModal")){
  if(!document.getElementById("cl241SettingsCss")){
   const css=document.createElement("link");css.rel="stylesheet";css.id="cl241SettingsCss";
   css.href="./assets/classora-settings-polish-v241.css?v=242";document.head.append(css);
  }
  updateShortcuts();
  const shortcut=document.getElementById("classoraSettingsShortcuts");
  if(shortcut)new MutationObserver(queue).observe(shortcut,{subtree:true,characterData:true,childList:true});
  new MutationObserver(queue).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
 }
 checkReturnToAdmin();
 if(document.body)new MutationObserver(()=>{
  try{if(sessionStorage.getItem("classora_open_admin_from_memberships"))queue()}catch{}
 }).observe(document.body,{attributes:true,attributeFilter:["class"]});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();
