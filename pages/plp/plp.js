import Template from '../../src/js/template';

/* Product Listing Page Functions */

const PLP = (function() {
  function init() {
    const components = Template.getComponents();
    const loadedComponents = Template.load(components);

    console.log('loadedComponent: ', loadedComponents); // eslint-disable-line no-console
  }

  return {
    init: init
  };
})();

document.addEventListener('mainReady', function() {
  PLP.init();
});