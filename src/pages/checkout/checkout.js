import * as orderSummary from '../../components/order-summary/order-summary';
import { activeElementMatches } from '../../js/utils';

let signInForm;
let guestSignInForm;
let billingForm;
let shippingForm;
let securityCodeTooltip;
let securityCodeTooltipBtn;
let securityCodeTooltipPopup;
let securityCodeTooltipContent;
let billingAddressCheckbox;

const regex = {
  'email': /^([A-Za-z0-9\-\/\:\;\(\)\$\&\"\=\,\?\*\#\%\^\+\_\.\|\[\]\{\}\<\>\\\'])+\@([A-Za-z0-9_\-])+\.([A-Za-z]{2,16})$/,
  'postal-code': /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
  'phone-number': /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
  'credit-card-number': /^$[0-9]{14}/,
  'expiry-date': /^[0-9]{2}[-\s\/\\]?[0-9]{2}$/,
  ccv: /^[0-9]{3,4}$/,
};

function testClick(event){
  const clickInsideDropdown = event.target.matches('.payment-information__tooltip-popup, .payment-information__tooltip-popup *');
  if(!clickInsideDropdown){
    closeTooltip();
  }
}
function testBlur(){
  activeElementMatches('.payment-information__tooltip-popup *').then(function(focusInDropdown){
    if(!focusInDropdown){
      closeTooltip();
    }
  });
}

function openTooltip() {
  securityCodeTooltip.classList.add('visible');
  securityCodeTooltipPopup.setAttribute('aria-hidden', 'false');
  securityCodeTooltipBtn.setAttribute('aria-expanded', 'true');

  securityCodeTooltipContent.setAttribute('tabindex', 0);
  securityCodeTooltipContent.focus();
  securityCodeTooltipContent.addEventListener('blur', testBlur);
  
  const securityCodeTooltipClose = securityCodeTooltipPopup.querySelector('.payment-information__tooltip-popup__btn--close');
  securityCodeTooltipClose.addEventListener('click', onClose);

  document.addEventListener('click', testClick);
}

function onClose(event) {
  event.stopPropagation();
  closeTooltip();
}

function closeTooltip() {
  securityCodeTooltip.classList.remove('visible');
  securityCodeTooltipPopup.setAttribute('aria-hidden', 'true');
  securityCodeTooltipContent.addEventListener('blur', testBlur).setAttribute('tabindex', -1);
  securityCodeTooltipBtn.setAttribute('aria-expanded', 'false');
  securityCodeTooltipBtn.focus();
  document.removeEventListener('click', testClick);
}

function toggleTooltipIcon(event) {
  event.stopPropagation();
  if (securityCodeTooltip.classList.contains('visible')) {
    closeTooltip();
  } else {
    openTooltip();
  }
}

const uncheckBillingAddress = ([el]) => {
  el.checked = true;
};

const prefillBillingAddress = () => {
  const inputs = shippingForm.querySelectorAll('input, select');

  inputs.forEach(input => {
    const { className } = input;
    const billingInput = className ? billingForm.querySelector(`.${className}`) : null;

    if (billingInput) {
      billingInput.removeAttribute('disabled');
      billingInput.value = input.value;
    }
  });
};

const hideShowBillingAddress = () => {
  billingForm.classList.toggle('checkout__billing-address-form--hidden');
  const inputs = billingForm.querySelectorAll('input, select');
  if (billingForm.classList.contains('checkout__billing-address-form--hidden')) {
    prefillBillingAddress();
    clearErrorState(billingForm);
    inputs.forEach(function(input) {
      input.setAttribute('disabled');
    });
  } else {
    inputs.forEach(function(input) {
      input.removeAttribute('disabled');
    });
  }
};

const checkForm = (e) => {
  e.preventDefault();
  const form = e.currentTarget.parentNode;
  const inputs = form.querySelectorAll('input:not([disabled]), select:not([disabled])');

  let formValid = true;

  const checkIfInputIsValid = ({ classList, dataset, type, value }) => {
    let valid = false;
    const required = dataset.required;
    const inputType = type;
    if (required) {
      valid = regex[inputType] ? regex[inputType].test(value) : Boolean(value);
      // class remove and add return undefined we are just using a tertiray for succinct code
      formValid = valid ? !classList.remove('invalid') : classList.add('invalid');
    }
    //TODO: validate optional fields?
  };

  inputs.forEach(checkIfInputIsValid);

  const numErrors = form.querySelectorAll('.invalid').length;
  const errorSummary = form.querySelector('.error-summary');
  if (numErrors === 0) {
    errorSummary.classList.add('hidden');
    //form.submit();
  } else {
    const errorText = numErrors > 1 ? 'errors' : 'error';
    errorSummary.innerText = `You have ${numErrors} ${errorText} in your ${errorSummary.getAttribute('data-section')} information.`;
    errorSummary.classList.remove('hidden');
    form.querySelectorAll('.invalid')[0].focus();
  }
};

const clearErrorState = (form) => {
  if (form.querySelector('.error-summary')) {
    form.querySelector('.error-summary').classList.add('hidden');
  }
  const inputs = form.querySelectorAll('input, select');
  inputs.forEach(function(input) {
    input.classList.remove('invalid');
  });
};

const addListeners = (submitButtons = [], callBack = checkForm) => {
  submitButtons.forEach(button => {
    button && button.addEventListener('click', callBack);
  });
};

const findButtons = (...selectors) => selectors.map(button => document.querySelector(button));

const submitSignInForm = (e) => {
  e.preventDefault();
  const input = signInForm.querySelector('input[type=email]');
  const user = {
    'status' : 'authenticated',
    'email' : input.value
  };
  localStorage.setItem('user', JSON.stringify(user));
};

const submitGuestSignInForm = (e) => {
  e.preventDefault();
  const input = guestSignInForm.querySelector('input[type=email]');
  const user = {
    'status' : 'guest',
    'email' : input.value
  };
  localStorage.setItem('user', JSON.stringify(user));
};

const submitShippingForm = (e) => {
  e.preventDefault();
  const inputs = shippingForm.querySelectorAll('input, select');
  let shippingInfo = {};
  inputs.forEach(function(input) {
    shippingInfo[input.getAttribute('name')] = input.value;
  });
  shippingInfo['shipping-method'] = shippingForm.querySelector('input[name=shipping-method]:checked').value;
  localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
};

const submitBillingForm = (e) => {
  e.preventDefault();
  if (billingAddressCheckbox.checked) {
    prefillBillingAddress();
  }
  const inputs = billingForm.querySelectorAll('input, select');
  let billingInfo = {};
  inputs.forEach(function(input) {
    billingInfo[input.getAttribute('name')] = input.value
  });
  localStorage.setItem('billingingInfo', JSON.stringify(billingInfo));
};

window.onload = () => {
  // Validation Listeners
  addListeners(
    findButtons(
      '.sign-in-form__submit',
      '.guest-sign-in__submit',
      '.shipping-form__submit',
      '.payment-information__submit'
    )
  );

  billingForm = document.querySelector('.checkout__billing-address-form');
  shippingForm = document.querySelector('.checkout__shipping-form');
  signInForm = document.querySelector('.checkout__sign-in-form');
  guestSignInForm = document.querySelector('.checkout__guest-sign-in');

  // other listeners
  billingAddressCheckbox = findButtons(
    '.billing-address__billing-address-checkbox'
  );

  uncheckBillingAddress(billingAddressCheckbox);

  addListeners(
    billingAddressCheckbox,
    hideShowBillingAddress
  );

  addListeners(findButtons('.sign-in-form__submit'), submitSignInForm);
  addListeners(findButtons('.guest-sign-in__submit'), submitGuestSignInForm);
  addListeners(findButtons('.shipping-form__submit'), submitShippingForm);
  addListeners(findButtons('.payment-information__submit'), submitBillingForm);

  securityCodeTooltip = document.querySelector('.payment-information__tooltip');
  securityCodeTooltipPopup = document.querySelector('.payment-information__tooltip-popup');
  securityCodeTooltipBtn = document.querySelector('.payment-information__tooltip-icon');
  securityCodeTooltipContent = document.querySelector('.payment-information__tooltip-content');
  
  securityCodeTooltipBtn.addEventListener('click', toggleTooltipIcon);

  // Add blur check to last focusable item in the tooltip
  const focusableItems = securityCodeTooltipPopup.querySelectorAll('button, [href]');
  focusableItems[focusableItems.length - 1].addEventListener('blur', testBlur);

  orderSummary.init();
};
