import {mountPHScene} from './ph-lab.js?v=89';
import {acidsTopic,phSamples,phColor} from './learning-content.js?v=89';

export function mountSubjectLabs(api){
 const L=(a,e)=>api.language()==='ar'?a:e, pick=a=>a[api.language()==='ar'?0:1];
 const node=(tag,cls,text)=>{const e=document.createElement(tag);e.className=cls||'';if(text)e.textContent=text;return e};
 const button=(text,fn)=>{const b=node('button','sl-button',text);b.type='button';b.onclick=fn;return b};
 let active=null;
 function open(kind){
  if(active)active.close();
  const source=document.activeElement,lobby=document.querySelector('.platform-lobby'),scroll=lobby?.scrollTop||0,windowY=window.scrollY;
  const page=node('dialog','subject-lab-page');page.dataset.learningPage=kind;page.dataset.noTranslate='';page.dir=api.language()==='ar'?'rtl':'ltr';
  const title=kind==='acids'?L('مختبر الحموضية والقاعدية','Acids & Bases Lab'):L('مختبر المضاف والمضاف إليه','Idafa Grammar Lab');
  const header=node('header','sl-header'),back=button(L('رجوع إلى اللوبي','Back to lobby'),()=>leave());
  back.classList.add('sl-back');header.append(back,node('span','sl-brand','CLASSORA / LABS'));
  const main=node('main','sl-main');main.append(node('p','sl-eyebrow',kind==='acids'?L('علوم · اكتشف بالتجربة','SCIENCE · LEARN BY EXPLORING'):L('عربي · اللغة بين إيديك','ARABIC · LANGUAGE IN YOUR HANDS')),node('h1','',title));
  page.append(header,main);document.body.append(page);page.setAttribute('aria-label',title);page.showModal();
  history.pushState({classoraSubject:kind},'',location.href);
  let cleanup=()=>{},closed=false;
  function leave(){if(history.state?.classoraSubject===kind)history.back();else page.close()}
  function onPop(){page.close()}
  window.addEventListener('popstate',onPop);
  page.addEventListener('cancel',e=>{e.preventDefault();leave()});
  page.addEventListener('close',()=>{if(closed)return;closed=true;cleanup();window.removeEventListener('popstate',onPop);page.remove();active=null;requestAnimationFrame(()=>{if(lobby)lobby.scrollTop=scroll;window.scrollTo(0,windowY);if(source?.isConnected)source.focus({preventScroll:true})})},{once:true});
  active={close:()=>page.close()};
  const grid=node('div','sl-grid'),visual=node('section','sl-visual'),info=node('section','sl-info');grid.append(visual,info);main.append(grid);
  if(kind==='acids')cleanup=acidLab(visual,info);else cleanup=idafaLab(visual,info);
  main.append(node('p','sl-footnote',L('استكشف باللمس أو الماوس. زر الرجوع يعيدك لنفس مكانك.','Explore with touch or mouse. Back returns you to the same place.')));
  back.focus({preventScroll:true});
 }
 function acidLab(visual,info){
  const host=node('div','sl-scene');host.setAttribute('aria-label',L('كأس ومقياس pH ثلاثي الأبعاد','3D beaker and pH scale'));visual.append(host);
  let fallback;const view=mountPHScene(host,api.THREE,()=>{fallback=node('div','sl-beaker-space');fallback.innerHTML='<div class="sl-beaker"><div class="sl-liquid"></div><i></i><i></i><i></i></div>';host.append(fallback)});
  const readout=node('p','sl-readout');readout.setAttribute('aria-live','polite');
  const label=node('label','sl-label',L('غيّر قيمة pH','Change pH')),slider=node('input');slider.type='range';slider.min=0;slider.max=14;slider.step=1;slider.value=7;slider.setAttribute('aria-label','pH');label.append(slider);
  const scale=node('div','sl-scale');for(let n=0;n<15;n++){const b=button(String(n),()=>setPH(n));b.style.background=phColor(n);b.setAttribute('aria-label','pH '+n);scale.append(b)}
  visual.append(readout,label,scale,node('p','sl-muted',L('أقل من 7 حمضي · 7 متعادل · أكبر من 7 قاعدي','Below 7: acidic · 7: neutral · Above 7: basic')));
  const samples=node('div','sl-samples');for(const [,p,n]of phSamples)samples.append(button(pick(n),()=>setPH(p)));info.append(node('h2','',L('اختَر محلولًا','Choose a solution')),samples,node('h2','',L('شو بصير؟','What happens?')));
  const explanation=node('p','sl-explanation');info.append(explanation,node('h2','',L('الفكرة العلمية','The science')),node('p','',pick(acidsTopic.lesson)),node('p','sl-note',pick(acidsTopic.example)));
  info.append(button(L('ابدأ اختبار','Start test'),()=>{if(api.isGuest()){let note=info.querySelector('[data-login-note]');if(!note){note=node('p','sl-note',L('سجّل دخولك لتبدأ الاختبار وتحفظ نتيجتك. ارجع للّوبي ثم افتح حسابك.','Sign in to start the test and save your result. Return to the lobby and open your account.'));note.dataset.loginNote='';note.setAttribute('role','status');info.append(note)}return}api.acidTest()}));
  function setPH(p){slider.value=String(p);view.setPH(p);if(fallback)fallback.style.setProperty('--solution',phColor(p));readout.textContent='pH '+p+' · '+(p<7?L('حمضي','Acidic'):p>7?L('قاعدي','Basic'):L('متعادل','Neutral'));explanation.textContent=p<7?L('هذا المحلول حمضي. كل درجة أقل تعني نشاطًا أكبر لأيونات الهيدروجين بعشرة أضعاف.','This solution is acidic. Each one-unit decrease means ten times greater hydrogen-ion activity.'):p>7?L('هذا المحلول قاعدي. اللون هنا لون المؤشر العام، وليس لون المادة الحقيقي.','This solution is basic. The color represents a universal indicator, not the substance’s natural color.'):L('هذا المحلول متعادل عند نحو 25°م، مثل الماء النقي.','This solution is neutral at about 25°C, like pure water.');[...scale.children].forEach((b,n)=>b.setAttribute('aria-pressed',String(p===n)))}
  slider.oninput=()=>setPH(Number(slider.value));setPH(7);return()=>view.dispose();
 }
 function idafaLab(visual,info){
  const examples=[['كِتابُ','الطالبِ','The student’s book','كتابُ: مضاف مرفوع بالضمة. الطالبِ: مضاف إليه مجرور بالكسرة.'],['بابُ','المدرسةِ','The school’s door','بابُ: مضاف مرفوع بالضمة. المدرسةِ: مضاف إليه مجرور بالكسرة.'],['قَلَمُ','المعلّمِ','The teacher’s pen','قلمُ: مضاف مرفوع بالضمة. المعلّمِ: مضاف إليه مجرور بالكسرة.']];
  const scene=node('div','sl-book-space'),book=node('div','sl-book');book.setAttribute('role','group');book.setAttribute('aria-label',L('كتاب ثلاثي الأبعاد تفاعلي','Interactive three-dimensional book'));
  const cover=node('div','sl-book-cover'),left=button('',()=>select(0)),right=button('',()=>select(1));left.className='sl-book-leaf first';right.className='sl-book-leaf second';book.append(cover,left,right);scene.append(book);visual.append(scene);
  let which=0,part=0;const sentence=node('p','sl-sentence');sentence.dir='rtl';sentence.lang='ar';sentence.dataset.noTranslate='';visual.append(sentence);
  const label=node('label','sl-label',L('دوّر الكتاب','Rotate the book')),turn=node('input');turn.type='range';turn.min=-40;turn.max=40;turn.value=-12;turn.setAttribute('aria-label',L('زاوية الكتاب','Book rotation'));label.append(turn);visual.append(label,node('p','sl-muted',L('اضغط على صفحة من الكتاب لتفهم دور الكلمة.','Tap either page to explore that word’s role.')));turn.oninput=()=>book.style.setProperty('--book-y',turn.value+'deg');
  const picker=node('div','sl-samples');examples.forEach((x,n)=>picker.append(button(L(x[0]+' '+x[1],x[2]),()=>{which=n;render()})));
  const role=node('h2'),detail=node('p','sl-explanation'),translation=node('p','sl-muted'),parse=node('p','sl-note');detail.setAttribute('aria-live','polite');info.append(node('h2','',L('ركّب المعنى','Build the meaning')),picker,role,detail,translation,node('h2','',L('القاعدة','The rule')),node('p','',L('الإضافة اسمين مرتبطين: الأول مضاف، والثاني مضاف إليه مجرور. المضاف في الإضافة المعنوية لا يأخذ أل أو تنوينًا. حركة آخر المضاف تتحدد حسب موقعه في الجملة.','Idafa joins two nouns: the first is the muḍāf, and the second is the genitive muḍāf ilayh. In a semantic idafa, the first noun has neither the definite article nor tanwīn. Its case depends on its role in the sentence.')),parse);
  function select(p){part=p;render()}
  function render(){const x=examples[which];left.textContent=x[0];right.textContent=x[1];left.lang=right.lang='ar';left.setAttribute('aria-pressed',String(part===0));right.setAttribute('aria-pressed',String(part===1));sentence.textContent=x[0]+' '+x[1];translation.textContent=x[2];role.textContent=part===0?L('المضاف: '+x[0],'Muḍāf: '+x[0]):L('المضاف إليه: '+x[1],'Muḍāf ilayh: '+x[1]);detail.textContent=part===0?L('الاسم الأول: الشيء الذي ننسبه إلى ما بعده. نسأل: كتابُ مَن؟ بابُ ماذا؟','The first noun is the thing being specified. Ask: whose book? Which door?'):L('الاسم الثاني يكمل المعنى ويكون مجرورًا. هنا تدل الكسرة على الجر.','The second noun completes the meaning and is genitive. Here, kasra marks the genitive case.');parse.textContent=L('في جملة «'+x[0]+' '+x[1]+' جديدٌ»: '+x[3],'In a sentence meaning “'+x[2]+' is new”, the first noun is nominative; the second is genitive with kasra.');[...picker.children].forEach((b,n)=>b.setAttribute('aria-pressed',String(n===which)))}render();
  let start=0,angle=-12;scene.onpointerdown=e=>{if(e.target.closest('button'))return;start=e.clientX;angle=Number(turn.value);scene.setPointerCapture(e.pointerId)};scene.onpointermove=e=>{if(!scene.hasPointerCapture(e.pointerId))return;turn.value=String(Math.max(-40,Math.min(40,angle+(e.clientX-start)/3)));turn.oninput()};return()=>{};
 }
 return {open};
}
