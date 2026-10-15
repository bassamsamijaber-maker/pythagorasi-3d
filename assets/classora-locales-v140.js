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
