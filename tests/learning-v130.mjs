import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
let window,document,dom;
if(process.env.CLASSORA_TEST_DOM_MODULE){
 const {parseHTML}=await import(process.env.CLASSORA_TEST_DOM_MODULE);({window,document}=parseHTML('<html lang="en"><body><div id="platformLobby"><div class="lobby-shell"><div class="learning-hub"></div></div></div></body></html>'));
 Object.defineProperty(window.HTMLSelectElement.prototype,'value',{configurable:true,get(){return (this.querySelector('option[selected]')||this.querySelector('option'))?.getAttribute('value')??(this.querySelector('option[selected]')||this.querySelector('option'))?.textContent??''},set(value){for(const o of this.querySelectorAll('option')){if((o.getAttribute('value')??o.textContent)===String(value))o.setAttribute('selected','');else o.removeAttribute('selected')}}});
 window.Element.prototype.scrollIntoView=function(){};window.Element.prototype.scrollTo=function({top=0}={}){this.scrollTop=top};
}else{
 const {JSDOM}=require(process.env.CLASSORA_TEST_NODE_MODULES?process.env.CLASSORA_TEST_NODE_MODULES+'/jsdom':'jsdom');dom=new JSDOM('<html lang="en"><body><div id="platformLobby"><div class="lobby-shell"><div class="learning-hub"></div></div></div></body></html>',{url:'https://classora.study/',pretendToBeVisual:true});({window}=dom);({document}=window);
}
const memory=()=>{const data=new Map();return {getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,String(v)),removeItem:k=>data.delete(k)}};
for(const [key,value] of Object.entries({window,document,localStorage:memory(),sessionStorage:memory(),MutationObserver:window.MutationObserver,Event:window.Event,CustomEvent:window.CustomEvent,requestAnimationFrame:f=>setTimeout(()=>f(Date.now()),0),cancelAnimationFrame:clearTimeout,getComputedStyle:()=>({})}))globalThis[key]=value;
const frames=new Map();let frameSeq=0;
globalThis.requestAnimationFrame=fn=>{frames.set(++frameSeq,fn);return frameSeq};globalThis.cancelAnimationFrame=id=>frames.delete(id);
if(!window.HTMLInputElement.prototype.checkValidity)window.HTMLInputElement.prototype.checkValidity=function(){return this.value!==''&&Number.isFinite(+this.value)&&(this.min===''||+this.value>=+this.min)&&(this.max===''||+this.value<=+this.max)};

Object.defineProperty(globalThis,'navigator',{configurable:true,value:{onLine:false,serviceWorker:{ready:Promise.resolve({})}}});
globalThis.location=new URL('https://classora.study/study-offline.html');
const M=await import('../assets/learning-memory-v130.js?v=130');
let uid='student-a',fail=false;const uploads=[],reports=[];
const api={language:()=> 'en',profile:()=>({uid}),isGuest:()=>false,isTeacher:()=>true,toast:()=>{},saveLearningState:async(s,id)=>{if(fail)throw Error('offline');uploads.push({s,id})},openLessonReport:r=>reports.push(r)};
const {CURRICULUM_DATA:G,mountCurriculum}=await import('../assets/curriculum-v97.js?v=130');
const curriculum=mountCurriculum(api),root=document.querySelector('#classoraCurriculumModal');
const {lessonModel,modelChallenge}=await import('../assets/lesson-model-api-v130.js?v=130');
const pick=(subject)=>{for(const [grade,groups]of Object.entries(G)){if(groups[subject]?.length)return {grade,subject,title:typeof groups[subject][0]==='string'?groups[subject][0]:groups[subject][0].title}}};
let checked=0;
for(const subject of ['math','geometry','science','arabic','english','history','geography']){
 const topic=pick(subject);curriculum.openAt(topic.grade,subject,topic.title);const tools=root.querySelector('.cl130-tools');assert(tools,subject);tools.querySelector('[data-term]').click();assert(tools.querySelector('.cl130-definition').textContent.length>15);
 const adapter=lessonModel(root,topic,'en'),before=adapter.read();tools.querySelector('[data-lt="compare"]').click();const twin=root.querySelector('[data-twin="0"]'),other=root.querySelector('[data-twin="1"]');const otherBefore=other.value;const field=adapter.fields[0];twin.value=String(field.options?((+twin.value+1)%field.options.length):Math.min(field.max,+twin.value+field.step));twin.dispatchEvent(new Event(field.options?'change':'input',{bubbles:true}));assert.deepEqual(adapter.read(),before);assert.equal(other.value,otherBefore);assert(!/NaN|undefined/.test(root.querySelector('.cl130-twins').textContent));
 tools.querySelector('[data-lt="challenge"]').click();assert(!root.querySelector('.cl130-challenge').hidden);root.querySelector('[data-challenge="hint"]').click();assert(root.querySelector('.cl130-hint').textContent.startsWith('1/3'));root.querySelector('[data-challenge="check"]').click();assert(root.querySelector('.cl130-challenge-feedback').textContent);
 tools.querySelector('[data-lt="present"]').click();assert(root.querySelector('.cl130-present'));root.querySelector('[data-project="reveal"]').click();assert(root.querySelector('.cl130-revealed'));root.querySelector('[data-project="exit"]').click();assert(!root.querySelector('.cl130-present'));
 tools.querySelector('[data-report="text"]').value='The model label overlaps';tools.querySelector('[data-lt="report"]').click();assert.equal(reports.at(-1).topic.title,topic.title);
 checked++;
}
// Exact numeric state restored after closing and opening, with account isolation.
const t=pick('math');curriculum.openAt(t.grade,t.subject,t.title);let model=lessonModel(root,t,'en');const f=model.fields[0];const state={...model.read(),[f.id]:f.min+f.step*2};model.restore(state);curriculum.close();curriculum.openAt(t.grade,t.subject,t.title);assert.deepEqual(lessonModel(root,t,'en').read(),state);
const a=M.learningState(),savedTopic=a.last.topic;assert(a.last);uid='student-b';assert.equal(M.learningState().last,null);assert.equal(M.saveLessonSession(savedTopic,{model:state},'student-a'),false);uid='student-a';assert.deepEqual(M.learningState().last.state.model,state);
M.recordLearningAttempt(savedTopic,false,{question:{prompt:'Question',answer:'2',explanation:'Because 1+1=2'},selected:'3'});assert(M.reviewTopics(t.grade).some(x=>x.topic.id===savedTopic.id));
M.saveDisplay({large:true,contrast:true,motion:true});assert.equal(document.documentElement.dataset.learnMotion,'true');assert(localStorage.getItem('classora_learning_v130_student-a_pending'));
navigator.onLine=true;fail=true;assert.equal(await M.flushLearning(),false);assert(localStorage.getItem('classora_learning_v130_student-a_pending'));fail=false;assert.equal(await M.flushLearning(),true);assert.equal(localStorage.getItem('classora_learning_v130_student-a_pending'),null);assert.equal(uploads.at(-1).id,'student-a');
assert.equal(M.mergeLearning({sessions:{a:{at:2,value:'new'}}},{sessions:{a:{at:1,value:'old'}}}).sessions.a.value,'new');
// Model challenge checks an actual changed state.
curriculum.openAt(10,'science','الرقم الهيدروجيني pH');model=lessonModel(root,{subject:'science',title:'الرقم الهيدروجيني pH'},'en');model.restore({value:2,phase:0});const challenge=modelChallenge(model);assert.equal(challenge.check(),false);model.restore({value:7,phase:0});assert.equal(challenge.check(),true);
const {smartTopicMatch}=await import('../assets/learning-search-v130.js?v=130');assert(smartTopicMatch('اشرحلي ميل الخط','الميل والمقطع'));assert(smartTopicMatch('مش فاهم الذرة','بنية الذرة'));
const {answerFeedback}=await import('../assets/learning-feedback-v130.js?v=130');assert.match(answerFeedback({answer:'2',explanation:'One plus one equals two.'},'3','en'),/One plus one/);
// Real package graph and failed downloads must not claim success.
const {downloadUnit,downloadedUnits,removeUnit,UNIT_CACHE}=await import('../assets/learning-offline-v130.js?v=130');const manifest=JSON.parse(fs.readFileSync(new URL('../assets/offline-manifest-v130.json',import.meta.url),'utf8'));assert(manifest.files.includes('./study-offline.html'));for(const path of manifest.files)assert(fs.existsSync(new URL('../'+path.split('?')[0],import.meta.url)),path);
const cacheData=new Map();globalThis.caches={open:async()=>({match:async k=>cacheData.get(k),put:async(k,v)=>cacheData.set(k,v)}),delete:async()=>cacheData.clear()};let failDownload=true;globalThis.fetch=async url=>{if(String(url).includes('offline-manifest'))return {ok:true,json:async()=>manifest};return {ok:!failDownload}};
const unit={id:'math-unit',grade:8,subject:'math',title:'Math',topics:[savedTopic]};await assert.rejects(downloadUnit(unit));assert(!downloadedUnits()[unit.id]);failDownload=false;await downloadUnit(unit);assert.equal(cacheData.size,manifest.files.length);assert(downloadedUnits()[unit.id]);await removeUnit(unit.id);assert.equal(cacheData.size,0);
const sw=fs.readFileSync(new URL('../service-worker.js',import.meta.url),'utf8');assert(sw.includes('classora-study-units-'));assert(sw.includes('study-offline.html'));curriculum.close();await M.flushLearning();console.log(`PASS v130: ${checked} subject toolsets, independent experiments, glossary, presentation, report context, exact resume, account isolation, durable failed/retried sync, error review, search, challenges, offline graph and atomic download completion.`);// Boot the actual standalone offline page without Firebase or an online session.
localStorage.setItem('classora_downloaded_units_v130',JSON.stringify({[unit.id]:{...unit,title:['رياضيات','Math']}}));localStorage.setItem('classora_study_owner','student-a');
const offlineHTML=fs.readFileSync(new URL('../study-offline.html',import.meta.url),'utf8');document.body.innerHTML=offlineHTML.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1];await import('../assets/study-offline-v130.js?v=130');assert(document.querySelector('.offline-unit'));document.querySelector('.offline-unit button').click();assert(document.querySelector('.cl130-tools'));assert(!document.querySelector('[data-lt="present"]'));document.querySelector('[data-action="exam"]').click();await Promise.resolve();assert.equal(document.querySelector('#offlineExam').hidden,false);assert(document.querySelector('#offlineExam [data-answer]'));document.querySelector('#offlineExam [data-answer]').click();assert(document.querySelector('#offlineExam main').textContent.length>30);window.classoraCurriculum.close();console.log('PASS: standalone offline lesson and generated practice exam boot without network authentication.');dom?.window.close();
