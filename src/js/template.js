import HTMLLoader from './loader';
import { normalizeName } from './utils';

window.SR = {};

var Template = (function() {
  function init() {
    const componentElements = Array.prototype.slice.call(document.querySelectorAll('[data-component]'));
    const components = componentElements.map(el => {
      const component = el.dataset.component;
      return { path: `../../components/${component}/${component}.html`, selector: `[data-component=${component}]`, js: component };
    });
   
    HTMLLoader.loadAll(components).then(comps => { 
      comps.forEach(comp => {
        const component = require(`../../components/${comp.js}/${comp.js}.js`);
        window.SR[normalizeName(comp.js)] = new component.default();
      });
    });
  }

  return {
    init: init
  }
}());

document.addEventListener('DOMContentLoaded', Template.init);
