const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(require('node:path').join(__dirname,'../functions/support-admin.js'),'utf8');
function fixture(permissions={}){
 const rows=new Map([['profileIds/3228667330',{uid:'owner'}],['staffAccess/staff',{role:'support',active:true,permissions}],['supportRequests/case',{createdBy:'user',reportedUid:'reported'}]]),deleted=[];let sequence=0;
 const ref=path=>({path,get:async()=>({exists:rows.has(path),data:()=>rows.get(path)}),set:async data=>rows.set(path,data),update:async data=>rows.set(path,{...rows.get(path),...data}),delete:async()=>rows.delete(path)});
 const empty={get:async()=>({docs:[]})};const db={doc:ref,collection:path=>({doc:()=>ref(path+'/'+ ++sequence),where:()=>empty}),collectionGroup:()=>({where:()=>empty}),recursiveDelete:async r=>rows.delete(r.path),batch:()=>{const ops=[];return {set:(r,d)=>ops.push(()=>r.set(d)),update:(r,d)=>ops.push(()=>r.update(d)),delete:r=>ops.push(()=>r.delete()),commit:async()=>{for(const op of ops)await op()}}}};
 class HttpsError extends Error{constructor(code,msg){super(msg);this.code=code}}
 const ctx={exports:{},require:name=>name==='firebase-functions/v2/https'?{onCall:(o,f)=>f,HttpsError}:name==='firebase-admin/firestore'?{getFirestore:()=>db,FieldValue:{serverTimestamp:()=>123,delete:()=>null}}:name==='firebase-admin/auth'?{getAuth:()=>({deleteUser:async uid=>deleted.push(uid)})}:require(name)};vm.runInNewContext(source,ctx);
 return {rows,deleted,call:(action,targetUid='user',actor='staff')=>ctx.exports.classoraSupportAction({auth:actor?{uid:actor}:null,data:{ticketId:'case',action,targetUid,reason:'Reviewed support case'}})};
}
(async()=>{
 let f=fixture();await assert.rejects(f.call('review','user',null),{code:'unauthenticated'});await assert.rejects(f.call('deleteAccount','user','ordinary'),{code:'permission-denied'});
 await assert.rejects(f.call('suspend'),{code:'permission-denied'});await assert.rejects(f.call('review','unrelated'),{code:'permission-denied'});
 assert.equal((await f.call('deleteAccount')).pending,true);assert.deepEqual(f.deleted,[]);assert.equal(f.rows.get('supportRequests/case').deletionRequestedTarget,'user');
 f=fixture({deleteAccounts:true});await f.call('deleteAccount','reported');assert.deepEqual(f.deleted,['reported']);assert.equal(f.rows.get('blockedUsers/reported').deleted,true);assert.equal(f.rows.get('supportRequests/case').accountDeleted,true);
 f.rows.set('supportRequests/case',{createdBy:'owner'});await assert.rejects(f.call('deleteAccount','owner'),{code:'permission-denied'});
 f=fixture({banAccounts:true});await f.call('suspend');assert(f.rows.has('blockedUsers/user'));await f.call('restore');assert(!f.rows.has('blockedUsers/user'));f.rows.set('blockedUsers/user',{deleted:true});await assert.rejects(f.call('restore'),{code:'failed-precondition'});
 f=fixture();await f.call('requestPassword');assert([...f.rows.entries()].some(([k,v])=>k.startsWith('accountActionRequests/')&&v.action==='requestPassword'&&v.targetUid==='user'));assert([...f.rows.keys()].some(k=>k.startsWith('supportAudit/')));
 console.log('PASS: callable authentication, case scope, granular permissions, deletion approval fallback, authorized deletion, owner protection, irreversible deletion tombstone and audited change requests.');
})().catch(e=>{console.error(e);process.exitCode=1});
