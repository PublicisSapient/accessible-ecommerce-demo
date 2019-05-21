import { getElementIndex } from '../../js/utils';

let carouselList;
let items;
let buttonLeft;
let buttonRight;
let carouselPosition = 0;
let currentPage = 0;

function carouselWidth() {
  return carouselList.getBoundingClientRect().width;
}
function itemWidth() {
  return items[0].getBoundingClientRect().width;
}
function totalWidth() {
  return carouselList.scrollWidth;
}
function numItemsVisible() {
  // Mobile portrait mode: carouselWidth() < itemWidth() so returning 1 since there is only 1 item in view
  return Math.floor(carouselWidth() / itemWidth()) === 0 ? 1 : Math.floor(carouselWidth() / itemWidth());
}
function minX() {
  return totalWidth() >= carouselWidth() ? -(Math.floor(totalWidth() / carouselWidth()) * carouselWidth()) + carouselWidth() - (totalWidth() % carouselWidth()) : 0;
}
function pageCount() {
  return Math.ceil(items.length / numItemsVisible());
}
function shiftAmount() {
  return numItemsVisible() * itemWidth() * -1;
}
function shiftCarousel(pageIndex) {
  currentPage = pageIndex;
  const amount = currentPage < pageCount() - 1 ? currentPage * shiftAmount() : minX();
  carouselList.style.transform = `translatex(${amount}px)`;
  refreshArrowButtons();
}
function toggleButton(button, isDisabled) {
  return isDisabled ? button.setAttribute('disabled', 'disabled') : button.removeAttribute('disabled');
}

function refreshArrowButtons() {
  toggleButton(buttonLeft, currentPage === 0);
  toggleButton(buttonRight, currentPage === pageCount() - 1);
}

function refreshCarousel() {
  /*
   * TODO: Add a (buffered) window resize event call that will reflow the carousel if the page count needs to change
   */

  refreshArrowButtons();
}

function init(element) {
  carouselList = element.querySelector('.carousel__items');
  items = carouselList.querySelectorAll('.card');
  buttonRight = element.querySelector('.carousel__arrow--right');
  buttonLeft = element.querySelector('.carousel__arrow--left');

  buttonRight.addEventListener('click', () => {
    shiftCarousel(currentPage + 1);
  });

  buttonLeft.addEventListener('click', () => {
    shiftCarousel(currentPage - 1);
  });

  items.forEach(card => {
    card.addEventListener('focusin', evt => {
      const cardIndex = getElementIndex(evt.target.closest('.card'));
      const cardPage = Math.ceil((cardIndex + 1) / numItemsVisible()) - 1;
      if (cardPage != currentPage) {
        shiftCarousel(cardPage);
      }
    });
  });

  refreshCarousel();
}

export { init };
