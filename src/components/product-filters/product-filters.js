import renderFilters from './product-filters.hbs';
import renderActiveFilters from './active-filters.hbs';
import * as accordion from '../accordion/accordion';

// Private vars
let componentEl;
let activeFiltersEl;
let filterCountEls;
let mobileFilterCount;
let priceFilterForm;
let priceFromField;
let priceToField;
let priceFilterFrom;
let priceFilterTo;
const nonCurrencyChars = /[^0-9.-]+/g;

// Private functions
function pushFilterUpdateEvent() {
  const detail = { ...getCheckboxFilters(), ...getPriceRangeFilter() };
  const event = new CustomEvent('update:filters', { detail });
  document.dispatchEvent(event);
}

function getActiveFilters() {
  const selectedFilters = componentEl.querySelectorAll('[type=checkbox]:checked');
  return [...selectedFilters].map(function (filter) {
    return {
      label: componentEl.querySelector(`label[for="${filter.id}"]`).innerHTML,
      filterId: filter.id
    };
  });
}

function getCheckboxFilters() {
  const selectedFilters = componentEl.querySelectorAll('[type=checkbox]:checked');
  return [...selectedFilters].reduce(function (accumulator, filter) {
    let filterValue = filter.value;
    if (accumulator[filter.name]) {
      accumulator[filter.name].$elemMatch.$in.push(filterValue);
    } else {
      accumulator[filter.name] = {
        $elemMatch: {
          $in: [filterValue]
        }
      };
    }
    return accumulator;
  }, {});
}

function getPriceRangeFilter() {
  const priceFrom = Number(priceFilterFrom.value);
  const priceTo = Number(priceFilterTo.value);
  const priceRangeFilter = (priceFrom && priceTo)
    ? { $gte: Number(priceFilterFrom.value), $lte: Number(priceFilterTo.value) }
    : { $gt: null };

  return {
    price_sale: priceRangeFilter
  };
}

function updateFilters() {
  const activeFilters = getActiveFilters();
  let filterText = (activeFilters.length === 1)
    ? 'filter'
    : 'filters';

  mobileFilterCount.innerHTML = (activeFilters.length)
    ? `&nbsp;(${activeFilters.length})`
    : '';

  filterCountEls.forEach(element =>
    element.innerHTML =
    `${activeFilters.length} ${filterText} applied`
  );
  activeFiltersEl.innerHTML = renderActiveFilters({ activeFilters });
  pushFilterUpdateEvent();
}

function onActiveFilterClick(event) {
  const element = event.target;
  if (element.matches('[data-remove-filter]')) {
    const targetCheckbox = document.getElementById(element.dataset.removeFilter);
    targetCheckbox.dispatchEvent(new MouseEvent('click'));
  }
}

function onPriceFilterSubmit(event) {
  event.preventDefault();
  priceFilterFrom.value = priceFromField.value.replace(nonCurrencyChars, '');
  priceFilterTo.value = priceToField.value.replace(nonCurrencyChars, '');
  updateFilters();
}

function onPriceFilterClear() {
  priceFilterFrom.value = '';
  priceFilterTo.value = '';
  priceFromField.value = '';
  priceToField.value = '';
  updateFilters();
}

function clearFilters() {
  const selectedCheckboxes = document.querySelectorAll('[type=checkbox]:checked');
  selectedCheckboxes.forEach(function (filter) {
    filter.checked = false;
  });
  updateFilters();
}

// Public functions
function init() {
  let element = document.querySelector('[data-template="filters"]');
  if (element) element.outerHTML = renderFilters();

  componentEl = document.querySelector('[data-component="filters"]');
  mobileFilterCount = document.querySelector('[data-js="mobile-filter-count"]');
  filterCountEls = componentEl.querySelectorAll('[data-js="filter-count"]');
  activeFiltersEl = componentEl.querySelector('[data-component="active-filters"]');
  priceFilterForm = componentEl.querySelector('[data-js="price-filter"]');
  priceFromField = priceFilterForm.querySelector('#priceFrom');
  priceToField = priceFilterForm.querySelector('#priceTo');
  priceFilterFrom = priceFilterForm.querySelector('#priceFilterFrom');
  priceFilterTo = priceFilterForm.querySelector('#priceFilterTo');

  accordion.enableToggles(componentEl);
  activeFiltersEl.addEventListener('click', onActiveFilterClick);
  priceFilterForm.addEventListener('submit', onPriceFilterSubmit);
  priceFilterForm.querySelector('[data-js="price-range-clear"]').addEventListener('click', onPriceFilterClear);


  const filterInputs = componentEl.querySelectorAll('[data-js="filter"]');
  filterInputs.forEach(function (filterInput) {
    filterInput.addEventListener('change', updateFilters);
  });

  const clearButtons = componentEl.querySelectorAll('[data-js="clear-filters"]');
  clearButtons.forEach(function (clearButton) {
    clearButton.addEventListener('click', clearFilters);
  });

  updateFilters();
}

export { init };
