import HTMLLoader from './loader';
import { normalizeName } from './utils';

const Template = (function() {
  function getComponents() {
    const componentElements = Array.prototype.slice.call(document.querySelectorAll('[data-component]'));
    const components = componentElements.map(el => {
      const component = el.dataset.component;
      return { path: `../../components/${component}/${component}.html`, selector: `[data-component=${component}]`, js: component };
    });

    return components;
  }

  function load(components) {
    const loadedComponents = {};
    HTMLLoader.loadAll(components).then(comps => { 
      comps.forEach(comp => {
        const component = require(`../../components/${comp.js}/${comp.js}.js`);
        loadedComponents[normalizeName(comp.js)] = new component.default();
      });
    });

    return loadedComponents;
  }

  return {
    getComponents: getComponents,
    load: load
  }
}());

export default Template;
