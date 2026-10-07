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
  const main=node('main','sl-main');main.append(node('p','sl-eyebrow',kind==='acids'?L('علوم · اكتشف بالتجربة','SCIENCE · LEARN BY EXPLORING'):L('عربي · اللغة بين إيديك','ARABIC GRAMMAR · LEARN BY EXPLORING')),node('h1','',title));
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
  const examples=[
   {pair:['كتابُ','الطالبِ'],pairEn:['kitābu','aṭ-ṭālibi'],sentence:['هذا','كتابُ','الطالبِ','الجديدُ'],sentenceEn:['hādhā','kitābu','aṭ-ṭālibi','al-jadīdu'],pairIndexes:[1,2],translation:'The student’s new book',parse:'كتابُ: مضاف مرفوع بالضمة. الطالبِ: مضاف إليه مجرور بالكسرة.'},
   {pair:['بابُ','المدرسةِ'],pairEn:['bābu','al-madrasati'],sentence:['فُتِحَ','بابُ','المدرسةِ','صباحًا'],sentenceEn:['futiḥa','bābu','al-madrasati','ṣabāḥan'],pairIndexes:[1,2],translation:'The school door was opened in the morning',parse:'بابُ: مضاف مرفوع بالضمة. المدرسةِ: مضاف إليه مجرور بالكسرة.'},
   {pair:['قلمُ','المعلّمِ'],pairEn:['qalamu','al-muʿallimi'],sentence:['ضاعَ','قلمُ','المعلّمِ','في','الصفِّ'],sentenceEn:['ḍāʿa','qalamu','al-muʿallimi','fī','aṣ-ṣaffi'],pairIndexes:[1,2],translation:'The teacher’s pen was lost in class',parse:'قلمُ: مضاف مرفوع بالضمة. المعلّمِ: مضاف إليه مجرور بالكسرة.'},
   {pair:['حديقةُ','البيتِ'],pairEn:['ḥadīqatu','al-bayti'],sentence:['حديقةُ','البيتِ','جميلةٌ'],sentenceEn:['ḥadīqatu','al-bayti','jamīlatun'],pairIndexes:[0,1],translation:'The house garden is beautiful',parse:'حديقةُ: مضاف مرفوع بالضمة. البيتِ: مضاف إليه مجرور بالكسرة.'},
   {pair:['نافذةَ','الغرفةِ'],pairEn:['nāfidhata','al-ghurfati'],sentence:['فتحتُ','نافذةَ','الغرفةِ','صباحًا'],sentenceEn:['fataḥtu','nāfidhata','al-ghurfati','ṣabāḥan'],pairIndexes:[1,2],translation:'I opened the room window in the morning',parse:'نافذةَ: مضاف منصوب بالفتحة حسب موقعه في الجملة. الغرفةِ: مضاف إليه مجرور بالكسرة.'},
   {pair:['مفتاحُ','السيارةِ'],pairEn:['miftāḥu','as-sayyārati'],sentence:['مفتاحُ','السيارةِ','على','الطاولةِ'],sentenceEn:['miftāḥu','as-sayyārati','ʿalā','aṭ-ṭāwilati'],pairIndexes:[0,1],translation:'The car key is on the table',parse:'مفتاحُ: مضاف مرفوع بالضمة. السيارةِ: مضاف إليه مجرور بالكسرة.'}
  ];
  const arabicMode=api.language()==='ar';
  const shownPair=x=>arabicMode?x.pair:x.pairEn;
  const shownSentence=x=>arabicMode?x.sentence:x.sentenceEn;
  const scene=node('div','sl-book-space'),book=node('div','sl-book');book.setAttribute('role','group');book.setAttribute('aria-label',L('كتاب ثلاثي الأبعاد تفاعلي','Interactive 3D grammar book'));
  const cover=node('div','sl-book-cover'),left=button('',()=>selectPage(0)),right=button('',()=>selectPage(1));left.className='sl-book-leaf first';right.className='sl-book-leaf second';book.append(cover,left,right);scene.append(book);visual.append(scene);
  let which=0,part=0,mode='sentence',selectedWords=new Set(),showTranslation=false;
  const modeToolbar=node('div','sl-mode-toolbar'),sentenceMode=button(L('جملة','Sentence'),()=>setMode('sentence')),pairMode=button(L('كلمتين','Two words'),()=>setMode('pair')),nextExample=button(L('مثال جديد','New example'),()=>setExample((which+1)%examples.length)),translationToggle=button(L('إظهار الترجمة','Show meaning'),()=>{showTranslation=!showTranslation;renderTranslation()});
  translationToggle.classList.add('sl-translation-toggle');modeToolbar.append(sentenceMode,pairMode,nextExample,translationToggle);visual.append(modeToolbar);
  const prompt=node('p','sl-muted',L('حدّد الكلمتين اللتين تكوّنان المضاف والمضاف إليه. أحيانًا ستظهر جملة كاملة وأحيانًا كلمتان فقط.','Select the two words that form the idafa. Sometimes you will see a full transliterated sentence and sometimes only two words.'));
  const wordPicker=node('div','sl-word-picker');wordPicker.dir=arabicMode?'rtl':'ltr';wordPicker.lang=arabicMode?'ar':'en';wordPicker.dataset.noTranslate='';
  const pairFeedback=node('p','sl-pair-feedback');pairFeedback.setAttribute('role','status');visual.append(prompt,wordPicker,pairFeedback);
  const label=node('label','sl-label',L('دوّر الكتاب','Rotate the book')),turn=node('input');turn.type='range';turn.min=-40;turn.max=40;turn.value=-12;turn.setAttribute('aria-label',L('زاوية الكتاب','Book angle'));label.append(turn);visual.append(label,node('p','sl-muted',L('اضغط على إحدى صفحتي الكتاب لشرح دور كل كلمة.','Tap either page to explain the role of each term.')));turn.oninput=()=>book.style.setProperty('--book-y',turn.value+'deg');
  const picker=node('div','sl-samples');examples.forEach((x,n)=>picker.append(button(shownPair(x).join(' '),()=>setExample(n))));
  const role=node('h2'),detail=node('p','sl-explanation'),translationBox=node('section','sl-translation-box'),translation=node('p','sl-muted'),translationRule=node('p','sl-note'),parse=node('p','sl-note');detail.setAttribute('aria-live','polite');
  translationBox.hidden=true;translationBox.dir='ltr';translationBox.lang='en';translationBox.dataset.noTranslate='';translationBox.append(node('h2','','English translation'),translation,translationRule);
  const rule=node('p','',L('الإضافة تركيب من اسمين مرتبطين: الأول مضاف، والثاني مضاف إليه مجرور. المضاف في الإضافة المعنوية لا يأخذ أل أو تنوينًا، وحركة آخر المضاف تتحدد حسب موقعه في الجملة.','Idafa links two nouns. The first is the mudaf, and the second is the genitive mudaf ilayh. In a regular idafa, the mudaf normally takes neither the definite article nor tanween; its case depends on its role in the sentence.'));
  info.append(node('h2','',L('اختَر مثالًا','Choose an example')),picker,role,detail,translationBox,node('h2','',L('الشرح والقاعدة','Explanation and rule')),rule,parse);
  function expectedIndexes(){return mode==='pair'?[0,1]:examples[which].pairIndexes}
  function setMode(next){mode=next;selectedWords.clear();renderWords();renderControls()}
  function setExample(n){which=n;part=0;mode=n%2===0?'sentence':'pair';selectedWords.clear();render()}
  function selectPage(p){part=p;renderRole()}
  function toggleWord(index){if(selectedWords.has(index))selectedWords.delete(index);else{if(selectedWords.size>=2)selectedWords.clear();selectedWords.add(index)}renderWords()}
  function renderWords(){
   const x=examples[which],words=mode==='pair'?shownPair(x):shownSentence(x),expected=expectedIndexes();
   wordPicker.replaceChildren();pairFeedback.textContent='';pairFeedback.dataset.state='';
   words.forEach((word,index)=>{const b=button(word,()=>toggleWord(index));b.className='sl-word-chip';b.setAttribute('aria-pressed',String(selectedWords.has(index)));if(selectedWords.has(index))b.classList.add('is-selected');wordPicker.append(b)});
   if(selectedWords.size===2){
    const picked=[...selectedWords].sort((a,b)=>a-b),correct=[...expected].sort((a,b)=>a-b),ok=picked.length===correct.length&&picked.every((v,i)=>v===correct[i]);
    pairFeedback.dataset.state=ok?'correct':'wrong';pairFeedback.textContent=ok?L('ممتاز! هاتان الكلمتان هما المضاف والمضاف إليه.','Correct! These two terms form the mudaf and mudaf ilayh.'):L('مش هذول مع بعض. جرّب كلمتين ثانيات.','Those two do not form the pair. Try two different terms.');
    if(ok)[...wordPicker.children].forEach((b,i)=>{if(correct.includes(i))b.classList.add('is-correct')});
   }else pairFeedback.textContent=L('اختَر كلمتين.','Select two terms.');
  }
  function renderControls(){sentenceMode.setAttribute('aria-pressed',String(mode==='sentence'));pairMode.setAttribute('aria-pressed',String(mode==='pair'));translationToggle.setAttribute('aria-pressed',String(showTranslation))}
  function renderRole(){
   const x=examples[which];left.setAttribute('aria-pressed',String(part===0));right.setAttribute('aria-pressed',String(part===1));
   const pair=shownPair(x);
   role.textContent=part===0?L('المضاف: ','Mudaf: ')+pair[0]:L('المضاف إليه: ','Mudaf ilayh: ')+pair[1];
   detail.textContent=part===0?L('الاسم الأول هو الشيء الذي نضيفه لما بعده لتحديده أو بيان ملكيته. لا يأخذ أل أو تنوينًا في الإضافة المعنوية.','The first noun is the mudaf. It is specified or possessed by the noun that follows and normally takes neither al- nor tanween in a regular idafa.'):L('الاسم الثاني يكمل المعنى ويكون مجرورًا دائمًا. غالبًا تظهر الكسرة علامةً للجر.','The second noun is the mudaf ilayh. It completes the meaning and is always genitive.');
  }
  function renderTranslation(){
   const x=examples[which];translationBox.hidden=!showTranslation;translationToggle.textContent=showTranslation?L('إخفاء الترجمة','Hide meaning'):L('إظهار الترجمة','Show meaning');
   translation.textContent=x.translation;translationRule.textContent='Idafa links two nouns: the first is the mudaf, and the second is the genitive mudaf ilayh.';
   renderControls();
  }
  function render(){
   const x=examples[which],pair=shownPair(x);left.textContent=pair[0];right.textContent=pair[1];left.lang=right.lang=arabicMode?'ar':'en';parse.textContent=arabicMode?x.parse:'The first term is the mudaf; the second is the genitive mudaf ilayh. The mudaf ilayh is genitive.';
   [...picker.children].forEach((b,n)=>b.setAttribute('aria-pressed',String(n===which)));renderRole();renderWords();renderTranslation();
  }
  let startX=0,angle=-12;scene.onpointerdown=e=>{if(e.target.closest('button'))return;startX=e.clientX;angle=Number(turn.value);scene.setPointerCapture(e.pointerId)};scene.onpointermove=e=>{if(!scene.hasPointerCapture(e.pointerId))return;turn.value=String(Math.max(-40,Math.min(40,angle+(e.clientX-startX)/3)));turn.oninput()};
  render();return()=>{};
 }

 return {open};
}
