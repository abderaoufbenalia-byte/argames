/* ARGAMES ad loader supplied for the 5 banner placements.
   The page intentionally has no header ad slot. */
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://js.wpadmngr.com/static/adManager.js';
  s.setAttribute('data-admpid', '453249');
  document.head.appendChild(s);

  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('./RXebVX.js').catch(function () {});
  }
}());
