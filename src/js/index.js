/*
The following is an implementation for polyfills as outlined here:
https://philipwalton.com/articles/loading-polyfills-only-when-needed/

*/

function browserSupportsAllFeatures() {
  return window.Promise && window.fetch && window.Symbol;
}

function loadPolyfill(src, done) {
  var js = document.createElement('script');
  js.src = src;
  js.onload = function() {
    done();
  };
  js.onerror = function() {
    done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
}

if (browserSupportsAllFeatures()) {
  // Browsers that support all features run `main()` immediately.
  main();
} else {
  // All other browsers loads polyfills and then run `main()`.
  // Append the required features onto the URL as required
  loadPolyfill(
    'https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise,fetch,Symbol,Array.prototype.@@iterator',
    main
  );
}

function main(err) {
  // Initiate all other code paths.
  // If there's an error loading the polyfills, handle that
  // case gracefully and track that the error occurred.
  // Recursively bundle all of the JS files from the ./components directory
  var cache = {};
  function importAll (r) {
    r.keys().forEach(key => cache[key] = r(key));
  }
  importAll(require.context('../../components', true, /\.js$/));

  // create and dispatch the event
  var event = new CustomEvent("mainReady");
  document.dispatchEvent(event);
}

