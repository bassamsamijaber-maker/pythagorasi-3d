/* Classora animated profile GIF picker & identity summary v232 */
import {learningState} from './learning-memory-v130.js?v=130';
(()=>{
const $=id=>document.getElementById(id);
const T=(a,b)=>document.documentElement.lang==='ar'?a:(window.ClassoraLocale?.tFor?.(document.documentElement.lang||'en',b)||b);
const node=(tag,cls,txt)=>{const n=document.createElement(tag);n.className=cls||'';if(txt!==undefined)n.textContent=String(txt);return n};
const button=(name,cls)=>{const n=node('button',cls,name);n.type='button';return n};
const user=()=>document.body.classList.contains('classora-authenticated')?window.PythagorasiUser:null;
const gifs=[
 ['l0HlTy9x8FZo0XO1i','نار','Fire'],['l0HlLP5fowu9vAbUk','برق','Lightning'],
 ['l41lVT8FpdxCtOOsM','نيون','Neon'],['3oKGzndj7T0i1vii40','مجرة','Galaxy'],
 ['Tj4jjaCxXRVSARsUzN','فضاء','Space'],['nqh2NNyuwGMhjUK17h','ألوان','Colors']
];
const url=id=>'https://media.giphy.com/media/'+id+'/giphy.gif';
const names={flame:['شرار النار','Fire sparks'],lightning:['برق','Lightning'],ice:['جليد','Ice'],plasma:['بلازما','Plasma'],rocket:['صاروخ','Rocket'],comet:['مذنّب','Comet'],champion:['بطل','Champion'],starlight:['نجوم','Starlight'],aura:['هالة','Aura'],none:['بدون تأثير','No effect']};
const earned={none:['بدون','None'],bronze:['المستكشف','Explorer'],neon:['نيون','Neon'],sparkle:['النجوم','Sparkles'],galaxy:['المجرة','Galaxy'],legend:['الأسطورة','Legend'],fire:['شرار النار','Fire sparks']};
let selected='',busy=false;
function identity(){
 const p=user(),id=$('profilePublicId')?.parentElement;if(!p||!id)return;
 let box=$('cl232Identity');
 if(!box){box=node('div','cl232-identity');box.id='cl232Identity';id.after(box)}
 const equipped=names[p.questShop?.equipped]||names.none;
 const reward=earned[learningState().cosmetics?.value]||earned.none;
 const gif=/giphy[.]com|tenor[.]com|^data:image[/]gif/.test(String(p.photoData||''));
 box.replaceChildren();
 for(const pair of [[T('تأثير المتجر','Shop effect'),T(...equipped)],[T('إطار المغامرة','Adventure frame'),T(...reward)],[T('الصورة الحالية','Current avatar'),gif?'GIF':T('صورة عادية','Photo')]]){
 const line=node('div','cl232-identity-line');line.append(node('b','',pair[0]),node('span','',pair[1]));box.append(line)
 }
}
function studio(){
 const p=user(),modal=$('profileModal');if(!p||!modal||$('cl232GifStudio'))return;
 const anchor=$('cl227ProfileExtras')||modal.querySelector('.profile-hero');if(!anchor)return;
 const card=node('section','cl232-gif-studio');card.id='cl232GifStudio';
 card.append(node('h3','',T('اختار GIF لبروفايلك','Choose a GIF avatar')),node('p','cl232-gif-intro',T('GIFات جاهزة منتقاة؛ عاين قبل ما تحفظ. وتقدر تتصفح ترندات GIPHY وTenor.','Curated popular GIFs. Preview before saving, or browse GIPHY and Tenor trends.')));
 const preview=node('div','cl232-gif-preview');
 const pic=node('img','cl232-gif-large');pic.id='cl232GifPreview';pic.src=String(p.photoData||url(gifs[0][0]));pic.alt=T('معاينة GIF','GIF preview');
 const guide=node('span','cl232-preview-hint',T('معاينة فقط · ما تغير حسابك','Preview only · your avatar is unchanged'));
 preview.append(pic,guide);card.append(preview);
 const grid=node('div','cl232-gif-grid');
 for(const [id,ar,en] of gifs){
  const choice=button('','cl232-gif-choice');
  const img=node('img','cl232-gif-thumb');img.src=url(id);img.alt=T(ar,en);img.loading='lazy';
  choice.append(img,node('small','',T(ar,en)));
  choice.addEventListener('click',()=>{
   selected=url(id);pic.src=selected;grid.querySelectorAll('button').forEach(x=>x.classList.remove('selected'));choice.classList.add('selected');setMsg(T('تأكد من المعاينة وبعدين اضغط حفظ.','Check the preview, then tap Save.'));
  });grid.append(choice)
 }
 card.append(grid);
 const input=node('input','cl232-gif-input');input.type='url';input.placeholder='https://giphy.com/gifs/...';input.maxLength=720;
 input.setAttribute('aria-label',T('رابط GIF','GIF link'));
 const check=button(T('عاين الرابط','Preview link'),'cl232-gif-try');
 check.addEventListener('click',()=>{
  try{
   const parsed=new URL(input.value.trim());
   if(parsed.protocol!=='https:'||!['giphy.com','www.giphy.com','media.giphy.com','media.tenor.com'].includes(parsed.hostname))throw Error('invalid');
   selected=parsed.href;const tail=parsed.pathname.split('/').pop().split('-').pop();
   pic.src=parsed.hostname.includes('giphy.com')&&/^[a-zA-Z0-9]{8,32}$/.test(tail)?url(tail):selected;
   setMsg(T('المعاينة جاهزة، اضغط حفظ.','Preview ready. Tap Save.'));
  }catch{setMsg(T('الرابط لازم يكون من GIPHY أو Tenor.','The link must be from GIPHY or Tenor.'))}
 });
 const inputRow=node('div','cl232-gif-inputrow');inputRow.append(input,check);card.append(inputRow);
 const links=node('div','cl232-gif-links');
 for(const [source,text] of [['https://giphy.com/trending',T('ترندات GIPHY','GIPHY trends')],['https://tenor.com/trending',T('ترندات Tenor','Tenor trends')]]){
  const a=node('a','cl232-gif-link',text);a.href=source;a.target='_blank';a.rel='noopener noreferrer';links.append(a)
 }card.append(links);
 const controls=node('div','cl232-gif-actions');
 const save=button(T('حفظ GIF','Save GIF'),'cl232-gif-save');
 const upload=button(T('رفع GIF من الجهاز','Upload GIF'),'cl232-gif-upload');
 upload.addEventListener('click',()=>$('profilePhotoInput')?.click());
 save.addEventListener('click',async()=>{
  if(!selected||busy)return;busy=true;save.disabled=true;setMsg(T('جاري الحفظ...','Saving...'));
  try{await window.classoraSetProfileGif(selected);setMsg(T('تم حفظ GIF في البروفايل!','GIF avatar saved!'));identity()}
  catch{setMsg(T('ما زبط الحفظ. جرّب رابط GIF مباشر من GIPHY.','Could not save. Try a direct GIPHY GIF link.'))}
  finally{save.disabled=false;busy=false}
 });
 controls.append(save,upload);card.append(controls);
 const status=node('p','cl232-gif-status','');status.id='cl232GifStatus';status.setAttribute('role','status');card.append(status);
 card.append(node('small','cl232-gif-credit',T('اختيارات من GIPHY · مش بث ترندات لحظي','Selections via GIPHY · not a live trends feed')));
 anchor.after(card);
}
function setMsg(msg){const n=$('cl232GifStatus');if(n)n.textContent=msg}
function sync(){if(!$('profileModal')?.classList.contains('open')||!user())return;studio();identity()}
function init(){
 const modal=$('profileModal');if(modal)new MutationObserver(sync).observe(modal,{attributes:true,attributeFilter:['class']});
 document.addEventListener('classora-auth-settled',sync);
 document.addEventListener('classora:arena-shop-updated',sync);
 document.addEventListener('classora:profile-video-changed',sync);
 document.addEventListener('classora:learning-update',sync);
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 window.addEventListener('pageshow',sync);sync()
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init()
})();