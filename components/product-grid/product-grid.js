/* Product Grid Functions */
var clearFiltersButton = document.querySelector('#showingNumberProducts__clear');
var numberOfProductsInGridAriaLiveRegion = document.querySelector('#showingNumberProducts__description');

// Add click event to clear filters button
clearFiltersButton.addEventListener('click', function(event) {
  numberOfProductsInGridAriaLiveRegion.innerHTML = 'Showing ' + 80 + ' products.';
});