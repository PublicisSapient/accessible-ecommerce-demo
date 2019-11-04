import orderSummaryTemplate from './order-summary.hbs';
import orderSummaryItemsTemplate from './order-summary-items.hbs';
import { getCartFromStorage } from '../cart/cart';

let orderSummaryItems;

const globalVariables = {
  rootPath: (
    window.location.pathname === '/index.html'
    || window.location.pathname === '/accessible-ecommerce-demo/'
    || window.location.pathname === '/accessible-ecommerce-demo/index.html'
  ) ? '.' : '..'
};

function updateOrderSummary(cartData){
  cartData.rootPath = globalVariables.rootPath;
  orderSummaryItems.innerHTML = orderSummaryItemsTemplate(cartData);
}

function init(){
  const cartData = getCartFromStorage();
  const templateEl = document.querySelector('[data-template="order-summary"]');
  templateEl.outerHTML = orderSummaryTemplate(globalVariables);

  orderSummaryItems = document.querySelector('[data-template="order-summary-items"]');

  updateOrderSummary(cartData);
}

export { init };