# About Scramjet STATIC


Scramjet STATIC is a fully static, browser-based web proxy built on top of [Scramjet](https://github.com/MercuryWorkshop/scramjet) — MercuryWorkshop's interception-based proxy engine. There is no backend server required to run the proxy itself. Everything runs client-side: a service worker intercepts and rewrites requests, and traffic is tunneled out through a [Wisp](https://github.com/MercuryWorkshop/wisp-protocol) server using your choice of transport.

Because there's no server-side component beyond static file hosting, this entire site can be deployed for free on GitHub Pages, Cloudflare Pages, Netlify, or any static host in minutes.

## How It Works

When you enter a URL, the page loads it inside a sandboxed iframe. A registered service worker intercepts every request made by that iframe, rewrites it through Scramjet's engine, and forwards it out over a WebSocket connection to a Wisp server. The Wisp server relays the request to the real destination and streams the response back. From the outside, your browser only ever talks to this site's own origin — the proxying happens entirely underneath that.

The outer page (the search bar, home screen, and floating controls) never reloads or navigates away while you browse. It stays alive for your whole session, which means the proxy connection, service worker, and any custom settings stay active the entire time — including across in-site link clicks and history navigation.

## Features

- **Iframe-based browsing** with a persistent home screen and floating navigation controls (reload, home)
- **Native browser back button support** — navigate back through sites you've visited without leaving the proxy
- **Custom Wisp server** — set your own Wisp server URL directly from the home screen, no redeployment needed
- **Two transport methods** — switch between `libcurl` (default) and `epoxy` transports live, without reloading the page
- **DuckDuckGo search integration** — typing anything that isn't a URL runs a DuckDuckGo search automatically
- **Visual loading indicator** — a slim progress bar shows page load activity
- **Persistent settings** — your Wisp server and transport choice are remembered across sessions using local storage

## What Is a Wisp Server?

A Wisp server is a small relay that speaks the [Wisp protocol](https://github.com/MercuryWorkshop/wisp-protocol) — it accepts a WebSocket connection from your browser and forwards raw TCP/UDP traffic to real websites on your behalf. This site ships with a working default Wisp server, but you can point it at your own self-hosted Wisp server at any time from the settings panel on the home screen. Your choice is saved locally and reused every time you visit.

## What Is a Transport?

The transport is the client-side library responsible for actually establishing and managing the connection to your Wisp server. Scramjet STATIC supports two:

- **libcurl** — the default and generally recommended option, offering broad compatibility.
- **epoxy** — an alternative transport implementing end-to-end encryption via `epoxy-tls`, useful as an alternative when you want to compare performance or compatibility with a specific Wisp server.

Both transports connect to the exact same Wisp server you've configured — switching between them doesn't require re-entering your server URL.

## Deploying Your Own Copy

Because this is entirely static, deploying your own instance is as simple as forking the repository and enabling GitHub Pages (or uploading the files to any static host). No build step, no server setup, no database. Everything needed to run the proxy — the Scramjet engine, bare-mux transport layer, and both transport modules — ships directly in the repository.

## Credits

Built on Scramjet (https://github.com/MercuryWorkshop/scramjet), bare-mux (https://github.com/MercuryWorkshop/bare-mux), libcurl-transport (https://github.com/MercuryWorkshop/libcurl-transport), and epoxy-transport (https://github.com/MercuryWorkshop/epoxy-transport), all developed by MercuryWorkshop (https://github.com/MercuryWorkshop).

this content is up to date as of july 10 2026 DO NOT re-distibute or trust this information if out-dated.
all open-source services are used under accaptable and law-binding copyright and lisences, Scramjet-static is lisenced under the APGL 3.0 public lisence, for lisence info vist /LICENSE on this web domain.
for more information, please vist dmca.com
