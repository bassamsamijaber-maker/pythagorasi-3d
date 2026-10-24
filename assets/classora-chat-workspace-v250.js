/* Classora v250: real chat interface and compact desktop left/right rails. */
(()=>{'use strict';
const $=id=>document.getElementById(id);
const lex={
 ar:['مساعد كلاسورا','مركز يومك','المزيد','إخفاء المزيد','تحدي اليوم','كمّل تعلّمك','تقدّمي','راجع أخطائي','دروس بدأت فيها','عم بفكر بسؤالك…','ما زبط الرد. جرّب مرة ثانية.','اشرحلي أبسط','هات مثال','اختبرني','كمّل','صفوفي وواجباتي'],
 en:['Classora Assistant','Your day','More','Hide extras','Daily challenge','Continue learning','My progress','Review mistakes','Lessons started','Thinking…','Unable to answer. Try again.','Explain simply','Give example','Quiz me','Continue','Classes & homework'],
 es:['Asistente Classora','Tu día','Más','Ocultar extras','Reto diario','Continuar aprendiendo','Mi progreso','Repasar errores','Lecciones iniciadas','Pensando…','Inténtalo de nuevo','Explica fácil','Dame ejemplo','Ponme a prueba','Continúa','Clases y tareas'],
 ko:['Classora 도우미','오늘의 학습','더 보기','접기','오늘의 도전','학습 이어하기','내 진도','오답 복습','시작한 수업','생각하는 중…','다시 시도하세요','쉽게 설명','예시 보여 줘','퀴즈','계속','수업 및 숙제'],
 de:['Classora Assistent','Dein Tag','Mehr','Weniger','Tagesaufgabe','Weiterlernen','Mein Fortschritt','Fehler üben','Begonnene Lektionen','Ich überlege…','Versuch es erneut','Einfach erklären','Beispiel','Quiz','Weiter','Klassen & Aufgaben'],
 it:['Assistente Classora','La tua giornata','Altro','Nascondi','Sfida del giorno','Continua a studiare','Progressi','Rivedi errori','Lezioni iniziate','Sto pensando…','Riprova','Spiega facile','Un esempio','Quiz','Continua','Classi e compiti'],
 hi:['क्लासोरा सहायक','आज का अध्ययन','और','छिपाएँ','आज की चुनौती','पढ़ाई जारी रखें','मेरी प्रगति','गलतियाँ दोहराएँ','शुरू किए पाठ','सोच रहा हूँ…','फिर से कोशिश करें','आसान समझाओ','उदाहरण','मेरा टेस्ट','जारी रखो','कक्षाएँ और होमवर्क'],
 tr:['Classora Asistan','Bugünün','Daha fazla','Gizle','Günlük görev','Devam et','İlerlemem','Hatalarımı gözden geçir','Başlanan dersler','Düşünüyorum…','Tekrar dene','Basit anlat','Örnek ver','Beni sına','Devam','Sınıflar ve ödevler']
};
const creative={
 ar:[['اكتب قصة','اكتب قصة قصيرة مشوقة عن مغامرة تعليمية، مع شخصيات وحوار ونهاية جميلة.'],['عدّل نص','ساعدني أعدل النص التالي وأحسن أسلوبه مع الحفاظ على المعنى: '],['شرح مفصل','اشرح هذا الموضوع بالتفصيل وبخطوات وأمثلة: ']],
 en:[['Write a story','Write an original imaginative story with characters, dialogue and an ending about: '],['Rewrite text','Rewrite and improve this text, preserving the meaning: '],['Detailed explanation','Explain step by step with examples: ']],
 es:[['Crear historia','Escribe una historia original con personajes y diálogos sobre: '],['Editar texto','Mejora este texto conservando su sentido: '],['Explicar','Explica paso a paso con ejemplos: ']],
 ko:[['이야기 쓰기','다음 주제로 등장인물과 대화가 있는 이야기를 써 줘: '],['글 수정','뜻을 유지하면서 이 글을 다듬어 줘: '],['자세한 설명','다음을 단계별로 예시와 함께 설명해 줘: ']],
 de:[['Geschichte','Schreibe eine eigene Geschichte mit Dialog über: '],['Text überarbeiten','Überarbeite diesen Text, ohne den Sinn zu ändern: '],['Ausführlich erklären','Erkläre mit Schritten und Beispielen: ']],
 it:[['Crea storia','Scrivi una storia originale con dialoghi su: '],['Modifica testo','Migliora questo testo mantenendone il significato: '],['Spiega','Spiega con passaggi ed esempi: ']],
 hi:[['कहानी लिखो','इस विषय पर संवाद के साथ एक मौलिक कहानी लिखो: '],['पाठ सुधारो','अर्थ बदले बिना यह पाठ सुधारो: '],['विस्तार से समझाओ','उदाहरणों के साथ चरणबद्ध समझाओ: ']],
 tr:[['Hikâye yaz','Şu konuda diyaloglu özgün bir hikâye yaz: '],['Metni düzenle','Anlamı koruyarak şu metni düzenle: '],['Ayrıntılı anlat','Adımlarla ve örneklerle açıkla: ']]
};
const t=i=>(lex[document.documentElement.lang]||lex.en)[i];
const el=(tag,cls,str)=>{const x=document.createElement(tag);x.className=cls||'';if(str!==undefined)x.textContent=str;return x};
let card,left,right,host,marker,thread,more,expanded=false,busy=false,conversationGeneration=0;
const modelText={
 ar:['اسأل كلاسورا','جاري الاتصال بالنموذج…','النموذج التوليدي متصل','المساعد الأساسي · النموذج غير متصل','المساعد الأساسي · سجّل الدخول للتوليد','المساعد الأساسي · التوليد يحتاج موافقتك من الإعدادات','النموذج مشغول · إجابة أساسية','حل رياضي محسوب','إعادة الاتصال'],
 en:['Ask Classora','Connecting to model…','Generative model connected','Basic assistant · model unavailable','Basic assistant · sign in for generation','Basic assistant · enable AI consent in Settings','Model busy · basic answer','Calculated math answer','Reconnect'],
 es:['Pregunta a Classora','Conectando…','Modelo generativo conectado','Asistente básico · modelo no disponible','Asistente básico · inicia sesión','Asistente básico · autoriza IA en Ajustes','Modelo ocupado · respuesta básica','Respuesta matemática calculada','Reconectar'],
 ko:['Classora에 질문','모델 연결 중…','생성형 모델 연결됨','기본 도우미 · 모델 연결 안 됨','기본 도우미 · 로그인 필요','기본 도우미 · 설정에서 AI 동의 필요','모델 사용 중 · 기본 답변','계산된 수학 답변','다시 연결'],
 de:['Frag Classora','Verbindung wird hergestellt…','Sprachmodell verbunden','Basisassistent · Modell nicht verfügbar','Basisassistent · bitte anmelden','Basisassistent · KI-Zustimmung in Einstellungen','Modell ausgelastet · Basisantwort','Berechnete Mathematikantwort','Neu verbinden'],
 it:['Chiedi a Classora','Connessione al modello…','Modello generativo connesso','Assistente base · modello non disponibile','Assistente base · accedi','Assistente base · autorizza IA nelle impostazioni','Modello occupato · risposta base','Risposta matematica calcolata','Riconnetti'],
 hi:['Classora से पूछें','मॉडल से जुड़ रहा है…','जनरेटिव मॉडल जुड़ा है','बुनियादी सहायक · मॉडल उपलब्ध नहीं','बुनियादी सहायक · साइन इन करें','बुनियादी सहायक · सेटिंग में AI की सहमति दें','मॉडल व्यस्त · बुनियादी उत्तर','गणना किया गया उत्तर','फिर जोड़ें'],
 tr:['Classora’ya sor','Modele bağlanıyor…','Üretken model bağlı','Temel asistan · model kullanılamıyor','Temel asistan · giriş yap','Temel asistan · Ayarlar’da AI izni ver','Model meşgul · temel yanıt','Hesaplanan matematik yanıtı','Yeniden bağlan']
};
let modelState='idle';
function renderModelState(){
 const labels=modelText[document.documentElement.lang]||modelText.en;
 const reachable={ar:'الخدمة متاحة · أرسل سؤالًا للتجربة',en:'Service reachable · send a question to test',es:'Servicio disponible · envía una pregunta',ko:'서비스 연결 가능 · 질문을 보내 보세요',de:'Dienst erreichbar · sende eine Frage',it:'Servizio raggiungibile · invia una domanda',hi:'सेवा उपलब्ध · जाँचने के लिए प्रश्न भेजें',tr:'Hizmete erişiliyor · denemek için soru gönder'};
 const status=$('cl254ModelState');if(status){status.textContent=modelState==='reachable'?(reachable[document.documentElement.lang]||reachable.en):labels[({idle:0,connecting:1,connected:2,offline:3,signin:4,consent:5,busy:6,basic:7})[modelState]??0];status.dataset.state=modelState}
 const retry=$('cl254Reconnect');if(retry){retry.textContent=labels[8];retry.hidden=!['offline','busy'].includes(modelState)}
}
window.addEventListener('classora:ai-state',event=>{modelState=event.detail;renderModelState()});
window.addEventListener('classora:ai-reset',()=>{modelState='idle';renderModelState()});
function line(role,msg){
 const p=el('div','cl250-line cl250-'+role,String(msg));p.dir='auto';thread.append(p);
 while(thread.children.length>70)thread.firstElementChild.remove();
 thread.scrollTop=thread.scrollHeight;
 return p;
}
async function send(raw,compute,topic){
 if(!card||busy||!String(raw||'').trim())return;
 const generation=conversationGeneration;
 busy=true;card.classList.add('cl250-chat-active','cl254-thinking');card.setAttribute('aria-busy','true');
 line('user',String(raw).trim());
 const button=$('lobbyAISend');if(button)button.disabled=true;
 const progress=line('pending',t(9));
 const dots=el('span','cl254-dots');dots.setAttribute('aria-hidden','true');for(let i=0;i<3;i++)dots.append(el('i'));progress.append(dots);
 try{
  const result=await compute();
  if(generation!==conversationGeneration)return;
  const answer=typeof result==='string'&&result.trim()?result:t(10);
  progress.remove();
  const reply=line('bot',answer);
  if(topic?.title&&window.ClassoraConversation?.openTopic){
    const button=el('button','cl250-lesson-button',document.documentElement.lang==='ar'?'افتح درس '+topic.title:'Open lesson: '+(topic.en||topic.title));
    button.type='button';button.addEventListener('click',()=>window.ClassoraConversation.openTopic(topic));
    reply.after(button);
  }
  const fallback=$('lobbyAIReply');if(fallback)fallback.textContent=answer;
 }catch(e){progress.remove();if(generation===conversationGeneration)line('bot',t(10));console.warn('Classora chat reply',e?.message)}
 finally{busy=false;card.classList.remove('cl254-thinking');card.setAttribute('aria-busy','false');if(button)button.disabled=false;thread.scrollTop=thread.scrollHeight}
}
function update(){
 renderModelState();
 if(card?.querySelector('.cl252-creative-actions')){
  const entries=creative[document.documentElement.lang]||creative.en;
  card.querySelectorAll('.cl252-creative-button').forEach((b,i)=>{b.textContent=entries[i][0];b.title=entries[i][1]});
 }
 if(card){const name=$('lobbyAIName');if(name)name.textContent=t(0);
   card.querySelectorAll('[data-cl250-chat]').forEach(b=>b.textContent=t(Number(b.dataset.cl250Chat)));
 }
 if(right){
  const head=right.querySelector('h3');if(head)head.textContent=t(1);
  right.querySelectorAll('button[data-cl250-day]').forEach(b=>{const name=b.querySelector('strong');if(name)name.textContent=t(Number(b.dataset.cl250Day))});
  const started=$('cl215StartedCount')?.textContent?.trim()||'—';
  const foot=right.querySelector('.cl250-side-foot');if(foot)foot.textContent=t(8)+': '+started;
  const xp=$('studentDashXP')?.textContent?.trim();const xpCard=$('cl250XP');if(xpCard)xpCard.textContent=xp||'';
  for(const [i,id] of [[4,'cl215DailyCount'],[7,'cl215MistakeCount']]){
    const item=right.querySelector('[data-cl250-day="'+i+'"] small');
    if(item)item.textContent=$(id)?.textContent?.trim()||'—';
  }
 }
 if(more){more.textContent=t(expanded?3:2);more.setAttribute('aria-expanded',String(expanded))}
}
function reposition(){
 if(!card||!left||!host)return;
 if(window.innerWidth>=1000){if(card.parentElement!==left)left.append(card)}
 else if(card.parentElement!==host)marker.after(card);
}
function addChat(){
 card=document.querySelector('#platformLobby .lobby-ai-card');if(!card)return;
 host=card.parentElement;marker=document.createComment('AI original mobile location');card.before(marker);
 card.classList.add('cl250-chat-card');card.dataset.noTranslate='';
 thread=el('div','cl250-thread');thread.setAttribute('role','log');thread.setAttribute('aria-live','polite');
 $('lobbyAIReply')?.after(thread);
 const actions=el('div','cl250-chat-actions');
 const prompts=['مش فاهم، اشرحلي أبسط','هات مثال على آخر موضوع','اختبرني بآخر درس','كمل من آخر جواب'];
 [11,12,13,14].forEach((index,i)=>{
  const b=el('button','cl250-chat-chip');b.type='button';b.dataset.cl250Chat=index;
  b.addEventListener('click',()=>{
   const input=$('lobbyAIInput');if(!input)return;
   input.value=document.documentElement.lang==='ar'?prompts[i]:t(index);
   $('lobbyAISend')?.click();
  });actions.append(b);
 });
 const creativeButtons=el('div','cl252-creative-actions');
 creativeButtons.setAttribute('aria-label','Creative writing tools');
 creativeButtons.dataset.noTranslate='';
 for(let i=0;i<3;i++){
  const b=el('button','cl252-creative-button');
  b.type='button';b.dataset.creative=String(i);
  b.addEventListener('click',()=>{
   const input=$('lobbyAIInput');
   if(!input)return;
   const value=(creative[document.documentElement.lang]||creative.en)[i][1];
   input.value=value;input.dispatchEvent(new Event('input',{bubbles:true}));
   input.focus({preventScroll:true});
  });
  creativeButtons.append(b);
 }
 card.querySelector('.lobby-ai-input')?.before(actions,creativeButtons);
 $('lobbyAIInput')?.setAttribute('aria-label',t(0));
 const input=$('lobbyAIInput');let typingTimer;input?.addEventListener('input',()=>{card.classList.toggle('cl254-writing',!!input.value);clearTimeout(typingTimer);typingTimer=setTimeout(()=>card.classList.remove('cl254-writing'),900)});
 const state=el('div','cl254-state');state.setAttribute('role','status');const status=el('span');status.id='cl254ModelState';const retry=el('button','cl254-retry');retry.id='cl254Reconnect';retry.type='button';retry.addEventListener('click',()=>{window.dispatchEvent(new Event('classora:ai-reconnect'));input?.focus()});state.append(status,retry);card.querySelector('.lobby-ai-head')?.after(state);renderModelState();
}
function addRight(lobby){
 right=el('aside','cl250-right');
 right.id='cl250Day';
 right.setAttribute('aria-label','Daily learning');
 right.dataset.noTranslate='';
 right.append(el('h3','',t(1)));
 const buttons=[[4,'[data-cl215-open="challenge"]'],[5,'[data-cl-action="resume"]'],[6,'[data-cl-action="progress"]'],[7,'[data-cl215-open="mistakes"]']];
 for(const [i,selector]of buttons){
  const b=el('button','cl250-day-button');b.type='button';b.dataset.cl250Day=String(i);
  b.append(el('strong','',t(i)),el('small','','—'));
  b.addEventListener('click',()=>{
   let target=document.querySelector('#platformLobby '+selector);
   if(!target)target=document.querySelector('#platformLobby [data-cl-action="progress"]');
   target?.click();
  });
  right.append(b);
 }
 const homework=el('button','cl250-day-button');homework.type='button';homework.dataset.cl250Day='15';
 homework.append(el('strong','',''),el('small','','↗'));
 homework.addEventListener('click',()=>document.querySelector('#platformLobby [data-cl-action="classes"]')?.click());
 right.append(homework);
 const xp=el('div','cl250-xp');xp.id='cl250XP';right.append(xp);
 right.append(el('div','cl250-side-foot'));
 lobby.append(right);
 const boost=$('classoraLearningBoost');
 if(boost)new MutationObserver(update).observe(boost,{subtree:true,childList:true,characterData:true});
}
const extraText={
 ar:['تركيز 25 دقيقة','ابدأ','إيقاف مؤقت','إعادة','ملاحظة سريعة','اكتب هدفك للجلسة…','محادثة جديدة','طوّل الجواب','قصّر الجواب','حسّن آخر جواب','انتهت جلسة التركيز'],
 en:['25-minute focus','Start','Pause','Reset','Quick note','Your goal for this session…','New chat','Make it longer','Make it shorter','Improve your last answer','Focus session complete'],
 es:['Concentración: 25 minutos','Iniciar','Pausar','Reiniciar','Nota rápida','Tu objetivo…','Nuevo chat','Más largo','Más corto','Mejora tu respuesta anterior','Sesión terminada'],
 ko:['25분 집중','시작','일시 정지','초기화','빠른 메모','이번 학습 목표…','새 대화','더 길게','더 짧게','이전 답변을 개선해 줘','집중 시간 완료'],
 de:['25 Minuten Fokus','Start','Pause','Zurücksetzen','Notiz','Dein Lernziel…','Neuer Chat','Ausführlicher','Kürzer','Verbessere deine letzte Antwort','Fokuszeit beendet'],
 it:['Concentrazione: 25 minuti','Avvia','Pausa','Reimposta','Nota rapida','Il tuo obiettivo…','Nuova chat','Più lungo','Più breve','Migliora la tua ultima risposta','Sessione completata'],
 hi:['25 मिनट एकाग्रता','शुरू','रोकें','रीसेट','त्वरित नोट','इस सत्र का लक्ष्य…','नई बातचीत','लंबा करो','छोटा करो','पिछला उत्तर सुधारो','सत्र पूरा हुआ'],
 tr:['25 dakika odaklan','Başlat','Duraklat','Sıfırla','Hızlı not','Bu oturumdaki hedefin…','Yeni sohbet','Daha uzun','Daha kısa','Son yanıtını iyileştir','Odaklanma tamamlandı']
};
const et=i=>(extraText[document.documentElement.lang]||extraText.en)[i];
let remaining=1500,deadline=0,tick;
function updateExtras(){
 document.querySelectorAll('[data-cl253-text]').forEach(n=>n.textContent=et(Number(n.dataset.cl253Text)));
 const note=$('cl253Note');if(note)note.placeholder=et(5);
 const toggle=$('cl253FocusToggle');if(toggle)toggle.textContent=et(deadline?2:1);
}
function paintClock(){
 if(deadline)remaining=Math.max(0,Math.ceil((deadline-Date.now())/1000));
 const clock=$('cl253Clock');if(clock)clock.textContent=String(Math.floor(remaining/60)).padStart(2,'0')+':'+String(remaining%60).padStart(2,'0');
 if(deadline&&!remaining){deadline=0;clearInterval(tick);$('cl253FocusStatus').textContent=et(10);updateExtras()}
}
function addExtras(){
 const label=(tag,i)=>{const n=el(tag,'',et(i));n.dataset.cl253Text=i;return n};
 const reset=label('button',6);reset.type='button';reset.className='cl253-new';
 reset.addEventListener('click',()=>{if(!busy)window.dispatchEvent(new Event('classora:ai-reset'))});
 card.querySelector('.lobby-ai-head')?.after(reset);
 for(const i of [7,8,9]){const b=label('button',i);b.type='button';b.className='cl250-chat-chip';b.addEventListener('click',()=>{const input=$('lobbyAIInput');input.value=et(i);$('lobbyAISend')?.click()});card.querySelector('.cl250-chat-actions')?.append(b)}
 const focus=el('section','cl253-focus');focus.append(label('h4',0));
 const clock=el('output','cl253-clock','25:00');clock.id='cl253Clock';focus.append(clock);
 const row=el('div','cl253-controls');const toggle=el('button','',et(1));toggle.type='button';toggle.id='cl253FocusToggle';
 toggle.onclick=()=>{if(deadline){paintClock();deadline=0;clearInterval(tick)}else{if(!remaining)remaining=1500;deadline=Date.now()+remaining*1000;tick=setInterval(paintClock,500);$('cl253FocusStatus').textContent=''}updateExtras()};
 const restart=label('button',3);restart.type='button';restart.onclick=()=>{deadline=0;clearInterval(tick);remaining=1500;paintClock();updateExtras();$('cl253FocusStatus').textContent=''};
 row.append(toggle,restart);focus.append(row);
 const status=el('div');status.id='cl253FocusStatus';status.setAttribute('role','status');focus.append(status);right.append(focus);
 const noteWrap=el('section','cl253-note');const title=label('label',4);title.htmlFor='cl253Note';const note=el('textarea');note.id='cl253Note';note.maxLength=1000;note.rows=3;note.placeholder=et(5);noteWrap.append(title,note);right.append(noteWrap);
 window.addEventListener('classora:ai-reset',()=>{note.value='';deadline=0;clearInterval(tick);remaining=1500;paintClock();updateExtras()});
 updateExtras();
}
function addMore(front){
 const quick=front.querySelector('.cl214-quick');if(!quick||front.querySelector('#cl250More'))return;
 more=el('button','cl250-more');more.id='cl250More';more.type='button';quick.after(more);
 const ids=['cl214-catalog','cl214-live','cl214-exams'];
 const reveal=state=>{expanded=state;for(const id of ids){const node=$(id);if(node)node.hidden=!state}update()};
 more.addEventListener('click',()=>reveal(!expanded));
 front.addEventListener('click',event=>{
  const button=event.target.closest('[data-cl-section]');
  if(button&&ids.includes(button.dataset.clSection))reveal(true);
 },true);
 reveal(false);
}
function init(){
 const lobby=$('platformLobby'),front=$('classoraLearningFront');
 if(left||!lobby||!front||!lobby.querySelector('.lobby-ai-card'))return;
 left=el('aside','cl250-left');left.id='cl250Left';left.dataset.noTranslate='';
 lobby.append(left);addChat();addRight(lobby);addMore(front);reposition();update();
 window.ClassoraConversation={send,get busy(){return busy},open:()=>{card?.scrollIntoView({block:'nearest',behavior:'smooth'});$('lobbyAIInput')?.focus({preventScroll:true})}};
 window.addEventListener('resize',reposition,{passive:true});
 new MutationObserver(reposition).observe(lobby,{childList:true,subtree:true});
 addExtras();
 window.addEventListener('classora:ai-reset',()=>{conversationGeneration++;thread.replaceChildren();card.classList.remove('cl250-chat-active');const reply=$('lobbyAIReply');if(reply)reply.textContent='';});
 new MutationObserver(()=>{update();updateExtras()}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
}
function boot(){
 if($('classoraLearningFront')){init();return}
 document.addEventListener('classora:learning-front-ready',init,{once:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();