const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),{webcrypto}=require('node:crypto');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
function extract(start,end){return html.slice(html.indexOf(start),html.indexOf(end,html.indexOf(start)))}
(async()=>{
 const cryptoContext={crypto:webcrypto,TextEncoder};vm.createContext(cryptoContext);
 vm.runInContext(extract('async function securityPhraseHashV2','function assistantNames'),cryptoContext);
 const hash=await cryptoContext.securityPhraseHashV2('u1','  a memorable phrase  ');
 assert.equal(hash.length,64);assert.equal(hash,await cryptoContext.securityPhraseHashV2('u1','a memorable phrase'));
 assert.notEqual(hash,await cryptoContext.securityPhraseHashV2('u2','a memorable phrase'));assert.notEqual(hash,await cryptoContext.securityPhraseHash('u1','a memorable phrase'));
 const input={value:'keep this message',style:{}},button={disabled:false};let writes=0,resolveWrite;
 const ctx={chatSending:false,activeChatPerson:{uid:'u2'},auth:{currentUser:{uid:'u1'}},document:{getElementById:id=>id==='chatMessageInput'?input:button},db:{},collection:()=>({}),doc:()=>({}),directChatId:()=> 'chat',serverTimestamp:()=>({}),updateDoc:async()=>{},showToast:()=>{},chatText:(a,b)=>b,console:{error(){},warn(){}},addDoc:async()=>{writes++;throw Error('offline')}};
 ctx.markFailedMessage=()=>{};ctx.voiceRecorder=null;ctx.pendingChatMedia=null;ctx.publishTyping=()=>{};ctx.paintMediaDraft=()=>{};ctx.updateConversationTools=()=>{};ctx.commitReliableMessage=async(p,text)=>{await ctx.addDoc({}, {text});return true};
 vm.createContext(ctx);vm.runInContext(extract('async function sendChatMessage','function listenChatInbox'),ctx);
 await ctx.sendChatMessage();assert.equal(input.value,'keep this message');assert.equal(button.disabled,false);
 ctx.addDoc=()=>{writes++;return new Promise(r=>resolveWrite=r)};
 const pending=ctx.sendChatMessage();await ctx.sendChatMessage();assert.equal(writes,2,'second click must not duplicate in-flight send');
 input.value='new draft';resolveWrite();await pending;assert.equal(input.value,'new draft','sending must not erase a newer draft');
 ctx.addDoc=async()=>{};await ctx.sendChatMessage();assert.equal(input.value,'');assert.equal(button.disabled,false);
 for(const id of ['teacherModeName','teacherModeEmail','studentClassFirstStep','lobbyChatBtn','authSupportBtn','chatRecentPeople','chatBackContactsBtn','supportMyTickets','securityPhraseCurrentPassword'])assert(html.includes('id="'+id+'"'));
 const rules=fs.readFileSync(require('node:path').join(__dirname,'../firestore.rules'),'utf8');
 assert(rules.includes('get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "teacher"'));
 assert(rules.includes('affectedKeys().hasAny(["role"])'),'a student cannot promote their own role');
 console.log('PASS: secret hashing, account-bound proof, failed-send draft preservation, concurrent send prevention, newer draft preservation and required login/chat/support flows.');
})().catch(e=>{console.error(e);process.exitCode=1});
