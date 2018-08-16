/* Mini Cart Functions */

const MiniCart = function (element) {
    const rootClass = 'mini-cart'
    this.el = element;
    this.buttonEl = this.el.getElementsByClassName(rootClass + "__toggle")[0];
    this.dropdownEl = this.el.getElementsByClassName(rootClass + "__dropdown")[0];
    this.updateElement = this.el.getElementsByClassName(rootClass + "__updated")[0];

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

        // console.log(el, buttonEl, dropdownEl);
        /* buttonEl.addEventListener('mouseover', this.onFocus);
        buttonEl.addEventListener('mouseout', this.onBlur); */
        this.buttonEl.addEventListener('click', this.toggleMenu)

        /* buttonEl.addEventListener('focus', this.onFocus);
        buttonEl.addEventListener('blur', this.onButtonBlur); */

        this.dropdownEl.addEventListener('focus', this.onFocus, true);
        this.dropdownEl.addEventListener('blur', this.onButtonBlur, true);
        //document.addEventListener('click', this.onBodyClick, true); // too global, interferes with gallery.js
        this.buttonEl.addEventListener('blur', this.onButtonBlur);
    },
    update: function(data) {
        const message = `${data.quantity} ${data.name} has been added to your cart.`;
        updateElement.innerHTML = message;
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

        if (!this.dropdownEl.contains(target) && target !== buttonEl) {
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

const miniCartElements = document.querySelectorAll('.mini-cart');
miniCartElements.forEach(function (miniCartElement) {
	const miniCart = new MiniCart(miniCartElement);
});
