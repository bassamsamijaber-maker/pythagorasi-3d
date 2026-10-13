import {mathTopic,defaultValues,calculateLesson} from './math-catalog-v119.js?v=119';
import {renderMathScene,escapeMath as E} from './math-scenes-v119.js?v=119';
import {SCIENCE_MODELS,scienceScene,scienceInputScale} from './science-scenes-v128.js?v=130';
import {geographyLesson} from './geography-catalog-v128.js?v=128';
import {geographyScene,GEO_CONTROLS} from './geography-scenes-v128.js?v=128';
import {arabicLesson,AR_ROLES,arabicTokenDescription} from './arabic-catalog-v119.js?v=119';
import {arabicStructure} from './arabic-scenes-v128.js?v=128';
import {englishLesson} from './english-catalog-v127.js?v=127';
import {historyLesson} from './history-catalog-v127.js?v=127';
import {englishModel,historyModel} from './language-models-v129.js?v=129';
export function lessonModel(host,topic,language){
 const en=language==='en',T=(a,b)=>en?b:a,q=s=>host.querySelector(s),subject=topic.subject;let fields=[],read,draw,restore,rule='',lesson;
 const set=(selector,value,type='input')=>{const el=q(selector);if(el){el.value=String(value);el.dispatchEvent(new Event(type,{bubbles:true}))}};
 const selectMode=(selector,phase)=>q(selector.replace('$',String(phase)))?.click();
 const selected=(selector,attr)=>Number(q(selector+'[aria-pressed="true"]')?.getAttribute(attr)||0);
 if(['math','geometry'].includes(subject)){
  lesson=mathTopic(topic.title);rule=T(lesson.ar,lesson.english);fields=lesson.controls.map(c=>({id:c.id,label:T(c.ar,c.en),min:c.min,max:c.max,step:c.step}));
  read=()=>Object.fromEntries(fields.map(c=>[c.id,Number(q(`[data-value="${c.id}"]`)?.value??c.min)]));
  draw=s=>{const r=calculateLesson(lesson.key,s,language);return {html:renderMathScene(lesson.key,s,r,{yaw:-.16,pitch:.15,zoom:1},language),result:r.formula,valid:r.valid,explanation:r.steps.join(' · ')}};
  restore=s=>fields.forEach(c=>{if(Number.isFinite(s[c.id])&&s[c.id]>=c.min&&s[c.id]<=c.max)set(`[data-value="${c.id}"]`,s[c.id])});
 }else if(subject==='science'){
  lesson=SCIENCE_MODELS[topic.title];rule=T(...lesson.rule);const scale=scienceInputScale(lesson.key);fields=[{id:'value',label:T(...lesson.control),min:scale.min,max:scale.max,step:scale.step}];const modes=[...host.querySelectorAll('[data-cs-mode]')].map(b=>b.textContent);if(modes.length)fields.push({id:'phase',label:T('وضع النموذج','Model mode'),options:modes});
  read=()=>({value:Number(q('[data-cs-number]').value),phase:selected('[data-cs-mode]','data-cs-mode')});
  draw=s=>{const r=scienceScene(lesson.key,scale.write(s.value),s.phase||0,language);return {html:r.svg,result:r.result,valid:true,explanation:rule}};
  restore=s=>{if(Number.isFinite(s.value)&&s.value>=scale.min&&s.value<=scale.max)set('[data-cs-number]',s.value);if(modes[s.phase])selectMode('[data-cs-mode="$"]',s.phase)};
 }else if(subject==='geography'){
  lesson=geographyLesson(topic.title);rule=T(...lesson.rule);fields=[{id:'value',label:T(...GEO_CONTROLS[lesson.model]),min:0,max:100,step:1},{id:'phase',label:T('مرحلة / مثال','Stage / example'),options:[...host.querySelectorAll('[data-cg-step]')].map(b=>b.textContent)}];
  read=()=>({value:Number(q('[data-cg="value"]').value),phase:selected('[data-cg-step]','data-cg-step')});draw=s=>{const r=geographyScene(lesson.model,s.value,s.phase||0,language);return {html:r.svg,result:r.result,valid:true,explanation:rule}};
  restore=s=>{if(Number.isFinite(s.value)&&s.value>=0&&s.value<=100)set('[data-cg="value"]',s.value);if(fields[1].options[s.phase])selectMode('[data-cg-step="$"]',s.phase)};
 }else if(subject==='arabic'){
  lesson=arabicLesson(topic.title);rule=T(lesson.ar,lesson.english);fields=[{id:'example',label:T('المثال','Example'),options:lesson.examples.map(e=>e.tokens.map(t=>t.word).join(' '))}];read=()=>({example:Number(q('.ca-example').value),active:Number(q('[data-token].selected')?.dataset.token||0)});
  draw=s=>{const e=lesson.examples[s.example]||lesson.examples[0];const r=arabicStructure(lesson,e,Math.min(s.active||0,e.tokens.length-1),true,language);return {html:`<div class="ca-scene"><div class="ca-word-stage">${r.html}</div></div>`,result:e.tokens.map(t=>t.word).join(' '),explanation:rule,valid:true}};
  restore=s=>{if(lesson.examples[s.example])set('.ca-example',s.example,'change');selectMode('[data-token="$"]',s.active||0)};
 }else if(subject==='english'){
  lesson=englishLesson(topic.title);rule=T(...lesson.rule);fields=[{id:'example',label:T('المثال','Example'),options:lesson.examples.map(e=>e.sentence)}];read=()=>({example:Number(q('.ce-example').value),active:selected('[data-part]','data-part')});draw=s=>{const e=lesson.examples[s.example]||lesson.examples[0];return {html:englishModel(lesson,e,s.active||0,language),result:e.sentence,explanation:rule,valid:true}};restore=s=>{if(lesson.examples[s.example])set('.ce-example',s.example,'change');selectMode('[data-part="$"]',s.active||0)};
 }else{
  lesson=historyLesson(topic.title);rule=T(...lesson.rule);fields=[{id:'event',label:T('المحطة','Milestone'),options:lesson.events.map(e=>T(...e.title))}];read=()=>({event:Number(q('.ch-select').value)});draw=s=>{const e=lesson.events[s.event]||lesson.events[0];return {html:historyModel(lesson,s.event||0,language),result:T(...e.date)+' — '+T(...e.title),explanation:T(...e.detail),valid:true}};restore=s=>{if(lesson.events[s.event])set('.ch-select',s.event,'change')};
 }
 const cleanDraw=s=>{const r=draw(s);r.html=r.html.replace(/\sdata-(?:token|part|event|focus)="[^"]*"/g,'').replace(/<button\b/g,'<button disabled tabindex="-1"');return r};
 return {fields,read,draw:cleanDraw,restore,rule,lesson,subject,language};
}
export function modelChallenge(model,round=0){
 const en=model.language==='en',T=(a,b)=>en?b:a,s=model.read(),d=model.lesson,subject=model.subject;
 if(subject==='arabic'){
  const e=d.examples[s.example],index=round%e.tokens.length,t=e.tokens[index];return {prompt:T('اضغط في النموذج على كلمة وظيفتها: ','Select a model word whose role is: ')+AR_ROLES[t.role][en?1:0],hints:[model.rule,T('اقرأ علاقة الكلمة بباقي الجملة.','Read how the word relates to the sentence.'),t.word],check:()=>{const now=model.read(),token=d.examples[now.example]?.tokens[now.active];return now.example===s.example&&token?.role===t.role},explain:()=>arabicTokenDescription(t,model.language),prepare:()=>model.restore({...s,active:(index+1)%e.tokens.length})};
 }
 if(subject==='english'){
  const e=d.examples[s.example],index=e.parts.findIndex(p=>p.role[1]!=='Context'),focus=e.parts[Math.max(0,index)];return {prompt:T('اختَر الجزء الذي يوضح قاعدة الدرس في الجملة.','Select the sentence part that demonstrates this lesson’s rule.'),hints:[model.rule,d.pattern,focus.text],check:()=>{const now=model.read();return now.example===s.example&&now.active===Math.max(0,index)},explain:()=>model.rule,prepare:()=>model.restore({...s,active:(Math.max(0,index)+1)%e.parts.length})};
 }
 if(subject==='history'){
  const index=(s.event+1+round)%d.events.length,e=d.events[index];return {prompt:T('اختَر المحطة التي يصفها هذا الحدث: ','Select the milestone described here: ')+T(...e.detail),hints:[model.rule,T(...e.date),T(...e.title)],check:()=>model.read().event===index,explain:()=>T(...e.date)+' — '+T(...e.detail)};
 }
 const f=model.fields.find(f=>!f.options),goal={...s};let target;
 if(subject==='science'&&d.key==='circuit'){target=6;goal.phase=0}
 else if(subject==='science'&&d.key==='ph')target=7;
 else if(subject==='science'&&['atom','ion','elements'].includes(d.key))target=6;
 else target=Math.min(f.max,Math.max(f.min,Number(s[f.id])+(round%2?-1:1)*f.step*3));
 if(Math.abs(target-s[f.id])<1e-8)target=Math.max(f.min,target-f.step*3);goal[f.id]=+target.toFixed(6);let expected=model.draw(goal);
 if(!expected.valid){goal[f.id]=+Math.max(f.min,s[f.id]-f.step).toFixed(6);expected=model.draw(goal)}
 const meaningful=expected.valid&&expected.result!==model.draw(s).result;
 return {prompt:meaningful?T('غيّر «','Change “')+f.label+T('» حتى تصبح النتيجة: ','” to reach: ')+expected.result:T('اضبط «','Set “')+f.label+T('» على ','” to ')+goal[f.id]+T(' ولاحظ تغيّر الرسم.',' and observe the diagram.'),hints:[model.rule,T('غيّر متغيّرًا واحدًا واترك الباقي ثابتًا.','Change one variable and keep the others fixed.'),f.label+' = '+goal[f.id]+(goal.phase!==s.phase?T('؛ اختَر الدائرة المغلقة.','; choose the closed circuit.'):'' )],check:()=>{const current=model.read();return Object.keys(goal).every(k=>Math.abs(Number(current[k])-Number(goal[k]))<.001)},explain:()=>expected.result+' — '+expected.explanation};
}
