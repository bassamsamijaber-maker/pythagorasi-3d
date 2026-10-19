/* Classora Learning Boost V215.
 * Reuses account-scoped curriculum attempt history + approved assessment bank.
 * Daily quiz stores answers only under this user's own device key, then records
 * real correct/incorrect attempts in Classora's existing learning memory.
 * Never fabricates live status, XP, grades or teacher data.
 */
import {learningState, reviewTopics, recordLearningAttempt} from './learning-memory-v130.js?v=130';
const $=id=>document.getElementById(id);
const locale=()=>document.documentElement.lang||'ar';
const tr=(ar,en)=>locale()==='ar'?ar:(locale()==='en'?en:(window.ClassoraLocale?.tFor?.(locale(),en)||en));
const subjectNames={math:['رياضيات','Mathematics'],geometry:['هندسة','Geometry'],science:['علوم','Science'],arabic:['عربي','Arabic'],english:['إنجليزي','English'],history:['تاريخ','History'],geography:['جغرافيا','Geography']};
const label=(ar,en)=>'<span data-cl215-ar="'+ar+'" data-cl215-en="'+en+'">'+ar+'</span>';
const icon=(kind)=>{
 const p={brain:'<path d="M9 5a4 4 0 0 0-6 4v1a4 4 0 0 0 0 7 4 4 0 0 0 6 3M9 5a4 4 0 0 1 3-3m-3 3v15m3-18a4 4 0 0 1 3 3 4 4 0 0 1 6 4v1a4 4 0 0 1 0 7 4 4 0 0 1-6 3m0-15v15"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',map:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18m-9-9a15 15 0 0 0 0 18m0-18a15 15 0 0 1 0 18M5 7h14M5 17h14"/>',check:'<path d="m4 13 5 5L20 6"/>',close:'<path d="M5 5l14 14M19 5 5 19"/>',arrow:'<path d="m15 5-7 7 7 7"/>',refresh:'<path d="M21 4v6h-6M3 20v-6h6"/><path d="M4 9a8 8 0 0 1 14-3l3 4M3 14l3 4a8 8 0 0 0 14-3"/>',book:'<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1m0-14c3-2 6-2 9-1v14c-3-1-6-1-9 1m0-14v14"/>'};
 return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(p[kind]||p.book)+'</svg>';
};
const node=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=String(txt);return e};
const btn=(title,cls='cl215-action')=>{const b=node('button',cls,title);b.type='button';return b};
const student=()=>{const p=window.PythagorasiUser;return p&&p.role==='student'&&p.uid&&document.body.classList.contains('classora-student-mode')&&!$('authGate')?.classList.contains('show')?p:null};
const grade=()=>{const p=student(),n=Number(p?.grade||localStorage.getItem('classora_curriculum_grade')||8);return [7,8,9,10].includes(n)?n:8};
const asTopic=a=>a?.topic||a||{};
const langDate=()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')};
const dailyKey=p=>'classora_daily_v215_'+p.uid+'_'+langDate();
const hash=value=>{let h=2166136261;for(const c of String(value)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const formatTitle=t=>locale()==='ar'?String(t.title||''):(window.classoraAssessment?.topics?.find(x=>x.grade===Number(t.grade)&&x.subject===t.subject&&x.title===t.title)?.en||String(t.title||''));
function openTopic(t){
 const topic=asTopic(t),g=Number(topic.grade),subject=String(topic.subject||''),name=String(topic.title||'');
 if(![7,8,9,10].includes(g)||!subjectNames[subject]||!name){$('classoraLearningFront')?.querySelector('[data-cl-action="subjects"]')?.click();return}
 if(window.classoraCurriculum?.openAt)window.classoraCurriculum.openAt(g,subject,name);
 else $('classoraLearningFront')?.querySelector('[data-cl-action="subjects"]')?.click();
}
function attempts(){
 const s=learningState(),id=String(student()?.uid||'');
 if(!id)return [];
 return Object.values(s.attempts||{}).filter(a=>a&&a.topic&&[7,8,9,10].includes(Number(a.topic.grade))).sort((a,b)=>Number(b.at||0)-Number(a.at||0));
}
function localize(root){
 root.querySelectorAll('[data-cl215-ar][data-cl215-en]').forEach(el=>{
  const ar=el.dataset.cl215Ar||'',en=el.dataset.cl215En||'';
  const val=tr(ar,en);
  if(el.textContent!==val)el.textContent=val;
 });
 root.lang=locale();root.dir=locale()==='ar'?'rtl':'ltr';
}
function clearPanel(){const panel=$('cl215Panel');if(panel){panel.hidden=true;panel.replaceChildren()}}
let modalState=null;
function beginPanel(titleAr,titleEn){
 const panel=$('cl215Panel');if(!panel)return null;
 panel.replaceChildren();
 const bar=node('div','cl215-panel-header');
 const h=node('h2','cl215-panel-title',tr(titleAr,titleEn));
 const close=btn('×','cl215-close');close.setAttribute('aria-label',tr('إغلاق القسم','Close section'));close.addEventListener('click',clearPanel);
 bar.append(h,close);
 const main=node('div','cl215-panel-body');main.id='cl215PanelBody';main.setAttribute('aria-live','polite');
 panel.append(bar,main);panel.hidden=false;
 panel.scrollIntoView({block:'start',behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth'});
 return main;
}
function empty(main,messageAr,messageEn,actionAr,actionEn,action){
 main.append(node('p','cl215-empty',tr(messageAr,messageEn)));
 const b=btn(tr(actionAr,actionEn));b.addEventListener('click',action);main.append(b);
}
function openMistakes(){
 if(!student())return;
 const main=beginPanel('راجع أخطائك','Review your mistakes');if(!main)return;
 const wrong=attempts().filter(a=>a.correct===false).slice(0,14);
 if(!wrong.length){empty(main,'لسه ما في أخطاء مسجّلة في تدريبات الدروس. ابدأ تدريب عشان تظهر هون.','No lesson-practice mistakes have been recorded yet. Try some exercises first.','ابدأ تدريب','Start practice',()=>{$('lobbyQuestionBtn')?.click()});return}
 main.append(node('p','cl215-panel-description',tr('هاي أسئلة أخطأت فيها فعلًا خلال تدريباتك. افتح التصحيح أو ارجع للدرس.','These come from your actual lesson-practice answers. Reveal the correction or revisit the lesson.')));
 for(const a of wrong){
  const t=asTopic(a),row=node('article','cl215-mistake');
  const heading=node('div','cl215-mistake-heading');
  heading.append(node('strong','',formatTitle(t)||tr('درس','Lesson')),node('small','',subjectNames[t.subject]?tr(...subjectNames[t.subject]):''));
  row.append(heading);
  if(a.question?.prompt){
   row.append(node('p','cl215-question',a.question.prompt));
   if(a.selected)row.append(node('p','cl215-selected',tr('جوابك السابق: ','Your previous answer: ')+a.selected));
   const correction=node('div','cl215-correction');correction.hidden=true;
   correction.append(node('strong','',tr('الإجابة الصحيحة: ','Correct answer: ')+String(a.question.answer||tr('ارجع للدرس','Revisit lesson'))));
   if(a.question.explanation)correction.append(node('p','',a.question.explanation));
   const reveal=btn(tr('اظهر التصحيح','Show correction'),'cl215-outline');
   reveal.setAttribute('aria-expanded','false');reveal.addEventListener('click',()=>{
    correction.hidden=!correction.hidden;reveal.setAttribute('aria-expanded',String(!correction.hidden));
    reveal.textContent=correction.hidden?tr('اظهر التصحيح','Show correction'):tr('اخفِ التصحيح','Hide correction');
   });
   row.append(reveal,correction);
  }else row.append(node('p','cl215-selected',tr('المحاولة محفوظة، لكن نص السؤال القديم غير متوفر.','This attempt is recorded, but its question text is unavailable.')));
  const visit=btn(tr('افتح الدرس','Open lesson'),'cl215-visit');
  visit.addEventListener('click',()=>openTopic(t));row.append(visit);main.append(row);
 }
}
function openPath(){
 if(!student())return;
 const main=beginPanel('مسارك الدراسي','Your learning path');if(!main)return;
 const p=student(),g=grade(),weak=reviewTopics(g),state=learningState();
 const latest=state.last?.topic;
 const byGrade=(window.classoraAssessment?.topics||[]).filter(t=>t.grade===g);
 const sessions=new Set(Object.keys(state.sessions||{}));
 const chosen=[],used=new Set();
 const add=(topic,desc)=>{
  const t=asTopic(topic);
  if(!t||!t.title||!t.subject||!t.grade||used.has(t.id))return;
  used.add(t.id);chosen.push({topic:t,desc});
 };
 weak.slice(0,2).forEach(x=>add(x.topic,tr('موضوع فيه أخطاء تستحق المراجعة','A topic with mistakes to review')));
 if(latest)add(latest,tr('آخر درس كنت بتتعلمه','Your most recent lesson'));
 const fresh=byGrade.find(t=>!sessions.has(t.value)&&!used.has(t.value)&&!chosen.some(x=>x.topic.title===t.title));
 if(fresh)add({...fresh,id:fresh.value},tr('موضوع جديد من صفك','A fresh topic for your grade'));
 for(const t of byGrade){if(chosen.length>=4)break;add({...t,id:t.value},tr('استكشف درسًا من موادك','Explore a topic from your subjects'))}
 if(!chosen.length){empty(main,'اختار المواد وابدأ أول درس عشان نبني مسارك.','Choose a subject and start learning to build your path.','المواد','Subjects',()=>{$('classoraLearningFront')?.querySelector('[data-cl-action="subjects"]')?.click()});return}
 main.append(node('p','cl215-panel-description',tr('الأولوية للمراجعة حسب المحاولات المسجّلة، وبعدها آخر درس والمواضيع الجديدة.','Topics with recorded mistakes come first, followed by your last lesson and new topics.')));
 chosen.slice(0,4).forEach((row,i)=>{
  const b=btn('','cl215-path-card'),n=node('span','cl215-path-number',String(i+1)),copy=node('span','cl215-path-copy');
  copy.append(node('strong','',formatTitle(row.topic)),node('small','',row.desc));
  b.append(n,copy,node('span','cl215-path-arrow','↗'));b.addEventListener('click',()=>openTopic(row.topic));main.append(b);
 });
}
function openMap(){
 if(!student())return;
 const main=beginPanel('خريطة المعرفة','Knowledge map');if(!main)return;
 const s=learningState(),topics=(window.classoraAssessment?.topics||[]).filter(x=>x.grade===grade());
 const studied=new Set(Object.values(s.sessions||{}).map(x=>x?.topic?.id).filter(Boolean));
 const weak=reviewTopics(grade());
 main.append(node('p','cl215-panel-description',tr('العدد بيبيّن الدروس اللي بدأت فيها، مش شهادة إتقان للمادة.','The numbers show lessons you started, not proof of mastery.')));
 const grid=node('div','cl215-map-grid');
 for(const [key,names] of Object.entries(subjectNames)){
  const all=topics.filter(t=>t.subject===key);
  if(!all.length)continue;
  const count=all.filter(t=>studied.has(t.value)).length,errors=weak.filter(w=>w.topic?.subject===key).length;
  const b=btn('','cl215-map-tile');
  const circle=node('div','cl215-map-ring');
  circle.style.setProperty('--cl215-percent',(100*count/all.length).toFixed(1)+'%');
  circle.append(node('b','',count+'/'+all.length));
  const labelBox=node('div','cl215-map-label');
  labelBox.append(node('strong','',tr(...names)),node('small','',errors?tr('فيه مواضيع للمراجعة','Topics need review'):tr('افتح موادك لتتقدم','Open your lessons to progress')));
  b.append(circle,labelBox);b.addEventListener('click',()=>{
   const t=all.find(x=>!studied.has(x.value))||all[0];
   openTopic({...t,id:t.value});
  });grid.append(b);
 }
 main.append(grid);
}
function readDaily(p){
 try{
  const data=JSON.parse(localStorage.getItem(dailyKey(p))||'null');
  if(data&&data.date===langDate()&&data.uid===p.uid&&data.grade===grade()&&Array.isArray(data.questions)&&data.questions.length===5&&Array.isArray(data.answers))return data;
 }catch{}
 return null;
}
let dailyVolatile=null;
function writeDaily(data){dailyVolatile=data;try{localStorage.setItem(dailyKey(student()),JSON.stringify(data))}catch{}}
function createDaily(){
 const p=student(),bank=window.classoraAssessment;
 if(!p||!bank?.generate||!Array.isArray(bank.topics))return null;
 const g=grade(),date=langDate(),source=locale()==='ar'?'ar':'en',seed=hash(date+'|'+g+'|'+p.uid);
 const pool=bank.topics.filter(t=>t.grade===g&&subjectNames[t.subject]);
 // Rotate the subject order by day, then sample varied topics from real curriculum.
 const subjects=Object.keys(subjectNames).filter(sub=>pool.some(t=>t.subject===sub));
 subjects.sort((a,b)=>hash(a+seed)-hash(b+seed));
 const sorted=[...pool].sort((a,b)=>hash(a.value+seed)-hash(b.value+seed));
 const out=[],used=new Set(),usedSubjects=new Set();
 for(const t of [...subjects.map(sub=>sorted.find(x=>x.subject===sub)).filter(Boolean),...sorted]){
  if(out.length===5)break;
  if(used.has(t.value)||usedSubjects.has(t.subject))continue;
  used.add(t.value);
  try{
   const level=['easy','medium','hard','expert'][out.length%4];
   const generated=bank.generate(t.value,2,level,source,true);
   const q=generated?.questions?.find(q=>q.type==='mcq'&&q.prompt&&Array.isArray(q.options)&&q.options.length>=2&&q.options.includes(String(q.answer))&&!/[<>]/.test(q.prompt)&&q.options.every(x=>!/[<>]/.test(String(x))));
   if(!q)continue;
   out.push({prompt:String(q.prompt).slice(0,1200),options:q.options.map(x=>String(x).slice(0,180)),answer:String(q.answer),explanation:String(q.explanation||'').slice(0,1000),title:t.title,subject:t.subject,grade:t.grade,id:t.value,index:t.index,level});
   usedSubjects.add(t.subject);
  }catch(e){console.warn('Classora daily challenge skip',t.value,e?.message)}
 }
 if(out.length<5)return null;
 const data={version:215,uid:p.uid,date,grade:g,language:source,questions:out,answers:[],completed:false};
 writeDaily(data);return data;
}
function dailyState(){
 const p=student();if(!p)return null;
 const saved=readDaily(p);
 if(saved)return saved;
 if(dailyVolatile?.uid===p.uid&&dailyVolatile?.date===langDate()&&dailyVolatile.grade===grade())return dailyVolatile;
 return createDaily();
}
function openChallenge(){
 if(!student())return;
 const main=beginPanel('تحدّي اليوم','Today’s challenge');if(!main)return;
 const daily=dailyState();
 if(!daily){
  empty(main,'تعذّر تجهيز الأسئلة حاليًا. جرّب بعد تحميل بنك الأسئلة أو افتح مركز الامتحانات.','Questions could not load right now. Try again when the question bank is ready, or use the exam center.','فتح الامتحانات','Open exam center',()=>{$('lobbyExamBtn')?.click()});
  return;
 }
 const questions=daily.questions,answered=daily.answers.length;
 main.append(node('p','cl215-panel-description',tr('5 أسئلة من مواد صفك، مع تصحيح فوري. تُحفظ المحاولات ضمن سجل تعلّمك، من غير نقاط وهمية.','Five questions from your grade with instant feedback. Answers become real learning attempts, with no invented XP.')));
 const state=node('div','cl215-daily-status');
 const bar=node('div','cl215-daily-bar');const fill=node('i','');bar.append(fill);
 main.append(state,bar);
 const quiz=node('div','cl215-quiz');main.append(quiz);
 let viewing=Math.min(answered,4);
 const num=new Intl.NumberFormat(locale()==='ar'?'en-US':(locale()==='en'?'en-US':locale()));
 function draw(){
  state.textContent=tr('إجابات اليوم: ','Answered today: ')+num.format(daily.answers.length)+' / '+num.format(5);
  fill.style.width=(daily.answers.length*20)+'%';
  quiz.replaceChildren();
  if(daily.answers.length===5&&viewing>=5){
   const score=daily.answers.filter((v,i)=>v===questions[i].answer).length;
   quiz.append(node('div','cl215-score',num.format(score)+' / 5'));
   quiz.append(node('h3','',tr('خلصت تحدّي اليوم!','You finished today’s challenge!')));
   quiz.append(node('p','cl215-panel-description',tr('بكرا بيفتح تحدّي جديد. بتقدر تراجع إجابات اليوم الآن.','A new challenge appears tomorrow. You can review today’s answers below.')));
   const review=btn(tr('مراجعة إجاباتي','Review my answers'));review.addEventListener('click',()=>{viewing=0;draw()});quiz.append(review);return;
  }
  const idx=Math.min(viewing,4),q=questions[idx],chosen=daily.answers[idx];
  quiz.append(node('small','cl215-question-counter',tr('السؤال ','Question ')+num.format(idx+1)+' / 5 · '+(subjectNames[q.subject]?tr(...subjectNames[q.subject]):'')+' · '+({easy:tr('سهل','Easy'),medium:tr('متوسط','Medium'),hard:tr('صعب','Hard'),expert:tr('خبير','Expert')}[q.level]||'')));
  quiz.append(node('h3','cl215-quiz-title',q.prompt));
  const opts=node('div','cl215-options');
  q.options.forEach(opt=>{
   const b=btn(opt,'cl215-option');
   if(chosen!==undefined){
    b.disabled=true;
    if(opt===q.answer)b.classList.add('correct');
    else if(opt===chosen)b.classList.add('wrong');
   }else b.addEventListener('click',()=>{
    if(daily.answers.length!==idx)return;
    daily.answers.push(opt);
    if(daily.answers.length===5)daily.completed=true;
    writeDaily(daily);
    recordLearningAttempt({id:q.id,title:q.title,subject:q.subject,grade:q.grade,index:q.index},opt===q.answer,{question:{prompt:q.prompt,answer:q.answer,explanation:q.explanation},selected:opt});
    refreshSummary();draw();
   });
   opts.append(b);
  });
  quiz.append(opts);
  if(chosen!==undefined){
   const correct=chosen===q.answer;
   const fb=node('div','cl215-feedback '+(correct?'is-correct':'is-wrong'),correct?tr('أحسنت، جوابك صحيح!','Correct! Well done!'):tr('الجواب الصحيح: ','Correct answer: ')+q.answer);
   if(q.explanation)fb.append(node('p','',q.explanation));
   quiz.append(fb);
   if(idx<4){const next=btn(tr('السؤال التالي','Next question'));next.addEventListener('click',()=>{viewing=idx+1;draw()});quiz.append(next)}
   else if(daily.answers.length===5){const done=btn(tr('عرض النتيجة','View result'));done.addEventListener('click',()=>{viewing=5;draw()});quiz.append(done)}
   if(idx>0){const prev=btn(tr('السابق','Previous'),'cl215-outline');prev.addEventListener('click',()=>{viewing=idx-1;draw()});quiz.append(prev)}
  }
 }
 if(answered===5)viewing=5;
 draw();
}
function refreshSummary(){
 const p=student(),section=$('classoraLearningBoost');if(!p||!section)return;
 const a=attempts(),wrong=a.filter(x=>x.correct===false),weak=reviewTopics(grade());
 const count=$('cl215MistakeCount');if(count)count.textContent=String(wrong.length);
 const topic=$('cl215WeakTopic');if(topic)topic.textContent=weak[0]?formatTitle(weak[0].topic):tr('ابدأ تدريبك اليوم','Start practicing today');
 const note=$('cl215WeakNote');if(note)note.textContent=weak[0]?tr('من ','From ')+String(weak[0].wrong)+' / '+String(weak[0].wrong+weak[0].right)+tr(' محاولات فيها خطأ',' attempts with mistakes'):tr('بعد التدريب بنعرف شو تراجع','We’ll suggest topics after practice');
 const daily=readDaily(p)||dailyVolatile;
 const d=$('cl215DailyCount');if(d)d.textContent=daily?.date===langDate()&&daily?.uid===p.uid?daily.answers.length+' / 5':'0 / 5';
 const sessions=learningState().sessions||{};
 const started=$('cl215StartedCount');if(started)started.textContent=String(Object.keys(sessions).length);
 section.hidden=false;
}
function init(){
 const board=$('classoraStudentDashboard'),front=$('classoraLearningFront');
 if(!board||!front){window.addEventListener('load',init,{once:true});return}
 if($('classoraLearningBoost'))return;
 const section=node('section','cl215-insights');section.id='classoraLearningBoost';
 section.innerHTML=
  '<header class="cl215-heading"><div><span class="cl215-eyebrow">CLASSORA · SMART STUDY</span><h2>'+label('خطوتك الجاية بالتعلّم','Your next learning step')+'</h2><p>'+label('اقتراحات حسب المحاولات والدروس اللي درستها فعلًا','Suggestions based on your real attempts and lessons')+'</p></div></header>'+
  '<div class="cl215-insight-grid">'+
  '<button type="button" class="cl215-insight cl215-mistakes" data-cl215-open="mistakes"><span class="cl215-insight-icon">'+icon('target')+'</span><span class="cl215-insight-text"><strong>'+label('راجع أخطائي','Review my mistakes')+'</strong><small id="cl215WeakTopic"></small><small id="cl215WeakNote"></small></span><span class="cl215-count" id="cl215MistakeCount">0</span></button>'+
  '<button type="button" class="cl215-insight cl215-challenge" data-cl215-open="challenge"><span class="cl215-insight-icon">'+icon('check')+'</span><span class="cl215-insight-text"><strong>'+label('تحدّي اليوم','Today’s challenge')+'</strong><small>'+label('5 أسئلة من مواد صفك','Five questions from your grade')+'</small></span><span class="cl215-count" id="cl215DailyCount">0 / 5</span></button>'+
  '<button type="button" class="cl215-insight cl215-route" data-cl215-open="path"><span class="cl215-insight-icon">'+icon('brain')+'</span><span class="cl215-insight-text"><strong>'+label('مساري الذكي','My study path')+'</strong><small>'+label('ابدأ بالمواضيع اللي محتاجها','Prioritize topics you need')+'</small></span><span class="cl215-insight-arrow">↗</span></button>'+
  '<button type="button" class="cl215-insight cl215-map" data-cl215-open="map"><span class="cl215-insight-icon">'+icon('map')+'</span><span class="cl215-insight-text"><strong>'+label('خريطة المعرفة','Knowledge map')+'</strong><small>'+label('دروس بدأتها:','Lessons started:')+' <b id="cl215StartedCount">0</b></small></span><span class="cl215-insight-arrow">↗</span></button>'+
  '</div><section class="cl215-panel" id="cl215Panel" hidden></section>';
 const quick=front.querySelector('.cl214-quick'),catalog=front.querySelector('#cl214-catalog');
 if(quick)quick.insertAdjacentElement('afterend',section);else catalog?.before(section);
 section.addEventListener('click',event=>{
  const target=event.target.closest('[data-cl215-open]');if(!target)return;
  const action=target.dataset.cl215Open;
  if(action==='mistakes')openMistakes();
  if(action==='challenge')openChallenge();
  if(action==='path')openPath();
  if(action==='map')openMap();
 });
 const rerender=()=>{section.hidden=!student();if(student()){localize(section);refreshSummary()}else clearPanel()};
 document.addEventListener('classora:learning-update',()=>{if(student())refreshSummary()});
 new MutationObserver(rerender).observe(document.body,{attributes:true,attributeFilter:['class','data-user-role']});
 new MutationObserver(rerender).observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir']});
 window.addEventListener('pageshow',rerender);
 window.classoraLearningBoost={openChallenge,openMistakes,openPath,openMap,refresh:rerender};
 rerender();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
