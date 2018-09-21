// Manually bundle specific files in specific order
// require('./polyfills.js');
/* The above is commented out because it doesn't seem to work because webpack doesn't just concatenate the JS files
There's an interesting article here on including polyfills only when needed:
https://philipwalton.com/articles/loading-polyfills-only-when-needed/
Perhaps we could roll with a similar solution when necessary.
*/

// Recursively bundle all of the JS files from the ./components directory
var cache = {};
function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}
importAll(require.context('../../components', true, /\.js$/));
