/* Product Grid Functions */
var clearFiltersButton = document.querySelector('#showingNumberProducts__clear');
var numberOfProductsInGridAriaLiveRegion = document.querySelector('#showingNumberProducts__description');
var numberOfProductsHeading = document.querySelector('#showingNumberProducts__heading');
var filterInputs = document.querySelectorAll('.productGrid__filter');

// Add click event to clear filters button
clearFiltersButton.addEventListener('click', function(event) {
  numberOfProductsInGridAriaLiveRegion.innerHTML = 'Showing ' + 80 + ' products.';
});

filterInputs.forEach(function(filterInput) {
  filterInput.addEventListener('change', function(event) {
    console.log('change');
  });
});

var pagination = document.querySelectorAll('[data-go-to-page]');

pagination.forEach((paginationBtn) => {
  paginationBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    location.hash = "!/" + paginationBtn.dataset.goToPage;
    // refresh product list...

    // set focus state
    numberOfProductsHeading.focus();
  });
});