# Classora · Paddle Sandbox ↔ Firebase billing (DRAFT)

Status: **code prepared on a preview branch, NOT deployed to Firebase, NOT production-ready**.

## What was added

- `prepareClassoraSandboxCheckout` (Firebase Callable) authenticates Classora users and authorizes plan, duration, quantity and ownership.
- `paddleClassoraSandboxWebhook` (Firebase HTTP) accepts only signed Paddle Sandbox subscription lifecycle events.
- `billingCheckoutIntents`, `billingWebhookEvents`, `billingSubscriptions`, and `billingEntitlements` store a durable, server-controlled record.
- Firestore rules prevent browser writes to these billing collections.
- Events are deduplicated by `event_id`, ordered using `occurred_at`, with Paddle HMAC signature verification on the unmodified request body.
- Subscription price IDs and additional seat quantities must match the server-created checkout intent exactly. The client is NEVER trusted to set entitlements.
- Trialing/past-due/paused/canceled subscriptions are not marked as active paid entitlements.
- For school purchases, a verified `billingSchools/{id}` record is required. No direct browser school management is enabled yet.
- This version does **not** enroll selected students or teachers into purchased seats. An entitlement at class/school level is *not* equivalent to individual member entitlement.

## Before testing / deploying

1. Create a **SEPARATE Firebase test project** rather than using the current production project `pythagorasi-school`. Never use the repository's default `.firebaserc` project ID for sandbox deployment.
2. Create/verify a Paddle Sandbox notification destination under Developer Tools → Notifications, selecting:
   `subscription.created`, `subscription.activated`, `subscription.updated`,
   `subscription.canceled`, `subscription.past_due`, `subscription.paused`,
   `subscription.resumed` and `subscription.trialing`.
3. Set Firebase Secret Manager value `PADDLE_SANDBOX_WEBHOOK_SECRET` with the notification destination's secret using Firebase CLI locally (never place it in repository, query strings, screenshot, or chat).
4. Deploy ONLY the relevant functions and Firestore rules to the explicit **TEST** project using `firebase deploy --project <TEST_PROJECT_ID> --only functions:prepareClassoraSandboxCheckout,functions:paddleClassoraSandboxWebhook,firestore:rules`.
5. Set the Paddle Sandbox destination URL to the deployed `paddleClassoraSandboxWebhook` HTTPS URL. This URL must be publicly reachable but must reject unsigned requests.
6. Authenticate into Classora **on a test Firebase app**, then call the checkout preparation function:
   ```js
   const result = await httpsCallable(functions, 'prepareClassoraSandboxCheckout')({
     kind: 'student', tier: 'plus', cycle: 'monthly', seats: 1
   });
   Paddle.Checkout.open({
     items: result.data.items,
     customData: { classora_checkout_intent: result.data.checkoutIntentId }
   });
   ```
   For a class: `{kind:'class',tier:'plus',cycle:'monthly',seats:40,scopeId:'EXISTING_CLASS_ID'}`.
7. Confirm a sandbox purchase via Paddle's **test-only** methods, then inspect `billingWebhookEvents`, `billingSubscriptions` and `billingEntitlements` in the **TEST** Firebase project. Ensure no entries appear for unsigned/fake events and no paid entitlement appears for mismatched prices or quantities.

## Required before public launch

- Confirm every Paddle `pri_` ID with Paddle API, then migrate to **separate Live product/price IDs**.
- Set up Paddle Live merchant verification and payment methods for the eligible adult/organization owner.
- Add secure Firebase Auth integration to Classora's actual checkout. The current standalone `subscriptions-studio.html` is **display-only** and its inline Sandbox checkout does not yet call `prepareClassoraSandboxCheckout`.
- Add server-backed account subscription state, and lock/unlock premium features based on verified entitlements. Do not use mutable localStorage or UI button state as proof of payment.
- Handle individual seat allocations, school owner verification, requested seat changes effective at the NEXT subscription-month boundary, refunds and disputes.
- Implement API-authenticated cancel/upgrade/downgrade/manage flows; never pretend a local UI toggle canceled a real subscription.
- Add cancellation, invoice and renewal notice UX; verify data privacy and eligibility for users under 18.
- Test duplicate/out-of-order events, invalid signature, retry after crash, subscription renewal, failed payments, currency/tax display, and preview-domain approval in Paddle.

**Keep Paddle Live and Firebase production completely unchanged until all of these pass review.**
