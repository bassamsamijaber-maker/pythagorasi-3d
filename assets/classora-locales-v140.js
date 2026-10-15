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
