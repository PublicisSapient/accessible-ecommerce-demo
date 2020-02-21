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
      isCurrent: k + 1 === paginationData.currentPage,
      showPaginationListItem: showPaginationList(paginationData, k + 1)
    };
  });
}

/*
* function will filter the pagination list itmes that need to show on the page
*
* @function showPaginationList
* @param {Array} - data
* @param {Int} - index
*
* @returns {Boolean}
*/
function showPaginationList(paginationData, index) {
 const maxNumOfPagesToShow = paginationData.pageCount > 5;
 const showTailEllipsis = maxNumOfPagesToShow && (paginationData.currentPage < 5);
 const showHeadEllipsis = maxNumOfPagesToShow && paginationData.currentPage > (paginationData.pageCount - 4);

 let showPaginationListItemCondition = (((showTailEllipsis && (index < 6)) || (showHeadEllipsis && (index > (paginationData.pageCount - 6))) || (paginationData.pageCount < 6) || (!(showTailEllipsis) && !(showHeadEllipsis) && (paginationData.currentPage - (index + 1) >= -3 && paginationData.currentPage - (index + 1) <= 1))));

 return showPaginationListItemCondition;
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
    paginationData.showFirstPage = paginationData.currentPage > 4;
    paginationData.showLastPage = paginationData.pageCount - paginationData.currentPage >= 4;
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
