import miniCartTemplate from './mini-cart.hbs';
import miniCartItemsTemplate from './mini-cart-items.hbs';
import { getCartFromStorage, removeFromCart } from '../cart/cart';
import { activeElementMatches } from '../../js/utils';

let dropdownEl;
let buttonEl;
let miniCartItems;
let cartCountEl;
const globalVariables = {
  rootPath: (
    window.location.pathname === '/index.html'
    || window.location.pathname === '/accessible-ecommerce-demo/'
    || window.location.pathname === '/accessible-ecommerce-demo/index.html'
  ) ? '.' : '..'
};

function testClick(event){
  const clickInsideDropdown = event.target.matches('.mini-cart__dropdown, .mini-cart__dropdown *');
  if(!clickInsideDropdown){
    closeMiniCart();
  }
}
function testBlur(){
  activeElementMatches('.mini-cart__dropdown *').then(function(focusInDropdown){
    if(!focusInDropdown){
      closeMiniCart();
    }
  });
}

function openMiniCart() {
  dropdownEl.classList.add('expanded');
  buttonEl.setAttribute('aria-expanded', 'true');
  document.addEventListener('click', testClick);
}

function onClose(event) {
  event.stopPropagation();
  closeMiniCart();
}

function closeMiniCart() {
  dropdownEl.classList.remove('expanded');
  buttonEl.setAttribute('aria-expanded', 'false');
  document.removeEventListener('click', testClick);
}

function toggleMenu(event) {
  event.stopPropagation();
  if (dropdownEl.classList.contains('expanded')) {
    closeMiniCart();
  } else {
    openMiniCart();
  }
}

function miniCartActions(event) {
  if(event.target.matches('[data-remove]')){
    removeFromCart(event.target.dataset.remove);
    event.stopPropagation();
  }
}

function onCartUpdate(event){
  updateMiniCart(event.detail);
}

function updateMiniCart(cartData){
  cartData.rootPath = globalVariables.rootPath;
  cartCountEl.innerHTML = cartData.cartItemCount;
  miniCartItems.innerHTML = miniCartItemsTemplate(cartData);
}

function init(){
  const cartData = getCartFromStorage();
  const templateEl = document.querySelector('[data-template="mini-cart"]');
  templateEl.outerHTML = miniCartTemplate(globalVariables);

  const miniCartEl = document.querySelector('[data-component="mini-cart"]');
  buttonEl = miniCartEl.querySelector('[data-js="mini-cart-toggle"]');
  dropdownEl = miniCartEl.querySelector('[data-js="mini-cart-dropdown"]');
  miniCartItems = miniCartEl.querySelector('[data-template="mini-cart-items"]');
  cartCountEl = miniCartEl.querySelector('[data-js="cart-item-count"]');

  updateMiniCart(cartData);
  dropdownEl.addEventListener('click', miniCartActions);
  buttonEl.addEventListener('click', toggleMenu);
  buttonEl.addEventListener('blur', testBlur);

  const miniCartClose = miniCartEl.querySelector('[data-js="mini-cart-close"]');
  miniCartClose.addEventListener('click', onClose);

  // Add blur check to last focusable item in the dropdown
  const focusableItems = miniCartEl.querySelectorAll('button, [href]');
  focusableItems[focusableItems.length - 1].addEventListener('blur', testBlur);

  document.addEventListener('update:cart', onCartUpdate);
}

export { init };