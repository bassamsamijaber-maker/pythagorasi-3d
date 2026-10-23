# Classora v239 — chat, memberships, mobile and device sessions

## Code shipped to GitHub main
- Benefit center in assets/classora-member-hub-v239.js is a standalone modal with entry buttons in lobby, subjects and chat. It lists the full existing 8 Plus benefits and 15 Premium descriptions (role-filtered), and labels as planned everything other than independently implemented tools.
- Existing functional tools — focus timer, notes, study to-dos, saved lesson URLs and member chat backgrounds — moved from Settings into the benefit center. Access stays resolved from read-only backend grants/trials and admin identity. Core studying and basic chat remain free.
- Admin always retains all five implemented tools. Student / Teacher preview buttons modify the catalog shown to admin, not Firebase identity. They do not create two actual authentication accounts.
- New device section in Settings tracks sign-in browsers under users/{uid}/deviceSessions. Per-device sign-out sets a server-watched revoked flag and is enforced when the remote device comes online. It is not equivalent to revoking one Firebase refresh token. Sign-out everywhere also calls revokeMySessions to invalidate all Firebase refresh tokens when the callable is deployed, then marks device records and logs out locally. Old browsers that never ran this version cannot be listed retroactively.
- Chat's existing messages, Firebase auth, uploads and moderation were not rewritten. A benefit button, mobile-safe sizing and accessible high-contrast Morning and Embroidery palettes were added.
- New UI copy is localized in Arabic, English, Spanish, Korean, German, Italian, Hindi and Turkish. The entire legacy app has not been re-audited and should not be described as fully translated.

## Backend activation required
1. Deploy the current firestore.rules to Firebase project pythagorasi-school after Firebase emulator/compiler review. GitHub/Cloudflare publishing does not deploy Firebase rules.
2. Deploy functions/index.js including authenticated callable revokeMySessions for account-wide refresh-token invalidation. The existing trial UI remains disabled pending verification.
3. Test two devices on the same test account: sign out one, all, sign back in, account switch, offline peer until reconnect, permissions with a different account and repeated logouts.
4. Test real Samsung browser and iPhone Safari, keyboard overlay, 390px safe-area, RTL, light/embroidery/dark themes and eight languages.
5. Verify Cloudflare Pages deployed code containing the v239 service worker; refresh old PWA caches.
6. Paddle live checkout stays disabled. Plan descriptions still advertise planned features such as chat folders, streak, theme designer, reports, certificates and offline downloads. V239 does not implement those.

## Checks run
- New and changed JavaScript files passed parse-only checks.
- Updated stylesheet has matching braces.
- Current service-worker app shell and module import paths inspected.
- No actual Samsung/iPhone visual QA or Firebase production deployment was possible in this environment.
