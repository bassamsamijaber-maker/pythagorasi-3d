const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const src=fs.readFileSync('assets/classora-dashboard-v286.js','utf8');
let called=[];const elements=new Proxy({}, {get:(_,id)=>({disabled:false,click:()=>called.push(id),focus:()=>{},textContent:''})});
const ctx={window:{classoraCurriculum:{open:()=>called.push('subjects'),openAt:(...a)=>called.push(a)},classoraLearningPlus:{progress:()=>called.push('progress')},classoraLearningBoost:{openChallenge:()=>called.push('challenge')}},document:{getElementById:id=>elements[id],querySelector:()=>({scrollIntoView(){}})},root:{classList:{add(){},remove(){}},scrollTo(){}},positionAI(){},openSearch(){called.push('search')},sync(){},closeAI(){},grade:()=>8,last:()=>({grade:8,subject:'math',topic:'parallel'}),console};
vm.createContext(ctx);vm.runInContext("const $=id=>document.getElementById(id);"+src.slice(src.indexOf('function native('),src.indexOf('function grade('))+src.slice(src.indexOf('function go('),src.indexOf('function openSearch(')),ctx);
for(const r of ['subjects','subject:math','subject:science','subject:arabic','resume','progress','search','notifications','profile','classes','chat','settings','exam','live','challenge'])ctx.go(r);
assert.deepEqual(called.map(x=>Array.isArray(x)?Array.from(x):x),['subjects',[8,'math'],[8,'science'],[8,'arabic'],[8,'math','parallel'],'progress','search','lobbyNotificationsBtn','lobbyProfileBtn','lobbyClassBtn','lobbyChatBtn','lobbySettingsBtn','lobbyExamBtn','competitionBtn','challenge']);
const html=fs.readFileSync('index.html','utf8');for(const id of called.filter(x=>typeof x==='string'&&!['subjects','progress','search','challenge'].includes(x)))assert(html.includes('id="'+id+'"'),id);
assert(!/\b(?:240|60%|75%)\b/.test(src));console.log('PASS: 15 routes delegate to real curriculum, progress and native actions; target IDs exist.');

// Missing controls must report an actionable status instead of silently doing nothing.
let notice='';ctx.notify=message=>{notice=message};ctx.document.documentElement={lang:'ar'};ctx.document.getElementById=()=>null;
assert.equal(ctx.native('missing-control'),false);assert(notice.includes('غير متاح'));
// Progress remains bound to its owner, and missing services fall back to native tools.
let bound=false;ctx.window.classoraLearningPlus={progress(){bound=this===ctx.window.classoraLearningPlus}};ctx.go('progress');assert(bound);
let fallback=false;ctx.document.querySelector=()=>({scrollIntoView(){fallback=true}});ctx.window.classoraLearningBoost=null;ctx.go('challenge');assert(fallback);
console.log('PASS: unavailable-action feedback, bound progress method, and challenge fallback.');
function luminance(hex){const c=hex.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722}
for(const [name,fg,bg] of [['day body','#123c30','#ffffff'],['day muted','#4b695f','#ffffff'],['night body','#ecf7f2','#142720'],['night muted','#b4cdc2','#142720'],['night primary','#09281c','#55d5a0'],['day primary','#ffffff','#08764f'],['day purple','#6334a9','#dcc6ff'],['night purple','#e1c9ff','#543b75'],['night orange','#ffdab2','#67452d']]){const a=luminance(fg),b=luminance(bg),contrast=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);assert(contrast>=4.5,name+': '+contrast)}
console.log('PASS: primary text and accent pairs meet 4.5:1 contrast.');
