import carouselTemplate from './product-carousel.hbs';
import carouselItems from './carousel-items.hbs';
import * as carousel from '../carousel/carousel';

let carouselItemsWrapper;

function update(products) {
  carouselItemsWrapper.innerHTML = carouselItems({ products });
  carousel.init(document.querySelector('[data-component="carousel"]'));
}

function init() {
  const templateTarget = document.querySelector('[data-template="carousel"]');
  templateTarget.outerHTML = carouselTemplate();
  carouselItemsWrapper = document.querySelector('[data-template="carousel-items"]');
}

export { init, update };
