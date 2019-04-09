import renderTemplate from './product-details.hbs';

function init(productData){
  const element = document.querySelector('[data-template="product-details"]');
  element.outerHTML = renderTemplate(productData);
}

export { init };