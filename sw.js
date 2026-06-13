// Scramjet STATIC — Service Worker
// Engine: Scramjet v1.1.0 (MercuryWorkshop official release)
// Transport: libcurl over wss://anura.pro/wisp/

// scramjet.all.js is a plain IIFE — safe for importScripts (no ES module exports)
// scramjet.bundle.js cannot be used here (has export statements, breaks importScripts)
importScripts('./scramjet-engine/scramjet-all.js')

const { ScramjetServiceWorker } = $scramjetLoadWorker()
const scramjet = new ScramjetServiceWorker()

self.addEventListener('install', () => {
  // Take over immediately without waiting for old SW to die
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  // Claim all open clients immediately so config message lands correctly
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  // loadConfig() inside scramjet.fetch() has a "if (this.config) return" guard —
  // it only hits IDB on the very first request, then stays cached in memory.
  // route() needs this.config to exist — so we must ensure config is loaded first.
  // We wrap in respondWith so the browser knows we're handling it.

  event.respondWith((async () => {
    // Load config if not yet received from controller (IDB fallback)
    if (!scramjet.config) {
      await scramjet.loadConfig()
    }

    // If still no config (very first ever load before controller init'd IDB),
    // fall through to network — don't crash the SW
    if (!scramjet.config) {
      return fetch(event.request).catch(() =>
        new Response('Scramjet not ready yet — please reload the page.', {
          status: 503,
          headers: { 'Content-Type': 'text/plain' },
        })
      )
    }

    // route() checks if this request URL starts with origin + prefix
    // It also matches wasm/config file requests scramjet needs internally
    if (!scramjet.route(event)) {
      return fetch(event.request).catch(() =>
        new Response('Network error', { status: 503 })
      )
    }

    // Hand off to scramjet — it decodes the URL, fetches via libcurl, rewrites response
    return scramjet.fetch(event)
  })())
})
    
