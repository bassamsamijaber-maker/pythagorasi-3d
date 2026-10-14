/* Offline UI dictionaries. Unknown authored text remains in the English source language.
 * No visitor text, names, messages or answers are sent to a translation service.
 */
(() => {
'use strict';
const languages={ar:'العربية',en:'English',es:'Español',ko:'한국어',de:'Deutsch',it:'Italiano',hi:'हिन्दी'};
const rows=`
Settings|Configuración|설정|Einstellungen|Impostazioni|सेटिंग्स
Home|Inicio|홈|Startseite|Home|होम
Lobby|Inicio|홈|Startseite|Home|होम
Subjects|Asignaturas|과목|Fächer|Materie|विषय
Classes|Clases|학급|Klassen|Classi|कक्षाएँ
Chat|Chat|채팅|Chat|Chat|चैट
Language|Idioma|언어|Sprache|Lingua|भाषा
Language / Language|Idioma|언어|Sprache|Lingua|भाषा
Quick navigation|Navegación rápida|빠른 탐색|Schnellnavigation|Navigazione rapida|त्वरित नेविगेशन
Site shortcuts|Accesos directos|사이트 바로가기|Verknüpfungen|Scorciatoie|साइट शॉर्टकट
Back|Volver|뒤로|Zurück|Indietro|वापस
Return to lobby|Volver al inicio|홈으로 돌아가기|Zur Startseite|Torna alla home|होम पर लौटें
Back to lobby|Volver al inicio|홈으로 돌아가기|Zur Startseite|Torna alla home|होम पर लौटें
Close|Cerrar|닫기|Schließen|Chiudi|बंद करें
Open|Abrir|열기|Öffnen|Apri|खोलें
Cancel|Cancelar|취소|Abbrechen|Annulla|रद्द करें
Save|Guardar|저장|Speichern|Salva|सहेजें
Save changes|Guardar cambios|변경 사항 저장|Änderungen speichern|Salva modifiche|बदलाव सहेजें
Delete|Eliminar|삭제|Löschen|Elimina|हटाएँ
Edit|Editar|수정|Bearbeiten|Modifica|संपादित करें
Send|Enviar|보내기|Senden|Invia|भेजें
Search|Buscar|검색|Suchen|Cerca|खोजें
Search…|Buscar…|검색…|Suchen…|Cerca…|खोजें…
Next|Siguiente|다음|Weiter|Avanti|अगला
Previous|Anterior|이전|Zurück|Precedente|पिछला
Continue|Continuar|계속|Weiter|Continua|जारी रखें
Start|Empezar|시작|Starten|Inizia|शुरू करें
Reset|Restablecer|초기화|Zurücksetzen|Reimposta|रीसेट करें
Try again|Intentar de nuevo|다시 시도|Erneut versuchen|Riprova|फिर से कोशिश करें
Loading…|Cargando…|불러오는 중…|Wird geladen…|Caricamento…|लोड हो रहा है…
Loading...|Cargando…|불러오는 중…|Wird geladen…|Caricamento…|लोड हो रहा है…
Done|Listo|완료|Fertig|Fatto|हो गया
Yes|Sí|예|Ja|Sì|हाँ
No|No|아니요|Nein|No|नहीं
OK|Aceptar|확인|OK|OK|ठीक है
All|Todo|전체|Alle|Tutto|सभी
Name|Nombre|이름|Name|Nome|नाम
Email|Correo electrónico|이메일|E-Mail|Email|ईमेल
Password|Contraseña|비밀번호|Passwort|Password|पासवर्ड
Username|Nombre de usuario|사용자 이름|Benutzername|Nome utente|उपयोगकर्ता नाम
Login name|Nombre de usuario|사용자 이름|Benutzername|Nome utente|उपयोगकर्ता नाम
Sign in|Iniciar sesión|로그인|Anmelden|Accedi|लॉग इन करें
Sign out|Cerrar sesión|로그아웃|Abmelden|Esci|लॉग आउट करें
Log in|Iniciar sesión|로그인|Anmelden|Accedi|लॉग इन करें
Create account|Crear cuenta|계정 만들기|Konto erstellen|Crea account|खाता बनाएँ
Create an account|Crear una cuenta|계정 만들기|Konto erstellen|Crea un account|खाता बनाएँ
Continue with Google|Continuar con Google|Google로 계속하기|Mit Google fortfahren|Continua con Google|Google से जारी रखें
Sign in with Google|Iniciar sesión con Google|Google로 로그인|Mit Google anmelden|Accedi con Google|Google से लॉग इन करें
Continue as guest|Continuar como invitado|게스트로 계속하기|Als Gast fortfahren|Continua come ospite|अतिथि के रूप में जारी रखें
Guest|Invitado|게스트|Gast|Ospite|अतिथि
Student|Estudiante|학생|Schüler|Studente|विद्यार्थी
Teacher|Profesor|교사|Lehrkraft|Insegnante|शिक्षक
Admin|Administrador|관리자|Administrator|Amministratore|व्यवस्थापक
Administrator|Administrador|관리자|Administrator|Amministratore|व्यवस्थापक
Support|Soporte|고객 지원|Support|Assistenza|सहायता
Contact support|Contactar con soporte|지원팀 문의|Support kontaktieren|Contatta l’assistenza|सहायता से संपर्क करें
Forgot password|Olvidé mi contraseña|비밀번호 찾기|Passwort vergessen|Password dimenticata|पासवर्ड भूल गए
Forgot password?|¿Olvidaste tu contraseña?|비밀번호를 잊으셨나요?|Passwort vergessen?|Password dimenticata?|पासवर्ड भूल गए?
My Account|Mi cuenta|내 계정|Mein Konto|Il mio account|मेरा खाता
My account|Mi cuenta|내 계정|Mein Konto|Il mio account|मेरा खाता
Profile|Perfil|프로필|Profil|Profilo|प्रोफ़ाइल
Account|Cuenta|계정|Konto|Account|खाता
Account settings|Configuración de la cuenta|계정 설정|Kontoeinstellungen|Impostazioni account|खाता सेटिंग्स
Notifications|Notificaciones|알림|Benachrichtigungen|Notifiche|सूचनाएँ
Privacy|Privacidad|개인정보 보호|Datenschutz|Privacy|गोपनीयता
Privacy policy|Política de privacidad|개인정보 처리방침|Datenschutzerklärung|Informativa sulla privacy|गोपनीयता नीति
Privacy Policy|Política de privacidad|개인정보 처리방침|Datenschutzerklärung|Informativa sulla privacy|गोपनीयता नीति
Terms of use|Condiciones de uso|이용 약관|Nutzungsbedingungen|Condizioni d’uso|उपयोग की शर्तें
Terms of Use|Condiciones de uso|이용 약관|Nutzungsbedingungen|Condizioni d’uso|उपयोग की शर्तें
Help|Ayuda|도움말|Hilfe|Aiuto|मदद
About|Acerca de|소개|Über uns|Informazioni|परिचय
Install app|Instalar aplicación|앱 설치|App installieren|Installa app|ऐप इंस्टॉल करें
Install Classora|Instalar Classora|Classora 설치|Classora installieren|Installa Classora|Classora इंस्टॉल करें
Our accounts|Nuestras cuentas|공식 계정|Unsere Konten|I nostri account|हमारे खाते
Sound|Sonido|소리|Ton|Audio|ध्वनि
Motion|Movimiento|애니메이션|Animationen|Animazioni|एनिमेशन
Enabled|Activado|활성화|Aktiviert|Attivato|सक्षम
Disabled|Desactivado|비활성화|Deaktiviert|Disattivato|अक्षम
On|Activado|켜짐|Ein|Attivo|चालू
Off|Desactivado|꺼짐|Aus|Disattivo|बंद
Theme|Tema|테마|Design|Tema|थीम
Dark|Oscuro|다크|Dunkel|Scuro|डार्क
Light|Claro|라이트|Hell|Chiaro|लाइट
Mathematics|Matemáticas|수학|Mathematik|Matematica|गणित
Math|Matemáticas|수학|Mathematik|Matematica|गणित
Science|Ciencias|과학|Naturwissenschaften|Scienze|विज्ञान
Arabic|Árabe|아랍어|Arabisch|Arabo|अरबी
English|Inglés|영어|Englisch|Inglese|अंग्रेज़ी
History|Historia|역사|Geschichte|Storia|इतिहास
Geography|Geografía|지리|Geografie|Geografia|भूगोल
Arabic Grammar|Gramática árabe|아랍어 문법|Arabische Grammatik|Grammatica araba|अरबी व्याकरण
English Grammar|Gramática inglesa|영어 문법|Englische Grammatik|Grammatica inglese|अंग्रेज़ी व्याकरण
Grade 7|7.º curso|7학년|Klasse 7|Classe 7|कक्षा 7
Grade 8|8.º curso|8학년|Klasse 8|Classe 8|कक्षा 8
Grade 9|9.º curso|9학년|Klasse 9|Classe 9|कक्षा 9
Grade 10|10.º curso|10학년|Klasse 10|Classe 10|कक्षा 10
Seventh grade|Séptimo curso|7학년|Siebte Klasse|Settima classe|सातवीं कक्षा
Eighth grade|Octavo curso|8학년|Achte Klasse|Ottava classe|आठवीं कक्षा
Ninth grade|Noveno curso|9학년|Neunte Klasse|Nona classe|नौवीं कक्षा
Tenth grade|Décimo curso|10학년|Zehnte Klasse|Decima classe|दसवीं कक्षा
Choose a grade|Elige un curso|학년 선택|Klasse wählen|Scegli una classe|कक्षा चुनें
Choose a subject|Elige una asignatura|과목 선택|Fach wählen|Scegli una materia|विषय चुनें
Choose a topic|Elige un tema|주제 선택|Thema wählen|Scegli un argomento|पाठ चुनें
Topics|Temas|주제|Themen|Argomenti|पाठ
Lessons|Lecciones|수업|Lektionen|Lezioni|पाठ
Lesson|Lección|수업|Lektion|Lezione|पाठ
Learn|Aprender|학습|Lernen|Impara|सीखें
Practice|Practicar|연습|Üben|Esercitati|अभ्यास
Explanation|Explicación|설명|Erklärung|Spiegazione|व्याख्या
Examples|Ejemplos|예시|Beispiele|Esempi|उदाहरण
Example|Ejemplo|예시|Beispiel|Esempio|उदाहरण
Show explanation|Mostrar explicación|설명 보기|Erklärung anzeigen|Mostra spiegazione|व्याख्या दिखाएँ
Show translation|Mostrar traducción|번역 보기|Übersetzung anzeigen|Mostra traduzione|अनुवाद दिखाएँ
Hide translation|Ocultar traducción|번역 숨기기|Übersetzung ausblenden|Nascondi traduzione|अनुवाद छिपाएँ
Exercises|Ejercicios|연습 문제|Übungen|Esercizi|अभ्यास प्रश्न
Flashcards|Tarjetas de estudio|학습 카드|Lernkarten|Schede didattiche|अध्ययन कार्ड
Assignments|Tareas|과제|Aufgaben|Compiti|गृहकार्य
Assignment|Tarea|과제|Aufgabe|Compito|गृहकार्य
Exams|Exámenes|시험|Prüfungen|Esami|परीक्षाएँ
Exam|Examen|시험|Prüfung|Esame|परीक्षा
Quiz|Cuestionario|퀴즈|Quiz|Quiz|प्रश्नोत्तरी
Competitions|Competiciones|대회|Wettbewerbe|Competizioni|प्रतियोगिताएँ
Competition|Competición|대회|Wettbewerb|Competizione|प्रतियोगिता
Results|Resultados|결과|Ergebnisse|Risultati|परिणाम
Score|Puntuación|점수|Punktzahl|Punteggio|अंक
Points|Puntos|점수|Punkte|Punti|अंक
Question|Pregunta|문제|Frage|Domanda|प्रश्न
Questions|Preguntas|문제|Fragen|Domande|प्रश्न
Answer|Respuesta|답|Antwort|Risposta|उत्तर
Your answer|Tu respuesta|내 답|Deine Antwort|La tua risposta|आपका उत्तर
Enter your answer|Escribe tu respuesta|답을 입력하세요|Antwort eingeben|Inserisci la risposta|अपना उत्तर लिखें
Check answer|Comprobar respuesta|답 확인|Antwort prüfen|Controlla la risposta|उत्तर जाँचें
Check|Comprobar|확인|Prüfen|Controlla|जाँचें
Submit|Entregar|제출|Abgeben|Invia|जमा करें
Correct|Correcto|정답|Richtig|Corretto|सही
Incorrect|Incorrecto|오답|Falsch|Errato|गलत
Correct answer|Respuesta correcta|정답|Richtige Antwort|Risposta corretta|सही उत्तर
Hint|Pista|힌트|Hinweis|Suggerimento|संकेत
Easy|Fácil|쉬움|Leicht|Facile|आसान
Medium|Intermedio|보통|Mittel|Medio|मध्यम
Hard|Difícil|어려움|Schwer|Difficile|कठिन
Difficulty|Dificultad|난이도|Schwierigkeit|Difficoltà|कठिनाई
Time|Tiempo|시간|Zeit|Tempo|समय
Progress|Progreso|학습 현황|Fortschritt|Progressi|प्रगति
My progress|Mi progreso|내 학습 현황|Mein Fortschritt|I miei progressi|मेरी प्रगति
My classes|Mis clases|내 학급|Meine Klassen|Le mie classi|मेरी कक्षाएँ
Join class|Unirse a una clase|학급 참여|Klasse beitreten|Unisciti alla classe|कक्षा में शामिल हों
Create class|Crear clase|학급 만들기|Klasse erstellen|Crea classe|कक्षा बनाएँ
Class code|Código de clase|학급 코드|Klassencode|Codice classe|कक्षा कोड
Students|Estudiantes|학생|Schüler|Studenti|विद्यार्थी
Teachers|Profesores|교사|Lehrkräfte|Insegnanti|शिक्षक
Members|Miembros|멤버|Mitglieder|Membri|सदस्य
Details|Detalles|상세 정보|Details|Dettagli|विवरण
Copy|Copiar|복사|Kopieren|Copia|कॉपी करें
Copy ID|Copiar ID|ID 복사|ID kopieren|Copia ID|आईडी कॉपी करें
Copied|Copiado|복사됨|Kopiert|Copiato|कॉपी किया गया
Online|En línea|온라인|Online|Online|ऑनलाइन
Offline|Sin conexión|오프라인|Offline|Offline|ऑफ़लाइन
Message|Mensaje|메시지|Nachricht|Messaggio|संदेश
Messages|Mensajes|메시지|Nachrichten|Messaggi|संदेश
Type a message…|Escribe un mensaje…|메시지를 입력하세요…|Nachricht schreiben…|Scrivi un messaggio…|संदेश लिखें…
Type your question…|Escribe tu pregunta…|질문을 입력하세요…|Frage eingeben…|Scrivi la tua domanda…|अपना प्रश्न लिखें…
Report|Reportar|신고|Melden|Segnala|रिपोर्ट करें
Block|Bloquear|차단|Blockieren|Blocca|ब्लॉक करें
Unblock|Desbloquear|차단 해제|Entsperren|Sblocca|अनब्लॉक करें
Notifications and updates|Notificaciones y novedades|알림 및 소식|Benachrichtigungen und Neuigkeiten|Notifiche e aggiornamenti|सूचनाएँ और अपडेट
Calculator|Calculadora|계산기|Taschenrechner|Calcolatrice|कैलकुलेटर
Scientific calculator|Calculadora científica|공학용 계산기|Wissenschaftlicher Taschenrechner|Calcolatrice scientifica|वैज्ञानिक कैलकुलेटर
Calculate|Calcular|계산|Berechnen|Calcola|गणना करें
Clear|Borrar|지우기|Löschen|Cancella|साफ़ करें
Backspace|Borrar último carácter|마지막 글자 삭제|Letztes Zeichen löschen|Cancella ultimo carattere|अंतिम अक्षर हटाएँ
Pythagoras|Pitágoras|피타고라스|Pythagoras|Pitagora|पाइथागोरस
Pythagorean theorem|Teorema de Pitágoras|피타고라스 정리|Satz des Pythagoras|Teorema di Pitagora|पाइथागोरस प्रमेय
Pythagorean Theorem|Teorema de Pitágoras|피타고라스 정리|Satz des Pythagoras|Teorema di Pitagora|पाइथागोरस प्रमेय
Periodic table|Tabla periódica|주기율표|Periodensystem|Tavola periodica|आवर्त सारणी
Periodic Table|Tabla periódica|주기율표|Periodensystem|Tavola periodica|आवर्त सारणी
Acids and bases|Ácidos y bases|산과 염기|Säuren und Basen|Acidi e basi|अम्ल और क्षार
Acid|Ácido|산|Säure|Acido|अम्ल
Base|Base|염기|Base|Base|क्षार
Neutral|Neutro|중성|Neutral|Neutro|उदासीन
Elements|Elementos|원소|Elemente|Elementi|तत्व
Atom|Átomo|원자|Atom|Atomo|परमाणु
Energy|Energía|에너지|Energie|Energia|ऊर्जा
Force|Fuerza|힘|Kraft|Forza|बल
Speed|Velocidad|속력|Geschwindigkeit|Velocità|चाल
Distance|Distancia|거리|Entfernung|Distanza|दूरी
Mass|Masa|질량|Masse|Massa|द्रव्यमान
Volume|Volumen|부피|Volumen|Volume|आयतन
Density|Densidad|밀도|Dichte|Densità|घनत्व
Temperature|Temperatura|온도|Temperatur|Temperatura|तापमान
Length|Longitud|길이|Länge|Lunghezza|लंबाई
Width|Anchura|너비|Breite|Larghezza|चौड़ाई
Height|Altura|높이|Höhe|Altezza|ऊँचाई
Area|Área|넓이|Fläche|Area|क्षेत्रफल
Perimeter|Perímetro|둘레|Umfang|Perimetro|परिमाप
Radius|Radio|반지름|Radius|Raggio|त्रिज्या
Angle|Ángulo|각도|Winkel|Angolo|कोण
Triangle|Triángulo|삼각형|Dreieck|Triangolo|त्रिभुज
Circle|Círculo|원|Kreis|Cerchio|वृत्त
Square|Cuadrado|정사각형|Quadrat|Quadrato|वर्ग
Rectangle|Rectángulo|직사각형|Rechteck|Rettangolo|आयत
Equation|Ecuación|방정식|Gleichung|Equazione|समीकरण
Equations|Ecuaciones|방정식|Gleichungen|Equazioni|समीकरण
Statistics|Estadística|통계|Statistik|Statistica|सांख्यिकी
Probability|Probabilidad|확률|Wahrscheinlichkeit|Probabilità|प्रायिकता
Fractions|Fracciones|분수|Brüche|Frazioni|भिन्न
Percentages|Porcentajes|백분율|Prozentrechnung|Percentuali|प्रतिशत
Coordinates|Coordenadas|좌표|Koordinaten|Coordinate|निर्देशांक
Graph|Gráfico|그래프|Graph|Grafico|ग्राफ़
Linear function|Función lineal|일차함수|Lineare Funktion|Funzione lineare|रैखिक फलन
Slope|Pendiente|기울기|Steigung|Pendenza|ढाल
Welcome|Bienvenido|환영합니다|Willkommen|Benvenuto|स्वागत है
Welcome to Classora|Bienvenido a Classora|Classora에 오신 것을 환영합니다|Willkommen bei Classora|Benvenuto su Classora|Classora में आपका स्वागत है
Teacher workspace|Espacio del profesor|교사 작업 공간|Lehrerbereich|Area insegnante|शिक्षक कार्यक्षेत्र
My learning dashboard|Mi panel de aprendizaje|내 학습 대시보드|Meine Lernübersicht|Il mio pannello di apprendimento|मेरा अध्ययन डैशबोर्ड
Classora announcements|Anuncios de Classora|Classora 공지|Classora-Mitteilungen|Annunci di Classora|Classora घोषणाएँ
Announcements|Anuncios|공지|Mitteilungen|Annunci|घोषणाएँ
Admin panel|Panel de administración|관리자 패널|Adminbereich|Pannello amministratore|व्यवस्थापक पैनल
Support requests|Solicitudes de soporte|지원 요청|Supportanfragen|Richieste di assistenza|सहायता अनुरोध
View profile|Ver perfil|프로필 보기|Profil anzeigen|Visualizza profilo|प्रोफ़ाइल देखें
Manage|Gestionar|관리|Verwalten|Gestisci|प्रबंधित करें
Manage / delete sent assignments|Gestionar o eliminar tareas enviadas|보낸 과제 관리 및 삭제|Gesendete Aufgaben verwalten oder löschen|Gestisci o elimina compiti inviati|भेजे गए गृहकार्य प्रबंधित करें या हटाएँ
Select|Seleccionar|선택|Auswählen|Seleziona|चुनें
Filter|Filtrar|필터|Filtern|Filtra|फ़िल्टर
Refresh|Actualizar|새로고침|Aktualisieren|Aggiorna|रीफ़्रेश करें
Retry|Reintentar|다시 시도|Erneut versuchen|Riprova|पुनः प्रयास करें
No results|Sin resultados|결과 없음|Keine Ergebnisse|Nessun risultato|कोई परिणाम नहीं
New|Nuevo|새 항목|Neu|Nuovo|नया
Today|Hoy|오늘|Heute|Oggi|आज
Tomorrow|Mañana|내일|Morgen|Domani|कल
Yesterday|Ayer|어제|Gestern|Ieri|कल
Date|Fecha|날짜|Datum|Data|तारीख
Number|Número|숫자|Zahl|Numero|संख्या
Description|Descripción|설명|Beschreibung|Descrizione|विवरण
Title|Título|제목|Titel|Titolo|शीर्षक
Optional|Opcional|선택 사항|Optional|Facoltativo|वैकल्पिक
Required|Obligatorio|필수|Erforderlich|Obbligatorio|आवश्यक
This language is in preview. Some lessons and messages are still shown in English.|Este idioma está en versión preliminar. Algunas lecciones y mensajes siguen en inglés.|이 언어는 미리보기 버전입니다. 일부 수업과 안내는 영어로 표시됩니다.|Diese Sprache ist eine Vorschau. Einige Lektionen und Hinweise werden noch auf Englisch angezeigt.|Questa lingua è in anteprima. Alcune lezioni e alcuni avvisi sono ancora in inglese.|यह भाषा पूर्वावलोकन में है। कुछ पाठ और सूचनाएँ अभी अंग्रेज़ी में दिखाई जाती हैं।
`.trim().split('\n').map(line=>line.split('|'));
const dictionaries=Object.fromEntries(['es','ko','de','it','hi'].map((lang,i)=>[lang,Object.fromEntries(rows.map(row=>[row[0],row[i+1]]))]));
let selected='en';
try{const saved=localStorage.getItem('pythagorasi_language');if(Object.hasOwn(languages,saved))selected=saved}catch{}
const normalize=value=>String(value).replace(/\s+/g,' ').trim();
function t(value){
 const dictionary=dictionaries[selected];if(!dictionary||typeof value!=='string')return value;
 const key=normalize(value);let result=dictionary[key];
 // Match the same UI label when an old module still prefixes an icon or appends a colon.
 if(!result){const clean=key.replace(/^[\p{Extended_Pictographic}\uFE0F\u200D\s]+/u,'').replace(/[:：]$/,'');if(dictionary[clean])result=key.replace(clean,dictionary[clean]);}
 return result?value.replace(value.trim(),result):value;
}
function select(language){selected=Object.hasOwn(languages,language)?language:'en';return selected}
function syncControls(){
 document.querySelectorAll('[data-classora-language]').forEach(button=>{
  const active=button.dataset.classoraLanguage===selected;button.setAttribute('aria-pressed',String(active));button.classList.toggle('active',active);
 });
 document.querySelectorAll('[data-locale-preview-note]').forEach(note=>{
  note.hidden=!dictionaries[selected];note.textContent=t('This language is in preview. Some lessons and messages are still shown in English.');
 });
}
window.ClassoraLocale={languages,dictionaries,t,select,syncControls,get language(){return selected},get extended(){return Boolean(dictionaries[selected])}};
})();
