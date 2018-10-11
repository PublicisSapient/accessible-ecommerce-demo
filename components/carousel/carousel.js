/* Carousel Functions */

import { getElementIndex } from 'Utilities';

var Carousel = function (element) {
  this.element = element;

  this.carouselList = element.querySelector('.carousel__items');
  this.items = this.carouselList.querySelectorAll('.card');
  this.buttonRight = element.querySelector('.carousel__arrow--right');
  this.buttonLeft = element.querySelector('.carousel__arrow--left');

  this.carouselPosition = 0;
  this.currentPage = 0;
  this.carouselWidth = () => this.carouselList.getBoundingClientRect().width;
  this.totalWidth = () => this.carouselList.scrollWidth;
  this.itemWidth = () => this.items[0].getBoundingClientRect().width;
  this.numItemsVisible = () => Math.floor(this.carouselWidth() / this.itemWidth());
  this.minX = () => (this.totalWidth() >= this.carouselWidth()) ? -(Math.floor(this.totalWidth() / this.carouselWidth()) * this.carouselWidth()) + this.carouselWidth() - (this.totalWidth() % this.carouselWidth()) : 0;
  this.pageCount = () => Math.ceil(this.items.length / this.numItemsVisible());

  this.shiftAmount = () => {
    return this.numItemsVisible() * this.itemWidth() * -1;
  };

  this.initEvents();
  this.refreshCarousel();
};

Carousel.prototype = {

  shiftCarousel(pageIndex) {
    this.currentPage = pageIndex;
    let amount = (this.currentPage < this.pageCount() - 1) ? this.currentPage * this.shiftAmount() : this.minX();
    this.carouselList.style.transform = `translatex(${amount}px)`;
    this.refreshArrowButtons();
  },

  toggleButton(button, isDisabled) {
    return isDisabled ? button.setAttribute('disabled', 'disabled') : button.removeAttribute('disabled');
  },

  refreshArrowButtons() {
    this.toggleButton(this.buttonLeft, this.currentPage === 0);
    this.toggleButton(this.buttonRight, this.currentPage === this.pageCount() - 1);
  },

  refreshCarousel() {
  /*
  * TODO: Add a (buffered) window resize event call that will reflow the carousel if the page count needs to change
  */

    this.refreshArrowButtons();
  },

  initEvents: function () {
    this.buttonRight.addEventListener('click', () => {
      this.shiftCarousel(this.currentPage + 1);
    });

    this.buttonLeft.addEventListener('click', () => {
      this.shiftCarousel(this.currentPage - 1);
    });

    this.items.forEach(card => {
      card.addEventListener('focusin', evt => {
        const cardIndex = getElementIndex(evt.target.closest('.card'));
        const cardPage = Math.ceil((cardIndex + 1) / this.numItemsVisible()) - 1;
        if (cardPage != this.currentPage) {
          this.shiftCarousel(cardPage);
        }
      });
    });
  }
};

var carouselElements = document.querySelectorAll('.carousel');
carouselElements.forEach(function (carouselElement) {
  new Carousel(carouselElement);
});