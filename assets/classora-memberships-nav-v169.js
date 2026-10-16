(() => {
"use strict";
const names={
 ar:{link:"الاشتراكات",title:"Plus وPremium",settings:"الاشتراكات والمميزات"},
 en:{link:"Memberships",title:"Plus & Premium",settings:"Memberships & benefits"},
 es:{link:"Suscripciones",title:"Plus y Premium",settings:"Suscripciones y ventajas"},
 ko:{link:"구독",title:"Plus 및 Premium",settings:"구독 및 혜택"},
 de:{link:"Abonnements",title:"Plus und Premium",settings:"Tarife und Vorteile"},
 it:{link:"Abbonamenti",title:"Plus e Premium",settings:"Abbonamenti e vantaggi"},
 hi:{link:"सदस्यता",title:"Plus और Premium",settings:"सदस्यता और फायदे"},
 tr:{link:"Üyelikler",title:"Plus ve Premium",settings:"Üyelikler ve avantajlar"}
};
function update(){
 const lang=window.ClassoraLocale?.language||localStorage.getItem("pythagorasi_language")||"ar";
 const text=names[lang]||names.en;
 for(const [id,key] of [["cl-membership-label","link"],["cl-membership-settings-label","settings"]]){
  const node=document.getElementById(id);if(node)node.textContent=text[key];
 }
 const link=document.getElementById("lobbyMembershipBtn");
 if(link){link.title=text.title;link.setAttribute("aria-label",text.link);}
 const settings=document.getElementById("classoraSettingsMembershipLink");
 if(settings)settings.title=text.title;
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",update,{once:true});
else update();
document.addEventListener("click",event=>{
 if(event.target?.closest?.("[data-classora-language]"))setTimeout(update,80);
},true);
window.addEventListener("storage",event=>{
 if(event.key==="pythagorasi_language")update();
});
const observed=document.getElementById("authGate");
if(observed)new MutationObserver(update).observe(observed,{attributes:true,attributeFilter:["lang"]});
})();