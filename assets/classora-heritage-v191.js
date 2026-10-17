/* A dated cultural event. All illustrations are original SVG drawings. */
import {saveHeritagePng,showSharedHeritageGallery} from './classora-heritage-gallery-v194.js?v=194';
import {heritageT} from './classora-heritage-i18n-v194.js?v=194';
export const START=Date.parse('2026-10-17T00:00:00+03:00');
export const END=Date.parse('2026-10-25T00:00:00+03:00');
export const activeAt=(now=Date.now())=>now>=START&&now<END;
const pairs=[
 ['التطريز: ذاكرة بالخيط','Tatreez: memory in thread','التطريز الفلسطيني فنّ تزيين القماش بالإبرة والخيط. تتناقل الأجيال مهاراته وتفاصيله؛ وهو جزء من الهوية والذاكرة الثقافية. أُدرج فن التطريز في فلسطين على قائمة اليونسكو للتراث الثقافي غير المادي عام 2021.','Palestinian tatreez decorates fabric with needle and thread. Its skills pass between generations and carry cultural memory. UNESCO inscribed the art of embroidery in Palestine in 2021.'],
 ['الثوب: تفاصيل تحكي','The thobe tells a story','الثوب الفلسطيني لباس تقليدي يحمل تطريزًا متنوعًا. تختلف الألوان والزخارف بين المناطق والمناسبات؛ لذلك لا يوجد شكل واحد لكل الأثواب. الرسم هنا مستوحى من الفن، وليس نسخة موثّقة لثوب منطقة بعينها.','The Palestinian thobe is a traditional dress with varied embroidery. Colours and motifs differ across places and occasions. Our illustration is inspired by the craft, not a documented dress from one particular region.'],
 ['جرّب غرزة ×','Try a cross-stitch','في غرزة الصليب، يلتقي خيطان مائلان ليشكّلا ×. تكرار الغرز يصنع وحدات هندسية وزخارف. جرّب لوحة الغرز أدناه: اختر لونًا واضغط المربعات لترسم زخرفتك الخاصة.','A cross-stitch uses two diagonal stitches to form an X. Repeating stitches builds geometric patterns. Try the stitch board below: choose a colour and tap squares to create your own design.'],
 ['الكوفية: نسيج وهوية','Keffiyeh: fabric and identity','الكوفية غطاء رأس من القماش، وأصبحت الكوفية الفلسطينية رمزًا ثقافيًا معروفًا. النسيج يُصنع بتشابك الخيوط، بينما التطريز يضيف غرزًا فوق القماش؛ وهما حرفتان مختلفتان.','The keffiyeh is a cloth head covering and a recognised Palestinian cultural symbol. Weaving interlaces threads to make fabric; embroidery adds stitches to fabric. These are different crafts.'],
 ['الدبكة: فرحة جماعية','Dabkeh: shared celebration','الدبكة رقصة جماعية ترافقها الموسيقى والغناء، وتُؤدّى في الاحتفالات والمناسبات. ينسّق المشاركون خطواتهم وإيقاعهم معًا. أُدرجت الدبكة التقليدية في فلسطين على قائمة اليونسكو عام 2023.','Dabkeh is a group dance accompanied by music and singing at celebrations. Dancers coordinate their steps and rhythm. UNESCO inscribed traditional dabkeh in Palestine in 2023.'],
 ['التراث يعيش بالمشاركة','Heritage lives through sharing','نحافظ على التراث عندما نتعلّم الحرفة، ونسمع حكايات الكبار، ونوثّق أسماء أصحاب الأعمال ونحترم جهدهم. التراث ليس قطعة قديمة فقط؛ هو معرفة ومهارة وممارسة نواصلها اليوم.','We help heritage live by learning crafts, listening to elders and crediting makers. Heritage includes knowledge, skills and practices that people continue today.']
];
// Correct answer is the first option in the source bank; shuffled separately for every game.
export const BANK=[
 [
  "نسجت ليان القماش، ثم أضافت عليه غرزًا ملوّنة. ما ترتيب الحرفتين؟",
  "Layan made fabric, then added coloured stitches. Which crafts did she use in order?",
  [
   "نسج ثم تطريز",
   "تطريز ثم نسج",
   "تطريز في المرحلتين",
   "نسج في المرحلتين"
  ],
  [
   "Weaving, then embroidery",
   "Embroidery, then weaving",
   "Embroidery in both steps",
   "Weaving in both steps"
  ],
  3,
  "النسج يصنع القماش من الخيوط؛ والتطريز يضيف غرزًا إلى قماش موجود.",
  "Weaving creates fabric from threads; embroidery adds stitches to existing fabric."
 ],
 [
  "زخرفة فيها 6 وحدات، بكل وحدة 4 غرز ×. كم غرزة فيها؟",
  "A motif has 6 units with 4 cross-stitches each. How many stitches are there?",
  [
   "24",
   "10",
   "20",
   "28"
  ],
  [
   "24",
   "10",
   "20",
   "28"
  ],
  2,
  "نضرب عدد الوحدات في غرز الوحدة: 6 × 4 = 24 غرزة.",
  "Multiply units by stitches per unit: 6 × 4 = 24 stitches."
 ],
 [
  "كل غرزة × فيها خطّان مائلان. كم خطًا نحتاج لـ9 غرز؟",
  "Each cross-stitch has two diagonal lines. How many lines make 9 stitches?",
  [
   "18",
   "9",
   "11",
   "27"
  ],
  [
   "18",
   "9",
   "11",
   "27"
  ],
  2,
  "كل غرزة تحتاج خطين: 9 × 2 = 18 خطًا.",
  "Each stitch needs two lines: 9 × 2 = 18 lines."
 ],
 [
  "تتكرر الألوان: أحمر، أخضر، أخضر. ما لون الغرزة الثامنة؟",
  "Colours repeat: red, green, green. What colour is stitch 8?",
  [
   "أخضر",
   "أحمر",
   "أبيض",
   "أسود"
  ],
  [
   "Green",
   "Red",
   "White",
   "Black"
  ],
  2,
  "الوحدة طولها 3: الغرز 7 و8 و9 هي أحمر، أخضر، أخضر.",
  "The unit has length 3: stitches 7, 8 and 9 are red, green, green."
 ],
 [
  "على يسار محور الزخرفة 7 غرز. نريد صورة مرآة على اليمين؛ كم نضيف؟",
  "There are 7 stitches left of a symmetry line. How many make a mirror image on the right?",
  [
   "7",
   "14",
   "3",
   "8"
  ],
  [
   "7",
   "14",
   "3",
   "8"
  ],
  2,
  "الصورة المرآتية تكرر العدد على الجهة المقابلة: نضيف 7، فيصبح المجموع 14.",
  "A mirror image repeats the same number on the other side: add 7 for a total of 14."
 ],
 [
  "زخرفة فيها 32 غرزة، ربعها أحمر. كم غرزة حمراء؟",
  "A motif has 32 stitches, one quarter red. How many are red?",
  [
   "8",
   "4",
   "16",
   "24"
  ],
  [
   "8",
   "4",
   "16",
   "24"
  ],
  2,
  "الربع يعني القسمة على 4: 32 ÷ 4 = 8.",
  "One quarter means dividing by 4: 32 ÷ 4 = 8."
 ],
 [
  "أُدرج التطريز سنة 2021 والدبكة سنة 2023. كم سنة بينهما؟",
  "Embroidery was inscribed in 2021 and dabkeh in 2023. How many years apart?",
  [
   "سنتان",
   "سنة واحدة",
   "3 سنوات",
   "4 سنوات"
  ],
  [
   "2 years",
   "1 year",
   "3 years",
   "4 years"
  ],
  0,
  "2023 − 2021 = سنتان؛ التطريز أُدرج أولًا.",
  "2023 − 2021 = 2 years; embroidery was inscribed first."
 ],
 [
  "رأيت ثوبين مختلفين في اللون والزخارف. ما الاستنتاج الأدق؟",
  "You see two thobes with different colours and motifs. Which conclusion is best?",
  [
   "التنوع جزء من التراث",
   "أحدهما ليس تراثيًا حتمًا",
   "لهما المكان والتاريخ نفسيهما حتمًا",
   "يجب توحيدهما"
  ],
  [
   "Variation is part of heritage",
   "One must be non-traditional",
   "They must have the same origin and date",
   "They must be made identical"
  ],
  1,
  "تختلف الزخارف والألوان بين المناطق والمناسبات؛ الاختلاف وحده لا ينفي صلة الثوب بالتراث.",
  "Colours and motifs vary across places and occasions; variation alone does not rule out a traditional connection."
 ],
 [
  "صمّم طالب ثوبًا بخياله مستلهمًا التراث. كيف يصفه بدقة؟",
  "A student invents a thobe design inspired by heritage. What is an accurate label?",
  [
   "تصميم معاصر مستوحى من التراث",
   "نسخة أثرية مؤكدة",
   "ثوب موثّق لكل المناطق",
   "الزي الوحيد الصحيح"
  ],
  [
   "A contemporary heritage-inspired design",
   "A verified historical replica",
   "A documented dress for every region",
   "The only correct traditional dress"
  ],
  1,
  "التصميم المستوحى عمل جديد، ولا يصير توثيقًا تاريخيًا من غير أدلة.",
  "An inspired design is a new work, not historical documentation without evidence."
 ],
 [
  "أي مشروع يحافظ على مهارة التطريز ويقدّر صاحبتها؟",
  "Which project preserves embroidery skills and credits their maker?",
  [
   "تعلّم منها وتوثيق اسمها بإذنها",
   "نسخ عملها دون ذكرها",
   "عرض السعر فقط",
   "حفظ الصورة وحذف الشرح"
  ],
  [
   "Learn from her and document her name with permission",
   "Copy her work without credit",
   "Show only the price",
   "Keep the image but remove the explanation"
  ],
  5,
  "التعلّم ينقل المهارة، وذكر صاحبة العمل بإذنها يحفظ حقّها ونسبته إليها.",
  "Learning passes on skills; crediting the maker with permission preserves attribution."
 ],
 [
  "أي مثال يُظهر التراث كمهارة حيّة؟",
  "Which example shows heritage as a living skill?",
  [
   "حرفية تعلّم طفلًا الغرز",
   "صندوق مغلق لا يفتحه أحد",
   "رقم على بطاقة السعر",
   "قياس طول الرف"
  ],
  [
   "A craftswoman teaching a child stitches",
   "A box no one opens",
   "A number on a price tag",
   "Measuring a shelf"
  ],
  5,
  "التراث الحي يُمارَس ويُتعلَّم وينتقل بين الناس والأجيال.",
  "Living heritage is practised, learned and passed between people and generations."
 ],
 [
  "في الدبكة، لماذا لا تكفي سرعة الخطوات وحدها؟",
  "Why is speed alone not enough in dabkeh?",
  [
   "لأن التنسيق مع الإيقاع والمجموعة مهم",
   "لأن الأسرع يقود دائمًا",
   "لأن كل راقص يجب أن يخالف الآخرين",
   "لأن الغناء يمنع التنسيق"
  ],
  [
   "Coordination with rhythm and the group matters",
   "The fastest dancer always leads",
   "Each dancer must oppose the others",
   "Singing prevents coordination"
  ],
  4,
  "الدبكة عمل جماعي يعتمد على تنسيق الخطوات والإيقاع، لا على السرعة فقط.",
  "Dabkeh is a group activity built on coordinated steps and rhythm, not speed alone."
 ],
 [
  "حدّدت مكان الزخرفة وجهّزت الأدوات. ما الخطوة التالية في نشاطنا؟",
  "You prepared the tools and planned the motif. What comes next in our activity?",
  [
   "تنفيذ الغرز بتأنٍ",
   "فك جميع الخيوط",
   "تثبيت النهايات قبل الغرز",
   "إعادة اختيار الأدوات فقط"
  ],
  [
   "Work the stitches carefully",
   "Remove all the threads",
   "Secure the ends before stitching",
   "Only choose tools again"
  ],
  2,
  "بعد التحضير والتخطيط ننفّذ الغرز، ثم نثبّت أطراف الخيط ونفحص العمل.",
  "After preparing and planning, work the stitches, then secure the ends and check the work."
 ],
 [
  "شريط طوله 30 سم. كل وحدة زخرفية تشغل 5 سم بلا فراغات. كم وحدة تسعه؟",
  "A border is 30 cm long. Each motif takes 5 cm with no gaps. How many fit?",
  [
   "6",
   "5",
   "25",
   "35"
  ],
  [
   "6",
   "5",
   "25",
   "35"
  ],
  2,
  "نقسم الطول المتاح على طول الوحدة: 30 ÷ 5 = 6.",
  "Divide available length by unit length: 30 ÷ 5 = 6."
 ],
 [
  "كررنا وحدة زخرفية 4 مرات فصار عدد الغرز 36. كم غرزة في الوحدة؟",
  "Repeating one motif 4 times gives 36 stitches. How many are in one motif?",
  [
   "9",
   "8",
   "12",
   "32"
  ],
  [
   "9",
   "8",
   "12",
   "32"
  ],
  2,
  "نقسم المجموع على مرات التكرار: 36 ÷ 4 = 9.",
  "Divide the total by repetitions: 36 ÷ 4 = 9."
 ],
 [
  "قال شخص: كل زخرفة هندسية على القماش تطريز. ما الرد الأدق؟",
  "Someone says every geometric fabric pattern is embroidery. What is the best reply?",
  [
   "نحتاج معرفة طريقة صنعها",
   "صحيح مهما كانت الطريقة",
   "صحيح إذا كان اللون أحمر",
   "صحيح إذا تكرر الشكل"
  ],
  [
   "We need to know how it was made",
   "True regardless of how it was made",
   "True if it is red",
   "True if the shape repeats"
  ],
  3,
  "الشكل وحده لا يحدد التقنية؛ التطريز يُعرف بإضافة الغرز إلى القماش.",
  "Appearance alone does not establish technique; embroidery adds stitches to fabric."
 ]
];

export function shuffled(rows){const a=[...rows];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
let artId=0;
export const DRAW_PROMPTS=[
 {title:['ارسم علم فلسطين','Draw the Palestinian flag'],tip:['أسود فوق، أبيض بالنص، أخضر تحت، ومثلث أحمر جهة السارية. اختَر الألوان وارسم بطريقتك.','Black on top, white in the middle, green below, and a red triangle by the pole. Choose the colours and make it your own.'],art:'flag'},
 {title:['ارسم غصن زيتون','Draw an olive branch'],tip:['ابدأ بخط منحني، ضيف أوراقًا بيضاوية، ثم ثمارًا صغيرة. البساطة حلوة.','Start with a curved line, add oval leaves, then small olives. Keep it simple.'],art:'olive'},
 {title:['صمّم زخرفة متناظرة','Design a symmetrical motif'],tip:['ارسم معينًا في الوسط، ثم كرّر نفس الغرز على يمينه ويساره. اختَر لونين بتحبّهم.','Draw a diamond in the centre, then repeat matching stitches on both sides. Pick two colours you like.'],art:'stitch'},
 {title:['زيّن كوفيتك','Decorate your keffiyeh'],tip:['ارسم مربعًا، وزيّنه بخطوط متقاطعة، وضيف شراشيب على طرفه.','Draw a square, add crossing lines, then little tassels along one edge.'],art:'scarf'},
 {title:['صمّم صدر ثوب','Design a thobe panel'],tip:['ارسم مستطيلًا وزيّنه بصفوف من × ومعيّنات. خليه تصميمك الخاص.','Draw a rectangle and decorate it with rows of X stitches and diamonds. Make it your own design.'],art:'thobe'}
];
export const MEMORY_PAIRS=[['ثوب','Thobe','thobe'],['كوفية','Keffiyeh','scarf'],['غرزة','Stitch','stitch'],['خيط','Thread','thread']];

export function heritageArt(kind='thobe'){
 const id='hw-art-'+(++artId);
 const defs=`<defs><pattern id="${id}" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M3 3l6 6m0-6L3 9m12 6l6 6m0-6l-6 6M15 3l6 6m0-6l-6 6M3 15l6 6m0-6l-6 6" stroke="${kind==='scarf'?'#253c37':'#e7b657'}" stroke-width="2" fill="none"/></pattern></defs>`;
 const extra={
 flag:'<path d="M35 210V25" stroke="#8d7962" stroke-width="7" stroke-linecap="round"/><path d="M39 30h175v114H39z" fill="white" stroke="#d4d8d3"/><path d="M39 30h175v38H39z" fill="#252a28"/><path d="M39 106h175v38H39z" fill="#27805d"/><path d="M39 30l75 57-75 57Z" fill="#ce3f50"/>',
 needle:'<path d="M58 187L176 45q16-14 20-7t-5 20L58 187Z" fill="#e5e9e5" stroke="#778980" stroke-width="3"/><path d="M178 45l8-6" stroke="#41574c" stroke-width="4" stroke-linecap="round"/><path d="M182 42C100 5 38 44 60 83s102 15 112 59-45 71-88 48" stroke="#bf4558" stroke-width="4" fill="none" stroke-linecap="round"/>',

 thobe:`<circle cx="120" cy="122" r="109" fill="#e5bb78" opacity=".17"/><path d="M91 28L66 39Q49 44 40 63L18 112l29 13 25-48-8 141h112l-8-141 25 48 29-13-22-49q-9-19-26-24l-25-11q-29 32-58 0Z" fill="#fcf2dd" stroke="#526b5a" stroke-width="3" stroke-linejoin="round"/><path d="M92 28q28 30 56 0l4 9-32 32-32-32Z" fill="#254c41" stroke="#cb5364" stroke-width="3"/><path d="M90 47l-5 107h70l-5-107" fill="#fff9ed" stroke="#a83250" stroke-width="4"/><path d="M104 61l16 16 16-16-16-16Z" fill="#b22e4c"/><path d="M111 61l9 9 9-9-9-9Z" fill="#f6c979"/><path d="M36 105l24 11m120 0l24-11M67 192h106" stroke="#af304a" stroke-width="7" fill="none"/><path d="M65 209h110" stroke="#305b48" stroke-width="4"/><g stroke="#ad3150" stroke-width="3" stroke-linecap="round"><path d="M98 86l8 8m0-8l-8 8M110 86l8 8m0-8l-8 8M122 86l8 8m0-8l-8 8M134 86l8 8m0-8l-8 8M98 106l8 8m0-8l-8 8M110 106l8 8m0-8l-8 8M122 106l8 8m0-8l-8 8M134 106l8 8m0-8l-8 8M98 127l8 8m0-8l-8 8M110 127l8 8m0-8l-8 8M122 127l8 8m0-8l-8 8M134 127l8 8m0-8l-8 8M77 184l8 8m0-8l-8 8M93 184l8 8m0-8l-8 8M109 184l8 8m0-8l-8 8M125 184l8 8m0-8l-8 8M141 184l8 8m0-8l-8 8M157 184l8 8m0-8l-8 8"/></g><path d="M95 146h51M74 199h92" stroke="#d19a51" stroke-width="4" stroke-dasharray="4 5"/>`,
 stitch:`<circle cx="120" cy="120" r="90" fill="#f1dfb9" stroke="#ad7952" stroke-width="12"/><circle cx="120" cy="120" r="77" fill="url(#${id})"/><path d="M85 85l70 70m0-70l-70 70" stroke="#b83952" stroke-width="12" stroke-linecap="round"/>`,
 thread:'<path d="M70 60h100l-10 120H80Z" fill="#c14055"/><ellipse cx="120" cy="60" rx="60" ry="18" fill="#d8b67a"/><ellipse cx="120" cy="180" rx="60" ry="18" fill="#d8b67a"/><path d="M78 80h84M78 95h84M78 110h84M78 125h84M78 140h84M78 155h84M155 160q70 55 66-45" fill="none" stroke="#f27b88" stroke-width="5"/>',
 olive:'<path d="M70 205Q155 130 168 32" fill="none" stroke="#b38a4c" stroke-width="7"/><g fill="#43836a"><ellipse cx="115" cy="150" rx="14" ry="35" transform="rotate(-45 115 150)"/><ellipse cx="151" cy="144" rx="14" ry="35" transform="rotate(43 151 144)"/><ellipse cx="137" cy="99" rx="12" ry="30" transform="rotate(-45 137 99)"/><ellipse cx="176" cy="92" rx="12" ry="30" transform="rotate(43 176 92)"/></g><g fill="#313f38"><ellipse cx="151" cy="170" rx="10" ry="14"/><ellipse cx="117" cy="120" rx="10" ry="14"/></g>'
 };
 const body=extra[kind]||(kind==='scarf'?`<g class="hw-fabric"><path d="M25 35Q120 2 218 37L199 177Q112 149 38 186Z" fill="#f7f1df"/><path d="M25 35Q120 2 218 37L199 177Q112 149 38 186Z" fill="url(#${id})"/><path d="M33 61Q121 28 213 62M39 151Q123 123 201 151" fill="none" stroke="#253c37" stroke-width="9"/>${Array.from({length:12},(_,i)=>`<path d="M${39+i*14} ${184-Math.sin(i/4)*20}l-2 15" stroke="#f7f1df" stroke-width="3"/>`).join('')}</g>`:`<circle cx="120" cy="119" r="102" fill="#e8b75c" opacity=".12"/><path d="M91 27l-49 26-25 61 34 14 21-38-13 120h122L168 90l21 38 34-14-25-61-49-26q-29 30-58 0Z" fill="#263e37" stroke="#efc577" stroke-width="2"/><path d="M94 37v62h52V37M75 146h91v55H75zM47 60l-20 49 16 7 23-48M174 68l23 48 16-7-20-49" fill="url(#${id})" stroke="#be5251" stroke-width="6"/><path d="M105 40q15 18 30 0" fill="none" stroke="#f9e6bd" stroke-width="3"/>`);
 return `<svg viewBox="0 0 240 240" aria-hidden="true" focusable="false">${defs}${body}</svg>`;
}
export function mountHeritage(api){
 const t=(ar,en)=>heritageT(document.documentElement.lang,ar,en);
 const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n};
 const button=(label,fn,cls='hw-btn')=>{const b=el('button',cls,label);b.type='button';b.onclick=fn;return b};
 const art=(kind)=>{const n=el('div','hw-art');n.innerHTML=heritageArt(kind);return n};
 const section=el('section','hw-card');section.id='classoraHeritageWeek';section.setAttribute('data-no-translate','');
 document.getElementById('classoraPromoCenter')?.after(section);
 let freeStrokes=null;
 let strokes=[],drawingColor='#b83e50',drawingWidth=7,seconds=20,streak=0;
 let dialog=null,body=null,round=null,tick=null,transition=null,opener=null,oldOverflow='',page='learn',read=new Set(),paint='#b83e50';
 const promo={id:'palestine-heritage-2026',kind:'heritage',titleAr:'خيط وحكاية • أسبوع التراث الفلسطيني',titleEn:'Thread & Story • Palestinian Heritage Week',bodyAr:'17–24 أكتوبر • اكتشف التطريز، ارسم غرزتك، وتحدَّ معرفتك بمسابقة ملوّنة.',bodyEn:'17–24 October • Explore tatreez, draw a motif and play the colourful heritage challenge.',target:'all',active:true};
 function countdown(){const left=Math.max(0,END-Date.now());return [Math.floor(left/86400000),Math.floor(left/3600000)%24,Math.floor(left/60000)%60,Math.floor(left/1000)%60].map(v=>String(v).padStart(2,'0')).join(' : ')}
 function refresh(){
  section.hidden=!activeAt()||!api.profile();if(section.hidden)return;
  section.replaceChildren();const copy=el('div','hw-card-copy');
  copy.append(el('span','hw-eyebrow',t('فعالية محدودة • 17–24 أكتوبر 2026','LIMITED EVENT • 17–24 OCTOBER 2026')));
  const clock=el('div','hw-clock');clock.append(el('span','',t('باقي على نهاية الأسبوع • أيام : ساعات : دقائق : ثوانٍ','EVENT ENDS IN • DAYS : HOURS : MINUTES : SECONDS')),el('strong','hw-countdown',countdown()));copy.append(clock);
  copy.append(el('h2','',t('خيط وحكاية','Thread & Story')),el('p','',t('أسبوع التطريز والتراث الفلسطيني','Palestinian Embroidery & Heritage Week')),el('p','hw-muted',t('كل غرزة حكاية. اكتشف، ارسم، والعب.','Every stitch tells a story. Discover, draw and play.')));
  const actions=el('div','hw-actions');actions.append(button(t('اكتشف الحكاية','Explore the story'),open),button(t('ابدأ التحدّي','Play the challenge'),()=>{open();setup()},'hw-btn hw-secondary'));copy.append(actions);section.append(copy,art());
 }
 function stop(){clearInterval(tick);clearTimeout(transition);tick=null;transition=null}
 function close(){body?.dispatchEvent(new Event('heritage:close'));stop();if(freeStrokes){strokes=freeStrokes;freeStrokes=null}dialog?.close();dialog?.remove();dialog=null;round=null;document.body.style.overflow=oldOverflow;opener?.focus()}
 function header(){body?.dispatchEvent(new Event('heritage:close'));body.classList.toggle('hw-arena',page==='quiz'||page==='result'||page==='draw-round');body.classList.toggle('hw-selection',page==='setup');body.replaceChildren();body.append(el('span','hw-eyebrow',t('خيط وحكاية • CLASSORA','THREAD & STORY • CLASSORA')))}
 function open(){if(dialog){dialog.focus();return}if(!activeAt())return;opener=document.activeElement;oldOverflow=document.body.style.overflow;dialog=el('dialog','hw-dialog');dialog.setAttribute('data-no-translate','');dialog.setAttribute('aria-label',t('أسبوع التراث الفلسطيني','Palestinian Heritage Week'));const top=el('div','hw-top');top.append(el('span','',t('أسبوع التراث الفلسطيني','Palestinian Heritage Week')),button('×',close,'hw-close'));top.lastChild.setAttribute('aria-label',t('إغلاق','Close'));body=el('div','hw-body');dialog.append(top,body);document.body.append(dialog);dialog.addEventListener('cancel',e=>{e.preventDefault();close()});dialog.showModal();document.body.style.overflow='hidden';learn();}
 function learn(){stop();round=null;page='learn';header();const hero=el('div','hw-intro');const words=el('div');words.append(el('h1','',t('تراثٌ نلبسه، وحكايةٌ نكملها.','Heritage we wear. Stories we carry.')),el('p','hw-muted',t('رحلة قصيرة بين الخيط والثوب والكوفية والدبكة. اقرأ، جرّب، ثم اختبر معرفتك.','A short journey through tatreez, thobes, keffiyehs and dabkeh. Read, create, then test your knowledge.')));hero.append(words,art());body.append(hero);
 activityLinks();const cards=el('div','hw-lessons');pairs.forEach((p,i)=>{const d=el('details','hw-lesson');d.open=i===0;const summary=el('summary','',String(i+1).padStart(2,'0')+' / '+t(p[0],p[1]));d.append(summary,el('p','',t(p[2],p[3])));d.ontoggle=()=>{if(d.open)read.add(i)};cards.append(d)});body.append(cards);
 const workshop=el('section','hw-workshop');workshop.append(el('h2','',t('مرسم الغرز','Stitch studio')),el('p','hw-muted',t('اختَر لونًا واضغط المربعات. اضغط الغرزة مرة ثانية لمسحها.','Choose a colour and tap squares. Tap a stitch again to erase it.')));
 const palette=el('div','hw-actions');['#b83e50','#27836b','#d8a644','#353442'].forEach((color,i)=>{const names=[t('أحمر','Red'),t('أخضر','Green'),t('ذهبي','Gold'),t('أسود','Black')];const b=button(names[i],()=>{paint=color;palette.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))},'hw-swatch');b.style.borderColor=color;b.setAttribute('aria-pressed',String(color===paint));palette.append(b)});workshop.append(palette);
 const grid=el('div','hw-stitches');for(let i=0;i<81;i++){const b=button('',()=>{const on=b.textContent!=='×';b.textContent=on?'×':'';b.style.color=paint;b.setAttribute('aria-pressed',String(on))},'hw-stitch');b.setAttribute('aria-label',t('غرزة ','Stitch ')+(i+1));b.setAttribute('aria-pressed','false');grid.append(b)}workshop.append(grid,button(t('امسح الرسم','Clear drawing'),()=>grid.querySelectorAll('button').forEach(b=>{b.textContent='';b.setAttribute('aria-pressed','false')}),'hw-btn hw-secondary'));body.append(workshop);
 const actions=el('div','hw-actions');actions.append(button(t('جاهز؟ ابدأ المسابقة','Ready? Start the challenge'),setup));body.append(actions);
 const sources=el('p','hw-sources');sources.append(el('span','',t('للاستزادة: ','Read more: ')));[['UNESCO · Tatreez','https://ich.unesco.org/en/RL/01722'],['UNESCO · Dabkeh','https://ich.unesco.org/en/RL/01998']].forEach(([label,url])=>{const a=el('a','',label);a.href=url;a.target='_blank';a.rel='noopener noreferrer';sources.append(a)});body.append(sources);dialog.scrollTop=0;
 }
 function activityLinks(){
 const activities=el('div','hw-activity-cards');
 [[t('ارسم حكايتك','Draw your story'),t('فرشاة، ألوان ورسم حرّ','Brushes, colours and free drawing'),'olive',drawing],
 [t('ذاكرة التراث','Heritage memory'),t('اقلب البطاقات وطابق الرسومات','Flip cards and match illustrations'),'scarf',memory],
 [t('من الخيط إلى الزخرفة','From thread to motif'),t('رتّب خطوات صناعة التطريز','Put the embroidery steps in order'),'thread',sequence],
 [t('ساحة التحدّي','Challenge arena'),t('ألوان، وقت، نقاط وحكايات','Colours, time, points and stories'),'stitch',setup]].forEach(([title,description,kind,fn])=>{const b=button('',fn,'hw-activity-card');b.append(art(kind),el('strong','',title),el('span','',description));activities.append(b)});body.append(activities);
 }
 function activityPage(title,description){stop();round=null;page='activity';header();body.append(button(t('العودة للفعاليات','Back to activities'),learn,'hw-btn hw-secondary'),el('h1','',title),el('p','hw-muted',description));dialog.scrollTop=0}
 function drawing(timed=null){
 if(!timed?.title)timed=null;
 if(timed){stop();page='draw-round';header();body.append(el('h1','hw-draw-title',t(timed.title[0],timed.title[1])),el('p','hw-muted',t(timed.tip[0],timed.tip[1])))}else activityPage(t('ارسم حكايتك','Draw your story'),t('ارسم بإصبعك أو بالماوس. اختر اللون وسُمك الفرشاة، واستعمل الممحاة أو التراجع. جرّب رسم غصن زيتون أو زخرفة هندسية؛ الرسمة لا تحتاج تكون مثالية.','Draw with your finger or mouse. Choose a colour and brush size, then use the eraser or undo. Try an olive branch or a geometric motif; your drawing does not need to be perfect.'));
 let drawingEnabled=!timed,drawDeadline=0;
 const workspace=el('div','hw-drawing-workspace');const tools=el('div','hw-drawing-tools');let erase=false;
 const label=el('label','',t('لون الفرشاة','Brush colour'));const color=el('input');color.type='color';color.value=drawingColor;color.oninput=()=>{drawingColor=color.value;erase=false;eraser.setAttribute('aria-pressed','false')};label.append(color);
 const widthLabel=el('label','',t('سُمك الفرشاة','Brush size'));const width=el('input');width.type='range';width.min='2';width.max='30';width.value=String(drawingWidth);width.oninput=()=>drawingWidth=Number(width.value);widthLabel.append(width);
 const eraser=button(t('ممحاة','Eraser'),()=>{erase=!erase;eraser.setAttribute('aria-pressed',String(erase))},'hw-btn hw-secondary');eraser.setAttribute('aria-pressed','false');
 const ns='http://www.w3.org/2000/svg';const board=document.createElementNS(ns,'svg');board.setAttribute('viewBox','0 0 800 600');board.setAttribute('role','img');board.setAttribute('aria-label',t('لوحة الرسم الحر','Free drawing board'));board.classList.add('hw-drawing-board');
 const render=()=>{board.replaceChildren();const paper=document.createElementNS(ns,'rect');paper.setAttribute('width','800');paper.setAttribute('height','600');paper.setAttribute('fill','#fffaf0');board.append(paper);for(const stroke of strokes){const path=document.createElementNS(ns,'polyline');path.setAttribute('points',stroke.points.map(p=>p.join(',')).join(' '));path.setAttribute('stroke',stroke.color);path.setAttribute('stroke-width',stroke.width);path.setAttribute('fill','none');path.setAttribute('stroke-linecap','round');path.setAttribute('stroke-linejoin','round');board.append(path)}};
 const point=e=>{const r=board.getBoundingClientRect();return [Math.max(0,Math.min(800,(e.clientX-r.left)/r.width*800)),Math.max(0,Math.min(600,(e.clientY-r.top)/r.height*600))]};let current=null,pointer=null;
 board.onpointerdown=e=>{if(!drawingEnabled||(timed&&Date.now()>=drawDeadline)||pointer!==null||e.button>0)return;e.preventDefault();pointer=e.pointerId;board.setPointerCapture(e.pointerId);const p=point(e);current={color:erase?'#fffaf0':drawingColor,width:erase?drawingWidth*3:drawingWidth,points:[p,[p[0]+.01,p[1]+.01]]};strokes.push(current);render()};
 board.onpointermove=e=>{if(!drawingEnabled||(timed&&Date.now()>=drawDeadline)||!current||e.pointerId!==pointer)return;current.points.push(point(e));board.lastChild.setAttribute('points',current.points.map(p=>p.join(',')).join(' '))};
 const end=()=>{current=null;pointer=null};board.onpointerup=end;board.onpointercancel=end;board.onlostpointercapture=end;
 const clear=()=>{if(!drawingEnabled)return;strokes=[];end();render()};
 tools.append(label,widthLabel,eraser,button(t('تراجع','Undo'),()=>{if(!drawingEnabled)return;strokes.pop();end();render()},'hw-btn hw-secondary'),button(t('مسح اللوحة','Clear canvas'),clear,'hw-btn hw-secondary'),button(t('احفظ الصورة على الهاتف','Save PNG to phone'),()=>{const copy=board.cloneNode(true);copy.setAttribute('xmlns',ns);copy.setAttribute('width','800');copy.setAttribute('height','600');saveHeritagePng(new XMLSerializer().serializeToString(copy),'classora-my-heritage-drawing.png').catch(console.warn)}));
 const quickColors=el('div','hw-quick-colors');[['#252a28','أسود','Black'],['#ffffff','أبيض','White'],['#27805d','أخضر','Green'],['#ce3f50','أحمر','Red'],['#d4a245','ذهبي','Gold'],['#466eae','أزرق','Blue']].forEach(([value,ar,en])=>{const b=button('',()=>{drawingColor=value;color.value=value;erase=false;eraser.setAttribute('aria-pressed','false');quickColors.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))},'hw-color-dot');b.style.background=value;b.setAttribute('aria-label',t(ar,en));b.setAttribute('aria-pressed',String(value===drawingColor));quickColors.append(b)});
 const challenge=el('div','hw-drawing-prompt');challenge.append(art(timed?.art||'olive'),el('p','',t('فكرة للرسم: خط منحني للغصن، أشكال بيضاوية للأوراق، ثم ثمار صغيرة. أو كوّن زخرفة بتكرار مثلثات ومعيّنات.','Drawing idea: a curved branch, oval leaves and small olives. Or repeat triangles and diamonds to make your own motif.')));if(timed){challenge.lastChild.textContent=t('فكرة تساعدك، مش لازم تقلّدها بالضبط.','An idea to help you, not a design you must copy exactly.');body.append(challenge)}
 workspace.append(quickColors,tools,board);if(!timed)workspace.append(challenge);body.append(workspace);render();
 if(timed){
  const bar=el('div','hw-draw-timerbar');const time=el('strong','hw-draw-time','2:00');const status=el('span','',t('جاهز؟ عندك دقيقتين من لحظة البدء.','Ready? You have two minutes from when you press start.'));status.setAttribute('role','status');
  let finished=false,drawingElapsed=120;
  const next=button(t('كمّل المسابقة','Continue quiz'),()=>{if(!finished)return;round.drawings.push({title:t(timed.title[0],timed.title[1]),svg:new XMLSerializer().serializeToString(board),elapsedSeconds:drawingElapsed,art:timed.art});strokes=freeStrokes||[];freeStrokes=null;showQuestion()},'hw-btn');next.hidden=true;
  const finishDrawing=()=>{if(finished)return;finished=true;drawingElapsed=drawDeadline?Math.max(1,Math.min(120,Math.ceil((Date.now()-(drawDeadline-120000))/1000))):120;drawingEnabled=false;end();clearInterval(tick);time.textContent='0:00';status.textContent=t('رسمتك جاهزة للحفظ والمشاركة!','Your artwork is ready to save as a photo.');next.hidden=false;done.hidden=true;workspace.classList.add('hw-drawing-finished')};
  const start=button(t('ابدأ تحدّي الرسم لدقيقتين','2:00 drawing challenge'),()=>{if(drawDeadline)return;drawDeadline=Date.now()+120000;drawingEnabled=true;start.hidden=true;done.hidden=false;status.textContent=t('ارسم وحاول تخلص بأسرع وقت. الأجمل بنختاره بالتصويت.','You can finish early to join the speed ranking.');tick=setInterval(()=>{const remaining=Math.max(0,Math.ceil((drawDeadline-Date.now())/1000));time.textContent=Math.floor(remaining/60)+':'+String(remaining%60).padStart(2,'0');if(!remaining)finishDrawing()},100)});
   const done=button(t('خلصت رسمتي','Finish drawing now'),()=>{if(!drawDeadline||finished)return;if(strokes.length<3){status.textContent=t('ارسم 3 خطوط على الأقل قبل الإنهاء.','Draw at least three strokes before finishing.');return}finishDrawing()},'hw-btn hw-secondary');done.hidden=true;
  bar.append(time,status,start,done,next);workspace.before(bar);board.setAttribute('aria-describedby','hwDrawingHelp');status.id='hwDrawingHelp';
 }

 }
 function memory(){
 activityPage(t('ذاكرة التراث','Heritage memory'),t('اقلب بطاقتين في كل محاولة. طابق كل رسمة مع نسختها، وانتبه لاسمها. البطاقتان المختلفتان ترجعان مقلوبتين؛ اكشف الأزواج الأربعة لتكمل الفعالية.','Flip two cards per turn. Match each illustration with its twin and read its name. Different cards turn back over. Find all four pairs to complete the activity.'));
 let first=null,locked=false,moves=0,found=0;const status=el('p','hw-game-status',t('الأزواج: 0 / 4','Pairs: 0 / 4'));status.setAttribute('role','status');const grid=el('div','hw-memory');
 shuffled([...MEMORY_PAIRS,...MEMORY_PAIRS]).forEach(row=>{const b=button('?',()=>{if(locked||b.dataset.open==='true'||b.dataset.matched)return;b.dataset.open='true';b.replaceChildren(art(row[2]),el('span','',t(row[0],row[1])));b.setAttribute('aria-label',t(row[0],row[1]));if(!first){first={b,row};return}moves++;if(first.row[2]===row[2]){b.dataset.matched='true';first.b.dataset.matched='true';b.disabled=true;first.b.disabled=true;first=null;found++;status.textContent=found===4?t('أحسنت! اكتشفت كل الأزواج في ','Well done! All pairs found in ')+moves+t(' محاولات.',' turns.'):t('الأزواج: ','Pairs: ')+found+' / 4'}else{locked=true;const previous=first.b;first=null;transition=setTimeout(()=>{for(const card of [previous,b]){card.dataset.open='false';card.textContent='?';card.setAttribute('aria-label',t('اقلب البطاقة','Flip card'))}locked=false},900)}},'hw-memory-card');b.setAttribute('aria-label',t('اقلب البطاقة','Flip card'));grid.append(b)});body.append(status,grid,button(t('العب مرة ثانية','Play again'),memory,'hw-btn hw-secondary'));
 }
 function sequence(){
 activityPage(t('من الخيط إلى الزخرفة','From thread to motif'),t('في هذا النشاط التعليمي نبسّط العمل إلى أربع خطوات. اضغط الخطوات بالترتيب: تجهيز الأدوات، تخطيط الزخرفة، تنفيذ الغرز، ثم إنهاء العمل. عند الخطأ اقرأ التلميح وجرّب مجددًا.','This activity simplifies the process into four steps. Select them in order: prepare tools, plan the motif, stitch it, then finish the work. If you make a mistake, read the hint and try again.'));
 const steps=[['جهّز القماش والإبرة والخيط','Prepare fabric, needle and thread'],['اختر الزخرفة وحدّد مكانها','Choose the motif and its placement'],['نفّذ الغرز بتأنٍ','Work the stitches carefully'],['ثبّت أطراف الخيط وافحص العمل','Secure thread ends and check the work']];let next=0;const status=el('p','hw-game-status',t('ابدأ بالخطوة الأولى.','Start with the first step.'));status.setAttribute('role','status');const stack=el('div','hw-sequence');shuffled(steps.map((x,i)=>({x,i}))).forEach(({x,i})=>{const b=button(t(x[0],x[1]),()=>{if(i===next){next++;b.disabled=true;b.classList.add('hw-step-done');b.textContent=next+' / '+t(x[0],x[1]);status.textContent=next===4?t('رائع! صارت حكاية الزخرفة كاملة.','Wonderful! Your motif’s story is complete.'):t('صحيح! اختَر الخطوة التالية.','Correct! Choose the next step.')}else{status.textContent=t('تلميح: ','Hint: ')+t(steps[next][0],steps[next][1])}},'hw-step');stack.append(b)});body.append(art('thread'),status,stack,button(t('أعد الترتيب','Try again'),sequence,'hw-btn hw-secondary'));
 }
 function questions(){return shuffled(BANK).slice(0,10).map((q,i)=>{const options=q[3].map((en,j)=>t(q[2][j],en));return {id:'heritage-'+i,type:'mcq',topic:'palestinian-heritage',topicKey:'palestinian-heritage',prompt:t(q[0],q[1]),options:shuffled(options),answer:options[0],explanation:t(q[5]||pairs[q[4]][2],q[6]||pairs[q[4]][3]),points:1000}})}
 function setup(){stop();round=null;page='setup';header();if(!activeAt()){body.append(el('h1','',t('انتهى أسبوع التراث','Heritage Week has ended')),button(t('ارجع للشرح','Back to lessons'),learn));return;}body.append(art('thobe'),el('h1','',t('تحدّي خيط وحكاية','Thread & Story challenge')),el('p','hw-muted',t('10 أسئلة تفكير + 3 جولات رسم، كل جولة دقيقتين بعد الأسئلة 3 و6 و9. إجابة أسرع تكسب نقاط أكثر، وبالرسم تقدر تخلص بكير وتتصدّر السرعة وتنشر رسمتك للتصويت.','10 questions and 3 two-minute drawing rounds after questions 3, 6 and 9. Fast correct answers earn more points. Finish drawing early to rank by speed, then optionally share your artwork for voting.')));
 const pace=el('div','hw-pace');pace.append(el('span','',t('إيقاع التحدّي الفردي:','Solo challenge pace:')));[[30,t('هادئ · 30 ثانية','Relaxed · 30 sec')],[20,t('تحدّي · 20 ثانية','Challenge · 20 sec')],[12,t('سريع · 12 ثانية','Sprint · 12 sec')]].forEach(([value,label])=>{const b=button(label,()=>{seconds=value;pace.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))},'hw-btn hw-secondary');b.setAttribute('aria-pressed',String(seconds===value));pace.append(b)});body.append(pace,el('p','hw-mode-note',t('جولات الرسم ضمن اللعب الفردي. غرفة الصف المباشرة مخصّصة للأسئلة.','Drawing rounds are part of solo play. Live class rooms use the question rounds.')));
 const actions=el('div','hw-actions');actions.append(button(t('العب الآن','Play now'),()=>{if(!activeAt()){setup();return}streak=0;round={qs:questions(),i:0,score:0,correct:0,review:[],drawings:[],drawPrompts:shuffled(DRAW_PROMPTS).slice(0,3)};showQuestion()}));if(api.canHost())actions.append(button(t('أنشئ مسابقة مباشرة للصف','Host a live class game'),async()=>{if(!activeAt())return;const qs=questions();close();await api.host(qs,t('خيط وحكاية • التراث الفلسطيني','Thread & Story • Palestinian Heritage'))},'hw-btn hw-secondary'));actions.append(button(t('الشرح والمرسم','Lessons & stitch studio'),learn,'hw-btn hw-secondary'));body.append(actions);dialog.scrollTop=0;
 }
 function showQuestion(){stop();page='quiz';header();const ornament=el('div','hw-needle-ornament');ornament.innerHTML=heritageArt('needle');ornament.setAttribute('aria-hidden','true');body.append(ornament);const q=round.qs[round.i];round.deadline=Date.now()+seconds*1000;round.answered=false;
 const stats=el('div','hw-stats');stats.append(el('span','',`${round.i+1} / ${round.qs.length}`),el('b','',round.score+' '+t('نقطة','points')));const time=el('strong','hw-timer',String(seconds));stats.append(time);body.append(stats);const progress=el('progress','hw-progress');progress.max=seconds;progress.value=seconds;progress.setAttribute('aria-label',t('الوقت المتبقي','Time remaining'));body.append(progress,el('h1','hw-question',q.prompt));
 const trail=el('div','hw-question-trail');for(let i=0;i<round.qs.length;i++){const dot=el('span',i<round.i?'done':i===round.i?'current':'',String(i+1));trail.append(dot)}body.append(trail);
 const choices=el('div','hw-choices');const shapes=['▲','◆','●','■'];q.options.forEach((option,i)=>{const b=button('',()=>answer(option),'hw-choice hw-choice-'+i);b.append(el('span','hw-shape',shapes[i]),el('span','',option));choices.append(b)});body.append(choices);tick=setInterval(()=>{const remaining=Math.max(0,(round.deadline-Date.now())/1000);time.textContent=String(Math.ceil(remaining));progress.value=remaining;if(remaining<=0)answer(null)},100);dialog.scrollTop=0;
 }
 function answer(value){if(!round||round.answered)return;round.answered=true;clearInterval(tick);const q=round.qs[round.i];const remaining=Math.max(0,round.deadline-Date.now());const correct=value===q.answer&&remaining>0;const earned=correct?Math.round(500+500*remaining/(seconds*1000)):0;round.score+=earned;if(correct){round.correct++;streak++}else streak=0;round.review.push({q,correct});body.querySelectorAll('.hw-choice').forEach(b=>{b.disabled=true;if(b.lastChild.textContent===q.answer)b.classList.add('hw-correct');if(b.lastChild.textContent===value&&!correct)b.classList.add('hw-wrong')});
 const feedback=el('div','hw-feedback');feedback.setAttribute('role','status');feedback.append(el('h2','',correct?t('صحيح! +','Correct! +')+earned:remaining<=0?t('انتهى الوقت','Time is up'):t('نتعلّم من المحاولة','A chance to learn')),el('b','',t('الإجابة الصحيحة: ','Correct answer: ')+q.answer),el('p','',q.explanation));if(streak>=2)feedback.prepend(el('div','hw-streak',streak+' '+t('إجابات صحيحة متتالية!','correct answers in a row!')));if(correct){const celebration=el('div','hw-confetti');celebration.setAttribute('aria-hidden','true');for(let i=0;i<16;i++){const piece=el('i');piece.style.setProperty('--i',i);celebration.append(piece)}feedback.append(celebration)}feedback.append(button(round.i===round.qs.length-1?t('شاهد النتيجة','See results'):t('السؤال التالي','Next question'),between));body.append(feedback);feedback.scrollIntoView({block:'nearest',behavior:'smooth'});
 }
 function between(){stop();page='interlude';header();const inter=el('div','hw-interlude');inter.append(art('scarf'),el('h1','',t('غرزة جديدة… حكاية جديدة','Another stitch… another story')));body.append(inter);dialog.scrollTop=0;transition=setTimeout(()=>{if(!dialog||!round)return;round.i++;if([3,6,9].includes(round.i)){freeStrokes=strokes;strokes=[];drawing(round.drawPrompts[round.i/3-1])}else round.i<round.qs.length?showQuestion():finish()},1100)}
 function finish(){stop();page='result';header();body.append(art(),el('span','hw-eyebrow',t('اكتمل التحدّي','CHALLENGE COMPLETE')),el('h1','',round.score.toLocaleString()+' / 10,000'),el('p','',round.correct+' / 10 '+t('إجابات صحيحة','correct answers')));if(round.drawings.length){const gallery=el('div','hw-drawing-gallery');round.drawings.forEach(item=>{const card=el('figure');const preview=el('div');preview.innerHTML=item.svg;card.append(preview,el('figcaption','',item.title),el('small','',item.elapsedSeconds+' '+t('ثانية','seconds')),button(t('احفظ رسمتي على الهاتف','Save PNG to phone'),()=>saveHeritagePng(item.svg,'classora-art-'+item.art+'.png').catch(console.warn),'hw-btn hw-secondary'));gallery.append(card)});body.append(el('h2','',t('معرض رسوماتك','Your drawing gallery')),gallery);showSharedHeritageGallery({target:body,t,drawings:round.drawings})}const wrong=round.review.filter(x=>!x.correct);if(wrong.length){const d=el('details','hw-lesson');d.append(el('summary','',t('راجع الأسئلة التي تحتاج تدريبًا','Review questions to practise')));wrong.forEach(({q})=>d.append(el('h3','',q.prompt),el('p','',q.answer+' — '+q.explanation)));body.append(d)}const actions=el('div','hw-actions');actions.append(button(t('تحدّي جديد','Play again'),setup),button(t('ارجع للحكاية','Back to the story'),learn,'hw-btn hw-secondary'));body.append(actions);dialog.scrollTop=0}
 let wasActive=activeAt(),lastLiveKey='';
 setInterval(()=>{document.querySelectorAll('.hw-countdown').forEach(x=>x.textContent=countdown());const active=activeAt();if(active!==wasActive){wasActive=active;refresh();window.classoraHomeV112?.refresh()}},1000);
 new MutationObserver(()=>{refresh();if(dialog&&!round){page==='setup'?setup():page==='activity'?null:learn()}}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 return {open,refresh,active:activeAt,promo,art:heritageArt,translate:t,onLiveRoom(room){const modal=document.getElementById('competitionModal');const isHeritage=room.currentQuestion?.topicKey==='palestinian-heritage';modal?.classList.toggle('hw-live',isHeritage);const key=room.code+':'+room.currentIndex+':'+room.status;if(isHeritage&&room.status==='result'&&lastLiveKey!==key){let banner=document.getElementById('hwLiveScarf');if(!banner){banner=el('div','hw-live-scarf');banner.id='hwLiveScarf';document.getElementById('competitionGame')?.append(banner)}banner.innerHTML=heritageArt('scarf');const entry=BANK.find(q=>q[0]===room.currentQuestion?.prompt||q[1]===room.currentQuestion?.prompt);if(entry)banner.append(el('p','',t(entry[5]||pairs[entry[4]][2],entry[6]||pairs[entry[4]][3])));banner.hidden=false}else if(room.status!=='result'||!isHeritage){const banner=document.getElementById('hwLiveScarf');if(banner)banner.hidden=true}lastLiveKey=key}};
}
