import { getCartFromStorage } from '../../components/cart/cart';
import cartItemsTemplate from './cart-items.hbs';

(function cartPage() {
  const cartData = getCartFromStorage();
  const cartItemsEl = document.querySelector('[data-template="cart-items"]');
  cartItemsEl.outerHTML = cartItemsTemplate(cartData);
})();