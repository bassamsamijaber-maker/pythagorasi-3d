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
Basic ratio and proportion|Razones y proporciones básicas|기초 비와 비례|Grundlagen von Verhältnis und Proportion|Rapporti e proporzioni di base|मूल अनुपात और समानुपात|Temel oran ve orantı
Introduction to functions|Introducción a las funciones|함수 입문|Einführung in Funktionen|Introduzione alle funzioni|फलनों का परिचय|Fonksiyonlara giriş
Reading graphs|Lectura de gráficos|그래프 읽기|Diagramme lesen|Lettura dei grafici|ग्राफ़ पढ़ना|Grafikleri okuma
Multi-step equations|Ecuaciones de varios pasos|여러 단계 방정식|Mehrstufige Gleichungen|Equazioni a più passaggi|बहु-चरणीय समीकरण|Çok adımlı denklemler
Equations with parentheses|Ecuaciones con paréntesis|괄호가 있는 방정식|Gleichungen mit Klammern|Equazioni con parentesi|कोष्ठक वाले समीकरण|Parantezli denklemler
Fractional equations|Ecuaciones fraccionarias|분수 방정식|Bruchgleichungen|Equazioni frazionarie|भिन्न वाले समीकरण|Kesirli denklemler
Equations with variables on both sides|Ecuaciones con variables en ambos lados|양변에 변수가 있는 방정식|Gleichungen mit Variablen auf beiden Seiten|Equazioni con incognite su entrambi i lati|दोनों पक्षों में चर वाले समीकरण|İki tarafında değişken olan denklemler
Equation word problems|Problemas de ecuaciones|방정식 문장제 문제|Textaufgaben zu Gleichungen|Problemi con equazioni|समीकरण आधारित शब्द समस्याएँ|Denklem problemleri
Inequalities|Desigualdades|부등식|Ungleichungen|Disequazioni|असमानताएँ|Eşitsizlikler
Axis intercepts|Intersecciones con los ejes|축과의 교점|Achsenschnittpunkte|Intersezioni con gli assi|अक्षों पर प्रतिच्छेद|Eksenleri kesme noktaları
Speed, time and distance|Velocidad tiempo y distancia|속력 시간 거리|Geschwindigkeit Zeit und Strecke|Velocità tempo e distanza|चाल समय और दूरी|Hız zaman ve mesafe
Advanced linear functions|Funciones lineales avanzadas|심화 일차함수|Vertiefte lineare Funktionen|Funzioni lineari avanzate|उन्नत रैखिक फलन|İleri doğrusal fonksiyonlar
Factoring out a common factor|Extraer factor común|공통인수 묶기|Gemeinsamen Faktor ausklammern|Raccoglimento a fattor comune|सार्व गुणनखंड निकालना|Ortak çarpanı paranteze alma
Algebraic identities|Identidades algebraicas|대수 항등식|Algebraische Identitäten|Identità algebriche|बीजीय सर्वसमिकाएँ|Cebirsel özdeşlikler
Difference of two squares|Diferencia de cuadrados|제곱의 차|Differenz zweier Quadrate|Differenza di quadrati|दो वर्गों का अंतर|İki kare farkı
Algebraic fractions|Fracciones algebraicas|대수 분수식|Algebraische Brüche|Frazioni algebriche|बीजीय भिन्न|Cebirsel kesirler
Vertex of a parabola|Vértice de una parábola|포물선의 꼭짓점|Scheitelpunkt einer Parabel|Vertice di una parabola|परवलय का शीर्ष|Parabolün tepe noktası
Axis of symmetry|Eje de simetría|대칭축|Symmetrieachse|Asse di simmetria|सममिति अक्ष|Simetri ekseni
Zeros|Ceros de una función|함수의 영점|Nullstellen|Zeri di una funzione|फलन के शून्यक|Fonksiyonun sıfırları
Positive and negative intervals|Intervalos positivos y negativos|양수 구간과 음수 구간|Positive und negative Intervalle|Intervalli positivi e negativi|धनात्मक और ऋणात्मक अंतराल|Pozitif ve negatif aralıklar
Increasing and decreasing intervals|Intervalos crecientes y decrecientes|증가 구간과 감소 구간|Monotonieintervalle|Intervalli crescenti e decrescenti|वृद्धि और ह्रास के अंतराल|Artan ve azalan aralıklar
Algebra|Álgebra|대수|Algebra|Algebra|बीजगणित|Cebir
Functions|Funciones|함수|Funktionen|Funzioni|फलन|Fonksiyonlar
Slope of a line|Pendiente de una recta|직선의 기울기|Steigung einer Geraden|Pendenza di una retta|रेखा की ढाल|Doğrunun eğimi
3D solids|Sólidos tridimensionales|입체도형|Räumliche Körper|Solidi tridimensionali|त्रिविमीय ठोस|Üç boyutlu cisimler
Scale|Escala|축척|Maßstab|Scala|मापनी|Ölçek
Isosceles triangle|Triángulo isósceles|이등변삼각형|Gleichschenkliges Dreieck|Triangolo isoscele|समद्विबाहु त्रिभुज|İkizkenar üçgen
Areas and volumes|Áreas y volúmenes|넓이와 부피|Flächen und Volumina|Aree e volumi|क्षेत्रफल और आयतन|Alanlar ve hacimler
Quadrilaterals|Cuadriláteros|사각형|Vierecke|Quadrilateri|चतुर्भुज|Dörtgenler
Coordinate geometry|Geometría de coordenadas|좌표기하학|Koordinatengeometrie|Geometria delle coordinate|निर्देशांक ज्यामिति|Koordinat geometrisi
Analytic geometry|Geometría analítica|해석기하학|Analytische Geometrie|Geometria analitica|विश्लेषणात्मक ज्यामिति|Analitik geometri
Distance between two points|Distancia entre dos puntos|두 점 사이 거리|Abstand zwischen zwei Punkten|Distanza tra due punti|दो बिंदुओं के बीच दूरी|İki nokta arası uzaklık
Midpoint|Punto medio|중점|Mittelpunkt|Punto medio|मध्यबिंदु|Orta nokta
Similarity|Semejanza|닮음|Ähnlichkeit|Similitudine|समरूपता|Benzerlik
Sin|Seno|사인|Sinus|Seno|ज्या|Sinüs
Cos|Coseno|코사인|Kosinus|Coseno|कोज्या|Kosinüs
Tan|Tangente|탄젠트|Tangens|Tangente|स्पर्शज्या|Tanjant
Respiratory system|Sistema respiratorio|호흡계|Atmungssystem|Apparato respiratorio|श्वसन तंत्र|Solunum sistemi
Circulatory system|Sistema circulatorio|순환계|Kreislaufsystem|Sistema circolatorio|परिसंचरण तंत्र|Dolaşım sistemi
Nutrition|Nutrición|영양|Ernährung|Nutrizione|पोषण|Beslenme
Living organisms|Organismos vivos|생물|Lebewesen|Organismi viventi|जीवधारी|Canlı organizmalar
Environment and sustainability|Medioambiente y sostenibilidad|환경과 지속 가능성|Umwelt und Nachhaltigkeit|Ambiente e sostenibilità|पर्यावरण और स्थिरता|Çevre ve sürdürülebilirlik
Forces|Fuerzas|힘|Kräfte|Forze|बल|Kuvvetler
Laws of motion|Leyes del movimiento|운동 법칙|Bewegungsgesetze|Leggi del moto|गति के नियम|Hareket yasaları
Mechanical energy|Energía mecánica|역학적 에너지|Mechanische Energie|Energia meccanica|यांत्रिक ऊर्जा|Mekanik enerji
Chemistry|Química|화학|Chemie|Chimica|रसायन विज्ञान|Kimya
Genetics|Genética|유전학|Genetik|Genetica|आनुवंशिकी|Genetik
DNA|ADN|DNA|DNA|DNA|डीएनए|DNA
Human impact on the environment|Impacto humano en el medioambiente|인간 활동의 환경 영향|Menschliche Einflüsse auf die Umwelt|Impatto umano sull'ambiente|पर्यावरण पर मानवीय प्रभाव|İnsanın çevreye etkisi
Newton's laws|Leyes de Newton|뉴턴의 운동 법칙|Newtonsche Gesetze|Leggi di Newton|न्यूटन के नियम|Newton yasaları
Work|Trabajo mecánico|일|Arbeit|Lavoro|कार्य|İş
Power|Potencia|일률|Leistung|Potenza|शक्ति|Güç
Ions|Iones|이온|Ionen|Ioni|आयन|İyonlar
Chemical equations|Ecuaciones químicas|화학 반응식|Chemische Gleichungen|Equazioni chimiche|रासायनिक समीकरण|Kimyasal denklemler
pH|pH|수소 이온 농도 지수|pH-Wert|pH|पीएच|pH
Cell organelles|Orgánulos celulares|세포 소기관|Zellorganellen|Organelli cellulari|कोशिका अंगक|Hücre organelleri
Cell division|División celular|세포 분열|Zellteilung|Divisione cellulare|कोशिका विभाजन|Hücre bölünmesi
Genes|Genes|유전자|Gene|Geni|जीन|Genler
Proteins|Proteínas|단백질|Proteine|Proteine|प्रोटीन|Proteinler
Fatimid Caliphate|Califato fatimí|파티마 칼리프국|Fatimiden-Kalifat|Califfato fatimide|फ़ातिमी ख़िलाफ़त|Fâtımî Halifeliği
Ayyubid state|Estado ayubí|아이유브 왕조|Ayyubidenstaat|Stato ayyubide|अय्यूबी राज्य|Eyyûbî Devleti
Mamluk Sultanate|Sultanato mameluco|맘루크 술탄국|Mamluken-Sultanat|Sultanato mamelucco|ममलूक सल्तनत|Memlûk Sultanlığı
Druze in the Middle Ages|Druzos en la Edad Media|중세 드루즈인|Drusen im Mittelalter|Drusi nel Medioevo|मध्य युग में द्रूज़|Orta Çağ'da Dürzîler
Jews in medieval Islamic lands|Judíos en tierras islámicas medievales|중세 이슬람권의 유대인|Juden in mittelalterlichen islamischen Ländern|Ebrei nelle terre islamiche medievali|मध्यकालीन इस्लामी क्षेत्रों में यहूदी|Orta Çağ İslam topraklarında Yahudiler
Renaissance humanism|Humanismo renacentista|르네상스 인문주의|Humanismus der Renaissance|Umanesimo rinascimentale|पुनर्जागरण मानवतावाद|Rönesans hümanizmi
Oceanic exploration and encounters|Exploraciones oceánicas y encuentros|대양 탐험과 교류|Ozeanische Entdeckungsreisen und Begegnungen|Esplorazioni oceaniche e incontri|समुद्री खोज और संपर्क|Okyanus keşifleri ve karşılaşmalar
Columbus and the Americas|Colón y las Américas|콜럼버스와 아메리카|Kolumbus und Amerika|Colombo e le Americhe|कोलंबस और अमेरिका महाद्वीप|Kolomb ve Amerika kıtaları
Cape of Good Hope route|Ruta del cabo de Buena Esperanza|희망봉 항로|Seeweg um das Kap der Guten Hoffnung|Rotta del Capo di Buona Speranza|केप ऑफ़ गुड होप समुद्री मार्ग|Ümit Burnu rotası
Ottoman Empire to the eighteenth century|Imperio otomano hasta el siglo XVIII|18세기까지의 오스만 제국|Osmanisches Reich bis zum 18. Jahrhundert|Impero ottomano fino al XVIII secolo|अठारहवीं सदी तक उस्मानी साम्राज्य|18. yüzyıla kadar Osmanlı İmparatorluğu
Nineteenth-century Europe|Europa del siglo XIX|19세기 유럽|Europa im 19. Jahrhundert|Europa del XIX secolo|उन्नीसवीं सदी का यूरोप|19. yüzyıl Avrupası
First World War|Primera Guerra Mundial|제1차 세계 대전|Erster Weltkrieg|Prima guerra mondiale|प्रथम विश्व युद्ध|Birinci Dünya Savaşı
Causes of the First World War|Causas de la Primera Guerra Mundial|제1차 세계 대전의 원인|Ursachen des Ersten Weltkriegs|Cause della Prima guerra mondiale|प्रथम विश्व युद्ध के कारण|Birinci Dünya Savaşı'nın nedenleri
Events of the First World War|Acontecimientos de la Primera Guerra Mundial|제1차 세계 대전의 주요 사건|Ereignisse des Ersten Weltkriegs|Eventi della Prima guerra mondiale|प्रथम विश्व युद्ध की घटनाएँ|Birinci Dünya Savaşı'nın olayları
Consequences of the First World War|Consecuencias de la Primera Guerra Mundial|제1차 세계 대전의 결과|Folgen des Ersten Weltkriegs|Conseguenze della Prima guerra mondiale|प्रथम विश्व युद्ध के परिणाम|Birinci Dünya Savaşı'nın sonuçları
Peace settlements of 1919|Acuerdos de paz de 1919|1919년 평화 조약|Friedensverträge von 1919|Accordi di pace del 1919|1919 के शांति समझौते|1919 barış antlaşmaları
Nineteenth-century Middle East|Oriente Medio del siglo XIX|19세기 중동|Naher Osten im 19. Jahrhundert|Medio Oriente del XIX secolo|उन्नीसवीं सदी का मध्य पूर्व|19. yüzyıl Orta Doğusu
Nineteenth-century Ottoman Empire|Imperio otomano del siglo XIX|19세기 오스만 제국|Osmanisches Reich im 19. Jahrhundert|Impero ottomano del XIX secolo|उन्नीसवीं सदी का उस्मानी साम्राज्य|19. yüzyılda Osmanlı İmparatorluğu
Middle East through the end of the First World War|Oriente Medio hasta el fin de la Primera Guerra Mundial|제1차 세계 대전 종전까지의 중동|Naher Osten bis zum Ende des Ersten Weltkriegs|Medio Oriente fino alla fine della Prima guerra mondiale|प्रथम विश्व युद्ध के अंत तक मध्य पूर्व|Birinci Dünya Savaşı sonuna kadar Orta Doğu
Global connections and trade|Conexiones mundiales y comercio|세계 교류와 무역|Globale Verflechtungen und Handel|Connessioni globali e commercio|वैश्विक संपर्क और व्यापार|Küresel bağlantılar ve ticaret
Environment|Medioambiente|환경|Umwelt|Ambiente|पर्यावरण|Çevre
Earth’s layers|Capas de la Tierra|지구의 층|Erdschichten|Strati della Terra|पृथ्वी की परतें|Dünya'nın katmanları
Rocks|Rocas|암석|Gesteine|Rocce|चट्टानें|Kayaçlar
Minerals|Minerales|광물|Mineralien|Minerali|खनिज|Mineraller
Weathering|Meteorización|풍화|Verwitterung|Alterazione delle rocce|अपक्षय|Ayrışma
Erosion|Erosión|침식|Erosion|Erosione|अपरदन|Erozyon
Atmosphere|Atmósfera|대기|Atmosphäre|Atmosfera|वायुमंडल|Atmosfer
Climate zones|Zonas climáticas|기후대|Klimazonen|Zone climatiche|जलवायु क्षेत्र|İklim bölgeleri
Energy resources|Recursos energéticos|에너지 자원|Energieressourcen|Risorse energetiche|ऊर्जा संसाधन|Enerji kaynakları
Israel in the Middle East|Israel en Oriente Medio|중동의 이스라엘|Israel im Nahen Osten|Israele in Medio Oriente|मध्य पूर्व में इज़राइल|Orta Doğu'da İsrail
Location and coordinates|Ubicación y coordenadas|위치와 좌표|Lage und Koordinaten|Posizione e coordinate|स्थान और निर्देशांक|Konum ve koordinatlar
Landforms|Formas del relieve|지형|Landformen|Forme del rilievo|भू-आकृतियाँ|Yer şekilleri
Water resources|Recursos hídricos|수자원|Wasserressourcen|Risorse idriche|जल संसाधन|Su kaynakları
Cities and urbanisation|Ciudades y urbanización|도시와 도시화|Städte und Urbanisierung|Città e urbanizzazione|शहर और शहरीकरण|Şehirler ve kentleşme
Industry|Industria|산업|Industrie|Industria|उद्योग|Sanayi
Agriculture|Agricultura|농업|Landwirtschaft|Agricoltura|कृषि|Tarım
Transportation|Transporte|교통|Verkehr|Trasporti|परिवहन|Ulaşım
Maps and GIS|Mapas y SIG|지도와 지리정보시스템|Karten und GIS|Carte e GIS|मानचित्र और जीआईएस|Haritalar ve CBS
Population growth|Crecimiento demográfico|인구 증가|Bevölkerungswachstum|Crescita della popolazione|जनसंख्या वृद्धि|Nüfus artışı
Development indicators|Indicadores de desarrollo|개발 지표|Entwicklungsindikatoren|Indicatori di sviluppo|विकास संकेतक|Kalkınma göstergeleri
Natural hazards|Peligros naturales|자연재해 위험|Naturgefahren|Pericoli naturali|प्राकृतिक खतरे|Doğal tehlikeler
Parts of Speech|Categorías gramaticales|품사|Wortarten|Parti del discorso|शब्द भेद|Sözcük türleri
Nouns|Sustantivos|명사|Substantive|Sostantivi|संज्ञाएँ|İsimler
Singular and Plural|Singular y plural|단수와 복수|Singular und Plural|Singolare e plurale|एकवचन और बहुवचन|Tekil ve çoğul
Countable and Uncountable Nouns|Sustantivos contables e incontables|셀 수 있는 명사와 셀 수 없는 명사|Zählbare und unzählbare Substantive|Nomi numerabili e non numerabili|गणनीय और अगणनीय संज्ञाएँ|Sayılabilen ve sayılamayan isimler
Subject Pronouns|Pronombres sujeto|주격 대명사|Subjektpronomen|Pronomi soggetto|कर्ता सर्वनाम|Özne zamirleri
Object Pronouns|Pronombres de objeto|목적격 대명사|Objektpronomen|Pronomi complemento|कर्म सर्वनाम|Nesne zamirleri
Possessive Adjectives|Adjetivos posesivos|소유 형용사|Possessivadjektive|Aggettivi possessivi|संबंधसूचक विशेषण|İyelik sıfatları
Possessive Pronouns|Pronombres posesivos|소유 대명사|Possessivpronomen|Pronomi possessivi|संबंधसूचक सर्वनाम|İyelik zamirleri
Verb To Be|Verbo to be|be 동사|Verb to be|Verbo to be|टू बी क्रिया|To be fiili
Have / Has|Have y has|have와 has|Have und Has|Have e has|हैव और हैज़|Have ve has
There is / There are|Hay / existen|존재를 나타내는 표현|There is und There are|C'è e ci sono|वहाँ है और वहाँ हैं|There is ve there are
Articles: a / an / the|Artículos a an y the|관사 a an the|Artikel a an und the|Articoli a an e the|आर्टिकल a an और the|A an ve the tanımlıkları
Present Simple vs Present Continuous|Presente simple frente a continuo|현재 단순형과 진행형 비교|Simple Present und Present Progressive|Presente semplice e progressivo|सामान्य और निरंतर वर्तमान काल|Geniş zaman ile şimdiki zaman
Regular and Irregular Verbs|Verbos regulares e irregulares|규칙 동사와 불규칙 동사|Regelmäßige und unregelmäßige Verben|Verbi regolari e irregolari|नियमित और अनियमित क्रियाएँ|Düzenli ve düzensiz fiiller
Be Going To|Futuro con going to|going to 미래형|Zukunft mit going to|Futuro con going to|गोइंग टू से भविष्य|Going to ile gelecek zaman
Can / Can’t|Can y can't|can과 can't|Can und Can't|Can e can't|कैन और कैन्ट|Can ve can't
Must / Mustn’t|Must y mustn't|must와 mustn't|Must und Mustn't|Must e mustn't|मस्ट और मस्टन्ट|Must ve mustn't
Should / Shouldn’t|Should y shouldn't|should와 shouldn't|Should und Shouldn't|Should e shouldn't|शुड और शुडन्ट|Should ve shouldn't
Adjectives|Adjetivos|형용사|Adjektive|Aggettivi|विशेषण|Sıfatlar
Adverbs|Adverbios|부사|Adverbien|Avverbi|क्रिया विशेषण|Zarflar
Question Words|Palabras interrogativas|의문사|Fragewörter|Parole interrogative|प्रश्नवाचक शब्द|Soru sözcükleri
Some / Any|Some y any|some과 any|Some und Any|Some e any|सम और एनी|Some ve any
Much / Many|Much y many|much와 many|Much und Many|Much e many|मच और मेनी|Much ve many
A lot of|A lot of: mucha cantidad|많은 양을 나타내는 표현|A lot of: große Menge|A lot of: grande quantità|अ लॉट ऑफ़: अधिक मात्रा|A lot of: çok
Past Simple vs Past Continuous|Pasado simple frente a continuo|과거 단순형과 과거 진행형|Simple Past und Past Progressive|Passato semplice e progressivo|सामान्य और निरंतर भूतकाल|Geçmiş zaman ile geçmişte süreklilik
Present Perfect vs Past Simple|Pretérito perfecto frente a pasado simple|현재 완료와 과거 시제|Present Perfect und Simple Past|Present Perfect e passato semplice|वर्तमान पूर्ण और सामान्य भूतकाल|Present perfect ve geçmiş zaman
Modals|Verbos modales|조동사|Modalverben|Verbi modali|सहायक भावसूचक क्रियाएँ|Kip fiilleri
Can / Could|Can y could|can과 could|Can und Could|Can e could|कैन और कुड|Can ve could
Must / Have to|Must y have to|must와 have to|Must und Have to|Must e have to|मस्ट और हैव टू|Must ve have to
Should|Should: consejo|should 조동사|Should: Ratschläge|Should: consigli|शुड: सलाह|Should: tavsiye
May / Might|May y might|may와 might|May und Might|May e might|मे और माइट|May ve might
Comparative and Superlative|Comparativo y superlativo|비교급과 최상급|Komparativ und Superlativ|Comparativo e superlativo|तुलनात्मक और सर्वोत्तम|Karşılaştırma ve üstünlük
Too / Enough|Too y enough|too와 enough|Too und Enough|Too ed enough|टू और इनफ़|Too ve enough
Passive Voice — Introduction|Introducción a la voz pasiva|수동태 입문|Einführung ins Passiv|Introduzione alla forma passiva|कर्मवाच्य का परिचय|Edilgen çatıya giriş
Relative Pronouns|Pronombres relativos|관계대명사|Relativpronomen|Pronomi relativi|संबंधवाचक सर्वनाम|İlgi zamirleri
Who / Which / That|Who which y that|who which that 관계대명사|Who Which und That|Who which e that|हू विच और दैट|Who which ve that
Gerunds and Infinitives — Introduction|Introducción al gerundio y al infinitivo|동명사와 부정사 입문|Einführung in Gerundium und Infinitiv|Introduzione a gerundio e infinito|क्रियावाचक संज्ञा और अनंत रूप परिचय|İsim-fiil ve mastara giriş
Quantifiers|Cuantificadores|수량 표현|Mengenangaben|Quantificatori|परिमाणसूचक शब्द|Miktar belirleyiciler
Few / Little|Few y little|few와 little|Few und Little|Few e little|फ़्यू और लिटल|Few ve little
Some / Any / No|Some any y no|some any no|Some Any und No|Some any e no|सम एनी और नो|Some any ve no
Question Tags — Introduction|Introducción a las coletillas interrogativas|부가의문문 입문|Einführung in Frageanhängsel|Introduzione alle domande con coda|प्रश्न-पूँछ का परिचय|Soru eklerine giriş
Present Perfect Continuous|Pretérito perfecto continuo|현재 완료 진행형|Present Perfect Progressive|Present Perfect Continuous|वर्तमान पूर्ण निरंतर काल|Süregelen present perfect
Past Perfect|Pluscuamperfecto|과거 완료|Past Perfect|Trapassato prossimo|पूर्ण भूतकाल|Geçmişte tamamlanmış zaman
Past Perfect vs Past Simple|Pluscuamperfecto frente a pasado simple|과거 완료와 과거 단순형|Past Perfect und Simple Past|Trapassato e passato semplice|पूर्ण और सामान्य भूतकाल|Past perfect ve simple past
Future Forms|Formas del futuro|미래 표현|Zukunftsformen|Forme del futuro|भविष्य काल के रूप|Gelecek zaman yapıları
Future Continuous|Futuro continuo|미래 진행형|Future Progressive|Futuro continuo|भविष्य निरंतर काल|Gelecekte devam eden zaman
Present Passive|Pasiva en presente|현재 수동태|Passiv im Präsens|Passivo al presente|वर्तमान कर्मवाच्य|Şimdiki zamanda edilgen
Past Passive|Pasiva en pasado|과거 수동태|Passiv in der Vergangenheit|Passivo al passato|भूतकाल कर्मवाच्य|Geçmiş zamanda edilgen
Future Passive|Pasiva en futuro|미래 수동태|Passiv in der Zukunft|Passivo al futuro|भविष्य कर्मवाच्य|Gelecek zamanda edilgen
Relative Clauses|Oraciones de relativo|관계절|Relativsätze|Proposizioni relative|संबंधवाचक उपवाक्य|İlgi cümleleri
Defining Relative Clauses|Oraciones de relativo especificativas|제한적 관계절|Notwendige Relativsätze|Relative restrittive|सीमित करने वाले संबंधवाचक उपवाक्य|Tanımlayıcı ilgi cümleleri
Reported Speech — Introduction|Introducción al estilo indirecto|간접화법 입문|Einführung in indirekte Rede|Introduzione al discorso indiretto|अप्रत्यक्ष कथन का परिचय|Dolaylı anlatıma giriş
Modal Verbs|Verbos modales|법조동사|Modalverben|Verbi modali|भावसूचक क्रियाएँ|Kip belirten fiiller
Gerunds|Gerundios|동명사|Gerundium|Gerundi|क्रियावाचक संज्ञाएँ|İsim-fiiller
Infinitives|Infinitivos|부정사|Infinitive|Infiniti|क्रिया के अनंत रूप|Mastarlar
Gerunds vs Infinitives|Gerundios frente a infinitivos|동명사와 부정사의 차이|Gerundium und Infinitiv|Gerundi e infiniti|क्रियावाचक संज्ञा बनाम अनंत रूप|İsim-fiil ve mastar farkı
Used to|Used to: hábitos pasados|used to 과거 습관|Used to: frühere Gewohnheiten|Used to: abitudini passate|यूज़्ड टू: पुरानी आदतें|Used to: geçmiş alışkanlıklar
Question Tags|Coletillas interrogativas|부가의문문|Frageanhängsel|Domande con coda|प्रश्न-पूँछ|Soru ekleri
Articles|Artículos|관사|Artikel|Articoli|आर्टिकल|Tanımlıklar
Adjective Order|Orden de los adjetivos|형용사 어순|Reihenfolge der Adjektive|Ordine degli aggettivi|विशेषणों का क्रम|Sıfat sıralaması
Future Perfect — Introduction|Introducción al futuro perfecto|미래 완료 입문|Einführung ins Future Perfect|Introduzione al futuro anteriore|भविष्य पूर्ण काल परिचय|Gelecekte bitmiş zamana giriş
Active and Passive Voice|Voz activa y pasiva|능동태와 수동태|Aktiv und Passiv|Forma attiva e passiva|कर्तृवाच्य और कर्मवाच्य|Etken ve edilgen çatı
Third Conditional — Introduction|Introducción al tercer condicional|제3 조건문 입문|Einführung in Bedingungssatz Typ 3|Introduzione al terzo periodo ipotetico|तीसरी शर्त का परिचय|Üçüncü koşula giriş
Reported Questions|Preguntas indirectas|간접의문문|Indirekte Fragen|Domande indirette|अप्रत्यक्ष प्रश्न|Dolaylı sorular
Modal Perfects — Introduction|Introducción a los modales perfectos|완료 조동사 입문|Einführung in Modal Perfect|Introduzione ai modali perfetti|पूर्ण भावसूचक क्रिया परिचय|Perfect kip yapılarına giriş
Used to / Would|Used to y would|used to와 would|Used to und Would|Used to e would|यूज़्ड टू और वुड|Used to ve would
Wish / If Only — Introduction|Introducción a wish e if only|wish와 if only 입문|Einführung in Wish und If Only|Introduzione a wish e if only|विश और इफ़ ओनली परिचय|Wish ve if only giriş
Causative Have — Introduction|Introducción al have causativo|사역 have 입문|Einführung in kausatives Have|Introduzione al causativo have|कारक हैव का परिचय|Ettirgen have yapısına giriş
Determiners|Determinantes|한정사|Determinierer|Determinanti|निर्धारक|Belirteçler
Linking Words|Conectores|연결어|Bindewörter|Connettivi|संयोजक शब्द|Bağlaçlar
Parts of speech|Categorías gramaticales|품사|Wortarten|Parti del discorso|शब्द भेद|Sözcük türleri
Past, present and imperative verbs|Verbos en pasado presente e imperativo|과거 현재 명령형 동사|Verben in Vergangenheit Gegenwart und Imperativ|Verbi al passato presente e imperativo|भूत वर्तमान और आज्ञार्थक क्रियाएँ|Geçmiş geniş ve emir fiilleri
Subject and predicate|Sujeto y predicado|주어와 서술어|Subjekt und Prädikat|Soggetto e predicato|कर्ता और विधेय|Özne ve yüklem
Subject (doer)|Sujeto agente|행위 주체|Handelndes Subjekt|Soggetto agente|कार्य करने वाला कर्ता|İşi yapan özne
Adjective and described noun|Adjetivo y sustantivo descrito|형용사와 수식받는 명사|Adjektiv und beschriebenes Nomen|Aggettivo e nome qualificato|विशेषण और विशेष्य|Sıfat ve nitelenen isim
Definite and indefinite nouns|Nombres definidos e indefinidos|정관 명사와 부정관 명사|Bestimmte und unbestimmte Nomen|Nomi determinati e indeterminati|निश्चित और अनिश्चित संज्ञाएँ|Belirli ve belirsiz isimler
Masculine and feminine|Masculino y femenino|남성과 여성|Maskulin und Feminin|Maschile e femminile|पुल्लिंग और स्त्रीलिंग|Eril ve dişil
Singular, dual and plural|Singular dual y plural|단수 쌍수 복수|Singular Dual und Plural|Singolare duale e plurale|एकवचन द्विवचन और बहुवचन|Tekil ikil ve çoğul
Sound masculine plural|Plural masculino regular|남성 규칙 복수|Regelmäßiger maskuliner Plural|Plurale maschile regolare|नियमित पुल्लिंग बहुवचन|Kurallı eril çoğul
Sound feminine plural|Plural femenino regular|여성 규칙 복수|Regelmäßiger femininer Plural|Plurale femminile regolare|नियमित स्त्रीलिंग बहुवचन|Kurallı dişil çoğul
Broken plural|Plural irregular árabe|아랍어 불규칙 복수|Gebrochener Plural|Plurale fratto arabo|अरबी अनियमित बहुवचन|Arapçada kırık çoğul
Pronouns|Pronombres|대명사|Pronomen|Pronomi|सर्वनाम|Zamirler
Demonstratives|Demostrativos|지시사|Demonstrativa|Dimostrativi|संकेतवाचक शब्द|İşaret sözcükleri
Relative pronouns|Pronombres relativos|관계대명사|Relativpronomen|Pronomi relativi|संबंधवाचक सर्वनाम|İlgi zamirleri
Prepositions|Preposiciones|전치사|Präpositionen|Preposizioni|संबंधबोधक अव्यय|Edatlar
Basic case endings|Terminaciones gramaticales básicas|기본 격어미|Grundlegende Kasusendungen|Desinenze dei casi di base|मूल विभक्ति चिह्न|Temel hâl ekleri
Passive subject|Sujeto de la voz pasiva|수동문 주어|Subjekt im Passiv|Soggetto passivo|कर्मवाच्य का कर्ता|Edilgen cümlenin öznesi
Active and passive voice|Voz activa y pasiva|능동태와 수동태|Aktiv und Passiv|Forma attiva e passiva|कर्तृवाच्य और कर्मवाच्य|Etken ve edilgen çatı
Circumstantial accusative|Complemento circunstancial de estado|상태 대격|Zustandsakkusativ|Complemento di stato|हाल बताने वाला कर्मकारक|Durum bildiren mansub öge
Adjective|Adjetivo|형용사|Adjektiv|Aggettivo|विशेषण|Sıfat
Coordination|Coordinación gramatical|접속 구조|Koordination|Coordinazione|समन्वय|Bağlama
Emphasis|Énfasis gramatical|강조|Betonung|Enfasi|बलाघात|Pekiştirme
Apposition|Aposición|동격|Apposition|Apposizione|समानाधिकरण|Açıklayıcı ad tamlaması
Inflected and indeclinable verbs|Verbos flexivos e invariables|활용하는 동사와 불변 동사|Flektierte und unveränderliche Verben|Verbi flessi e invariabili|विभक्ति बदलने वाली और अविकारी क्रियाएँ|Çekimli ve değişmez fiiller
Sound verb|Verbo regular sin letras débiles|정상 동사|Gesundes Verb ohne schwache Radikale|Verbo sano|सही क्रिया|Sahih fiil
Weak verb|Verbo débil árabe|약동사|Schwaches Verb|Verbo debole arabo|कमज़ोर क्रिया|Mu'tel fiil
Morphological pattern|Patrón morfológico|형태론적 틀|Morphologisches Muster|Schema morfologico|रूपात्मक पैटर्न|Sarf vezni
Active participle|Participio activo|능동 분사|Aktives Partizip|Participio attivo|कर्तृवाचक कृदंत|İsm-i fâil
Passive participle|Participio pasivo|수동 분사|Passives Partizip|Participio passivo|कर्मवाचक कृदंत|İsm-i mef'ûl
Types of plurals|Tipos de plural|복수형의 종류|Pluralarten|Tipi di plurale|बहुवचन के प्रकार|Çoğul türleri
Nominative markers|Marcas del nominativo|주격 표지|Nominativzeichen|Segni del nominativo|कर्ता कारक के चिह्न|Merfûluk alametleri
Accusative markers|Marcas del acusativo|대격 표지|Akkusativzeichen|Segni dell'accusativo|कर्म कारक के चिह्न|Mansubiyet alametleri
Genitive markers|Marcas del genitivo|속격 표지|Genitivzeichen|Segni del genitivo|संबंध कारक के चिह्न|Mecrurluk alametleri
Indicative present verb|Presente de indicativo árabe|직설법 현재 동사|Präsens im Indikativ|Presente indicativo arabo|वर्तमान क्रिया का निर्देशार्थक रूप|Merfû muzari fiil
Subjunctive present verb|Presente de subjuntivo árabe|접속법 현재 동사|Präsens im Konjunktiv|Presente congiuntivo arabo|वर्तमान क्रिया का संभावनार्थक रूप|Mansub muzari fiil
Jussive present verb|Presente yusivo árabe|절단법 현재 동사|Präsens im Jussiv|Presente iussivo arabo|वर्तमान क्रिया का जज़्म रूप|Meczûm muzari fiil
Absolute object|Complemento absoluto|절대 목적어|Absolutes Objekt|Complemento assoluto|निरपेक्ष कर्म|Mef'ûl-i mutlak
Object of reason|Complemento de causa|이유 목적어|Kausalobjekt|Complemento di causa|कारणसूचक कर्म|Sebep bildiren mef'ûl
Adverbial object|Complemento adverbial|부사어 목적어|Adverbiales Objekt|Complemento avverbiale|क्रिया विशेषण कर्म|Zaman ve yer zarfı
Object of accompaniment|Complemento de compañía|동반 목적어|Begleitobjekt|Complemento di compagnia|साथ सूचक कर्म|Birliktelik mef'ûlü
Specification|Complemento de especificación|명확화 구문|Spezifizierung|Specificazione|स्पष्टीकरण कारक|Temyiz
Exception|Excepción|예외|Ausnahme|Eccezione|अपवाद|İstisna
Vocative|Vocativo|호격|Vokativ|Vocativo|संबोधन|Nida
Kana and its sisters|Kana y sus verbos afines|카나와 유사 동사|Kana und verwandte Verben|Kana e i verbi affini|काना और उसकी समान क्रियाएँ|Kâne ve benzerleri
Inna and its sisters|Inna y sus partículas afines|인나와 유사 조사|Inna und verwandte Partikeln|Inna e particelle affini|इन्ना और समान अव्यय|İnne ve benzerleri
La of absolute negation|La de negación absoluta|절대 부정의 라|La der absoluten Verneinung|La di negazione assoluta|पूर्ण निषेध का ला|Cinsini nefyeden lâ
Adjective resembling participle|Adjetivo semejante al participio|분사형 유사 형용사|Partizipähnliches Adjektiv|Aggettivo simile al participio|कृदंत समान विशेषण|Sıfat-ı müşebbehe
Intensive forms|Formas intensivas|강조형 어형|Intensivformen|Forme intensive|अतिशयोक्ति रूप|Mübalağa kalıpları
Comparative/superlative noun|Nombre comparativo y superlativo|비교급 최상급 명사|Komparativ- und Superlativnomen|Nome comparativo e superlativo|तुलना और श्रेष्ठता संज्ञा|İsm-i tafdil
Basic verb forms|Formas verbales básicas|기본 동사형|Grundformen der Verben|Forme verbali di base|मूल क्रिया रूप|Mücerred fiiller
Augmented verb forms|Formas verbales aumentadas|확장 동사형|Erweiterte Verbformen|Forme verbali aumentate|विस्तारित क्रिया रूप|Mezid fiiller
Sentences with grammatical position|Oraciones con función sintáctica|문법적 위치가 있는 문장|Sätze mit syntaktischer Funktion|Frasi con funzione sintattica|व्याकरणिक स्थान वाले वाक्य|İrabda yeri olan cümleler
Sentences without grammatical position|Oraciones sin función sintáctica|문법적 위치가 없는 문장|Sätze ohne syntaktische Funktion|Frasi senza funzione sintattica|व्याकरणिक स्थान रहित वाक्य|İrabda yeri olmayan cümleler
Detailed parsing|Análisis gramatical detallado|자세한 문장 분석|Detaillierte Satzanalyse|Analisi grammaticale dettagliata|विस्तृत व्याकरणिक विश्लेषण|Ayrıntılı irab
Review of case endings|Repaso de terminaciones gramaticales|격어미 복습|Wiederholung der Kasusendungen|Ripasso delle desinenze|विभक्ति चिह्नों का पुनरावलोकन|İrab alametleri tekrarı
Objects|Complementos de objeto|목적어|Objekte|Complementi oggetto|कर्म|Mef'ûller
Diptotes|Nombres árabes sin tanwin|탄윈이 없는 아랍어 명사|Diptota|Nomi diptoti|बिना तन्वीन वाली अरबी संज्ञाएँ|Gayr-i munsarif isimler
Numbers and counted nouns|Numerales y nombres contados|수사와 셈을 받는 명사|Zahlen und gezählte Nomen|Numerali e nomi contati|संख्या और गिनी जाने वाली संज्ञाएँ|Sayılar ve sayılan isimler
Conditional style|Construcción condicional|조건문 구조|Bedingungskonstruktion|Costruzione condizionale|शर्तीय शैली|Şart üslubu
Exclamation style|Construcción exclamativa|감탄 구문|Ausrufekonstruktion|Costruzione esclamativa|विस्मयादिबोधक शैली|Hayret üslubu
Praise and blame style|Expresiones de elogio y reproche|칭찬과 비난 표현|Lob und Tadel|Lode e biasimo|प्रशंसा और निंदा शैली|Övgü ve yergi üslubu
Encouragement and warning|Exhortación y advertencia|권유와 경고|Ermunterung und Warnung|Esortazione e avvertimento|प्रोत्साहन और चेतावनी|Teşvik ve uyarı
Verbal nouns|Sustantivos verbales|동명사|Verbalsubstantive|Nomi verbali|क्रियावाचक संज्ञाएँ|Mastarlar
Basic and augmented forms|Formas básicas y aumentadas|기본형과 확장형|Grund- und Erweiterungsformen|Forme di base e aumentate|मूल और विस्तारित रूप|Mücerred ve mezid
Sound and weak verbs|Verbos sanos y débiles|정상 동사와 약동사|Gesunde und schwache Verben|Verbi sani e deboli|सही और कमज़ोर क्रियाएँ|Sahih ve mu'tel fiiller
Vowel change and substitution|Cambio vocálico y sustitución|모음 변화와 교체|Vokalwechsel und Ersetzung|Cambio vocalico e sostituzione|स्वर परिवर्तन और प्रतिस्थापन|İlâl ve ibdâl
Full grammatical parsing|Análisis gramatical completo|전체 문장 분석|Vollständige grammatische Analyse|Analisi grammaticale completa|पूर्ण व्याकरणिक विश्लेषण|Tam irab çözümlemesi
GRADE|CURSO|학년|KLASSE|CLASSE|कक्षा|SINIF
SELECT A SENTENCE PART|SELECCIONA UNA PARTE|문장 성분 선택|SATZTEIL WÄHLEN|SELEZIONA UNA PARTE|वाक्य का भाग चुनें|CÜMLE BÖLÜMÜ SEÇ
3D perspective|Perspectiva 3D|3D 시점|3D-Perspektive|Prospettiva 3D|3D दृश्य|3B görünüm
Next example|Siguiente ejemplo|다음 예시|Nächstes Beispiel|Esempio successivo|अगला उदाहरण|Sonraki örnek
SENTENCE|ORACIÓN|문장|SATZ|FRASE|वाक्य|CÜMLE
CHANGE THE EXAMPLE|CAMBIAR EJEMPLO|예시 변경|BEISPIEL WECHSELN|CAMBIA ESEMPIO|उदाहरण बदलें|ÖRNEĞİ DEĞİŞTİR
See the rule in action|Observa la regla en acción|규칙 적용 보기|Regel in der Anwendung|Osserva la regola|नियम का प्रयोग देखें|Kuralı uygulamada gör
Lesson examples|Ejemplos de la lección|수업 예시|Lektionsbeispiele|Esempi della lezione|पाठ के उदाहरण|Ders örnekleri
THE RULE|LA REGLA|규칙|DIE REGEL|LA REGOLA|नियम|KURAL
WHY DOES THIS WORK?|¿POR QUÉ FUNCIONA?|왜 이렇게 될까요?|WARUM FUNKTIONIERT DAS?|PERCHÉ FUNZIONA?|यह कैसे काम करता है?|BU NEDEN İŞE YARAR?
BUILD THE SENTENCE|CONSTRUYE LA ORACIÓN|문장 만들기|SATZ BILDEN|COSTRUISCI LA FRASE|वाक्य बनाइए|CÜMLEYİ OLUŞTUR
Put the example together|Ordena las partes del ejemplo|예시 문장 조합|Beispiel zusammensetzen|Ricostruisci l'esempio|उदाहरण को जोड़ें|Örneği birleştir
Start building|Empezar a construir|문장 만들기 시작|Zusammensetzen starten|Inizia a costruire|बनाना शुरू करें|Oluşturmaya başla
Assembled sentence|Oración formada|완성한 문장|Zusammengesetzter Satz|Frase composta|बनाया गया वाक्य|Oluşturulan cümle
Check order|Comprobar orden|순서 확인|Reihenfolge prüfen|Controlla l'ordine|क्रम जाँचें|Sırayı kontrol et
Further reading|Lecturas adicionales|더 읽어보기|Weiterlesen|Approfondimenti|अतिरिक्त अध्ययन|Ek okumalar
Your sentence here|Tu oración aquí|여기에 문장을 입력하세요|Dein Satz hier|La tua frase qui|अपना वाक्य यहाँ लिखें|Cümleni buraya yaz
Correct order! Read the whole sentence.|¡Orden correcto! Lee toda la oración.|순서가 맞아요! 문장 전체를 읽어 보세요.|Richtige Reihenfolge! Lies den ganzen Satz.|Ordine corretto! Leggi tutta la frase.|क्रम सही है! पूरा वाक्य पढ़ें।|Doğru sıra! Cümlenin tamamını oku.
The order differs from the example. Compare the pieces and try again.|El orden no coincide con el ejemplo. Compara las partes e inténtalo de nuevo.|순서가 예시와 달라요. 조각을 비교하고 다시 시도하세요.|Die Reihenfolge weicht vom Beispiel ab. Vergleiche die Teile und versuche es erneut.|L'ordine è diverso dall'esempio. Confronta le parti e riprova.|क्रम उदाहरण से अलग है। भागों की तुलना करके फिर प्रयास करें।|Sıra örnekten farklı. Parçaları karşılaştırıp tekrar dene.
INSIDE THE SENTENCE|DENTRO DE LA ORACIÓN|문장 속으로|IM SATZ|DENTRO LA FRASE|वाक्य के अंदर|CÜMLENİN İÇİNDE
SELECT A WORD|ELIGE UNA PALABRA|단어 선택|WORT WÄHLEN|SCEGLI UNA PAROLA|शब्द चुनें|BİR KELİME SEÇ
Reveal all roles|Mostrar todas las funciones|모든 문법 역할 보기|Alle Funktionen anzeigen|Mostra tutti i ruoli|सभी व्याकरणिक भूमिकाएँ दिखाएँ|Tüm görevleri göster
CHOOSE AN EXAMPLE|ELIGE UN EJEMPLO|예시 선택|BEISPIEL WÄHLEN|SCEGLI UN ESEMPIO|उदाहरण चुनें|ÖRNEK SEÇ
Change the sentence|Cambiar la oración|문장 변경|Satz ändern|Cambia la frase|वाक्य बदलें|Cümleyi değiştir
Your turn: identify the role|Tu turno: identifica la función|여러분 차례: 문법 역할 찾기|Du bist dran: Funktion bestimmen|Tocca a te: identifica il ruolo|अब आपकी बारी: भूमिका पहचानें|Sıra sende: görevi belirle
Choose the role|Elige la función|문법 역할 선택|Funktion wählen|Scegli il ruolo|भूमिका चुनें|Görevi seç
Check my answer|Comprobar mi respuesta|내 답 확인|Antwort prüfen|Controlla la risposta|मेरा उत्तर जाँचें|Cevabımı kontrol et
HOW DOES IT WORK?|¿CÓMO FUNCIONA?|어떻게 작동하나요?|WIE FUNKTIONIERT ES?|COME FUNZIONA?|यह कैसे काम करता है?|NASIL ÇALIŞIR?
READ THE STRUCTURE|LEE LA ESTRUCTURA|구조 읽기|STRUKTUR VERSTEHEN|LEGGI LA STRUTTURA|संरचना पढ़ें|YAPIYI OKU
Every word has a role|Cada palabra tiene una función|모든 단어에는 역할이 있어요|Jedes Wort hat eine Funktion|Ogni parola ha un ruolo|हर शब्द की भूमिका होती है|Her kelimenin bir görevi vardır
Grammar reference|Referencia gramatical|문법 참고자료|Grammatikreferenz|Riferimento grammaticale|व्याकरण संदर्भ|Dil bilgisi kaynağı
TEST THE RULE|PON A PRUEBA LA REGLA|규칙 테스트|REGEL TESTEN|VERIFICA LA REGOLA|नियम की जाँच करें|KURALI TEST ET
Practice with the lesson examples|Practica con ejemplos de la lección|수업 예시로 연습하기|Mit Lektionsbeispielen üben|Esercitati con gli esempi|पाठ के उदाहरणों से अभ्यास करें|Ders örnekleriyle alıştırma yap
Unique questions|Preguntas diferentes|서로 다른 문제|Unterschiedliche Fragen|Domande diverse|अलग-अलग प्रश्न|Farklı sorular
Practice question|Pregunta de práctica|연습 문제|Übungsfrage|Domanda di esercizio|अभ्यास प्रश्न|Alıştırma sorusu
English meaning|Significado en inglés|영어 뜻|Bedeutung auf Englisch|Significato in inglese|अंग्रेज़ी अर्थ|İngilizce anlamı
Choose an answer|Elige una respuesta|답 선택|Antwort wählen|Scegli una risposta|उत्तर चुनें|Bir cevap seç
SELECTED WORD|PALABRA SELECCIONADA|선택한 단어|AUSGEWÄHLTES WORT|PAROLA SELEZIONATA|चुना हुआ शब्द|SEÇİLEN KELİME
Choose a role first.|Elige primero una función.|먼저 역할을 선택하세요.|Wähle zuerst eine Funktion.|Scegli prima un ruolo.|पहले भूमिका चुनें।|Önce bir görev seç.
Correct. |Correcto. |정답입니다. |Richtig. |Corretto. |सही। |Doğru. 
Try again: read the word’s relationship to the sentence.|Inténtalo de nuevo: observa la relación de la palabra con la oración.|다시 해보세요: 문장 속 단어의 관계를 살펴보세요.|Versuche es erneut: Achte auf die Rolle des Wortes im Satz.|Riprova: osserva la relazione della parola con la frase.|फिर प्रयास करें: वाक्य में शब्द का संबंध समझें।|Tekrar dene: kelimenin cümleyle ilişkisini incele.
EXPLORE THE IDEA|EXPLORA LA IDEA|개념 탐색|IDEE ERFORSCHEN|ESPLORA IL CONCETTO|विचार समझें|FİKRİ KEŞFET
LIVE MODEL|MODELO INTERACTIVO|실시간 모델|INTERAKTIVES MODELL|MODELLO INTERATTIVO|इंटरैक्टिव मॉडल|ETKİLEŞİMLİ MODEL
Model: drag or use rotation buttons|Modelo: arrastra o utiliza los botones para girarlo|모델: 드래그하거나 회전 버튼 사용|Modell ziehen oder Drehknöpfe nutzen|Modello: trascina o usa i pulsanti di rotazione|मॉडल घुमाने के लिए खींचें या बटन दबाएँ|Modeli sürükle veya döndürme tuşlarını kullan
Rotate left|Girar a la izquierda|왼쪽으로 회전|Nach links drehen|Ruota a sinistra|बाईं ओर घुमाएँ|Sola döndür
Rotate right|Girar a la derecha|오른쪽으로 회전|Nach rechts drehen|Ruota a destra|दाईं ओर घुमाएँ|Sağa döndür
Front|Frontal|정면|Vorne|Davanti|सामने|Ön
Unfold net|Desplegar desarrollo|전개도 펼치기|Netz aufklappen|Apri sviluppo piano|जाल खोलें|Açınımı göster
Overlay shapes|Superponer figuras|도형 겹치기|Formen überlagern|Sovrapponi figure|आकृतियाँ मिलाएँ|Şekilleri üst üste koy
Play motion|Iniciar animación|애니메이션 시작|Animation starten|Avvia animazione|एनिमेशन चलाएँ|Hareketi başlat
CHANGE THE VALUES|CAMBIA LOS VALORES|값 변경|WERTE ÄNDERN|CAMBIA I VALORI|मान बदलें|DEĞERLERİ DEĞİŞTİR
Make it yours|Personalízalo|직접 바꿔 보세요|Selbst ausprobieren|Personalizzalo|खुद बदलें|Kendin dene
Every change updates the model and solution immediately.|Cada cambio actualiza el modelo y la solución al instante.|값을 바꾸면 모델과 풀이가 즉시 업데이트됩니다.|Jede Änderung aktualisiert Modell und Lösung sofort.|Ogni modifica aggiorna subito modello e soluzione.|हर बदलाव से मॉडल और हल तुरंत बदलते हैं।|Her değişiklik modeli ve çözümü anında günceller.
UNDERSTAND WHY|COMPRENDE POR QUÉ|이유 이해하기|WARUM VERSTEHEN|CAPIRE PERCHÉ|कारण समझें|NEDENİNİ ANLA
From idea to solution|De la idea a la solución|개념에서 풀이까지|Von der Idee zur Lösung|Dall'idea alla soluzione|विचार से समाधान तक|Fikirden çözüme
CHECK YOUR UNDERSTANDING|COMPRUEBA LO QUE APRENDISTE|이해도 확인|WISSEN ÜBERPRÜFEN|VERIFICA LA COMPRENSIONE|समझ की जाँच करें|ANLADIĞINI KONTROL ET
Practice this topic|Practica este tema|이 주제 연습하기|Dieses Thema üben|Esercitati su questo argomento|इस विषय का अभ्यास करें|Bu konuda alıştırma yap
Foundation|Básico|기초|Grundlagen|Base|आधारभूत|Temel
Developing|Intermedio|중급|Aufbau|Intermedio|मध्यम|Gelişen
Advanced|Avanzado|고급|Fortgeschritten|Avanzato|उन्नत|İleri
Complete the values to display the model.|Completa los valores para mostrar el modelo.|값을 입력하면 모델이 표시됩니다.|Gib die Werte ein um das Modell zu zeigen.|Inserisci i valori per mostrare il modello.|मॉडल देखने के लिए मान भरें।|Modeli görmek için değerleri gir.
Pause|Pausa|일시정지|Pause|Pausa|विराम|Duraklat
HISTORY|HISTORIA|역사|GESCHICHTE|STORIA|इतिहास|TARİH
Explore events and distinguish their order from explanations of their causes.|Explora los acontecimientos y distingue la cronología de sus causas.|사건 순서와 원인 설명을 구분해 탐구하세요.|Untersuche Ereignisse und unterscheide Reihenfolge und Ursachen.|Esplora gli eventi e distingui la sequenza dalle cause.|घटनाओं के क्रम और उनके कारणों में अंतर समझें।|Olayları incele; sıralamayı nedenlerinden ayır.
A WINDOW INTO THE PAST|UNA VENTANA AL PASADO|과거 들여다보기|EIN BLICK IN DIE VERGANGENHEIT|UNA FINESTRA SUL PASSATO|अतीत की झलक|GEÇMİŞE BİR BAKIŞ
SELECT AN EVENT|ELIGE UN ACONTECIMIENTO|사건 선택|EREIGNIS WÄHLEN|SCEGLI UN EVENTO|घटना चुनें|BİR OLAY SEÇ
Topic scene|Escena del tema|주제 장면|Themenszene|Scena dell'argomento|विषय दृश्य|Konu sahnesi
Timeline|Línea de tiempo|연표|Zeitleiste|Linea del tempo|समयरेखा|Zaman çizelgesi
Causes & consequences|Causas y consecuencias|원인과 결과|Ursachen und Folgen|Cause e conseguenze|कारण और परिणाम|Nedenler ve sonuçlar
EXPLORE THE PERIOD|EXPLORA LA ÉPOCA|시대 탐구|EPOCHE ERKUNDEN|ESPLORA IL PERIODO|कालखंड का अध्ययन|DÖNEMİ KEŞFET
From event to idea|Del acontecimiento a la idea|사건에서 개념으로|Vom Ereignis zur Idee|Dall'evento al concetto|घटना से विचार तक|Olaydan fikre
Historical event|Acontecimiento histórico|역사적 사건|Historisches Ereignis|Evento storico|ऐतिहासिक घटना|Tarihî olay
Move through the events|Recorre los acontecimientos|사건 순서대로 보기|Durch Ereignisse navigieren|Esplora gli eventi|घटनाओं के बीच जाएँ|Olaylar arasında gez
Event number|Número de acontecimiento|사건 번호|Ereignisnummer|Numero dell'evento|घटना संख्या|Olay numarası
THE BIG IDEA|LA IDEA PRINCIPAL|핵심 개념|DIE KERNIDEE|L'IDEA PRINCIPALE|मुख्य विचार|ANA FİKİR
THINK BEYOND DATES|MIRA MÁS ALLÁ DE LAS FECHAS|날짜를 넘어 생각하기|ÜBER DATEN HINAUSDENKEN|OLTRE LE DATE|तारीखों से आगे सोचें|TARİHLERİN ÖTESİNİ DÜŞÜN
Context and impact|Contexto e impacto|배경과 영향|Kontext und Auswirkungen|Contesto e impatto|संदर्भ और प्रभाव|Bağlam ve etki
Factors and context|Factores y contexto|요인과 배경|Faktoren und Kontext|Fattori e contesto|कारक और संदर्भ|Etkenler ve bağlam
Consequences and changes|Consecuencias y cambios|결과와 변화|Folgen und Veränderungen|Conseguenze e cambiamenti|परिणाम और बदलाव|Sonuçlar ve değişimler
THINK ABOUT IT|REFLEXIONA|생각해 보세요|DENK DARÜBER NACH|RIFLETTI|इस पर सोचें|ÜZERİNDE DÜŞÜN
Sources & further reading|Fuentes y lecturas adicionales|자료 및 더 읽어보기|Quellen und weiterführende Literatur|Fonti e approfondimenti|स्रोत और अतिरिक्त अध्ययन|Kaynaklar ve ek okumalar
FACTORS|FACTORES|요인|FAKTOREN|FATTORI|कारक|ETKENLER
TOPIC|TEMA|주제|THEMA|ARGOMENTO|विषय|KONU
IMPACTS|IMPACTOS|영향|AUSWIRKUNGEN|IMPATTI|प्रभाव|ETKİLER
GEOGRAPHY|GEOGRAFÍA|지리|GEOGRAFIE|GEOGRAFIA|भूगोल|COĞRAFYA
EXPLORE THE CONNECTION|EXPLORA LA RELACIÓN|연결 관계 탐구|ZUSAMMENHANG ERFORSCHEN|ESPLORA LA RELAZIONE|संबंध समझें|BAĞLANTIYI KEŞFET
Depth view|Vista en profundidad|입체 보기|Tiefenansicht|Vista in profondità|गहराई दृश्य|Derinlik görünümü
Change it and observe|Cambia y observa|변경하고 관찰하기|Ändern und beobachten|Cambia e osserva|बदलें और देखें|Değiştir ve gözlemle
UNDERSTAND THE IDEA|COMPRENDE LA IDEA|개념 이해하기|IDEE VERSTEHEN|COMPRENDI IL CONCETTO|विचार समझें|FİKRİ ANLA
Earth science|Ciencias de la Tierra|지구과학|Geowissenschaften|Scienze della Terra|पृथ्वी विज्ञान|Yer bilimleri
Earth|Tierra|지구|Erde|Terra|पृथ्वी|Dünya
Select the pieces in order to rebuild the displayed example. Select an answer piece to return it.|Selecciona las piezas en orden para reconstruir el ejemplo. Pulsa una pieza elegida para devolverla.|표시된 예시를 다시 만들도록 조각을 순서대로 선택하세요. 선택한 조각을 누르면 되돌릴 수 있어요.|Wähle die Teile in der richtigen Reihenfolge. Tippe auf ein gewähltes Teil um es zurückzulegen.|Seleziona le parti nell'ordine corretto. Tocca una parte scelta per rimetterla.|दिए उदाहरण को फिर बनाने के लिए भागों को क्रम में चुनें। चुना हुआ भाग वापस करने के लिए उस पर दबाएँ।|Parçaları sırayla seçerek örneği yeniden kur. Seçtiğin parçaya dokunarak geri al.
Original Classora explanations and examples. Review the grammar at|Explicaciones y ejemplos originales de Classora. Consulta la gramática en|Classora 자체 설명과 예시입니다. 문법 참고:|Originale Erklärungen und Beispiele von Classora. Grammatik nachlesen bei|Spiegazioni ed esempi originali di Classora. Ripassa la grammatica su|क्लासोरा के मूल स्पष्टीकरण और उदाहरण। व्याकरण संदर्भ:|Classora özgün açıklamaları ve örnekleri. Dil bilgisi için:
A learning diagram, not an archaeological reconstruction. Event spacing is not proportional to elapsed years.|Es un diagrama didáctico, no una reconstrucción arqueológica. Los espacios no representan los años transcurridos.|학습용 도표이며 고고학적 복원이 아닙니다. 사건 간 간격은 실제 경과 연도에 비례하지 않습니다.|Ein Lehrdiagramm, keine archäologische Rekonstruktion. Die Abstände zeigen keine maßstabsgetreuen Zeitspannen.|È uno schema didattico, non una ricostruzione archeologica. Le distanze non sono proporzionali agli anni trascorsi.|यह शिक्षण चित्र है, पुरातात्विक पुनर्निर्माण नहीं। घटनाओं की दूरी बीते वर्षों के अनुपात में नहीं है।|Bu bir öğrenme şemasıdır, arkeolojik canlandırma değildir. Olay aralıkları geçen yıllarla orantılı değildir.
An earlier event is not automatically a cause of a later one. Political, economic and social factors can interact, and people can experience the same period differently.|Un hecho anterior no siempre causa uno posterior. Los factores políticos económicos y sociales interactúan y las experiencias pueden variar.|앞선 사건이 반드시 뒤의 사건 원인은 아닙니다. 정치·경제·사회 요인이 상호 작용하며 사람마다 시대 경험이 다를 수 있습니다.|Ein früheres Ereignis ist nicht automatisch die Ursache eines späteren. Politische wirtschaftliche und soziale Faktoren wirken zusammen.|Un evento precedente non è necessariamente causa di uno successivo. Fattori politici economici e sociali si intrecciano.|पहली घटना हमेशा बाद की घटना का कारण नहीं होती। राजनीतिक आर्थिक और सामाजिक कारक मिलकर काम कर सकते हैं।|Önceki olay her zaman sonrakinin nedeni değildir. Siyasi ekonomik ve toplumsal etkenler etkileşir.
Original Classora explanations. Consult these sources for details and context:|Explicaciones originales de Classora. Consulta estas fuentes para más detalles:|Classora의 자체 설명입니다. 자세한 내용은 다음 자료를 참고하세요:|Originale Classora-Erklärungen. Weitere Details in diesen Quellen:|Spiegazioni originali di Classora. Consulta queste fonti:|क्लासोरा के मूल स्पष्टीकरण। विस्तार के लिए ये स्रोत देखें:|Classora özgün açıklamaları. Ayrıntı için şu kaynaklara bak:
Select words to inspect their function. Curated examples keep the grammatical relationships valid as you switch.|Elige palabras para ver su función. Los ejemplos mantienen las relaciones gramaticales al cambiarlos.|단어를 선택해 문법적 기능을 살펴보세요. 예시를 바꿔도 문법 관계는 올바르게 유지됩니다.|Wähle Wörter um ihre Funktion zu prüfen. Die Beispiele bewahren beim Wechsel korrekte grammatische Beziehungen.|Seleziona parole per analizzarne la funzione. Gli esempi mantengono corretti i rapporti grammaticali.|शब्दों की भूमिका देखने के लिए उन्हें चुनें। उदाहरण बदलने पर भी व्याकरणिक संबंध सही रहते हैं।|Kelimeleri seçerek görevlerini incele. Örnekler değiştiğinde dil bilgisi ilişkileri doğru kalır.
Original Classora explanations and examples. Further reading:|Explicaciones y ejemplos originales de Classora. Lecturas adicionales:|Classora 자체 설명과 예시입니다. 추가 참고자료:|Originale Erklärungen und Beispiele von Classora. Weiterlesen:|Spiegazioni ed esempi originali di Classora. Approfondimenti:|क्लासोरा के मूल स्पष्टीकरण और उदाहरण। आगे पढ़ें:|Classora özgün açıklamaları ve örnekleri. Ek okumalar:
Al Jazeera Learning Arabic — grammar|Al Jazeera Aprender Árabe — gramática|알자지라 아랍어 학습 — 문법|Al Jazeera Arabisch lernen — Grammatik|Al Jazeera Imparare l'arabo — grammatica|अल जज़ीरा अरबी सीखें — व्याकरण|Al Jazeera Arapça öğrenimi — dil bilgisi
Live competition|Competición en directo|실시간 대회|Live-Wettbewerb|Gara in diretta|लाइव प्रतियोगिता|Canlı yarışma
What is the role of “|¿Cuál es la función de «|“의 문법적 역할은 무엇인가요?|Welche Funktion hat „|Qual è il ruolo di «|« की भूमिका क्या है?|“ sözcüğünün görevi nedir?
”?|»?|”?|“?|»?|» की?|”?
Drag horizontally to rotate. Colors connect the values to the model.|Arrastra horizontalmente para girar. Los colores vinculan los valores con el modelo.|좌우로 드래그해 회전하세요. 색상은 값과 모델을 연결합니다.|Zum Drehen waagerecht ziehen. Farben verbinden die Werte mit dem Modell.|Trascina orizzontalmente per ruotare. I colori collegano i valori al modello.|घुमाने के लिए दाएँ-बाएँ खींचें। रंग मानों को मॉडल से जोड़ते हैं।|Döndürmek için yatay sürükle. Renkler değerleri modele bağlar.
Word: |Palabra: |단어: |Wort: |Parola: |शब्द: |Kelime: 
Select a milestone to read the event and context. |Elige un hito para leer el evento y su contexto. |주요 사건을 선택해 내용과 배경을 읽으세요. |Wähle einen Meilenstein um das Ereignis und seinen Kontext zu lesen. |Seleziona una tappa per leggere l'evento e il contesto. |घटना और संदर्भ पढ़ने के लिए समयरेखा की घटना चुनें। |Olayı ve bağlamını okumak için bir dönüm noktası seç. 
The idea|La idea|핵심 개념|Die Idee|Il concetto|मुख्य विचार|Fikir
The variable you control|La variable que controlas|조절하는 변수|Die von dir gesteuerte Variable|La variabile che controlli|जिस चर को आप बदलते हैं|Kontrol ettiğin değişken
Read and explain the result|Lee y explica el resultado|결과를 읽고 설명하기|Ergebnis lesen und erklären|Leggi e spiega il risultato|परिणाम पढ़ें और समझाएँ|Sonucu oku ve açıkla
Inputs and rule|Datos y regla|입력값과 규칙|Eingaben und Regel|Dati e regola|दिए गए मान और नियम|Girdiler ve kural
Solution step |Paso de solución |풀이 단계 |Lösungsschritt |Passaggio della soluzione |हल का चरण |Çözüm adımı 
Decrease one variable|Reduce una variable|변수 하나 줄이기|Eine Variable verringern|Riduci una variabile|एक चर घटाएँ|Bir değişkeni azalt
Increase one variable|Aumenta una variable|변수 하나 늘리기|Eine Variable erhöhen|Aumenta una variabile|एक चर बढ़ाएँ|Bir değişkeni artır
Original values|Valores originales|원래 값|Ursprüngliche Werte|Valori iniziali|मूल मान|Başlangıç değerleri
Try another example|Prueba otro ejemplo|다른 예시 시도|Anderes Beispiel probieren|Prova un altro esempio|दूसरा उदाहरण आज़माएँ|Başka bir örnek dene
How is ordering events different from explaining their causes in this topic?|¿En qué se diferencia ordenar hechos de explicar sus causas en este tema?|이 주제에서 사건 순서를 정하는 것과 원인을 설명하는 것은 어떻게 다른가요?|Wie unterscheidet sich die zeitliche Reihenfolge von der Erklärung der Ursachen?|In che cosa differiscono l'ordine degli eventi e la spiegazione delle cause?|इस विषय में घटनाओं का क्रम बताना उनके कारण समझाने से कैसे अलग है?|Bu konuda olayları sıralamakla nedenlerini açıklamak nasıl farklıdır?
When you switch examples, which part will change and how will the rule remain visible?|Al cambiar de ejemplo, ¿qué parte cambia y cómo permanece visible la regla?|예시를 바꾸면 무엇이 달라지고 규칙은 어떻게 확인할 수 있나요?|Was ändert sich beim Beispielwechsel und wie bleibt die Regel sichtbar?|Cosa cambia con un nuovo esempio e come resta visibile la regola?|उदाहरण बदलने पर कौन सा भाग बदलता है और नियम कैसे दिखाई देता रहेगा?|Örnek değiştiğinde hangi bölüm değişir ve kural nasıl görünür kalır?
Change just one variable. What will happen to the model and result, and why?|Cambia una sola variable. ¿Qué ocurre con el modelo y el resultado? ¿Por qué?|변수 하나만 바꿔 보세요. 모델과 결과는 어떻게 달라지고 왜 그럴까요?|Ändere nur eine Variable. Was passiert mit Modell und Ergebnis und warum?|Cambia una sola variabile. Come cambiano il modello e il risultato e perché?|केवल एक चर बदलें। मॉडल और परिणाम पर क्या असर होगा और क्यों?|Yalnızca bir değişkeni değiştir. Model ve sonuç nasıl etkilenir, neden?
Practice this lesson|Practica esta lección|이 수업 연습하기|Diese Lektion üben|Esercitati su questa lezione|इस पाठ का अभ्यास करें|Bu ders için alıştırma yap
Distinct questions for this topic. Exam length is limited to the available questions.|Preguntas distintas de este tema. El examen se limita a las preguntas disponibles.|이 주제의 서로 다른 문제입니다. 시험 문항 수는 사용 가능한 문제에 따라 제한됩니다.|Unterschiedliche Fragen zu diesem Thema. Die Prüfung ist auf verfügbare Fragen begrenzt.|Domande diverse per questo argomento. L'esame è limitato alle domande disponibili.|इस विषय के अलग प्रश्न। परीक्षा की लंबाई उपलब्ध प्रश्नों तक सीमित है।|Bu konuya özel farklı sorular. Sınav uzunluğu mevcut sorularla sınırlıdır.
Model mode|Modo del modelo|모델 모드|Modellmodus|Modalità modello|मॉडल मोड|Model modu
Stage / example|Escena o ejemplo|장면 또는 예시|Szene oder Beispiel|Scena o esempio|दृश्य या उदाहरण|Sahne veya örnek
Milestone|Hito|주요 사건|Meilenstein|Tappa|महत्त्वपूर्ण घटना|Dönüm noktası
Select a model word whose role is: |Elige una palabra del modelo cuya función sea: |해당 역할의 단어를 선택하세요: |Wähle ein Modellwort mit folgender Funktion: |Scegli una parola del modello con funzione: |इस भूमिका वाला शब्द चुनें: |Şu görevde bir kelime seç: 
Read how the word relates to the sentence.|Observa cómo se relaciona la palabra con la oración.|단어가 문장에서 어떻게 연결되는지 읽어 보세요.|Lies wie das Wort mit dem Satz zusammenhängt.|Leggi come la parola si collega alla frase.|शब्द का वाक्य से संबंध समझें।|Kelimenin cümleyle ilişkisini oku.
Select the sentence part that demonstrates this lesson’s rule.|Elige la parte de la oración que muestra la regla.|수업 규칙을 보여 주는 문장 성분을 선택하세요.|Wähle den Satzteil der die Regel zeigt.|Scegli la parte della frase che mostra la regola.|नियम को दिखाने वाला वाक्य भाग चुनें।|Dersin kuralını gösteren cümle bölümünü seç.
Select the milestone described here: |Elige el acontecimiento descrito aquí: |여기에 설명된 사건을 선택하세요: |Wähle den hier beschriebenen Meilenstein: |Seleziona la tappa descritta qui: |यहाँ बताई घटना चुनें: |Burada anlatılan dönüm noktasını seç: 
Change “|Cambia «|“ 변경|Ändere „|Cambia «|« बदलें|“ değerini değiştir
” to reach: |» para llegar a: |”을 바꿔 다음 값에 도달하세요: |“ bis zu: |» per ottenere: |» को बदलकर यह प्राप्त करें: |” değerini şuna getir: 
Set “|Establece «|“ 설정|Setze „|Imposta «|« को सेट करें|“ değerini ayarla
” to |» a |”을 |“ auf |» a |» को |” değerini 
 and observe the diagram.| y observa el diagrama.|로 설정하고 도표를 관찰하세요.| und beobachte das Diagramm.| e osserva il diagramma.| पर सेट करें और चित्र देखें।| yap ve diyagramı gözlemle.
Change one variable and keep the others fixed.|Cambia una variable y deja las otras constantes.|변수 하나만 바꾸고 나머지는 그대로 두세요.|Ändere eine Variable und lasse die anderen konstant.|Cambia una variabile e mantieni le altre costanti.|एक चर बदलें और बाकी स्थिर रखें।|Bir değişkeni değiştir ve diğerlerini sabit tut.
; choose the closed circuit.|; elige el circuito cerrado.|; 닫힌 회로를 선택하세요.|; wähle den geschlossenen Stromkreis.|; scegli il circuito chiuso.|; बंद परिपथ चुनें।|; kapalı devreyi seç.
Acids & Bases Lab|Laboratorio de ácidos y bases|산과 염기 실험실|Labor für Säuren und Basen|Laboratorio di acidi e basi|अम्ल और क्षार प्रयोगशाला|Asit ve baz laboratuvarı
Idafa Grammar Lab|Laboratorio de gramática Idafa|이다파 문법 실험실|Idafa-Grammatiklabor|Laboratorio di grammatica Idafa|इदाफ़ा व्याकरण प्रयोगशाला|İzafet dil bilgisi laboratuvarı
Back to subjects|Volver a las asignaturas|과목으로 돌아가기|Zurück zu den Fächern|Torna alle materie|विषयों पर लौटें|Derslere dön
SCIENCE · LEARN BY EXPLORING|CIENCIAS · APRENDE EXPLORANDO|과학 · 탐구하며 배우기|NATURWISSENSCHAFT · ENTDECKEND LERNEN|SCIENZE · IMPARA ESPLORANDO|विज्ञान · खोजकर सीखें|FEN · KEŞFEDEREK ÖĞREN
ARABIC GRAMMAR · LEARN BY EXPLORING|GRAMÁTICA ÁRABE · APRENDE EXPLORANDO|아랍어 문법 · 탐구하며 배우기|ARABISCHE GRAMMATIK · ENTDECKEND LERNEN|GRAMMATICA ARABA · IMPARA ESPLORANDO|अरबी व्याकरण · खोजकर सीखें|ARAPÇA DİL BİLGİSİ · KEŞFEDEREK ÖĞREN
Explore with touch or mouse. Back returns you to the same place.|Explora con el dedo o el ratón. Volver te lleva al punto anterior.|터치나 마우스로 탐색하세요. 뒤로 가면 이전 위치로 돌아갑니다.|Mit Finger oder Maus erkunden. Zurück führt an die vorige Stelle.|Esplora con il tocco o il mouse. Indietro ti riporta dove eri.|टच या माउस से प्रयोग करें। वापस दबाने पर पहले स्थान पर जाएँगे।|Dokunarak veya fareyle keşfet. Geri dönünce önceki yere gidersin.
3D beaker and pH scale|Vaso 3D y escala de pH|3D 비커와 pH 눈금|3D-Becherglas und pH-Skala|Bicchiere 3D e scala pH|3D बीकर और pH पैमाना|3B beher ve pH ölçeği
Change pH|Cambiar pH|pH 변경|pH-Wert ändern|Cambia il pH|पीएच बदलें|pH değerini değiştir
Below 7: acidic · 7: neutral · Above 7: basic|Menos de 7: ácido · 7: neutro · Más de 7: básico|7 미만: 산성 · 7: 중성 · 7 초과: 염기성|Unter 7: sauer · 7: neutral · Über 7: basisch|Sotto 7: acido · 7: neutro · Sopra 7: basico|7 से कम: अम्लीय · 7: उदासीन · 7 से अधिक: क्षारीय|7 altı: asidik · 7: nötr · 7 üstü: bazik
Choose a solution|Elige una disolución|용액 선택|Lösung wählen|Scegli una soluzione|विलयन चुनें|Bir çözelti seç
What happens?|¿Qué sucede?|무슨 일이 일어날까요?|Was passiert?|Che cosa succede?|क्या होता है?|Ne olur?
The science|La explicación científica|과학적 설명|Die Wissenschaft dahinter|La spiegazione scientifica|वैज्ञानिक कारण|Bilimsel açıklama
Start test|Iniciar prueba|시험 시작|Test starten|Avvia il test|परीक्षण शुरू करें|Testi başlat
Sign in to start the test and save your result. Return to the lobby and open your account.|Inicia sesión para hacer la prueba y guardar el resultado. Vuelve al inicio y abre tu cuenta.|시험을 시작하고 결과를 저장하려면 로그인하세요. 홈으로 돌아가 계정을 여세요.|Melde dich an um den Test zu starten und das Ergebnis zu speichern. Kehre zum Startbereich zurück.|Accedi per iniziare il test e salvare il risultato. Torna alla home e apri il tuo account.|परीक्षण शुरू करने और परिणाम सहेजने के लिए लॉग इन करें। मुख्य पृष्ठ पर जाकर खाता खोलें।|Testi başlatıp sonucu kaydetmek için giriş yap. Ana sayfaya dönüp hesabını aç.
Acidic|Ácido|산성|Sauer|Acido|अम्लीय|Asidik
Basic|Básico|염기성|Basisch|Basico|क्षारीय|Bazik
This solution is acidic. Each one-unit decrease means ten times greater hydrogen-ion activity.|Esta solución es ácida. Cada descenso de una unidad de pH implica diez veces más actividad de iones hidrógeno.|이 용액은 산성입니다. pH가 1 감소하면 수소 이온 활성도는 10배 증가합니다.|Diese Lösung ist sauer. Sinkt der pH-Wert um eins steigt die Wasserstoffionenaktivität um das Zehnfache.|Questa soluzione è acida. Ogni diminuzione di una unità pH corrisponde a un'attività degli ioni idrogeno dieci volte maggiore.|यह विलयन अम्लीय है। पीएच एक इकाई घटने पर हाइड्रोजन आयन की सक्रियता दस गुना बढ़ती है।|Bu çözelti asidiktir. pH bir birim azaldığında hidrojen iyonu etkinliği on kat artar.
This solution is basic. The color represents a universal indicator, not the substance’s natural color.|Esta solución es básica. El color representa un indicador universal, no el color natural de la sustancia.|이 용액은 염기성입니다. 색상은 물질 고유색이 아닌 만능 지시약의 색을 나타냅니다.|Diese Lösung ist basisch. Die Farbe zeigt einen Universalindikator und nicht die natürliche Stofffarbe.|Questa soluzione è basica. Il colore indica quello dell'indicatore universale e non il colore naturale della sostanza.|यह विलयन क्षारीय है। रंग सार्वत्रिक सूचक का है, पदार्थ का प्राकृतिक रंग नहीं।|Bu çözelti baziktir. Renk maddenin doğal rengini değil evrensel belirtecin rengini gösterir.
This solution is neutral at about 25°C, like pure water.|Esta solución es neutra a unos 25 °C, como el agua pura.|이 용액은 순수한 물처럼 약 25°C에서 중성입니다.|Diese Lösung ist bei etwa 25 °C neutral, ähnlich reinem Wasser.|Questa soluzione è neutra a circa 25 °C, come l'acqua pura.|शुद्ध पानी की तरह यह विलयन लगभग 25°C पर उदासीन है।|Bu çözelti saf su gibi yaklaşık 25°C'de nötrdür.
Interactive 3D grammar book|Libro interactivo de gramática 3D|대화형 3D 문법책|Interaktives 3D-Grammatikbuch|Libro di grammatica 3D interattivo|इंटरैक्टिव 3D व्याकरण पुस्तक|Etkileşimli 3B dil bilgisi kitabı
Sentence|Oración|문장|Satz|Frase|वाक्य|Cümle
Two words|Dos palabras|두 단어|Zwei Wörter|Due parole|दो शब्द|İki kelime
New example|Nuevo ejemplo|새 예시|Neues Beispiel|Nuovo esempio|नया उदाहरण|Yeni örnek
Show meaning|Mostrar significado|뜻 보기|Bedeutung zeigen|Mostra significato|अर्थ दिखाएँ|Anlamı göster
Select the two words that form the idafa. Sometimes you will see a full transliterated sentence and sometimes only two words.|Selecciona las dos palabras que forman la idafa. Verás una oración transliterada o solo dos palabras.|이다파를 이루는 두 단어를 선택하세요. 로마자 표기 문장 또는 단어 두 개가 나올 수 있어요.|Wähle die zwei Wörter der Idafa-Verbindung. Manchmal erscheint ein umgeschriebener Satz, manchmal nur ein Wortpaar.|Seleziona le due parole dell'idafa. Vedrai una frase traslitterata oppure solo due parole.|इदाफ़ा बनाने वाले दो शब्द चुनें। कभी लिप्यंतरित पूरा वाक्य, कभी केवल दो शब्द दिखेंगे।|İzafet oluşturan iki kelimeyi seç. Bazen çevriyazılı bir cümle bazen yalnızca iki kelime görürsün.
Rotate the book|Girar el libro|책 회전|Buch drehen|Ruota il libro|पुस्तक घुमाएँ|Kitabı döndür
Book angle|Ángulo del libro|책 각도|Buchwinkel|Angolo del libro|पुस्तक का कोण|Kitap açısı
Tap either page to explain the role of each term.|Toca una página para ver la función de cada término.|각 페이지를 눌러 단어의 문법 역할을 살펴보세요.|Tippe auf eine Seite um die Funktion der Wörter zu sehen.|Tocca una pagina per scoprire il ruolo dei termini.|किसी पृष्ठ को दबाकर शब्दों की भूमिका देखें।|Her sözcüğün görevini öğrenmek için sayfalara dokun.
Idafa links two nouns. The first is the mudaf, and the second is the genitive mudaf ilayh. In a regular idafa, the mudaf normally takes neither the definite article nor tanween; its case depends on its role in the sentence.|La idafa une dos nombres. El primero es mudaf y el segundo es mudaf ilayh en genitivo. Normalmente el mudaf no lleva artículo definido ni tanwín; su caso depende de su función en la oración.|이다파는 두 명사를 연결합니다. 첫째는 무다프, 둘째는 속격 무다프 일라이히입니다. 보통 무다프에는 정관사나 탄윈이 붙지 않고, 격은 문장 내 역할에 따라 달라집니다.|Idafa verbindet zwei Nomen. Das erste ist Mudaf, das zweite Mudaf ilayh im Genitiv. Das Mudaf trägt normalerweise keinen bestimmten Artikel und kein Tanwin; sein Kasus hängt von der Satzfunktion ab.|L'idafa collega due nomi: il primo è mudaf e il secondo è mudaf ilayh al genitivo. Di norma il mudaf non prende articolo determinativo né tanwin; il suo caso dipende dal ruolo nella frase.|इदाफ़ा दो संज्ञाओं को जोड़ता है। पहली मुदाफ़ और दूसरी संबंध कारक में मुदाफ़ इलैह होती है। सामान्यतः मुदाफ़ पर निश्चित उपपद या तन्वीन नहीं होता; उसकी विभक्ति वाक्य में भूमिका पर निर्भर करती है।|İzafet iki ismi bağlar. İlki mudaf, ikincisi mecrur mudafun ileyh olur. Normalde mudaf belirli tanımlık veya tenvin almaz; irabı cümledeki görevine bağlıdır.
Choose an example|Elige un ejemplo|예시 선택|Beispiel wählen|Scegli un esempio|उदाहरण चुनें|Bir örnek seç
Explanation and rule|Explicación y regla|설명과 규칙|Erklärung und Regel|Spiegazione e regola|व्याख्या और नियम|Açıklama ve kural
Correct! These two terms form the mudaf and mudaf ilayh.|¡Correcto! Estas dos palabras son mudaf y mudaf ilayh.|정답입니다! 두 단어가 무다프와 무다프 일라이히를 이룹니다.|Richtig! Diese beiden Wörter bilden Mudaf und Mudaf ilayh.|Corretto! Questi due termini formano mudaf e mudaf ilayh.|सही! ये दो शब्द मुदाफ़ और मुदाफ़ इलैह बनाते हैं।|Doğru! Bu iki sözcük mudaf ve mudafun ileyh oluşturur.
Those two do not form the pair. Try two different terms.|Estas palabras no forman la pareja. Prueba otras dos.|이 두 단어는 올바른 짝이 아닙니다. 다른 단어를 선택하세요.|Diese Wörter bilden kein Paar. Versuche zwei andere.|Questi termini non formano la coppia. Prova altri due.|ये दोनों सही जोड़ी नहीं बनाते। दूसरे शब्द चुनें।|Bu iki kelime doğru ikili değil. Başka iki kelime dene.
Select two terms.|Selecciona dos términos.|단어 두 개를 선택하세요.|Wähle zwei Begriffe.|Seleziona due termini.|दो शब्द चुनें।|İki kelime seç.
Mudaf: |Mudaf: |무다프: |Mudaf: |Mudaf: |मुदाफ़: |Mudaf: 
Mudaf ilayh: |Mudaf ilayh: |무다프 일라이히: |Mudaf ilayh: |Mudaf ilayh: |मुदाफ़ इलैह: |Mudafun ileyh:
Lesson & learning tools|Herramientas de aprendizaje|수업 및 학습 도구|Lern- und Unterrichtswerkzeuge|Strumenti per la lezione|पाठ और सीखने के उपकरण|Ders ve öğrenme araçları
Model challenge|Desafío del modelo|모델 도전|Modellaufgabe|Sfida sul modello|मॉडल चुनौती|Model görevi
Two live experiments|Dos experimentos interactivos|두 가지 실시간 실험|Zwei interaktive Experimente|Due esperimenti interattivi|दो इंटरैक्टिव प्रयोग|İki etkileşimli deney
Present to class|Presentar a la clase|수업에서 발표하기|Vor der Klasse präsentieren|Presenta alla classe|कक्षा में प्रस्तुत करें|Sınıfa sun
Why learn this?|¿Por qué aprender esto?|왜 배워야 할까요?|Warum das lernen?|Perché impararlo?|यह क्यों सीखें?|Bunu neden öğreniyoruz?
Example from this lesson|Ejemplo de la lección|수업 예시|Beispiel aus dieser Lektion|Esempio della lezione|इस पाठ का उदाहरण|Bu dersten bir örnek
Lesson dictionary — select a term|Glosario de la lección: elige un término|수업 용어집: 단어 선택|Lektionswörterbuch: Begriff wählen|Glossario della lezione: scegli un termine|पाठ शब्दावली: शब्द चुनें|Ders sözlüğü: terim seç
Display preferences|Preferencias de visualización|화면 표시 설정|Anzeigeeinstellungen|Preferenze di visualizzazione|प्रदर्शन की पसंद|Görünüm tercihleri
Report a lesson problem|Informar de un problema con la lección|수업 문제 신고|Problem in Lektion melden|Segnala un problema nella lezione|पाठ की समस्या बताएँ|Ders sorunu bildir
Problem type|Tipo de problema|문제 유형|Problemtyp|Tipo di problema|समस्या का प्रकार|Sorun türü
What happened?|¿Qué ocurrió?|무슨 문제가 있었나요?|Was ist passiert?|Che cosa è successo?|क्या हुआ?|Ne oldu?
Continue to support|Continuar con soporte|지원팀으로 계속|Zum Support weiter|Continua con l'assistenza|सहायता से संपर्क करें|Desteğe devam et
Example: |Ejemplo: |예시: |Beispiel: |Esempio: |उदाहरण: |Örnek: 
Your last saved model inputs have been restored.|Se han restaurado los últimos valores guardados.|최근 저장한 모델 입력값을 복원했습니다.|Deine zuletzt gespeicherten Modellwerte wurden wiederhergestellt.|Sono stati ripristinati gli ultimi valori salvati.|पिछले सहेजे मॉडल मान बहाल कर दिए गए हैं।|Son kaydedilen model değerleri geri yüklendi.
Model inputs save automatically on this device.|Los datos del modelo se guardan automáticamente en este dispositivo.|모델 입력값은 이 기기에 자동 저장됩니다.|Modelleingaben werden auf diesem Gerät automatisch gespeichert.|I valori del modello vengono salvati automaticamente sul dispositivo.|मॉडल के मान इस डिवाइस पर अपने आप सहेजते हैं।|Model girdileri bu cihaza otomatik kaydedilir.
Could not save on this device. Check that storage is available.|No se pudo guardar. Comprueba el almacenamiento del dispositivo.|저장할 수 없습니다. 기기 저장 공간을 확인하세요.|Speichern fehlgeschlagen. Prüfe ob Speicher verfügbar ist.|Impossibile salvare. Controlla lo spazio disponibile.|सहेजा नहीं जा सका। डिवाइस का स्टोरेज जाँचें।|Bu cihazda kaydedilemedi. Depolamayı kontrol et.
MODEL CHALLENGE|DESAFÍO DEL MODELO|모델 도전|MODELLAUFGABE|SFIDA SUL MODELLO|मॉडल चुनौती|MODEL GÖREVİ
Check model|Comprobar modelo|모델 확인|Modell prüfen|Controlla il modello|मॉडल जाँचें|Modeli kontrol et
Another challenge|Otro desafío|다른 도전|Weitere Aufgabe|Un'altra sfida|एक और चुनौती|Başka bir görev
Complete valid inputs before starting a challenge.|Introduce valores válidos antes de empezar.|도전하기 전에 올바른 값을 입력하세요.|Gib gültige Werte ein bevor du die Aufgabe beginnst.|Inserisci valori validi prima della sfida.|चुनौती से पहले सही मान दर्ज करें।|Göreve başlamadan geçerli değerleri gir.
Explore A and B independently|Explora A y B por separado|A와 B를 따로 탐구하기|A und B getrennt untersuchen|Esplora A e B separatamente|A और B का अलग-अलग अध्ययन करें|A ve B'yi ayrı incele
Change one variable for a fair comparison. The main model keeps its inputs.|Cambia una variable para comparar. El modelo principal conserva sus valores.|공정하게 비교하려면 변수 하나만 바꾸세요. 기본 모델의 값은 유지됩니다.|Ändere nur eine Variable zum fairen Vergleich. Das Hauptmodell behält seine Werte.|Cambia una variabile per un confronto corretto. Il modello principale conserva i valori.|सही तुलना के लिए केवल एक चर बदलें। मुख्य मॉडल के मान बने रहेंगे।|Adil karşılaştırma için tek değişkeni değiştir. Ana model değerlerini korur.
Reveal answer|Mostrar respuesta|정답 보기|Antwort anzeigen|Mostra risposta|उत्तर दिखाएँ|Cevabı göster
Exit presentation|Salir de la presentación|발표 종료|Präsentation beenden|Esci dalla presentazione|प्रस्तुति बंद करें|Sunumdan çık
Hide answer|Ocultar respuesta|정답 숨기기|Antwort ausblenden|Nascondi risposta|उत्तर छिपाएँ|Cevabı gizle
Please write a short description.|Escribe una breve descripción.|간단한 설명을 입력하세요.|Schreibe eine kurze Beschreibung.|Scrivi una breve descrizione.|संक्षिप्त विवरण लिखें।|Kısa bir açıklama yaz.
Open the main site online to send this report. Keep your description before leaving.|Abre la web principal con Internet para enviar este informe. Conserva la descripción.|인터넷에 연결해 기본 사이트에서 신고를 보내세요. 작성한 설명은 보관하세요.|Öffne die Hauptseite online um den Bericht zu senden. Sichere vorher deine Beschreibung.|Apri il sito principale online per inviare la segnalazione. Conserva la descrizione.|रिपोर्ट भेजने के लिए मुख्य वेबसाइट ऑनलाइन खोलें। जाने से पहले विवरण सँभालें।|Rapor göndermek için ana siteyi çevrimiçi aç. Açıklamanı sakla.
PICK UP WHERE YOU LEFT OFF|CONTINÚA DONDE LO DEJASTE|이어서 학습하기|DORT WEITERMACHEN|RIPRENDI DA DOVE ERI|जहाँ छोड़ा था वहीं से शुरू करें|KALDIĞIN YERDEN DEVAM ET
Grade |Curso |학년 |Klasse |Classe |कक्षा |Sınıf 
Open a lesson, then return here to resume the same experiment.|Abre una lección y vuelve aquí para continuar la misma actividad.|수업을 연 뒤 여기로 돌아오면 같은 활동을 이어갈 수 있습니다.|Öffne eine Lektion und kehre hierher zurück um dieselbe Übung fortzusetzen.|Apri una lezione e torna qui per riprendere la stessa attività.|एक पाठ खोलें, फिर उसी गतिविधि को जारी रखने के लिए यहाँ लौटें।|Bir ders aç; aynı etkinliğe devam etmek için buraya dön.
My offline units|Mis unidades sin conexión|오프라인 학습 단원|Meine Offline-Einheiten|Le mie unità offline|मेरी ऑफ़लाइन इकाइयाँ|Çevrimdışı ünitelerim
Review based on your answers|Repaso según tus respuestas|답변 기반 복습|Wiederholung nach deinen Antworten|Ripasso in base alle risposte|आपके उत्तरों के आधार पर दोहराएँ|Yanıtlarına göre tekrar
Start with topics that have more mistakes. Each button opens a short practice from that topic.|Empieza por los temas con más errores. Cada botón abre una práctica breve.|오답이 많은 주제부터 시작하세요. 각 버튼을 누르면 짧은 연습이 열립니다.|Beginne mit Themen bei denen du mehr Fehler gemacht hast. Jeder Knopf öffnet eine kurze Übung.|Inizia dagli argomenti con più errori. Ogni pulsante apre un breve esercizio.|जिन विषयों में गलतियाँ अधिक हैं, उनसे शुरू करें। हर बटन छोटा अभ्यास खोलता है।|En çok hata yaptığın konulardan başla. Her düğme kısa bir alıştırma açar.
Mistakes / attempts: |Errores / intentos: |오답 / 시도: |Fehler / Versuche: |Errori / tentativi: |गलतियाँ / प्रयास: |Hatalar / denemeler: 
Answer practice questions or model challenges to see suggestions here.|Responde ejercicios o desafíos del modelo para ver sugerencias aquí.|연습 문제나 모델 도전을 풀면 추천 주제가 표시됩니다.|Beantworte Übungsfragen oder Modellaufgaben um Vorschläge zu erhalten.|Rispondi agli esercizi o alle sfide per vedere consigli qui.|सुझाव देखने के लिए अभ्यास प्रश्न या मॉडल चुनौतियाँ हल करें।|Önerileri görmek için alıştırma ve model görevlerini çöz.
TRY • NOTICE • EXPLAIN|PRUEBA • OBSERVA • EXPLICA|실험 • 관찰 • 설명|AUSPROBIEREN • BEOBACHTEN • ERKLÄREN|PROVA • OSSERVA • SPIEGA|प्रयोग • अवलोकन • व्याख्या|DENE • GÖZLEMLE • AÇIKLA
Take a closer look|Explora más a fondo|자세히 살펴보기|Genauer hinschauen|Esplora più da vicino|ध्यान से देखें|Daha yakından incele
Step-by-step guide|Guía paso a paso|단계별 안내|Schritt-für-Schritt-Anleitung|Guida passo per passo|चरण-दर-चरण मार्गदर्शन|Adım adım rehber
Previous step|Paso anterior|이전 단계|Vorheriger Schritt|Passaggio precedente|पिछला चरण|Önceki adım
Next step|Paso siguiente|다음 단계|Nächster Schritt|Passaggio successivo|अगला चरण|Sonraki adım
Close guide|Cerrar guía|안내 닫기|Anleitung schließen|Chiudi guida|मार्गदर्शन बंद करें|Rehberi kapat
Predict before you try|Predice antes de probar|실험 전에 예측하기|Vorher vorhersagen|Prevedi prima di provare|प्रयोग से पहले अनुमान लगाएँ|Denemeden önce tahmin et
What do you expect to change, and why?|¿Qué crees que cambiará y por qué?|무엇이 왜 달라질 것으로 예상하나요?|Was wird sich deiner Meinung nach ändern und warum?|Che cosa pensi cambierà e perché?|क्या बदलेगा और क्यों, आपका अनुमान क्या है?|Sence ne değişecek ve neden?
Write your prediction, then try it and compare…|Escribe tu predicción, prueba y compara…|예측을 적고 실험한 뒤 비교하세요…|Notiere deine Vorhersage, probiere es und vergleiche…|Scrivi la previsione, prova e confronta…|अनुमान लिखें, प्रयोग करें और तुलना करें…|Tahminini yaz, dene ve karşılaştır…
A note for reflection and comparison in this lesson; not automatically graded.|Nota para reflexionar y comparar; no se califica automáticamente.|학습 성찰과 비교를 위한 메모이며 자동 채점되지 않습니다.|Eine Notiz zur Reflexion und zum Vergleich; keine automatische Bewertung.|Nota per riflettere e confrontare; non viene valutata automaticamente.|यह चिंतन और तुलना के लिए टिप्पणी है; इसका स्वचालित अंकन नहीं होगा।|Bu not düşünmek ve karşılaştırmak içindir; otomatik puanlanmaz.
Save a state, change the inputs, and compare the results side by side.|Guarda un estado, cambia los datos y compara los resultados en paralelo.|상태를 저장하고 입력값을 바꾼 뒤 결과를 나란히 비교하세요.|Speichere einen Zustand, ändere die Werte und vergleiche beide Ergebnisse.|Salva uno stato, cambia i dati e confronta i risultati affiancati.|एक स्थिति सहेजें, मान बदलें और दोनों परिणामों की तुलना करें।|Bir durumu kaydet, değerleri değiştir ve sonuçları yan yana karşılaştır.
Save state to compare|Guardar estado para comparar|비교할 상태 저장|Zustand zum Vergleich speichern|Salva stato per confronto|तुलना के लिए स्थिति सहेजें|Karşılaştırmak için durumu kaydet
Clear comparison|Borrar comparación|비교 초기화|Vergleich zurücksetzen|Cancella confronto|तुलना साफ़ करें|Karşılaştırmayı temizle
SAVED STATE|ESTADO GUARDADO|저장한 상태|GESPEICHERTER ZUSTAND|STATO SALVATO|सहेजी स्थिति|KAYDEDİLEN DURUM
CURRENT STATE|ESTADO ACTUAL|현재 상태|AKTUELLER ZUSTAND|STATO ATTUALE|वर्तमान स्थिति|GEÇERLİ DURUM
State saved. Change one thing and observe the difference.|Estado guardado. Cambia una cosa y observa la diferencia.|상태가 저장됐어요. 하나만 바꾸고 차이를 관찰하세요.|Zustand gespeichert. Ändere eine Sache und beobachte den Unterschied.|Stato salvato. Cambia una cosa e osserva la differenza.|स्थिति सहेजी गई। एक चीज़ बदलकर अंतर देखें।|Durum kaydedildi. Bir şeyi değiştirip farkı gözlemle.
Follow Classora for news and new activities.|Sigue Classora para conocer novedades y actividades.|Classora를 팔로우하고 새 소식과 활동을 확인하세요.|Folge Classora für Neuigkeiten und neue Aktivitäten.|Segui Classora per notizie e nuove attività.|नई खबरों और गतिविधियों के लिए क्लासोरा को फ़ॉलो करें।|Haberler ve yeni etkinlikler için Classora'yı takip et.
Our Instagram page|Nuestra página de Instagram|인스타그램 페이지|Unsere Instagram-Seite|La nostra pagina Instagram|हमारा इंस्टाग्राम पेज|Instagram sayfamız
Curriculum is loading. Try again in a moment.|Se está cargando el currículo. Inténtalo de nuevo en un momento.|교육과정을 불러오는 중입니다. 잠시 후 다시 시도하세요.|Der Lehrplan wird geladen. Versuche es gleich erneut.|Il programma si sta caricando. Riprova tra poco.|पाठ्यक्रम लोड हो रहा है। थोड़ी देर बाद फिर प्रयास करें।|Müfredat yükleniyor. Biraz sonra yeniden dene.
CURRICULUM|PLAN DE ESTUDIOS|교육과정|LEHRPLAN|PROGRAMMA|पाठ्यक्रम|MÜFREDAT
Choose your grade, then a subject|Elige primero tu curso y luego la asignatura|먼저 학년, 다음으로 과목을 선택하세요|Wähle zuerst die Klasse und dann das Fach|Scegli prima la classe e poi la materia|पहले कक्षा, फिर विषय चुनें|Önce sınıfı ardından dersi seç
Grades 7–10. Arabic is grammar-only and English is grammar-only. Every topic has learning, practice, an exam and live competition.|Cursos 7 a 10. Árabe e inglés incluyen gramática. Cada tema tiene lección, ejercicios, examen y competición en directo.|7~10학년 대상입니다. 아랍어와 영어는 문법 중심입니다. 각 주제에는 수업, 연습, 시험, 실시간 대회가 있습니다.|Klassen 7 bis 10. Arabisch und Englisch umfassen Grammatik. Jedes Thema bietet Lernen, Üben, Prüfung und Live-Wettbewerb.|Classi dalla 7 alla 10. Arabo e inglese trattano la grammatica. Ogni argomento offre studio, esercizi, esame e gara dal vivo.|कक्षा 7 से 10 तक। अरबी और अंग्रेज़ी में व्याकरण है। हर विषय में पाठ, अभ्यास, परीक्षा और लाइव प्रतियोगिता है।|7–10. sınıflar. Arapça ve İngilizce dil bilgisi odaklıdır. Her konuda ders, alıştırma, sınav ve canlı yarışma vardır.
topics|temas|주제|Themen|argomenti|विषय|konular
Physics|Física|물리|Physik|Fisica|भौतिक विज्ञान|Fizik
Biology|Biología|생물학|Biologie|Biologia|जीव विज्ञान|Biyoloji
This subject is not added for this grade yet.|Esta asignatura aún no está disponible para este curso.|이 학년에는 아직 이 과목이 없습니다.|Dieses Fach ist für diese Klasse noch nicht verfügbar.|Questa materia non è ancora disponibile per questa classe.|इस कक्षा में यह विषय अभी नहीं जोड़ा गया है।|Bu ders bu sınıfa henüz eklenmedi.
YOUR LEARNING SPACE|TU ESPACIO DE APRENDIZAJE|나의 학습 공간|DEIN LERNBEREICH|IL TUO SPAZIO DI STUDIO|आपका सीखने का स्थान|ÖĞRENME ALANIN
Think. Try. Understand.|Piensa. Prueba. Comprende.|생각하고 실험하고 이해하세요.|Denken. Ausprobieren. Verstehen.|Pensa. Prova. Comprendi.|सोचें। आज़माएँ। समझें।|Düşün. Dene. Anla.
Choose a subject. Explore an idea. Make it click.|Elige una asignatura, explora una idea y compréndela.|과목을 골라 개념을 탐구하고 이해해 보세요.|Wähle ein Fach, erkunde eine Idee und verstehe sie.|Scegli una materia, esplora un concetto e comprendi.|एक विषय चुनें, विचार समझें और अभ्यास करें।|Ders seç, bir fikri keşfet ve kavra.
Search topics, labs or tools…|Buscar temas, laboratorios o herramientas…|주제, 실험실, 도구 검색…|Themen, Labore oder Werkzeuge suchen…|Cerca argomenti, laboratori o strumenti…|विषय, प्रयोगशाला या उपकरण खोजें…|Konu, laboratuvar veya araç ara…
lesson + 3D + exam + live competition|lección + 3D + examen + competición en directo|수업 + 3D + 시험 + 실시간 대회|Lektion + 3D + Prüfung + Live-Wettbewerb|lezione + 3D + esame + gara in diretta|पाठ + 3D + परीक्षा + लाइव प्रतियोगिता|ders + 3B + sınav + canlı yarışma
GEOMETRY|GEOMETRÍA|기하학|GEOMETRIE|GEOMETRIA|ज्यामिति|GEOMETRİ
MATHEMATICS|MATEMÁTICAS|수학|MATHEMATIK|MATEMATICA|गणित|MATEMATİK
SCIENCE|CIENCIAS|과학|NATURWISSENSCHAFT|SCIENZE|विज्ञान|FEN BİLİMLERİ
ARABIC GRAMMAR|GRAMÁTICA ÁRABE|아랍어 문법|ARABISCHE GRAMMATIK|GRAMMATICA ARABA|अरबी व्याकरण|ARAPÇA DİL BİLGİSİ
TOOLS|HERRAMIENTAS|도구|WERKZEUGE|STRUMENTI|उपकरण|ARAÇLAR
This topic is not currently available in Classora.|Este tema aún no está disponible en Classora.|이 주제는 아직 Classora에서 제공되지 않습니다.|Dieses Thema ist in Classora noch nicht verfügbar.|Questo argomento non è ancora disponibile in Classora.|यह विषय अभी क्लासोरा में उपलब्ध नहीं है।|Bu konu henüz Classora'da yok.
Request this topic|Solicitar este tema|이 주제 요청하기|Dieses Thema anfragen|Richiedi questo argomento|इस विषय का अनुरोध करें|Bu konuyu iste
Science live competition|Competición de ciencias en directo|실시간 과학 대회|Live-Wettbewerb in Naturwissenschaften|Gara di scienze in diretta|विज्ञान लाइव प्रतियोगिता|Canlı fen yarışması
Science class exams|Exámenes de ciencias|과학 시험|Naturwissenschaftliche Prüfungen|Esami di scienze|विज्ञान परीक्षाएँ|Fen sınavları
A clear example|Un ejemplo claro|쉬운 예시|Ein klares Beispiel|Un esempio chiaro|आसान उदाहरण|Açık bir örnek
Try a question|Prueba una pregunta|문제 풀어보기|Eine Frage ausprobieren|Prova una domanda|एक प्रश्न हल करें|Bir soru dene
Open particle lab|Abrir laboratorio de partículas|입자 실험실 열기|Teilchenlabor öffnen|Apri laboratorio di particelle|कण प्रयोगशाला खोलें|Parçacık laboratuvarını aç
Explore elements|Explorar elementos|원소 탐구|Elemente erforschen|Esplora gli elementi|तत्वों का अध्ययन|Elementleri keşfet
Ask about this idea|Pregunta sobre esta idea|이 개념 질문하기|Zu dieser Idee fragen|Chiedi di questo concetto|इस विचार के बारे में पूछें|Bu fikri sor
Try: explain simply or give me an example|Prueba: explica de forma sencilla o dame un ejemplo|예시: 쉽게 설명해 줘 또는 예시를 보여 줘|Versuche: einfach erklären oder ein Beispiel geben|Prova: spiega semplicemente oppure fammi un esempio|कोशिश करें: आसान समझाओ या उदाहरण दो|Şunu dene: basitçe açıkla veya örnek ver
Ask|Preguntar|질문하기|Fragen|Chiedi|पूछें|Sor
Science challenge|Desafío de ciencias|과학 도전|Naturwissenschaftliche Aufgabe|Sfida di scienze|विज्ञान चुनौती|Fen meydan okuması
Start practice|Empezar práctica|연습 시작|Übung starten|Inizia esercizio|अभ्यास शुरू करें|Alıştırmaya başla
Self-test: 10 questions|Autoevaluación: 10 preguntas|자가 시험: 10문제|Selbsttest: 10 Fragen|Autoverifica: 10 domande|स्व-परीक्षा: 10 प्रश्न|Öz değerlendirme: 10 soru
Science practice|Práctica de ciencias|과학 연습|Naturwissenschaftliche Übung|Esercizi di scienze|विज्ञान अभ्यास|Fen alıştırması
Review every answer|Repasar todas las respuestas|모든 답 확인하기|Alle Antworten prüfen|Rivedi tutte le risposte|सभी उत्तरों की समीक्षा|Tüm cevapları gözden geçir
Your answer: |Tu respuesta: |내 답: |Deine Antwort: |La tua risposta: |आपका उत्तर: |Cevabın: 
Correct: |Correcto: |정답: |Richtig: |Corretto: |सही: |Doğru: 
New questions|Nuevas preguntas|새 문제|Neue Fragen|Nuove domande|नए प्रश्न|Yeni sorular
QUESTION |PREGUNTA |문제 |FRAGE |DOMANDA |प्रश्न |SORU 
Correct answer: |Respuesta correcta: |정답: |Richtige Antwort: |Risposta corretta: |सही उत्तर: |Doğru cevap: 
Answer recorded for this test.|Respuesta guardada para esta prueba.|이 시험의 답을 기록했습니다.|Antwort für diesen Test gespeichert.|Risposta registrata per il test.|इस परीक्षा के लिए उत्तर दर्ज हुआ।|Bu test için cevap kaydedildi.
Identify what the question asks and the scientific idea.|Identifica qué se pide y el concepto científico.|문제의 요구와 과학 개념을 파악하세요.|Erkenne die Frage und das wissenschaftliche Konzept.|Individua la domanda e il concetto scientifico.|प्रश्न में क्या पूछा है और वैज्ञानिक विचार पहचानें।|Sorunun ne istediğini ve bilimsel fikri belirle.
Compare the options with the lesson and eliminate unsuitable choices.|Compara las opciones con la lección y descarta las incorrectas.|선택지를 수업 내용과 비교하고 맞지 않는 답을 제외하세요.|Vergleiche die Optionen mit der Lektion und schließe unpassende aus.|Confronta le opzioni con la lezione ed elimina quelle inadatte.|विकल्पों की पाठ से तुलना करें और गलत उत्तर हटाएँ।|Seçenekleri dersle karşılaştır ve uygun olmayanları ele.
Arabic test — Idafa|Prueba de árabe — Idafa|아랍어 시험 — 이다파|Arabischtest — Idafa|Test di arabo — Idafa|अरबी परीक्षा — इदाफ़ा|Arapça sınavı — İzafet
Idafa practice|Práctica de Idafa|이다파 연습|Idafa-Übung|Esercizi di Idafa|इदाफ़ा अभ्यास|İzafet alıştırması
Answer review|Revisión de respuestas|답안 검토|Antwortübersicht|Revisione delle risposte|उत्तर समीक्षा|Cevap incelemesi
Answer recorded.|Respuesta guardada.|답이 기록됐어요.|Antwort gespeichert.|Risposta registrata.|उत्तर दर्ज हुआ।|Cevap kaydedildi.
Could not connect. Check your connection and try again.|No se pudo conectar. Comprueba la conexión e inténtalo de nuevo.|연결할 수 없습니다. 인터넷 연결을 확인하고 다시 시도하세요.|Verbindung fehlgeschlagen. Prüfe die Verbindung und versuche es erneut.|Connessione non riuscita. Controlla la rete e riprova.|कनेक्शन नहीं हो सका। इंटरनेट जाँचकर फिर प्रयास करें।|Bağlanılamadı. İnternetini kontrol edip tekrar dene.
Find|Halla|구하기|Finde|Trova|ज्ञात करें|Bul
Identify the hypotenuse first.|Identifica primero la hipotenusa.|먼저 빗변을 확인하세요.|Bestimme zuerst die Hypotenuse.|Individua prima l'ipotenusa.|पहले कर्ण पहचानें।|Önce hipotenüsü belirle.
Use a²+b²=c².|Utiliza a²+b²=c².|a²+b²=c² 공식을 사용하세요.|Verwende a²+b²=c².|Usa a²+b²=c².|a²+b²=c² का प्रयोग करें।|a²+b²=c² kullan.
Add the leg squares for the hypotenuse, or subtract for a leg, then take the square root.|Suma los cuadrados de los catetos para hallar la hipotenusa; para hallar un cateto, resta y calcula la raíz.|빗변을 구할 때는 두 변의 제곱을 더하고, 다른 변을 구할 때는 빼서 제곱근을 구하세요.|Addiere die Quadrate der Katheten für die Hypotenuse. Für eine Kathete subtrahiere und ziehe die Wurzel.|Somma i quadrati dei cateti per l'ipotenusa oppure sottrai per un cateto, poi calcola la radice.|कर्ण के लिए दोनों भुजाओं के वर्ग जोड़ें; दूसरी भुजा के लिए घटाकर वर्गमूल लें।|Hipotenüs için dik kenarların karelerini topla; bir dik kenar için çıkarıp karekök al.
Find x.|Halla x.|x를 구하세요.|Berechne x.|Trova x.|x ज्ञात करें।|x'i bul.
Notice the signs of y.|Observa los signos de y.|y의 부호를 확인하세요.|Beachte die Vorzeichen von y.|Osserva i segni di y.|y के चिह्न देखें।|y'nin işaretlerine dikkat et.
Add the equations to eliminate y.|Suma las ecuaciones para eliminar y.|방정식을 더해 y를 소거하세요.|Addiere die Gleichungen um y zu eliminieren.|Somma le equazioni per eliminare y.|y हटाने के लिए समीकरण जोड़ें।|y'yi yok etmek için denklemleri topla.
After adding, divide by the coefficient of x, then check both equations.|Tras sumar, divide entre el coeficiente de x y verifica ambas ecuaciones.|더한 뒤 x의 계수로 나누고 두 식을 모두 확인하세요.|Teile nach dem Addieren durch den Koeffizienten von x und prüfe beide Gleichungen.|Dopo la somma dividi per il coefficiente di x e verifica entrambe le equazioni.|जोड़ने के बाद x के गुणांक से भाग दें और दोनों समीकरण जाँचें।|Topladıktan sonra x'in katsayısına böl ve iki denklemi kontrol et.
Identify the scientific idea in the question.|Identifica el concepto científico de la pregunta.|문제의 과학 개념을 파악하세요.|Erkenne das wissenschaftliche Konzept in der Frage.|Individua il concetto scientifico della domanda.|प्रश्न की वैज्ञानिक अवधारणा पहचानें।|Sorudaki bilimsel fikri belirle.
Identify what the question asks.|Identifica qué pide la pregunta.|문제에서 무엇을 묻는지 확인하세요.|Erkenne was die Frage verlangt.|Individua cosa chiede la domanda.|प्रश्न में क्या पूछा गया है, पहचानें।|Sorunun ne istediğini belirle.
Eliminate options that contradict the lesson.|Descarta las opciones que contradigan la lección.|수업 내용과 맞지 않는 선택지를 제외하세요.|Schließe Antworten aus die der Lektion widersprechen.|Elimina le opzioni contrarie alla lezione.|पाठ से मेल न खाने वाले विकल्प हटाएँ।|Dersle çelişen seçenekleri ele.
Interactive 3D beaker and pH scale|Vaso interactivo 3D y escala de pH|대화형 3D 비커와 pH 눈금|Interaktives 3D-Becherglas und pH-Skala|Bicchiere interattivo 3D e scala pH|इंटरैक्टिव 3D बीकर और पीएच पैमाना|Etkileşimli 3B beher ve pH ölçeği
Acidic · 0–6|Ácido · 0–6|산성 · 0–6|Sauer · 0–6|Acido · 0–6|अम्लीय · 0–6|Asidik · 0–6
Neutral · 7|Neutro · 7|중성 · 7|Neutral · 7|Neutro · 7|उदासीन · 7|Nötr · 7
Basic · 8–14|Básico · 8–14|염기성 · 8–14|Basisch · 8–14|Basico · 8–14|क्षारीय · 8–14|Bazik · 8–14
Simplified view for this device.|Vista simplificada para este dispositivo.|이 기기에 맞춘 간소화 보기입니다.|Vereinfachte Ansicht für dieses Gerät.|Vista semplificata per questo dispositivo.|इस डिवाइस के लिए सरल दृश्य।|Bu cihaz için basitleştirilmiş görünüm.
pH value|Valor de pH|pH 값|pH-Wert|Valore pH|पीएच मान|pH değeri
Change pH from zero to fourteen|Cambiar pH de cero a catorce|pH를 0에서 14까지 변경|pH von null bis vierzehn ändern|Modifica il pH da zero a quattordici|पीएच शून्य से चौदह तक बदलें|pH değerini sıfırdan on dörde değiştir
Choose a sample|Elige una muestra|시료 선택|Probe wählen|Scegli un campione|नमूना चुनें|Örnek seç
Advanced challenge|Desafío avanzado|고급 도전|Fortgeschrittene Aufgabe|Sfida avanzata|उन्नत चुनौती|İleri düzey görev
Study Mode|Modo de estudio|학습 모드|Lernmodus|Modalità studio|अध्ययन मोड|Çalışma modu
Subject|Asignatura|과목|Fach|Materia|विषय|Ders
Search for a topic…|Busca un tema…|주제 검색…|Nach Thema suchen…|Cerca un argomento…|विषय खोजें…|Konu ara…
Choose your grade, subject and topic, then start reviewing.|Elige tu curso, asignatura y tema, y empieza a repasar.|학년과 과목, 주제를 선택한 뒤 복습을 시작하세요.|Wähle Klasse, Fach und Thema und beginne mit der Wiederholung.|Scegli classe, materia e argomento, poi inizia il ripasso.|कक्षा, विषय और पाठ चुनकर दोहराना शुरू करें।|Sınıf, ders ve konu seçip tekrara başla.
Session complete. Review the ideas you missed.|Sesión completada. Repasa lo que fallaste.|학습 완료. 틀린 개념을 복습하세요.|Sitzung beendet. Wiederhole die Fehler.|Sessione completata. Ripassa gli argomenti sbagliati.|सत्र पूरा हुआ। गलत अवधारणाएँ दोहराएँ।|Oturum tamamlandı. Yanlış yaptığın konuları tekrar et.
Saving progress…|Guardando progreso…|진행 상황 저장 중…|Fortschritt wird gespeichert…|Salvataggio progressi…|प्रगति सहेजी जा रही है…|İlerleme kaydediliyor…
Session already saved.|Sesión guardada anteriormente.|이미 저장된 학습입니다.|Sitzung bereits gespeichert.|Sessione già salvata.|सत्र पहले से सहेजा गया है।|Oturum zaten kaydedildi.
Retry saving this session|Reintentar guardar esta sesión|학습 저장 다시 시도|Sitzung erneut speichern|Riprova a salvare la sessione|सत्र फिर सहेजें|Oturumu yeniden kaydet
Progress saved.|Progreso guardado.|진행 상황 저장됨.|Fortschritt gespeichert.|Progressi salvati.|प्रगति सहेजी गई।|İlerleme kaydedildi.
Local practice; no result or XP was sent while offline.|Práctica local; sin conexión no se enviaron resultados ni XP.|오프라인 연습입니다. 결과나 경험치가 전송되지 않았습니다.|Lokale Übung; offline wurden keine Ergebnisse oder XP übertragen.|Esercizio locale; offline non sono stati inviati risultati né XP.|स्थानीय अभ्यास; ऑफ़लाइन रहने पर परिणाम या XP नहीं भेजे गए।|Yerel alıştırma; çevrimdışıyken sonuç veya XP gönderilmedi.
New session|Nueva sesión|새 학습|Neue Sitzung|Nuova sessione|नया सत्र|Yeni oturum
Next question|Siguiente pregunta|다음 문제|Nächste Frage|Domanda successiva|अगला प्रश्न|Sonraki soru
Review the idea: |Repasa la idea: |개념 복습: |Wiederhole die Idee: |Ripassa il concetto: |विचार दोहराएँ: |Konuyu tekrar et: 
Answer: |Respuesta: |답: |Antwort: |Risposta: |उत्तर: |Cevap: 
Recall your answer before showing options|Recuerda la respuesta antes de ver las opciones|선택지를 보기 전에 답을 떠올리세요|Überlege zuerst bevor du die Antworten siehst|Ricorda la risposta prima di vedere le opzioni|विकल्प देखने से पहले उत्तर याद करें|Seçenekleri görmeden yanıtı hatırla
Recall the idea yourself…|Intenta recordar la idea…|스스로 개념을 떠올리세요…|Versuche dich selbst zu erinnern…|Prova a ricordare il concetto…|खुद अवधारणा याद करें…|Fikri kendin hatırlamaya çalış…
Reveal choices to check|Mostrar opciones para comprobar|선택지 표시|Antwortmöglichkeiten zeigen|Mostra le opzioni|जाँच के लिए विकल्प दिखाएँ|Seçenekleri göster
Flip card|Girar tarjeta|카드 뒤집기|Karte umdrehen|Gira la scheda|कार्ड पलटें|Kartı çevir
Know it|Lo sé|알아요|Ich weiß es|Lo so|जानता हूँ|Biliyorum
Review again|Repasar otra vez|다시 복습|Erneut wiederholen|Ripassa di nuovo|फिर दोहराएँ|Tekrar et
Choose another topic|Elige otro tema|다른 주제 선택|Anderes Thema wählen|Scegli un altro argomento|दूसरा विषय चुनें|Başka konu seç
Exam average|Media de exámenes|시험 평균|Prüfungsdurchschnitt|Media esami|परीक्षा औसत|Sınav ortalaması
Level|Nivel|수준|Niveau|Livello|स्तर|Seviye
Strongest subject|Asignatura más fuerte|가장 잘하는 과목|Stärkstes Fach|Materia migliore|सबसे मजबूत विषय|En güçlü ders
Subject to focus on|Asignatura que debes reforzar|집중할 과목|Fach zum Vertiefen|Materia su cui concentrarsi|ध्यान देने वाला विषय|Odaklanılacak ders
Progress to next level|Progreso al siguiente nivel|다음 수준까지 진행 상황|Fortschritt zur nächsten Stufe|Progresso al livello successivo|अगले स्तर की प्रगति|Sonraki seviyeye ilerleme
No data|Sin datos|데이터 없음|Keine Daten|Nessun dato|कोई डेटा नहीं|Veri yok
Achievements|Logros|성취|Erfolge|Traguardi|उपलब्धियाँ|Başarılar
First exam|Primer examen|첫 시험|Erste Prüfung|Primo esame|पहली परीक्षा|İlk sınav
Five exams|Cinco exámenes|시험 5회|Fünf Prüfungen|Cinque esami|पाँच परीक्षाएँ|Beş sınav
Learning step|Paso de aprendizaje|학습 단계|Lernschritt|Passo di apprendimento|सीखने का चरण|Öğrenme adımı
Topic explorer|Explorador de temas|주제 탐색기|Themen-Explorer|Esplora argomenti|विषय खोजकर्ता|Konu keşfi
Topics to practice|Temas para practicar|연습할 주제|Themen zum Üben|Argomenti da esercitare|अभ्यास के विषय|Alıştırma konuları
Now|Ahora|지금|Jetzt|Adesso|अभी|Şimdi
New learning tools|Nuevas herramientas de aprendizaje|새 학습 도구|Neue Lernwerkzeuge|Nuovi strumenti didattici|नए सीखने के उपकरण|Yeni öğrenme araçları
Request a topic|Solicitar un tema|주제 요청|Thema anfragen|Richiedi un argomento|विषय अनुरोध करें|Konu iste
Send request|Enviar solicitud|요청 보내기|Anfrage senden|Invia richiesta|अनुरोध भेजें|İsteği gönder
Request status|Estado de la solicitud|요청 상태|Anfragestatus|Stato della richiesta|अनुरोध की स्थिति|İstek durumu
You’re offline. Saved lessons are available; results and requests need a connection.|Estás sin conexión. Puedes usar las lecciones guardadas; los resultados y solicitudes requieren Internet.|오프라인 상태입니다. 저장한 수업은 이용할 수 있지만 결과 및 요청 전송에는 연결이 필요합니다.|Du bist offline. Gespeicherte Lektionen sind verfügbar; Ergebnisse und Anfragen brauchen Internet.|Sei offline. Le lezioni salvate sono disponibili, ma risultati e richieste richiedono Internet.|आप ऑफ़लाइन हैं। सहेजे पाठ चलेंगे, पर परिणाम और अनुरोध के लिए इंटरनेट चाहिए।|Çevrimdışısın. Kayıtlı dersleri kullanabilirsin; sonuçlar ve istekler için internet gerekir.
Ask me about math, science, Arabic/English grammar, history or geography. Try: explain Past Simple.|Pregúntame sobre matemáticas, ciencias, gramática árabe o inglesa, historia o geografía. Prueba: explica el pasado simple.|수학, 과학, 아랍어·영어 문법, 역사, 지리를 물어보세요. 예시: 과거 시제를 설명해 줘.|Frage mich zu Mathe, Naturwissenschaften, arabischer und englischer Grammatik, Geschichte oder Geografie. Versuch: Simple Past erklären.|Chiedimi di matematica, scienze, grammatica araba o inglese, storia o geografia. Prova: spiega il Past Simple.|मुझसे गणित, विज्ञान, अरबी-अंग्रेज़ी व्याकरण, इतिहास या भूगोल पूछें। उदाहरण: पास्ट सिंपल समझाओ।|Matematik, fen, Arapça-İngilizce dil bilgisi, tarih veya coğrafya sor. Örnek: Past Simple'ı açıkla.
I can explain this topic or give an example and a practice question. Try “explain simply”.|Puedo explicar el tema o dar un ejemplo y una pregunta. Prueba «explica de forma sencilla».|이 주제를 설명하거나 예시와 연습 문제를 드릴 수 있어요. '쉽게 설명해 줘'라고 해보세요.|Ich kann das Thema erklären oder ein Beispiel mit Übungsfrage geben. Versuch „einfach erklären“.|Posso spiegare l'argomento o proporre un esempio e una domanda. Prova «spiega semplicemente».|मैं विषय समझा सकता हूँ या उदाहरण और अभ्यास प्रश्न दे सकता हूँ। «आसान समझाओ» लिखें।|Konuyu açıklayabilir, örnek ve alıştırma sorusu verebilirim. “Basitçe açıkla” de.
Get instant feedback in practice, or take a 10-question self-test. This is practice, not a class grade.|Recibe comentarios inmediatos o haz una autoevaluación de 10 preguntas. Es práctica, no una nota escolar.|연습 중 즉시 피드백을 받거나 10문항 자가 시험을 볼 수 있어요. 학교 성적에는 반영되지 않습니다.|Erhalte sofort Rückmeldung oder mache einen Selbsttest mit 10 Fragen. Dies ist Übung, keine Schulnote.|Ricevi feedback immediato o fai un'autoverifica di 10 domande. È esercizio, non un voto scolastico.|अभ्यास में तुरंत प्रतिक्रिया लें या 10 प्रश्नों की स्व-परीक्षा दें। यह स्कूल का अंक नहीं है।|Anında geri bildirim al veya 10 soruluk deneme yap. Bu bir alıştırmadır, okul notu değildir.
Help me|Ayúdame|도와줘|Hilf mir|Aiutami|मेरी मदद करें|Bana yardım et
Particle lab|Laboratorio de partículas|입자 실험실|Teilchenlabor|Laboratorio di particelle|कण प्रयोगशाला|Parçacık laboratuvarı
A simplified particle model; sizes and spacing are illustrative.|Modelo simplificado de partículas; tamaños y distancias son ilustrativos.|단순화된 입자 모델입니다. 크기와 간격은 설명을 위한 것입니다.|Ein vereinfachtes Teilchenmodell. Größen und Abstände sind nur zur Veranschaulichung.|Modello semplificato di particelle; dimensioni e distanze sono illustrative.|सरल कण मॉडल; आकार और दूरी केवल समझाने के लिए हैं।|Basitleştirilmiş parçacık modeli; boyutlar ve aralıklar temsildir.
Solid: particles vibrate around fixed positions.|Sólido: las partículas vibran en posiciones casi fijas.|고체: 입자는 거의 고정된 자리에서 진동합니다.|Feststoff: Teilchen schwingen um feste Positionen.|Solido: le particelle vibrano attorno a posizioni fisse.|ठोस: कण स्थिर स्थानों के आसपास कंपन करते हैं।|Katı: parçacıklar sabit konumlar çevresinde titreşir.
Liquid: nearby particles move past each other.|Líquido: las partículas cercanas se deslizan unas junto a otras.|액체: 가까운 입자들이 서로 지나가며 움직입니다.|Flüssigkeit: Nahe Teilchen bewegen sich aneinander vorbei.|Liquido: particelle vicine scorrono le une sulle altre.|द्रव: पास-पास कण एक-दूसरे के पास से चलते हैं।|Sıvı: yakın parçacıklar birbirinin yanından geçer.
Gas: particles are far apart and move freely.|Gas: las partículas están separadas y se mueven libremente.|기체: 입자들이 멀리 떨어져 자유롭게 움직입니다.|Gas: Teilchen sind weit entfernt und bewegen sich frei.|Gas: le particelle sono distanti e si muovono liberamente.|गैस: कण दूर-दूर होते हैं और स्वतंत्र रूप से चलते हैं।|Gaz: parçacıklar uzak ve serbest hareket eder.
Learning & appearance|Aprendizaje y apariencia|학습 및 화면|Lernen und Darstellung|Apprendimento e aspetto|अध्ययन और रूप|Öğrenme ve görünüm
Show or hide features for learners here. Changes save immediately.|Muestra u oculta funciones para estudiantes. Los cambios se guardan al instante.|학습자 기능을 표시하거나 숨길 수 있습니다. 변경 사항은 즉시 저장됩니다.|Zeige oder verbirg Funktionen für Lernende. Änderungen werden sofort gespeichert.|Mostra o nascondi funzioni per gli studenti. Le modifiche si salvano subito.|विद्यार्थियों के लिए सुविधाएँ दिखाएँ या छिपाएँ। बदलाव तुरंत सहेजते हैं।|Öğrenci özelliklerini göster veya gizle. Değişiklikler hemen kaydedilir.
Could not save this setting.|No se pudo guardar este ajuste.|설정을 저장하지 못했습니다.|Diese Einstellung konnte nicht gespeichert werden.|Impossibile salvare questa impostazione.|यह सेटिंग सहेजी नहीं जा सकी।|Bu ayar kaydedilemedi.
Pythagoras Practice|Práctica de Pitágoras|피타고라스 연습|Pythagoras-Übung|Esercizi di Pitagora|पाइथागोरस अभ्यास|Pisagor alıştırması
Science Assignment — General|Tarea de ciencias — General|과학 과제 — 일반|Naturwissenschaftsaufgabe — Allgemein|Compito di scienze — Generale|विज्ञान कार्य — सामान्य|Fen ödevi — Genel
Science Assignment — Periodic Table|Tarea de ciencias — Tabla periódica|과학 과제 — 주기율표|Naturwissenschaftsaufgabe — Periodensystem|Compito di scienze — Tavola periodica|विज्ञान कार्य — आवर्त सारणी|Fen ödevi — Periyodik tablo
Science Assignment — Atoms|Tarea de ciencias — Átomos|과학 과제 — 원자|Naturwissenschaftsaufgabe — Atome|Compito di scienze — Atomi|विज्ञान कार्य — परमाणु|Fen ödevi — Atomlar
Science Assignment — Forces & Motion|Tarea de ciencias — Fuerzas y movimiento|과학 과제 — 힘과 운동|Naturwissenschaftsaufgabe — Kräfte und Bewegung|Compito di scienze — Forze e moto|विज्ञान कार्य — बल और गति|Fen ödevi — Kuvvet ve hareket
Arabic Assignment — Idafa|Tarea de árabe — Idafa|아랍어 과제 — 이다파|Arabischaufgabe — Idafa|Compito di arabo — Idafa|अरबी कार्य — इदाफ़ा|Arapça ödevi — İzafet
Could not open the assignment sender.|No se pudo abrir el envío de tareas.|과제 전송 창을 열 수 없습니다.|Aufgabenversand konnte nicht geöffnet werden.|Impossibile aprire l'invio dei compiti.|कार्य भेजने वाला भाग नहीं खुला।|Ödev gönderme ekranı açılamadı.
Science Assignment|Tarea de ciencias|과학 과제|Naturwissenschaftsaufgabe|Compito di scienze|विज्ञान कार्य|Fen ödevi
Answer the following questions:|Responde a las siguientes preguntas:|다음 문제에 답하세요:|Beantworte die folgenden Fragen:|Rispondi alle seguenti domande:|निम्न प्रश्नों के उत्तर दें:|Aşağıdaki soruları yanıtla:
Assignment generated. Sending…|Tarea creada. Enviando…|과제를 만들었습니다. 전송 중…|Aufgabe erstellt. Wird gesendet…|Compito creato. Invio in corso…|कार्य तैयार है। भेजा जा रहा है…|Ödev oluşturuldu. Gönderiliyor…
Language changed. Start a new practice in your selected language.|Idioma cambiado. Empieza una nueva práctica en el idioma elegido.|언어가 바뀌었습니다. 선택한 언어로 새 연습을 시작하세요.|Sprache geändert. Starte eine neue Übung in der gewählten Sprache.|Lingua cambiata. Inizia una nuova esercitazione nella lingua scelta.|भाषा बदल गई है। चुनी भाषा में नया अभ्यास शुरू करें।|Dil değiştirildi. Seçtiğin dilde yeni bir alıştırma başlat.
Recall challenge: write your idea, then reveal the choices to check.|Desafío de memoria: escribe tu idea y luego muestra las opciones para comprobar.|기억력 도전: 생각을 적은 뒤 선택지를 열어 확인하세요.|Erinnerungsaufgabe: Schreibe deine Idee auf und zeige dann die Antworten zur Kontrolle.|Sfida di memoria: scrivi la tua idea e poi mostra le opzioni per verificare.|स्मरण चुनौती: अपना विचार लिखें, फिर विकल्प दिखाकर जाँचें।|Hatırlama görevi: fikrini yaz, ardından seçenekleri açıp kontrol et.
Flashcards — |Tarjetas — |학습 카드 — |Lernkarten — |Schede — |अध्ययन कार्ड — |Bilgi kartları — 
Tap to flip. Cards marked for review return sooner.|Toca para girar. Las tarjetas marcadas para repasar volverán antes.|눌러서 뒤집으세요. 복습 표시한 카드는 더 빨리 다시 나옵니다.|Zum Umdrehen tippen. Für Wiederholung markierte Karten erscheinen früher.|Tocca per girare. Le schede segnate per ripasso torneranno prima.|पलटने के लिए दबाएँ। दोहराने वाले कार्ड जल्दी वापस आएँगे।|Çevirmek için dokun. Tekrar işaretli kartlar daha erken gelir.
to next level|para el siguiente nivel|다음 수준까지|bis zur nächsten Stufe|al livello successivo|अगले स्तर तक|sonraki seviyeye
Mathematics & Science|Matemáticas y ciencias|수학과 과학|Mathematik und Naturwissenschaften|Matematica e scienze|गणित और विज्ञान|Matematik ve fen
Available practice and exam percentages, not an official school grade.|Porcentajes de práctica y examen; no son notas escolares oficiales.|연습과 시험 점수 비율이며 공식 학교 성적은 아닙니다.|Übungs- und Prüfungsergebnisse in Prozent, keine offiziellen Schulnoten.|Percentuali di esercizi ed esami, non voti scolastici ufficiali.|अभ्यास और परीक्षा के प्रतिशत हैं, आधिकारिक स्कूल अंक नहीं।|Alıştırma ve sınav yüzdeleri; resmî okul notu değildir.
Math & Science|Matemáticas y ciencias|수학과 과학|Mathe und Naturwissenschaften|Matematica e scienze|गणित और विज्ञान|Matematik ve fen
Complete an activity to earn your first badge.|Completa una actividad para conseguir tu primera insignia.|활동을 완료해 첫 배지를 받으세요.|Schließe eine Aktivität für dein erstes Abzeichen ab.|Completa un'attività per ottenere il primo distintivo.|पहला बैज पाने के लिए एक गतिविधि पूरी करें।|İlk rozetini kazanmak için bir etkinlik bitir.
No low-scoring topics in your current practice data.|No hay temas con puntuaciones bajas en tus prácticas.|현재 연습 기록에 점수가 낮은 주제가 없습니다.|Keine Themen mit niedrigen Ergebnissen in deinen Übungsdaten.|Nessun argomento con punteggi bassi nelle tue esercitazioni.|मौजूदा अभ्यास आँकड़ों में कम अंक वाला विषय नहीं है।|Alıştırma verilerinde düşük puanlı konu yok.
My students’ progress|Progreso de mis estudiantes|학생들의 학습 진도|Fortschritt meiner Lernenden|Progressi dei miei studenti|मेरे छात्रों की प्रगति|Öğrencilerimin ilerlemesi
Class progress|Progreso de la clase|학급 진도|Klassenfortschritt|Progressi della classe|कक्षा की प्रगति|Sınıf ilerlemesi
No shared progress yet. It appears after a class member completes an activity.|Aún no hay progreso compartido. Aparecerá cuando alguien complete una actividad.|공유된 진도 정보가 없습니다. 학급 구성원이 활동을 마치면 표시됩니다.|Noch keine geteilten Fortschritte. Sie erscheinen wenn ein Klassenmitglied eine Aktivität abschließt.|Non ci sono ancora progressi condivisi. Appariranno dopo che un membro della classe completa un'attività.|अभी साझा प्रगति नहीं है। कक्षा का सदस्य गतिविधि पूरा करेगा तो दिखेगी।|Henüz paylaşılan ilerleme yok. Sınıftan biri etkinlik tamamlayınca görünür.
Your day, one step at a time.|Tu día, paso a paso.|하루를 한 걸음씩|Dein Tag, Schritt für Schritt.|La tua giornata, passo dopo passo.|हर दिन एक कदम आगे।|Günün, adım adım.
Your day is clear. No tasks or upcoming events right now. A good time to explore a lesson!|No hay tareas ni eventos próximos. ¡Buen momento para explorar una lección!|지금 예정된 과제나 일정이 없습니다. 새로운 수업을 탐색해 보세요!|Keine Aufgaben oder Termine. Ein guter Moment um eine Lektion zu erkunden!|Nessun compito o evento imminente. È un buon momento per esplorare una lezione!|अभी कोई कार्य या कार्यक्रम नहीं है। नया पाठ देखने का अच्छा समय है!|Şu anda görev veya yaklaşan etkinlik yok. Yeni bir ders keşfetmek için iyi zaman!
Requested topic|Tema solicitado|요청한 주제|Angefragtes Thema|Argomento richiesto|अनुरोधित विषय|İstenen konu
Enter at least two characters.|Escribe al menos dos caracteres.|최소 두 글자를 입력하세요.|Gib mindestens zwei Zeichen ein.|Inserisci almeno due caratteri.|कम से कम दो अक्षर लिखें।|En az iki karakter gir.
You already requested this topic.|Ya solicitaste este tema.|이미 요청한 주제입니다.|Du hast dieses Thema bereits angefragt.|Hai già richiesto questo argomento.|आप पहले इस विषय का अनुरोध कर चुके हैं।|Bu konuyu zaten istedin.
Request received. Thank you!|¡Solicitud recibida! Gracias.|요청이 접수됐습니다. 감사합니다!|Anfrage erhalten. Vielen Dank!|Richiesta ricevuta. Grazie!|अनुरोध मिल गया। धन्यवाद!|İstek alındı. Teşekkürler!
Requested|Solicitado|요청됨|Angefragt|Richiesto|अनुरोधित|İstendi
Requested topics|Temas solicitados|요청된 주제|Angefragte Themen|Argomenti richiesti|अनुरोधित विषय|İstenen konular
First request: |Primera solicitud: |첫 요청: |Erste Anfrage: |Prima richiesta: |पहला अनुरोध: |İlk istek: 
Last request: |Última solicitud: |마지막 요청: |Letzte Anfrage: |Ultima richiesta: |आखिरी अनुरोध: |Son istek: 
Change request status|Cambiar estado de solicitud|요청 상태 변경|Anfragestatus ändern|Cambia stato richiesta|अनुरोध की स्थिति बदलें|İstek durumunu değiştir
Delete request|Eliminar solicitud|요청 삭제|Anfrage löschen|Elimina richiesta|अनुरोध हटाएँ|İsteği sil
Delete this topic and all its requests?|¿Eliminar este tema y todas sus solicitudes?|이 주제와 모든 요청을 삭제할까요?|Dieses Thema und alle Anfragen löschen?|Eliminare questo argomento e tutte le richieste?|इस विषय और उसके सभी अनुरोध हटाएँ?|Bu konuyu ve tüm isteklerini silmek istiyor musun?
Confirm deletion|Confirmar eliminación|삭제 확인|Löschung bestätigen|Conferma eliminazione|हटाना सुनिश्चित करें|Silmeyi onayla
No requests with this status.|No hay solicitudes con este estado.|이 상태의 요청이 없습니다.|Keine Anfragen mit diesem Status.|Nessuna richiesta con questo stato.|इस स्थिति का कोई अनुरोध नहीं है।|Bu durumda istek yok.
Language changed. Open your activity in the new language.|Idioma cambiado. Abre la actividad en el nuevo idioma.|언어가 변경됐습니다. 새 언어로 활동을 여세요.|Sprache geändert. Öffne die Aktivität in der neuen Sprache.|Lingua cambiata. Apri l'attività nella nuova lingua.|भाषा बदल गई है। नई भाषा में गतिविधि खोलें।|Dil değişti. Etkinliği yeni dilde aç.
The first noun is the mudaf. It is specified or possessed by the noun that follows and normally takes neither al- nor tanween in a regular idafa.|El primer sustantivo es mudaf. El siguiente sustantivo lo especifica; normalmente no lleva al- ni tanwín en una idafa regular.|첫 명사는 무다프입니다. 뒤따르는 명사가 그 의미를 한정하며 일반적인 이다파에서는 정관사나 탄윈을 쓰지 않습니다.|Das erste Nomen ist Mudaf. Das folgende bestimmt es näher; normalerweise trägt es in einer Idafa weder al- noch Tanwin.|Il primo nome è mudaf. Il nome successivo lo specifica; di norma non prende al- né tanwin in un'idafa regolare.|पहली संज्ञा मुदाफ़ है। अगली संज्ञा उसे विशेष करती है; सामान्य इदाफ़ा में मुदाफ़ पर अल- या तन्वीन नहीं आता।|İlk isim mudafdır. Ardından gelen isim onu belirtir; normal izafette mudaf al- veya tenvin almaz.
The second noun is the mudaf ilayh. It completes the meaning and is always genitive.|El segundo nombre es mudaf ilayh. Completa el sentido y siempre va en genitivo.|두 번째 명사는 무다프 일라이히이며 의미를 완성하고 항상 속격입니다.|Das zweite Nomen ist Mudaf ilayh. Es ergänzt die Bedeutung und steht immer im Genitiv.|Il secondo nome è mudaf ilayh. Completa il significato ed è sempre al genitivo.|दूसरी संज्ञा मुदाफ़ इलैह है। अर्थ पूरा करती है और हमेशा संबंध कारक में होती है।|İkinci isim mudafun ileyhtir; anlamı tamamlar ve her zaman mecrurdur.
Hide meaning|Ocultar significado|뜻 숨기기|Bedeutung ausblenden|Nascondi significato|अर्थ छिपाएँ|Anlamı gizle
Goal reached.|Objetivo alcanzado.|목표에 도달했습니다.|Ziel erreicht.|Obiettivo raggiunto.|लक्ष्य पूरा हुआ।|Hedefe ulaşıldı.
The goal is not reached yet. Current result: |Todavía no alcanzaste el objetivo. Resultado actual: |아직 목표에 도달하지 못했습니다. 현재 결과: |Das Ziel ist noch nicht erreicht. Aktuelles Ergebnis: |Obiettivo non ancora raggiunto. Risultato attuale: |लक्ष्य अभी पूरा नहीं हुआ। वर्तमान परिणाम: |Hedefe henüz ulaşılmadı. Şu anki sonuç:
Interactive lab: drag the model to rotate it, move the slider or choose a sample. Color simulates a universal indicator.|Laboratorio interactivo: gira el modelo, mueve el control o elige una muestra. El color simula un indicador universal.|대화형 실험실: 모델을 회전하고 슬라이더를 움직이거나 시료를 고르세요. 색상은 만능 지시약을 나타냅니다.|Interaktives Labor: Drehe das Modell, bewege den Regler oder wähle eine Probe. Die Farbe simuliert einen Universalindikator.|Laboratorio interattivo: ruota il modello, sposta il cursore o scegli un campione. Il colore simula un indicatore universale.|इंटरैक्टिव प्रयोगशाला: मॉडल घुमाएँ, स्लाइडर चलाएँ या नमूना चुनें। रंग सार्वत्रिक सूचक का अनुकरण करता है।|Etkileşimli laboratuvar: modeli döndür, sürgüyü hareket ettir veya örnek seç. Renk evrensel belirteci simgeler.
New on Classora|Novedades en Classora|Classora 새 소식|Neu bei Classora|Novità su Classora|क्लासोरा पर नया|Classora'da yenilikler
Student workspace|Espacio del estudiante|학생 공간|Schülerbereich|Area studente|छात्र क्षेत्र|Öğrenci alanı
Admin workspace|Panel de administración|관리자 공간|Adminbereich|Area amministratore|प्रशासक क्षेत्र|Yönetici alanı
My class: |Mi clase: |내 학급: |Meine Klasse: |La mia classe: |मेरी कक्षा: |Sınıfım: 
Classes: |Clases: |학급: |Klassen: |Classi: |कक्षाएँ: |Sınıflar: 
Learn. Explore. Create.|Aprende. Explora. Crea.|배우고 탐구하고 창조하세요.|Lernen. Entdecken. Gestalten.|Impara. Esplora. Crea.|सीखें। खोजें। बनाएँ।|Öğren. Keşfet. Üret.
What's new|Novedades|새 소식|Neuigkeiten|Novità|नया क्या है|Yenilikler
Classora learning highlights|Novedades educativas de Classora|Classora 학습 소식|Lernhighlights von Classora|Novità didattiche Classora|क्लासोरा की शैक्षिक खबरें|Classora öğrenme haberleri
Previous announcement|Anuncio anterior|이전 공지|Vorherige Ankündigung|Annuncio precedente|पिछली घोषणा|Önceki duyuru
Next announcement|Anuncio siguiente|다음 공지|Nächste Ankündigung|Annuncio successivo|अगली घोषणा|Sonraki duyuru
DISCOVER SOMETHING NEW|DESCUBRE ALGO NUEVO|새로운 것을 발견하세요|ENTDECKE ETWAS NEUES|SCOPRI QUALCOSA DI NUOVO|कुछ नया जानें|YENİ BİR ŞEY KEŞFET
Explore|Explorar|탐색하기|Entdecken|Esplora|खोजें|Keşfet
Announcement|Anuncio|공지|Ankündigung|Annuncio|घोषणा|Duyuru
Go to announcement |Ir al anuncio |공지로 이동 |Zur Ankündigung |Vai all'annuncio |घोषणा पर जाएँ |Duyuruya git 
Your assignments|Tus tareas|내 과제|Deine Aufgaben|I tuoi compiti|आपके कार्य|Ödevlerin
Important now — due soon|Importante: entrega cercana|중요: 마감 임박|Wichtig: bald fällig|Importante: scadenza vicina|महत्त्वपूर्ण: समय सीमा नज़दीक|Önemli: teslim yaklaşıyor
Checking class assignments...|Comprobando tareas de clase...|학급 과제 확인 중...|Klassenaufgaben werden geprüft...|Controllo dei compiti...|कक्षा के कार्य जाँचे जा रहे हैं...|Sınıf ödevleri kontrol ediliyor...
No unfinished assignments right now.|No tienes tareas pendientes ahora.|지금 미완료 과제가 없습니다.|Derzeit keine offenen Aufgaben.|Al momento nessun compito incompleto.|अभी कोई अधूरा कार्य नहीं है।|Şu an tamamlanmamış ödev yok.
 • Due: | • Entrega: | • 마감: | • Fällig: | • Scadenza: | • अंतिम तिथि: | • Son tarih: 
Start now|Empezar ahora|지금 시작|Jetzt starten|Inizia ora|अभी शुरू करें|Şimdi başla
Continue: |Continuar: |이어하기: |Weiter: |Continua: |जारी रखें: |Devam: 
Announcements: |Anuncios: |공지: |Ankündigungen: |Annunci: |घोषणाएँ: |Duyurular: 
Search announcements|Buscar anuncios|공지 검색|Ankündigungen suchen|Cerca annunci|घोषणाएँ खोजें|Duyuru ara
Filter by status|Filtrar por estado|상태로 필터|Nach Status filtern|Filtra per stato|स्थिति से छाँटें|Duruma göre filtrele
Active|Activo|활성|Aktiv|Attivo|सक्रिय|Etkin
Paused|Pausado|일시 중지|Pausiert|In pausa|रुका हुआ|Duraklatıldı
Enable|Activar|활성화|Aktivieren|Attiva|चालू करें|Etkinleştir
No matching announcements.|No hay anuncios coincidentes.|일치하는 공지가 없습니다.|Keine passenden Ankündigungen.|Nessun annuncio corrispondente.|कोई मिलती घोषणा नहीं है।|Eşleşen duyuru yok.
Add announcement|Añadir anuncio|공지 추가|Ankündigung hinzufügen|Aggiungi annuncio|घोषणा जोड़ें|Duyuru ekle
Cancel edit|Cancelar edición|수정 취소|Bearbeitung abbrechen|Annulla modifica|संपादन रद्द करें|Düzenlemeyi iptal et
Delete this announcement permanently?|¿Eliminar este anuncio para siempre?|이 공지를 영구 삭제할까요?|Diese Ankündigung dauerhaft löschen?|Eliminare definitivamente questo annuncio?|क्या यह घोषणा स्थायी रूप से हटाएँ?|Bu duyuru kalıcı olarak silinsin mi?
Loading your classes from your account…|Cargando tus clases…|내 학급 불러오는 중…|Deine Klassen werden geladen…|Caricamento delle tue classi…|आपकी कक्षाएँ लोड हो रही हैं…|Sınıfların yükleniyor…
No classes to show yet. Open class management to create or review one.|No hay clases todavía. Abre la gestión de clases para crearlas o verlas.|표시할 학급이 없습니다. 학급 관리에서 생성하거나 확인하세요.|Noch keine Klassen. Öffne die Klassenverwaltung zum Erstellen oder Ansehen.|Nessuna classe disponibile. Apri la gestione classi per crearne o vederne una.|अभी कोई कक्षा नहीं है। बनाने या देखने के लिए कक्षा प्रबंधन खोलें।|Henüz sınıf yok. Oluşturmak veya görmek için sınıf yönetimini aç.
Unnamed class|Clase sin nombre|이름 없는 학급|Unbenannte Klasse|Classe senza nome|बिना नाम की कक्षा|Adsız sınıf
Class owner|Responsable de la clase|학급 담당자|Klassenleitung|Responsabile della classe|कक्षा प्रभारी|Sınıf sahibi
Co-teacher|Profesor auxiliar|보조 교사|Mit-Lehrkraft|Insegnante assistente|सहायक शिक्षक|Yardımcı öğretmen
Unable to load class summary. You can still open class management.|No se pudo cargar el resumen. Puedes abrir igualmente la gestión de clases.|학급 요약을 불러오지 못했습니다. 학급 관리는 열 수 있습니다.|Klassenzusammenfassung konnte nicht geladen werden. Die Verwaltung bleibt verfügbar.|Impossibile caricare il riepilogo. Puoi comunque aprire la gestione classi.|कक्षा सारांश लोड नहीं हुआ। फिर भी कक्षा प्रबंधन खोल सकते हैं।|Sınıf özeti yüklenemedi. Sınıf yönetimini yine de açabilirsin.
student|estudiante|학생|Schüler|studente|छात्र|öğrenci
XP to the next level: |XP para el siguiente nivel: |다음 레벨까지 XP: |XP bis zur nächsten Stufe: |XP al livello successivo: |अगले स्तर के लिए XP: |Sonraki seviyeye XP: 
Progress towards the next XP level|Progreso hacia el siguiente nivel de XP|다음 XP 레벨까지 진행 상황|Fortschritt zur nächsten XP-Stufe|Avanzamento al prossimo livello XP|अगले XP स्तर की प्रगति|Sonraki XP seviyesine ilerleme
Your progress|Tu progreso|내 학습 진도|Dein Fortschritt|I tuoi progressi|आपकी प्रगति|İlerlemen
Your points will appear after your first activity.|Tus puntos aparecerán tras tu primera actividad.|첫 활동을 마치면 포인트가 표시됩니다.|Deine Punkte erscheinen nach der ersten Aktivität.|I tuoi punti compariranno dopo la prima attività.|पहली गतिविधि के बाद अंक दिखेंगे।|İlk etkinliğinden sonra puanların görünecek.
Open Classora calculator|Abrir calculadora de Classora|Classora 계산기 열기|Classora-Rechner öffnen|Apri calcolatrice Classora|क्लासोरा कैलकुलेटर खोलें|Classora hesap makinesini aç
Classora scientific calculator|Calculadora científica de Classora|Classora 공학 계산기|Wissenschaftlicher Classora-Rechner|Calcolatrice scientifica Classora|क्लासोरा वैज्ञानिक कैलकुलेटर|Classora bilimsel hesap makinesi
Minimize calculator|Minimizar calculadora|계산기 최소화|Rechner minimieren|Riduci calcolatrice|कैलकुलेटर छोटा करें|Hesap makinesini küçült
Expression|Expresión|수식|Ausdruck|Espressione|व्यंजक|İfade
Use the calculator buttons only. % divides by 100|Usa solo los botones. % significa dividir entre 100|버튼만 사용하세요. %는 100으로 나눕니다|Nur die Tasten verwenden. % teilt durch 100|Usa solo i pulsanti. % divide per 100|केवल बटन दबाएँ। % का अर्थ 100 से भाग है|Yalnızca tuşları kullan. % sayıyı 100'e böler
Clear expression|Borrar expresión|수식 지우기|Ausdruck löschen|Cancella espressione|व्यंजक मिटाएँ|İfadeyi temizle
Previous answer|Respuesta anterior|이전 답|Vorherige Antwort|Risposta precedente|पिछला उत्तर|Önceki cevap
Degrees|Grados|도|Grad|Gradi|डिग्री|Derece
Radians|Radianes|라디안|Bogenmaß|Radianti|रेडियन|Radyan
Calculator keys|Teclas de calculadora|계산기 버튼|Rechnertasten|Tasti calcolatrice|कैलकुलेटर बटन|Hesap makinesi tuşları
Cannot divide by zero|No se puede dividir entre cero|0으로 나눌 수 없습니다|Division durch null nicht möglich|Impossibile dividere per zero|शून्य से भाग नहीं दे सकते|Sıfıra bölünemez
Value outside the domain|Valor fuera del dominio|정의역 밖의 값|Wert außerhalb des Definitionsbereichs|Valore fuori dal dominio|मान निर्धारित सीमा से बाहर है|Değer tanım kümesi dışında
Check expression and parentheses|Comprueba expresión y paréntesis|수식과 괄호를 확인하세요|Prüfe Ausdruck und Klammern|Controlla espressione e parentesi|व्यंजक और कोष्ठक जाँचें|İfadeyi ve parantezleri kontrol et
Your calculations appear here.|Tus cálculos aparecen aquí.|계산 기록이 여기에 표시됩니다.|Deine Berechnungen erscheinen hier.|I tuoi calcoli appaiono qui.|आपकी गणनाएँ यहाँ दिखेंगी।|Hesaplamaların burada görünür.
`.trim().split('\n').map(line=>line.split('|'));
const dictionaries=Object.fromEntries(['es','ko','de','it','hi','tr'].map((lang,i)=>[lang,Object.fromEntries(rows.flatMap(row=>[[row[0],row[i+1]],[row[0].trim(),row[i+1]]]))]));
let selected='en';
try{const saved=localStorage.getItem('pythagorasi_language');if(Object.hasOwn(languages,saved))selected=saved}catch{}
const normalize=value=>String(value).replace(/\s+/g,' ').trim();
function formatGrade(num,language=selected){
 const n=Number(num);
 if(!Number.isInteger(n))return String(num);
 if(language==='ar')return 'الصف '+({7:'السابع',8:'الثامن',9:'التاسع',10:'العاشر'}[n]||n);
 if(language==='ko')return n+'학년';
 if(language==='tr')return n+'. sınıf';
 const prefix={es:'Curso',de:'Klasse',it:'Classe',hi:'कक्षा',en:'Grade'}[language]||'Grade';
 return prefix+' '+n;
}
const dynamicLocaleTemplates={"es":["Una escalera de {0} m llega a {1} m de altura en una pared. ¿A qué distancia de la pared está su base?","Práctica guardada. +{0} XP (una recompensa por tema y día).","{0} tarjetas repasadas","{0} d {1} h {2} min","{0} estudiantes"],"ko":["길이 {0}m인 사다리가 벽 높이 {1}m에 닿습니다. 사다리 아래쪽은 벽에서 얼마나 떨어져 있을까요?","연습 저장 완료. +{0} XP (주제당 하루 한 번 보상).","카드 {0}장 복습","{0}일 {1}시간 {2}분","학습자 {0}명"],"de":["Eine {0} m lange Leiter reicht an einer Wand {1} m hoch. Wie weit steht ihr Fuß von der Wand entfernt?","Übung gespeichert. +{0} XP (eine Belohnung pro Thema und Tag).","{0} Karten wiederholt","{0} T {1} Std {2} Min","{0} Lernende"],"it":["Una scala lunga {0} m raggiunge {1} m su un muro. A che distanza si trova la base dal muro?","Esercizio salvato. +{0} XP (una ricompensa per argomento al giorno).","{0} schede ripassate","{0} g {1} h {2} min","{0} studenti"],"hi":["{0} मीटर लंबी सीढ़ी दीवार पर {1} मीटर ऊँचाई तक पहुँचती है। सीढ़ी का आधार दीवार से कितना दूर है?","अभ्यास सहेजा गया। +{0} XP (हर विषय पर रोज़ एक इनाम)।","{0} कार्ड दोहराए","{0} दिन {1} घंटे {2} मिनट","{0} विद्यार्थी"],"tr":["{0} m uzunluğundaki merdiven duvarda {1} m yüksekliğe ulaşıyor. Ayağı duvardan kaç metre uzaktadır?","Alıştırma kaydedildi. +{0} XP (her konu için günde bir ödül).","{0} kart tekrar edildi","{0} gün {1} saat {2} dk","{0} öğrenci"]};
const dynamicLocalePatterns=[
 /^A ([0-9.,]+) m ladder reaches ([0-9.,]+) m up a wall\. How far is its foot from the wall\?$/,
 /^Practice saved\. \+([0-9]+) XP \(one reward per topic per day\)\.$/,
 /^Reviewed ([0-9]+) cards$/,
 /^([0-9]+)d ([0-9]+)h ([0-9]+)m$/,
 /^([0-9]+) learners$/
];
function translatedDynamic(language,value){
 const messages=dynamicLocaleTemplates[language];if(!messages)return null;
 for(let i=0;i<dynamicLocalePatterns.length;i++){
  const parts=value.match(dynamicLocalePatterns[i]);if(!parts)continue;
  return messages[i].replace(/\{([0-9]+)\}/g,(_,index)=>parts[Number(index)+1]||'');
 }
 return null;
}
function tFor(language,value){
 const dictionary=dictionaries[language];
 if(!dictionary||typeof value!=='string')return value;
 const key=normalize(value);
 const dynamic=translatedDynamic(language,key);if(dynamic)return dynamic;
 const gradeMatch=key.match(/^Grade\s+(7|8|9|10)$/);
 if(gradeMatch)return formatGrade(Number(gradeMatch[1]),language);
 let result=dictionary[key]||dictionary[value];
 if(!result){
  const clean=key.replace(/^[\p{Extended_Pictographic}\uFE0F\u200D\s]+/u,'').replace(/[:：]$/,'');
  if(dictionary[clean])result=key.replace(clean,dictionary[clean]);
 }
 return result?value.replace(value.trim(),result):value;
}
function t(value){return tFor(selected,value)}
function select(language){selected=Object.hasOwn(languages,language)?language:'en';return selected}
function syncControls(){
 document.querySelectorAll('[data-classora-language]').forEach(button=>{
  const active=button.dataset.classoraLanguage===selected;button.setAttribute('aria-pressed',String(active));button.classList.toggle('active',active);
 });
 document.querySelectorAll('[data-locale-preview-note]').forEach(note=>{
  note.hidden=!dictionaries[selected];note.textContent=t('This language is in preview. Some lessons and messages are still shown in English.');
 });
}
window.ClassoraLocale={languages,dictionaries,t,tFor,formatGrade,select,syncControls,get language(){return selected},get extended(){return Boolean(dictionaries[selected])}};
})();
