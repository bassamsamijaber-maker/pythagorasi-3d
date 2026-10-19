/* Classora learning front V214: presentation and links to established workflows.
 * No new permissions, writes, invented live-room status, or login changes.
 */
(function(){
"use strict";
const get=id=>document.getElementById(id);
const art=(kind)=>{
 const paths={
   book:'<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1m0-14c3-2 6-2 9-1v14c-3-1-6-1-9 1m0-14v14"/>',
   check:'<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M8 9h8m-8 4 2 2 5-5"/>',
   trophy:'<path d="M7 4h10v6a5 5 0 0 1-10 0V4Zm0 2H3v2a4 4 0 0 0 4 4m10-6h4v2a4 4 0 0 1-4 4m-5 3v5m-5 2h10"/>',
   spark:'<path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/>',
   atom:'<ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-45 12 12)"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>',
   chart:'<path d="M4 20h16M6 16v-5m5 5V6m5 10v-8m4 8v-4"/><path d="m5 7 5-4 6 2 3-2"/>',
   bolt:'<path d="m13 2-9 11h7l-1 9 10-12h-8l1-8Z"/>',
   compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
   play:'<path d="m8 5 11 7-11 7V5Z"/>',
   layers:'<path d="m12 2 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5m-18 5 9 5 9-5"/>',
   clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
   flag:'<path d="M5 21V4m0 1q5-3 9 0t7 0v11q-3 3-7 0t-9 0"/>',
   chat:'<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 1 1 16.1-4Z"/>'
 };
 return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">'+(paths[kind]||paths.spark)+'</svg>';
};
const bi=(ar,en)=>' data-cl-ar="'+ar+'" data-cl-en="'+en+'"';
const tag=(ar,en)=>'<span'+bi(ar,en)+'>'+ar+'</span>';
const btn=(kind,ar,en,action,detailAr,detailEn,classes='')=>'<button type="button" class="cl214-card cl214-'+kind+' '+classes+'" data-cl-action="'+action+'"><span class="cl214-card-graphic">'+art(kind)+'</span><span class="cl214-card-copy"><strong>'+tag(ar,en)+'</strong><small>'+tag(detailAr,detailEn)+'</small></span><span class="cl214-arrow" aria-hidden="true">↗</span></button>';
function init(){
 const board=get('classoraStudentDashboard');
 if(!board||get('classoraLearningFront'))return;
 const shell=document.createElement('div');shell.id='classoraLearningFront';shell.className='cl214';
 shell.innerHTML=[
 '<nav class="cl214-tabs" aria-label="Classora learning navigation">',
 '<button type="button" data-cl-section="cl214-catalog">'+art('compass')+tag('أهم الأدوات','Learning tools')+'</button>',
 '<button type="button" data-cl-section="cl214-live">'+art('trophy')+tag('مباشر','Live')+'</button>',
 '<button type="button" data-cl-section="cl214-exams">'+art('check')+tag('امتحانات','Exams')+'</button>',
 '<button type="button" data-cl-action="subjects">'+art('book')+tag('المواد','Subjects')+'</button>',
 '</nav>',
 '<section class="cl214-hero" aria-label="Classora learning home">',
 '<div class="cl214-hero-copy">',
 '<span class="cl214-kicker"><i></i> CLASSORA · '+tag('مغامرتك التعليمية','YOUR LEARNING JOURNEY')+'</span>',
 '<h1>'+tag('تعلّم بطريقة','Learn in a')+' <em>'+tag('مختلفة.','new way.')+'</em></h1>',
 '<p class="cl214-hero-lead">'+tag('كل يوم فرصة تفهم فكرة جديدة. جرّب، اختبر نفسك، ونافس أصحابك.','Every day is a new chance to discover, practice and challenge your friends.')+'</p>',
 '<p class="cl214-personal">'+tag('أهلًا','Hi')+'، <strong id="cl214StudentName">Classora</strong> <span class="cl214-wave" aria-hidden="true">✦</span></p>',
 '<div class="cl214-hero-buttons">',
 '<button type="button" class="cl214-primary" data-cl-action="resume">'+art('play')+tag('كمّل تعلّمك','Continue learning')+'</button>',
 '<button type="button" class="cl214-secondary" data-cl-action="exam">'+art('check')+tag('امتحان سريع','Quick exam')+'</button>',
 '</div>',
 '<small class="cl214-last-lesson" id="cl214LastLesson" aria-live="polite"></small>',
 '</div>',
 '<div class="cl214-hero-visual">',
 '<div class="cl214-orbit-art" aria-hidden="true"><div class="cl214-orbit-ring cl214-ring-one"></div><div class="cl214-orbit-ring cl214-ring-two"></div><span class="cl214-orbit-center">'+art('book')+'</span><span class="cl214-orbit-item cl214-o1">'+art('atom')+'</span><span class="cl214-orbit-item cl214-o2">'+art('trophy')+'</span><span class="cl214-orbit-item cl214-o3">'+art('spark')+'</span></div>',
 '<div class="cl214-xp-host" id="cl214XpHost"></div>',
 '</div></section>',
 '<section class="cl214-quick" aria-label="Quick learning actions">',
 btn('book','موادي','My subjects','subjects','كل دروسك بمكان واحد','Find your lessons','cl214-quick-tile'),
 btn('trophy','مسابقة مباشرة','Live competition','live','انضم بكود الغرفة','Join with a room code','cl214-quick-tile'),
 btn('check','امتحانات','Exams','exam','4 مستويات وأسئلة متجددة','4 levels and fresh questions','cl214-quick-tile'),
 btn('chat','اسأل كلاسورا','Ask Classora','assistant','شرح واضح وبسيط','Easy-to-follow explanations','cl214-quick-tile'),
 '</section>',
 '<div id="cl214StatHost" class="cl214-stats"></div>',
 '<section id="cl214-catalog" class="cl214-block">',
 '<header class="cl214-section-heading"><div><span class="cl214-section-index">01 / LEARN</span><h2>'+tag('كل أدواتك التعليمية','Your learning toolkit')+'</h2><p>'+tag('اختار اللي بيساعدك تتقدم اليوم.','Pick the next step in your learning journey.')+'</p></div><span class="cl214-section-deco" aria-hidden="true">'+art('layers')+'</span></header>',
 '<div class="cl214-tool-grid">',
 btn('bolt','تدرّب الآن','Practice now','practice','أسئلة جديدة وتصحيح فوري','New questions and instant feedback','cl214-featured'),
 btn('chart','تقدمي ونتائجي','My progress','progress','شوف مستواك وين تطور','See how far you have come'),
 btn('book','كمّل آخر درس','Resume a lesson','resume','ارجع من محل ما وقفت','Pick up where you left off'),
 btn('atom','مختبرات 3D','3D labs','lab','جرّب النظريات بالمجسمات','Explore ideas in interactive 3D'),
 btn('layers','بطاقات المراجعة','Flashcards','flashcards','تذكّر المعلومات بسهولة','Review and remember'),
 btn('compass','جدول العناصر','Periodic table','periodic','اكتشف العناصر والتجارب','Explore chemical elements'),
 btn('spark','تحدّي اليوم','Learning challenge','challenge','اختبر مهارتك مع التحديات','Try a learning challenge'),
 btn('flag','صفوفي وواجباتي','Classes & homework','classes','تابع صفوفك والمهام','Your classes and assignments'),
 '</div></section>',
 '<section id="cl214-live" class="cl214-block cl214-live-area">',
 '<header class="cl214-section-heading"><div><span class="cl214-section-index">02 / LIVE</span><h2>'+tag('المسابقات المباشرة','Live competitions')+'</h2><p>'+tag('نافس الطلاب من أجهزتكم، وكسبوا نقاط مع كل إجابة.','Compete together in real time, from your own devices.')+'</p></div><span class="cl214-live-mark">'+tag('غرف بالكود','Code-based rooms')+'</span></header>',
 '<div class="cl214-live-layout">',
 '<div class="cl214-live-panel"><span class="cl214-live-art">'+art('trophy')+'</span><h3>'+tag('جاهز تدخل التحدي؟','Ready for the challenge?')+'</h3><p>'+tag('معك كود من المعلم؟ افتح المسابقة واكتب الكود لتنضم لغرفتك.','Have a teacher room code? Open the competition and enter it to join.')+'</p><button type="button" class="cl214-primary" data-cl-action="joinlive">'+art('bolt')+tag('ادخل بكود الغرفة','Join with a room code')+'</button></div>',
 '<div class="cl214-live-steps"><span class="cl214-step">'+art('clock')+tag('غرفة انتظار قبل البداية','Waiting room before the start')+'</span><span class="cl214-step">'+art('check')+tag('أسئلة مباشرة مع مؤقت','Timed live questions')+'</span><span class="cl214-step">'+art('chart')+tag('نتائج وترتيب اللاعبين','Scores and leaderboard')+'</span><button class="cl214-text-button" type="button" data-cl-action="live">'+tag('افتح مركز المسابقات','Open competitions center')+' ↗</button></div>',
 '</div></section>',
 '<section id="cl214-exams" class="cl214-block cl214-exams-area">',
 '<header class="cl214-section-heading"><div><span class="cl214-section-index">03 / EXAMS</span><h2>'+tag('اختبر معلوماتك','Test your knowledge')+'</h2><p>'+tag('اختار موضوعك، المستوى المناسب، وابدأ امتحان جديد.','Choose your subject and level, then start a fresh exam.')+'</p></div></header>',
 '<div class="cl214-exam-layout"><div class="cl214-exam-main"><div class="cl214-exam-illustration" aria-hidden="true">'+art('check')+'<span>100</span></div><h3>'+tag('امتحانات من كل المواد','Exams across all subjects')+'</h3><div class="cl214-levels"><span>'+tag('سهل','Easy')+'</span><span>'+tag('متوسط','Medium')+'</span><span>'+tag('صعب','Hard')+'</span><span>'+tag('خبير','Expert')+'</span></div><button type="button" class="cl214-primary" data-cl-action="exam">'+tag('افتح مركز الامتحانات','Open exam center')+' ↗</button></div>',
 '<div class="cl214-exam-side">'+btn('flag','امتحان بكود','Exam with a code','joinexam','ادخل امتحان من معلمك','Join a teacher-assigned exam')+btn('chart','راجع النتيجة','Review your results','progress','تابع تقدمك التعليمي','Track your learning progress')+'</div></div></section>',
 '<footer class="cl214-footer"><span>CLASSORA ✦ '+tag('التعلّم يبدأ بالفضول','LEARNING BEGINS WITH CURIOSITY')+'</span><button type="button" data-cl-action="subjects">'+tag('استكشف المواد','Explore subjects')+' ↗</button></footer>'
 ].join('');
 board.prepend(shell);
 const progress=board.querySelector('.student-dash-progress');
 if(progress)get('cl214XpHost')?.append(progress);
 const stats=board.querySelector('.student-dash-insights');
 if(stats)get('cl214StatHost')?.append(stats);
 const jumpSubjects=()=>{
  const lobby=get('platformLobby');
  const target=lobby?.querySelector('.hub-curriculum-shelf')||lobby?.querySelector('.learning-hub')||lobby?.querySelector('.pythag-action-grid');
  target?.scrollIntoView({block:'start',behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth'});
 };
 function lastLesson(){
  try{
   const uid=window.PythagorasiUser?.uid;
   if(!uid)return null;
   const raw=localStorage.getItem('classora_last_topic_v112_'+uid);
   if(!raw)return null;
   const p=JSON.parse(raw);
   if(!p||typeof p.topic!=='string'||!p.topic||!Number.isFinite(Number(p.grade)))return null;
   return p;
  }catch{return null}
 }
 function localize(){
  const lang=document.documentElement.lang||'ar';
  const isAr=lang==='ar';
  shell.lang=lang;shell.dir=isAr?'rtl':'ltr';
  shell.querySelectorAll('[data-cl-ar][data-cl-en]').forEach(el=>{
   const en=el.dataset.clEn||'',ar=el.dataset.clAr||'';
   const value=isAr?ar:(lang==='en'?en:(window.ClassoraLocale?.tFor?.(lang,en)||en));
   if(el.textContent!==value)el.textContent=value;
  });
  const p=window.PythagorasiUser;
  const name=String(p?.displayName||'').trim().split(/\s+/)[0];
  const nameEl=get('cl214StudentName');if(nameEl)nameEl.textContent=name||'Classora';
  const last=lastLesson(),hint=get('cl214LastLesson');
  if(hint)hint.textContent=last?(isAr?'آخر درس: ':'Last lesson: ')+last.topic:(isAr?'اختار أي مادة وابدأ رحلتك اليوم.':'Choose any subject to start your learning journey.');
 }
 board.addEventListener('click',event=>{
  const scroll=event.target.closest('[data-cl-section]');
  if(scroll&&shell.contains(scroll)){get(scroll.dataset.clSection)?.scrollIntoView({block:'start',behavior:'smooth'});return}
  const b=event.target.closest('[data-cl-action]');if(!b||!shell.contains(b))return;
  const action=b.dataset.clAction;
  const ids={exam:'lobbyExamBtn',joinexam:'lobbyExamBtn',live:'competitionBtn',joinlive:'competitionBtn',practice:'lobbyQuestionBtn',lab:'lobbyLabBtn',periodic:'periodicTableBtn',challenge:'lobbyChallengeBtn',classes:'lobbyJoinClassBtn'};
  if(action==='subjects'){jumpSubjects();return}
  if(action==='resume'){
   const saved=lastLesson();
   if(saved&&window.classoraCurriculum?.openAt){window.classoraCurriculum.openAt(saved.grade,saved.subject,saved.topic);return}
   jumpSubjects();return;
  }
  if(action==='challenge'&&window.classoraLearningBoost?.openChallenge){window.classoraLearningBoost.openChallenge();return}
  if(action==='assistant'){const input=get('lobbyAIInput');input?.scrollIntoView({block:'center',behavior:'smooth'});input?.focus({preventScroll:true});return}
  if(action==='progress'){if(typeof window.classoraLearningPlus?.progress==='function'){window.classoraLearningPlus.progress();return}jumpSubjects();return}
  if(action==='flashcards'){if(typeof window.classoraLearningPlus?.flashcards==='function'){window.classoraLearningPlus.flashcards();return}jumpSubjects();return}
  get(ids[action])?.click();
  if(action==='joinlive'||action==='joinexam'){
   const inputId=action==='joinlive'?'compJoinCode':'examJoinCode';
   window.setTimeout(()=>{const modal=get(action==='joinlive'?'competitionModal':'examModal');if(modal?.classList.contains('open'))get(inputId)?.focus()},350);
  }
 });
 new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir']});
 new MutationObserver(localize).observe(get('lobbyProfileName')||board,{childList:true,characterData:true,subtree:true});
 window.addEventListener('pageshow',localize);
 localize();
 // Teacher already has its own authenticated workspace. Put live/exams at its top.
 const teacher=get('classoraTeacherDashboard');
 if(teacher&&!get('cl214TeacherTools')){
  const strip=document.createElement('div');strip.id='cl214TeacherTools';strip.className='cl214-teacher-tools';
  strip.innerHTML='<h2>'+tag('أنشطتك التعليمية','Your teaching activities')+'</h2><div class="cl214-teacher-grid">'+
   btn('trophy','مسابقات مباشرة','Live competitions','competitions','أنشئ غرفة وشارك الكود','Create a room and share its code')+
   btn('check','أنشئ امتحان','Create an exam','exams','4 مستويات وتوليد أسئلة','Question generation and levels')+
   btn('flag','إدارة الصفوف','Manage classes','classes','الطلاب والمهام','Students and assignments')+
   btn('chart','نتائج الطلاب','Student results','results','العلامات والأداء','Scores and insights')+'</div>';
  const top=teacher.querySelector('.tw-metrics');
  top?.insertAdjacentElement('afterend',strip);
  strip.querySelectorAll('[data-cl-action]').forEach(el=>{el.dataset.twAction=el.dataset.clAction;delete el.dataset.clAction});
  const translateTeacher=()=>{
   const lang=document.documentElement.lang||'ar';
   strip.querySelectorAll('[data-cl-ar][data-cl-en]').forEach(el=>{
    const en=el.dataset.clEn||'',ar=el.dataset.clAr||'';
    const value=lang==='ar'?ar:(lang==='en'?en:(window.ClassoraLocale?.tFor?.(lang,en)||en));
    if(el.textContent!==value)el.textContent=value;
   });
  };
  new MutationObserver(translateTeacher).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});translateTeacher();
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();