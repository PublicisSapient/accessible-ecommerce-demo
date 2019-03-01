import Template from '../../src/js/template';

const {{component}} = (function() {
  function init() {
    const components = Template.getComponents();
    const loadedComponents = Template.load(components);

    console.log('loadedComponent: ', loadedComponents);
    // initialize loaded components
  }

  return {
    init: init
  }
})();

document.addEventListener("mainReady", function(e) {
  {{component}}.init();
});