/**
 * Classora Paddle LIVE — webhook intake only (safe staging).
 * Deployment target: shy-limit-0e09classora-paddle-live-billing
 * No checkout, no charges, no subscription activation, no customer-facing access grants.
 *
 * Cloudflare bindings:
 *   BILLING_DB: D1 binding to classora-billing-live
 *   FIREBASE_PROJECT_ID: "pythagorasi-school" (plain variable)
 *   ALLOWED_ORIGIN: "https://classora.study" (plain variable)
 *   PADDLE_LIVE_WEBHOOK_SECRET: Paddle Live destination secret (encrypted Worker secret)
 *
 * Deliberately DOES NOT use a Paddle secret API key, nor a public client-side token.
 */
const encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8", { fatal: true });
const MAX_BODY_BYTES = 256 * 1024;
const MAX_TIMESTAMP_SKEW_SECONDS = 300;

function reply(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Access-Control-Allow-Origin": "null"
    }
  });
}

function isSafeId(value, length = 128) {
  return typeof value === "string" &&
    value.length > 0 && value.length <= length &&
    /^[a-zA-Z0-9_-]+$/.test(value);
}

function constantTimeHexEquals(actual, candidate) {
  if (!/^[0-9a-fA-F]{64}$/.test(candidate || "") ||
      typeof actual !== "string" || actual.length !== candidate.length) return false;
  let mismatches = 0;
  for (let i = 0; i < actual.length; i++) {
    mismatches |= actual.charCodeAt(i) ^ candidate.toLowerCase().charCodeAt(i);
  }
  return mismatches === 0;
}

async function validPaddleSignature(request, env, rawBytes) {
  const secret = env.PADDLE_LIVE_WEBHOOK_SECRET;
  if (typeof secret !== "string" || !secret) return false;
  const header = request.headers.get("Paddle-Signature") || "";
  const parts = header.split(";").map(part => part.trim().split("="));
  const stamps = parts.filter(part => part[0] === "ts").map(part => part[1]);
  const candidates = parts.filter(part => part[0] === "h1").map(part => part[1]);
  if (stamps.length !== 1 || !/^\d{10}$/.test(stamps[0]) || !candidates.length) return false;
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - Number(stamps[0])) > MAX_TIMESTAMP_SKEW_SECONDS) return false;

  // Signed bytes must be EXACTLY 'timestamp:original_body', without JSON reserialization.
  const prefix = encoder.encode(stamps[0] + ":");
  const signed = new Uint8Array(prefix.length + rawBytes.length);
  signed.set(prefix, 0);
  signed.set(rawBytes, prefix.length);
  const key = await crypto.subtle.importKey(
    "raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
  );
  const digest = await crypto.subtle.sign("HMAC", key, signed);
  const expected = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, "0")).join("");
  return candidates.some(signature => constantTimeHexEquals(expected, signature));
}

async function prepareInbox(env) {
  if (!env.BILLING_DB) throw new Error("D1 billing database binding is missing");
  // A separate, append-only staging inbox. This does not write live entitlements.
  await env.BILLING_DB.prepare(`
    CREATE TABLE IF NOT EXISTS billing_webhook_inbox (
      event_id TEXT PRIMARY KEY,
      event_type TEXT NOT NULL,
      object_id TEXT NOT NULL,
      subscription_id TEXT,
      intent_id TEXT,
      occurred_at TEXT,
      safe_payload_json TEXT NOT NULL,
      received_at INTEGER NOT NULL,
      processing_status TEXT NOT NULL DEFAULT 'received'
    )
  `).run();
}

function minimalEvent(event) {
  const data = event.data || {};
  const items = Array.isArray(data.items) ? data.items.slice(0, 100).map(row => ({
    price_id: isSafeId(row?.price?.id) ? row.price.id : null,
    product_id: isSafeId(row?.price?.product_id) ? row.price.product_id : null,
    quantity: Number.isSafeInteger(row?.quantity) && row.quantity >= 0 ? row.quantity : null
  })) : [];
  const intentId = data.custom_data?.classora_checkout_intent;
  return {
    event_id: event.event_id,
    event_type: event.event_type,
    occurred_at: typeof event.occurred_at === "string" ? event.occurred_at : null,
    object_id: data.id,
    subscription_id: isSafeId(data.subscription_id) ? data.subscription_id : (
      String(data.id || "").startsWith("sub_") ? data.id : null
    ),
    intent_id: isSafeId(intentId) ? intentId : null,
    status: typeof data.status === "string" ? data.status : null,
    currency_code: typeof data.currency_code === "string" ? data.currency_code : null,
    current_billing_period_end: typeof data.current_billing_period?.ends_at === "string" ? data.current_billing_period.ends_at : null,
    next_billed_at: typeof data.next_billed_at === "string" ? data.next_billed_at : null,
    items
  };
}

async function webhook(request, env) {
  if (!env.BILLING_DB || !env.PADDLE_LIVE_WEBHOOK_SECRET) return reply({ ok: false, error: "Webhook not configured" }, 503);
  const body = await request.arrayBuffer();
  if (body.byteLength === 0 || body.byteLength > MAX_BODY_BYTES) return reply({ ok: false, error: "Invalid body size" }, 413);
  if (!(await validPaddleSignature(request, env, new Uint8Array(body)))) {
    return reply({ ok: false, error: "Invalid signature" }, 401);
  }
  let event;
  try { event = JSON.parse(decoder.decode(body)); } catch {
    return reply({ ok: false, error: "Invalid JSON" }, 400);
  }
  if (!isSafeId(event?.event_id) || typeof event?.event_type !== "string" ||
      !/^(subscription|transaction)\.[a-z_]+$/.test(event.event_type) ||
      !isSafeId(event?.data?.id)) return reply({ ok: false, error: "Invalid event" }, 400);

  const safe = minimalEvent(event);
  await prepareInbox(env);
  await env.BILLING_DB.prepare(`
    INSERT INTO billing_webhook_inbox
    (event_id,event_type,object_id,subscription_id,intent_id,occurred_at,safe_payload_json,received_at)
    VALUES (?,?,?,?,?,?,?,?)
    ON CONFLICT(event_id) DO NOTHING
  `).bind(
    safe.event_id, safe.event_type, safe.object_id, safe.subscription_id,
    safe.intent_id, safe.occurred_at, JSON.stringify(safe), Date.now()
  ).run();
  // Only acknowledges an authentic, durably stored event.
  // Future verified checkout-intent reconciliation will handle entitlements.
  return reply({ ok: true, received: true });
}

export default {
  async fetch(request, env) {
    const path = new URL(request.url).pathname;
    if (path === "/api/health" && request.method === "GET") {
      try {
        const table = await env.BILLING_DB.prepare(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='billing_intents'"
        ).first();
        if (!table) return reply({ ok: false, database: "missing billing tables", checkoutEnabled: false }, 503);
        await prepareInbox(env);
        const ready = !!env.PADDLE_LIVE_WEBHOOK_SECRET &&
          env.FIREBASE_PROJECT_ID === "pythagorasi-school" &&
          env.ALLOWED_ORIGIN === "https://classora.study";
        return reply({
          service: "Classora Paddle Live",
          database: "connected",
          webhookConfigured: !!env.PADDLE_LIVE_WEBHOOK_SECRET,
          firebaseConfigured: env.FIREBASE_PROJECT_ID === "pythagorasi-school",
          originConfigured: env.ALLOWED_ORIGIN === "https://classora.study",
          inboxReady: true,
          webhookReady: ready,
          checkoutEnabled: false,
          entitlementsEnabled: false
        }, ready ? 200 : 503);
      } catch (err) {
        console.error("Billing health check failed", err);
        return reply({ ok: false, database: "not ready", checkoutEnabled: false }, 503);
      }
    }
    if (path === "/api/paddle/webhook" && request.method === "POST") {
      try { return await webhook(request, env); }
      catch (err) {
        console.error("Paddle webhook storage failure", err);
        return reply({ ok: false, error: "Webhook persistence failed" }, 500);
      }
    }
    // Fail closed: other routes can't create payment sessions or grant subscriptions.
    return reply({ ok: false, error: "Live checkout is not enabled" }, 503);
  }
};
