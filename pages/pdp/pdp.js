import Template from '../../src/js/template';
//import PouchDB from '../../src/js/pouchdb';

/* Product Details Page Functions */

const PDP = (function() {
  function init() {
    const components = Template.getComponents();
    const loadedComponents = Template.load(components);

    console.log('loadedComponent: ', loadedComponents); // eslint-disable-line no-console
  }



  return {
    init: init
    // getProduct: getProduct
  };
})();

document.addEventListener('mainReady', function() {
  console.log('mainReady');
  PDP.init();
});
// document.addEventListener('[data-component=product-description]Ready', function() {
//   console.log('[data-component=product-description]Ready');
//   PDP.getProduct();
// });
