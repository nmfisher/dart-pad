'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "94ac0e93769144346efd2c6aa9c1f542",
"version.json": "54469e01ea57b5469fd480b88fa85573",
"thermion_dart.wasm": "cba831a1610b9ba53eb534de7d9accc6",
"codemirror/codemirror.js": "60ce926a3813af7556c2af436dc28c1d",
"codemirror/LICENSE": "d935e58dfcf97600708f61e6da346b61",
"codemirror/css/codemirror.css": "05d0504a0124d330548b08ce840c7821",
"codemirror/codemirror.css": "a416d3257f5ca8dae10ad890495a7865",
"index.html": "0df42a7fa66171ebfd8d5dc5f3a5c64f",
"/": "0df42a7fa66171ebfd8d5dc5f3a5c64f",
"default_env_ibl.ktx": "6475e972f841e604f89172286e39541d",
"example_js.mjs": "f598f3e51463c7ddc635c94ab3b8161f",
"embed_demo.html": "95c714e7845def6d5b6a8bd20971c07f",
"frame.html": "af5370ee1ca09ee3ce371499ef1b7dea",
"main.dart.js": "7c1af1f5026507e08fc775c6486bf0dd",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"frame/index.html": "af5370ee1ca09ee3ce371499ef1b7dea",
"frame/assets/AssetManifest.json": "fdcbd96a960a29b691d052a98cf3e4d5",
"frame/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"frame/assets/AssetManifest.bin.json": "b352cad213979a84215e890303515519",
"frame/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"frame/assets/AssetManifest.bin": "7371cc65a07d6c16f896f62f6c5bddf3",
"frame/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"styles/cm-dartpad-light.css": "6a94f3eb3e9e7166eef8276779ac98c7",
"styles/cm-dartpad-dark.css": "2a72a54d7e4bf68f66ded1d639aba80f",
"require.js": "1565af44b896bc4c641f238fd800fc83",
"favicon.png": "c3ce0cac0f74c34597ce4275b2f9f4e4",
"default_env_skybox.ktx": "0a18669a268c07b60a5ee183433574b2",
"cube.glb": "6bc56e0b1e4db890d0865ecfa0078d9b",
"icons/Icon-192.png": "56f4de7eb9e876f9d70dc2d527531991",
"icons/Icon-maskable-192.png": "9dec69d424d0bf8be2a6fd90d9d156b2",
"icons/Icon-maskable-512.png": "6b35299d4fc50fcebb73eb932c4602df",
"icons/Icon-512.png": "4ee3f1d738227093fc70d663f91e5892",
"manifest.json": "36b3d9b6e98ac3d26b1292c6a261ea72",
"functions/_middleware.ts": "d1cefbf86ab0e697d31d736110ae8faf",
"example_js.wasm": "3db91798e0fe477262c1bbaa0901fd1f",
"thermion_dart.js": "4a2503aecd5eec83d9ef6766b3b9a37f",
"assets/AssetManifest.json": "61e66cbd027a38f94499bad781589454",
"assets/NOTICES": "39e9dcb4e271fd4ddf133d715c8ee20e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "324a2c0c081209991938d8d5489a5327",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "185aa9fd0bd703cc6eca129a123bc40d",
"assets/fonts/MaterialIcons-Regular.otf": "94d5160269de4095b353791b80163314",
"assets/assets/dart_logo_192.png": "56f4de7eb9e876f9d70dc2d527531991",
"assets/assets/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/assets/idx_192.png": "3afcb9374a4dd2aad111ce701778ca4e",
"assets/assets/flutter_logo_192.png": "6ba940675e2cd74bde86ba0bd4201309",
"assets/assets/flame_logo_192.png": "3e135d2716e2995472b9a7152023e663",
"assets/assets/gemini_sparkle_192.png": "fc4f1c3c914caf4c789fa7c800b3b11d",
"assets/assets/RobotoMono-Bold.ttf": "90190d91283189e340b2a44fe560f2cd",
"frame.js": "508255e078f3564c7f6c6c7904c62e9a",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "01f22f771e3a26a0d4b52b9ff78f82fc",
"canvaskit/canvaskit.js.symbols": "b027543b0c3f04ccbaa35ef4ec4b7df2",
"canvaskit/skwasm.wasm": "12cfa3089889ae9083809153e5193838",
"canvaskit/chromium/canvaskit.js.symbols": "d8b07e2dc7fe884aec96aebff78e2875",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "216cb8b9d8c5d367cb581089fe21cf07",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1060ba96b9ea7173ab9af029e52b1018",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
