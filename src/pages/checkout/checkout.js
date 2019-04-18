const checkoutPage = (function() {
  let signInSubmit;
  let guestSignInSubmit;
  let shippingSubmit;

  const checkForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget.parentNode;
    const inputs = form.querySelectorAll('input, select');
    const emailRegex = new RegExp(/^([A-Za-z0-9\-\/\:\;\(\)\$\&\"\=\,\?\*\#\%\^\+\_\.\|\[\]\{\}\<\>\\\')+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,16})$/);
    let formValid = true;

    inputs.forEach(({ type, classList, dataset, value }) => {
      let valid = false;
      const { required } = dataset;

      if (type === 'select') {
        console.log(value);
      }

      if (required) {
        switch(type) {
          case 'email':
            valid = emailRegex.test(value);
            break;
          case 'select':
          case 'password':
          case 'text':
            valid = Boolean(value);
            break;
          default:
        }

        if (valid) {
          classList.remove('invalid');
        } else {
          classList.add('invalid');
          formValid = false;
        }
      }
    });

    if (formValid) {
      form.submit();
    }
  };

  const addListeners = () => {
    signInSubmit.addEventListener('click', checkForm);
    guestSignInSubmit.addEventListener('click', checkForm);
    shippingSubmit.addEventListener('click', checkForm);
  };

  const defineEls = () => {
    signInSubmit = document.querySelector('.sign-in-form__submit');
    guestSignInSubmit = document.querySelector('.guest-sign-in__submit');
    shippingSubmit = document.querySelector('.shipping-form__submit');
  };

  const init = () => {
    defineEls();
    addListeners();
  };

  return {
    init,
  }
})();

window.onload = checkoutPage.init;

