# Classora Paddle Sandbox billing — Cloudflare Worker + D1

**PREVIEW CODE ONLY. Not deployed. Not tested end-to-end. No Firebase Blaze required.**

This is an alternative to Firebase Cloud Functions that uses Cloudflare Workers for the authenticated checkout API and signed Paddle webhooks, and Cloudflare D1 for subscription records. Firebase Spark stays responsible for Authentication/Firestore account data. This is a *foundation*, not public-ready billing.

### Proposed architecture

- Firebase Authentication: signed-in Classora student / teacher supplies a Firebase ID token.
- Cloudflare Worker: validates token cryptographically with Google securetoken public keys using `jose`. Confirms the user's role and class ownership against Firebase Firestore REST (with their own ID token).
- `POST /api/checkout/prepare`: validates plan IDs and quantities on server, creates checkout intent in D1, returns Paddle price IDs and a checkout intent identifier.
- Browser Paddle checkout: uses the existing Sandbox client-side token + **customData: { classora_checkout_intent: "<intent id>" }**.
- `POST /api/paddle/webhook`: verifies the raw bytes and HMAC Paddle signature; only matching server-issued, authenticated intents can receive D1 entitlements.
- `GET /api/me/entitlements`: returns the current authenticated user's billing entitlements. Browser must NEVER grant premium access based on local toggle or success screen.
- No Live APIs or chargeable Firebase Functions are used.

### Before you can test

1. Make a **separate Firebase test project** with Firestore and Authentication. Do not use the existing production `pythagorasi-school` project for test purchases.
2. Use Cloudflare dashboard → Workers & Pages → D1 → Create database: `classora-billing-sandbox`. D1 is available for Workers on the free tier, within quota.
3. In this directory, run `npm install` and then `npx wrangler login`.
4. Run `npx wrangler d1 list`, copy the new database ID into `wrangler.toml`, and set `FIREBASE_PROJECT_ID` to the **test** project ID. Use a preview site connected to that exact test project.
5. Run `npm run db:init`.
6. In Paddle **Sandbox** create a new Notification destination for subscription lifecycle events, after the Worker URL is deployed. Copy the webhook destination signing secret **privately** into the Worker using `npx wrangler secret put PADDLE_SANDBOX_WEBHOOK_SECRET`; never send it through chat or put it in GitHub.
7. Run `npm run deploy`, get the resulting `https://...workers.dev/api/paddle/webhook` URL, and enter it in Paddle Sandbox Notifications. A new Notification destination may be configured once URL exists; you can set a temporary verified endpoint first if needed.
8. After a user signs in on the **test Firebase app**, call:

```js
const jwt = await firebaseAuth.currentUser.getIdToken();
const result = await fetch("https://<WORKER_URL>/api/checkout/prepare",{
  method: "POST",
  headers: {"Content-Type":"application/json","Authorization":"Bearer "+jwt},
  body: JSON.stringify({kind:"student",tier:"plus",period:"monthly",seats:1})
});
if(!result.ok)throw new Error("Checkout not approved");
const {items,checkoutIntentId} = await result.json();
Paddle.Environment.set("sandbox");
Paddle.Checkout.open({
  items,
  customData:{classora_checkout_intent:checkoutIntentId}
});
```

9. Inspect D1 `billing_intents`, `billing_events`, `billing_subscriptions`, `billing_entitlements` after a Paddle **test** transaction. Test duplicated deliveries, forged signatures, different quantities, expiration and out-of-order events.

### Not yet implemented — REQUIRED before production

- Cloudflare Worker must be integrated with the Classora actual signed-in frontend; the standalone preview currently opens checkout independently and does not prepare server-verified intents.
- Current D1 billing records must be connected to feature authorization in Classora securely. A screenshot or paid success redirect is NEVER payment confirmation. Existing Firebase Firestore rules are not yet modified to consume Worker entitlements.
- D1 endpoints need authenticated and authorized school account management and selected student/teacher seat assignment. **School purchase is intentionally disabled** in this version.
- Stronger failure handling and server verification from Paddle API are recommended; protect against refunded or contested transactions, simultaneous checkouts and lost webhook events.
- Handle plan changes, cancellation, access expiration, seat changes effective at next subscription-month period, customer portal, email receipts, and currency/tax display.
- Complete a security review and tests before enabling live mode.
- The Flutter/Capacitor/native-app distribution may require separate review of app-store payment requirements.

**Preview build check (2026-10-16):** A new GitHub commit triggers the separate Cloudflare Worker build connected to this preview branch. This Worker is sandbox-only. The presence of a successful build does NOT mean a validated payment flow, a configured Paddle signing secret, or a production launch. Never connect this to real customer payments before end-to-end security review.
