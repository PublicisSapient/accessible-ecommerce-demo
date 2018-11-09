export function getFocusableChildren(node) {
    var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'];

    return $$(focusableElements.join(','), node).filter(function (child) {
        return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
    });
}

// Helper function to get all nodes in context matching selector as an array
export function $$(selector, context) {
    return Array.prototype.slice.call((context || document).querySelectorAll(selector) || []);
}

// Helper function trapping the tab key inside a node
export function trapTabKey(node, event) {
    var focusableChildren = getFocusableChildren(node);
    var focusedItemIndex = focusableChildren.indexOf(document.activeElement);

    if (event.shiftKey && focusedItemIndex === 0) {
        focusableChildren[focusableChildren.length - 1].focus();
        event.preventDefault();
    } else if (!event.shiftKey && focusedItemIndex === focusableChildren.length - 1) {
        focusableChildren[0].focus();
        event.preventDefault();
    }
}

// Helper function to focus first focusable item in node
export function setFocusToFirstItem(node) {
    var focusableChildren = getFocusableChildren(node);
    if (focusableChildren.length) focusableChildren[0].focus();
}

/**
 * Get index of an element inside parent
 * @param  {HTMLElement} element
 */
export function getElementIndex(element) {
    var index = 0;
    while ((element = element.previousElementSibling)) {
        ++index;
    }
    return index;
}

export function normalizeName(str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}