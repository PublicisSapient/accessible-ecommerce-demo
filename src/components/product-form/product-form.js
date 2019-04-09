import { addToCart } from '../cart/cart';

let quantity = 1;
let formEl;
let ariaQuantityElement;
let quantityInput;

function increment() {
  quantity++;
  quantityInput.value = quantity;
  ariaQuantityElement.innerHTML = quantity;
}

function decrement() {
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
    ariaQuantityElement.innerHTML = quantity;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  const formData = {
    product_name: formEl.querySelector('[name=product_name]').value,
    product_id: formEl.querySelector('[name=product_id]').value,
    quantity: formEl.querySelector('[name=quantity]').value,
    color: formEl.querySelector('[name=color]:checked').value,
    size: formEl.querySelector('[name=size]:checked').value,
    price_sale: formEl.querySelector('[name=price_sale]').value,
    thumbnail_url: formEl.querySelector('[name=thumbnail_url]').value
  };
  addToCart(formData);
}

function init(formElement) {
  formEl = formElement;
  quantityInput = formEl.querySelector('[data-js="quantity"]');
  ariaQuantityElement = formEl.querySelector('.quantity-comp__aria span');

  const incrementBtn = formEl.querySelector('.quantity-comp__increase');
  const decrementBtn = formEl.querySelector('.quantity-comp__decrease');

  formEl.addEventListener('submit', onFormSubmit);
  incrementBtn.addEventListener('click', increment);
  decrementBtn.addEventListener('click', decrement);
}

export { init };