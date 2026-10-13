/* Classora bilingual curriculum assistant: curated offline resources, not a general cloud AI. */
import {CURRICULUM_DATA,CURRICULUM_SUBJECTS,curriculumTopicDisplayName,curriculumTopicGuide} from './curriculum-v97.js?v=129';
const WORDS=[
 ['كتاب','book'],['قلم','pen'],['مدرسة','school'],['طالب','student'],['معلم','teacher'],['معلمة','teacher'],['دفتر','notebook'],['صف','class'],['درس','lesson'],['واجب','homework'],['سؤال','question'],['جواب','answer'],['امتحان','exam'],['مسابقة','competition'],
 ['بيت','house'],['باب','door'],['ماء','water'],['سماء','sky'],['شمس','sun'],['قمر','moon'],['نجمة','star'],['شجرة','tree'],['زهرة','flower'],['مدينة','city'],['شارع','street'],['سيارة','car'],['عائلة','family'],['أم','mother'],['أب','father'],['أخ','brother'],['أخت','sister'],['صديق','friend'],['طفل','child'],['أطفال','children'],
 ['يقرأ','read'],['يكتب','write'],['يتعلم','learn'],['يدرس','study'],['يلعب','play'],['يسمع','hear'],['يذهب','go'],['يأتي','come'],['يشرب','drink'],['يأكل','eat'],['يفهم','understand'],
 ['جميل','beautiful'],['جديد','new'],['قديم','old'],['سعيد','happy'],['حزين','sad'],['سهل','easy'],['صعب','difficult'],['سريع','fast'],['بطيء','slow'],['طويل','tall'],['قصير','short'],
 ['اسم','noun'],['فعل','verb'],['صفة','adjective'],['ضمير','pronoun'],['حرف جر','preposition'],['جملة','sentence'],['مفرد','singular'],['جمع','plural'],['مبتدأ','subject'],['خبر','predicate'],['فاعل','doer'],['مفعول به','object'],['زمن','tense'],['ماضي','past'],['مضارع','present'],['مستقبل','future'],
 ['رياضيات','mathematics'],['علوم','science'],['تاريخ','history'],['جغرافيا','geography'],['هندسة','geometry'],['كيمياء','chemistry'],['فيزياء','physics'],['أحياء','biology'],
 ['ذرة','atom'],['جزيء','molecule'],['عنصر','element'],['خلية','cell'],['طاقة','energy'],['قوة','force'],['كتلة','mass'],['حجم','volume'],['كثافة','density'],['سرعة','speed'],['تسارع','acceleration'],['حمض','acid'],['قاعدة','base'],['كهرباء','electricity'],['دائرة كهربائية','electric circuit'],['نسبة','ratio'],['كسر','fraction'],['معادلة','equation'],['محيط','perimeter'],['مساحة','area'],['زاوية','angle'],['مثلث','triangle']
];
const VERBS=[
 ['be','was/were','been'],['go','went','gone'],['do','did','done'],['have','had','had'],['see','saw','seen'],['eat','ate','eaten'],['write','wrote','written'],['read','read','read'],['take','took','taken'],['make','made','made'],['come','came','come'],['give','gave','given'],['get','got','got/gotten'],['buy','bought','bought'],['think','thought','thought'],['teach','taught','taught'],['speak','spoke','spoken'],['choose','chose','chosen'],['drink','drank','drunk'],['run','ran','run'],['begin','began','begun'],['break','broke','broken'],['drive','drove','driven'],['know','knew','known'],['find','found','found'],['build','built','built'],['bring','brought','brought'],['feel','felt','felt'],['leave','left','left'],['meet','met','met'],['send','sent','sent'],['sing','sang','sung'],['swim','swam','swum'],['sit','sat','sat'],['sleep','slept','slept'],['tell','told','told'],['win','won','won'],['lose','lost','lost'],['pay','paid','paid'],['say','said','said'],['stand','stood','stood']
];
const norm=s=>String(s||'').normalize('NFKC').toLowerCase().replace(/[ً-ٟـ]/g,'').replace(/[إأآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const topics=[];
for(const [grade,subjects] of Object.entries(CURRICULUM_DATA)){
 for(const [subject,list] of Object.entries(subjects)){
  if(!CURRICULUM_SUBJECTS[subject]||!Array.isArray(list))continue;
  for(const entry of list){
   const title=typeof entry==='string'?entry:entry.title;
   if(!title)continue;
   const en=curriculumTopicDisplayName(title,subject,'en');
   const aliases=[title,en];
   if(subject==='english'){
    const languageAliases={'Present Simple':'المضارع البسيط','Present Continuous':'المضارع المستمر','Past Simple':'الماضي البسيط','Past Continuous':'الماضي المستمر','Present Perfect':'المضارع التام','Past Perfect':'الماضي التام','Future with Will':'المستقبل','Passive Voice':'المبني للمجهول','First Conditional':'الشرط الاول','Second Conditional':'الشرط الثاني'};
    if(languageAliases[title])aliases.push(languageAliases[title]);
   }
   topics.push({grade:Number(grade),subject,title,en,aliases:aliases.map(norm).filter(x=>x.length>=5)});
  }
 }
}
function wordLookup(raw,en){
 const text=String(raw||'').trim();
 if(!/(معنى|يعني|ترجم|ترجمة|بالإنجليزي|بالانجليزي|بالعربي|meaning|translate|what does|past of|past tense|ماضي|تصريف|plural of|جمع)/i.test(text))return null;
 const verb=text.match(/(?:past(?: tense)? of|past participle of|ماضي|تصريف)\s+([a-z]{2,})/i);
 if(verb){
  const found=VERBS.find(v=>v[0]===verb[1].toLowerCase());
  if(found)return en?found[0]+' — past: '+found[1]+', past participle: '+found[2]:found[0]+' — الماضي: '+found[1]+'، التصريف الثالث: '+found[2];
 }
 const extracted=text.match(/(?:معنى|يعني|ترجم|ترجمة|translate|meaning of|what does)\s*[«"']?([\p{L}]+(?:\s+[\p{L}]+)?)/iu);
 const candidate=norm(extracted?.[1]||'').replace(/^(?:كلمة|كلمه)\s+/,'');
 const englishWord=text.match(/(?:what does|meaning of|translate)\s+([a-z]+)(?:\s+mean)?/i)?.[1]||text.match(/\b([a-z]{2,})\s+mean\b/i)?.[1]||'';
 const words=text.match(/\b[a-zA-Z]{2,}\b/g)||[];
 for(const entry of WORDS){
  const a=norm(entry[0]),b=norm(entry[1]);
  if(candidate===a||candidate===b||norm(englishWord)===b||(words.length===1&&norm(words[0])===b))
   return en?entry[1]+' = '+entry[0]+' (Arabic).':entry[0]+' = '+entry[1]+' (English).';
 }
 const plural=text.match(/(?:plural of|جمع كلمة)\s+([a-z]{2,})/i);
 if(plural){
  const w=plural[1].toLowerCase();
  const exceptions={child:'children',man:'men',woman:'women',person:'people',foot:'feet',tooth:'teeth',mouse:'mice'};
  const result=exceptions[w]||(w.endsWith('y')&&!/[aeiou]y$/.test(w)?w.slice(0,-1)+'ies':/(s|x|ch|sh)$/.test(w)?w+'es':w+'s');
  return w+' → '+result;
 }
 return null;
}
function matchTopic(raw,grade){
 const text=norm(raw);if(text.length<5)return null;
 const matches=[];
 for(const row of topics){
  for(const alias of row.aliases){
   if(text===alias||text.startsWith(alias+' ')||text.endsWith(' '+alias)||text.includes(' '+alias+' ')){
    matches.push({row,score:alias.length+(row.grade===grade?6:0)});
   }
  }
 }
 matches.sort((a,b)=>b.score-a.score);
 return matches[0]?.row||null;
}
export function classoraStudyAnswer(raw,language='ar',grade=8){
 const en=language==='en',q=String(raw||'').trim();
 if(!q)return null;
 const word=wordLookup(q,en);
 if(word)return word;
 const g=[7,8,9,10].includes(Number(grade))?Number(grade):8;
 const lesson=matchTopic(q,g);
 if(lesson){
  const mode=/مثال|example|sentence|طبق|apply/i.test(q)?'example':/متقدم|تفصيل|advanced|in depth/i.test(q)?'advanced':'explain';
  const guidance=curriculumTopicGuide(lesson.title,lesson.subject,language,mode);
  return (en?lesson.en:lesson.title)+' — '+(en?'Grade ':'الصف ')+lesson.grade+'\n'+guidance;
 }
 if(/ما معنى|معنى كلمة|ترجم|ترجمة|translate|meaning of|what does/i.test(q))
  return en?'This word is not in my checked vocabulary yet. Please add it in a sentence.':'هاي الكلمة مش موجودة في قاموسي المراجع حاليًا. اكتبها بجملة حتى يتضح السياق.';
 return null;
}
export const classoraStudyCoverage={topics:topics.length,wordPairs:WORDS.length,irregularVerbs:VERBS.length};
