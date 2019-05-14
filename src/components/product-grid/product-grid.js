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
  if(products !== undefined){
    if(componentEl.style.display = 'block') {
      componentEl.style.display = 'grid';
    }
    componentEl.innerHTML = renderTiles({products});
  } else {
    componentEl.style.display = 'block';
    componentEl.innerHTML = '<h2>Sorry. We did not find any results. Try expanding your filters.</h2>';
  }
}

export { init, update };