/* Responsive dashboard: delegates actions to the existing application. */
(()=>{'use strict';
const $=id=>document.getElementById(id);
const icons={home:'<path d="m3 10 9-7 9 7v11H3z"/><path d="M9 21v-8h6v8"/>',book:'<path d="M12 5Q7 2 3 5v15q4-3 9 0 5-3 9 0V5q-4-3-9 0Zm0 0v15"/>',chat:'<path d="M21 11a9 9 0 0 1-13 8l-5 2 2-5A9 9 0 1 1 21 11Z"/>',users:'<circle cx="9" cy="7" r="4"/><path d="M2 21v-3a7 7 0 0 1 14 0v3M17 3a4 4 0 0 1 0 8m2 3q4 1 3 7"/>',settings:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/>',exam:'<rect x="5" y="3" width="14" height="18" rx="3"/><path d="m8 12 3 3 5-6"/>',trophy:'<path d="M7 3h10v8a5 5 0 0 1-10 0Zm0 3H3v3q0 5 5 5m9-8h4v3q0 5-5 5m-4 2v5m-5 0h10"/>',search:'<circle cx="10" cy="10" r="7"/><path d="m16 16 5 5"/>',bell:'<path d="M6 9a6 6 0 0 1 12 0c0 6 3 7 3 8H3c0-1 3-2 3-8m4 12h4"/>',play:'<path d="m8 4 12 8-12 8Z"/>',spark:'<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',flask:'<path d="M8 2h8M9 2v8L3 20q0 2 3 2h12q3 0 3-2l-6-10V2M7 15h10"/>',arrow:'<path d="m14 5-7 7 7 7"/>',close:'<path d="m5 5 14 14M5 19 19 5"/>'};
const icon=k=>'<svg viewBox="0 0 24 24" aria-hidden="true">'+(icons[k]||icons.spark)+'</svg>';
const text=(ar,en)=>'<span data-d-ar="'+ar+'" data-d-en="'+en+'">'+ar+'</span>';
const button=(route,label,en,k,cls='')=>'<button type="button" data-d-route="'+route+'" class="'+cls+'">'+icon(k)+text(label,en)+'</button>';
let dash,root,card,marker,active=true;
function native(id){const el=$(id);if(el&&!el.disabled){el.click();return true}return false}
function grade(){const p=window.PythagorasiUser;const n=Number(p?.grade||p?.gradeLevel);return n>=7&&n<=12?n:7}
function last(){try{return JSON.parse(localStorage.getItem('classora_last_topic_v112_'+window.PythagorasiUser?.uid)||'null')}catch{return null}}
function closeAI(){root.classList.remove('cl286-ai-open');$('cl286AssistantButton')?.focus()}
function positionAI(){
 card=document.querySelector('#platformLobby .lobby-ai-card');if(!card)return;
 if(!marker){marker=document.createComment('native assistant location');card.before(marker)}
 const host=active?$('cl286AIHost'):marker.parentNode;
 if(active&&host&&card.parentNode!==host)host.append(card);
 else if(!active&&marker.parentNode&&card.parentNode!==marker.parentNode)marker.after(card);
}
function go(route){
 if(route==='home'){active=true;root.classList.add('cl286-active');positionAI();root.scrollTo({top:0});sync();return}
 if(route==='ai'){root.classList.add('cl286-ai-open');positionAI();$('lobbyAIInput')?.focus();return}
 if(route==='closeAI'){closeAI();return}
 if(route==='tools'){active=false;root.classList.remove('cl286-active');positionAI();document.querySelector('#cl214-catalog')?.scrollIntoView();return}
 if(route==='subjects'){if(window.classoraCurriculum?.open)window.classoraCurriculum.open();else go('tools');return}
 if(route.startsWith('subject:')){if(window.classoraCurriculum?.openAt)window.classoraCurriculum.openAt(grade(),route.split(':')[1]);else go('subjects');return}
 if(route==='resume'){const l=last();if(l&&window.classoraCurriculum?.openAt)window.classoraCurriculum.openAt(l.grade,l.subject,l.topic);else go('subjects');return}
 if(route==='progress'){const fn=window.classoraLearningPlus?.progress;if(typeof fn==='function')fn();else go('tools');return}
 const ids={search:'classoraGlassSearchBtn',notifications:'lobbyNotificationsBtn',profile:'lobbyProfileBtn',classes:'lobbyClassBtn',chat:'lobbyChatBtn',settings:'lobbySettingsBtn',exam:'lobbyExamBtn',live:'competitionBtn'};
 if(ids[route])native(ids[route]);
}
function sync(){
 if(!dash)return;
 const ar=(document.documentElement.lang||'ar').startsWith('ar');dash.dir=ar?'rtl':'ltr';dash.lang=ar?'ar':'en';
 dash.querySelectorAll('[data-d-ar]').forEach(e=>{const v=ar?e.dataset.dAr:e.dataset.dEn;if(e.textContent!==v)e.textContent=v});
 const name=String(window.PythagorasiUser?.displayName||$('lobbyProfileName')?.textContent||'').trim().split(/\s+/)[0];
 $('cl286Name').textContent=name|| (ar?'أهلًا في كلاسورا':'Welcome to Classora');
 $('cl286User').textContent=name|| (ar?'حسابي':'My account');
 $('cl286Last').textContent=last()?.topic||(ar?'اختار مادة وابدأ أول درس':'Choose a subject to start');
 for(const [out,source] of [['cl286Started','cl215StartedCount'],['cl286XP','studentDashXP'],['cl286Daily','cl215DailyCount']]){
 const v=$(source)?.textContent?.trim();$(out).textContent=v||'—';
 }
}
function init(){
 root=$('platformLobby');if(!root||$('cl286Dashboard'))return;
 dash=document.createElement('section');dash.id='cl286Dashboard';dash.className='cl286';
 const course=(key,title,en,symbol,tone)=>'<button type="button" class="cl286-course '+tone+'" data-d-route="subject:'+key+'"><div class="cl286-course-top"><i>'+symbol+'</i><h3>'+text(title,en)+'</h3></div><p>'+text('دروس، شرح وتدريبات تفاعلية','Lessons and interactive practice')+'</p><div class="cl286-course-go">'+text('متابعة الدروس','Explore lessons')+icon('arrow')+'</div></button>';
 dash.innerHTML=`
 <aside class="cl286-rail"><div class="cl286-logo"><i></i><b>Classora</b></div><nav>${button('home','الرئيسية','Home','home','selected')}${button('subjects','موادي','Subjects','book')}${button('classes','صفوفي','Classes','users')}${button('exam','الامتحانات','Exams','exam')}${button('live','المسابقات','Competitions','trophy')}${button('settings','الإعدادات','Settings','settings')}</nav><button type="button" class="cl286-account" data-d-route="profile"><i>${icon('users')}</i><b id="cl286User"></b>${icon('arrow')}</button></aside>
 <main class="cl286-main"><header class="cl286-top">${button('search','ابحث عن دروسك، مواضيع، أو أي شيء…','Search lessons and topics…','search','cl286-search')}${button('notifications','الإشعارات','Notifications','bell','cl286-icon')}${button('profile','حسابي','My account','users','cl286-icon')}<div class="cl286-mobile-brand">Classora</div></header>
 <div class="cl286-greeting"><h1>${text('أهلًا','Hello')} <span id="cl286Name"></span> 👋</h1><p>${text('جاهز لإنجاز جديد؟','Ready for a new achievement?')}</p></div>
 <section class="cl286-hero"><div><h2>${text('خطوة جديدة نحو التفوّق','One step closer to your goals')}</h2><p>${text('كل درس تقرأه اليوم هو استثمار في مستقبلك. اكتشف محتوى جديدًا، راجع دروسك، وحقّق أهدافك.','Learn something new, revisit your lessons, and work towards your goals.')}</p>${button('resume','أكمل تعلّمك','Continue learning','play','cl286-primary')}</div><div class="cl286-book" aria-hidden="true"></div></section>
 <section class="cl286-stats"><button data-d-route="progress" class="mint">${icon('book')}<span>${text('دروس بدأتها','Lessons started')}<b id="cl286Started">—</b></span></button><button data-d-route="progress" class="lavender">${icon('spark')}<span>${text('نقاطك','Your points')}<b id="cl286XP">—</b></span></button><button data-d-route="tools" class="peach">${icon('exam')}<span>${text('تحدّي اليوم','Daily challenge')}<b id="cl286Daily">—</b></span></button></section>
 <div class="cl286-heading"><h2>${icon('book')}${text('موادي','My subjects')}</h2>${button('subjects','عرض الكل','View all','arrow','cl286-text')}</div>
 <section class="cl286-courses">${course('math','الرياضيات','Mathematics','π','mint')}${course('science','العلوم','Science',icon('flask'),'lavender')}${course('arabic','اللغة العربية','Arabic','ض','peach')}</section>
 <section class="cl286-bottom"><div class="cl286-resume"><h2>${icon('clock')}${text('تابع من حيث توقفت','Pick up where you left off')}</h2><button type="button" data-d-route="resume"><i>${icon('book')}</i><span><small>${text('رحلتك التعليمية','Your learning journey')}</small><b id="cl286Last"></b></span><i class="cl286-play">${icon('play')}</i></button></div><div class="cl286-live lavender"><div><h2>${text('مسابقة مباشرة','Live competition')}</h2><p>${text('اختبر معلوماتك ونافس زملاءك!','Test your knowledge with classmates!')}</p>${button('live','انضم الآن','Join now','users','cl286-primary')}</div><i>${icon('trophy')}</i></div></section>
 <div class="cl286-footer-actions">${button('tools','كل أدوات التعلّم','All learning tools','book','cl286-text')}${button('exam','امتحان سريع','Quick exam','exam','cl286-text')}${button('ai','اسأل كلاسورا','Ask Classora','spark','cl286-text')}</div>
 <button id="cl286AssistantButton" class="cl286-mobile-ai" type="button" data-d-route="ai"><i>${icon('spark')}</i><b>${text('اسأل كلاسورا','Ask Classora')}</b>${icon('arrow')}</button>
 </main>
 <aside class="cl286-assistant"><div class="cl286-ai-intro"><i>${icon('spark')}</i><h2>${text('مساعد كلاسورا','Classora assistant')}</h2><p>${text('كيف أقدر أساعدك اليوم؟','How can I help you today?')}</p></div>${button('closeAI','إغلاق','Close','close','cl286-ai-close')}<div id="cl286AIHost"></div><div class="cl286-week"><h3>${text('خطوة صغيرة، كل يوم','A small step, every day')}</h3><p>${text('راجع درسًا، جرّب سؤالًا، وابنِ معرفتك على مهلك.','Review a lesson, try a question, and learn at your own pace.')}</p>${button('progress','شاهد تقدّمك','View your progress','clock','cl286-text')}</div></aside>
 <nav class="cl286-mobile-nav" aria-label="Main navigation">${button('home','الرئيسية','Home','home','selected')}${button('subjects','المواد','Subjects','book')}${button('classes','صفوفي','Classes','users')}${button('chat','الشات','Chat','chat')}${button('settings','الإعدادات','Settings','settings')}</nav>`;
 root.append(dash);
 // Reuse the established book illustration rather than a flattened screenshot.
 const art=document.querySelector('.cl243-learning-art');if(art){const copy=art.cloneNode(true);copy.innerHTML=copy.innerHTML.replaceAll('cl243-','cl286-art-');dash.querySelector('.cl286-book').append(copy);}
 dash.addEventListener('click',e=>{const b=e.target.closest('[data-d-route]');if(b)go(b.dataset.dRoute)});
 const back=document.createElement('button');back.id='cl286Back';back.type='button';back.textContent='← Classora';back.addEventListener('click',()=>go('home'));root.append(back);
 window.addEventListener('click',e=>{if(e.target.closest?.('#classoraMobileLobbyBtn,#returnLobbyBtn,#mobileReturnLobbyBtn'))queueMicrotask(()=>go('home'))},true);
 window.addEventListener('resize',()=>requestAnimationFrame(positionAI));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAI()});
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 const p=$('lobbyProfileName');if(p)new MutationObserver(sync).observe(p,{subtree:true,childList:true,characterData:true});
 for(const id of ['studentDashXP','cl215DailyCount','cl215StartedCount'])if($(id))new MutationObserver(sync).observe($(id),{subtree:true,childList:true,characterData:true});
 document.addEventListener('classora-auth-settled',()=>{sync();positionAI()});
 go('home');
}
function ready(){if(document.querySelector('.cl243-learning-art')&&document.querySelector('.lobby-ai-card.cl250-chat-card')&&window.ClassoraConversation){init();return true}return false}
if(!ready()){const mo=new MutationObserver(()=>{if(ready())mo.disconnect()});mo.observe(document.body,{childList:true,subtree:true});setTimeout(()=>{mo.disconnect();init()},12000)}
})();
