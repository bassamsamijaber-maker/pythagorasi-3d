const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const root=path.join(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,...p.split("/")),"utf8");

const curriculum=read("assets/curriculum-v97.js");
const css=read("assets/curriculum-v97.css");
const index=read("index.html");

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

assert.ok(index.includes('id="studentNameInput" maxlength="40" autocomplete="name" placeholder="Name"'),"Student name placeholder must be Name");
assert.ok(index.includes('id="teacherCreateName" maxlength="40" autocomplete="name" placeholder="Name"'),"Teacher name placeholder must be Name");
assert.ok(index.includes("function isSamsungDevice()"),"Samsung device detector is missing");
assert.ok(index.includes("const canInstall=isSamsungDevice();"),"Install visibility must be Samsung-only");
assert.ok(index.includes("if(!isSamsungDevice())"),"Install action must be blocked outside Samsung");

console.log("PASS: Classora topic pages, Grade 8 equations and Samsung-only install audit passed.");
