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
  math:["النسبة والتناسب","مقياس الرسم","النسب المئوية","المعادلات","معادلات خطية","معادلات متعددة الخطوات","معادلات مع أقواس","معادلات كسرية","المعادلات بمتغير في الطرفين","مسائل كلامية على المعادلات","المتباينات","نظام معادلتين بمجهولين","الدالة الخطية","الميل","معادلة المستقيم","نقاط تقاطع المستقيم مع المحاور","السرعة والزمن والمسافة","الإحصاء","الاحتمال","المستقيمات المتوازية","تطابق المثلثات","تشابه المثلثات","المثلث متساوي الساقين","نظرية فيثاغورس","المساحات والحجوم"],
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
function subjectName(api,key){if(key==="arabic")return txt(api,"العربي — قواعد","Arabic Grammar");if(key==="english")return "English Grammar";return S[key]?(lang(api)==="en"?S[key].en:S[key].ar):key}
function trackName(api,key){const a=TRACKS[key];return a?(lang(api)==="en"?a[1]:a[0]):key}

const TOPIC_EN={
"الأعداد الموجبة والسالبة":"Positive and negative numbers","ترتيب العمليات الحسابية":"Order of operations","القوى والجذور":"Powers and roots","التعابير الجبرية":"Algebraic expressions","المتغيرات":"Variables","تجميع الحدود المتشابهة":"Combining like terms","قانون التوزيع":"Distributive property","المعادلات من الدرجة الأولى":"Linear equations","مسائل كلامية":"Word problems","النسبة والتناسب الأساسي":"Basic ratio and proportion","النسب المئوية":"Percentages","المستوى الإحداثي":"Coordinate plane","مقدمة في الدوال":"Introduction to functions","قراءة الرسوم البيانية":"Reading graphs","الزوايا":"Angles","المثلثات":"Triangles","المحيط والمساحة":"Perimeter and area","المجسمات":"3D solids","الحجم":"Volume","النسبة والتناسب":"Ratio and proportion","مقياس الرسم":"Scale","المعادلات":"Equations","معادلات خطية":"Linear equations","معادلات متعددة الخطوات":"Multi-step equations","معادلات مع أقواس":"Equations with parentheses","معادلات كسرية":"Fractional equations","المعادلات بمتغير في الطرفين":"Equations with variables on both sides","مسائل كلامية على المعادلات":"Equation word problems","المتباينات":"Inequalities","نظام معادلتين بمجهولين":"System of two equations","الدالة الخطية":"Linear function","الميل":"Slope","معادلة المستقيم":"Equation of a line","نقاط تقاطع المستقيم مع المحاور":"Axis intercepts","السرعة والزمن والمسافة":"Speed, time and distance","الإحصاء":"Statistics","الاحتمال":"Probability","المستقيمات المتوازية":"Parallel lines","تطابق المثلثات":"Triangle congruence","تشابه المثلثات":"Triangle similarity","المثلث متساوي الساقين":"Isosceles triangle","نظرية فيثاغورس":"Pythagorean theorem","المساحات والحجوم":"Areas and volumes","الدالة الخطية المتقدمة":"Advanced linear functions","التحليل إلى عوامل":"Factoring","إخراج عامل مشترك":"Factoring out a common factor","المتطابقات الجبرية":"Algebraic identities","الفرق بين مربعين":"Difference of two squares","الكسور الجبرية":"Algebraic fractions","نظام المعادلات":"Systems of equations","المعادلات التربيعية":"Quadratic equations","الدالة التربيعية":"Quadratic function","القطع المكافئ":"Parabola","رأس القطع المكافئ":"Vertex of a parabola","محور التماثل":"Axis of symmetry","نقاط الصفر":"Zeros","مجالات الموجب والسالب":"Positive and negative intervals","مجالات الصعود والنزول":"Increasing and decreasing intervals","فيثاغورس":"Pythagoras","الأشكال الرباعية":"Quadrilaterals","الهندسة الإحداثية":"Coordinate geometry","الجبر":"Algebra","أنظمة المعادلات":"Systems of equations","الدوال":"Functions","الهندسة":"Geometry","الهندسة التحليلية":"Analytic geometry","المسافة بين نقطتين":"Distance between two points","منتصف قطعة مستقيمة":"Midpoint","حساب المثلثات":"Trigonometry",
"المادة وخصائصها":"Matter and its properties","حالات المادة":"States of matter","الكتلة والحجم":"Mass and volume","الكثافة":"Density","الجسيمات والذرات":"Particles and atoms","العناصر":"Elements","الطاقة":"Energy","تحولات الطاقة":"Energy transformations","الحرارة ودرجة الحرارة":"Heat and temperature","القوى والحركة":"Forces and motion","الخلية":"The cell","أجهزة جسم الإنسان":"Human body systems","الجهاز التنفسي":"Respiratory system","جهاز الدوران":"Circulatory system","التغذية":"Nutrition","الكائنات الحية":"Living organisms","الأنظمة البيئية":"Ecosystems","السلاسل الغذائية":"Food chains","بنية الذرة":"Atomic structure","الجدول الدوري":"Periodic table","المركبات":"Compounds","المخاليط":"Mixtures","التفاعلات الكيميائية":"Chemical reactions","الأحماض والقواعد":"Acids and bases","الكهرباء":"Electricity","الدارات الكهربائية":"Electric circuits","التيار الكهربائي":"Electric current","الضوء":"Light","الصوت":"Sound","التكاثر":"Reproduction","الوراثة الأساسية":"Basic genetics","البيئة والاستدامة":"Environment and sustainability","الحركة":"Motion","السرعة":"Speed","التسارع":"Acceleration","القوى":"Forces","قوانين الحركة":"Laws of motion","الطاقة الميكانيكية":"Mechanical energy","الكيمياء":"Chemistry","الروابط الكيميائية":"Chemical bonds","الوراثة":"Genetics","تأثير الإنسان على البيئة":"Human impact on the environment","قوانين نيوتن":"Newton's laws","الشغل":"Work","القدرة":"Power","الأيونات":"Ions","المعادلات الكيميائية":"Chemical equations","الرقم الهيدروجيني pH":"pH","عضيات الخلية":"Cell organelles","الانقسام الخلوي":"Cell division","الجينات":"Genes","البروتينات":"Proteins","التنفس الخلوي":"Cellular respiration","البناء الضوئي":"Photosynthesis",
"الدولة الأموية":"Umayyad Caliphate","الدولة العباسية":"Abbasid Caliphate","الأندلس":"Al-Andalus","أوروبا في العصور الوسطى":"Europe in the Middle Ages","الحملات الصليبية":"Crusades","الدولة الفاطمية":"Fatimid Caliphate","الدولة الأيوبية":"Ayyubid state","الدولة المملوكية":"Mamluk state","الدروز في العصور الوسطى":"Druze in the Middle Ages","اليهود في البلدان الإسلامية في العصور الوسطى":"Jews in Islamic lands in the Middle Ages","عصر النهضة":"Renaissance","الإنسانية Humanism":"Humanism","الإصلاح الديني":"Reformation","الاكتشافات الجغرافية":"Age of Exploration","اكتشاف أمريكا":"Discovery of America","رأس الرجاء الصالح":"Cape of Good Hope","الثورة الفرنسية":"French Revolution","نابليون بونابرت":"Napoleon Bonaparte","الدولة العثمانية حتى نهاية القرن الثامن عشر":"Ottoman Empire to the end of the 18th century","الثورة الصناعية":"Industrial Revolution","القومية":"Nationalism","الإمبريالية":"Imperialism","الاستعمار":"Colonialism","أوروبا في القرن التاسع عشر":"Europe in the 19th century","الحرب العالمية الأولى":"World War I","أسباب الحرب العالمية الأولى":"Causes of World War I","أحداث الحرب العالمية الأولى":"Events of World War I","نتائج الحرب العالمية الأولى":"Consequences of World War I","اتفاقيات السلام سنة 1919":"Peace treaties of 1919","الشرق الأوسط في القرن التاسع عشر":"Middle East in the 19th century","الدولة العثمانية في القرن التاسع عشر":"Ottoman Empire in the 19th century","الشرق الأوسط حتى نهاية الحرب العالمية الأولى":"Middle East to the end of World War I",
"الإنسان والبيئة":"People and the environment","السكان":"Population","توزيع السكان":"Population distribution","الهجرة":"Migration","المدن والقرى":"Cities and villages","الاقتصاد والعمل":"Economy and work","العولمة":"Globalization","الموارد":"Resources","البيئة":"Environment","التنمية المستدامة":"Sustainable development","الأرض والنظام الشمسي":"Earth and the Solar System","بنية الكرة الأرضية":"Structure of Earth","الصفائح التكتونية":"Plate tectonics","الزلازل":"Earthquakes","البراكين":"Volcanoes","الصخور":"Rocks","المعادن":"Minerals","التجوية":"Weathering","التعرية":"Erosion","الغلاف الجوي":"Atmosphere","الطقس":"Weather","المناخ":"Climate","مناطق المناخ":"Climate zones","دورة المياه":"Water cycle","الموارد الطبيعية":"Natural resources","مصادر الطاقة":"Energy resources","الطاقة المتجددة":"Renewable energy","الطاقة غير المتجددة":"Non-renewable energy","تغير المناخ":"Climate change","إسرائيل في الشرق الأوسط":"Israel in the Middle East","الموقع والحدود":"Location and borders","التضاريس":"Landforms","مصادر المياه":"Water resources","الاقتصاد":"Economy","الصناعة":"Industry","الزراعة":"Agriculture","المواصلات":"Transportation","الاستدامة":"Sustainability","المدن":"Cities","ميل المستقيم":"Slope of a line","التشابه":"Similarity"
};
const AR_TO_EN={
"أقسام الكلام":"Parts of speech","الاسم والفعل والحرف":"Noun, verb and particle","الماضي والمضارع والأمر":"Past, present and imperative verbs","الجملة الاسمية":"Nominal sentence","الجملة الفعلية":"Verbal sentence","المبتدأ والخبر":"Subject and predicate","الفاعل":"Subject (doer)","المفعول به":"Direct object","النعت والمنعوت":"Adjective and described noun","المضاف والمضاف إليه":"Idafa: possessive construction","المعرفة والنكرة":"Definite and indefinite nouns","المذكر والمؤنث":"Masculine and feminine","المفرد والمثنى والجمع":"Singular, dual and plural","جمع المذكر السالم":"Sound masculine plural","جمع المؤنث السالم":"Sound feminine plural","جمع التكسير":"Broken plural","الضمائر":"Pronouns","أسماء الإشارة":"Demonstratives","الأسماء الموصولة":"Relative pronouns","حروف الجر":"Prepositions","علامات الإعراب الأساسية":"Basic case endings","نائب الفاعل":"Passive subject","المبني للمعلوم والمبني للمجهول":"Active and passive voice","الحال":"Circumstantial accusative","النعت":"Adjective","العطف":"Coordination","التوكيد":"Emphasis","البدل":"Apposition","الأفعال المبنية والمعربة":"Inflected and indeclinable verbs","الفعل الصحيح":"Sound verb","الفعل المعتل":"Weak verb","الميزان الصرفي":"Morphological pattern","اسم الفاعل":"Active participle","اسم المفعول":"Passive participle","أنواع الجموع":"Types of plurals","علامات الرفع":"Nominative markers","علامات النصب":"Accusative markers","علامات الجر":"Genitive markers","رفع الفعل المضارع":"Indicative present verb","نصب الفعل المضارع":"Subjunctive present verb","جزم الفعل المضارع":"Jussive present verb","المفعول المطلق":"Absolute object","المفعول لأجله":"Object of reason","المفعول فيه":"Adverbial object","المفعول معه":"Object of accompaniment","التمييز":"Specification","الاستثناء":"Exception","المنادى":"Vocative","كان وأخواتها":"Kana and its sisters","إن وأخواتها":"Inna and its sisters","لا النافية للجنس":"La of absolute negation","الصفة المشبهة":"Adjective resembling participle","صيغ المبالغة":"Intensive forms","اسم التفضيل":"Comparative/superlative noun","الأفعال المجردة":"Basic verb forms","الأفعال المزيدة":"Augmented verb forms","الجمل التي لها محل من الإعراب":"Sentences with grammatical position","الجمل التي لا محل لها من الإعراب":"Sentences without grammatical position","الإعراب التفصيلي":"Detailed parsing","مراجعة علامات الإعراب":"Review of case endings","المفاعيل":"Objects","الممنوع من الصرف":"Diptotes","العدد والمعدود":"Numbers and counted nouns","أسلوب الشرط":"Conditional style","أسلوب التعجب":"Exclamation style","أسلوب المدح والذم":"Praise and blame style","الإغراء والتحذير":"Encouragement and warning","المصادر":"Verbal nouns","المجرد والمزيد":"Basic and augmented forms","الصحيح والمعتل":"Sound and weak verbs","الإعلال والإبدال":"Vowel change and substitution","الإعراب الكامل":"Full grammatical parsing"
};
const EN_TO_AR={
"Parts of Speech":"أقسام الكلام","Nouns":"الأسماء","Singular and Plural":"المفرد والجمع","Countable and Uncountable Nouns":"الأسماء المعدودة وغير المعدودة","Subject Pronouns":"ضمائر الفاعل","Object Pronouns":"ضمائر المفعول","Possessive Adjectives":"صفات الملكية","Possessive Pronouns":"ضمائر الملكية","Demonstratives":"أسماء الإشارة","Verb To Be":"فعل الكينونة To Be","Have / Has":"Have / Has للملكية","There is / There are":"يوجد / توجد","Articles: a / an / the":"أدوات التعريف والتنكير","Present Simple":"المضارع البسيط","Present Continuous":"المضارع المستمر","Present Simple vs Present Continuous":"المضارع البسيط مقابل المستمر","Past Simple":"الماضي البسيط","Regular and Irregular Verbs":"الأفعال المنتظمة وغير المنتظمة","Future with Will":"المستقبل باستخدام Will","Be Going To":"المستقبل باستخدام Be Going To","Can / Can’t":"القدرة باستخدام Can","Must / Mustn’t":"Must للوجوب والمنع","Should / Shouldn’t":"Should للنصيحة","Adjectives":"الصفات","Adverbs":"الظروف","Comparative":"صيغة المقارنة","Superlative":"صيغة التفضيل","Prepositions":"حروف الجر","Question Words":"أدوات السؤال","Some / Any":"Some / Any","Much / Many":"Much / Many","A lot of":"A lot of","Past Continuous":"الماضي المستمر","Present Perfect":"المضارع التام","Present Perfect vs Past Simple":"المضارع التام مقابل الماضي البسيط","Modals":"الأفعال الناقصة","Can / Could":"Can / Could","Must / Have to":"Must / Have to","Should":"Should","May / Might":"May / Might","Comparative and Superlative":"المقارنة والتفضيل","Too / Enough":"Too / Enough","First Conditional":"الشرط الأول","Zero Conditional":"الشرط الصفري","Passive Voice — Introduction":"مقدمة في المبني للمجهول","Relative Pronouns":"ضمائر الوصل","Who / Which / That":"Who / Which / That","Gerunds and Infinitives — Introduction":"مقدمة في Gerunds وInfinitives","Quantifiers":"ألفاظ الكمية","Few / Little":"Few / Little","Some / Any / No":"Some / Any / No","Question Tags — Introduction":"مقدمة في Question Tags","Present Perfect Continuous":"المضارع التام المستمر","Past Perfect":"الماضي التام","Past Perfect vs Past Simple":"الماضي التام مقابل الماضي البسيط","Future Forms":"صيغ المستقبل","Future Continuous":"المستقبل المستمر","Passive Voice":"المبني للمجهول","Present Passive":"المبني للمجهول في المضارع","Past Passive":"المبني للمجهول في الماضي","Future Passive":"المبني للمجهول في المستقبل","Second Conditional":"الشرط الثاني","Relative Clauses":"الجمل الموصولة","Defining Relative Clauses":"الجمل الموصولة المحددة","Reported Speech — Introduction":"مقدمة في الكلام المنقول","Modal Verbs":"الأفعال الناقصة","Gerunds":"Gerunds","Infinitives":"Infinitives","Gerunds vs Infinitives":"Gerunds مقابل Infinitives","Used to":"Used to","Question Tags":"Question Tags","Articles":"أدوات التعريف والتنكير","Adjective Order":"ترتيب الصفات","Future Perfect — Introduction":"مقدمة في المستقبل التام","Active and Passive Voice":"المبني للمعلوم والمجهول","Third Conditional — Introduction":"مقدمة في الشرط الثالث","Reported Speech":"الكلام المنقول","Reported Questions":"الأسئلة المنقولة","Modal Perfects — Introduction":"مقدمة في Modal Perfects","Used to / Would":"Used to / Would","Wish / If Only — Introduction":"مقدمة في Wish / If Only","Causative Have — Introduction":"مقدمة في Causative Have","Determiners":"المحددات","Linking Words":"كلمات الربط"
};
function titleText(api,topic){
 if(topic.subject==="arabic")return lang(api)==="en"?(AR_TO_EN[topic.title]||TOPIC_EN[topic.title]||topic.title):topic.title;
 if(topic.subject==="english")return topic.title;
 return lang(api)==="en"?(TOPIC_EN[topic.title]||topic.title):topic.title;
}
export function curriculumTopicDisplayName(title,subject,language="en"){
 if(subject==="arabic")return language==="en"?(AR_TO_EN[title]||TOPIC_EN[title]||title):title;
 if(subject==="english")return title;
 return language==="en"?(TOPIC_EN[title]||title):title;
}
function translationTitle(t){return t.subject==="arabic"?(AR_TO_EN[t.title]||t.title):t.subject==="english"?(EN_TO_AR[t.title]||t.title):t.title}
function statusLabel(api,s){return s==="done"?txt(api,"مكتمل","Completed"):s==="progress"?txt(api,"قيد التعلم","In progress"):txt(api,"لم يبدأ","Not started")}
function levelLabel(api,d){return ({easy:txt(api,"سهل","Easy"),medium:txt(api,"متوسط","Medium"),hard:txt(api,"صعب","Hard"),mixed:txt(api,"مختلط","Mixed")})[d]||d}
function basicExplanation(api,t){
 const n=titleText(api,t);
 if(t.subject==="math"&&/إحصاء/.test(t.title)){
  if(lang(api)==="en")return "Statistics helps us turn a list of numbers into information we can understand. Start by identifying the variable being measured — for example height, price, quantity or marks — then organize the values in a table or graph. In a bar chart, the horizontal axis shows the categories or observations and the vertical axis shows the numerical value. After reading the graph, calculate the mean by adding all values and dividing by their count, find the median from the ordered list, identify the mode as the most repeated value, and use the range to describe how spread out the data are.";
  return "الإحصاء يساعدنا نحول مجموعة أرقام إلى معلومات سهلة للفهم والمقارنة. أولًا نحدد ما هو المتغير الذي نقيسه، مثل الطول أو السعر أو الكمية أو العلامات، ثم نرتب القيم في جدول أو رسم بياني. في الرسم بالأعمدة يوضح المحور الأفقي الفئات أو المشاهدات، بينما يوضح المحور العمودي قيمة كل فئة. بعد قراءة الرسم نحسب المتوسط بجمع القيم وقسمتها على عددها، ونرتب القيم لإيجاد الوسيط، ونبحث عن القيمة الأكثر تكرارًا لإيجاد المنوال، ونحسب المدى بطرح أصغر قيمة من أكبر قيمة. المهم ليس حفظ القوانين فقط، بل معرفة ماذا يخبرنا الرسم عن البيانات وأين توجد القيم الأكبر والأصغر.";
 }
 if(t.subject==="english")return "Learn the rule, form and common use of "+t.title+". Focus on affirmative, negative and question forms.";
 if(t.subject==="arabic")return lang(api)==="en"
  ?"In this lesson, learn the Arabic grammar rule “"+n+"”, how to recognize it in a sentence, and how its grammatical role and case are identified."
  :"في هذا الدرس نتعلّم قاعدة «"+t.title+"»، كيف نميّزها داخل الجملة، وما العلامات التي تساعدنا على تحديدها وإعرابها بصورة صحيحة.";
 if(lang(api)==="en"){
  if(t.subject==="math")return "In “"+n+"”, start with the main idea, identify the given information and the target, then apply the rule step by step and check the result.";
  if(t.subject==="science")return "In “"+n+"”, connect the concept to an observation, identify cause and effect, and use evidence before answering questions.";
  if(t.subject==="history")return "In “"+n+"”, focus on chronology, causes, key events and consequences, and connect it to what came before and after.";
  return "In “"+n+"”, identify the place or phenomenon, the natural and human factors affecting it, and the resulting impact.";
 }
 if(t.subject==="math")return "في موضوع «"+n+"» نبدأ بالفكرة الأساسية، نحدد المعطيات والمطلوب، ثم نطبّق القاعدة بخطوات قصيرة وواضحة ونراجع النتيجة.";
 if(t.subject==="science")return "في موضوع «"+n+"» نربط المصطلح بالملاحظة العلمية، ونفهم السبب والنتيجة والعلاقات الأساسية قبل حل الأسئلة.";
 if(t.subject==="history")return "في «"+n+"» نركّز على السياق الزمني، الأسباب، الأحداث الرئيسية والنتائج، ونربط الحدث بما سبقه وما جاء بعده.";
 return "في «"+n+"» نحدّد المكان أو الظاهرة، العوامل المؤثرة فيها، آثارها وعلاقتها بالإنسان والبيئة، ثم نطبّق ذلك على أمثلة وخرائط.";
}
function advancedExplanation(api,t){
 const n=titleText(api,t);
 if(t.subject==="math"&&/إحصاء/.test(t.title)){
  if(lang(api)==="en")return "Advanced statistics: compare two data sets using center and spread, not one number only. The mean can change strongly because of an extreme value, while the median is often more stable. Read bar charts carefully by checking the scale and units before comparing heights. For larger ordered data sets, quartiles split the data into four parts: Q1, the median Q2 and Q3. The interquartile range IQR = Q3 − Q1 describes the spread of the middle 50% of the data. When the variables are different, such as height and price, keep their units clear and choose the graph that fits the question before drawing a conclusion.";
  return "بالإحصاء المتقدم نقارن بين مجموعتين من البيانات باستخدام مقاييس المركز والانتشار، وليس رقمًا واحدًا فقط. المتوسط يتأثر كثيرًا بالقيمة الشاذة الكبيرة أو الصغيرة، بينما الوسيط غالبًا يبقى أكثر ثباتًا. عند قراءة أي رسم بياني افحص أولًا تدريج المحور والوحدة حتى لا تقارن أعمدة بطريقة خاطئة. وإذا كانت البيانات مرتبة وكبيرة يمكن تقسيمها إلى أربعة أجزاء: الربيع الأول Q1، والوسيط Q2، والربيع الثالث Q3، ويكون المدى الربيعي IQR = Q3 − Q1 لقياس انتشار نصف البيانات الأوسط. وإذا كنا نعرض متغيرات مختلفة مثل الطول والسعر، يجب كتابة الوحدة بوضوح واختيار نوع الرسم المناسب قبل الاستنتاج.";
 }
 if(t.subject==="english")return "Advanced: compare "+t.title+" with nearby grammar forms, watch signal words and exceptions, then justify the correct form in context.";
 if(t.subject==="arabic")return lang(api)==="en"
  ?"Advanced: apply “"+n+"” to different sentence patterns, compare similar cases, and identify the grammatical position and the correct case marker."
  :"الشرح المتقدم: طبّق «"+t.title+"» على جمل مختلفة، ميّز الحالات المتشابهة، وحدد الموقع الإعرابي والعلامة الأصلية أو الفرعية عند الحاجة.";
 if(lang(api)==="en"){
  if(t.subject==="math")return "Advanced: translate the problem into a suitable algebraic or geometric model, choose a strategy, test constraints, then verify with another method.";
  if(t.subject==="science")return "Advanced: explain “"+n+"” with a scientific model, separate variables from outcomes, and use measurements or evidence.";
  if(t.subject==="history")return "Advanced: compare immediate and long-term causes of “"+n+"”, then evaluate political, social and economic effects.";
  return "Advanced: analyze “"+n+"” with multiple spatial and human factors, read data or maps, and infer cause-and-effect relationships.";
 }
 if(t.subject==="math")return "الشرح المتقدم: حوّل المسألة إلى تمثيل جبري أو هندسي مناسب، اختَر استراتيجية الحل، تحقّق من القيود، ثم جرّب طريقة ثانية للتأكد من النتيجة.";
 if(t.subject==="science")return "الشرح المتقدم: فسّر «"+n+"» باستخدام نموذج علمي، ميّز بين المتغيرات والنتائج، واستخدم الدليل أو القياس المناسب بدل الاكتفاء بحفظ التعريف.";
 if(t.subject==="history")return "الشرح المتقدم: قارن بين أسباب «"+n+"» المباشرة والبعيدة، ميّز بين الحدث والنتيجة، وحاول تقييم أثره السياسي والاجتماعي والاقتصادي.";
 return "الشرح المتقدم: حلّل «"+n+"» باستخدام أكثر من عامل مكاني وبشري، اقرأ البيانات أو الخريطة، ثم استنتج علاقة السبب بالنتيجة.";
}
function workedExample(api,t){
 const en=lang(api)==="en",n=titleText(api,t);
 if(t.subject==="english"){const pair=EN_EXAMPLES[t.title]||["Choose the sentence that correctly follows the rule of "+t.title+".","Check the verb form, word order and context."];return "Example: "+pair[0]+" ✓  |  "+pair[1]+" ✕"}
 if(t.subject==="arabic"){
  if(en)return "Worked example: identify the word or structure that matches “"+n+"”, explain its role, then check the grammatical case and the relationship between the words.";
  const pair=AR_EXAMPLES[t.title]||["نحدّد الكلمة أو التركيب الذي يحقق قاعدة «"+t.title+"» داخل جملة.","نراجع الحركة الإعرابية والعلاقة بين الكلمات."];return "مثال: "+pair[0]+" ✓  |  "+pair[1]+" ✕"
 }
 if(t.subject==="math"){
  if(/إحصاء/.test(t.title))return en?"Example — heights (cm): 150, 160, 160, 170, 180. Mean = (150+160+160+170+180)÷5 = 164 cm. Median = 160 cm. Mode = 160 cm. Range = 180−150 = 30 cm. On a bar chart, label the horizontal axis with the observations and the vertical axis with height (cm), then compare the bar heights.":"مثال — أطوال 5 طلاب بالسنتيمتر: 150، 160، 160، 170، 180. المتوسط = (150+160+160+170+180)÷5 = 164 سم. الوسيط = 160 سم بعد ترتيب القيم. المنوال = 160 لأنه الأكثر تكرارًا. المدى = 180−150 = 30 سم. وفي الرسم بالأعمدة نكتب المشاهدات على المحور الأفقي والطول (سم) على المحور العمودي ثم نقارن ارتفاع الأعمدة.";
  if(/فيثاغورس/.test(t.title))return en?"Example: a=3, b=4 → c²=9+16=25 → c=5.":"مثال: a=3 و b=4 → c²=9+16=25 → c=5.";
  if(/نسب/.test(t.title))return en?"Example: 25% of 200 = 200×25÷100 = 50.":"مثال: 25% من 200 = 200×25÷100 = 50.";
  if(/ميل/.test(t.title))return en?"Example: between (1,2) and (3,6), slope = (6−2)÷(3−1)=2.":"مثال: بين (1,2) و(3,6): الميل = (6−2)÷(3−1)=2.";
  return en?"Practice example: list the givens, choose the rule for “"+n+"”, substitute values, then check the result.":"مثال تدريبي: اكتب المعطيات أولًا، اختر القاعدة المناسبة لموضوع «"+n+"»، عوّض القيم، ثم افحص الناتج.";
 }
 if(t.subject==="science")return en?"Application: start with an observation related to “"+n+"”, identify the variable or cause, predict the outcome, then compare with evidence.":"مثال تطبيقي: ابدأ بملاحظة مرتبطة بـ«"+n+"»، حدّد المتغير أو السبب، توقّع النتيجة، ثم قارنها بالدليل العلمي.";
 if(t.subject==="history")return en?"Analysis example: place “"+n+"” on a timeline, then write one cause → event → consequence.":"مثال تحليل: رتّب «"+n+"» على خط زمني، ثم اكتب سببًا → حدثًا → نتيجةً لتثبيت العلاقة بين المعلومات.";
 return en?"Geography example: locate “"+n+"” on a map or diagram, connect it to one natural or human factor, then state one effect.":"مثال جغرافي: حدّد «"+n+"» على خريطة أو مخطط، ثم اربطه بعامل طبيعي أو بشري واذكر نتيجة واحدة لهذا العامل.";
}
function skillText(api,t){
 const n=titleText(api,t);
 if(t.subject==="english")return "Apply "+t.title+" correctly in context";
 if(t.subject==="arabic")return lang(api)==="en"?"Recognize and apply the Arabic grammar rule "+n:"تمييز قاعدة "+t.title+" وتطبيقها وإعرابها";
 if(lang(api)==="en"){
  if(t.subject==="math"&&/إحصاء/.test(t.title))return "Read graphs, organize data and calculate mean, median, mode and range";
  if(t.subject==="math")return "Choose the correct rule and solve a problem in "+n;
  if(t.subject==="science")return "Explain "+n+" and connect cause to effect";
  if(t.subject==="history")return "Understand the sequence, causes and consequences of "+n;
  return "Analyze "+n+" and connect place, people and environment";
 }
 if(t.subject==="math"&&/إحصاء/.test(t.title))return "قراءة الرسوم البيانية وتنظيم البيانات وحساب المتوسط والوسيط والمنوال والمدى";
 if(t.subject==="math")return "اختيار القاعدة المناسبة وحل مسألة في "+n;
 if(t.subject==="science")return "تفسير مفهوم "+n+" وربط السبب بالنتيجة";
 if(t.subject==="history")return "ترتيب وفهم أسباب ونتائج "+n;
 return "تحليل "+n+" وربطه بالمكان والإنسان والبيئة";
}
function rand(arr){return arr[Math.floor(Math.random()*arr.length)]}
function shuffle(arr){return arr.slice().sort(function(){return Math.random()-.5})}
function englishPractical(t,diff,n){
 const pair=EN_EXAMPLES[t.title];if(!pair)return null;
 const ask=diff==="hard"?"Which sentence uses "+t.title+" correctly in context?":"Choose the correct example of "+t.title+".";
 const wrongs=[pair[1],"The sentence does not follow the target rule.","This option uses a different grammar form."];
 return {prompt:ask+" ("+(n+1)+")",options:shuffle([pair[0]].concat(wrongs)).slice(0,4),answer:pair[0],explanation:"The correct answer follows the target form for "+t.title+"."};
}
function arabicPractical(api,t,diff,n){
 if(lang(api)==="en"){
  const rule=AR_TO_EN[t.title]||t.title;
  const correct="Identify the target structure, then verify its grammatical role and case.";
  const wrongs=["Ignore the grammatical relationship between the words.","Choose only by sentence length.","Treat every noun as having the same grammatical case."];
  return {prompt:(diff==="hard"?"Which method best proves understanding of ":"Choose the correct way to apply ")+rule+" ("+(n+1)+")",options:shuffle([correct].concat(wrongs)),answer:correct,explanation:"The correct method uses the grammatical relationship and case, not surface appearance alone."};
 }
 const pair=AR_EXAMPLES[t.title];if(!pair)return null;
 const ask=diff==="hard"?"أي مثال يطبّق قاعدة «"+t.title+"» تطبيقًا صحيحًا؟":"اختر المثال الصحيح على «"+t.title+"».";
 const wrongs=[pair[1],"هذا المثال لا يحقق القاعدة المطلوبة.","الجملة لا تطابق موضوع السؤال."];
 return {prompt:ask+" ("+(n+1)+")",options:shuffle([pair[0]].concat(wrongs)).slice(0,4),answer:pair[0],explanation:"المثال الصحيح يطابق قاعدة «"+t.title+"»."};
}
function genericQuestion(api,t,diff,n){
 const same=topicsFor(t.grade,t.subject).filter(function(x){return x.id!==t.id}),ds=shuffle(same).slice(0,3);
 if(t.subject==="english"){
  const p=englishPractical(t,diff,n);if(p)return p;
  const correct=skillText(api,t),opts=shuffle([correct].concat(ds.map(x=>skillText(api,x)))).slice(0,4);
  return {prompt:(diff==="hard"?"Which learning goal best matches ":"Choose the skill that belongs to ")+"“"+t.title+"” ("+(n+1)+")",options:opts,answer:correct,explanation:"This is the core skill practised in "+t.title+"."};
 }
 if(t.subject==="arabic"){const p=arabicPractical(api,t,diff,n);if(p)return p}
 const correct=skillText(api,t),opts=shuffle([correct].concat(ds.map(x=>skillText(api,x)))).slice(0,4),display=titleText(api,t);
 if(lang(api)==="en"){
  const lead=diff==="easy"?"Which skill is directly connected to":diff==="medium"?"Which description best matches the skill in":diff==="hard"?"After studying the topic, which application proves understanding of":"Choose the best skill for";
  return {prompt:lead+" “"+display+"”? ("+(n+1)+")",options:opts,answer:correct,explanation:"The correct choice is the main learning goal of “"+display+"”."};
 }
 const lead=diff==="easy"?"أي مهارة ترتبط مباشرة بموضوع":diff==="medium"?"أي وصف أدق للمهارة التي تتدرب عليها في":diff==="hard"?"بعد دراسة الموضوع، أي تطبيق يثبت فهمك لـ":"اختر المهارة الأنسب لـ";
 return {prompt:lead+" «"+display+"»؟ ("+(n+1)+")",options:opts,answer:correct,explanation:"الاختيار الصحيح هو الهدف المباشر من موضوع «"+display+"»."};
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

function editorDefaults(t){
 const pair=t.subject==="arabic"?AR_EXAMPLES[t.title]:t.subject==="english"?EN_EXAMPLES[t.title]:null;
 if(t.subject==="math"&&/إحصاء/.test(t.title))return {data:"150, 160, 160, 170, 180",words:"الطول / السعر / الكمية / العلامات",question:"مثّل البيانات بيانيًا ثم احسب المتوسط والوسيط والمنوال والمدى.",answer:""};
 if(t.subject==="math")return {data:"a = 3, b = 4",words:titleText({language:()=> "en"},t),question:"غيّر المعطيات واكتب السؤال الذي تريد حله.",answer:""};
 if(t.subject==="science")return {data:"المتغير = 10",words:t.title,question:"غيّر المتغير أو الحالة، ثم اكتب ما الذي تريد تفسيره.",answer:""};
 if(t.subject==="arabic")return localStorage.getItem("pythagorasi_language")!=="ar"
  ?{data:"Write or paste an Arabic example using Latin transliteration if you want no Arabic script.",words:AR_TO_EN[t.title]||t.title,question:"Identify the target Arabic grammar rule and explain its grammatical role.",answer:""}
  :{data:pair?.[0]||"اكتب جملة هنا",words:t.title,question:"حدّد القاعدة المطلوبة في الجملة.",answer:""};
 if(t.subject==="english")return {data:pair?.[0]||"Write a sentence here.",words:t.title,question:"Rewrite the sentence using the target grammar rule.",answer:""};
 return {data:t.title,words:"",question:"اكتب السؤال أو الفكرة التي تريد تحليلها.",answer:""};
}
export function mountCurriculum(api){
 let state={view:"grades",grade:null,subject:null,topic:null,track:"all",mathLevel:"5",query:"",showTranslation:false,editor:null};
 const modal=document.createElement("div");modal.className="classora-curriculum-modal";modal.id="classoraCurriculumModal";
 modal.innerHTML='<div class="classora-curriculum-shell" role="dialog" aria-modal="true"><div class="classora-curriculum-top"><button class="classora-curriculum-back" type="button"></button><div class="classora-curriculum-brand">'+svg("school")+'<div><b>Classora</b><small id="cv97TopSub"></small></div></div><button class="classora-curriculum-close" type="button" aria-label="Close">×</button></div><div class="classora-curriculum-body" id="cv97Body"></div></div>';
 document.body.appendChild(modal);
 const body=modal.querySelector("#cv97Body"),back=modal.querySelector(".classora-curriculum-back"),close=modal.querySelector(".classora-curriculum-close"),topSub=modal.querySelector("#cv97TopSub");
 function open(){state.view="grades";state.grade=null;state.subject=null;state.topic=null;modal.classList.add("open");render()}
 function openAt(grade,subject,topicRef=""){
  const g=Number(grade);state.grade=G[g]?g:7;state.subject=subject&&G[state.grade]?.[subject]?subject:null;state.topic=null;state.track="all";state.query="";state.showTranslation=false;state.editor=null;
  if(state.subject&&topicRef){
   const found=topicsFor(state.grade,state.subject).find(x=>x.id===topicRef||x.title===topicRef);
   if(found){state.topic=found;state.view="lesson";touchTopic(api,found)}
   else state.view="topics";
  }else state.view=state.subject?"topics":"subjects";
  if(state.subject==="science")try{sessionStorage.setItem("classora_subject_origin","science")}catch{};modal.classList.add("open");render();
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
   const nativeSubject=false;
   const unitLabel=state.subject==="arabic"?"وحدة":state.subject==="english"?"UNIT":txt(api,"وحدة","UNIT");
   const topicsLabel=state.subject==="arabic"?"مواضيع":state.subject==="english"?"topics":txt(api,"مواضيع","topics");
   const head=document.createElement("div");head.className="curriculum-unit-head";
   head.innerHTML='<div class="curriculum-unit-mark">'+svg(sec.icon||S[state.subject]?.icon||"book")+'</div><div><span>'+unitLabel+'</span><h3>'+esc(state.subject==="arabic"?sec.ar:state.subject==="english"?sec.en:(lang(api)==="en"?sec.en:sec.ar))+'</h3></div><small>'+items.length+" "+topicsLabel+'</small>';
   const grid=document.createElement("div");grid.className="curriculum-topic-grid";
   items.forEach(({t,i})=>{
    const p=progressFor(api,t.id),b=document.createElement("button");b.className="curriculum-topic-card";if(nativeSubject)b.dataset.noTranslate="";
    const nativeStatus=state.subject==="arabic"?(p.status==="done"?"مكتمل":p.status==="progress"?"قيد التعلم":"لم يبدأ"):state.subject==="english"?(p.status==="done"?"Completed":p.status==="progress"?"In progress":"Not started"):statusLabel(api,p.status);
    const topicPrefix=state.subject==="arabic"?"موضوع ":state.subject==="english"?"Topic ":txt(api,"موضوع ","Topic ");
    b.innerHTML='<span class="curriculum-topic-status">'+nativeStatus+'</span><div class="curriculum-topic-number">'+topicPrefix+(i+1)+(t.track?" • "+trackName(api,t.track):"")+'</div><b>'+esc(titleText(api,t))+'</b><small>'+esc(skillText(api,t))+'</small>';
    b.onclick=function(){state.topic=t;state.view="lesson";state.showTranslation=false;state.editor=editorDefaults(t);touchTopic(api,t);render()};grid.appendChild(b);
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
  const n=String(t.title||""),subject=t.subject,display=esc(titleText(api,t));
  const shell=(kind,inner,arHint,enHint)=>'<div class="curriculum-visual-scene '+kind+'" id="cv97Scene" data-topic-kind="'+kind.replace(/\s+/g,"-")+'">'+inner+'<span class="cv-scene-tag">'+display+'</span></div><div class="curriculum-3d-hint">'+txt(api,arHint,enHint)+'</div>';

  if(subject==="math"){
   if(/إحصاء/.test(n))return '<div class="curriculum-visual-scene scene-math scene-statistics" id="cv97Scene"><div class="cv-stat-toolbar"><label><span>'+txt(api,"نوع المعطيات","Data type")+'</span><select id="cvStatDataset"><option value="height">'+txt(api,"الطول (سم)","Height (cm)")+'</option><option value="price">'+txt(api,"السعر (₪)","Price (₪)")+'</option><option value="quantity">'+txt(api,"الكمية","Quantity")+'</option><option value="marks">'+txt(api,"العلامات","Marks")+'</option></select></label><small>'+txt(api,"غيّر الأرقام من داخل الأعمدة","Edit the numbers inside the bars")+'</small></div><div class="cv-stat-detail" id="cvStatDetail">'+txt(api,"طول الطالب 1: 150 سم","Student 1 height: 150 cm")+'</div><div class="cv-stat-grid"></div><div class="cv-stat-y" id="cvStatYAxis">'+txt(api,"الطول (سم)","Height (cm)")+'</div><div class="cv-stat-bars"><div class="cv-stat-bar s1" style="--h:66%" data-stat-index="0"><input class="cv-stat-input" type="number" inputmode="decimal" min="0" step="1" value="150" aria-label="'+txt(api,"القيمة الأولى","First value")+'"><span class="cv-stat-label">1</span></div><div class="cv-stat-bar s2" style="--h:71%" data-stat-index="1"><input class="cv-stat-input" type="number" inputmode="decimal" min="0" step="1" value="160" aria-label="'+txt(api,"القيمة الثانية","Second value")+'"><span class="cv-stat-label">2</span></div><div class="cv-stat-bar s3" style="--h:76%" data-stat-index="2"><input class="cv-stat-input" type="number" inputmode="decimal" min="0" step="1" value="170" aria-label="'+txt(api,"القيمة الثالثة","Third value")+'"><span class="cv-stat-label">3</span></div><div class="cv-stat-bar s4" style="--h:82%" data-stat-index="3"><input class="cv-stat-input" type="number" inputmode="decimal" min="0" step="1" value="180" aria-label="'+txt(api,"القيمة الرابعة","Fourth value")+'"><span class="cv-stat-label">4</span></div></div><div class="cv-stat-axis"></div><div class="cv-stat-x">'+txt(api,"المشاهدات","Observations")+'</div><div class="cv-stat-summary"><span>'+txt(api,"المتوسط","Mean")+' <b id="cvStatMean">165</b></span><span>'+txt(api,"الوسيط","Median")+' <b id="cvStatMedian">165</b></span><span>'+txt(api,"المنوال","Mode")+' <b id="cvStatMode">—</b></span><span>'+txt(api,"المدى","Range")+' <b id="cvStatRange">30</b></span></div><span class="cv-scene-tag">'+display+'</span></div><div class="curriculum-3d-hint">'+txt(api,"عدّل القيم داخل الرسم أو اسحب لتدويره","Edit values inside the chart or drag to rotate")+'</div>';

   if(/(معادلات كسرية|كسور جبرية)/.test(n))return shell("scene-math scene-fraction-equation",
    '<div class="cv-eq-space"><div class="cv-fraction-stack"><div class="cv-frac-num">x</div><div class="cv-frac-line"></div><input id="cvFracDen" class="cv-model-number" type="number" min="1" max="20" value="2" aria-label="'+txt(api,"المقام","Denominator")+'"></div><b class="cv-eq-op">+</b><input id="cvFracAdd" class="cv-model-number floating" type="number" value="3" aria-label="'+txt(api,"العدد المضاف","Added number")+'"><b class="cv-eq-op">=</b><input id="cvFracRight" class="cv-model-number floating" type="number" value="7" aria-label="'+txt(api,"الطرف الأيمن","Right side")+'"></div><div class="cv-equation-result">'+txt(api,"الحل: x = ","Solution: x = ")+'<b id="cvFracSolution">8</b></div><div class="cv-fraction-tiles"><i></i><i></i><i></i><i></i></div>',
    "غيّر المقام والأعداد وشاهد حل المعادلة الكسرية","Change the denominator and values to solve the fractional equation");

   if(/(مسائل كلامية|كلامية على المعادلات)/.test(n))return shell("scene-math scene-word-equation",
    '<div class="cv-story-stage"><div class="cv-story-object price">'+txt(api,"سعر القطعة","Item price")+'<input id="cvWordPrice" class="cv-model-number" type="number" min="1" value="12"></div><div class="cv-story-object qty">'+txt(api,"العدد","Quantity")+'<input id="cvWordQty" class="cv-model-number" type="number" min="1" value="4"></div><div class="cv-story-arrow">→</div><div class="cv-story-object total">'+txt(api,"المجموع","Total")+'<b id="cvWordTotal">48</b> ₪</div></div><div class="cv-story-equation" id="cvWordEquation">12 × 4 = 48</div>',
    "غيّر السعر والكمية وحوّل القصة إلى معادلة","Change price and quantity and watch the story become an equation");

   if(/(معادلات|المعادلات|متباينات)/.test(n)&&!/(نظام|معادلتين|كسرية)/.test(n))return shell("scene-math scene-equation-balance",
    '<div class="cv-balance"><div class="cv-balance-arm"><div class="cv-pan left"><span>x</span><input id="cvEqAdd" class="cv-model-number" type="number" value="3"></div><div class="cv-balance-pivot"></div><div class="cv-pan right"><input id="cvEqRight" class="cv-model-number" type="number" value="7"></div></div></div><div class="cv-equation-live">x + <b id="cvEqAddLabel">3</b> = <b id="cvEqRightLabel">7</b> → x = <strong id="cvEqSolution">4</strong></div><div class="cv-step-chips"><span>−a</span><span>÷ coefficient</span><span>✓</span></div>',
    "غيّر طرفي المعادلة وشاهد الميزان والحل يتحدثان","Change both sides and watch the balance and solution update");

   if(/(نظام معادلتين|أنظمة المعادلات|نظام المعادلات)/.test(n))return shell("scene-math scene-system-equations",
    '<div class="cv-grid-plane"></div><svg class="cv-math-svg graph-svg" viewBox="0 0 360 260" aria-hidden="true"><path d="M25 130H335M180 20V240" class="cv-axis"/><path id="cvSysLine1" d="M35 215 L320 55" class="cv-line l1"/><path id="cvSysLine2" d="M35 55 L320 210" class="cv-line l2"/><circle cx="180" cy="130" r="9" class="cv-point"/></svg><div class="cv-system-badges"><span>y = 2x + 1</span><span>y = −x + 4</span></div>',
    "دوّر الرسم وشاهد نقطة تقاطع المعادلتين","Rotate the graph and inspect the intersection of the two equations");

   if(/(فيثاغورس)/.test(n))return shell("scene-math scene-triangle scene-pythagoras",
    '<div class="cv-grid-plane"></div><svg class="cv-math-svg" viewBox="0 0 360 260" aria-hidden="true"><polygon points="78,205 78,65 278,205" class="cv-triangle"/><rect x="18" y="82" width="58" height="122" class="cv-side-square a"/><rect x="92" y="205" width="174" height="48" class="cv-side-square b"/><polygon points="90,56 288,190 244,252 46,118" class="cv-side-square c"/></svg><div class="cv-pythag-values"><span>a²</span><span>b²</span><span>c²</span></div>',
    "اسحب لتدوير نموذج فيثاغورس","Drag to rotate the Pythagorean model");

   if(/(نسبة|تناسب|مقياس الرسم|نسب مئوية)/.test(n))return shell("scene-math scene-ratio",
    '<div class="cv-ratio-cubes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><label class="cv-model-control">'+txt(api,"القيمة","Value")+' <input id="cvModelRange" type="range" min="10" max="100" value="60"><b id="cvModelValue">60%</b></label><div class="cv-ratio-brace"><span>part</span><span>whole</span></div>',
    "حرّك القيمة وشاهد النسبة بصريًا","Move the value and watch the ratio change visually");

   if(/(احتمال)/.test(n))return shell("scene-math scene-probability",
    '<div class="cv-prob-wheel" id="cvProbWheel"><i>A</i><i>B</i><i>C</i><i>D</i></div><button class="cv-model-action" id="cvSpinWheel" type="button">'+txt(api,"لف العجلة","Spin")+'</button><div class="cv-prob-readout" id="cvProbReadout">'+txt(api,"اضغط لتجربة احتمال عشوائي","Spin to run a random trial")+'</div>',
    "لف عجلة الاحتمال وكرر التجربة","Spin the probability wheel and repeat the trial");

   if(/(سرعة|زمن|مسافة)/.test(n))return shell("scene-math scene-motion-math",
    '<div class="cv-track"><i></i><i></i><i></i></div><div class="cv-motion-ball cv-car"></div><label class="cv-model-control">'+txt(api,"السرعة","Speed")+' <input id="cvModelRange" type="range" min="1" max="20" value="8"><b id="cvModelValue">8 m/s</b></label>',
    "غيّر السرعة وشاهد موضع الجسم يتغير","Change the speed and watch the object move");

   if(/(زاوية|مثلث|مستقيمات متوازية|تطابق|تشابه|مساحات|حجوم|مجسمات|محيط|هندسة)/.test(n))return shell("scene-math scene-geometry",
    '<div class="cv-geo-stage"><div class="cv-geo-prism"><i></i><i></i><i></i><i></i></div><svg class="cv-geo-svg" viewBox="0 0 300 190"><polygon points="55,155 145,35 250,155" class="cv-triangle"/><path id="cvGeoArc" d="M76 151 A30 30 0 0 1 94 125" class="cv-angle-arc"/></svg></div><label class="cv-model-control">'+txt(api,"الزاوية","Angle")+' <input id="cvGeoAngle" type="range" min="20" max="140" value="60"><b id="cvGeoValue">60°</b></label>',
    "غيّر الزاوية ودوّر المجسم","Change the angle and rotate the solid");

   if(/(دالة|مستقيم|ميل|إحداث|قطع مكافئ|نقاط الصفر)/.test(n))return shell("scene-math scene-graph",
    '<div class="cv-grid-plane"></div><svg class="cv-math-svg graph-svg" viewBox="0 0 360 260" aria-hidden="true"><path d="M25 130H335M180 20V240" class="cv-axis"/><path d="M35 215 L320 55" class="cv-line l1"/><path d="M45 45 Q180 245 320 70" class="cv-line l2"/><circle cx="201" cy="122" r="8" class="cv-point"/></svg><label class="cv-model-control compact">'+txt(api,"الميل","Slope")+' <input id="cvModelRange" type="range" min="-5" max="5" step=".5" value="2"><b id="cvModelValue">2</b></label>',
    "غيّر الميل ودوّر الرسم","Change the slope and rotate the graph");

   return shell("scene-math scene-algebra",
    '<div class="cv-grid-plane"></div><div class="cv-math-block b1">x</div><div class="cv-math-block b2">+</div><div class="cv-math-block b3">7</div><div class="cv-math-block b4">=</div><div class="cv-math-block b5">12</div><label class="cv-model-control compact">'+txt(api,"القيمة","Value")+' <input id="cvModelRange" type="range" min="-10" max="20" value="7"><b id="cvModelValue">7</b></label>',
    "حرّك القيم ودوّر مساحة الرياضيات","Change values and rotate the math space");
  }

  if(subject==="science"){
   if(/(كهرباء|دارات|تيار)/.test(n))return shell("scene-science scene-electricity",
    '<div class="cv-circuit"><i class="wire w1"></i><i class="wire w2"></i><i class="wire w3"></i><i class="wire w4"></i><b class="cv-battery">+ −</b><b class="cv-bulb" id="cvBulb"></b></div><label class="cv-model-control">'+txt(api,"التيار","Current")+' <input id="cvModelRange" type="range" min="0" max="10" value="5"><b id="cvModelValue">5 A</b></label>',
    "غيّر التيار وشاهد الدارة تستجيب","Change current and watch the circuit respond");

   if(/(ضوء)/.test(n))return shell("scene-science scene-light",
    '<div class="cv-light-source"></div><div class="cv-light-ray r1"></div><div class="cv-light-ray r2"></div><div class="cv-prism-glass"></div><label class="cv-model-control">'+txt(api,"زاوية الشعاع","Ray angle")+' <input id="cvModelRange" type="range" min="-35" max="35" value="0"><b id="cvModelValue">0°</b></label>',
    "غيّر زاوية الضوء وشاهد مسار الشعاع","Change the light angle and watch the ray path");

   if(/(صوت)/.test(n))return shell("scene-science scene-sound",
    '<div class="cv-speaker"></div><div class="cv-sound-wave"><i></i><i></i><i></i><i></i><i></i></div><label class="cv-model-control">'+txt(api,"التردد","Frequency")+' <input id="cvModelRange" type="range" min="1" max="10" value="5"><b id="cvModelValue">5</b></label>',
    "غيّر التردد وشاهد الموجة","Change frequency and watch the wave");

   if(/(ذرة|العناصر|الجدول الدوري|أيون|بنية الذرة)/.test(n))return shell("scene-science scene-atom",
    '<div class="cv-nucleus"><b>+</b><i></i><i></i></div><div class="cv-orbit o1"><span></span></div><div class="cv-orbit o2"><span></span></div><div class="cv-orbit o3"><span></span></div><label class="cv-model-control compact">'+txt(api,"الإلكترونات","Electrons")+' <input id="cvModelRange" type="range" min="1" max="18" value="6"><b id="cvModelValue">6</b></label>',
    "غيّر عدد الإلكترونات ودوّر الذرة","Change electron count and rotate the atom");

   if(/(كيمياء|حمض|قاعدة|تفاعل|مركب|مخلوط|روابط|pH|معادلات كيميائية)/i.test(n))return shell("scene-science scene-chemistry",
    '<div class="cv-lab-floor"></div><div class="cv-beaker"><div class="cv-liquid"></div><i></i><i></i><i></i><i></i></div><div class="cv-molecule m1"><b></b><b></b><b></b></div><div class="cv-molecule m2"><b></b><b></b></div><label class="cv-model-control">'+txt(api,"شدة التفاعل","Reaction level")+' <input id="cvModelRange" type="range" min="0" max="14" value="7"><b id="cvModelValue">7</b></label>',
    "غيّر القيمة وشاهد نموذج المختبر يستجيب","Change the value and watch the lab model respond");

   if(/(خلية|وراثة|DNA|تكاثر|جسم الإنسان|التنفس|البناء الضوئي|جين|بروتين)/i.test(n))return shell("scene-science scene-biology",
    '<div class="cv-cell"><i class="org o1"></i><i class="org o2"></i><i class="org o3"></i><b class="cv-cell-core"></b></div><div class="cv-dna"><i></i><i></i><i></i><i></i><i></i></div><label class="cv-model-control compact">'+txt(api,"التكبير","Zoom level")+' <input id="cvModelRange" type="range" min="1" max="10" value="5"><b id="cvModelValue">5×</b></label>',
    "غيّر التكبير واستكشف النموذج الحيوي","Change magnification and explore the biology model");

   if(/(بيئة|أنظمة بيئية|استدامة|كائنات حية|سلاسل غذائية)/.test(n))return shell("scene-science scene-ecosystem",
    '<div class="cv-eco-sun"></div><div class="cv-eco-layer plants"></div><div class="cv-eco-node n1">🌿</div><div class="cv-eco-node n2">🐇</div><div class="cv-eco-node n3">🦅</div><div class="cv-eco-arrow a1">→</div><div class="cv-eco-arrow a2">→</div><label class="cv-model-control compact">'+txt(api,"الطاقة المتاحة","Available energy")+' <input id="cvModelRange" type="range" min="10" max="100" value="70"><b id="cvModelValue">70%</b></label>',
    "غيّر الطاقة وشاهد السلسلة الغذائية","Change the energy and inspect the food chain");

   return shell("scene-science scene-motion",
    '<div class="cv-track"><i></i></div><div class="cv-motion-ball"></div><div class="cv-vector v1">→</div><div class="cv-vector v2">↑</div><label class="cv-model-control compact">'+txt(api,"القوة","Force")+' <input id="cvModelRange" type="range" min="1" max="20" value="8"><b id="cvModelValue">8 N</b></label>',
    "غيّر القوة وشاهد الحركة","Change force and watch the motion");
  }

  if(subject==="arabic"){
   const labels=lang(api)==="en"?["Word","Role","Case"]:["الكلمة","الموقع","العلامة"];
   return shell("scene-language scene-arabic scene-parsing",
    '<div class="cv-parse-root">'+display+'</div><div class="cv-parse-lines"><i></i><i></i><i></i></div><div class="cv-word-card w1">'+labels[0]+'</div><div class="cv-word-card w2">'+labels[1]+'</div><div class="cv-word-card w3">'+labels[2]+'</div><div class="cv-parse-readout" id="cvParseReadout">'+txt(api,"اضغط بطاقة لتتبع الإعراب","Tap a card to inspect the grammatical role")+'</div>',
    "اضغط الكلمات ودوّر شجرة الإعراب","Tap the cards and rotate the parsing tree");
  }

  if(subject==="english"){
   const tense=/(Past|Present|Future|Perfect|Continuous)/i.test(n);
   return shell("scene-language scene-english",
    '<div class="cv-english-line"></div><div class="cv-grammar-card g1">'+(tense?"PAST":"FORM")+'</div><div class="cv-grammar-card g2">'+esc(t.title.length>18?t.title.slice(0,18)+"…":t.title)+'</div><div class="cv-grammar-card g3">'+(tense?"FUTURE":"USE")+'</div><button class="cv-model-action" id="cvGrammarFlip" type="button">'+txt(api,"بدّل المثال","Change example")+'</button>',
    "دوّر خط القاعدة واضغط لتبديل المثال","Rotate the grammar timeline and change the example");
  }

  if(subject==="history")return shell("scene-history",
   '<div class="cv-history-floor"></div><div class="cv-era e1"><b>'+txt(api,"سبب","CAUSE")+'</b></div><div class="cv-era e2"><b>'+txt(api,"حدث","EVENT")+'</b></div><div class="cv-era e3"><b>'+txt(api,"نتيجة","RESULT")+'</b></div><div class="cv-history-rail"></div><button class="cv-model-action" id="cvHistoryStep" type="button">'+txt(api,"الحدث التالي","Next event")+'</button>',
   "اضغط السبب والحدث والنتيجة ودوّر الخط الزمني","Tap cause, event and result and rotate the timeline");

  if(/(صفائح|زلازل|براكين|بنية الكرة|صخور|معادن)/.test(n))return shell("scene-geography scene-earth-layers",
   '<div class="cv-earth-core"><i class="layer l1"></i><i class="layer l2"></i><i class="layer l3"></i></div><div class="cv-tectonic-plates"><b></b><b></b></div><label class="cv-model-control compact">'+txt(api,"حركة الصفائح","Plate movement")+' <input id="cvModelRange" type="range" min="0" max="10" value="4"><b id="cvModelValue">4</b></label>',
   "غيّر حركة الصفائح ودوّر طبقات الأرض","Change plate motion and rotate the Earth layers");

  if(/(طقس|مناخ|غلاف جوي|دورة المياه)/.test(n))return shell("scene-geography scene-weather",
   '<div class="cv-weather-cloud"><i></i><i></i><i></i></div><div class="cv-weather-sun"></div><div class="cv-water-cycle"><b>↑</b><b>→</b><b>↓</b></div><label class="cv-model-control compact">'+txt(api,"درجة الحرارة","Temperature")+' <input id="cvModelRange" type="range" min="-10" max="45" value="24"><b id="cvModelValue">24°C</b></label>',
   "غيّر الحرارة وشاهد نموذج الطقس","Change temperature and inspect the weather model");

  if(/(سكان|هجرة|مدن|اقتصاد|صناعة|زراعة|مواصلات)/.test(n))return shell("scene-geography scene-human-geography",
   '<div class="cv-city-model"><i class="building b1"></i><i class="building b2"></i><i class="building b3"></i><i class="road"></i></div><div class="cv-pop-bars"><b style="--p:45%"></b><b style="--p:68%"></b><b style="--p:82%"></b></div><label class="cv-model-control compact">'+txt(api,"عدد السكان","Population")+' <input id="cvModelRange" type="range" min="10" max="100" value="65"><b id="cvModelValue">65</b></label>',
   "غيّر السكان وشاهد المدينة والبيانات","Change population and inspect the city model");

  return shell("scene-geography",
   '<div class="cv-globe"><i class="lat l1"></i><i class="lat l2"></i><i class="lon n1"></i><i class="lon n2"></i><b></b></div><div class="cv-terrain t1"></div><div class="cv-terrain t2"></div><div class="cv-terrain t3"></div><label class="cv-model-control compact">'+txt(api,"عامل التأثير","Impact factor")+' <input id="cvModelRange" type="range" min="1" max="10" value="5"><b id="cvModelValue">5</b></label>',
   "غيّر العامل ودوّر الكرة والمجال","Change the factor and rotate the globe");
 }
 function attach3D(){
  const card=body.querySelector(".curriculum-3d-card"),scene=body.querySelector("#cv97Scene");if(!card||!scene)return;
  let down=false,x=0,y=0,rx=-12,ry=18,scale=1,auto=false,raf=0;
  const paint=()=>scene.style.transform="rotateX("+rx+"deg) rotateY("+ry+"deg) scale("+scale+")";
  const stopAuto=()=>{auto=false;if(raf)cancelAnimationFrame(raf);raf=0;body.querySelector("#cv3DAuto")?.classList.remove("active")};
  const tick=()=>{if(!auto)return;ry+=.22;paint();raf=requestAnimationFrame(tick)};
  card.addEventListener("pointerdown",function(e){if(e.target.closest("button,input"))return;stopAuto();down=true;x=e.clientX;y=e.clientY;card.setPointerCapture?.(e.pointerId)});
  card.addEventListener("pointermove",function(e){if(!down)return;ry+=(e.clientX-x)*.45;rx-=(e.clientY-y)*.45;rx=Math.max(-55,Math.min(55,rx));x=e.clientX;y=e.clientY;paint()});
  card.addEventListener("pointerup",()=>down=false);card.addEventListener("pointercancel",()=>down=false);
  card.addEventListener("wheel",e=>{e.preventDefault();scale=Math.max(.7,Math.min(1.6,scale+(e.deltaY<0?.08:-.08)));paint()},{passive:false});
  card.addEventListener("dblclick",()=>{stopAuto();rx=-12;ry=18;scale=1;paint()});
  body.querySelector("#cv3DReset")?.addEventListener("click",()=>{stopAuto();rx=-12;ry=18;scale=1;paint()});
  body.querySelector("#cv3DAuto")?.addEventListener("click",e=>{auto=!auto;e.currentTarget.classList.toggle("active",auto);if(auto)tick();else stopAuto()});
  body.querySelector("#cv3DZoomIn")?.addEventListener("click",()=>{scale=Math.min(1.6,scale+.1);paint()});
  body.querySelector("#cv3DZoomOut")?.addEventListener("click",()=>{scale=Math.max(.7,scale-.1);paint()});
  card.querySelectorAll(".cv-word-card,.cv-grammar-card,.cv-math-block,.cv-nucleus,.cv-cell,.cv-era,.cv-globe,.cv-motion-ball,.cv-beaker,.cv-stat-bar").forEach(el=>el.addEventListener("click",e=>{if(e.target.closest("input,select"))return;e.stopPropagation();el.classList.toggle("cv-selected");const tag=card.querySelector(".cv-scene-tag");if(tag)tag.textContent=(el.textContent||state.topic?.title||"").trim().slice(0,80)}));
  const statSelect=card.querySelector("#cvStatDataset"),statInputs=[...card.querySelectorAll(".cv-stat-input")],statBars=[...card.querySelectorAll(".cv-stat-bar")];
  if(statSelect&&statInputs.length===4){
   const statSets={
    height:{values:[150,160,170,180],ar:"الطول (سم)",en:"Height (cm)",labelAr:"طول",labelEn:"Height",itemAr:"الطالب",itemEn:"student",unitAr:" سم",unitEn:" cm"},
    price:{values:[20,35,50,65],ar:"السعر (₪)",en:"Price (₪)",labelAr:"سعر",labelEn:"Price",itemAr:"المنتج",itemEn:"item",unitAr:" ₪",unitEn:" ₪"},
    quantity:{values:[12,18,9,25],ar:"الكمية",en:"Quantity",labelAr:"كمية",labelEn:"Quantity",itemAr:"الصنف",itemEn:"item",unitAr:"",unitEn:""},
    marks:{values:[65,78,92,84],ar:"العلامات",en:"Marks",labelAr:"علامة",labelEn:"Mark",itemAr:"الطالب",itemEn:"student",unitAr:" درجة",unitEn:" pts"}
   };
   const statNumber=v=>{const n=Number(v);return Number.isFinite(n)?Math.max(0,Math.min(9999,n)):0};
   const statFormat=v=>Number.isInteger(v)?String(v):String(Math.round(v*10)/10);
   const updateStats=(activeIndex=0)=>{
    const vals=statInputs.map(i=>statNumber(i.value));
    const current=statSets[statSelect.value]||statSets.height;
    const max=Math.max(1,...vals);
    statBars.forEach((bar,i)=>{
     bar.style.setProperty("--h",(24+(vals[i]/max)*58)+"%");
     const label=bar.querySelector(".cv-stat-label");
     if(label)label.textContent=(lang(api)==="en"?current.labelEn:current.labelAr)+" "+(i+1);
     bar.dataset.statValue=vals[i];
     bar.setAttribute("aria-label",(lang(api)==="en"?current.labelEn+" of "+current.itemEn+" "+(i+1)+": "+statFormat(vals[i])+current.unitEn:current.labelAr+" "+current.itemAr+" "+(i+1)+": "+statFormat(vals[i])+current.unitAr));
    });
    const sorted=vals.slice().sort((a,b)=>a-b);
    const mean=vals.reduce((a,b)=>a+b,0)/vals.length;
    const median=(sorted[1]+sorted[2])/2;
    const counts={};vals.forEach(v=>counts[v]=(counts[v]||0)+1);
    let modeValue=null,best=1;Object.keys(counts).forEach(k=>{if(counts[k]>best){best=counts[k];modeValue=Number(k)}});
    const range=sorted[sorted.length-1]-sorted[0];
    const unit=lang(api)==="en"?current.unitEn:current.unitAr;
    const set=(id,val)=>{const el=card.querySelector(id);if(el)el.textContent=val};
    set("#cvStatMean",statFormat(mean)+unit);set("#cvStatMedian",statFormat(median)+unit);set("#cvStatMode",modeValue===null?"—":statFormat(modeValue)+unit);set("#cvStatRange",statFormat(range)+unit);
    const idx=Math.max(0,Math.min(statInputs.length-1,Number(activeIndex)||0));
    const detail=card.querySelector("#cvStatDetail");
    if(detail)detail.textContent=lang(api)==="en"
      ?current.itemEn.charAt(0).toUpperCase()+current.itemEn.slice(1)+" "+(idx+1)+" "+current.labelEn.toLowerCase()+": "+statFormat(vals[idx])+current.unitEn
      :current.labelAr+" "+current.itemAr+" "+(idx+1)+": "+statFormat(vals[idx])+current.unitAr;
    if(state.editor){state.editor.data=vals.join(", ");state.editor.words=lang(api)==="en"?current.en:current.ar}
   };
   statInputs.forEach((input,index)=>{
    ["pointerdown","click"].forEach(ev=>input.addEventListener(ev,e=>e.stopPropagation()));
    input.addEventListener("focus",()=>updateStats(index));
    input.addEventListener("input",()=>updateStats(index));
    input.addEventListener("change",()=>{input.value=statFormat(statNumber(input.value));updateStats(index)});
    statBars[index]?.addEventListener("click",()=>updateStats(index));
   });
   ["pointerdown","click"].forEach(ev=>statSelect.addEventListener(ev,e=>e.stopPropagation()));
   statSelect.addEventListener("change",()=>{
    const set=statSets[statSelect.value]||statSets.height;
    statInputs.forEach((input,i)=>input.value=set.values[i]);
    const y=card.querySelector("#cvStatYAxis");if(y)y.textContent=lang(api)==="en"?set.en:set.ar;
    updateStats(0);
   });
   updateStats();
  }
  const num=v=>{const n=Number(v);return Number.isFinite(n)?n:0};
  const fmt=v=>Number.isInteger(v)?String(v):String(Math.round(v*100)/100);
  const range=card.querySelector("#cvModelRange"),rangeValue=card.querySelector("#cvModelValue");
  if(range){
   const syncRange=()=>{
    const v=num(range.value);
    scene.style.setProperty("--model-level",String(v));
    scene.style.setProperty("--model-ratio",String(Math.max(0,Math.min(1,(v-Number(range.min||0))/Math.max(1,Number(range.max||100)-Number(range.min||0))))));
    if(rangeValue){
     let suffix="";
     if(scene.classList.contains("scene-ratio")||scene.classList.contains("scene-ecosystem"))suffix="%";
     else if(scene.classList.contains("scene-motion-math"))suffix=" m/s";
     else if(scene.classList.contains("scene-electricity"))suffix=" A";
     else if(scene.classList.contains("scene-light"))suffix="°";
     else if(scene.classList.contains("scene-biology"))suffix="×";
     rangeValue.textContent=fmt(v)+suffix;
    }
   };
   ["pointerdown","click"].forEach(ev=>range.addEventListener(ev,e=>e.stopPropagation()));
   range.addEventListener("input",syncRange);syncRange();
  }
  const eqAdd=card.querySelector("#cvEqAdd"),eqRight=card.querySelector("#cvEqRight");
  if(eqAdd&&eqRight){
   const solveEq=()=>{
    const a=num(eqAdd.value),b=num(eqRight.value),xv=b-a;
    card.querySelector("#cvEqAddLabel").textContent=fmt(a);
    card.querySelector("#cvEqRightLabel").textContent=fmt(b);
    card.querySelector("#cvEqSolution").textContent=fmt(xv);
    scene.style.setProperty("--balance",String(Math.max(-12,Math.min(12,xv))/12));
    if(state.editor){state.editor.data="x + "+fmt(a)+" = "+fmt(b);state.editor.answer="x = "+fmt(xv)}
   };
   [eqAdd,eqRight].forEach(input=>{["pointerdown","click"].forEach(ev=>input.addEventListener(ev,e=>e.stopPropagation()));input.addEventListener("input",solveEq)});
   solveEq();
  }
  const fracDen=card.querySelector("#cvFracDen"),fracAdd=card.querySelector("#cvFracAdd"),fracRight=card.querySelector("#cvFracRight");
  if(fracDen&&fracAdd&&fracRight){
   const solveFrac=()=>{
    const d=Math.max(1,Math.abs(num(fracDen.value)||1)),a=num(fracAdd.value),b=num(fracRight.value),xv=d*(b-a);
    fracDen.value=fmt(d);card.querySelector("#cvFracSolution").textContent=fmt(xv);
    scene.style.setProperty("--fraction-pieces",String(Math.min(12,d)));
    if(state.editor){state.editor.data="x / "+fmt(d)+" + "+fmt(a)+" = "+fmt(b);state.editor.answer="x = "+fmt(xv)}
   };
   [fracDen,fracAdd,fracRight].forEach(input=>{["pointerdown","click"].forEach(ev=>input.addEventListener(ev,e=>e.stopPropagation()));input.addEventListener("input",solveFrac)});
   solveFrac();
  }
  const wordPrice=card.querySelector("#cvWordPrice"),wordQty=card.querySelector("#cvWordQty");
  if(wordPrice&&wordQty){
   const solveWord=()=>{
    const p=Math.max(0,num(wordPrice.value)),q=Math.max(0,num(wordQty.value)),total=p*q;
    card.querySelector("#cvWordTotal").textContent=fmt(total);
    card.querySelector("#cvWordEquation").textContent=fmt(p)+" × "+fmt(q)+" = "+fmt(total);
    scene.style.setProperty("--story-total",String(Math.min(100,total)));
    if(state.editor){state.editor.data=fmt(p)+" ₪ × "+fmt(q);state.editor.question=txt(api,"كم المجموع؟","What is the total?");state.editor.answer=fmt(total)+" ₪"}
   };
   [wordPrice,wordQty].forEach(input=>{["pointerdown","click"].forEach(ev=>input.addEventListener(ev,e=>e.stopPropagation()));input.addEventListener("input",solveWord)});
   solveWord();
  }
  const geo=card.querySelector("#cvGeoAngle"),geoValue=card.querySelector("#cvGeoValue");
  if(geo){
   const syncGeo=()=>{const v=num(geo.value);if(geoValue)geoValue.textContent=fmt(v)+"°";scene.style.setProperty("--geo-angle",v+"deg")};
   ["pointerdown","click"].forEach(ev=>geo.addEventListener(ev,e=>e.stopPropagation()));geo.addEventListener("input",syncGeo);syncGeo();
  }
  const spin=card.querySelector("#cvSpinWheel"),wheel=card.querySelector("#cvProbWheel"),probReadout=card.querySelector("#cvProbReadout");
  if(spin&&wheel){
   let spins=0;
   spin.addEventListener("click",e=>{e.stopPropagation();spins++;const pick=Math.floor(Math.random()*4),angle=spins*720+pick*90+45;wheel.style.transform="rotate("+angle+"deg)";if(probReadout)probReadout.textContent=txt(api,"النتيجة: ","Result: ")+["A","B","C","D"][pick]+" • P = 1/4"});
  }
  const grammarFlip=card.querySelector("#cvGrammarFlip");
  if(grammarFlip){
   const examples=lang(api)==="en"?["FORM → USE","POSITIVE → NEGATIVE","STATEMENT → QUESTION"]:["FORM → USE","POSITIVE → NEGATIVE","STATEMENT → QUESTION"];let gi=0;
   grammarFlip.addEventListener("click",e=>{e.stopPropagation();gi=(gi+1)%examples.length;const mid=card.querySelector(".cv-grammar-card.g2");if(mid)mid.textContent=examples[gi]});
  }
  const historyStep=card.querySelector("#cvHistoryStep");
  if(historyStep){
   let hi=0;const eras=[...card.querySelectorAll(".cv-era")];
   historyStep.addEventListener("click",e=>{e.stopPropagation();eras.forEach(x=>x.classList.remove("cv-selected"));eras[hi%eras.length]?.classList.add("cv-selected");hi++});
  }
  const parse=card.querySelector("#cvParseReadout");
  if(parse){
   const messages=lang(api)==="en"?["Identify the word first.","Find its grammatical role.","Check the case marker."]:["حدّد الكلمة أولًا.","حدّد موقعها الإعرابي.","افحص علامة الإعراب."];
   [...card.querySelectorAll(".cv-word-card")].forEach((el,i)=>el.addEventListener("click",()=>{parse.textContent=messages[i]||messages[0]}));
  }
  paint();
 }
 function renderLesson(){
  const t=state.topic,p=progressFor(api,t.id),flagship=flagshipAction(t),display=titleText(api,t),editor=state.editor||editorDefaults(t);state.editor=editor;
  const T=(ar,en)=>txt(api,ar,en);
  const transBlock="";
  const nativeAttr="";
  body.innerHTML='<div class="curriculum-toolbar curriculum-lesson-toolbar"><div class="curriculum-breadcrumb">'+T("الصف ","Grade ")+t.grade+" / "+subjectName(api,t.subject)+(t.track?" / "+trackName(api,t.track):"")+'</div><div class="curriculum-page-actions"><button id="cv99ExplainBtn" class="curriculum-toolbar-btn">'+T("شرح تفاعلي","Interactive explanation")+'</button></div></div>'+
  '<div class="curriculum-lesson-hero"><section class="curriculum-lesson-copy"'+nativeAttr+'><span class="curriculum-kicker">'+subjectName(api,t.subject)+'</span><h2>'+esc(display)+'</h2><p>'+esc(skillText(api,t))+'</p><div class="curriculum-progress-row"><span class="curriculum-progress-pill">'+statusLabel(api,p.status)+'</span><span class="curriculum-progress-pill">'+T("المحاولات: ","Attempts: ")+(p.attempts||0)+'</span><span class="curriculum-progress-pill">'+T("أفضل علامة: ","Best: ")+(p.best||0)+'%</span></div>'+(flagship?'<button class="curriculum-main-action curriculum-flagship" id="cv97Flagship">'+esc(lang(api)==="en"?flagship.en:flagship.ar)+'</button>':'')+'</section><section class="curriculum-3d-card"'+nativeAttr+'>'+buildTopicScene(t)+'<div class="curriculum-3d-controls"><button id="cv3DZoomOut" type="button">−</button><button id="cv3DReset" type="button">'+T("إعادة","Reset")+'</button><button id="cv3DAuto" type="button">'+T("دوران","Auto")+'</button><button id="cv3DZoomIn" type="button">+</button></div></section></div>'+
  transBlock+
  '<section class="curriculum-interactive-explainer hidden" id="cv99Explainer"'+nativeAttr+'><div class="curriculum-explainer-head"><div><span class="curriculum-kicker">'+T("مختبر الشرح","EXPLANATION LAB")+'</span><h3>'+T("غيّر المعطيات والكلمات والسؤال","Change the givens, words and question")+'</h3></div><button id="cv99ApplyEditor" class="curriculum-main-action">'+T("حدّث الشرح","Update explanation")+'</button></div><div class="curriculum-editor-grid"><label>'+T("المعطيات / الجملة","Givens / sentence")+'<textarea id="cv99Data">'+esc(editor.data)+'</textarea></label><label>'+T("الكلمات أو المصطلحات","Words or terms")+'<textarea id="cv99Words">'+esc(editor.words)+'</textarea></label><label class="wide">'+T("السؤال","Question")+'<textarea id="cv99Question">'+esc(editor.question)+'</textarea></label><label>'+T("الإجابة النموذجية — اختياري","Model answer — optional")+'<input id="cv99Answer" value="'+esc(editor.answer||"")+'"></label></div><div class="curriculum-dynamic-answer" id="cv99DynamicExplanation"></div></section>'+
  '<div class="curriculum-panels"><section class="curriculum-panel"'+nativeAttr+'><h3>'+T("شرح مبسط","Basic explanation")+'</h3><p>'+esc(basicExplanation(api,t))+'</p></section><section class="curriculum-panel"'+nativeAttr+'><h3>'+T("شرح متقدم","Advanced explanation")+'</h3><p>'+esc(advancedExplanation(api,t))+'</p></section><section class="curriculum-panel"'+nativeAttr+'><h3>'+T("مثال محلول خطوة بخطوة","Worked example")+'</h3><div class="curriculum-worked">'+esc(workedExample(api,t))+'</div></section><section class="curriculum-panel"><h3>'+T("تمرين سريع","Quick practice")+'</h3><div class="curriculum-mini-practice" id="cv97Practice"></div></section></div>'+
  '<section class="curriculum-panel curriculum-actions-panel"><div class="curriculum-action-grid"><div class="curriculum-action-box"><h3>'+T("امتحان الموضوع","Topic exam")+'</h3><div class="curriculum-controls"><label>'+T("الصعوبة","Difficulty")+'<select id="cv97ExamDifficulty"><option value="easy">'+levelLabel(api,"easy")+'</option><option value="medium" selected>'+levelLabel(api,"medium")+'</option><option value="hard">'+levelLabel(api,"hard")+'</option><option value="mixed">'+levelLabel(api,"mixed")+'</option></select></label><label>'+T("عدد الأسئلة","Questions")+'<select id="cv97ExamCount"><option>5</option><option selected>10</option><option>15</option><option>20</option><option>25</option><option>30</option></select></label></div><button class="curriculum-main-action" id="cv97StartExam">'+T("ابدأ الامتحان","Start exam")+'</button></div>'+
  '<div class="curriculum-action-box"><h3>'+T("مسابقة مباشرة","Live competition")+'</h3><div class="curriculum-controls"><label>'+T("الصعوبة","Difficulty")+'<select id="cv97LiveDifficulty"><option value="easy">'+levelLabel(api,"easy")+'</option><option value="medium" selected>'+levelLabel(api,"medium")+'</option><option value="hard">'+levelLabel(api,"hard")+'</option><option value="mixed">'+levelLabel(api,"mixed")+'</option></select></label><label>'+T("الأسئلة","Questions")+'<select id="cv97LiveCount"><option>5</option><option selected>10</option><option>15</option><option>20</option><option>25</option><option>30</option></select></label><label>'+T("وقت السؤال","Time per question")+'<select id="cv97LiveTime"><option>10</option><option>15</option><option selected>20</option><option>30</option><option>45</option><option>60</option></select></label><label>'+T("النمط","Mode")+'<select id="cv97LiveMode"><option value="solo">'+T("فردي","Solo")+'</option><option value="choice" selected>'+T("فرق","Teams")+'</option></select></label></div><button class="curriculum-main-action live" id="cv97StartLive">'+T("أنشئ مسابقة","Create competition")+'</button></div></div></section>';
  attach3D();renderPractice();
  const explain=body.querySelector("#cv99Explainer");
  body.querySelector("#cv99ExplainBtn").onclick=()=>{explain.classList.toggle("hidden");if(!explain.classList.contains("hidden"))explain.scrollIntoView({behavior:"smooth",block:"start"})};
  if(nativeOnly&&body.querySelector("#cv99TranslateBtn"))body.querySelector("#cv99TranslateBtn").onclick=()=>{state.showTranslation=!state.showTranslation;renderLesson()};
  body.querySelector("#cv99ApplyEditor").onclick=()=>{
   state.editor={data:body.querySelector("#cv99Data").value,words:body.querySelector("#cv99Words").value,question:body.querySelector("#cv99Question").value,answer:body.querySelector("#cv99Answer").value};
   const d=state.editor,box=body.querySelector("#cv99DynamicExplanation"),sceneTag=body.querySelector(".cv-scene-tag"),scene=body.querySelector("#cv97Scene");
   if(sceneTag)sceneTag.textContent=(d.words||display).slice(0,80);
   const tokens=(d.words||d.data||"").split(/[\s,،;:=+\-\/]+/).filter(Boolean);
   if(t.subject==="arabic"){
    body.querySelectorAll(".cv-word-card").forEach((el,i)=>{if(tokens[i])el.textContent=tokens[i]});
   }else if(t.subject==="english"){
    const cards=[...body.querySelectorAll(".cv-grammar-card")];if(tokens.length){cards.forEach((el,i)=>{if(tokens[i])el.textContent=tokens[i]})}
   }else if(t.subject==="math"){
    const vals=(d.data.match(/-?\d+(?:\.\d+)?|[a-zA-Z]+/g)||[]).slice(0,5);
    body.querySelectorAll(".cv-math-block").forEach((el,i)=>{if(vals[i])el.textContent=vals[i]});
    const point=body.querySelector(".cv-point");if(point&&vals.length>=2){const a=Math.abs(Number(vals.find(v=>!Number.isNaN(Number(v)))||1));point.setAttribute("cx",String(80+(a*23)%230));point.setAttribute("cy",String(50+(a*17)%150))}
   }else if(t.subject==="science"){
    const number=Math.abs(Number((d.data.match(/-?\d+(?:\.\d+)?/)||[])[0]||7));
    const liquid=body.querySelector(".cv-liquid");if(liquid)liquid.style.height=Math.max(18,Math.min(88,20+(number%15)*4.5))+"%";
    const ball=body.querySelector(".cv-motion-ball");if(ball){const size=48+(number%8)*4;ball.style.width=size+"px";ball.style.height=size+"px"}
    const nucleus=body.querySelector(".cv-nucleus");if(nucleus)nucleus.style.filter="hue-rotate("+((number*19)%360)+"deg)";
   }else if(scene){
    scene.style.setProperty("--cv-editor-shift",String((d.data.length%18)-9)+"deg");
   }
   box.innerHTML='<b>'+T("شرح مخصص","Custom explanation")+'</b><p>'+esc(basicExplanation(api,t))+'</p><p><strong>'+T("المعطيات: ","Givens: ")+'</strong>'+esc(d.data||"—")+'</p><p><strong>'+T("الكلمات: ","Words: ")+'</strong>'+esc(d.words||"—")+'</p><p><strong>'+T("السؤال: ","Question: ")+'</strong>'+esc(d.question||"—")+'</p>'+(d.answer?'<p><strong>'+T("الإجابة النموذجية: ","Model answer: ")+'</strong>'+esc(d.answer)+'</p>':'');
  };
  if(flagship&&body.querySelector("#cv97Flagship"))body.querySelector("#cv97Flagship").onclick=()=>{shut();api.action?.(flagship.key)};
  body.querySelector("#cv97StartExam").onclick=async function(){
   const diff=body.querySelector("#cv97ExamDifficulty").value,count=Number(body.querySelector("#cv97ExamCount").value),qs=makeQuestions(api,t,count,diff,false);
   if(state.editor?.question&&state.editor?.answer){qs.unshift({id:"custom-"+Date.now(),type:"open",prompt:state.editor.question,answer:state.editor.answer,options:[],explanation:state.editor.answer,points:10,topicKey:t.subject,questionKind:"custom",level:2,typeLabel:subjectName(api,t.subject)+" • "+display});qs.splice(count)}
   const exam={title:(t.subject==="english"?"Grammar Exam — ":T("امتحان — ","Exam — "))+display,questions:qs,total:qs.reduce((s,q)=>s+q.points,0),surprise:false,topicExam:true,subject:t.subject,curriculumTopicId:t.id,curriculumGrade:t.grade,curriculumDifficulty:diff,curriculumTopicTitle:t.title};
   const ok=await api.startExam(exam);if(ok!==false)shut()
  };
  body.querySelector("#cv97StartLive").onclick=async function(){
   if(!api.isTeacher||!api.isTeacher()){api.toast&&api.toast(T("إنشاء المسابقة يحتاج حساب معلم.","A teacher account is required to create a competition."));return}
   const diff=body.querySelector("#cv97LiveDifficulty").value,count=Number(body.querySelector("#cv97LiveCount").value),seconds=Number(body.querySelector("#cv97LiveTime").value),teamMode=body.querySelector("#cv97LiveMode").value,qs=makeQuestions(api,t,count,diff,true);
   shut();await api.startCompetition(qs,(t.subject==="english"?"Live Grammar — ":T("مسابقة — ","Live — "))+display,{teamMode,audienceMode:"projector",questionSeconds:seconds,curriculumTopicId:t.id,difficulty:diff})
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
