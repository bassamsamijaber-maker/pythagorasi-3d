import assert from 'node:assert/strict';
import {CURRICULUM_DATA as G} from '../assets/curriculum-v97.js';
import {MATH_LESSONS as M,mathTopic,defaultValues,calculateLesson as calc,mathQuestion} from '../assets/math-catalog-v119.js';
import {renderMathScene} from '../assets/math-scenes-v119.js';
import {evaluateCalculator as evaluate} from '../assets/math-calculator-v119.js';
import {arabicLesson,arabicQuestion,ARABIC_LESSONS,AR_ROLES,AR_MARKERS} from '../assets/arabic-catalog-v119.js';
const c=(key,values)=>calc(key,{...defaultValues(M[key]),...values},'en');
assert.equal(c('linear',{a:2,b:3,c:11}).answer,4);
assert.equal(c('both',{a:2,b:3,c:11,d:1}).answer,8);
assert.equal(c('brackets',{a:2,b:3,c:10}).answer,2);
assert.equal(c('fractions',{a:3,b:2,c:6}).answer,12);
assert.equal(c('linear',{a:0,b:3,c:3}).valid,false);
assert.match(c('linear',{a:0,b:3,c:3}).note,/Infinitely/);
assert.match(c('linear',{a:0,b:3,c:4}).note,/No solution/);
assert.equal(c('inequality',{a:-2,b:3,c:11}).formula,'x > -4');
assert.deepEqual(c('system',{a:2,b:1,c:-1,d:4}).solution,[1,3]);
assert.match(c('system',{a:2,b:1,c:2,d:4}).note,/parallel/);
assert.match(c('system',{a:2,b:1,c:2,d:1}).note,/Coincident/);
assert.deepEqual(c('quadratic-eq',{a:1,b:-2,c:-3}).roots,[-1,3]);
assert.deepEqual(c('quadratic-eq',{a:1,b:0,c:1}).roots,[]);
assert.deepEqual(c('quadratic-eq',{a:1,b:-2,c:1}).roots,[1]);
assert.equal(c('quadratic-eq',{a:0}).valid,false);
assert.equal(c('triangle',{angle:100,beta:90}).valid,false);
assert.equal(c('algebra-fractions',{a:2,x:-2}).valid,false);
assert.equal(c('volume',{a:4,b:3,h:2}).answer,24);
assert.equal(c('solid',{a:4,b:3,h:2}).answer,52);
assert.equal(c('pythagoras',{a:3,b:4}).answer,5);
assert.equal(c('midpoint',{x1:-2,y1:1,x2:4,y2:5}).answer,1);
assert.equal(c('slope',{x1:1,x2:1}).valid,false);
assert(Math.abs(c('sin',{angle:30,a:6}).answer-.5)<1e-12);
assert.deepEqual(c('stats',{a:1,b:2,c:3,d:4}).modes,[]);
assert.deepEqual(c('stats',{a:2,b:2,c:4,d:4}).modes,[2,4]);
assert.equal(c('probability',{a:0,b:0}).valid,false);
for(const [expr,result] of [['2+3*4',14],['(2+3)*4',20],['-2^2',-4],['2^3^2',512],['2(3+4)',14],['sqrt(81)',9],['١٢÷٣',4],['50%',.5],['5!',120],['sin(30)',.5]])assert(Math.abs(evaluate(expr)-result)<1e-10,expr);
for(const expr of ['1/0','sqrt(-1)','tan(90)','globalThis','constructor','2+','(2+3','2**3'])assert.throws(()=>evaluate(expr),expr);
assert.equal(evaluate('ans+1',{ans:5}),6);
let questionCount=0;const idSet=new Set();
for(const [grade,data] of Object.entries(G)){
 assert.equal(data.math.length+data.geometry.length,({7:19,8:25,9:23,10:23})[grade]);
 for(const subject of ['math','geometry'])for(const topic of data[subject]){
  assert(!idSet.has(topic.id));idSet.add(topic.id);const def=mathTopic(topic.title);assert(def,topic.title);assert.equal(def.geometry,subject==='geometry');
  for(const language of ['ar','en'])for(const difficulty of ['easy','medium','hard']){
   const prompts=new Set();for(let n=0;n<30;n++){const q=mathQuestion({...topic,grade},difficulty,n,language);assert(q.options.includes(q.answer));assert.equal(q.options.filter(x=>x===q.answer).length,1);assert.equal(new Set(q.options).size,q.options.length);assert(!/undefined|NaN/.test(q.prompt+q.explanation));prompts.add(q.prompt);questionCount++;const result=calc(def.key,q.sample,language);assert(result.valid);const scene=renderMathScene(def.key,q.sample,result,{},language);assert(!/NaN|undefined|Infinity/.test(scene),def.key)}assert(prompts.size>1,topic.title);
  }
 }
 for(const title of data.arabic){assert(arabicLesson(title),title);for(const language of ['ar','en'])for(let n=0;n<12;n++){const q=arabicQuestion({title},'hard',n,language);assert.equal(q.options.filter(x=>x===q.answer).length,1);assert(!/undefined/.test(q.prompt+q.explanation));}}
}
for(const d of new Set(Object.values(ARABIC_LESSONS)))for(const e of d.examples)for(const token of e.tokens){assert(AR_ROLES[token.role]);assert(!token.marker||AR_MARKERS[token.marker]);assert(e.translation);}
console.log(`PASS: 90 stable math IDs, ${Object.keys(M).length} models, ${questionCount} generated questions, grammar coverage, calculator and edge cases.`);
