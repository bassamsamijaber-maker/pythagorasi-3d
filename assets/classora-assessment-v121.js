import {geographyLesson,geographyQuestions} from './geography-catalog-v128.js?v=128';
/* Classora unified subject picker and vetted question generation. Works with existing exam and live-competition actions. */
import {CURRICULUM_DATA,CURRICULUM_SUBJECTS,curriculumTopicDisplayName} from './curriculum-v97.js?v=149';
import {englishLesson,englishQuestions} from './english-catalog-v127.js?v=127';
import {historyLesson,historyQuestions} from './history-catalog-v127.js?v=127';
import {mathQuestion,mathTopic} from './math-catalog-v119.js?v=148';
import {statisticsCompleteQuestion} from './classora-statistics-v148.js?v=148';
import {arabicQuestion,arabicLesson,AR_ROLES,AR_MARKERS} from './arabic-catalog-v119.js?v=119';
import {scienceLiveQuestions} from './learning-hub.js?v=131';
import {combineTopicQuestions} from './classora-assessment-levels-v152.js?v=152';
import {scienceTopicQuestions} from './classora-science-bank-v152.js?v=152';
const t=(ar,en,lang)=>lang==='ar'?ar:lang==='en'?en:(window.ClassoraLocale?.dictionaries?.[lang]?.[en]||en);
const norm=value=>String(value||'').normalize('NFKC').toLowerCase().replace(/[\u064b-\u065f]/g,'').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const subjectLabel=(subject,lang)=>{
 if(subject==='arabic')return t('قواعد اللغة العربية','Arabic Grammar',lang);
 if(subject==='english')return 'English Grammar';
 const name=CURRICULUM_SUBJECTS[subject]?.[lang==='ar'?'ar':'en']||subject;
 return lang==='ar'?name:t(name,name,lang);
};
const TOPICS=[];
for(const grade of [7,8,9,10]){
 for(const [subject,rows] of Object.entries(CURRICULUM_DATA[grade]||{})){
  if(!CURRICULUM_SUBJECTS[subject]||!Array.isArray(rows))continue;
  rows.forEach((raw,i)=>{
   const title=typeof raw==='string'?raw:raw?.title;if(!title)return;
   const en=curriculumTopicDisplayName(title,subject,'en');
   TOPICS.push({value:'curr:'+grade+':'+subject+':'+i,grade,subject,title,en,index:i});
  });
 }
}
const TOPIC_MAP=new Map(TOPICS.map(x=>[x.value,x]));
const scienceMap=[
 [/الجدول الدوري|العناصر/, 'periodic'],
 [/بنية الذرة|الذرة/, 'atoms'],
 [/المادة|حالات المادة|الجسيمات|خصائصها/, 'matter'],
 [/السرعة|الحركة|القوى/, 'motion'],
 [/الحماض|الأحماض|القواعد|pH/, 'acids'],
 [/الطاقة|تحولات الطاقة/, 'energy'],
 [/أجهزة جسم الإنسان|الجهاز التنفسي|جهاز الدوران|التغذية/, 'body'],
 [/البناء الضوئي|النباتات/, 'plants']
];
const englishBank={
 'Present Simple':[['She ___ to school every day.',['go','goes','going','went'],'goes'],['They ___ football on Fridays.',['play','plays','playing','played'],'play']],
 'Present Continuous':[['Look! The children ___ now.',['play','plays','are playing','played'],'are playing'],['I ___ a book at the moment.',['read','am reading','reads','readed'],'am reading']],
 'Past Simple':[['Yesterday, she ___ to the park.',['go','goes','went','going'],'went'],['Last night, we ___ a movie.',['watch','watched','watching','watches'],'watched']],
 'Past Continuous':[['At 8 p.m., I ___ dinner.',['was cooking','cook','am cook','were cooking'],'was cooking'],['While I was studying, they ___ outside.',['are playing','were playing','play','plays'],'were playing']],
 'Present Perfect':[['I have ___ my homework.',['finish','finished','finishing','finishes'],'finished'],['She has ___ to London.',['been','be','being','was'],'been']],
 'Articles':[['He bought ___ umbrella.',['a','an','the a','no article'],'an'],['I saw ___ dog in the garden for the first time.',['a','an','the','no article'],'a']],
 'Articles: a / an / the':[['She is ___ engineer.',['a','an','the a','no article'],'an'],['I have ___ orange.',['a','an','the a','no article'],'an']],
 'Comparative':[['My bag is ___ than yours.',['heavy','heavier','heaviest','more heavyer'],'heavier'],['A cheetah is ___ than a cat.',['fast','faster','fastest','most fast'],'faster']],
 'Superlative':[['This is the ___ day of my life.',['happy','happier','happiest','more happy'],'happiest'],['The Nile is one of the ___ rivers in the world.',['long','longer','longest','most long'],'longest']],
 'Future with Will':[['I think it ___ tomorrow.',['will rain','raining','rains yesterday','will rains'],'will rain'],['They ___ next week.',['arrive','will arrive','arrived','arriving'],'will arrive']],
 'Be Going To':[['Look at those clouds! It ___ rain.',['will to','is going to','go to','going'],'is going to'],['We are going ___ visit our grandparents.',['for','to','at','a'],'to']],
 'Some / Any':[['Do you have ___ milk?',['some','any','many','few'],'any'],['There are ___ books on the desk.',['some','any','much','little'],'some']],
 'Much / Many':[['How ___ students are in your class?',['much','many','little','any much'],'many'],['How ___ water do you need?',['many','much','a few','several'],'much']],
 'Zero Conditional':[['If you heat ice, it ___.',['melts','melted','will melting','would melt'],'melts'],['If plants get no water, they ___.',['die','dies','died','dying'],'die']],
 'First Conditional':[['If it rains, we ___ home.',['stayed','will stay','staying','would staying'],'will stay'],['If you study, you ___ better.',['will do','did','doing','have did'],'will do']],
 'Present Passive':[['The room ___ every day.',['cleans','is cleaned','cleaned','is cleaning'],'is cleaned'],['English ___ in many countries.',['speaks','is spoken','spoke','is speaking'],'is spoken']],
 'Past Passive':[['The bridge ___ in 1990.',['built','was built','is building','build'],'was built'],['The letter ___ yesterday.',['was sent','was send','sends','is sending'],'was sent']]
};
const factBank={
 'عصر النهضة':[
 ['Where did the Renaissance begin?','أين بدأت حركة عصر النهضة الأوروبية؟',['Italy','France','Russia','China'],'Italy','إيطاليا'],
 ['Which idea placed value on studying classical texts and human potential?','أي تيار اهتم بدراسة النصوص الكلاسيكية وقدرات الإنسان؟',['Humanism','Feudalism','Mercantilism','Absolutism'],'Humanism','الإنسانية (Humanism)']],
 'الثورة الفرنسية':[
 ['In which year did the French Revolution begin?','في أي سنة بدأت الثورة الفرنسية؟',['1789','1492','1815','1914'],'1789','1789'],
 ['Which event became a symbol of the French Revolution in July 1789?','أي حدث صار رمزًا للثورة الفرنسية في تموز 1789؟',['Storming of the Bastille','Battle of Waterloo','Fall of Rome','Discovery of America'],'Storming of the Bastille','اقتحام الباستيل']],
 'الزلازل':[
 ['What usually causes tectonic earthquakes?','ما الذي يسبب غالبية الزلازل التكتونية؟',['Sudden movement along faults','Lunar eclipses','Ocean tides alone','Daily temperature changes'],'Sudden movement along faults','حركة مفاجئة على الصدوع']],
 'الصفائح التكتونية':[
 ['What drives the formation of many mountain ranges?','ما الذي يسهم في تكوّن كثير من السلاسل الجبلية؟',['Collision of tectonic plates','Only rainfall','Only wind erosion','Earth’s rotation alone'],'Collision of tectonic plates','تصادم الصفائح التكتونية']],
 'دورة المياه':[
 ['What is the change of liquid water into water vapor called?','ماذا نسمي تحوّل الماء السائل إلى بخار؟',['Evaporation','Condensation','Freezing','Precipitation'],'Evaporation','التبخر'],
 ['What turns water vapor into tiny cloud droplets?','ما الذي يحوّل بخار الماء إلى قطيرات في السحب؟',['Condensation','Evaporation','Melting','Infiltration'],'Condensation','التكاثف']],
 'البراكين':[
 ['What is molten rock called after it reaches the surface?','ماذا تسمى الصخور المنصهرة بعد خروجها إلى سطح الأرض؟',['Lava','Magma only','Granite','Sandstone'],'Lava','اللابة / الحمم']]
};
function validate(q,language){
 if(!q||typeof q.prompt!=='string'||q.prompt.trim().length<12||!Array.isArray(q.options)||q.options.length<3)return false;
 const options=q.options.map(x=>String(x).trim()),answer=String(q.answer??'').trim();
 if(options.some(x=>!x)||new Set(options).size!==options.length||options.filter(x=>x===answer).length!==1)return false;
 if(/Which statement belongs|Which explanation belongs|Choose the skill|Which learning goal|Which skill is|A rule from another lesson|عبارة تخص|أي تفسير يخص|أي مهارة ترتبط|أي عبارة صحيحة تحديدًا|قاعدة من درس آخر/.test(q.prompt+' '+options.join(' ')))return false;
 return true;
}
function pickQuestions(value,count,difficulty='medium',language='ar',live=false){
 const topic=TOPIC_MAP.get(value);
 if(!topic)throw Error(t('الموضوع غير معروف.','Unknown topic.',language));
 const n=Math.max(1,Math.min(30,Math.floor(Number(count)||10)));
 const result=[],seen=new Set();let trials=0;
 const levels=difficulty==='mixed'?['easy','medium','hard','expert']:[['easy','medium','hard','expert'].includes(difficulty)?difficulty:'medium'];
 const sourceLanguage=language==='ar'?'ar':'en';
 const add=(q,level)=>{
  if(result.length>=n||!validate(q,language))return;
  const prompt=norm(q.prompt);if(seen.has(prompt))return;seen.add(prompt);
  result.push({...q,type:'mcq',id:'assessment-'+topic.value+'-'+Date.now()+'-'+result.length,
   points:live?1000:10,topicKey:topic.value,subjectKey:topic.subject,curriculumTopicId:topic.value,
   curriculumTopicTitle:topic.title,curriculumGrade:topic.grade,questionKind:level,level:({easy:1,medium:2,hard:3,expert:4}[level]||2),
   typeLabel:subjectLabel(topic.subject,language)+' • '+(language==='ar'?topic.title:t(topic.en,topic.en,language))});
 };
 const addGraded=base=>{
  const choices=difficulty==='mixed'?['easy','medium','hard','expert']:levels;
  const groups=choices.map(level=>({level,bank:combineTopicQuestions(base,level,sourceLanguage,n),cursor:0}));
  let active=true;
  while(result.length<n&&active){
   active=false;
   for(const group of groups){
    if(group.cursor>=group.bank.length)continue;
    const next=group.bank[group.cursor++];
    add(next,group.level);
    active=true;
    if(result.length>=n)break;
   }
  }
 };
 if(topic.subject==='math'&&/إحصاء/.test(topic.title)){
  for(let i=0;i<Math.max(n*8,60)&&result.length<n;i++){
   const level=difficulty==='expert'?'expert':(levels[i%levels.length]||'medium');
   try{add(statisticsCompleteQuestion(topic,level,i,sourceLanguage),level)}catch(error){console.warn('Statistics question generation:',error)}
  }
 }else if((topic.subject==='math'||topic.subject==='geometry')&&mathTopic(topic.title)){
  for(let i=0;i<Math.max(n*9,45)&&result.length<n;i++){
   const level=levels[i%levels.length]||'medium';
   try{add(mathQuestion(topic,level,Math.floor(Math.random()*100000)+i*31,sourceLanguage),level)}catch{}
  }
 }else if(topic.subject==='arabic'&&arabicLesson(topic.title)){
  const lesson=arabicLesson(topic.title),langIndex=sourceLanguage==='en'?1:0;
  const roleValues=Object.values(AR_ROLES).map(p=>p[langIndex]);
  const markerValues=Object.values(AR_MARKERS).map(p=>p[langIndex]);
  const build=(word,answer,pool,prompt,explanation,level)=>{
   const others=[...new Set(pool)].filter(x=>x&&x!==answer).slice(0,3);
   if(others.length!==3)return;
   const options=[answer,...others],offset=(result.length*3+word.length)%4;
   options.push(...options.splice(0,offset));
   add({prompt,answer,options,explanation},level);
  };
  const pairQuestion=(tokens,explanation,level,sentence)=>{
   const size=level==='expert'?3:2;
   const chosen=tokens.filter(token=>AR_ROLES[token.role]).slice(0,size);
   if(chosen.length!==size)return;
   const roles=chosen.map(token=>AR_ROLES[token.role][langIndex]);
   const answer=roles.join(' | '),options=[answer];
   for(let i=0;i<3;i++){
    const parts=[...roles],index=i%size;
    parts[index]=roleValues.find(value=>value!==roles[index]);
    if(size===2&&i===2)parts[1]=roleValues.find(value=>value!==roles[1]);
    options.push(parts.join(' | '));
   }
   if(new Set(options).size!==4)return;
   const prompt=sourceLanguage==='en'
    ?'Analyze the grammatical roles of '+chosen.map(t=>'“'+t.word+'”').join(', ')+' in “'+sentence+'”, in order.'
    :'حلّل الدور النحوي للكلمات '+chosen.map(t=>'«'+t.word+'»').join('، ')+' في «'+sentence+'» بالترتيب.';
   add({prompt,options,answer,explanation},level);
  };
  for(const example of lesson.examples){
   if(result.length>=n)break;
   const sentence=example.tokens.map(token=>token.word).join(' ');
   for(const token of example.tokens){
    if(result.length>=n)break;
    const role=AR_ROLES[token.role]?.[langIndex],marker=token.marker&&AR_MARKERS[token.marker]?.[langIndex];
    if(!role)continue;
    const explanation=sourceLanguage==='en'?lesson.english:lesson.ar;
    if(difficulty==='mixed'||difficulty==='easy'){
     const prompt=sourceLanguage==='en'?'What is the grammatical role of “'+token.word+'” in “'+sentence+'”?':'ما الدور الإعرابي لكلمة «'+token.word+'» في «'+sentence+'»؟';
     build(token.word,role,roleValues,prompt,explanation,'easy');
    }
    if(difficulty==='mixed'||difficulty==='medium'){
     const prompt=sourceLanguage==='en'?'In the complete sentence “'+sentence+'”, identify the function of “'+token.word+'”.':'في الجملة الكاملة «'+sentence+'»، حدّد وظيفة «'+token.word+'» النحوية.';
     build(token.word,role,roleValues,prompt,explanation,'medium');
    }
    if(difficulty==='mixed'||difficulty==='hard'){
     if(marker){
      const prompt=sourceLanguage==='en'?'Which case or ending applies to “'+token.word+'” in “'+sentence+'”?':'ما علامة الإعراب أو حكم «'+token.word+'» في «'+sentence+'»؟';
      build(token.word,marker,markerValues,prompt,explanation,'hard');
     }else pairQuestion(example.tokens,explanation,'hard',sentence);
    }
    if(difficulty==='mixed'||difficulty==='expert'){
     if(marker){
      const pair=role+' — '+marker,pool=roleValues.filter(x=>x!==role).map(x=>x+' — '+marker);
      const prompt=sourceLanguage==='en'?'Choose the complete grammatical analysis of “'+token.word+'” in “'+sentence+'”.':'اختر التحليل النحوي الكامل لكلمة «'+token.word+'» في «'+sentence+'».';
      build(token.word,pair,pool,prompt,explanation,'expert');
     }else pairQuestion(example.tokens,explanation,'expert',sentence);
    }
   }
  }
 }else if(topic.subject==='science'){
  const original=scienceTopicQuestions(topic.title,sourceLanguage);
  const kind=scienceMap.find(([re])=>re.test(topic.title))?.[1];
  const source=original.length?original:(kind?scienceLiveQuestions(Math.max(n,30),sourceLanguage,kind):[]);
  addGraded(source);
 }else if(topic.subject==='english'&&englishLesson(topic.title)){
  addGraded(englishQuestions(topic,sourceLanguage));
 }else if(topic.subject==='geography'&&geographyLesson(topic.title)){
  const available=geographyQuestions(topic,sourceLanguage);
   if(difficulty==='mixed'){
    const groups=['easy','medium','hard','expert'].map(level=>({level,bank:available.filter(q=>q.difficulty===level),cursor:0}));
    let active=true;
    while(result.length<n&&active){
     active=false;
     for(const group of groups){
      if(group.cursor>=group.bank.length)continue;
      add(group.bank[group.cursor++],group.level);
      active=true;
      if(result.length>=n)break;
     }
    }
   }else{
    for(const q of available.filter(q=>q.difficulty===difficulty)){add(q,q.difficulty||'medium');if(result.length>=n)break}
   }
 }else if(topic.subject==='history'&&historyLesson(topic.title)){
  addGraded(historyQuestions(topic,sourceLanguage));
 }else if(topic.subject==='english'&&englishBank[topic.title]){
  const pairs=englishBank[topic.title];
  for(let i=0;i<pairs.length;i++){
   const [prompt,options,answer]=pairs[i];
   add({prompt,options:options.map(String),answer,explanation:'Grammar: '+topic.title+'.'},levels[i%levels.length]||'medium');
  }
 }else if((topic.subject==='history'||topic.subject==='geography')&&factBank[topic.title]){
  for(const row of factBank[topic.title]){
   const [en,ar,options,answer,answerAr]=row;
   if(sourceLanguage==='en')add({prompt:en,options,answer,explanation:en+' — '+answer},levels[result.length%levels.length]);
   else{
    const translation={
     'Italy':'إيطاليا','France':'فرنسا','Russia':'روسيا','China':'الصين',
     'Humanism':'الإنسانية (Humanism)','Feudalism':'الإقطاع','Mercantilism':'المذهب التجاري','Absolutism':'الحكم المطلق',
     'Storming of the Bastille':'اقتحام الباستيل','Battle of Waterloo':'معركة واترلو','Fall of Rome':'سقوط روما','Discovery of America':'اكتشاف أمريكا',
     'Sudden movement along faults':'حركة مفاجئة على الصدوع','Lunar eclipses':'خسوف القمر','Ocean tides alone':'المد والجزر وحده','Daily temperature changes':'تغيّر درجة الحرارة اليومي',
     'Collision of tectonic plates':'تصادم الصفائح','Only rainfall':'الأمطار وحدها','Only wind erosion':'تعرية الرياح وحدها','Earth’s rotation alone':'دوران الأرض وحده',
     'Evaporation':'التبخر','Condensation':'التكاثف','Freezing':'التجمّد','Precipitation':'الهطول','Melting':'الانصهار','Infiltration':'التسرّب',
     'Lava':'اللابة / الحمم','Magma only':'الصهارة تحت السطح','Granite':'الغرانيت','Sandstone':'الحجر الرملي'
    };
    add({prompt:ar,options:options.map(x=>translation[x]||x),answer:translation[answer]||answerAr,explanation:answerAr},levels[result.length%levels.length]);
   }
  }
 }
 if(result.length===0){
  throw Error(t('الموضوع موجود بالمنهاج، لكن ما فيه '+n+' أسئلة متنوعة ومراجَعة لهذا المستوى حتى الآن. اختَر عددًا أقل أو موضوعًا ثانيًا. ما رح نعطيك أسئلة عامة مالها علاقة بالدرس.',
   'This topic is listed in the curriculum, but does not yet have '+n+' distinct, reviewed questions at this level. Choose a smaller count or another topic. Unrelated filler questions will not be used.',language));
 }
 return {topic,questions:result,total:result.reduce((s,q)=>s+q.points,0),difficulty,requestedCount:n,availableCount:result.length};
}
function installPicker(id,language=()=>document.documentElement.lang){
 const select=document.getElementById(id);if(!select||select.dataset.classoraCurriculumPicker)return;
 select.dataset.classoraCurriculumPicker='true';
 const wrap=select.closest('label')||select.parentElement;
 const search=document.createElement('input');search.type='search';search.className='ca-topic-search';
 search.autocomplete='off';search.spellcheck=false;search.dataset.noTranslate='';
 const label=document.createElement('span');label.className='ca-topic-search-label';label.dataset.noTranslate='';
 wrap.insertBefore(label,select);wrap.insertBefore(search,select);
 const grade=()=>{let n=8;try{n=Number(localStorage.getItem('classora_curriculum_grade')||8)}catch{}return [7,8,9,10].includes(n)?n:8};
 const gradeLabel=(g,lang)=>window.ClassoraLocale?.formatGrade?.(g,lang)||(lang==='ar'?'الصف '+g:'Grade '+g);
 let lastLang='',lastGrade=0;
 function fill({preserve=true}={}){
  const lang=language(),g=grade(),query=norm(search.value);
  const previous=preserve?select.value:'';
  label.textContent=t('مواضيع '+gradeLabel(g,lang),'Topics for '+gradeLabel(g,lang),lang);
  search.placeholder=t('ابحث عن موضوع من '+gradeLabel(g,lang),'Search a '+gradeLabel(g,lang)+' topic',lang);
  for(const fieldId of ['compQuickDifficulty','scienceExamDifficulty']){
   const diff=document.getElementById(fieldId);if(!diff)continue;
   const node=diff.closest('label')?.firstChild;if(node?.nodeType===3)node.textContent=t('الصعوبة','Difficulty',lang)+'\n';
   const translations={easy:['سهل','Easy'],medium:['متوسط','Medium'],hard:['صعب','Hard'],expert:['خبير','Expert'],mixed:['مختلط','Mixed']};
   if(![...diff.options].some(option=>option.value==='expert')){const opt=document.createElement('option');opt.value='expert';diff.append(opt)}
   for(const opt of diff.options){const parts=translations[opt.value];if(parts)opt.textContent=t(parts[0],parts[1],lang)}
  }
  const matches=TOPICS.filter(obj=>obj.grade===g&&(!query||norm(obj.title+' '+obj.en+' '+subjectLabel(obj.subject,'ar')+' '+subjectLabel(obj.subject,'en')+' '+gradeLabel(g,lang)).includes(query)));
  const fragment=document.createDocumentFragment();let parent=null,previousSubject='';
  for(const obj of matches){
   if(obj.subject!==previousSubject){
    previousSubject=obj.subject;
    parent=document.createElement('optgroup');parent.label=subjectLabel(obj.subject,lang);
    fragment.append(parent);
   }
   const option=document.createElement('option');option.value=obj.value;option.textContent=lang==='ar'?obj.title:t(obj.en,obj.en,lang);
   parent.append(option);
  }
  select.replaceChildren(fragment);
  const all=[...select.options];
  const best=all.find(x=>x.value===previous)||(query?all[0]:all.find(x=>/فيثاغورس/.test(TOPIC_MAP.get(x.value)?.title||''))||all[0]);
  if(best)select.value=best.value;
  else{const empty=document.createElement('option');empty.value='';empty.disabled=true;empty.textContent=t('ما في مواضيع مطابقة','No matching topics',lang);select.append(empty);select.value=''}
  select.dispatchEvent(new Event('change',{bubbles:true}));
  lastLang=lang;lastGrade=g;
 }
 search.addEventListener('input',()=>fill());
 document.addEventListener('classora:grade-change',()=>{search.value='';fill({preserve:false})});
 new MutationObserver(()=>{
  const l=language();if(l!==lastLang)fill();
 }).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 fill({preserve:false});
 return fill;
}
export const classoraAssessment={topics:TOPICS,get:val=>TOPIC_MAP.get(val),generate:pickQuestions,installPicker};
