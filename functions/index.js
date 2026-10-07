const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");

initializeApp();

const db = getFirestore();
const messaging = getMessaging();

const APP_URL = "https://classora.study/";
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
      const language = data?.accountState?.preferences?.language || data?.preferences?.language || "en";
      tokenOwners.set(token, { uid: snap.id, language: language === "ar" ? "ar" : "en" });
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

  const localize = (value, language) => {
    if (value && typeof value === "object") return String(value[language] || value.en || value.ar || "");
    return String(value || "");
  };

  for (const language of ["en", "ar"]) {
    const languageTokens = tokens.filter((token) => tokenOwners.get(token)?.language === language);
    for (const tokenChunk of chunks(languageTokens, 500)) {
      const title = localize(payload.title, language) || "Classora";
      const body = localize(payload.body, language);
      const response = await messaging.sendEachForMulticast({
        tokens: tokenChunk,
        notification: { title, body },
        data: {
          type: payload.type || "general",
          eventKey: payload.eventKey || "",
          title,
          body,
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
          const uid = tokenOwners.get(token)?.uid;
          if (!uid) return;
          if (!invalidByUid.has(uid)) invalidByUid.set(uid, []);
          invalidByUid.get(uid).push(token);
        }
      });
    }
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
    const className = classSnap.exists ? (classSnap.data()?.name || "Class") : "Class";
    const uids = await classMemberIds(classId);

    const assignmentTitle = data.title || "";
    const body = {
      en: (assignmentTitle || "New assignment") + (data.dueDate ? " • Due " + data.dueDate : "") + " • " + className,
      ar: (assignmentTitle || "وظيفة جديدة") + (data.dueDate ? " • التسليم " + data.dueDate : "") + " • " + className
    };

    return sendToUsers(uids, {
      type: "assignment",
      eventKey: "assignment:" + classId + ":" + assignmentId,
      title: { en: "📝 New assignment", ar: "📝 وظيفة جديدة" },
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
    const examTitle = data.title || "";
    const body = {
      en: (examTitle || "New exam") + (data.code ? " • Code " + data.code : ""),
      ar: (examTitle || "امتحان جديد") + (data.code ? " • الكود " + data.code : "")
    };

    return sendToUsers(uids, {
      type: "exam",
      eventKey: "exam:" + event.params.examId,
      title: { en: "🎓 New exam", ar: "🎓 امتحان جديد" },
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
    const competitionTitle = data.title || "";
    const body = {
      en: (competitionTitle || "Classora competition") + (data.code ? " • Code " + data.code : ""),
      ar: (competitionTitle || "مسابقة Classora") + (data.code ? " • الكود " + data.code : "")
    };

    return sendToUsers(uids, {
      type: "competition",
      eventKey: "competition:" + event.params.competitionId,
      title: { en: "🏆 New competition", ar: "🏆 مسابقة جديدة" },
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

    const studentName = member.displayName || "Student";
    const className = classData.name || "Class";

    return sendToUsers([...teacherIds], {
      type: "classJoin",
      eventKey: "classJoin:" + classId + ":" + memberId,
      title: { en: "👤 Student joined your class", ar: "👤 طالب دخل صفك" },
      body: { en: studentName + " • " + className, ar: studentName + " • " + className }
    });
  }
);

Object.assign(exports, require('./support-admin'));
