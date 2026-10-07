# Authentication, chat and support deployment

The Classora frontend contains teacher name/email password login, student class-code-first login, direct chat, recent conversations, reporting, support requests and support replies. Existing Google teacher accounts can link a password in Settings. Student recovery requests provide an ownership signal for manual support; a security phrase does not itself change a Firebase Auth password.

Deploy the matching Firestore rules from this commit before relying on teacher password permissions:

```sh
firebase deploy --only firestore:rules
```

No new Cloud Functions or SMS billing is required for these changes. Firebase rules deployment should be verified after configuration changes.

Teacher authorization uses a protected `users.role`: normal users cannot promote their role. Existing legitimate teacher profiles continue to work with either Google or password authentication. Login aliases cannot be overwritten by another account. Chat message access is restricted to the two participants; support requests are readable only by their authenticated author or the admin.

Security phrases use PBKDF2-SHA256 with 250,000 iterations and an account-bound salt. Only the hash is stored. Setting the phrase requires reauthentication. Legacy phrase hashes remain supported through versioned aliases. Support verification is an aid to a human review, not a password-reset authorization token. Anonymous requests have a reference number but require the user to contact the administrator for follow-up.

Verification:

```sh
node tests/chat-support-regression.cjs
node tests/translation-audit.cjs
```

The regression suite covers actual hashing and send handlers, including failed sends, duplicate clicks and preservation of a newer draft. Full two-account chat, admin replies and role permissions need a deployed Firebase project and signed-in test accounts. Phone motion requires permission on devices such as iPhone and is opt-in.


## Support team update
Student class codes are optional for sign-up and sign-in. The owner can assign or revoke admin and support roles in the Team tab. Support staff can view, reply to and resolve tickets. Only admins can delete tickets; only the owner can grant staff access. Security phrases remain hashed: the panel shows configuration and proof-match status, never the phrase itself. Deploy updated firestore.rules before staff assignment; HTML publishing does not deploy database rules.


## V65: support conversations and social chat
Deploy `firestore.rules` again for support message subcollections, private chat preferences, bilateral DM blocks, groups and daily activity receipts. Enable **Authentication → Sign-in method → Anonymous** for the separate guest-support identity. This does not replace student or teacher sign-in. Guest replies remain tied to that browser's anonymous session. No billing upgrade or new Cloud Function is required by this update.

- Support requests open a private live conversation; staff use Open support conversation in the support queue.
- Arabic and English character filtering runs before send and in database rules. It is script validation, not semantic language identification: other languages written using the same permitted letters cannot always be distinguished.
- Favorites and nicknames are account-private. Delete for me hides existing history using an account-specific cutoff; a new message restores the inbox entry.
- DM blocks prevent messages in both directions. Shared groups remain separate; messages from locally blocked users are hidden in group views.
- Groups are joined voluntarily by a 20-character code, up to 20 members; members can leave. Anyone signed in who knows the code can read group metadata and join; only current members can read messages. Share codes only with intended members.
- Streaks use UTC days with at least two distinct senders; no activity for a full day resets the streak. Activity receipts are written atomically with a real message. Display covers the most recent 366 days.

Validation: JavaScript regression tests plus Firestore emulator permission tests cover support ownership, staff impersonation rejection, script restrictions, private preferences, block/unblock, group join/leave, guest support and forged activity rejection. Production end-to-end verification remains pending rules deployment.


## V66: reliable messaging, private media and delegated support actions
This section supersedes the older deployment notes above. Publish the latest rules and the new callable before using these features. From this repository with your Firebase project selected:

```sh
firebase deploy --only firestore:rules,firestore:indexes
cd functions
npm install
cd ..
firebase deploy --only functions:classoraSupportAction
```

Review any proposed removal of existing production indexes before accepting it; preserve indexes used by other features. Wait for the `members.uid` collection-group index to finish building before account deletion. The media `data` field is excluded from indexing. Deploying Functions may require an eligible billing plan; no billing settings were changed by this work. The callable is in `us-central1`. Guest support still requires Anonymous Authentication. Firebase deployment was not possible in this session, so production two-account verification remains pending.

- Text and attachments commit atomically. A stable message ID avoids duplicate writes after an uncertain acknowledgement. Drafts remain on failure. Streak and preview updates cannot reject an already-saved social message.
- Messages stay in the open conversation when the latest-100 window advances; Load earlier messages pages older history. Audio DOM nodes survive incoming messages, avoiding playback interruption.
- Images are resized to 1280 pixels and compressed; attachments are limited to 480 KiB. Voice recording is up to 60 seconds and requires browser microphone support/permission. Media lives in protected Firestore documents, with no public download URLs or new Storage setup. This uses Firestore storage and reads; it is not end-to-end encryption. Support's Arabic/English script filter applies to typed text, not speech transcription or text inside images.
- Typing indicators expire, and read receipts are written when the conversation is visible, focused and at its latest messages. In groups, Read means at least one other participant has read the message.
- Delete for me writes a private history cutoff for users and staff. It does not delete shared messages or the other participant's history. New activity restores a hidden conversation in the inbox. The support queue no longer exposes shared-ticket deletion.
- Support ticket titles identify the requester in Arabic/English. Reports created from a DM include the reported account UID/profile ID/name; staff can view public account details and start a review notification. Legacy reports without a target still identify their requester.
- Support can send requests to change password, name or security phrase. The user performs the change in Settings; secret phrases and passwords are never shown to staff.
- The owner assigns separate chat-restriction, account-suspension and account-deletion capabilities in Team. Server checks enforce every action and protect the owner. Staff without deletion capability submit an admin approval request. Staff with capability can delete without another owner approval, with a confirmation and reason. Each action is audited. Support sees its own audit entries; admins see all.
- Account deletion disables access first, removes the Firebase Auth identity, login aliases, profile IDs, class membership documents, staff access, public profile and private user document/subcollections. Shared message copies and case/audit history are retained. Failed deletion can be retried. Deleted-account blocks cannot be restored as a normal suspension.
- The site is dark-only; appearance controls are hidden and saved light preferences resolve to dark.

Validation: all inline JavaScript parses; bilingual audit and regression suites pass; isolated Firestore emulator tests cover private atomic media, message ownership, receipts, support appeals under chat restriction, private deletion markers, group access and self-escalation rejection. Callable tests cover case scope, delegated capabilities, approval fallback, owner protection and deletion tombstones. No real messages, accounts, staff grants or deletions were used for these tests.


## V67: support action diagnostics and writing UI
The configured us-central1 classoraSupportAction endpoint returned HTTP 404 during a read-only check on 2026-10-03. This means the endpoint is not available there; the earlier generic permission toast did not establish that the administrator lacked access. The callable must still be deployed using the V66 instructions. No Firebase production changes were performed.

Administrators now skip the reason form; the audit reason defaults to Administrator action. Support staff enter a reason in an accessible in-app dialog. Permanent deletion retains explicit confirmation. Service-unavailable and authentication/authorization failures have separate messages, without deployment instructions inside the product. View account opens a real account details dialog, using the private user profile for authorized admins or the public profile for staff, and distinguishing missing profiles from saved ticket identity. No credential hashes are displayed.

Chat uses a local SVG line-art wallpaper, an expanding composer, quiet teal bubbles and unified dark writing fields. Tests verify role-sensitive reason prompts and service-error classification, plus the existing delivery and translation checks.


## V68: composer fix, contact menu, direct administrator actions and PWA updates
The reported collapsed composer came from the global `.apply { width:100% }` rule: the send button consumed the flex row. Chat now uses an explicit two-column grid and independently bounded send/input widths on desktop and mobile, including Android visual-viewport keyboard resizing. Contact actions live in a collapsed name menu with a profile-photo viewer. Site-generated typing sounds are suppressed inside chat; operating-system keyboard sounds remain controlled by the device. Writing-field focus transitions honor reduced-motion preferences.

Administrator review, password/name/security-phrase requests, account suspension and restoration now use existing admin-only Firestore write permissions directly, without calling the unavailable function. Request notifications are advisory entries under the target user's `supportInbox` map; they never grant access or change credentials. A user's private profile listener displays them beside callable-generated requests. Case membership is checked and each direct action is atomically logged in `adminAudit`, shown in case action history. Existing Firestore rules are unchanged by V68. Rules still enforce administrator-only writes to other users and audit records. Tests validate admin gating, case target checks, notification/audit batches, owner protection and deleted-account restoration prevention.

Permanent Firebase Auth deletion, chat-only restrictions, and delegated support-team moderation still require the V66 callable deployment. V68 does not silently downgrade permanent deletion to hiding a profile. Production signed-in administrator testing was not available in this session.

The installed PWA checks service-worker/release updates on launch, when returning to the app, when coming online and every five minutes while visible. An available update reloads automatically only when no modal, active input, unfinished visible draft, send or recording is present. Busy users see a quiet update notice; reload waits until they finish. Offline operation does not force a reload. `release.json` bypasses SW caching. Navigation uses fresh network responses with offline fallback. Cache cleanup is scoped to Classora cache names.

For EVERY future release, bump `CLASSORA_RELEASE` in index.html, the matching string version in release.json, and CACHE_NAME in service-worker.js. No automatic reinstall or operating-system update is needed. First arrival from an older app version may need reopening/refreshing once; updates require connectivity and the OS/browser to run the app. Physical Android/iOS device testing is still outstanding.


## V69: voice waveforms, message menu, translations and feature switches
Publish the latest firestore.rules again from Firestore Database > Rules > Publish, or deploy --only firestore:rules. No new Cloud Function is required for V69 edits or personal message hiding. Until these rules are deployed, existing send/playback works but message editing/personal hiding is denied.

Voice recording replaces the text composer with microphone-level bars, elapsed time, Stop and Cancel. Received/sent voice attachments use a custom player with waveform amplitudes decoded from the actual recording, a seek slider, elapsed/duration display and 1/1.5/2x playback. Browser-native audio menus are replaced with the message menu. Unsupported waveform decoding falls back to neutral bars; audio playback still works. Playback stops when its bubble is removed or the conversation closes.

The three-dot menu supports Copy text, Edit message (author only, including text captions) and Delete for me. Edits persist editedAt and show Edited / تم تعديلها to both participants. Audio recordings themselves are not edited. Delete for me adds an ID to the user's private preference list (up to 1000), leaving the shared message and other users' views untouched. Search filters the currently loaded messages; Load earlier extends that set.

Admin Panel > Control Center > Chat features provides separate switches for voice messages/waveforms, edits, personal message deletion, text copy and conversation search. Existing admin-only siteControls permissions save these settings; open conversations receive changes live. Rules enforce voice upload and edit/personal-hide gates. Copy/search toggles control product UI, not access to messages users already have permission to read. Disabling voice stops new recording/upload; already delivered recordings remain playable. All switches default to enabled.

Fixed untranslated assignment title/due-date/instruction/type labels and publish hints, and refresh notification settings when switching languages. User-authored names, class names and messages stay in their original language; native date-picker language can depend on the browser/OS.

Verification: inline JavaScript syntax, translation audit, send/retry regression, admin-direct and support-interface tests; Firestore emulator confirms author-only edits, immutable authors, trusted edit timestamps, Arabic/English support text restriction, private message hiding and admin feature disable enforcement. No production messages or accounts were modified in tests.
