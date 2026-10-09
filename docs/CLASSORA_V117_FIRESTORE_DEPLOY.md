# Classora v117 — required Firestore rules publication

The Cloudflare Pages (or GitHub static-site) deployment publishes **HTML/CSS/JavaScript only**. It does NOT publish `firestore.rules` to Firebase.

## Publish the seven-day name limit on the server

From the root of the repo, with a Firebase-authorized account:

```bash
firebase login
firebase deploy --only firestore:rules --project pythagorasi-school
```

This project already has `firebase.json` pointing at `firestore.rules`.

Until the Firebase command completes successfully, the frontend uses a Firestore transaction and shows the seven-day cooldown, but a modified API client could bypass the limit. Don't claim that enforcement is server-protected before this deploy.

## Check after publishing

1. New student or teacher account: automatic bilingual question should appear after the English three-second intro, and the tour should highlight/live-open real pages.
2. Existing account: NO automatic onboarding. Settings > How to use Classora replays the guide.
3. Student changes display name once: next self-edit is blocked for **seven complete days**, including from a separate device.
4. Super Admin > account management: rename the user at any time; or press Reset name timer to let the user edit immediately. Check audit log.
5. Check mobile/iPad black first paint, no automatic refresh loop, dock, chat, exams and lessons.

Rules currently use a server-validated `displayNameChangedAt` timestamp and `request.time`, not the browser clock.
