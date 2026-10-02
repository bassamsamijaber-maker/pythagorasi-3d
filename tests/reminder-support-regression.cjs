const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const extract=(a,b)=>html.slice(html.indexOf(a),html.indexOf(b,html.indexOf(a)));
(async()=>{
 let persisted={},shown=0,updates=0;const elements={};const ctx={window:{PythagorasiUser:{uid:'u1'}},auth:{currentUser:{uid:'u1'}},document:{querySelector:()=>null,getElementById:id=>elements[id]??=( {textContent:'',classList:{add:()=>shown++}})},db:{},doc:()=>({}),serverTimestamp:()=>1,chatText:(a,b)=>b,console,setTimeout:()=>{},runTransaction:async(db,fn)=>fn({get:async()=>({exists:()=>true,data:()=>persisted}),update:(ref,data)=>{persisted={...persisted,...data};updates++}})};
 vm.createContext(ctx);vm.runInContext(extract('let securityReminderBusy=false;','function dismissSecurityReminder'),ctx);
 await ctx.maybeShowSecurityReminder('u1');assert.equal(shown,1);assert.equal(updates,1);
 ctx.window.PythagorasiUser={uid:'u1'};await ctx.maybeShowSecurityReminder('u1');assert.equal(shown,1,'another login/device sees account marker');
 ctx.window.PythagorasiUser={uid:'u1',securityPhraseHash:'already-set'};persisted={};await ctx.maybeShowSecurityReminder('u1');assert.equal(shown,1);
 const fields={supportType:{value:'report_user'},supportAccountIdentifier:{value:'User'},supportSecurityPhrase:{value:''},supportMessage:{value:'Please review this report'},supportStatus:{textContent:''},submitSupportBtn:{disabled:false}};let writes=0,release;
 const sc={document:{getElementById:id=>fields[id]},auth:{currentUser:{uid:'u1'}},window:{PythagorasiUser:{displayName:'A'.repeat(100)}},db:{},collection:()=>({}),resolveSupportUid:async()=> 'u1',normalizeSecurityPhrase:s=>s,chatText:(a,b)=>b,serverTimestamp:()=>1,console:{error(){}},addDoc:async(ref,data)=>{writes++;assert.equal(data.createdByName.length,80);return new Promise(r=>release=r)}};
 vm.createContext(sc);vm.runInContext(extract('let supportSubmitting=false;','async function setShakeSupportEnabled'),sc);
 const first=sc.submitSupportRequest();await Promise.resolve();await sc.submitSupportRequest();assert.equal(writes,1);release({id:'ticket123'});await first;assert.equal(fields.supportMessage.value,'');
 fields.supportMessage.value='Keep report on failure';sc.addDoc=async()=>{throw {code:'permission-denied'}};await sc.submitSupportRequest();assert.equal(fields.supportMessage.value,'Keep report on failure');assert(fields.supportStatus.textContent.includes('kept'));assert.equal(fields.submitSupportBtn.disabled,false);
 console.log('PASS: account-wide reminder once, existing phrase skip, duplicate request guard, name limit and failure draft preservation.');
})().catch(e=>{console.error(e);process.exitCode=1});
