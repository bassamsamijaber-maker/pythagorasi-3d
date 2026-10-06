import {acidsTopic,acidQuestions,topicMatches} from "./learning-content.js?v=89";
import {CURRICULUM_DATA,CURRICULUM_SUBJECTS} from "./curriculum-v97.js?v=98.2";
/* Classora learning hub: bilingual content, local practice, no external AI service. */
export const scienceTopics=[
 acidsTopic,
 {id:'matter',title:['حالات المادة','States of matter'],summary:['شوف كيف الجسيمات بتتحرك في الصلب والسائل والغاز.','See how particles move in solids, liquids and gases.'],lesson:['المادة تتكون من جسيمات. في الصلب تهتز الجسيمات حول مواضع ثابتة، وفي السائل تبقى قريبة وتتحرك حول بعضها، وفي الغاز تكون متباعدة وتتحرك بحرية. إضافة الطاقة قد تغيّر الحالة.','Matter is made of particles. In a solid, particles vibrate around fixed positions. In a liquid, they remain close but move past each other. In a gas, particles are far apart and move freely. Adding energy can change the state.'],example:['الانصهار: صلب ← سائل. التبخر: سائل ← غاز. التكاثف: غاز ← سائل.','Melting: solid → liquid. Evaporation: liquid → gas. Condensation: gas → liquid.'],icon:'atom'},
 {id:'motion',title:['القوة والحركة','Forces & motion'],summary:['المسافة والزمن والسرعة، خطوة بخطوة.','Distance, time and speed, step by step.'],lesson:['القوة دفع أو سحب وقد تغيّر سرعة الجسم أو اتجاهه. السرعة المتوسطة تساوي المسافة الكلية مقسومة على الزمن الكلي. لا تنسَ الوحدات.','A force is a push or pull and can change an object’s speed or direction. Average speed equals total distance divided by total time. Always include units.'],example:['مسافة 100 متر خلال 20 ثانية: السرعة = 100 ÷ 20 = 5 م/ث.','100 metres in 20 seconds: speed = 100 ÷ 20 = 5 m/s.'],icon:'motion'},
 {id:'atoms',title:['الذرة والعناصر','Atoms & elements'],summary:['افهم البروتونات والنواة والعدد الذري.','Understand protons, the nucleus and atomic number.'],lesson:['النواة تحتوي بروتونات موجبة، وعادةً نيوترونات متعادلة. الإلكترونات سالبة وتوجد حول النواة. عدد البروتونات هو العدد الذري ويحدد نوع العنصر. الذرة المتعادلة فيها عدد متساوٍ من البروتونات والإلكترونات.','The nucleus contains positive protons and usually neutral neutrons. Negative electrons occupy the region around it. The number of protons is the atomic number and defines the element. A neutral atom has equal numbers of protons and electrons.'],example:['الكربون عدده الذري 6، يعني فيه 6 بروتونات. ذرة الكربون المتعادلة فيها 6 إلكترونات.','Carbon has atomic number 6, so it has 6 protons. A neutral carbon atom also has 6 electrons.'],icon:'atom'},
 {id:'plants',title:['البناء الضوئي','Photosynthesis'],summary:['كيف النباتات بتحوّل الضوء لطاقة كيميائية.','How plants turn light into chemical energy.'],lesson:['في البناء الضوئي، تستخدم النباتات طاقة الضوء لتحويل الماء وثاني أكسيد الكربون إلى سكريات، وينطلق الأكسجين. الكلوروفيل يساعد على امتصاص الضوء. النبات يتنفس أيضًا.','In photosynthesis, plants use light energy to turn water and carbon dioxide into sugars, releasing oxygen. Chlorophyll helps absorb light. Plants also carry out cellular respiration.'],example:['ضوء + ماء + ثاني أكسيد الكربون → سكريات + أكسجين.','Light + water + carbon dioxide → sugars + oxygen.'],icon:'leaf'},
 {id:'body',title:['جسم الإنسان','Human body'],summary:['اربط كل عضو بوظيفته.','Connect each organ with its function.'],lesson:['القلب يضخ الدم. الرئتان تتبادلان الأكسجين وثاني أكسيد الكربون مع الدم. الجهاز الهضمي يحلل الطعام، والأمعاء الدقيقة تمتص معظم المغذيات. هذه الأجهزة تعمل معًا لتزويد الخلايا بما تحتاجه.','The heart pumps blood. The lungs exchange oxygen and carbon dioxide with the blood. The digestive system breaks down food, and the small intestine absorbs most nutrients. These systems work together to supply cells.'],example:['الأكسجين يدخل الرئتين، ينتقل إلى الدم ثم يصل للخلايا.','Oxygen enters the lungs, passes into the blood and travels to cells.'],icon:'heart'},
 {id:'energy',title:['الطاقة وتحولاتها','Energy & transformations'],summary:['تتبّع الطاقة قبل التغيير وبعده.','Track energy before and after a change.'],lesson:['الطاقة تتحول بين أشكال مثل الحركية والحرارية والكيميائية والكهربائية. الطاقة الكلية محفوظة في نظام معزول. عند تشغيل الأجهزة، يتحول جزء من الطاقة عادةً إلى حرارة تنتقل للمحيط.','Energy changes between forms such as kinetic, thermal, chemical and electrical energy. Total energy is conserved in an isolated system. Devices commonly transfer some energy to their surroundings as heat.'],example:['المصباح: طاقة كهربائية → ضوء وحرارة. البطارية تخزن طاقة كيميائية.','Lamp: electrical energy → light and heat. A battery stores chemical energy.'],icon:'bolt'}
];

// Shared periodic-table facts used to generate fresh science exam and competition questions.
// Tuple: atomic number, symbol, English name, Arabic name, period, group (0 = f-block).
export const periodicElements=[[1,"H","Hydrogen","هيدروجين",1,1],[2,"He","Helium","هيليوم",1,18],[3,"Li","Lithium","ليثيوم",2,1],[4,"Be","Beryllium","بيريليوم",2,2],[5,"B","Boron","بورون",2,13],[6,"C","Carbon","كربون",2,14],[7,"N","Nitrogen","نيتروجين",2,15],[8,"O","Oxygen","أكسجين",2,16],[9,"F","Fluorine","فلور",2,17],[10,"Ne","Neon","نيون",2,18],[11,"Na","Sodium","صوديوم",3,1],[12,"Mg","Magnesium","مغنيسيوم",3,2],[13,"Al","Aluminium","ألومنيوم",3,13],[14,"Si","Silicon","سيليكون",3,14],[15,"P","Phosphorus","فوسفور",3,15],[16,"S","Sulfur","كبريت",3,16],[17,"Cl","Chlorine","كلور",3,17],[18,"Ar","Argon","أرجون",3,18],[19,"K","Potassium","بوتاسيوم",4,1],[20,"Ca","Calcium","كالسيوم",4,2],[21,"Sc","Scandium","سكانديوم",4,3],[22,"Ti","Titanium","تيتانيوم",4,4],[23,"V","Vanadium","فاناديوم",4,5],[24,"Cr","Chromium","كروم",4,6],[25,"Mn","Manganese","منغنيز",4,7],[26,"Fe","Iron","حديد",4,8],[27,"Co","Cobalt","كوبالت",4,9],[28,"Ni","Nickel","نيكل",4,10],[29,"Cu","Copper","نحاس",4,11],[30,"Zn","Zinc","زنك",4,12],[31,"Ga","Gallium","غاليوم",4,13],[32,"Ge","Germanium","جرمانيوم",4,14],[33,"As","Arsenic","زرنيخ",4,15],[34,"Se","Selenium","سيلينيوم",4,16],[35,"Br","Bromine","بروم",4,17],[36,"Kr","Krypton","كريبتون",4,18],[37,"Rb","Rubidium","روبيديوم",5,1],[38,"Sr","Strontium","سترونشيوم",5,2],[39,"Y","Yttrium","إيتريوم",5,3],[40,"Zr","Zirconium","زركونيوم",5,4],[41,"Nb","Niobium","نيوبيوم",5,5],[42,"Mo","Molybdenum","موليبدينوم",5,6],[43,"Tc","Technetium","تكنيتيوم",5,7],[44,"Ru","Ruthenium","روثينيوم",5,8],[45,"Rh","Rhodium","روديوم",5,9],[46,"Pd","Palladium","بلاديوم",5,10],[47,"Ag","Silver","فضة",5,11],[48,"Cd","Cadmium","كادميوم",5,12],[49,"In","Indium","إنديوم",5,13],[50,"Sn","Tin","قصدير",5,14],[51,"Sb","Antimony","أنتيمون",5,15],[52,"Te","Tellurium","تيلوريوم",5,16],[53,"I","Iodine","يود",5,17],[54,"Xe","Xenon","زينون",5,18],[55,"Cs","Cesium","سيزيوم",6,1],[56,"Ba","Barium","باريوم",6,2],[57,"La","Lanthanum","لانثانوم",6,0],[58,"Ce","Cerium","سيريوم",6,0],[59,"Pr","Praseodymium","براسيوديميوم",6,0],[60,"Nd","Neodymium","نيوديميوم",6,0],[61,"Pm","Promethium","بروميثيوم",6,0],[62,"Sm","Samarium","ساماريوم",6,0],[63,"Eu","Europium","يوروبيوم",6,0],[64,"Gd","Gadolinium","غادولينيوم",6,0],[65,"Tb","Terbium","تيربيوم",6,0],[66,"Dy","Dysprosium","ديسبروسيوم",6,0],[67,"Ho","Holmium","هولميوم",6,0],[68,"Er","Erbium","إربيوم",6,0],[69,"Tm","Thulium","ثوليوم",6,0],[70,"Yb","Ytterbium","إيتربيوم",6,0],[71,"Lu","Lutetium","لوتيتيوم",6,0],[72,"Hf","Hafnium","هافنيوم",6,4],[73,"Ta","Tantalum","تانتالوم",6,5],[74,"W","Tungsten","تنغستن",6,6],[75,"Re","Rhenium","رينيوم",6,7],[76,"Os","Osmium","أوزميوم",6,8],[77,"Ir","Iridium","إيريديوم",6,9],[78,"Pt","Platinum","بلاتين",6,10],[79,"Au","Gold","ذهب",6,11],[80,"Hg","Mercury","زئبق",6,12],[81,"Tl","Thallium","ثاليوم",6,13],[82,"Pb","Lead","رصاص",6,14],[83,"Bi","Bismuth","بزموت",6,15],[84,"Po","Polonium","بولونيوم",6,16],[85,"At","Astatine","أستاتين",6,17],[86,"Rn","Radon","رادون",6,18],[87,"Fr","Francium","فرانسيوم",7,1],[88,"Ra","Radium","راديوم",7,2],[89,"Ac","Actinium","أكتينيوم",7,0],[90,"Th","Thorium","ثوريوم",7,0],[91,"Pa","Protactinium","بروتكتينيوم",7,0],[92,"U","Uranium","يورانيوم",7,0],[93,"Np","Neptunium","نبتونيوم",7,0],[94,"Pu","Plutonium","بلوتونيوم",7,0],[95,"Am","Americium","أمريسيوم",7,0],[96,"Cm","Curium","كوريوم",7,0],[97,"Bk","Berkelium","بركيليوم",7,0],[98,"Cf","Californium","كاليفورنيوم",7,0],[99,"Es","Einsteinium","أينشتينيوم",7,0],[100,"Fm","Fermium","فيرميوم",7,0],[101,"Md","Mendelevium","مندليفيوم",7,0],[102,"No","Nobelium","نوبليوم",7,0],[103,"Lr","Lawrencium","لورنسيوم",7,0],[104,"Rf","Rutherfordium","رذرفورديوم",7,4],[105,"Db","Dubnium","دوبنيوم",7,5],[106,"Sg","Seaborgium","سيبورغيوم",7,6],[107,"Bh","Bohrium","بوهريوم",7,7],[108,"Hs","Hassium","هاسيوم",7,8],[109,"Mt","Meitnerium","مايتنريوم",7,9],[110,"Ds","Darmstadtium","دارمشتاتيوم",7,10],[111,"Rg","Roentgenium","رونتغينيوم",7,11],[112,"Cn","Copernicium","كوبرنيسيوم",7,12],[113,"Nh","Nihonium","نيهونيوم",7,13],[114,"Fl","Flerovium","فليروفيوم",7,14],[115,"Mc","Moscovium","موسكوفيوم",7,15],[116,"Lv","Livermorium","ليفرموريوم",7,16],[117,"Ts","Tennessine","تينيسين",7,17],[118,"Og","Oganesson","أوغانيسون",7,18]];
const periodicFamilies={
 alkali:["الفلزات القلوية","Alkali metals"],alkaline:["الفلزات القلوية الترابية","Alkaline earth metals"],
 transition:["الفلزات الانتقالية","Transition metals"],post:["فلزات بعد انتقالية","Post-transition metals"],
 metalloid:["أشباه الفلزات","Metalloids"],nonmetal:["اللافلزات","Nonmetals"],halogen:["الهالوجينات","Halogens"],
 noble:["الغازات النبيلة","Noble gases"],lanthanide:["اللانثانيدات","Lanthanides"],actinide:["الأكتينيدات","Actinides"]
};
const familySets={
 alkali:new Set([3,11,19,37,55,87]),alkaline:new Set([4,12,20,38,56,88]),
 metalloid:new Set([5,14,32,33,51,52]),nonmetal:new Set([1,6,7,8,15,16,34]),
 halogen:new Set([9,17,35,53,85,117]),noble:new Set([2,10,18,36,54,86,118]),
 post:new Set([13,31,49,50,81,82,83,84,113,114,115,116])
};
function periodicFamilyKey(e){
 const n=e[0];if(n>=57&&n<=71)return"lanthanide";if(n>=89&&n<=103)return"actinide";
 for(const key of["alkali","alkaline","metalloid","nonmetal","halogen","noble","post"])if(familySets[key].has(n))return key;
 return"transition";
}
function periodicName(e,lang){return lang==="ar"?e[3]:e[2]}
function periodicFamilyName(key,lang){const pair=periodicFamilies[key]||periodicFamilies.transition;return pair[lang==="ar"?0:1]}
function periodicElementByAny(value){
 const s=String(value??"").trim().toLowerCase();
 return periodicElements.find(e=>String(e[0])===s||e[1].toLowerCase()===s||e[2].toLowerCase()===s||e[3].toLowerCase()===s)||null;
}

// Each answer is a stable index: switching language cannot change correctness.
const facts=[
 ['matter',['أي حالة لها شكل وحجم ثابتان؟','Which state has a fixed shape and volume?'],[['الصلب','Solid'],['السائل','Liquid'],['الغاز','Gas'],['كل الحالات','All states']],0,['الجسيمات في الصلب تهتز حول مواضع ثابتة.','Particles in a solid vibrate around fixed positions.']],
 ['matter',['ما اسم تحول السائل إلى غاز؟','What is the change from liquid to gas called?'],[['التجمد','Freezing'],['التكاثف','Condensation'],['التبخر','Evaporation'],['الانصهار','Melting']],2,['التبخر ينقل المادة من الحالة السائلة إلى الغازية.','Evaporation changes a liquid into a gas.']],
 ['matter',['أي وصف يناسب جسيمات الغاز؟','Which description fits gas particles?'],[['متباعدة وتتحرك بحرية','Far apart and moving freely'],['لا تتحرك أبدًا','Never moving'],['ثابتة ومتراصة','Fixed and tightly packed'],['ليست مادة','Not matter']],0,['جسيمات الغاز تتحرك وتملأ الحيز المتاح.','Gas particles move and fill the available space.']],
 ['matter',['قطرات على كوب بارد: ما العملية؟','Droplets on a cold glass: which process?'],[['تبخر','Evaporation'],['تكاثف','Condensation'],['انصهار','Melting'],['احتراق','Combustion']],1,['بخار الماء يبرد ويتكاثف إلى سائل.','Water vapour cools and condenses into a liquid.']],
 ['motion',['ما قانون السرعة المتوسطة؟','What is the formula for average speed?'],[['المسافة ÷ الزمن','Distance ÷ time'],['المسافة × الزمن','Distance × time'],['الزمن ÷ المسافة','Time ÷ distance'],['القوة × الزمن','Force × time']],0,['نقسم المسافة الكلية على الزمن الكلي.','Divide total distance by total time.']],
 ['motion',['ما وحدة السرعة؟','Which is a unit of speed?'],[['كغم','kg'],['متر','m'],['م/ث','m/s'],['ثانية','s']],2,['السرعة هي مسافة لكل وحدة زمن.','Speed is distance per unit of time.']],
 ['motion',['القوة هي…','A force is…'],[['لون الجسم','An object’s colour'],['دفع أو سحب','A push or pull'],['الزمن فقط','Only time'],['درجة الحرارة','Temperature']],1,['قد تغيّر القوة حركة الجسم أو شكله.','A force can change an object’s motion or shape.']],
 ['motion',['نفس المسافة بزمن أقل تعني…','The same distance in less time means…'],[['سرعة أكبر','Greater average speed'],['سرعة أقل','Lower average speed'],['مسافة صفر','Zero distance'],['توقف الجسم','The object stopped']],0,['عندما يقل المقام وتبقى المسافة ثابتة، تزيد السرعة.','For a fixed distance, dividing by a smaller time gives a greater speed.']],
 ['atoms',['ما الذي يحدد نوع العنصر؟','What defines an element?'],[['عدد البروتونات','Number of protons'],['حجم العينة','Sample size'],['درجة حرارتها','Temperature'],['عدد النيوترونات فقط','Only the number of neutrons']],0,['عدد البروتونات هو العدد الذري.','The number of protons is the atomic number.']],
 ['atoms',['ما شحنة الإلكترون؟','What charge does an electron have?'],[['موجبة','Positive'],['متعادلة','Neutral'],['سالبة','Negative'],['تتغير يوميًا','Changes daily']],2,['الإلكترونات سالبة، والبروتونات موجبة.','Electrons are negative; protons are positive.']],
 ['atoms',['أين توجد البروتونات؟','Where are protons found?'],[['في النواة','In the nucleus'],['خارج الذرة','Outside the atom'],['داخل الإلكترونات','Inside electrons'],['لا توجد','They do not exist']],0,['البروتونات موجودة داخل نواة الذرة.','Protons are located in the atomic nucleus.']],
 ['atoms',['كم إلكترونًا في ذرة أكسجين متعادلة عددها الذري 8؟','How many electrons are in a neutral oxygen atom with atomic number 8?'],[['4','4'],['8','8'],['16','16'],['0','0']],1,['الذرة المتعادلة لديها إلكترونات بعدد البروتونات.','A neutral atom has as many electrons as protons.']],
 ['plants',['ما الغاز الذي تستخدمه النباتات في البناء الضوئي؟','Which gas do plants use in photosynthesis?'],[['ثاني أكسيد الكربون','Carbon dioxide'],['الهيليوم','Helium'],['النيون','Neon'],['الهيدروجين','Hydrogen']],0,['الماء وثاني أكسيد الكربون من المواد الداخلة.','Water and carbon dioxide are inputs.']],
 ['plants',['ما الغاز الذي ينطلق في البناء الضوئي؟','Which gas is released during photosynthesis?'],[['النيتروجين','Nitrogen'],['الأكسجين','Oxygen'],['الهيليوم','Helium'],['الميثان','Methane']],1,['ينطلق الأكسجين خلال البناء الضوئي.','Oxygen is released during photosynthesis.']],
 ['plants',['ما مصدر الطاقة للبناء الضوئي؟','What is the energy source for photosynthesis?'],[['الضوء','Light'],['التربة وحدها','Soil alone'],['الصوت','Sound'],['الملح','Salt']],0,['يمتص الكلوروفيل طاقة الضوء.','Chlorophyll absorbs light energy.']],
 ['plants',['هل تتنفس النباتات؟','Do plants carry out cellular respiration?'],[['نعم','Yes'],['لا','No'],['فقط عند قطعها','Only when cut'],['فقط دون جذور','Only without roots']],0,['النباتات تقوم بالتنفس الخلوي مثل باقي الكائنات الحية.','Plants carry out cellular respiration like other living organisms.']],
 ['body',['أي عضو يضخ الدم؟','Which organ pumps blood?'],[['القلب','Heart'],['المعدة','Stomach'],['الرئة','Lung'],['الجلد','Skin']],0,['القلب يضخ الدم عبر الأوعية الدموية.','The heart pumps blood through blood vessels.']],
 ['body',['ما وظيفة الرئتين الرئيسية؟','What is the main function of the lungs?'],[['هضم الطعام','Digesting food'],['تبادل الغازات','Gas exchange'],['ضخ الدم','Pumping blood'],['تخزين العظام','Storing bones']],1,['الرئتان تتبادلان الأكسجين وثاني أكسيد الكربون مع الدم.','Lungs exchange oxygen and carbon dioxide with the blood.']],
 ['body',['أين تمتص معظم المغذيات؟','Where are most nutrients absorbed?'],[['الأمعاء الدقيقة','Small intestine'],['القلب','Heart'],['الرئتان','Lungs'],['المريء','Oesophagus']],0,['معظم امتصاص المغذيات يحدث في الأمعاء الدقيقة.','Most nutrient absorption happens in the small intestine.']],
 ['body',['ما الذي ينقل الأكسجين إلى الخلايا؟','What carries oxygen to cells?'],[['العظام','Bones'],['الدم','Blood'],['الشعر','Hair'],['الطعام مباشرة','Food directly']],1,['الدم ينقل الأكسجين من الرئتين إلى أنحاء الجسم.','Blood transports oxygen from the lungs around the body.']],
 ['energy',['ما الطاقة المخزنة في البطارية؟','What energy is stored in a battery?'],[['كيميائية','Chemical'],['صوتية','Sound'],['حركية فقط','Only kinetic'],['ضوئية فقط','Only light']],0,['البطارية تخزن طاقة كيميائية تتحول أثناء استخدامها.','A battery stores chemical energy that is transformed during use.']],
 ['energy',['المصباح يحول الكهرباء إلى…','A lamp converts electrical energy into…'],[['ضوء وحرارة','Light and heat'],['مادة جديدة فقط','Only new matter'],['ماء','Water'],['لا شيء','Nothing']],0,['المصباح يصدر الضوء وينقل طاقة حرارية أيضًا.','A lamp emits light and also transfers thermal energy.']],
 ['energy',['طاقة جسم متحرك تسمى…','The energy of a moving object is…'],[['حركية','Kinetic'],['كيميائية فقط','Only chemical'],['لا توجد طاقة','No energy'],['نووية دائمًا','Always nuclear']],0,['الحركة مرتبطة بالطاقة الحركية.','Motion is associated with kinetic energy.']],
 ['energy',['الطاقة في نظام معزول…','Energy in an isolated system…'],[['محفوظة وتتحول','Is conserved and can change form'],['تختفي دائمًا','Always disappears'],['تتضاعف دائمًا','Always doubles'],['لا تتحول','Never changes form']],0,['يمكن أن تتغير أشكال الطاقة مع بقاء مجموعها ثابتًا.','Forms of energy can change while the total remains constant.']]
];
const pickLang=(pair,lang)=>pair[lang==='ar'?0:1];
const shuffled=items=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};

function uniquePeriodicChoices(correct,values){
 const c=String(correct),rest=shuffled([...new Set(values.map(String).filter(v=>v!==c))]);
 return shuffled([c,...rest.slice(0,3)]);
}
function periodicPrompt(kind,e,lang){
 const name=periodicName(e,lang),n=e[0],s=e[1],period=e[4],group=e[5],family=periodicFamilyName(periodicFamilyKey(e),lang);
 if(kind==="periodic_symbol_name")return lang==="ar"?`أي عنصر رمزه ${s}؟`:`Which element has the symbol ${s}?`;
 if(kind==="periodic_name_symbol")return lang==="ar"?`ما رمز عنصر ${name}؟`:`What is the symbol for ${name}?`;
 if(kind==="periodic_atomic_number")return lang==="ar"?`ما العدد الذري لعنصر ${name}؟`:`What is the atomic number of ${name}?`;
 if(kind==="periodic_number_name")return lang==="ar"?`ما العنصر الذي عدده الذري ${n}؟`:`Which element has atomic number ${n}?`;
 if(kind==="periodic_period")return lang==="ar"?`في أي دورة يقع عنصر ${name}؟`:`Which period contains ${name}?`;
 if(kind==="periodic_group")return lang==="ar"?`في أي مجموعة يقع عنصر ${name}؟`:`Which group contains ${name}?`;
 if(kind==="periodic_family")return lang==="ar"?`إلى أي عائلة ينتمي عنصر ${name}؟`:`Which family does ${name} belong to?`;
 return name;
}
function periodicQuestion(kind,e,lang){
 const name=periodicName(e,lang),n=String(e[0]),s=e[1],period=String(e[4]),group=String(e[5]),familyKey=periodicFamilyKey(e),family=periodicFamilyName(familyKey,lang);
 let answer,options,optionKind,explanation;
 if(kind==="periodic_symbol_name"||kind==="periodic_number_name"){
   answer=name;optionKind="elementName";options=uniquePeriodicChoices(answer,periodicElements.map(x=>periodicName(x,lang)));
   explanation=lang==="ar"?`${s} هو رمز ${name} وعدده الذري ${n}.`:`${s} is the symbol for ${name}, atomic number ${n}.`;
 }else if(kind==="periodic_name_symbol"){
   answer=s;optionKind="symbol";options=uniquePeriodicChoices(answer,periodicElements.map(x=>x[1]));
   explanation=lang==="ar"?`رمز ${name} هو ${s}.`:`The symbol for ${name} is ${s}.`;
 }else if(kind==="periodic_atomic_number"){
   answer=n;optionKind="number";options=uniquePeriodicChoices(answer,periodicElements.map(x=>x[0]));
   explanation=lang==="ar"?`العدد الذري لعنصر ${name} هو ${n}.`:`${name} has atomic number ${n}.`;
 }else if(kind==="periodic_period"){
   answer=period;optionKind="number";options=uniquePeriodicChoices(answer,[1,2,3,4,5,6,7]);
   explanation=lang==="ar"?`${name} يقع في الدورة ${period}.`:`${name} is in period ${period}.`;
 }else if(kind==="periodic_group"){
   answer=group;optionKind="number";options=uniquePeriodicChoices(answer,Array.from({length:18},(_,i)=>i+1));
   explanation=lang==="ar"?`${name} يقع في المجموعة ${group}.`:`${name} is in group ${group}.`;
 }else{
   answer=family;optionKind="family";options=uniquePeriodicChoices(answer,Object.keys(periodicFamilies).map(k=>periodicFamilyName(k,lang)));
   explanation=lang==="ar"?`${name} ينتمي إلى ${family}.`:`${name} belongs to the ${family} family.`;
 }
 return {id:`${kind}-${e[0]}`,topic:"periodic",topicKey:"science",questionKind:kind,elementNumber:e[0],optionKind,type:"mcq",prompt:periodicPrompt(kind,e,lang),options,answer,explanation,points:1000};
}
function periodicQuestionPool(lang="en"){
 const pool=[];
 for(const e of periodicElements){
   pool.push(periodicQuestion("periodic_symbol_name",e,lang),periodicQuestion("periodic_name_symbol",e,lang),periodicQuestion("periodic_atomic_number",e,lang),periodicQuestion("periodic_number_name",e,lang),periodicQuestion("periodic_period",e,lang),periodicQuestion("periodic_family",e,lang));
   if(e[5]>0)pool.push(periodicQuestion("periodic_group",e,lang));
 }
 return pool;
}

export function scienceLiveQuestions(count=10,lang='en',topic=''){
 const normalizedTopic=topic==="elements"||topic==="periodic-table"?"periodic":topic;
 const wanted=Math.max(1,Math.min(30,Number(count)||10));
 const baseFacts=key=>facts.filter(q=>!key||q[0]===key).map((q,i)=>({id:'science-'+q[0]+'-'+i,topic:q[0],topicKey:'science',questionKind:'general',type:'mcq',prompt:pickLang(q[1],lang),options:q[2].map(p=>pickLang(p,lang)),answer:pickLang(q[2][q[3]],lang),explanation:pickLang(q[4],lang),points:1000}));
 const motionPool=()=>{
   const pool=baseFacts('motion');
   for(let i=1;i<=60;i++){const speed=i+2,time=(i%6+2)*5,distance=speed*time;pool.push({id:'speed-'+i,topic:'motion',topicKey:'science',questionKind:'general',type:'mcq',prompt:lang==='ar'?`جسم يقطع ${distance} متر خلال ${time} ثانية. ما سرعته المتوسطة بالمتر/ثانية؟`:`An object travels ${distance} m in ${time} s. What is its average speed in m/s?`,options:[speed,speed+1,speed+3,Math.max(1,speed-1)].map(String),answer:String(speed),explanation:`${distance} ÷ ${time} = ${speed} ${lang==='ar'?'م/ث':'m/s'}`,points:1000})}
   return pool;
 };
 const finish=pool=>shuffled(pool).slice(0,wanted).map(q=>({...q,options:shuffled(q.options)}));
 if(normalizedTopic==='acids')return finish(acidQuestions(lang));
 if(normalizedTopic==='periodic')return finish(periodicQuestionPool(lang));
 if(normalizedTopic==='motion')return finish(motionPool());
 if(normalizedTopic==='atoms'){
   const conceptual=shuffled(baseFacts('atoms'));
   const periodic=shuffled(periodicQuestionPool(lang));
   const conceptCount=Math.min(conceptual.length,Math.max(1,Math.round(wanted*.4)));
   return shuffled([...conceptual.slice(0,conceptCount),...periodic.slice(0,Math.max(0,wanted-conceptCount))]).map(q=>({...q,options:shuffled(q.options)}));
 }
 if(normalizedTopic)return finish(baseFacts(normalizedTopic));
 // General science deliberately stays balanced instead of letting the much larger
 // periodic-table bank crowd out matter, motion, biology and energy.
 const general=shuffled([...baseFacts(),...acidQuestions(lang),...motionPool().filter(q=>q.id.startsWith('speed-'))]);
 const periodic=shuffled(periodicQuestionPool(lang));
 const periodicCount=Math.min(periodic.length,Math.max(1,Math.round(wanted*.4)));
 const generalCount=Math.max(0,wanted-periodicCount);
 return shuffled([...general.slice(0,generalCount),...periodic.slice(0,periodicCount)]).map(q=>({...q,options:shuffled(q.options)}));
}
const paths={
 math:'<path d="M4 20V4l16 16H4zM4 15h5v5"/>',atom:'<ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/><circle cx="12" cy="12" r="2"/>',book:'<path d="M3 5q5-2 9 1 4-3 9-1v15q-5-2-9 1-4-3-9-1zM12 6v15"/>',search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',settings:'<path d="M5 4v16M12 4v16M19 4v16M2 8h6M9 16h6M16 10h6"/>',chat:'<path d="M4 4h16v13H9l-5 4V4zM8 9h8M8 13h5"/>',shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6zM8 12l3 3 5-6"/>',bell:'<path d="M5 17h14l-2-4V9a5 5 0 0 0-10 0v4zM10 21h4"/>',user:'<circle cx="12" cy="7" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',download:'<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',trophy:'<path d="M7 3h10v6a5 5 0 0 1-10 0zM7 5H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4M12 14v6M7 21h10"/>',leaf:'<path d="M20 3C2 2 1 16 9 19s13-8 11-16zM4 22 16 9"/>',heart:'<path d="M12 21 3 12C-2 4 7 0 12 7c5-7 14-3 9 5z"/>',motion:'<path d="M2 8h8M2 16h5M7 12h15m-6-6 6 6-6 6"/>',bolt:'<path d="m14 2-10 12h8l-2 8 10-12h-8z"/>',photo:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="8" cy="9" r="2"/><path d="m3 18 6-5 4 3 4-6 4 8"/>',mic:'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9 8a3 3 0 0 1 6 0c0 3-3 2-3 5M12 17h.01"/>',trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7"/>',
 school:'<path d="m3 10 9-6 9 6-9 6-9-6zM5 13v5m14-5v5M8 15v5h8v-5"/>',
 chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
 folder:'<path d="M3 7h7l2 2h9v10H3z"/>',
 eye:'<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="2.5"/>',
 edit:'<path d="m4 20 4-1 11-11-3-3L5 16zM14 6l3 3"/>',
 lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
 warn:'<path d="M12 3 2 21h20L12 3zM12 9v5M12 18h.01"/>',
 check:'<path d="m4 12 5 5L20 6"/>',
 close:'<path d="M5 5l14 14M19 5 5 19"/>',
 bulb:'<path d="M9 18h6M10 22h4M8 14a7 7 0 1 1 8 0c-1 1-1 2-1 3H9c0-1 0-2-1-3z"/>',
 brain:'<path d="M9 4a4 4 0 0 0-4 4v1a4 4 0 0 0 0 7v1a3 3 0 0 0 5 2M15 4a4 4 0 0 1 4 4v1a4 4 0 0 1 0 7v1a3 3 0 0 1-5 2M12 4v16M8 9h4M12 14h4"/>',
 sparkle:'<path d="m12 2 2 6 6 2-6 2-2 6-2-6-6-2 6-2zM19 16l1 3 3 1-3 1-1 3-1-3-3-1 3-1z"/>',
 group:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M14 15a5 5 0 0 1 7 4v1"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
 inbox:'<path d="M4 4h16v16H4zM4 14h5l2 3h2l2-3h5"/>',
 play:'<path d="m8 5 11 7-11 7z"/>',
 pause:'<path d="M8 5v14M16 5v14"/>',
 flask:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 15h8"/>',
 dot:'<circle cx="12" cy="12" r="5"/>'
};
export function icon(name='book'){return `<svg class="classora-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.book}</svg>`}

const idafaPracticeExamples=[
 {mudaf:'كتابُ',mudafIlayh:'الطالبِ',sentence:'كتابُ الطالبِ جديدٌ',sentenceWords:['كتابُ','الطالبِ','جديدٌ'],pairIndexes:[0,1],parse:'كتابُ مضاف، والطالبِ مضاف إليه مجرور بالكسرة.'},
 {mudaf:'بابُ',mudafIlayh:'المدرسةِ',sentence:'بابُ المدرسةِ مفتوحٌ',sentenceWords:['بابُ','المدرسةِ','مفتوحٌ'],pairIndexes:[0,1],parse:'بابُ مضاف، والمدرسةِ مضاف إليه مجرور بالكسرة.'},
 {mudaf:'قلمُ',mudafIlayh:'المعلّمِ',sentence:'ضاعَ قلمُ المعلّمِ اليومَ',sentenceWords:['ضاعَ','قلمُ','المعلّمِ','اليومَ'],pairIndexes:[1,2],parse:'قلمُ مضاف، والمعلّمِ مضاف إليه مجرور بالكسرة.'},
 {mudaf:'حديقةُ',mudafIlayh:'البيتِ',sentence:'حديقةُ البيتِ جميلةٌ',sentenceWords:['حديقةُ','البيتِ','جميلةٌ'],pairIndexes:[0,1],parse:'حديقةُ مضاف، والبيتِ مضاف إليه مجرور بالكسرة.'},
 {mudaf:'نافذةَ',mudafIlayh:'الغرفةِ',sentence:'فتحتُ نافذةَ الغرفةِ صباحًا',sentenceWords:['فتحتُ','نافذةَ','الغرفةِ','صباحًا'],pairIndexes:[1,2],parse:'نافذةَ مضاف، والغرفةِ مضاف إليه مجرور بالكسرة.'},
 {mudaf:'مفتاحُ',mudafIlayh:'السيارةِ',sentence:'مفتاحُ السيارةِ على الطاولةِ',sentenceWords:['مفتاحُ','السيارةِ','على','الطاولةِ'],pairIndexes:[0,1],parse:'مفتاحُ مضاف، والسيارةِ مضاف إليه مجرور بالكسرة.'},
 {mudaf:'دفترُ',mudafIlayh:'الطالبةِ',sentence:'دفترُ الطالبةِ مرتبٌ',sentenceWords:['دفترُ','الطالبةِ','مرتبٌ'],pairIndexes:[0,1],parse:'دفترُ مضاف، والطالبةِ مضاف إليه مجرور بالكسرة.'},
 {mudaf:'ساحةُ',mudafIlayh:'المدرسةِ',sentence:'ازدحمتْ ساحةُ المدرسةِ صباحًا',sentenceWords:['ازدحمتْ','ساحةُ','المدرسةِ','صباحًا'],pairIndexes:[1,2],parse:'ساحةُ مضاف، والمدرسةِ مضاف إليه مجرور بالكسرة.'},
 {mudaf:'لونُ',mudafIlayh:'السماءِ',sentence:'لونُ السماءِ جميلٌ',sentenceWords:['لونُ','السماءِ','جميلٌ'],pairIndexes:[0,1],parse:'لونُ مضاف، والسماءِ مضاف إليه مجرور بالكسرة.'},
 {mudaf:'صوتُ',mudafIlayh:'المطرِ',sentence:'سمعتُ صوتَ المطرِ ليلًا',sentenceWords:['سمعتُ','صوتَ','المطرِ','ليلًا'],pairIndexes:[1,2],parse:'صوتَ مضاف منصوب بحسب موقعه، والمطرِ مضاف إليه مجرور بالكسرة.'}
];
function classoraShuffle(list){return [...list].sort(()=>Math.random()-.5)}
export function idafaLiveQuestions(count=10,lang='ar'){
 const ar=lang==='ar',bank=[];
 for(let i=0;i<idafaPracticeExamples.length;i++){
  const x=idafaPracticeExamples[i],others=idafaPracticeExamples.filter((_,n)=>n!==i);
  const mudafOptions=classoraShuffle([x.mudaf,x.mudafIlayh,others[0].mudafIlayh,others[1].mudaf]);
  const ilayhOptions=classoraShuffle([x.mudafIlayh,x.mudaf,others[1].mudafIlayh,others[2].mudaf]);
  const pair=x.mudaf+' '+x.mudafIlayh;
  const pairOptions=classoraShuffle([pair,x.mudaf+' '+others[0].mudafIlayh,others[1].mudaf+' '+x.mudafIlayh,others[2].mudaf+' '+others[3].mudafIlayh]);
  bank.push(
   {id:'idafa-m-'+i,prompt:ar?'في الجملة «'+x.sentence+'» ما المضاف؟':'In “'+x.sentence+'”, which word is the mudaf?',options:mudafOptions,answer:x.mudaf,explanation:ar?x.parse:'The first noun in the idafa is the mudaf.',subject:'arabic',topicKey:'idafa'},
   {id:'idafa-i-'+i,prompt:ar?'في الجملة «'+x.sentence+'» ما المضاف إليه؟':'In “'+x.sentence+'”, which word is the mudaf ilayh?',options:ilayhOptions,answer:x.mudafIlayh,explanation:ar?x.parse:'The second noun is the mudaf ilayh and is genitive.',subject:'arabic',topicKey:'idafa'},
   {id:'idafa-p-'+i,prompt:ar?'اختر تركيب الإضافة الصحيح من الجملة «'+x.sentence+'»':'Choose the correct idafa pair from “'+x.sentence+'”.',options:pairOptions,answer:pair,explanation:ar?x.parse:'The idafa pair is '+pair+'.',subject:'arabic',topicKey:'idafa'}
  );
 }
 bank.push(
  {id:'idafa-rule-1',prompt:ar?'ما حكم المضاف إليه؟':'What is the grammatical case of the mudaf ilayh?',options:ar?['مجرور','مرفوع دائمًا','منصوب دائمًا','مجزوم']:['Genitive','Always nominative','Always accusative','Jussive'],answer:ar?'مجرور':'Genitive',explanation:ar?'المضاف إليه يكون مجرورًا دائمًا.':'The mudaf ilayh is genitive.',subject:'arabic',topicKey:'idafa'},
  {id:'idafa-rule-2',prompt:ar?'أي عبارة صحيحة عن المضاف في الإضافة المعنوية؟':'Which statement is correct about the mudaf in a regular idafa?',options:ar?['لا يأخذ أل ولا تنوينًا','يجب أن يأخذ أل','يجب أن يكون مجرورًا دائمًا','يأخذ تنوينًا دائمًا']:['It normally takes neither al- nor tanween','It must take al-','It is always genitive','It always takes tanween'],answer:ar?'لا يأخذ أل ولا تنوينًا':'It normally takes neither al- nor tanween',explanation:ar?'المضاف في الإضافة المعنوية لا يأخذ أل ولا تنوينًا.':'In a regular idafa, the mudaf normally takes neither the definite article nor tanween.',subject:'arabic',topicKey:'idafa'}
 );
 const n=Math.max(1,Math.min(30,Number(count)||10)),out=[],pool=classoraShuffle(bank);
 while(out.length<n){if(!pool.length)pool.push(...classoraShuffle(bank));const q=pool.shift();out.push({...q,id:q.id+'-'+out.length})}
 return out;
}

const features=[['search','البحث في المواضيع والأدوات','Search topics and tools'],['science','قسم العلوم','Science section'],['scienceLab','مختبر الجسيمات','Particle lab'],['sciencePractice','تدريب واختبار العلوم','Science practice and self-test'],['scienceLive','مسابقات العلوم','Science live competitions'],['scienceExam','امتحانات صفية للعلوم','Science class exams'],['social','حساباتنا','Our accounts'],['desktopDock','شريط الكمبيوتر السفلي','Desktop bottom dock'],['motion','حركة البطاقات','Card animations']];
export function mountLearningHub(api){
 const L=(ar,en)=>api.language()==='ar'?ar:en,txt=p=>pickLang(p,api.language()),enabled=k=>api.flags()?.[k]!==false;
 let selected='all',dialog=null,quizState=null,renderOpen=null,searchTimer,selectedGrade=8;
 try{const g=Number(localStorage.getItem("classora_curriculum_grade")||8);if(CURRICULUM_DATA[g])selectedGrade=g}catch{}
 const node=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n};
 const button=(label,fn,cls='hub-button')=>{const b=node('button',cls,label);b.type='button';b.onclick=fn;return b};
 const hero=document.querySelector('.pythag-lobby-hero'),legacy=document.getElementById('lobbyLabCard').closest('section');
 const hub=node('section','learning-hub');hub.setAttribute('data-no-translate','');hero.before(hub);legacy.classList.add('hub-legacy');hero.classList.add('hub-legacy-hero');
 // Keep the established assistant and button handlers; reorganize their presentation.
 const assistant=document.querySelector('.lobby-ai-card');hub.after(assistant);assistant.classList.add('hub-assistant');
 const tools=node('section','hub-shared-tools');tools.setAttribute('data-no-translate','');assistant.after(tools);
 const accounts=button('',()=>openAccounts());accounts.id='settingsAccountsBtn';accounts.className='exam-secondary';accounts.setAttribute('data-no-translate','');document.querySelector('#settingsModal .settings-grid').append(accounts);
 const controls=node('section','admin-chat-features hub-admin');controls.id='adminLearningFeatures';controls.setAttribute('data-no-translate','');document.getElementById('adminChatFeatures').after(controls);
 const close=()=>{if(dialog){dialog.close();dialog=null;renderOpen=null;quizState=null}};
 function show(title,render){close();dialog=api.dialog(title);dialog.body.setAttribute('data-no-translate','');dialog.body.classList.add('hub-dialog-body');renderOpen=render;render(dialog.body);dialog.dialog.addEventListener('close',()=>{dialog=null;renderOpen=null;quizState=null},{once:true});}
 function openAccounts(){if(!enabled('social'))return;show(L('حساباتنا','Our accounts'),body=>{body.append(node('p','hub-muted',L('تابع أخبار كلاسورا وكل جديد.','Follow Classora for news and new activities.')));const a=node('a','hub-social-link');a.href='https://www.instagram.com/classora_app?stkn=ZzJlNDFma3Vnb29j&utm_source=qr';a.target='_blank';a.rel='noopener noreferrer';a.innerHTML=icon('instagram');a.append(node('span','',L('صفحتنا على الانستا','Our Instagram page')));body.append(a)})}
 function launch(action){close();api.action(action)}
 const curriculumTopicTitle=x=>typeof x==="string"?x:x?.title||"";
 const curriculumSubjectIcon=s=>({math:"math",science:"atom",arabic:"book",english:"book",history:"school",geography:"globe"}[s]||"book");
 const curriculumSubjectName=s=>{const m=CURRICULUM_SUBJECTS[s];return m?L(m.ar,m.en):s};
 const curriculumTopics=(g,s)=>(CURRICULUM_DATA[g]?.[s]||[]);
 function openCurriculum(subject,topicRef=""){
  const curr=window.classoraCurriculum;
  if(curr?.openAt){curr.openAt(selectedGrade,subject,topicRef);return}
  api.toast?.(L("جاري تجهيز المنهاج، جرّب بعد لحظة.","Curriculum is loading. Try again in a moment."));
 }
 function makeCurriculumShelf(){
  const section=node("section","hub-curriculum-shelf"),head=node("div","hub-curriculum-head");
  const copy=node("div");copy.append(node("span","hub-kicker","CLASSORA / "+L("المنهاج الدراسي","CURRICULUM")),node("h2","",L("اختار صفك، وبعدها المادة","Choose your grade, then a subject")),node("p","hub-muted",L("سابع لحد عاشر. العربي قواعد فقط، والإنجليزي Grammar فقط. كل موضوع فيه شرح وتدريب وامتحان ومسابقة.","Grades 7–10. Arabic is grammar-only and English is grammar-only. Every topic has learning, practice, an exam and live competition.")));
  const grades=node("div","hub-grade-tabs");
  [7,8,9,10].forEach(g=>{const b=button(String(g),()=>{selectedGrade=g;try{localStorage.setItem("classora_curriculum_grade",String(g))}catch{}render()},"hub-grade-button");b.classList.toggle("active",g===selectedGrade);b.setAttribute("aria-pressed",String(g===selectedGrade));b.title=L("الصف "+g,"Grade "+g);grades.append(b)});
  head.append(copy,grades);section.append(head);
  const grid=node("div","hub-curriculum-subjects");
  const keys=Object.keys(CURRICULUM_DATA[selectedGrade]||{}).filter(s=>CURRICULUM_SUBJECTS[s]&&(selected==="all"||selected===s));
  keys.forEach(s=>{
   const topics=curriculumTopics(selectedGrade,s),card=node("article","hub-curriculum-subject "+s),main=button("",()=>openCurriculum(s),"hub-curriculum-subject-main");
   main.innerHTML='<span class="hub-curriculum-icon">'+icon(curriculumSubjectIcon(s))+'</span><span class="hub-curriculum-copy"><small>'+L("الصف "+selectedGrade,"GRADE "+selectedGrade)+'</small><b>'+curriculumSubjectName(s)+'</b><em>'+topics.length+" "+L("موضوع","topics")+'</em></span><span class="hub-curriculum-open">↗</span>';
   const chips=node("div","hub-curriculum-preview");
   topics.slice(0,3).forEach(raw=>{const name=curriculumTopicTitle(raw),chip=button(name,()=>openCurriculum(s,name),"hub-topic-chip");chips.append(chip)});
   if(selectedGrade===10&&s==="science"){const tracks=node("div","hub-track-badges");tracks.innerHTML='<span>'+L("فيزياء","Physics")+'</span><span>'+L("كيمياء","Chemistry")+'</span><span>'+L("أحياء","Biology")+'</span>';card.append(main,tracks,chips)}else card.append(main,chips);
   grid.append(card);
  });
  if(!keys.length)section.append(node("p","hub-muted",L("هاي المادة مش مضافة لهذا الصف حاليًا.","This subject is not added for this grade yet.")));else section.append(grid);
  return section;
 }
 const mathCards=[['lab','math',['مختبر فيثاغورس','Pythagoras lab'],['نموذج ثلاثي الأبعاد وبرهان بالرمل','3D model and sand proof']],['equations','math',['معادلتان بمجهولين','Two-variable equations'],['حل النظام واستكشف الرسم البياني','Solve the system and explore its graph']],['practice','book',['تدريب الرياضيات','Math practice'],['أسئلة متغيرة مع تصحيح مباشر','Varied questions with instant feedback']],['challenge','trophy',['تحدّي الرياضيات','Math challenge'],['اختبر سرعتك واجمع نقاطًا','Test your speed and collect points']]];
 const idafa={id:'idafa',title:['المضاف والمضاف إليه','Idafa: the possessed noun and possessor'],summary:['افهم تركيب الإضافة مع أمثلة وإعراب مبسّط.','Learn the Arabic construct phrase with clear examples.'],lesson:['الإضافة تركيب يتكوّن من اسمين متتابعين: الأول مضاف، والثاني مضاف إليه مجرور. يكتسب المضاف معنى التخصيص أو الملكية من الاسم الذي بعده. غالبًا لا يأتي المضاف مع أل ولا يقبل التنوين، أما المضاف إليه فيكون مجرورًا.','Idafa is a two-noun Arabic construct: the first noun is the muḍāf, and the second is the muḍāf ilayh in the genitive case. The second noun specifies or possesses the first. The first noun usually has no definite article or tanwīn; the second is genitive.'],example:['كتابُ الطالبِ جديدٌ: كتابُ = مضاف، والطالبِ = مضاف إليه مجرور وعلامة جره الكسرة. مثال آخر: بابُ المدرسةِ مفتوحٌ.','kitābu ṭ-ṭālibi jadīd: “book” is the muḍāf; “the student” is the muḍāf ilayh, genitive with kasra. Another example: bābu l-madrasati maftūḥ (“The school door is open”).'],icon:'book',subject:'arabic'};
 function render(){
  const savedQuery=hub.querySelector('input')?.value||'';if(selected==='science'&&!enabled('science'))selected='all';hub.replaceChildren();
  const intro=node('div','hub-hero');const copy=node('div','hub-hero-copy');copy.append(node('span','hub-kicker','CLASSORA / '+L('مساحتك للتعلّم','YOUR LEARNING SPACE')),node('h1','',L('فكّر. جرّب. افهم.','Think. Try. Understand.')),node('p','',L('اختار مادة، استكشف الفكرة وجرّبها بإيدك.','Choose a subject. Explore an idea. Make it click.')));
  const art=node('div','hub-hero-art');art.setAttribute('aria-hidden','true');art.innerHTML=`<div class="hub-art-ring"></div><div class="hub-art-tile math">${icon('math')}</div><div class="hub-art-tile atom">${icon('atom')}</div><div class="hub-art-tile book">${icon('book')}</div>`;intro.append(copy,art);hub.append(intro);
  const searchWrap=node('label','hub-search');searchWrap.innerHTML=icon('search');const search=node('input');search.type='search';search.value=savedQuery;search.placeholder=L('ابحث عن موضوع، مختبر أو أداة…','Search topics, labs or tools…');search.setAttribute('aria-label',search.placeholder);searchWrap.append(search);searchWrap.hidden=!enabled('search');hub.append(searchWrap);
  const tabs=node('div','hub-subject-tabs');tabs.setAttribute('role','group');tabs.setAttribute('aria-label',L('المواد','Subjects'));for(const [key,ar,en,ic] of [['all','الكل','Explore all','book'],['math','رياضيات','Mathematics','math'],['science','علوم','Science','atom'],['arabic','عربي — قواعد','Arabic Grammar','book'],['english','English Grammar','English Grammar','book'],['history','تاريخ','History','school'],['geography','جغرافيا','Geography','globe']]){if(key==='science'&&!enabled('science'))continue;const b=button('',()=>{selected=key;render()});b.innerHTML=icon(ic);b.append(node('span','',L(ar,en)));b.classList.toggle('active',selected===key);b.setAttribute('aria-pressed',String(selected===key));tabs.append(b)}hub.append(tabs);hub.append(makeCurriculumShelf());
  const list=node('div','hub-card-grid'),status=node('p','hub-muted');status.setAttribute('role','status');hub.append(list,status);
  function fill(){
   list.replaceChildren();
   const q=search.value.trim().toLowerCase(),cards=[];
   if(q||selected==="all"||selected==="math")for(const [id,ic,title,summary] of mathCards)cards.push({id:"math-"+id,ic,title,summary,subject:"math",go:()=>launch(id)});
   if((q||selected==="all"||selected==="science")&&enabled("science")){
    cards.push({id:"periodic",ic:"atom",title:["جدول العناصر","Periodic table"],summary:["118 عنصرًا، مقارنة واستكشاف واختبار","118 elements, comparisons and quizzes"],subject:"science",go:()=>launch("periodic")});
    for(const topic of scienceTopics)cards.push({id:topic.id,ic:topic.icon,title:topic.title,summary:topic.summary,subject:"science",go:()=>topic.id==="acids"?launch("acids"):lesson(topic)});
    if(enabled("scienceLab"))cards.push({id:"particles",ic:"atom",title:["مختبر الجسيمات","Particle lab"],summary:["بدّل حالة المادة وشوف الحركة","Switch states and watch particles move"],subject:"science",go:()=>particleLab()});
    if(enabled("sciencePractice")){cards.push({id:"science-practice",ic:"book",title:["تمارين العلوم","Science practice"],summary:["أسئلة متغيّرة مع تصحيح وشرح مباشر","Fresh questions with instant grading and explanations"],subject:"science",go:()=>startQuiz("practice")});cards.push({id:"science-self-test",ic:"trophy",title:["اختبار علوم","Science test"],summary:["اختبار ذاتي من 10 أسئلة ونتيجة في النهاية","A 10-question self-test with a final score"],subject:"science",go:()=>startQuiz("test")})}
   }
   if(q||selected==="all"||selected==="arabic"){
    cards.push({id:"arabic-idafa",ic:"book",title:idafa.title,summary:idafa.summary,subject:"arabic",go:()=>launch("idafa")});
    cards.push({id:"arabic-idafa-practice",ic:"edit",title:["تمارين المضاف والمضاف إليه","Idafa practice"],summary:["اختَر المضاف والمضاف إليه وخذ تصحيحًا مباشرًا","Identify both parts with instant feedback"],subject:"arabic",go:()=>startArabicQuiz("practice")});
    cards.push({id:"arabic-idafa-test",ic:"trophy",title:["اختبار عربي — المضاف والمضاف إليه","Arabic test — Idafa"],summary:["10 أسئلة مع علامة ومراجعة الإجابات","10 questions with a score and answer review"],subject:"arabic",go:()=>startArabicQuiz("test")});
   }
   const curriculumKeys=selected==="all"?Object.keys(CURRICULUM_DATA[selectedGrade]||{}):[selected];
   for(const subject of curriculumKeys){
    if(!CURRICULUM_DATA[selectedGrade]?.[subject])continue;
    const rawTopics=curriculumTopics(selectedGrade,subject),candidate=q?rawTopics.filter(raw=>topicMatches(q,curriculumTopicTitle(raw)+" "+curriculumSubjectName(subject))):(selected!=="all"?rawTopics:[]);
    for(const raw of candidate){
     const name=curriculumTopicTitle(raw);
     cards.push({id:"curr-"+selectedGrade+"-"+subject+"-"+name,ic:curriculumSubjectIcon(subject),title:[name,name],summary:[L("الصف ","Grade ")+selectedGrade+" • "+L("شرح + 3D + امتحان + مسابقة","lesson + 3D + exam + live competition"),L("الصف ","Grade ")+selectedGrade+" • "+L("شرح + 3D + امتحان + مسابقة","lesson + 3D + exam + live competition")],subject,go:()=>openCurriculum(subject,name),curriculum:true});
    }
   }
   const extras=[["chat",["الشات","Chat"],"chat"],["support",["الدعم","Support"],"help"],["settings",["الإعدادات","Settings"],"settings"],["exam",["الامتحانات","Exams"],"book"],["competition",["المسابقات","Competitions"],"trophy"]];if(q)for(const [id,title,ic]of extras)cards.push({id,ic,title,summary:["أدوات كلاسورا","Classora tools"],subject:"tools",go:()=>launch(id)});
   const filtered=cards.filter(c=>!q||topicMatches(q,[...c.title,...c.summary,c.subject,c.id].join(" ")));
   const categoryLabel=s=>s==="math"?L("رياضيات","MATHEMATICS"):s==="science"?L("علوم","SCIENCE"):s==="arabic"?L("عربي — قواعد","ARABIC GRAMMAR"):s==="english"?"ENGLISH GRAMMAR":s==="history"?L("تاريخ","HISTORY"):s==="geography"?L("جغرافيا","GEOGRAPHY"):L("أدوات","TOOLS");
   for(const card of filtered){
    const el=button("",card.go,"hub-topic-card "+card.subject+(card.curriculum?" curriculum-topic":""));
    el.innerHTML='<span class="hub-card-icon">'+icon(card.ic)+'</span>';
    el.append(node("small","hub-card-category",categoryLabel(card.subject)),node("h3","",txt(card.title)),node("p","",txt(card.summary)),node("span","hub-card-arrow","↗"));list.append(el);
   }
   status.textContent=filtered.length?L(filtered.length+" نشاط متاح",filtered.length+" activities to explore"):L("هذا الموضوع مش موجود حاليًا في Classora.","This topic is not currently available in Classora.");
   if(!filtered.length&&q&&enabled("topicRequests"))list.append(button(L("اطلب إضافة الموضوع","Request this topic"),()=>{if(api.isGuest?.()){api.protectedAction?.();return}api.requestTopic?.(search.value.trim())}));
  }
  search.oninput=()=>{clearTimeout(searchTimer);searchTimer=setTimeout(fill,100)};fill();
  tools.replaceChildren();for(const [action,ic,ar,en]of [['exam','book','امتحانات الصف','Class exams'],['competition','trophy','المسابقات المباشرة','Live competitions'],['classes','book','صفوفي والوظائف','Classes & assignments']]){const b=button('',()=>launch(action));b.innerHTML=icon(ic);b.append(node('span','',L(ar,en)));tools.append(b)}
  if(selected==='science'&&enabled('scienceLive')){const b=button(L('مسابقة علوم مباشرة','Science live competition'),()=>launch('scienceLive'));tools.append(b)}
  accounts.innerHTML=icon('instagram');accounts.append(node('span','',L('حساباتنا','Our accounts')));accounts.hidden=!enabled('social');
  document.body.classList.toggle('hub-bottom-dock',enabled('desktopDock'));document.body.classList.toggle('hub-motion',enabled('motion'));
  const reply=document.getElementById('lobbyAIReply'),prompt=document.getElementById('lobbyAIInput');
  if(reply&&(!reply.dataset.hubInitial||reply.textContent===reply.dataset.hubInitial)){const welcome=L('اسألني عن الرياضيات أو العلوم. جرّب: اشرح الذرة، أو a=5 و b=12.','Ask about mathematics or science. Try: explain atoms, or a=5 and b=12.');reply.setAttribute('data-no-translate','');reply.textContent=welcome;reply.dataset.hubInitial=welcome}
  if(prompt){prompt.setAttribute('data-no-translate','');prompt.placeholder=L('اكتب سؤالك…','Type your question…')}
  const scienceOption=document.querySelector('#compQuickSubject option[value="science"]');if(scienceOption){scienceOption.disabled=!enabled('scienceLive')||!enabled('science');scienceOption.hidden=scienceOption.disabled;if(scienceOption.disabled&&scienceOption.selected)scienceOption.parentElement.value='mixed'}
  if(selected==='science'&&enabled('scienceExam'))tools.append(button(L('امتحانات العلوم الصفية','Science class exams'),()=>launch('scienceExam')));
  renderControls();
 }
 function lesson(topic){show(txt(topic.title),body=>{const illustration=node('div','hub-lesson-art');illustration.innerHTML=icon(topic.icon);body.append(illustration,node('p','hub-lesson-text',txt(topic.lesson)),node('h3','',L('مثال واضح','A clear example')),node('p','hub-example',txt(topic.example)));const actions=node('div','hub-actions');if(enabled('sciencePractice'))actions.append(button(L('جرّب سؤالًا','Try a question'),()=>startQuiz('practice',topic.id)));if(topic.id==='matter'&&enabled('scienceLab'))actions.append(button(L('افتح مختبر الجسيمات','Open particle lab'),()=>particleLab()));if(topic.id==='atoms')actions.append(button(L('استكشف العناصر','Explore elements'),()=>launch('periodic')));body.append(actions,node('h3','',L('اسأل عن الفكرة','Ask about this idea')));const input=node('input');input.placeholder=L('مثال: اشرح ببساطة أو اعطيني مثال','Try: explain simply or give me an example');const reply=node('p','hub-example');reply.setAttribute('role','status');const send=()=>{if(!input.value.trim())return;reply.textContent=scienceAnswer(input.value,topic);input.value=''};body.append(input,button(L('اسأل','Ask'),send),reply);input.onkeydown=e=>{if(e.key==='Enter')send()};body.append(button(L('الرجوع للّوبي','Back to lobby'),close,'hub-back'))})}
 function scienceAnswer(raw,topic){const q=raw.toLowerCase();if(/example|مثال/.test(q))return txt(topic.example);if(/quiz|question|سؤال|تدريب/.test(q)){const x=scienceLiveQuestions(1,api.language(),topic.id)[0];return x.prompt+'\n'+x.options.join(' / ')}if(/why|how|explain|what|اشرح|شرح|ليش|كيف|شو|ما هو|ببساط/.test(q))return txt(topic.lesson)+'\n\n'+txt(topic.example);return L('بقدر أشرح هالموضوع أو أعطيك مثال وسؤال تدريب. جرّب «اشرح ببساطة».','I can explain this topic or give an example and a practice question. Try “explain simply”.')}
 function quizSetup(){if(!enabled('sciencePractice'))return;show(L('تحدّي العلوم','Science challenge'),body=>{body.append(node('p','hub-muted',L('تدريب بتصحيح فوري، أو اختبار ذاتي من 10 أسئلة. النتيجة للتدريب وليست علامة صفية.','Get instant feedback in practice, or take a 10-question self-test. This is practice, not a class grade.')),button(L('ابدأ التدريب','Start practice'),()=>startQuiz('practice')),button(L('اختبار ذاتي: 10 أسئلة','Self-test: 10 questions'),()=>startQuiz('test')))})}
 function startQuiz(mode,topic=''){if(!enabled('sciencePractice'))return;const questions=scienceLiveQuestions(mode==='test'?10:topic?4:8,api.language(),topic);const state={mode,topic,questions,index:0,answers:[],lang:api.language()};show(L('تدريب العلوم','Science practice'),body=>drawQuiz(body,state));quizState=state;}
 function drawQuiz(body,state){body.replaceChildren();if(state.index>=state.questions.length){const score=state.answers.filter((a,i)=>a===state.questions[i].answer).length;body.append(node('div','hub-score',`${score} / ${state.questions.length}`),node('h3','',L('شوف تفسير كل إجابة','Review every answer')));state.questions.forEach((q,i)=>{const row=node('div','hub-review');row.append(node('b','',q.prompt),node('p','',L('إجابتك: ','Your answer: ')+state.answers[i]),node('p','',L('الصحيح: ','Correct: ')+q.answer),node('p','hub-muted',q.explanation));body.append(row)});body.append(button(L('أسئلة جديدة','New questions'),()=>startQuiz(state.mode,state.topic)),button(L('الرجوع للّوبي','Back to lobby'),close));return}
 const q=state.questions[state.index];body.append(node('p','hub-kicker',L('السؤال ','QUESTION ')+(state.index+1)+' / '+state.questions.length),node('h2','hub-question',q.prompt));const choices=node('div','hub-choices'),feedback=node('p','hub-feedback');feedback.setAttribute('role','status');const next=button(L('التالي','Next'),()=>{state.index++;drawQuiz(body,state)});next.disabled=true;for(const opt of q.options){const b=button(opt,()=>{if(state.answers.length>state.index)return;state.answers.push(opt);choices.querySelectorAll('button').forEach(x=>x.disabled=true);b.classList.add(opt===q.answer?'correct':'incorrect');if(state.mode==='practice')feedback.textContent=(opt===q.answer?L('صحيح. ','Correct. '):L('الصحيح: ','Correct answer: ')+q.answer+'. ')+q.explanation;else feedback.textContent=L('تم حفظ الإجابة لهذا الاختبار.','Answer recorded for this test.');next.disabled=false;next.focus()});choices.append(b)}let hint=0;const hintText=node('p','hub-muted'),help=button(L('ساعدني','Help me'),()=>{hint++;hintText.textContent=hint===1?L('حدّد المطلوب والفكرة العلمية.','Identify what the question asks and the scientific idea.'):hint===2?L('قارن الخيارات بما تعلمته واستبعد غير المناسب.','Compare the options with the lesson and eliminate unsuitable choices.'):q.explanation;if(hint===3)help.disabled=true});body.append(choices,help,hintText,feedback,next);}

 function startArabicQuiz(mode){const questions=idafaLiveQuestions(mode==='test'?10:6,api.language()),state={mode,questions,index:0,answers:[]};show(mode==='test'?L('اختبار عربي — المضاف والمضاف إليه','Arabic test — Idafa'):L('تمارين المضاف والمضاف إليه','Idafa practice'),body=>drawArabicQuiz(body,state));}
 function drawArabicQuiz(body,state){
  body.replaceChildren();
  if(state.index>=state.questions.length){
   const score=state.answers.filter((a,i)=>a===state.questions[i].answer).length;
   body.append(node('div','hub-score',score+' / '+state.questions.length),node('h3','',L('مراجعة الإجابات','Answer review')));
   state.questions.forEach((q,i)=>{const row=node('div','hub-review');row.append(node('b','',q.prompt),node('p','',L('إجابتك: ','Your answer: ')+(state.answers[i]||'—')),node('p','',L('الصحيح: ','Correct: ')+q.answer),node('p','hub-muted',q.explanation));body.append(row)});
   body.append(button(L('أسئلة جديدة','New questions'),()=>startArabicQuiz(state.mode)),button(L('الرجوع للّوبي','Back to lobby'),close));return;
  }
  const q=state.questions[state.index];body.append(node('p','hub-kicker',L('السؤال ','QUESTION ')+(state.index+1)+' / '+state.questions.length),node('h2','hub-question',q.prompt));
  const choices=node('div','hub-choices'),feedback=node('p','hub-feedback');feedback.setAttribute('role','status');
  const next=button(L('التالي','Next'),()=>{state.index++;drawArabicQuiz(body,state)});next.disabled=true;
  for(const opt of q.options){const b=button(opt,()=>{if(state.answers.length>state.index)return;state.answers.push(opt);choices.querySelectorAll('button').forEach(x=>x.disabled=true);b.classList.add(opt===q.answer?'correct':'incorrect');feedback.textContent=state.mode==='practice'?(opt===q.answer?L('صحيح. ','Correct. '):L('الصحيح: ','Correct: ')+q.answer+'. ')+q.explanation:L('تم حفظ الإجابة.','Answer recorded.');next.disabled=false;next.focus()});choices.append(b)}
  body.append(choices,feedback,next);
 }

 function particleLab(){if(!enabled('scienceLab'))return;let state='solid';show(L('مختبر الجسيمات','Particle lab'),body=>{body.append(node('p','hub-muted',L('نموذج مبسّط لحركة الجسيمات؛ المسافات والأحجام توضيحية.','A simplified particle model; sizes and spacing are illustrative.')));const controls=node('div','hub-actions'),box=node('div','particle-box'),explanation=node('p','hub-example');box.setAttribute('aria-hidden','true');for(let i=0;i<30;i++){const dot=node('i');dot.style.setProperty('--i',i);dot.style.setProperty('--x',(i%6)*15+10+'%');dot.style.setProperty('--y',Math.floor(i/6)*16+15+'%');box.append(dot)}const states=[['solid','صلب','Solid'],['liquid','سائل','Liquid'],['gas','غاز','Gas']];function set(v){state=v;box.dataset.state=v;controls.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.state===v)));explanation.textContent=v==='solid'?L('الصلب: الجسيمات تهتز حول مواضع ثابتة.','Solid: particles vibrate around fixed positions.'):v==='liquid'?L('السائل: جسيمات قريبة تتحرك حول بعضها.','Liquid: nearby particles move past each other.'):L('الغاز: جسيمات متباعدة تتحرك بحرية.','Gas: particles are far apart and move freely.')};for(const [key,ar,en]of states){const b=button(L(ar,en),()=>set(key));b.dataset.state=key;controls.append(b)}body.append(controls,box,explanation,button(L('الرجوع للّوبي','Back to lobby'),close));set(state)})}
 function renderControls(){controls.replaceChildren(node('h3','',L('التعلّم والواجهة','Learning & appearance')),node('p','hub-muted',L('شغّل أو أخفِ الميزات للطلاب من هون. التغييرات تنحفظ مباشرة.','Show or hide features for learners here. Changes save immediately.')));for(const [key,ar,en] of features){const label=node('label'),box=node('input');box.type='checkbox';box.checked=enabled(key);label.append(box,document.createTextNode(L(ar,en)));controls.append(label);box.onchange=async()=>{box.disabled=true;try{await api.saveFlag(key,box.checked);render()}catch{box.checked=!box.checked;api.toast(L('تعذر حفظ الخيار.','Could not save this setting.'))}finally{box.disabled=false}}}}

 let adminAssignmentSubjectSelect=null;
 function generatedAssignmentQuestions(subject,count){
  if(subject==='arabic-idafa')return idafaLiveQuestions(count,api.language());
  if(subject==='science'||subject.startsWith('science-')){const topic=subject==='science'?'':subject.slice(8);return scienceLiveQuestions(count,api.language(),topic)}
  return [];
 }
 function assignmentQuestionText(q,index){
  const letters=api.language()==='ar'?['أ','ب','ج','د','هـ','و']:['A','B','C','D','E','F'];
  return (index+1)+') '+q.prompt+'\n'+q.options.map((o,i)=>(letters[i]||String(i+1))+') '+o).join('    ');
 }
 function syncAdminAssignmentGenerator(){
  const select=document.getElementById('classoraAutoAssignSubject');if(!select)return;
  const ar=api.language()==='ar',label=document.getElementById('classoraAutoAssignSubjectLabel');
  if(label&&label.firstChild)label.firstChild.nodeValue=(ar?'المادة والموضوع ':'Subject & topic ');
  const labels={
   pythagoras:ar?'رياضيات — فيثاغورس':'Math — Pythagoras',
   science:ar?'علوم — متنوع':'Science — General',
   'science-periodic':ar?'علوم — الجدول الدوري والعناصر':'Science — Periodic table & elements',
   'science-atoms':ar?'علوم — الذرة والعناصر':'Science — Atoms & elements',
   'science-motion':ar?'علوم — القوة والحركة':'Science — Forces & motion',
   'arabic-idafa':ar?'عربي — المضاف والمضاف إليه':'Arabic — Idafa'
  };
  [...select.options].forEach(o=>o.textContent=labels[o.value]||o.value);
  const heading=document.getElementById('autoAssignHeading'),sub=document.getElementById('autoAssignSub'),value=select.value;
  if(value==='pythagoras'){if(heading)heading.textContent=ar?'الموقع يعمل وظيفة ويرسلها للصفوف':'Generate an assignment and send it to classes';if(sub)sub.textContent=ar?'اختار الصف، المستوى وعدد الأسئلة. الموقع يولّد وظيفة فيثاغورس جاهزة ويرسلها مباشرة.':'Choose the class, difficulty and question count. Classora generates a Pythagoras assignment and sends it directly.'}
  else{if(heading)heading.textContent=ar?'كلاسورا يولّد وظيفة '+labels[value]+' ويرسلها':'Classora generates and sends a '+labels[value]+' assignment';if(sub)sub.textContent=ar?'اختار الصف وعدد الأسئلة. كلاسورا يولّد أسئلة جديدة، يعطيك معاينة، وبعدها يرسل الوظيفة للصف المختار.':'Choose the class and question count. Classora generates fresh questions, previews them, then sends the assignment.'}
 }
 function installAdminAssignmentGenerator(){
  const target=document.getElementById('autoAssignTarget'),previewBtn=document.getElementById('autoAssignPreviewBtn'),sendBtn=document.getElementById('autoAssignSendBtn');
  if(!target||!previewBtn||!sendBtn)return;
  let select=document.getElementById('classoraAutoAssignSubject');
  if(!select){
   const label=node('label');label.id='classoraAutoAssignSubjectLabel';label.append(document.createTextNode('المادة والموضوع '));select=node('select');select.id='classoraAutoAssignSubject';
   for(const value of ['pythagoras','science','science-periodic','science-atoms','science-motion','arabic-idafa']){const o=node('option');o.value=value;select.append(o)}
   label.append(select);
   const grid=target.closest('.admin-form-grid');if(grid)grid.insertBefore(label,target.closest('label')?.nextSibling||grid.firstChild);
   select.addEventListener('change',()=>{document.getElementById('autoAssignPreview')?.classList.add('hidden');const title=document.getElementById('autoAssignTitle');if(title){const names={pythagoras:L('وظيفة فيثاغورس','Pythagoras Practice'),science:L('وظيفة علوم — متنوع','Science Assignment — General'),'science-periodic':L('وظيفة علوم — الجدول الدوري والعناصر','Science Assignment — Periodic Table'),'science-atoms':L('وظيفة علوم — الذرة والعناصر','Science Assignment — Atoms'),'science-motion':L('وظيفة علوم — القوة والحركة','Science Assignment — Forces & Motion'),'arabic-idafa':L('وظيفة عربي — المضاف والمضاف إليه','Arabic Assignment — Idafa')};title.value=names[select.value]||title.value}syncAdminAssignmentGenerator()});
   previewBtn.addEventListener('click',event=>{
    if(select.value==='pythagoras')return;
    event.preventDefault();event.stopImmediatePropagation();
    const count=Math.max(3,Math.min(20,Number(document.getElementById('autoAssignCount')?.value)||10)),questions=generatedAssignmentQuestions(select.value,count),host=document.getElementById('autoAssignPreview'),status=document.getElementById('autoAssignStatus');
    if(!host)return;host.replaceChildren();host.classList.remove('hidden');
    questions.forEach((q,i)=>{const card=node('div','hub-review');card.append(node('b','',String(i+1)+'. '+q.prompt),node('p','',q.options.join(' · ')),node('p','hub-muted',L('الإجابة: ','Answer: ')+q.answer+' — '+q.explanation));host.append(card)});
    if(status)status.textContent=L('تم توليد '+questions.length+' أسئلة للمعاينة. لم تُرسل بعد.','Generated '+questions.length+' questions for preview. Nothing has been sent yet.');
   },true);
   sendBtn.addEventListener('click',event=>{
    if(select.value==='pythagoras')return;
    event.preventDefault();event.stopImmediatePropagation();
    const count=Math.max(3,Math.min(20,Number(document.getElementById('autoAssignCount')?.value)||10)),questions=generatedAssignmentQuestions(select.value,count);
    const manualTarget=document.getElementById('adminTargetClass'),manualType=document.getElementById('adminSendType'),manualTitle=document.getElementById('adminSendTitle'),manualBody=document.getElementById('adminSendBody'),manualDue=document.getElementById('adminSendDueDate'),manualSend=document.getElementById('adminSendBtn'),status=document.getElementById('autoAssignStatus');
    if(!manualTarget||!manualType||!manualTitle||!manualBody||!manualSend){if(status)status.textContent=L('تعذر فتح نظام إرسال الوظائف.','Could not open the assignment sender.');return}
    manualTarget.value=target.value;manualType.value='assignment';manualType.dispatchEvent(new Event('change',{bubbles:true}));
    const defaultTitle=select.value==='arabic-idafa'?L('وظيفة عربي — المضاف والمضاف إليه','Arabic Assignment — Idafa'):L('وظيفة علوم','Science Assignment');
    manualTitle.value=document.getElementById('autoAssignTitle')?.value.trim()||defaultTitle;
    const instructions=document.getElementById('autoAssignInstructions')?.value.trim();
    manualBody.value=[instructions,L('حل الأسئلة التالية:','Answer the following questions:'),questions.map(assignmentQuestionText).join('\n\n')].filter(Boolean).join('\n\n');
    if(manualDue)manualDue.value=document.getElementById('autoAssignDueDate')?.value||'';
    if(status)status.textContent=L('تم توليد الوظيفة، جاري إرسالها…','Assignment generated. Sending…');
    manualSend.click();
   },true);
  }
  adminAssignmentSubjectSelect=select;syncAdminAssignmentGenerator();
 }

 function refresh(){installAdminAssignmentGenerator();render();if(dialog&&renderOpen){if(quizState&&quizState.lang!==api.language()){close();api.toast(L('تغيرت اللغة. ابدأ تدريبًا جديدًا باللغة المختارة.','Language changed. Start a new practice in your selected language.'))}else{dialog.body.replaceChildren();renderOpen(dialog.body)}}}
 installAdminAssignmentGenerator();render();return {refresh,scienceAnswer,openScience:()=>{selected='science';render()},idafaQuestions:idafaLiveQuestions,renderControls};
}
export function installVectorIcons(){
 const emoji=/\p{Extended_Pictographic}(?:[\uFE0F\uFE0E\u200D]|\p{Emoji_Modifier}|\p{Extended_Pictographic})*/gu;
 const rules=[[/setting|إعداد|اعداد/,'settings'],[/chat|شات|محادث/,'chat'],[/support|دعم/,'help'],[/admin|أدمن|صلاح/,'shield'],[/notif|إشعار/,'bell'],[/voice|صوت|تسجيل/,'mic'],[/photo|image|صورة/,'photo'],[/install|تثبيت/,'download'],[/delete|حذف/,'trash'],[/competition|challenge|مسابق|تحد/,'trophy'],[/profile|account|حساب|طالب|معلم/,'user'],[/science|atom|عنصر|علوم/,'atom'],[/lab|معادل|فيثاغورس|رياض/,'math'],[/search|بحث/,'search'],[/class|صف|مدرس/,'school'],[/result|نتيج|احص|إحص|stat/,'chart'],[/time|وقت|مؤقت/,'clock'],[/calendar|تاريخ|موعد/,'calendar'],[/file|folder|ملف|محفوظ/,'folder'],[/view|show|عرض/,'eye'],[/edit|تعديل|صمم|صمّم/,'edit'],[/lock|أمان|حماية|كلمة سر/,'lock'],[/world|remote|عالم|عن بعد|جغراف/,'globe']];
 const emojiGroups=[
  ['sun','☀🌞'],['moon','🌙🌓'],['school','🏫🎒👨‍🏫🎓'],['user','👤🙂😊😄👌👇👋👏'],['group','👥👫🤝'],
  ['motion','🚀🏃📳'],['help','🛟❓'],['shield','🛡🔐🔒⛔'],['chat','💬'],['mail','📥📬📤'],['bell','🔔'],
  ['download','📲⬇'],['settings','⚙🎛'],['clock','⏳⏱⏰🕘⏪'],['chart','📊📈'],['trash','🗑🧹'],
  ['math','📐🧮📏⚖💯🔢⬛➕➖'],['atom','🧪⚛🔬🧊'],['trophy','🏆🏅⭐🌟'],['folder','🗃📂📋📅'],
  ['sparkle','✨🔥🎉🌈'],['eye','👁👀'],['edit','📝🗒✍✏☑'],['lock','🔑'],['globe','🧭🌐🌍🌎🗺⛰🏙🌦'],
  ['target','🎯🎲'],['photo','📷🖼'],['mic','🎙🎤🔊'],['book','📚📘📖'],['bulb','💡'],['brain','🧠🤖'],
  ['leaf','🌱'],['heart','❤'],['warn','⚠❌'],['check','✅'],['play','▶'],['pause','⏸⏹'],['bolt','⚡'],['inbox','📡'],
  ['dot','🔵🔴🟢🟡🟨🟦'],['search','🔎'],['flask','🧪⚗']
 ];
 const emojiName=(mark,context='')=>{
  if(mark==='©'||mark==='®')return null;
  for(const [name,marks] of emojiGroups)if(marks.includes(mark))return name;
  const byText=rules.find(([re])=>re.test(String(context).toLowerCase()))?.[1];
  return byText||'sparkle';
 };
 const svgFor=(name,cls='classora-inline-art')=>icon(name).replace('classora-icon',cls);
 const skipSelector='script,style,noscript,textarea,input,svg,code,pre,.chat-bubble,.msg.user,[contenteditable="true"]';

 function cleanButtons(root){
  const elements=[];
  if(root?.matches?.('button,a.pythag-action-card,.auth-role .ico'))elements.push(root);
  root?.querySelectorAll?.('button,a.pythag-action-card,.auth-role .ico').forEach(x=>elements.push(x));
  for(const el of elements){
   if(el.closest('.chat-bubble,.msg'))continue;
   const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let n,found=false;
   while((n=walker.nextNode())){
    if(n.parentElement.closest('svg'))continue;
    emoji.lastIndex=0;
    if(emoji.test(n.nodeValue)){
     found=true;emoji.lastIndex=0;
     const value=n.nodeValue.replace(emoji,' ').replace(/\s{2,}/g,' ').trim();
     if(n.__arOriginal!=null){emoji.lastIndex=0;n.__arOriginal=n.__arOriginal.replace(emoji,' ').replace(/\s{2,}/g,' ').trim()}
     n.nodeValue=value;
    }
   }
   if(found&&!el.querySelector('.classora-icon')){
    const name=rules.find(([re])=>re.test((el.id+' '+el.textContent+' '+el.title).toLowerCase()))?.[1]||'sparkle';
    el.insertAdjacentHTML('afterbegin',icon(name));
    if(!el.textContent.trim()&&!el.getAttribute('aria-label'))el.setAttribute('aria-label',el.title||name);
   }
  }
 }

 function cleanOptions(root){
  const options=[];
  if(root?.matches?.('option'))options.push(root);
  root?.querySelectorAll?.('option').forEach(x=>options.push(x));
  for(const opt of options){
   emoji.lastIndex=0;
   if(emoji.test(opt.textContent)){emoji.lastIndex=0;opt.textContent=opt.textContent.replace(emoji,' ').replace(/\s{2,}/g,' ').trim()}
  }
 }

 function replaceLooseEmoji(root){
  if(!root)return;
  const base=root.nodeType===1?root:root.parentElement;
  if(!base||base.closest?.(skipSelector))return;
  const nodes=[];
  const walker=document.createTreeWalker(base,NodeFilter.SHOW_TEXT,{
   acceptNode(n){
    const p=n.parentElement;if(!p||p.closest(skipSelector)||p.closest('button,a.pythag-action-card,.auth-role .ico,.classora-inline-art'))return NodeFilter.FILTER_REJECT;
    emoji.lastIndex=0;return emoji.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
   }
  });
  let n;while((n=walker.nextNode()))nodes.push(n);
  for(const textNode of nodes){
   const raw=textNode.nodeValue,frag=document.createDocumentFragment();let last=0,match;
   emoji.lastIndex=0;
   while((match=emoji.exec(raw))){
    if(match.index>last)frag.append(document.createTextNode(raw.slice(last,match.index)));
    const mark=match[0],name=emojiName(mark,textNode.parentElement?.textContent||'');
    if(name){
     const span=document.createElement('span');span.className='classora-inline-art-wrap';span.setAttribute('aria-hidden','true');span.innerHTML=svgFor(name);frag.append(span);
    }else frag.append(document.createTextNode(mark));
    last=match.index+mark.length;
   }
   if(last<raw.length)frag.append(document.createTextNode(raw.slice(last)));
   textNode.replaceWith(frag);
  }
 }

 function clean(root){cleanButtons(root);cleanOptions(root);replaceLooseEmoji(root)}
 clean(document.body);
 let queued=new Set(),timer;
 new MutationObserver(records=>{
  for(const r of records){
   const el=r.target.nodeType===1?r.target:r.target.parentElement;if(el)queued.add(el);
   for(const n of r.addedNodes)if(n.nodeType===1||n.nodeType===3)queued.add(n.nodeType===1?n:n.parentElement);
  }
  clearTimeout(timer);timer=setTimeout(()=>{const roots=[...queued];queued.clear();roots.forEach(clean)},45);
 }).observe(document.body,{subtree:true,childList:true,characterData:true});
}
export function localizeScienceQuestion(q,lang='en'){
 if(q?.elementNumber&&String(q?.questionKind||'').startsWith('periodic_')){
   const e=periodicElements.find(x=>x[0]===Number(q.elementNumber));
   if(e){
     const label=value=>{
       if(q.optionKind==='elementName'){const found=periodicElementByAny(value);return found?periodicName(found,lang):value}
       if(q.optionKind==='family'){
         const entry=Object.entries(periodicFamilies).find(([,pair])=>pair.includes(value));
         return entry?periodicFamilyName(entry[0],lang):value;
       }
       return value;
     };
     return {prompt:periodicPrompt(q.questionKind,e,lang),label};
   }
 }
 const fact=facts.find(f=>f[1].includes(q?.prompt));
 if(fact)return {prompt:pickLang(fact[1],lang),label:value=>{const pair=fact[2].find(p=>p.includes(value));return pair?pickLang(pair,lang):value}};
 const prompt=String(q?.prompt||'');const match=prompt.match(/^(?:An object travels (\d+) m in (\d+) s\.|جسم يقطع (\d+) متر خلال (\d+) ثانية\.)/);
 if(match){const d=match[1]||match[3],t=match[2]||match[4];return {prompt:lang==='ar'?`جسم يقطع ${d} متر خلال ${t} ثانية. ما سرعته المتوسطة بالمتر/ثانية؟`:`An object travels ${d} m in ${t} s. What is its average speed in m/s?`,label:value=>value}}
 return {prompt,label:value=>value};
}

