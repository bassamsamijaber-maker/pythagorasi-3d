(()=>{"use strict";
const raw=[
[1,"H","Hydrogen","هيدروجين","1.008",1,1],[2,"He","Helium","هيليوم","4.0026",1,18],
[3,"Li","Lithium","ليثيوم","6.94",2,1],[4,"Be","Beryllium","بيريليوم","9.0122",2,2],[5,"B","Boron","بورون","10.81",2,13],[6,"C","Carbon","كربون","12.011",2,14],[7,"N","Nitrogen","نيتروجين","14.007",2,15],[8,"O","Oxygen","أكسجين","15.999",2,16],[9,"F","Fluorine","فلور","18.998",2,17],[10,"Ne","Neon","نيون","20.180",2,18],
[11,"Na","Sodium","صوديوم","22.990",3,1],[12,"Mg","Magnesium","مغنيسيوم","24.305",3,2],[13,"Al","Aluminium","ألومنيوم","26.982",3,13],[14,"Si","Silicon","سيليكون","28.085",3,14],[15,"P","Phosphorus","فوسفور","30.974",3,15],[16,"S","Sulfur","كبريت","32.06",3,16],[17,"Cl","Chlorine","كلور","35.45",3,17],[18,"Ar","Argon","أرجون","39.948",3,18],
[19,"K","Potassium","بوتاسيوم","39.098",4,1],[20,"Ca","Calcium","كالسيوم","40.078",4,2],[21,"Sc","Scandium","سكانديوم","44.956",4,3],[22,"Ti","Titanium","تيتانيوم","47.867",4,4],[23,"V","Vanadium","فاناديوم","50.942",4,5],[24,"Cr","Chromium","كروم","51.996",4,6],[25,"Mn","Manganese","منغنيز","54.938",4,7],[26,"Fe","Iron","حديد","55.845",4,8],[27,"Co","Cobalt","كوبالت","58.933",4,9],[28,"Ni","Nickel","نيكل","58.693",4,10],[29,"Cu","Copper","نحاس","63.546",4,11],[30,"Zn","Zinc","زنك","65.38",4,12],[31,"Ga","Gallium","غاليوم","69.723",4,13],[32,"Ge","Germanium","جرمانيوم","72.630",4,14],[33,"As","Arsenic","زرنيخ","74.922",4,15],[34,"Se","Selenium","سيلينيوم","78.971",4,16],[35,"Br","Bromine","بروم","79.904",4,17],[36,"Kr","Krypton","كريبتون","83.798",4,18],
[37,"Rb","Rubidium","روبيديوم","85.468",5,1],[38,"Sr","Strontium","سترونشيوم","87.62",5,2],[39,"Y","Yttrium","إيتريوم","88.906",5,3],[40,"Zr","Zirconium","زركونيوم","91.224",5,4],[41,"Nb","Niobium","نيوبيوم","92.906",5,5],[42,"Mo","Molybdenum","موليبدينوم","95.95",5,6],[43,"Tc","Technetium","تكنيتيوم","[98]",5,7],[44,"Ru","Ruthenium","روثينيوم","101.07",5,8],[45,"Rh","Rhodium","روديوم","102.91",5,9],[46,"Pd","Palladium","بلاديوم","106.42",5,10],[47,"Ag","Silver","فضة","107.87",5,11],[48,"Cd","Cadmium","كادميوم","112.41",5,12],[49,"In","Indium","إنديوم","114.82",5,13],[50,"Sn","Tin","قصدير","118.71",5,14],[51,"Sb","Antimony","أنتيمون","121.76",5,15],[52,"Te","Tellurium","تيلوريوم","127.60",5,16],[53,"I","Iodine","يود","126.90",5,17],[54,"Xe","Xenon","زينون","131.29",5,18],
[55,"Cs","Cesium","سيزيوم","132.91",6,1],[56,"Ba","Barium","باريوم","137.33",6,2],[57,"La","Lanthanum","لانثانوم","138.91",6,0],[58,"Ce","Cerium","سيريوم","140.12",6,0],[59,"Pr","Praseodymium","براسيوديميوم","140.91",6,0],[60,"Nd","Neodymium","نيوديميوم","144.24",6,0],[61,"Pm","Promethium","بروميثيوم","[145]",6,0],[62,"Sm","Samarium","ساماريوم","150.36",6,0],[63,"Eu","Europium","يوروبيوم","151.96",6,0],[64,"Gd","Gadolinium","غادولينيوم","157.25",6,0],[65,"Tb","Terbium","تيربيوم","158.93",6,0],[66,"Dy","Dysprosium","ديسبروسيوم","162.50",6,0],[67,"Ho","Holmium","هولميوم","164.93",6,0],[68,"Er","Erbium","إربيوم","167.26",6,0],[69,"Tm","Thulium","ثوليوم","168.93",6,0],[70,"Yb","Ytterbium","إيتربيوم","173.05",6,0],[71,"Lu","Lutetium","لوتيتيوم","174.97",6,0],[72,"Hf","Hafnium","هافنيوم","178.49",6,4],[73,"Ta","Tantalum","تانتالوم","180.95",6,5],[74,"W","Tungsten","تنغستن","183.84",6,6],[75,"Re","Rhenium","رينيوم","186.21",6,7],[76,"Os","Osmium","أوزميوم","190.23",6,8],[77,"Ir","Iridium","إيريديوم","192.22",6,9],[78,"Pt","Platinum","بلاتين","195.08",6,10],[79,"Au","Gold","ذهب","196.97",6,11],[80,"Hg","Mercury","زئبق","200.59",6,12],[81,"Tl","Thallium","ثاليوم","204.38",6,13],[82,"Pb","Lead","رصاص","207.2",6,14],[83,"Bi","Bismuth","بزموت","208.98",6,15],[84,"Po","Polonium","بولونيوم","[209]",6,16],[85,"At","Astatine","أستاتين","[210]",6,17],[86,"Rn","Radon","رادون","[222]",6,18],
[87,"Fr","Francium","فرانسيوم","[223]",7,1],[88,"Ra","Radium","راديوم","[226]",7,2],[89,"Ac","Actinium","أكتينيوم","[227]",7,0],[90,"Th","Thorium","ثوريوم","232.04",7,0],[91,"Pa","Protactinium","بروتكتينيوم","231.04",7,0],[92,"U","Uranium","يورانيوم","238.03",7,0],[93,"Np","Neptunium","نبتونيوم","[237]",7,0],[94,"Pu","Plutonium","بلوتونيوم","[244]",7,0],[95,"Am","Americium","أمريسيوم","[243]",7,0],[96,"Cm","Curium","كوريوم","[247]",7,0],[97,"Bk","Berkelium","بركيليوم","[247]",7,0],[98,"Cf","Californium","كاليفورنيوم","[251]",7,0],[99,"Es","Einsteinium","أينشتينيوم","[252]",7,0],[100,"Fm","Fermium","فيرميوم","[257]",7,0],[101,"Md","Mendelevium","مندليفيوم","[258]",7,0],[102,"No","Nobelium","نوبليوم","[259]",7,0],[103,"Lr","Lawrencium","لورنسيوم","[266]",7,0],[104,"Rf","Rutherfordium","رذرفورديوم","[267]",7,4],[105,"Db","Dubnium","دوبنيوم","[268]",7,5],[106,"Sg","Seaborgium","سيبورغيوم","[269]",7,6],[107,"Bh","Bohrium","بوهريوم","[270]",7,7],[108,"Hs","Hassium","هاسيوم","[277]",7,8],[109,"Mt","Meitnerium","مايتنريوم","[278]",7,9],[110,"Ds","Darmstadtium","دارمشتاتيوم","[281]",7,10],[111,"Rg","Roentgenium","رونتغينيوم","[282]",7,11],[112,"Cn","Copernicium","كوبرنيسيوم","[285]",7,12],[113,"Nh","Nihonium","نيهونيوم","[286]",7,13],[114,"Fl","Flerovium","فليروفيوم","[289]",7,14],[115,"Mc","Moscovium","موسكوفيوم","[290]",7,15],[116,"Lv","Livermorium","ليفرموريوم","[293]",7,16],[117,"Ts","Tennessine","تينيسين","[294]",7,17],[118,"Og","Oganesson","أوغانيسون","[294]",7,18]
];

const catOrder=["alkali","alkaline","transition","post","metalloid","nonmetal","halogen","noble","lanthanide","actinide"];
const cats={
 alkali:{en:"Alkali metals",ar:"الفلزات القلوية",color:"#61b8ff"},
 alkaline:{en:"Alkaline earth metals",ar:"الفلزات القلوية الترابية",color:"#7ed8ff"},
 transition:{en:"Transition metals",ar:"الفلزات الانتقالية",color:"#8aaec2"},
 post:{en:"Post-transition metals",ar:"فلزات بعد انتقالية",color:"#b6bacb"},
 metalloid:{en:"Metalloids",ar:"أشباه الفلزات",color:"#dbc77e"},
 nonmetal:{en:"Nonmetals",ar:"اللافلزات",color:"#8ed8bd"},
 halogen:{en:"Halogens",ar:"الهالوجينات",color:"#54d99c"},
 noble:{en:"Noble gases",ar:"الغازات النبيلة",color:"#f2b690"},
 lanthanide:{en:"Lanthanides",ar:"اللانثانيدات",color:"#9dc6d8"},
 actinide:{en:"Actinides",ar:"الأكتينيدات",color:"#83b7d3"}
};
const sets={
 alkali:new Set([3,11,19,37,55,87]),alkaline:new Set([4,12,20,38,56,88]),
 metalloid:new Set([5,14,32,33,51,52]),nonmetal:new Set([1,6,7,8,15,16,34]),
 halogen:new Set([9,17,35,53,85,117]),noble:new Set([2,10,18,36,54,86,118]),
 post:new Set([13,31,49,50,81,82,83,84,113,114,115,116])
};
function categoryOf(n){
 if(n>=57&&n<=71)return"lanthanide";if(n>=89&&n<=103)return"actinide";
 for(const k of["alkali","alkaline","metalloid","nonmetal","halogen","noble","post"])if(sets[k].has(n))return k;
 return"transition";
}
const gas=new Set([1,2,7,8,9,10,17,18,36,54,86]),liquid=new Set([35,80]);
function stateOf(n){if(n>=104)return"unknown";if(gas.has(n))return"gas";if(liquid.has(n))return"liquid";return"solid"}
const elements=raw.map(r=>({n:r[0],s:r[1],en:r[2],ar:r[3],mass:r[4],period:r[5],group:r[6],category:categoryOf(r[0]),state:stateOf(r[0])}));

const ui={
 en:{back:"Back to Classora",chemistry:"Chemistry",interactive:"INTERACTIVE CHEMISTRY LAB",title:"Periodic Table of Elements",subtitle:"Explore all 118 elements in a colorful 3D table. Search, compare, learn and test yourself.",elements:"Elements",groups:"Groups",periods:"Periods",search:"Search by name, symbol or atomic number…",explore:"Explore",learn:"Learn",quiz:"Quiz",tapHint:"TAP ANY ELEMENT",tableTitle:"Interactive Periodic Table",shown:"shown",learnKicker:"LEARN BY CATEGORY",families:"Element Families",metalVsNon:"Metals, nonmetals and metalloids",metalLesson:"Metals usually conduct heat and electricity well. Nonmetals often behave differently, while metalloids share properties of both groups.",quickQuiz:"QUICK QUIZ",startQuiz:"Start quiz",labTools:"CHEMISTRY TOOLS",compareCombine:"Compare & combine",compare:"Compare two elements",compareSub:"See their properties side by side",compareBtn:"Compare",combine:"Combine elements",combineSub:"Educational examples of common compounds",combineBtn:"Show example",combineNote:"Concept explanation only — not laboratory instructions. Not every pair reacts directly.",atomicNumber:"Atomic number",atomicMass:"Atomic mass",state:"State",position:"Position",about:"About this element",uses:"Common uses / importance",addCompare:"Add to comparison",all:"All",solid:"Solid",liquid:"Liquid",gas:"Gas",unknown:"Predicted / uncertain",period:"Period",group:"Group",series:"f-block series",next:"Next question",correct:"Correct!",wrong:"Not quite",quizName:"Which element has this symbol?",quizSymbol:"What is the symbol for this element?",quizCategory:"Which family does this element belong to?",noCompound:"No simple classroom example is saved for this pair. Not every two elements form a direct compound.",compoundIntro:"A common educational example is",compareEmpty:"Choose two elements to compare.",randomElement:"Random element",illustration:"Educational illustration",pauseAnimation:"Pause animation",playAnimation:"Play animation",favorite:"Favorite",favorites:"Favorites"},
 ar:{back:"الرجوع إلى كلاسورا",chemistry:"الكيمياء",interactive:"مختبر كيمياء تفاعلي",title:"الجدول الدوري للعناصر",subtitle:"استكشف كل العناصر الـ118 بجدول ملون وثلاثي الأبعاد. ابحث، قارن، تعلّم واختبر نفسك.",elements:"عنصر",groups:"مجموعة",periods:"دورات",search:"ابحث بالاسم أو الرمز أو الرقم الذري…",explore:"استكشاف",learn:"تعلّم",quiz:"اختبار",tapHint:"اضغط على أي عنصر",tableTitle:"الجدول الدوري التفاعلي",shown:"ظاهر",learnKicker:"تعلّم حسب التصنيف",families:"عائلات العناصر",metalVsNon:"الفلزات واللافلزات وأشباه الفلزات",metalLesson:"الفلزات عادةً توصل الحرارة والكهرباء بشكل جيد، واللافلزات تختلف عنها في صفاتها، بينما أشباه الفلزات تجمع صفات من الجهتين.",quickQuiz:"اختبار سريع",startQuiz:"ابدأ الاختبار",labTools:"أدوات الكيمياء",compareCombine:"قارن وادمج",compare:"قارن عنصرين",compareSub:"شوف خصائصهم جنب بعض",compareBtn:"قارن",combine:"دمج عنصرين",combineSub:"أمثلة تعليمية على مركبات شائعة",combineBtn:"اعرض مثال",combineNote:"شرح للمفهوم فقط — مش تعليمات لمختبر. مش كل عنصرين بتفاعلوا مباشرة.",atomicNumber:"الرقم الذري",atomicMass:"الكتلة الذرية",state:"الحالة",position:"الموقع",about:"عن العنصر",uses:"استخدامات / أهمية شائعة",addCompare:"أضف للمقارنة",all:"الكل",solid:"صلب",liquid:"سائل",gas:"غاز",unknown:"متوقعة / غير مؤكدة",period:"الدورة",group:"المجموعة",series:"سلسلة f",next:"السؤال التالي",correct:"صح!",wrong:"مش بالزبط",quizName:"أي عنصر عنده هذا الرمز؟",quizSymbol:"شو رمز هذا العنصر؟",quizCategory:"لأي عائلة بنتمي هذا العنصر؟",noCompound:"ما في مثال مدرسي بسيط محفوظ لهالزوج. مش كل عنصرين بكونوا مركب مباشر.",compoundIntro:"مثال تعليمي شائع هو",compareEmpty:"اختار عنصرين للمقارنة.",randomElement:"عنصر عشوائي",illustration:"صورة توضيحية تعليمية",pauseAnimation:"إيقاف الحركة",playAnimation:"تشغيل الحركة",favorite:"مفضلة",favorites:"المفضلة"}
};
let lang=localStorage.getItem("pythagorasi_language")==="ar"?"ar":"en";
const $=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
const visualCache=new Map();
const favorites=new Set(JSON.parse(localStorage.getItem("classora_periodic_favorites")||"[]").map(Number).filter(n=>n>=1&&n<=118));
function saveFavorites(){localStorage.setItem("classora_periodic_favorites",JSON.stringify([...favorites].sort((a,b)=>a-b)))}
function animationType(e){
 if(e.state==="gas"||e.category==="noble")return"float";
 if(e.state==="liquid")return"orbit";
 if(e.category==="actinide"||e.category==="lanthanide")return"pulse";
 return e.n%2?"shimmer":"pulse";
}
function t(k){return ui[lang][k]||k}
function localName(e){return lang==="ar"?e.ar:e.en}
function catName(e){return cats[e.category][lang]}
function stateName(e){return t(e.state)}

const categoryText={
 alkali:{en:"Very reactive metals in group 1. They usually form +1 ions.",ar:"فلزات شديدة التفاعل في المجموعة 1، وغالبًا بتكوّن أيونات بشحنة +1."},
 alkaline:{en:"Reactive group 2 metals, commonly found in minerals and compounds.",ar:"فلزات تفاعلية في المجموعة 2، بنلاقيها كثير بالمعادن والمركبات."},
 transition:{en:"Central-block metals known for useful alloys, conductivity and varied oxidation states.",ar:"فلزات بوسط الجدول، مهمة بالسبائك والتوصيل وبتظهر بحالات أكسدة مختلفة."},
 post:{en:"Softer metallic elements found to the right of the transition metals.",ar:"فلزات عادةً ألين من الفلزات الانتقالية وموجودة بجهة اليمين منها."},
 metalloid:{en:"Elements with a mix of metallic and nonmetallic properties; several are important semiconductors.",ar:"عناصر عندها صفات بين الفلزات واللافلزات، وبعضها مهم جدًا بأشباه الموصلات."},
 nonmetal:{en:"Elements that generally do not behave like metals. Many are essential in living systems.",ar:"عناصر ما بتتصرف مثل الفلزات عادةً، وكثير منها أساسي للحياة."},
 halogen:{en:"Reactive group 17 nonmetals that often form salts with metals.",ar:"لافلزات تفاعلية في المجموعة 17، وكثيرًا ما بتكوّن أملاح مع الفلزات."},
 noble:{en:"Group 18 elements with very low chemical reactivity under ordinary conditions.",ar:"عناصر المجموعة 18، وتفاعلها الكيميائي قليل جدًا بالظروف العادية."},
 lanthanide:{en:"Rare-earth metals used in magnets, lighting, optics and advanced technology.",ar:"فلزات من العناصر الأرضية النادرة، إلها استخدامات بالمغناطيس والإضاءة والبصريات والتقنية."},
 actinide:{en:"Heavy radioactive elements; several are synthetic and mainly studied in nuclear science.",ar:"عناصر ثقيلة ومشعة، وعدد منها صناعي ويُدرس خصوصًا بالعلوم النووية."}
};
const uses={
 H:["Fuel cells, ammonia production and many chemical compounds.","خلايا الوقود، إنتاج الأمونيا ومركبات كيميائية كثيرة."],
 He:["Cooling, balloons and low-temperature research.","التبريد، البالونات وأبحاث درجات الحرارة المنخفضة."],
 Li:["Rechargeable batteries, glass and specialty alloys.","البطاريات القابلة للشحن، الزجاج وسبائك خاصة."],
 C:["Life chemistry, steel, graphite, diamond and countless compounds.","كيمياء الحياة، الفولاذ، الغرافيت، الألماس ومركبات لا تحصى."],
 N:["Fertilizers, protective atmospheres and biological molecules.","الأسمدة، الأجواء الواقية والجزيئات الحيوية."],
 O:["Respiration, medicine, metal processing and combustion.","التنفس، الطب، معالجة المعادن والاحتراق."],
 Na:["Common salts, chemical production and sodium compounds.","الأملاح الشائعة، الصناعات الكيميائية ومركبات الصوديوم."],
 Mg:["Light alloys, bright flares and biological processes.","سبائك خفيفة، إضاءة شديدة وبعض العمليات الحيوية."],
 Al:["Cans, aircraft, construction and electrical conductors.","العلب، الطائرات، البناء والموصلات الكهربائية."],
 Si:["Computer chips, solar cells, glass and silicones.","شرائح الحاسوب، الخلايا الشمسية، الزجاج والسيليكونات."],
 P:["Fertilizers, DNA, energy transfer in cells and matches.","الأسمدة، DNA، نقل الطاقة بالخلايا وأعواد الثقاب."],
 S:["Sulfuric acid, fertilizers, rubber processing and medicines.","حمض الكبريتيك، الأسمدة، معالجة المطاط وبعض الأدوية."],
 Cl:["Water treatment, PVC and many chloride compounds.","معالجة المياه، PVC ومركبات الكلوريد."],
 K:["Fertilizers, cell function and many potassium salts.","الأسمدة، عمل الخلايا وأملاح البوتاسيوم."],
 Ca:["Bones and teeth, cement, lime and metallurgy.","العظام والأسنان، الإسمنت، الجير وصناعة المعادن."],
 Ti:["Aircraft, implants, strong light alloys and pigments.","الطائرات، الزرعات الطبية، سبائك قوية وخفيفة والأصباغ."],
 Cr:["Stainless steel, plating and pigments.","الفولاذ المقاوم للصدأ، الطلاء والأصباغ."],
 Fe:["Steel, buildings, tools, machines and hemoglobin.","الفولاذ، المباني، الأدوات، الآلات والهيموغلوبين."],
 Co:["Batteries, superalloys, pigments and magnets.","البطاريات، السبائك المتقدمة، الأصباغ والمغناطيس."],
 Ni:["Stainless steel, batteries, coins and catalysts.","الفولاذ المقاوم للصدأ، البطاريات، العملات والمحفزات."],
 Cu:["Electrical wiring, electronics, plumbing and alloys.","أسلاك الكهرباء، الإلكترونيات، الأنابيب والسبائك."],
 Zn:["Galvanizing steel, batteries, brass and biology.","جلفنة الفولاذ، البطاريات، النحاس الأصفر ووظائف حيوية."],
 Br:["Flame-retardant chemistry, photography history and chemical synthesis.","كيمياء مثبطات اللهب، التصوير تاريخيًا والتخليق الكيميائي."],
 Ag:["Jewelry, electronics, mirrors and antimicrobial applications.","المجوهرات، الإلكترونيات، المرايا وتطبيقات مضادة للميكروبات."],
 Sn:["Solder, tinplate, bronze and coatings.","اللحام، طلاء العلب، البرونز والطلاءات."],
 I:["Thyroid health, antiseptics and medical imaging compounds.","صحة الغدة الدرقية، المطهرات ومركبات للتصوير الطبي."],
 Xe:["Special lamps, imaging and some spacecraft ion thrusters.","مصابيح خاصة، التصوير وبعض محركات الأيونات الفضائية."],
 Nd:["Powerful permanent magnets, headphones and electric motors.","مغناطيس دائم قوي، السماعات والمحركات الكهربائية."],
 W:["High-temperature tools, lamp filaments historically and hard alloys.","أدوات تتحمل حرارة عالية، فتائل المصابيح تاريخيًا وسبائك صلبة."],
 Pt:["Catalytic converters, jewelry and industrial catalysts.","المحولات الحفازة، المجوهرات والمحفزات الصناعية."],
 Au:["Jewelry, electronics, dentistry and corrosion-resistant contacts.","المجوهرات، الإلكترونيات، طب الأسنان وموصلات مقاومة للتآكل."],
 Hg:["Scientific instruments historically; use is limited because mercury is toxic.","أجهزة علمية تاريخيًا؛ استعماله محدود لأن الزئبق سام."],
 Pb:["Lead-acid batteries and radiation shielding; use is controlled because it is toxic.","بطاريات الرصاص والحماية من الإشعاع؛ استخدامه مضبوط لأنه سام."],
 U:["Nuclear fuel and scientific research.","وقود نووي وأبحاث علمية."]
};
function useText(e){
 const u=uses[e.s];if(u)return lang==="ar"?u[1]:u[0];
 const fallback={
  alkali:["Specialized chemical compounds and research.","مركبات كيميائية متخصصة وأبحاث."],
  alkaline:["Materials, minerals and specialized compounds.","مواد ومعادن ومركبات متخصصة."],
  transition:["Alloys, catalysts, electronics or specialized industrial materials.","سبائك، محفزات، إلكترونيات أو مواد صناعية متخصصة."],
  post:["Specialty alloys, electronics and materials science.","سبائك خاصة، إلكترونيات وعلوم المواد."],
  metalloid:["Semiconductors, materials research and specialized compounds.","أشباه موصلات، أبحاث مواد ومركبات متخصصة."],
  nonmetal:["Biology, industrial chemistry and many everyday compounds.","الأحياء، الكيمياء الصناعية ومركبات كثيرة بالحياة اليومية."],
  halogen:["Salts, chemical synthesis and specialized materials.","الأملاح، التخليق الكيميائي والمواد المتخصصة."],
  noble:["Lighting, controlled atmospheres and scientific applications.","الإضاءة، الأجواء الخاملة وتطبيقات علمية."],
  lanthanide:["Magnets, optics, electronics and high-performance materials.","المغناطيس، البصريات، الإلكترونيات ومواد عالية الأداء."],
  actinide:["Mostly nuclear science, research and specialized energy applications.","غالبًا العلوم النووية والأبحاث وتطبيقات طاقة متخصصة."]
 };
 return lang==="ar"?fallback[e.category][1]:fallback[e.category][0];
}
function description(e){const base=categoryText[e.category][lang];const st=stateName(e);return lang==="ar"?`${e.ar} (${e.s}) هو العنصر رقم ${e.n} في الجدول الدوري. حالته عند الظروف العادية: ${st}. ${base}`:`${e.en} (${e.s}) is element ${e.n} on the periodic table. Its ordinary-condition state is ${st.toLowerCase()}. ${base}`}

function gridPos(e){
 if(e.n>=57&&e.n<=71)return{row:9,col:e.n-53};
 if(e.n>=89&&e.n<=103)return{row:10,col:e.n-85};
 return{row:e.period,col:e.group};
}
function visual(e){
 if(visualCache.has(e.n))return visualCache.get(e.n);
 const c=cats[e.category].color,accent=`hsl(${(e.n*47)%360} 72% 66%)`,angle=(e.n*29)%360;
 let scene="";
 if(e.state==="gas"){
   for(let i=0;i<10;i++){const x=95+((e.n*37+i*53)%330),y=105+((e.n*19+i*71)%245),r=10+((e.n+i*11)%24);scene+=`<circle cx="${x}" cy="${y}" r="${r}" fill="${i%2?c:accent}" fill-opacity="${.12+(i%4)*.05}"/>`}
 }else if(e.state==="liquid"){
   scene+=`<path d="M55 325 Q130 ${285+(e.n%35)} 205 325 T355 325 T500 325 V455 H55Z" fill="${c}" fill-opacity=".30"/>`;
   for(let i=0;i<7;i++){const x=100+((e.n*41+i*61)%320),y=135+((e.n*13+i*47)%130),r=8+((e.n+i*7)%18);scene+=`<path d="M${x} ${y-r} C${x-r} ${y},${x-r} ${y+r},${x} ${y+r} C${x+r} ${y+r},${x+r} ${y},${x} ${y-r}Z" fill="${i%2?accent:c}" fill-opacity=".28"/>`}
 }else if(["transition","post","alkali","alkaline"].includes(e.category)){
   for(let i=0;i<8;i++){const x=75+((e.n*31+i*57)%360),y=92+((e.n*23+i*43)%285),w=34+((e.n+i*9)%54),h=22+((e.n+i*13)%42);scene+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${i%2?accent:c}" fill-opacity=".18" transform="rotate(${(e.n*17+i*31)%46-23} ${x+w/2} ${y+h/2})"/>`}
 }else{
   for(let i=0;i<9;i++){const x=90+((e.n*29+i*47)%340),y=105+((e.n*17+i*59)%250),r=14+((e.n+i*5)%24);scene+=`<polygon points="${x},${y-r} ${x+r},${y} ${x},${y+r} ${x-r},${y}" fill="${i%2?accent:c}" fill-opacity=".17" stroke="white" stroke-opacity=".08"/>`}
 }
 let orbitMarkup="",dotMarkup="",orbits=2+(e.n%3),dots=4+(e.n%7);
 for(let i=0;i<orbits;i++){const r=82+i*30,rot=(angle+i*57)%180;orbitMarkup+=`<ellipse cx="260" cy="230" rx="${r}" ry="${Math.round(r*.36)}" fill="none" stroke="white" stroke-opacity=".26" stroke-width="3" transform="rotate(${rot} 260 230)"/>`}
 for(let i=0;i<dots;i++){const a=(i/dots)*Math.PI*2+e.n*.13,x=260+Math.cos(a)*(112+(i%2)*35),y=230+Math.sin(a)*(60+(i%3)*12);dotMarkup+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${5+(i%3)}" fill="#fff" fill-opacity=".88"/>`}
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520"><defs><radialGradient id="b"><stop offset="0" stop-color="#fff" stop-opacity=".30"/><stop offset=".43" stop-color="${c}" stop-opacity=".42"/><stop offset="1" stop-color="#03101a"/></radialGradient><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${c}"/><stop offset=".55" stop-color="${accent}"/><stop offset="1" stop-color="#102534"/></linearGradient><filter id="s"><feGaussianBlur stdDeviation="18"/></filter></defs><rect width="520" height="520" rx="58" fill="url(#b)"/>${scene}<circle cx="260" cy="230" r="150" fill="${c}" opacity=".14" filter="url(#s)"/>${orbitMarkup}${dotMarkup}<circle cx="260" cy="230" r="77" fill="url(#g)" stroke="white" stroke-opacity=".45" stroke-width="3"/><circle cx="235" cy="207" r="20" fill="#fff" opacity=".20"/><text x="260" y="249" text-anchor="middle" font-family="Arial,sans-serif" font-size="76" font-weight="700" fill="white">${e.s}</text><text x="38" y="62" font-family="Arial,sans-serif" font-size="31" font-weight="700" fill="white" opacity=".92">${e.n}</text><text x="260" y="449" text-anchor="middle" font-family="Arial,sans-serif" font-size="27" font-weight="600" fill="white">${e.en}</text><text x="260" y="482" text-anchor="middle" font-family="Arial,sans-serif" font-size="19" fill="white" opacity=".72">${e.mass}</text></svg>`;
 const out="data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(svg);visualCache.set(e.n,out);return out;
}
function applyLanguage(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 $("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));$("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
 buildFilters();renderTable();buildLegend();buildFamilies();fillSelects();updateOpenModal();updateQuizLanguage();
}
let filter="all",search="";
function buildFilters(){
 const host=$("#filters");host.innerHTML="";
 [["all","#72d9ff"],["favorites","#ffd76a"],...catOrder.map(k=>[k,cats[k].color])].forEach(([k,c])=>{const b=document.createElement("button");b.className="filter-chip"+(filter===k?" active":"");b.style.setProperty("--chip",c);b.innerHTML=`<i></i>${k==="all"?t("all"):k==="favorites"?"★ "+t("favorites"):cats[k][lang]}`;b.onclick=()=>{filter=k;buildFilters();renderTable()};host.append(b)});
}
function matches(e){
 const q=search.trim().toLowerCase();const catOk=filter==="all"||(filter==="favorites"?favorites.has(e.n):e.category===filter);if(!catOk)return false;if(!q)return true;
 return e.s.toLowerCase().includes(q)||e.en.toLowerCase().includes(q)||e.ar.includes(search.trim())||String(e.n)===q;
}
function renderTable(){
 const host=$("#periodicGrid");host.innerHTML="";
 const marker1=document.createElement("div");marker1.className="series-marker";marker1.style.gridColumn="3";marker1.style.gridRow="6";marker1.textContent="57–71";host.append(marker1);
 const marker2=document.createElement("div");marker2.className="series-marker";marker2.style.gridColumn="3";marker2.style.gridRow="7";marker2.textContent="89–103";host.append(marker2);
 let shown=0;
 elements.forEach((e,i)=>{const p=gridPos(e),ok=matches(e),anim=animationType(e);if(ok)shown++;const b=document.createElement("button");b.type="button";b.className=`element-card anim-${anim}`+(ok?" hit":" dim");b.style.gridColumn=String(p.col);b.style.gridRow=String(p.row);b.style.setProperty("--element",cats[e.category].color);b.style.setProperty("--i",String(i));b.style.setProperty("--motion",String((e.n%7)+1));b.dataset.n=e.n;b.title=`${localName(e)} • ${e.s} • ${e.n}`;b.innerHTML=`<span class="atomic-num">${e.n}</span><img class="el-thumb" loading="lazy" src="${visual(e)}" alt=""><strong class="el-symbol">${e.s}</strong><span class="el-name">${localName(e)}</span>${favorites.has(e.n)?'<span class="favorite-indicator" aria-label="favorite">★</span>':""}`;b.onclick=()=>openElement(e);host.append(b)});
 $("#visibleCount").textContent=shown;
}
function buildLegend(){const h=$("#legend");h.innerHTML="";catOrder.forEach(k=>{const b=document.createElement("button");b.type="button";b.style.setProperty("--legend",cats[k].color);b.innerHTML=`<i></i>${cats[k][lang]}`;b.onclick=()=>{filter=k;buildFilters();renderTable();window.scrollTo({top:$("#exploreView").offsetTop-100,behavior:"smooth"})};h.append(b)})}
function buildFamilies(){const h=$("#familyGrid");h.innerHTML="";catOrder.forEach(k=>{const card=document.createElement("article");card.className="family-card";card.style.setProperty("--family",cats[k].color);card.innerHTML=`<div class="family-dot"></div><h3>${cats[k][lang]}</h3><p>${categoryText[k][lang]}</p>`;h.append(card)})}
function optionLabel(e){return `${e.s} — ${localName(e)}`}
function fillSelects(){
 ["compareA","compareB","combineA","combineB"].forEach((id,idx)=>{const s=$("#"+id),value=s.value;s.innerHTML=elements.map(e=>`<option value="${e.n}">${optionLabel(e)}</option>`).join("");if(value)s.value=value;else s.selectedIndex=idx%2});
}
let openN=null;
function openElement(e){openN=e.n;$("#elementModal").classList.add("open");$("#elementModal").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";updateOpenModal()}
function updateOpenModal(){if(!openN)return;const e=elements[openN-1],anim=animationType(e),wrap=$("#elementVisualWrap"),fav=$("#favoriteElementBtn");$("#elementVisual").src=visual(e);$("#elementVisual").alt=localName(e);wrap.className=`element-visual-wrap anim-${anim}`;$("#elementAnimationBtn").innerHTML=`⏸ <span>${t("pauseAnimation")}</span>`;$("#detailNumber").textContent="#"+e.n;$("#detailCategory").textContent=catName(e);$("#detailCategory").style.borderColor=cats[e.category].color;$("#detailSymbol").textContent=e.s;$("#detailName").textContent=localName(e);$("#detailEnglish").textContent=lang==="ar"?e.en:e.ar;$("#detailAtomic").textContent=e.n;$("#detailMass").textContent=e.mass;$("#detailState").textContent=stateName(e);$("#detailPosition").textContent=e.group?`${t("period")} ${e.period} • ${t("group")} ${e.group}`:`${t("period")} ${e.period} • ${t("series")}`;$("#detailDescription").textContent=description(e);$("#detailUses").textContent=useText(e);fav.classList.toggle("active",favorites.has(e.n));fav.innerHTML=`${favorites.has(e.n)?"★":"☆"} <span>${t("favorite")}</span>`}
function closeModal(){openN=null;$("#elementModal").classList.remove("open");$("#elementModal").setAttribute("aria-hidden","true");document.body.style.overflow=""}
qa("[data-close-modal]").forEach(x=>x.addEventListener("click",closeModal));document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
$("#elementAnimationBtn").onclick=()=>{const wrap=$("#elementVisualWrap"),paused=wrap.classList.toggle("paused");$("#elementAnimationBtn").innerHTML=`${paused?"▶":"⏸"} <span>${t(paused?"playAnimation":"pauseAnimation")}</span>`};
$("#favoriteElementBtn").onclick=()=>{if(!openN)return;favorites.has(openN)?favorites.delete(openN):favorites.add(openN);saveFavorites();updateOpenModal();renderTable();buildFilters()};
$("#compareFromModal").onclick=()=>{if(!openN)return;$("#compareA").value=openN;closeModal();$("#compareA").scrollIntoView({behavior:"smooth",block:"center"})};

function mini(e){return`<div class="mini-element"><b>${e.s} • ${localName(e)}</b><span>#${e.n} • ${e.mass}</span><span>${catName(e)}</span><span>${stateName(e)} • ${e.group?t("group")+" "+e.group:t("series")}</span></div>`}
$("#compareBtn").onclick=()=>{const a=elements[+$("#compareA").value-1],b=elements[+$("#compareB").value-1];$("#compareResult").innerHTML=a&&b?mini(a)+mini(b):t("compareEmpty")};

const compounds={
 "1-8":["H₂O","Water","ماء"],"11-17":["NaCl","Sodium chloride","كلوريد الصوديوم"],"6-8":["CO₂","Carbon dioxide","ثاني أكسيد الكربون"],"12-8":["MgO","Magnesium oxide","أكسيد المغنيسيوم"],"20-8":["CaO","Calcium oxide","أكسيد الكالسيوم"],"26-8":["Fe₂O₃","Iron(III) oxide","أكسيد الحديد الثلاثي"],"7-1":["NH₃","Ammonia","أمونيا"],"19-17":["KCl","Potassium chloride","كلوريد البوتاسيوم"],"1-17":["HCl","Hydrogen chloride","كلوريد الهيدروجين"],"20-17":["CaCl₂","Calcium chloride","كلوريد الكالسيوم"],"13-8":["Al₂O₃","Aluminium oxide","أكسيد الألومنيوم"],"14-8":["SiO₂","Silicon dioxide","ثاني أكسيد السيليكون"]
};
function pairKey(a,b){return compounds[`${a}-${b}`]?`${a}-${b}`:`${b}-${a}`}
$("#combineBtn").onclick=()=>{const a=+$("#combineA").value,b=+$("#combineB").value,key=pairKey(a,b),c=compounds[key];$("#combineResult").innerHTML=c?`<strong>${c[0]}</strong><br>${t("compoundIntro")}: ${lang==="ar"?c[2]:c[1]}.`:`<span>${t("noCompound")}</span>`};

let quiz={started:false,score:0,total:0,current:null,answered:false,type:null};
function shuffle(a){return a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1])}
function newQuiz(){
 quiz.started=true;quiz.answered=false;quiz.current=elements[Math.floor(Math.random()*elements.length)];quiz.type=["name","symbol","category"][Math.floor(Math.random()*3)];
 const e=quiz.current;let question,correct,pool;
 if(quiz.type==="name"){question=`${t("quizName")} ${e.s}`;correct=localName(e);pool=elements.filter(x=>x.n!==e.n).map(localName)}
 else if(quiz.type==="symbol"){question=`${t("quizSymbol")} ${localName(e)}`;correct=e.s;pool=elements.filter(x=>x.n!==e.n).map(x=>x.s)}
 else{question=`${t("quizCategory")} ${localName(e)}`;correct=catName(e);pool=catOrder.filter(k=>k!==e.category).map(k=>cats[k][lang])}
 const opts=shuffle([correct,...shuffle(pool).slice(0,3)]);$("#quizQuestion").textContent=question;$("#quizAnswers").innerHTML="";opts.forEach(o=>{const b=document.createElement("button");b.className="quiz-answer";b.textContent=o;b.onclick=()=>answerQuiz(b,o,correct);$("#quizAnswers").append(b)});$("#quizFeedback").textContent="";$("#nextQuizBtn").textContent=t("next");$("#quizScore").textContent=`${quiz.score} / ${quiz.total}`;
}
function answerQuiz(btn,val,correct){if(quiz.answered)return;quiz.answered=true;quiz.total++;const ok=val===correct;if(ok)quiz.score++;qa(".quiz-answer").forEach(b=>{b.disabled=true;if(b.textContent===correct)b.classList.add("correct")});if(!ok)btn.classList.add("wrong");$("#quizFeedback").textContent=ok?"✅ "+t("correct"):"✦ "+t("wrong")+" — "+correct;$("#quizScore").textContent=`${quiz.score} / ${quiz.total}`}
function updateQuizLanguage(){if(!quiz.started){$("#quizQuestion").textContent=lang==="ar"?"جاهز؟":"Ready?";$("#nextQuizBtn").textContent=t("startQuiz");return}newQuiz()}
$("#nextQuizBtn").onclick=newQuiz;

qa(".mode").forEach(b=>b.onclick=()=>{qa(".mode").forEach(x=>x.classList.toggle("active",x===b));qa(".mode-view").forEach(v=>v.classList.remove("active"));$("#"+b.dataset.mode+"View").classList.add("active")});
$("#searchInput").addEventListener("input",e=>{search=e.target.value;renderTable()});$("#clearSearch").onclick=()=>{$("#searchInput").value="";search="";renderTable()};
$("#randomElementBtn").onclick=()=>{const e=elements[Math.floor(Math.random()*elements.length)];openElement(e)};
$("#backBtn").onclick=()=>location.href="../";
window.addEventListener("storage",event=>{if(event.key==="pythagorasi_language"){lang=event.newValue==="ar"?"ar":"en";applyLanguage()}});
applyLanguage();
})();