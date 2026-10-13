/* Per-account durable learning state. Public lesson content is stored separately. */
let api={},timer=0,inflight=false;let clock=0;
const stamp=()=>clock=Math.max(Date.now(),clock+1);
export const learnerId=()=>String(api.profile?.()?.uid||api.profile?.()?.profileId||'guest');
const key=id=>'classora_learning_v130_'+id;
const copy=x=>JSON.parse(JSON.stringify(x));
export function mergeLearning(a={},b={}){
 const newest=(x,y)=>!x?y:!y?x:Number(x.at||0)>Number(y.at||0)?x:y;
 const mergeMap=(x={},y={})=>Object.fromEntries([...new Set([...Object.keys(x),...Object.keys(y)])].map(k=>[k,newest(x[k],y[k])]).sort((a,b)=>(b[1]?.at||0)-(a[1]?.at||0)).slice(0,120));
 return {sessions:mergeMap(a.sessions,b.sessions),attempts:mergeMap(a.attempts,b.attempts),last:newest(a.last,b.last)||null,preferences:newest(a.preferences,b.preferences)||null,at:Math.max(a.at||0,b.at||0)};
}
export function learningState(id=learnerId()){
 let local={};try{local=JSON.parse(localStorage.getItem(key(id))||'{}')}catch{}
 const profile=api.profile?.();const remote=id===learnerId()?profile?.accountState?.learningTools130||{}:{};
 return mergeLearning(local,remote);
}
export function configureLearningMemory(value){api=value;applyDisplay(learningState().preferences?.value);notify();flushLearning();}
function notify(){document.dispatchEvent(new CustomEvent('classora:learning-update'))}
function write(state,id){try{localStorage.setItem(key(id),JSON.stringify(state));localStorage.setItem(key(id)+'_pending',String(state.at));notify();clearTimeout(timer);timer=setTimeout(flushLearning,800);return true}catch{return false}}
export function saveLessonSession(topic,state,id=learnerId()){
 if(id!==learnerId())return false;const data=learningState(id),at=stamp();const entry={topic:{id:topic.id,grade:topic.grade,subject:topic.subject,title:topic.title,index:topic.index??0},state,at};data.sessions[topic.id]=entry;data.last=entry;data.at=at;return write(mergeLearning(data),id);
}
export function recordLearningAttempt(topic,correct,details={}){
 const data=learningState(),at=stamp();const q=details.question;
 const question=q?{prompt:String(q.prompt||'').slice(0,1200),answer:String(q.answer??'').slice(0,350),explanation:String(q.explanation||'').slice(0,1500)}:null;
 data.attempts[String(at)+'-'+Math.random().toString(36).slice(2,8)]={at,topic:{id:topic.id,title:topic.title,subject:topic.subject,grade:topic.grade,index:topic.index??0},correct:!!correct,question,selected:String(details.selected??'').slice(0,350)};data.at=at;write(mergeLearning(data),learnerId());
}
export function reviewTopics(grade){
 const groups=new Map();for(const a of Object.values(learningState().attempts)){if(grade&&+a.topic.grade!==+grade)continue;const r=groups.get(a.topic.id)||{topic:a.topic,right:0,wrong:0,at:0};r[a.correct?'right':'wrong']++;r.at=Math.max(r.at,a.at);groups.set(a.topic.id,r)}
 return [...groups.values()].filter(r=>r.wrong>0).map(r=>({...r,score:r.wrong/(r.right+r.wrong)})).sort((a,b)=>b.score-a.score||b.at-a.at).slice(0,5);
}
export async function flushLearning(){
 const id=learnerId();if(inflight||id==='guest'||!api.saveLearningState||globalThis.navigator?.onLine===false)return false;
 let pending;try{pending=localStorage.getItem(key(id)+'_pending')}catch{return false}if(!pending)return true;
 const state=learningState(id);inflight=true;
 try{await api.saveLearningState(copy(state),id);if(learnerId()===id&&localStorage.getItem(key(id)+'_pending')===pending)localStorage.removeItem(key(id)+'_pending');return true}catch{return false}finally{inflight=false;try{if(learnerId()!==id||localStorage.getItem(key(id)+'_pending')!==pending){clearTimeout(timer);timer=setTimeout(flushLearning,800)}}catch{}}
}
export function applyDisplay(value={}){
 const prefs={large:!!value.large,contrast:!!value.contrast,motion:!!value.motion};for(const [k,v]of Object.entries(prefs))document.documentElement.dataset['learn'+k[0].toUpperCase()+k.slice(1)]=String(v);document.dispatchEvent(new CustomEvent('classora:display-settings',{detail:prefs}));return prefs;
}
export function saveDisplay(value){const data=learningState(),at=stamp();data.preferences={value:applyDisplay(value),at};data.at=at;write(data,learnerId())}
if(typeof window!=='undefined'){window.addEventListener('classora-auth-settled',()=>{window.classoraCurriculum?.close();clearTimeout(timer);try{localStorage.setItem('classora_study_owner',learnerId())}catch{}applyDisplay(learningState().preferences?.value);notify();flushLearning()});window.addEventListener('online',flushLearning);window.addEventListener('pagehide',flushLearning);window.addEventListener('storage',e=>{if(e.key?.startsWith('classora_learning_v130_')){applyDisplay(learningState().preferences?.value);notify()}})}
