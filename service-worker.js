const CACHE_NAME="classora-v266-spacious-panels";
const APP_SHELL=[
  "./assets/classora-basic-conversation-v254.js?v=254",
  "./assets/classora-premium-v243.css?v=247",
  "./assets/classora-math-tutor-v247.js?v=249",
  "./assets/classora-study-assistant-v124.js?v=249",
  "./assets/classora-ui-refine-v248.css?v=249",
  "./assets/classora-ai-prompts-v248.js?v=249",
  "./assets/classora-chat-workspace-v250.js?v=266",
  "./assets/classora-workspace-v250.css?v=260",
  "./assets/classora-premium-v243.js?v=243",
  "./assets/classora-premium-i18n-v243.js?v=243",
  "./assets/classora-owner-cancel-v240.js?v=240",
  "./assets/classora-settings-polish-v241.js?v=242",
  "./assets/classora-settings-polish-v241.css?v=242",
  "./assets/classora-memberships-polish-v241.css?v=241",
  "./assets/classora-member-hub-v239.js?v=265",
  "./assets/classora-device-sessions-v239.js?v=239",
  "./assets/classora-memberships-features-v174.js?v=239",
  "./assets/classora-mobile-membership-v238.css?v=240",
  "./assets/classora-member-space-v238.js?v=265",
  "./assets/classora-membership-access-v238.js?v=238",
  "./assets/classora-member-words-v238.js?v=238",

  "./assets/classora-style-v237.css?v=237",
  "./assets/classora-style-i18n-v237.js?v=238",
  "./assets/classora-profile-scenes-v237.js?v=237",
  "./assets/classora-quest-i18n-v233.js?v=235",
  "./assets/classora-profile-studio-v232.js?v=237",
  "./assets/classora-polish-v232.css?v=236",
 "./assets/classora-fx-settings-v228.css?v=229",
 "./assets/classora-fx-settings-v228.js?v=237",
  "./assets/classora-arena-shop-v227.js?v=238",
  "./assets/classora-arena-shop-v227.css?v=229",
  "./assets/classora-quest-map-v223.css?v=231",
  "./assets/classora-quest-map-v223.js?v=238",
  "./assets/classora-learning-boost-v215.css?v=221",
  "./assets/classora-learning-boost-v215.js?v=222",
  "./assets/classora-learning-front-v214.css?v=214",
  "./assets/classora-learning-front-v214.js?v=251",
  "./assets/math-worksheet-v213.js?v=213",
  "./assets/classora-layout-restore-v260.css?v=260",
  "./assets/classora-dock-labels-v261.css?v=261",
  "./assets/classora-lobby-v262.css?v=262",
  "./assets/classora-membership-ultra-v262.css?v=262",
  "./assets/classora-memberships-v169.js?v=262",
  "./assets/classora-emerald-luxury-v263.css?v=263",
  "./assets/classora-membership-emerald-v263.css?v=263",
  "./assets/classora-morning-v264.css?v=264",
  "./assets/classora-morning-panels-v264.css?v=264",
  "./assets/classora-contrast-finish-v265.css?v=265",
  "./assets/classora-spacious-ui-v266.css?v=266",
  "./index.html",
  "./chemistry/periodic-table.html?v=205",
  "./chemistry/periodic-table.js?v=205",
  "./assets/classora-chat-memberships-v169.css?v=186",
  "./assets/classora-memberships-nav-v169.js?v=263",
  "./subscriptions.html",
  "./assets/classora-membership-luxe-v182.js?v=238",
  "./assets/classora-membership-luxe-v182.css?v=182",
  "./assets/classora-admin-memberships-v181.js?v=240",
  "./assets/classora-admin-activity-v184.js?v=184",
  "./assets/classora-admin-memberships-v181.css?v=181",
  "./status.html",
  "./assets/classora-dock-stable-v140.css?v=140",
  "./assets/classora-locales-v140.css?v=140",
  "./assets/classora-locales-v140.js?v=166",
  "./assets/classora-responsive-v131.css?v=138",
  "./assets/learning-offline-v130.js?v=131",
  "./assets/learning-home-v130.js?v=131",
  "./assets/learning-tools-v130.css?v=130",
  "./assets/lesson-model-api-v130.js?v=130",
  "./assets/learning-feedback-v130.js?v=130",
  "./assets/learning-search-v130.js?v=130",
  "./assets/learning-memory-v130.js?v=130",
  "./assets/study-offline-v130.js?v=161",
  "./assets/learning-knowledge-v130.js?v=130",
  "./assets/learning-tools-v130.js?v=130",
  "./study-offline.html",

  "./assets/geography-globe-v129.js?v=130",
  "./assets/lesson-workbench-v129.js?v=129",
  "./assets/lesson-explorer-v129.js?v=130",
  "./assets/language-models-v129.js?v=129",
  "./assets/lesson-explorer-v129.css?v=129",

  "./assets/geography-catalog-v128.js?v=128",
  "./assets/geography-scenes-v128.js?v=128",
  "./assets/geography-studio-v128.js?v=130",
  "./assets/arabic-scenes-v128.js?v=128",
  "./assets/science-scenes-v128.js?v=130",
  "./assets/lesson-scenes-v128.css?v=128",

  "./assets/english-catalog-v127.js?v=127",
  "./assets/english-studio-v127.js?v=130",
  "./assets/history-catalog-v127.js?v=127",
  "./assets/history-studio-v127.js?v=130",
  "./assets/humanities-practice-v127.js?v=130",
  "./assets/humanities-studio-v127.css?v=127",

  "./assets/math-catalog-v119.js?v=213",
  "./assets/math-scenes-v119.js?v=119",
  "./assets/math-studio-v119.js?v=213",
  "./assets/math-calculator-v119.js?v=119",
  "./assets/classora-calculator-v120.js?v=131",
  "./assets/classora-topic-art-v120.js?v=121",
  "./assets/classora-visuals-v120.css?v=120",
  "./assets/classora-assessment-v121.js?v=214",
  "./assets/classora-assessment-levels-v152.js?v=152",
  "./assets/classora-science-bank-v152.js?v=152",
  "./assets/classora-assessment-v121.css?v=121",
  "./assets/classora-refinement-v122.css?v=122.2",
  "./assets/classora-navigation-fix-v123.css?v=128",
  "./assets/classora-competition-topics-v122.js?v=161",
  "./assets/classora-global-art-v121.js?v=243",
  "./assets/classora-appearance-v207.js?v=243",
  "./assets/classora-periodic-lobby-v205.js?v=205",
  "./assets/classora-appearance-v203.css?v=203",
  "./assets/classora-appearance-v207.css?v=243",
  "./assets/classora-western-digits-v203.js?v=203",
  "./assets/classora-theme-bridge-v207.js?v=243",
  "./assets/arabic-catalog-v119.js?v=119",
  "./assets/arabic-studio-v119.js?v=130",
  "./assets/math-studio-v119.css?v=119",
  "./assets/classora-inline-core-v118.css?v=1",
  "./assets/classora-inline-late-v118.css?v=1",
  "./assets/classora-v117.css?v=1",
  "./assets/classora-guided-tour-v117.js?v=1",
  "./assets/classora-entrance-v116.css?v=1",
  "./assets/classora-entrance-v116.js?v=2",
  "./assets/classora-universal-dock-v113.css?v=2",
  "./assets/classora-universal-dock-v113.js?v=212",
  "./assets/classora-home-v112.css?v=2",
  "./assets/classora-home-v112.js?v=243",
  "./assets/classora-universal-dock-v111.css?v=1",
  "./assets/classora-universal-dock-v111.js?v=1",
  "./assets/classora-polish-v110.css?v=1",
  "./assets/classora-polish-v110.js?v=1",
  "./assets/classora-chat-settings-v109.css?v=2",
  "./assets/classora-mobile-tablet-v108.css?v=1",
  "./assets/classora-mobile-tablet-v108.js?v=1",
  "./assets/classora-learning-phase4.css?v=1",
  "./assets/classora-learning-phase4.js?v=1",
  "./assets/classora-teacher-dashboard.css?v=1",
  "./assets/classora-teacher-dashboard.js?v=166",
  "./assets/classora-student-dashboard.css?v=1",
  "./assets/classora-student-dashboard.js?v=166",
  "./assets/classora-global-mix.css?v=1",
  "./assets/classora-global-mix.js?v=166",
  "./assets/subject-labs.js?v=131",
  "./assets/subject-labs.css?v=99",
  "./assets/return-navigation.js?v=92",
  "./assets/learning-plus.js?v=159",
  "./assets/learning-plus.css?v=126",
  "./assets/learning-content.js?v=92",
  "./assets/learning-store.js?v=92",
  "./assets/ph-lab.js?v=92",
  "./assets/learning-hub.js?v=190",
  "./assets/learning-hub.css?v=99",
  "./assets/curriculum-v97.js?v=213",
  "./assets/curriculum-v97.css?v=110",
  "./offline.html",

  "./assets/chat-doodles.svg",
  "./manifest.webmanifest",
  "./privacy.html",
  "./terms.html",
  "./assets/classora-legal-v124.css?v=166",
  "./assets/classora-legal-v124.js?v=238",
  "./assets/classora-mobile-v208.css?v=211",
  "./assets/classora-viewport-v210.js?v=211",
  "./assets/classora-legal-translations-v164.js?v=165",
  "./assets/classora-study-assistant-v124.js?v=137",
  "./assets/classora-assistant-motion-v134.js?v=139",
  "./assets/classora-assistant-motion-v134.css?v=134",
  "./support.html",
  "./privacy.html",
  "./terms.html",
  "./chemistry/periodic-table.html?v=205",
  "./chemistry/periodic-table.css?v=124",
  "./chemistry/periodic-table.js?v=205",
  "./icons/favicon-32.png",
  "./icons/classora-180.png",
  "./icons/classora-192.png",
  "./icons/classora-512.png",
  "./icons/classora-maskable-512.png"
];

self.addEventListener("install",event=>{
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache=>{
      // Cache the dark, complete app document as the first priority for A2HS starts.
      await cache.add(new Request("./index.html",{cache:"reload"}));
      // A missing optional asset must not abort the whole offline shell installation.
      const BOOT_SHELL=[
        "./offline.html",
        "./status.html",
        "./recovery.html",
        "./manifest.webmanifest",
        "./assets/classora-dock-stable-v140.css?v=140",
        "./assets/classora-locales-v140.css?v=140",
        "./assets/classora-locales-v140.js?v=159"
      ];
      // Prevent large parallel precache requests from stalling mobile startup.
      // Lesson assets are cached when requested instead.
      await Promise.allSettled(BOOT_SHELL.map(url=>cache.add(new Request(url,{cache:"reload"}))));
    }).then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k.startsWith("classora-")&&!k.startsWith("classora-study-units-")&&k!==CACHE_NAME).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;

  const url=new URL(event.request.url);
  if(url.origin===self.location.origin&&(url.pathname.endsWith("/release.json")||url.pathname.endsWith("/service-worker.js")))return;

  const sameOrigin=url.origin===self.location.origin;
  const publicNavigation=sameOrigin&&(url.pathname==='/'||/\/(index|offline|study-offline|periodic-table)\.html$/.test(url.pathname));
  const staticAsset=sameOrigin&&/\.(js|css|svg|png|jpg|jpeg|webp|webmanifest)$/.test(url.pathname);
  const publicCDN=(url.hostname==='www.gstatic.com'&&url.pathname.startsWith('/firebasejs/'))||(url.hostname==='cdn.jsdelivr.net'&&/\.(js|css)$/.test(url.pathname))||(url.hostname==='unpkg.com'&&/\.js$/.test(url.pathname));
  if(!publicNavigation&&!staticAsset&&!publicCDN)return;
  if(sameOrigin&&url.pathname.endsWith('/study-offline.html')){event.respondWith(fetch(event.request).catch(()=>caches.match('./study-offline.html')));return;}
  if(event.request.mode==="navigate"){
    // Network-first for the app entrance. A cache-first index.html can trap
    // installed iPhone/Android PWAs on a broken old build even after deploy.
    if(sameOrigin&&(url.pathname==="/"||/\/index\.html$/.test(url.pathname))){
      event.respondWith((async()=>{
        const controller=new AbortController();
        const timeout=setTimeout(()=>controller.abort(),6500);
        try{
          const response=await fetch(event.request,{cache:"no-store",signal:controller.signal});
          if(response&&response.ok){
            const copy=response.clone();
            caches.open(CACHE_NAME).then(cache=>cache.put("./index.html",copy)).catch(()=>{});
            return response;
          }
          const cached=await caches.match("./index.html");
          return cached||response;
        }catch{
          return (await caches.match("./index.html"))||(await caches.match("./offline.html"))||Response.error();
        }finally{clearTimeout(timeout)}
      })());
      return;
    }
    event.respondWith(
      fetch(event.request,{cache:"no-store"}).then(response=>{
        if(response&&response.ok){
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));
        }
        return response;
      }).catch(()=>caches.match("./offline.html"))
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



