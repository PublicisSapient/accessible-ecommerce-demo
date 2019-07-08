import * as orderSummary from '../../components/order-summary/order-summary';
import { getContactInfo, getShippingInfo, getPaymentInfo } from '../checkout/checkout';
import { getCartFromStorage, getCartSubtotal } from '../../components/cart/cart';

let orderDetailSection;
let contactSection;
let shippingSection;
let paymentSection;
let date;

const displayContactInfo = () => {
  const contactInfo = getContactInfo();
  const emailElems = document.querySelectorAll('.email-address');
  emailElems.forEach(email => {
    email.innerText = contactInfo['email'];
  });
};

const displayShippingInfo = () => {
  const shippingInfo = getShippingInfo();
  Object.keys(shippingInfo).forEach(key => {
    if (!key.includes('method')) {
      shippingSection.querySelector(`#${key}`).innerText = shippingInfo[key];
    }
  });
  const shippingMethod = shippingInfo['shipping-method'];
  shippingSection.querySelector(`p#${shippingMethod}`).classList.remove('hidden');
};

const displayPaymentInfo = () => {
  const paymentInfo = getPaymentInfo();
  Object.keys(paymentInfo).forEach(key => {
    if (!key.includes('billingAddressSame')) {
      paymentSection.querySelector(`#${key}`).innerText = paymentInfo[key];
    }
  });
  paymentSection.querySelector('#cc-holder-name').innerText = `${paymentInfo['billing-first-name']} ${paymentInfo['billing-last-name']}`;
};

const modifyTotalsText = () => {
  const texts = Array.from(document.querySelectorAll('.order-summary__totals dt'));
  texts.forEach(text => {
    text.innerText += ':';
  });
};

const displayOrderDetails = () => {
  displayTotal();
  displayDate();
  displayTime();
};

const displayDate = () => {
  date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  orderDetailSection.querySelector('.day').innerText = day < 10 ? `0${day}` : day;
  orderDetailSection.querySelector('.month').innerText = month < 10 ? `0${month}` : month;
  orderDetailSection.querySelector('.year').innerText = date.getFullYear();
};

const displayTime = () => {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  orderDetailSection.querySelector('.hour').innerText = hour > 12 ? hour - 12 : hour;
  orderDetailSection.querySelector('.minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
  orderDetailSection.querySelector('.am-pm').innerText = hour >= 12 ? 'PM' : 'AM';
};

const displayTotal = () => {
  const cart = getCartFromStorage();
  orderDetailSection.querySelector('.order-detail__total').innerText = `$${getCartSubtotal(cart.cartItems).toFixed(2)}`;
};

window.onload = () => {
  orderDetailSection = document.querySelector('.order-confirmation__order-details');
  contactSection = document.querySelector('.order-confirmation__contact-info');
  shippingSection = document.querySelector('.order-confirmation__shipping-info');
  paymentSection = document.querySelector('.order-confirmation__payment-info');

  orderSummary.init();
  displayOrderDetails();
  displayContactInfo();
  displayShippingInfo();
  displayPaymentInfo();
  modifyTotalsText();
};