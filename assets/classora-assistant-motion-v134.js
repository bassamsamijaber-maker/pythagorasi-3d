/* Classora assistant motion: actual answer only, no simulated network/AI claims. */
const pending=new WeakMap();
const reduceMotion=()=>window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches===true;
const getLanguage=()=>document.documentElement.lang==='en'?'en':'ar';
function label(ar,en){return getLanguage()==='en'?en:ar}
export function classoraAnimateAssistant(host,getAnswer,options={}){
 if(!host)return;
 host.dataset.noTranslate=''; // Dynamic bilingual and user-entered text must not be re-translated mid-animation.
 const old=pending.get(host);if(old){old.cancelled=true;clearTimeout(old.timeout);clearInterval(old.interval)}
 const run={cancelled:false,timeout:0,interval:0};pending.set(host,run);
 const voice=host.querySelector('.msg-speak');if(voice)voice.remove();
 host.replaceChildren();
 host.setAttribute('aria-live','polite');host.setAttribute('aria-busy','true');
 host.classList.add('classora-ai-answer','classora-ai-thinking');
 const waiting=document.createElement('span');waiting.className='classora-ai-thinking-indicator';
 waiting.append(document.createTextNode(label('يفكّر','Thinking')));
 const dots=document.createElement('span');dots.className='classora-ai-dots';dots.setAttribute('aria-hidden','true');
 for(let i=0;i<3;i++){const dot=document.createElement('i');dots.append(dot)}
 waiting.append(dots);host.append(waiting);
 const finish=()=>{
  if(run.cancelled)return;
  const result=typeof getAnswer==='function'?getAnswer():getAnswer;
  const answer=String(result??'');
  host.classList.remove('classora-ai-thinking');
  host.replaceChildren();
  const typed=document.createElement('span');typed.className='classora-ai-written';
  typed.dir='auto';host.append(typed);
  const cursor=document.createElement('span');cursor.className='classora-ai-cursor';cursor.setAttribute('aria-hidden','true');host.append(cursor);
  const target=options.scrollTarget||host.closest('.topic-ai-chat')||host.closest('#chat');
  let i=0;const chars=Array.from(answer);
  const addActions=()=>{
   if(run.cancelled)return;
   cursor.remove();
   host.removeAttribute('aria-busy');
   if(options.topic&&typeof options.onOpen==='function'){
    const btn=document.createElement('button');btn.type='button';btn.className='classora-ai-topic-button';
    btn.textContent=label('افتح الدرس ←','Open lesson →')+' '+(getLanguage()==='en'?(options.topic.en||options.topic.title):options.topic.title);
    btn.setAttribute('aria-label',label('افتح درس ','Open lesson ')+(getLanguage()==='en'?(options.topic.en||options.topic.title):options.topic.title));
    btn.addEventListener('click',()=>options.onOpen(options.topic));
    host.append(btn);
   }
   if(voice)host.append(voice);
   if(typeof options.onComplete==='function')options.onComplete();
  };
  if(reduceMotion()||!chars.length){typed.textContent=answer;addActions();return}
  const chunk=Math.max(2,Math.ceil(chars.length/110));
  run.interval=window.setInterval(()=>{
   if(run.cancelled||!host.isConnected){clearInterval(run.interval);return}
   i=Math.min(chars.length,i+chunk);
   typed.textContent=chars.slice(0,i).join('');
   if(target)target.scrollTop=target.scrollHeight;
   if(i===chars.length){clearInterval(run.interval);addActions()}
  },19);
 };
 run.timeout=window.setTimeout(finish,reduceMotion()?35:420);
 return ()=>{run.cancelled=true;clearTimeout(run.timeout);clearInterval(run.interval)};
}
export function classoraOpenAssistantTopic(topic){
 if(!topic||![7,8,9,10].includes(Number(topic.grade)))return false;
 const engine=window.classoraCurriculum;
 if(!engine||typeof engine.openAt!=='function')return false;
 try{
  engine.openAt(topic.grade,topic.subject,topic.title);
  return true;
 }catch(error){console.warn('Classora topic navigation unavailable',error);return false}
}
