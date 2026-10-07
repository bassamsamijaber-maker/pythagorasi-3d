const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const root=path.join(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,...p.split("/")),"utf8");

const curriculum=read("assets/curriculum-v97.js");
const css=read("assets/curriculum-v97.css");
const index=read("index.html");
const functionsIndex=read("functions/index.js");

const grade8=curriculum.slice(curriculum.indexOf(" 8:{"),curriculum.indexOf(" 9:{"));
for(const topic of ["معادلات خطية","معادلات متعددة الخطوات","معادلات مع أقواس","معادلات كسرية","مسائل كلامية على المعادلات"]){
  assert.ok(grade8.includes('"'+topic+'"'),"Grade 8 is missing "+topic);
}

for(const marker of [
 "scene-statistics","scene-fraction-equation","scene-word-equation","scene-equation-balance",
 "scene-system-equations","scene-ratio","scene-probability","scene-geometry",
 "scene-electricity","scene-light","scene-sound","scene-atom","scene-chemistry",
 "scene-biology","scene-ecosystem","scene-parsing","scene-history",
 "scene-earth-layers","scene-weather","scene-human-geography"
]){
  assert.ok(curriculum.includes(marker),"Missing interactive model "+marker);
}

assert.ok(curriculum.includes('modal.classList.toggle("lesson-open",state.view==="lesson")'),"Topic lessons must open full-page");
assert.ok(css.includes(".classora-curriculum-modal.lesson-open"),"Full-page topic CSS is missing");
assert.ok(css.includes("V105 — topic-specific interactive 3D curriculum"),"Interactive 3D topic CSS is missing");
assert.ok(css.includes("V107 — readable 3D labels + live controls"),"Readable 3D labels/live control CSS is missing");
assert.ok(curriculum.includes('const syncEditor=()=>{'),"Lesson editor must update live");
assert.ok(curriculum.includes('addEventListener("input",syncEditor)'),"Lesson inputs must sync instantly");
assert.ok(curriculum.includes('addEventListener("keyup",syncEditor)'),"Typing must sync on every key press");
assert.ok(curriculum.includes("cv-live-scene-plate"),"Every topic scene needs a live value plate");
assert.ok(curriculum.includes('liveData.textContent=dataText||display'),"Givens must update the 3D scene");
assert.ok(curriculum.includes('liveWords.textContent=wordsText||titleText(api,t)'),"Words must update the 3D scene");
assert.ok(curriculum.includes('liveQuestion.textContent=questionText'),"Question must update the 3D scene");
assert.ok(curriculum.includes('statInputs[0]?.dispatchEvent'),"Statistics editor values must update bars");
assert.ok(curriculum.includes('eqAdd.dispatchEvent'),"Equation editor values must update the equation model");
assert.ok(!curriculum.includes('id="cv99ApplyEditor"'),"Manual update button must not exist");
assert.ok(curriculum.includes("cv-live-field"),"Interactive numeric controls need visible captions");
assert.ok(css.includes(".scene-parsing .cv-word-card.w1"),"Arabic parsing cards need explicit spacing");
assert.ok(css.includes(".scene-parsing .cv-word-card.w3"),"Arabic parsing cards need explicit spacing");

assert.ok(index.includes('id="studentNameInput" maxlength="40" autocomplete="name" placeholder="Name"'),"Student name placeholder must be Name");
assert.ok(index.includes('id="teacherCreateName" maxlength="40" autocomplete="name" placeholder="Name"'),"Teacher name placeholder must be Name");
assert.ok(index.includes("function isSamsungDevice()"),"Samsung device detector is missing");
assert.ok(index.includes("const canInstall=isSamsungDevice();"),"Install visibility must be Samsung-only");
assert.ok(index.includes("if(!isSamsungDevice())"),"Install action must be blocked outside Samsung");
assert.ok(functionsIndex.includes('const APP_URL = "https://classora.study/";'),"Public app links must use classora.study");
assert.ok(!functionsIndex.includes("github.io"),"Public runtime must not expose a GitHub Pages URL");
assert.ok(!/chatgpt|openai|generated\s+by\s+ai|ai[-\s]?generated/i.test(index),"Public page must not contain AI-builder traces");
assert.ok(!index.includes("Classora AI"),"Visible branding and headers must not say Classora AI");
assert.ok(!index.includes("مساعد كلاسورا AI"),"Arabic headers must not include AI wording");
assert.ok(!index.includes('id="pythagAIChip"'),"Pythagoras header must not contain an AI chip");
assert.ok(!curriculum.includes("Classora AI"),"Curriculum lesson header must be AI-free");

console.log("PASS: Classora topic pages, Grade 8 equations and Samsung-only install audit passed.");
