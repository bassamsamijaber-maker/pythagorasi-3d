# Classora iOS / App Store preparation

This folder prepares the existing Classora web app for a native iOS shell with Capacitor.

## What is already ready

- Full-screen responsive UI and safe-area CSS.
- Installable PWA and app icons.
- Public privacy policy: `/privacy.html`.
- Public support page: `/support.html`.
- In-app permanent account deletion in Settings.
- Arabic and English UI support.
- Service worker / offline shell for the web version.

## Build the native iOS project

A Mac with Xcode and an active Apple Developer account are required for the actual App Store build and signing.

1. Install Node.js and run:
   `npm install`
2. Prepare the native web bundle:
   `npm run mobile:prepare`
3. The first time only:
   `npm run ios:add`
4. After later web changes:
   `npm run ios:sync`
5. Open Xcode:
   `npm run ios:open`
6. In Xcode, select the correct Apple Team, verify the Bundle Identifier, set version/build numbers, archive, and upload to App Store Connect.

The current proposed bundle ID is `com.classora.education`. If it is unavailable in your Apple Developer account, change it in `capacitor.config.json` before creating the iOS project.

## App Store URLs

- Privacy Policy URL:
  `https://classora.study/privacy.html`
- Support URL:
  `https://classora.study/support.html`

## iOS permission descriptions

If the generated native project requests these permissions, use clear purpose strings:

- Microphone: “Classora uses the microphone only when you choose to record a voice message.”
- Camera: “Classora uses the camera only when you choose to take a photo to send in Classora.”
- Photo Library: “Classora accesses your photos only when you choose an image to send in Classora.”

Do not request a permission until the user opens the feature that needs it.

## Before App Review

- Test student, teacher and guest flows on a real iPhone/iPad.
- Test account creation, login, logout and permanent account deletion.
- Test Arabic and English directions.
- Test push notifications after native/APNs configuration.
- Test photo/voice chat permissions if those features are included in the native build.
- Complete App Privacy answers in App Store Connect based on the actual production data practices and Firebase services.
- Provide App Review with a working review account if protected features require login.
- Verify that Google sign-in works in the native build; if the web popup flow does not work inside WKWebView, configure a native-supported Google sign-in flow before submission.

The repository preparation does not replace Apple signing, App Store Connect setup, screenshots, privacy declarations, or App Review.
