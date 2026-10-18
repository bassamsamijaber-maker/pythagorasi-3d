const fs=require('node:fs'),assert=require('node:assert/strict');
const strip=s=>s.replace(/^import .*\n/gm,'').replace(/\bexport /g,'');
const ws=strip(fs.readFileSync('assets/math-worksheet-v213.js','utf8'));
const api=new Function(ws+';return {worksheetQuestion,formatMathPrompt,renderMathFigure}')();
const math=new Function('worksheetQuestion',strip(fs.readFileSync('assets/math-catalog-v119.js','utf8'))+';return {MATH_LESSONS,mathQuestion,calculateLesson}')(api.worksheetQuestion);
let count=0;
for(const d of Object.values(math.MATH_LESSONS))for(const level of ['easy','medium','hard','expert'])for(const language of ['ar','en'])for(let n=0;n<60;n++){
 const q=math.mathQuestion({title:d.title,grade:8},level,n,language);
 assert(q.prompt&&q.explanation,d.key);assert(q.options.length>=3,d.key);assert.equal(new Set(q.options).size,q.options.length,d.key);assert.equal(q.options.filter(x=>x===q.answer).length,1,d.key);
 assert(!/NaN|undefined|Infinity/.test(q.prompt+q.answer+q.explanation),d.key);
 if(q.prompt.includes('[[MATH_FIGURE]]')){const html=api.formatMathPrompt(q.prompt);assert(html.includes('<svg'),d.key);assert(!html.includes('[[MATH_FIGURE]]'),d.key);}
 count++;
}
// Independent expected results for the old generator's mislabeled skills.
const rand=()=>.4;
function direct(key,v,r,level='medium',serial=0){return api.worksheetQuestion(math.MATH_LESSONS[key],v,r,level,serial,'en',rand)}
assert.equal(direct('congruence',{}, {answer:99,steps:[]}).answer,'3');
assert.equal(direct('isosceles',{}, {answer:99,steps:[]}).answer,'82.5');
assert.equal(direct('factor',{a:2,b:3},{answer:99,steps:[]}).answer,'(x + 2)(x + 3)');
assert.equal(direct('terms',{a:3,b:-1,c:4},{answer:99,steps:[]}).answer,'2x + (4)');
assert.equal(direct('similarity',{a:6,h:4,k:2},{answer:99,steps:[]},'hard').answer,'48');
assert.equal(direct('linear',{a:2,b:3},{steps:[]},'easy',5).answer,'x = 5');
assert.equal(direct('fractions',{a:3,b:2},{steps:[]},'easy',5).answer,'x = 15');
assert.equal(direct('midpoint',{x1:-2,y1:1,x2:4,y2:5},{answer:1,mid:[1,3],steps:['M=(1,3)']}).answer,'(1, 3)');
assert.equal(direct('increase',{a:1,b:-2,c:-3},{answer:1,vertex:[1,-4],steps:[],direction:'Decreasing left; increasing right.'},'hard',1).answer,'x > 1');
assert(!api.renderMathFigure(JSON.stringify({kind:'segment',labels:['<script>alert(1)</script>']})).includes('<script>'));
assert.equal(api.renderMathFigure('{broken'), '');
const html=fs.readFileSync('index.html','utf8');
for(const match of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)){
 if(/application\/ld\+json|importmap/.test(match[0])||!match[1].trim())continue;
 new Function(match[1].replace(/^import[\s\S]*?from\s*['"][^'"]+['"];?/gm,''));
}
console.log(`PASS: ${count} generated questions across ${Object.keys(math.MATH_LESSONS).length} skills, 4 levels, Arabic/English; rendering, math regressions and page syntax.`);
const split=new Function('worksheetQuestion',strip(fs.readFileSync('assets/math-catalog-v119.js','utf8'))+';return splitMathCurriculum')(api.worksheetQuestion);
const curriculum=new Function('splitMathCurriculum',strip(fs.readFileSync('assets/curriculum-v97.js','utf8').split('export const CURRICULUM_SUBJECTS=S;')[0])+';return {CURRICULUM_DATA:G,CURRICULUM_SUBJECTS:S};')(split);
const stat1=new Function(strip(fs.readFileSync('assets/classora-statistics-v147.js','utf8'))+';return statisticsTableQuestion;')();
const stat2=new Function('statisticsTableQuestion','window',strip(fs.readFileSync('assets/classora-statistics-v148.js','utf8'))+';return statisticsCompleteQuestion;')(stat1,{});
const assessment=new Function('CURRICULUM_DATA','CURRICULUM_SUBJECTS','curriculumTopicDisplayName','mathTopic','mathQuestion','statisticsCompleteQuestion',strip(fs.readFileSync('assets/classora-assessment-v121.js','utf8'))+';return classoraAssessment;')(curriculum.CURRICULUM_DATA,curriculum.CURRICULUM_SUBJECTS,x=>x,title=>Object.values(math.MATH_LESSONS).find(d=>d.title===title)||{key:'alias'},math.mathQuestion,stat2);
let total=0;const incomplete=[];
for(const t of assessment.topics.filter(t=>['math','geometry'].includes(t.subject)))for(const l of ['easy','medium','hard','expert']){
 const pack=assessment.generate(t.value,30,l,'ar',true);total+=pack.questions.length;if(pack.questions.length!==30)incomplete.push([t.title,l,pack.questions.length]);
 assert(pack.questions.every(q=>q.topicKey===t.value));
}
console.log(JSON.stringify({assessmentQuestions:total,incomplete}));
assert.equal(incomplete.length,0,'Every topic should fill a 30-question assessment');
