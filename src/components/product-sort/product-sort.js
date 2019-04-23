import renderSort from './product-sort.hbs';

let itemsPerPage = 12;
let showingCountElement;
let showing = {};

function formatSortOptions(value) {
  if (!value) return { newest: 'desc' };

  const [sortBy, sortDirection] = value.split(':');
  let sortOptions = {};
  sortOptions[sortBy] = sortDirection;
  return sortOptions;
}

function onSortChange(event) {
  const detail = formatSortOptions(event.target.value);
  const sortEvent = new CustomEvent('update:sort', { detail });
  document.dispatchEvent(sortEvent);
}

function onIppChange(event) {
  itemsPerPage = parseInt(event.target.value);
  const detail = { itemsPerPage };
  const changeEvent = new CustomEvent('update:ipp', { detail });
  document.dispatchEvent(changeEvent);
}

function init() {
  const element = document.querySelector('[data-template="sort"]');
  if (element) {
    element.outerHTML = renderSort();
    const componentEl = document.querySelector('[data-component="sort"]');
    const sortFilter = componentEl.querySelector('[data-js="update-sort"]');
    const ippFilter = componentEl.querySelector('[data-js="update-ipp"]');
    showingCountElement = componentEl.querySelector('[data-js="showing-count"]');
    sortFilter.addEventListener('change', onSortChange);
    ippFilter.addEventListener('change', onIppChange);
  }
}

function update(index, total) {
  if (total) showing.total = total;
  showing.start = index * itemsPerPage + 1;
  showing.end = (itemsPerPage > 0) ? Math.min((index + 1) * itemsPerPage, showing.total) : showing.total;
  showingCountElement.innerHTML = `${showing.start} to ${showing.end} of ${showing.total}`;
}

function getItemsPerPage() {
  return itemsPerPage;
}

export { init, update, getItemsPerPage };