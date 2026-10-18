/* Classora bilingual curriculum assistant: curated offline resources, not a general cloud AI. */
import {CURRICULUM_DATA,CURRICULUM_SUBJECTS,curriculumTopicDisplayName,curriculumTopicGuide} from './curriculum-v97.js?v=213';
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
   topics.push({grade:Number(grade),subject,title,en,aliases:[...new Set(aliases.map(norm).filter(x=>x.length>=2))]});
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
 const text=norm(raw);if(text.length<2)return null;
 const matches=[];
 for(const row of topics){
  for(const alias of row.aliases){
   // Short words such as DNA or pH must be exact; otherwise they match random prose.
   const exact=text===alias;
   const inSentence=alias.length>=5&&(text.startsWith(alias+' ')||text.endsWith(' '+alias)||text.includes(' '+alias+' '));
   if(exact||inSentence){
    matches.push({row,score:(exact?1000:0)+alias.length+(row.grade===grade?100:0)});
   }
  }
 }
 matches.sort((a,b)=>b.score-a.score);
 return matches[0]?.row||null;
}

/* Friendly bilingual greetings and reviewed science quick answers.
   This module is offline reference material, not an unrestricted cloud model. */
const GREETING_REPLY=[
 [/^(?:السلام عليكم(?: ورحمه الله(?: وبركاته)?)?|سلام عليكم|سلام|سلامات|السلا[مم] عليكم)(?: يا .*)?$/iu,['وعليكم السلام ورحمة الله وبركاته! أهلًا وسهلًا في كلاسورا 🌿 شو حابب نتعلّم اليوم؟','Wa alaikum assalam wa rahmatullahi wa barakatuh! Welcome to Classora. What would you like to learn today?']],
 [/^(?:مرحبا+|مرحبتين|اهلا(?: وسهلا)?|اهلين|هلا+|هلا والله|يا هلا|هاي|يسعد (?:صباحك|مساك)|نورت|تحياتي|اهلا فيك)(?: يا .*)?$/iu,['أهلين وسهلين! 🌟 اسألني عن أي درس، وبقدر أفتحلك صفحته بكبسة.','Hey there! 🌟 Ask about a lesson and I can take you right to it.']],
 [/^(?:صباح الخير|صباح النور|يسعد صباحك|good morning)(?: يا .*)?$/iu,['صباح النور! ☀️ جاهز نكتشف إشي جديد بكلاسورا؟','Good morning! ☀️ Ready to learn something new?']],
 [/^(?:مساء الخير|مسا الخير|مسا النور|يسعد مساك|good evening|good afternoon)(?: يا .*)?$/iu,['مسا النور! 🌙 كيف بقدر أساعدك بالدراسة اليوم؟','Good evening! 🌙 How can I help you study?']],
 [/^(?:كيفك|كيف الحال|شو اخبارك|شو اخباركم|كيف حالك|كيفك اليوم|how are you|how are you doing|how is it going|how s it going)$/iu,['تمام الحمد لله! 😊 جاهز أساعدك بالرياضيات والعلوم وباقي المواضيع. إيش بدك نسأل اليوم؟',"I'm doing well, thanks! 😊 Ready to help with science, math, and Classora lessons. What's your question?"]],
 [/^(?:hello|hellooo+|hi|hii+|hey|hey there|hiya|greetings|yo|howdy|welcome|salam|assalamu alaikum|as salamu alaykum)(?: everyone)?$/iu,['أهلًا فيك بكلاسورا! 👋 احكيلي شو الموضوع اللي حابب تفهمه.','Hello and welcome to Classora! 👋 What would you like to explore?']],
 [/^(?:thank you|thanks|thank you so much|شكرا|شكرا الك|يسلمو|يعطيك العافيه|يعطيك العافية)$/iu,['العفو، يسعدني أساعدك! 💚','You’re very welcome! 💚']]
];
function greetingAnswer(raw,en){
 const q=norm(raw).replace(/\s+/g,' ');
 for(const [pattern,answers] of GREETING_REPLY)if(pattern.test(q))return answers[en?1:0];
 return null;
}
const SCIENCE_QA=[
 {re:/(?:لماذا|ليش|why).*(?:السماء|سما).*(?:زرق|ازرق)|why is the sky blue/i,ar:'السماء تبدو زرقاء لأن جزيئات الهواء تشتّت ضوء الشمس الأزرق، ذا الموجة الأقصر، أكثر من الأحمر. هذه الظاهرة اسمها تشتّت رايلي.',en:'The sky appears blue because air molecules scatter shorter-wavelength blue sunlight more strongly than red light. This is Rayleigh scattering.',subject:'science',hint:/الضوء|ضوء/},
 {re:/(?:لماذا|ليش|why).*(?:القمر|قمر|moon).*(?:يضوي|مضي|يضي|يظهر|shine|glow)|why does the moon shine/i,ar:'القمر لا يصدر ضوءًا مرئيًا من نفسه مثل الشمس؛ بنشوفه لأنه يعكس ضوء الشمس. تغيّر الجزء المضيء الذي نراه يسبّب أطوار القمر.',en:'The Moon does not shine by producing visible light like the Sun. We see it because it reflects sunlight. The visible sunlit portion changes through the lunar phases.',subject:'geography',hint:/القمر|النظام الشمسي/},
 {re:/(?:لماذا|ليش|why).*(?:تطفو|طفو|float).*(?:سفن|سفينه|سفينة|ships?)|why do ships float/i,ar:'السفينة بتزيح ماءً يولّد قوة طفو إلى أعلى. إذا كانت قوة الطفو تساوي وزنها، بتطفو؛ المهم متوسط كثافة السفينة مع الفراغات داخلها، مش كثافة الحديد وحده.',en:'A ship displaces water, producing an upward buoyant force. It floats when buoyancy balances its weight. What matters is its overall average density, including its hollow interior.',subject:'science',hint:/الكثافة|القوى/},
 {re:/(?:لماذا|ليش|why).*(?:النبات|plants?).*(?:اخضر|green)|why are plants green/i,ar:'الكلوروفيل في كثير من أوراق النباتات يمتص الضوء الأحمر والأزرق أكثر من الأخضر، لذلك ينعكس أو يمر جزء أكبر من الضوء الأخضر ونراها خضراء.',en:'Chlorophyll in many leaves absorbs red and blue light more strongly than green light, so more green light is reflected or transmitted.',subject:'science',hint:/النبات|البناء الضوئي/},
 {re:/(?:البناء الضوئي|التمثيل الضوئي|photosynthesis)/i,ar:'البناء الضوئي عملية تستخدم فيها النباتات والطحالب وبعض البكتيريا طاقة الضوء لتحويل الماء وثاني أكسيد الكربون إلى مواد سكرية، وينطلق الأكسجين في البناء الضوئي الأكسجيني. الضوء والماء وثاني أكسيد الكربون عوامل مهمة.',en:'Photosynthesis uses light energy to make sugars from water and carbon dioxide in plants, algae, and some bacteria. Oxygen is released in oxygenic photosynthesis.',subject:'science',hint:/البناء الضوئي|التغذية/},
 {re:/(?:سرعة الضوء|speed of light|how fast is light)/i,ar:'سرعة الضوء في الفراغ ثابتة تمامًا: 299,792,458 متر/ثانية (حوالي 300 ألف كيلومتر/ثانية). داخل مواد مثل الماء والزجاج ينتقل الضوء بسرعة أقل.',en:'The speed of light in vacuum is exactly 299,792,458 metres per second (about 300,000 km/s). Light travels more slowly through materials such as water and glass.',subject:'science',hint:/الضوء/},
 {re:/(?:الجاذبية|gravity|لماذا تسقط الاشياء|why do things fall)/i,ar:'الجاذبية هي تأثير يسبب تجاذب الأجسام ذات الكتلة. قرب سطح الأرض تتسارع الأجسام الساقطة سقوطًا حرًا بنحو 9.8 م/ث² إذا أهملنا مقاومة الهواء.',en:'Gravity causes objects with mass to attract each other. Near Earth’s surface, freely falling objects accelerate at about 9.8 m/s² when air resistance is ignored.',subject:'science',hint:/القوى والحركة|قوانين الحركة/},
 {re:/(?:ما هو|ما هي|اشرح|what is|explain).*(?:حمض|حموض|قاعد|acid|base|ph)\b|مقياس ph|pH scale/i,ar:'مقياس pH يصف حموضية المحلول المائي. قرب 25°م: أقل من 7 حمضي، و7 متعادل، وأكبر من 7 قاعدي. المقياس لوغاريتمي: فرق درجة واحدة يعني فرقًا بعامل 10 في نشاط أيونات الهيدروجين.',en:'pH measures acidity in aqueous solutions. Near 25°C, below 7 is acidic, 7 neutral, and above 7 basic. It is logarithmic: one pH unit corresponds to a tenfold difference in hydrogen-ion activity.',subject:'science',hint:/الأحماض والقواعد|الحموضية/},
 {re:/(?:الذرات|الذرة|atom|atoms?)/i,ar:'الذرة تتكوّن من نواة فيها بروتونات ونيوترونات (عادةً)، وتحيط بها إلكترونات. عدد البروتونات يحدد العنصر الكيميائي؛ الإلكترونات تؤثر كثيرًا في التفاعلات والروابط.',en:'An atom has a nucleus containing protons and usually neutrons, with electrons around it. The number of protons defines the element, while electrons strongly influence chemical bonding.',subject:'science',hint:/بنية الذرة|الذرات/},
 {re:/(?:لماذا|ليش|why).*(?:الثلج|جليد|ice).*(?:يطفو|float)|(?:لماذا|ليش|why).*(?:يطفو|float).*(?:الثلج|جليد|ice)/i,ar:'الثلج يطفو على الماء السائل لأن بنية الروابط الهيدروجينية تجعل كثافته أقل من كثافة الماء السائل قرب درجات الحرارة العادية.',en:'Ice floats in liquid water because hydrogen-bonded crystal structure makes ice less dense than liquid water under ordinary conditions.',subject:'science',hint:/الكثافة|حالات المادة/},
 {re:/(?:لماذا|ليش|why).*(?:الفصول|الصيف|الشتاء|seasons)/i,ar:'الفصول تحدث أساسًا بسبب ميل محور دوران الأرض نحو 23.4° بالنسبة إلى العمود على مستوى مدارها، ما يغيّر طول النهار وزاوية أشعة الشمس خلال السنة، مش بسبب تغيّر المسافة عن الشمس.',en:'Seasons are mainly caused by Earth’s axis tilting about 23.4° relative to the perpendicular to its orbit, changing daylight duration and the Sun’s angle—not by changes in Earth–Sun distance.',subject:'geography',hint:/الفصول|الأرض والنظام الشمسي/},
 {re:/(?:لماذا|ليش|why).*(?:نسمع|sound|صوت).*(?:البرق|الرعد|thunder)|why.*thunder/i,ar:'البرق يسخّن الهواء بسرعة كبيرة، فيتمدّد فجأة ويولّد موجة ضغط نسمعها رعدًا. منشوف البرق قبل الرعد لأن الضوء أسرع بكثير من الصوت.',en:'Lightning heats nearby air very rapidly, causing sudden expansion and a pressure wave we hear as thunder. We see lightning first because light travels much faster than sound.',subject:'science',hint:/الصوت|الضوء/},
 {re:/(?:ما الفرق|difference).*(?:كتله|كتلة|mass).*(?:وزن|weight)|mass vs weight/i,ar:'الكتلة مقدار المادة/القصور الذاتي وتقاس بالكيلوغرام، أما الوزن فهو قوة الجاذبية المؤثرة في الجسم ويُقاس بالنيوتن: الوزن = الكتلة × تسارع الجاذبية.',en:'Mass measures inertia and is expressed in kilograms. Weight is the gravitational force on an object, measured in newtons: weight = mass × gravitational acceleration.',subject:'science',hint:/الكتلة|القوى/},
 {re:/(?:ما الفرق|difference).*(?:حراره|حرارة|heat).*(?:درجه|temperature)|heat vs temperature/i,ar:'درجة الحرارة مرتبطة بمتوسط الطاقة الحركية المجهرية للجسيمات، أما الحرارة فهي طاقة تنتقل من جسم لآخر بسبب فرق درجة الحرارة.',en:'Temperature relates to average microscopic particle kinetic energy, while heat is energy transferred because of a temperature difference.',subject:'science',hint:/الحرارة|الطاقة/},
 {re:/(?:ما هو|ما هي|اشرح|what is|explain).*(?:dna|الحمض النووي|الوراثه|الوراثة)/i,ar:'DNA جزيء يحمل معلومات وراثية على شكل تسلسل من القواعد A وT وC وG. الجينات أجزاء من DNA تحتوي تعليمات لصنع منتجات وظيفية، ومنها بروتينات.',en:'DNA carries genetic information as sequences of A, T, C and G bases. Genes are sections of DNA that contain instructions for functional products, including proteins.',subject:'science',hint:/DNA|الوراثة/},
 {re:/(?:ما هو|ما هي|اشرح|what is|explain).*(?:الطاقه|الطاقة|energy)/i,ar:'الطاقة مقدار فيزيائي يصف القدرة على إحداث تغيّر أو بذل شغل. تظهر بأشكال منها الحركة والوضع والحرارة والكهرباء، وتتحول من شكل لآخر مع بقاء مجموعها محفوظًا في نظام معزول.',en:'Energy is a physical quantity associated with doing work and causing change. It appears as kinetic, potential, thermal and electrical energy. In an isolated system, total energy is conserved.',subject:'science',hint:/الطاقة/},
 {re:/(?:لماذا|ليش|why).*(?:العين|eyes?).*(?:تري|ترى|see|vision)/i,ar:'نرى لأن الضوء المنعكس عن الأجسام يدخل العين ويركّزه سطحها وعدستها على الشبكية، حيث تحوّل الخلايا الحساسة للضوء الإشارة إلى نبضات عصبية.',en:'We see when light from objects enters the eye and is focused on the retina, where light-sensitive cells convert it into neural signals.',subject:'science',hint:/الضوء|أجهزة الجسم/},
 {re:/(?:ما هو|ما هي|اشرح|what is|explain).*(?:الخلية|cell)/i,ar:'الخلية هي الوحدة الأساسية للبناء والوظيفة في الكائنات الحية. معظم الخلايا لها غشاء وسيتوبلازم ومادة وراثية؛ والخلايا حقيقية النواة تمتلك نواة.',en:'A cell is the basic structural and functional unit of life. Most cells have a membrane, cytoplasm and genetic material; eukaryotic cells have a nucleus.',subject:'science',hint:/الخلية/},
 {re:/(?:لماذا|ليش|why).*(?:ماء|water).*(?:يغلي|boil)|boiling point of water/i,ar:'عند الضغط الجوي القياسي يغلي الماء النقي عند نحو 100°C. درجة الغليان تنخفض عند الضغط الأقل، مثل الأماكن المرتفعة.',en:'Pure water boils at about 100°C at standard atmospheric pressure. The boiling point decreases at lower pressures, such as at higher elevations.',subject:'science',hint:/حالات المادة|الحرارة/}
];
function scienceQuickAnswer(raw,en){
 const q=norm(raw),original=String(raw||'').toLowerCase();
 for(const entry of SCIENCE_QA)if(entry.re.test(q)||entry.re.test(original))return entry[en?'en':'ar'];
 return null;
}

/* Keep lightweight topic context per chat surface to answer "explain again".
   This is in-memory lesson metadata, never account data or user messages. */
const lastTopicByContext=new Map();
const simplifiedRequest=raw=>/(?:مش فاهم|مش فاهمه|ما فهمت|مو فاهم|مش واضح|مش واضحه|وضحلي|وضح لي|فهمني|اعد الشرح|اعيد الشرح|مره ثانيه|مرة ثانية|explain again|explain more|i dont understand|i don t understand|i do not understand|didnt understand|didn t understand|i dont get it|i don t get it|not clear|clarify|say it again|explain it again)/i.test(norm(raw));
export function classoraStudyClarification(raw,language='ar'){
 const en=language==='en',q=norm(raw);
 if(/^(?:اشرح|شرح|explain|بدي شرح|شرح الدرس|موضوع|lesson|topic)$/.test(q))
  return en?'Which lesson should I explain? Type its name, or choose it from Subjects.':'أي درس بدك أشرحه؟ اكتب اسمه أو اختاره من المواد.';
 return en?'I didn’t quite understand your question. Could you clarify what topic you mean, or give a short example?':'مش فاهم سؤالك بالضبط، وضّحلي شو قصدك أو اكتب اسم الموضوع ومثال صغير عشان أساعدك.';
}
function currentLesson(context){
 return lastTopicByContext.get(String(context||'main'))||null;
}
function rememberLesson(context,topic){
 lastTopicByContext.set(String(context||'main'),topic);
}

export function classoraStudyTopicMatch(raw,grade=8,context='main'){
 const selected=matchTopic(raw,[7,8,9,10].includes(Number(grade))?Number(grade):8);
 if(selected)return {grade:selected.grade,subject:selected.subject,title:selected.title,en:selected.en};
 if(simplifiedRequest(raw)){
  const recent=currentLesson(context);
  if(recent)return {grade:recent.grade,subject:recent.subject,title:recent.title,en:recent.en};
 }
 const q=norm(raw);
 const science=SCIENCE_QA.find(x=>x.hint&&(x.re.test(q)||x.re.test(String(raw||'').toLowerCase())));
 if(!science)return null;
 const all=topics.filter(x=>x.subject===science.subject&&(
   science.hint.test(x.title+' '+x.en)||science.hint.test(norm(x.title)+' '+norm(x.en))
 ));
 all.sort((a,b)=>(Number(b.grade)===Number(grade))-(Number(a.grade)===Number(grade))||a.grade-b.grade);
 const row=all[0];
 return row?{grade:row.grade,subject:row.subject,title:row.title,en:row.en}:null;
}

export function classoraStudyAnswer(raw,language='ar',grade=8,context='main'){
 const en=language==='en',q=String(raw||'').trim();
 if(!q)return null;
 const greeting=greetingAnswer(q,en);
 if(greeting)return greeting;
 const word=wordLookup(q,en);
 if(word)return word;
 const g=[7,8,9,10].includes(Number(grade))?Number(grade):8;
 const specificScience=/^(?:لماذا|ليش|why|how fast|ما الفرق|difference)|سرعة الضوء|speed of light|boiling point of water/i.test(norm(q));
 if(specificScience){
  const fact=scienceQuickAnswer(q,en);
  if(fact)return fact;
 }
 const lesson=matchTopic(q,g);
 if(lesson){
  rememberLesson(context,lesson);
  const mode=/مثال|example|sentence|طبق|apply/i.test(q)?'example':/متقدم|تفصيل|advanced|in depth/i.test(q)?'advanced':'explain';
  const guidance=curriculumTopicGuide(lesson.title,lesson.subject,language,mode);
  return (en?lesson.en:lesson.title)+' — '+(en?'Grade ':'الصف ')+lesson.grade+'\n'+guidance;
 }
 if(simplifiedRequest(q)){
  const previous=currentLesson(context);
  if(previous){
   const main=curriculumTopicGuide(previous.title,previous.subject,language,'explain');
   const example=curriculumTopicGuide(previous.title,previous.subject,language,'example');
   return en
    ?'Sure! Let me explain '+previous.en+' more simply:\n'+main+(example&&example!==main?'\nExample: '+example:'')+'\nTell me which step is still unclear.'
    :'أكيد! خليني أوضح «'+previous.title+'» بطريقة أسهل:\n'+main+(example&&example!==main?'\nمثال: '+example:'')+'\nإذا في خطوة مش واضحة، احكيلي أي واحدة.';
  }
  return en?'Of course! Which topic or step was unclear? Write the lesson name and I’ll explain with an example.':'أكيد! شو الموضوع أو الخطوة اللي مش واضحة؟ اكتب اسم الدرس وبشرحلك مع مثال.';
 }
 const science=scienceQuickAnswer(q,en);
 if(science)return science;
 if(/ما معنى|معنى كلمة|ترجم|ترجمة|translate|meaning of|what does/i.test(q))
  return en?'This word is not in my checked vocabulary yet. Please add it in a sentence.':'هاي الكلمة مش موجودة في قاموسي المراجع حاليًا. اكتبها بجملة حتى يتضح السياق.';
 return null;
}
export const classoraStudyCoverage={topics:topics.length,wordPairs:WORDS.length,irregularVerbs:VERBS.length};
