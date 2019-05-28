import { trapTabKey } from '../../js/utils';

let billingForm;
let shippingForm;
let securityCodeTooltip;
let securityCodeTooltipBtn;
let securityCodeTooltipPopup;

const regex = {
  'email': /^([A-Za-z0-9\-\/\:\;\(\)\$\&\"\=\,\?\*\#\%\^\+\_\.\|\[\]\{\}\<\>\\\'])+\@([A-Za-z0-9_\-])+\.([A-Za-z]{2,16})$/,
  'postal-code': /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
  'phone-number': /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
  'credit-card-number': /^$[0-9]{14}/,
  'expiry-date': /^[0-9]{2}[-\s\/\\]?[0-9]{2}$/,
  ccv: /^[0-9]{3,4}$/,
};

function openTooltip() {
  securityCodeTooltip.classList.add('visible');
  securityCodeTooltipPopup.setAttribute('aria-hidden', 'false');
  securityCodeTooltipPopup.setAttribute('tabindex', 0);
  securityCodeTooltipPopup.focus();
  securityCodeTooltipBtn.setAttribute('aria-expanded', 'true');

  const securityCodeTooltipClose = securityCodeTooltipPopup.querySelector('.payment-information__tooltip-popup__btn--close');
  securityCodeTooltipClose.addEventListener('click', closeTooltip);

  securityCodeTooltipPopup.addEventListener('keydown', function(event) {
    trapTabKey(securityCodeTooltipPopup, event);
  });
}

function closeTooltip() {
  securityCodeTooltip.classList.remove('visible');
  securityCodeTooltipPopup.setAttribute('aria-hidden', 'true');
  securityCodeTooltipPopup.setAttribute('tabindex', -1);
  securityCodeTooltipBtn.setAttribute('aria-expanded', 'false');
  securityCodeTooltipBtn.focus();
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
  el.checked = false;
};

const prefillBillingAddress = () => {
  const inputs = shippingForm.querySelectorAll('input, select');

  inputs.forEach(input => {
    const { className } = input;
    const billingInput = className ? billingForm.querySelector(`.${className}`) : null;

    if (billingInput) {
      billingInput.value = input.value;
    }
  });
};

const hideShowBillingAddress = () => {
  billingForm.classList.toggle('checkout__billing-address-form--hidden');
  if (billingForm.classList.contains('checkout__billing-address-form--hidden')) {
    prefillBillingAddress();
    clearErrorState(billingForm);
  }
};

const checkForm = (e) => {
  e.preventDefault();
  const form = e.currentTarget.parentNode;
  const inputs = form.querySelectorAll('input, select');

  let formValid = true;

  const checkIfInputIsValid = ({ classList, dataset, type, value }) => {
    let valid = false;
    const required = dataset;
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
    form.submit();
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

  // other listeners
  const billingAddressCheckbox = findButtons(
    '.billing-address__billing-address-checkbox'
  );

  uncheckBillingAddress(billingAddressCheckbox);

  addListeners(
    billingAddressCheckbox,
    hideShowBillingAddress
  );

  securityCodeTooltip = document.querySelector('.payment-information__tooltip');
  securityCodeTooltipPopup = document.querySelector('.payment-information__tooltip-popup');
  securityCodeTooltipBtn = document.querySelector('.payment-information__tooltip-icon');
  
  securityCodeTooltipBtn.addEventListener('click', toggleTooltipIcon);
};
