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
  if(products){
    if(componentEl.style.display = 'block')
      componentEl.style.display = 'grid';
    componentEl.innerHTML = renderTiles({products});
  } else {
    componentEl.style.display = 'block';
    // copy to be confirmed
    componentEl.innerHTML = '<h2>Sorry, there are no products that match your search</h2><p><a href="#skip-to-filters">Please review your filters</a></p>';
  }
}

export { init, update };