import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {JSDOM}=require(process.env.CLASSORA_TEST_NODE_MODULES?process.env.CLASSORA_TEST_NODE_MODULES+'/jsdom':'jsdom');
const dom=new JSDOM('<!doctype html><html lang="en"><body></body></html>',{url:'https://classora.study/',pretendToBeVisual:true});
for(const key of ['window','document','localStorage','sessionStorage','MutationObserver','Event','CustomEvent','getComputedStyle','requestAnimationFrame','cancelAnimationFrame'])globalThis[key]=['getComputedStyle','requestAnimationFrame','cancelAnimationFrame'].includes(key)?dom.window[key].bind(dom.window):dom.window[key];
const {CURRICULUM_DATA:G,mountCurriculum,curriculumTopicGuide}=await import('../assets/curriculum-v97.js?v=127');
const {englishLesson,englishQuestions}=await import('../assets/english-catalog-v127.js?v=127');
const {historyLesson,historyQuestions}=await import('../assets/history-catalog-v127.js?v=127');
const {classoraAssessment}=await import('../assets/classora-assessment-v121.js?v=127');
window.classoraAssessment=classoraAssessment;
let language='en',guest=false,login=0,exam=null,competition=null,correct=0;
const curriculum=mountCurriculum({language:()=>language,profile:()=>null,isGuest:()=>guest,requireLogin:()=>login++,isTeacher:()=>true,startExam:async e=>{exam=e;return false},startCompetition:async qs=>{competition=qs;return false},saveProgress:()=>correct++});
const root=document.querySelector('#classoraCurriculumModal');let pages=0,questions=0;
for(const lang of ['ar','en']){language=lang;for(const [grade,data] of Object.entries(G))for(const subject of ['english','history'])for(const [index,title] of (data[subject]||[]).entries()){
 const topic={grade:Number(grade),subject,title,index},lesson=subject==='english'?englishLesson(title):historyLesson(title);assert(lesson,`${subject}: ${title}`);
 const qs=subject==='english'?englishQuestions(topic,lang):historyQuestions(topic,lang);assert(qs.length>=3,title);assert.equal(new Set(qs.map(q=>q.prompt)).size,qs.length,title);
 for(const q of qs){assert.equal(new Set(q.options).size,q.options.length,title);assert.equal(q.options.filter(o=>o===q.answer).length,1,title);assert(q.explanation.length>15,title);assert(!/undefined|NaN/.test(q.prompt+q.explanation),title);questions++}
 if(subject==='english'){assert(lesson.examples.length>=3,title);for(const e of lesson.examples){assert(e.parts.length>0,title);assert(e.parts.every(p=>p.role.length===2&&p.role.every(Boolean)),title);assert(e.translation&&e.note.every(Boolean),title)}}
 else {assert(lesson.events.length>=3,title);assert(lesson.events.every((e,i)=>i===0||e.year>=lesson.events[i-1].year),title);assert(lesson.sources.length>0,title)}
 const generated=classoraAssessment.generate(`curr:${grade}:${subject}:${index}`,Math.min(3,qs.length),'medium',lang,false);assert.equal(generated.questions.length,3,title);assert(generated.questions.every(q=>q.subjectKey===subject&&q.curriculumGrade===Number(grade)),title);
 assert.throws(()=>classoraAssessment.generate(`curr:${grade}:${subject}:${index}`,30,'medium',lang,false),undefined,title);
 curriculum.openAt(grade,subject,title);assert(root.classList.contains('studio-open'));assert(root.querySelector(subject==='english'?'.ce-studio':'.ch-studio'),title);assert(!/undefined|NaN/.test(root.textContent),title);assert(curriculumTopicGuide(title,subject,lang).includes(lesson.rule[lang==='en'?1:0]),title);pages++;
 }}
language='en';curriculum.openAt(8,'english','Present Simple');assert(root.querySelector('.ce-translation').hidden);root.querySelector('[data-ce="translation"]').click();assert(!root.querySelector('.ce-translation').hidden);
const before=root.querySelector('.ce-sentence').textContent;root.querySelector('[data-ce="next"]').click();assert.notEqual(root.querySelector('.ce-sentence').textContent,before);
guest=true;root.querySelector('[data-cx="practice"]').click();root.querySelector('[data-ce="puzzle"]').click();assert.equal(login,2);assert.equal(root.querySelector('.cm-question').textContent,'');guest=false;
root.querySelector('[data-ce="puzzle"]').click();for(let i=0;i<englishLesson('Present Simple').examples[1].parts.length;i++)root.querySelector(`[data-add="${i}"]`).click();root.querySelector('[data-ce="check"]').click();assert.match(root.querySelector('.ce-feedback').textContent,/Correct order/);
root.querySelector('[data-cx="practice"]').click();assert(root.querySelectorAll('[data-answer]').length>=3);root.querySelector('[data-cx="exam"]').click();await Promise.resolve();assert.equal(exam.subject,'english');assert.equal(exam.questions.length,3);
curriculum.openAt(8,'history','عصر النهضة');const earlier=root.querySelector('.ch-event-title').textContent;const slider=root.querySelector('.ch-slider');slider.value='1';slider.dispatchEvent(new Event('input',{bubbles:true}));assert.notEqual(root.querySelector('.ch-event-title').textContent,earlier);assert.equal(root.querySelector('.ch-select').value,'1');root.querySelector('[data-ch="cause"]').click();assert(root.querySelector('.ch-causal'));root.querySelector('[data-cx="live"]').click();await Promise.resolve();assert(competition.every(q=>q.subjectKey==='history'));
console.log(`PASS: ${pages} bilingual lesson mounts, ${questions} reviewed question checks, unified exams/live metadata, translation toggle, sentence building, guest gates and live historical timeline.`);
dom.window.close();
