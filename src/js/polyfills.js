/* Utility Functions */

// Helper function to get all focusable children from a node

/*
* POLYFILL: NodeList.forEach
* https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
* Required for Safari < 10, and IE
*/
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
/*
* POLYFILL: element.closest()
* https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
* Required for IE
*/
if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest)
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
