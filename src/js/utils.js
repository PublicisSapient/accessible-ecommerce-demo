import Handlebars from 'handlebars/dist/handlebars.runtime';

export function handlebarsHelper(helperName, helperFunc) {
  return Handlebars.registerHelper(helperName, helperFunc);
}
export function handlebarsPartial(partialName, partialTemplate) {
  return Handlebars.registerPartial(partialName, partialTemplate);
}

export function activeElementMatches(matchList) {
  // the active element (with focus) isn't available yet when the blur event fires
  // so we kick this function down the stack a little with requestAnimationFrame
  return new Promise(function (resolve) {
    window.requestAnimationFrame(function () {
      const activeFocusElement = document.activeElement;
      resolve(activeFocusElement.matches(matchList));
    });
  });
}

/**
 * Breaks a long array into an array of subset arrays of specified size
 * @param {array} items
 * @param {number} size - number of items to put in each 'chunk'
 */
export function chunk(items, size) {
  if (size === 0) return [[...items]];
  let chunked = [];
  let index = 0;
  while (index < items.length) {
    chunked.push(items.slice(index, index + size));
    index += size;
  }
  return chunked;
}

/**
 * Takes an array and returns a randomized subset array
 * @param {array} items
 * @param {number} length - Size of subset array to return
 * @returns {array}
 */
export function getRandomSubset(items, length) {
  let tempItems = [...items];
  let randomSubset = [];
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * tempItems.length);
    randomSubset.push(tempItems.splice(randomIndex, 1)[0]);
  }
  return randomSubset;
}

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
/**
 * Set the document title
 * @param  {Array} [terms] - list of terms to add after the site name
 */
export function setPageTitle(terms) {
  const siteName = 'The Accessible eStore';
  document.title = (terms)
    ? `${siteName}, ${terms.join(', ')}`
    : siteName;
}

function generateStars(starType) {
  return Array.from(Array(5), () => starType);
}

export function getStars(rating) {
  if (rating === 5) return generateStars('full-star');
  const fractionMin = 0.25;
  const fractionMax = 0.75;
  const fullStarCount = Math.floor(rating);
  let stars = generateStars('empty-star');
  if (fullStarCount < 5) {
    for (let i = 0; i < fullStarCount; i++) {
      stars[i] = 'full-star';
    }
    const ratingFraction = rating - fullStarCount;
    if (ratingFraction > fractionMin && ratingFraction < fractionMax) {
      stars[fullStarCount] = 'half-star';
    } else if (ratingFraction > fractionMax) {
      stars[fullStarCount] = 'full-star';
    }
  }
  return stars;
}

export function enableSkipLinks() {
  document.body.addEventListener('click', function (event) {
    if (event.target.classList.contains('skip-link')) {
      const targetElement = document.querySelector(event.target.hash);
      focusOnElement(targetElement);
    }
  });
}

export function focusOnElement(element) {
  if (element) {
    // Basic check only to see if element exists. Can be expanded later to determine if its a focusable element, etc.
    window.requestAnimationFrame(function () {
      element.focus();
    });
  }
}
