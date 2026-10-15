const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const strip=s=>s.replace(/^import [^\n]+\n/gm,'').replace(/\bexport (const|function|class)\b/g,'$1 ');
const code=read('assets/classora-locales-v140.js');
const window={};
const locale=new Function('window','localStorage','document',code+';return window.ClassoraLocale;')(
 window,{getItem:()=> 'es'},{querySelectorAll:()=>[]});
const base=locale.dictionaries.es;
const all=Object.keys(locale.dictionaries);
assert.deepEqual(all.sort(),['de','es','hi','it','ko','tr']);
for(const lang of all){
 assert(Object.keys(locale.dictionaries[lang]).length>=950,'Insufficient dictionary: '+lang);
 for(const key of Object.keys(base))
  assert(typeof locale.dictionaries[lang][key]==='string'&&locale.dictionaries[lang][key].length>0,lang+' missing '+key);
}
assert.equal(locale.tFor('ko','Grade 8'),'8학년');
assert.equal(locale.tFor('tr','Grade 8'),'8. sınıf');
assert.equal(locale.tFor('es','An unlisted student message'),'An unlisted student message');
assert.match(locale.tFor('ko','Reviewed 7 cards'),/7장/);
assert.match(locale.tFor('es','3 learners'),/3 estudiantes/);
assert.match(locale.tFor('de','A 5 m ladder reaches 4 m up a wall. How far is its foot from the wall?'),/5 m/);
const math=new Function(strip(read('assets/math-catalog-v119.js'))+';return splitMathCurriculum;')();
const geography=new Function(strip(read('assets/geography-catalog-v128.js'))+';return geographyLesson;')();
const history=new Function(strip(read('assets/history-catalog-v127.js'))+';return historyLesson;')();
const curriculum=strip(read('assets/curriculum-v97.js'));
const first=curriculum.slice(curriculum.indexOf('const S={'),curriculum.indexOf('function translationTitle('));
const data=new Function('splitMathCurriculum','window','geographyLesson','historyLesson',first+';return {G,curriculumTopicDisplayName};')(
 math,window,geography,history);
const titles=new Set();
let instances=0;
for(const rows of Object.values(data.G)){
 for(const [subject,topics] of Object.entries(rows)){
  for(const raw of topics){
   const title=typeof raw==='string'?raw:raw.title;
   const en=data.curriculumTopicDisplayName(title,subject,'en');
   titles.add(en);instances++;
   for(const lang of all)
    assert(Object.hasOwn(locale.dictionaries[lang],en),lang+' is missing topic: '+en);
  }
 }
}
assert(instances>=470,'Unexpectedly small curriculum');
assert(titles.size>=350,'Unexpectedly few unique lesson titles');
const modules=[
 'assets/english-studio-v127.js','assets/history-studio-v127.js',
 'assets/geography-studio-v128.js','assets/arabic-studio-v119.js',
 'assets/math-studio-v119.js','assets/lesson-explorer-v129.js',
 'assets/humanities-practice-v127.js','assets/lesson-model-api-v130.js',
 'assets/learning-tools-v130.js','assets/learning-home-v130.js',
 'assets/lesson-workbench-v129.js','assets/learning-hub.js',
 'assets/learning-plus.js','assets/subject-labs.js'
];
let testedLabels=0;
for(const file of modules){
 const raw=read(file);
 new Function(strip(raw));
 const regex=/\b(?:T|L)\(\s*['"][^'"\n]*['"]\s*,\s*['"]([^'"\n]*)['"]\s*\)/g;
 for(const match of raw.matchAll(regex)){
  const english=match[1].trim();
  if(english.includes('$'))continue;
  testedLabels++;
  assert(Object.hasOwn(base,english),file+' missing a translated UI label: '+english);
 }
}
console.log('PASS: '+instances+' curriculum instances, '+titles.size+' distinct topics, '+Object.keys(base).length+' localized source strings per language, '+testedLabels+' UI label references checked.');
