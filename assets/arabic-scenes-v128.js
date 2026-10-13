import {AR_ROLES,AR_MARKERS} from './arabic-catalog-v119.js?v=119';
import {escapeMath as E} from './math-scenes-v119.js?v=119';
const verbRoles=new Set(['past','present','verb','command','passive','subjunctive','jussive','fixed','inflected']);
const subjectRoles=new Set(['subject','topic','kanaNoun','innaNoun','noNoun','pronoun']);
const complements={object:['ماذا؟','What?'],state:['كيف؟','How?'],purpose:['لماذا؟','Why?'],time:['متى؟','When?'],place:['أين؟','Where?'],absolute:['كيف وقع الفعل أو كم مرة؟','How did it happen, or how often?'],with:['مع ماذا؟','Alongside what?'],specification:['ماذا تقصد الكمية أو النسبة؟','What does the quantity or relation mean?']};
export function arabicStructure(d,example,active=0,showAll=false,language='ar'){
 const en=language==='en',ix=en?1:0,T=(a,b)=>en?b:a;
 const word=(t,i)=>`<button type="button" class="ca-word ${i===active?'selected':''}" data-token="${i}" aria-pressed="${i===active}"><b lang="ar" dir="rtl">${E(t.word)}</b><span dir="${en?'ltr':'rtl'}">${showAll||i===active?E(AR_ROLES[t.role][ix]):T('اكتشف الدور','Discover role')}</span></button>`;
 const rows=example.tokens.map((t,i)=>({t,i})),groups=[];
 const group=(label,items,extra='')=>{if(items.length)groups.push(`<section class="ca-station"><small>${E(label)}</small>${items.map(({t,i})=>word(t,i)).join('')}${extra}</section>`)};
 const one=(r,label,extra='')=>group(label,[r],extra);
 let note='';
 switch(d.kind){
 case 'classify':for(const role of new Set(rows.map(r=>r.t.role)))group(AR_ROLES[role][ix],rows.filter(r=>r.t.role===role));note=T('كل حجرة تجمع الكلمات من النوع نفسه. بدّل المثال وقارن التصنيف.','Each compartment groups the same word type. Change the example and compare.');break;
 case 'timeline':for(const role of ['past','present','command'])group(T(...({past:['حدث مضى','Past event'],present:['حاضر أو مستقبل حسب السياق','Present or future in context'],command:['طلب فعل','An instruction']}[role])),rows.filter(r=>r.t.role===role));break;
 case 'nominal':group(T('المسند إليه: عمّن نتحدث؟','Subject: who or what?'),rows.filter(r=>r.t.role==='topic'));group(T('المسند: ماذا نخبر عنه؟','Predicate: what do we say?'),rows.filter(r=>r.t.role!=='topic'));note=T('الكفتان مرتبطتان بالمعنى؛ حركة كل اسم تعتمد على موقعه.','The two sides complete a meaning; endings follow each noun’s role.');break;
 case 'action':group(T('الحدث','Action'),rows.filter(r=>verbRoles.has(r.t.role)));group(T('من قام به؟','Who did it?'),rows.filter(r=>subjectRoles.has(r.t.role)));group(T('ما وقع عليه؟','What received it?'),rows.filter(r=>!verbRoles.has(r.t.role)&&!subjectRoles.has(r.t.role)));break;
 case 'agreement':rows.forEach(r=>one(r,AR_ROLES[r.t.role][ix]));note=T('قارن التعريف والتنكير والجنس والعدد والإعراب. بدّل المثال وراقب المطابقة.','Compare definiteness, gender, number and case. Change the example to trace agreement.');break;
 case 'bridge':rows.forEach(r=>one(r,AR_ROLES[r.t.role][ix]));note=T('ابدأ بالكلمة الرابطة، ثم تتبّع أثرها في الكلمات حولها.','Start with the linking word, then trace its relationship to neighbouring words.');break;
 case 'number':rows.forEach(r=>{const count=r.t.role==='singular'?1:r.t.role==='dual'?2:['plural','soundM','soundF','broken'].includes(r.t.role)?3:0;one(r,AR_ROLES[r.t.role][ix],count?`<div class="ca-count-dots" aria-label="${count===3?T('أكثر من اثنين','More than two'):count}">${'<i></i>'.repeat(count)}${count===3?'<span>+</span>':''}</div>`:'')});note=T('النقاط تمثل مفردًا أو مثنى أو جمعًا؛ علامة الجمع تختلف بحسب نوعه وموقعه.','Dots show singular, dual or plural; plural endings depend on form and role.');break;
 case 'case':rows.forEach(r=>one(r,r.t.marker?AR_MARKERS[r.t.marker][ix]:AR_ROLES[r.t.role][ix]));note=T('اختَر الكلمة ثم اربط الوظيفة بالحكم والعلامة؛ لا تعتمد على الحركة وحدها.','Select a word, then connect function, case and marker; do not use the ending alone.');break;
 case 'passive':rows.forEach(r=>one(r,AR_ROLES[r.t.role][ix]));note=rows.some(r=>r.t.role==='deputy')?T('حُذف الفاعل، وتغيّرت صيغة الفعل، وصار المفعول به نائب فاعل مرفوعًا.','The doer is omitted, the verb changes form, and the former object becomes a nominative passive subject.'):T('هذا هو البناء للمعلوم. اضغط المثال التالي لترى تغيّر الفعل وانتقال المفعول به إلى نائب فاعل.','This is active voice. Next example changes the verb and promotes the object to passive subject.');break;
 case 'satellite':group(T('الحدث وصاحبه','Event and participant'),rows.filter(r=>!complements[r.t.role]));rows.filter(r=>complements[r.t.role]).forEach(r=>one(r,T(...complements[r.t.role])));note=T('كل فرع يجيب عن سؤال مختلف، لذلك ليست كل كلمة منصوبة مفعولًا به.','Each branch answers a different question; not every accusative is a direct object.');break;
 case 'morphology':rows.forEach(r=>one(r,AR_ROLES[r.t.role][ix]));note=T('تتبّع أصل الكلمة وبنيتها وما أُضيف أو تغيّر؛ بدّل المثال لمقارنة بنية أخرى.','Trace the original form, structure, additions or changes; switch examples to compare another form.');break;
 case 'clause':rows.forEach(r=>one(r,AR_ROLES[r.t.role][ix]));note=T('الإطار الخارجي للجملة كاملة، والإطارات الداخلية لوظائف أجزائها.','The outer frame is the whole sentence; inner frames show its parts.');break;
 case 'governor':rows.forEach(r=>one(r,r.t.marker?AR_ROLES[r.t.role][ix]+' · '+AR_MARKERS[r.t.marker][ix]:AR_ROLES[r.t.role][ix]));note=(en?d.english:d.ar)+' '+T('بدّل المثال وراقب موقع الكلمة وعلامتها.','Change the example and observe each word’s role and ending.');break;
 default:throw new Error('Missing Arabic structure: '+d.kind);
 }
 return {html:`<p class="ca-live-sentence" lang="ar" dir="rtl">${E(example.tokens.map(t=>t.word).join(' '))}</p><div class="ca-structure ca-structure-${d.kind}" dir="rtl">${groups.join('')}</div>`,note};
}
