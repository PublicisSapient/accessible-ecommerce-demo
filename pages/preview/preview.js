import Template from '../../src/js/template';

const Preview = (function() {
  function init() {
    const components = Template.getComponents();
    const loadedComponents = Template.load(components);

    console.log('loadedComponent: ', loadedComponents);
  }

  return {
    init: init
  }
}());

Preview.init();