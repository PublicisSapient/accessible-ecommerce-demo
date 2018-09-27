import Template from '../../src/js/template';

/* Product Details Page Functions */
console.log('PDP page scripts! ', Template);

const PDP = (function() {
  function init() {
    const components = Template.getComponents();
    const loadedComponents = Template.load(components);

    console.log('loadedComponent: ', loadedComponents);
    
  }

  return {
    init: init
  }
}());

PDP.init();