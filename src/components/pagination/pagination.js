import paginationTemplate from './pagination.hbs';
import renderPagination from './pagination-items.hbs';
import { handlebarsHelper } from '../../js/utils';

let componentEl;

/**
 * PRIVATE FUNCTIONS
 */

handlebarsHelper('isDisabled', function (buttonStatus) {
  return buttonStatus ? 'disabled' : '';
});
handlebarsHelper('activeClass', function (isCurrent) {
  return isCurrent ? 'active' : '';
});
handlebarsHelper('getAriaLabel', function (isCurrent, index) {
  return isCurrent
    ? `Current page ${index}`
    : `Page ${index}, display results`;
});

function createPages(paginationData) {
  return Array.from({ length: paginationData.pageCount }, (v, k) => {
    return {
      label: k + 1,
      isCurrent: k + 1 === paginationData.currentPage
    };
  });
}

function onClickPagination(event) {
  const paginationEvent = new CustomEvent('update:pagination', {
    detail: {
      goToPage: Number(event.currentTarget.dataset.goToPage)
    }
  });
  document.dispatchEvent(paginationEvent);
}

/**
 * PUBLIC FUNCTIONS
 */

function update(paginationData) {
  if (paginationData.pageCount > 0) {
    paginationData.pages = createPages(paginationData);
    paginationData.prevDisabled = paginationData.currentPage === 1;
    paginationData.nextDisabled = paginationData.currentPage === paginationData.pageCount;
    paginationData.prevPage = paginationData.currentPage - 1;
    paginationData.nextPage = paginationData.currentPage + 1;

    componentEl.innerHTML = renderPagination(paginationData);
    // show pagination if it was previously hidden by 0 results
    if (document.querySelector(".pagination__list").style.display == "none")
      document.querySelector(".pagination__list").style.display = "flex";

    const paginationButtons = componentEl.querySelectorAll('[data-go-to-page]');
    paginationButtons.forEach(function (button) {
      button.addEventListener('click', onClickPagination);
    });
  } else {
    // hide pagination when 0 results
    document.querySelector(".pagination__list").style.display = "none";
  }
}

function init() {
  const targetElement = document.querySelector('[data-template="pagination"]');
  targetElement.outerHTML = paginationTemplate();
  componentEl = document.querySelector('[data-component="pagination"]');
}

export { init, update };
