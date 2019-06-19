import * as orderSummary from '../../components/order-summary/order-summary';
import { activeElementMatches } from '../../js/utils';

let signInForm;
let guestSignInForm;
let paymentForm;
let shippingForm;
let securityCodeTooltip;
let securityCodeTooltipBtn;
let securityCodeTooltipPopup;
let securityCodeTooltipContent;
let billingAddressCheckbox;
let billingFormFields;

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

const prefillBillingAddress = () => {
  const inputs = shippingForm.querySelectorAll('input, select');

  inputs.forEach(input => {
    const { className } = input;
    const billingInput = className ? billingFormFields.querySelector(`.${className}`) : null;

    if (billingInput) {
      billingInput.removeAttribute('disabled');
      billingInput.value = input.value;
    }
  });
};

const hideShowBillingAddress = () => {
  billingFormFields.classList.toggle('checkout__billing-address-form--hidden');
  const inputs = billingFormFields.querySelectorAll('input, select');
  if (billingFormFields.classList.contains('checkout__billing-address-form--hidden')) {
    prefillBillingAddress();
    clearErrorState(billingFormFields);
    inputs.forEach(function(input) {
      input.setAttribute('disabled', true);
    });
  } else {
    inputs.forEach(function(input) {
      input.removeAttribute('disabled');
    });
  }
};

const checkForm = (form, callBack) => {
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
    callBack();
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

const onSubmitSignInForm = (e) => {
  e.preventDefault();
  checkForm(signInForm, submitSignInForm);
};

const submitSignInForm = () => {
  const input = signInForm.querySelector('input[type=email]');
  const user = {
    'status' : 'authenticated',
    'email' : input.value
  };
  localStorage.setItem('user', JSON.stringify(user));
};

const onSubmitGuestSignInForm = (e) => {
  e.preventDefault();
  checkForm(guestSignInForm, submitGuestSignInForm);
};

const submitGuestSignInForm = () => {
  const input = guestSignInForm.querySelector('input[type=email]');
  const user = {
    'status' : 'guest',
    'email' : input.value
  };
  localStorage.setItem('user', JSON.stringify(user));
};

const onSubmitShippingForm = (e) => {
  e.preventDefault();
  checkForm(shippingForm, submitShippingForm);
};

const submitShippingForm = () => {
  const inputs = shippingForm.querySelectorAll('input, select');
  let shippingInfo = { };
  inputs.forEach(function(input) {
    shippingInfo[input.getAttribute('name')] = input.value;
  });
  shippingInfo['shipping-method'] = shippingForm.querySelector('input[name=shipping-method]:checked').value;
  localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
};

const onSubmitPaymentForm = (e) => {
  e.preventDefault();
  checkForm(paymentForm, submitPaymentForm);
};

const submitPaymentForm = () => {
  let billingInfo = { };
  if (billingAddressCheckbox.checked) {
    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo'));
    Object.keys(shippingInfo).forEach(key => {
      if (!key.includes('method')) {
        billingInfo[key.replace('shipping', 'billing')] = shippingInfo[key];
      }
    });
  } else {
    const inputs = billingFormFields.querySelectorAll('input, select');
    inputs.forEach(function(input) {
      billingInfo[input.getAttribute('name')] = input.value;
    });
  }
  localStorage.setItem('billingInfo', JSON.stringify(billingInfo));
};

window.onload = () => {
  signInForm = document.querySelector('.checkout__sign-in-form');
  guestSignInForm = document.querySelector('.checkout__guest-sign-in-form');
  paymentForm = document.querySelector('.checkout__payment-information-form');
  shippingForm = document.querySelector('.checkout__shipping-information-form');
  billingFormFields = document.querySelector('.checkout__billing-address-form');

  signInForm.addEventListener('submit', onSubmitSignInForm);
  guestSignInForm.addEventListener('submit', onSubmitGuestSignInForm);
  paymentForm.addEventListener('submit', onSubmitPaymentForm);
  shippingForm.addEventListener('submit', onSubmitShippingForm);

  billingAddressCheckbox = document.querySelector('.billing-address__billing-address-checkbox');
  billingAddressCheckbox.addEventListener('click', hideShowBillingAddress);

  securityCodeTooltip = document.querySelector('.payment-information__tooltip');
  securityCodeTooltipPopup = securityCodeTooltip.querySelector('.payment-information__tooltip-popup');
  securityCodeTooltipBtn = securityCodeTooltip.querySelector('.payment-information__tooltip-icon');
  securityCodeTooltipContent = securityCodeTooltip.querySelector('.payment-information__tooltip-content');
  
  securityCodeTooltipBtn.addEventListener('click', toggleTooltipIcon);

  // Add blur check to last focusable item in the tooltip
  const focusableItems = securityCodeTooltipPopup.querySelectorAll('button, [href]');
  focusableItems[focusableItems.length - 1].addEventListener('blur', testBlur);

  orderSummary.init();
};
