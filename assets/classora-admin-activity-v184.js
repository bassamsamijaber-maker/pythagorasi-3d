// Classora minimal activity signals: no chat text, keystrokes, answers, IPs or precise location.
import {getApps} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import {getFirestore,doc,setDoc,serverTimestamp} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
const app=getApps()[0];
if(app){
 const auth=getAuth(app),db=getFirestore(app);
 const actions={
  lobbyChatBtn:"chat",lobbyClassBtn:"classes",lobbyJoinClassBtn:"classes",
  lobbySettingsBtn:"settings",lobbyProfileBtn:"profile",lobbyProfileQuick:"profile",
  lobbySupportBtn:"support",lobbyNotificationsBtn:"notifications",
  lobbyLabBtn:"lab",lobbyLabCard:"lab",classoraMixLabBtn:"lab",
  lobbyExamBtn:"exams",examBtn:"exams",competitionBtn:"competitions",
  lobbyChallengeBtn:"competitions",compStartBtn:"competition_start",
  lobbyQuestionBtn:"questions",lobbyAISend:"assistant",
  classoraMixDiscoverBtn:"lessons",learningHubTopBtn:"lessons"
 };
 const allowed=new Set(["visit","lesson","lobby",...Object.values(actions)]);
 let currentUid="",countryCode=null,lastWrite=0,lastAction="";
 async function networkCountry(){
  // Cloudflare first-party trace, if proxied. No GeoIP third-party calls.
  try{
   const ctl=new AbortController(),timeout=setTimeout(()=>ctl.abort(),3500);
   try{
    const res=await fetch("/cdn-cgi/trace",{cache:"no-store",signal:ctl.signal});
    if(!res.ok||!(res.headers.get("content-type")||"").includes("text/plain"))return null;
    const body=(await res.text()).slice(0,4096);
    const code=body.match(/^loc=([A-Z]{2})$/m)?.[1]||"";
    return /^[A-Z]{2}$/.test(code)&&!["XX","ZZ","T1","A1","A2"].includes(code)?code:null;
   }finally{clearTimeout(timeout)}
  }catch{return null}
 }
 function account(){
  const user=auth.currentUser;
  return user&&!user.isAnonymous&&window.PythagorasiUser?.uid===user.uid&&
   document.body.classList.contains("classora-authenticated")?user:null;
 }
 async function record(action,force=false){
  const user=account();if(!user||!allowed.has(action))return;
  const now=Date.now();
  if(!force&&(now-lastWrite<4000||(lastAction===action&&now-lastWrite<12000)))return;
  lastWrite=now;lastAction=action;
  const patch={lastAction:action,lastActionAt:serverTimestamp()};
  if(countryCode)patch.countryCode=countryCode;
  try{await setDoc(doc(db,"userActivity",user.uid),patch,{merge:true})}
  catch(e){console.warn("Classora activity store unavailable",e?.code||e)}
 }
 async function ready(){
  const user=account();if(!user||currentUid===user.uid)return;
  currentUid=user.uid;lastWrite=0;lastAction="";countryCode=null;
  const uid=user.uid;
  countryCode=await networkCountry();
  if(auth.currentUser?.uid===uid)record("visit",true);
 }
 onAuthStateChanged(auth,user=>{
  if(!user){currentUid="";countryCode=null;lastWrite=0;lastAction="";return}
  ready();
 });
 window.addEventListener("classora-auth-settled",ready);
 document.addEventListener("click",e=>{
  if(!account())return;
  const el=e.target instanceof Element?e.target.closest("button,a,[role='button']"):null;
  if(!el||el.disabled||el.closest("#adminPanelModal"))return;
  const a=actions[el.id]||actions[el.closest("[id]")?.id]||
   (el.closest("#subjectTopicBrowser")?"lesson":null);
  if(a)record(a);
 },true);
}
