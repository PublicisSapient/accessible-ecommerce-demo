import * as orderSummary from '../../components/order-summary/order-summary';
import { activeElementMatches } from '../../js/utils';
import * as Modal from '../../components/modal/modal';

//let signInForm;
let mainForm;
let shippingSection;
let paymentSection;
let securityCodeTooltip;
let securityCodeTooltipBtn;
let securityCodeTooltipPopup;
let securityCodeTooltipContent;
let billingAddressCheckbox;
let billingFormFields;
let contactInfo;
let shippingInfo;
let paymentInfo;
let editMode = false;

const regex = {
  'email': /^([A-Za-z0-9\-\/\:\;\(\)\$\&\"\=\,\?\*\#\%\^\+\_\.\|\[\]\{\}\<\>\\\'])+\@([A-Za-z0-9_\-])+\.([A-Za-z]{2,16})$/,
  'postal-code': /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
  'phone-number': /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
  'credit-card-number': /^$[0-9]{14}/,
  'expiry-date': /^[0-9]{2}[-\s\/\\]?[0-9]{2}$/,
  'ccv': /^[0-9]{3,4}$/,
};

// START: Tooltip methods
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
// END: Tooltip methods

const prefillBillingAddress = () => {
  const inputs = mainForm.querySelectorAll('input, select');

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

    if (classList.contains('payment-information__expiry-date')) {
      checkExpiryDate(classList);
    } else {
      if (required) {
        valid = regex[inputType] ? regex[inputType].test(value) : Boolean(value);
        // class remove and add return undefined we are just using a tertiray for succinct code
        formValid = valid ? !classList.remove('invalid') : classList.add('invalid');
      }
    }
  };

  inputs.forEach(checkIfInputIsValid);

  const numErrors = form.querySelectorAll('.invalid').length;
  const errorSummary = form.querySelector('.error-summary');
  if (numErrors === 0) {
    errorSummary.classList.add('hidden');
    callBack();
  } else {
    const errorText = numErrors > 1 ? 'errors' : 'error';
    errorSummary.innerText = `You have ${numErrors} ${errorText} in your ${errorSummary.getAttribute('data-section')} form.`;
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

// Registered Users Sign In Form removed for now
/*const onSubmitSignInForm = (e) => {
  e.preventDefault();
  checkForm(signInForm, submitSignInForm);
};

const submitSignInForm = () => {
  const input = signInForm.querySelector('input[type=email]');
  const user = {
    'status' : 'authenticated',
    'email' : input.value
  };
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
};*/

const onSubmitMainForm = (e) => {
  e.preventDefault();
  checkForm(mainForm, submitMainForm);
  
};

const checkExpiryDate = ([first]) => {
  const input = mainForm.querySelector(`input.${first}`);
  const value = input.value;

  // Check date format first
  if (!regex['expiry-date'].test(value)) {
    input.classList.add('invalid');
  // If format is correct, check date validity next
  } else if (regex['expiry-date'].test(value)) {
    const expiryYear = Number(`20${(input.value).substring((input.value).indexOf('/') + 1)}`);
    const expiryMonth = Number((input.value).substring(0, 2));
    const currDate = new Date();
    const currMonth = currDate.getMonth() + 1;
    const currYear = currDate.getFullYear();

    if ((expiryMonth > 12 || expiryMonth < 1) ||
      (expiryYear === currYear && expiryMonth < currMonth) ||
      (expiryYear < currYear)) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }
};

const submitMainForm = () => {
  // Guest email
  const input = mainForm.querySelector('input[type=email]');
  const user = {
    'status' : 'guest',
    'email' : input.value
  };
  localStorage.setItem('user', JSON.stringify(user));

  // Shipping Info
  const inputs = shippingSection.querySelectorAll('input, select');
  let shippingInfo = { };
  inputs.forEach(function(input) {
    shippingInfo[input.getAttribute('name')] = input.value;
  });
  shippingInfo['shipping-method'] = shippingSection.querySelector('input[name=shipping-method]:checked').value;
  localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));

  // Payment Info
  let paymentInfo = { };
  if (billingAddressCheckbox.checked) {
    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo'));
    Object.keys(shippingInfo).forEach(key => {
      if (!key.includes('method')) {
        paymentInfo[key.replace('shipping', 'billing')] = shippingInfo[key];
      }
    });
    paymentInfo['billingAddressSame'] = true;
  } else {
    const inputs = billingFormFields.querySelectorAll('input, select');
    inputs.forEach(function(input) {
      paymentInfo[input.getAttribute('name')] = input.value;
    });
    paymentInfo['billingAddressSame'] = false;
  }
  const creditCardNumber = document.getElementById('credit-card-number').value;
  paymentInfo['cc-last-four-digits'] = creditCardNumber.substring(creditCardNumber.length - 4);
  paymentInfo['cc-expiry-date'] = document.getElementById('expiry-date').value;
  localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));

  mainForm.submit();
};

function getContactInfo() {
  contactInfo = localStorage.getItem('user');
  contactInfo = contactInfo === null ? null : JSON.parse(contactInfo);
  return contactInfo;
}

function getShippingInfo() {
  shippingInfo = localStorage.getItem('shippingInfo');
  return shippingInfo === null ? null : JSON.parse(shippingInfo);
}

function getPaymentInfo() {
  paymentInfo = localStorage.getItem('paymentInfo');
  return paymentInfo === null ? null : JSON.parse(paymentInfo);
}

const setFocus = () => {
  const url = window.location.href;
  const inputId = url.substring(url.indexOf('=') + 1);
  document.querySelector(`input#${inputId}`).focus();
};

const populateFields = () => {
  // Contact Info
  const contactInfo = getContactInfo();
  mainForm.querySelector('#guest-sign-in-email').value = contactInfo.email;

  // Shipping Info
  const shippingInfo = getShippingInfo();
  Object.keys(shippingInfo).forEach(key => {
    if (!key.includes('method') && !key.includes('province')) {
      shippingSection.querySelector(`input[name=${key}]`).value = shippingInfo[key];
    }
  });
  // set Province
  const shippingProvince = shippingInfo['shipping-province'];
  shippingSection.querySelector(`select#shipping-province option[value=${shippingProvince}]`).setAttribute('selected', 'selected');
  // set Shipping Method
  const shippingMethod = shippingInfo['shipping-method'];
  shippingSection.querySelector(`input#${shippingMethod}`).setAttribute('checked', 'checked');

  const paymentInfo = getPaymentInfo();
  if (paymentInfo['billing-address-same'] === true) {
    billingAddressCheckbox.setAttribute('checked', 'checked');
  } else {
    Object.keys(paymentInfo).forEach(key => {
      if (!key.includes('province') && key.includes('billing-')) {
        paymentSection.querySelector(`input[name=${key}]`).value = paymentInfo[key];
      }
    });
    // set Province
    const billingProvince = paymentInfo['billing-province'];
    paymentSection.querySelector(`select#billing-province option[value=${billingProvince}]`).setAttribute('selected', 'selected');

    billingAddressCheckbox.click();
    setFocus();
  }
};


window.onload = () => {
  //signInForm = document.querySelector('.checkout__sign-in-form');
  mainForm = document.querySelector('.checkout__main-form');
  shippingSection = document.querySelector('.checkout__shipping-information');
  paymentSection = document.querySelector('.checkout__payment-information');
  billingFormFields = document.querySelector('.checkout__billing-address-form');

  //signInForm.addEventListener('submit', onSubmitSignInForm);
  mainForm.addEventListener('submit', onSubmitMainForm);

  billingAddressCheckbox = document.querySelector('.billing-address__billing-address-checkbox');
  billingAddressCheckbox.addEventListener('click', hideShowBillingAddress);

  securityCodeTooltip = document.querySelector('.payment-information__tooltip');
  securityCodeTooltipPopup = document.querySelector('.payment-information__tooltip-popup');
  securityCodeTooltipBtn = document.querySelector('.payment-information__tooltip-icon');
  securityCodeTooltipContent = document.querySelector('.payment-information__tooltip-content');
  
  securityCodeTooltipBtn.addEventListener('click', toggleTooltipIcon);

  // Add blur check to last focusable item in the tooltip
  const focusableItems = securityCodeTooltipPopup.querySelectorAll('button, [href]');
  focusableItems[focusableItems.length - 1].addEventListener('blur', testBlur);

  orderSummary.init();
  document.querySelector('.order-summary__summary-controls button').addEventListener('click', onSubmitMainForm);

  if (window.location.href.includes('edit=')) {
    editMode = true;
    populateFields();
  }

  // set the height for the sticky mini cart container
  let stickyMiniCartContainer = document.querySelector(".order-summary--sticky-minicart");
  stickyMiniCartContainer.style.height = stickyMiniCartContainer.querySelector(".order-summary__background").clientHeight + "px";

  Modal.init('construction-modal');
};

export { getContactInfo, getShippingInfo, getPaymentInfo };