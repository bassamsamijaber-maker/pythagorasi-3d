const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");

const root=path.join(__dirname,"..");
const index=fs.readFileSync(path.join(root,"index.html"),"utf8");
const functions=fs.readFileSync(path.join(root,"functions","index.js"),"utf8");

assert(!/PhoneAuthProvider|RecaptchaVerifier|linkWithCredential|signInWithCredential/.test(index),"phone auth code must not return");
assert(!/phoneSetupLayer|recoveryPhoneNumber|phoneLinked/.test(index),"phone recovery UI must not return");

for(const id of [
  "recoveryKeySetupLayer",
  "generateRecoveryKeyBtn",
  "generatedRecoveryKey",
  "accountRecoveryLayer",
  "recoveryKeyInput",
  "verifyRecoveryKeyBtn",
  "manageRecoveryKeyBtn",
  "supportCenterBtn"
]){
  assert(index.includes('id="'+id+'"'),"missing recovery/support UI: "+id);
}

assert(index.includes('httpsCallable(classoraFunctions,"createRecoveryKey")'),"createRecoveryKey callable missing");
assert(index.includes('httpsCallable(classoraFunctions,"verifyRecoveryKey")'),"verifyRecoveryKey callable missing");
assert(index.includes("signInWithCustomToken"),"custom-token recovery sign-in missing");
assert(index.includes("maybeOpenRecoveryKeySetup"),"first-login recovery-key prompt missing");

assert(functions.includes("exports.createRecoveryKey = onCall"),"server createRecoveryKey missing");
assert(functions.includes("exports.verifyRecoveryKey = onCall"),"server verifyRecoveryKey missing");
assert(functions.includes("adminAuth.createCustomToken"),"secure recovery custom token missing");
assert(functions.includes("enforceRecoveryRateLimit"),"recovery rate limit missing");
assert(functions.includes('SUPER_ADMIN_PROFILE_ID = "3228667330"'),"support center admin binding changed");

const keyGenerator=functions.match(/function generateRecoveryKey\(\) \{([\s\S]*?)\n\}/);
assert(keyGenerator,"recovery key generator missing");
assert(functions.includes('RECOVERY_KEY_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"'),"recovery alphabet missing");

console.log("PASS: Recovery key replaces phone recovery and support admin binding is intact.");
