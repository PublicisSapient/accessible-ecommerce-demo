const checkForm = (e) => {
  e.preventDefault();
  const form = e.currentTarget.parentNode;
  const inputs = form.querySelectorAll('input, select');

  const regex = {
    email: /^([A-Za-z0-9\-\/\:\;\(\)\$\&\"\=\,\?\*\#\%\^\+\_\.\|\[\]\{\}\<\>\\\')+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,16})$/,
    'postal-code': /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
    'phone-number': /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    'credit-card-number': /^$[0-9]{14}/,
    'expiry-date': /^[0-9]{2}[-\s\/\\]?[0-9]{2}$/,
    ccv: /^[0-9]{3,4}$/,
  };

  let formValid = true;

  inputs.forEach(({ classList, dataset, value }) => {
    let valid = false;
    const { required, inputType } = dataset;

    if (required) {
      valid = regex[inputType] ? regex[inputType].test(value) : Boolean(value);

      if (valid) {
        classList.remove('invalid');
      } else {
        classList.add('invalid');
        formValid = false;
      }
    }
  });

  formValid && form.submit();
};

const addListeners = (submitButtons = []) => {
  submitButtons.forEach(button => {
    button && button.addEventListener('click', checkForm);
  });
};

const findButtons = (...selectors) => selectors.map(button => document.querySelector(button));

window.onload = () => addListeners(
  findButtons(
    '.sign-in-form__submit',
    '.guest-sign-in__submit',
    '.shipping-form__submit',
    '.payment-information__submit'
  )
);
