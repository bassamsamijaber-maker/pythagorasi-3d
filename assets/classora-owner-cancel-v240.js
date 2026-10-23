/* v240 — owner-only courtesy grant revocation; never touches Paddle payments. */
import {getApps} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import {getFirestore,doc,getDoc,deleteDoc} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
const app=getApps()[0];
if(app)boot(app);
function boot(app){
 const auth=getAuth(app),db=getFirestore(app),$=id=>document.getElementById(id);
 const labels={
 ar:["إلغاء اشتراك ممنوح — للمالك فقط","هذا يلغي منح Plus/Premium المجانية فقط، وليس اشتراك Paddle المدفوع.","فحص منحتي","UID أو رقم البروفايل","فحص الحساب","إلغاء الاشتراك الممنوح","متأكد بدك تلغي المنحة فورًا؟","لا توجد منحة لهذا الحساب.","تم إلغاء المنحة.","تعذّر الإلغاء؛ افحص صلاحيات Firebase.","هذا الإجراء لا يلغي المدفوعات أو اشتراك الأدمن الدائم.","منحة موجودة"],
 en:["Revoke a grant — owner only","Only free Plus/Premium grants; not paid Paddle subscriptions.","Check my grant","UID or profile ID","Find account","Revoke grant","Revoke this grant immediately?","No grant found.","Grant revoked.","Failed; check Firebase permissions.","Does not cancel paid plans or admin access.","Grant found"],
 es:["Revocar beneficio — solo propietario","Solo beneficios gratuitos, no pagos Paddle.","Mi beneficio","UID o ID","Buscar","Revocar","¿Revocar ahora?","Sin beneficio.","Revocado.","Error de permiso.","No cancela pagos.","Beneficio encontrado"],
 ko:["무료 혜택 취소 — 소유자만","Paddle 결제는 취소하지 않습니다.","내 혜택","UID 또는 프로필 ID","찾기","취소","혜택을 취소할까요?","혜택 없음","취소 완료","권한 오류","결제는 취소되지 않습니다.","혜택 발견"],
 de:["Freigabe widerrufen — nur Eigentümer","Nur Gratis-Freigaben, nicht Paddle-Zahlungen.","Meine Freigabe","UID oder Profil-ID","Suchen","Widerrufen","Jetzt widerrufen?","Keine Freigabe.","Widerrufen.","Berechtigungsfehler.","Keine kostenpflichtige Kündigung.","Freigabe gefunden"],
 it:["Revoca beneficio — solo proprietario","Solo concessioni gratuite, non pagamenti Paddle.","Il mio beneficio","UID o ID profilo","Cerca","Revoca","Revocare ora?","Nessun beneficio.","Revocato.","Errore permessi.","Non annulla pagamenti.","Beneficio trovato"],
 hi:["अनुदान रद्द — सिर्फ मालिक","केवल मुफ्त लाभ; Paddle भुगतान नहीं।","मेरा अनुदान","UID या प्रोफाइल ID","खोजें","रद्द करें","अभी रद्द करें?","अनुदान नहीं।","रद्द किया।","अनुमति त्रुटि।","भुगतान रद्द नहीं होगा।","अनुदान मिला"],
 tr:["Hakkı iptal et — yalnızca sahip","Yalnızca ücretsiz haklar, Paddle ödemeleri değil.","Kendi hakkım","UID veya profil kimliği","Ara","İptal et","Şimdi iptal edilsin mi?","Hak bulunamadı.","İptal edildi.","Yetki hatası.","Ücretli planları iptal etmez.","Hak bulundu"]
 };
 const tr=i=>(labels[document.documentElement.lang]||labels.en)[i];
 const mk=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e};
 let owner=false,ownerUid="",generation=0,card=null,input=null,summary=null,cancelButton=null,target="",busy=false;
 function remove(){card?.remove();card=null;target=""}
 function mount(){
  const host=$("settingsModal")?.querySelector(".settings-profile-row");
  if(!owner||!host||card?.isConnected)return;
  card=mk("section","cl240-owner");card.id="cl240OwnerCard";card.dataset.noTranslate="";
  const title=mk("h3"),explain=mk("p"),line=mk("div","cl240-owner-row"),mine=mk("button"),lookup=mk("button"),notice=mk("small");
  input=mk("input");input.maxLength=128;input.autocomplete="off";input.setAttribute("aria-label","Account ID");
  mine.type=lookup.type="button";mine.onclick=()=>inspect(ownerUid);lookup.onclick=()=>inspect(input.value);
  line.append(mine,input,lookup);summary=mk("p","cl240-owner-status");summary.setAttribute("role","status");
  cancelButton=mk("button","cl240-owner-danger");cancelButton.type="button";cancelButton.hidden=true;cancelButton.onclick=revoke;
  card.append(title,explain,line,summary,cancelButton,notice);host.after(card);
  card.translate="no";card._fields={title,explain,mine,lookup,notice};relabel();
 }
 function relabel(){
  if(!card)return;
  const x=card._fields;x.title.textContent=tr(0);x.explain.textContent=tr(1);
  x.mine.textContent=tr(2);input.placeholder=tr(3);x.lookup.textContent=tr(4);
  cancelButton.textContent=tr(5);x.notice.textContent=tr(10);
 }
 async function verify(){
  const me=auth.currentUser,gen=++generation;owner=false;ownerUid="";remove();if(!me||me.isAnonymous)return;
  try{
   const snap=await getDoc(doc(db,"profileIds","3228667330"));
   if(gen!==generation||auth.currentUser?.uid!==me.uid)return;
   owner=snap.data()?.uid===me.uid;ownerUid=owner?me.uid:"";mount();
  }catch{}
 }
 async function resolve(value){
  const raw=String(value||"").trim();
  if(!/^[a-zA-Z0-9_-]{6,128}$/.test(raw))throw Error("invalid");
  if(/^\d{10}$/.test(raw)){
   const ref=await getDoc(doc(db,"profileIds",raw));
   if(!ref.exists()||!ref.data()?.uid)throw Error("missing");
   return ref.data().uid;
  }
  return raw;
 }
 async function inspect(value){
  if(!owner||busy)return;const gen=generation;target="";cancelButton.hidden=true;busy=true;
  try{
   summary.textContent="…";const id=await resolve(value);
   const snap=await getDoc(doc(db,"membershipGrants",id));
   if(gen!==generation||auth.currentUser?.uid!==ownerUid)return;
   if(!snap.exists()||snap.data()?.revoked===true){summary.textContent=tr(7);return}
   target=id;summary.textContent=tr(11)+": "+id+" · "+String(snap.data()?.tier||"").toUpperCase();
   cancelButton.hidden=false;
  }catch{if(gen===generation)summary.textContent=tr(7)}
  finally{busy=false}
 }
 async function revoke(){
  if(!owner||!target||busy)return;const id=target,gen=generation,me=ownerUid;
  if(!confirm(tr(6)+"\n"+id))return;
  busy=true;cancelButton.disabled=true;
  try{
   const check=await getDoc(doc(db,"profileIds","3228667330"));
   if(check.data()?.uid!==me||auth.currentUser?.uid!==me||gen!==generation)throw Error("denied");
   await deleteDoc(doc(db,"membershipGrants",id));
   if(gen===generation){target="";cancelButton.hidden=true;summary.textContent=tr(8)}
  }catch{if(gen===generation)summary.textContent=tr(9)}
  finally{busy=false;if(cancelButton)cancelButton.disabled=false}
 }
 onAuthStateChanged(auth,verify);
 const modal=$("settingsModal");
 if(modal)new MutationObserver(()=>{if(owner&&!card?.isConnected)mount()}).observe(modal,{childList:true,subtree:true});
 new MutationObserver(relabel).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
}
