import {initializeApp,getApps} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import {getFirestore,doc,getDoc} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
const firebaseConfig={apiKey:"AIzaSyAj97oo6iQ9mK0Va6gYivsvnicN14LUYN0",authDomain:"pythagorasi-school.firebaseapp.com",projectId:"pythagorasi-school",storageBucket:"pythagorasi-school.firebasestorage.app",messagingSenderId:"349960442962",appId:"1:349960442962:web:53d13a319dfdc096187b8b"};
const app=getApps()[0]||initializeApp(firebaseConfig);
const auth=getAuth(app),db=getFirestore(app),$=id=>document.getElementById(id);
const langs=["ar","en","es","ko","de","it","hi","tr"];
const keys="back|title1|title2|subtitle|high1|high2|high3|login|adminTitle|adminCaption|plansLabel|plansHeading|beta|typeLabel|student|teacher|class|school|cycleLabel|monthly|annual|plusTag|premiumTag|plusDescription|premiumDescription|choosePlus|choosePremium|termMonth|termYear|seatsLabel|seatsHint|seat|paymentTitle|paymentIntro|paymentNote|summaryLabel|periodLabel|seatsExtra|totalLabel|totalNote|continue|security|faqTitle|faq1|answer1|faq2|answer2|faq3|answer3|privacy|terms|home|guestTitle|guestMessage|studentTitle|teacherTitle|adminAccountTitle|checked|unavailable|prelaunch|adminFree|mustLogin".split("|");
const translationRows={
ar:["العودة للموقع","تعلّم أكثر.","بطريقتك.","خطط واضحة للطلاب والمعلمين والصفوف. التعلّم الأساسي يبقى متاحًا للجميع.","بدون تعقيد","خطط تناسب حسابك","إلغاء التجديد بسهولة","تسجيل الدخول","كل مميزات Premium مفتوحة للأدمن","بدون شراء اشتراك. تقدر تستعرض كل أنواع الخطط.","اختيار الخطة","اختر اشتراكك المناسب","الأسعار معلنة • الدفع قريبًا","نوع الاشتراك","طالب","معلم","صف","مدرسة","طريقة الاشتراك","شهري","سنوي · وفر 20%","الأكثر مرونة","التجربة الكاملة","أدوات إضافية لتتعلّم وتنظّم وقتك.","كل Plus مع أدوات متقدمة وتخصيص أكبر.","ترقية إلى Plus","ترقية إلى Premium","شهريًا","سعر السنة كاملًا","عدد المقاعد المشمولة","تقدر تختار عدد المقاعد. الزيادة بسعر إضافي.","مقعد","الدفع ببساطة ووضوح","اختار باقتك وشوف المبلغ بوضوح. Paddle رح يعالج الدفع بأمان عند تفعيل الدفع الحقيقي.","رسومات وسائل الدفع للتوضيح فقط؛ التوفر يعتمد على بلدك وجهازك ودعم Paddle.","ملخصك","الفترة","مقاعد إضافية","المبلغ الأساسي","قبل الضرائب المحتملة. السعر النهائي يظهر قبل تأكيد الشراء.","ترقية الآن","الدفع الحقيقي مش مُفعّل بعد. ما في خصم أو تفعيل تلقائي.","أسئلة سريعة","هل الطلاب المجانيين بقدروا يحلوا الامتحانات؟","نعم، الوظائف والامتحانات والمسابقات المرسلة من المعلم تبقى متاحة للجميع.","شو بيفتح اشتراك الصف؟","بشمل 35 طالب يختارهم المعلم، مع إمكانية إضافة مقاعد.","هل اشتراك المدرسة يشمل الطلاب؟","لا، هو مخصص لحسابات المعلمين المختارين فقط.","الخصوصية","الشروط","الموقع الرئيسي","سجّل دخولك لتظهر خططك","نوع حسابك بيتحدد تلقائيًا بعد تسجيل الدخول.","أهلًا بالطالب","أهلًا بالمعلم","أهلًا بالأدمن — Premium كامل","تم التحقق من حساب: ","تعذر التحقق من صلاحيات حسابك. حدّث الصفحة أو سجّل الدخول.","الخطط صارت عامة، لكن الدفع الحقيقي لسه مش متاح. رح نفعّله بعد اختبارات الأمان.","أنت أدمن، كل باقات Premium متاحة إلك بدون دفع.","سجّل دخولك بكلاسورا أولًا."],
en:["Back to Classora","Learn more.","Your way.","Clear plans for students, teachers and classrooms. Core learning remains available for everyone.","Simple and clear","Plans for your account","Easy renewal control","Sign in","All Premium benefits for admins","No purchase required. Explore all plan types.","MEMBERSHIP PLANS","Choose your plan","Prices published · Checkout coming soon","Plan type","Student","Teacher","Class","School","Billing period","Monthly","Annual · save 20%","Flexible choice","Full experience","Extra tools to learn and stay organized.","Everything in Plus, with advanced tools.","Upgrade to Plus","Upgrade to Premium","per month","total per year","Included seats","Choose your seats. Extras cost more.","seats","Simple, secure checkout","Choose your plan and review the amount. Paddle will handle payments securely when live checkout is ready.","Payment illustrations only; availability depends on location, device and Paddle.","Order summary","Period","Extra seats","Base amount","Before possible taxes. Final amount appears before purchase.","Upgrade now","Live payments are not enabled yet. No charges or automatic activation.","Quick questions","Can free students take exams?","Yes, teacher-assigned homework, exams and competitions remain available to all.","What does a class plan include?","Up to 35 students selected by the teacher, with optional extra seats.","Does a school plan include students?","No, it only covers selected teacher accounts.","Privacy","Terms","Main website","Sign in to see your plans","Your account role is detected automatically on sign-in.","Welcome, Student","Welcome, Teacher","Welcome, Admin — full Premium","Verified account: ","Could not verify your permissions. Refresh or sign in again.","Plans are public, but live checkout is not ready. We'll enable payments after safety testing.","Admins get all Premium plan benefits without payment.","Please sign in to Classora first."],
es:["Volver a Classora","Aprende más.","A tu manera.","Planes claros para estudiantes, docentes y clases. El aprendizaje básico sigue disponible para todos.","Simple y claro","Planes para tu cuenta","Gestiona la renovación","Iniciar sesión","Premium completo para administradores","Sin compra. Explora todos los tipos de planes.","PLANES","Elige tu plan","Precios publicados · Pago próximamente","Tipo de plan","Estudiante","Docente","Clase","Escuela","Período de pago","Mensual","Anual · ahorra 20 %","Flexible","Experiencia completa","Más herramientas para aprender y organizarte.","Todo Plus y funciones avanzadas.","Mejorar a Plus","Mejorar a Premium","al mes","total anual","Plazas incluidas","Elige tus plazas. Las extras cuestan más.","plazas","Pago sencillo y seguro","Elige el plan y revisa el importe. Paddle procesará el pago de forma segura cuando esté disponible.","Logotipos ilustrativos; disponibilidad según país, dispositivo y Paddle.","Resumen","Período","Plazas extra","Importe base","Antes de impuestos. Precio final antes de comprar.","Mejorar ahora","El pago real aún no está activo. No hay cobros.","Preguntas frecuentes","¿Los estudiantes gratis pueden hacer exámenes?","Sí, los trabajos, exámenes y concursos asignados siguen disponibles.","¿Qué incluye el plan de clase?","Hasta 35 estudiantes elegidos por el docente, con plazas extra.","¿El plan escolar incluye estudiantes?","No, solo cuentas docentes seleccionadas.","Privacidad","Términos","Sitio principal","Inicia sesión para ver tus planes","Tu rol se reconoce automáticamente.","Hola, estudiante","Hola, docente","Hola, administrador — Premium completo","Cuenta verificada: ","No se pudieron verificar los permisos.","Los planes son públicos, pero el pago real aún no está disponible.","Los administradores tienen Premium sin pagar.","Inicia sesión primero."],
ko:["Classora로 돌아가기","더 많이 배우세요.","나만의 방식으로.","학생, 교사, 학급을 위한 요금제. 기본 학습은 모두에게 열려 있습니다.","간단하고 명확하게","계정에 맞는 요금제","편리한 갱신 관리","로그인","관리자 Premium 전체 혜택","구독 없이 모든 요금제를 확인하세요.","요금제","요금제 선택","가격 공개 · 결제 준비 중","요금제 유형","학생","교사","학급","학교","결제 주기","월간","연간 · 20% 할인","유연한 선택","전체 경험","추가 학습 및 관리 도구.","Plus의 모든 기능과 고급 도구.","Plus 업그레이드","Premium 업그레이드","월","연간 총액","포함된 좌석","좌석 수를 선택하세요. 추가 좌석은 유료입니다.","좌석","간편하고 안전한 결제","요금제를 선택하고 금액을 확인하세요. 결제 준비가 완료되면 Paddle이 안전하게 처리합니다.","로고는 안내용입니다. 국가, 기기, Paddle 지원 여부에 따라 달라집니다.","주문 요약","기간","추가 좌석","기본 금액","세금 제외. 구매 전 최종 금액 표시.","지금 업그레이드","실제 결제는 아직 제공되지 않습니다. 요금이 청구되지 않습니다.","자주 묻는 질문","무료 학생도 시험을 볼 수 있나요?","예. 교사의 과제와 시험, 대회는 모두 이용할 수 있습니다.","학급 요금제에는 무엇이 포함되나요?","교사가 선택한 학생 35명과 추가 좌석 옵션입니다.","학교 요금제에 학생도 포함되나요?","아니요. 선택된 교사 계정만 포함됩니다.","개인정보","약관","홈","로그인 후 요금제 확인","로그인 시 역할을 자동 확인합니다.","학생 환영합니다","교사 환영합니다","관리자 — Premium 전체","확인된 계정: ","계정 권한을 확인하지 못했습니다.","요금제는 공개되었지만 실제 결제는 아직 준비 중입니다.","관리자는 결제 없이 모든 Premium 혜택을 이용할 수 있습니다.","먼저 로그인해 주세요."],
de:["Zurück zu Classora","Mehr lernen.","Auf deine Art.","Klare Tarife für Schüler, Lehrkräfte und Klassen. Grundlegendes Lernen bleibt für alle frei.","Einfach und klar","Passend zum Konto","Verlängerung verwalten","Anmelden","Alle Premium-Vorteile für Admins","Ohne Kauf. Alle Tariftypen ansehen.","TARIFE","Wähle deinen Tarif","Preise veröffentlicht · Zahlung bald","Tariftyp","Schüler","Lehrkraft","Klasse","Schule","Abrechnung","Monatlich","Jährlich · 20 % sparen","Flexibel","Voller Umfang","Mehr Werkzeuge zum Lernen und Organisieren.","Alles aus Plus und erweiterte Funktionen.","Upgrade auf Plus","Upgrade auf Premium","pro Monat","jährlich gesamt","Enthaltene Plätze","Plätze wählen. Weitere kosten extra.","Plätze","Einfach und sicher bezahlen","Tarif wählen und Betrag prüfen. Paddle verarbeitet Zahlungen sicher, sobald diese bereitstehen.","Zahlungslogos nur zur Information; abhängig von Land, Gerät und Paddle.","Übersicht","Zeitraum","Zusatzplätze","Grundbetrag","Vor Steuern. Endpreis vor dem Kauf.","Jetzt upgraden","Echte Zahlungen sind noch nicht aktiv. Keine Abbuchung.","Häufige Fragen","Dürfen kostenlose Schüler Prüfungen machen?","Ja. Zugewiesene Aufgaben, Prüfungen und Wettbewerbe bleiben verfügbar.","Was beinhaltet der Klassentarif?","Bis zu 35 ausgewählte Schüler sowie optionale Zusatzplätze.","Sind Schüler im Schultarif enthalten?","Nein, nur ausgewählte Lehrerkonten.","Datenschutz","Bedingungen","Startseite","Anmelden, um Tarife zu sehen","Rolle wird automatisch erkannt.","Willkommen, Schüler","Willkommen, Lehrkraft","Willkommen, Admin — volles Premium","Geprüftes Konto: ","Kontoberechtigungen konnten nicht geprüft werden.","Tarife sind öffentlich, Live-Zahlungen noch nicht verfügbar.","Admins erhalten Premium-Vorteile kostenlos.","Bitte zuerst anmelden."],
it:["Torna a Classora","Impara di più.","A modo tuo.","Piani per studenti, insegnanti e classi. L'apprendimento di base resta disponibile a tutti.","Semplice e chiaro","Piani per il tuo account","Gestione rinnovi facile","Accedi","Tutti i vantaggi Premium per gli admin","Nessun acquisto. Esplora tutti i piani.","PIANI","Scegli il tuo piano","Prezzi pubblicati · Pagamenti in arrivo","Tipo di piano","Studente","Insegnante","Classe","Scuola","Periodo","Mensile","Annuale · risparmia 20%","Flessibile","Esperienza completa","Più strumenti per imparare e organizzarti.","Tutto Plus e funzioni avanzate.","Passa a Plus","Passa a Premium","al mese","totale annuo","Posti inclusi","Scegli i posti. Quelli extra hanno un costo.","posti","Pagamento semplice e sicuro","Scegli il piano e controlla l'importo. Paddle gestirà i pagamenti in modo sicuro.","Loghi illustrativi; disponibilità secondo Paese, dispositivo e Paddle.","Riepilogo","Periodo","Posti extra","Importo base","Imposte escluse. Prezzo finale prima dell'acquisto.","Aggiorna ora","I pagamenti reali non sono ancora attivi. Nessun addebito.","Domande frequenti","Gli studenti gratuiti possono fare i test?","Sì. Compiti, esami e gare assegnati restano disponibili.","Cosa include il piano classe?","Fino a 35 studenti selezionati, più posti extra facoltativi.","Il piano scuola include studenti?","No, solo account insegnanti selezionati.","Privacy","Termini","Sito principale","Accedi per vedere i piani","Il ruolo è riconosciuto automaticamente.","Benvenuto, studente","Benvenuto, insegnante","Benvenuto, admin — Premium completo","Account verificato: ","Impossibile verificare i permessi.","I piani sono pubblici ma il pagamento reale non è disponibile.","Gli admin hanno Premium senza pagare.","Accedi prima a Classora."],
hi:["Classora पर वापस","और सीखें।","अपने तरीके से।","छात्रों, शिक्षकों और कक्षाओं के लिए स्पष्ट प्लान। बुनियादी सीखना सभी के लिए उपलब्ध है।","सरल और स्पष्ट","आपके खाते के अनुसार","आसान नवीनीकरण","लॉग इन","एडमिन के लिए सभी Premium सुविधाएँ","बिना खरीद सभी प्लान देखें।","प्लान","अपना प्लान चुनें","कीमतें उपलब्ध · भुगतान जल्द","प्लान प्रकार","छात्र","शिक्षक","कक्षा","स्कूल","भुगतान अवधि","मासिक","वार्षिक · 20% बचत","लचीला विकल्प","पूरा अनुभव","सीखने और व्यवस्थित रहने के उपकरण।","Plus और उन्नत सुविधाएँ।","Plus में अपग्रेड करें","Premium में अपग्रेड करें","प्रति माह","पूरे वर्ष","शामिल सीटें","सीटें चुनें। अतिरिक्त सीटों का शुल्क अलग है।","सीटें","आसान और सुरक्षित भुगतान","प्लान चुनें और राशि देखें। Paddle भुगतान तैयार होने पर इसे सुरक्षित संभालेगा।","लोगो केवल जानकारी के लिए हैं। देश, डिवाइस और Paddle के अनुसार उपलब्धता बदलती है।","सारांश","अवधि","अतिरिक्त सीटें","मूल राशि","कर से पहले। अंतिम मूल्य खरीद से पहले।","अभी अपग्रेड करें","वास्तविक भुगतान अभी चालू नहीं है। कोई शुल्क नहीं।","सवाल-जवाब","क्या मुफ्त छात्र परीक्षा दे सकते हैं?","हाँ, शिक्षक के काम, परीक्षाएँ और प्रतियोगिताएँ सभी के लिए हैं।","कक्षा प्लान में क्या शामिल है?","चुने गए 35 छात्र और अतिरिक्त सीटों का विकल्प।","क्या स्कूल प्लान में छात्र शामिल हैं?","नहीं, केवल चुने गए शिक्षक खाते।","गोपनीयता","शर्तें","मुख्य साइट","प्लान देखने के लिए लॉग इन करें","लॉग इन पर भूमिका पहचानी जाएगी।","स्वागत है, छात्र","स्वागत है, शिक्षक","स्वागत है, एडमिन — पूरा Premium","सत्यापित खाता: ","खाते की अनुमति जाँच नहीं हो सकी।","प्लान सार्वजनिक हैं, असली भुगतान अभी उपलब्ध नहीं है।","एडमिन को Premium बिना भुगतान मिलता है।","पहले लॉग इन करें।"],
tr:["Classora'ya dön","Daha çok öğren.","Kendi tarzında.","Öğrenci, öğretmen ve sınıflar için net planlar. Temel öğrenme herkes için açık.","Basit ve anlaşılır","Hesabına uygun","Kolay yenileme","Giriş yap","Yöneticilere tüm Premium özellikler","Satın alma gerekmiyor. Tüm planları incele.","PLANLAR","Planını seç","Fiyatlar yayında · Ödeme yakında","Plan türü","Öğrenci","Öğretmen","Sınıf","Okul","Ödeme dönemi","Aylık","Yıllık · %20 indirim","Esnek seçim","Tam deneyim","Öğrenme ve düzenleme için ek araçlar.","Plus'taki her şey ve gelişmiş araçlar.","Plus'a yükselt","Premium'a yükselt","aylık","yıllık toplam","Dahil koltuklar","Koltuk sayısını seç. Ek koltuk ücretlidir.","koltuk","Basit ve güvenli ödeme","Planı seç ve tutarı gör. Hazır olduğunda Paddle ödemeyi güvenle işler.","Logolar yalnızca bilgi amaçlıdır. Destek ülke, cihaz ve Paddle'a bağlı.","Özet","Dönem","Ek koltuklar","Ana tutar","Vergi öncesi. Son fiyat satın almadan önce gösterilir.","Şimdi yükselt","Gerçek ödeme henüz açık değil. Ücret alınmaz.","Sık sorulan sorular","Ücretsiz öğrenciler sınavlara katılabilir mi?","Evet. Öğretmenin ödevleri, sınavları ve yarışmaları herkese açıktır.","Sınıf planında ne var?","Öğretmenin seçtiği 35 öğrenci ve ek koltuklar.","Okul planında öğrenciler var mı?","Hayır, yalnızca seçili öğretmen hesapları.","Gizlilik","Şartlar","Ana site","Planları görmek için giriş yap","Girişte rol otomatik belirlenir.","Hoş geldin, öğrenci","Hoş geldin, öğretmen","Hoş geldin, yönetici — tam Premium","Doğrulanmış hesap: ","Hesap yetkileri doğrulanamadı.","Planlar herkese açık, gerçek ödeme henüz hazır değil.","Yönetici tüm Premium özellikleri ücretsiz alır.","Önce Classora'ya giriş yap."]
};
const features={
ar:{plus:["دراسة منظمة وملاحظات سريعة","وضع التركيز","تخصيص إضافي للملف الشخصي","مجلدات لتنظيم المحادثات","أدوات تعليمية إضافية للمعلمين"],premium:["كل مزايا Plus","مظاهر وملفات شخصية احترافية","مكتبة وجدول دراسة متقدم","تقارير وتحليلات أكثر تفصيلًا","الدروس دون اتصال"]},
en:{plus:["Organized study and quick notes","Focus study mode","Extra profile customization","Organized chat folders","Extra teaching tools"],premium:["Everything in Plus","Premium profile styles","Learning library and study calendar","Detailed reports and analytics","Offline downloadable lessons"]},
es:{plus:["Estudio organizado y notas rápidas","Modo concentración","Personalizar perfil","Carpetas de chat","Herramientas para docentes"],premium:["Todo Plus","Perfiles Premium","Biblioteca y calendario","Informes detallados","Lecciones sin conexión"]},
ko:{plus:["학습 계획과 메모","집중 모드","프로필 꾸미기","채팅 폴더","교사 추가 도구"],premium:["Plus 모든 기능","고급 프로필 스타일","자료실과 학습 일정","상세 분석 보고서","오프라인 학습"]},
de:{plus:["Lernplanung und Notizen","Fokusmodus","Profilanpassung","Chat-Ordner","Zusätzliche Lehrertools"],premium:["Alles aus Plus","Premium-Profile","Lernbibliothek und Kalender","Detaillierte Analysen","Offline-Lektionen"]},
it:{plus:["Pianificazione e note rapide","Modalità concentrazione","Personalizzazione profilo","Cartelle chat","Strumenti per docenti"],premium:["Tutto Plus","Profili Premium","Biblioteca e calendario","Analisi dettagliate","Lezioni offline"]},
hi:{plus:["पढ़ाई की योजना और नोट्स","फोकस मोड","प्रोफाइल सजावट","चैट फोल्डर","शिक्षक के अतिरिक्त टूल"],premium:["Plus की सभी सुविधाएँ","Premium प्रोफाइल","लाइब्रेरी और कैलेंडर","विस्तृत रिपोर्ट","ऑफलाइन पाठ"]},
tr:{plus:["Çalışma planı ve hızlı notlar","Odaklanma modu","Profil düzenleme","Sohbet klasörleri","Öğretmen araçları"],premium:["Plus'taki her şey","Premium profiller","Çalışma kütüphanesi ve takvim","Ayrıntılı raporlar","Çevrimdışı dersler"]}
};
const prices={
student:{plus:{monthly:9.9,annual:95},premium:{monthly:19.9,annual:191}},
teacher:{plus:{monthly:24.9,annual:239},premium:{monthly:44.9,annual:431}},
class:{plus:{monthly:129,annual:1238},premium:{monthly:199,annual:1910}},
school:{plus:{monthly:449,annual:4310},premium:{monthly:799,annual:7670}}
};
const state={lang:langs.includes(localStorage.getItem("pythagorasi_language"))?localStorage.getItem("pythagorasi_language"):"ar",account:null,allowed:[],kind:"student",tier:null,period:"monthly",seats:1,checking:true,error:false,gift:null,previewRole:null,previewTier:"free",adminView:"customer"};
const previewLabels={
 ar:{title:"فحص الباقات بحساب تجريبي",warning:"هذه معاينة آمنة. حساب الأدمن وامتيازاته كما هي، ولا يوجد دفع أو إنشاء حساب حقيقي.",student:"طالب تجريبي",teacher:"معلم تجريبي",status:"الواجهة المعروضة",free:"مجاني",plus:"بلس",premium:"بريميوم"},
 en:{title:"Test membership views",warning:"Preview only. Your admin account stays unchanged. No real account or payment is created.",student:"Demo student",teacher:"Demo teacher",status:"Viewing",free:"Free",plus:"Plus",premium:"Premium"},
 es:{title:"Vista de prueba de planes",warning:"Solo demostración. Tu cuenta de administrador no cambia. No se crea cuenta ni pago.",student:"Alumno de prueba",teacher:"Docente de prueba",status:"Vista",free:"Gratis",plus:"Plus",premium:"Premium"},
 ko:{title:"요금제 테스트 미리보기",warning:"미리보기 전용. 관리자 계정은 변경되지 않으며 결제나 계정 생성은 없습니다.",student:"학생 테스트",teacher:"교사 테스트",status:"미리보기",free:"무료",plus:"Plus",premium:"Premium"},
 de:{title:"Tarifvorschau testen",warning:"Nur Vorschau. Admin-Konto bleibt unverändert. Kein Kauf und kein neues Konto.",student:"Test-Schüler",teacher:"Test-Lehrkraft",status:"Vorschau",free:"Gratis",plus:"Plus",premium:"Premium"},
 it:{title:"Anteprima piani di prova",warning:"Solo anteprima. Il tuo account admin non cambia. Nessun acquisto o account nuovo.",student:"Studente demo",teacher:"Docente demo",status:"Anteprima",free:"Gratis",plus:"Plus",premium:"Premium"},
 hi:{title:"सदस्यता का परीक्षण",warning:"सिर्फ पूर्वावलोकन। एडमिन खाता नहीं बदलेगा; कोई भुगतान या नया खाता नहीं।",student:"छात्र डेमो",teacher:"शिक्षक डेमो",status:"पूर्वावलोकन",free:"मुफ़्त",plus:"Plus",premium:"Premium"},
 tr:{title:"Üyelik önizlemesini dene",warning:"Yalnızca önizleme. Admin hesabı değişmez, ödeme veya yeni hesap oluşturulmaz.",student:"Deneme öğrencisi",teacher:"Deneme öğretmeni",status:"Önizleme",free:"Ücretsiz",plus:"Plus",premium:"Premium"}
};
let liveCatalog=null,catalogLoadError=false;
// Draft checkout choices only live in memory. Never store these in
// localStorage, sessionStorage, Firebase, or Paddle before verified purchase.
const emptyDraftWords={
 ar:"لم تختَر باقة بعد",en:"No plan selected",es:"Ningún plan seleccionado",
 ko:"선택한 요금제 없음",de:"Noch kein Tarif gewählt",it:"Nessun piano selezionato",
 hi:"अभी कोई प्लान नहीं चुना",tr:"Henüz plan seçilmedi"
};
function emptyDraftLabel(){return emptyDraftWords[state.lang]||emptyDraftWords.en;}
function zeroPrice(){
 const loc=window.ClassoraPriceLocalization?.getInfo();
 if(loc?.localized&&/^[A-Z]{3}$/.test(loc.currency||"")){
  try{return new Intl.NumberFormat("en-US",{style:"currency",currency:loc.currency}).format(0);}catch(e){console.warn("Currency display failed",e);}
 }
 return price(0);
}
function resetDraft(){
 state.tier=null;
 state.period="monthly";
 state.previewTier="free";
 state.kind=state.account?.admin?"student":state.allowed[0]||(state.account?.role||"student");
 state.seats=state.kind==="class"?35:state.kind==="school"?55:1;
 put("cl-payment-status","");
}

const catalogStatusMessages={
 ar:["عم نحمّل بيانات أسعار Paddle Live…","✓ تم ربط أرقام 10 منتجات و20 سعرًا من Paddle Live. الدفع الحقيقي لسه غير مفعّل.","تعذر تحميل قائمة أسعار Live؛ ما في إمكانية لإتمام الدفع حاليًا."],
 en:["Loading Paddle Live catalog IDs…","✓ Mapped 10 products and 20 Paddle Live price IDs. Live checkout is not yet enabled.","Couldn't load the Live price catalog. Checkout is unavailable."],
 es:["Cargando identificadores de Paddle Live…","✓ Vinculados 10 productos y 20 precios Live. El pago real aún no está activo.","No se pudo cargar el catálogo Live."],
 ko:["Paddle Live 가격 정보를 불러오는 중…","✓ 10개 상품과 20개 Live 가격 ID 연결. 실제 결제는 아직 준비 중입니다.","Live 가격 정보를 불러오지 못했습니다."],
 de:["Paddle-Live-Preisdaten werden geladen…","✓ 10 Produkte und 20 Live-Preis-IDs zugeordnet. Live-Zahlung noch nicht aktiviert.","Live-Preisdaten konnten nicht geladen werden."],
 it:["Caricamento ID dei prezzi Paddle Live…","✓ Collegati 10 prodotti e 20 prezzi Live. Il pagamento reale non è ancora attivo.","Impossibile caricare il catalogo Live."],
 hi:["Paddle Live कीमतों का डेटा लोड हो रहा है…","✓ 10 उत्पाद और 20 Live कीमत ID लिंक हैं। असली भुगतान अभी चालू नहीं है।","Live कीमतों का डेटा उपलब्ध नहीं है।"],
 tr:["Paddle Live fiyat bilgileri yükleniyor…","✓ 10 ürün ve 20 Live fiyat ID'si eşlendi. Gerçek ödeme henüz açık değil.","Live fiyat kataloğu yüklenemedi."]
};
function catalogRecord(key,period){return liveCatalog?.products?.[key]?.[period]||null;}
function currentCatalogPrice(key,period,fallback){return catalogRecord(key,period)?.amountIls??fallback;}
function shownPlanPrice(key,period,fallback) {
 return window.ClassoraPriceLocalization?.priceFor(key,period)||price(currentCatalogPrice(key,period,fallback));
}
function currentSelection(){
 if(!liveCatalog||!state.tier||state.account?.admin)return null;
 const key=state.kind+"_"+state.tier;
 const main=catalogRecord(key,state.period);
 if(!main)return null;
 const items=[{priceId:main.priceId,quantity:1}];
 const extra=extraSeats();
 if(extra){const add=catalogRecord(state.kind==="class"?"extra_student":"extra_teacher",state.period);if(!add)return null;items.push({priceId:add.priceId,quantity:extra});}
 return {kind:state.kind,tier:state.tier,period:state.period,seats:minSeats()?state.seats:1,items};
}
async function loadLiveCatalog(){
 try {
  const response=await fetch("./assets/classora-paddle-live-catalog.json",{cache:"no-store"});
  if(!response.ok)throw Error("Live catalog HTTP "+response.status);
  const data=await response.json();
  if(data.environment!=="live"||data.currency!=="ILS"||data.checkoutEnabled!==false||data.requiresServerIntent!==true)throw Error("Catalog environment or safety flag invalid");
  const names=["student_plus","student_premium","teacher_plus","teacher_premium","class_plus","class_premium","school_plus","school_premium","extra_student","extra_teacher"];
  if(Object.keys(data.products||{}).length!==10)throw Error("Wrong product count");
  const seen=new Set();
  for(const name of names){
   const product=data.products[name];
   if(!/^pro_[a-z0-9]{26}$/.test(product?.productId||""))throw Error("Invalid Live product");
   for(const period of ["monthly","annual"]){
    const row=product[period];
    if(!/^pri_[a-z0-9]{26}$/.test(row?.priceId||"")||seen.has(row.priceId))throw Error("Duplicate or invalid price ID");
    if(!Number.isFinite(row.amountIls)||row.amountIls<=0)throw Error("Invalid Live price amount");
    if(!name.startsWith("extra_") && row.amountIls!==prices[name.split("_")[0]][name.split("_")[1]][period])throw Error("Unexpected Classora price for "+name);
    seen.add(row.priceId);
   }
  }
  if(seen.size!==20)throw Error("Missing Live price");
  liveCatalog=data;
  window.ClassoraPriceLocalization?.start(data,{onChange:()=>render()});
 }catch(e){console.error("Live catalog load failed",e);catalogLoadError=true;}
 render();
}

function t(key){const idx=keys.indexOf(key);return idx>=0?(translationRows[state.lang][idx]||translationRows.en[idx]):key;}
function put(id,value){const el=$(id);if(el)el.textContent=value;}
function price(num){
 // Never multiply an ILS price by 100 or show it as a foreign currency.
 // Paddle checkout, not this static card, controls any country conversion.
 return "₪" + new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(num)||0);
}
function minSeats(){return state.kind==="class"?35:state.kind==="school"?55:0;}
function extraSeats(){const min=minSeats();return min?Math.max(0,state.seats-min):0;}
function total(){
 if(!state.tier)return 0;
 const fallback=prices[state.kind][state.tier][state.period];
 const base=currentCatalogPrice(state.kind+"_"+state.tier,state.period,fallback);
 const extraCost=currentCatalogPrice(state.kind==="class"?"extra_student":"extra_teacher",state.period,state.kind==="class"?(state.period==="monthly"?5:48):(state.period==="monthly"?10:96));
 return state.account?.admin&&state.adminView==="admin"?0:base+extraSeats()*extraCost;
}
function logos(){
 const entries=[
 {name:"Google Pay",symbol:'<svg viewBox="0 0 120 48" role="img" aria-label="Google Pay"><path d="M25 23.5h18.7c.2 1.1.3 2.2.3 3.3 0 12-8 20.5-20 20.5C10.5 47.3 0 36.8 0 24S10.5.7 24 .7c6.4 0 12 2.5 16.3 6.7l-6.7 6.7c-2.6-2.5-5.7-3.8-9.6-3.8-7.7 0-13.8 6.2-13.8 13.7S16.3 37.7 24 37.7c7.1 0 10.4-5 11-8H25v-6.5Z" fill="#4285F4"/><path d="M1.6 15.1 10.1 21C11.3 14.3 17 10.3 24 10.3c3.9 0 7 1.3 9.6 3.8l6.7-6.7C36 3.2 30.4.7 24 .7 13.9.7 5.3 6.2 1.6 15.1Z" fill="#EA4335"/><path d="M24 47.3c6.2 0 11.6-2.1 15.6-5.9l-7.6-5.7c-2.1 1.4-4.7 2-8 2-7 0-12.7-4-14-10l-8.5 6.4C5.1 41.8 13.8 47.3 24 47.3Z" fill="#34A853"/><path d="M10 27.7a14.2 14.2 0 0 1 0-7.4l-8.4-5.2a23.5 23.5 0 0 0 0 17.8L10 27.7Z" fill="#FBBC04"/><text x="51" y="32" font-family="Arial, sans-serif" font-weight="600" font-size="24" fill="#f3fbff">Pay</text></svg>'},
 {name:"Apple Pay",symbol:'<svg viewBox="0 0 120 48" role="img" aria-label="Apple Pay"><g transform="translate(3 1) scale(1.7)"><path fill="#f5fff9" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35-4.88-5.05-3.91-12.69 1.9-12.97 1.41.07 2.39.77 3.21.83 1.22-.25 2.39-.97 3.69-.88 1.56.13 2.75.75 3.52 1.88-3.22 1.93-2.46 6.17.5 7.36-.61 1.61-1.4 3.2-2.44 4.12M12.03 7.25C11.88 4.86 13.8 2.9 16 2.5c.32 2.76-2.5 5.17-3.97 4.75Z"/></g><text x="49" y="33" font-family="Arial, sans-serif" font-weight="600" font-size="25" fill="#f5fff9">Pay</text></svg>'},
 {name:"PayPal",symbol:'<svg viewBox="0 0 120 48" role="img" aria-label="PayPal"><path d="M12 2h19c10 0 15 6 12 16-2.9 8-10.2 11-20 11h-7L12 43H3L11 3Z" fill="#1B4FAF"/><path d="M20 8h16c9 0 14 6 10 15-3 8-10 12-20 12h-8l-2 9H6l8-32c.3-1.7 2.8-4 6-4Z" fill="#3DC4F4" fill-opacity=".94"/><path d="M25 15h12c4 0 5 1.8 4 5.5-1 3.5-4.5 5-9 5h-10l3-10.5Z" fill="#133C88"/><text x="53" y="32" font-family="Arial, sans-serif" font-size="20" font-style="italic" font-weight="800" fill="#deefff">PayPal</text></svg>'},
 {name:"Visa",symbol:'<svg viewBox="0 0 120 48" role="img" aria-label="Visa"><path d="M6 9h18l-3 7H6Z" fill="#F1BC4A"/><text x="13" y="38" font-family="Arial, Helvetica, sans-serif" font-style="italic" font-weight="900" font-size="38" letter-spacing="-2" fill="#e4eeff">VISA</text></svg>'},
 {name:"Mastercard",symbol:'<svg viewBox="0 0 120 48" role="img" aria-label="Mastercard"><circle cx="47" cy="24" r="19" fill="#EB2632"/><circle cx="73" cy="24" r="19" fill="#FFB923"/><path d="M60 9.9a19 19 0 0 1 0 28.2 19 19 0 0 1 0-28.2Z" fill="#F57C23"/></svg>'}
 ];
 const host=$("cl-methods");
 host.replaceChildren();
 for(const item of entries){
  const badge=document.createElement("div");badge.className="cl-method";badge.setAttribute("aria-label",item.name);
  const mark=document.createElement("span");mark.className="cl-method-brand";mark.innerHTML=item.symbol;
  const caption=document.createElement("span");caption.textContent=item.name;
  badge.append(mark,caption);host.appendChild(badge);
 }
}
const adminModeLabels={
 ar:{heading:"كيف بدك تشوف الاشتراكات؟",description:"استعرض الأسعار والدفع وكل باقات الطلاب والمعلمين والصفوف والمدارس، أو افتح لوحة الإدارة.",customer:"واجهة المستخدم",admin:"واجهة الأدمن",goAdmin:"فتح لوحة الأدمن الأصلية",catalog:"جميع الباقات",catalogNote:"اضغط أي باقة لتشوف الأسعار والمميزات وملخص الطلب بشكل طبيعي، بدون تغيير اشتراكك.",previewNote:"هذه معاينة الأدمن لواجهة الدفع؛ ما راح يتم خصم مبلغ أو إنشاء اشتراك."},
 en:{heading:"Choose your membership view",description:"Browse every student, teacher, class and school plan or open your admin controls.",customer:"Customer view",admin:"Admin view",goAdmin:"Open admin panel",catalog:"All plans",catalogNote:"Select any plan to see pricing, benefits and checkout preview without changing your account.",previewNote:"Admin checkout preview only. No payment or subscription is created."},
 es:{heading:"Elige tu vista de planes",description:"Consulta todas las tarifas o accede a tu panel de administración.",customer:"Vista usuario",admin:"Vista admin",goAdmin:"Abrir panel admin",catalog:"Todos los planes",catalogNote:"Elige un plan para ver el precio y los beneficios sin cambiar tu cuenta.",previewNote:"Vista de pago, sin cobro ni suscripción."},
 ko:{heading:"멤버십 보기 선택",description:"모든 요금제와 관리자 화면을 확인하세요.",customer:"사용자 화면",admin:"관리자 화면",goAdmin:"관리자 패널 열기",catalog:"모든 요금제",catalogNote:"선택해 가격과 혜택을 미리 보세요. 계정은 변경되지 않습니다.",previewNote:"결제 미리보기만 가능합니다. 실제 결제는 없습니다."},
 de:{heading:"Ansicht auswählen",description:"Alle Schüler-, Lehrer-, Klassen- und Schultarife ansehen.",customer:"Kundenansicht",admin:"Adminansicht",goAdmin:"Adminbereich öffnen",catalog:"Alle Tarife",catalogNote:"Tarif antippen: Preise, Vorteile und Bestellübersicht ohne Kontowechsel.",previewNote:"Nur Checkout-Vorschau, keine Zahlung oder Buchung."},
 it:{heading:"Scegli la visualizzazione",description:"Esplora tutti i piani o apri il pannello admin.",customer:"Vista utente",admin:"Vista admin",goAdmin:"Apri pannello admin",catalog:"Tutti i piani",catalogNote:"Scegli un piano per vedere prezzo e vantaggi senza modificare il tuo account.",previewNote:"Solo anteprima del pagamento, senza addebito."},
 hi:{heading:"सदस्यता दृश्य चुनें",description:"सभी प्लान देखें या एडमिन पैनल खोलें।",customer:"यूज़र दृश्य",admin:"एडमिन दृश्य",goAdmin:"एडमिन पैनल खोलें",catalog:"सभी प्लान",catalogNote:"मूल्य और सुविधाएँ देखने के लिए प्लान चुनें। आपका खाता नहीं बदलेगा।",previewNote:"सिर्फ भुगतान पूर्वावलोकन है; कोई पैसा नहीं कटेगा।"},
 tr:{heading:"Üyelik görünümünü seç",description:"Tüm paketleri gör veya yönetici paneline geç.",customer:"Kullanıcı görünümü",admin:"Yönetici görünümü",goAdmin:"Yönetici panelini aç",catalog:"Tüm paketler",catalogNote:"Fiyatları ve avantajları hesap değiştirmeden incelemek için paket seç.",previewNote:"Yalnızca ödeme önizlemesi; ücret alınmaz."}
};
function renderAdminCatalog(){
 const host=$("cl-owner-catalog-grid");if(!host)return;
 const w=adminModeLabels[state.lang]||adminModeLabels.en;
 put("cl-owner-catalog-title",w.catalog);put("cl-owner-catalog-note",w.catalogNote);
 host.replaceChildren();
 for(const kind of ["student","teacher","class","school"]){
  for(const tier of ["plus","premium"]){
   const b=document.createElement("button");b.type="button";b.className="cl-owner-plan-mini";
   b.classList.toggle("active",state.kind===kind&&state.tier===tier);
   b.setAttribute("aria-pressed",String(state.kind===kind&&state.tier===tier));
   const name=document.createElement("span");name.className="cl-owner-plan-name";name.textContent=t(kind);
   const tierEl=document.createElement("b");tierEl.textContent=tier.toUpperCase();
   const cost=document.createElement("strong");cost.dir="ltr";cost.textContent=shownPlanPrice(kind+"_"+tier,state.period,prices[kind][tier][state.period]);
   const sub=document.createElement("small");sub.textContent=t(state.period==="annual"?"termYear":"termMonth");
   b.append(name,tierEl,cost,sub);
   b.onclick=()=>{if(!state.account?.admin||state.adminView!=="customer")return;state.kind=kind;state.tier=tier;state.previewTier=tier;state.seats=kind==="class"?35:kind==="school"?55:1;render();$("cl-plans")?.scrollIntoView({behavior:"smooth",block:"start"});};
   host.append(b);
  }
 }
}
document.querySelectorAll("[data-admin-view]").forEach(b=>b.addEventListener("click",()=>{
 if(!state.account?.admin)return;
 const next=b.dataset.adminView;
 if(next!=="customer"&&next!=="admin")return;
 state.adminView=next;
 if(next==="customer"){state.allowed=["student","teacher","class","school"];state.kind=state.allowed.includes(state.kind)?state.kind:"student";}
 else{state.previewRole=state.kind==="teacher"||state.kind==="class"||state.kind==="school"?"teacher":"student";state.previewTier="free";state.tier=null;state.kind=state.previewRole;}
 render();
}));
function render(){
 document.documentElement.lang=state.lang;document.documentElement.dir=state.lang==="ar"?"rtl":"ltr";$("cl-language").value=state.lang;
 const map={back:"cl-back",subtitle:"cl-subtitle",high1:"cl-high1",high2:"cl-high2",high3:"cl-high3",adminTitle:"cl-admin-title",adminCaption:"cl-admin-caption",plansLabel:"cl-plans-label",plansHeading:"cl-plans-heading",beta:"cl-beta",typeLabel:"cl-type-label",student:"cl-kind-student",teacher:"cl-kind-teacher",class:"cl-kind-class",school:"cl-kind-school",cycleLabel:"cl-cycle-label",monthly:"cl-period-monthly",annual:"cl-period-annual",plusTag:"cl-plus-tag",premiumTag:"cl-premium-tag",plusDescription:"cl-plus-description",premiumDescription:"cl-premium-description",choosePlus:"cl-plus-select",choosePremium:"cl-premium-select",seatsLabel:"cl-seats-label",seatsHint:"cl-seats-hint",seat:"cl-seats-unit",paymentTitle:"cl-checkout-title",paymentIntro:"cl-payment-intro",paymentNote:"cl-payment-note",summaryLabel:"cl-summary-label",periodLabel:"cl-summary-period-label",seatsExtra:"cl-summary-seats-label",totalLabel:"cl-total-label",totalNote:"cl-total-note",continue:"cl-continue",security:"cl-security",faqTitle:"cl-faq-title",faq1:"cl-faq1",answer1:"cl-answer1",faq2:"cl-faq2",answer2:"cl-answer2",faq3:"cl-faq3",answer3:"cl-answer3",privacy:"cl-privacy",terms:"cl-terms",home:"cl-home"};
 Object.keys(map).forEach(k=>put(map[k],t(k)));
 $("cl-title").replaceChildren(document.createTextNode(t("title1")),document.createElement("br"),Object.assign(document.createElement("em"),{textContent:t("title2")}));
 $("cl-account").dataset.state=state.account?"success":"warning";
 const title=state.account?(state.account.admin&&state.adminView==="admin"?t("adminAccountTitle"):t(state.account.admin&&state.kind==="teacher"?"teacherTitle":state.account.admin?"studentTitle":state.account.role==="teacher"?"teacherTitle":"studentTitle")):state.error?t("unavailable"):state.checking?t("guestMessage"):t("guestTitle");
 put("cl-account-title",title);
 const gift=state.gift;
 const giftLabel=gift?(" · "+gift.kind.toUpperCase()+" "+gift.tier.toUpperCase()+" · "+
   (state.lang==="ar"?"منحة لغاية ":"Gift until ")+
   new Date(gift.expiresAt.toMillis()).toLocaleDateString(state.lang==="ar"?"ar":"en-US")):"";
 put("cl-account-subtitle",state.account?t("checked")+state.account.name+giftLabel:t("guestMessage"));
 put("cl-account-icon",state.account?.admin&&state.adminView==="admin"?"✦":state.account?.admin?(state.kind==="teacher"?"T":state.kind==="student"?"S":"C"):state.account?.role==="teacher"?"T":state.account?.role==="student"?"S":"C");
 $("cl-login").hidden=!!state.account;put("cl-login",t("login"));
 const admin=!!state.account?.admin;
 const ownerPreview=admin&&state.adminView==="admin";
 state.allowed=admin?(ownerPreview?(state.previewRole==="teacher"?["teacher","class","school"]:["student"]):["student","teacher","class","school"]):state.allowed;
 const mode=$("cl-owner-switch"),catalog=$("cl-owner-catalog");
 if(mode){
  mode.hidden=!admin;
  if(admin){
   const w=adminModeLabels[state.lang]||adminModeLabels.en;
   put("cl-owner-switch-title",w.heading);put("cl-owner-switch-sub",w.description);
   mode.querySelectorAll("[data-admin-view]").forEach(button=>{button.textContent=w[button.dataset.adminView];button.setAttribute("aria-pressed",String(state.adminView===button.dataset.adminView));});
   put("cl-open-admin-panel",w.goAdmin);
   const back=$("cl-open-admin-panel");
   if(back)back.onclick=()=>{try{sessionStorage.setItem("classora_returning_from_subject","1");sessionStorage.setItem("classora_open_admin_from_memberships",JSON.stringify({uid:state.account.uid,at:Date.now()}))}catch(_){}};
  }
 }
 if(catalog){
  catalog.hidden=!admin||ownerPreview;
  if(admin&&!ownerPreview)renderAdminCatalog();
 }
 $("cl-admin").hidden=!ownerPreview;
 const simulator=$("cl-admin-simulator");
 if(simulator){
  simulator.hidden=!ownerPreview;
  if(ownerPreview){
   if(!["student","teacher"].includes(state.previewRole))state.previewRole="student";
   state.allowed=state.previewRole==="student"?["student"]:["teacher","class","school"];
   if(!state.allowed.includes(state.kind))state.kind=state.allowed[0];
   const w=previewLabels[state.lang]||previewLabels.en;
   put("cl-admin-sim-title",w.title);put("cl-admin-sim-warning",w.warning);
   simulator.querySelectorAll("[data-sim-role]").forEach(b=>{
    const role=b.dataset.simRole;b.textContent=w[role];b.setAttribute("aria-pressed",String(state.previewRole===role));
   });
   simulator.querySelectorAll("[data-sim-tier]").forEach(b=>{
    const tier=b.dataset.simTier;b.textContent=w[tier];b.setAttribute("aria-pressed",String(state.previewTier===tier));
   });
   put("cl-admin-sim-status",w.status+": "+w[state.previewRole]+" · "+w[state.previewTier]);
  }
 }
 document.querySelector(".cl-pricing").hidden=false;
 document.querySelector(".cl-checkout-preview").hidden=admin&&ownerPreview;
 const info=window.ClassoraMemberPlanInfo;
 put("cl-role-note",state.account?(info?.text(state.lang,"role"+state.kind.charAt(0).toUpperCase()+state.kind.slice(1))||""):info?.text(state.lang,"roleGuest")||"");
 put("cl-base-benefits",info?.text(state.lang,"base")||"");
 put("cl-benefits-disclaimer",info?.text(state.lang,"note")||"");
 put("cl-currency-info",window.ClassoraPriceLocalization?.note(state.lang)||info?.text(state.lang,"price")||"");
 // Customers see product prices, not internal Live/Sandbox deployment details.
 $("cl-catalog-status").hidden=true;

 if(state.allowed.length&&!state.allowed.includes(state.kind))state.kind=state.allowed[0];
 document.querySelectorAll("[data-kind]").forEach(b=>{b.classList.toggle("allowed",state.allowed.includes(b.dataset.kind));b.classList.toggle("active",state.kind===b.dataset.kind);b.disabled=!state.allowed.includes(b.dataset.kind);b.hidden=!!state.account&&!state.allowed.includes(b.dataset.kind);});
 document.querySelectorAll("[data-period]").forEach(b=>b.classList.toggle("active",state.period===b.dataset.period));
 document.querySelectorAll(".cl-plan").forEach(card=>card.classList.toggle("selected",card.dataset.tier===state.tier));
 for(const tier of ["plus","premium"]){
   put("cl-"+tier+"-price",shownPlanPrice(state.kind+"_"+tier,state.period,prices[state.kind][tier][state.period]));
   $("cl-"+tier+"-price").dir="ltr";
   put("cl-"+tier+"-term",t(state.period==="monthly"?"termMonth":"termYear"));
   const list=$("cl-"+tier+"-features");list.replaceChildren();
   const details=window.ClassoraMemberPlanInfo?.get(state.lang,state.kind,tier)
      ||features[state.lang][tier];
   for(const value of details){const li=document.createElement("li");li.textContent=value;list.append(li);}
 }
 const min=minSeats();$("cl-seat-row").hidden=!min||!state.tier;
 if(min&&state.seats<min)state.seats=min;
 $("cl-seats").min=String(min||1);$("cl-seats").value=String(state.seats);
 put("cl-summary-title",state.tier?t(state.kind)+" "+state.tier.toUpperCase():emptyDraftLabel());
 put("cl-role-note",state.account?(window.ClassoraMemberPlanInfo?.text(state.lang,"role"+state.kind.charAt(0).toUpperCase()+state.kind.slice(1))||""):window.ClassoraMemberPlanInfo?.text(state.lang,"roleGuest")||"");
 put("cl-summary-period",state.tier?t(state.period==="monthly"?"monthly":"annual"):"—");
 put("cl-summary-seats",String(state.tier?extraSeats():0));
 const localizedTotal=state.tier?window.ClassoraPriceLocalization?.totalFor(state.kind,state.tier,state.period,state.seats):null;
 const localizedReady=!!window.ClassoraPriceLocalization?.getInfo()?.localized;
 put("cl-total",!state.tier||(admin&&ownerPreview)?zeroPrice():(localizedTotal||(localizedReady&&extraSeats()>0?"…":price(total()))));
 if(state.tier)window.ClassoraPriceLocalization?.updateSelection(state.kind,state.tier,state.period,state.seats);
 $("cl-total").dir="ltr";
 const status=(catalogStatusMessages[state.lang]||catalogStatusMessages.en);
 // Technical catalog diagnostics remain hidden from regular buyers.
 put("cl-catalog-status",status[catalogLoadError?2:liveCatalog?1:0]);
 $("cl-catalog-status").dataset.status=catalogLoadError?"error":liveCatalog?"linked":"loading";
 put("cl-payment-status",!state.account?t("mustLogin"):state.account.admin?(ownerPreview?t("adminFree"):(adminModeLabels[state.lang]||adminModeLabels.en).previewNote):"");
 $("cl-continue").disabled=!state.tier||(admin&&ownerPreview);
 window.ClassoraMembershipLuxe?.update(state);
}
async function identify(user){
 state.checking=false;
 if(!user||user.isAnonymous){state.account=null;state.gift=null;state.allowed=["student","teacher"];resetDraft();state.error=false;render();return;}
 try{
  const profile=await getDoc(doc(db,"users",user.uid));if(!profile.exists())throw Error("Missing profile");
  const p=profile.data();if(!["student","teacher"].includes(p.role))throw Error("Invalid user role");
  let staff=null,owner=null;
  try{const s=await getDoc(doc(db,"staffAccess",user.uid));if(s.exists())staff=s.data();}catch(e){console.warn("Optional staff lookup",e)}
  try{const o=await getDoc(doc(db,"profileIds","3228667330"));if(o.exists())owner=o.data();}catch(e){console.warn("Optional owner lookup",e)}
  if(auth.currentUser?.uid!==user.uid)return;
  const admin=owner?.uid===user.uid||(staff?.active===true&&staff?.role==="admin");
  state.account={uid:user.uid,role:p.role,admin,owner:owner?.uid===user.uid,name:String(p.displayName||user.displayName||"")};
  state.previewRole=admin?"student":null;state.previewTier="free";state.adminView="customer";
  state.allowed=admin?["student","teacher","class","school"]:p.role==="teacher"?["teacher","class","school"]:["student"];
  state.gift=null;
  try {
    const grantSnap=await getDoc(doc(db,"membershipGrants",user.uid));
    const grant=grantSnap.data();
    if(grantSnap.exists()&&grant?.uid===user.uid&&
       grant.revoked===false&&["plus","premium"].includes(grant.tier)&&
       (grant.kind===p.role||(p.role==="teacher"&&["class","school"].includes(grant.kind)))&&
       grant.expiresAt?.toMillis?.()>Date.now())state.gift=grant;
  }catch(e){console.warn("Courtesy subscription not available",e);}
  if(auth.currentUser?.uid!==user.uid)return;
  resetDraft();state.error=false;
 }catch(e){if(auth.currentUser?.uid!==user.uid)return;console.warn("Membership role verification",e);state.account=null;state.gift=null;state.allowed=[];resetDraft();state.error=true;}
 render();
}
$("cl-language").addEventListener("change",event=>{const lang=event.target.value;if(!langs.includes(lang))return;state.lang=lang;localStorage.setItem("pythagorasi_language",lang);render();});
document.querySelectorAll("[data-sim-role]").forEach(b=>b.addEventListener("click",()=>{
 if(!state.account?.admin)return;
 state.previewRole=b.dataset.simRole;state.kind=state.previewRole;state.previewTier="free";state.tier=null;state.period="monthly";state.seats=1;render();
}));
document.querySelectorAll("[data-sim-tier]").forEach(b=>b.addEventListener("click",()=>{
 if(!state.account?.admin)return;
 state.previewTier=b.dataset.simTier;state.tier=state.previewTier==="free"?null:state.previewTier;render();
}));
document.querySelectorAll("[data-kind]").forEach(b=>b.addEventListener("click",()=>{if(!state.allowed.includes(b.dataset.kind))return;state.kind=b.dataset.kind;state.tier=null;if(state.account?.admin)state.previewTier="free";state.period="monthly";state.seats=minSeats()||1;render();}));
document.querySelectorAll("[data-period]").forEach(b=>b.addEventListener("click",()=>{state.period=b.dataset.period;render();}));
document.querySelectorAll("[data-choose]").forEach(b=>b.addEventListener("click",()=>{
 if(state.account?.admin&&state.adminView==="admin")return;
 state.tier=b.dataset.choose;if(state.account?.admin)state.previewTier=state.tier;
 render();
 if(!state.account?.admin)$("cl-checkout-title").scrollIntoView({block:"center",behavior:"smooth"});
}));
$("cl-seats").addEventListener("change",()=>{if(!state.tier)return;const min=minSeats(),num=Math.trunc(Number($("cl-seats").value));state.seats=Number.isFinite(num)?Math.min(1000,Math.max(min,num)):min;render();});
$("cl-continue").addEventListener("click",()=>{
 if(!state.account){window.location.assign("./index.html");return;}
 if(state.account.admin){put("cl-payment-status",(adminModeLabels[state.lang]||adminModeLabels.en).previewNote);return;}
 if(!state.tier){put("cl-payment-status",emptyDraftLabel());return;}
 const selection=currentSelection();
 if(!selection){put("cl-payment-status",catalogStatusMessages[state.lang][catalogLoadError?2:0]);return;}
 // Catalog mapping is not proof of payment. No browser-side role or price
 // request may ever grant benefits: only a signed Paddle webhook and a
 // verified server-issued checkout intent can grant entitlements.
 put("cl-payment-status",t("prelaunch"));
});
// Browsers may restore the page from back/forward cache. Reset the draft
// when the user leaves and when an old page instance is restored.
window.addEventListener("pagehide",()=>{resetDraft();});
window.addEventListener("pageshow",event=>{if(event.persisted){resetDraft();render();}});
logos();render();onAuthStateChanged(auth,identify);loadLiveCatalog();

