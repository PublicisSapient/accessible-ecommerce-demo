import renderTemplate from './product-grid.hbs';
import renderTiles from './product-tiles.hbs';

let componentEl;

/* Product Link Functions  */

setTimeout(() => {
  let productLinks = document.getElementById('product-link-container');
  productLinks.onkeydown = onProductLinkPress;
}, 1)

function onProductLinkPress(e) {
  if (e.code === 'KeyF') {
    let node = document.getElementById('skip-to-products-from-filters-heading')
    node && node.focus()
  }
  if (e.code === 'KeyB') {
    let node = document.getElementById('skip-to-products-from-sort-heading')
    node && node.focus()
  }
}

// Public functions
function init() {
  let templateTarget = document.querySelector('[data-template="grid"]');
  templateTarget.outerHTML = renderTemplate();
  componentEl = document.querySelector('[data-component="grid"]');
}
function update(products){
  if(products !== undefined){
    if(componentEl.style.display == 'block') {
      componentEl.style.display = 'grid';
    }
    componentEl.innerHTML = renderTiles({products});
  } else {
    componentEl.style.display = 'block';
    componentEl.innerHTML = '<h2>Sorry. We did not find any results. Try expanding your filters.</h2>';
  }
}

export { init, update };