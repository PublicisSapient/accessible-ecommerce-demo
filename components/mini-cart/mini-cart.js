/* Mini Cart Functions */

const MiniCart = new function () {
    const rootClass = 'mini-cart'
    const el = document.getElementsByClassName(rootClass)[0];
    const buttonEl = el.getElementsByClassName(`${rootClass}__button`)[0];
    const dropdownEl = el.getElementsByClassName(`${rootClass}__dropdown`)[0];
    this.init = function () {
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onButtonBlur = this.onButtonBlur.bind(this);
        this.closeIfMenuBlurred = this.closeIfMenuBlurred.bind(this);

        console.log(el, buttonEl, dropdownEl);
        buttonEl.addEventListener('mouseover', this.onFocus);
        buttonEl.addEventListener('mouseout', this.onBlur);

        buttonEl.addEventListener('focus', this.onFocus);
        buttonEl.addEventListener('blur', this.onButtonBlur);
        
        dropdownEl.addEventListener('focus', this.onFocus, true);
        dropdownEl.addEventListener('blur', this.onButtonBlur, true);
    }

    this.onFocus = function () {
        dropdownEl.classList.add('expanded');
    }

    this.onBlur = function () {
        dropdownEl.classList.remove('expanded');
    }

    this.onButtonBlur = function (e) {
        requestAnimationFrame(
			this.closeIfMenuBlurred.bind(this, e.target, e.currentTarget, e.relatedTarget)
		);
    }

    this.closeIfMenuBlurred = function (target, currentTarget, relatedTarget) {
        console.log('closeIfMenuBlurred', relatedTarget, document.activeElement);
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
        console.log('isFocusLost', isFocusLost)
		if (isFocusLost && !dropdownEl.contains(focusedElement)) {
			this.onBlur();
		}
	}
}

MiniCart.init();