import Template from '../../src/js/template';

/* Product Details Page Functions */

const PDP = (function() {
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
  PDP.init();
});