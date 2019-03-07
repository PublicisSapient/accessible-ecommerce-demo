import Template from '../../src/js/template';
import PouchDB from '../../src/js/pouchdb';

/* Product Listing Page Functions */

const PLP = (function() {
  var productGridTemplate,
    productGridTemplate2;

  function init() {
    const components = Template.getComponents();
    const loadedComponents = Template.load(components);

    console.log('loadedComponent: ', loadedComponents); // eslint-disable-line no-console

  }
  function setUpProductGrid() {
    productGridTemplate = Handlebars.compile($('#product-grid-template').html());
    productGridTemplate2 = Handlebars.compile($('#product-grid-template-2').html());
    getAllProducts();

    $('.productGrid__filters input:checkbox').on('click', function(e){
      // console.log("e", e.currentTarget);
      // const currElem = e.currentTarget;
      // const currVal = currElem.value;

      var filter_names = ['color','size','brand'];
      var selector_query = {};
      selector_query.$and = [];
      var color_query = {};
      color_query.color = {};
      color_query.color.$elemMatch = {};
      color_query.color.$elemMatch.$in = [];
      var size_query = {};
      size_query.size = {};
      size_query.size.$elemMatch = {};
      size_query.size.$elemMatch.$in = [];
      var brand_query = {};
      brand_query.brand = {};
      brand_query.brand.$in = [];
      
      $.each (filter_names, function(){
        var filter_name = this;
        $.each($("input[name='"+filter_name+"']:checked"), function(){
          //console.log($(this).val());
          if(filter_name == 'color'){
            color_query.color.$elemMatch.$in.push($(this).val());
          }
          if(filter_name == 'size'){
            size_query.size.$elemMatch.$in.push($(this).val());
          }
          if(filter_name == 'brand'){
            brand_query.brand.$in.push($(this).val());
          }
        });
      });

      if(color_query.color.$elemMatch.$in.length>0)
        selector_query.$and.push(color_query);
      if(size_query.size.$elemMatch.$in.length>0)
        selector_query.$and.push(size_query);
      if(brand_query.brand.$in.length>0)
        selector_query.$and.push(brand_query);

      //console.log(selector_query);
      PouchDB.find({
        include_docs: true,
        selector: selector_query
        // selector: {
        //   '$and': [{
        //     color_query
        //     'color': { 
        //       '$elemMatch': {
        //         '$in': ['blue']
        //       }
        //     }
        //   },
        //   {
        //     'size': { 
        //       '$elemMatch': {
        //         '$in': ['large','small']
        //       }
        //     }
        //   },
        //   {
        //     'brand': { 
        //       '$in': ['brand1']
        //     }
        //   }]
        // }
      }).then(function(doc){
        //console.log(doc.docs);
        var compiledHtml = productGridTemplate2({'product': doc.docs});
        $('#product-grid-tiles').html(compiledHtml);
      });
    });
  }
  function getAllProducts() {
    PouchDB.allDocs({include_docs: true}).then(function(doc){
      var compiledHtml = productGridTemplate({'product': doc.rows});
      $('#product-grid-tiles').html(compiledHtml);
    }).catch(function(err){
      console.error(err);
    });
  }

  

  return {
    init: init,
    setUpProductGrid: setUpProductGrid,
    getAllProducts: getAllProducts
  };

})();

document.addEventListener('mainReady', function() {
  PLP.init();
});
document.addEventListener('[data-component=product-grid]Ready', function() {
  PLP.setUpProductGrid();
});