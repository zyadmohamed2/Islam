'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3832e3ed9229aee75445dc14ef4f554d",
"assets/AssetManifest.bin.json": "0ccb0538136812a47b06189966999526",
"assets/AssetManifest.json": "e9519263d50e1dae4c3c6773694a1153",
"assets/assets/address.svg": "6087c152613f26dbcd8ce93c3d398f1f",
"assets/assets/background_image.jpg": "a3cf58b5ea3660bfdc5fce64ac1888c4",
"assets/assets/call.svg": "6930a2fdfdca5dfbae24c2c8756f6501",
"assets/assets/Contact.svg": "237c7beded61f4d2b22eab6ea9dcbf7f",
"assets/assets/email.svg": "17904fee00dd6de75e3d14442f14d6eb",
"assets/assets/eslam_image.png": "f285ed2b2d437e8fbae506b7d779724f",
"assets/assets/facebook.png": "34f90f21d3e383f6d3a96c1c4c79eb42",
"assets/assets/facebook.svg": "95c2e3a334dc3d94743fa9144de99f3b",
"assets/assets/flutter.svg": "2b566dff182eca9ede4045c32bb91bda",
"assets/assets/follow_me_on.png": "7e379b8435e242baad1d6c921d37aa1c",
"assets/assets/insta.svg": "d0268bdb740f572546196577897978a1",
"assets/assets/linked.svg": "69ab25c4f2028503a3c03725ee70bc91",
"assets/assets/my_image.png": "d1efc08e65bb5d67cbf6e0a5f2291d6a",
"assets/assets/portfolio_image.svg": "1118e84aced0205e11d44df39f310dcc",
"assets/assets/welcome_image.png": "be3d446d00091fd9a4784b1dcb7ed2c8",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.34.38_e53c3956.jpg": "bec62eaebeada79feaa84b627587c623",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.41.11_0698bbcd.jpg": "20dfb2dcece7e7481ac88ad435dbb601",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.41.57_297205a5.jpg": "075895164df8dcedb975fa78a4c98765",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.44.38_2d6c9e6d.jpg": "21c42382cf13ab609858a68848a867ff",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.45.21_a9e21c9c.jpg": "0b2962d06c16f4c7a8e8311820a60f08",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.45.42_4fe88cb9.jpg": "5e503b5d9ba54b34733de606bc3eb778",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.47.57_c99a48eb.jpg": "9a8a47770d1d5631d0e16ebfe5b24a22",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.47.58_0340146e.jpg": "e59f9edf70259ba8ea2c901937ad9877",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.47.58_162bb718.jpg": "443ae3e2c70f8e44bc088d4c36eee7dd",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.47.58_37a89253.jpg": "78351d194e0afc4c0b555eb4eddf15dc",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.48.23_0c302bf1.jpg": "0db7d6d8c4536292d7286624944fba76",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.49.06_41cdf8e4.jpg": "c093d80183744cc4c362207000a8e0c7",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.49.16_48a962b6.jpg": "cccc697eae86c6dcd737c27da099d6e8",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.49.35_8e7ce542.jpg": "93cf3437fa737f267b41f6d678a25263",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.49.41_f75322d0.jpg": "6b9e0894d0b90b5cdafd8cb02784f93f",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.49.45_eef455ef.jpg": "b1b9cde1e409cdfd9b0ff4aae3a82d69",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.50.20_426dbce4.jpg": "15032ea85c3cf7be18b8cc72f607d663",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.51.33_cb30af90.jpg": "0a9c11ce1eaebf05b75a9ea3dc618323",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.51.42_f17aa977.jpg": "70ace4f79d2479cb53c72f112a4055fb",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.52.49_ef13f6f0.jpg": "78aa0e0d5ca13fab7e6b5bc0672b3f63",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.53.01_f9e3e4b4.jpg": "87718930396f5bc67d9672af9917211a",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252001.54.00_3f4d9eb6.jpg": "9b60f4f2b10f166b709bcee8cc33a220",
"assets/assets/WhatsApp%2520Image%25202024-12-09%2520at%252002.00.31_5025a45a.jpg": "6ee9af8b0927b16c659c669d72ac4c87",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "0fea1e64456472f86fa0f47391e2835d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "35952828dd684ce5c598f9534408f1d0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "24dfd3187592b956dacec4a4517a19c4",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
