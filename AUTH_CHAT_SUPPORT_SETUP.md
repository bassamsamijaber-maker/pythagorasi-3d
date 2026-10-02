# Authentication, chat and support deployment

The GitHub Pages frontend contains teacher name/email password login, student class-code-first login, direct chat, recent conversations, reporting, support requests and support replies. Existing Google teacher accounts can link a password in Settings. Student recovery requests provide an ownership signal for manual support; a security phrase does not itself change a Firebase Auth password.

Deploy the matching Firestore rules from this commit before relying on teacher password permissions:

```sh
firebase deploy --only firestore:rules
```

No new Cloud Functions or SMS billing is required for these changes. This session could publish to GitHub, but did not have an authenticated Firebase CLI or Firebase deployment connector; the rules deployment is therefore not verified.

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
