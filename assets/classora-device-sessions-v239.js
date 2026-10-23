/* Classora v239 — account-scoped device list. Remote logout requires online clients. */
import {getApps} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import {getAuth,onAuthStateChanged,signOut} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';
import {getFunctions,httpsCallable} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-functions.js';
import {getFirestore,collection,doc,getDoc,onSnapshot,setDoc,updateDoc,writeBatch,serverTimestamp} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js';
const words={
 ar:{title:'الأجهزة المسجّل دخول منها',info:'شوف أجهزتك وسجّل خروج من جهاز معيّن أو من الكل. الجهاز البعيد بخرج لما يتصل بالإنترنت.',current:'هذا الجهاز',last:'آخر نشاط',unknown:'غير معروف',one:'تسجيل خروج',all:'تسجيل خروج من كل الأجهزة',confirm:'متأكد بدك تسجّل خروج من كل الأجهزة؟',loading:'جاري تحميل الأجهزة…',unavailable:'تتبّع الأجهزة يحتاج تفعيل قواعد Firebase. الخروج من هذا الجهاز متاح.',empty:'ما في أجهزة أخرى مسجّلة.',error:'ما زبط الطلب. جرّب مرة ثانية.',signed:'تم إرسال طلب تسجيل الخروج للأجهزة المتصلة.',thisDevice:'تسجيل خروج من هذا الجهاز'},
 en:{title:'Signed-in devices',info:'Manage your devices. Remote devices sign out when they reconnect to the internet.',current:'This device',last:'Last active',unknown:'Unknown',one:'Sign out',all:'Sign out on all devices',confirm:'Sign out from every device?',loading:'Loading devices…',unavailable:'Device tracking needs published Firebase rules. Local sign-out remains available.',empty:'No other registered devices.',error:'Request failed. Try again.',signed:'Sign-out requested for connected devices.',thisDevice:'Sign out here'},
 es:{title:'Dispositivos conectados',info:'Cierra sesión en un dispositivo o en todos. Los dispositivos remotos saldrán cuando se conecten.',current:'Este dispositivo',last:'Última actividad',unknown:'Desconocido',one:'Cerrar sesión',all:'Cerrar sesión en todos',confirm:'¿Cerrar sesión en todos los dispositivos?',loading:'Cargando dispositivos…',unavailable:'La lista requiere las reglas de Firebase publicadas.',empty:'Sin otros dispositivos.',error:'Error. Inténtalo de nuevo.',signed:'Cierre de sesión solicitado.',thisDevice:'Cerrar sesión aquí'},
 ko:{title:'로그인한 기기',info:'기기별 로그아웃. 다른 기기는 인터넷 연결 시 로그아웃됩니다.',current:'이 기기',last:'최근 활동',unknown:'알 수 없음',one:'로그아웃',all:'모든 기기 로그아웃',confirm:'모든 기기에서 로그아웃할까요?',loading:'기기 불러오는 중…',unavailable:'Firebase 규칙 배포가 필요합니다.',empty:'다른 기기 없음',error:'다시 시도하세요.',signed:'로그아웃 요청됨.',thisDevice:'이 기기에서 로그아웃'},
 de:{title:'Angemeldete Geräte',info:'Geräte verwalten. Entfernte Geräte werden bei der nächsten Internetverbindung abgemeldet.',current:'Dieses Gerät',last:'Zuletzt aktiv',unknown:'Unbekannt',one:'Abmelden',all:'Alle Geräte abmelden',confirm:'Alle Geräte abmelden?',loading:'Geräte werden geladen…',unavailable:'Firebase-Regeln müssen aktiviert werden.',empty:'Keine weiteren Geräte.',error:'Fehler. Erneut versuchen.',signed:'Abmeldung angefordert.',thisDevice:'Hier abmelden'},
 it:{title:'Dispositivi connessi',info:'Gestisci gli accessi. Gli altri dispositivi escono quando tornano online.',current:'Questo dispositivo',last:'Ultima attività',unknown:'Sconosciuto',one:'Esci',all:'Esci da tutti',confirm:'Uscire da tutti i dispositivi?',loading:'Caricamento…',unavailable:'Serve pubblicare le regole Firebase.',empty:'Nessun altro dispositivo.',error:'Errore. Riprova.',signed:'Disconnessione richiesta.',thisDevice:'Esci qui'},
 hi:{title:'लॉगिन किए गए डिवाइस',info:'डिवाइस या सभी से लॉगआउट करें। दूरस्थ डिवाइस ऑनलाइन होने पर लॉगआउट होंगे।',current:'यह डिवाइस',last:'अंतिम सक्रिय',unknown:'अज्ञात',one:'लॉगआउट',all:'सबसे लॉगआउट',confirm:'सभी डिवाइस से लॉगआउट?',loading:'लोड हो रहा है…',unavailable:'Firebase नियम प्रकाशित करने होंगे।',empty:'अन्य डिवाइस नहीं।',error:'विफल। फिर कोशिश करें।',signed:'लॉगआउट भेजा गया।',thisDevice:'यहाँ लॉगआउट'},
 tr:{title:'Giriş yapılan cihazlar',info:'Bir cihazdan veya hepsinden çık. Uzak cihazlar internete bağlanınca çıkış yapar.',current:'Bu cihaz',last:'Son etkinlik',unknown:'Bilinmiyor',one:'Çıkış yap',all:'Tüm cihazlardan çıkış yap',confirm:'Tüm cihazlardan çıkılsın mı?',loading:'Cihazlar yükleniyor…',unavailable:'Firebase kuralları yayınlanmalıdır.',empty:'Başka cihaz yok.',error:'İşlem başarısız.',signed:'Çıkış isteği gönderildi.',thisDevice:'Buradan çıkış yap'}
};
const tr=k=>(words[document.documentElement.lang]||words.en)[k]||words.en[k]||k;
const $=id=>document.getElementById(id);
const N=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
const app=getApps()[0];
if(app)run(app);
function run(app){
 const auth=getAuth(app),db=getFirestore(app);
 let uid='',device='',generation=0,unsubCurrent=null,unsubList=null,heartbeat=null,rows=[],active=false,zone=null,status=null;
 const deviceKey=uid=>'classora_device_v239_'+uid;
 function browser(){
  const agent=navigator.userAgent||'',os=/iPhone/i.test(agent)?'iPhone':/iPad/i.test(agent)?'iPad':/Android/i.test(agent)?'Android':/Windows/i.test(agent)?'Windows':/Macintosh/i.test(agent)?'Mac':'Linux';
  const brand=/Edg\//.test(agent)?'Edge':/Firefox\//.test(agent)?'Firefox':/Chrome\//.test(agent)?'Chrome':/Safari\//.test(agent)?'Safari':'Browser';
  return {label:os+' · '+brand,platform:os};
 }
 function rid(){const a=new Uint8Array(16);crypto.getRandomValues(a);return Array.from(a,v=>v.toString(16).padStart(2,'0')).join('')}
 function currentDoc(){return doc(db,'users',uid,'deviceSessions',device)}
 function state(msg){if(status)status.textContent=msg}
 function setup(){
  const host=$('settingsModal')?.querySelector('.settings-profile-row')||$('settingsModal')?.querySelector('.modalbox');
  if(!host)return;
  if(!zone||!zone.isConnected){zone=N('section','cl239-sessions');zone.id='cl239Sessions';zone.dataset.noTranslate='';host.after(zone);}
  draw();
 }
 async function localLogout(){const key=deviceKey(uid);try{localStorage.removeItem(key)}catch{}await signOut(auth)}
 async function revokeOne(id){
  if(!uid||!id)return;
  if(id===device){try{await updateDoc(currentDoc(),{revoked:true,revokedAt:serverTimestamp()})}catch{}await localLogout();return;}
  try{await updateDoc(doc(db,'users',uid,'deviceSessions',id),{revoked:true,revokedAt:serverTimestamp()});state(tr('signed'))}
  catch{state(tr('error'))}
 }
 async function revokeAll(){
  if(!uid||!confirm(tr('confirm')))return;
  try{
   const others=rows.filter(r=>!r.revoked);
   for(let i=0;i<others.length;i+=400){
    const batch=writeBatch(db);
    for(const r of others.slice(i,i+400))batch.update(doc(db,'users',uid,'deviceSessions',r.id),{revoked:true,revokedAt:serverTimestamp()});
    await batch.commit();
   }
   // Stronger global refresh-token revocation is available only after the callable is deployed.
   try{await httpsCallable(getFunctions(app),'revokeMySessions')({})}catch{}
   await localLogout();
  }catch{state(tr('error'))}
 }
 function draw(){
  if(!zone)return;
  zone.replaceChildren(N('h3','',tr('title')),N('p','cl239-device-intro',tr('info')));
  status=N('p','cl239-device-status',active?tr('loading'):tr('unavailable'));status.setAttribute('role','status');zone.append(status);
  const list=N('ul','cl239-device-list');zone.append(list);
  if(active){
   const current=rows.filter(x=>!x.revoked).sort((a,b)=>Number(b.lastSeenAt?.seconds||0)-Number(a.lastSeenAt?.seconds||0));
   if(!current.length)list.append(N('li','',tr('empty')));
   for(const r of current){
    const li=N('li','cl239-device-item'),detail=N('span','cl239-device-detail');
    detail.append(N('strong','',String(r.label||tr('unknown'))+(r.id===device?' · '+tr('current'):'')));
    const last=r.lastSeenAt?.toDate?.();detail.append(N('small','',tr('last')+': '+(last?last.toLocaleString(document.documentElement.lang||'en'):tr('unknown'))));
    const b=N('button','cl239-device-logout',tr('one'));b.type='button';b.onclick=()=>revokeOne(r.id);li.append(detail,b);list.append(li);
   }
  }
  const actions=N('div','cl239-device-actions');
  const here=N('button','',tr('thisDevice'));here.type='button';here.onclick=localLogout;actions.append(here);
  if(active){const all=N('button','cl239-logout-all',tr('all'));all.type='button';all.onclick=revokeAll;actions.append(all)}
  zone.append(actions);
  if(active)state('');
 }
 function cleanup(){unsubCurrent?.();unsubList?.();unsubCurrent=unsubList=null;clearInterval(heartbeat);heartbeat=null;rows=[];active=false;uid='';device='';if(zone)zone.remove();zone=null}
 async function bootstrap(user){
  const mine=++generation;cleanup();if(!user||user.isAnonymous)return;
  uid=user.uid;
  try{
   const key=deviceKey(uid);device=localStorage.getItem(key)||rid();localStorage.setItem(key,device);
  }catch{device=rid()}
  setup();
  try{
   const ref=currentDoc();const old=await getDoc(ref);if(mine!==generation)return;
   if(old.exists()&&old.data().revoked===true){try{localStorage.removeItem(deviceKey(uid))}catch{}await signOut(auth);return}
   const info=browser();
   if(!old.exists())await setDoc(ref,{uid,deviceId:device,label:info.label,platform:info.platform,createdAt:serverTimestamp(),lastSeenAt:serverTimestamp(),revoked:false,revokedAt:null});
   else await updateDoc(ref,{lastSeenAt:serverTimestamp()});
   if(mine!==generation)return;
   active=true;
   unsubCurrent=onSnapshot(ref,snap=>{if(mine!==generation)return;if(snap.data()?.revoked===true){localLogout().catch(()=>{});}},()=>{active=false;draw()});
   unsubList=onSnapshot(collection(db,'users',uid,'deviceSessions'),snap=>{if(mine!==generation)return;rows=snap.docs.map(d=>({id:d.id,...d.data()}));active=true;draw()},()=>{active=false;draw()});
   heartbeat=setInterval(()=>{if(auth.currentUser?.uid===uid&&document.visibilityState==='visible')updateDoc(ref,{lastSeenAt:serverTimestamp()}).catch(()=>{})},240000);
   draw();
  }catch{if(mine===generation){active=false;draw()}}
 }
 onAuthStateChanged(auth,bootstrap);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden&&uid){setup();if(active)updateDoc(currentDoc(),{lastSeenAt:serverTimestamp()}).catch(()=>{})}});
 new MutationObserver(()=>{if(uid&&$('settingsModal')&&!$('cl239Sessions'))setup()}).observe(document.body,{subtree:true,childList:true});
 new MutationObserver(()=>{if(zone)draw()}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
}
