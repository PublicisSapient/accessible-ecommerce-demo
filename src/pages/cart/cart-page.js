import { getCartFromStorage } from '../../components/cart/cart';
import cartItemsTemplate from './cart-items.hbs';
import cartMoneyBoxTemplate from './cart-moneybox.hbs';

(function cartPage() {
  const cartData = getCartFromStorage();
  const cartItemsEl = document.querySelector('[data-template="cart-items"]');
  const cartMoneyBoxEl = document.querySelector('[data-template="cart-moneybox"]');
  //console.log("cartData", cartData);
  cartItemsEl.outerHTML = cartItemsTemplate(cartData);
  cartMoneyBoxEl.outerHTML = cartMoneyBoxTemplate(cartData);

})();