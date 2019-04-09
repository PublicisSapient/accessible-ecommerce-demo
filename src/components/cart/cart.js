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
  newCartItem.total_price = parseInt(newCartItem.quantity) * Number(newCartItem.price_sale);
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

function updateCart(cart) {
  cart.cartItemCount = getCartItemCount(cart.cartItems);
  cart.cartSubtotal = getCartSubtotal(cart.cartItems).toFixed(2);
  cart.cartItemsLabel = (cart.cartItemCount === 1) ? 'item' : 'items';
  putCartInStorage(cart);
  pushCartUpdatedEvent(cart);
}

export { addToCart, getCartFromStorage, removeFromCart };