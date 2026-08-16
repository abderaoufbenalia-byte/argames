/* ARGAMES / ClickAdilla integration
   - Loads the publisher ad manager only after the page's banner mount elements exist.
   - Registers the ClickAdilla web-push service worker from the site root.
   - Publisher ID: 453249
*/
(function () {
  'use strict';

  function registerPushWorker() {
    if (!('serviceWorker' in navigator) || location.protocol !== 'https:') return;
    navigator.serviceWorker.register('/RXebVX.js', { scope: '/' }).catch(function () {
      // A blocked/unsupported service worker must not prevent banner ads from loading.
    });
  }

  function loadAdManager() {
    if (window.__ARGAMES_CLICKADILLA_LOADED) return;
    window.__ARGAMES_CLICKADILLA_LOADED = true;

    var script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = 'https://js.wpadmngr.com/static/adManager.js';
    script.setAttribute('data-admpid', '453249');
    (document.head || document.documentElement).appendChild(script);
  }

  function boot() {
    // All static data-banner-id mounts are already in the DOM at this point.
    registerPushWorker();
    loadAdManager();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
}());
