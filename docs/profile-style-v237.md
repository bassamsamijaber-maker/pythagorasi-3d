# Profile style release 237

The web release includes harmonized Morning/Embroidery surfaces, eight additional GIF choices, one-shot opening effects, a public profile dialog, and Arabic/English plus six-locale coverage for settings and the shop.

Three new catalog IDs: `supernova` (350 XP), `vortex` (420 XP), `tatreez` (280 XP). The existing nine items retain their prices. Opening effects respect both the site's motion preference and the operating system's reduced-motion preference.

## Required backend release

Deploy the updated `firestore.rules` to the existing Firebase project `pythagorasi-school` through its authorized deployment process. Pushing this repository publishes Cloudflare Pages; it does **not** deploy Firebase rules. No Firebase deployment was performed for this web release.

The new public field is `publicProfiles/{uid}.profileEffect`. It must match that user's equipped, owned cosmetic. No private user fields or reads were added. Public profile watchers are disposed on dialog close/account changes. Profile appearance is visible to other signed-in users through Chat → person menu → View profile.

Until a public style write is accepted by the backend, the three new items show Coming soon with free previews and cannot be purchased/equipped. Existing name/photo updates fall back to the previous public schema. Existing items remain available. A successful equip reports whether public synchronization succeeded; it never claims the effect is shared when synchronization failed.

The rules file also repairs an existing unterminated quest topic regex. Its delimiters were checked locally. Firebase rule compilation and live two-account verification remain required before backend activation. Review the deployed rules against this source before publishing them.

## Validation performed

- JavaScript parsing for all inline scripts and changed modules.
- Translation coverage for settings, shop and profile labels across all six additional locales; Arabic/English round-trip checks and protected names.
- DOM checks for opening/replay/close, reduced motion, public watcher cleanup, fourteen GIF choices, preview without writes and explicit save.
- Mocked transactions: duplicate purchase, insufficient XP, owned-only equip, total XP preservation, public write fallback and account switching.
- No live-account purchase was made. Authenticated visual verification was unavailable; the cloud browser reached the site's terms consent screen. The reference video was not accessible in the current workspace, so effects follow the described profile-opening behavior.

Run `tests/profile-style-v237.mjs` with `CLASSORA_TEST_DOM_MODULE` set to an installed LinkeDOM ES module entry, following the existing locale-test convention. These tests mock persistence and do not replace Firebase emulator/security tests.
