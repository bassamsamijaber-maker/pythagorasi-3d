# Classora Push Notifications

The website client and service worker are already prepared for Firebase Cloud Messaging.

## One-time setup

1. Firebase Console → Project settings → Cloud Messaging → Web Push certificates.
2. Generate a key pair and copy the public VAPID key.
3. Put that public key in `index.html` at `CLASSORA_VAPID_KEY`.
4. From the repository root:
   - `npm install -g firebase-tools`
   - `firebase login`
   - `cd functions && npm install && cd ..`
   - `firebase use pythagorasi-school`
   - `firebase deploy --only functions`

After deployment, users enable notifications from Classora Settings. Each device token is stored securely on the signed-in user's Firestore profile.

Push events implemented:
- New class assignment → members of that class.
- New published exam → targeted class if present, otherwise students.
- New remote competition → targeted class if present, otherwise students.
- Student joins a class → class owner and co-teachers.

Do not add service-account JSON files to this repository.
