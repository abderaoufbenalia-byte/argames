ARGAMES CMS REBUILD

Source: Arcade_cms_9_0_GameMonetize.com.zip
Games imported from database.sql: 28,898
Multiplayer detected: 2,610
CMS categories: 20
CMS tags: 513

Included:
- All published game records from gm_games.
- Game thumbnails/URLs from the CMS database.
- Individual game pages.
- CMS instructions displayed as the controls tutorial.
- Multiplayer section and badges based on CMS tags/descriptions.
- Search and category filtering.
- English/French/Arabic/Spanish/German/Chinese UI.
- Arabic RTL mode.
- Start by any key, click, or touch anywhere on the game start area.
- F toggles fullscreen.
- No iframe gamepad permission is requested; only fullscreen is allowed.
- Like/dislike controls.
- Header/sidebar/bottom/interstitial Ad Space placeholders.
- Responsive mobile layout.

Important:
The CMS archive contains the database records and the CMS source code. The game records point to GameMonetize HTML5 URLs; the archive does not contain 28,898 standalone game binaries. Therefore this build imports the games into ARGAMES as catalog entries and embeds their provider URLs. A provider can still block iframe embedding through its own CSP/Permissions-Policy; the site cannot override that server-side restriction.

FIX: games.js embeds the full catalog so the site also works when index.html is opened directly from a local folder (file://), where fetch('games.json') can fail.


v4 changes: compact category sidebar with no visible scrollbar; removed old primary sidebar menu; larger green category icons; hover-only game names/category overlays; continuous dual green card-line animation while hovered; dark game-page background; smaller left-side game viewport with right-side controls; additional ad placeholders; keyboard visual guide retained; favicon retained.

Merged GameMonetize catalog upload: 2375 new games. Total catalog: 31274.
Home uses a fresh randomized order per page load, 36 games per page, responsive mosaic layout, and pagination.
