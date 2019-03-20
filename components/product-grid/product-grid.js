import PouchDB from '../../src/js/pouchdb';

var ProductGrid = function () {

  /* Product Grid Functions */
  var clearFiltersButton = document.querySelector('#showingNumberProducts__clear');
  var numberOfProductsInGridAriaLiveRegion = document.querySelector('#showingNumberProducts__description');
  var numberOfProductsHeading = document.querySelector('#showingNumberProducts__heading');
  var numberOfFiltersAppliedAriaLiveRegion = document.querySelector('#showingNumberFilters__description');
  var filterInputs = document.querySelectorAll('.productGrid__filter');
  var productGrid = document.querySelector('#product-grid');
  var products = productGrid.querySelectorAll('.product');

  // Add click event to clear filters button
  clearFiltersButton.addEventListener('click', function () {
    setTimeout(updateNumberOfAppliedFiltersAndProductsShowing, 1);
  });

  filterInputs.forEach(function (filterInput) {
    filterInput.addEventListener('change', updateNumberOfAppliedFiltersAndProductsShowing);
  });

  function updateNumberOfAppliedFiltersAndProductsShowing() {
    updateNumberOfAppliedFilters();
    updateNumberOfProductsShowing();
  }

  function updateNumberOfAppliedFilters() {
    var numberOfAppliedFilters = 0;
    filterInputs.forEach(function (filterInput) {
      if (filterInput.checked) {
        numberOfAppliedFilters++;
      }
    });
    // if the number of filters is 1 then we need to use singlular filter
    var filterOrFilters = numberOfAppliedFilters === 1 ? 'filter' : 'filters';

    numberOfFiltersAppliedAriaLiveRegion.innerHTML = numberOfAppliedFilters + ' ' + filterOrFilters + ' applied';
    if (numberOfAppliedFilters > 0) {
      clearFiltersButton.setAttribute('aria-label', 'Clear ' + numberOfAppliedFilters + ' applied product ' + filterOrFilters + '.');
    } else {
      clearFiltersButton.setAttribute('aria-label', 'Clear product filters. There are no filters currently applied.');
    }
  }

  function updateNumberOfProductsShowing() {
    // for the demo we will generate a random number of products available between 0 and 100
    var randomNumberOfProducts = Math.floor(Math.random() * Math.floor(100));
    numberOfProductsInGridAriaLiveRegion.innerHTML = 'Showing ' + randomNumberOfProducts + ' products';
  }

  var pagination = document.querySelectorAll('[data-go-to-page]');

  pagination.forEach((paginationBtn) => {
    paginationBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      location.hash = "!/" + paginationBtn.dataset.goToPage;
      // refresh product list...
      productGrid.style.opacity = 0.1
      setTimeout(function () {
        productGrid.style.opacity = 1

        // set focus state
        numberOfProductsHeading.focus();
      }, 500);
    });
  });

  products.forEach(function (product) {
    var addToCartButton = product.querySelector('.product__cta');
    var quantityComponent = product.querySelector('.quantity-comp');
    var quantityComponentValue = product.querySelector('.quantity-comp__text');
    var productName = product.querySelector('.product__heading').innerHTML;
    var productDetails = product.querySelector('.product__details');

    addToCartButton.addEventListener('click', function (evt) {
      // toggle the UI to show the + - component
      quantityComponent.classList.add('show');
      addToCartButton.classList.add('hide');

      // update the mini cart with the valid info
      updateMiniCart('123', quantityComponentValue.value, productName);
      productDetails.focus();
    });
  });

  function updateMiniCart(sku, quantity, name) {
    MiniCart.update({
      sku,
      quantity,
      name
    });
  }
}

var setUpProductGrid = function() {
  getAllProducts();

  var checkboxes = document.querySelectorAll('.productGrid__filters input[type=checkbox]');
  checkboxes.forEach(function(element){
    element.addEventListener('click', function(e){

      //console.log("e", e.currentTarget);
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
      
      filter_names.forEach(function(filter_name){
        //console.log(filter_name);
        var filters = document.querySelectorAll('input[name='+filter_name+']');
        //console.log("filters: ",filters);
        filters.forEach(function(filter){
          //console.log("filter:", filter.checked);
          if(filter.checked){
            if(filter_name == 'color'){
              color_query.color.$elemMatch.$in.push(filter.value);
            }
            if(filter_name == 'size'){
              size_query.size.$elemMatch.$in.push(filter.value);
            }
            if(filter_name == 'brand'){
              brand_query.brand.$in.push(filter.value);
            }
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
        selector: selector_query,
        limit: 12
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
        const productGridTemplate2 = Handlebars.compile(document.getElementById('product-grid-template-2').innerHTML);
        var compiledHtml = productGridTemplate2({'product': doc.docs});
        document.getElementById('product-grid-tiles').innerHTML = compiledHtml;
      });
    });
  });
}
function getAllProducts() {
  const productGridTemplate = Handlebars.compile(document.getElementById('product-grid-template').innerHTML);
  var compiledHtml = productGridTemplate({'product': window.all_product_data.rows});
  document.getElementById('product-grid-tiles').innerHTML = compiledHtml;
}

setUpProductGrid();
