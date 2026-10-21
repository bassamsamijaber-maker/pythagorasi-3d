/* Classora GIF picker: searchable selection, explicit preview/save and native modal close. */
(()=>{
'use strict';
const $=id=>document.getElementById(id);
const T=(a,b)=>document.documentElement.lang==='ar'?a:(window.ClassoraLocale?.tFor?.(document.documentElement.lang||'en',b)||b);
const user=()=>document.body.classList.contains('classora-authenticated')?window.PythagorasiUser:null;
const e=(tag,cls,txt)=>{const n=document.createElement(tag);n.className=cls||'';if(txt!==undefined)n.textContent=String(txt);return n};
const button=(txt,cls)=>{const n=e('button',cls,txt);n.type='button';return n};
const gifs=[
 ['l0HlTy9x8FZo0XO1i','نار','Fire','energy'],
 ['l0HlLP5fowu9vAbUk','برق','Lightning','energy'],
 ['l41lVT8FpdxCtOOsM','نيون','Neon','colors'],
 ['3oKGzndj7T0i1vii40','مجرة','Galaxy','space'],
 ['Tj4jjaCxXRVSARsUzN','فضاء','Space','space'],
 ['nqh2NNyuwGMhjUK17h','ألوان','Colors','colors'],
 ['OkjZzv2gYjI4KqTItL','روبوت صغير','Little robot','characters'],
 ['OBqgopTpxXcnN9dIKm','روبوت ديجي','Digi robot','characters'],
 ['4NtPqIF3UuN17t6NnB','روبوت مرح','Playful robot','characters'],
 ['3o7abymIcVVfCbAze0','رائد فضاء يرقص','Dancing astronaut','space'],
 ['wKncAzOchpYZib3Tz4','طفو في الفضاء','Floating in space','space'],
 ['3ohzdSNImYTQe2YkE0','تحية من الفضاء','Hello from space','space'],
 ['GmVrwnj2WWeCB13lGv','قطة لطيفة','Cute cat','characters'],
 ['gHCyzkMBQv2q07dzUq','قطة هادئة','Calm cat','characters']
];
const media=id=>'https://media.giphy.com/media/'+id+'/giphy.gif';
let dialog=null,objectUrl='',busy=false,selection=null,ready=false,owner='',revision=0;
function normalize(raw){
 const u=new URL(String(raw).trim());
 if(u.protocol!=='https:'||u.username||u.password)throw Error('invalid');
 if(['giphy.com','www.giphy.com'].includes(u.hostname)){
  const id=u.pathname.split('/').filter(Boolean).pop()?.split('-').pop();
  if(!/^[A-Za-z0-9]{8,32}$/.test(id||''))throw Error('invalid');return media(id);
 }
 if(/^(?:media[0-4]?|i)\.giphy\.com$/.test(u.hostname)&&/^\/media\/[A-Za-z0-9]{8,32}\/(?:giphy|200|original)\.gif$/i.test(u.pathname))return 'https://media.giphy.com'+u.pathname;
 if(u.hostname==='media.tenor.com'&&/^\/[A-Za-z0-9_-]{10,150}\/[^/?#]{1,90}\.gif$/i.test(u.pathname))return u.origin+u.pathname;
 throw Error('invalid');
}
function cleanup(){revision++;if(objectUrl){URL.revokeObjectURL(objectUrl);objectUrl=''}selection=null;ready=false;dialog?.remove();dialog=null}
function open(){
 if(!user()||dialog)return;
 owner=user().uid;selection=null;ready=false;busy=false;
 dialog=e('dialog','cl236-gif-dialog');dialog.id='cl236GifDialog';dialog.setAttribute('aria-labelledby','cl236GifTitle');
 const header=e('header','cl236-dialog-head');
 const title=e('h2','',T('اختار صورة متحركة','Choose your GIF'));title.id='cl236GifTitle';
 const close=button('×','cl236-close');close.setAttribute('aria-label',T('إغلاق','Close'));close.onclick=()=>dialog.close();
 header.append(title,close);dialog.append(header);
 const preview=e('div','cl236-gif-preview');
 const photo=e('img','cl236-gif-large');photo.alt=T('معاينة صورة الحساب','Profile photo preview');
 const copy=e('div');copy.append(e('b','',user().displayName||''),e('p','',T('هيك بتبين صورتك. احفظ لما يعجبك الاختيار.','This is how your avatar looks. Save when you are happy with it.')));
 copy.firstElementChild.setAttribute('data-no-translate','');preview.append(photo,copy);dialog.append(preview);
 if(user().photoData)photo.src=user().photoData;else photo.hidden=true;
 const status=e('p','cl236-status');status.setAttribute('role','status');
 const save=button(T('حفظ الصورة','Save avatar'),'cl236-action');save.disabled=true;
 function choose(value){
  selection=value;ready=false;save.disabled=true;photo.hidden=false;status.textContent=T('جاري تحميل المعاينة…','Loading preview...');
  const token=++revision;const probe=new Image();
  probe.onload=()=>{if(token!==revision||!dialog)return;ready=true;photo.src=value.url;save.disabled=false;status.textContent=T('معاينة فقط · اضغط حفظ لتطبيقها','Preview only · Save to apply')};
  probe.onerror=()=>{if(token!==revision||!dialog)return;ready=false;save.disabled=true;status.textContent=T('الصورة ما تحمّلت. جرّب اختيار ثاني أو ارفع GIF من جهازك.','Image could not load. Try another GIF or upload one.')};
  probe.src=value.url;
 }
 const search=e('input','cl236-search');search.type='search';search.placeholder=T('ابحث ضمن المجموعة…','Search this collection...');search.setAttribute('aria-label',search.placeholder);dialog.append(search);
 const tabs=e('div','cl236-categories');tabs.setAttribute('role','group');tabs.setAttribute('aria-label',T('فئات GIF','GIF categories'));
 let category='all';const grid=e('div','cl236-gif-grid');
 const external=e('a','cl236-external',T('ابحث عن المزيد على GIPHY ↗','Find more on GIPHY ↗'));external.target='_blank';external.rel='noopener noreferrer';
 const draw=()=>{
  grid.replaceChildren();const query=search.value.trim().toLowerCase();
  external.href='https://giphy.com/search/'+encodeURIComponent(query||'animated-avatar');
  for(const [id,ar,en,cat] of gifs.filter(row=>(category==='all'||row[3]===category)&&(!query||(row.slice(1).join(' ')+' '+T(row[1],row[2])).toLowerCase().includes(query)))){
   const b=button('','cl236-gif-choice'),img=e('img');img.src=media(id);img.alt=T(ar,en);img.loading='lazy';
   img.onerror=()=>{b.disabled=true;b.title=T('تعذر تحميل الصورة','Image unavailable')};
   b.append(img,e('span','',T(ar,en)));b.onclick=()=>{grid.querySelectorAll('button').forEach(n=>n.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true');choose({url:media(id)})};grid.append(b)
  }
  if(!grid.children.length)grid.append(e('p','cl236-note',T('ما في نتيجة بالمجموعة. جرّب كلمة ثانية أو ابحث على GIPHY.','No match in this collection. Try another word or search GIPHY.')));
 };
 for(const [id,ar,en] of [['all','الكل','All'],['energy','طاقة','Energy'],['space','فضاء','Space'],['colors','ألوان','Colors'],['characters','شخصيات','Characters']]){
  const tab=button(T(ar,en),'cl236-tab');tab.setAttribute('aria-pressed',String(id===category));
  tab.onclick=()=>{category=id;tabs.querySelectorAll('button').forEach(n=>n.setAttribute('aria-pressed','false'));tab.setAttribute('aria-pressed','true');draw()};tabs.append(tab)
 }
 search.oninput=draw;dialog.append(tabs,grid,external);
 const links=e('details','cl236-link-panel');links.append(e('summary','',T('عندي رابط GIF','Use a GIF link')));
 const input=e('input','cl236-search');input.type='url';input.placeholder='GIPHY / media.tenor.com';input.setAttribute('aria-label',T('رابط GIF','GIF URL'));
 const check=button(T('معاينة الرابط','Preview link'),'cl236-secondary');
 check.onclick=()=>{try{choose({url:normalize(input.value)})}catch{status.textContent=T('ألصق رابط GIPHY أو رابط GIF مباشر من media.tenor.com.','Paste a GIPHY link or a direct GIF link from media.tenor.com.')}};
 links.append(input,check);dialog.append(links);
 const file=e('input');file.type='file';file.accept='image/gif';file.hidden=true;
 file.onchange=()=>{const f=file.files?.[0];if(!f)return;if(f.type!=='image/gif'||f.size>5*1024*1024){status.textContent=T('اختار GIF حجمه حتى 5MB.','Choose a GIF up to 5MB.');return}if(objectUrl)URL.revokeObjectURL(objectUrl);objectUrl=URL.createObjectURL(f);choose({url:objectUrl,file:f})};
 const upload=button(T('رفع GIF من الجهاز','Upload GIF'),'cl236-secondary');upload.onclick=()=>file.click();
 save.onclick=async()=>{
  if(!selection||!ready||busy||user()?.uid!==owner)return;
  busy=true;save.disabled=true;status.textContent=T('جاري الحفظ…','Saving...');
  const value=selection,activeDialog=dialog,activeOwner=owner;
  try{
   if(value.file)await window.classoraSaveProfilePhoto(value.file);else await window.classoraSetProfileGif(value.url);
   if(dialog===activeDialog&&user()?.uid===activeOwner){status.textContent=T('تم حفظ الصورة','Avatar saved');dialog.close()}
  }catch{if(dialog===activeDialog)status.textContent=T('تعذر الحفظ. جرّب مجددًا؛ صورتك الحالية ما تغيّرت بالمعاينة.','Could not save. Please retry. Previewing does not change your avatar.')}
  finally{if(dialog===activeDialog){busy=false;save.disabled=!ready}}
 };
 const controls=e('footer','cl236-actions');controls.append(upload,file,save);dialog.append(status,controls,e('small','cl236-note',T('مجموعة منتقاة من GIPHY · البحث هنا ضمن المجموعة','A curated GIPHY collection · search filters this collection')));
 dialog.addEventListener('close',cleanup,{once:true});
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
 document.body.append(dialog);draw();dialog.showModal();search.focus();
}
function init(){
 window.classoraGifStudio={open};
 const profile=$('profileModal');if(profile)new MutationObserver(()=>{
  if(!profile.classList.contains('open')||$('cl236ProfileGifButton'))return;
  const b=button(T('اختيار صورة GIF','Choose a GIF avatar'),'cl236-action');b.id='cl236ProfileGifButton';b.onclick=open;profile.querySelector('.profile-hero')?.after(b);
 }).observe(profile,{attributes:true,attributeFilter:['class']});
 document.addEventListener('classora-auth-settled',()=>{if(dialog&&user()?.uid!==owner)dialog.close()});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
