/* Classora v248: approachable assistant suggestions; uses the existing send button and auth flow. */
(()=>{'use strict';
const labels={
 ar:{title:'جرّب سؤالًا',examples:[['حل معادلة','حل 2x + 3 = 11 خطوة خطوة'],['افهم العلوم','اشرح لي الغازات الخاملة ببساطة'],['قواعد العربي','اشرح نائب الفاعل مع مثال']],placeholder:'اسأل عن درس أو مسألة…',send:'إرسال السؤال'},
 en:{title:'Try a question',examples:[['Solve an equation','Solve 2x + 3 = 11 step by step'],['Explore science','Explain noble gases simply'],['Arabic grammar','Explain نائب الفاعل with an example']],placeholder:'Ask about a lesson or equation…',send:'Send question'},
 es:{title:'Prueba una pregunta',examples:[['Una ecuación','Resuelve 2x + 3 = 11 paso a paso'],['Ciencias','Explica los gases nobles'],['Gramática','Explica نائب الفاعل con un ejemplo']],placeholder:'Pregunta sobre una lección o ecuación…',send:'Enviar pregunta'},
 ko:{title:'질문 예시',examples:[['방정식 풀기','2x + 3 = 11 풀이'],['과학','비활성 기체를 설명해 줘'],['아랍어 문법','نائب الفاعل 예시와 설명']],placeholder:'수업이나 방정식을 질문해 보세요…',send:'질문 보내기'},
 de:{title:'Probiere eine Frage',examples:[['Gleichung lösen','Löse 2x + 3 = 11 Schritt für Schritt'],['Naturwissenschaft','Erkläre Edelgase einfach'],['Arabische Grammatik','Erkläre نائب الفاعل mit Beispiel']],placeholder:'Frage nach einer Lektion oder Gleichung…',send:'Frage senden'},
 it:{title:'Prova una domanda',examples:[['Risolvi un’equazione','Risolvi 2x + 3 = 11 passo per passo'],['Scienze','Spiega i gas nobili semplicemente'],['Grammatica araba','Spiega نائب الفاعل con un esempio']],placeholder:'Chiedi una lezione o un’equazione…',send:'Invia domanda'},
 hi:{title:'एक सवाल पूछें',examples:[['समीकरण हल करें','Solve 2x + 3 = 11 step by step'],['विज्ञान','अक्रिय गैसें समझाओ'],['अरबी व्याकरण','نائب الفاعل उदाहरण सहित समझाओ']],placeholder:'पाठ या गणित का सवाल पूछें…',send:'सवाल भेजें'},
 tr:{title:'Bir soru dene',examples:[['Denklem çöz','2x + 3 = 11 denklemini adım adım çöz'],['Fen bilimleri','Soy gazları basitçe açıkla'],['Arapça dil bilgisi','نائب الفاعل konusunu örnekle anlat']],placeholder:'Bir ders ya da denklem sor…',send:'Soruyu gönder'}
};
const l=()=>labels[document.documentElement.lang]||labels.en;
let strip=null;
function build(){
 const input=document.getElementById('lobbyAIInput');
 const send=document.getElementById('lobbyAISend');
 const card=input?.closest('.lobby-ai-card');
 if(!input||!send||!card)return;
 if(!strip||!strip.isConnected){
  strip=document.createElement('div');strip.id='cl248AIPrompts';strip.className='cl248-ai-prompts';strip.dataset.noTranslate='';
  const label=document.createElement('div');label.id='cl248AIPromptLabel';label.className='cl248-ai-prompt-label';strip.append(label);
  for(let i=0;i<3;i++){
   const button=document.createElement('button');button.type='button';button.className='cl248-ai-prompt';button.dataset.index=String(i);
   button.addEventListener('click',()=>{
    const source=l().examples[i]?.[1];if(!source)return;
    input.value=source;input.dispatchEvent(new Event('input',{bubbles:true}));
    // Keep existing handlers, checking, lesson navigation and network behavior unchanged.
    send.click();
   });
   strip.append(button);
  }
  card.querySelector('.lobby-ai-input')?.before(strip);
 }
 render();
}
function render(){
 if(!strip?.isConnected)return;
 const t=l();const title=strip.querySelector('#cl248AIPromptLabel');if(title)title.textContent=t.title;
 for(const b of strip.querySelectorAll('button')){
  const i=Number(b.dataset.index);b.textContent=t.examples[i]?.[0]||'';
  b.title=t.examples[i]?.[1]||'';
 }
 const input=document.getElementById('lobbyAIInput');
 if(input){input.placeholder=t.placeholder;input.setAttribute('aria-label',t.placeholder)}
 const send=document.getElementById('lobbyAISend');
 if(send)send.setAttribute('aria-label',t.send);
}
function init(){
 build();
 new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();