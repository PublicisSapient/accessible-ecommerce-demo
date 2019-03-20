import Template from '../../src/js/template';
import PouchDB from '../../src/js/pouchdb';

/* Product Listing Page Functions */

const PLP = (function() {
  function init() {
    PouchDB.allDocs({include_docs: true, limit: 12}).then(function(doc){
      console.log(doc);
      window.all_product_data = doc;
    }).then(function(){
      const components = Template.getComponents();
      const loadedComponents = Template.load(components);
  
      console.log('loadedComponent: ', loadedComponents); // eslint-disable-line no-console
    });

  }

  

  return {
    init: init
  };

})();

//document.addEventListener('mainReady', function() {
PLP.init();
//});
