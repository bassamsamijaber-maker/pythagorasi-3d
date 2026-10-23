/* Classora v241 — settings navigation, eight locales, explicit return to original admin panel. */
(()=>{"use strict";
const COPY={
ar:{heading:"إعداداتك بوضوح",sub:"انتقل للقسم اللي بدك إياه بدون ما تدوّر بين كل البطاقات.",profile:"حسابي",language:"اللغة",security:"الحماية",alerts:"الإشعارات",sound:"الصوت والحركة",support:"المساعدة",devices:"الأجهزة",benefits:"الاشتراكات",admin:"لوحة الأدمن"},
en:{heading:"Settings, simplified",sub:"Jump to what you need without hunting through cards.",profile:"My account",language:"Language",security:"Security",alerts:"Notifications",sound:"Sound & motion",support:"Help",devices:"Devices",benefits:"Memberships",admin:"Admin panel"},
es:{heading:"Ajustes organizados",sub:"Ve directamente a la sección que necesitas.",profile:"Mi cuenta",language:"Idioma",security:"Seguridad",alerts:"Notificaciones",sound:"Sonido y movimiento",support:"Ayuda",devices:"Dispositivos",benefits:"Suscripciones",admin:"Panel admin"},
ko:{heading:"한눈에 보는 설정",sub:"필요한 메뉴로 바로 이동하세요.",profile:"내 계정",language:"언어",security:"보안",alerts:"알림",sound:"소리 및 동작",support:"도움말",devices:"기기",benefits:"구독",admin:"관리자"},
de:{heading:"Einstellungen auf einen Blick",sub:"Direkt zu dem Bereich, den du brauchst.",profile:"Mein Konto",language:"Sprache",security:"Sicherheit",alerts:"Benachrichtigungen",sound:"Ton & Bewegung",support:"Hilfe",devices:"Geräte",benefits:"Abos",admin:"Adminbereich"},
it:{heading:"Impostazioni ordinate",sub:"Vai subito alla sezione che ti serve.",profile:"Il mio account",language:"Lingua",security:"Sicurezza",alerts:"Notifiche",sound:"Audio e movimento",support:"Aiuto",devices:"Dispositivi",benefits:"Abbonamenti",admin:"Pannello admin"},
hi:{heading:"आसान सेटिंग्स",sub:"ज़रूरी सेक्शन पर सीधे जाएँ।",profile:"मेरा खाता",language:"भाषा",security:"सुरक्षा",alerts:"सूचनाएँ",sound:"ध्वनि व गति",support:"मदद",devices:"डिवाइस",benefits:"सदस्यता",admin:"एडमिन पैनल"},
tr:{heading:"Kolay ayarlar",sub:"İstediğin bölüme doğrudan git.",profile:"Hesabım",language:"Dil",security:"Güvenlik",alerts:"Bildirimler",sound:"Ses ve hareket",support:"Destek",devices:"Cihazlar",benefits:"Üyelikler",admin:"Yönetici paneli"}
};
const current=()=>COPY[document.documentElement.lang]||COPY.en;
const entries=[
["profile",".settings-profile-row"],["language","#settingsLanguageTitle"],["security","#accountPasswordCard"],
["alerts","#notificationSettingsCard"],["sound","#settingsSoundToggle"],["support","#settingsSupportBtn"],["devices","#cl239Sessions"]];
const newElement=(tag,cls,content)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(content!==undefined)n.textContent=content;return n};
let nav=null,queued=false;
function style(){
 if(document.getElementById("cl241SettingsCss"))return;
 const link=newElement("link");link.id="cl241SettingsCss";link.rel="stylesheet";link.href="./assets/classora-settings-polish-v241.css?v=241";document.head.append(link);
}
function scrollToSection(selector){
 const box=document.querySelector("#settingsModal "+selector);
 if(!box)return;
 const card=box.closest(".settings-card,.cl239-sessions,.cl240-owner")||box;
 card.scrollIntoView({behavior:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches?"auto":"smooth",block:"start"});
}
function ensure(){
 const modal=document.getElementById("settingsModal"),profile=modal?.querySelector(".settings-profile-row");
 if(!modal||!profile)return;
 if(!nav||!nav.isConnected){
  nav=newElement("section","cl241-settings-nav");nav.id="cl241SettingsNav";nav.dataset.noTranslate="";
  const header=newElement("div","cl241-settings-nav-header");
  header.append(newElement("div",""));
  const title=newElement("h3");title.id="cl241SettingsNavHeading";
  const note=newElement("p");note.id="cl241SettingsNavNote";
  header.firstElementChild.append(title,note);
  const grid=newElement("div","cl241-settings-nav-grid");grid.id="cl241SettingsNavGrid";
  nav.append(header,grid);
  profile.after(nav);
 }
 update();
}
function update(){
 if(!nav||!nav.isConnected)return;
 const w=current(),heading=nav.querySelector("#cl241SettingsNavHeading"),note=nav.querySelector("#cl241SettingsNavNote"),grid=nav.querySelector("#cl241SettingsNavGrid");
 if(heading?.textContent!==w.heading)heading.textContent=w.heading;
 if(note?.textContent!==w.sub)note.textContent=w.sub;
 const wanted=entries.filter(([,sel])=>document.querySelector("#settingsModal "+sel)).map(([k,sel])=>({k,sel}));
 wanted.push({k:"benefits",href:"./subscriptions.html?lang="+encodeURIComponent(document.documentElement.lang||"ar")});
 const admin=document.querySelector('[data-classora-quick="admin"]');
 if(admin&&!admin.hidden&&!admin.classList.contains("hidden"))wanted.push({k:"admin",action:"admin"});
 const signature=wanted.map(x=>x.k).join("|");
 if(grid.dataset.keys!==signature){
  grid.replaceChildren();
  for(const it of wanted){
   const node=newElement(it.href?"a":"button");node.dataset.cl241Key=it.k;
   if(it.href){node.href=it.href;node.className="cl241-nav-link";}
   else{node.type="button";node.onclick=()=>{
    if(it.action==="admin"){document.getElementById("closeSettingsModal")?.click();document.querySelector('[data-classora-quick="admin"]')?.click();return;}
    scrollToSection(it.sel);
   }}
   if(it.k==="admin")node.classList.add("cl241-nav-admin");
   grid.append(node);
  }
  grid.dataset.keys=signature;
 }
 for(const node of grid.children){
  const k=node.dataset.cl241Key;
  if(node.textContent!==w[k])node.textContent=w[k];
  if(k==="benefits")node.href="./subscriptions.html?lang="+encodeURIComponent(document.documentElement.lang||"ar");
 }
}
function checkReturnToAdmin(){
 if(!document.getElementById("adminPanelBtn"))return;
 let request;
 try{request=JSON.parse(sessionStorage.getItem("classora_open_admin_from_memberships")||"null")}catch{request=null}
 if(!request)return;
 if(!request.uid||!Number.isFinite(request.at)||Date.now()-request.at>45000||request.at>Date.now()+1000){
  try{sessionStorage.removeItem("classora_open_admin_from_memberships")}catch{}return;
 }
 const btn=document.getElementById("adminPanelBtn");
 if(!btn||btn.classList.contains("hidden")||btn.hidden||!document.body.classList.contains("classora-authenticated"))return;
 if(window.PythagorasiUser?.uid!==request.uid)return;
 try{sessionStorage.removeItem("classora_open_admin_from_memberships")}catch{}
 btn.click();
}
function schedule(){
 if(queued)return;queued=true;
 requestAnimationFrame(()=>{queued=false;ensure();checkReturnToAdmin()});
}
function init(){
 if(document.getElementById("settingsModal")){style();ensure();}checkReturnToAdmin();
 const modal=document.getElementById("settingsModal");
 if(modal)new MutationObserver(schedule).observe(modal,{childList:true,subtree:true,attributes:true,attributeFilter:["hidden","class"]});
 new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
 // The site lazily updates profile/authorization on auth events.
 if(document.body)new MutationObserver(()=>{try{if(sessionStorage.getItem("classora_open_admin_from_memberships"))schedule()}catch{}}).observe(document.body,{attributes:true,attributeFilter:["class"]});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();