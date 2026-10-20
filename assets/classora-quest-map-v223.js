/* Classora Quest Adventure v223
 * Three easy missions per important curriculum topic: read, quick question,
 * tiny challenge. Real account-scoped unlocks, secure server-side XP claim,
 * earned cosmetic profile effects and reduced-motion support.
 */
import {learningState,completeQuestStep,skipQuestStep,questSkipsLeft,equipQuestCosmetic,markQuestRewardClaimed,flushLearning} from './learning-memory-v130.js?v=130';
const byId=id=>document.getElementById(id);
const language=()=>document.documentElement.lang||'ar';
const L=(ar,en)=>language()==='ar'?ar:(language()==='en'?en:(window.ClassoraLocale?.tFor?.(language(),en)||en));
const el=(tag,cls,content)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(content!==undefined)e.textContent=String(content);return e};
const button=(label,cls)=>{const b=el('button',cls,label);b.type='button';return b};
const svg=(type)=>{
 const s={
 map:'<path d="m3 5 6-3 6 3 6-3v17l-6 3-6-3-6 3V5Zm6-3v17m6-14v17"/>',
 star:'<path d="m12 2 2.8 6.6L22 12l-7.2 3.4L12 22l-2.8-6.6L2 12l7.2-3.4L12 2Z"/>',
 lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
 check:'<path d="m4 12 5 5L20 6"/>',
 book:'<path d="M12 5c-4-2-7-2-10-1v15c3-1 6-1 10 1m0-15c4-2 7-2 10-1v15c-3-1-6-1-10 1M12 5v15"/>',
 flag:'<path d="M4 22V3m0 2q5-3 9 0t7 0v12q-3 3-7 0t-9 0"/>',
 crown:'<path d="m2 7 5 5 5-8 5 8 5-5-2 12H4L2 7ZM4 22h16"/>',
 arrow:'<path d="m15 5-7 7 7 7"/>',
 gift:'<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M12 9v12M3 13h18M12 9C7 9 6 7 7 5c2-3 5 0 5 4Zm0 0c5 0 6-2 5-4-2-3-5 0-5 4Z"/>',
 spark:'<path d="m12 2 2.3 7.7L22 12l-7.7 2.3L12 22l-2.3-7.7L2 12l7.7-2.3L12 2Z"/>',
 bolt:'<path d="M13 2 4 13h7l-1 9 10-12h-8l1-8Z"/>',
 shield:'<path d="M12 2 3 6v6c0 6 5 9 9 10 4-1 9-4 9-10V6L12 2Z"/><path d="m8 12 3 3 5-6"/>'
 };
 return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(s[type]||s.star)+'</svg>';
};
const subjects={
 math:{ar:'الرياضيات',en:'Mathematics',color:'#63dabd',terms:/معادلات|النسبة|الجبر|الأعداد|الكسور|الدوال|الإحصاء|الاحتمال|الرسم|المتباينات|القوى/i},
 geometry:{ar:'الهندسة',en:'Geometry',color:'#8cc3fb',terms:/المثلث|الزوايا|فيثاغورس|المحيط|المساحة|الأشكال|التشابه|التطابق|الدائرة|المضلعات/i},
 science:{ar:'العلوم',en:'Science',color:'#b5a0ff',terms:/الطاقة|الخلية|المادة|العناصر|الجدول الدوري|الحمض|القاعد|الحركة|القوى|الكثافة/i},
 arabic:{ar:'العربي',en:'Arabic',color:'#ffbb9b',terms:/الفاعل|المفعول|المضاف|الإعراب|النفي|الجملة|النعت|المبتدأ|الخبر|الفعل/i},
 english:{ar:'الإنجليزي',en:'English',color:'#ffc776',terms:/tense|present|past|grammar|reading|writing|vocabulary|conditional|passive/i},
 history:{ar:'التاريخ',en:'History',color:'#f7a7b8',terms:/النهضة|مارتن|لوثر|الثورة|الاستعمار|الحضارة|التاريخ/i},
 geography:{ar:'الجغرافيا',en:'Geography',color:'#88d3d6',terms:/المناخ|السكان|الخرائط|الكرة الأرضية|الموقع|الأرض|البيئة|الموارد/i}
};
const cosmetics=[
 {id:'none',need:0,ar:'بدون تأثير',en:'Classic'},
 {id:'bronze',need:1,ar:'إطار المستكشف',en:'Explorer frame'},
 {id:'neon',need:3,ar:'نيون متحرك',en:'Animated neon'},
 {id:'sparkle',need:7,ar:'نجوم متلألئة',en:'Sparkling stars'},
 {id:'galaxy',need:12,ar:'هالة المجرّة',en:'Galaxy aura'},
 {id:'legend',need:20,ar:'إطار الأسطورة',en:'Legend frame'},
 {id:'fire',need:5,ar:'شرار النار',en:'Fire sparks'}
];
const account=()=>{const p=window.PythagorasiUser;return p&&document.body.classList.contains('classora-authenticated')&&(p.uid||p.profileId)?p:null};
const student=()=>account()?.role==='student';
const owned=()=>String(account()?.uid||account()?.profileId||'guest');
// The assigned grade is authoritative. A grade switch in the quest map must
// never let the player access a different grade's progression.
const grade=()=>{const p=account();let saved=8;try{saved=Number(localStorage.getItem('classora_curriculum_grade')||8)}catch{}const n=Number(p?.grade)||saved;return [7,8,9,10].includes(n)?n:8};
const bank=()=>window.classoraAssessment?.topics||[];
const state=()=>learningState();
const completed=()=>Object.values(state().quests||{}).filter(x=>x?.step===3&&!x?.skipped).length;
const month=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')};
const countDown=()=>{const d=new Date();return Math.ceil((new Date(d.getFullYear(),d.getMonth()+1,1)-d)/86400000)};
const progress=t=>Math.max(0,Math.min(3,Number(state().quests?.[t.value]?.step)||0));
const rewardClaimed=t=>Boolean(state().quests?.[t.value]?.claimed);
const display=t=>language()==='ar'?t.title:(t.en||t.title);
const hashString=str=>{let h=2166136261;for(const char of String(str)){h^=char.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const groupsFor=(g)=>{
 // A single stable per-grade path, refreshed each calendar month.
 // The three skip tokens reset every month; earned rewards remain permanent.
 const random=(rows,salt)=>[...rows].sort((a,b)=>
   hashString(month()+'|'+g+'|'+salt+'|'+a.value)-hashString(month()+'|'+g+'|'+salt+'|'+b.value));
 const perSubject=Object.keys(subjects).map(k=>
  random(bank().filter(t=>Number(t.grade)===g&&t.subject===k),k).slice(0,6));
 const turns=Math.max(...perSubject.map(x=>x.length),0),mixed=[];
 for(let n=0;n<turns;n++){
  const pass=random(perSubject.flatMap(list=>list[n]?[list[n]]:[]),'turn-'+n);
  mixed.push(...pass);
 }
 return mixed.length?[{key:'mixed',ar:'طريق المهمات',en:'Quest road',color:'#84e8d3',
  topics:mixed.slice(0,Math.min(22,mixed.length))}]:[];
};
let currentSubject='mixed',selected=null,opened=new Set(),started=new Set(),challenge=null,rendering=false,sessionAccount='';
function gainTopic(t){
 const group=groupsFor(grade()).find(g=>g.key===currentSubject&&g.topics.some(x=>x.value===t.value));
 const idx=group?.topics.findIndex(x=>x.value===t.value)??-1;
 return idx===0||idx>0&&progress(group.topics[idx-1])===3;
}
function isReady(){return !!account()&&!!byId('classoraLearningFront')}
function updateBeauty(){
 const p=account(),id=owned(),stateNow=state(),unlocks=completed();
 const selectedId=cosmetics.find(c=>c.id===stateNow.cosmetics?.value&&unlocks>=c.need)?.id||'none';
 const body=document.body;
 if(!p||!id||id==='guest'){body.removeAttribute('data-cl223-cosmetic');return}
 body.dataset.cl223Cosmetic=selectedId;
 const badge=byId('cl223EquippedName');
 if(badge)badge.textContent=L(cosmetics.find(c=>c.id===selectedId)?.ar||'بدون تأثير',cosmetics.find(c=>c.id===selectedId)?.en||'Classic');
 const total=byId('cl223CompletedCount');if(total)total.textContent=String(unlocks);
}
function wardrobe(){
 const modal=byId('profileModal');if(!modal)return;
 let box=byId('cl223Wardrobe');
 if(!box){
  box=el('section','cl223-wardrobe');box.id='cl223Wardrobe';
  const hero=modal.querySelector('.profile-hero');
  if(hero)hero.insertAdjacentElement('afterend',box);else modal.querySelector('.modalbox')?.append(box);
  box.addEventListener('click',e=>{
   const target=e.target.closest('[data-cl223-equip]');
   if(!target||(!student()&&!window.classoraIsSuperAdmin?.()))return;
   const id=target.dataset.cl223Equip;
   if(equipQuestCosmetic(id)){updateBeauty();wardrobe()}
  });
 }
 const avail=completed(),equipped=state().cosmetics?.value||'none';
 box.replaceChildren();
 const top=el('div','cl223-wardrobe-top');top.innerHTML='<span>'+svg('crown')+'</span>';
 const topText=el('div','');topText.append(el('h3','',L('خزانة مكافآت المغامرة','Adventure rewards')),el('p','',L('إطارات متحركة وتأثيرات للبروفايل، تفتحها بمهماتك','Earn profile frames and animated effects through learning')));
 top.append(topText);
 box.append(top);
 const panel=el('div','cl223-wardrobe-grid');
 for(const cosmetic of cosmetics){
  const unlocked=avail>=cosmetic.need||Boolean(window.classoraIsSuperAdmin?.());
  const b=button('','cl223-cosmetic '+(unlocked?'unlocked':'locked')+' '+(equipped===cosmetic.id?'equipped':''));
  b.dataset.cl223Equip=cosmetic.id;b.disabled=!unlocked||(!student()&&!window.classoraIsSuperAdmin?.());
  const icon=el('span','cl223-cosmetic-orbit '+cosmetic.id);
  icon.innerHTML=svg(unlocked?'spark':'lock');
  const details=el('span','');details.append(el('b','',L(cosmetic.ar,cosmetic.en)),el('small','',unlocked?(equipped===cosmetic.id?L('مجهّز الآن','Equipped'):L('اضغط للتجهيز','Tap to equip')):L('أكمل '+cosmetic.need+' مواضيع','Finish '+cosmetic.need+' topics')));
  b.append(icon,details);panel.append(b);
 }
 box.append(panel);
 const note=el('small','cl223-wardrobe-note',(student()||window.classoraIsSuperAdmin?.())?L('التأثيرات للتزيين فقط، بدون مزايا مدفوعة أو نقاط وهمية.','Decorations only. No pay-to-win boosts or fake XP.'):L('معاينة المكافآت — طالبك يفتحها بالتعلّم.','Preview rewards — students unlock them by learning.'));
 box.append(note);questSettings();
}
function questSettings(){
 const parent=byId('cl223Wardrobe');if(!parent||parent.querySelector('#cl223EffectSettings'))return;
 const panel=el('div','cl223-effect-settings');panel.id='cl223EffectSettings';
 const label=el('label','',L('تأثيرات الصورة المتحركة','Animated profile effects'));
 const check=document.createElement('input');check.type='checkbox';
 try{check.checked=localStorage.getItem('classora_quest_motion_'+owned())!=='off'}catch{check.checked=true}
 const apply=()=>{document.body.classList.toggle('cl223-motion-off',!check.checked);try{localStorage.setItem('classora_quest_motion_'+owned(),check.checked?'on':'off')}catch{}};
 check.addEventListener('change',apply);label.prepend(check);
 panel.append(el('h4','',L('إعدادات التأثيرات','Effect settings')),label);
 const admin=Boolean(window.classoraIsSuperAdmin?.());
 if(admin)panel.append(el('small','',L('حساب الأدمن: تستطيع تجربة جميع الإطارات بدون فتحها.','Admin preview: all profile effects can be equipped.')));
 parent.append(panel);apply();
}
function sync(){
 const p=account();
 if(!p){document.body.removeAttribute('data-cl223-cosmetic');byId('cl223Preview')?.setAttribute('hidden','');byId('cl223MapPanel')?.setAttribute('hidden','');return}
 if(sessionAccount&&sessionAccount!==owned()){opened.clear();started.clear();challenge=null;selected=null;byId('cl223MapPanel')?.setAttribute('hidden','')}
 sessionAccount=owned();
 try{document.body.classList.toggle('cl223-motion-off',localStorage.getItem('classora_quest_motion_'+owned())==='off')}catch{}
 byId('cl223Preview')?.removeAttribute('hidden');
 updateBeauty();
 const progressEl=byId('cl223Progress');
 if(progressEl)progressEl.textContent=completed()+' '+L('مواضيع مكتملة','topics completed');
 if(byId('cl223MapPanel')&&!byId('cl223MapPanel').hidden)draw();
 const modal=byId('profileModal');if(modal?.classList.contains('open'))wardrobe();
}
function makePreview(){
 const preview=el('section','cl223-preview');preview.id='cl223Preview';
 const art=el('div','cl223-preview-art');
 art.innerHTML='<span class="cl223-preview-star star-one">'+svg('star')+'</span><span class="cl223-preview-star star-two">'+svg('star')+'</span><span class="cl223-preview-route"></span><i class="cl223-preview-stop stop-one">'+svg('book')+'</i><i class="cl223-preview-stop stop-two">'+svg('flag')+'</i><i class="cl223-preview-stop stop-three">'+svg('crown')+'</i>';
 const content=el('div','cl223-preview-copy');
 content.append(el('span','cl223-kicker','CLASSORA · QUEST MAP'),el('h2','',L('رحلتك التعليمية','Your learning adventure')),el('p','',L('طريق واحد بيتغير كل شهر، 3 تخطّيات، وجوائز للبروفايل.','One new road each month, three skips, and profile rewards.')));
 const stats=el('div','cl223-preview-stats');
 stats.append(el('span','',L('3 مهمات لكل موضوع','3 missions per topic')),el('span','',L('حتى 20 XP لكل موضوع','Up to 20 XP per topic')));
 const open=button(L('افتح خريطة المغامرة','Open adventure map'),'cl223-open');open.append(document.createTextNode(' ↗'));open.addEventListener('click',()=>openMap());
 const total=el('div','cl223-preview-progress');total.id='cl223Progress';
 content.append(stats,open,total);
 preview.append(content,art);
 preview.hidden=true;
 return preview;
}
function openMap(){
 if(!account())return;
 const panel=byId('cl223MapPanel');if(!panel)return;
 panel.hidden=false;byId('cl215Panel')&&(byId('cl215Panel').hidden=true);
 if(!groupsFor(grade()).some(g=>g.key===currentSubject))currentSubject=groupsFor(grade())[0]?.key||'math';
 draw();
 panel.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'start'});
}
function closeMap(){const panel=byId('cl223MapPanel');if(panel)panel.hidden=true;challenge=null}
function draw(){
 const panel=byId('cl223MapPanel');if(!panel||panel.hidden||rendering)return;
 rendering=true;
 try{
  panel.replaceChildren();
  const currentGrade=grade();
  const groups=groupsFor(currentGrade);
  const top=el('header','cl223-map-header');
  const head=el('div','');head.append(el('span','cl223-kicker','CLASSORA · ADVENTURE'),el('h2','',L('مغامرة المهمات','Quest adventure')),el('p','',L('طريق واحد، أسئلة سهلة، 3 تخطّيات بالشهر.','One road, easy questions, three monthly skips.')));
  const close=button('×','cl223-close');close.setAttribute('aria-label',L('إغلاق الخريطة','Close map'));close.addEventListener('click',closeMap);top.append(head,close);
  const filters=el('div','cl223-filters cl223-simple-filter');
  const badge=el('span','cl223-assigned-grade',L('صف '+currentGrade+' · طريق '+month(),'Grade '+currentGrade+' · '+month()+' road'));
  const skips=el('span','cl223-skips',L('تخطّياتك: ','Skips left: ')+questSkipsLeft(month())+' / 3');
  const nextMonth=el('span','cl223-next-month',L('يتجدد خلال '+countDown()+' يوم','Refreshes in '+countDown()+' days'));
  filters.append(badge,skips,nextMonth);
  const found=groups.find(g=>g.key===currentSubject)||groups[0];
  if(!found){panel.append(top,filters,el('p','',L('ما في مواضيع لهذا الصف بعد.','No lessons for this grade yet.')));return}
  currentSubject=found.key;
  const area=el('div','cl223-world');area.style.setProperty('--quest-color',found.color);
  const route=el('section','cl223-route');
  const first=el('header','cl223-route-header');first.innerHTML='<span>'+svg('map')+'</span>';
  const headline=el('div','');headline.append(el('h3','',L(found.ar,found.en)),el('p','',L('اضغط على موضوع مفتوح، وبعدها ابدأ حل.','Tap an unlocked topic, then start solving.')));
  first.append(headline);route.append(first);
  const path=el('div','cl223-nodes');
  let anyOpen=null;let finished=0;
  found.topics.forEach((topic,i)=>{
   const step=progress(topic),unlocked=i===0||progress(found.topics[i-1])===3;
   if(step===3)finished++;
   if(!anyOpen&&unlocked&&step<3)anyOpen=topic;
   const b=button('','cl223-node '+(step===3?'finished':unlocked?'available':'sealed')+(selected===topic.value?' selected':''));
   b.disabled=!unlocked;b.dataset.topic=topic.value;b.style.setProperty('--node-color',found.color);
   const marker=el('span','cl223-node-marker');
   marker.innerHTML=svg(step===3?'check':unlocked?'flag':'lock');
   const caption=el('span','cl223-node-caption');
   caption.append(el('span','cl223-node-index',L('المرحلة ','Stage ')+(i+1)),el('strong','',display(topic)),el('small','',step===3?L('مكتملة · +20 XP','Completed · XP reward'):unlocked?L(''+step+'/3 مهمات',''+step+'/3 missions'):L('أكمل اللي قبلها','Complete previous mission')));
   b.append(marker,caption);
   if(i===found.topics.length-1){const boss=el('span','cl223-final',L('نهاية المسار','Final stop'));b.append(boss)}
   b.addEventListener('click',()=>{selected=topic.value;challenge=null;draw();const target=byId('cl223MapPanel')?.querySelector('.cl223-mission-area');target?.scrollIntoView({block:'nearest',behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth'});});
   path.append(b)
  });
  route.append(path);
  const footer=el('div','cl223-route-footer',L('المنجز: ','Completed: ')+finished+' / '+found.topics.length);
  route.append(footer);
  const side=el('aside','cl223-mission-area');
  if(!selected||!found.topics.some(t=>t.value===selected&&gainTopic(t)))selected=anyOpen?.value||found.topics[0]?.value;
  const t=found.topics.find(x=>x.value===selected);
  if(t)mission(side,t,found);
  area.append(route,side);panel.append(top,filters,area);
 }finally{rendering=false}
}
function question(t,index,round){
 const key=owned()+'|'+t.value+'|'+index+'|'+round+'|'+(language()==='ar'?'ar':'en');
 if(challenge?.key===key)return challenge.question;
 const api=window.classoraAssessment;
 let q=null;
 try{
  const level='easy'; // All three missions stay beginner-friendly.
  const quiz=api?.generate?.(t.value,6,level,language()==='ar'?'ar':'en',true);
  q=quiz?.questions?.find(z=>z.type==='mcq'&&Array.isArray(z.options)&&z.options.length>=2&&z.options.includes(String(z.answer)))||null;
 }catch(e){console.warn('Quest bank',e)}
 challenge={key,question:q,round,correct:0,wrong:false};
 return q;
}
function mission(side,t,group){
 const step=progress(t),readOnly=!student(),isOpen=gainTopic(t);
 const title=el('header','cl223-mission-header');
 const missionSymbol=el('span','cl223-mission-icon');missionSymbol.innerHTML=svg(step===3?'crown':'star');title.append(missionSymbol);
 const titleText=el('div','');
 titleText.append(el('small','',L('موضوع مهم','Important topic')),el('h3','',display(t)));
 title.append(titleText);side.append(title);
 const bar=el('div','cl223-mission-track');
 ['ابدأ','جاوب','تحدّى'].forEach((x,i)=>{
  const e=el('span','cl223-step '+(i<step?'done':i===step?'now':''));e.append(el('i','',i<step?'✓':String(i+1)),document.createTextNode(L(x,['Start','Answer','Challenge'][i])));bar.append(e)
 });
 side.append(bar);
 const hint=el('p','cl223-description',
  step===0?L('المهمة 1: سؤال سهل عن الموضوع بيبدأ فورًا!','Quest 1 starts immediately with one easy question!'):
  step===1?L('المهمة 2: سؤال واحد سهل، جرّب لحد ما تزبط!','Quest 2: one easy question. Try until you get it!'):
  step===2?L('المهمة 3: جاوب سؤالين قصار، ويفتح الموضوع القادم.','Quest 3: answer two short questions to unlock the next topic.'):
  L('أبدعت! خلصت المهمات الثلاث وفتحت اللي بعدها.','Amazing! All three quests are complete, and the next topic is unlocked.'));
 side.append(hint);
 if(!isOpen){side.append(el('p','cl223-lock-note',L('كمّل المرحلة اللي قبلها عشان تفتح هاي.','Finish the previous topic to unlock this.')));return}
 if(readOnly){const go=button(L('معاينة الشرح','Preview lesson'),'cl223-primary');go.addEventListener('click',()=>window.classoraCurriculum?.openAt?.(t.grade,t.subject,t.title));side.append(go,el('p','cl223-fine',L('هذا الحساب يقدر يشوف الخريطة. التقدّم والمكافآت لحساب الطالب.','This account can preview the map. Progress and rewards belong to students.')));return}
 if(step===3){
  const badge=el('div','cl223-victory');
  badge.innerHTML='<span>'+svg('crown')+'</span>';
  badge.append(el('b','',L('3/3 مهمات مكتملة','3/3 missions complete')));
  side.append(badge);
  if(state().quests?.[t.value]?.skipped){
   side.append(el('p','cl223-reward-ok',L('استعملت تخطّي بهالموضوع: انفتح الطريق، بدون مكافأة XP.','You used a skip here. The road is unlocked, but this topic earns no XP.')));
  }else if(!rewardClaimed(t)){
   const claim=button(L('استلام مكافأة XP','Claim XP reward'),'cl223-primary');
   claim.addEventListener('click',()=>claimReward(t,claim));
   side.append(claim);
  }else side.append(el('p','cl223-reward-ok',L('تم تسجيل مكافأة XP على حسابك.','Your XP reward was recorded in your account.')));
  const i=group.topics.findIndex(x=>x.value===t.value);
  if(i>=0&&i<group.topics.length-1){
   const next=button(L('روح للمهمة التالية','Go to next topic'),'cl223-outline');
   next.addEventListener('click',()=>{selected=group.topics[i+1].value;challenge=null;draw()});side.append(next)
  }
  return
 }
 const activeKey=t.value+'|'+step;
 if(!started.has(activeKey)){
  const begin=button(L('ابدأ حل','Start solving'),'cl223-primary cl223-begin');
  begin.addEventListener('click',()=>{started.add(activeKey);challenge=null;draw()});
  side.append(begin);
  const tokens=questSkipsLeft(month());
  if(tokens>0){
   const skip=button(L('تخطّي المهمة · '+tokens+' متبقي','Skip this mission · '+tokens+' left'),'cl223-outline cl223-skip');
   skip.addEventListener('click',()=>{
    if(!skipQuestStep(t.value,month())){notify(L('ما ضلّ تخطّيات لهالشهر','No skips left this month'));return}
    started.delete(activeKey);challenge=null;draw();updateBeauty();
    notify(L('تخطّيت المهمة. ما في XP على الموضوع المتخطّى.','Mission skipped. No XP is earned for this skipped topic.'));
   });
   side.append(skip);
  }
  side.append(el('p','cl223-fine',L('3 تخطّيات مجانية كل شهر. التخطّي ما بيعطي XP.','Three skips every month. Skipped topics do not earn XP.')));
  return;
 }
 const missionNum=step;
 const goal=step===2?2:1;
 if(!challenge||!challenge.key.startsWith(owned()+'|'+t.value+'|'+missionNum+'|'))challenge=null;
 if(!challenge){question(t,missionNum,0)}
 const data=challenge;
 if(!data?.question){
  side.append(el('p','cl223-fine',L('هذا الموضوع ما عنده أسئلة قصيرة كافية حاليًا. افتح التدريب الأصلي وكمّل المهمة.','This lesson needs more verified short questions. Use its existing practice to complete the mission.')));
  const learn=button(L('افتح تدريب الموضوع','Open topic practice'),'cl223-primary');
  learn.addEventListener('click',()=>{opened.add(t.value+'-'+step);window.classoraCurriculum?.openAt?.(t.grade,t.subject,t.title)});
  const finishFallback=button(L('خلصت التدريب','I finished practicing'),'cl223-outline');
  finishFallback.disabled=!opened.has(t.value+'-'+step);
  finishFallback.addEventListener('click',()=>finish(t,step+1));
  side.append(learn,finishFallback);return
 }
 const count=el('p','cl223-q-count',L('سؤال ','Question ')+(data.correct+1)+' / '+goal);side.append(count);
 const titleQ=el('h4','cl223-question',data.question.prompt);side.append(titleQ);
 const options=el('div','cl223-options');
 for(const choice of data.question.options){
  const b=button(String(choice),'cl223-answer');b.addEventListener('click',()=>{
   if(choice===data.question.answer){
    data.correct++;
    if(data.correct>=goal){
     finish(t,step+1);
     return
    }
    const nextRound=data.round+1;
    const correctSoFar=data.correct;
    challenge=null;
    question(t,missionNum,nextRound);
    if(challenge)challenge.correct=correctSoFar;
    draw()
   }else{
    const msg=byId('cl223AnswerFeedback');if(msg)msg.textContent=L('قريب! جرّب إجابة ثانية، ما في عقوبة.','Almost! Try another answer, no penalty.');
    b.classList.add('wrong');window.setTimeout(()=>b.classList.remove('wrong'),650);
   }
  });options.append(b)
 }
 side.append(options);
 const fb=el('div','cl223-feedback','');fb.id='cl223AnswerFeedback';fb.setAttribute('aria-live','polite');side.append(fb);
 side.append(el('small','cl223-fine',L('ما في مؤقّت، ولا خسارة نقاط على الغلط.','No timer, and no penalty for mistakes.')));
}
function finish(t,step){
 if(!student()||progress(t)!==step-1)return;
 const before=completed();
 if(!completeQuestStep(t.value,step))return;
 challenge=null;started.delete(t.value+'|'+(step-1));
 draw();updateBeauty();wardrobe();
 if(step===3){
  if(!state().quests?.[t.value]?.skipped)claimReward(t);
  const after=completed(),newReward=cosmetics.find(c=>c.need===after&&after>before);
  if(newReward)notify(L('مبروك! فتحت '+newReward.ar,'Unlocked: '+newReward.en));
  else notify(L('خلصت موضوع! فتحنا اللي بعده.','Topic complete! The next one is unlocked.'));
 }else notify(L('أحسنت! المهمة اكتملت.','Mission completed!'));
}
async function claimReward(t,sourceButton){
 if(!student()||!t||progress(t)!==3||rewardClaimed(t)||state().quests?.[t.value]?.skipped)return;
 if(sourceButton){sourceButton.disabled=true;sourceButton.textContent=L('جاري تسجيل XP','Saving XP')}
 try{
  const synced=await flushLearning();
  if(!synced)throw Error('sync-first');
  if(typeof window.classoraClaimQuestXP!=='function')throw Error('xp-not-ready');
  const result=await window.classoraClaimQuestXP(t.value);
  markQuestRewardClaimed(t.value);
  notify(result?.xp>0?L('ربحت +'+result.xp+' XP!','You earned +'+result.xp+' XP!'):L('تم التحقق من مكافأتك.','Your reward is recorded.'));
  draw()
 }catch(e){
  console.warn('Quest XP claim failed; progress preserved',e);
  if(sourceButton){sourceButton.disabled=false;sourceButton.textContent=L('حاول استلام XP مجددًا','Retry XP reward')}
  notify(L('المهمة محفوظة. جرّب استلام XP بعد الاتصال بالإنترنت.','Your progress is saved. Retry the XP reward while online.'));
 }
}
let noticeTimer;
function notify(message){
 const n=byId('cl223Toast');if(!n)return;
 n.textContent=message;n.hidden=false;window.clearTimeout(noticeTimer);noticeTimer=window.setTimeout(()=>{n.hidden=true},3500)
}
function init(){
 const front=byId('classoraLearningFront');
 if(!front){document.addEventListener('classora:learning-front-ready',init,{once:true});return}
 if(byId('cl223Preview'))return;
 const preview=makePreview();
 const panel=el('section','cl223-map-panel');panel.id='cl223MapPanel';panel.hidden=true;panel.setAttribute('aria-label',L('خريطة مهمات كلاسورا','Classora quest map'));
 const catalog=front.querySelector('#cl214-catalog');
 if(catalog){catalog.before(preview);preview.after(panel)}else front.append(preview,panel);
 const toast=el('div','cl223-toast');toast.id='cl223Toast';toast.hidden=true;toast.setAttribute('role','status');document.body.append(toast);
 const modal=byId('profileModal');
 if(modal)new MutationObserver(()=>{if(modal.classList.contains('open'))wardrobe()}).observe(modal,{attributes:true,attributeFilter:['class']});
 document.addEventListener('classora:learning-update',sync);
 document.addEventListener('classora-auth-settled',sync);
 document.addEventListener('classora:grade-change',()=>{if(!panel.hidden){selected=null;draw()}});
 new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class','data-user-role']});
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir']});
 window.addEventListener('pageshow',sync);
 window.classoraQuestMap={open:openMap,close:closeMap,refresh:sync};
 sync();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();