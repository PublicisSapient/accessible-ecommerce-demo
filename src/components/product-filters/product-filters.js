import renderFilters from './product-filters.hbs';
import renderActiveFilters from './active-filters.hbs';

// Private vars
let componentEl;
let activeFiltersEl;
let pluralEl;
let filterCountEl;

// Private functions
function pushFilterUpdateEvent() {
  const detail = getformattedFilters();
  const event = new CustomEvent('update:filters', { detail });
  document.dispatchEvent(event);
}

function getActiveFilters() {
  const selectedFilters = componentEl.querySelectorAll('[type=checkbox]:checked');
  return [...selectedFilters].map(function(filter){
    return {
      label: componentEl.querySelector(`label[for="${filter.id}"]`).innerHTML,
      filterId: filter.id
    }
  });
}

function getformattedFilters(){
  const selectedFilters = componentEl.querySelectorAll('[type=checkbox]:checked');
  return [...selectedFilters].reduce(function(accumulator, filter){
    let filterValue = filter.value;
    if(accumulator[filter.name]){
      accumulator[filter.name].$elemMatch.$in.push(filterValue);
    }else{
      accumulator[filter.name] = {
        $elemMatch: {
          $in: [filterValue]
        }
      };
    }
    return accumulator;
  }, {});
}

function updateFilters(){
  const activeFilters = getActiveFilters();
  activeFiltersEl.innerHTML = renderActiveFilters({activeFilters});
  filterCountEl.innerHTML = activeFilters.length;
  if(activeFilters.length === 1){
    pluralEl.classList.add('hidden');
  }else{
    pluralEl.classList.remove('hidden');
  }
  pushFilterUpdateEvent();
}

function onActiveFilterClick(event){
  const element = event.target;
  if (element.matches('[data-remove-filter]')) {
    const targetCheckbox = document.getElementById(element.dataset.removeFilter);
    targetCheckbox.dispatchEvent(new MouseEvent('click'));
  }
}

function clearFilters(){
  const selectedCheckboxes = document.querySelectorAll('[type=checkbox]:checked');
  selectedCheckboxes.forEach(function(filter){
    filter.checked = false;
  });
  updateFilters();
}

// Public functions
function init() {
  let element = document.querySelector('[data-template="filters"]');
  if (element) element.outerHTML = renderFilters();

  componentEl = document.querySelector('[data-component="filters"]');
  filterCountEl = componentEl.querySelector('[data-js="filter-count"]');
  pluralEl = componentEl.querySelector('[data-js="plural"]');
  activeFiltersEl = componentEl.querySelector('[data-component="active-filters"]');

  activeFiltersEl.addEventListener('click', onActiveFilterClick);

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