// Role-aware Sandbox subscriptions preview. Never accepts a user-selected
// role as an authorization signal. Billing roles and admin privileges come from
// the signed Firebase ID token and protected Firestore records through Worker.
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const config = {
  apiKey:"AIzaSyAj97oo6iQ9mK0Va6gYivsvnicN14LUYN0",
  authDomain:"pythagorasi-school.firebaseapp.com",
  projectId:"pythagorasi-school",
  storageBucket:"pythagorasi-school.firebasestorage.app",
  messagingSenderId:"349960442962",
  appId:"1:349960442962:web:53d13a319dfdc096187b8b"
};
const BASE="https://proud-dream-185aclassora-paddle-sandbox-billing.bassamsamijaber.workers.dev";
const app=getApps()[0]||initializeApp(config);
const auth=getAuth(app);
let roleRequest=0;

function showStatus(message,kind="loading") {
  const host=document.getElementById("account-status");
  if(!host)return;
  host.textContent=message;
  host.dataset.state=kind;
}
function fail(message){
  window.ClassoraSubscriptionPreview?.setAccount(null);
  showStatus(message,"warning");
}
async function userHeaders(user){
  const token=await user.getIdToken();
  return {authorization:"Bearer "+token};
}
async function loadAccount(user){
  const h=await userHeaders(user);
  const response=await fetch(BASE+"/api/me/account",{headers:h,cache:"no-store"});
  const data=await response.json().catch(()=>({ok:false}));
  if(!response.ok||!data.ok||!data.account)throw new Error(data?.error||"تعذر التحقق من نوع الحساب.");
  if(data.account.uid!==user.uid)throw new Error("عدم تطابق جلسة الحساب");
  return data;
}
window.ClassoraBillingAuthorizePurchase=async function(selection){
  const user=auth.currentUser;
  const a=window.ClassoraSubscriptionPreview?.getAccount();
  if(!user||user.isAnonymous||!a)throw new Error("سجّل دخولك لكلاسورا أولًا.");
  if(a.isAdmin)throw new Error("حساب الأدمن يمتلك كل مميزات Premium بدون دفع.");
  if(!a.allowedCategories.includes(selection.kind))throw new Error("هاي الخطة مش متاحة لنوع حسابك.");
  if(selection.kind==="school")throw new Error("اشتراكات المدارس لسه مش جاهزة للاختبار.");
  const response=await fetch(BASE+"/api/checkout/prepare",{
    method:"POST",
    headers:{...await userHeaders(user),"Content-Type":"application/json"},
    body:JSON.stringify(selection),
    cache:"no-store"
  });
  const result=await response.json().catch(()=>({}));
  if(!response.ok||!result.ok||!Array.isArray(result.items)||!result.checkoutIntentId)
    throw new Error(result.error||"تعذر تجهيز عملية الدفع. تأكد من حسابك وحاول مرة ثانية.");
  return result;
};

onAuthStateChanged(auth,async user=>{
  const seq=++roleRequest;
  if(!user||user.isAnonymous){
    fail("لازم تسجّل دخولك في نسخة كلاسورا التجريبية حتى نعرف إذا حسابك طالب أو معلم أو أدمن.");
    return;
  }
  window.ClassoraSubscriptionPreview?.setAccount(null);
  showStatus("عم نتحقق من صلاحيات حسابك تلقائيًا…");
  try{
    const result=await loadAccount(user);
    if(seq!==roleRequest)return;
    window.ClassoraSubscriptionPreview?.setAccount(result.account,result.entitlements||[]);
    const role=result.account.isAdmin?"أدمن":result.account.role==="teacher"?"معلم":"طالب";
    showStatus("أهلًا "+(result.account.displayName||"")+" · تم التحقق من الحساب: "+role+
      (result.account.isAdmin?" · كل مزايا Premium مفتوحة بدون اشتراك.":""),"success");
  }catch(e){
    if(seq!==roleRequest)return;
    console.warn("Subscription account check failed",e);
    fail("ما قدرنا نتحقق من صلاحيات الحساب حاليًا. تأكد إنك مسجل دخول بكلاسورا على نفس رابط التجربة، وجرّب تحديث الصفحة.");
  }
});
