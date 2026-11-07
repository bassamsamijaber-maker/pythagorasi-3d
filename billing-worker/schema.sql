-- Sandbox-only durable billing tables. Apply to Cloudflare D1 test database.
CREATE TABLE IF NOT EXISTS billing_intents (
 id TEXT PRIMARY KEY, uid TEXT NOT NULL, scope TEXT NOT NULL,
 kind TEXT NOT NULL, tier TEXT NOT NULL, period TEXT NOT NULL, seats INTEGER NOT NULL,
 items_json TEXT NOT NULL, created_at INTEGER NOT NULL, expires_at INTEGER NOT NULL,
 status TEXT NOT NULL DEFAULT 'pending', subscription_id TEXT UNIQUE
);
CREATE INDEX IF NOT EXISTS idx_billing_intent_uid ON billing_intents(uid,created_at DESC);
CREATE TABLE IF NOT EXISTS billing_events (
 id TEXT PRIMARY KEY, type TEXT NOT NULL, subscription_id TEXT NOT NULL,
 received_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS billing_subscriptions (
 id TEXT PRIMARY KEY, intent_id TEXT NOT NULL, uid TEXT NOT NULL,
 status TEXT NOT NULL, event_ms INTEGER NOT NULL, period_end TEXT
);
CREATE TABLE IF NOT EXISTS billing_entitlements (
 scope TEXT PRIMARY KEY, uid TEXT NOT NULL, kind TEXT NOT NULL,
 tier TEXT NOT NULL, period TEXT NOT NULL, seats INTEGER NOT NULL,
 subscription_id TEXT NOT NULL, status TEXT NOT NULL, active INTEGER NOT NULL DEFAULT 0,
 event_ms INTEGER NOT NULL, period_end TEXT
);
CREATE INDEX IF NOT EXISTS idx_billing_entitlements_uid ON billing_entitlements(uid);
