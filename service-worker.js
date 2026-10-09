const CACHE_NAME="classora-v107-0-learning-experience";
const APP_SHELL=[
  "./assets/classora-learning-phase4.css?v=1",
  "./assets/classora-learning-phase4.js?v=1",
  "./assets/classora-teacher-dashboard.css?v=1",
  "./assets/classora-teacher-dashboard.js?v=1",
  "./assets/classora-student-dashboard.css?v=1",
  "./assets/classora-student-dashboard.js?v=1",
  "./assets/classora-global-mix.css?v=1",
  "./assets/classora-global-mix.js?v=1",
  "./assets/subject-labs.js?v=103",
  "./assets/subject-labs.css?v=99",
  "./assets/return-navigation.js?v=92",
  "./assets/learning-plus.js?v=92",
  "./assets/learning-plus.css?v=92",
  "./assets/learning-content.js?v=92",
  "./assets/learning-store.js?v=92",
  "./assets/ph-lab.js?v=92",
  "./assets/learning-hub.js?v=110",
  "./assets/learning-hub.css?v=99",
  "./assets/curriculum-v97.js?v=110",
  "./assets/curriculum-v97.css?v=110",
  "./offline.html",

  "./assets/chat-doodles.svg",
  "./manifest.webmanifest",
  "./privacy.html",
  "./support.html",
  "./chemistry/periodic-table.html",
  "./chemistry/periodic-table.css?v=100.2",
  "./chemistry/periodic-table.js?v=100.3",
  "./icons/favicon-32.png",
  "./icons/classora-180.png",
  "./icons/classora-192.png",
  "./icons/classora-512.png",
  "./icons/classora-maskable-512.png"
];

self.addEventListener("install",event=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>cache.addAll(APP_SHELL))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k.startsWith("classora-")&&k!==CACHE_NAME).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;

  const url=new URL(event.request.url);
  if(url.origin===self.location.origin&&(url.pathname.endsWith("/release.json")||url.pathname.endsWith("/service-worker.js")))return;

  const sameOrigin=url.origin===self.location.origin;
  const publicNavigation=sameOrigin&&(url.pathname==='/'||/\/(index|offline|periodic-table)\.html$/.test(url.pathname));
  const staticAsset=sameOrigin&&/\.(js|css|svg|png|jpg|jpeg|webp|webmanifest)$/.test(url.pathname);
  const publicCDN=(url.hostname==='www.gstatic.com'&&url.pathname.startsWith('/firebasejs/'))||(url.hostname==='cdn.jsdelivr.net'&&/\.(js|css)$/.test(url.pathname))||(url.hostname==='unpkg.com'&&/\.js$/.test(url.pathname));
  if(!publicNavigation&&!staticAsset&&!publicCDN)return;
  if(event.request.mode==="navigate"){
    event.respondWith(
      fetch(event.request,{cache:"no-store"})
        .then(response=>{
          if(response&&response.ok){
            const copy=response.clone();
            caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));
          }
          return response;
        })
        .catch(()=>caches.match("./offline.html"))
    );
    return;
  }

  if(url.origin===self.location.origin){
    event.respondWith(
      caches.match(event.request).then(cached=>{
        if(cached)return cached;
        return fetch(event.request).then(response=>{
          if(response&&response.ok){
            const copy=response.clone();
            caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));
          }
          return response;
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached=>{
      if(cached)return cached;
      return fetch(event.request).then(response=>{
        if(response&&response.ok){
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));
        }
        return response;
      });
    })
  );
});


self.addEventListener("notificationclick",event=>{
  event.notification.close();
  const target=event.notification?.data?.url||"./";
  event.waitUntil(
    clients.matchAll({type:"window",includeUncontrolled:true}).then(list=>{
      for(const client of list){
        if("focus" in client){
          try{client.navigate(target)}catch{}
          return client.focus();
        }
      }
      return clients.openWindow?clients.openWindow(target):undefined;
    })
  );
});


/* Firebase Cloud Messaging background handler.
   Keep notificationclick above these imports so our click behavior wins. */
try {
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAj97oo6iQ9mK0Va6gYivsvnicN14LUYN0",
  authDomain: "pythagorasi-school.firebaseapp.com",
  projectId: "pythagorasi-school",
  storageBucket: "pythagorasi-school.firebasestorage.app",
  messagingSenderId: "349960442962",
  appId: "1:349960442962:web:53d13a319dfdc096187b8b",
  measurementId: "G-PFBVKDZ7CP"
});

const classoraMessaging=firebase.messaging();
classoraMessaging.onBackgroundMessage(payload=>{
  /* Notification payloads are displayed by FCM automatically.
     This branch handles data-only messages if we use them later. */
  if(payload?.notification)return;
  const data=payload?.data||{};
  const title=data.title||"Classora";
  const options={
    body:data.body||"",
    icon:data.icon||"./icons/classora-192.png",
    badge:data.badge||"./icons/favicon-64.png",
    tag:data.eventKey||undefined,
    data:{url:data.url||"./",type:data.type||"general"}
  };
  return self.registration.showNotification(title,options);
});

} catch(error) { console.warn("Optional push messaging unavailable",error?.message); }

