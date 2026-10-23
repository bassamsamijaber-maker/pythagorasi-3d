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
const t=i=>(lex[document.documentElement.lang]||lex.en)[i];
const el=(tag,cls,str)=>{const x=document.createElement(tag);x.className=cls||'';if(str!==undefined)x.textContent=str;return x};
let card,left,right,host,marker,thread,more,expanded=false,busy=false;
function line(role,msg){
 const p=el('div','cl250-line cl250-'+role,String(msg));p.dir='auto';thread.append(p);
 while(thread.children.length>70)thread.firstElementChild.remove();
 thread.scrollTop=thread.scrollHeight;
 return p;
}
async function send(raw,compute,topic){
 if(!card||busy||!String(raw||'').trim())return;
 busy=true;card.classList.add('cl250-chat-active');
 line('user',String(raw).trim());
 const button=$('lobbyAISend');if(button)button.disabled=true;
 const progress=line('pending',t(9));
 try{
  const result=await compute();
  const answer=typeof result==='string'&&result.trim()?result:t(10);
  progress.remove();
  const reply=line('bot',answer);
  if(topic?.title&&window.ClassoraConversation?.openTopic){
    const button=el('button','cl250-lesson-button',document.documentElement.lang==='ar'?'افتح درس '+topic.title:'Open lesson: '+(topic.en||topic.title));
    button.type='button';button.addEventListener('click',()=>window.ClassoraConversation.openTopic(topic));
    reply.after(button);
  }
  const fallback=$('lobbyAIReply');if(fallback)fallback.textContent=answer;
 }catch(e){progress.remove();line('bot',t(10));console.warn('Classora chat reply',e?.message)}
 finally{busy=false;if(button)button.disabled=false;thread.scrollTop=thread.scrollHeight}
}
function update(){
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
 if(window.innerWidth>=1500){if(card.parentElement!==left)left.append(card)}
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
 card.querySelector('.lobby-ai-input')?.before(actions);
 card.querySelector('.lobby-ai-input input')?.setAttribute('aria-label',t(0));
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
 if(!lobby||!front||!lobby.querySelector('.lobby-ai-card'))return;
 left=el('aside','cl250-left');left.id='cl250Left';left.dataset.noTranslate='';
 lobby.append(left);addChat();addRight(lobby);addMore(front);reposition();update();
 window.ClassoraConversation={send,get busy(){return busy},open:()=>{card?.scrollIntoView({block:'nearest',behavior:'smooth'});$('lobbyAIInput')?.focus({preventScroll:true})}};
 window.addEventListener('resize',reposition,{passive:true});
 new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
}
function boot(){
 if($('classoraLearningFront')){init();return}
 document.addEventListener('classora:learning-front-ready',init,{once:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();