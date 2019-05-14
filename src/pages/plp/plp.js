import * as breadcrumb from '../../components/breadcrumb/breadcrumb';
import * as productTile from '../../components/product-tile/product-tile';
import * as productFilters from '../../components/product-filters/product-filters';
import * as productSort from '../../components/product-sort/product-sort';
import * as productGrid from '../../components/product-grid/product-grid';
import * as pagination from '../../components/pagination/pagination';
import * as carousel from '../../components/product-carousel/product-carousel';
import * as DynamicModal from '../../components/modal/modal-dynamic';
import { chunk, getRandomSubset, setPageTitle } from '../../js/utils';
import * as productDB from '../../js/pouchdb';
import * as Modal from '../../components/modal/modal';

(function plpPage() {
  let pages;
  let allProducts;
  let defaultQuery = {
    selector: {
      category: { $eq: 'Women' }, // These values can be pulled from URL vars for unique PLPs for every subcat
      subcategory: { $eq: 'Women’s Tops' },
      price_sale: { $gt: null },
      rating: { $gt: null }
    },
    sort: [{ rating: 'desc' }]
  };
  let currentQuery = { ...defaultQuery };
  const SCROLL_TOP = document.querySelector('#page-title');
  const CAROUSEL_ITEM_COUNT = 8;
  const breadcrumbs = [{ label: 'Home', link: '../index.html' }, { label: 'Women', link: './index.html' }, { label: 'Women’s Tops', link: '' }];

  breadcrumb.init(breadcrumbs);
  productTile.register('productTile');
  productFilters.init();
  productSort.init();
  productGrid.init();
  pagination.init();
  carousel.init();

  Modal.init('construction-modal');

  function getPage(event) {
    let newPage = event.detail.goToPage;
    const index = newPage - 1;
    productGrid.update(pages[index]);
    pagination.update({ pageCount: pages.length, currentPage: newPage });
    productSort.update(index);
    SCROLL_TOP.scrollIntoView({ behavior: 'smooth' });
  }

  function updateAllProducts(result) {
    allProducts = result.docs;
    updateComponents();
  }

  function updateComponents() {
    const itemsPerPage = productSort.getItemsPerPage();
    pages = chunk(allProducts, itemsPerPage);
    const pageCount = itemsPerPage === 0 ? 1 : pages.length;
    productGrid.update(pages[0]);
    pagination.update({ pageCount, currentPage: 1 });
    productSort.update(0, allProducts.length);
  }

  function filterProducts(event) {
    currentQuery.selector = { ...defaultQuery.selector, ...event.detail };
    const fields = Object.keys(currentQuery.sort[0]);
    productDB.query(fields, currentQuery).then(updateAllProducts);
  }

  function sortProducts(event) {
    currentQuery.sort = [event.detail];
    const fields = Object.keys(event.detail);
    productDB.query(fields, currentQuery).then(updateAllProducts);
  }

  function fetchComponentData() {
    productDB.query(['rating'], currentQuery).then(function (result) {
      updateAllProducts(result);
      const carouselItems = getRandomSubset(allProducts, CAROUSEL_ITEM_COUNT);
      carousel.update(carouselItems);
    });
  }

  function loadModal(event) {
    const componentName = event.currentTarget.dataset.modalLoad;
    DynamicModal.init(
      `[data-component="${componentName}"]`,
      `modal-${componentName}`
    );
  }

  // Event Listeners
  document.addEventListener('update:filters', filterProducts);
  document.addEventListener('update:sort', sortProducts);
  document.addEventListener('update:ipp', updateComponents);
  document.addEventListener('update:pagination', getPage);
  const dynamicModals = document.querySelectorAll('[data-modal-load]');
  dynamicModals.forEach((modalTrigger) => modalTrigger.addEventListener('click', loadModal));

  setPageTitle(['Women', 'Women’s Tops']);
  productDB.init().then(fetchComponentData);
})();
