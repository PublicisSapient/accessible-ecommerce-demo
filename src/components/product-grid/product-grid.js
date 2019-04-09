import renderTemplate from './product-grid.hbs';
import renderTiles from './product-tiles.hbs';

let componentEl;

// Public functions
function init() {
  let templateTarget = document.querySelector('[data-template="grid"]');
  templateTarget.outerHTML = renderTemplate();
  componentEl = document.querySelector('[data-component="grid"]');
}
function update(products){
  componentEl.innerHTML = renderTiles({products});
}

export { init, update };