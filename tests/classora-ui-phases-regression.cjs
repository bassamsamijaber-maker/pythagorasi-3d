'use strict';
/* Static regression checks for the eight-stage Classora UI plan.
 * Run: node tests/classora-ui-phases-regression.cjs
 * These do not replace authenticated Firestore or device/browser E2E tests.
 */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const home=read('assets/classora-home-v112.js');
const dock=read('assets/classora-universal-dock-v113.js');
const legacy=read('assets/classora-mobile-tablet-v108.js');
const quick=read('assets/classora-universal-dock-v111.js');
const icon=read('assets/learning-hub.js');
const index=read('index.html');
const css=read('assets/classora-universal-dock-v113.css');
const tasksCss=read('assets/classora-home-v112.css');
for(const name of [
 'assets/classora-home-v112.js','assets/classora-universal-dock-v111.js',
 'assets/classora-universal-dock-v113.js','assets/classora-mobile-tablet-v108.js'
]){
 const source=read(name).replace(/^export /gm,'');
 assert.doesNotThrow(()=>new Function(source),'JS syntax: '+name);
}
for(const id of [
 'classoraMobileLobbyBtn','classoraMobileSubjectsBtn','classoraMobileClassesBtn',
 'classoraMobileChatBtn','classoraMobileSettingsBtn'
])assert(index.includes('id="'+id+'"'),'Required dock tab missing: '+id);
assert(dock.includes('event.isTrusted'),'Delegated exam exit should not prompt twice');
assert(legacy.includes('get(targetId)?.click()'),'Dock must route through original authorized handlers');
assert(css.includes('classora-dock-clearance'),'Safe-area dock clearance missing');
assert(css.includes('classora-curriculum-modal'),'Curriculum dock layout missing');
assert(quick.includes('function syncHeader'),'Clean header identity missing');
assert(quick.includes('isPermitted'),'Settings must preserve original permissions');
assert(home.includes('},4000)'),'Promos must rotate every four seconds');
assert(home.includes('next.length>5'),'Five-announcement cap missing');
assert(home.includes('function editPromo'),'Admin edit operation missing');
assert(home.includes('window.confirm'),'Destructive action confirmation missing');
assert(home.includes('classoraPromoSearch'),'Admin search missing');
assert(home.includes('classoraPromoFilter'),'Admin filtering missing');
assert(home.includes('sub.exists()'),'Student task submission must be checked');
assert(home.includes('classes",classId,"assignments"'),'Student task data must come from actual class assignments');
assert(home.includes('ct-urgent-title'),'Near due tasks missing');
assert(home.includes('classora_last_topic_v112_'),'Lesson resume must remain user-scoped');
assert(tasksCss.includes('ct-target-assignment'),'Task focus highlight missing');
assert(icon.includes('installVectorIcons'),'Vector replacement pass missing');
assert(index.includes('classora_intro_seen_v110'),'One-time splash storage missing');
assert(index.includes('setTimeout(finish,3600)'),'Splash needs a fail-safe');
console.log('Classora static UI checks passed. Run browser/device and authenticated Firebase tests before deploying.');
