import {answerFeedback} from './learning-feedback-v130.js?v=130';
import {escapeMath as E} from './math-scenes-v119.js?v=119';

// Finite, reviewed question sets: never pad an exam with repeated questions.
export function mountHumanitiesPractice(host, questions, api, language) {
 const selectedLanguage=document.documentElement.lang||language;
 const T=(ar,en)=>selectedLanguage==='ar'?ar:(window.ClassoraLocale?.dictionaries?.[selectedLanguage]?.[en]||en);
 const counts=[...new Set([Math.min(3,questions.length),Math.min(5,questions.length),questions.length])].filter(Boolean);
 let index=0;
 host.innerHTML=`<span class="cm-eyebrow">03 / ${T('جرّب فهمك','CHECK YOUR UNDERSTANDING')}</span><h2>${T('تدريب من نفس الدرس','Practice this lesson')}</h2><p>${T('الأسئلة مختلفة ومحددة لهذا الموضوع. عدد الامتحان محدود بالأسئلة المتاحة.','Distinct questions for this topic. Exam length is limited to the available questions.')}</p><div class="cm-assessment"><label>${T('عدد الأسئلة','Questions')}<select class="cx-count">${counts.map(n=>`<option>${n}</option>`).join('')}</select></label><button class="cm-primary" data-cx="practice">${T('سؤال تدريبي','Practice question')}</button><button data-cx="exam">${T('امتحان','Exam')}</button>${api.isTeacher?.()?`<button data-cx="live">${T('مسابقة مباشرة','Live competition')}</button>`:''}</div><div class="cm-question" aria-live="polite"></div>`;
 const guest=()=>{if(api.isGuest?.()){api.requireLogin?.();return true}return false};
 host.querySelector('[data-cx="practice"]').onclick=()=>{
  if(guest()||!questions.length)return;
  const q=questions[index++%questions.length],box=host.querySelector('.cm-question');
  box.innerHTML=`<h3 dir="auto">${E(q.prompt)}</h3><div class="cm-answers">${q.options.map((o,i)=>`<button dir="auto" data-answer="${i}">${E(o)}</button>`).join('')}</div><p class="cm-feedback"></p>`;
  box.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{const correct=q.options[Number(b.dataset.answer)]===q.answer;box.querySelectorAll('button').forEach(x=>x.disabled=true);b.classList.add(correct?'correct':'incorrect');box.querySelector('.cm-feedback').textContent=answerFeedback(q,q.options[Number(b.dataset.answer)],language);api.record?.(correct,{question:q,selected:q.options[Number(b.dataset.answer)]})});
 };
 for(const type of ['exam','live']){const b=host.querySelector(`[data-cx="${type}"]`);if(b)b.onclick=async()=>{if(guest())return;b.disabled=true;try{await api.assess(type,Number(host.querySelector('.cx-count').value),'medium')}finally{if(b.isConnected)b.disabled=false}}}
}
