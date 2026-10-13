import {mountWorkbench} from './lesson-workbench-v129.js?v=129';
export function enhanceLesson(host,topic,api){
 const language=api.language(),en=language==='en',T=(a,b)=>en?b:a,subject=topic.subject;
 const q=s=>host.querySelector(s),qa=s=>[...host.querySelectorAll(s)].filter(el=>!el.closest('.cl-workbench'));
 const scene=subject==='arabic'?'.ca-scene':subject==='english'?'.ce-scene':subject==='history'?'.ch-scene':['science','geography'].includes(subject)?'.cg-model':'.cm-scene';
 const txt=s=>q(s)?.textContent.trim()||'';
 const click=s=>q(s)?.click();
 const scalar=subject==='science'?q('[data-cs-number]'):q('[data-cg="value"],[data-value]');
 const change=(delta)=>{if(!scalar)return;const step=Number(scalar.step)||1,lo=scalar.min===''?-Infinity:Number(scalar.min),hi=scalar.max===''?Infinity:Number(scalar.max),raw=Number(scalar.value);scalar.value=String(Math.max(lo,Math.min(hi,Math.round((raw+delta*step)*1e6)/1e6)));scalar.dispatchEvent(new Event('input',{bubbles:true}))};
 const reset=()=>{const b=q('[data-tool="reset"],[data-cg="reset"],[data-cs="reset"]');b?.click()};
 const guideSteps=()=>{
  if(subject==='arabic')return qa('.ca-analysis [data-focus]').map((b,i)=>({title:T('الكلمة: ','Word: ')+b.querySelector('b').textContent,text:b.querySelector('span').textContent,target:`[data-token="${i}"]`,run:()=>click(`[data-token="${i}"]`)}));
  if(subject==='english')return qa('.ce-parts [data-part]').map((b,i)=>({title:b.querySelector('b').textContent,text:b.querySelector('span').textContent+' — '+txt('.ce-note'),target:`.ce-parts [data-part="${i}"]`,run:()=>click(`.ce-parts [data-part="${i}"]`)}));
  if(subject==='history')return qa('.ch-select option').map((b,i)=>({title:b.textContent,text:T('اختَر المحطة لتقرأ الحدث وسياقه. ','Select a milestone to read the event and context. ')+(q('.ch-select')?.value===String(i)?txt('.ch-detail'):''),target:'.cm-result',run:()=>{q('.ch-select').value=String(i);q('.ch-select').dispatchEvent(new Event('change',{bubbles:true}))}}));
  if(subject==='geography')return qa('.cg-concepts>section').map((s,i)=>({title:s.querySelector('h2').textContent,text:s.querySelector('p').textContent,target:'.cg-model',run:()=>click(`[data-cg-step="${i}"]`)}));
  if(subject==='science')return [{title:T('الفكرة','The idea'),text:txt('.cm-rule'),target:'.cg-model'},{title:T('المتغيّر الذي تتحكم فيه','The variable you control'),text:txt('.cg-control').replace(txt('output'),'').trim(),target:'.cg-control'},{title:T('اقرأ النتيجة وفسّرها','Read and explain the result'),text:txt('output')+' — '+txt('.cm-rule'),target:'output'}];
  return [{title:T('المعطيات والقاعدة','Inputs and rule'),text:qa('.cm-field label').map(x=>x.textContent).join(' · ')+' — '+txt('.cm-rule b'),target:'.cm-fields'},...qa('.cm-steps li').map((s,i)=>({title:T('خطوة الحل ','Solution step ')+(i+1),text:s.textContent,target:'.cm-result'}))];
 };
 const snapshot=()=>({title:subject==='english'?txt('.ce-sentence'):subject==='arabic'?txt('.ca-live-sentence')||txt('.ca-example option:checked'):subject==='history'?txt('.ch-event-title'):q('.cm-heading h1')?.textContent||topic.title,result:subject==='science'?txt('output'):subject==='arabic'?txt('.ca-token-info'):subject==='english'?txt('.ce-role'):txt('.cm-result'),detail:subject==='history'?txt('.ch-date'):qa('[data-value]').map(x=>`${q(`label[for="${x.id}"]`)?.textContent}: ${x.value}`).join(' · ')||txt('.cg-control output')});
 const presets=scalar?[{title:T('قلّل متغيّرًا واحدًا','Decrease one variable'),run:()=>change(-1)},{title:T('زد متغيّرًا واحدًا','Increase one variable'),run:()=>change(1)},{title:T('القيم الأصلية','Original values'),run:reset}]:[];
 if(subject==='arabic'||subject==='english')presets.push({title:T('جرّب مثالًا آخر','Try another example'),run:()=>click(subject==='arabic'?'[data-ar="next"]':'[data-ce="next"]')});
 const workbench=mountWorkbench(host,{language,scene,snapshot,steps:guideSteps,presets,question:subject==='math'||subject==='geometry'?txt('.cm-heading p'):subject==='history'?T('ما الفرق بين ترتيب الأحداث وتفسير أسبابها في هذا الموضوع؟','How is ordering events different from explaining their causes in this topic?'):subject==='arabic'||subject==='english'?T('عند تبديل المثال، أي جزء سيتغيّر وكيف ستبقى القاعدة ظاهرة؟','When you switch examples, which part will change and how will the rule remain visible?'):T('غيّر متغيّرًا واحدًا فقط. ماذا سيحدث للنموذج والنتيجة؟ ولماذا؟','Change just one variable. What will happen to the model and result, and why?')});let disposed=false,pending=false;
 const onChange=()=>{if(pending||disposed)return;pending=true;queueMicrotask(()=>{pending=false;if(!disposed)workbench.update()})};
 for(const type of ['click','input','change'])host.addEventListener(type,onChange);
 return()=>{disposed=true;for(const type of ['click','input','change'])host.removeEventListener(type,onChange);workbench.dispose()};
}
