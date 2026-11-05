/* Grade preference uses the existing curriculum event and saved selection. */
(()=>{'use strict';
const grid=document.querySelector('#settingsModal .settings-grid');if(!grid)return;
const card=document.createElement('section');card.className='settings-card';card.id='classoraStudyGradeSettings';
const title=document.createElement('h3'),label=document.createElement('label'),select=document.createElement('select');select.id='classoraStudyGrade';label.htmlFor=select.id;
[7,8,9,10].forEach(g=>{const o=document.createElement('option');o.value=g;select.append(o)});card.append(title,label,select);grid.prepend(card);
function localize(){const lang=(document.documentElement.lang||'ar').split('-')[0],ar=lang==='ar';const t=(a,e)=>ar?a:lang==='en'?e:window.ClassoraLocale?.tFor?.(lang,e)||e;title.textContent=t('الصف الدراسي','School grade');label.textContent=t('المواد المعروضة حسب صفّك','Subjects follow your school grade');Array.from(select.options).forEach(o=>o.textContent=t('الصف '+({7:'السابع',8:'الثامن',9:'التاسع',10:'العاشر'}[o.value]),'Grade '+o.value))}
function sync(){let g='8';try{g=localStorage.getItem('classora_curriculum_grade')||'8'}catch{}select.value=['7','8','9','10'].includes(g)?g:'8'}
select.addEventListener('change',()=>{const grade=Number(select.value);try{localStorage.setItem('classora_curriculum_grade',String(grade))}catch{}document.dispatchEvent(new CustomEvent('classora:grade-change',{detail:{grade}}))});document.addEventListener('classora:grade-change',sync);window.addEventListener('storage',e=>{if(e.key==='classora_curriculum_grade')sync()});new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});localize();sync();
})();
