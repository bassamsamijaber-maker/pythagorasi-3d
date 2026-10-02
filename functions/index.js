const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");

initializeApp();

const db = getFirestore();
const messaging = getMessaging();

const APP_URL = "https://bassamsamijaber-maker.github.io/pythagorasi-3d/";
const ICON_URL = APP_URL + "icons/classora-192.png";
const BADGE_URL = APP_URL + "icons/favicon-64.png";

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
