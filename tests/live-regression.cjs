// Run with: node tests/live-regression.cjs. No production Firebase writes.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const section=(from,to)=>html.slice(html.indexOf(from),html.indexOf(to,html.indexOf(from)));
const elements=new Map();
const element=id=>{if(!elements.has(id))elements.set(id,{textContent:'',disabled:false,classList:{add(){},remove(){},toggle(){},contains(){return true}},addEventListener(event,fn){this[event]=fn}});return elements.get(id)};
const values=new Map();
const snapshot=ref=>({id:ref.split('/').at(-1),exists:()=>values.has(ref),data:()=>values.get(ref),metadata:{hasPendingWrites:false}});
let writes=0,transactionQueue=Promise.resolve();
const context={console,Math,Date,JSON,Number,String,Set,Map,Promise,setTimeout,clearTimeout,
 document:{getElementById:element,querySelectorAll:()=>[],addEventListener(){},removeEventListener(){},hidden:false},
 window:{PythagorasiUser:{displayName:'Test'},addEventListener(){},removeEventListener(){}},navigator:{onLine:true},
 auth:{currentUser:{uid:'teacher'}},db:{},doc:(_db,...parts)=>parts.join('/'),collection:(_db,...parts)=>parts.join('/'),
 query:(ref,...filters)=>ref,where(){},getDoc:async ref=>snapshot(ref),getDocFromServer:async ref=>snapshot(ref),
 getDocs:async()=>({docs:[...values].filter(([key])=>key.includes('/responses/')).map(([key])=>snapshot(key))}),
 runTransaction:(_db,callback)=>{const run=transactionQueue.then(async()=>{const pending=[];const result=await callback({get:async ref=>snapshot(ref),set:(ref,v)=>pending.push([ref,v]),update:(ref,v)=>pending.push([ref,{...values.get(ref),...v}])});for(const [ref,value] of pending){values.set(ref,value);writes++}return result});transactionQueue=run.catch(()=>{});return run},
 serverTimestamp:()=>({seconds:Date.now()/1000}),normExam:s=>String(s).trim().toLowerCase(),
 shuffle:rows=>rows.sort(()=>Math.random()-.5),currentUILanguage:'ar',equationText:(a,b,c)=>`${a}x + ${b}y = ${c}`,
 showToast(){},soundFx(){},logStudentActivity(){},renderLiveRoom(){},
 setInterval:fn=>{context.tick=fn;return 1},clearInterval(){},
 liveCompetitionRole:'host',liveCompetitionData:null,liveCompetitionId:'r',liveSubscriptionGeneration:1,
 liveAnsweredIndex:-1,liveAnswerPending:false,liveHostActionPending:false,liveLastAnswerByIndex:{},livePlayers:[{uid:'p',team:'A',score:0}],
 LIVE_QUESTION_SECONDS:20,liveCompetitionTimerHandle:null,liveTimerKey:'',liveTimerLastSecond:null,
};vm.createContext(context);
vm.runInContext(section('function competitionQuestionTypeLabel','async function createLiveCompetition'),context);
vm.runInContext(section('function liveTimestampMs','function renderLiveRoom'),context);
vm.runInContext(section('async function sendLiveAnswer','async function applyCompetitionRoomSettings'),context);
vm.runInContext(section('async function liveHostAction','document.getElementById("compCopyCode")'),context);
(async()=>{
for(const subject of ['mixed','pythagoras','equations2'])for(let n=3;n<=30;n++){
 const qs=context.makeLiveQuestions(subject,n);assert.equal(qs.length,n);assert.equal(new Set(qs.map(q=>q.prompt)).size,n);
 for(const q of qs){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert(q.options.includes(q.answer))}
}
// Host double-click cannot start the same round twice.
values.set('competitions/r',{ownerId:'teacher',status:'lobby',currentIndex:-1,questionCount:1,teamAScore:0,teamBScore:0});
values.set('competitions/r/questions/0',{prompt:'3+4',answer:'7',options:['7','6','5','4'],points:1000});
await Promise.all([context.hostSetQuestion(0),context.hostSetQuestion(0)]);assert.equal(writes,1);
context.liveCompetitionData={...values.get('competitions/r')};context.liveCompetitionRole='player';context.auth.currentUser.uid='p';
await Promise.all([context.sendLiveAnswer('7',element('answer')),context.sendLiveAnswer('6',element('other'))]);
assert.equal(values.get('competitions/r/responses/p_0').answer,'7');assert.equal(writes,2);
// Simulate repeated grading from two host requests: exactly one score increment.
values.set('competitions/r/players/p',{score:0});context.liveCompetitionRole='host';context.auth.currentUser.uid='teacher';
await Promise.all([element('compRevealBtn').click(),element('compRevealBtn').click()]);
assert.equal(values.get('competitions/r/players/p').score,1000);assert.equal(values.get('competitions/r').teamAScore,1000);
context.liveCompetitionData={...values.get('competitions/r'),status:'grading'};
await element('compRevealBtn').click();assert.equal(values.get('competitions/r/players/p').score,1000);
// Expired timer renders zero immediately and never restarts its interval.
context.liveCompetitionRole='player';context.startCompetitionCountdown({id:'r',status:'question',currentIndex:3,questionStartedAt:{seconds:(Date.now()-30000)/1000}});
assert.equal(element('compQuestionTimer').textContent,0);assert.equal(context.liveCompetitionTimerHandle,null);
console.log('PASS: 84 unique question sets, valid options, duplicate start/answer/grading protection, expired timer.');
})().catch(e=>{console.error(e);process.exitCode=1});
