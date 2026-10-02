const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");

const root=path.join(__dirname,"..");
const index=fs.readFileSync(path.join(root,"index.html"),"utf8");
const functions=fs.readFileSync(path.join(root,"functions","index.js"),"utf8");
const rules=fs.readFileSync(path.join(root,"firestore.rules"),"utf8");
const firebase=JSON.parse(fs.readFileSync(path.join(root,"firebase.json"),"utf8"));

for(const forbidden of ["PhoneAuthProvider","RecaptchaVerifier","signInWithPhoneNumber"]){
  assert(!index.includes(forbidden),`phone auth code must stay removed: ${forbidden}`);
}
assert(!index.includes("رقم الهاتف"),"phone-number copy must stay removed from UI");
assert(!index.includes("No phone number or SMS is used."),"SMS recovery copy must stay removed from UI");

assert(index.includes('id="authSupportBtn"'),"support entry missing from authentication");
assert(index.includes('id="studentSupportBtn"'),"student support entry missing");
assert(index.includes('id="teacherSupportBtn"'),"teacher support entry missing");
assert(index.includes('id="authRecoveryBtn"'),"account recovery entry missing");
assert(index.includes('id="supportCenterBtn"'),"admin support center button missing");
assert(index.includes('SUPER_ADMIN_PROFILE_ID="3228667330"'),"expected super admin Profile ID missing");

assert(functions.includes('exports.createRecoveryKey'),"createRecoveryKey callable missing");
assert(functions.includes('exports.verifyRecoveryKey'),"verifyRecoveryKey callable missing");
assert(functions.includes('db.collection("recoverySecrets").doc(uid)'),"recovery secret must be stored server-side");
assert(!functions.includes("recoveryKeyHash: hash"),"raw verifier hash must not be written into the public user profile");
assert(functions.includes("too-many-recovery-attempts"),"recovery rate limiting missing");

for(const collection of [
  "supportTickets","supportAudit","recoveryKeyLookup",
  "recoverySecrets","_recoveryRate","_supportRate"
]){
  assert(rules.includes(`match /${collection}/`),`server-only rules missing for ${collection}`);
}
assert((rules.match(/allow read, write: if false;/g)||[]).length>=6,"server-only recovery/support collections must deny direct client access");
assert(rules.includes('"recoveryKeyHash"')&&rules.includes('"recoveryKeyVersion"')&&rules.includes('"recoveryKeySetAt"'),"recovery profile metadata protection missing");
assert(rules.includes("affectedKeys().hasAny"),"client recovery metadata mutation guard missing");
assert.equal(firebase.firestore?.rules,"firestore.rules","firebase.json must deploy firestore.rules");

new Function(functions);
console.log("PASS: no-phone support/recovery security audit passed.");
