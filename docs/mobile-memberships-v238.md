# Classora v238

## Shipped web behavior
- All three quest stages require five distinct reviewed MCQs; repeated/stale clicks cannot complete a stage twice. Insufficient banks offer retry/practice without granting completion. Existing completed quests and XP remain intact.
- Policy acceptance is explicitly saved to `users/{uid}.legalAcceptance` before dismissal, so the same account skips the prompt on another device. Existing local acceptance migrates. Failure keeps retry available. Privacy review remains accessible. No scroll-to-bottom requirement or phone bypass.
- Native/nested overlays can receive touch scrolling. Explicit dock navigation works while a page is open, hidden modal containers no longer lock the app, native dialog Escape is restored. Chat uses keyboard-aware viewport height and safe areas.
- Membership links in lobby, subjects, chat and settings. Role-ineligible plan selectors are hidden after verified account loading.
- Spendable shop balance uses Classora Coins; XP accounting and existing purchased ownership are unchanged. Existing profile scenes gain rings, with reduced-motion support.
- Read-only admin grants drive five actual account-scoped tools: focus timer, notes, study task list, saved lesson links, chat backgrounds. Plus includes the first three; Premium includes all five. No free learning tools were removed. Revocation/expiry/account switching closes access. Notes and links use own user document storage.
- Admin UI can grant a full tier or selected tools. Existing full grants remain schema-compatible. Selected features need the rules release below.
- Eight languages for new member tools/upgrade links, new quest/consent labels and currency copy. This is not a claim that every legacy string throughout the large app has been audited.

## Backend activation required
GitHub/Cloudflare Pages publishing does **not** publish Firebase functions or rules.
1. Deploy `firestore.rules` to project `pythagorasi-school` after emulator/compile validation. Includes v237 public profile effects and new shop items, selected-feature grants, read-only trials.
2. Deploy callable `startMembershipTrial`. It atomically creates an immutable, once-per-UID seven-day Premium preview, no card and no renewal. Anonymous users and repeats are rejected. Trials remain after user profile deletion. Account grants are read from trusted collections, never localStorage or writable tier fields.
3. Verify real account trial/expiry/denial, then enable the trial button in `classora-member-space-v238.js` (currently explicitly disabled with pending status). No trial has been falsely activated by this release.
4. Paddle live catalog remains checkout-disabled. Existing webhook worker only authenticates/stores incoming events. Paid checkout intents, verified entitlement fulfillment, cancellation/reconciliation and class/school seat assignment remain unimplemented. Do not turn on checkout without them.
5. The pre-existing catalog describes other planned benefits (chat folders, theme designer, certificates, advanced reports etc.). Those are not newly implemented by this patch. Keep the planned-feature disclosure until implementation is complete.

## Validation
`CLASSORA_TEST_DOM_MODULE=<linkedom esm entry> node tests/membership-mobile-v238.mjs`
`CLASSORA_TEST_DOM_MODULE=<linkedom esm entry> node tests/profile-style-v237.mjs`
- Tests execute actual quest/consent functions and entitlement resolver with DOM/Firebase mocks, plus callable authentication and repeat rejection.
- Syntax parse for modified JavaScript/HTML scripts; translation coverage and CSS/rules delimiter checks.
- No Firebase emulator/CLI or authenticated backend deployment available in this session. No physical Samsung/iPhone testing; mobile CSS and event paths tested locally. Browser verification covers public deployed subscription UI.
- Existing `tests/pwa-update-regression.cjs` targets removed `classoraCanRefresh`/`classoraApplyPendingUpdate` functions and fails on the unchanged baseline. It does not cover the current registration-only implementation; not counted as passing.
