/* Offline UI dictionaries. Unknown authored text remains in the English source language.
 * No visitor text, names, messages or answers are sent to a translation service.
 */
(() => {
'use strict';
const languages={ar:'العربية',en:'English',es:'Español',ko:'한국어',de:'Deutsch',it:'Italiano',hi:'हिन्दी',tr:'Türkçe'};
const rows=`
Settings|Configuración|설정|Einstellungen|Impostazioni|सेटिंग्स|Ayarlar
Home|Inicio|홈|Startseite|Home|होम|Ana sayfa
Lobby|Inicio|홈|Startseite|Home|होम|Ana sayfa
Subjects|Asignaturas|과목|Fächer|Materie|विषय|Dersler
Classes|Clases|학급|Klassen|Classi|कक्षाएँ|Sınıflar
Chat|Chat|채팅|Chat|Chat|चैट|Sohbet
Language|Idioma|언어|Sprache|Lingua|भाषा|Dil
Language / Language|Idioma|언어|Sprache|Lingua|भाषा|Dil
Quick navigation|Navegación rápida|빠른 탐색|Schnellnavigation|Navigazione rapida|त्वरित नेविगेशन|Hızlı gezinme
Site shortcuts|Accesos directos|사이트 바로가기|Verknüpfungen|Scorciatoie|साइट शॉर्टकट|Site kısayolları
Back|Volver|뒤로|Zurück|Indietro|वापस|Geri
Return to lobby|Volver al inicio|홈으로 돌아가기|Zur Startseite|Torna alla home|होम पर लौटें|Ana sayfaya dön
Back to lobby|Volver al inicio|홈으로 돌아가기|Zur Startseite|Torna alla home|होम पर लौटें|Ana sayfaya dön
Close|Cerrar|닫기|Schließen|Chiudi|बंद करें|Kapat
Open|Abrir|열기|Öffnen|Apri|खोलें|Aç
Cancel|Cancelar|취소|Abbrechen|Annulla|रद्द करें|İptal
Save|Guardar|저장|Speichern|Salva|सहेजें|Kaydet
Save changes|Guardar cambios|변경 사항 저장|Änderungen speichern|Salva modifiche|बदलाव सहेजें|Değişiklikleri kaydet
Delete|Eliminar|삭제|Löschen|Elimina|हटाएँ|Sil
Edit|Editar|수정|Bearbeiten|Modifica|संपादित करें|Düzenle
Send|Enviar|보내기|Senden|Invia|भेजें|Gönder
Search|Buscar|검색|Suchen|Cerca|खोजें|Ara
Search…|Buscar…|검색…|Suchen…|Cerca…|खोजें…|Ara…
Next|Siguiente|다음|Weiter|Avanti|अगला|Sonraki
Previous|Anterior|이전|Zurück|Precedente|पिछला|Önceki
Continue|Continuar|계속|Weiter|Continua|जारी रखें|Devam et
Start|Empezar|시작|Starten|Inizia|शुरू करें|Başla
Reset|Restablecer|초기화|Zurücksetzen|Reimposta|रीसेट करें|Sıfırla
Try again|Intentar de nuevo|다시 시도|Erneut versuchen|Riprova|फिर से कोशिश करें|Tekrar dene
Loading…|Cargando…|불러오는 중…|Wird geladen…|Caricamento…|लोड हो रहा है…|Yükleniyor…
Loading...|Cargando…|불러오는 중…|Wird geladen…|Caricamento…|लोड हो रहा है…|Yükleniyor…
Done|Listo|완료|Fertig|Fatto|हो गया|Tamamlandı
Yes|Sí|예|Ja|Sì|हाँ|Evet
No|No|아니요|Nein|No|नहीं|Hayır
OK|Aceptar|확인|OK|OK|ठीक है|Tamam
All|Todo|전체|Alle|Tutto|सभी|Tümü
Name|Nombre|이름|Name|Nome|नाम|Ad
Email|Correo electrónico|이메일|E-Mail|Email|ईमेल|E-posta
Password|Contraseña|비밀번호|Passwort|Password|पासवर्ड|Şifre
Username|Nombre de usuario|사용자 이름|Benutzername|Nome utente|उपयोगकर्ता नाम|Kullanıcı adı
Login name|Nombre de usuario|사용자 이름|Benutzername|Nome utente|उपयोगकर्ता नाम|Kullanıcı adı
Sign in|Iniciar sesión|로그인|Anmelden|Accedi|लॉग इन करें|Giriş yap
Sign out|Cerrar sesión|로그아웃|Abmelden|Esci|लॉग आउट करें|Çıkış yap
Log in|Iniciar sesión|로그인|Anmelden|Accedi|लॉग इन करें|Giriş yap
Create account|Crear cuenta|계정 만들기|Konto erstellen|Crea account|खाता बनाएँ|Hesap oluştur
Create an account|Crear una cuenta|계정 만들기|Konto erstellen|Crea un account|खाता बनाएँ|Hesap oluştur
Continue with Google|Continuar con Google|Google로 계속하기|Mit Google fortfahren|Continua con Google|Google से जारी रखें|Google ile devam et
Sign in with Google|Iniciar sesión con Google|Google로 로그인|Mit Google anmelden|Accedi con Google|Google से लॉग इन करें|Google ile giriş yap
Continue as guest|Continuar como invitado|게스트로 계속하기|Als Gast fortfahren|Continua come ospite|अतिथि के रूप में जारी रखें|Misafir olarak devam et
Guest|Invitado|게스트|Gast|Ospite|अतिथि|Misafir
Student|Estudiante|학생|Schüler|Studente|विद्यार्थी|Öğrenci
Teacher|Profesor|교사|Lehrkraft|Insegnante|शिक्षक|Öğretmen
Admin|Administrador|관리자|Administrator|Amministratore|व्यवस्थापक|Yönetici
Administrator|Administrador|관리자|Administrator|Amministratore|व्यवस्थापक|Yönetici
Support|Soporte|고객 지원|Support|Assistenza|सहायता|Destek
Contact support|Contactar con soporte|지원팀 문의|Support kontaktieren|Contatta l’assistenza|सहायता से संपर्क करें|Destek ekibiyle iletişime geç
Forgot password|Olvidé mi contraseña|비밀번호 찾기|Passwort vergessen|Password dimenticata|पासवर्ड भूल गए|Şifremi unuttum
Forgot password?|¿Olvidaste tu contraseña?|비밀번호를 잊으셨나요?|Passwort vergessen?|Password dimenticata?|पासवर्ड भूल गए?|Şifrenizi mi unuttunuz?
My Account|Mi cuenta|내 계정|Mein Konto|Il mio account|मेरा खाता|Hesabım
My account|Mi cuenta|내 계정|Mein Konto|Il mio account|मेरा खाता|Hesabım
Profile|Perfil|프로필|Profil|Profilo|प्रोफ़ाइल|Profil
Account|Cuenta|계정|Konto|Account|खाता|Hesap
Account settings|Configuración de la cuenta|계정 설정|Kontoeinstellungen|Impostazioni account|खाता सेटिंग्स|Hesap ayarları
Notifications|Notificaciones|알림|Benachrichtigungen|Notifiche|सूचनाएँ|Bildirimler
Privacy|Privacidad|개인정보 보호|Datenschutz|Privacy|गोपनीयता|Gizlilik
Privacy policy|Política de privacidad|개인정보 처리방침|Datenschutzerklärung|Informativa sulla privacy|गोपनीयता नीति|Gizlilik politikası
Privacy Policy|Política de privacidad|개인정보 처리방침|Datenschutzerklärung|Informativa sulla privacy|गोपनीयता नीति|Gizlilik politikası
Terms of use|Condiciones de uso|이용 약관|Nutzungsbedingungen|Condizioni d’uso|उपयोग की शर्तें|Kullanım koşulları
Terms of Use|Condiciones de uso|이용 약관|Nutzungsbedingungen|Condizioni d’uso|उपयोग की शर्तें|Kullanım koşulları
Help|Ayuda|도움말|Hilfe|Aiuto|मदद|Yardım
About|Acerca de|소개|Über uns|Informazioni|परिचय|Hakkında
Install app|Instalar aplicación|앱 설치|App installieren|Installa app|ऐप इंस्टॉल करें|Uygulamayı yükle
Install Classora|Instalar Classora|Classora 설치|Classora installieren|Installa Classora|Classora इंस्टॉल करें|Classora'yı yükle
Our accounts|Nuestras cuentas|공식 계정|Unsere Konten|I nostri account|हमारे खाते|Hesaplarımız
Sound|Sonido|소리|Ton|Audio|ध्वनि|Ses
Motion|Movimiento|애니메이션|Animationen|Animazioni|एनिमेशन|Animasyonlar
Enabled|Activado|활성화|Aktiviert|Attivato|सक्षम|Etkin
Disabled|Desactivado|비활성화|Deaktiviert|Disattivato|अक्षम|Devre dışı
On|Activado|켜짐|Ein|Attivo|चालू|Açık
Off|Desactivado|꺼짐|Aus|Disattivo|बंद|Kapalı
Theme|Tema|테마|Design|Tema|थीम|Tema
Dark|Oscuro|다크|Dunkel|Scuro|डार्क|Koyu
Light|Claro|라이트|Hell|Chiaro|लाइट|Açık
Mathematics|Matemáticas|수학|Mathematik|Matematica|गणित|Matematik
Math|Matemáticas|수학|Mathematik|Matematica|गणित|Matematik
Science|Ciencias|과학|Naturwissenschaften|Scienze|विज्ञान|Fen bilimleri
Arabic|Árabe|아랍어|Arabisch|Arabo|अरबी|Arapça
English|Inglés|영어|Englisch|Inglese|अंग्रेज़ी|İngilizce
History|Historia|역사|Geschichte|Storia|इतिहास|Tarih
Geography|Geografía|지리|Geografie|Geografia|भूगोल|Coğrafya
Arabic Grammar|Gramática árabe|아랍어 문법|Arabische Grammatik|Grammatica araba|अरबी व्याकरण|Arapça dil bilgisi
English Grammar|Gramática inglesa|영어 문법|Englische Grammatik|Grammatica inglese|अंग्रेज़ी व्याकरण|İngilizce dil bilgisi
Grade 7|7.º curso|7학년|Klasse 7|Classe 7|कक्षा 7|7. sınıf
Grade 8|8.º curso|8학년|Klasse 8|Classe 8|कक्षा 8|8. sınıf
Grade 9|9.º curso|9학년|Klasse 9|Classe 9|कक्षा 9|9. sınıf
Grade 10|10.º curso|10학년|Klasse 10|Classe 10|कक्षा 10|10. sınıf
Seventh grade|Séptimo curso|7학년|Siebte Klasse|Settima classe|सातवीं कक्षा|Yedinci sınıf
Eighth grade|Octavo curso|8학년|Achte Klasse|Ottava classe|आठवीं कक्षा|Sekizinci sınıf
Ninth grade|Noveno curso|9학년|Neunte Klasse|Nona classe|नौवीं कक्षा|Dokuzuncu sınıf
Tenth grade|Décimo curso|10학년|Zehnte Klasse|Decima classe|दसवीं कक्षा|Onuncu sınıf
Choose a grade|Elige un curso|학년 선택|Klasse wählen|Scegli una classe|कक्षा चुनें|Sınıf düzeyi seç
Choose a subject|Elige una asignatura|과목 선택|Fach wählen|Scegli una materia|विषय चुनें|Ders seç
Choose a topic|Elige un tema|주제 선택|Thema wählen|Scegli un argomento|पाठ चुनें|Konu seç
Topics|Temas|주제|Themen|Argomenti|पाठ|Konular
Lessons|Lecciones|수업|Lektionen|Lezioni|पाठ|Dersler
Lesson|Lección|수업|Lektion|Lezione|पाठ|Ders
Learn|Aprender|학습|Lernen|Impara|सीखें|Öğren
Practice|Practicar|연습|Üben|Esercitati|अभ्यास|Alıştırma
Explanation|Explicación|설명|Erklärung|Spiegazione|व्याख्या|Açıklama
Examples|Ejemplos|예시|Beispiele|Esempi|उदाहरण|Örnekler
Example|Ejemplo|예시|Beispiel|Esempio|उदाहरण|Örnek
Show explanation|Mostrar explicación|설명 보기|Erklärung anzeigen|Mostra spiegazione|व्याख्या दिखाएँ|Açıklamayı göster
Show translation|Mostrar traducción|번역 보기|Übersetzung anzeigen|Mostra traduzione|अनुवाद दिखाएँ|Çeviriyi göster
Hide translation|Ocultar traducción|번역 숨기기|Übersetzung ausblenden|Nascondi traduzione|अनुवाद छिपाएँ|Çeviriyi gizle
Exercises|Ejercicios|연습 문제|Übungen|Esercizi|अभ्यास प्रश्न|Alıştırmalar
Flashcards|Tarjetas de estudio|학습 카드|Lernkarten|Schede didattiche|अध्ययन कार्ड|Çalışma kartları
Assignments|Tareas|과제|Aufgaben|Compiti|गृहकार्य|Ödevler
Assignment|Tarea|과제|Aufgabe|Compito|गृहकार्य|Ödev
Exams|Exámenes|시험|Prüfungen|Esami|परीक्षाएँ|Sınavlar
Exam|Examen|시험|Prüfung|Esame|परीक्षा|Sınav
Quiz|Cuestionario|퀴즈|Quiz|Quiz|प्रश्नोत्तरी|Kısa sınav
Competitions|Competiciones|대회|Wettbewerbe|Competizioni|प्रतियोगिताएँ|Yarışmalar
Competition|Competición|대회|Wettbewerb|Competizione|प्रतियोगिता|Yarışma
Results|Resultados|결과|Ergebnisse|Risultati|परिणाम|Sonuçlar
Score|Puntuación|점수|Punktzahl|Punteggio|अंक|Puan
Points|Puntos|점수|Punkte|Punti|अंक|Puanlar
Question|Pregunta|문제|Frage|Domanda|प्रश्न|Soru
Questions|Preguntas|문제|Fragen|Domande|प्रश्न|Sorular
Answer|Respuesta|답|Antwort|Risposta|उत्तर|Cevap
Your answer|Tu respuesta|내 답|Deine Antwort|La tua risposta|आपका उत्तर|Cevabınız
Enter your answer|Escribe tu respuesta|답을 입력하세요|Antwort eingeben|Inserisci la risposta|अपना उत्तर लिखें|Cevabınızı yazın
Check answer|Comprobar respuesta|답 확인|Antwort prüfen|Controlla la risposta|उत्तर जाँचें|Cevabı kontrol et
Check|Comprobar|확인|Prüfen|Controlla|जाँचें|Kontrol et
Submit|Entregar|제출|Abgeben|Invia|जमा करें|Teslim et
Correct|Correcto|정답|Richtig|Corretto|सही|Doğru
Incorrect|Incorrecto|오답|Falsch|Errato|गलत|Yanlış
Correct answer|Respuesta correcta|정답|Richtige Antwort|Risposta corretta|सही उत्तर|Doğru cevap
Hint|Pista|힌트|Hinweis|Suggerimento|संकेत|İpucu
Easy|Fácil|쉬움|Leicht|Facile|आसान|Kolay
Medium|Intermedio|보통|Mittel|Medio|मध्यम|Orta
Hard|Difícil|어려움|Schwer|Difficile|कठिन|Zor
Difficulty|Dificultad|난이도|Schwierigkeit|Difficoltà|कठिनाई|Zorluk
Time|Tiempo|시간|Zeit|Tempo|समय|Süre
Progress|Progreso|학습 현황|Fortschritt|Progressi|प्रगति|İlerleme
My progress|Mi progreso|내 학습 현황|Mein Fortschritt|I miei progressi|मेरी प्रगति|İlerlemem
My classes|Mis clases|내 학급|Meine Klassen|Le mie classi|मेरी कक्षाएँ|Sınıflarım
Join class|Unirse a una clase|학급 참여|Klasse beitreten|Unisciti alla classe|कक्षा में शामिल हों|Sınıfa katıl
Create class|Crear clase|학급 만들기|Klasse erstellen|Crea classe|कक्षा बनाएँ|Sınıf oluştur
Class code|Código de clase|학급 코드|Klassencode|Codice classe|कक्षा कोड|Sınıf kodu
Students|Estudiantes|학생|Schüler|Studenti|विद्यार्थी|Öğrenciler
Teachers|Profesores|교사|Lehrkräfte|Insegnanti|शिक्षक|Öğretmenler
Members|Miembros|멤버|Mitglieder|Membri|सदस्य|Üyeler
Details|Detalles|상세 정보|Details|Dettagli|विवरण|Ayrıntılar
Copy|Copiar|복사|Kopieren|Copia|कॉपी करें|Kopyala
Copy ID|Copiar ID|ID 복사|ID kopieren|Copia ID|आईडी कॉपी करें|Kimliği kopyala
Copied|Copiado|복사됨|Kopiert|Copiato|कॉपी किया गया|Kopyalandı
Online|En línea|온라인|Online|Online|ऑनलाइन|Çevrimiçi
Offline|Sin conexión|오프라인|Offline|Offline|ऑफ़लाइन|Çevrimdışı
Message|Mensaje|메시지|Nachricht|Messaggio|संदेश|Mesaj
Messages|Mensajes|메시지|Nachrichten|Messaggi|संदेश|Mesajlar
Type a message…|Escribe un mensaje…|메시지를 입력하세요…|Nachricht schreiben…|Scrivi un messaggio…|संदेश लिखें…|Bir mesaj yazın…
Type your question…|Escribe tu pregunta…|질문을 입력하세요…|Frage eingeben…|Scrivi la tua domanda…|अपना प्रश्न लिखें…|Sorunuzu yazın…
Report|Reportar|신고|Melden|Segnala|रिपोर्ट करें|Bildir
Block|Bloquear|차단|Blockieren|Blocca|ब्लॉक करें|Engelle
Unblock|Desbloquear|차단 해제|Entsperren|Sblocca|अनब्लॉक करें|Engeli kaldır
Notifications and updates|Notificaciones y novedades|알림 및 소식|Benachrichtigungen und Neuigkeiten|Notifiche e aggiornamenti|सूचनाएँ और अपडेट|Bildirimler ve güncellemeler
Calculator|Calculadora|계산기|Taschenrechner|Calcolatrice|कैलकुलेटर|Hesap makinesi
Scientific calculator|Calculadora científica|공학용 계산기|Wissenschaftlicher Taschenrechner|Calcolatrice scientifica|वैज्ञानिक कैलकुलेटर|Bilimsel hesap makinesi
Calculate|Calcular|계산|Berechnen|Calcola|गणना करें|Hesapla
Clear|Borrar|지우기|Löschen|Cancella|साफ़ करें|Temizle
Backspace|Borrar último carácter|마지막 글자 삭제|Letztes Zeichen löschen|Cancella ultimo carattere|अंतिम अक्षर हटाएँ|Son karakteri sil
Pythagoras|Pitágoras|피타고라스|Pythagoras|Pitagora|पाइथागोरस|Pisagor
Pythagorean theorem|Teorema de Pitágoras|피타고라스 정리|Satz des Pythagoras|Teorema di Pitagora|पाइथागोरस प्रमेय|Pisagor teoremi
Pythagorean Theorem|Teorema de Pitágoras|피타고라스 정리|Satz des Pythagoras|Teorema di Pitagora|पाइथागोरस प्रमेय|Pisagor teoremi
Periodic table|Tabla periódica|주기율표|Periodensystem|Tavola periodica|आवर्त सारणी|Periyodik tablo
Periodic Table|Tabla periódica|주기율표|Periodensystem|Tavola periodica|आवर्त सारणी|Periyodik tablo
Acids and bases|Ácidos y bases|산과 염기|Säuren und Basen|Acidi e basi|अम्ल और क्षार|Asitler ve bazlar
Acid|Ácido|산|Säure|Acido|अम्ल|Asit
Base|Base|염기|Base|Base|क्षार|Baz
Neutral|Neutro|중성|Neutral|Neutro|उदासीन|Nötr
Elements|Elementos|원소|Elemente|Elementi|तत्व|Elementler
Atom|Átomo|원자|Atom|Atomo|परमाणु|Atom
Energy|Energía|에너지|Energie|Energia|ऊर्जा|Enerji
Force|Fuerza|힘|Kraft|Forza|बल|Kuvvet
Speed|Velocidad|속력|Geschwindigkeit|Velocità|चाल|Sürat
Distance|Distancia|거리|Entfernung|Distanza|दूरी|Mesafe
Mass|Masa|질량|Masse|Massa|द्रव्यमान|Kütle
Volume|Volumen|부피|Volumen|Volume|आयतन|Hacim
Density|Densidad|밀도|Dichte|Densità|घनत्व|Yoğunluk
Temperature|Temperatura|온도|Temperatur|Temperatura|तापमान|Sıcaklık
Length|Longitud|길이|Länge|Lunghezza|लंबाई|Uzunluk
Width|Anchura|너비|Breite|Larghezza|चौड़ाई|Genişlik
Height|Altura|높이|Höhe|Altezza|ऊँचाई|Yükseklik
Area|Área|넓이|Fläche|Area|क्षेत्रफल|Alan
Perimeter|Perímetro|둘레|Umfang|Perimetro|परिमाप|Çevre
Radius|Radio|반지름|Radius|Raggio|त्रिज्या|Yarıçap
Angle|Ángulo|각도|Winkel|Angolo|कोण|Açı
Triangle|Triángulo|삼각형|Dreieck|Triangolo|त्रिभुज|Üçgen
Circle|Círculo|원|Kreis|Cerchio|वृत्त|Çember
Square|Cuadrado|정사각형|Quadrat|Quadrato|वर्ग|Kare
Rectangle|Rectángulo|직사각형|Rechteck|Rettangolo|आयत|Dikdörtgen
Equation|Ecuación|방정식|Gleichung|Equazione|समीकरण|Denklem
Equations|Ecuaciones|방정식|Gleichungen|Equazioni|समीकरण|Denklemler
Statistics|Estadística|통계|Statistik|Statistica|सांख्यिकी|İstatistik
Probability|Probabilidad|확률|Wahrscheinlichkeit|Probabilità|प्रायिकता|Olasılık
Fractions|Fracciones|분수|Brüche|Frazioni|भिन्न|Kesirler
Percentages|Porcentajes|백분율|Prozentrechnung|Percentuali|प्रतिशत|Yüzdeler
Coordinates|Coordenadas|좌표|Koordinaten|Coordinate|निर्देशांक|Koordinatlar
Graph|Gráfico|그래프|Graph|Grafico|ग्राफ़|Grafik
Linear function|Función lineal|일차함수|Lineare Funktion|Funzione lineare|रैखिक फलन|Doğrusal fonksiyon
Slope|Pendiente|기울기|Steigung|Pendenza|ढाल|Eğim
Welcome|Bienvenido|환영합니다|Willkommen|Benvenuto|स्वागत है|Hoş geldiniz
Welcome to Classora|Bienvenido a Classora|Classora에 오신 것을 환영합니다|Willkommen bei Classora|Benvenuto su Classora|Classora में आपका स्वागत है|Classora'ya hoş geldiniz
Teacher workspace|Espacio del profesor|교사 작업 공간|Lehrerbereich|Area insegnante|शिक्षक कार्यक्षेत्र|Öğretmen çalışma alanı
My learning dashboard|Mi panel de aprendizaje|내 학습 대시보드|Meine Lernübersicht|Il mio pannello di apprendimento|मेरा अध्ययन डैशबोर्ड|Öğrenme panelim
Classora announcements|Anuncios de Classora|Classora 공지|Classora-Mitteilungen|Annunci di Classora|Classora घोषणाएँ|Classora duyuruları
Announcements|Anuncios|공지|Mitteilungen|Annunci|घोषणाएँ|Duyurular
Admin panel|Panel de administración|관리자 패널|Adminbereich|Pannello amministratore|व्यवस्थापक पैनल|Yönetici paneli
Support requests|Solicitudes de soporte|지원 요청|Supportanfragen|Richieste di assistenza|सहायता अनुरोध|Destek talepleri
View profile|Ver perfil|프로필 보기|Profil anzeigen|Visualizza profilo|प्रोफ़ाइल देखें|Profili görüntüle
Manage|Gestionar|관리|Verwalten|Gestisci|प्रबंधित करें|Yönet
Manage / delete sent assignments|Gestionar o eliminar tareas enviadas|보낸 과제 관리 및 삭제|Gesendete Aufgaben verwalten oder löschen|Gestisci o elimina compiti inviati|भेजे गए गृहकार्य प्रबंधित करें या हटाएँ|Gönderilen ödevleri yönet veya sil
Select|Seleccionar|선택|Auswählen|Seleziona|चुनें|Seç
Filter|Filtrar|필터|Filtern|Filtra|फ़िल्टर|Filtrele
Refresh|Actualizar|새로고침|Aktualisieren|Aggiorna|रीफ़्रेश करें|Yenile
Retry|Reintentar|다시 시도|Erneut versuchen|Riprova|पुनः प्रयास करें|Tekrar dene
No results|Sin resultados|결과 없음|Keine Ergebnisse|Nessun risultato|कोई परिणाम नहीं|Sonuç bulunamadı
New|Nuevo|새 항목|Neu|Nuovo|नया|Yeni
Today|Hoy|오늘|Heute|Oggi|आज|Bugün
Tomorrow|Mañana|내일|Morgen|Domani|कल|Yarın
Yesterday|Ayer|어제|Gestern|Ieri|कल|Dün
Date|Fecha|날짜|Datum|Data|तारीख|Tarih
Number|Número|숫자|Zahl|Numero|संख्या|Sayı
Description|Descripción|설명|Beschreibung|Descrizione|विवरण|Açıklama
Title|Título|제목|Titel|Titolo|शीर्षक|Başlık
Optional|Opcional|선택 사항|Optional|Facoltativo|वैकल्पिक|İsteğe bağlı
Required|Obligatorio|필수|Erforderlich|Obbligatorio|आवश्यक|Zorunlu
This language is in preview. Some lessons and messages are still shown in English.|Este idioma está en versión preliminar. Algunas lecciones y mensajes siguen en inglés.|이 언어는 미리보기 버전입니다. 일부 수업과 안내는 영어로 표시됩니다.|Diese Sprache ist eine Vorschau. Einige Lektionen und Hinweise werden noch auf Englisch angezeigt.|Questa lingua è in anteprima. Alcune lezioni e alcuni avvisi sono ancora in inglese.|यह भाषा पूर्वावलोकन में है। कुछ पाठ और सूचनाएँ अभी अंग्रेज़ी में दिखाई जाती हैं।|Bu dil önizleme aşamasındadır. Bazı dersler ve iletiler hâlâ İngilizce gösterilmektedir.
Expert|Experto|전문가|Experte|Esperto|विशेषज्ञ|Uzman
Mixed|Mixto|혼합|Gemischt|Misto|मिश्रित|Karma
Grade|Curso|학년|Klasse|Classe|कक्षा|Sınıf
Choose competition topic|Elegir tema de competición|대회 주제 선택|Wettbewerbsthema wählen|Scegli argomento della gara|प्रतियोगिता का विषय चुनें|Yarışma konusu seç
Choose a competition topic|Elige un tema de competición|대회 주제를 선택하세요|Wähle ein Wettbewerbsthema|Scegli un argomento della gara|प्रतियोगिता का विषय चुनें|Yarışma konusu seç
Back to competition setup|Volver a configurar la competición|대회 설정으로 돌아가기|Zurück zur Wettbewerbs-Einrichtung|Torna alla configurazione della gara|प्रतियोगिता सेटअप पर वापस|Yarışma ayarlarına dön
Choose your grade, subject and topic|Elige curso, asignatura y tema|학년, 과목, 주제 선택|Klasse, Fach und Thema wählen|Scegli classe, materia e argomento|कक्षा, विषय और पाठ चुनें|Sınıf, ders ve konu seç
Choose grade|Elegir curso|학년 선택|Klasse wählen|Scegli classe|कक्षा चुनें|Sınıf seç
Choose subject|Elegir asignatura|과목 선택|Fach wählen|Scegli materia|विषय चुनें|Ders seç
Search topics|Buscar temas|주제 검색|Themen suchen|Cerca argomenti|विषय खोजें|Konu ara
No matching topics. Try a different keyword.|No hay temas coincidentes. Prueba otra palabra.|일치하는 주제가 없습니다. 다른 검색어를 사용하세요.|Keine passenden Themen. Versuche ein anderes Wort.|Nessun argomento trovato. Prova un'altra parola.|कोई विषय नहीं मिला। दूसरा शब्द आज़माएँ।|Eşleşen konu yok. Başka kelime deneyin.
Generate questions|Generar preguntas|문제 생성|Fragen erstellen|Genera domande|प्रश्न बनाएँ|Soruları oluştur
Start exam|Empezar examen|시험 시작|Prüfung starten|Inizia esame|परीक्षा शुरू करें|Sınavı başlat
Start competition|Empezar competición|대회 시작|Wettbewerb starten|Inizia gara|प्रतियोगिता शुरू करें|Yarışmayı başlat
Mean|Media|평균|Mittelwert|Media|औसत|Ortalama
Median|Mediana|중앙값|Median|Mediana|माध्यिका|Medyan
Mode|Moda|최빈값|Modalwert|Moda|बहुलक|Mod
Frequency|Frecuencia|도수|Häufigkeit|Frequenza|आवृत्ति|Frekans
Relative frequency|Frecuencia relativa|상대도수|Relative Häufigkeit|Frequenza relativa|सापेक्ष आवृत्ति|Bağıl frekans
Bar chart|Gráfico de barras|막대그래프|Balkendiagramm|Grafico a barre|दंड आलेख|Çubuk grafik
Pie chart|Gráfico circular|원그래프|Kreisdiagramm|Grafico a torta|वृत्त आलेख|Pasta grafik
Line chart|Gráfico de líneas|꺾은선그래프|Liniendiagramm|Grafico a linee|रेखा आलेख|Çizgi grafik
Histogram|Histograma|히스토그램|Histogramm|Istogramma|आयतचित्र|Histogram
Question count|Número de preguntas|문항 수|Fragenanzahl|Numero di domande|प्रश्नों की संख्या|Soru sayısı
Select difficulty|Selecciona la dificultad|난이도 선택|Schwierigkeit wählen|Seleziona difficoltà|कठिनाई चुनें|Zorluk seç
Expert challenge.|Desafío experto.|전문가 도전.|Expertenaufgabe.|Sfida esperta.|विशेषज्ञ चुनौती।|Uzman mücadelesi.
Topic|Tema|주제|Thema|Argomento|विषय|Konu
Positive and negative numbers|Números positivos y negativos|양수와 음수|Positive und negative Zahlen|Numeri positivi e negativi|धनात्मक और ऋणात्मक संख्याएँ|Pozitif ve negatif sayılar
Order of operations|Orden de las operaciones|연산 순서|Rechenreihenfolge|Ordine delle operazioni|संचालन का क्रम|İşlem önceliği
Powers and roots|Potencias y raíces|거듭제곱과 제곱근|Potenzen und Wurzeln|Potenze e radici|घात और मूल|Üslü sayılar ve kökler
Algebraic expressions|Expresiones algebraicas|대수식|Algebraische Ausdrücke|Espressioni algebriche|बीजीय व्यंजक|Cebirsel ifadeler
Variables|Variables|변수|Variablen|Variabili|चर|Değişkenler
Combining like terms|Reducir términos semejantes|동류항 정리|Gleichartige Terme zusammenfassen|Riduzione dei termini simili|समान पदों को जोड़ना|Benzer terimleri birleştirme
Distributive property|Propiedad distributiva|분배법칙|Distributivgesetz|Proprietà distributiva|वितरण नियम|Dağılma özelliği
Linear equations|Ecuaciones lineales|일차방정식|Lineare Gleichungen|Equazioni lineari|रैखिक समीकरण|Doğrusal denklemler
Word problems|Problemas de texto|문장제 문제|Textaufgaben|Problemi con testo|शब्द समस्याएँ|Sözel problemler
Ratio and proportion|Razón y proporción|비와 비례|Verhältnis und Proportion|Rapporti e proporzioni|अनुपात और समानुपात|Oran ve orantı
Coordinate plane|Plano cartesiano|좌표평면|Koordinatensystem|Piano cartesiano|निर्देशांक तल|Koordinat düzlemi
Angles|Ángulos|각|Winkel|Angoli|कोण|Açılar
Triangles|Triángulos|삼각형|Dreiecke|Triangoli|त्रिभुज|Üçgenler
Perimeter and area|Perímetro y área|둘레와 넓이|Umfang und Fläche|Perimetro e area|परिमाप और क्षेत्रफल|Çevre ve alan
Systems of equations|Sistemas de ecuaciones|연립방정식|Gleichungssysteme|Sistemi di equazioni|समीकरणों की प्रणाली|Denklem sistemleri
System of two equations|Sistema de dos ecuaciones|연립일차방정식|System aus zwei Gleichungen|Sistema di due equazioni|दो समीकरणों का निकाय|İki denklemli sistem
Equation of a line|Ecuación de la recta|직선의 방정식|Geradengleichung|Equazione della retta|रेखा का समीकरण|Doğrunun denklemi
Parallel lines|Rectas paralelas|평행선|Parallele Geraden|Rette parallele|समांतर रेखाएँ|Paralel doğrular
Triangle congruence|Congruencia de triángulos|삼각형의 합동|Dreieckskongruenz|Congruenza dei triangoli|त्रिभुजों की सर्वांगसमता|Üçgenlerde eşlik
Triangle similarity|Semejanza de triángulos|삼각형의 닮음|Dreiecksähnlichkeit|Similitudine dei triangoli|त्रिभुजों की समरूपता|Üçgenlerde benzerlik
Quadratic equations|Ecuaciones cuadráticas|이차방정식|Quadratische Gleichungen|Equazioni quadratiche|द्विघात समीकरण|İkinci dereceden denklemler
Quadratic function|Función cuadrática|이차함수|Quadratische Funktion|Funzione quadratica|द्विघात फलन|İkinci dereceden fonksiyon
Parabola|Parábola|포물선|Parabel|Parabola|परवलय|Parabol
Factoring|Factorización|인수분해|Faktorisieren|Scomposizione in fattori|गुणनखंड करना|Çarpanlara ayırma
Geometry|Geometría|기하학|Geometrie|Geometria|ज्यामिति|Geometri
Trigonometry|Trigonometría|삼각법|Trigonometrie|Trigonometria|त्रिकोणमिति|Trigonometri
Matter and its properties|Materia y sus propiedades|물질과 성질|Materie und ihre Eigenschaften|Materia e proprietà|पदार्थ और उसके गुण|Madde ve özellikleri
States of matter|Estados de la materia|물질의 상태|Aggregatzustände|Stati della materia|पदार्थ की अवस्थाएँ|Maddenin halleri
Mass and volume|Masa y volumen|질량과 부피|Masse und Volumen|Massa e volume|द्रव्यमान और आयतन|Kütle ve hacim
Particles and atoms|Partículas y átomos|입자와 원자|Teilchen und Atome|Particelle e atomi|कण और परमाणु|Parçacıklar ve atomlar
Energy transformations|Transformaciones de energía|에너지 전환|Energieumwandlungen|Trasformazioni energetiche|ऊर्जा रूपांतरण|Enerji dönüşümleri
Heat and temperature|Calor y temperatura|열과 온도|Wärme und Temperatur|Calore e temperatura|ऊष्मा और तापमान|Isı ve sıcaklık
Forces and motion|Fuerzas y movimiento|힘과 운동|Kräfte und Bewegung|Forze e movimento|बल और गति|Kuvvet ve hareket
The cell|La célula|세포|Die Zelle|La cellula|कोशिका|Hücre
Human body systems|Sistemas del cuerpo humano|인체의 기관계|Organsysteme des Menschen|Apparati del corpo umano|मानव शरीर तंत्र|İnsan vücut sistemleri
Atomic structure|Estructura atómica|원자 구조|Atomaufbau|Struttura atomica|परमाणु संरचना|Atom yapısı
Compounds|Compuestos|화합물|Verbindungen|Composti|यौगिक|Bileşikler
Mixtures|Mezclas|혼합물|Gemische|Miscele|मिश्रण|Karışımlar
Chemical reactions|Reacciones químicas|화학 반응|Chemische Reaktionen|Reazioni chimiche|रासायनिक अभिक्रियाएँ|Kimyasal tepkimeler
Electricity|Electricidad|전기|Elektrizität|Elettricità|विद्युत|Elektrik
Electric circuits|Circuitos eléctricos|전기 회로|Stromkreise|Circuiti elettrici|विद्युत परिपथ|Elektrik devreleri
Electric current|Corriente eléctrica|전류|Elektrischer Strom|Corrente elettrica|विद्युत धारा|Elektrik akımı
Reproduction|Reproducción|생식|Fortpflanzung|Riproduzione|प्रजनन|Üreme
Basic genetics|Genética básica|기초 유전학|Grundlagen der Genetik|Genetica di base|आनुवंशिकी का परिचय|Temel genetik
Ecosystems|Ecosistemas|생태계|Ökosysteme|Ecosistemi|पारिस्थितिकी तंत्र|Ekosistemler
Food chains|Cadenas alimentarias|먹이 사슬|Nahrungsketten|Catene alimentari|खाद्य श्रृंखलाएँ|Besin zincirleri
Acceleration|Aceleración|가속도|Beschleunigung|Accelerazione|त्वरण|İvme
Chemical bonds|Enlaces químicos|화학 결합|Chemische Bindungen|Legami chimici|रासायनिक बंध|Kimyasal bağlar
Cellular respiration|Respiración celular|세포 호흡|Zellatmung|Respirazione cellulare|कोशिकीय श्वसन|Hücresel solunum
Photosynthesis|Fotosíntesis|광합성|Photosynthese|Fotosintesi|प्रकाश संश्लेषण|Fotosentez
Renaissance|Renacimiento|르네상스|Renaissance|Rinascimento|पुनर्जागरण|Rönesans
Humanism|Humanismo|인문주의|Humanismus|Umanesimo|मानवतावाद|Hümanizm
Reformation|Reforma protestante|종교개혁|Reformation|Riforma protestante|धर्म सुधार|Reform hareketi
Age of Exploration|Era de los descubrimientos|대항해 시대|Zeitalter der Entdeckungen|Età delle esplorazioni|अन्वेषण युग|Keşifler Çağı
French Revolution|Revolución francesa|프랑스 혁명|Französische Revolution|Rivoluzione francese|फ़्रांसीसी क्रांति|Fransız Devrimi
Industrial Revolution|Revolución industrial|산업 혁명|Industrielle Revolution|Rivoluzione industriale|औद्योगिक क्रांति|Sanayi Devrimi
Nationalism|Nacionalismo|민족주의|Nationalismus|Nazionalismo|राष्ट्रवाद|Milliyetçilik
Imperialism|Imperialismo|제국주의|Imperialismus|Imperialismo|साम्राज्यवाद|Emperyalizm
Colonialism|Colonialismo|식민주의|Kolonialismus|Colonialismo|उपनिवेशवाद|Sömürgecilik
World War I|Primera Guerra Mundial|제1차 세계 대전|Erster Weltkrieg|Prima guerra mondiale|प्रथम विश्व युद्ध|I. Dünya Savaşı
Umayyad Caliphate|Califato omeya|우마이야 왕조|Umayyaden-Kalifat|Califfato omayyade|उमय्यद ख़िलाफ़त|Emevî Halifeliği
Abbasid Caliphate|Califato abasí|아바스 왕조|Abbasiden-Kalifat|Califfato abbaside|अब्बासी ख़िलाफ़त|Abbâsî Halifeliği
Al-Andalus|Al-Ándalus|알안달루스|Al-Andalus|Al-Andalus|अल-अंदलुस|Endülüs
Crusades|Cruzadas|십자군 전쟁|Kreuzzüge|Crociate|धर्मयुद्ध|Haçlı Seferleri
Napoleon Bonaparte|Napoleón Bonaparte|나폴레옹 보나파르트|Napoleon Bonaparte|Napoleone Bonaparte|नेपोलियन बोनापार्ट|Napolyon Bonapart
Europe in the Middle Ages|Europa medieval|중세 유럽|Europa im Mittelalter|Europa nel Medioevo|मध्यकालीन यूरोप|Orta Çağ Avrupası
People and the environment|Las personas y el medioambiente|인간과 환경|Mensch und Umwelt|Persone e ambiente|मनुष्य और पर्यावरण|İnsan ve çevre
Population|Población|인구|Bevölkerung|Popolazione|जनसंख्या|Nüfus
Population distribution|Distribución de la población|인구 분포|Bevölkerungsverteilung|Distribuzione della popolazione|जनसंख्या वितरण|Nüfus dağılımı
Migration|Migración|이주|Migration|Migrazione|प्रवासन|Göç
Cities and villages|Ciudades y pueblos|도시와 마을|Städte und Dörfer|Città e villaggi|शहर और गाँव|Şehirler ve köyler
Economy and work|Economía y trabajo|경제와 일|Wirtschaft und Arbeit|Economia e lavoro|अर्थव्यवस्था और कार्य|Ekonomi ve iş
Globalization|Globalización|세계화|Globalisierung|Globalizzazione|वैश्वीकरण|Küreselleşme
Natural resources|Recursos naturales|천연자원|Natürliche Ressourcen|Risorse naturali|प्राकृतिक संसाधन|Doğal kaynaklar
Sustainable development|Desarrollo sostenible|지속 가능한 발전|Nachhaltige Entwicklung|Sviluppo sostenibile|सतत विकास|Sürdürülebilir kalkınma
Earth and the Solar System|Tierra y sistema solar|지구와 태양계|Erde und Sonnensystem|Terra e sistema solare|पृथ्वी और सौरमंडल|Dünya ve Güneş Sistemi
Plate tectonics|Tectónica de placas|판 구조론|Plattentektonik|Tettonica delle placche|प्लेट विवर्तनिकी|Levha tektoniği
Earthquakes|Terremotos|지진|Erdbeben|Terremoti|भूकंप|Depremler
Volcanoes|Volcanes|화산|Vulkane|Vulcani|ज्वालामुखी|Volkanlar
Weather|Tiempo atmosférico|날씨|Wetter|Tempo atmosferico|मौसम|Hava durumu
Climate|Clima|기후|Klima|Clima|जलवायु|İklim
Water cycle|Ciclo del agua|물의 순환|Wasserkreislauf|Ciclo dell’acqua|जल चक्र|Su döngüsü
Climate change|Cambio climático|기후 변화|Klimawandel|Cambiamento climatico|जलवायु परिवर्तन|İklim değişikliği
Renewable energy|Energía renovable|재생 에너지|Erneuerbare Energie|Energia rinnovabile|नवीकरणीय ऊर्जा|Yenilenebilir enerji
Non-renewable energy|Energía no renovable|비재생 에너지|Nicht erneuerbare Energie|Energia non rinnovabile|अनवीकरणीय ऊर्जा|Yenilenemeyen enerji
Present Simple|Presente simple|현재 단순형|Simple Present|Presente semplice|सामान्य वर्तमान काल|Geniş zaman
Present Continuous|Presente continuo|현재 진행형|Present Progressive|Presente progressivo|वर्तमान निरंतर काल|Şimdiki zaman
Past Simple|Pasado simple|과거 단순형|Simple Past|Passato semplice|सामान्य भूतकाल|Geçmiş zaman
Past Continuous|Pasado continuo|과거 진행형|Past Progressive|Passato progressivo|भूतकाल निरंतर|Geçmişte devam eden zaman
Present Perfect|Pretérito perfecto|현재 완료|Present Perfect|Present Perfect|वर्तमान पूर्ण काल|Present perfect
Future with Will|Futuro con will|will 미래형|Zukunft mit will|Futuro con will|Will के साथ भविष्य काल|Will ile gelecek zaman
Comparative|Comparativo|비교급|Komparativ|Comparativo|तुलनात्मक|Karşılaştırma
Superlative|Superlativo|최상급|Superlativ|Superlativo|श्रेष्ठतम|Üstünlük derecesi
Passive Voice|Voz pasiva|수동태|Passiv|Forma passiva|कर्मवाच्य|Edilgen çatı
Zero Conditional|Condicional cero|영 조건문|Bedingungssatz Typ 0|Periodo ipotetico di tipo zero|शून्य शर्तीय वाक्य|Sıfırıncı koşul
First Conditional|Primer condicional|제1 조건문|Bedingungssatz Typ 1|Primo periodo ipotetico|प्रथम शर्तीय वाक्य|Birinci koşul
Second Conditional|Segundo condicional|제2 조건문|Bedingungssatz Typ 2|Secondo periodo ipotetico|द्वितीय शर्तीय वाक्य|İkinci koşul
Reported Speech|Estilo indirecto|간접화법|Indirekte Rede|Discorso indiretto|अप्रत्यक्ष कथन|Dolaylı anlatım
Noun, verb and particle|Nombre verbo y partícula|명사 동사 조사|Nomen Verb und Partikel|Nome verbo e particella|संज्ञा क्रिया और अव्यय|İsim fiil ve edat
Nominal sentence|Oración nominal|명사문|Nominalsatz|Frase nominale|संज्ञात्मक वाक्य|İsim cümlesi
Verbal sentence|Oración verbal|동사문|Verbalsatz|Frase verbale|क्रियात्मक वाक्य|Fiil cümlesi
Direct object|Complemento directo|직접 목적어|Direktes Objekt|Complemento oggetto|प्रत्यक्ष कर्म|Nesne
Idafa: possessive construction|Idafa: construcción posesiva|이다파 소유 구문|Idafa: Genitivverbindung|Idafa: costrutto possessivo|इदाफ़ा संबंध संरचना|İzafet tamlaması
`.trim().split('\n').map(line=>line.split('|'));
const dictionaries=Object.fromEntries(['es','ko','de','it','hi','tr'].map((lang,i)=>[lang,Object.fromEntries(rows.map(row=>[row[0],row[i+1]]))]));
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
