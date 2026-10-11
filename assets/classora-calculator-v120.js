/* Classora Cartoon Calculator v120: button-operated; no typing field or keyboard shortcuts. */
import {evaluateCalculator} from './math-calculator-v119.js?v=119';
import './classora-topic-art-v120.js?v=120';
let instance;
export function mountMathCalculator(language=()=>document.documentElement.lang){
 if(instance)return instance;
 const T=(ar,en)=>language()==='en'?en:ar;
 const host=document.createElement('div');
 host.id='classoraMathCalculator';host.hidden=true;host.dataset.noTranslate='';
 host.innerHTML='<button class="cm-calc-tab" type="button" aria-expanded="false" aria-controls="cmCalculatorPanel"><span class="cm-mini-display" aria-hidden="true">Classora</span><span class="cm-mini-keys" aria-hidden="true">'+('<i></i>'.repeat(12))+'</span><span class="cm-calc-caption"></span></button>'+
 '<section id="cmCalculatorPanel" class="cm-calc-panel" role="dialog" aria-modal="false" hidden><header><b>CLASSORA</b><button class="cm-calc-close" type="button" aria-label="Minimize calculator">×</button></header>'+
 '<div class="cm-calc-lcd"><span class="cm-lcd-brand">Classora</span><div class="cm-calc-expression" dir="ltr" role="status" aria-label="Expression"></div><output dir="ltr" aria-live="polite">0</output></div>'+
 '<div class="cm-calc-modes"><button data-mode="angle" type="button">DEG</button><button data-mode="history" type="button"></button></div><div class="cm-calc-keyboard" role="group" aria-label="Calculator keys"></div><div class="cm-calc-history" hidden></div><p class="cm-calc-tip"></p></section>';
 document.body.append(host);
 const tab=host.querySelector('.cm-calc-tab'),panel=host.querySelector('.cm-calc-panel');
 const expression=host.querySelector('.cm-calc-expression'),output=host.querySelector('output'),history=host.querySelector('.cm-calc-history');
 const state={open:false,degrees:true,ans:0,history:[],buffer:''};
 try{
  const saved=JSON.parse(sessionStorage.getItem('classora_calculator_v119')||'null');
  if(saved&&typeof saved.buffer==='string'&&saved.buffer.length<=240){
   state.buffer=saved.buffer;state.degrees=saved.degrees!==false;
   state.ans=Number.isFinite(saved.ans)?saved.ans:0;
   state.history=Array.isArray(saved.history)?saved.history.slice(-8).filter(x=>typeof x.expression==='string'&&typeof x.result==='string'):[];
  }
 }catch{}
 const persist=()=>{try{sessionStorage.setItem('classora_calculator_v119',JSON.stringify({buffer:state.buffer,degrees:state.degrees,ans:state.ans,history:state.history}))}catch{}};
 function display(){expression.textContent=state.buffer||' ';output.classList.remove('error')}
 function localize(){
  tab.setAttribute('aria-label',T('فتح حاسبة كلاسورا','Open Classora calculator'));
  tab.querySelector('.cm-calc-caption').textContent=T('الحاسبة','Calculator');
  panel.setAttribute('aria-label',T('حاسبة كلاسورا العلمية','Classora scientific calculator'));
  host.querySelector('.cm-calc-close').setAttribute('aria-label',T('تصغير الحاسبة','Minimize calculator'));
  expression.setAttribute('aria-label',T('العملية الحسابية','Expression'));
  host.querySelector('[data-mode="history"]').textContent=T('السجل','History');
  host.querySelector('.cm-calc-tip').textContent=T('استخدم أزرار الحاسبة فقط. % تعني القسمة على 100','Use the calculator buttons only. % divides by 100');
  host.querySelector('.cm-calc-keyboard').setAttribute('aria-label',T('أزرار الحاسبة','Calculator keys'));
 }
 function open(value){
  state.open=!!value;host.classList.toggle('is-open',state.open);
  panel.hidden=!state.open;tab.setAttribute('aria-expanded',String(state.open));
  if(state.open)host.querySelector('.cm-calc-close').focus({preventScroll:true});
  else tab.focus({preventScroll:true});
 }
 function insert(token){if(state.buffer.length+token.length>240)return;state.buffer+=token;display();persist()}
 function calculate(){
  try{
   const result=evaluateCalculator(state.buffer,{degrees:state.degrees,ans:state.ans});
   const formatted=Number(result.toPrecision(12)).toString();
   output.textContent=formatted;output.classList.remove('error');
   state.ans=result;state.history.push({expression:state.buffer,result:formatted});
   state.history=state.history.slice(-8);renderHistory();persist();
  }catch(error){
   output.classList.add('error');
   output.textContent=error.message==='zero'?T('لا يمكن القسمة على صفر','Cannot divide by zero'):error.message==='domain'?T('القيمة خارج المجال','Value outside the domain'):T('راجع العملية والأقواس','Check expression and parentheses');
  }
 }
 function renderHistory(){
  history.replaceChildren();
  for(const row of [...state.history].reverse()){
   const b=document.createElement('button');b.type='button';b.dir='ltr';
   b.textContent=row.expression+' = '+row.result;
   b.onclick=()=>{state.buffer=row.expression;display();output.textContent=row.result;persist()};
   history.append(b);
  }
  if(!state.history.length)history.textContent=T('عملياتك تظهر هنا.','Your calculations appear here.');
 }
 const keys=[['sin','sin('],['cos','cos('],['tan','tan('],['√','sqrt('],['xʸ','^'],['ln','ln('],['log','log('],['π','pi'],['(', '('],[')',')'],['AC','clear'],['⌫','back'],['%','%'],['÷','/'],['7','7'],['8','8'],['9','9'],['×','*'],['4','4'],['5','5'],['6','6'],['−','-'],['1','1'],['2','2'],['3','3'],['+','+'],['0','0'],['.','.'],['Ans','ans'],['=','equals']];
 const keysHost=host.querySelector('.cm-calc-keyboard');
 keys.forEach(([label,value],index)=>{
  const b=document.createElement('button');b.type='button';b.textContent=label;b.dataset.key=value;
  b.className=index<10?'scientific':value==='equals'?'equals':['clear','back'].includes(value)?'utility':'';
  if(value==='back')b.setAttribute('aria-label',T('حذف آخر محرف','Backspace'));
  b.addEventListener('click',()=>{
   if(value==='equals')calculate();
   else if(value==='clear'){state.buffer='';display();output.textContent='0';persist()}
   else if(value==='back'){state.buffer=state.buffer.slice(0,-1);display();persist()}
   else insert(value);
  });
  keysHost.append(b);
 });
 tab.onclick=()=>open(!state.open);
 host.querySelector('.cm-calc-close').onclick=()=>open(false);
 host.querySelector('[data-mode="angle"]').onclick=e=>{state.degrees=!state.degrees;e.currentTarget.textContent=state.degrees?'DEG':'RAD';persist()};
 host.querySelector('[data-mode="history"]').onclick=()=>{history.hidden=!history.hidden;renderHistory()};
 function refresh(){
  localize();
  const curriculum=document.getElementById('classoraCurriculumModal'),lobby=document.getElementById('platformLobby'),eq=document.getElementById('equationLabModal');
  const auth=document.getElementById('authPanel');
  const visibleAuth=auth&&getComputedStyle(auth).display!=='none'&&auth.getClientRects().length>0;
  const blocked=visibleAuth||['settingsModal','chatModal','classModal'].some(id=>document.getElementById(id)?.classList.contains('open'));
  const inCurr=curriculum?.classList.contains('open');
  const subject=inCurr?curriculum.dataset.subject:document.querySelector('.learning-hub')?.dataset.selectedSubject;
  const inLegacy=eq?.classList.contains('open')||(!inCurr&&lobby&&getComputedStyle(lobby).display==='none'&&!document.querySelector('.modal.open'));
  const enabled=!blocked&&(inCurr?['math','geometry'].includes(subject):['math','geometry'].includes(subject)||inLegacy||(document.getElementById('examModal')?.classList.contains('open')&&document.body.dataset.classoraMathExam==='true'));
  host.hidden=!enabled;
  if(!enabled){state.open=false;host.classList.remove('is-open');panel.hidden=true;tab.setAttribute('aria-expanded','false')}
 }
 display();localize();host.querySelector('[data-mode="angle"]').textContent=state.degrees?'DEG':'RAD';
 const observe=el=>el&&new MutationObserver(refresh).observe(el,{attributes:true,attributeFilter:['class','style','data-subject','data-selected-subject']});
 ['classoraCurriculumModal','platformLobby','equationLabModal','authPanel','settingsModal','chatModal','classModal','examModal'].forEach(id=>observe(document.getElementById(id)));
 observe(document.querySelector('.learning-hub'));
 new MutationObserver(refresh).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 document.addEventListener('classora:math-context',refresh);
 refresh();instance={refresh,open};return instance;
}