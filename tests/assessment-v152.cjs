// Regression checks for Classora lesson-specific questions and locale vocabulary.
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const load=p=>fs.readFileSync(path.join(root,p),'utf8');
const local=s=>s.replace(/^import [^\n]+\n/gm,'').replace(/\bexport (const|function|class)\b/g,'$1 ');
const combine=new Function(local(load('assets/classora-assessment-levels-v152.js'))+';return combineTopicQuestions;')();
const science=new Function(local(load('assets/classora-science-bank-v152.js'))+';return {scienceTopicQuestions,scienceCurriculumTopics};')();
const english=new Function(local(load('assets/english-catalog-v127.js'))+';return englishQuestions;')();
const history=new Function(local(load('assets/history-catalog-v127.js'))+';return historyQuestions;')();
const geography=new Function(local(load('assets/geography-catalog-v128.js'))+';return geographyQuestions;')();
const validate=q=>assert(q.options.length>=3&&q.options.includes(q.answer)&&new Set(q.options).size===q.options.length,'Invalid or ambiguous answer: '+q.prompt);
assert(science.scienceCurriculumTopics.length>=21);
for(const {key,pattern} of science.scienceCurriculumTopics){
 for(const lang of ['ar','en']){
  const base=science.scienceTopicQuestions(pattern.split('|')[0],lang);
  assert.equal(base.length,3,'Missing '+key+' in '+lang);
  base.forEach(validate);
  for(const level of ['easy','medium','hard','expert']){
   const qs=combine(base,level,lang,20);
   assert(qs.length>0,key+' '+lang+' '+level+' produced no questions');
   qs.forEach(validate);
   assert(qs.every(q=>q.difficulty===level),'Difficulty labels mismatched');
  }
 }
}
for(const [label,bank] of [
 ['English grammar',english({title:'Present Simple'},'en')],
 ['History',history({title:'عصر النهضة'},'en')],
 ['Geography',geography({title:'الهجرة'},'ar')]
]){
 assert(bank.length>=3,label+' has insufficient source material');
 for(const level of ['easy','medium','hard','expert'])combine(bank,level,'en',20).forEach(validate);
}
const locale={};const store={getItem:()=>'en'};
const translations=new Function('window','localStorage',load('assets/classora-locales-v140.js')+';return window.ClassoraLocale;')(locale,store);
for(const lang of ['es','ko','de','it','hi','tr']){
 translations.select(lang);
 for(const key of ['Pythagorean theorem','Density','Renaissance','Electric circuits','Expert']){
  assert.notEqual(translations.t(key),key,lang+' missing '+key);
 }
}
const assessment=load('assets/classora-assessment-v121.js');
const curriculum=load('assets/curriculum-v97.js');
for(const src of [assessment,curriculum,load('assets/classora-assessment-levels-v152.js'),load('assets/classora-science-bank-v152.js')])new Function(local(src));
assert(assessment.includes('addGraded(source)'));
assert(assessment.includes('scienceTopicQuestions(topic.title'));
assert.equal((curriculum.match(/<option value="expert">/g)||[]).length,2);
console.log('PASS: 21 science domains, 4 difficulties, subject-specific questions, 6 additional languages, and expert selectors');
