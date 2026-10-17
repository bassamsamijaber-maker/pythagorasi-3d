(()=>{"use strict";
const names={
ar:{title:"Plus وPremium",settings:"الاشتراكات والمميزات"},
en:{title:"Plus & Premium",settings:"Memberships & benefits"},
es:{title:"Plus y Premium",settings:"Suscripciones y ventajas"},
ko:{title:"Plus 및 Premium",settings:"구독 및 혜택"},
de:{title:"Plus und Premium",settings:"Tarife und Vorteile"},
it:{title:"Plus e Premium",settings:"Abbonamenti e vantaggi"},
hi:{title:"Plus और Premium",settings:"सदस्यता और फायदे"},
tr:{title:"Plus ve Premium",settings:"Üyelikler ve avantajlar"}};
function removeUpgrade(){document.getElementById("lobbyMembershipBtn")?.remove()}
function update(){
 removeUpgrade();
 const language=window.ClassoraLocale?.language||localStorage.getItem("pythagorasi_language")||"ar";
 const words=names[language]||names.en;
 const label=document.getElementById("cl-membership-settings-label");
 if(label)label.textContent=words.settings;
 const shortcut=document.getElementById("classoraSettingsMembershipLink");
 if(shortcut)shortcut.title=words.title;
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",update,{once:true});else update();
const top=document.querySelector(".lobby-top-actions");
if(top)new MutationObserver(removeUpgrade).observe(top,{childList:true});
document.addEventListener("click",e=>{if(e.target?.closest?.("[data-classora-language]"))setTimeout(update,80)},true);
window.addEventListener("storage",e=>{if(e.key==="pythagorasi_language")update()});
const gate=document.getElementById("authGate");
if(gate)new MutationObserver(update).observe(gate,{attributes:true,attributeFilter:["lang"]});
})();