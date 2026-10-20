/* Profile customizer: one collapsible wardrobe, real equipped state and reusable SVG art. */
(()=>{
'use strict';
const $=id=>document.getElementById(id);
const T=(a,b)=>document.documentElement.lang==='ar'?a:(window.ClassoraLocale?.tFor?.(document.documentElement.lang||'en',b)||b);
const user=()=>document.body.classList.contains('classora-authenticated')?window.PythagorasiUser:null;
const e=(tag,cls,txt)=>{const n=document.createElement(tag);n.className=cls||'';if(txt!==undefined)n.textContent=String(txt);return n};
const button=(txt,cls)=>{const n=e('button',cls,txt);n.type='button';return n};
const names={flame:['لهب متحرك','Living flame'],lightning:['عاصفة البرق','Lightning storm'],ice:['تاج الجليد','Ice crown'],plasma:['مدار البلازما','Plasma orbit'],rocket:['انطلاق الصاروخ','Rocket launch'],comet:['مذنّب فضائي','Space comet'],champion:['تاج البطل','Champion crown'],starlight:['نجوم متلألئة','Twinkling stars'],aura:['هالة الشفق','Aurora halo'],none:['بدون تأثير','No effect']};
const paths={
 flame:'<path d="M18 83C7 70 15 59 12 48c13 8 5 22 15 29M82 83c11-13 3-24 6-35-13 8-5 22-15 29M31 92c-9-12-2-16-5-24 13 9 4 17 12 23M69 92c9-12 2-16 5-24-13 9-4 17-12 23"/>',
 lightning:'<path d="m18 23-9 27h12L12 78l22-34H21l9-21M80 23 70 48h12L72 77l21-35H81l9-19"/>',
 ice:'<path d="m10 65 6-38 14 13 5-26 15 17 15-17 5 26 14-13 6 38M16 27l14 45M84 27 70 72M35 14l7 16M65 14l-7 16"/><path d="m18 82 12 9m52-9-12 9"/>',
 plasma:'<ellipse cx="50" cy="50" rx="48" ry="20" transform="rotate(-35 50 50)"/><ellipse cx="50" cy="50" rx="48" ry="20" transform="rotate(35 50 50)"/>',
 rocket:'<path d="M72 33c0-14 8-22 20-25 0 13-6 23-20 25Zm0-10-9 4 1 9 9-5m8-1-1 9 8-3 2-10M70 36 58 48m8-10-3 7"/><circle cx="83" cy="18" r="3"/>',
 comet:'<path d="m5 30 28-23M4 43 43 4M11 45 43 14"/><circle cx="24" cy="32" r="8"/><path d="m68 93 24-24m-15 26 19-19"/>',
 champion:'<path d="m23 18 5 16h44l5-16-17 7-10-17-10 17-17-7Zm6 22h42"/><path d="m12 61 7 10-3 12m72-22-7 10 3 12"/>',
 starlight:'<path d="m18 17 3 8 8 3-8 3-3 8-3-8-8-3 8-3Zm64 42 4 11 11 4-11 4-4 11-4-11-11-4 11-4ZM76 7l2 6 6 2-6 2-2 6-2-6-6-2 6-2ZM28 76l2 7 7 2-7 2-2 7-2-7-7-2 7-2Z"/>',
 aura:'<path d="M7 57C-3 11 32 0 50 9S104 8 94 53 65 102 42 94 7 88 7 57Z"/><path d="M12 56C6 24 28 5 52 15s42 9 35 42-27 38-45 31S14 78 12 56Z"/>'
};
function decorate(target,id){
 if(!target)return;target.querySelectorAll(':scope > .cl236-decoration').forEach(n=>n.remove());
 target.classList.add('cl236-decorated');target.dataset.profileEffect=names[id]?id:'none';
 if(!paths[id])return;
 const art=e('span','cl236-decoration fx-'+id);art.setAttribute('aria-hidden','true');
 art.innerHTML='<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">'+paths[id]+'</svg><i></i><i></i><i></i>';
 target.append(art);
}
function avatar(p,id){
 const a=e('span','cl236-avatar');
 if(p?.photoData){const img=e('img');img.src=p.photoData;img.alt=T('صورة الحساب','Profile photo');a.append(img)}
 else a.append(e('b','',String(p?.displayName||'?').trim()[0]||'?'));
 decorate(a,id);return a;
}
function localEffects(){
 const p=user(),id=p?.questShop?.equipped||'none';
 for(const target of [$('lobbyAvatar'),$('settingsAvatar'),$('profileModal')?.querySelector('.profile-photo-wrap')])decorate(target,id);
 // These are viewer preferences only; removing an equipped cosmetic uses the server.
 document.body.dataset.cl228Fx='on';document.body.dataset.cl228Sparks='on';document.body.dataset.cl228Rank='on';
 document.body.dataset.cl228Motion='on';document.body.dataset.cl228Density='normal';
}
let busy=false;
async function equip(id,status){
 if(busy)return;busy=true;status.textContent=T('جاري الحفظ…','Saving...');
 try{
  if(window.classoraArena?.isAdmin?.())await window.classoraArena.unlockAdmin();
  await window.classoraArena.equip(id);settings();localEffects();
 }catch{status.textContent=T('ما زبط الحفظ. افحص الاتصال وحاول مجددًا.','Could not save. Check your connection and retry.')}
 finally{busy=false}
}
function settings(){
 const modal=$('settingsModal'),anchor=modal?.querySelector('.settings-profile-row'),p=user();
 if(!anchor||!p)return;
 let section=$('cl228FxSettings');
 if(!section){section=e('details','cl228-settings cl236-customizer');section.id='cl228FxSettings';anchor.after(section)}
 const open=section.open;section.replaceChildren();section.open=open;
 const summary=e('summary','cl236-summary');
 summary.append(e('span','',T('مظهر بروفايلك ومشترياتك','Profile style & purchases')),e('small','',T('اضغط للتخصيص','Tap to customize')));
 section.append(summary);
 const body=e('div','cl236-customizer-body');
 const current=p.questShop?.equipped||'none';
 const preview=e('div','cl236-profile-preview');
 preview.append(avatar(p,current));
 const info=e('div','cl236-preview-info');info.append(e('b','',p.displayName||T('حسابك','Your profile')),e('small','',T(...(names[current]||names.none))));
 preview.append(info);body.append(preview);
 const note=e('p','cl236-note',T('معاينة فعلية على صورتك. اختر تأثيرًا مملوكًا ثم اضغط تجهيز.','Preview on your photo. Choose an owned effect, then equip it.'));
 body.append(note);
 const grid=e('div','cl236-owned');
 const owned=new Set(p.questShop?.owned||[]);
 const all=Object.keys(names).filter(id=>id!=='none'&&(owned.has(id)||window.classoraArena?.isAdmin?.()));
 const status=e('p','cl236-status');status.setAttribute('role','status');
 for(const id of ['none',...all]){
  const card=button('','cl236-owned-item');card.setAttribute('aria-pressed',String(current===id));
  card.append(avatar(p,id),e('span','',T(...names[id])),e('small','',current===id?T('مجهّز','Equipped'):T('معاينة','Preview')));
  card.addEventListener('click',()=>{
   preview.replaceChildren(avatar(p,id),e('b','',T(...names[id])));
   const apply=button(id==='none'?T('إزالة التأثير','Remove effect'):T('تجهيز التأثير','Equip effect'),'cl236-action');
   apply.disabled=current===id;
   apply.onclick=()=>equip(id,status);preview.append(apply);
   note.textContent=T('معاينة فقط، التغيير ينحفظ لما تضغط تجهيز.','Preview only. Equip to save this change.');
  });grid.append(card)
 }
 body.append(grid);
 if(!all.length)body.append(e('p','cl236-note',T('لسّا ما اشتريت تأثير. افتح متجر XP وشوف المعاينات.','No effects purchased yet. Explore previews in the XP shop.')));
 const actions=e('div','cl236-actions');
 const shop=button(T('متجر XP','XP shop'),'cl236-action');shop.onclick=()=>{$('closeSettingsModal')?.click();window.classoraSocialGarage?.openShop?.()};
 const gif=button(T('اختيار صورة GIF','Choose a GIF avatar'),'cl236-action');gif.onclick=()=>window.classoraGifStudio?.open?.();
 const close=button(T('تم · إغلاق التخصيص','Done · close'),'cl236-secondary');close.onclick=()=>{section.open=false;summary.focus()};
 actions.append(shop,gif,close);body.append(actions,status);section.append(body);
}
function sync(){if(!user()){$('cl228FxSettings')?.remove();localEffects();return}localEffects();if($('settingsModal')?.classList.contains('open'))settings()}
function init(){
 const modal=$('settingsModal');if(modal)new MutationObserver(()=>{if(modal.classList.contains('open'))sync()}).observe(modal,{attributes:true,attributeFilter:['class']});
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 for(const event of ['classora-auth-settled','classora:arena-shop-updated','classora:profile-video-changed'])document.addEventListener(event,sync);
 window.addEventListener('pageshow',sync);sync();
}
window.ClassoraProfileEffects={decorate,avatar,names,refresh:sync};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();