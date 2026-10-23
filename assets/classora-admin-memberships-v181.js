import {memberText as T} from './classora-member-words-v238.js?v=238';
import {FEATURES} from './classora-membership-access-v238.js?v=238';
// Classora staff courtesy memberships. Firestore rules MUST be deployed before use.
// No card number is collected. A courtesy grant never schedules a Paddle charge.
import {getApps} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import {getFirestore,doc,getDoc,getDocs,collection,setDoc,deleteDoc,serverTimestamp,Timestamp}
 from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
const $=id=>document.getElementById(id);
const auth=getAuth(getApps()[0]);
const db=getFirestore(getApps()[0]);
const panel=$("adminViewGrants");
const form=$("clGrantForm");
const result=$("clGrantStatus");
const list=$("clGrantList");
const allowedKind={student:["student"],teacher:["teacher","class","school"]};
let authorized=false;
const mode=document.createElement('select');mode.id='clGrantMode';
const choices=document.createElement('div');choices.className='cl238-feature-options';choices.hidden=true;
function renderFeatureChoices(){
 const previous=mode.value||'all';mode.replaceChildren();
 for(const key of ['all','custom']){const o=document.createElement('option');o.value=key;o.textContent=T(key);mode.append(o)}mode.value=previous;mode.setAttribute('aria-label',T('features'));
 const checked=[...choices.querySelectorAll('input:checked')].map(x=>x.value);choices.replaceChildren();
 for(const feature of FEATURES){const label=document.createElement('label'),input=document.createElement('input');input.type='checkbox';input.value=feature;input.checked=checked.includes(feature);label.append(input,document.createTextNode(T(feature)));choices.append(label)}
}
mode.onchange=()=>choices.hidden=mode.value!=='custom';renderFeatureChoices();form?.querySelector('#clGrantSave')?.before(mode,choices);
new MutationObserver(renderFeatureChoices).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});

function local(s){return s||"";}
function say(message,ok=false){result.textContent=message;result.dataset.ok=ok?"1":"0";}
const fmt=date=>date instanceof Date?date.toLocaleString(document.documentElement.lang||"ar",{dateStyle:"medium",timeStyle:"short"}):"—";
async function gate(){
 const user=auth.currentUser;
 authorized=false;
 if(!user||user.isAnonymous)return false;
 try{
  const [userSnap,staffSnap,ownerSnap]=await Promise.all([
    getDoc(doc(db,"users",user.uid)),
    getDoc(doc(db,"staffAccess",user.uid)).catch(()=>null),
    getDoc(doc(db,"profileIds","3228667330")).catch(()=>null)
  ]);
  const profile=userSnap.data();
  const staff=staffSnap?.data();
  authorized=!!profile&&(ownerSnap?.data()?.uid===user.uid||(staff?.role==="admin"&&staff?.active===true));
 }catch(e){console.warn("Grant staff verification unavailable",e);}
 return authorized;
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
async function resolveUser(input){
 const q=String(input||"").trim();
 if(!/^[a-zA-Z0-9_-]{6,128}$/.test(q))throw Error("اكتب UID أو Profile ID صحيح");
 let uid=q;
 if(/^\d{10}$/.test(q)){
   const lookup=await getDoc(doc(db,"profileIds",q));
   if(!lookup.exists()||!lookup.data().uid)throw Error("Profile ID غير موجود");
   uid=lookup.data().uid;
 }
 const snap=await getDoc(doc(db,"users",uid));
 if(!snap.exists())throw Error("الحساب غير موجود");
 const data=snap.data();
 if(!allowedKind[data.role])throw Error("نوع الحساب غير مدعوم للاشتراك");
 return {uid,role:data.role,name:String(data.displayName||data.name||"")};
}
function updateKindChoices(role){
 for(const option of $("clGrantKind").options)option.disabled=!!role&&!allowedKind[role]?.includes(option.value);
 if(role&&!allowedKind[role].includes($("clGrantKind").value))$("clGrantKind").value=allowedKind[role][0];
}
async function renderList(){
 if(!authorized){list.replaceChildren();return;}
 let snapshots;
 try{snapshots=await getDocs(collection(db,"membershipGrants"));}
 catch(e){list.textContent="لا يمكن قراءة المنح بعد. يجب نشر قواعد Firestore الجديدة أولًا.";return;}
 const now=Date.now();
 const entries=snapshots.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(b.grantedAt?.toMillis?.()||0)-(a.grantedAt?.toMillis?.()||0));
 list.replaceChildren();
 if(!entries.length){list.textContent="لا توجد منح محفوظة بعد.";return;}
 for(const gift of entries){
   const till=gift.expiresAt?.toDate?.();
   const current=!gift.revoked&&till instanceof Date&&till.getTime()>now;
   const row=document.createElement("article");row.className="cl-grant-record";
   const body=document.createElement("div");
   const title=document.createElement("b");title.textContent=gift.uid+" · "+String(gift.kind||"")+" "+String(gift.tier||"").toUpperCase();
   const subtitle=document.createElement("small");subtitle.textContent=(current?"فعّال حتى: ":"منتهي: ")+fmt(till)+" · "+String(gift.days||0)+" يوم";
   body.append(title,subtitle);
   if(gift.note){const note=document.createElement("small");note.textContent=gift.note;body.append(note);}
   row.append(body);
   if(current){
     const stop=document.createElement("button");stop.type="button";stop.textContent="إلغاء المنحة";stop.className="cl-grant-revoke";
     stop.addEventListener("click",async()=>{
       if(!authorized||!confirm("إلغاء هذه المنحة فورًا؟ لا يؤثر ذلك على أي اشتراك مدفوع."))return;
       stop.disabled=true;
       try{await deleteDoc(doc(db,"membershipGrants",gift.id));say("تم إلغاء المنحة.",true);await renderList();}
       catch(e){say("فشل الإلغاء؛ تأكد من صلاحيات قواعد Firestore.");stop.disabled=false;}
     });
     row.append(stop);
   }
   list.append(row);
 }
}
async function refresh(){
 if(!panel)return;
 const allowed=await gate();
 panel.querySelectorAll("input,select,button").forEach(x=>x.disabled=!allowed);
 if(!allowed){say("هذه الصفحة للأدمن الموثّق فقط.");list.replaceChildren();return;}
 await renderList();
}
let lastResolved=null;
$("clGrantUid")?.addEventListener("change",async ()=>{
 lastResolved=null;
 if(!await gate())return;
 try{
  const found=await resolveUser($("clGrantUid").value);
  updateKindChoices(found.role);lastResolved=found;
  $("clGrantResolved").textContent="الحساب: "+(found.name||found.uid)+" · "+found.role;
 }catch(e){$("clGrantResolved").textContent=e.message||"تعذر العثور على الحساب";}
});
form?.addEventListener("submit",async(event)=>{
 event.preventDefault();
 if(!await gate()){say("هذا الإجراء للأدمن الموثّق فقط.");return;}
 const submit=$("clGrantSave");
 submit.disabled=true;
 try{
   const account=await resolveUser($("clGrantUid").value);
   const kind=$("clGrantKind").value,tier=$("clGrantTier").value;
   const days=Number($("clGrantDays").value);
   if(!allowedKind[account.role]?.includes(kind))throw Error("هذا النوع لا يناسب دور الحساب");
   if(!["plus","premium"].includes(tier))throw Error("نوع الباقة غير صحيح");
   if(!Number.isSafeInteger(days)||days<1||days>365)throw Error("المدة من يوم حتى 365 يومًا");
   const selectedFeatures=[...choices.querySelectorAll('input:checked')].map(x=>x.value);
   if(mode.value==='custom'&&!selectedFeatures.length)throw Error(T('features'));
   const note=$("clGrantNote").value.trim();
   if(note.length>180)throw Error("سبب المنحة أطول من اللازم");
   const until=new Date(Date.now()+days*86400000);
   if(!confirm("تأكيد منح "+(account.name||account.uid)+" اشتراك "+kind+" "+tier+" لمدة "+days+" يوم؟\nهذا مجاني ولا يطلب بطاقة ولا يفعّل تجديدًا آليًا."))return;
   await setDoc(doc(db,"membershipGrants",account.uid),{
     uid:account.uid,kind,tier,days,grantedAt:serverTimestamp(),
     expiresAt:Timestamp.fromDate(until),grantedBy:auth.currentUser.uid,
     note,revoked:false,...(mode.value==='custom'?{features:selectedFeatures}:{})
   });
   say("تم تسجيل المنحة حتى "+fmt(until)+". لا يوجد خصم أو تجديد تلقائي.",true);
   form.reset();choices.hidden=true;lastResolved=null;$("clGrantResolved").textContent="";updateKindChoices(null);
   await renderList();
 }catch(e){console.error("Membership grant creation failed",e);say(e.code==="permission-denied"?"رفض Firestore الحفظ. لازم نشر قواعد العضوية الآمنة أولًا.":e.message||"تعذر الحفظ");}
 finally{submit.disabled=false;}
});
$("clGrantRefresh")?.addEventListener("click",refresh);
onAuthStateChanged(auth,()=>{authorized=false;if(!auth.currentUser){list?.replaceChildren();}});
window.classoraAdminGrants={refresh};

