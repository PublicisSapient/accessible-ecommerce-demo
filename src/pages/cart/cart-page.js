import { getCartFromStorage, loadCart} from '../../components/cart/cart';

(function cartPage() {
  const cartData = getCartFromStorage();
  // load card data on page load
  loadCart(cartData);
})();
