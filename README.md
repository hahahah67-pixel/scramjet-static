# SCRAMJET - STATIC

### Build 2.0 (NEWEST PROGRAM VERSION/BUILD LANCHED JULY 12 '26 )
**Created & Maintained by:** hahahah67-pixel
  ORIGINAL scramjet-static public program creation date:
June 11, 2026 (6/11/26)

---
align="center"><img src="https://raw.githubusercontent.com/hahahah67-pixel/scramjet-static-demo-build/main/transport/scramjett.png" height="200"></p>

## 🚀 About the Project

This is a static build of the **Scramjet** internet proxy, originally developed by **MercuryWorkshop**. This deployment is powered by a public WISP libcurl URL provided by **aura.pro**. 

This static variant is built on Scramjet version 1.10 and utilizes the core engine components directly from the official Scramjet Example-App, allowing it to remain entirely static. This is meant to be a static SJ engine meant for public deployment and use, if you like this project please use it yourself in public deployment.

---

## 🤝 Credits & Acknowledgments

* **MercuryWorkshop:** For creating the Scramjet proxy, supplying the essential engine files, and developing the WISP server and libcurl transport layers utilized by Scramjet.
* **Aura Team:** For hosting and providing the public WISP/libcurl server that `SJ-static` connects to, keeping this project serverless and static.

---

## File Structure

repo File structure
    
    -└── scramjet-static
    └── .github
        ├── ISSUE_TEMPLATE
        │   ├── bug_report.md
        │   ├── config.yml

        ├── workflows
        │   └── docker-image.yml
        │   └── eslint.yml
    └── bare-mux
        ├── bare-mux-worker.js
        ├── bare-mux.js
    └── scramjet-engine
        ├── scramjet-all.js
        ├── scramjet-sync.js
        ├── scramjet.js
        ├── scramjet.wasm
    └── transport
        ├── libcurl.mjs
        ├── scramjett.png
    └── index.html
    └── LICENSE
    └── README.md
    └── sw.js
    
    
## 📄 License & Legal

* **License:** This project and the open-source technologies it utilizes are licensed under the **AGPL 3.0 Public License**.
* **Inquiries:** For legal questions or copyright inquiries, please refer to dmca.com.

---

## VERSION 2.0 UPGRADES! 🏆 we are proudm to release version 2 of this project, furthering development of this custom scarmjet proxy engine for static usage, we hope people build off, and deploy this in production. It is the best static interpertacion of scramjet so far* build from the ground up! 🏆🏆🏆🏆🏆🏆🏆🏆🏆

## IMPROVMENTS INCLUDE:
- Rebuilt back/forward navigation to reliably return home without falling through to the browser's own history
- Fixed a service worker race condition that could cause the app to hang on "Writing config…" after a reload
- Added a persistent Wisp server settings panel — set and save a custom Wisp server directly from the home screen
- Added live transport method switching between libcurl and epoxy, with your Wisp server carrying over automatically
- Added a real loading progress bar for page navigation
- Added floating reload and home controls with live network-loss detection
- Added an About page and build version footer
- General stability improvements across service worker registration, IndexedDB handling, and transport initialization

  ---
  ## HERE ARE SOME IMAGES OF SJ-STATIC V.2 SHOW CASING A VERSION PREVIEW:


align="center"><img src="https://raw.githubusercontent.com/hahahah67-pixel/scramjet-static-demo-build/main/transport/preview 1.png" height="200"></p>

align="center"><img src="https://raw.githubusercontent.com/hahahah67-pixel/scramjet-static-demo-build/main/transport/preview 2.png" height="200"></p>

align="center"><img src="https://raw.githubusercontent.com/hahahah67-pixel/scramjet-static-demo-build/main/transport/preview 3.png" height="200"></p>

align="center"><img src="https://raw.githubusercontent.com/hahahah67-pixel/scramjet-static-demo-build/main/transport/preview 4.png" height="200"></p>

align="center"><img src="https://raw.githubusercontent.com/hahahah67-pixel/scramjet-static-demo-build/main/transport/preview 5.png" height="200"></p>

---
all open-source services are used under accaptable and law-binding copyright and lisences, Scramjet-static is lisenced under the APGL 3.0 public lisence, for lisence info vist /LISENCE on this web domain.
for more information, please vist dmca.com
  

