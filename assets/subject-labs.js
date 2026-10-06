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
  const page=node('dialog','subject-lab-page');page.dataset.learningPage=kind;page.dataset.noTranslate='';page.dir=kind==='idafa'?'rtl':(api.language()==='ar'?'rtl':'ltr');
  const title=kind==='acids'?L('مختبر الحموضية والقاعدية','Acids & Bases Lab'):'مختبر المضاف والمضاف إليه';
  const header=node('header','sl-header'),back=button(kind==='idafa'?'رجوع إلى اللوبي':L('رجوع إلى اللوبي','Back to lobby'),()=>leave());
  back.classList.add('sl-back');header.append(back,node('span','sl-brand','CLASSORA / LABS'));
  const main=node('main','sl-main');main.append(node('p','sl-eyebrow',kind==='acids'?L('علوم · اكتشف بالتجربة','SCIENCE · LEARN BY EXPLORING'):'عربي · اللغة بين إيديك'),node('h1','',title));
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
  main.append(node('p','sl-footnote',kind==='idafa'?'استكشف باللمس أو الماوس. زر الرجوع يعيدك لنفس مكانك.':L('استكشف باللمس أو الماوس. زر الرجوع يعيدك لنفس مكانك.','Explore with touch or mouse. Back returns you to the same place.')));
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
  const examples=[
   {pair:['كتابُ','الطالبِ'],sentence:['هذا','كتابُ','الطالبِ','الجديدُ'],pairIndexes:[1,2],translation:'The student’s new book',parse:'كتابُ: مضاف مرفوع بالضمة. الطالبِ: مضاف إليه مجرور بالكسرة.'},
   {pair:['بابُ','المدرسةِ'],sentence:['فُتِحَ','بابُ','المدرسةِ','صباحًا'],pairIndexes:[1,2],translation:'The school door was opened in the morning',parse:'بابُ: مضاف مرفوع بالضمة. المدرسةِ: مضاف إليه مجرور بالكسرة.'},
   {pair:['قلمُ','المعلّمِ'],sentence:['ضاعَ','قلمُ','المعلّمِ','في','الصفِّ'],pairIndexes:[1,2],translation:'The teacher’s pen was lost in class',parse:'قلمُ: مضاف مرفوع بالضمة. المعلّمِ: مضاف إليه مجرور بالكسرة.'},
   {pair:['حديقةُ','البيتِ'],sentence:['حديقةُ','البيتِ','جميلةٌ'],pairIndexes:[0,1],translation:'The house garden is beautiful',parse:'حديقةُ: مضاف مرفوع بالضمة. البيتِ: مضاف إليه مجرور بالكسرة.'},
   {pair:['نافذةَ','الغرفةِ'],sentence:['فتحتُ','نافذةَ','الغرفةِ','صباحًا'],pairIndexes:[1,2],translation:'I opened the room window in the morning',parse:'نافذةَ: مضاف منصوب بالفتحة حسب موقعه في الجملة. الغرفةِ: مضاف إليه مجرور بالكسرة.'},
   {pair:['مفتاحُ','السيارةِ'],sentence:['مفتاحُ','السيارةِ','على','الطاولةِ'],pairIndexes:[0,1],translation:'The car key is on the table',parse:'مفتاحُ: مضاف مرفوع بالضمة. السيارةِ: مضاف إليه مجرور بالكسرة.'}
  ];
  const scene=node('div','sl-book-space'),book=node('div','sl-book');book.setAttribute('role','group');book.setAttribute('aria-label','كتاب ثلاثي الأبعاد تفاعلي');
  const cover=node('div','sl-book-cover'),left=button('',()=>selectPage(0)),right=button('',()=>selectPage(1));left.className='sl-book-leaf first';right.className='sl-book-leaf second';book.append(cover,left,right);scene.append(book);visual.append(scene);
  let which=0,part=0,mode='sentence',selectedWords=new Set(),showTranslation=false;
  const modeToolbar=node('div','sl-mode-toolbar'),sentenceMode=button('جملة',()=>setMode('sentence')),pairMode=button('كلمتين',()=>setMode('pair')),nextExample=button('مثال جديد',()=>setExample((which+1)%examples.length)),translationToggle=button('إظهار الترجمة',()=>{showTranslation=!showTranslation;renderTranslation()});
  translationToggle.classList.add('sl-translation-toggle');modeToolbar.append(sentenceMode,pairMode,nextExample,translationToggle);visual.append(modeToolbar);
  const prompt=node('p','sl-muted','حدّد الكلمتين اللتين تكوّنان المضاف والمضاف إليه. أحيانًا ستظهر جملة كاملة وأحيانًا كلمتان فقط.');
  const wordPicker=node('div','sl-word-picker');wordPicker.dir='rtl';wordPicker.lang='ar';wordPicker.dataset.noTranslate='';
  const pairFeedback=node('p','sl-pair-feedback');pairFeedback.setAttribute('role','status');visual.append(prompt,wordPicker,pairFeedback);
  const label=node('label','sl-label','دوّر الكتاب'),turn=node('input');turn.type='range';turn.min=-40;turn.max=40;turn.value=-12;turn.setAttribute('aria-label','زاوية الكتاب');label.append(turn);visual.append(label,node('p','sl-muted','اضغط على إحدى صفحتي الكتاب لشرح دور كل كلمة.'));turn.oninput=()=>book.style.setProperty('--book-y',turn.value+'deg');
  const picker=node('div','sl-samples');examples.forEach((x,n)=>picker.append(button(x.pair.join(' '),()=>setExample(n))));
  const role=node('h2'),detail=node('p','sl-explanation'),translationBox=node('section','sl-translation-box'),translation=node('p','sl-muted'),translationRule=node('p','sl-note'),parse=node('p','sl-note');detail.setAttribute('aria-live','polite');
  translationBox.hidden=true;translationBox.dir='ltr';translationBox.lang='en';translationBox.dataset.noTranslate='';translationBox.append(node('h2','','English translation'),translation,translationRule);
  const rule=node('p','','الإضافة تركيب من اسمين مرتبطين: الأول مضاف، والثاني مضاف إليه مجرور. المضاف في الإضافة المعنوية لا يأخذ أل أو تنوينًا، وحركة آخر المضاف تتحدد حسب موقعه في الجملة.');
  info.append(node('h2','','اختَر مثالًا'),picker,role,detail,translationBox,node('h2','','الشرح والقاعدة'),rule,parse);
  function expectedIndexes(){return mode==='pair'?[0,1]:examples[which].pairIndexes}
  function setMode(next){mode=next;selectedWords.clear();renderWords();renderControls()}
  function setExample(n){which=n;part=0;mode=n%2===0?'sentence':'pair';selectedWords.clear();render()}
  function selectPage(p){part=p;renderRole()}
  function toggleWord(index){if(selectedWords.has(index))selectedWords.delete(index);else{if(selectedWords.size>=2)selectedWords.clear();selectedWords.add(index)}renderWords()}
  function renderWords(){
   const x=examples[which],words=mode==='pair'?x.pair:x.sentence,expected=expectedIndexes();
   wordPicker.replaceChildren();pairFeedback.textContent='';pairFeedback.dataset.state='';
   words.forEach((word,index)=>{const b=button(word,()=>toggleWord(index));b.className='sl-word-chip';b.setAttribute('aria-pressed',String(selectedWords.has(index)));if(selectedWords.has(index))b.classList.add('is-selected');wordPicker.append(b)});
   if(selectedWords.size===2){
    const picked=[...selectedWords].sort((a,b)=>a-b),correct=[...expected].sort((a,b)=>a-b),ok=picked.length===correct.length&&picked.every((v,i)=>v===correct[i]);
    pairFeedback.dataset.state=ok?'correct':'wrong';pairFeedback.textContent=ok?'ممتاز! هاتان الكلمتان هما المضاف والمضاف إليه.':'مش هذول مع بعض. جرّب كلمتين ثانيات.';
    if(ok)[...wordPicker.children].forEach((b,i)=>{if(correct.includes(i))b.classList.add('is-correct')});
   }else pairFeedback.textContent='اختَر كلمتين.';
  }
  function renderControls(){sentenceMode.setAttribute('aria-pressed',String(mode==='sentence'));pairMode.setAttribute('aria-pressed',String(mode==='pair'));translationToggle.setAttribute('aria-pressed',String(showTranslation))}
  function renderRole(){
   const x=examples[which];left.setAttribute('aria-pressed',String(part===0));right.setAttribute('aria-pressed',String(part===1));
   role.textContent=part===0?'المضاف: '+x.pair[0]:'المضاف إليه: '+x.pair[1];
   detail.textContent=part===0?'الاسم الأول هو الشيء الذي نضيفه لما بعده لتحديده أو بيان ملكيته. لا يأخذ أل أو تنوينًا في الإضافة المعنوية.':'الاسم الثاني يكمل المعنى ويكون مجرورًا دائمًا. غالبًا تظهر الكسرة علامةً للجر.';
  }
  function renderTranslation(){
   const x=examples[which];translationBox.hidden=!showTranslation;translationToggle.textContent=showTranslation?'إخفاء الترجمة':'إظهار الترجمة';
   translation.textContent=x.translation;translationRule.textContent='Idafa links two nouns: the first is the mudaf, and the second is the genitive mudaf ilayh. The original Arabic lesson remains unchanged.';
   renderControls();
  }
  function render(){
   const x=examples[which];left.textContent=x.pair[0];right.textContent=x.pair[1];left.lang=right.lang='ar';parse.textContent=x.parse;
   [...picker.children].forEach((b,n)=>b.setAttribute('aria-pressed',String(n===which)));renderRole();renderWords();renderTranslation();
  }
  let startX=0,angle=-12;scene.onpointerdown=e=>{if(e.target.closest('button'))return;startX=e.clientX;angle=Number(turn.value);scene.setPointerCapture(e.pointerId)};scene.onpointermove=e=>{if(!scene.hasPointerCapture(e.pointerId))return;turn.value=String(Math.max(-40,Math.min(40,angle+(e.clientX-startX)/3)));turn.oninput()};
  render();return()=>{};
 }

 return {open};
}
