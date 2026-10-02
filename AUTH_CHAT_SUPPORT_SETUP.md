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
