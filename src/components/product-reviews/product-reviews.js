import renderTemplate from './product-reviews.hbs';
import { getStars } from '../../js/utils';

function getReviews() {
  let reviews = [];
  for (let i = 0; i < 4; i++) {
    reviews.push({
      index: i + 1,
      stars: getStars(3)
    });
  }
  return reviews;
}

function init(productData) {
  const element = document.querySelector('[data-component="product-reviews"]');
  productData.ratings = getStars(productData.rating);
  productData.reviews = getReviews();
  element.innerHTML = renderTemplate(productData);
}

export { init };
