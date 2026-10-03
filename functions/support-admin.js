const {onCall,HttpsError}=require('firebase-functions/v2/https');
const {getFirestore,FieldValue}=require('firebase-admin/firestore');
const {getAuth}=require('firebase-admin/auth');
const {randomUUID}=require('node:crypto');
exports.classoraSupportAction=onCall({region:'us-central1'},async request=>{
 const actor=request.auth?.uid;if(!actor)throw new HttpsError('unauthenticated','Sign in required.');
 const {ticketId,action,targetUid,reason}=request.data||{};
 if(typeof ticketId!=='string'||ticketId.includes('/')||typeof targetUid!=='string'||!targetUid||targetUid.includes('/')||typeof reason!=='string'||reason.trim().length<2||reason.length>500)throw new HttpsError('invalid-argument','Invalid action.');
 const actions=['review','requestPassword','requestSecurityPhrase','requestName','restrictChat','restoreChat','suspend','restore','deleteAccount'];if(!actions.includes(action))throw new HttpsError('invalid-argument','Unknown action.');
 const db=getFirestore(),root=(await db.doc('profileIds/3228667330').get()).data()?.uid;
 const staff=(await db.doc('staffAccess/'+actor).get()).data()||{},owner=actor===root,admin=owner||(staff.active===true&&staff.role==='admin');
 if(!admin&&!(staff.active===true&&staff.role==='support'))throw new HttpsError('permission-denied','Support access required.');
 if((await db.doc('blockedUsers/'+actor).get()).exists&&!owner)throw new HttpsError('permission-denied','Account suspended.');
 const ticketRef=db.doc('supportRequests/'+ticketId),ticketSnap=await ticketRef.get();if(!ticketSnap.exists)throw new HttpsError('not-found','Ticket not found.');const ticket=ticketSnap.data();
 if(![ticket.createdBy,ticket.reportedUid].includes(targetUid))throw new HttpsError('permission-denied','Target must belong to this case.');
 if(targetUid===root||targetUid===actor)throw new HttpsError('permission-denied','Protected account.');
 const targetStaff=(await db.doc('staffAccess/'+targetUid).get()).data();if(!admin&&targetStaff?.active)throw new HttpsError('permission-denied','Only an admin can act on staff accounts.');
 if(['restore','suspend'].includes(action)&&(await db.doc('blockedUsers/'+targetUid).get()).data()?.deleted)throw new HttpsError('failed-precondition','Deleted accounts cannot be restored.');
 const permission={restrictChat:'chatModeration',restoreChat:'chatModeration',suspend:'banAccounts',restore:'banAccounts',deleteAccount:'deleteAccounts'}[action];
 const allowed=!permission||admin||staff.permissions?.[permission]===true;
 const auditRef=db.collection('supportAudit').doc();
 if(action==='deleteAccount'&&!allowed){const batch=db.batch();batch.update(ticketRef,{deletionRequestedBy:actor,deletionRequestedTarget:targetUid,deletionReason:reason,updatedAt:FieldValue.serverTimestamp()});batch.set(auditRef,{action:'requestDeletion',actor,targetUid,ticketId,reason,createdAt:FieldValue.serverTimestamp()});await batch.commit();return {pending:true}}
 if(!allowed)throw new HttpsError('permission-denied','Capability not granted.');
 // Permanent deletion is server-only. First lock the account and record the operation;
 // retries safely finish cleanup if an earlier invocation stopped mid-operation.
 if(action==='deleteAccount'){
  await auditRef.set({action,actor,targetUid,ticketId,reason,status:'started',createdAt:FieldValue.serverTimestamp()});
  await db.doc('blockedUsers/'+targetUid).set({reason:'Account deleted',deleted:true,by:actor,createdAt:FieldValue.serverTimestamp()});
  try{await getAuth().deleteUser(targetUid)}catch(e){if(e.code!=='auth/user-not-found')throw new HttpsError('internal','Deletion could not finish. Retry the action.');}
  for(const collection of ['studentLoginAliases','teacherLoginAliases','profileIds']){
   const docs=await db.collection(collection).where('uid','==',targetUid).get();for(const d of docs.docs)await d.ref.delete();
  }
  const members=await db.collectionGroup('members').where('uid','==',targetUid).get();for(const d of members.docs)await d.ref.delete();
  await db.doc('publicProfiles/'+targetUid).delete();await db.doc('staffAccess/'+targetUid).delete();
  await db.recursiveDelete(db.doc('users/'+targetUid));
  await ticketRef.update({deletionRequestedBy:FieldValue.delete(),deletionRequestedTarget:FieldValue.delete(),accountDeleted:true,updatedAt:FieldValue.serverTimestamp()});
  await auditRef.update({status:'completed',completedAt:FieldValue.serverTimestamp()});return {ok:true};
 }
 const batch=db.batch();
 if(action==='restrictChat')batch.set(db.doc('chatRestrictions/'+targetUid),{by:actor,reason,createdAt:FieldValue.serverTimestamp()});
 if(action==='restoreChat')batch.delete(db.doc('chatRestrictions/'+targetUid));
 if(action==='suspend')batch.set(db.doc('blockedUsers/'+targetUid),{by:actor,reason,createdAt:FieldValue.serverTimestamp()});
 if(action==='restore')batch.delete(db.doc('blockedUsers/'+targetUid));
 if(['review','requestPassword','requestSecurityPhrase','requestName'].includes(action))batch.set(db.doc('accountActionRequests/'+randomUUID()),{action,targetUid,ticketId,reason,status:'pending',createdBy:actor,createdAt:FieldValue.serverTimestamp()});
 if(action==='review')batch.update(ticketRef,{reviewStatus:'reviewing',reviewedBy:actor,updatedAt:FieldValue.serverTimestamp()});
 batch.set(auditRef,{action,actor,targetUid,ticketId,reason,status:'completed',createdAt:FieldValue.serverTimestamp()});await batch.commit();return {ok:true};
});
