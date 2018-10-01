/* Mini Cart Functions */
import { capitalize } from 'Utilities';

const MiniCart = function (element) {
    const rootClass = 'mini-cart'
    this.el = element;
    this.quantity = 0;
    this.buttonEl = this.el.getElementsByClassName(rootClass + "__toggle")[0];
    this.dropdownEl = this.el.getElementsByClassName(rootClass + "__dropdown")[0];
    this.updateElement = this.el.getElementsByClassName(rootClass + "__updated")[0];
    // debugger;
    this.initEvents();
}
MiniCart.prototype = {
    initEvents: function () {
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onButtonBlur = this.onButtonBlur.bind(this);
        this.closeIfMenuBlurred = this.closeIfMenuBlurred.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.onBodyClick = this.onBodyClick.bind(this);

        this.buttonEl.addEventListener('click', this.toggleMenu)

        this.dropdownEl.addEventListener('focus', this.onFocus, true);
        this.dropdownEl.addEventListener('blur', this.onButtonBlur, true);
        document.addEventListener('click', this.onBodyClick.bind(this), true); // too global, interferes with gallery.js
        this.buttonEl.addEventListener('blur', this.onButtonBlur.bind(this));

        document.addEventListener('update:cart', this.update.bind(this));
    },
    update: function(evt) {
      console.log('update: ', evt.detail);
        const message = `${evt.detail.quantity} ${evt.detail.name} has been added to your cart.`;
        const newQty = this.updateQuantity(evt.detail.quantity);
        // updateElement.innerHTML = message;
        this.el.querySelector('.mini-cart__visible-label--amount').innerHTML = newQty
        this.el.querySelector('.mini-cart__aria span').innerHTML = newQty;
        this.el.querySelector('.mini-cart__item-title').innerHTML = evt.detail.name;
        this.el.querySelector('.mini-cart__size').innerHTML = capitalize(evt.detail.size);
        this.el.querySelector('.mini-cart__color').innerHTML = capitalize(evt.detail.color);
        this.el.querySelector('.mini-cart__total-quantity span').innerHTML = evt.detail.quantity;
        this.el.querySelector('.mini-cart__quantity span').innerHTML = evt.detail.quantity;
        this.el.querySelector('.mini-cart__description--full').innerHTML = `$${evt.detail.price}`;
        this.el.querySelector('.mini-cart__subtotal').innerHTML = this.calculateSubtotal(evt.detail.price);
    },
    updateQuantity: function (qty) {
      this.quantity += Number(qty);
      return this.quantity;
    },
    calculateSubtotal: function (price) {
      return `$${this.quantity * price}`;
    },
    onFocus: function () {
        this.dropdownEl.classList.add('expanded');
        this.buttonEl.setAttribute('aria-expanded', 'true');
    },
    onBlur: function () {
        this.dropdownEl.classList.remove('expanded');
        this.buttonEl.setAttribute('aria-expanded', 'false');
    },
    toggleMenu: function () {
        if (this.dropdownEl.classList.contains('expanded')) {
            this.onBlur();
        } else {
            this.onFocus();
        }
    },
    onButtonBlur: function (e) {
        requestAnimationFrame(
			this.closeIfMenuBlurred.bind(this, e.target, e.currentTarget, e.relatedTarget)
		);
    },
    onBodyClick: function (e) {
        const target = e.target;
        if (this.buttonEl && !this.dropdownEl.contains(target) && target !== this.buttonEl) {
            this.onBlur();
        }
    },
    closeIfMenuBlurred: function (target, currentTarget, relatedTarget) {
        // console.log('closeIfMenuBlurred', 'relatedTarget', relatedTarget, 'activeElement', document.activeElement);
      const focusedElement = relatedTarget || document.activeElement;
      const isFocusLost = (
        focusedElement.parentNode === document.body ||
        focusedElement === document.body ||
        focusedElement === null
      );

		/*
		 * If a user clicks anywhere within the menu that isn't a button, it
		 * shouldn't close the menu.  This happens also should happen when focus is
		 * lost (which is what the `isFocusLost` variable keeps track of).
		 *
		 * If we blurred out of the `.menu_panel`, then we must close the
		 * menu.
		 */
        // console.log('isFocusLost', isFocusLost)
		if (isFocusLost || (!this.dropdownEl.contains(focusedElement) && focusedElement !== this.buttonEl)) {
			this.onBlur();
		}
	}
}

export default MiniCart;
