# Classora — Microsoft Store + HUAWEI AppGallery release preparation

Prepared: 2026-10-11. This document prepares a submission; it does **not** mean that either store has approved or published the app.

## Shared listing information

- App: **Classora**
- Website: https://classora.study/
- Privacy policy: https://classora.study/privacy.html
- Support: https://classora.study/support.html
- Category: **Education**
- Pricing: **Free**, if Classora's current user-facing offering is free
- Platform languages: Arabic and English
- Existing Capacitor app ID proposal: `com.classora.education`
- Proposed short EN description: **Interactive lessons, 3D learning, quizzes and classroom activities.**
- Proposed short AR description: **تعلّم تفاعلي، نماذج ثلاثية الأبعاد، اختبارات وأنشطة صفية.**
- Proposed EN long description: **Classora is an educational platform with interactive learning activities, subject lessons, 3D visualizations, classes, assignments, exams and live competitions. Students and teachers can explore learning materials in Arabic and English, organize classroom activities and track progress.**
- Proposed AR long description: **كلاسورا منصة تعليمية تفاعلية تجمع الدروس والنماذج ثلاثية الأبعاد والصفوف والوظائف والامتحانات والمسابقات المباشرة. تدعم الطلاب والمعلمين بواجهة عربية وإنجليزية وأنشطة تعليمية منظمة.**

Before using these descriptions, verify they reflect the current production experience. Add screenshots taken from the real Windows and Huawei/Android application, not concept art. Verify the live links above.

## 1. Microsoft Store — PWA for Windows

Official account enrollment: https://storedeveloper.microsoft.com/
PWABuilder: https://www.pwabuilder.com/
Documentation: https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/pwa/app-package-requirements

1. Account holder enrolls in Microsoft Partner Center and completes any identity verification.
2. In **Windows & Xbox → Apps & Games**, reserve the **Classora** app name.
3. Open PWABuilder, paste `https://classora.study/`, and review the PWA readiness report.
4. Address every required PWA issue (HTTPS, manifest, service worker, icon accessibility, secure resources) before packaging.
5. Copy the app's **Package/Identity details** from Partner Center into PWABuilder's Windows package generation fields.
6. Generate and download the Windows package, then test it on a real Windows device.
7. In Partner Center, complete the store listing, privacy, age ratings, screenshots, availability and upload the appropriate `.msixbundle` (and compatible `.appxbundle` if generated/recommended).
8. Submit for Microsoft certification. Publication is not automatic or instant.

No code-level Windows packaging command is needed here, because Microsoft officially supports PWABuilder for hosted PWAs. Never upload the `.sideload.msix` test package as the store package.

## 2. HUAWEI AppGallery — Android app

Huawei developer sign-up: https://developer.huawei.com/consumer/en/
AppGallery Connect: https://developer.huawei.com/consumer/en/service/josp/agc/index.html
Huawei publishing overview: https://developer.huawei.com/consumer/en/appgallery

Huawei requires a developer account with identity verification. Under Huawei's May 2026 developer agreement, an individual registering must have reached the local legal age of majority and have capacity to enter a binding agreement. A parent/guardian or eligible legal entity should be the actual account holder where necessary; do not supply false age or ID information.

This repo already has a Capacitor config and a mobile-web-bundle generation script for iOS. This preparation adds **Android Capacitor** support without changing the deployed website.

### Local Android build (first time)

Prerequisites: Node.js, Android Studio, supported Android SDK/JDK, and a suitable testing phone.

```bash
npm install
npm run android:add
npm run android:open
```

After future website changes:

```bash
npm run android:sync
npm run android:open
```

In Android Studio:
1. Test the generated debug app on an Android phone, ideally Huawei without Google Mobile Services.
2. Verify Firebase email/password/guest access, student/teacher screens, Arabic/English, exams, realtime competitions, chat, photos/microphone, logout and account deletion.
3. Verify whether Google sign-in works: a web popup inside Android WebView may fail or be unsupported. Provide an alternative login method and fix OAuth configuration before release. Do **not** assume this is production-ready.
4. Ensure the existing Android application ID/bundle ID is available and the release permissions, target SDK, and version code meet the current store requirements.
5. Use **Build → Generate Signed Bundle / APK** in Android Studio to produce the supported signed release **APK/AAB**. Follow AppGallery Connect's currently accepted package format. Keep the signing keystore/password private and backed up — never commit it to GitHub.
6. Create an Android app in AppGallery Connect, upload the signed release package, add the listing/screenshot/category/age rating, privacy URL, countries/regions, free/paid selection and submit for review.

### Review checklist

- Both launch routes work without looping splash screens or login redirects.
- Students and teachers can reach all navigation controls on phone/tablet/Windows.
- The app is usable on Huawei devices without Google Mobile Services; do not rely solely on Chrome-based Android TWA packaging.
- Privacy policy accurately discloses third-party Firebase SDKs, student information, chat/media and data-deletion processes. Policy link must be visible inside the app and on the store listing.
- Users can delete an account from the actual released build if an account is created in-app.
- Only ask for camera, microphone, or other sensitive permission when needed.
- Provide secure test credentials to the store reviewers privately through the relevant store review fields, if requested. Never put passwords in this repository.
- AppGallery/Huawei review and Microsoft Store review determine acceptance and timing.

## Quick Arabic instructions for the owner

- **مايكروسوفت:** افتح `storedeveloper.microsoft.com` وسجّل الحساب القانوني، احجز Classora، افحص الرابط في PWABuilder وخذ حزمة Windows، وبعد التجربة ارفعها في Partner Center.
- **هواوي:** أنشئ حساب مطوّر موثّق باسم صاحب الحساب المؤهل، وبعدها نبني حزمة Android الموقّعة من Android Studio ونجرّبها على جهاز Huawei ونرفعها في AppGallery Connect.
- **مهم:** تجهيز GitHub لا يعني أن التطبيق اننشر. النشر يحتاج خطوات في حسابات المتاجر والتحقق والمراجعة.
