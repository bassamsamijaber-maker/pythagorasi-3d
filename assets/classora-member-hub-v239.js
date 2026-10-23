/* Classora v239: a dedicated, account-aware benefit center outside Settings. */
import './classora-memberships-features-v174.js?v=239';
import {FEATURES} from './classora-membership-access-v238.js?v=238';
import {memberText} from './classora-member-words-v238.js?v=238';
const DICT={
 ar:{open:'ميزاتي',chat:'مميزات الشات',title:'مركز المميزات',subtitle:'أدواتك ومميزات Plus وPremium في مكان واحد',ready:'متاحة كأداة',planned:'مخططة',locked:'تحتاج اشتراكًا',student:'معاينة الطالب',teacher:'معاينة المعلم',real:'حسابي الحقيقي',admin:'كل الأدوات مفتوحة للأدمن؛ المعاينة لا تغيّر الحساب أو تمنح اشتراكًا.',tools:'أدواتي',plus:'مميزات Plus',premium:'مميزات Premium',more:'عرض الباقات',close:'إغلاق',free:'التعلّم الأساسي والشات الأساسي مجانيان دائمًا.',trial:'الشراء والتجربة المجانية ليسا مفعلين حتى جاهزية الخادم.'},
 en:{open:'My benefits',chat:'Chat benefits',title:'Benefits center',subtitle:'Your Plus and Premium tools in one place',ready:'Available tool',planned:'Planned',locked:'Membership required',student:'Student preview',teacher:'Teacher preview',real:'My real account',admin:'All tools are available to admin. Preview does not change the account or grant a plan.',tools:'My tools',plus:'Plus benefits',premium:'Premium benefits',more:'View plans',close:'Close',free:'Core learning and basic chat always remain free.',trial:'Purchasing and free trials remain unavailable until server setup is ready.'},
 es:{open:'Mis ventajas',chat:'Ventajas de chat',title:'Centro de ventajas',subtitle:'Herramientas Plus y Premium',ready:'Disponible',planned:'Previsto',locked:'Requiere suscripción',student:'Vista estudiante',teacher:'Vista docente',real:'Mi cuenta',admin:'El administrador tiene todas las herramientas; la vista previa no cambia la cuenta.',tools:'Mis herramientas',plus:'Ventajas Plus',premium:'Ventajas Premium',more:'Ver planes',close:'Cerrar',free:'Las funciones básicas siguen siendo gratis.',trial:'Compras y pruebas aún no disponibles.'},
 ko:{open:'내 혜택',chat:'채팅 혜택',title:'혜택 센터',subtitle:'Plus 및 Premium 도구',ready:'사용 가능',planned:'예정',locked:'구독 필요',student:'학생 미리보기',teacher:'교사 미리보기',real:'내 계정',admin:'관리자는 모든 도구를 이용할 수 있습니다. 미리보기는 계정을 변경하지 않습니다.',tools:'내 도구',plus:'Plus 혜택',premium:'Premium 혜택',more:'요금제 보기',close:'닫기',free:'기본 학습 및 채팅은 무료입니다.',trial:'서버 설정 전에는 결제와 체험을 사용할 수 없습니다.'},
 de:{open:'Meine Vorteile',chat:'Chat-Vorteile',title:'Vorteilscenter',subtitle:'Deine Plus- und Premium-Werkzeuge',ready:'Verfügbar',planned:'Geplant',locked:'Abo erforderlich',student:'Schülervorschau',teacher:'Lehrervorschau',real:'Mein Konto',admin:'Admins haben alle Werkzeuge; die Vorschau verändert das Konto nicht.',tools:'Meine Werkzeuge',plus:'Plus-Vorteile',premium:'Premium-Vorteile',more:'Tarife ansehen',close:'Schließen',free:'Grundfunktionen bleiben kostenlos.',trial:'Käufe und Testversionen noch nicht verfügbar.'},
 it:{open:'I miei vantaggi',chat:'Vantaggi chat',title:'Centro vantaggi',subtitle:'Strumenti Plus e Premium',ready:'Disponibile',planned:'Previsto',locked:'Richiede abbonamento',student:'Anteprima studente',teacher:'Anteprima docente',real:'Il mio account',admin:'Tutti gli strumenti sono disponibili agli admin; l’anteprima non cambia l’account.',tools:'I miei strumenti',plus:'Vantaggi Plus',premium:'Vantaggi Premium',more:'Vedi piani',close:'Chiudi',free:'Le funzioni di base restano gratuite.',trial:'Acquisti e prove non ancora disponibili.'},
 hi:{open:'मेरे लाभ',chat:'चैट लाभ',title:'लाभ केंद्र',subtitle:'Plus और Premium टूल',ready:'उपलब्ध',planned:'योजनाबद्ध',locked:'सदस्यता चाहिए',student:'छात्र पूर्वावलोकन',teacher:'शिक्षक पूर्वावलोकन',real:'मेरा खाता',admin:'एडमिन को सभी टूल मिलते हैं; पूर्वावलोकन खाता नहीं बदलता।',tools:'मेरे टूल',plus:'Plus लाभ',premium:'Premium लाभ',more:'योजनाएँ देखें',close:'बंद करें',free:'बुनियादी पढ़ाई और चैट मुफ्त हैं।',trial:'भुगतान व ट्रायल अभी उपलब्ध नहीं हैं।'},
 tr:{open:'Avantajlarım',chat:'Sohbet avantajları',title:'Avantaj merkezi',subtitle:'Plus ve Premium araçların',ready:'Kullanılabilir',planned:'Planlandı',locked:'Üyelik gerekir',student:'Öğrenci önizleme',teacher:'Öğretmen önizleme',real:'Gerçek hesabım',admin:'Yöneticiler tüm araçlara erişebilir; önizleme hesabı değiştirmez.',tools:'Araçlarım',plus:'Plus avantajları',premium:'Premium avantajları',more:'Planları gör',close:'Kapat',free:'Temel eğitim ve sohbet ücretsizdir.',trial:'Ödeme ve deneme henüz kullanılamıyor.'}
};
const $=id=>document.getElementById(id), N=(tag,cls,value)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(value!==undefined)e.textContent=value;return e;};
let overlay=null,pane=null,preview='real',lastFocus=null,queued=false,lastAccessSignature='';
const lang=()=>DICT[document.documentElement.lang]?document.documentElement.lang:'en';
const t=k=>DICT[lang()][k]||DICT.en[k]||k;
const account=()=>window.ClassoraMembership?.get?.()||{tier:'free',features:[],role:'student',admin:false};
const role=()=>preview==='real'?(account().role||'student'):preview;
function close(){if(!overlay)return;overlay.hidden=true;document.body.classList.remove('cl239-modal-open');if(lastFocus?.isConnected)lastFocus.focus();}
function open(){ensure();lastFocus=document.activeElement;overlay.hidden=false;document.body.classList.add('cl239-modal-open');draw();overlay.querySelector('.cl239-close')?.focus();}
function tab(label,value){const b=N('button','cl239-preview',label);b.type='button';b.setAttribute('aria-pressed',String(preview===value));b.onclick=()=>{preview=value;draw()};return b;}
function ensure(){
 if(overlay)return;
 overlay=N('div','cl239-overlay');overlay.id='classoraBenefitsPanel';overlay.hidden=true;
 pane=N('section','cl239-panel');pane.setAttribute('role','dialog');pane.setAttribute('aria-modal','true');pane.setAttribute('aria-labelledby','cl239-heading');
 overlay.append(pane);overlay.addEventListener('click',e=>{if(e.target===overlay)close()});
 document.body.append(overlay);
}
function jumpToTool(key){
 if(!FEATURES.includes(key))return;
 document.dispatchEvent(new CustomEvent('classora:open-member-tool',{detail:{feature:key}}));
 $('classoraMemberSpace')?.scrollIntoView({block:'nearest',behavior:'smooth'});
}
function makePlan(type){
 const sec=N('section','cl239-benefit-section'),h=N('h3','',t(type));sec.append(h);
 const kind=role()==='teacher'?'teacher':'student';
 const catalog=window.ClassoraMemberPlanInfo?.get(lang(),kind,type)||[];
 const list=N('div','cl239-feature-grid');const offset=kind==='student'?2:2;
 const a=account(),live=type==='plus'?new Set([1,2]):new Set(kind==='student'?[6,9]:[6,12]);
 // Plan descriptions include two account-specific notes. Only the independently implemented tools are marked live.
 catalog.slice(offset).forEach((description,i)=>{
  if(type==='premium'&&i===0)return;
  const available=live.has(i);
  const item=N('div','cl239-feature '+(available?'cl239-available':'cl239-planned'));
  item.append(N('span','cl239-feature-text',description),N('small','',t(available?'ready':'planned')));
  list.append(item);
 });
 sec.append(list);return sec;
}
function draw(){
 if(!pane)return;
 const a=account();
 pane.replaceChildren();
 const top=N('header','cl239-head');
 const heading=N('div','');
 heading.append(N('small','cl239-kicker','CLASSORA · PLUS / PREMIUM'),N('h2','',t('title')),N('p','',t('subtitle')));
 const x=N('button','cl239-close','×');x.type='button';x.setAttribute('aria-label',t('close'));x.onclick=close;top.append(heading,x);pane.append(top);
 const ribbon=N('div','cl239-current');ribbon.append(N('strong','',a.admin?'ADMIN · PREMIUM':String(a.tier||'free').toUpperCase()),N('span','',t('free')));pane.append(ribbon);
 if(a.admin){
  const r=N('nav','cl239-preview-row');r.setAttribute('aria-label',t('admin'));r.append(tab(t('real'),'real'),tab(t('student'),'student'),tab(t('teacher'),'teacher'));pane.append(r,N('p','cl239-help',t('admin')));
 }
 const sec=N('section','cl239-tool-section');sec.append(N('h3','',t('tools')));
 const toolnav=N('div','cl239-tool-nav');
 for(const f of FEATURES){
  const ready=a.features?.includes(f);
  const b=N('button','cl239-tool-button'+(ready?' cl239-unlocked':''),memberText(f,lang()));
  b.type='button';b.setAttribute('aria-label',memberText(f,lang())+' · '+t(ready?'ready':'locked'));b.onclick=()=>jumpToTool(f);toolnav.append(b);
 }
 sec.append(toolnav);
 const slot=N('div','');slot.id='classoraMemberHubContent';sec.append(slot);pane.append(sec);
 // Existing workspace is re-attached by its owner, never copied into Settings.
 document.dispatchEvent(new Event('classora:benefits-drawn'));
 pane.append(makePlan('plus'),makePlan('premium'));
 const foot=N('footer','cl239-foot');foot.append(N('p','',t('trial')));
 const link=N('a','cl239-plans',t('more'));link.href='./subscriptions.html?lang='+encodeURIComponent(lang());foot.append(link);pane.append(foot);
}
function installButtons(){
 const chat=$('chatModal'),ch=chat?.querySelector('.modalhead > div')||chat?.querySelector('.modalhead');
 const lobby=document.querySelector('.lobby-top-actions'),subjects=$('classoraLearningFront');
 for(const [host,id,name] of [[ch,'cl239ChatBtn','chat'],[lobby,'cl239LobbyBtn','open'],[subjects,'cl239SubjectsBtn','open']]){
  if(!host||$(id))continue;
  const b=N('button','cl239-launch',t(name));b.id=id;b.type='button';b.onclick=open;host.append(b);
 }
 for(const [id,k] of [['cl239ChatBtn','chat'],['cl239LobbyBtn','open'],['cl239SubjectsBtn','open']]){const b=$(id);if(b&&b.textContent!==t(k))b.textContent=t(k)}
}
function schedule(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;installButtons()})}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay&&!overlay.hidden){e.stopPropagation();close()}});
document.addEventListener('classora:membership-updated',()=>{const sig=JSON.stringify(account());if(sig===lastAccessSignature)return;lastAccessSignature=sig;if(overlay&&!overlay.hidden)draw()});
document.documentElement.addEventListener('classora:open-benefits',open);
const start=()=>{ensure();installButtons();new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true});new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['lang']})};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
window.ClassoraBenefits={open,close};
