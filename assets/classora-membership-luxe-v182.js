/* Classora public membership visuals and country-aware seat descriptions.
 * All UI copy is customer-facing, no admin/API diagnostics.
 * Trial is a PRELAUNCH disclosure, never a checkout attempt.
 */
(()=>{"use strict";
const $=id=>document.getElementById(id);
const copy={
 ar:{hero:"خطتك. مستواك. مستقبل تعلّمك.",sub:"أدوات تناسب طريقة تعلّمك وتدريسك، وباقات واضحة بدون تعقيد.",
  popular:"الأكثر تميزًا",compare:"قارن قبل ما تختار",compareSub:"كل ميزة موضّحة حتى تعرف شو اللي بتحصل عليه.",
  tipHead:"نصيحة كلاسورا",tip:"إذا بدك تنظيم وأدوات يومية إضافية ابدأ بـ Plus. إذا بدك تجربة أغنى وتقارير وأدوات متقدمة، اختَر Premium.",
  trustHead:"اشترك وأنت مطمئن",trust:["تسعير واضح بعملة بلدك","دفع آمن عبر Paddle عند التفعيل","إلغاء التجديد قبل موعد الخصم"],trial:"تجربة واحدة لكل حساب، بدون بطاقة وبدون تجديد أو خصم تلقائي. التفعيل يحتاج اتصالًا.",
  annual:"الاشتراك السنوي يُدفع مقدمًا، وبدون تجربة مجانية.",
  compareRows:["تنظيم الدراسة والوضع المركّز","ملاحظات ومجلدات محادثات","بنك أسئلة وقوالب","مكتبة وتقويم وإنجازات","مظهر Premium وتأثيرات الشات","تقارير متقدمة (للمعلمين)"],
  extraStudent:"المقعد الإضافي للطالب: {m} شهريًا أو {y} سنويًا.",
  extraTeacher:"المقعد الإضافي للمعلم: {m} شهريًا أو {y} سنويًا.",
  includedClass:"الخطة تشمل 35 طالبًا يحددهم المعلم.",
  includedSchool:"الخطة تشمل 55 معلمًا مختارًا، ولا تشمل الطلاب.",
  currencyMsg:"الأسعار المحلية تقديرية من Paddle؛ المبلغ النهائي والضرائب يظهران بوضوح عند الدفع.",
  draft:"ما في باقة مختارة. اختَر Plus أو Premium لعرض ملخص السعر."},
 en:{hero:"Your plan. Your potential. Your learning.",sub:"Helpful tools for students and teachers, with simple transparent plans.",
  popular:"Featured plan",compare:"Compare before you choose",compareSub:"See what each tier includes at a glance.",
  tipHead:"Classora tip",tip:"Choose Plus for everyday organization. Choose Premium for a fuller experience with advanced tools and reports.",
  trustHead:"A clear, secure experience",trust:["Local currency preview","Secure Paddle checkout when launched","Cancel renewal before the next charge"],trial:"One trial per account. No card, renewal or automatic charge. An internet connection is required.",
  annual:"Annual plans are prepaid and do not include a free trial.",
  compareRows:["Planning and focus mode","Quick notes and chat folders","Question bank and templates","Library, calendar and achievements","Premium appearance and chat effects","Advanced reporting (teachers)"],
  extraStudent:"Extra student seat: {m}/month or {y}/year.",
  extraTeacher:"Extra teacher seat: {m}/month or {y}/year.",
  includedClass:"Includes 35 students selected by their teacher.",
  includedSchool:"Includes 55 selected teachers; students are not included.",
  currencyMsg:"Paddle previews local prices; the final charge and taxes will be shown before checkout.",
  draft:"No plan selected. Choose Plus or Premium to review the price."},
 es:{hero:"Tu plan. Tu potencial. Tu aprendizaje.",sub:"Herramientas prácticas y planes transparentes para estudiar y enseñar.",popular:"Plan destacado",compare:"Compara antes de elegir",compareSub:"Consulta lo que incluye cada nivel.",tipHead:"Consejo de Classora",tip:"Plus para organizarte día a día; Premium para más herramientas e informes.",trustHead:"Una experiencia clara y segura",trust:["Vista previa en moneda local","Pago seguro con Paddle al lanzarse","Cancela antes del próximo cobro"],trial:"Una prueba por cuenta. Sin tarjeta, renovación ni cobro automático. Requiere conexión.",annual:"El plan anual se paga por adelantado y no tiene prueba gratuita.",compareRows:["Organización y concentración","Notas y carpetas de chat","Preguntas y plantillas","Biblioteca, calendario y logros","Estilo Premium y efectos","Informes avanzados (docentes)"],extraStudent:"Estudiante adicional: {m}/mes o {y}/año.",extraTeacher:"Docente adicional: {m}/mes o {y}/año.",includedClass:"Incluye 35 alumnos seleccionados.",includedSchool:"Incluye 55 docentes seleccionados, no alumnos.",currencyMsg:"Paddle estima precios locales; el total final se confirma al pagar.",draft:"No has seleccionado un plan."},
 ko:{hero:"당신의 계획, 가능성, 배움.",sub:"학생과 교사를 위한 명확한 요금제와 학습 도구.",popular:"추천 요금제",compare:"요금제 비교",compareSub:"각 요금제의 혜택을 비교하세요.",tipHead:"Classora 추천",tip:"기본적인 정리는 Plus, 더 많은 도구와 보고서는 Premium을 선택하세요.",trustHead:"명확하고 안전한 서비스",trust:["현지 통화 가격 미리보기","출시 후 Paddle 보안 결제","다음 청구 전에 취소 가능"],trial:"계정당 한 번. 카드, 자동 갱신 및 자동 결제 없음. 인터넷 연결이 필요합니다.",annual:"연간 요금제는 선불이며 체험이 없습니다.",compareRows:["학습 계획 및 집중","메모 및 채팅 폴더","문제 은행 및 템플릿","자료실, 일정 및 성취","Premium 테마 및 효과","고급 보고서 (교사)"],extraStudent:"학생 추가 좌석: 월 {m} 또는 연 {y}.",extraTeacher:"교사 추가 좌석: 월 {m} 또는 연 {y}.",includedClass:"교사가 지정한 학생 35명 포함.",includedSchool:"선택한 교사 55명 포함, 학생 제외.",currencyMsg:"현지 가격은 Paddle 미리보기이며 최종 금액은 결제 시 표시됩니다.",draft:"선택한 요금제가 없습니다."},
 de:{hero:"Dein Tarif. Dein Potenzial.",sub:"Klare Tarife und nützliche Lernwerkzeuge.",popular:"Empfohlener Tarif",compare:"Tarife vergleichen",compareSub:"Sieh dir die enthaltenen Funktionen an.",tipHead:"Classora-Tipp",tip:"Plus für den Alltag, Premium für zusätzliche Werkzeuge und Berichte.",trustHead:"Klar und sicher",trust:["Preise in Landeswährung","Sicherer Paddle-Checkout nach Freigabe","Vor nächster Abbuchung kündigen"],trial:"Ein Test pro Konto. Keine Karte, Verlängerung oder automatische Abbuchung. Internet erforderlich.",annual:"Jahrespläne werden im Voraus bezahlt, ohne Probezeit.",compareRows:["Lernplanung und Fokus","Notizen und Chat-Ordner","Fragen und Vorlagen","Bibliothek, Kalender und Erfolge","Premium-Design und Effekte","Berichte (Lehrkräfte)"],extraStudent:"Zusätzlicher Schüler: {m}/Monat oder {y}/Jahr.",extraTeacher:"Zusätzliche Lehrkraft: {m}/Monat oder {y}/Jahr.",includedClass:"Enthält 35 ausgewählte Schüler.",includedSchool:"Enthält 55 ausgewählte Lehrkräfte, keine Schüler.",currencyMsg:"Paddle zeigt regionale Preise. Der Endbetrag erscheint vor der Zahlung.",draft:"Noch kein Tarif gewählt."},
 it:{hero:"Il tuo piano. Il tuo potenziale.",sub:"Strumenti utili e piani semplici per studenti e insegnanti.",popular:"Piano in evidenza",compare:"Confronta i piani",compareSub:"Scopri cosa comprende ogni livello.",tipHead:"Consiglio Classora",tip:"Plus per organizzarti ogni giorno; Premium per strumenti e report avanzati.",trustHead:"Chiarezza e sicurezza",trust:["Anteprima in valuta locale","Pagamento sicuro Paddle al lancio","Annulla prima del prossimo addebito"],trial:"Una prova per account. Nessuna carta, rinnovo o addebito automatico. Serve Internet.",annual:"Il piano annuale è prepagato senza prova gratuita.",compareRows:["Pianificazione e concentrazione","Note e cartelle chat","Domande e modelli","Biblioteca, calendario e obiettivi","Aspetto Premium ed effetti","Report avanzati (docenti)"],extraStudent:"Studente aggiuntivo: {m}/mese o {y}/anno.",extraTeacher:"Insegnante aggiuntivo: {m}/mese o {y}/anno.",includedClass:"Comprende 35 studenti selezionati.",includedSchool:"Comprende 55 docenti selezionati, studenti esclusi.",currencyMsg:"Paddle mostra prezzi locali; l'importo finale appare al checkout.",draft:"Nessun piano selezionato."},
 hi:{hero:"आपकी योजना। आपकी तरक्की।",sub:"छात्रों और शिक्षकों के लिए सरल और स्पष्ट योजनाएँ।",popular:"विशेष योजना",compare:"योजनाओं की तुलना",compareSub:"हर योजना की सुविधाएँ देखें।",tipHead:"Classora सुझाव",tip:"रोज़ाना व्यवस्था के लिए Plus और अतिरिक्त सुविधाओं के लिए Premium चुनें।",trustHead:"स्पष्ट और सुरक्षित",trust:["स्थानीय मुद्रा में कीमत","शुरू होने पर सुरक्षित Paddle भुगतान","अगले शुल्क से पहले रद्द करें"],trial:"हर खाते पर एक ट्रायल। कार्ड, नवीनीकरण या स्वचालित शुल्क नहीं। इंटरनेट ज़रूरी है।",annual:"वार्षिक प्लान अग्रिम भुगतान वाला है; ट्रायल नहीं।",compareRows:["पढ़ाई और फोकस","नोट्स और चैट फ़ोल्डर","प्रश्न बैंक और टेम्पलेट","लाइब्रेरी, कैलेंडर और उपलब्धियाँ","Premium डिज़ाइन और प्रभाव","शिक्षकों की रिपोर्ट"],extraStudent:"अतिरिक्त छात्र: {m}/माह या {y}/वर्ष।",extraTeacher:"अतिरिक्त शिक्षक: {m}/माह या {y}/वर्ष।",includedClass:"चुने गए 35 छात्र शामिल।",includedSchool:"चुने गए 55 शिक्षक शामिल, छात्र नहीं।",currencyMsg:"Paddle स्थानीय कीमत दिखाता है; अंतिम राशि भुगतान से पहले दिखाई जाएगी।",draft:"कोई योजना नहीं चुनी गई।"},
 tr:{hero:"Planın. Potansiyelin. Eğitimin.",sub:"Öğrenciler ve öğretmenler için net, kolay paketler.",popular:"Öne çıkan paket",compare:"Paketleri karşılaştır",compareSub:"Her paketin avantajlarını gör.",tipHead:"Classora önerisi",tip:"Günlük düzen için Plus, gelişmiş araçlar ve raporlar için Premium seç.",trustHead:"Açık ve güvenli",trust:["Yerel para birimiyle fiyat","Açılınca güvenli Paddle ödeme","Sonraki ödemeden önce iptal"],trial:"Hesap başına bir deneme. Kart, yenileme veya otomatik ücret yok. İnternet gerekir.",annual:"Yıllık plan peşin ödenir, deneme yoktur.",compareRows:["Planlama ve odaklanma","Notlar ve sohbet klasörleri","Soru bankası ve şablonlar","Kütüphane, takvim ve başarılar","Premium görünüm ve efektler","Gelişmiş raporlar (öğretmen)"],extraStudent:"Ek öğrenci: aylık {m} veya yıllık {y}.",extraTeacher:"Ek öğretmen: aylık {m} veya yıllık {y}.",includedClass:"Seçilen 35 öğrenci dahildir.",includedSchool:"Seçilen 55 öğretmen dahil, öğrenciler değil.",currencyMsg:"Paddle yerel fiyatları gösterir; son tutar ödeme öncesinde belirtilir.",draft:"Henüz paket seçilmedi."}
};
const icon={
spark:'<path d="m12 2 2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/>',
shield:'<path d="m12 2 8 4v6c0 4.5-2.6 7.6-8 10-5.4-2.4-8-5.5-8-10V6z"/><path d="m8 12 3 3 5-6"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 2v6m10-6v6M3 11h18"/>',
book:'<path d="M12 5c-3-2-6-2-9-1v16c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Zm0 0v16"/>',
chat:'<path d="M4 4h16v13H9l-5 4z"/><path d="M8 9h8m-8 4h5"/>',
crown:'<path d="m2 8 5 5 5-8 5 8 5-5-3 12H5z"/>',
check:'<path d="m4 12 5 5L20 6"/>',
arrow:'<path d="m4 16 6-6 4 4 6-8"/><path d="M15 6h5v5"/>'
};
function svg(name){return '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+icon[name]+'</svg>';}
function make(id,tag,cls,html){let e=document.getElementById(id);if(e)return e;e=document.createElement(tag);e.id=id;e.className=cls;if(html)e.innerHTML=html;return e;}
const hero=document.querySelector(".cl-hero-copy"),pricing=document.querySelector(".cl-pricing");
const compare=make("clLuxeCompare","section","cl-luxe-compare",'<div class="cl-luxe-head"><h2 id="clLuxeCompareHead"></h2><p id="clLuxeCompareDesc"></p></div><div class="cl-luxe-table-scroll"><table><thead><tr><th></th><th>PLUS</th><th>PREMIUM</th></tr></thead><tbody id="clLuxeRows"></tbody></table></div>');
const tip=make("clLuxeTip","aside","cl-luxe-tip",'<div class="cl-luxe-round">'+svg("spark")+'</div><div><h3 id="clLuxeTipHead"></h3><p id="clLuxeTipBody"></p></div>');
const trust=make("clLuxeTrust","section","cl-luxe-trust",'<h2 id="clLuxeTrustHead"></h2><div class="cl-luxe-trust-grid" id="clLuxeTrustItems"></div>');
const trial=make("clLuxeTrial","aside","cl-luxe-trial",'<div class="cl-luxe-round">'+svg("calendar")+'</div><p id="clLuxeTrialBody"></p>');
if(hero){hero.querySelector(".cl-eyebrow")?.classList.add("cl-luxe-kicker");hero.appendChild(make("clLuxeHeroAccent","div","cl-luxe-accent",svg("crown")+svg("book")+svg("arrow")));}
if(pricing&&pricing.parentElement){pricing.after(compare,tip,trust);pricing.appendChild(trial);}
const headline=$("cl-title"),subtitle=$("cl-subtitle");
const visual=document.querySelector(".cl-hero-art");if(visual)visual.classList.add("cl-luxe-orbit");
const planBtns=document.querySelectorAll(".cl-plan-select");
function update(state){
 const d=copy[state.lang]||copy.en;
 if(headline){headline.textContent=d.hero;}
 if(subtitle)subtitle.textContent=d.sub;
 const popup=document.querySelector(".cl-plan.premium .cl-plan-top span");
 if(popup)popup.textContent=d.popular;
 $("clLuxeCompareHead").textContent=d.compare;$("clLuxeCompareDesc").textContent=d.compareSub;
 const rows=$("clLuxeRows");rows.replaceChildren();
 const premiumOnly=new Set([3,4,5]);
 d.compareRows.forEach((label,i)=>{
   const tr=document.createElement("tr"),name=document.createElement("th");
   name.scope="row";name.textContent=label;tr.append(name);
   for(const isPremium of [false,true]){
    const cell=document.createElement("td");cell.textContent=(!premiumOnly.has(i)||isPremium)?"✓":"—";
    cell.className=(!premiumOnly.has(i)||isPremium)?"cl-luxe-yes":"cl-luxe-no";tr.append(cell);
   }
   rows.append(tr);
 });
 const faculty=state.kind==="teacher"||state.kind==="school";
 // Do not claim teacher-only report features for individual students.
 for(const row of rows.children){if(row.rowIndex===6){row.hidden=!faculty;}}
 $("clLuxeTipHead").textContent=d.tipHead;$("clLuxeTipBody").textContent=d.tip;
 $("clLuxeTrustHead").textContent=d.trustHead;
 const pills=$("clLuxeTrustItems");pills.replaceChildren();
 for(const [idx,message]of d.trust.entries()){const el=document.createElement("div");el.className="cl-luxe-trust-item";el.innerHTML=svg(idx===1?"shield":idx===2?"calendar":"check");const span=document.createElement("span");span.textContent=message;el.append(span);pills.append(el);}
 $("clLuxeTrialBody").textContent=state.period==="monthly"?d.trial:d.annual;
 trial.dataset.period=state.period;
 const info=window.ClassoraPriceLocalization, key=state.kind==="class"?"extra_student":"extra_teacher";
 const originalPrices=state.kind==="class"?[5,48]:[10,96];
 const money=i=>info?.priceFor(key,i===0?"monthly":"annual")||"₪"+new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(originalPrices[i]);
 const sideText=state.kind==="class"?d.extraStudent:d.extraTeacher;
 if(state.kind==="class"||state.kind==="school"){
   const ul=document.getElementById("cl-plus-features"),u2=document.getElementById("cl-premium-features");
   for(const host of [ul,u2]){
     const node=host?.querySelectorAll("li")?.[1];
     if(node)node.textContent=sideText.replace("{m}",money(0)).replace("{y}",money(1));
   }
   const hint=$("cl-seats-hint");if(hint)hint.textContent=state.kind==="class"?d.includedClass:d.includedSchool;
 }
 const currency=$("cl-currency-info");if(currency)currency.textContent=info?.getInfo()?.localized?d.currencyMsg:(info?.note(state.lang)||d.currencyMsg);
 document.querySelectorAll(".cl-plan li").forEach((li,i)=>{if(!li.querySelector("svg"))li.insertAdjacentHTML("afterbegin",svg("check"));});
 document.body.classList.toggle("cl-has-no-selection",!state.tier);
}
window.ClassoraMembershipLuxe=Object.freeze({update});
})();
