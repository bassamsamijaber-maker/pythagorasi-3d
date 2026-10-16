const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..'),read=name=>fs.readFileSync(path.join(root,name),'utf8');
const noImports=s=>s.replace(/^\s*import\s+[\s\S]*?\s+from\s*["'][^"']+["'];\s*/gm,'\n').replace(/^\s*import\s*["'][^"']+["'];\s*/gm,'\n').replace(/\bexport (const|function|class)\b/g,'$1 ').replace(/^export \{[^\n]+\};?$/gm,'');
const localeCode=read('assets/classora-locales-v140.js');
const locale=new Function('window','localStorage','document',localeCode+';return window.ClassoraLocale;')({}, {getItem:()=> 'en'}, {querySelectorAll:()=>[]});
const languages=['es','ko','de','it','hi','tr'];
const periodic=read('chemistry/periodic-table.js');
const extract=(first,last,name)=>{const st=periodic.indexOf(first),ed=periodic.indexOf(last,st);assert(st>=0&&ed>=0,name+' block missing');return periodic.slice(st,ed)};
const raw=new Function(extract('const raw=[','];\nconst cats=','elements')+'];return raw;')();
const ui=new Function(extract('const ui={','function readStorage(','periodic UI')+';return ui;')();
const uses=new Function(extract('const uses=','function useText(','uses')+';return uses;')();
const compounds=new Function(extract('const compounds=','function pairKey(','compounds')+';return compounds;')();
assert.equal(raw.length,118);
assert.equal(Object.keys(ui.en).length,66);
let checked=0;
for(const language of languages){
 const dict=locale.dictionaries[language];assert(dict);
 for(const text of [
   ...raw.map(e=>e[2]),...Object.values(ui.en),...Object.values(uses).map(x=>x[0]),
   ...Object.values(compounds).map(x=>x[1])
 ]){
   assert(Object.hasOwn(dict,text),language+' missing translation: '+text);
   assert(locale.tFor(language,text).trim(),language+' empty translation: '+text);
   checked++;
 }
}
const math=new Function(noImports(read('assets/math-catalog-v119.js'))+';return splitMathCurriculum;')();
const geo=new Function(noImports(read('assets/geography-catalog-v128.js'))+';return geographyLesson;')();
const hist=new Function(noImports(read('assets/history-catalog-v127.js'))+';return historyLesson;')();
const src=noImports(read('assets/curriculum-v97.js'));
const header=src.slice(src.indexOf('const S={'),src.indexOf('function translationTitle('));
const curriculum=new Function('splitMathCurriculum','window','geographyLesson','historyLesson',header+';return {G,curriculumTopicDisplayName};')(
 math,{ClassoraLocale:locale},geo,hist);
const distinct=new Set();let instances=0;
for(const subjects of Object.values(curriculum.G)){
 for(const [subject,topics] of Object.entries(subjects)){
  for(const item of topics){
   const title=typeof item==='string'?item:item.title;
   const english=curriculum.curriculumTopicDisplayName(title,subject,'en');
   distinct.add(english);instances++;
   for(const language of languages){assert(Object.hasOwn(locale.dictionaries[language],english),'Topic '+english+' missing '+language);checked++;}
  }
 }
}
assert.equal(distinct.size,354);assert.equal(instances,474);
const uiLabels=[...new Set([...read('assets/curriculum-v97.js').matchAll(/txt\(api,\s*["'][^"']+["']\s*,\s*["']([^"']+)["']/g)].map(x=>x[1].trim()))];
for(const label of uiLabels)assert(Object.hasOwn(locale.dictionaries.es,label),'Untranslated curriculum UI: '+label);
assert.equal(locale.tFor('ko','Grade 8'),'8학년');
assert.equal(locale.tFor('tr','Grade 8'),'8. sınıf');
assert(read('chemistry/periodic-table.html').indexOf('classora-locales-v140.js')<read('chemistry/periodic-table.html').indexOf('periodic-table.js'));
assert(periodic.includes('localName(e).toLocaleLowerCase().includes(q)'),'Localized element search is missing');
const index=read('index.html');
const moduleSrc=[...index.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].find(x=>x[1].includes('module'))?.[2];
assert(moduleSrc,'Main module missing');new Function(noImports(moduleSrc));
for(const label of ['CLASSORA_PYTHAGORAS_PROOF_TEXT','CLASSORA_PYTHAGORAS_EXPLANATIONS','CLASSORA_PYTHAGORAS_CHALLENGE_TEXT'])
 assert(index.includes('const '+label+'='),label+' missing');
for(const [file,version] of [['assets/classora-locales-v140.js',161],['assets/classora-assessment-v121.js',161],['assets/classora-competition-topics-v122.js',161],['assets/curriculum-v97.js',159],['chemistry/periodic-table.html',159]])
 assert(index.includes(file+'?v='+version),file+' old version reference');
assert(read('service-worker.js').includes('classora-v165-complete-legal-localization'));
for(const file of ['chemistry/periodic-table.js','service-worker.js'])new Function(read(file));

for(const language of languages){
 for(const key of [
  'Choose a grade, then a subject, then a topic. Questions stay tied to the selected lesson.',
  '1. Choose grade','2. Choose subject','3. Search topics','Search for a lesson…',
  'Unknown topic.','No matching topics','No matching topics. Try a different keyword.',
  'Topics for '+locale.formatGrade(8,language),
  'Search a '+locale.formatGrade(8,language)+' topic',
  '12 topics in '+locale.formatGrade(8,language),
  'This topic is listed in the curriculum, but does not yet have 8 distinct, reviewed questions at this level. Choose a smaller count or another topic. Unrelated filler questions will not be used.'
 ])assert.notEqual(locale.tFor(language,key),key,language+' leaked English: '+key);
}
assert(read('assets/classora-assessment-v121.js').includes('tFor?.(lang,en)'));
assert(read('assets/classora-competition-topics-v122.js').includes('tFor?.(lang(),en)'));


for(const language of languages){
 for(const key of ['My offline units','Open main site to sync','Remove download','Back to lesson','Local practice',
 'Admin Panel','Control Center','Polls','Support requests','Teaching overview','Skip intro'])
 assert(Object.hasOwn(locale.dictionaries[language],key),language+' missing main navigation text '+key);
 for(const key of ['Option 3','Eq 2','5 accounts'])
  assert(locale.tFor(language,key).trim(),language+' missing numeric UI '+key);
}
assert(read('study-offline.html').includes('<option value="tr">Türkçe</option>'));
assert(index.includes('id="sessionRecoveryRetry">حاول مجددًا</button>'));
assert(index.includes('uiExactTranslations.set("دخول بحساب Google","Sign in with Google")'));

assert(read('assets/study-offline-v130.js').includes('tFor?.(language,b)'));


const legalModule=read('assets/classora-legal-v124.js');
const legalAsset=read('assets/classora-legal-translations-v164.js');
const standalonePrivacy=read('privacy.html'),standaloneTerms=read('terms.html');
const translationHost={};
new Function('window',legalAsset)(translationHost);
const legalTranslations=translationHost.ClassoraLegalTranslations;
assert(legalTranslations,'Legal translations unavailable');
const requiredPrivacy=['intro','info','items','usage','providers','ai','media','deleteStart','deleteAction','deleteEnd','choices','kids','contactBefore'];
const requiredTerms=['intro','accounts','conduct','learning','dataBefore','dataAfter','ai','devices','minors','helpBefore'];
for(const language of languages){
 for(const type of ['privacy','terms']){
  const content=legalTranslations.locales[language][type];
  for(const key of type==='privacy'?requiredPrivacy:requiredTerms)
   assert(content[key]&&(!Array.isArray(content[key])||content[key].length===6),language+' missing '+type+'.'+key);
  const rendered=legalTranslations.render(type,language);
  assert(rendered.includes('<h1>')&&rendered.includes('Classora'),language+' missing rendered legal title');
  assert(rendered.includes('Cloudflare')&&rendered.includes('Firebase')=== (type==='privacy'),language+' missing provider content');
  assert(rendered.includes('./support.html?lang='+language),language+' missing matching support link');
  assert(rendered.includes('<p class="updated">'),language+' missing legal update');
 }
}
for(const page of [standalonePrivacy,standaloneTerms]){
 assert(page.includes('classora-legal-translations-v164.js?v=165'),'Standalone legal translations not loaded');
 assert(page.includes("const codes=['ar','en','es','ko','de','it','hi','tr']"),'Not all eight legal languages selectable');
 const inlineScripts=[...page.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(x=>x[1]).filter(Boolean);
 for(const script of inlineScripts)new Function(script);
}
assert(legalModule.includes("ClassoraLegalTranslations.render(policy,language)"),'In-app legal dialog has no translated policy');
assert(legalModule.includes("document.documentElement.lang)?document.documentElement.lang:'en'"),'Legal dialog does not use selected language');
assert(index.includes('classora-legal-v124.js?v=165'),'Main website has stale legal document module');
assert(read('service-worker.js').includes('classora-legal-translations-v164.js?v=165'),'Legal files missing from offline cache');

console.log('PASS: '+checked+' language entries verified; '+instances+' curriculum topics ('+distinct.size+' unique), 118 elements, 66 table UI strings, '+Object.keys(uses).length+' uses, and '+Object.keys(compounds).length+' compounds.');
