# Classora AI — Ollama on your Windows PC

This is the self-hosted version of Classora AI. It uses Ollama on **your computer**, instead of billing the OpenAI API. The existing website chat calls \`https://ai.classora.study/api/chat\`, with an authenticated Firebase ID token.

The local gateway **verifies the Firebase token signature** using Google's public signing certificates, enforces per-user limits, queues at most three waiting requests, and forwards only validated questions to Ollama on \`127.0.0.1:11434\`. The gateway itself listens on \`127.0.0.1:8765\`. It does not require a Firebase admin service-account file.

## 1. Make sure the AI runs on Windows

Install Ollama: https://ollama.com/download/windows

Open PowerShell:

\`\`\`powershell
ollama list
ollama run qwen2.5:3b
\`\`\`

After testing with an English prompt, type \`/bye\` to exit the console chat. The Ollama Windows app should remain running in the background.

If Arabic looks backwards in PowerShell, that is often a terminal right-to-left rendering issue; test the same question in the website chat instead.

## 2. Start the Classora gateway

Install Node.js **22 or later**: https://nodejs.org/en/download

Download or clone this GitHub repository and go to its \`local-ai\` folder. In PowerShell:

\`\`\`powershell
node --version
node server.mjs
\`\`\`

Or double-click \`start-classora-ai.cmd\`.

Leave the gateway console window open. Open \`http://127.0.0.1:8765/health\` on this computer. You should see:

\`\`\`json
{"ok":true,"service":"Classora Local AI"}
\`\`\`

A successful \`/health\` response **does not** by itself mean Ollama can answer a question. Make sure Ollama remains running and the \`qwen2.5:3b\` model is installed.

## 3. Securely publish the gateway using Cloudflare Tunnel

**Prerequisite:** the \`classora.study\` domain must be configured in your own Cloudflare account and DNS zone. A Pages domain alone or a Namecheap registration without Cloudflare DNS delegation may not be sufficient.

1. Go to https://one.dash.cloudflare.com/ and open **Networking → Tunnels** (the menu can move).
2. Create a tunnel named \`classora-ai\`.
3. Select **Windows** and follow Cloudflare's own install/run directions on the computer hosting Ollama. If the dashboard provides a tunnel **token**, do not share it or commit it to GitHub.
4. In the tunnel, choose **Routes → Add route → Published application**.
5. Set **Hostname**: \`ai.classora.study\`.
6. Set **Service**: \`HTTP\`, URL \`http://127.0.0.1:8765\`.
7. Save. If required, complete the Cloudflare DNS setup.
8. Check \`https://ai.classora.study/health\` from the phone/browser. It should respond with the same JSON.

Only route the protected gateway on port **8765**. **Never** publish port 11434, expose your PowerShell, RDP, file shares, or router ports. Do not disable the Firebase auth checks.

Official Cloudflare instructions: https://developers.cloudflare.com/tunnel/get-started/

## 4. Test from Classora

1. Refresh https://classora.study/ (installed PWA users might need to close and reopen the app).
2. Sign in to a normal teacher/student Firebase account, not Guest.
3. Open the Classora assistant. When prompted, opt into the **self-hosted Classora Local AI** (not OpenAI). Under Settings, users can change their AI consent choice.
4. Ask: \`Explain why the sky is blue in easy English.\` If connected, the gateway will answer with Ollama. Known lessons still have the existing **Open lesson** button.
5. If the PC/tunnel is offline, Classora automatically falls back to its existing curated offline assistant.

## Costs, safety, and capacity

- Ollama model inference requires no per-message OpenAI API subscription. Your computer still uses electricity and internet, and Cloudflare or DNS services may have their own plan/usage limits.
- This is a small experimental gateway for your GTX 1650 4GB-class PC, not an unlimited public AI hosting service. It runs **one model request at a time**, with a short queue. Other users can see busy messages.
- Limits: 25 successful admission attempts per account daily; 150 per gateway daily; minimum 5 seconds between account requests. These are **in-memory** counters and reset if the gateway restarts; add durable billing/abuse protections before broad public launch.
- Only authenticated accounts can access chat. The browser's Firebase ID token travels over HTTPS; the local server verifies signature, issuer, audience, lifetime and sign-in provider. No service-account private key is needed.
- The operator's computer receives the question and up to six prior conversation turns; users must consent. Do not send sensitive personal information or passwords; comply with consent and privacy requirements for students/minors.
- The responses can be wrong or slow. Local model quality and Arabic support are limited compared with large cloud models.
- Never give strangers your Cloudflare Tunnel token, Firebase credentials, or any OpenAI API key.

## Classora conversational AI v250 — activation and limits

The web interface for conversations is deployed by GitHub Pages. Genuine open-ended stories, rewritten text and long explanations require the separate operator-run Ollama gateway to be online. GitHub Pages does not launch Ollama.

- Restart the local Node gateway after pulling the updated repository to load its new multilingual instructions.
- The site requires fresh consent (v2) before transmitting a question and up to 10 previous messages to the operator computer. Declining preserves only the limited offline curriculum/math assistant.
- Languages: Arabic, English, Spanish, Korean, German, Italian, Hindi, Turkish. Quality varies across languages and the local 3B model may make errors.
- Large requests (for example 300 lines) should be completed in successive parts using Continue. A single 300-line response is not guaranteed.
- Generation budget is set through the CLASSORA_AI_MAX_TOKENS environment variable, default 1000 with 500–1800 bounds. Increasing it can slow down computers with small GPUs.
- The new chat transcript stays only in the active page memory, and is not separately saved as a Firebase chat record.
- Keep the HTTPS authentication tunnel enabled; never expose Ollama port 11434, Firebase credentials or API keys.
- Test consent, offline server, slow model, sign out, device rotation and all language selectors on real phones/tablets.
