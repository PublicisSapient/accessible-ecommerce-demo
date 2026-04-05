import { roundNumber } from '../../js/utils';
import cartItemsTemplate from '../../pages/cart/cart-items.hbs';
import cartMoneyBoxTemplate from '../../pages/cart/cart-moneybox.hbs';
import cartQuanitySummaryTemplate from '../../pages/cart/cart-quantity-summary.hbs';
import * as Modal from '../../components/modal/modal';

function pushCartUpdatedEvent(detail){
  const event = new CustomEvent('update:cart', { detail });
  document.dispatchEvent(event);
}
function getEmptyCart(){
  return {
    cartItemCount: 0,
    cartItemsLabel: 'items',
    cartItems: [],
    cartIndex: 0,
    cartSubtotal: 0,
  };
}
function getCartFromStorage(){
  const cart = localStorage.getItem('cart');
  return (cart) ? JSON.parse(cart) : getEmptyCart();
}
function putCartInStorage(newCart){
  localStorage.setItem('cart', JSON.stringify(newCart));
}
function getCartItemCount(cartItems){
  return cartItems.reduce(function(accumulator, cartItem){
    return accumulator + parseInt(cartItem.quantity);
  }, 0);
}
function getCartSubtotal(cartItems){
  return cartItems.reduce(function(accumulator, cartItem){
    return accumulator + Number(cartItem.total_price);
  }, 0);
}
function addToCart(newCartItem){
  let cart = getCartFromStorage();
  cart.cartIndex++;
  newCartItem.cart_id = cart.cartIndex;
  newCartItem.total_price = roundNumber(parseInt(newCartItem.quantity) * Number(newCartItem.price_sale));
  cart.cartItems.push(newCartItem);
  updateCart(cart);
}
function removeFromCart(itemId) {
  let cart = getCartFromStorage();
  const updatedCartItems = cart.cartItems.filter(function(cartItem){
    return cartItem.cart_id !== parseInt(itemId);
  });
  cart.cartItems = updatedCartItems;
  updateCart(cart);
}
function removeItemFromCart(cartItemsEl) {
  const removeItems = cartItemsEl.querySelectorAll('[data-remove]');
  if (removeItems) {
    removeItems.forEach(el => {
      el.addEventListener('click', (event) => {
        removeFromCart(event.target.dataset.remove);
        event.stopPropagation();
      });
    });
  }
}
/*
* function will be called on increase and decrease click event and on quantity input change event
*
* @function changeItemQuantity
* @param event
* @param {element} - cartIemsEL - will contain [data-template="cart-items"] element
* @param {String} -  eventType - to indentify the event type
*
*/
function changeItemQuantity(event, cartItemsEl, eventType) {
	let cart = getCartFromStorage();
  let cartItems = cart.cartItems;
	cartItems.forEach(cartItem => {
		if (cartItem.cart_id == event.target.dataset.eventCartId) {
			let itemEl = cartItemsEl.querySelector('li[data-cart-id="' + cartItem.cart_id + '"')
			let quantityInput = itemEl.querySelector('[data-js="quantity"]');

      if (eventType != 'onChange') {
        if (eventType === "increment") {
          quantityInput.value++;
        } else {
          quantityInput.value--;
        }
      }
      // set quantity value to 1 if quantity is negative value
      cartItem.quantity = quantityInput.value < 0 ? 1 : quantityInput.value;
			cartItem.total_price = roundNumber(parseInt(cartItem.quantity ) * Number(cartItem.price_sale)).toFixed(2);
      itemEl.querySelector(".cart-items__column .detail__price").innerHTML = `$${cartItem.total_price}`;
      // remove item if quantity is 0
      if (cartItem.quantity == 0) {
        setTimeout(function(){
          removeFromCart(cartItem.cart_id);
        }, 300);
        return;
      }
      updateCart(cart);
		}
	});
}
/*
* function will load/refresh the cart page on page load and change event
*
* @function loadCard
* @param {Object} - cart // will contain card data
*
*/
function loadCart(cart) {
  const cartItemsEl = document.querySelector('[data-template="cart-items"]');
  const cartMoneyBoxEl = document.querySelector('[data-template="cart-moneybox"]');
  const cartQuantitySummaryEl =  document.querySelector('[data-template="cart-quantity-summary"]');

  if (cartItemsEl && cartMoneyBoxEl) {
    cartItemsEl.outerHTML = cartItemsTemplate(cart);
    cartMoneyBoxEl.outerHTML = cartMoneyBoxTemplate(cart);
    cartQuantitySummaryEl.innerHTML = cartQuanitySummaryTemplate(cart);
    init();
  }
}
function updateCart(cart) {
  cart.cartItemCount = getCartItemCount(cart.cartItems);
  cart.cartSubtotal = getCartSubtotal(cart.cartItems).toFixed(2);
  cart.cartItemsLabel = (cart.cartItemCount === 1) ? 'item' : 'items';
  putCartInStorage(cart);
  pushCartUpdatedEvent(cart);
  loadCart(cart);
}
/*
* function will be called on page load and change event
*
* @function init
*
*/
function init(){
  Modal.init('construction-modal');
  const cartItemsEl = document.querySelector('[data-template="cart-items"]');

  if (cartItemsEl) {
    const increment = cartItemsEl.querySelectorAll('.quantity-comp__increase');
    const decrement = cartItemsEl.querySelectorAll('.quantity-comp__decrease');
    const quantityInput = document.querySelectorAll('[data-js="quantity"]');

    increment.forEach(el => {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        changeItemQuantity(event, cartItemsEl, "increment");
      });
    });

    decrement.forEach(el => {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        changeItemQuantity(event, cartItemsEl, "decrement");
      });
    });

    quantityInput.forEach(el => {
      el.addEventListener('click', function (event) {
        event.preventDefault();
      })
      el.addEventListener('change', function (event) {
        changeItemQuantity(event, cartItemsEl, "onChange");
      });
    });

    removeItemFromCart(cartItemsEl);
	}
}

export { init, addToCart, getCartFromStorage, removeFromCart, getCartSubtotal, loadCart };