import renderFilters from './product-filters.hbs';
import renderActiveFilters from './active-filters.hbs';
import * as accordion from '../accordion/accordion';

// Region Functions
// let filters
// setTimeout(() => {
//   filters = document.getElementById('product-filters');

//   console.log(getFocusableChildren(filters.children))

//   filters.onkeydown = onFilterEnter;
//   filters.addEventListener('focusin', onFilterFocusIn)
//   filters.addEventListener('focusout', onFilterLeave)
// }, 1)

// function getFocusableChildren(children, arr = []) {
//   let nodes = arr
//   console.log('parent:', children)
//   for (const child of children) {
//     console.log('child:', child)
//     if(child.tabindex === '0') {
//       console.log('here at all???')
//       nodes.push(child)
//     }
//     if(child.firstChild !== null) {
//       for (const node of getFocusableChildren(child.children, nodes)) {
//         nodes.push(node)
//       }
//     }
//   }
//   children.forEach(child => {
    
//   });
//   return nodes
// }

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
const minPrice = 0;
const maxPrice = 999;

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
  const priceRangeFilter = (priceFrom >= 0 && priceTo >= 0 && priceFilterFrom.value !== "" && priceFilterTo.value !== "")
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
  priceFilterFrom.value = priceFilterFrom.value === '' ? minPrice : priceFilterFrom.value;
  priceFilterTo.value = priceToField.value.replace(nonCurrencyChars, '');
  priceFilterTo.value = priceFilterTo.value === '' ? maxPrice : priceFilterTo.value;

  if (validatePriceFields()) {
    updateFilters();
  }
}

function onPriceFilterClear() {
  priceFilterFrom.value = '';
  priceFilterTo.value = '';
  priceFromField.value = '';
  priceToField.value = '';
  clearErrorState();
  updateFilters();
}

function clearFilters() {
  const selectedCheckboxes = document.querySelectorAll('[type=checkbox]:checked');
  selectedCheckboxes.forEach(function (filter) {
    filter.checked = false;
  });
  updateFilters();
}

function validatePriceFields(event) {
  const submitBtn = document.querySelector('.price-filter__submit');
  const errorSummary = document.querySelector('.error-summary');
  let validated = true;
  let errorText;
  let numErrors;

  const fields = Array.from(priceFilterForm.querySelectorAll('.price-filter__input'));
  fields.forEach(function (input) {
    let inputId = input.getAttribute('id');
    if (input.value.match(nonCurrencyChars) || input.value < minPrice || input.value > maxPrice) {
      input.classList.add('error');
      priceFilterForm.querySelector(`[data-field=${inputId}]`).classList.remove('hidden');
    } else {
      input.classList.remove('error');
      priceFilterForm.querySelector(`[data-field=${inputId}]`).classList.add('hidden');
    }
  });

  numErrors = document.getElementsByClassName('price-filter__input error').length;
  if (numErrors > 0) {
    errorText = numErrors === 1 ? 'error' : 'errors';
    errorSummary.querySelector('span').innerText = `${numErrors} ${errorText}`;
    errorSummary.classList.remove('hidden');
    document.getElementsByClassName("price-filter__input error")[0].focus();
    validated = false;
  } else {
    errorSummary.classList.add('hidden');
    validated = true;
  }
  return validated;
}

function clearErrorState() {
  const fields = Array.from(priceFilterForm.querySelectorAll('.price-filter__input'));
  fields.forEach(function (input) {
    input.classList.remove('error');
    input.previousElementSibling.classList.add('hidden');
  });
  document.querySelector('.error-summary').classList.add('hidden');
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
