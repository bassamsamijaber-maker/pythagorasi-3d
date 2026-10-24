# Classora Cloud AI

Standalone Cloudflare Worker using OpenAI Responses API (`gpt-6-luna`).
This source does not activate the website; switch the frontend only after setup.

## Dashboard deployment

1. Open the existing `classora-ai` Worker. Add `OPENAI_API_KEY` as a **Secret**.
2. Under Storage & databases > D1, create `classora-ai-usage`.
3. Worker > Bindings > Add binding > D1 database. Binding name **AI_USAGE**;
   select `classora-ai-usage` and deploy.
4. Worker > Edit code. Replace the starter script with all of `worker.mjs` and deploy.
   No npm dependencies, Node compatibility flags or other secrets are needed.
5. Visit `https://classora-ai.bassamsamijaber.workers.dev/health`.
   Expected: `configured:true`, `keyConfigured:true`, `databaseReady:true`.
   Health checks configuration and database, NOT provider billing/model access or output quality.
6. Before switching the frontend: use the Cloud AI service name and configuration flag
   in the health check; update the endpoint, provider disclosure/consent in all eight
   languages, and service-worker cache. Require fresh cloud-processing consent.
7. Verify a signed-in request end to end, follow-up edits, and all eight languages.

## Usage and security

- Firebase JWT RS256 signatures, issuer, audience, expiry and sign-in provider are verified.
  Anonymous sessions are rejected. Google public JWKs are fetched from a fixed URL.
- CORS allows only the three established Classora origins; CORS is not the auth mechanism.
- D1 atomically admits requests. Caps: 25 per user/day, 100 total/day, 2,000 total/calendar month,
  with a five-second user cooldown (UTC boundaries). Provider failures still consume a slot.
- Missing/broken quota storage blocks model requests. Memory-only counters are not used.
- Questions: 3,500 characters; latest ten history messages, 24,000 UTF-8 bytes total;
  2,000 maximum billed output tokens (including reasoning), low reasoning effort, no tools.
- This is a request quota, not a currency-denominated billing guarantee. Taxes, infrastructure,
  provider price changes and other uses of the same API account are outside these limits.
  Review actual OpenAI usage after launch. Do not enable automatic recharge blindly.
- D1 stores a hash of UID, request ID and time only, not chats, email or API keys.
  OpenAI receives text with `store:false`; that does not promise zero provider retention.
- Never place an API key in GitHub, frontend JavaScript, screenshots or chat.
- Health never makes a paid model request. Model availability is verified only by actual inference.

Validation: `node tests/cloud-ai-v257.mjs` (mocked provider, real RSA and SQLite).
