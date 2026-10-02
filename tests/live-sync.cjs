const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
function part(a,b){const start=html.indexOf(a);return html.slice(start,html.indexOf(b,start))}
const listeners=[],clients=[];let server={status:'lobby',currentIndex:-1};
const snap=data=>({id:'r',exists:()=>true,data:()=>data,metadata:{hasPendingWrites:false}});
function client(){
 const dom={textContent:''},events={},ctx={console,Map,JSON,Number,Date,navigator:{onLine:true},
 liveSubscriptionGeneration:0,liveRecoveryHandle:null,liveReconnectHandle:null,liveUnsubs:[],liveCompetitionTimerHandle:null,
 liveTimerKey:'',liveTimerLastSecond:null,livePreviousRanks:new Map(),liveCompetitionData:null,
 liveCompetitionId:null,liveCompetitionRole:null,liveRoomRevision:'',competitionModal:{classList:{contains:()=>true}},
 window:{addEventListener:(key,fn)=>events[key]=fn,removeEventListener:key=>delete events[key]},
 document:{hidden:false,getElementById:()=>dom,addEventListener:(key,fn)=>events[key]=fn,removeEventListener:key=>delete events[key]},
 setInterval:fn=>{ctx.recover=fn;return 1},clearInterval(){},setTimeout:fn=>{ctx.retry=fn;return 1},clearTimeout(){},
 db:{},doc:(_db,...p)=>p.join('/'),collection:(_db,...p)=>p.join('/'),
 onSnapshot:(ref,ok,fail)=>{const entry={ref,ok,fail,active:true};listeners.push(entry);return()=>entry.active=false},
 getDocFromServer:async()=>snap(server),renderLiveRoom:()=>{ctx.screen={...ctx.liveCompetitionData}},renderLivePlayers(){},renderLiveLeaderboard(){},showToast(){},showCompetitionView(){},adminLang:a=>a,
 };
 vm.createContext(ctx);vm.runInContext(part('function clearLiveSubscriptions','function showCompetitionView'),ctx);
 vm.runInContext(part('function subscribeCompetition','function renderLivePlayers'),ctx);
 ctx.subscribeCompetition('r','player');clients.push(ctx);return ctx;
}
(async()=>{
 const a=client(),b=client();
 for(const l of listeners.filter(l=>l.ref==='competitions/r'))l.ok(snap(server));
 server={status:'question',currentIndex:0,currentQuestion:{prompt:'First'}};
 listeners[0].ok(snap(server));assert.equal(a.screen.status,'question');assert.equal(b.screen.status,'lobby');
 await b.recover();assert.equal(b.screen.status,'question');assert.equal(b.screen.currentQuestion.prompt,'First');
 server={status:'result',currentIndex:0};listeners[0].ok(snap(server));
 listeners[0].ok(snap({status:'question',currentIndex:0}));assert.equal(a.screen.status,'result');
 const old=listeners[0];a.subscribeCompetition('other','player');old.ok(snap({status:'finished',currentIndex:10}));assert.equal(a.liveCompetitionData,null);
 const live=listeners.at(-2);live.fail(new Error('simulated disconnect'));a.retry();assert(listeners.at(-2).active);
 a.clearLiveSubscriptions();b.clearLiveSubscriptions();assert(!listeners.some(l=>l.active));
 console.log('PASS: two-client missed-start recovery, stale snapshot rejection, old-room isolation, reconnect, listener cleanup.');
})().catch(e=>{console.error(e);process.exitCode=1});
