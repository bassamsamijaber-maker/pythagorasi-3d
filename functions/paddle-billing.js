"use strict";

// Sandbox billing foundation. Deploy ONLY to a verified Firebase TEST project.
// This file intentionally does not support Paddle Live.
const crypto = require("node:crypto");
const { onCall, onRequest, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { getFirestore, Timestamp, FieldValue } = require("firebase-admin/firestore");
const logger = require("firebase-functions/logger");

const webhookSecret = defineSecret("PADDLE_SANDBOX_WEBHOOK_SECRET");
const REGION = "us-central1";
const db = getFirestore();
const MAX_SEATS = 1000;
const INTENT_LIFETIME_MS = 48 * 3600 * 1000; // Allow delayed authenticated Paddle deliveries.

const CATALOG = Object.freeze({
  student_plus: { monthly: "pri_01m52gdcxvavyvxm20syewn02p", annual: "pri_01m52gktppwtkyzpw6ra3b5gzp" },
  student_premium: { monthly: "pri_01m52gsd66av9fh42t98gn2xv9", annual: "pri_01m52gvc6w6q0v9d85v6grfz0x" },
  teacher_plus: { monthly: "pri_01m52h0nth9qp5g4x2rp755rw2", annual: "pri_01m52h21bkhnc9n0daf7zfz077" },
  teacher_premium: { monthly: "pri_01m52hmfdzpq8ed58thdb7nfkm", annual: "pri_01m52hnshxabs88wkr3yyw5t3p" },
  class_plus: { monthly: "pri_01m52htxwk9cxa9vzq1d47ntan", annual: "pri_01m52hwb8eswkwn1h0q6cn6qwj" },
  class_premium: { monthly: "pri_01m52j00j9jn00bd78215tzz4j", annual: "pri_01m52j122szjmbhxbp3h5per73" },
  school_plus: { monthly: "pri_01m52j311477jbe7a595msjfv1", annual: "pri_01m52j3z465tkzrvsfdc4dcrv2" },
  school_premium: { monthly: "pri_01m52j6p5yq3pz27axxzxfmf0n", annual: "pri_01m52j824aa3zwbqcfwe6dagzz" },
  extra_student: { monthly: "pri_01m52jggg0jqp9y2sm1zk5d6h4", annual: "pri_01m52jkc683jdqd6m5k2fkc9vt" },
  extra_teacher: { monthly: "pri_01m52jmvhpay4tp09cnkjnhgb1", annual: "pri_01m52jnxxw1x6v5xznr7vsz57c" }
});
const HANDLED_EVENTS = new Set([
  "subscription.created", "subscription.activated", "subscription.updated",
  "subscription.canceled", "subscription.past_due", "subscription.paused",
  "subscription.resumed", "subscription.trialing"
]);

function validCode(value) {
  return typeof value === "string" && /^[a-zA-Z0-9_-]{1,120}$/.test(value);
}
function ensure(condition, code, message) {
  if (!condition) throw new HttpsError(code, message);
}
function entitlementKey(kind, uid, scopeId) {
  return kind === "class" ? "class_" + scopeId :
    kind === "school" ? "school_" + scopeId : "user_" + uid;
}
function selection(kind, tier, cycle, seats) {
  ensure(["student", "teacher", "class", "school"].includes(kind), "invalid-argument", "Invalid subscription category.");
  ensure(["plus", "premium"].includes(tier), "invalid-argument", "Invalid subscription tier.");
  ensure(["monthly", "annual"].includes(cycle), "invalid-argument", "Invalid billing cycle.");
  ensure(Number.isInteger(seats) && seats >= 1 && seats <= MAX_SEATS, "invalid-argument", "Invalid seat count.");
  const included = kind === "class" ? 35 : kind === "school" ? 55 : 1;
  ensure(seats >= included && (included !== 1 || seats === 1), "invalid-argument", "Invalid seat count for subscription.");
  const product = CATALOG[kind + "_" + tier][cycle];
  const extra = seats - included;
  const additional = kind === "class" ? "extra_student" : "extra_teacher";
  const items = [{ priceId: product, quantity: 1 }];
  if (extra > 0) items.push({ priceId: CATALOG[additional][cycle], quantity: extra });
  return { items, included, extra };
}

function normalizeItems(items) {
  if (!Array.isArray(items) || !items.length || items.length > 2) return null;
  const out = [];
  for (const item of items) {
    const id = item && (item.price_id || item.price?.id || item.priceId);
    const quantity = Number(item?.quantity);
    if (typeof id !== "string" || !Number.isSafeInteger(quantity) || quantity < 1) return null;
    out.push({ priceId: id, quantity });
  }
  return out.sort((a, b) => a.priceId.localeCompare(b.priceId));
}

function identicalItems(actual, expected) {
  const a = normalizeItems(actual), b = normalizeItems(expected);
  return a !== null && b !== null && a.length === b.length &&
    a.every((x, i) => x.priceId === b[i].priceId && x.quantity === b[i].quantity);
}

// Paddle signature = HMAC_SHA256(secret, timestamp + ":" + unmodified UTF-8 body).
function verifyPaddleSignature(header, raw, secret, now = Date.now()) {
  if (typeof header !== "string" || !Buffer.isBuffer(raw) || !secret) return false;
  const pieces = header.split(";").map(p => p.trim());
  const tsText = pieces.find(p => p.startsWith("ts="))?.slice(3);
  const candidates = pieces.filter(p => p.startsWith("h1=")).map(p => p.slice(3));
  if (!tsText || !/^\d{10}$/.test(tsText) || !candidates.length) return false;
  const ts = Number(tsText);
  if (Math.abs(now - ts * 1000) > 300000) return false;
  const expected = crypto.createHmac("sha256", secret)
    .update(tsText + ":").update(raw).digest();
  return candidates.some(h => {
    if (!/^[0-9a-fA-F]{64}$/.test(h)) return false;
    return crypto.timingSafeEqual(expected, Buffer.from(h, "hex"));
  });
}

function millis(s) {
  if (typeof s !== "string") return null;
  const n = Date.parse(s);
  return Number.isFinite(n) ? n : null;
}

// Called by a signed-in Classora user. A checkout intent is an authoritatively
// priced, server-verified purchase request; the browser cannot grant entitlements.
exports.prepareClassoraSandboxCheckout = onCall({ region: REGION, maxInstances: 5 }, async (request) => {
  ensure(request.auth?.uid, "unauthenticated", "Sign in to Classora before subscribing.");
  const uid = request.auth.uid;
  const data = request.data || {};
  const kind = data.kind, tier = data.tier, cycle = data.cycle;
  const scopeId = data.scopeId || null;
  const seats = data.seats ?? (kind === "class" ? 35 : kind === "school" ? 55 : 1);
  const { items, extra, included } = selection(kind, tier, cycle, seats);
  const person = await db.collection("users").doc(uid).get();
  ensure(person.exists, "permission-denied", "Classora account required.");
  const role = person.data()?.role;

  if (kind === "student") ensure(role === "student", "permission-denied", "Student account required.");
  if (kind === "teacher") ensure(role === "teacher", "permission-denied", "Teacher account required.");
  if (kind === "class") {
    ensure(role === "teacher" && validCode(scopeId), "permission-denied", "Class owner account required.");
    const classDoc = await db.collection("classes").doc(scopeId).get();
    ensure(classDoc.exists && classDoc.data()?.ownerId === uid, "permission-denied", "Only the class owner can buy seats.");
  }
  if (kind === "school") {
    // This collection is provisioned ONLY by staff, never directly writable by clients.
    ensure(validCode(scopeId), "permission-denied", "Verified school account required.");
    const school = await db.collection("billingSchools").doc(scopeId).get();
    ensure(school.exists && school.data()?.billingOwnerUid === uid && school.data()?.verified === true,
      "permission-denied", "School owner must be verified before purchasing.");
  }
  const entitlementId = entitlementKey(kind, uid, scopeId);
  const entitlementRef = db.collection("billingEntitlements").doc(entitlementId);
  const throttleRef = db.collection("billingCheckoutThrottle").doc(uid);
  const intentId = crypto.randomUUID();
  const intentRef = db.collection("billingCheckoutIntents").doc(intentId);
  await db.runTransaction(async tx => {
    const [entitlement, throttle] = await Promise.all([tx.get(entitlementRef), tx.get(throttleRef)]);
    ensure(entitlement.data()?.status !== "active", "failed-precondition",
      "An active subscription already exists. Use Change plan, not a second purchase.");
    const now = Date.now();
    ensure(!throttle.exists || now - (throttle.data()?.lastCreatedMs || 0) > 20000,
      "resource-exhausted", "Please wait before starting another checkout.");
    tx.set(throttleRef, { lastCreatedMs: now }, { merge: true });
    tx.create(intentRef, {
      uid, kind, tier, cycle, scopeId, seats, included, extra, items, entitlementId,
      createdAt: FieldValue.serverTimestamp(), expiresAt: Timestamp.fromMillis(now + INTENT_LIFETIME_MS),
      status: "pending"
    });
  });
  return { checkoutIntentId: intentId, items, kind, tier, cycle, seats };
});

exports.paddleClassoraSandboxWebhook = onRequest({
  region: REGION, secrets: [webhookSecret], cors: false, maxInstances: 5,
  invoker: "public", timeoutSeconds: 30
}, async (req, res) => {
  if (req.method !== "POST") { res.status(405).send("Method not allowed"); return; }
  const raw = req.rawBody;
  if (!verifyPaddleSignature(req.headers["paddle-signature"], raw, webhookSecret.value())) {
    res.status(401).send("Invalid Paddle signature"); return;
  }
  let event;
  try { event = JSON.parse(raw.toString("utf8")); }
  catch (_) { res.status(400).send("Invalid JSON"); return; }
  const id = event?.event_id, type = event?.event_type, sub = event?.data;
  if (!validCode(id) || !type) { res.status(400).send("Invalid event"); return; }
  if (!HANDLED_EVENTS.has(type)) { res.status(200).send("Ignored event"); return; }
  if (!validCode(sub?.id) || !sub.id.startsWith("sub_")) {
    res.status(400).send("Invalid subscription"); return;
  }
  const intentId = sub.custom_data?.classora_checkout_intent;
  const eventRef = db.collection("billingWebhookEvents").doc(id);
  const subscriptionRef = db.collection("billingSubscriptions").doc(sub.id);

  try {
    await db.runTransaction(async tx => {
      const [prior, subscription] = await Promise.all([tx.get(eventRef), tx.get(subscriptionRef)]);
      if (prior.exists) return;
      const existing = subscription.data();
      const linkedIntent = validCode(intentId) ? intentId : existing?.checkoutIntentId;
      if (!linkedIntent) {
        tx.create(eventRef, { type, subscriptionId: sub.id, outcome: "unlinked", receivedAt: FieldValue.serverTimestamp() });
        return;
      }
      const intentRef = db.collection("billingCheckoutIntents").doc(linkedIntent);
      const intentSnap = await tx.get(intentRef);
      const intent = intentSnap.data();
      if (!intent || (intent.expiresAt?.toMillis() < Date.now() && !existing)) {
        tx.create(eventRef, { type, subscriptionId: sub.id, outcome: "missing_intent", receivedAt: FieldValue.serverTimestamp() });
        return;
      }
      // A malicious browser-supplied customData value or quantity must never authorize access.
      if ((intent.status === "linked" && intent.subscriptionId !== sub.id) ||
          (existing && existing.checkoutIntentId !== linkedIntent) ||
          !identicalItems(sub.items, intent.items)) {
        tx.create(eventRef, { type, subscriptionId: sub.id, outcome: "mismatch", receivedAt: FieldValue.serverTimestamp() });
        logger.warn("Paddle checkout intent mismatch", { subscriptionId: sub.id, eventId: id });
        return;
      }
      const eventMs = millis(event.occurred_at);
      if (!eventMs) throw Error("Invalid Paddle event timestamp");
      if (existing?.lastEventMs && eventMs < existing.lastEventMs) {
        tx.create(eventRef, { type, subscriptionId: sub.id, outcome: "stale", receivedAt: FieldValue.serverTimestamp() });
        return;
      }
      const entitlementRef = db.collection("billingEntitlements").doc(intent.entitlementId);
      const entitlementSnap = await tx.get(entitlementRef);
      const otherActiveSubscription = entitlementSnap.data()?.subscriptionId !== sub.id &&
        entitlementSnap.data()?.status === "active";
      if (otherActiveSubscription) {
        tx.create(eventRef, { type, subscriptionId: sub.id, outcome: "subscription_conflict", receivedAt: FieldValue.serverTimestamp() });
        logger.error("Parallel Paddle subscriptions for entitlement", { eventId: id, subscriptionId: sub.id });
        return;
      }
      if (!["active", "past_due", "paused", "canceled", "trialing"].includes(sub.status)) {
        throw Error("Unsupported subscription status");
      }
      const status = sub.status;
      const entitlement = {
        uid: intent.uid, ownerUid: intent.uid, kind: intent.kind,
        tier: intent.tier, cycle: intent.cycle, scopeId: intent.scopeId,
        seats: intent.seats, included: intent.included, extra: intent.extra,
        status, active: status === "active",
        source: "paddle_sandbox", subscriptionId: sub.id,
        lastEventMs: eventMs, updatedAt: FieldValue.serverTimestamp(),
        nextBilledAt: sub.next_billed_at || null,
        currentPeriodEndsAt: sub.current_billing_period?.ends_at || null,
        scheduledChange: sub.scheduled_change || null
      };
      tx.set(subscriptionRef, { ...entitlement, checkoutIntentId: linkedIntent, customerId: sub.customer_id || null }, { merge: true });
      tx.set(entitlementRef, entitlement);
      tx.update(intentRef, { status: "linked", subscriptionId: sub.id });
      tx.create(eventRef, { type, subscriptionId: sub.id, outcome: "applied", receivedAt: FieldValue.serverTimestamp() });
    });
    res.status(200).send("OK");
  } catch (err) {
    logger.error("Classora Paddle Sandbox webhook failed", { eventId: id, error: String(err) });
    res.status(500).send("Retry later");
  }
});

