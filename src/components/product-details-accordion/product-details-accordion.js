import renderTemplate from './product-details-accordion.hbs';
import * as accordion from '../accordion/accordion';
import * as sizeChart from '../size-chart/size-chart';
import * as productReviews from '../product-reviews/product-reviews';

function init(productData) {
  const element = document.querySelector('[data-template="product-details-accordion"]');
  element.outerHTML = renderTemplate();

  const accordionEl = document.querySelector('[data-component="accordion"]');
  accordion.init(accordionEl, true);

  const longDescription = accordionEl.querySelector('[data-component="product-description"]');
  longDescription.innerHTML = `<p>${productData.long_desc}</p>`;

  sizeChart.init();
  productReviews.init(productData);
}

export { init };
