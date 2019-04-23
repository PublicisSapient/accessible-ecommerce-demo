let billingForm;
let shippingForm;
let securityCodeTooltip;

const regex = {
  email: /^([A-Za-z0-9\-\/\:\;\(\)\$\&\"\=\,\?\*\#\%\^\+\_\.\|\[\]\{\}\<\>\\\')+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,16})$/,
  'postal-code': /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
  'phone-number': /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
  'credit-card-number': /^$[0-9]{14}/,
  'expiry-date': /^[0-9]{2}[-\s\/\\]?[0-9]{2}$/,
  ccv: /^[0-9]{3,4}$/,
};

const showHideSecurityCodeTooltip = (e) => {
  e.preventDefault();
  securityCodeTooltip.classList.toggle('payment-information__tooltip--visible');
};

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
}

const hideShowBillingAddress = () => {
  billingForm.classList.toggle('checkout__billing-address-form--hidden');
  if (billingForm.classList.contains('checkout__billing-address-form--hidden')) {
    prefillBillingAddress();
  }
};

const checkForm = (e) => {
  e.preventDefault();
  const form = e.currentTarget.parentNode;
  const inputs = form.querySelectorAll('input, select');

  let formValid = true;

  const checkIfInputIsValid = ({ classList, dataset, value }) => {
    let valid = false;
    const { required, inputType } = dataset;

    if (required) {
      valid = regex[inputType] ? regex[inputType].test(value) : Boolean(value);
      // class remove and add return undefined we are just using a tertiray for succinct code
      formValid = valid ? !classList.remove('invalid') : classList.add('invalid');
    }
  };

  inputs.forEach(checkIfInputIsValid);

  formValid && form.submit();
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
  securityCodeTooltip = document.querySelector('.payment-information__tooltip');

  // other listeners
  const billingAddressCheckbox = findButtons(
    '.billing-address__billing-address-checkbox'
  );

  uncheckBillingAddress(billingAddressCheckbox);

  addListeners(
    billingAddressCheckbox,
    hideShowBillingAddress
  );

  addListeners(
    findButtons(
      '.payment-information__tooltip'
    ),
    showHideSecurityCodeTooltip
  );
};
