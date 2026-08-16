ARGAMES FINAL REBUILD — 2026-08-16.3

IMPORTANT UPLOAD RULE
Replace the existing website files with the contents of this folder. Do not upload the folder beside the old files.

FIXES IN THIS BUILD
1. Game thumbnails are strict 1:1 square cards on desktop, tablet and phone.
2. Masonry/row-span behavior is disabled.
3. Ads are GRID ITEMS, not floating/overlapping elements.
4. A 300x100 ClickAdilla banner is inserted as a full-width row after game cards in the Popular, New, Multiplayer and Top Rated grids.
5. A fifth 300x100 banner is placed at the bottom of the homepage content.
6. Game pages retain two 300x100 banner placements, separated from the game and controls.
7. Category pages retain a 300x100 banner at the bottom.
8. The old ClickAdilla IDs 1499081, 1499084, 1499085, 1499086 and 1499087 are NOT present in the website files.
9. Only banner ID 1499097 is used for the ClickAdilla banner mounts.
10. ClickAdilla AdManager publisher ID 453249 is loaded through ad-loader.js AFTER the homepage game grids have rendered. This is important because the homepage creates the banner mount elements dynamically.
11. Old direct adManager script tags were removed from all HTML pages.
12. Cache-busting version 20260816.3 is applied to the main JS/CSS assets.

AD LOADING
The shared ad-loader.js loads:
https://js.wpadmngr.com/static/adManager.js
with data-admpid="453249".

If ClickAdilla still reports "No banner mount target id found" for old IDs after deployment, those warnings are from the ClickAdilla account/configuration or a cached older build, not from the files in this rebuild. Hard refresh and replace all old app.js/style.css/index.html files.
