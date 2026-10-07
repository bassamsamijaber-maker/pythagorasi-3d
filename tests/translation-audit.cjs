const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");

const root=path.join(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,...p.split("/")),"utf8");
const index=read("index.html");
const periodicHtml=read("chemistry/periodic-table.html");
const periodicJs=read("chemistry/periodic-table.js");
const curriculum=read("assets/curriculum-v97.js");
const learningHub=read("assets/learning-hub.js");
const learningPlus=read("assets/learning-plus.js");
const learningContent=read("assets/learning-content.js");
const subjectLabs=read("assets/subject-labs.js");
const offline=read("offline.html");
const privacy=read("privacy.html");
const support=read("support.html");

const arabic=/[\u0600-\u06FF]/;
const pairRe=/\[\s*"((?:\\.|[^"\\])*)"\s*,\s*"((?:\\.|[^"\\])*)"\s*\]/g;
const keys=new Set();
let m;
while((m=pairRe.exec(index))){
  const ar=m[1].replace(/\\\"/g,'"').replace(/\\\\/g,"\\").trim();
  if(arabic.test(ar))keys.add(ar);
}

const htmlEnd=index.indexOf('<script type="module">');
assert(htmlEnd>0,"main module script not found");
const preModule=index.slice(0,htmlEnd);
const html=preModule.replace(/<script\b[\s\S]*?<\/script>/gi,"").replace(/<style\b[\s\S]*?<\/style>/gi,"");

const staticTexts=[...new Set([...html.matchAll(/>([^<>]+)</g)]
  .map(x=>x[1].replace(/\s+/g," ").trim())
  .filter(x=>x&&arabic.test(x)))];
const staticAttrs=[...new Set([...html.matchAll(/\b(?:placeholder|title|aria-label)="([^"]*[\u0600-\u06FF][^"]*)"/g)]
  .map(x=>x[1].trim()))];

assert.deepEqual(staticTexts.filter(x=>!keys.has(x)),[],"untranslated static Arabic UI text found");
assert.deepEqual(staticAttrs.filter(x=>!keys.has(x)),[],"untranslated static Arabic attribute found");

const noTranslateArabic=[...html.matchAll(/<([a-z0-9-]+)([^>]*data-no-translate[^>]*)>([\s\S]*?)<\/\1>/gi)]
  .map(x=>x[3].replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim())
  .filter(x=>arabic.test(x));
assert.deepEqual(noTranslateArabic,[],"English-first static data-no-translate nodes must not contain Arabic");

const script=index.slice(index.indexOf('<script type="module">'));
function collect(re){
  const out=[];let x;
  while((x=re.exec(script))){
    const s=x[1].trim();
    if(s&&arabic.test(s))out.push(s);
  }
  return [...new Set(out)];
}
const direct=[
  ...collect(/(?:textContent|innerText)\s*=\s*["'`]([^"'\`\n]*[\u0600-\u06FF][^"'\`\n]*)["'`]/g),
  ...collect(/showToast\(\s*["'`]([^"'\`\n]*[\u0600-\u06FF][^"'\`\n]*)["'`]/g),
  ...collect(/setAuthError\(\s*["'`]([^"'\`\n]*[\u0600-\u06FF][^"'\`\n]*)["'`]/g)
];
assert.deepEqual([...new Set(direct)].filter(x=>!x.includes("${")&&!keys.has(x)),[],"untranslated direct dynamic Arabic UI text found");

const dynamicAttrs=[...new Set([...script.matchAll(/\b(?:placeholder|title|aria-label)=["']([^"']*[\u0600-\u06FF][^"']*)["']/g)]
  .map(x=>x[1].trim()))];
assert.deepEqual(dynamicAttrs.filter(x=>!x.includes("${")&&!keys.has(x)),[],"untranslated dynamic Arabic attributes found");

assert.equal(collect(/(?<!ui)confirm\(\s*["'`]([^"'\`\n]*[\u0600-\u06FF][^"'\`\n]*)["'`]/g).length,0,"raw Arabic confirm() must use uiConfirm");
assert.equal(collect(/(?<!ui)prompt\(\s*["'`]([^"'\`\n]*[\u0600-\u06FF][^"'\`\n]*)["'`]/g).length,0,"raw Arabic prompt() must use uiPrompt");

function duplicatedArabicPairs(source){
  const bad=[];const re=/\[\s*(['"`])([^'"`\n]*[\u0600-\u06FF][^'"`\n]*)\1\s*,\s*(['"`])([^'"`\n]*)\3\s*\]/g;let x;
  while((x=re.exec(source)))if(arabic.test(x[4]))bad.push([x[2],x[4]]);
  return bad;
}
assert.deepEqual(duplicatedArabicPairs(learningHub),[],"learning hub contains Arabic in the English side of a bilingual pair");
assert.deepEqual(duplicatedArabicPairs(learningPlus),[],"learning plus contains Arabic in the English side of a bilingual pair");
assert.deepEqual(duplicatedArabicPairs(learningContent),[],"learning content contains Arabic in the English side of a bilingual pair");

assert.match(curriculum,/curriculumTopicDisplayName/,"curriculum must expose localized topic labels");
assert.match(curriculum,/topic\.subject==="arabic"\)return lang\(api\)==="en"/,"Arabic curriculum titles must localize in English mode");
assert.doesNotMatch(curriculum,/nativeOnly=t\.subject==="arabic"/,"Arabic curriculum must not disable site translation");
assert.match(learningHub,/const englishBank=\[/,"Arabic grammar quizzes need an English-only bank");
assert.doesNotMatch(learningHub,/key==="arabic"\?"عربي — قواعد"/,"Arabic subject tab must follow site language");
assert.match(subjectLabs,/pairEn:\['kitābu','aṭ-ṭālibi'\]/,"Idafa lab must provide Latin-script English-mode content");
assert.doesNotMatch(subjectLabs,/:\s*'مختبر المضاف والمضاف إليه'/,"Idafa lab title must not be hard-coded Arabic");

for(const [name,page] of [["privacy",privacy],["support",support]]){
  assert.match(page,/localStorage\.getItem\('pythagorasi_language'\)/,name+" page must respect saved Classora language");
  assert.match(page,/arBtn\.textContent=a\?'العربية':'Arabic'/,name+" page must show an English language-switch label in English mode");
}
assert.match(offline,/localStorage\.getItem\('pythagorasi_language'\)/,"offline page must respect saved Classora language");

assert.equal([...periodicHtml.matchAll(/>([^<>]*[\u0600-\u06FF][^<>]*)</g)].length,0,"periodic table HTML must not hard-code Arabic UI text");
new Function(periodicJs);

console.log("PASS: Classora full-site English translation audit passed.");
