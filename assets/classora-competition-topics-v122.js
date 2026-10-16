/* Classora V122: Dedicated competition topic-selection step inside the EXISTING competition modal. */
import {classoraAssessment} from './classora-assessment-v121.js?v=149';
import {CURRICULUM_SUBJECTS} from './curriculum-v97.js?v=159';
export function installClassoraCompetitionTopicStep(){
 const home=document.getElementById('competitionHome'),select=document.getElementById('compQuickSubject');
 if(!home||!select||home.dataset.caTopicStepReady)return;
 home.dataset.caTopicStepReady='1';
 const lang=()=>document.documentElement.lang||'ar';
 const L=(ar,en)=>lang()==='ar'?ar:(window.ClassoraLocale?.t(en)||en);
 const topicName=item=>lang()==='ar'?item.title:(window.ClassoraLocale?.t(item.en)||item.en);
 const grade=()=>{let x=8;try{x=Number(localStorage.getItem('classora_curriculum_grade')||8)}catch{}return [7,8,9,10].includes(x)?x:8};
 const gradeName=g=>window.ClassoraLocale?.formatGrade?.(g,lang())||(lang()==='ar'?'الصف '+g:'Grade '+g);
 const subjectName=s=>{
  if(s==='arabic')return L('قواعد العربي','Arabic Grammar');
  if(s==='english')return 'English Grammar';
  return L(CURRICULUM_SUBJECTS[s]?.ar||s,CURRICULUM_SUBJECTS[s]?.en||s);
 };
 const icon='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16m-7-7 7 7-7 7"/></svg>';
 const openBtn=document.createElement('button');openBtn.className='ca-comp-topic-trigger';openBtn.type='button';openBtn.dataset.noTranslate='';
 openBtn.innerHTML='<span class="ca-comp-topic-trigger-title"></span><span class="ca-comp-topic-trigger-sub"></span>'+icon;
 select.after(openBtn);
 const screen=document.createElement('section');screen.className='ca-competition-topic-screen';screen.hidden=true;screen.dataset.noTranslate='';
 screen.innerHTML='<header class="ca-step-top"><button type="button" class="ca-step-back"><svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M19 12H5m7-7-7 7 7 7"/></svg><span></span></button><div class="ca-step-heading"><span class="ca-step-eyebrow">CLASSORA LIVE</span><h3></h3><p></p></div></header>'+
 '<div class="ca-choose-grade"><h4></h4><div class="ca-grade-tabs" role="group"></div></div>'+
 '<div class="ca-choose-subject"><h4></h4><div class="ca-subject-tabs" role="group"></div></div>'+
 '<label class="ca-choose-search"><span></span><input type="search" autocomplete="off" spellcheck="false"/></label>'+
 '<p class="ca-choose-count" role="status"></p><div class="ca-choose-topic-grid"></div>';
 home.append(screen);
 const gTabs=screen.querySelector('.ca-grade-tabs'),sTabs=screen.querySelector('.ca-subject-tabs');
 const search=screen.querySelector('input'),results=screen.querySelector('.ca-choose-topic-grid');
 let subject='math',open=false;
 const getTopic=()=>classoraAssessment.get(select.value);
 const topicsForGrade=()=>classoraAssessment.topics.filter(t=>t.grade===grade());
 function updateTrigger(){
  const selected=getTopic();
  openBtn.querySelector('.ca-comp-topic-trigger-title').textContent=L('اختيار موضوع المسابقة','Choose competition topic');
  openBtn.querySelector('.ca-comp-topic-trigger-sub').textContent=selected?
   gradeName(selected.grade)+' · '+subjectName(selected.subject)+' · '+topicName(selected):
   L('اضغط لاختيار الصف والمادة والموضوع','Choose your grade, subject and topic');
 }
 function closeStep(){
  open=false;screen.hidden=true;home.classList.remove('ca-topic-step-open');updateTrigger();
  openBtn.focus({preventScroll:true});
 }
 function openStep(){
  open=true;screen.hidden=false;home.classList.add('ca-topic-step-open');
  const prev=getTopic();subject=prev&&prev.grade===grade()?prev.subject:'math';
  search.value='';render();screen.querySelector('.ca-step-back').focus({preventScroll:true});
 }
 function render(){
  const g=grade(),all=topicsForGrade();
  const subjects=[...new Set(all.map(x=>x.subject))];
  if(!subjects.includes(subject))subject=subjects[0]||'math';
  screen.querySelector('.ca-step-back span').textContent=L('رجوع لإنشاء المسابقة','Back to competition setup');
  screen.querySelector('.ca-step-heading h3').textContent=L('اختار موضوع المسابقة','Choose a competition topic');
  screen.querySelector('.ca-step-heading p').textContent=L('الصف، وبعدها المادة، وبعدها الموضوع. الأسئلة بتكون من الدرس المختار فقط.','Choose a grade, then a subject, then a topic. Questions stay tied to the selected lesson.');
  screen.querySelector('.ca-choose-grade h4').textContent=L('1. اختر الصف','1. Choose grade');
  screen.querySelector('.ca-choose-subject h4').textContent=L('2. اختر المادة','2. Choose subject');
  screen.querySelector('.ca-choose-search span').textContent=L('3. ابحث عن الموضوع','3. Search topics');
  search.placeholder=L('ابحث باسم الموضوع…','Search for a lesson…');
  gTabs.replaceChildren();sTabs.replaceChildren();results.replaceChildren();
  for(const gr of [7,8,9,10]){
   const btn=document.createElement('button');btn.type='button';btn.textContent=gradeName(gr);
   btn.className='ca-grade-chip';btn.setAttribute('aria-pressed',String(gr===g));
   btn.onclick=()=>{
    if(gr!==grade()){
     try{localStorage.setItem('classora_curriculum_grade',String(gr))}catch{}
     document.dispatchEvent(new CustomEvent('classora:grade-change',{detail:{grade:gr}}));
    }
    subject='math';search.value='';render();updateTrigger();
   };
   gTabs.append(btn);
  }
  for(const key of subjects){
   const btn=document.createElement('button');btn.type='button';btn.className='ca-subject-chip';
   btn.textContent=subjectName(key);btn.dataset.subject=key;
   btn.setAttribute('aria-pressed',String(key===subject));
   btn.onclick=()=>{subject=key;search.value='';render()};
   sTabs.append(btn);
  }
  const q=search.value.toLocaleLowerCase();
  const items=all.filter(t=>t.subject===subject&&(!q||(t.title+' '+t.en).toLocaleLowerCase().includes(q)));
  screen.querySelector('.ca-choose-count').textContent=L(items.length+' موضوع في '+gradeName(g),items.length+' topics in '+gradeName(g));
  const fragment=document.createDocumentFragment();
  for(const item of items){
   const btn=document.createElement('button');btn.type='button';btn.className='ca-topic-choice';
   btn.classList.toggle('selected',item.value===select.value);
   const mark=document.createElement('span');mark.className='ca-choice-mark';mark.textContent=item.value===select.value?'✓':'↗';
   const name=document.createElement('b');name.textContent=topicName(item);
   const sub=document.createElement('small');sub.textContent=gradeName(item.grade)+' · '+subjectName(item.subject);
   btn.append(mark,name,sub);
   btn.onclick=()=>{
    select.value=item.value;
    select.dispatchEvent(new Event('change',{bubbles:true}));
    closeStep();
   };
   fragment.append(btn);
  }
  results.append(fragment);
  if(!items.length){
   const empty=document.createElement('p');empty.className='ca-topic-empty';
   empty.textContent=L('ما في مواضيع مطابقة. جرّب كلمة ثانية.','No matching topics. Try a different keyword.');
   results.append(empty);
  }
 }
 openBtn.onclick=openStep;
 screen.querySelector('.ca-step-back').onclick=closeStep;
 search.addEventListener('input',render);
 select.addEventListener('change',updateTrigger);
 document.addEventListener('classora:grade-change',()=>{if(open)render();updateTrigger()});
 new MutationObserver(()=>{updateTrigger();if(open)render()}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 document.getElementById('closeCompetitionModal')?.addEventListener('click',()=>{
  open=false;screen.hidden=true;home.classList.remove('ca-topic-step-open');
 });
 updateTrigger();
}
