const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const src=fs.readFileSync('assets/classora-dashboard-v286.js','utf8');
let called=[];const elements=new Proxy({}, {get:(_,id)=>({disabled:false,click:()=>called.push(id),focus:()=>{},textContent:''})});
const ctx={window:{classoraCurriculum:{open:()=>called.push('subjects'),openAt:(...a)=>called.push(a)},classoraLearningPlus:{progress:()=>called.push('progress')}},document:{getElementById:id=>elements[id],querySelector:()=>({scrollIntoView(){}})},root:{classList:{add(){},remove(){}},scrollTo(){}},positionAI(){},openSearch(){called.push('search')},sync(){},closeAI(){},grade:()=>8,last:()=>({grade:8,subject:'math',topic:'parallel'}),console};
vm.createContext(ctx);vm.runInContext("const $=id=>document.getElementById(id);"+src.slice(src.indexOf('function native('),src.indexOf('function grade('))+src.slice(src.indexOf('function go('),src.indexOf('function openSearch(')),ctx);
for(const r of ['subjects','subject:math','subject:science','subject:arabic','resume','progress','search','notifications','profile','classes','chat','settings','exam','live'])ctx.go(r);
assert.deepEqual(called.map(x=>Array.isArray(x)?Array.from(x):x),['subjects',[8,'math'],[8,'science'],[8,'arabic'],[8,'math','parallel'],'progress','search','lobbyNotificationsBtn','lobbyProfileBtn','lobbyClassBtn','lobbyChatBtn','lobbySettingsBtn','lobbyExamBtn','competitionBtn']);
const html=fs.readFileSync('index.html','utf8');for(const id of called.filter(x=>typeof x==='string'&&!['subjects','progress','search'].includes(x)))assert(html.includes('id="'+id+'"'),id);
assert(!/\b(?:240|60%|75%)\b/.test(src));console.log('PASS: 14 routes delegate to real curriculum, progress and native actions; target IDs exist.');
