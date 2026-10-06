/* Classora Curriculum V97 — grades 7-10, no Hebrew or civics. */
const S={
 math:{ar:"الرياضيات",en:"Mathematics",icon:"math"},
 science:{ar:"العلوم",en:"Science",icon:"science"},
 arabic:{ar:"العربي — قواعد",en:"Arabic Grammar",icon:"book"},
 english:{ar:"الإنجليزي — Grammar",en:"English Grammar",icon:"language"},
 history:{ar:"التاريخ",en:"History",icon:"history"},
 geography:{ar:"الجغرافيا",en:"Geography",icon:"globe"}
};
const G={
 7:{
  math:["الأعداد الموجبة والسالبة","ترتيب العمليات الحسابية","القوى والجذور","التعابير الجبرية","المتغيرات","تجميع الحدود المتشابهة","قانون التوزيع","المعادلات من الدرجة الأولى","مسائل كلامية","النسبة والتناسب الأساسي","النسب المئوية","المستوى الإحداثي","مقدمة في الدوال","قراءة الرسوم البيانية","الزوايا","المثلثات","المحيط والمساحة","المجسمات","الحجم"],
  science:["المادة وخصائصها","حالات المادة","الكتلة والحجم","الكثافة","الجسيمات والذرات","العناصر","الطاقة","تحولات الطاقة","الحرارة ودرجة الحرارة","القوى والحركة","الخلية","أجهزة جسم الإنسان","الجهاز التنفسي","جهاز الدوران","التغذية","الكائنات الحية","الأنظمة البيئية","السلاسل الغذائية"],
  arabic:["أقسام الكلام","الاسم والفعل والحرف","الماضي والمضارع والأمر","الجملة الاسمية","الجملة الفعلية","المبتدأ والخبر","الفاعل","المفعول به","النعت والمنعوت","المضاف والمضاف إليه","المعرفة والنكرة","المذكر والمؤنث","المفرد والمثنى والجمع","جمع المذكر السالم","جمع المؤنث السالم","جمع التكسير","الضمائر","أسماء الإشارة","الأسماء الموصولة","حروف الجر","علامات الإعراب الأساسية"],
  english:["Parts of Speech","Nouns","Singular and Plural","Countable and Uncountable Nouns","Subject Pronouns","Object Pronouns","Possessive Adjectives","Possessive Pronouns","Demonstratives","Verb To Be","Have / Has","There is / There are","Articles: a / an / the","Present Simple","Present Continuous","Present Simple vs Present Continuous","Past Simple","Regular and Irregular Verbs","Future with Will","Be Going To","Can / Can’t","Must / Mustn’t","Should / Shouldn’t","Adjectives","Adverbs","Comparative","Superlative","Prepositions","Question Words","Some / Any","Much / Many","A lot of"],
  history:["الدولة الأموية","الدولة العباسية","الأندلس","أوروبا في العصور الوسطى","الحملات الصليبية","الدولة الفاطمية","الدولة الأيوبية","الدولة المملوكية","الدروز في العصور الوسطى","اليهود في البلدان الإسلامية في العصور الوسطى"],
  geography:["الإنسان والبيئة","السكان","توزيع السكان","الهجرة","المدن والقرى","الاقتصاد والعمل","العولمة","الموارد","البيئة","التنمية المستدامة"]
 },
 8:{
  math:["النسبة والتناسب","مقياس الرسم","النسب المئوية","المعادلات","المعادلات بمتغير في الطرفين","المتباينات","نظام معادلتين بمجهولين","الدالة الخطية","الميل","معادلة المستقيم","نقاط تقاطع المستقيم مع المحاور","السرعة والزمن والمسافة","الإحصاء","الاحتمال","المستقيمات المتوازية","تطابق المثلثات","تشابه المثلثات","المثلث متساوي الساقين","نظرية فيثاغورس","المساحات والحجوم"],
  science:["بنية الذرة","العناصر","الجدول الدوري","المركبات","المخاليط","التفاعلات الكيميائية","الأحماض والقواعد","الكهرباء","الدارات الكهربائية","التيار الكهربائي","القوى والحركة","الطاقة","الضوء","الصوت","التكاثر","الوراثة الأساسية","أجهزة جسم الإنسان","البيئة والاستدامة"],
  arabic:["نائب الفاعل","المبني للمعلوم والمبني للمجهول","الحال","النعت","العطف","التوكيد","البدل","المضاف والمضاف إليه","الأفعال المبنية والمعربة","الفعل الصحيح","الفعل المعتل","الميزان الصرفي","اسم الفاعل","اسم المفعول","أنواع الجموع","علامات الرفع","علامات النصب","علامات الجر","رفع الفعل المضارع","نصب الفعل المضارع","جزم الفعل المضارع"],
  english:["Present Simple","Present Continuous","Past Simple","Past Continuous","Past Simple vs Past Continuous","Present Perfect","Present Perfect vs Past Simple","Future with Will","Be Going To","Modals","Can / Could","Must / Have to","Should","May / Might","Comparative and Superlative","Too / Enough","First Conditional","Zero Conditional","Passive Voice — Introduction","Relative Pronouns","Who / Which / That","Gerunds and Infinitives — Introduction","Quantifiers","Much / Many","Few / Little","Some / Any / No","Prepositions","Adverbs","Question Tags — Introduction"],
  history:["عصر النهضة","الإنسانية Humanism","الإصلاح الديني","الاكتشافات الجغرافية","اكتشاف أمريكا","رأس الرجاء الصالح","الثورة الفرنسية","نابليون بونابرت","الدولة العثمانية حتى نهاية القرن الثامن عشر"],
  geography:["الأرض والنظام الشمسي","بنية الكرة الأرضية","الصفائح التكتونية","الزلازل","البراكين","الصخور","المعادن","التجوية","التعرية","الغلاف الجوي","الطقس","المناخ","مناطق المناخ","دورة المياه","الموارد الطبيعية","مصادر الطاقة","الطاقة المتجددة","الطاقة غير المتجددة","تغير المناخ"]
 },
 9:{
  math:["الدالة الخطية المتقدمة","التحليل إلى عوامل","إخراج عامل مشترك","المتطابقات الجبرية","الفرق بين مربعين","الكسور الجبرية","المعادلات","نظام المعادلات","المعادلات التربيعية","الدالة التربيعية","القطع المكافئ","رأس القطع المكافئ","محور التماثل","نقاط الصفر","مجالات الموجب والسالب","مجالات الصعود والنزول","مسائل كلامية","الإحصاء","الاحتمال","فيثاغورس","تشابه المثلثات","الأشكال الرباعية","الهندسة الإحداثية"],
  science:["الحركة","السرعة","التسارع","القوى","قوانين الحركة","الطاقة الميكانيكية","الكهرباء","الكيمياء","التفاعلات الكيميائية","الروابط الكيميائية","الأحماض والقواعد","الخلية","الوراثة","DNA","التكاثر","أجهزة جسم الإنسان","الأنظمة البيئية","تأثير الإنسان على البيئة"],
  arabic:["المفعول به","المفعول المطلق","المفعول لأجله","المفعول فيه","المفعول معه","الحال","التمييز","الاستثناء","المنادى","كان وأخواتها","إن وأخواتها","لا النافية للجنس","اسم الفاعل","اسم المفعول","الصفة المشبهة","صيغ المبالغة","اسم التفضيل","الأفعال المجردة","الأفعال المزيدة","الميزان الصرفي","الجمل التي لها محل من الإعراب","الجمل التي لا محل لها من الإعراب","الإعراب التفصيلي"],
  english:["Present Perfect","Present Perfect Continuous","Past Perfect","Past Perfect vs Past Simple","Future Forms","Future Continuous","Passive Voice","Present Passive","Past Passive","Future Passive","Zero Conditional","First Conditional","Second Conditional","Relative Clauses","Defining Relative Clauses","Reported Speech — Introduction","Modal Verbs","Gerunds","Infinitives","Gerunds vs Infinitives","Used to","Question Tags","Quantifiers","Articles","Prepositions","Adjective Order"],
  history:["الثورة الصناعية","القومية","الإمبريالية","الاستعمار","أوروبا في القرن التاسع عشر","الحرب العالمية الأولى","أسباب الحرب العالمية الأولى","أحداث الحرب العالمية الأولى","نتائج الحرب العالمية الأولى","اتفاقيات السلام سنة 1919","الشرق الأوسط في القرن التاسع عشر","الدولة العثمانية في القرن التاسع عشر","الشرق الأوسط حتى نهاية الحرب العالمية الأولى"],
  geography:["إسرائيل في الشرق الأوسط","الموقع والحدود","التضاريس","المناخ","مصادر المياه","السكان","توزيع السكان","الهجرة","المدن","الاقتصاد","الصناعة","الزراعة","المواصلات","الطاقة","البيئة","الاستدامة"]
 },
 10:{
  math:["الجبر","المعادلات","المتباينات","أنظمة المعادلات","الدوال","الدالة الخطية","الدالة التربيعية","التحليل إلى عوامل","الهندسة","الهندسة التحليلية","المستوى الإحداثي","المسافة بين نقطتين","منتصف قطعة مستقيمة","ميل المستقيم","معادلة المستقيم","المثلثات","التشابه","حساب المثلثات","Sin","Cos","Tan","الإحصاء","الاحتمال"],
  science:[
   {title:"الحركة",track:"physics"},{title:"السرعة",track:"physics"},{title:"التسارع",track:"physics"},{title:"القوى",track:"physics"},{title:"قوانين نيوتن",track:"physics"},{title:"الشغل",track:"physics"},{title:"الطاقة",track:"physics"},{title:"القدرة",track:"physics"},{title:"الكهرباء",track:"physics"},{title:"الدارات الكهربائية",track:"physics"},
   {title:"بنية الذرة",track:"chemistry"},{title:"الجدول الدوري",track:"chemistry"},{title:"الروابط الكيميائية",track:"chemistry"},{title:"الأيونات",track:"chemistry"},{title:"المركبات",track:"chemistry"},{title:"المعادلات الكيميائية",track:"chemistry"},{title:"التفاعلات الكيميائية",track:"chemistry"},{title:"الأحماض والقواعد",track:"chemistry"},{title:"الرقم الهيدروجيني pH",track:"chemistry"},
   {title:"الخلية",track:"biology"},{title:"عضيات الخلية",track:"biology"},{title:"الانقسام الخلوي",track:"biology"},{title:"DNA",track:"biology"},{title:"الجينات",track:"biology"},{title:"الوراثة",track:"biology"},{title:"البروتينات",track:"biology"},{title:"أجهزة جسم الإنسان",track:"biology"},{title:"التنفس الخلوي",track:"biology"},{title:"البناء الضوئي",track:"biology"},{title:"الأنظمة البيئية",track:"biology"}
  ],
  arabic:["مراجعة علامات الإعراب","كان وأخواتها","إن وأخواتها","لا النافية للجنس","المفاعيل","الحال","التمييز","الاستثناء","المنادى","النعت","العطف","التوكيد","البدل","الممنوع من الصرف","العدد والمعدود","أسلوب الشرط","أسلوب التعجب","أسلوب المدح والذم","الإغراء والتحذير","اسم الفاعل","اسم المفعول","الصفة المشبهة","صيغ المبالغة","اسم التفضيل","المصادر","المجرد والمزيد","الصحيح والمعتل","الإعلال والإبدال","الإعراب الكامل"],
  english:["Present Simple","Present Continuous","Present Perfect","Present Perfect Continuous","Past Simple","Past Continuous","Past Perfect","Future Forms","Future Continuous","Future Perfect — Introduction","Active and Passive Voice","Zero Conditional","First Conditional","Second Conditional","Third Conditional — Introduction","Relative Clauses","Reported Speech","Reported Questions","Modal Verbs","Modal Perfects — Introduction","Gerunds","Infinitives","Gerunds vs Infinitives","Used to / Would","Wish / If Only — Introduction","Causative Have — Introduction","Question Tags","Articles","Determiners","Quantifiers","Prepositions","Linking Words"]
 }
};
export const CURRICULUM_DATA=G;
export const CURRICULUM_SUBJECTS=S;

const TRACKS={physics:["الفيزياء","Physics"],chemistry:["الكيمياء","Chemistry"],biology:["الأحياء","Biology"]};
const EN_EXAMPLES={
 "Present Simple":["She plays football every day.","She is playing football now."],
 "Present Continuous":["She is studying now.","She studies every day."],
 "Past Simple":["They visited Jerusalem yesterday.","They have visited Jerusalem now."],
 "Past Continuous":["I was reading when he called.","I read when he is calling."],
 "Present Perfect":["I have finished my homework.","I finished my homework tomorrow."],
 "Present Perfect Continuous":["She has been studying for two hours.","She studies for two hours yesterday."],
 "Past Perfect":["They had left before we arrived.","They leave before we arrived."],
 "Future with Will":["I will call you tomorrow.","I called you tomorrow."],
 "Be Going To":["We are going to travel next week.","We going travel next week."],
 "Future Continuous":["At 8 PM, I will be studying.","At 8 PM, I studied tomorrow."],
 "First Conditional":["If it rains, we will stay home.","If it will rain, we stayed home."],
 "Zero Conditional":["If you heat ice, it melts.","If you heat ice, it will melted."],
 "Second Conditional":["If I had more time, I would read more.","If I have more time, I would read yesterday."],
 "Passive Voice":["The homework was completed by Sara.","Sara was complete the homework."],
 "Active and Passive Voice":["The bridge was built in 2020.","The bridge built was in 2020 by."],
 "Reported Speech":["He said that he was tired.","He said that I am tired yesterday."],
 "Reported Questions":["She asked where I lived.","She asked where did I live."],
 "Relative Clauses":["The boy who won is my friend.","The boy which won is my friend."],
 "Defining Relative Clauses":["The book that I bought is new.","The book who I bought is new."],
 "Gerunds":["Swimming is good exercise.","Swim is good exercise."],
 "Infinitives":["I want to learn English.","I want learning English yesterday."],
 "Used to":["I used to play here as a child.","I use to played here as a child."],
 "Question Tags":["You are ready, aren’t you?","You are ready, are you?"],
 "Comparative":["Ali is taller than Omar.","Ali is more tall than Omar."],
 "Superlative":["This is the tallest building.","This is the most tall building."],
 "Some / Any":["Do you have any water?","Do you have some water?"],
 "Much / Many":["How many books do you have?","How much books do you have?"],
 "Articles: a / an / the":["I saw an elephant.","I saw a elephant."],
 "Subject Pronouns":["She is my sister.","Her is my sister."],
 "Object Pronouns":["I saw him yesterday.","I saw he yesterday."],
 "Possessive Adjectives":["This is my book.","This is mine book."],
 "Can / Could":["Could you help me?","Could you helped me?"],
 "Must / Have to":["Students have to arrive on time.","Students has to arrive on time."],
 "Should":["You should drink water.","You should to drink water."]
};
const AR_EXAMPLES={
 "المضاف والمضاف إليه":["كتابُ الطالبِ جديدٌ","الطالبُ مجتهدٌ"],
 "المبتدأ والخبر":["العلمُ نورٌ","كتبَ الطالبُ الدرسَ"],
 "الفاعل":["كتبَ الطالبُ الدرسَ","قرأَ الكتابَ الطالبُ"],
 "المفعول به":["قرأَ سامرٌ الكتابَ","الكتابُ مفيدٌ"],
 "النعت":["جاء الطالبُ المجتهدُ","جاء الطالبُ المدرسةَ"],
 "الحال":["عاد الطالبُ مسرورًا","الطالبُ مسرورٌ"],
 "التمييز":["اشتريتُ لترًا حليبًا","اشتريتُ حليبٌ"],
 "الاستثناء":["حضر الطلابُ إلا طالبًا","حضر إلا الطلابُ"],
 "المنادى":["يا طالبُ، اجتهد","طالبُ يا اجتهد"],
 "كان وأخواتها":["كان الجوُّ جميلًا","كان الجوَّ جميلٌ"],
 "إن وأخواتها":["إنَّ العلمَ نورٌ","إنَّ العلمُ نورًا"],
 "لا النافية للجنس":["لا طالبَ مهملٌ","لا الطالبُ مهملٌ"],
 "اسم الفاعل":["كاتبٌ من الفعل كتب","مكتوبٌ من الفعل كتب"],
 "اسم المفعول":["مكتوبٌ من الفعل كتب","كاتبٌ من الفعل كتب"],
 "جمع المذكر السالم":["معلمون / معلمين","معالم"],
 "جمع المؤنث السالم":["معلمات","معالم"],
 "الماضي والمضارع والأمر":["كتبَ / يكتبُ / اكتبْ","كتاب / كاتب / مكتوب"],
 "الجملة الاسمية":["السماءُ صافيةٌ","طلعت الشمسُ"],
 "الجملة الفعلية":["طلعت الشمسُ","السماءُ صافيةٌ"],
 "حروف الجر":["في المدرسةِ","في المدرسةُ"],
 "نائب الفاعل":["كُتِبَ الدرسُ","كتبَ الدرسُ الطالبَ"],
 "المبني للمعلوم والمبني للمجهول":["كتبَ الطالبُ الدرسَ / كُتِبَ الدرسُ","الطالبُ الدرسُ كتب"],
 "أسلوب الشرط":["إن تجتهدْ تنجحْ","إن تجتهدُ نجحتَ غدًا"],
 "أسلوب التعجب":["ما أجملَ السماءَ!","السماءُ ما جميل"],
 "الممنوع من الصرف":["مررتُ بأحمدَ","مررتُ بأحمدٍ"]
};
function svg(name){
 const p={
  school:'<path d="m3 10 9-6 9 6-9 6-9-6zM5 13v6m14-6v6M8 16v4h8v-4"/>',
  math:'<path d="M4 20V4l16 16H4zM4 15h5v5"/>',
  science:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 15h8"/>',
  book:'<path d="M3 5q5-2 9 1 4-3 9-1v15q-5-2-9 1-4-3-9-1zM12 6v15"/>',
  language:'<path d="M4 5h10M9 3v2m-3 4c2 4 5 6 8 7M13 9c-1 3-4 6-8 8M15 20l3-8 3 8m-5-3h4"/>',
  history:'<path d="M4 5h16M6 5v15m12-15v15M4 20h16M9 9h6m-6 4h6m-6 4h6"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  motion:'<path d="M2 8h8M2 16h5M7 12h15m-6-6 6 6-6 6"/>',
  flask:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 15h8"/>',
  leaf:'<path d="M20 3C2 2 1 16 9 19s13-8 11-16zM4 22 16 9"/>',
  group:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M14 15a5 5 0 0 1 7 4v1"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/>',
  bolt:'<path d="m14 2-10 12h8l-2 8 10-12h-8z"/>'
 };
 return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">'+(p[name]||p.book)+'</svg>';
}
function lang(api){return api.language&&api.language()==="en"?"en":"ar"}
function txt(api,ar,en){return lang(api)==="en"?en:ar}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(ch){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]})}
function normalizeTopic(raw,grade,subject,index){
 const o=typeof raw==="string"?{title:raw}:raw;
 return {id:"g"+grade+"-"+subject+"-"+index,grade:Number(grade),subject:subject,title:o.title,track:o.track||"",index:index};
}
function topicsFor(grade,subject){
 return (G[grade]&&G[grade][subject]||[]).map(function(x,i){return normalizeTopic(x,grade,subject,i)});
}
function subjectList(grade){return Object.keys(G[grade]||{}).filter(function(k){return S[k]})}
function subjectName(api,key){return S[key]?(lang(api)==="en"?S[key].en:S[key].ar):key}
function trackName(api,key){const a=TRACKS[key];return a?(lang(api)==="en"?a[1]:a[0]):key}
function titleText(api,topic){return topic.subject==="english"?topic.title:topic.title}
function statusLabel(api,s){return s==="done"?txt(api,"مكتمل","Completed"):s==="progress"?txt(api,"قيد التعلم","In progress"):txt(api,"لم يبدأ","Not started")}
function levelLabel(api,d){return ({easy:txt(api,"سهل","Easy"),medium:txt(api,"متوسط","Medium"),hard:txt(api,"صعب","Hard"),mixed:txt(api,"مختلط","Mixed")})[d]||d}
function basicExplanation(api,t){
 const n=t.title;
 if(t.subject==="english")return "Learn the rule, form and common use of "+n+". Focus on how the sentence changes in affirmative, negative and question forms.";
 if(t.subject==="arabic")return "في هذا الدرس نتعلّم قاعدة «"+n+"»، كيف نميّزها داخل الجملة، وما العلامات التي تساعدنا على تحديدها وإعرابها بصورة صحيحة.";
 if(t.subject==="math")return "في موضوع «"+n+"» نبدأ بالفكرة الأساسية، نحدد المعطيات والمطلوب، ثم نطبّق القاعدة بخطوات قصيرة وواضحة ونراجع النتيجة.";
 if(t.subject==="science")return "في موضوع «"+n+"» نربط المصطلح بالملاحظة العلمية، ونفهم السبب والنتيجة والعلاقات الأساسية قبل حل الأسئلة.";
 if(t.subject==="history")return "في «"+n+"» نركّز على السياق الزمني، الأسباب، الأحداث الرئيسية والنتائج، ونربط الحدث بما سبقه وما جاء بعده.";
 return "في «"+n+"» نحدّد المكان أو الظاهرة، العوامل المؤثرة فيها، آثارها وعلاقتها بالإنسان والبيئة، ثم نطبّق ذلك على أمثلة وخرائط.";
}
function advancedExplanation(api,t){
 const n=t.title;
 if(t.subject==="english")return "Advanced: compare "+n+" with nearby grammar forms, watch signal words and exceptions, then justify why one form is correct in context.";
 if(t.subject==="arabic")return "الشرح المتقدم: طبّق «"+n+"» على جمل مختلفة، ميّز الحالات المتشابهة، وحدد الموقع الإعرابي والعلامة الأصلية أو الفرعية عند الحاجة.";
 if(t.subject==="math")return "الشرح المتقدم: حوّل المسألة إلى تمثيل جبري أو هندسي مناسب، اختَر استراتيجية الحل، تحقّق من القيود، ثم جرّب طريقة ثانية للتأكد من النتيجة.";
 if(t.subject==="science")return "الشرح المتقدم: فسّر «"+n+"» باستخدام نموذج علمي، ميّز بين المتغيرات والنتائج، واستخدم الدليل أو القياس المناسب بدل الاكتفاء بحفظ التعريف.";
 if(t.subject==="history")return "الشرح المتقدم: قارن بين أسباب «"+n+"» المباشرة والبعيدة، ميّز بين الحدث والنتيجة، وحاول تقييم أثره السياسي والاجتماعي والاقتصادي.";
 return "الشرح المتقدم: حلّل «"+n+"» باستخدام أكثر من عامل مكاني وبشري، اقرأ البيانات أو الخريطة، ثم استنتج علاقة السبب بالنتيجة.";
}
function workedExample(api,t){
 const en=lang(api)==="en";
 if(t.subject==="english"){
  const pair=EN_EXAMPLES[t.title]||["Choose the sentence that correctly follows the rule of "+t.title+".","Check the verb form, word order and context."];
  return "Example: "+pair[0]+" ✓  |  "+pair[1]+" ✕";
 }
 if(t.subject==="arabic"){
  const pair=AR_EXAMPLES[t.title]||["نحدّد الكلمة أو التركيب الذي يحقق قاعدة «"+t.title+"» داخل جملة.","نراجع الحركة الإعرابية والعلاقة بين الكلمات."];
  return "مثال: "+pair[0]+" ✓  |  "+pair[1]+" ✕";
 }
 if(t.subject==="math"){
  if(/فيثاغورس/.test(t.title))return "مثال: a=3 و b=4 → c²=9+16=25 → c=5.";
  if(/نسب/.test(t.title))return "مثال: 25% من 200 = 200×25÷100 = 50.";
  if(/ميل/.test(t.title))return "مثال: بين (1,2) و(3,6): الميل = (6−2)÷(3−1)=2.";
  if(/مسافة بين نقطتين/.test(t.title))return "مثال: بين (0,0) و(3,4): المسافة = √(3²+4²)=5.";
  if(/منتصف/.test(t.title))return "مثال: منتصف (2,4) و(6,8) هو ((2+6)/2,(4+8)/2)=(4,6).";
  if(/Sin|Cos|Tan|حساب المثلثات/.test(t.title))return "مثال: في مثلث قائم، sin(θ)=المقابل÷الوتر، cos(θ)=المجاور÷الوتر، tan(θ)=المقابل÷المجاور.";
  return "مثال تدريبي: اكتب المعطيات أولًا، اختر القاعدة المناسبة لموضوع «"+t.title+"»، عوّض القيم، ثم افحص الناتج.";
 }
 if(t.subject==="science")return "مثال تطبيقي: ابدأ بملاحظة مرتبطة بـ«"+t.title+"»، حدّد المتغير أو السبب، توقّع النتيجة، ثم قارنها بالدليل العلمي.";
 if(t.subject==="history")return "مثال تحليل: رتّب «"+t.title+"» على خط زمني، ثم اكتب سببًا → حدثًا → نتيجةً لتثبيت العلاقة بين المعلومات.";
 return "مثال جغرافي: حدّد «"+t.title+"» على خريطة أو مخطط، ثم اربطه بعامل طبيعي أو بشري واذكر نتيجة واحدة لهذا العامل.";
}
function skillText(t){
 if(t.subject==="english")return "Apply "+t.title+" correctly in context";
 if(t.subject==="arabic")return "تمييز قاعدة "+t.title+" وتطبيقها وإعرابها";
 if(t.subject==="math")return "اختيار القاعدة المناسبة وحل مسألة في "+t.title;
 if(t.subject==="science")return "تفسير مفهوم "+t.title+" وربط السبب بالنتيجة";
 if(t.subject==="history")return "ترتيب وفهم أسباب ونتائج "+t.title;
 return "تحليل "+t.title+" وربطه بالمكان والإنسان والبيئة";
}
function rand(arr){return arr[Math.floor(Math.random()*arr.length)]}
function shuffle(arr){return arr.slice().sort(function(){return Math.random()-.5})}
function englishPractical(t,diff,n){
 const pair=EN_EXAMPLES[t.title];
 if(!pair)return null;
 const ask=diff==="hard"?"Which sentence uses "+t.title+" correctly in context?":"Choose the correct example of "+t.title+".";
 const wrongs=[
  pair[1],
  "The sentence does not follow the target rule.",
  "This option uses a different grammar form."
 ];
 return {prompt:ask+" ("+(n+1)+")",options:shuffle([pair[0]].concat(wrongs)).slice(0,4),answer:pair[0],explanation:"The correct answer follows the target form for "+t.title+"."};
}
function arabicPractical(t,diff,n){
 const pair=AR_EXAMPLES[t.title];
 if(!pair)return null;
 const ask=diff==="hard"?"أي مثال يطبّق قاعدة «"+t.title+"» تطبيقًا صحيحًا؟":"اختر المثال الصحيح على «"+t.title+"».";
 const wrongs=[pair[1],"هذا المثال لا يحقق القاعدة المطلوبة.","الجملة لا تطابق موضوع السؤال."];
 return {prompt:ask+" ("+(n+1)+")",options:shuffle([pair[0]].concat(wrongs)).slice(0,4),answer:pair[0],explanation:"المثال الصحيح يطابق قاعدة «"+t.title+"»."};
}
function genericQuestion(api,t,diff,n){
 const same=topicsFor(t.grade,t.subject).filter(function(x){return x.id!==t.id});
 const ds=shuffle(same).slice(0,3);
 if(t.subject==="english"){
  const p=englishPractical(t,diff,n);if(p)return p;
  const correct=skillText(t),opts=shuffle([correct].concat(ds.map(skillText))).slice(0,4);
  return {prompt:(diff==="hard"?"Which learning goal best matches ":"Choose the skill that belongs to ")+"“"+t.title+"” ("+(n+1)+")",options:opts,answer:correct,explanation:"This is the core skill practised in "+t.title+"."};
 }
 if(t.subject==="arabic"){
  const p=arabicPractical(t,diff,n);if(p)return p;
 }
 const correct=skillText(t),opts=shuffle([correct].concat(ds.map(skillText))).slice(0,4);
 const lead=diff==="easy"?"أي مهارة ترتبط مباشرة بموضوع":diff==="medium"?"أي وصف أدق للمهارة التي تتدرب عليها في":diff==="hard"?"بعد دراسة الموضوع، أي تطبيق يثبت فهمك لـ":"اختر المهارة الأنسب لـ";
 return {prompt:lead+" «"+t.title+"»؟ ("+(n+1)+")",options:opts,answer:correct,explanation:"الاختيار الصحيح هو الهدف المباشر من موضوع «"+t.title+"»."};
}
function makeQuestions(api,t,count,difficulty,live){
 const out=[],seen=new Set(),levels=difficulty==="mixed"?["easy","medium","hard"]: [difficulty];
 let guard=0;
 while(out.length<count&&guard<count*20){
  const d=levels[out.length%levels.length]||"medium";
  const q=genericQuestion(api,t,d,guard++);
  const key=q.prompt+"|"+q.answer;
  if(seen.has(key))continue;seen.add(key);
  const points=live?1000:10;
  out.push({id:"cv97-"+t.id+"-"+Date.now()+"-"+out.length,type:"mcq",prompt:q.prompt,options:q.options,answer:q.answer,explanation:q.explanation,points:points,topicKey:t.subject,questionKind:d,level:d==="easy"?1:d==="hard"?3:2,typeLabel:(t.subject==="english"?"English Grammar":subjectName(api,t.subject))+" • "+t.title});
 }
 return out;
}
function grade10MathAllowed(topic,level){
 if(topic.grade!==10||topic.subject!=="math")return true;
 const advanced=["الهندسة التحليلية","المسافة بين نقطتين","منتصف قطعة مستقيمة","حساب المثلثات","Sin","Cos","Tan"];
 if(level==="3")return advanced.indexOf(topic.title)<0;
 if(level==="4")return topic.title!=="Sin"&&topic.title!=="Cos"&&topic.title!=="Tan"||true;
 return true;
}
function makeProgressKey(api){const p=api.profile&&api.profile();return "classora_curriculum_v97_"+String(p&&p.uid||p&&p.profileId||"guest")}
function readProgress(api){
 const p=api.profile&&api.profile();const cloud=p&&(p.accountState&&p.accountState.curriculumProgress||p.curriculumProgress);
 if(cloud&&typeof cloud==="object")return JSON.parse(JSON.stringify(cloud));
 try{return JSON.parse(localStorage.getItem(makeProgressKey(api))||"{}")}catch(e){return{}}
}
function saveProgress(api,data){
 try{localStorage.setItem(makeProgressKey(api),JSON.stringify(data))}catch(e){}
 if(api.saveProgress)api.saveProgress(data);
}
function progressFor(api,id){const p=readProgress(api);return p.topics&&p.topics[id]||{status:"new",attempts:0,best:0}}
function touchTopic(api,t){
 const p=readProgress(api);p.topics=p.topics||{};const old=p.topics[t.id]||{};
 p.topics[t.id]=Object.assign({},old,{status:old.status==="done"?"done":"progress",lastOpened:Date.now(),title:t.title,grade:t.grade,subject:t.subject});
 p.lastLesson={id:t.id,title:t.title,grade:t.grade,subject:t.subject,openedAt:Date.now()};saveProgress(api,p);
}
function completeTopic(api,t,pct){
 const p=readProgress(api);p.topics=p.topics||{};const old=p.topics[t.id]||{};
 p.topics[t.id]=Object.assign({},old,{status:"done",attempts:Number(old.attempts||0)+1,best:Math.max(Number(old.best||0),Number(pct||0)),lastScore:Number(pct||0),lastAttempt:Date.now(),title:t.title,grade:t.grade,subject:t.subject});
 p.lastLesson={id:t.id,title:t.title,grade:t.grade,subject:t.subject,openedAt:Date.now()};saveProgress(api,p);
}
function buildEntry(api,open){
 const lobby=document.querySelector("#platformLobby .lobby-shell");if(!lobby||document.getElementById("classoraCurriculumEntry"))return;
 const section=document.createElement("section");section.id="classoraCurriculumEntry";section.className="classora-curriculum-entry";
 section.innerHTML='<div class="classora-curriculum-entry-head"><div><h2>'+txt(api,"المناهج الدراسية","School Curriculum")+'</h2><p>'+txt(api,"سابع، ثامن، تاسع وعاشر • شرح، تدريب، امتحانات ومسابقات مباشرة","Grades 7–10 • lessons, practice, exams and live competitions")+'</p></div><button class="classora-curriculum-open" type="button">'+txt(api,"افتح المواد","Open curriculum")+'</button></div>';
 const hero=lobby.querySelector(".pythag-lobby-hero");if(hero)lobby.insertBefore(section,hero);else lobby.prepend(section);
 section.querySelector("button").onclick=open;
}
export function mountCurriculum(api){
 let state={view:"grades",grade:null,subject:null,topic:null,track:"all",mathLevel:"5",query:""};
 const modal=document.createElement("div");modal.className="classora-curriculum-modal";modal.id="classoraCurriculumModal";
 modal.innerHTML='<div class="classora-curriculum-shell" role="dialog" aria-modal="true"><div class="classora-curriculum-top"><button class="classora-curriculum-back" type="button"></button><div class="classora-curriculum-brand">'+svg("school")+'<div><b>Classora</b><small id="cv97TopSub"></small></div></div><button class="classora-curriculum-close" type="button" aria-label="Close">×</button></div><div class="classora-curriculum-body" id="cv97Body"></div></div>';
 document.body.appendChild(modal);
 const body=modal.querySelector("#cv97Body"),back=modal.querySelector(".classora-curriculum-back"),close=modal.querySelector(".classora-curriculum-close"),topSub=modal.querySelector("#cv97TopSub");
 function open(){state.view="grades";state.grade=null;state.subject=null;state.topic=null;modal.classList.add("open");render()}
 function openAt(grade,subject,topicRef=""){
  const g=Number(grade);state.grade=G[g]?g:7;state.subject=subject&&G[state.grade]?.[subject]?subject:null;state.topic=null;state.track="all";state.query="";
  if(state.subject&&topicRef){
   const found=topicsFor(state.grade,state.subject).find(x=>x.id===topicRef||x.title===topicRef);
   if(found){state.topic=found;state.view="lesson";touchTopic(api,found)}
   else state.view="topics";
  }else state.view=state.subject?"topics":"subjects";
  modal.classList.add("open");render();
 }
 function shut(){modal.classList.remove("open")}
 close.onclick=shut;modal.addEventListener("click",function(e){if(e.target===modal)shut()});
 back.onclick=function(){
  if(state.view==="lesson"){state.view="topics";state.topic=null}
  else if(state.view==="topics"){state.view="subjects";state.subject=null;state.track="all"}
  else if(state.view==="subjects"){state.view="grades";state.grade=null}
  else {shut();return}
  render()
 };
 function setTop(){
  back.textContent=state.view==="grades"?txt(api,"إغلاق","Close"):txt(api,"رجوع","Back");
  topSub.textContent=state.grade?txt(api,"الصف ","Grade ")+state.grade:txt(api,"المنهاج الدراسي","Curriculum");
 }
 function renderGrades(){
  body.innerHTML='<section class="curriculum-hero"><span class="curriculum-kicker">CLASSORA CURRICULUM</span><h2>'+txt(api,"اختار صفك","Choose your grade")+'</h2><p>'+txt(api,"المواد مرتبة حسب الصف، والعربي قواعد فقط والإنجليزي Grammar فقط. لا يوجد عبري أو مدنيات.","Subjects are organized by grade. Arabic is grammar-only and English is grammar-only. Hebrew and civics are excluded.")+'</p></section><div class="curriculum-grid" id="cv97Grades"></div>';
  const host=body.querySelector("#cv97Grades");
  [7,8,9,10].forEach(function(g){
   const b=document.createElement("button");b.className="curriculum-grade-card";b.innerHTML=svg("school")+'<b>'+txt(api,"الصف "+(g===7?"السابع":g===8?"الثامن":g===9?"التاسع":"العاشر"),"Grade "+g)+'</b><small>'+subjectList(g).length+" "+txt(api,"مواد","subjects")+'</small>';
   b.onclick=function(){state.grade=g;state.view="subjects";render()};host.appendChild(b)
  });
 }
 function renderSubjects(){
  const g=state.grade,subs=subjectList(g);
  body.innerHTML='<div class="curriculum-toolbar"><div class="curriculum-breadcrumb">'+txt(api,"الصف ","Grade ")+g+'</div></div><section class="curriculum-hero"><span class="curriculum-kicker">'+txt(api,"المواد","SUBJECTS")+'</span><h2>'+txt(api,"اختار المادة","Choose a subject")+'</h2><p>'+txt(api,"كل مادة تفتح المواضيع المناسبة لهذا الصف فقط.","Each subject shows only the topics assigned to this grade.")+'</p></section><div class="curriculum-grid" id="cv97Subjects"></div>';
  const host=body.querySelector("#cv97Subjects");
  subs.forEach(function(s){
   const count=topicsFor(g,s).length,b=document.createElement("button");b.className="curriculum-subject-card";b.innerHTML=svg(S[s].icon)+'<b>'+subjectName(api,s)+'</b><small>'+count+" "+txt(api,"موضوع","topics")+'</small>';
   b.onclick=function(){state.subject=s;state.view="topics";state.track="all";render()};host.appendChild(b)
  });
 }
 function filteredTopics(){
  let list=topicsFor(state.grade,state.subject);
  if(state.grade===10&&state.subject==="science"&&state.track!=="all")list=list.filter(function(t){return t.track===state.track});
  if(state.grade===10&&state.subject==="math")list=list.filter(function(t){return grade10MathAllowed(t,state.mathLevel)});
  const q=String(state.query||"").trim().toLowerCase();if(q)list=list.filter(function(t){return t.title.toLowerCase().indexOf(q)>=0});
  return list
 }
 function topicSection(t){
  const n=String(t.title||""),s=t.subject;
  const mk=(key,ar,en,icon)=>({key,ar,en,icon});
  if(s==="math"){
   if(/(إحصاء|احتمال)/.test(n))return mk("statistics","الإحصاء والاحتمال","Statistics & Probability","chart");
   if(/(دالة|رسم|ميل|مستقيم|إحداث|قطع مكافئ|نقاط الصفر|الصعود|النزول)/.test(n))return mk("functions","الدوال والرسوم","Functions & Graphs","chart");
   if(/(زاوية|مثلث|فيثاغورس|هندسة|مساحة|محيط|مجسم|حجم|تشابه|تطابق|منتصف|المسافة بين نقطتين|Sin|Cos|Tan|حساب المثلثات)/i.test(n))return mk("geometry","الهندسة والقياس","Geometry & Measurement","math");
   if(/(معادلة|متباين|جبر|متغير|تعبير|حدود|توزيع|تحليل|عامل|متطابق|كسور جبرية|نظام)/.test(n))return mk("algebra","الجبر والمعادلات","Algebra & Equations","math");
   return mk("numbers","الأعداد والحساب","Numbers & Arithmetic","book");
  }
  if(s==="science"){
   if(t.track==="physics"||/(حركة|سرعة|تسارع|قوى|قوانين نيوتن|طاقة|شغل|قدرة|كهرباء|دارات|تيار|ضوء|صوت|حرارة)/.test(n))return mk("physics","الفيزياء","Physics","motion");
   if(t.track==="chemistry"||/(ذرة|عناصر|جدول دوري|مركبات|مخاليط|تفاعلات|أحماض|قواعد|روابط|أيون|كيمياء|pH|الرقم الهيدروجيني|معادلات كيميائية)/i.test(n))return mk("chemistry","الكيمياء","Chemistry","flask");
   if(t.track==="biology"||/(خلية|تكاثر|وراثة|DNA|جين|بروتين|جسم الإنسان|تنفس|دوران|تغذية|كائنات|أنظمة بيئية|سلاسل غذائية|بناء ضوئي)/i.test(n))return mk("biology","الأحياء","Biology","leaf");
   return mk("matter","المادة والبيئة","Matter & Environment","atom");
  }
  if(s==="arabic"){
   if(/(ميزان صرفي|مجرد|مزيد|صحيح|معتل|اسم الفاعل|اسم المفعول|صفة مشبهة|صيغ المبالغة|اسم التفضيل|مصادر|إعلال|إبدال)/.test(n))return mk("morphology","الصرف والمشتقات","Morphology & Derivation","book");
   if(/(مبتدأ|خبر|فاعل|مفعول|نائب الفاعل|حال|تمييز|استثناء|منادى|كان|إن|لا النافية|نعت|عطف|توكيد|بدل|مضاف|إعراب|رفع|نصب|جر|جزم|الممنوع|العدد والمعدود|الشرط|التعجب|المدح|الذم|الإغراء|التحذير|الجملة)/.test(n))return mk("syntax","النحو والإعراب","Syntax & Parsing","book");
   return mk("basics","أساسيات القواعد","Grammar Basics","book");
  }
  if(s==="english"){
   if(/Conditional/i.test(n))return mk("conditionals","Conditionals","Conditionals","bolt");
   if(/Passive|Reported|Relative|Causative|Wish|If Only/i.test(n))return mk("structures","تراكيب الجمل","Sentence Structures","book");
   if(/Modal|Gerund|Infinitive|Used to|Would/i.test(n))return mk("verbs","الأفعال و Modals","Verb Patterns & Modals","motion");
   if(/Present|Past|Future/i.test(n))return mk("tenses","الأزمنة","Tenses","clock");
   return mk("basics","أساسيات Grammar","Grammar Basics","book");
  }
  if(s==="history"){
   if(/(أموية|عباسية|أندلس|العصور الوسطى|صليبية|فاطمية|أيوبية|مملوكية|الدروز|اليهود)/.test(n))return mk("middle","العصور الوسطى والدول الإسلامية","Middle Ages & Islamic States","history");
   if(/(نهضة|Humanism|الإصلاح|اكتشاف|رأس الرجاء)/i.test(n))return mk("renaissance","النهضة والاكتشافات","Renaissance & Exploration","history");
   if(/(الثورة الفرنسية|نابليون|الثورة الصناعية|قومية|إمبريالية|استعمار)/.test(n))return mk("modern","الثورات والعالم الحديث","Revolutions & Modern World","history");
   if(/(الحرب العالمية الأولى|1919)/.test(n))return mk("ww1","الحرب العالمية الأولى","World War I","history");
   return mk("region","الشرق الأوسط والدولة العثمانية","Middle East & Ottoman Empire","history");
  }
  if(s==="geography"){
   if(/(الأرض|النظام الشمسي|بنية الكرة|صفائح|زلازل|براكين|صخور|معادن|تجوية|تعرية|غلاف جوي|طقس|مناخ|مياه|تضاريس)/.test(n))return mk("physical","الجغرافيا الطبيعية","Physical Geography","globe");
   if(/(سكان|هجرة|مدن|قرى|اقتصاد|عمل|صناعة|زراعة|مواصلات|العولمة)/.test(n))return mk("human","الجغرافيا البشرية","Human Geography","group");
   if(/(بيئة|استدام|موارد|طاقة|تغير المناخ)/.test(n))return mk("environment","البيئة والموارد","Environment & Resources","leaf");
   return mk("regional","المكان والإقليم","Places & Regions","globe");
  }
  return mk("general","الوحدة","Unit","book");
 }
 function renderTopics(){
  const extra=[];
  if(state.grade===10&&state.subject==="science")extra.push('<div class="curriculum-filter-row" id="cv97Track"><button data-track="all">'+txt(api,"الكل","All")+'</button><button data-track="physics">'+trackName(api,"physics")+'</button><button data-track="chemistry">'+trackName(api,"chemistry")+'</button><button data-track="biology">'+trackName(api,"biology")+'</button></div>');
  if(state.grade===10&&state.subject==="math")extra.push('<div class="curriculum-filter-row" id="cv97MathLevel"><button data-level="3">3 '+txt(api,"وحدات","units")+'</button><button data-level="4">4 '+txt(api,"وحدات","units")+'</button><button data-level="5">5 '+txt(api,"وحدات","units")+'</button></div>');
  body.innerHTML='<div class="curriculum-toolbar"><div class="curriculum-breadcrumb">'+txt(api,"الصف ","Grade ")+state.grade+" / "+subjectName(api,state.subject)+'</div><input class="curriculum-search" id="cv97Search" placeholder="'+txt(api,"ابحث عن موضوع...","Search topics...")+'" value="'+esc(state.query)+'"></div>'+extra.join("")+'<div class="curriculum-topic-sections" id="cv97Topics"></div>';
  const search=body.querySelector("#cv97Search");search.oninput=function(){state.query=search.value;paintTopicCards()};
  body.querySelectorAll("#cv97Track button").forEach(function(b){b.classList.toggle("active",b.dataset.track===state.track);b.onclick=function(){state.track=b.dataset.track;renderTopics()}});
  body.querySelectorAll("#cv97MathLevel button").forEach(function(b){b.classList.toggle("active",b.dataset.level===state.mathLevel);b.onclick=function(){state.mathLevel=b.dataset.level;renderTopics()}});
  paintTopicCards()
 }
 function paintTopicCards(){
  const host=body.querySelector("#cv97Topics");if(!host)return;host.innerHTML="";
  const list=filteredTopics();
  if(!list.length){host.innerHTML='<div class="curriculum-empty">'+txt(api,"ما في مواضيع مطابقة.","No matching topics.")+'</div>';return}
  const groups=new Map();
  list.forEach((t,i)=>{
   const sec=topicSection(t),row=groups.get(sec.key)||{sec,items:[]};row.items.push({t,i});groups.set(sec.key,row);
  });
  groups.forEach(({sec,items})=>{
   const unit=document.createElement("section");unit.className="curriculum-unit-section "+state.subject+" unit-"+sec.key;
   const head=document.createElement("div");head.className="curriculum-unit-head";
   head.innerHTML='<div class="curriculum-unit-mark">'+svg(sec.icon||S[state.subject]?.icon||"book")+'</div><div><span>'+txt(api,"وحدة","UNIT")+'</span><h3>'+esc(lang(api)==="en"?sec.en:sec.ar)+'</h3></div><small>'+items.length+" "+txt(api,"مواضيع","topics")+'</small>';
   const grid=document.createElement("div");grid.className="curriculum-topic-grid";
   items.forEach(({t,i})=>{
    const p=progressFor(api,t.id),b=document.createElement("button");b.className="curriculum-topic-card";
    b.innerHTML='<span class="curriculum-topic-status">'+statusLabel(api,p.status)+'</span><div class="curriculum-topic-number">'+txt(api,"موضوع ","Topic ")+(i+1)+(t.track?" • "+trackName(api,t.track):"")+'</div><b>'+esc(titleText(api,t))+'</b><small>'+esc(skillText(t))+'</small>';
    b.onclick=function(){state.topic=t;state.view="lesson";touchTopic(api,t);render()};grid.appendChild(b);
   });
   unit.append(head,grid);host.appendChild(unit);
  });
 }
 function flagshipAction(t){
  const n=String(t.title||"");
  if(t.subject==="math"&&/فيثاغورس/.test(n))return {key:"lab",ar:"افتح مختبر فيثاغورس الكامل",en:"Open the full Pythagoras lab"};
  if(t.subject==="math"&&/(نظام معادلتين|أنظمة المعادلات)/.test(n))return {key:"equations",ar:"افتح مختبر المعادلتين 2D / 3D",en:"Open the 2D / 3D equations lab"};
  if(t.subject==="science"&&/(الجدول الدوري|العناصر)/.test(n))return {key:"periodic",ar:"افتح الجدول الدوري التفاعلي",en:"Open the interactive periodic table"};
  if(t.subject==="science"&&/(الأحماض والقواعد|الرقم الهيدروجيني|pH)/i.test(n))return {key:"acids",ar:"افتح مختبر الأحماض والقواعد",en:"Open the acids & bases lab"};
  if(t.subject==="arabic"&&/المضاف والمضاف إليه/.test(n))return {key:"idafa",ar:"افتح مختبر المضاف والمضاف إليه",en:"Open the Idafa lab"};
  return null;
 }
 function buildTopicScene(t){
  const title=esc(t.title),n=String(t.title||""),subject=t.subject;
  if(subject==="math"){
   if(/(فيثاغورس|مثلث)/.test(n))return '<div class="curriculum-visual-scene scene-math scene-triangle" id="cv97Scene"><div class="cv-grid-plane"></div><svg class="cv-math-svg" viewBox="0 0 360 260" aria-hidden="true"><polygon points="78,205 78,65 278,205" class="cv-triangle"/><rect x="18" y="82" width="58" height="122" class="cv-side-square a"/><rect x="92" y="205" width="174" height="48" class="cv-side-square b"/><polygon points="90,56 288,190 244,252 46,118" class="cv-side-square c"/></svg><span class="cv-scene-tag">a² + b² = c²</span><span class="cv-depth-dot d1"></span><span class="cv-depth-dot d2"></span><span class="cv-depth-dot d3"></span></div><div class="curriculum-3d-hint">'+txt(api,"اسحب لتدوير النموذج","Drag to rotate the model")+'</div>';
   if(/(دالة|مستقيم|معادلة|ميل|إحداث|قطع مكافئ|نقاط الصفر)/.test(n))return '<div class="curriculum-visual-scene scene-math scene-graph" id="cv97Scene"><div class="cv-grid-plane"></div><svg class="cv-math-svg graph-svg" viewBox="0 0 360 260" aria-hidden="true"><path d="M25 130H335M180 20V240" class="cv-axis"/><path d="M35 215 L320 55" class="cv-line l1"/><path d="M45 45 Q180 245 320 70" class="cv-line l2"/><circle cx="201" cy="122" r="8" class="cv-point"/></svg><span class="cv-scene-tag">'+title+'</span></div><div class="curriculum-3d-hint">'+txt(api,"اسحب لتدوير الرسم","Drag to rotate the graph")+'</div>';
   return '<div class="curriculum-visual-scene scene-math scene-algebra" id="cv97Scene"><div class="cv-grid-plane"></div><div class="cv-math-block b1">x</div><div class="cv-math-block b2">+</div><div class="cv-math-block b3">7</div><div class="cv-math-block b4">=</div><div class="cv-math-block b5">12</div><span class="cv-scene-tag">'+title+'</span></div><div class="curriculum-3d-hint">'+txt(api,"اسحب ودوّر مساحة الرياضيات","Drag and rotate the math space")+'</div>';
  }
  if(subject==="science"){
   if(/(ذرة|العناصر|الجدول الدوري|أيون|بنية الذرة)/.test(n))return '<div class="curriculum-visual-scene scene-science scene-atom" id="cv97Scene"><div class="cv-nucleus"><b>+</b><i></i><i></i></div><div class="cv-orbit o1"><span></span></div><div class="cv-orbit o2"><span></span></div><div class="cv-orbit o3"><span></span></div><span class="cv-scene-tag">'+title+'</span></div><div class="curriculum-3d-hint">'+txt(api,"اسحب لتدوير الذرة","Drag to rotate the atom")+'</div>';
   if(/(كيمياء|حمض|قاعدة|تفاعل|مركب|مخلوط|روابط|pH|معادلات كيميائية)/i.test(n))return '<div class="curriculum-visual-scene scene-science scene-chemistry" id="cv97Scene"><div class="cv-lab-floor"></div><div class="cv-beaker"><div class="cv-liquid"></div><i></i><i></i><i></i><i></i></div><div class="cv-molecule m1"><b></b><b></b><b></b></div><div class="cv-molecule m2"><b></b><b></b></div><span class="cv-scene-tag">'+title+'</span></div><div class="curriculum-3d-hint">'+txt(api,"اسحب لتدوير المختبر","Drag to rotate the lab")+'</div>';
   if(/(خلية|وراثة|DNA|تكاثر|جسم الإنسان|التنفس|البناء الضوئي|جين|بروتين)/i.test(n))return '<div class="curriculum-visual-scene scene-science scene-biology" id="cv97Scene"><div class="cv-cell"><i class="org o1"></i><i class="org o2"></i><i class="org o3"></i><b class="cv-cell-core"></b></div><div class="cv-dna"><i></i><i></i><i></i><i></i><i></i></div><span class="cv-scene-tag">'+title+'</span></div><div class="curriculum-3d-hint">'+txt(api,"اسحب لتدوير النموذج الحيوي","Drag to rotate the biology model")+'</div>';
   return '<div class="curriculum-visual-scene scene-science scene-motion" id="cv97Scene"><div class="cv-track"><i></i></div><div class="cv-motion-ball"></div><div class="cv-vector v1">→</div><div class="cv-vector v2">↑</div><span class="cv-scene-tag">'+title+'</span></div><div class="curriculum-3d-hint">'+txt(api,"اسحب لتغيير زاوية المشهد","Drag to change the scene angle")+'</div>';
  }
  if(subject==="arabic"){
   const pair=/المضاف والمضاف إليه/.test(n)?["كتابُ","الطالبِ"]:["الكلمة","الإعراب"];
   return '<div class="curriculum-visual-scene scene-language scene-arabic" id="cv97Scene"><div class="cv-book-base"></div><div class="cv-word-card w1">'+pair[0]+'</div><div class="cv-word-card w2">'+pair[1]+'</div><div class="cv-word-card w3">'+title+'</div><span class="cv-scene-tag">'+txt(api,"قواعد عربية","Arabic grammar")+'</span></div><div class="curriculum-3d-hint">'+txt(api,"اسحب لتدوير بطاقات القاعدة","Drag to rotate the grammar cards")+'</div>';
  }
  if(subject==="english"){
   const tense=/(Past|Present|Future)/i.test(n);
   return '<div class="curriculum-visual-scene scene-language scene-english" id="cv97Scene"><div class="cv-english-line"></div><div class="cv-grammar-card g1">'+(tense?"PAST":"FORM")+'</div><div class="cv-grammar-card g2">'+esc(t.title.length>18?t.title.slice(0,18)+"…":t.title)+'</div><div class="cv-grammar-card g3">'+(tense?"FUTURE":"USE")+'</div><span class="cv-scene-tag">English Grammar</span></div><div class="curriculum-3d-hint">'+txt(api,"اسحب لتدوير خط القاعدة","Drag to rotate the grammar timeline")+'</div>';
  }
  if(subject==="history")return '<div class="curriculum-visual-scene scene-history" id="cv97Scene"><div class="cv-history-floor"></div><div class="cv-era e1"><b>'+txt(api,"سبب","CAUSE")+'</b></div><div class="cv-era e2"><b>'+txt(api,"حدث","EVENT")+'</b></div><div class="cv-era e3"><b>'+txt(api,"نتيجة","RESULT")+'</b></div><div class="cv-history-rail"></div><span class="cv-scene-tag">'+title+'</span></div><div class="curriculum-3d-hint">'+txt(api,"اسحب لتدوير الخط الزمني","Drag to rotate the timeline")+'</div>';
  return '<div class="curriculum-visual-scene scene-geography" id="cv97Scene"><div class="cv-globe"><i class="lat l1"></i><i class="lat l2"></i><i class="lon n1"></i><i class="lon n2"></i><b></b></div><div class="cv-terrain t1"></div><div class="cv-terrain t2"></div><div class="cv-terrain t3"></div><span class="cv-scene-tag">'+title+'</span></div><div class="curriculum-3d-hint">'+txt(api,"اسحب لتدوير الكرة والمجال","Drag to rotate the globe")+'</div>';
 }
 function attach3D(){
  const card=body.querySelector(".curriculum-3d-card"),scene=body.querySelector("#cv97Scene");if(!card||!scene)return;
  let down=false,x=0,y=0,rx=-18,ry=28;
  card.addEventListener("pointerdown",function(e){down=true;x=e.clientX;y=e.clientY;card.setPointerCapture&&card.setPointerCapture(e.pointerId)});
  card.addEventListener("pointermove",function(e){if(!down)return;ry+=(e.clientX-x)*.55;rx-=(e.clientY-y)*.55;x=e.clientX;y=e.clientY;scene.style.transform="rotateX("+rx+"deg) rotateY("+ry+"deg)"});
  card.addEventListener("pointerup",function(){down=false});card.addEventListener("pointercancel",function(){down=false});
 }
 function renderLesson(){
  const t=state.topic,p=progressFor(api,t.id),flagship=flagshipAction(t);
  body.innerHTML='<div class="curriculum-toolbar"><div class="curriculum-breadcrumb">'+txt(api,"الصف ","Grade ")+t.grade+" / "+subjectName(api,t.subject)+(t.track?" / "+trackName(api,t.track):"")+'</div></div>'+
  '<div class="curriculum-lesson-hero"><section class="curriculum-lesson-copy"><span class="curriculum-kicker">'+subjectName(api,t.subject)+'</span><h2>'+esc(t.title)+'</h2><p>'+esc(skillText(t))+'</p><div class="curriculum-progress-row"><span class="curriculum-progress-pill">'+statusLabel(api,p.status)+'</span><span class="curriculum-progress-pill">'+txt(api,"المحاولات: ","Attempts: ")+(p.attempts||0)+'</span><span class="curriculum-progress-pill">'+txt(api,"أفضل علامة: ","Best: ")+(p.best||0)+'%</span></div>'+(flagship?'<button class="curriculum-main-action curriculum-flagship" id="cv97Flagship">'+esc(lang(api)==="en"?flagship.en:flagship.ar)+'</button>':'')+'</section><section class="curriculum-3d-card">'+buildTopicScene(t)+'</section></div>'+
  '<div class="curriculum-panels"><section class="curriculum-panel"><h3>'+txt(api,"شرح مبسط","Basic explanation")+'</h3><p>'+esc(basicExplanation(api,t))+'</p></section><section class="curriculum-panel"><h3>'+txt(api,"شرح متقدم","Advanced explanation")+'</h3><p>'+esc(advancedExplanation(api,t))+'</p></section><section class="curriculum-panel"><h3>'+txt(api,"مثال محلول خطوة بخطوة","Worked example")+'</h3><div class="curriculum-worked">'+esc(workedExample(api,t))+'</div></section><section class="curriculum-panel"><h3>'+txt(api,"تمرين سريع","Quick practice")+'</h3><div class="curriculum-mini-practice" id="cv97Practice"></div></section></div>'+
  '<section class="curriculum-panel curriculum-actions-panel"><div class="curriculum-action-grid"><div class="curriculum-action-box"><h3>'+txt(api,"امتحان الموضوع","Topic exam")+'</h3><div class="curriculum-controls"><label>'+txt(api,"الصعوبة","Difficulty")+'<select id="cv97ExamDifficulty"><option value="easy">'+levelLabel(api,"easy")+'</option><option value="medium" selected>'+levelLabel(api,"medium")+'</option><option value="hard">'+levelLabel(api,"hard")+'</option><option value="mixed">'+levelLabel(api,"mixed")+'</option></select></label><label>'+txt(api,"عدد الأسئلة","Questions")+'<select id="cv97ExamCount"><option>5</option><option selected>10</option><option>15</option><option>20</option><option>25</option><option>30</option></select></label></div><button class="curriculum-main-action" id="cv97StartExam">'+txt(api,"ابدأ الامتحان","Start exam")+'</button></div>'+
  '<div class="curriculum-action-box"><h3>'+txt(api,"مسابقة مباشرة","Live competition")+'</h3><div class="curriculum-controls"><label>'+txt(api,"الصعوبة","Difficulty")+'<select id="cv97LiveDifficulty"><option value="easy">'+levelLabel(api,"easy")+'</option><option value="medium" selected>'+levelLabel(api,"medium")+'</option><option value="hard">'+levelLabel(api,"hard")+'</option><option value="mixed">'+levelLabel(api,"mixed")+'</option></select></label><label>'+txt(api,"الأسئلة","Questions")+'<select id="cv97LiveCount"><option>5</option><option selected>10</option><option>15</option><option>20</option><option>25</option><option>30</option></select></label><label>'+txt(api,"وقت السؤال","Time per question")+'<select id="cv97LiveTime"><option>10</option><option>15</option><option selected>20</option><option>30</option><option>45</option><option>60</option></select></label><label>'+txt(api,"النمط","Mode")+'<select id="cv97LiveMode"><option value="solo">'+txt(api,"فردي","Solo")+'</option><option value="choice" selected>'+txt(api,"فرق","Teams")+'</option></select></label></div><button class="curriculum-main-action live" id="cv97StartLive">'+txt(api,"أنشئ مسابقة","Create competition")+'</button></div></div></section>';
  attach3D();renderPractice();
  if(flagship&&body.querySelector("#cv97Flagship"))body.querySelector("#cv97Flagship").onclick=()=>{shut();api.action?.(flagship.key)};
  body.querySelector("#cv97StartExam").onclick=async function(){
   const diff=body.querySelector("#cv97ExamDifficulty").value,count=Number(body.querySelector("#cv97ExamCount").value),qs=makeQuestions(api,t,count,diff,false);
   const exam={title:(t.subject==="english"?"Grammar Exam — ":"امتحان — ")+t.title,questions:qs,total:qs.reduce(function(s,q){return s+q.points},0),surprise:false,topicExam:true,subject:t.subject,curriculumTopicId:t.id,curriculumGrade:t.grade,curriculumDifficulty:diff,curriculumTopicTitle:t.title};
   const ok=await api.startExam(exam);if(ok!==false)shut()
  };
  body.querySelector("#cv97StartLive").onclick=async function(){
   if(!api.isTeacher||!api.isTeacher()){api.toast&&api.toast(txt(api,"إنشاء المسابقة يحتاج حساب معلم.","A teacher account is required to create a competition."));return}
   const diff=body.querySelector("#cv97LiveDifficulty").value,count=Number(body.querySelector("#cv97LiveCount").value),seconds=Number(body.querySelector("#cv97LiveTime").value),teamMode=body.querySelector("#cv97LiveMode").value,qs=makeQuestions(api,t,count,diff,true);
   shut();await api.startCompetition(qs,(t.subject==="english"?"Live Grammar — ":"مسابقة — ")+t.title,{teamMode:teamMode,audienceMode:"projector",questionSeconds:seconds,curriculumTopicId:t.id,difficulty:diff})
  }
 }
 function renderPractice(){
  const host=body.querySelector("#cv97Practice");if(!host)return;const t=state.topic,q=makeQuestions(api,t,1,"easy",false)[0];
  host.innerHTML='<div class="curriculum-mini-q"><b>'+esc(q.prompt)+'</b><div class="curriculum-mini-options"></div><div class="curriculum-feedback"></div></div>';
  const opts=host.querySelector(".curriculum-mini-options"),feed=host.querySelector(".curriculum-feedback");
  q.options.forEach(function(opt){const b=document.createElement("button");b.textContent=opt;b.onclick=function(){opts.querySelectorAll("button").forEach(function(x){x.disabled=true;if(x.textContent===q.answer)x.classList.add("correct")});const ok=opt===q.answer;b.classList.add(ok?"correct":"wrong");feed.textContent=(ok?txt(api,"صحيح. ","Correct. "):txt(api,"الإجابة الصحيحة: ","Correct answer: ")+q.answer+". ")+q.explanation};opts.appendChild(b)})
 }
 function render(){setTop();if(state.view==="grades")renderGrades();else if(state.view==="subjects")renderSubjects();else if(state.view==="topics")renderTopics();else renderLesson()}
 function recordExam(exam,pct){
  if(!exam||!exam.curriculumTopicId)return;
  let t=null;outer:for(const gr of [7,8,9,10]){for(const s of subjectList(gr)){t=topicsFor(gr,s).find(function(x){return x.id===exam.curriculumTopicId});if(t)break outer}}
  if(t)completeTopic(api,t,pct)
 }
 if(!document.querySelector(".learning-hub"))buildEntry(api,open);
 return {open:open,openAt:openAt,close:shut,recordExam:recordExam,refresh:function(){if(modal.classList.contains("open"))render()},curriculum:G,subjects:S};
}
