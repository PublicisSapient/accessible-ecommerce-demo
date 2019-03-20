import Template from '../../src/js/template';
import PouchDB from '../../src/js/pouchdb';

/* Product Details Page Functions */

const PDP = (function() {
  function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const product_id = urlParams.get('product_id');

    PouchDB.find({
      include_docs: true,
      selector: {
        _id: product_id
      } 
    }).then(function(doc){
      window.product_data = doc.docs;
      console.log("product data: ", window.product_data);
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

// document.addEventListener('mainReady', function() {
//   console.log('mainReady');
  PDP.init();
// });
