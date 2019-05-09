import renderTemplate from './product-details.hbs';
import { getStars } from '../../js/utils';

function init(productData) {
  productData.ratings = getStars(productData.rating);
  const element = document.querySelector('[data-template="product-details"]');
  element.outerHTML = renderTemplate(productData);
}

export { init };
