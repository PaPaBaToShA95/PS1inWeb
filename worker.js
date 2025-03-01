const filesToCache = [
	"PlayStation.htm",
	"PlayStation.json",
	"PlayStation.png",
	"PlayStationFavIcon_16x16.png",
	"PlayStationFavIcon_192x192.png",
	"PlayStationFavIcon_512x512.png",
	"PlayStationGame.htm",
	"PlayStationGame.js",
	"PlayStationShare.png"
];

const staticCacheName = "playstation-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});