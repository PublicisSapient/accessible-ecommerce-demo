/* Product Grid Functions */
var clearFiltersButton = document.querySelector('#showingNumberProducts__clear');
var numberOfProductsInGridAriaLiveRegion = document.querySelector('#showingNumberProducts__description');
var numberOfFiltersAppliedAriaLiveRegion = document.querySelector('#showingNumberFilters__description');
var filterInputs = document.querySelectorAll('.productGrid__filter');

// Add click event to clear filters button
clearFiltersButton.addEventListener('click', function() {
  setTimeout(updateNumberOfAppliedFiltersAndProductsShowing, 1);
});

filterInputs.forEach(function(filterInput) {
  filterInput.addEventListener('change', updateNumberOfAppliedFiltersAndProductsShowing);
});

function updateNumberOfAppliedFiltersAndProductsShowing() {
  updateNumberOfAppliedFilters();
  updateNumberOfProductsShowing();
}

function updateNumberOfAppliedFilters() {
  var numberOfAppliedFilters = 0;
  filterInputs.forEach(function(filterInput) {
    if (filterInput.checked) {
      numberOfAppliedFilters++;
    }
  });
  // if the number of filters is 1 then we need to use singlular filter
  var filterOrFilters = numberOfAppliedFilters === 1 ? 'filter' : 'filters';

  showingNumberFilters__description.innerHTML = numberOfAppliedFilters + ' ' + filterOrFilters + ' applied.';
  if (numberOfAppliedFilters > 0) {
    clearFiltersButton.setAttribute('aria-label', 'Clear ' + numberOfAppliedFilters + ' applied product ' + filterOrFilters + '.');
  } else {
    clearFiltersButton.setAttribute('aria-label', 'Clear product filters. There are no filters currently applied.');
  }
}

function updateNumberOfProductsShowing() {
  // for the demo we will generate a random number of products available between 0 and 100
  var randomNumberOfProducts = Math.floor(Math.random() * Math.floor(100));
  numberOfProductsInGridAriaLiveRegion.innerHTML = 'Showing ' + randomNumberOfProducts + ' products.';
}