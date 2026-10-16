/* Classora membership feature catalog for the eight site languages.
   These are plan descriptions for launch readiness. Feature enforcement must
   happen on the server after Paddle verification; this file grants no access. */
(() => {
"use strict";
const dict={
ar:{
 plus:["صفحة رئيسية قابلة لترتيب الأدوات","وضع التركيز أثناء الدراسة","ملاحظات سريعة محفوظة","متابعة الاستمرارية اليومية (Streak)","مجلدات لتنظيم محادثاتك","بنك أسئلة للتدريب والمراجعة","مقارنة نتائج الاختبارات السابقة","قوالب جاهزة لتنظيم التعلّم"],
 premium:["كل مميزات Plus","مصمّم كامل لألوان وشكل الواجهة","ملف شخصي بحركات مميزة","حفظ حتى 10 تصاميم للمظهر","إحصاءات التقدّم والإنجازات","تقويم للمذاكرة والمواعيد","مكتبة تعلّم للمواد","نسخ متنوعة من الأسئلة A / B / C","جدولة المهام والاختبارات","تقارير متقدمة عن الأداء","تحليلات للصفوف (للمعلمين)","شهادات رقمية للإنجاز","خلفيات وتأثيرات خاصة بالمحادثات","شارة Premium مميزة","تنزيل الدروس المتاحة للدراسة دون اتصال"],
 student:["خطة مخصصة لحساب طالب","الامتحانات والوظائف المرسلة من المعلم تبقى مجانية"],
 teacher:["خطة مخصصة لحساب معلم","الأدوات الإضافية للتمارين والاختبارات والإدارة بحسب مستوى الخطة"],
 class:["حتى 35 طالبًا يحددهم المعلم ضمن الخطة","مقاعد إضافية للطلاب: ₪5 شهريًا أو ₪48 سنويًا لكل مقعد","الاشتراك يغطي الطلاب المختارين فقط، ولا يغيّر اشتراك المعلم"],
 school:["حتى 55 معلمًا يختارهم مسؤول المدرسة","مقاعد إضافية للمعلمين: ₪10 شهريًا أو ₪96 سنويًا لكل مقعد","لا تشمل الخطة اشتراكات الطلاب"],
 note:"قائمة الميزات المخططة للاشتراك؛ قد تختلف جاهزية بعضها عند الإطلاق. لا يوجد دفع حقيقي حاليًا.",
 base:"أساسيات Classora مجانية: دخول الصفوف والوظائف والامتحانات والمسابقات التي يرسلها المعلم والمحادثات الأساسية.",
 price:"السعر الأساسي بالشيكل الإسرائيلي (ILS). السعر بعملة بلدك والضرائب يظهران في صفحة الدفع النهائية بعد تفعيل الدفع.",
 roleStudent:"باقات الطلاب",
 roleTeacher:"باقات المعلمين",
 roleClass:"باقات الصفوف للمعلمين",
 roleSchool:"باقات المدارس",
 roleGuest:"استعرض الأسعار؛ سجل الدخول لتحديد الباقات المناسبة لحسابك.",
 private:"صفحة الاشتراكات العامة، وليست لوحة إدارة أو حساب المنشئ."
},
en:{
 plus:["Drag-and-arrange home dashboard","Distraction-free focus mode","Saved quick notes","Daily study streak tracking","Chat folders for conversations","Practice question bank","Compare past test results","Ready-to-use learning templates"],
 premium:["Everything in Plus","Full interface and color theme designer","Animated premium profile","Save up to 10 custom themes","Progress and achievement tracking","Study calendar and reminders","Personal learning library","Multiple test variants A / B / C","Schedule assignments and tests","Advanced performance reports","Class insights (teachers)","Digital achievement certificates","Custom chat backgrounds and effects","Distinctive Premium badge","Download supported lessons for offline use"],
 student:["For individual student accounts","Teacher-assigned tasks and exams remain free"],
 teacher:["For individual teacher accounts","Additional practice, assessment and management tools by tier"],
 class:["Cover up to 35 teacher-selected students","Extra student seats: ₪5/month or ₪48/year each","Only selected student accounts are covered; teacher tier is separate"],
 school:["Cover up to 55 selected teacher accounts","Extra teacher seats: ₪10/month or ₪96/year each","Student subscriptions are not included"],
 note:"These are planned subscription benefits. Some may not be ready at launch. Real payments are currently disabled.",
 base:"Core Classora stays free: join classes, complete teacher-assigned exams, homework and competitions, and use basic chat.",
 price:"Base prices are in Israeli shekels (ILS). Checkout may show the buyer's local currency and applicable taxes when live checkout is enabled.",
 roleStudent:"Student plans",
 roleTeacher:"Teacher plans",
 roleClass:"Class plans for teachers",
 roleSchool:"School plans",
 roleGuest:"Browse pricing; sign in to see plans suitable for your account.",
 private:"Public subscription page, not a creator or administration dashboard."
},
es:{
 plus:["Panel de inicio reorganizable","Modo concentración","Notas rápidas guardadas","Racha diaria de estudio","Carpetas para chats","Banco de preguntas de práctica","Comparación de resultados","Plantillas de aprendizaje"],
 premium:["Todo lo incluido en Plus","Diseñador de temas y colores","Perfil animado Premium","Guardar hasta 10 temas","Progreso y logros","Calendario de estudio","Biblioteca de aprendizaje","Variantes de examen A / B / C","Programación de tareas y exámenes","Informes avanzados","Análisis de clases (docentes)","Certificados digitales","Fondos y efectos de chat","Distintivo Premium","Lecciones disponibles sin conexión"],
 student:["Para cuentas de estudiantes","Los exámenes y tareas asignados siguen siendo gratuitos"],
 teacher:["Para cuentas docentes","Herramientas adicionales según el nivel"],
 class:["Hasta 35 estudiantes seleccionados","Plaza extra: ₪5/mes o ₪48/año","Solo cubre a alumnos elegidos, no al docente"],
 school:["Hasta 55 cuentas docentes seleccionadas","Plaza docente extra: ₪10/mes o ₪96/año","No incluye suscripciones de alumnos"],
 note:"Beneficios previstos. Algunas funciones podrían no estar listas al lanzamiento. Los pagos reales están desactivados.",
 base:"Classora básico sigue siendo gratis: clases, tareas, exámenes, concursos asignados y chat básico.",
 price:"Precios base en ILS (₪). El pago final podrá mostrarse en moneda local e incluir impuestos.",
 roleStudent:"Planes de estudiante",roleTeacher:"Planes docentes",roleClass:"Planes de clase",roleSchool:"Planes escolares",
 roleGuest:"Consulta los precios; inicia sesión para ver planes adecuados.",
 private:"Página pública de suscripciones, no panel del creador."
},
ko:{
 plus:["홈 화면 도구 정렬","집중 학습 모드","빠른 메모 저장","연속 학습일 추적","채팅 폴더","연습 문제 은행","시험 결과 비교","학습 템플릿"],
 premium:["Plus의 모든 기능","전체 화면 테마 디자이너","애니메이션 프로필","테마 최대 10개 저장","진도 및 성취 기록","학습 캘린더","개인 학습 자료실","시험 A / B / C 버전","과제 및 시험 예약","고급 성적 보고서","학급 분석 (교사)","디지털 수료증","채팅 배경 및 효과","Premium 배지","오프라인 강의 다운로드"],
 student:["학생 계정 전용","교사 과제 및 시험은 계속 무료"],
 teacher:["교사 계정 전용","등급별 추가 평가 및 관리 도구"],
 class:["교사가 선택한 학생 최대 35명","추가 학생: 월 ₪5 또는 연 ₪48","선택 학생만 포함, 교사는 별도"],
 school:["선택한 교사 최대 55명","추가 교사: 월 ₪10 또는 연 ₪96","학생 구독은 포함되지 않음"],
 note:"예정된 혜택입니다. 일부 기능은 출시 시 준비되지 않을 수 있으며 실제 결제는 꺼져 있습니다.",
 base:"기본 Classora는 무료입니다: 학급 참가, 교사 과제, 시험, 대회 및 기본 채팅.",
 price:"기본 가격은 이스라엘 셰켈(ILS)입니다. 결제 시 현지 통화 및 세금이 적용될 수 있습니다.",
 roleStudent:"학생 요금제",roleTeacher:"교사 요금제",roleClass:"학급 요금제",roleSchool:"학교 요금제",
 roleGuest:"가격을 확인하고 로그인하면 계정에 맞는 요금제를 볼 수 있습니다.",
 private:"이 페이지는 공개 요금제 페이지이며 관리자 화면이 아닙니다."
},
de:{
 plus:["Startseite frei anordnen","Konzentrationsmodus","Gespeicherte Kurznotizen","Tägliche Lernserie","Chat-Ordner","Übungsfragenbank","Testergebnisse vergleichen","Lernvorlagen"],
 premium:["Alle Plus-Vorteile","Vollständiger Theme-Designer","Animiertes Premium-Profil","Bis zu 10 Designs speichern","Fortschritt und Erfolge","Lernkalender","Persönliche Lernbibliothek","Testvarianten A / B / C","Aufgaben und Tests planen","Erweiterte Leistungsberichte","Klassenanalysen (Lehrkräfte)","Digitale Zertifikate","Chat-Hintergründe und Effekte","Premium-Abzeichen","Unterrichtsmaterial offline"],
 student:["Für Schülerkonten","Zugewiesene Aufgaben und Tests bleiben kostenlos"],
 teacher:["Für Lehrerkonten","Zusatzwerkzeuge je Tarif"],
 class:["Bis zu 35 ausgewählte Schüler","Zusatzschüler: ₪5/Monat oder ₪48/Jahr","Nur ausgewählte Schüler, Lehrkräfte separat"],
 school:["Bis zu 55 ausgewählte Lehrkräfte","Zusatzlehrkraft: ₪10/Monat oder ₪96/Jahr","Schülerabos nicht enthalten"],
 note:"Geplante Tarifleistungen. Einige Funktionen sind zum Start eventuell noch nicht verfügbar. Live-Zahlungen sind deaktiviert.",
 base:"Classora-Grundfunktionen bleiben kostenlos: Klassen, zugewiesene Tests, Aufgaben, Wettbewerbe und Basis-Chat.",
 price:"Grundpreise in israelischen Schekel (ILS). Beim Checkout können lokale Währung und Steuern gelten.",
 roleStudent:"Schülertarife",roleTeacher:"Lehrertarife",roleClass:"Klassentarife",roleSchool:"Schultarife",
 roleGuest:"Preise ansehen; anmelden, um passende Tarife zu sehen.",
 private:"Öffentliche Tarifseite, keine Verwaltungsseite."
},
it:{
 plus:["Home riordinabile","Modalità concentrazione","Note rapide salvate","Serie giornaliera di studio","Cartelle chat","Banca domande","Confronto dei test","Modelli di apprendimento"],
 premium:["Tutti i vantaggi Plus","Designer di temi e colori","Profilo Premium animato","Salva fino a 10 temi","Progressi e traguardi","Calendario di studio","Biblioteca didattica","Varianti di test A / B / C","Programmazione di compiti e test","Report avanzati","Analisi classe (docenti)","Certificati digitali","Sfondi ed effetti chat","Distintivo Premium","Lezioni scaricabili offline"],
 student:["Per account studenti","I compiti e test assegnati restano gratuiti"],
 teacher:["Per account insegnanti","Strumenti aggiuntivi per livello"],
 class:["Fino a 35 studenti selezionati","Studente extra: ₪5/mese o ₪48/anno","Solo studenti selezionati, docente escluso"],
 school:["Fino a 55 insegnanti selezionati","Docente extra: ₪10/mese o ₪96/anno","Non include abbonamenti studenti"],
 note:"Funzionalità previste. Alcune potrebbero non essere pronte al lancio. Pagamenti reali disattivati.",
 base:"Le funzioni base di Classora restano gratuite: classi, compiti, esami, gare e chat essenziale.",
 price:"Prezzi base in shekel israeliani (ILS). Al pagamento possono applicarsi valuta locale e imposte.",
 roleStudent:"Piani studenti",roleTeacher:"Piani insegnanti",roleClass:"Piani classe",roleSchool:"Piani scuola",
 roleGuest:"Consulta i prezzi; accedi per vedere i piani del tuo account.",
 private:"Pagina pubblica degli abbonamenti, non pannello del creatore."
},
hi:{
 plus:["होम स्क्रीन पर टूल व्यवस्थित करें","ध्यान केंद्रित करने का मोड","त्वरित नोट्स सेव करें","रोज़ की पढ़ाई की लड़ी","चैट फ़ोल्डर","अभ्यास प्रश्न बैंक","परीक्षा परिणाम की तुलना","तैयार अध्ययन टेम्पलेट"],
 premium:["Plus की सभी सुविधाएँ","पूरा थीम डिज़ाइनर","एनिमेटेड Premium प्रोफ़ाइल","10 थीम तक सेव करें","प्रगति और उपलब्धियाँ","पढ़ाई का कैलेंडर","सीखने की लाइब्रेरी","परीक्षा के A / B / C रूप","कार्य और परीक्षा शेड्यूल","विस्तृत प्रदर्शन रिपोर्ट","कक्षा विश्लेषण (शिक्षक)","डिजिटल प्रमाणपत्र","चैट बैकग्राउंड और प्रभाव","Premium बैज","ऑफ़लाइन पाठ डाउनलोड"],
 student:["छात्र खातों के लिए","शिक्षक के दिए कार्य और परीक्षाएँ मुफ़्त रहेंगी"],
 teacher:["शिक्षक खातों के लिए","स्तर के अनुसार अतिरिक्त उपकरण"],
 class:["चुने गए 35 छात्रों तक","अतिरिक्त छात्र: ₪5/माह या ₪48/वर्ष","केवल चुने छात्र, शिक्षक अलग"],
 school:["चुने गए 55 शिक्षकों तक","अतिरिक्त शिक्षक: ₪10/माह या ₪96/वर्ष","छात्र सदस्यता शामिल नहीं"],
 note:"यह योजनाबद्ध सुविधाएँ हैं; कुछ शुरू में उपलब्ध न हों। वास्तविक भुगतान अभी बंद है।",
 base:"Classora की मूल सुविधाएँ मुफ़्त हैं: कक्षाएँ, दिए गए कार्य, परीक्षाएँ, प्रतियोगिताएँ और सामान्य चैट।",
 price:"मूल कीमत इज़राइली शेकेल (ILS) में है। चेकआउट पर स्थानीय मुद्रा और कर दिख सकते हैं।",
 roleStudent:"छात्र प्लान",roleTeacher:"शिक्षक प्लान",roleClass:"कक्षा प्लान",roleSchool:"स्कूल प्लान",
 roleGuest:"कीमत देखें; खाते के अनुसार प्लान के लिए लॉग इन करें।",
 private:"यह सार्वजनिक सदस्यता पृष्ठ है, निर्माता का पैनल नहीं।"
},
tr:{
 plus:["Ana sayfayı düzenleme","Odaklanma modu","Kaydedilen hızlı notlar","Günlük çalışma serisi","Sohbet klasörleri","Alıştırma soru bankası","Test sonuçlarını karşılaştırma","Hazır öğrenme şablonları"],
 premium:["Plus'taki tüm özellikler","Tam tema ve renk tasarımcısı","Animasyonlu Premium profil","10 tema kaydetme","İlerleme ve başarılar","Çalışma takvimi","Öğrenme kütüphanesi","A / B / C test sürümleri","Görev ve sınav planlama","Gelişmiş performans raporları","Sınıf analizi (öğretmenler)","Dijital sertifikalar","Sohbet arka planları ve efektler","Premium rozeti","Çevrimdışı ders indirme"],
 student:["Öğrenci hesapları için","Öğretmen ödevleri ve sınavları ücretsiz kalır"],
 teacher:["Öğretmen hesapları için","Seviyeye göre ek değerlendirme ve yönetim araçları"],
 class:["Öğretmenin seçtiği en fazla 35 öğrenci","Ek öğrenci: aylık ₪5 veya yıllık ₪48","Sadece seçilen öğrenciler dahil, öğretmen ayrı"],
 school:["Seçilen en fazla 55 öğretmen","Ek öğretmen: aylık ₪10 veya yıllık ₪96","Öğrenci üyelikleri dahil değil"],
 note:"Bunlar planlanan özelliklerdir. Bazıları açılışta hazır olmayabilir. Gerçek ödeme kapalıdır.",
 base:"Temel Classora ücretsiz kalır: sınıflar, öğretmen ödevleri, sınavlar, yarışmalar ve temel sohbet.",
 price:"Temel fiyatlar İsrail şekeli (ILS) cinsinden. Ödeme sırasında yerel para birimi ve vergiler gösterilebilir.",
 roleStudent:"Öğrenci planları",roleTeacher:"Öğretmen planları",roleClass:"Sınıf planları",roleSchool:"Okul planları",
 roleGuest:"Fiyatları inceleyin; hesabınıza uygun planlar için giriş yapın.",
 private:"Bu genel üyelik sayfasıdır, kurucu yönetim ekranı değildir."
}
};
function forPlan(lang,kind,tier){
 const d=dict[lang]||dict.en;
 const items=tier==="premium"?d.premium:d.plus;
 // Classroom plans cover student benefit tiers; school plans cover teachers.
 // Separate category details are displayed at the beginning of each tier.
 return [...d[kind],...items];
}
window.ClassoraMemberPlanInfo=Object.freeze({
 get:(lang,kind,tier)=>forPlan(lang,kind,tier),
 text:(lang,key)=>(dict[lang]||dict.en)[key]||dict.en[key]||"",
 supported:Object.keys(dict)
});
})();