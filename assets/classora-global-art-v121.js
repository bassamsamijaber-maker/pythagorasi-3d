/* Classora contextual art across real, existing views. No new navigation/buttons. */
import {classoraTopicArt} from './classora-topic-art-v120.js?v=121';
const $=id=>document.getElementById(id);
let frame=0;
function refresh(){
 frame=0;
 const hub=document.querySelector('.learning-hub'),subject=hub?.dataset.selectedSubject||'all';
 const lobby=$('platformLobby');
 if(lobby){
  const art=classoraTopicArt(subject, '');
  if(lobby.dataset.classoraGlobalArt!==subject){
   lobby.dataset.classoraGlobalArt=subject;
   lobby.style.setProperty('--classora-site-art',art);
  }
 }
 const exam=$('examSubject')?.value||'math',competition=$('compQuickSubject')?.value||'math',builder=$('scienceExamTopic')?.value||'science';
 const assessmentValue=val=>val.startsWith('curr:')?(window.classoraAssessmentTopics?.find(x=>x.value===val)||null):null;
 const examTopic=assessmentValue(exam),liveTopic=assessmentValue(competition),builderTopic=assessmentValue(builder);
 function context(value,topic){
  return [topic?.subject||(/science|periodic|atoms|acids/.test(value)?'science':/arabic|idafa/.test(value)?'arabic':/equations|pythag|mixed/.test(value)?'math':'all'),topic?.title||value];
 }
 const [es,et]=context(exam,examTopic),[ls,lt]=context(competition,liveTopic),[bs,bt]=context(builder,builderTopic);
 const examBox=$('examModal')?.querySelector('.modalbox');
 if(examBox){
  const choice=$('examBuilder')&&!$('examBuilder').classList.contains('hidden')?bs+'|'+bt:es+'|'+et;
  if(examBox.dataset.classoraArtKey!==choice){
   examBox.dataset.classoraArtKey=choice;
   examBox.style.setProperty('--classora-panel-art',classoraTopicArt(choice.split('|')[0],choice.split('|')[1]));
  }
 }
 const liveBox=$('competitionModal')?.querySelector('.modalbox');
 if(liveBox){
  const choice=ls+'|'+lt;
  if(liveBox.dataset.classoraArtKey!==choice){
   liveBox.dataset.classoraArtKey=choice;liveBox.style.setProperty('--classora-panel-art',classoraTopicArt(ls,lt));
  }
 }
 const cards=[['settingsModal','all'],['adminPanel','science'],['classModal','english']];
 for(const [id,kind] of cards){
  const el=$(id)?.querySelector('.modalbox');if(el&&!el.dataset.classoraArtKey){
   el.dataset.classoraArtKey=kind;el.style.setProperty('--classora-panel-art',classoraTopicArt(kind,''));
  }
 }
 const grade=$('classoraCurriculumModal');
 if(grade?.classList.contains('open'))document.body.dataset.classoraSubjectContext=grade.dataset.subject||'all';
 else document.body.dataset.classoraSubjectContext=subject;
}
function schedule(){if(frame)return;frame=requestAnimationFrame(refresh)}
document.addEventListener('change',e=>{if(['examSubject','compQuickSubject','scienceExamTopic'].includes(e.target.id))schedule()});
document.addEventListener('classora:math-context',schedule);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)schedule()});
window.addEventListener('load',schedule);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule,{once:true});else schedule();
setInterval(()=>{if(!document.hidden)window.classoraHomeV112?.refresh?.()},60*60*1000);


/* Site-wide appearance preferences. Mounted inside the existing Settings dialog. */
(function(){
 const KEY='classora-site-theme',END=Date.parse('2026-10-25T00:00:00+03:00');
 const labels={
 ar:['مظهر الموقع','الأصلي','الصباحي','التطريز الفلسطيني (حتى 24 أكتوبر)','تغيير ألوان الموقع بالكامل','بعد انتهاء أسبوع التراث يرجع المظهر الأصلي تلقائيًا'],
 en:['Site appearance','Original','Morning','Palestinian embroidery (through 24 October)','Change colors across the entire site','The original appearance returns automatically after heritage week'],
 es:['Apariencia del sitio','Original','Mañana','Bordado palestino (hasta el 24 de octubre)','Cambiar colores en todo el sitio','La apariencia original vuelve al terminar la semana'],
 ko:['사이트 모양','기본','아침','팔레스타인 자수 (10월 24일까지)','사이트 전체 색상 변경','유산 주간 후 기본 모양으로 돌아갑니다'],
 de:['Website-Darstellung','Original','Morgen','Palästinensische Stickerei (bis 24. Oktober)','Farben der gesamten Website ändern','Nach der Woche gilt wieder die ursprüngliche Darstellung'],
 it:['Aspetto del sito','Originale','Mattina','Ricamo palestinese (fino al 24 ottobre)','Cambia i colori di tutto il sito','Dopo la settimana torna il tema originale'],
 hi:['साइट की थीम','मूल','सुबह','फ़िलिस्तीनी कढ़ाई (24 अक्टूबर तक)','पूरी साइट के रंग बदलें','सप्ताह के बाद मूल रंग लौट आएँगे'],
 tr:['Site görünümü','Orijinal','Sabah','Filistin nakışı (24 Ekim’e kadar)','Tüm sitenin renklerini değiştir','Hafta bitince özgün görünüm geri gelir']
 };
 const css=`
 body[data-classora-theme="morning"]{--primary:#276f5b!important;--accent:#c49151!important;--bg:#fffef7!important;--surface:#fffdf8!important;background:#fffef7!important;color-scheme:light}
 body[data-classora-theme="morning"] #platformLobby,body[data-classora-theme="morning"] .learning-hub{background-color:#f6fcf3!important}
 body[data-classora-theme="morning"] .modalbox,body[data-classora-theme="morning"] .settings-card{background-color:#fffef9!important;color:#264f3d!important}
 body[data-classora-theme="embroidery"]{--primary:#8f3040!important;--accent:#c09a58!important;--bg:#fdf6ee!important;--surface:#fffaf4!important;background:#fdf6ee!important;color-scheme:light}
 body[data-classora-theme="embroidery"] #platformLobby,body[data-classora-theme="embroidery"] .learning-hub{background-color:#fdf3ed!important;background-image:repeating-linear-gradient(45deg,transparent,transparent 34px,#b7354420 35px,#b7354420 37px)!important}
 body[data-classora-theme="embroidery"] .modalbox{border-color:#b84c5a!important}
 body[data-classora-theme="embroidery"] .modalbox,body[data-classora-theme="embroidery"] .settings-card{background-color:#fff9f3!important;color:#632c34!important}
 body[data-classora-theme="embroidery"] button.primary,body[data-classora-theme="embroidery"] .btn-primary{background-color:#912f40!important}
 #classoraAppearanceSettings{margin:14px 0;padding:16px;border:1px solid #cdb9a5;border-radius:18px;background:#fffaf4;color:#244a3d;box-shadow:0 5px 25px #32241710}
 #classoraAppearanceSettings label{display:block;font-weight:800;margin-bottom:8px}
 #classoraAppearanceSettings select{width:100%;max-width:100%;padding:12px;border:1px solid #cdb9a5;border-radius:12px;background:#fff;color:#243b31}
 #classoraAppearanceSettings p{font-size:12px;line-height:1.6;margin:8px 0 0;color:#775d57}
 `;
 const style=document.createElement('style');style.textContent=css;document.head.append(style);
 const locale=()=>{const code=(document.documentElement.lang||'ar').split('-')[0];return labels[code]||labels.ar};
 function get(){let v='original';try{v=localStorage.getItem(KEY)||'original'}catch{}if(v==='embroidery'&&Date.now()>=END){v='original';try{localStorage.setItem(KEY,v)}catch{}}return ['original','morning','embroidery'].includes(v)?v:'original'}
 function apply(){const v=get();document.body?.setAttribute('data-classora-theme',v);document.querySelector('#classoraAppearanceSelect')?.setAttribute('data-current-theme',v);const select=document.querySelector('#classoraAppearanceSelect');if(select&&select.value!==v)select.value=v;}
 function mount(){const dialog=document.querySelector('#settingsModal .modalbox')||document.querySelector('#settingsModal');if(!dialog)return;
 let box=document.getElementById('classoraAppearanceSettings');if(!box){box=document.createElement('section');box.id='classoraAppearanceSettings';box.innerHTML='<label for="classoraAppearanceSelect"></label><select id="classoraAppearanceSelect"><option value="original"></option><option value="morning"></option><option value="embroidery"></option></select><p></p>';const anchor=dialog.querySelector('.modal-actions,.modal-footer');if(anchor)anchor.before(box);else dialog.append(box);box.querySelector('select').addEventListener('change',e=>{try{localStorage.setItem(KEY,e.target.value)}catch{}apply()});}
 const words=locale();box.querySelector('label').textContent=words[0];box.querySelectorAll('option').forEach((o,i)=>o.textContent=words[i+1]);box.querySelector('p').textContent=words[4]+'. '+words[5];apply();
 }
 let queued=false;const queue=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;mount()})};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{apply();queue();const root=document.getElementById('settingsModal');if(root)new MutationObserver(queue).observe(root,{childList:true,subtree:true})},{once:true});else{apply();queue();const root=document.getElementById('settingsModal');if(root)new MutationObserver(queue).observe(root,{childList:true,subtree:true})}
 document.addEventListener('click',e=>{if(e.target.closest('[id*="settings"],[id*="Settings"]'))queue()},{capture:true});
 new MutationObserver(()=>{if(document.getElementById('classoraAppearanceSettings'))mount()}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 setInterval(()=>{if(get()==='original'&&document.body?.dataset.classoraTheme==='embroidery')apply()},60*60*1000);
})();
