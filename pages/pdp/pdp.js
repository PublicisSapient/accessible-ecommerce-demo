import Template from '../../src/js/template';

/* Product Details Page Functions */

const PDP = (function() {
  function init() {
    const components = Template.getComponents();
    const loadedComponents = Template.load(components);

    console.log('loadedComponent: ', loadedComponents);
  }

  return {
    init: init
  }
})();

document.addEventListener("mainReady", function(e) {
  PDP.init();
});