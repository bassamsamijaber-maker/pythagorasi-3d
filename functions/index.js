const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const crypto = require("crypto");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");
const { getAuth } = require("firebase-admin/auth");

initializeApp();

const db = getFirestore();
const messaging = getMessaging();
const adminAuth = getAuth();

const APP_URL = "https://bassamsamijaber-maker.github.io/pythagorasi-3d/";
const ICON_URL = APP_URL + "icons/classora-192.png";
const BADGE_URL = APP_URL + "icons/favicon-64.png";

const SUPER_ADMIN_PROFILE_ID = "3228667330";
const SUPPORT_TYPES = new Set(["login","forgot-name","forgot-password","class","exam","competition","technical","other"]);
const SUPPORT_ROLES = new Set(["student","teacher","unknown"]);
const SUPPORT_EVENTS = new Set([
  "support_opened","ticket_created","recovery_started","recovery_key_created","recovery_key_rotated",
  "recovery_verified","login_name_viewed","password_changed","recovery_failed"
]);

const RECOVERY_KEY_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function normalizeRecoveryKey(value) {
  let s = String(value || "").toUpperCase().replace(/[^A-Z2-9]/g, "");
  if (s.startsWith("CLAS")) s = s.slice(4);
  return s;
}
function hashRecoveryKey(value) {
  const normalized = normalizeRecoveryKey(value);
  if (!/^[A-Z2-9]{16}$/.test(normalized)) return "";
  return crypto.createHash("sha256").update("classora-recovery-v1|" + normalized).digest("hex");
}
function generateRecoveryKey() {
  const bytes = crypto.randomBytes(16);
  let body = "";
  for (let i = 0; i < 16; i++) body += RECOVERY_KEY_ALPHABET[bytes[i] & 31];
  return "CLAS-" + body.match(/.{1,4}/g).join("-");
}
function recoveryRateKey(request) {
  const forwarded = String(request.rawRequest?.headers?.["x-forwarded-for"] || "").split(",")[0].trim();
  const ip = forwarded || String(request.rawRequest?.ip || "unknown");
  return crypto.createHash("sha256").update("classora-recovery-rate-v1|" + ip).digest("hex").slice(0, 40);
}
async function enforceRecoveryRateLimit(request) {
  const ref = db.collection("_recoveryRate").doc(recoveryRateKey(request));
  const now = Date.now();
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? (snap.data() || {}) : {};
    let windowStart = Number(data.windowStartMs || 0);
    let attempts = Number(data.attempts || 0);
    if (!windowStart || now - windowStart > 15 * 60 * 1000) {
      windowStart = now;
      attempts = 0;
    }
    attempts += 1;
    if (attempts > 7) throw new HttpsError("resource-exhausted", "too-many-recovery-attempts");
    tx.set(ref, { windowStartMs: windowStart, attempts, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  });
}
async function writeRecoveryAudit({ event, uid = null, profileId = "", detail = "" }) {
  const ref = await db.collection("supportAudit").add({
    event,
    userUid: uid,
    profileId: /^\d{10}$/.test(String(profileId || "")) ? String(profileId) : "",
    detail: cleanSupportText(detail, 180),
    createdAt: FieldValue.serverTimestamp()
  });
  return ref;
}

function cleanSupportText(value, max = 500) {
  return String(value || "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

async function superAdminUid() {
  const snap = await db.collection("profileIds").doc(SUPER_ADMIN_PROFILE_ID).get();
  return snap.exists ? (snap.data()?.uid || "") : "";
}

function supportTypeLabel(type) {
  const map = {
    "login":"مشكلة تسجيل دخول",
    "forgot-name":"نسي اسم الدخول",
    "forgot-password":"نسي كلمة السر",
    "class":"مشكلة صف",
    "exam":"مشكلة امتحان",
    "competition":"مشكلة مسابقة",
    "technical":"مشكلة تقنية",
    "other":"طلب دعم"
  };
  return map[type] || "طلب دعم";
}

async function pushSupportEvent(title, body, eventKey) {
  const uid = await superAdminUid();
  if (!uid) return;
  await sendToUsers([uid], {
    type: "support",
    eventKey,
    title,
    body,
    url: APP_URL + "#support-center"
  });
}

function supportRateKey(request) {
  const forwarded = String(request.rawRequest?.headers?.["x-forwarded-for"] || "").split(",")[0].trim();
  const ip = forwarded || String(request.rawRequest?.ip || "unknown");
  return crypto.createHash("sha256").update("classora-support-v1|" + ip).digest("hex").slice(0, 32);
}

async function enforceSupportRateLimit(request) {
  const key = supportRateKey(request);
  const ref = db.collection("_supportRate").doc(key);
  const now = Date.now();
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const last = snap.exists ? Number(snap.data()?.lastAtMs || 0) : 0;
    if (last && now - last < 45000) throw new HttpsError("resource-exhausted", "wait-before-sending-again");
    tx.set(ref, { lastAtMs: now, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  });
}

async function requireSuperAdmin(request) {
  const uid = request.auth?.uid || "";
  if (!uid) throw new HttpsError("unauthenticated", "sign-in-required");
  const adminUid = await superAdminUid();
  if (!adminUid || adminUid !== uid) throw new HttpsError("permission-denied", "admin-only");
  return uid;
}

function serializeSupportDoc(snap) {
  const data = snap.data() || {};
  const createdAt = data.createdAt?.toMillis ? data.createdAt.toMillis() : null;
  const updatedAt = data.updatedAt?.toMillis ? data.updatedAt.toMillis() : null;
  return { id: snap.id, ...data, createdAtMs: createdAt, updatedAtMs: updatedAt, createdAt: null, updatedAt: null };
}


function chunks(items, size = 500) {
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

async function userDocsForIds(uids) {
  const ids = [...new Set((uids || []).filter(Boolean))];
  if (!ids.length) return [];
  const docs = [];
  for (const group of chunks(ids, 100)) {
    const refs = group.map((uid) => db.doc("users/" + uid));
    const snaps = await db.getAll(...refs);
    docs.push(...snaps);
  }
  return docs;
}

async function allStudentIds() {
  const snap = await db.collection("users").where("role", "==", "student").get();
  return snap.docs.map((d) => d.id);
}

async function classMemberIds(classId) {
  const snap = await db.collection("classes").doc(classId).collection("members").get();
  return snap.docs.map((d) => d.id);
}

async function recipientIdsForTarget(data = {}) {
  if (data.targetType === "class" && data.targetClassId) {
    return classMemberIds(data.targetClassId);
  }
  if (data.targetClassId) return classMemberIds(data.targetClassId);
  return allStudentIds();
}

async function collectTokens(uids) {
  const docs = await userDocsForIds(uids);
  const tokenOwners = new Map();

  for (const snap of docs) {
    if (!snap.exists) continue;
    const data = snap.data() || {};
    if (data.pushNotificationsEnabled === false) continue;

    const tokens = Array.isArray(data.pushTokens) ? data.pushTokens : [];
    for (const token of tokens) {
      if (typeof token !== "string" || !token) continue;
      tokenOwners.set(token, snap.id);
    }
  }

  return tokenOwners;
}

async function cleanupInvalidTokens(invalidByUid) {
  const writes = [];
  for (const [uid, tokens] of invalidByUid.entries()) {
    if (!tokens.length) continue;
    writes.push(
      db.collection("users").doc(uid).update({
        pushTokens: FieldValue.arrayRemove(...tokens),
        pushUpdatedAt: FieldValue.serverTimestamp()
      }).catch((err) => logger.warn("token cleanup failed", { uid, err: String(err) }))
    );
  }
  await Promise.all(writes);
}

async function sendToUsers(uids, payload) {
  const tokenOwners = await collectTokens(uids);
  const tokens = [...tokenOwners.keys()];
  if (!tokens.length) {
    logger.info("No Classora push tokens for event", { eventKey: payload.eventKey });
    return { success: 0, failure: 0 };
  }

  let success = 0;
  let failure = 0;
  const invalidByUid = new Map();

  for (const tokenChunk of chunks(tokens, 500)) {
    const response = await messaging.sendEachForMulticast({
      tokens: tokenChunk,
      notification: {
        title: payload.title,
        body: payload.body
      },
      data: {
        type: payload.type || "general",
        eventKey: payload.eventKey || "",
        title: payload.title || "Classora",
        body: payload.body || "",
        url: payload.url || APP_URL
      },
      webpush: {
        notification: {
          icon: ICON_URL,
          badge: BADGE_URL,
          tag: payload.eventKey || undefined
        },
        fcmOptions: {
          link: payload.url || APP_URL
        }
      }
    });

    success += response.successCount;
    failure += response.failureCount;

    response.responses.forEach((item, index) => {
      if (item.success) return;
      const code = item.error?.code || "";
      if (
        code === "messaging/registration-token-not-registered" ||
        code === "messaging/invalid-registration-token"
      ) {
        const token = tokenChunk[index];
        const uid = tokenOwners.get(token);
        if (!uid) return;
        if (!invalidByUid.has(uid)) invalidByUid.set(uid, []);
        invalidByUid.get(uid).push(token);
      }
    });
  }

  await cleanupInvalidTokens(invalidByUid);
  logger.info("Classora push sent", {
    eventKey: payload.eventKey,
    success,
    failure,
    recipients: new Set([...tokenOwners.values()]).size
  });

  return { success, failure };
}

exports.notifyNewAssignment = onDocumentCreated(
  "classes/{classId}/assignments/{assignmentId}",
  async (event) => {
    const data = event.data?.data() || {};
    if (data.hidden === true || data.active === false) return;

    const classId = event.params.classId;
    const assignmentId = event.params.assignmentId;
    const classSnap = await db.collection("classes").doc(classId).get();
    const className = classSnap.exists ? (classSnap.data()?.name || "الصف") : "الصف";
    const uids = await classMemberIds(classId);

    let body = data.title || "وظيفة جديدة";
    if (data.dueDate) body += " • التسليم " + data.dueDate;
    body += " • " + className;

    return sendToUsers(uids, {
      type: "assignment",
      eventKey: "assignment:" + classId + ":" + assignmentId,
      title: "📝 وظيفة جديدة",
      body
    });
  }
);

exports.notifyNewExam = onDocumentCreated(
  "exams/{examId}",
  async (event) => {
    const data = event.data?.data() || {};
    if (data.published !== true) return;

    const uids = await recipientIdsForTarget(data);
    let body = data.title || "امتحان جديد";
    if (data.code) body += " • الكود " + data.code;

    return sendToUsers(uids, {
      type: "exam",
      eventKey: "exam:" + event.params.examId,
      title: "🎓 امتحان جديد",
      body
    });
  }
);

exports.notifyNewCompetition = onDocumentCreated(
  "competitions/{competitionId}",
  async (event) => {
    const data = event.data?.data() || {};
    if (data.publishToLobby !== true || data.status === "finished") return;

    const uids = await recipientIdsForTarget(data);
    let body = data.title || "مسابقة Classora";
    if (data.code) body += " • الكود " + data.code;

    return sendToUsers(uids, {
      type: "competition",
      eventKey: "competition:" + event.params.competitionId,
      title: "🏆 مسابقة جديدة",
      body
    });
  }
);

exports.notifyTeacherStudentJoined = onDocumentCreated(
  "classes/{classId}/members/{memberId}",
  async (event) => {
    const classId = event.params.classId;
    const memberId = event.params.memberId;
    const member = event.data?.data() || {};

    const classSnap = await db.collection("classes").doc(classId).get();
    if (!classSnap.exists) return;
    const classData = classSnap.data() || {};
    if (memberId === classData.ownerId) return;

    const teacherIds = new Set();
    if (classData.ownerId) teacherIds.add(classData.ownerId);

    const coTeachers = await db.collection("classes").doc(classId).collection("teachers").get();
    coTeachers.docs.forEach((doc) => teacherIds.add(doc.id));

    const studentName = member.displayName || "طالب";
    const className = classData.name || "الصف";

    return sendToUsers([...teacherIds], {
      type: "classJoin",
      eventKey: "classJoin:" + classId + ":" + memberId,
      title: "👤 طالب دخل صفك",
      body: studentName + " • " + className
    });
  }
);


exports.createSupportTicket = onCall({ cors: true }, async (request) => {
  if (!request.auth?.uid) await enforceSupportRateLimit(request);
  const data = request.data || {};
  const type = SUPPORT_TYPES.has(data.type) ? data.type : "other";
  const role = SUPPORT_ROLES.has(data.role) ? data.role : "unknown";
  const name = cleanSupportText(data.name, 80);
  const accountHint = cleanSupportText(data.accountHint, 100);
  const message = cleanSupportText(data.message, 1200);
  let profileId = "";
  let serverName = name;
  let serverRole = role;
  if (request.auth?.uid) {
    const userSnap = await db.collection("users").doc(request.auth.uid).get();
    if (userSnap.exists) {
      const profile = userSnap.data() || {};
      profileId = /^\d{10}$/.test(String(profile.profileId || "")) ? String(profile.profileId) : "";
      serverName = cleanSupportText(profile.displayName || name, 80);
      serverRole = profile.role === "teacher" ? "teacher" : profile.role === "student" ? "student" : role;
    }
  }

  if (serverName.length < 2) throw new HttpsError("invalid-argument", "name-required");
  if (message.length < 3) throw new HttpsError("invalid-argument", "message-required");

  const ref = await db.collection("supportTickets").add({
    type,
    role: serverRole,
    name: serverName,
    accountHint,
    message,
    profileId,
    userUid: request.auth?.uid || null,
    status: "open",
    source: request.auth?.uid ? "signed-in" : "login",
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection("supportAudit").add({
    event: "ticket_created",
    ticketId: ref.id,
    userUid: request.auth?.uid || null,
    profileId,
    detail: supportTypeLabel(type),
    createdAt: FieldValue.serverTimestamp()
  });

  await pushSupportEvent(
    "🎧 طلب دعم جديد",
    serverName + " • " + supportTypeLabel(type),
    "support:" + ref.id
  );

  return { ok: true, ticketId: ref.id };
});

exports.recordSupportEvent = onCall({ cors: true }, async (request) => {
  const data = request.data || {};
  const event = SUPPORT_EVENTS.has(data.event) ? data.event : "";
  if (!event) throw new HttpsError("invalid-argument", "invalid-event");

  let profileId = "";
  if (request.auth?.uid) {
    const userSnap = await db.collection("users").doc(request.auth.uid).get();
    if (userSnap.exists) {
      const profile = userSnap.data() || {};
      profileId = /^\d{10}$/.test(String(profile.profileId || "")) ? String(profile.profileId) : "";
    }
  }
  const detail = cleanSupportText(data.detail, 180);
  const ref = await writeRecoveryAudit({ event, uid: request.auth?.uid || null, profileId, detail });

  const pushable = new Set(["recovery_key_created","recovery_key_rotated","recovery_verified","login_name_viewed","password_changed","recovery_failed"]);
  if (pushable.has(event)) {
    const labels = {
      recovery_key_created:"تم إنشاء مفتاح استرداد",
      recovery_key_rotated:"تم تغيير مفتاح الاسترداد",
      recovery_verified:"تم التحقق من استرداد حساب",
      login_name_viewed:"تم استرجاع اسم دخول",
      password_changed:"تم تغيير كلمة سر بمفتاح الاسترداد",
      recovery_failed:"فشل استرداد حساب"
    };
    await pushSupportEvent(
      "🔐 " + (labels[event] || "حدث أمان"),
      profileId ? "Profile ID " + profileId : "مستخدم",
      "support-event:" + ref.id
    );
  }

  return { ok: true };
});

exports.createRecoveryKey = onCall({ cors: true }, async (request) => {
  const uid = request.auth?.uid || "";
  if (!uid) throw new HttpsError("unauthenticated", "sign-in-required");

  const userRef = db.collection("users").doc(uid);
  const secretRef = db.collection("recoverySecrets").doc(uid);
  const [userSnap, secretSnap] = await Promise.all([userRef.get(), secretRef.get()]);
  if (!userSnap.exists) throw new HttpsError("not-found", "profile-not-found");

  const profile = userSnap.data() || {};
  const oldHash = String(secretSnap.data()?.hash || profile.recoveryKeyHash || "");
  const key = generateRecoveryKey();
  const hash = hashRecoveryKey(key);
  if (!hash) throw new HttpsError("internal", "recovery-key-generation-failed");

  const lookupRef = db.collection("recoveryKeyLookup").doc(hash);
  await db.runTransaction(async (tx) => {
    const lookupSnap = await tx.get(lookupRef);
    if (lookupSnap.exists) throw new HttpsError("already-exists", "recovery-key-collision");

    tx.set(lookupRef, {
      uid,
      active: true,
      createdAt: FieldValue.serverTimestamp()
    });

    tx.set(secretRef, {
      hash,
      version: 2,
      updatedAt: FieldValue.serverTimestamp()
    }, { merge: true });

    tx.set(userRef, {
      recoveryKeyHash: FieldValue.delete(),
      recoveryKeySetAt: FieldValue.serverTimestamp(),
      recoveryKeyVersion: 2,
      updatedAt: FieldValue.serverTimestamp()
    }, { merge: true });

    if (oldHash && oldHash !== hash) {
      tx.delete(db.collection("recoveryKeyLookup").doc(oldHash));
    }
  });

  const event = oldHash ? "recovery_key_rotated" : "recovery_key_created";
  const auditRef = await writeRecoveryAudit({
    event,
    uid,
    profileId: profile.profileId || "",
    detail: oldHash ? "recovery key rotated" : "recovery key created"
  });
  await pushSupportEvent(
    oldHash ? "🔐 تم تغيير مفتاح استرداد" : "🔐 تم إنشاء مفتاح استرداد",
    /^\d{10}$/.test(String(profile.profileId || "")) ? "Profile ID " + profile.profileId : (profile.displayName || "مستخدم"),
    "support-event:" + auditRef.id
  );

  return { ok: true, key };
});

exports.verifyRecoveryKey = onCall({ cors: true }, async (request) => {
  await enforceRecoveryRateLimit(request);
  const rawKey = String(request.data?.key || "");
  const hash = hashRecoveryKey(rawKey);
  if (!hash) throw new HttpsError("invalid-argument", "invalid-recovery-key");

  const lookupSnap = await db.collection("recoveryKeyLookup").doc(hash).get();
  if (!lookupSnap.exists || lookupSnap.data()?.active === false) {
    await writeRecoveryAudit({ event: "recovery_failed", detail: "invalid recovery key" });
    throw new HttpsError("permission-denied", "invalid-recovery-key");
  }

  const uid = String(lookupSnap.data()?.uid || "");
  if (!uid) throw new HttpsError("permission-denied", "invalid-recovery-key");

  const userRef = db.collection("users").doc(uid);
  const secretRef = db.collection("recoverySecrets").doc(uid);
  const [userSnap, secretSnap] = await Promise.all([userRef.get(), secretRef.get()]);
  if (!userSnap.exists) throw new HttpsError("permission-denied", "invalid-recovery-key");

  const profile = userSnap.data() || {};
  const serverHash = String(secretSnap.data()?.hash || "");
  const legacyHash = String(profile.recoveryKeyHash || "");
  if (serverHash !== hash && legacyHash !== hash) {
    await writeRecoveryAudit({
      event: "recovery_failed",
      uid,
      profileId: profile.profileId || "",
      detail: "recovery key mismatch"
    });
    throw new HttpsError("permission-denied", "invalid-recovery-key");
  }

  // One-time migration for keys created before recoverySecrets existed.
  if (!serverHash && legacyHash === hash) {
    await db.runTransaction(async (tx) => {
      tx.set(secretRef, {
        hash,
        version: 2,
        updatedAt: FieldValue.serverTimestamp()
      }, { merge: true });
      tx.set(userRef, {
        recoveryKeyHash: FieldValue.delete(),
        recoveryKeyVersion: 2,
        updatedAt: FieldValue.serverTimestamp()
      }, { merge: true });
    });
  }

  const userRecord = await adminAuth.getUser(uid);
  const customToken = await adminAuth.createCustomToken(uid, { classoraRecovery: true });
  const canChangePassword = profile.provider === "password" || profile.role === "student";

  const auditRef = await writeRecoveryAudit({
    event: "recovery_verified",
    uid,
    profileId: profile.profileId || "",
    detail: "recovery key verified"
  });
  await pushSupportEvent(
    "🔐 تم التحقق من استرداد حساب",
    /^\d{10}$/.test(String(profile.profileId || "")) ? "Profile ID " + profile.profileId : (profile.displayName || "مستخدم"),
    "support-event:" + auditRef.id
  );

  return {
    ok: true,
    customToken,
    profile: {
      displayName: cleanSupportText(profile.displayName || userRecord.displayName || "", 80),
      loginName: cleanSupportText(profile.loginName || profile.originalLoginName || profile.displayName || userRecord.email || "", 100),
      profileId: /^\d{10}$/.test(String(profile.profileId || "")) ? String(profile.profileId) : "",
      role: profile.role === "teacher" ? "teacher" : "student",
      provider: cleanSupportText(profile.provider || "", 30)
    },
    canChangePassword
  };
});


exports.getSupportCenter = onCall({ cors: true }, async (request) => {
  await requireSuperAdmin(request);

  const [ticketsSnap, auditSnap] = await Promise.all([
    db.collection("supportTickets").orderBy("createdAt", "desc").limit(200).get(),
    db.collection("supportAudit").orderBy("createdAt", "desc").limit(200).get()
  ]);

  return {
    tickets: ticketsSnap.docs.map(serializeSupportDoc),
    audit: auditSnap.docs.map(serializeSupportDoc)
  };
});

exports.updateSupportTicket = onCall({ cors: true }, async (request) => {
  const adminUid = await requireSuperAdmin(request);
  const ticketId = String(request.data?.ticketId || "").trim();
  const status = String(request.data?.status || "").trim();
  if (!/^[A-Za-z0-9_-]{10,80}$/.test(ticketId)) throw new HttpsError("invalid-argument", "bad-ticket-id");
  if (!new Set(["open","working","resolved"]).has(status)) throw new HttpsError("invalid-argument", "bad-status");

  const ref = db.collection("supportTickets").doc(ticketId);
  const snap = await ref.get();
  if (!snap.exists) throw new HttpsError("not-found", "ticket-not-found");

  await ref.update({
    status,
    handledBy: adminUid,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection("supportAudit").add({
    event: "ticket_status",
    ticketId,
    userUid: adminUid,
    profileId: SUPER_ADMIN_PROFILE_ID,
    detail: status,
    createdAt: FieldValue.serverTimestamp()
  });

  return { ok: true };
});
