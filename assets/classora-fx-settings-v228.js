/* Classora FX Settings v228 — account-local cosmetic preferences. */
(()=>{
'use strict';
const $=id=>document.getElementById(id);
const T=(ar,en)=>document.documentElement.lang==='ar'?ar:(window.ClassoraLocale?.tFor?.(document.documentElement.lang||'en',en)||en);
const user=()=>document.body.classList.contains('classora-authenticated')?window.PythagorasiUser:null;
const key=()=>String(user()?.uid||'guest');
const defaults={enabled:true,sparks:true,motion:true,rank:true,density:'normal'};
const allowed=['subtle','normal','intense'];
let last='',pref={...defaults};
const e=(tag,cls,str)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(str!==undefined)n.textContent=str;return n};
function read(){let v={};try{v=JSON.parse(localStorage.getItem('cl_fx_prefs_228_'+key())||'{}')||{}}catch{}
 pref={enabled:v.enabled!==false,sparks:v.sparks!==false,motion:v.motion!==false,rank:v.rank!==false,density:allowed.includes(v.density)?v.density:'normal'};}
function apply(){
 const b=document.body;b.dataset.cl228Fx=pref.enabled?'on':'off';b.dataset.cl228Sparks=pref.sparks?'on':'off';
 b.dataset.cl228Motion=pref.motion?'on':'off';b.dataset.cl228Rank=pref.rank?'on':'off';b.dataset.cl228Density=pref.density;
 b.dataset.cl228Admin=window.classoraIsSuperAdmin?.()?'true':'false';
}
function save(){try{localStorage.setItem('cl_fx_prefs_228_'+key(),JSON.stringify(pref))}catch{}apply()}
const fire='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1C14 6 12 8 16 10c1 0 3-2 3-3 4 7 1 16-7 16S2 16 6 11c0 4 3 3 6-10Z" fill="#ff8e38"/><path d="M12 11c0 3-3 4-2 7 1 4 7 3 6-1-.5-2-2-4-4-6Z" fill="#ffe7a2"/></svg>';
function badges(){
 for(const parent of [$('lobbyProfileBtn'),$('profileModal')?.querySelector('.profile-photo-wrap')]){
  if(!parent||parent.querySelector(':scope > .cl228-flame'))continue;
  const icon=e('span','cl228-flame');icon.setAttribute('aria-hidden','true');
  icon.innerHTML=fire+'<i></i><i></i><i></i><i></i><i></i><i></i>';parent.append(icon)
 }
}
function burst(parent){
 if(!user()||!pref.enabled||!pref.sparks||!pref.motion)return;
 const selected=user()?.questShop?.equipped||'none';
 if(!['flame','rocket','plasma','comet'].includes(selected))return;
 parent.classList.remove('cl228-burst');void parent.offsetWidth;parent.classList.add('cl228-burst');
 setTimeout(()=>parent.classList.remove('cl228-burst'),1100);
}
function settings(){
 const grid=$('settingsModal')?.querySelector('.settings-grid');if(!grid)return;
 let section=$('cl228FxSettings');
 if(!section){
  section=e('section','settings-card cl228-settings');section.id='cl228FxSettings';grid.append(section);
  section.addEventListener('change',event=>{
   const input=event.target.closest('[data-cl228-pref]');if(!input||!user())return;
   const field=input.dataset.cl228Pref;
   if(field==='density')pref.density=allowed.includes(input.value)?input.value:'normal';
   else if(['enabled','sparks','motion','rank'].includes(field))pref[field]=!!input.checked;
   save();
  });
  section.addEventListener('click',event=>{
   if(event.target.closest('[data-cl228-go]')){
    $('settingsModal')?.classList.remove('open');window.classoraSocialGarage?.openShop?.();
   }
   if(event.target.closest('[data-cl228-gif]')){
    $('settingsModal')?.classList.remove('open');$('profilePhotoInput')?.click();
   }
  });
 }
 section.replaceChildren(e('h3','',T('شرار ومؤثرات بروفايلك','Profile sparks and effects')),e('p','cl228-intro',T('خصص الحركة والشرار واللمعة حسب ذوقك.','Customize your effects, motion and spark intensity.')));
 for(const [k,ar,en] of [['enabled','تفعيل المؤثرات','Enable effects'],['sparks','شرار حول الصورة','Sparks around avatar'],['motion','الرسومات المتحركة','Animations'],['rank','إظهار رتبتي','Show rank badge']]){
  const label=e('label','cl228-setting-row');
  const input=e('input');input.type='checkbox';input.dataset.cl228Pref=k;input.checked=pref[k];label.append(e('span','',T(ar,en)),input);section.append(label)
 }
 const row=e('label','cl228-setting-row');row.append(e('span','',T('قوة اللمعة','Effect intensity')));
 const select=e('select','');select.dataset.cl228Pref='density';
 for(const [v,a,b] of [['subtle','خفيف','Subtle'],['normal','متوسط','Normal'],['intense','قوي','Intense']]){
  const opt=e('option','',T(a,b));opt.value=v;opt.selected=v===pref.density;select.append(opt)
 }
 row.append(select);section.append(row);
 const links=e('div','cl228-setting-links');
 const shop=e('button','',T('متجر XP','XP garage'));shop.type='button';shop.dataset.cl228Go='1';
 const gif=e('button','',T('رفع GIF للصورة','Upload avatar GIF'));gif.type='button';gif.dataset.cl228Gif='1';links.append(shop,gif);section.append(links);
 if(window.classoraIsSuperAdmin?.())section.append(e('p','cl228-admin-note',T('الأدمن عنده كل مؤثرات الشوب مجانًا.','Admins get every shop effect for free.')));
}
function sync(){
 if(!user()){last='';document.body.removeAttribute('data-cl228-fx');return}
 if(last!==key()){last=key();read()}apply();badges();
 if($('settingsModal')?.classList.contains('open'))settings()
}
function init(){
 const settingsModal=$('settingsModal');
 if(settingsModal)new MutationObserver(()=>{if(settingsModal.classList.contains('open'))settings()}).observe(settingsModal,{attributes:true,attributeFilter:['class']});
 const trigger=$('lobbyProfileBtn');if(trigger)trigger.addEventListener('pointerdown',()=>burst(trigger),{passive:true});
 const photo=$('profileModal')?.querySelector('.profile-photo-wrap');
 if(photo)photo.addEventListener('pointerdown',()=>burst(photo),{passive:true});
 new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class','data-user-role']});
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 document.addEventListener('classora-auth-settled',sync);document.addEventListener('classora:arena-shop-updated',sync);
 window.addEventListener('pageshow',sync);sync();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();