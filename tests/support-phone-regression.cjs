const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");

const root=path.join(__dirname,"..");
const index=fs.readFileSync(path.join(root,"index.html"),"utf8");
const functions=fs.readFileSync(path.join(root,"functions","index.js"),"utf8");

assert(index.includes('PhoneAuthProvider'),"PhoneAuthProvider import missing");
assert(index.includes('RecaptchaVerifier'),"reCAPTCHA verifier missing");
assert(index.includes('linkWithCredential'),"phone linking missing");
assert(index.includes('signInWithCredential'),"phone recovery sign-in missing");
assert(index.includes('id="supportCenterBtn"'),"Support Center button missing");
assert(index.includes('id="supportRequestLayer"'),"Support request dialog missing");
assert(index.includes('id="phoneSetupLayer"'),"phone-link gate missing");
assert(index.includes('id="accountRecoveryLayer"'),"account recovery dialog missing");
assert(index.includes('const SUPER_ADMIN_PROFILE_ID="3228667330"'),"expected Super Admin Profile ID missing");
assert(index.includes('supportCenterBtn")?.classList.toggle("hidden",!hybridAdmin)'),"Support Center must be admin-only");
assert(index.includes('if(user.phoneNumber){'),"phone gate must check the verified Auth phone");
assert(!index.includes('if(user.phoneNumber||profile.phoneLinked===true)'),"profile flag alone must not bypass phone verification");
assert(index.includes('classoraPhoneRecoveryActive=true'),"recovery auth guard missing");
assert(index.includes('const storedRole=profile.role==="teacher"?"teacher":"student"'),"phone sign-in must preserve teacher role");
assert(index.includes('getSupportCenterCall({})'),"Support Center must use admin callable");
assert(index.includes('updateSupportTicketCall({ticketId:btn.dataset.id,status:btn.dataset.ticketStatus})'),"ticket updates must use admin callable");
assert(!index.includes('onSnapshot(collection(db,"supportTickets")'),"support tickets must not be read directly from client");
assert(!index.includes('onSnapshot(collection(db,"supportAudit")'),"support audit must not be read directly from client");

assert(functions.includes('exports.createSupportTicket'),"support ticket callable missing");
assert(functions.includes('exports.recordSupportEvent'),"support event callable missing");
assert(functions.includes('exports.getSupportCenter'),"admin support read callable missing");
assert(functions.includes('exports.updateSupportTicket'),"admin support update callable missing");
assert(functions.includes('requireSuperAdmin(request)'),"admin callable guard missing");
assert(functions.includes('enforceSupportRateLimit(request)'),"anonymous support rate limit missing");
assert(functions.includes('const uid = await superAdminUid()'),"support notifications must resolve the Super Admin");
assert(functions.includes('sendToUsers([uid]'),"support notifications must target only the Super Admin");
assert(functions.includes('request.auth?.uid && pushable.has(event)'),"security-event pushes must require authenticated context");

new Function(functions);
console.log("PASS: support, phone-link and account-recovery regression checks passed.");
