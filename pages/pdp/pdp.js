import HTMLLoader from '../../src/js/loader';
import GlobalNavigation from '../../components/global-nav/global-nav';

/* Product Details Page Functions */
console.log('PDP page scripts!');

// Loader.loadAll([
//   {path: '../../components/global-nav/global-nav.html', selector: '#nav'},
//   {path: '../../components/product-grid/product-grid.html', selector: '#nav'}])
//   .then(comps => {
//     console.log('components: ', comps);
//     new GlobalNavigation();
//   });

HTMLLoader.load('../../components/global-nav/global-nav-partial.html', '[data-component="global-navigation"]').then(output => {
  new GlobalNavigation();
})