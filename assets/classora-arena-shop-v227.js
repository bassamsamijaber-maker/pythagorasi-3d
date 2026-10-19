/* Classora Arena 227 — social learning duels and XP-only cosmetic garage.
 * Existing Classora account auth & Firestore bridge own every write.
 */
import {learningState} from './learning-memory-v130.js?v=130';
const $=id=>document.getElementById(id);
const lang=()=>document.documentElement.lang||'ar';
const tr=(ar,en)=>lang()==='ar'?ar:(lang()==='en'?en:(window.ClassoraLocale?.tFor?.(lang(),en)||en));
const el=(tag,cls,content)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(content!==undefined)n.textContent=String(content);return n};
const btn=(label,cls)=>{const b=el('button',cls,label);b.type='button';return b};
const user=()=>document.body.classList.contains('classora-authenticated')?window.PythagorasiUser:null;
const isStudent=()=>user()?.role==='student';
const grade=()=>{const p=user();let saved=8;try{saved=Number(localStorage.getItem('classora_curriculum_grade')||8)}catch{}return [7,8,9,10].includes(Number(p?.grade))?Number(p.grade):saved};
const names={
 flame:['شرار النار','Fire sparks'],lightning:['برق كهربائي','Electric boost'],
 ice:['جليد متحرك','Ice trail'],plasma:['بلازما بنفسجية','Purple plasma'],
 rocket:['عادم الصاروخ','Rocket exhaust'],comet:['ذيل المذنّب','Comet tail'],
 champion:['لقب البطل','Champion title'],starlight:['نجوم متطايرة','Falling stars'],
 aura:['هالة خارقة','Super aura']
};
const ranks=[
 {min:0,ar:'مبتدئ',en:'Rookie',cls:'rookie'},
 {min:1,ar:'برونزي',en:'Bronze',cls:'bronze'},
 {min:3,ar:'فضي',en:'Silver',cls:'silver'},
 {min:6,ar:'ذهبي',en:'Gold',cls:'gold'},
 {min:10,ar:'بلاتيني',en:'Platinum',cls:'platinum'},
 {min:15,ar:'ماسي',en:'Diamond',cls:'diamond'},
 {min:25,ar:'أسطورة كلاسورا',en:'Classora Legend',cls:'legend'}
];
const questTotal=()=>Object.values(learningState().quests||{}).filter(x=>Number(x?.step)===3).length;
const currentRank=()=>[...ranks].reverse().find(r=>questTotal()>=r.min)||ranks[0];
const symbols={flame:'✦',lightning:'ϟ',ice:'❄',plasma:'✧',rocket:'➤',comet:'☄',champion:'★',starlight:'✳',aura:'◈'};
let liveCode='',stopLive=null,matchSnapshot=null,working=false,lastUid='',activeTab='duel';
function message(text,bad=false){
 const host=$('cl227Message');if(!host)return;
 host.textContent=text;host.classList.toggle('error',!!bad)
}
function errorText(e){
 const code=String(e?.code||''),m=String(e?.message||'');
 if(code.includes('permission-denied'))return tr('لازم تتفعّل صلاحيات المبارزات في Firebase أولًا.','The Firebase duel rules need to be deployed first.');
 if(m.includes('different-grade'))return tr('لازم يكون الخصمين بنفس الصف.','Both players must be in the same grade.');
 if(m.includes('room-not-found'))return tr('كود الغرفة غير موجود.','Room code not found.');
 if(m.includes('room-full'))return tr('الغرفة ممتلئة أو انتهى وقتها.','The room is full or expired.');
 if(m.includes('insufficient-xp'))return tr('رصيد XP المتاح مش كافي.','Not enough available XP.');
 if(m.includes('not-enough-questions'))return tr('مش موجود 5 أسئلة مناسبة بهذا الصف.','Not enough questions for this grade.');
 if(code.includes('unavailable')||m.includes('network'))return tr('الاتصال ضعيف. حاول مرة ثانية.','Connection unavailable. Please retry.');
 return tr('تعذر إكمال العملية. حاول مجددًا.','Could not complete the action. Please retry.')
}
function card(title,description,klass){
 const box=el('article','cl227-entry '+klass);
 box.append(el('span','cl227-entry-symbol',klass==='duel'?'⚔':'✧'),el('h3','',title),el('p','',description));
 return box
}
function init(){
 const front=$('classoraLearningFront');if(!front){document.addEventListener('classora:learning-front-ready',init,{once:true});return}
 if($('cl227Home'))return;
 const home=el('section','cl227-home');home.id='cl227Home';
 const heading=el('header','cl227-heading');heading.append(el('span','cl227-brow','CLASSORA · ARENA & GARAGE'),el('h2','',tr('الساحة والكراج','Arena & garage')),el('p','',tr('تحدّى صاحبك، واجمع XP وافتح مؤثرات متحركة لبروفايلك.','Challenge a friend, earn XP from study and unlock profile cosmetics.')));
 const rank=el('div','cl227-rank');rank.id='cl227Rank';heading.append(rank);
 const entries=el('div','cl227-entry-grid');
 const duel=card(tr('1v1 ضد صاحبك','1v1 vs a friend'),tr('نفس الأسئلة، نتيجة مباشرة وكود دعوة.','Same questions, live scores and a room code.'),'duel');
 const join=btn(tr('ادخل التحدي','Open duel'),'cl227-entry-cta');join.addEventListener('click',()=>show('duel'));duel.append(join);
 const shop=card(tr('متجر XP','XP shop'),tr('الشرار، البرق، هالة المجرّة وألقاب مميزة.','Sparks, lightning, cosmic effects and titles.'),'shop');
 const shopOpen=btn(tr('افتح الشوب','Visit shop'),'cl227-entry-cta');shopOpen.addEventListener('click',()=>show('shop'));shop.append(shopOpen);
 entries.append(duel,shop);home.append(heading,entries);
 const pane=el('section','cl227-pane');pane.id='cl227Pane';pane.hidden=true;
 home.append(pane);
 const anchor=$('cl223Preview')||front.querySelector('#cl214-catalog');
 if(anchor)anchor.after(home);else front.append(home);
 document.addEventListener('classora-auth-settled',sync);
 document.addEventListener('classora:learning-update',sync);
 document.addEventListener('classora:arena-shop-updated',sync);
 document.addEventListener('classora:profile-video-changed',syncMedia);
 new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class','data-user-role']});
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 const profile=$('profileModal');
 if(profile)new MutationObserver(()=>{if(profile.classList.contains('open')){profileAdditions();syncMedia()}}).observe(profile,{attributes:true,attributeFilter:['class']});
 window.addEventListener('pageshow',sync);
 window.classoraSocialGarage={openDuel:()=>show('duel'),openShop:()=>show('shop'),refresh:sync};
 sync();
}
function show(tab){
 if(!user())return;
 const pane=$('cl227Pane');if(!pane)return;
 activeTab=tab;pane.hidden=false;draw();
 pane.scrollIntoView({block:'start',behavior:'smooth'});
}
function hide(){const pane=$('cl227Pane');if(pane)pane.hidden=true;detach()}
function frame(header){
 const pane=$('cl227Pane');pane.replaceChildren();
 const top=el('div','cl227-panel-head');
 top.append(el('h3','',header));
 const close=btn('×','cl227-close');close.setAttribute('aria-label',tr('أغلق','Close'));close.addEventListener('click',hide);top.append(close);pane.append(top);
 const alerts=el('p','cl227-message');alerts.id='cl227Message';alerts.setAttribute('aria-live','polite');pane.append(alerts);
 return pane
}
function draw(){
 const pane=$('cl227Pane');if(!pane||pane.hidden)return;
 if(activeTab==='duel')drawDuel();else drawShop();
}
function detach(){if(stopLive){stopLive();stopLive=null}liveCode='';matchSnapshot=null;working=false}
async function create(){
 if(working||!isStudent())return;
 working=true;message(tr('جاري إنشاء غرفة 1v1…','Creating a 1v1 room…'));
 try{
  const code=await window.classoraArena.create();
  subscribe(code);message(tr('انسخ الكود وابعتُه لصاحبك.','Send your room code to a friend.'));
 }catch(e){message(errorText(e),true)}finally{working=false}
}
async function joinRoom(code){
 if(working||!isStudent())return;
 working=true;message(tr('جاري الدخول…','Joining room…'));
 try{const room=await window.classoraArena.join(code);subscribe(room)}catch(e){message(errorText(e),true)}
 finally{working=false}
}
function subscribe(code){
 detach();liveCode=code;
 stopLive=window.classoraArena.watch(code,(result)=>{
  if(liveCode!==code)return;
  matchSnapshot=result;
  if(activeTab==='duel'&&!$('cl227Pane')?.hidden)drawDuel();
 },e=>{if(liveCode===code)message(errorText(e),true)});
 drawDuel();
}
function score(choices,questions){return choices.reduce((n,v,i)=>n+(Number(v)===Number(questions[i]?.answer)?1:0),0)}
function drawDuel(){
 const pane=frame(tr('مبارزة 1v1','1v1 challenge'));
 const body=el('div','cl227-duel');
 body.append(el('p','cl227-duel-intro',tr('5 أسئلة سهلة وعشوائية من صفك. أول واحد يخلص يشوف نتيجة الطرفين. بدون خصم XP على الخسارة.','Five easy random questions from your grade. See both scores when finished. No XP penalties.')));
 if(!isStudent()){
  body.append(el('p','cl227-empty',tr('المبارزات للطلاب المسجّلين فقط.','Duels are available to signed-in students.')));pane.append(body);return
 }
 if(!liveCode){
  const createButton=btn(tr('إنشاء غرفة خاصة','Create private room'),'cl227-primary');
  createButton.addEventListener('click',create);
  const line=el('div','cl227-joinline');
  const field=el('input','cl227-code');field.placeholder=tr('كود الدعوة (6 رموز)','6-character invite code');
  field.maxLength=6;field.autocomplete='off';field.setAttribute('aria-label',tr('كود الدعوة','Invite code'));
  const join=btn(tr('انضم','Join'),'cl227-outline');
  join.addEventListener('click',()=>joinRoom(field.value));
  line.append(field,join);body.append(createButton,line,el('small','cl227-foot',tr('نفس الصف مطلوب للطرفين. الكود صالح لمدة ساعتين.','Players must be in the same grade. Codes last two hours.')));pane.append(body);return
 }
 const share=el('div','cl227-share');
 share.append(el('b','cl227-room-code',liveCode));
 const copy=btn(tr('نسخ الكود','Copy code'),'cl227-outline');copy.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(liveCode);message(tr('تم نسخ الكود','Room code copied'))}catch{message(liveCode)}
 });
 const leave=btn(tr('اترك الغرفة','Leave room'),'cl227-outline subtle');
 leave.addEventListener('click',()=>{detach();drawDuel()});share.append(copy,leave);body.append(share);
 const snapshot=matchSnapshot,room=snapshot?.room;
 if(!room){body.append(el('p','cl227-wait',tr('جارٍ الاتصال بالغرفة…','Connecting to the room…')));pane.append(body);return}
 const hostAnswers=snapshot.host||[],guestAnswers=snapshot.guest||[];
 const left=el('div','cl227-scoreboard');
 const host=el('div','cl227-player');host.append(el('b','',room.hostName||tr('اللاعب 1','Player 1')),el('span','',score(hostAnswers,room.questions)+' / 5'));
 const guest=el('div','cl227-player');guest.append(el('b','',room.guestName||tr('بانتظار لاعب…','Waiting for opponent…')),el('span','',score(guestAnswers,room.questions)+' / 5'));
 left.append(host,el('strong','cl227-versus','VS'),guest);body.append(left);
 if(room.status==='waiting'){
  body.append(el('p','cl227-wait',tr('ارسل الكود لصاحبك. تبدأ الأسئلة بمجرد دخوله.','Share your code. The match starts when your friend joins.')));pane.append(body);return
 }
 const mine=room.hostUid===snapshot.uid?hostAnswers:guestAnswers;
 const other=room.hostUid===snapshot.uid?guestAnswers:hostAnswers;
 if(mine.length>=room.questions.length&&other.length>=room.questions.length){
  const a=score(mine,room.questions),b=score(other,room.questions);
  const result=a===b?tr('تعادل!','Draw!'):a>b?tr('فزت!','You won!'):tr('فاز خصمك','Your opponent won');
  body.append(el('div','cl227-win',result),el('p','cl227-result-note',tr('مباراة تدريبية للمتعة، من دون مكافآت XP إضافية.','Friendly practice match — no extra XP is awarded.')));
  const restart=btn(tr('العب مباراة جديدة','New duel'),'cl227-primary');restart.addEventListener('click',()=>{detach();drawDuel()});body.append(restart);pane.append(body);return
 }
 if(mine.length>=room.questions.length){
  body.append(el('p','cl227-wait',tr('خلصت! استنى خصمك يكمل عشان تظهر النتيجة النهائية.','You finished! Waiting for your opponent.')));pane.append(body);return
 }
 const q=room.questions[mine.length];const ask=el('section','cl227-question-card');
 ask.append(el('span','cl227-q-tag',tr('السؤال ','Question ')+(mine.length+1)+' / '+room.questions.length),el('h4','',q.prompt));
 const answers=el('div','cl227-answers');
 for(let i=0;i<q.options.length;i++){
  const choice=btn(String(q.options[i]),'cl227-answer');
  choice.addEventListener('click',async()=>{
   if(working)return;
   working=true;answers.querySelectorAll('button').forEach(b=>b.disabled=true);
   try{await window.classoraArena.answer(liveCode,i)}catch(e){message(errorText(e),true);working=false;drawDuel()}
   finally{working=false}
  });answers.append(choice)
 }
 ask.append(answers);body.append(ask,el('p','cl227-foot',tr('بتشوفوا نتيجتكم أول ما تخلصوا انتو الاثنين.','Final results appear when both players finish.')));
 pane.append(body);
}
function shopBalance(){
 const p=user()||{},spent=Math.max(0,Number(p.questShop?.spent)||0);
 return Math.max(0,(Number(p.xp)||0)-spent);
}
function drawShop(){
 const pane=frame(tr('كراج التأثيرات · متجر XP','Cosmetic garage · XP shop'));
 const p=user()||{},shop=p.questShop||{},owned=Array.isArray(shop.owned)?shop.owned:[];
 const balance=el('div','cl227-wallet');
 balance.append(el('span','',tr('رصيدك المتاح','Available balance')),el('strong','',shopBalance()+' XP'));
 pane.append(balance,el('p','cl227-shop-note',tr('الشراء بإنجازاتك فقط. XP المستوى ما بننقص؛ المتجر بحسب الرصيد غير المصروف.','Spend available earned XP. Your total level XP is not reduced.')));
 const grid=el('div','cl227-shop-grid');
 for(const [id,item] of Object.entries(window.classoraArena?.catalog||{})){
  const has=owned.includes(id),equipped=shop.equipped===id;
  const c=el('article','cl227-shop-item '+id+(equipped?' equipped':''));
  const orb=el('div','cl227-shop-orbit '+id,symbols[id]||'✦');
  const info=el('div','cl227-shop-info');
  info.append(el('b','',tr(...names[id])),el('small','',has?tr('مملوك','Owned'):item.cost+' XP'));
  const action=btn(has?(equipped?tr('مجهّز','Equipped'):tr('تجهيز','Equip')):tr('شراء','Buy'),'cl227-shop-btn');
  action.disabled=!isStudent()||equipped||(!has&&shopBalance()<item.cost);
  action.addEventListener('click',async()=>{
   if(working)return;working=true;action.disabled=true;
   try{
    if(has)await window.classoraArena.equip(id);else await window.classoraArena.buy(id);
    message(has?tr('تم التجهيز!','Effect equipped!'):tr('تم الشراء! افتح العنصر لتجهيزه.','Purchased! Equip it from your garage.'));
    drawShop();
   }catch(e){message(errorText(e),true);action.disabled=false}
   finally{working=false}
  });
  c.append(orb,info,action);grid.append(c)
 }
 pane.append(grid);
 if(shop.equipped&&shop.equipped!=='none'){
  const clear=btn(tr('إزالة التأثير','Remove effect'),'cl227-outline');
  clear.addEventListener('click',async()=>{try{await window.classoraArena.equip('none');drawShop()}catch(e){message(errorText(e),true)}});
  pane.append(clear)
 }
}
function syncMedia(){
 const p=user(),url=String(p?.photoVideoUrl||'');
 for(const parent of [$('lobbyAvatar'),$('profilePhotoPreview')?.parentElement]){
  if(!parent)continue;
  let video=parent.querySelector('.cl227-avatar-video');
  if(!url||!/^https:\/\//.test(url)){
   video?.remove();continue
  }
  if(!video){video=document.createElement('video');video.className='cl227-avatar-video';
   video.autoplay=true;video.loop=true;video.muted=true;video.playsInline=true;video.preload='metadata';video.setAttribute('aria-label',tr('فيديو البروفايل','Profile video'));parent.append(video)}
  if(video.getAttribute('src')!==url){video.setAttribute('src',url);video.load()}
  video.play().catch(()=>{});
 }
}
function profileAdditions(){
 const modal=$('profileModal');if(!modal)return;
 let node=$('cl227ProfileExtras');
 if(!node){
  node=el('section','cl227-profile-extras');node.id='cl227ProfileExtras';
  const hero=modal.querySelector('.profile-hero');
  if(hero)hero.after(node);else modal.querySelector('.modalbox')?.append(node);
  const title=el('h3','',tr('شخصية البروفايل','Profile style'));
  const badge=el('div','cl227-profile-rank');badge.id='cl227ProfileRank';
  const clip=el('p','',tr('ممكن ترفع GIF صغير من زر الصورة العادي، أو تحط رابط فيديو MP4/WebM مباشر يظهر متحركًا.','Upload a small GIF using the photo button or paste a direct HTTPS MP4/WebM video URL.'));
  const field=el('input','cl227-video-url');field.id='cl227VideoUrl';field.type='url';field.placeholder='https://example.com/clip.mp4';field.autocomplete='off';field.maxLength=720;field.setAttribute('aria-label',tr('رابط فيديو البروفايل','Profile video URL'));
  const controls=el('div','cl227-media-controls');
  const save=btn(tr('حفظ الفيديو','Save clip'),'cl227-outline');
  save.addEventListener('click',async()=>{save.disabled=true;try{await window.classoraProfileVideo.save(field.value);status.textContent=tr('تم حفظ الفيديو','Video saved')}
    catch(e){status.textContent=tr('استخدم رابط HTTPS مباشر ينتهي بـ mp4 أو webm.','Use a direct HTTPS URL ending in mp4 or webm.')}finally{save.disabled=false}});
  const clear=btn(tr('حذف الفيديو','Remove clip'),'cl227-outline');
  clear.addEventListener('click',async()=>{try{await window.classoraProfileVideo.save('');field.value='';status.textContent=tr('انحذف الفيديو','Video removed')}catch(e){status.textContent=errorText(e)}});
  controls.append(save,clear);
  const status=el('p','cl227-media-status');node.append(title,badge,clip,field,controls,status)
 }
 const field=$('cl227VideoUrl');if(field&&document.activeElement!==field)field.value=String(user()?.photoVideoUrl||'');
}
function sync(){
 const p=user();if(!p){detach();$('cl227Home')?.setAttribute('hidden','');$('cl227Pane')?.setAttribute('hidden','');document.body.removeAttribute('data-cl227-effect');return}
 if(lastUid&&lastUid!==p.uid){detach();$('cl227Pane')?.setAttribute('hidden','')}lastUid=p.uid||'';
 $('cl227Home')?.removeAttribute('hidden');
 const rank=currentRank(),rankEl=$('cl227Rank');
 if(rankEl){
  const index=ranks.indexOf(rank),next=ranks[index+1];
  rankEl.textContent=tr('رتبتك: ','Your rank: ')+tr(rank.ar,rank.en)+' · '+questTotal()+tr(' مواضيع',' topics')+(next?' · '+tr('القادم: ','Next: ')+tr(next.ar,next.en)+' ('+next.min+')':'');
  rankEl.dataset.rank=rank.cls;
 }
 const effect=p.questShop?.equipped||'none';
 document.body.dataset.cl227Effect=names[effect]?effect:'none';
 if($('cl227Pane')&&!$('cl227Pane').hidden&&activeTab==='shop')drawShop();
 if($('profileModal')?.classList.contains('open')){
  profileAdditions();
  const rank=$('cl227Rank');
  const status=$('cl227ProfileRank');
  if(status&&rank)status.textContent=rank.textContent;
 }
 syncMedia();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
