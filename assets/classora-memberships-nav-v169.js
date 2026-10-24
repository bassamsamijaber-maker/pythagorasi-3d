/* Membership entry points use the existing verified subscription page. */
(()=>{'use strict';
const labels={ar:['ترقية','الاشتراكات والمميزات','خلّي كلاسورا على ذوقك. اكتشف Plus وPremium.','اكتشف اشتراكك'],en:['Upgrade','Memberships & benefits','Make Classora yours. Explore Plus and Premium.','Explore plans'],es:['Mejorar','Suscripciones y ventajas','Haz Classora tuyo. Descubre Plus y Premium.','Ver planes'],ko:['업그레이드','구독 및 혜택','나만의 Classora. Plus와 Premium을 만나보세요.','요금제 보기'],de:['Upgrade','Tarife und Vorteile','Dein Classora. Entdecke Plus und Premium.','Tarife entdecken'],it:['Passa a un piano','Abbonamenti e vantaggi','Classora come vuoi tu. Scopri Plus e Premium.','Scopri i piani'],hi:['अपग्रेड','सदस्यता और फायदे','Classora को अपना बनाएँ। Plus और Premium देखें।','प्लान देखें'],tr:['Yükselt','Üyelikler ve avantajlar','Classora senin olsun. Plus ve Premium’u keşfet.','Paketleri keşfet']};
let queued=false;
function update(){
 queued=false;const lang=document.documentElement.lang||'ar',w=labels[lang]||labels.en;
 document.getElementById('cl238ChatUpgrade')?.remove();
 const sites=[['cl238LobbyUpgrade','.lobby-top-actions',0],['cl238SettingsUpgrade','#settingsModal .settings-profile-row',1],['cl238SubjectsUpgrade','#classoraLearningFront',2]];
 for(const[id,selector,key]of sites){const host=document.querySelector(selector);if(!host)continue;let a=document.getElementById(id);if(!a){a=document.createElement('a');a.id=id;a.className='cl238-upgrade'+(key===2?' cl238-upgrade-banner':'');a.dataset.noTranslate='';host.append(a)}
 const text=w[key]+(key===2?' '+w[3]+' →':'');if(a.textContent!==text)a.textContent=text;
 const url='./subscriptions.html?lang='+encodeURIComponent(lang);if(a.getAttribute('href')!==url)a.setAttribute('href',url);
 }
}
const schedule=()=>{if(!queued){queued=true;requestAnimationFrame(update)}};
new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
update();
})();
