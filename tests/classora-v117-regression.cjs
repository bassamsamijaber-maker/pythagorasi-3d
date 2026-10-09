'use strict';
/* Static regression for Classora v117. Authenticated browser/device & Firebase rules emulator must still be tested. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const index=read('index.html'),css=read('assets/classora-v117.css'),tour=read('assets/classora-guided-tour-v117.js'),
 legacy=read('assets/classora-entrance-v116.js'),rules=read('firestore.rules'),worker=read('service-worker.js');
assert.doesNotThrow(()=>new Function(tour),'Guided tour JS syntax');
assert.doesNotThrow(()=>new Function(legacy),'Legacy entrance JS syntax');
assert.doesNotThrow(()=>new Function(read('assets/classora-universal-dock-v113.js')),'Dock JS syntax');
assert.match(index,/<text class="cw116-word"[^>]*direction="ltr">Classora<\/text>/,'English splash');
assert.match(index,/setTimeout\(finish,3000\)/,'Intro duration');
assert.match(index,/classora-v117\.css\?v=1/,'Styles included');
assert.match(index,/classora-guided-tour-v117\.js\?v=1/,'Guided tour included');
assert.match(index,/id="cw116Wait"/,'Dark loading backdrop');
assert.match(css,/cw117-write-ltr/,'Pen moves left-to-right');
assert.match(css,/classoraTour117/,'Spotlight UI');
assert.match(tour,/classoraMobileSubjectsBtn/,'Actual subjects tab');
assert.match(tour,/classoraMobileClassesBtn/,'Actual classes tab');
assert.match(tour,/classoraMobileChatBtn/,'Actual chat tab');
assert.match(tour,/classoraMobileSettingsBtn/,'Actual settings tab');
assert.match(legacy,/classoraGuidedTourV117\?\.start\(true\)/,'Settings replay opens new tour');
assert.match(legacy,/return; \/\/ V117: only account-creation eligible/,'Old tutorial suppressed');
assert.match(index,/base\.classoraOnboardingEligible=true/,'Only new accounts marked');
assert.match(index,/completed:Boolean\(profile\?\.classoraOnboardingCompletedAt\)/,'Persisted tutorial completion');
assert.match(index,/classoraGuidedTourV117\?\.profileReady/,'New-account tutorial only after auth');
assert.match(index,/CLASSORA_NAME_COOLDOWN_MS=7\*24\*60\*60\*1000/,'Full 7-day cooldown');
assert.match(index,/runTransaction\(db,async tx=>/,'Atomic Firestore name changes');
assert.match(index,/adminResetNameCooldown/,'Admin may reset name timer');
assert.match(index,/reset_name_cooldown/,'Admin cooldown reset audited');
assert.match(index,/displayNameChangedAt:deleteField\(\)/,'Admin cooldown reset actually removes timestamp');
assert.match(index,/LAST NAME CHANGE/,'Admin sees last name-change timestamp');
assert.match(index,/displayNameChangedAt:serverTimestamp\(\)/,'Trusted timestamp write');
assert.match(index,/id="classoraNameCooldownNote"/,'Visible localized remaining time');
assert.match(rules,/function selfDisplayNameCooldown\(\)/,'Firestore rule guard');
assert.match(rules,/request\.resource\.data\.displayNameChangedAt == request\.time/,'Server timestamp enforced');
assert.match(rules,/duration\.value\(7, "d"\)/,'Seven-day Firestore rule');
assert.match(rules,/&& selfDisplayNameCooldown\(\)/,'Self updates gated');
assert.match(rules,/isSuperAdmin\(\)/,'Existing admin rule retained');
assert.match(rules,/classoraOnboardingEligible/,'Old users cannot mark themselves as new');
assert.match(worker,/classora-v117-0-weekly-name-guided-tour/,'PWA cache refreshed');
assert.match(worker,/classora-guided-tour-v117\.js\?v=1/,'Tour precached');
assert.doesNotThrow(()=>JSON.parse(read('manifest.webmanifest')),'PWA manifest valid');
for(const [name,s] of [['v117 CSS',css],['rules',rules]]){
  assert.equal((s.match(/{/g)||[]).length,(s.match(/}/g)||[]).length,name+' braces');
}
console.log('Classora v117 static checks passed. Firebase security rules must be deployed separately; test on real devices.');
