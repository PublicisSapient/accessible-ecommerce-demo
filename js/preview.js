/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/preview/preview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components sync recursive ^\\.\\/.*\\.js$":
/*!**************************************!*\
  !*** ./components sync ^\.\/.*\.js$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./accordion/accordion.js\": \"./components/accordion/accordion.js\",\n\t\"./breadcrumb/breadcrumb.js\": \"./components/breadcrumb/breadcrumb.js\",\n\t\"./carousel/carousel.js\": \"./components/carousel/carousel.js\",\n\t\"./footer/footer.js\": \"./components/footer/footer.js\",\n\t\"./gallery/gallery.js\": \"./components/gallery/gallery.js\",\n\t\"./global-navigation/global-navigation.js\": \"./components/global-navigation/global-navigation.js\",\n\t\"./mini-cart/mini-cart.js\": \"./components/mini-cart/mini-cart.js\",\n\t\"./modal/modal.js\": \"./components/modal/modal.js\",\n\t\"./product-description/product-description.js\": \"./components/product-description/product-description.js\",\n\t\"./product-grid/product-grid.js\": \"./components/product-grid/product-grid.js\",\n\t\"./product-tile/product-tile.js\": \"./components/product-tile/product-tile.js\",\n\t\"./size-chart/size-chart.js\": \"./components/size-chart/size-chart.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./components sync recursive ^\\\\.\\\\/.*\\\\.js$\";\n\n//# sourceURL=webpack:///./components_sync_^\\.\\/.*\\.js$?");

/***/ }),

/***/ "./components/accordion/accordion.js":
/*!*******************************************!*\
  !*** ./components/accordion/accordion.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Accordion = function Accordion(element) {\n\tthis.element = element;\n\tthis.accordionPanels = element.querySelectorAll('.accordion-panel');\n\n\tthis.initEvents();\n};\n\nAccordion.prototype = {\n\tsetFocusOnContent: function setFocusOnContent(accordionPanel) {\n\t\tvar accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');\n\t\taccordionPanelContent.firstElementChild.focus();\n\t},\n\n\tsetAriaLabelForButton: function setAriaLabelForButton(accordionPanel) {\n\t\tvar accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');\n\t\tvar accordionPanelButton = accordionPanel.querySelector('button');\n\n\t\tif (accordionPanelContent.classList.contains('accordion--open')) {\n\t\t\taccordionPanelButton.setAttribute('aria-label', accordionPanelButton.getAttribute('data-hide-aria-label'));\n\t\t\tthis.setFocusOnContent(accordionPanel);\n\t\t} else {\n\t\t\taccordionPanelButton.setAttribute('aria-label', accordionPanelButton.getAttribute('data-open-aria-label'));\n\t\t}\n\t},\n\n\tonClickToggleAccordionPanel: function onClickToggleAccordionPanel(accordionPanel) {\n\t\treturn function (event) {\n\t\t\tvar accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');\n\t\t\tvar accordionPanelHeading = accordionPanel.querySelector('.accordion-panel_heading');\n\n\t\t\t// toggle the open class\n\t\t\taccordionPanelContent.classList.toggle('accordion--open');\n\t\t\taccordionPanelHeading.classList.toggle('accordion--open');\n\n\t\t\tthis.setAriaLabelForButton(accordionPanel);\n\t\t};\n\t},\n\n\tinitEvents: function initEvents() {\n\t\tvar _this = this;\n\n\t\tthis.accordionPanels.forEach(function (accordionPanel) {\n\t\t\tvar button = accordionPanel.querySelector('button');\n\t\t\t_this.setAriaLabelForButton(accordionPanel);\n\t\t\tbutton.addEventListener('click', _this.onClickToggleAccordionPanel(accordionPanel).bind(_this));\n\t\t});\n\t}\n};\nvar accordionElements = document.querySelectorAll('.accordion');\naccordionElements.forEach(function (accordionElement) {\n\tvar accordion = new Accordion(accordionElement);\n});\n\n//# sourceURL=webpack:///./components/accordion/accordion.js?");

/***/ }),

/***/ "./components/breadcrumb/breadcrumb.js":
/*!*********************************************!*\
  !*** ./components/breadcrumb/breadcrumb.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* Breadcrumb Functions */\n\n\n//# sourceURL=webpack:///./components/breadcrumb/breadcrumb.js?");

/***/ }),

/***/ "./components/carousel/carousel.js":
/*!*****************************************!*\
  !*** ./components/carousel/carousel.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Utilities = __webpack_require__(/*! Utilities */ \"./src/js/utils.js\");\n\nvar Carousel = function Carousel(element) {\n\tvar _this = this;\n\n\tthis.element = element;\n\n\tthis.carouselList = element.querySelector('.carousel__items');\n\tthis.items = this.carouselList.querySelectorAll('.card');\n\tthis.buttonRight = element.querySelector('.carousel__arrow--right');\n\tthis.buttonLeft = element.querySelector('.carousel__arrow--left');\n\n\tthis.carouselPosition = 0;\n\tthis.currentPage = 0;\n\tthis.carouselWidth = function () {\n\t\treturn _this.carouselList.getBoundingClientRect().width;\n\t};\n\tthis.totalWidth = function () {\n\t\treturn _this.carouselList.scrollWidth;\n\t};\n\tthis.itemWidth = function () {\n\t\treturn _this.items[0].getBoundingClientRect().width;\n\t};\n\tthis.numItemsVisible = function () {\n\t\treturn Math.floor(_this.carouselWidth() / _this.itemWidth());\n\t};\n\tthis.minX = function () {\n\t\treturn _this.totalWidth() >= _this.carouselWidth() ? -(Math.floor(_this.totalWidth() / _this.carouselWidth()) * _this.carouselWidth()) + _this.carouselWidth() - _this.totalWidth() % _this.carouselWidth() : 0;\n\t};\n\tthis.pageCount = function () {\n\t\treturn Math.ceil(_this.items.length / _this.numItemsVisible());\n\t};\n\n\tthis.shiftAmount = function () {\n\t\treturn _this.numItemsVisible() * _this.itemWidth() * -1;\n\t};\n\n\tthis.initEvents();\n\tthis.refreshCarousel();\n}; /* Carousel Functions */\n\nCarousel.prototype = {\n\tshiftCarousel: function shiftCarousel(pageIndex) {\n\t\tthis.currentPage = pageIndex;\n\t\tvar amount = this.currentPage < this.pageCount() - 1 ? this.currentPage * this.shiftAmount() : this.minX();\n\t\tthis.carouselList.style.transform = 'translatex(' + amount + 'px)';\n\t\tthis.refreshArrowButtons();\n\t},\n\ttoggleButton: function toggleButton(button, isDisabled) {\n\t\treturn isDisabled ? button.setAttribute(\"disabled\", \"disabled\") : button.removeAttribute(\"disabled\");\n\t},\n\trefreshArrowButtons: function refreshArrowButtons() {\n\t\tthis.toggleButton(this.buttonLeft, this.currentPage === 0);\n\t\tthis.toggleButton(this.buttonRight, this.currentPage === this.pageCount() - 1);\n\t},\n\trefreshCarousel: function refreshCarousel() {\n\t\t/*\n  * TODO: Add a (buffered) window resize event call that will reflow the carousel if the page count needs to change\n   */\n\n\t\tthis.refreshArrowButtons();\n\t},\n\n\n\tinitEvents: function initEvents() {\n\t\tvar _this2 = this;\n\n\t\tthis.buttonRight.addEventListener('click', function (e) {\n\t\t\t_this2.shiftCarousel(_this2.currentPage + 1);\n\t\t});\n\n\t\tthis.buttonLeft.addEventListener('click', function (e) {\n\t\t\t_this2.shiftCarousel(_this2.currentPage - 1);\n\t\t});\n\n\t\tthis.items.forEach(function (card) {\n\t\t\tcard.addEventListener('focusin', function (evt) {\n\t\t\t\tvar cardIndex = (0, _Utilities.getElementIndex)(evt.target.closest(\".card\"));\n\t\t\t\tvar cardPage = Math.ceil((cardIndex + 1) / _this2.numItemsVisible()) - 1;\n\t\t\t\tif (cardPage != _this2.currentPage) {\n\t\t\t\t\t_this2.shiftCarousel(cardPage);\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t}\n};\n\nvar carouselElements = document.querySelectorAll('.carousel');\ncarouselElements.forEach(function (carouselElement) {\n\tvar carousel = new Carousel(carouselElement);\n});\n\n//# sourceURL=webpack:///./components/carousel/carousel.js?");

/***/ }),

/***/ "./components/footer/footer.js":
/*!*************************************!*\
  !*** ./components/footer/footer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* Footer Functions */\n\n/**\n * The following group of functions are for validating the subscription email form, but it should be possible to encapsulate the code and extend it for any forms\n * Current approach is to use \"Float labels\" (https://css-tricks.com/float-labels-css/), but this hasn't been approved by UX or Accessibility :\\\n * The float labels are a CSS-only solution though, and the JS code shouln't be affected if a decision is made to not use them\n *\n * General Approach to form validation includes:\n * 1. Form fields don't show errors until the form is submitted\n * 2. If there are errors on submit, the first field with an error will receive focus\n * 3. Any fields with errors will have the error text appended to the input label so it will be read out on focus\n * 4. Once the form has entered a 'validating' state (post submit), *fields that had errors* will be re-validated on blur, and the UI will update accordingly\n */\n\n/**\n * Valid form handler\n * @todo Add success functionality\n * @param  {HTMLFormElement} form - the form element that has been validated\n */\nfunction handleValidForm(form) {\n    console.log('%c VALID FORM ', 'background: hotpink; color: white');\n}\n/**\n * Invalid form handler\n * Puts the focus onto the first field with an error\n * @todo Extend functionality to cover all types of form elements\n * @param  {HTMLInputElement} form - the form element that has been validated\n */\nfunction handleInvalidForm(form) {\n    form.querySelector('input:invalid').focus();\n}\n/**\n * Validate single form input\n * Invalid fields will inject the validation message from the <input> element's data-validation-message attribute into the element's label\n * Invalid inputs will get the .has-error class added to them\n * Valid inputs will clear .has-error classes and remove any injected validation messages\n * @todo Extend functionality to cover all types of form elements\n * @todo break message generation/destruction out into separate functions\n * @param  {HTMLInputElement} inputElement - input element being validated\n */\nfunction validateInputElement(inputElement) {\n    var inputElementLabel = document.querySelector('label[for=\"' + inputElement.id + '\"]');\n    if (!inputElement.checkValidity()) {\n        if (inputElementLabel.querySelector('.input__validation-message')) return;\n\n        var errorMessage = document.createElement('span');\n        errorMessage.innerHTML = \" \" + inputElement.dataset.validationMessage;\n        errorMessage.classList.add('input__validation-message');\n        inputElementLabel.appendChild(errorMessage);\n\n        inputElement.classList.add('has-error');\n    } else {\n        var _errorMessage = inputElementLabel.querySelector('.input__validation-message');\n        if (_errorMessage) _errorMessage.parentNode.removeChild(_errorMessage);\n\n        inputElement.classList.remove('has-error');\n    }\n}\n/**\n * Loop over form inputs and update the UI based on their validity\n * @param  {HTMLFormElement} form - form being validated\n */\nfunction toggleInputValidityUI(form) {\n    form.querySelectorAll('input[type=\"text\"], input[type=\"email\"]').forEach(validateInputElement);\n}\n/**\n * Adds or removes the helper CSS class .edited to form element.\n * CSS class is added if field has content\n * CSS class is removed if field has no content\n * The .edited class allows for edge-case styling when a field has content but is not valid\n * @param  {HTMLInputElement} inputElement\n */\nfunction markInputAsEdited(inputElement) {\n    if (inputElement.value) {\n        inputElement.classList.add('edited');\n    } else {\n        inputElement.classList.remove('edited');\n    }\n}\n/**\n * Prevent standard submit event, validate fields and handle valid/invalid forms accordingly\n * @param  {Event} e - Form 'submit' event\n */\nfunction submitClicked(e) {\n    e.preventDefault();\n    toggleInputValidityUI(this);\n\n    if (!this.checkValidity()) {\n        handleInvalidForm(this);\n    } else {\n        //Form is valid - clear any remnants of invalid fields\n        handleValidForm(this);\n    }\n}\n/**\n * Loop over all forms and their inputElement children to add validation Event Listeners\n * @todo Extend functionality to cover all types of form inputs\n * @param  {HTMLFormElement} form\n */\nvar formsToValidate = document.querySelectorAll('[data-validate]');\nformsToValidate.forEach(function (form) {\n    form.addEventListener('submit', submitClicked);\n\n    form.querySelectorAll('input[type=\"text\"], input[type=\"email\"]').forEach(function (inputElement) {\n        inputElement.addEventListener('blur', function () {\n            markInputAsEdited(inputElement);\n            if (inputElement.classList.contains('has-error')) {\n                validateInputElement(inputElement);\n            }\n        });\n    });\n});\n\n//# sourceURL=webpack:///./components/footer/footer.js?");

/***/ }),

/***/ "./components/gallery/gallery.js":
/*!***************************************!*\
  !*** ./components/gallery/gallery.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Gallery = function Gallery(element) {\n  this.element = element;\n  this.thumbnailsEl = this.element.getElementsByClassName('gallery__thumbnail-list')[0];\n  this.thumbnailButtonEls = this.thumbnailsEl.querySelectorAll('.gallery__thumbnail-list-item button');\n  this.mainImageEl = document.getElementById('gallery__main-image');\n  this.mainImageContainerEl = this.element.getElementsByClassName('gallery__main-image__inner-container')[0];\n  this.minimizeEl = document.getElementById('gallery__minimize');\n  this.maximizeEl = document.getElementById('gallery__maximize');\n  this.scrollLeftEl = document.getElementById('gallery__thumbnail-container__scroll-left');\n  this.scrollRightEl = document.getElementById('gallery__thumbnail-container__scroll-right');\n\n  this.thumbnailWidth = this.element.getElementsByClassName('gallery__thumbnail-list-item')[0].offsetWidth;\n  this.containerWidth = document.getElementsByClassName('gallery__thumbnail-container')[0].offsetWidth;\n  this.thumbnailsWidth = this.thumbnailWidth * this.thumbnailsEl.children.length;\n  this.totalOffset = Math.floor((this.containerWidth - this.thumbnailsWidth) / 100) * 100;\n\n  this.initEvents();\n};\n\nGallery.prototype = {\n  minimizeButtonClick: function minimizeButtonClick() {\n    this.mainImageEl.style.width = \"100%\";\n    this.mainImageContainerEl.style.overflow = \"initial\";\n    this.minimizeEl.setAttribute(\"disabled\", true);\n    this.maximizeEl.removeAttribute(\"disabled\");\n  },\n  maximizeButtonClick: function maximizeButtonClick() {\n    this.mainImageEl.style.width = \"150%\";\n    this.mainImageContainerEl.style.overflow = \"auto\";\n    this.maximizeEl.setAttribute(\"disabled\", true);\n    this.minimizeEl.removeAttribute(\"disabled\");\n  },\n  initEvents: function initEvents() {\n    var _this = this;\n\n    this.thumbnailButtonEls.forEach(function (button) {\n      button.addEventListener('click', _this.handleImageClick.bind(_this));\n    });\n\n    this.maximizeEl.addEventListener('click', this.maximizeButtonClick.bind(this));\n    this.minimizeEl.addEventListener('click', this.minimizeButtonClick.bind(this));\n    this.scrollLeftEl.addEventListener('mouseup', this.handleScroll.bind(this));\n    this.scrollRightEl.addEventListener('mouseup', this.handleScroll.bind(this));\n  },\n  handleImageClick: function handleImageClick(evt) {\n    var image = evt.currentTarget.getElementsByTagName('img')[0];\n    this.mainImageEl.setAttribute(\"src\", image.attributes[\"data-main-image-url\"].value);\n  },\n  handleLeftScroll: function handleLeftScroll() {\n    this.thumbnailsEl.style.marginLeft = this.getCurrentPosition() - this.thumbnailWidth + 'px';\n  },\n  handleRightScroll: function handleRightScroll() {\n    this.thumbnailsEl.style.marginLeft = this.getCurrentPosition() + this.thumbnailWidth + 'px';\n  },\n  handleScroll: function handleScroll(evt) {\n    var dir = evt.currentTarget.dataset.scrollDir;\n    if (this.canScroll()) {\n      if (dir === 'left') {\n        this.handleLeftScroll();\n      } else {\n        this.handleRightScroll();\n      }\n    }\n    this.toggleControls();\n  },\n  canScroll: function canScroll() {\n    var curPos = this.getCurrentPosition();\n    return curPos <= 0 && curPos >= this.totalOffset;\n  },\n  toggleControls: function toggleControls() {\n    var curPos = this.getCurrentPosition();\n    if (curPos < 0 && curPos > this.totalOffset) {\n      this.scrollRightEl.removeAttribute('disabled');\n      this.scrollLeftEl.removeAttribute('disabled');\n    }\n    if (curPos >= 0) {\n      this.scrollLeftEl.setAttribute('disabled', true);\n    }\n    if (curPos <= this.totalOffset) {\n      this.scrollRightEl.setAttribute('disabled', true);\n    }\n  },\n  getCurrentPosition: function getCurrentPosition() {\n    return Number(this.thumbnailsEl.style.marginLeft.replace('px', '')) || 0;\n  }\n};\n\nvar galleryElements = document.querySelectorAll('.gallery');\ngalleryElements.forEach(function (galleryElement) {\n  var gallery = new Gallery(galleryElement);\n});\n\n//# sourceURL=webpack:///./components/gallery/gallery.js?");

/***/ }),

/***/ "./components/global-navigation/global-navigation.js":
/*!***********************************************************!*\
  !*** ./components/global-navigation/global-navigation.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _loader = __webpack_require__(/*! ../../src/js/loader */ \"./src/js/loader.js\");\n\nvar _loader2 = _interopRequireDefault(_loader);\n\nvar _miniCart = __webpack_require__(/*! ../mini-cart/mini-cart */ \"./components/mini-cart/mini-cart.js\");\n\nvar _miniCart2 = _interopRequireDefault(_miniCart);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* Global Nav Functions */\nvar menuItems = document.querySelectorAll('li.has-submenu > a');\nvar activeMenuItem = null;\n\n// hamburger menu\nfunction GlobalNavigation() {\n  console.log('GlobalNavigation');\n  this.miniCart = {};\n  this.isMenuOpen = false;\n  this.hamburgerMenuButton = document.getElementById('button');\n  this.hamburgerMenuButton.addEventListener('click', this.handleHamburgerMenuClick.bind(this));\n\n  this.loadMiniCart();\n}\n\nGlobalNavigation.prototype = {\n  loadMiniCart: function loadMiniCart() {\n    var _this = this;\n\n    _loader2.default.load('../../components/mini-cart/mini-cart', '[data-component=\"mini-cart\"]').then(function () {\n      var miniCartElement = document.querySelector('.mini-cart');\n      _this.miniCart = new _miniCart2.default(miniCartElement);\n    });\n  },\n\n  handleHamburgerMenuClick: function handleHamburgerMenuClick(evt) {\n    this.isMenuOpen = !this.isMenuOpen;\n    this.hamburgerMenuButton.setAttribute('aria-expanded', this.isMenuOpen);\n  },\n\n  onDocumentClick: function onDocumentClick(event) {\n    var target = event.target;\n    if (!target.classList.contains('has-submenu') && !target.classList.contains('open') && !target.classList.contains('menu-item-heading')) {\n      closeAllMenus();\n      removeOnDocumentClickEventHandler();\n    }\n  },\n\n  addOnDocumentClickEventHandler: function addOnDocumentClickEventHandler() {\n    setTimeout(function () {\n      window.addEventListener('click', onDocumentClick);\n    }, 1);\n  },\n\n  removeOnDocumentClickEventHandler: function removeOnDocumentClickEventHandler() {\n    window.removeEventListener('click', onDocumentClick);\n  },\n\n  onBlurTabableElement: function onBlurTabableElement(event) {\n    removeTabOutEventHandler(activeMenuItem);\n    closeAllMenus();\n  },\n\n  addTabOutEventHandler: function addTabOutEventHandler(element) {\n    var tabableElements = element.querySelectorAll('.submenu a');\n    var tabableElementsLength = tabableElements.length;\n    if (tabableElementsLength > 0) {\n      var lastElement = tabableElements[tabableElementsLength - 1];\n      lastElement.addEventListener('blur', onBlurTabableElement);\n    }\n  },\n\n  removeTabOutEventHandler: function removeTabOutEventHandler(element) {\n    var tabableElements = element.querySelectorAll('.submenu a');\n    var tabableElementsLength = tabableElements.length;\n    if (tabableElementsLength > 0) {\n      var lastElement = tabableElements[tabableElementsLength - 1];\n      lastElement.removeEventListener('blur', onBlurTabableElement);\n    }\n  },\n\n  closeMenu: function closeMenu(element) {\n    if (element.parentNode.classList.contains('open')) {\n      element.parentNode.classList.remove('open');\n      element.setAttribute('aria-expanded', \"false\");\n      activeMenuItem = null;\n    }\n  },\n\n  openMenu: function openMenu(element) {\n    closeAllMenus();\n    var parent = element.parentNode;\n    parent.classList.add('open');\n    element.setAttribute('aria-expanded', \"true\");\n    activeMenuItem = parent;\n    addOnDocumentClickEventHandler();\n    addTabOutEventHandler(activeMenuItem);\n  },\n\n  closeAllMenus: function closeAllMenus() {\n    [].forEach.call(menuItems, closeMenu);\n  },\n\n  onClickMenuItemWithSubmenu: function onClickMenuItemWithSubmenu(event) {\n    event.preventDefault();\n    var target = event.currentTarget;\n    target.parentNode.classList.contains('open') ? closeMenu(target) : openMenu(target);\n    return false;\n  }\n};\n\nArray.prototype.forEach.call(menuItems, function (el, i) {\n  el.addEventListener(\"click\", GlobalNavigation.onClickMenuItemWithSubmenu);\n});\n\nexports.default = GlobalNavigation;\n\n//# sourceURL=webpack:///./components/global-navigation/global-navigation.js?");

/***/ }),

/***/ "./components/mini-cart/mini-cart.js":
/*!*******************************************!*\
  !*** ./components/mini-cart/mini-cart.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Utilities = __webpack_require__(/*! Utilities */ \"./src/js/utils.js\");\n\nvar MiniCart = function MiniCart(element) {\n    var rootClass = 'mini-cart';\n    this.el = element;\n    this.quantity = 0;\n    this.buttonEl = this.el.getElementsByClassName(rootClass + \"__toggle\")[0];\n    this.dropdownEl = this.el.getElementsByClassName(rootClass + \"__dropdown\")[0];\n    this.updateElement = this.el.getElementsByClassName(rootClass + \"__updated\")[0];\n    // debugger;\n    this.initEvents();\n}; /* Mini Cart Functions */\n\nMiniCart.prototype = {\n    initEvents: function initEvents() {\n        this.onFocus = this.onFocus.bind(this);\n        this.onBlur = this.onBlur.bind(this);\n        this.onButtonBlur = this.onButtonBlur.bind(this);\n        this.closeIfMenuBlurred = this.closeIfMenuBlurred.bind(this);\n        this.toggleMenu = this.toggleMenu.bind(this);\n        this.onBodyClick = this.onBodyClick.bind(this);\n\n        this.buttonEl.addEventListener('click', this.toggleMenu);\n\n        this.dropdownEl.addEventListener('focus', this.onFocus, true);\n        this.dropdownEl.addEventListener('blur', this.onButtonBlur, true);\n        document.addEventListener('click', this.onBodyClick.bind(this), true); // too global, interferes with gallery.js\n        this.buttonEl.addEventListener('blur', this.onButtonBlur.bind(this));\n\n        document.addEventListener('update:cart', this.update.bind(this));\n    },\n    update: function update(evt) {\n        console.log('update: ', evt.detail);\n        var message = evt.detail.quantity + ' ' + evt.detail.name + ' has been added to your cart.';\n        var newQty = this.updateQuantity(evt.detail.quantity);\n        // updateElement.innerHTML = message;\n        this.el.querySelector('.mini-cart__visible-label--amount').innerHTML = newQty;\n        this.el.querySelector('.mini-cart__aria span').innerHTML = newQty;\n        this.el.querySelector('.mini-cart__item-title').innerHTML = evt.detail.name;\n        this.el.querySelector('.mini-cart__size').innerHTML = (0, _Utilities.capitalize)(evt.detail.size);\n        this.el.querySelector('.mini-cart__color').innerHTML = (0, _Utilities.capitalize)(evt.detail.color);\n        this.el.querySelector('.mini-cart__total-quantity span').innerHTML = evt.detail.quantity;\n        this.el.querySelector('.mini-cart__quantity span').innerHTML = evt.detail.quantity;\n        this.el.querySelector('.mini-cart__description--full').innerHTML = '$' + evt.detail.price;\n        this.el.querySelector('.mini-cart__subtotal').innerHTML = this.calculateSubtotal(evt.detail.price);\n    },\n    updateQuantity: function updateQuantity(qty) {\n        this.quantity += Number(qty);\n        return this.quantity;\n    },\n    calculateSubtotal: function calculateSubtotal(price) {\n        return '$' + this.quantity * price;\n    },\n    onFocus: function onFocus() {\n        this.dropdownEl.classList.add('expanded');\n        this.buttonEl.setAttribute('aria-expanded', 'true');\n    },\n    onBlur: function onBlur() {\n        this.dropdownEl.classList.remove('expanded');\n        this.buttonEl.setAttribute('aria-expanded', 'false');\n    },\n    toggleMenu: function toggleMenu() {\n        if (this.dropdownEl.classList.contains('expanded')) {\n            this.onBlur();\n        } else {\n            this.onFocus();\n        }\n    },\n    onButtonBlur: function onButtonBlur(e) {\n        requestAnimationFrame(this.closeIfMenuBlurred.bind(this, e.target, e.currentTarget, e.relatedTarget));\n    },\n    onBodyClick: function onBodyClick(e) {\n        var target = e.target;\n        if (this.buttonEl && !this.dropdownEl.contains(target) && target !== this.buttonEl) {\n            this.onBlur();\n        }\n    },\n    closeIfMenuBlurred: function closeIfMenuBlurred(target, currentTarget, relatedTarget) {\n        // console.log('closeIfMenuBlurred', 'relatedTarget', relatedTarget, 'activeElement', document.activeElement);\n        var focusedElement = relatedTarget || document.activeElement;\n        var isFocusLost = focusedElement.parentNode === document.body || focusedElement === document.body || focusedElement === null;\n\n        /*\n         * If a user clicks anywhere within the menu that isn't a button, it\n         * shouldn't close the menu.  This happens also should happen when focus is\n         * lost (which is what the `isFocusLost` variable keeps track of).\n         *\n         * If we blurred out of the `.menu_panel`, then we must close the\n         * menu.\n         */\n        // console.log('isFocusLost', isFocusLost)\n        if (isFocusLost || !this.dropdownEl.contains(focusedElement) && focusedElement !== this.buttonEl) {\n            this.onBlur();\n        }\n    }\n};\n\nexports.default = MiniCart;\n\n//# sourceURL=webpack:///./components/mini-cart/mini-cart.js?");

/***/ }),

/***/ "./components/modal/modal.js":
/*!***********************************!*\
  !*** ./components/modal/modal.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Utilities = __webpack_require__(/*! Utilities */ \"./src/js/utils.js\");\n\nvar Modal = function Modal(element, mainSelector) {\n\tthis.element = element;\n\tthis.focusedElementBeforeModal;\n\tthis.main = document.querySelector(mainSelector) || document.body;\n\n\tthis.shown = false;\n\n\tthis.initEvents();\n}; // This script from https://www.cssscript.com/fully-accessible-modal-window-with-pure-javascript/\n// It has been reformatted to fit the in-house component coding standards\n// License: MIT\n\nModal.prototype = {\n\tonKeyDown: function onKeyDown(event) {\n\t\tif (this.shown && event.which === 27) {\n\t\t\tevent.preventDefault();\n\t\t\tthis.hide();\n\t\t}\n\n\t\tif (this.shown && event.which === 9) {\n\t\t\t(0, _Utilities.trapTabKey)(this.element, event);\n\t\t}\n\t},\n\tonFocus: function onFocus() {\n\t\tif (this.shown && !this.element.contains(event.target)) {\n\t\t\t(0, _Utilities.setFocusToFirstItem)(this.element);\n\t\t}\n\t},\n\tshow: function show() {\n\t\tthis.shown = true;\n\t\tthis.element.setAttribute('aria-hidden', 'false');\n\t\tthis.element.setAttribute('aria-expanded', 'true');\n\t\tthis.main.setAttribute('aria-hidden', 'true');\n\t\tthis.focusedElementBeforeModal = document.activeElement;\n\t\t(0, _Utilities.setFocusToFirstItem)(this.element);\n\t},\n\thide: function hide() {\n\t\tthis.shown = false;\n\t\tthis.element.setAttribute('aria-hidden', 'true');\n\t\tthis.element.setAttribute('aria-expanded', 'false');\n\t\tthis.main.setAttribute('aria-hidden', 'false');\n\t\tthis.focusedElementBeforeModal.focus();\n\t},\n\tinitEvents: function initEvents() {\n\t\tvar _this = this;\n\n\t\tdocument.addEventListener('keydown', this.onKeyDown.bind(this));\n\n\t\tdocument.body.addEventListener('focus', this.onFocus.bind(this), true);\n\n\t\t(0, _Utilities.$$)('[data-modal-show=\"' + this.element.id + '\"]').forEach(function (opener) {\n\t\t\treturn opener.addEventListener('click', _this.show.bind(_this));\n\t\t});\n\n\t\t(0, _Utilities.$$)('[data-modal-hide]', this.element).concat((0, _Utilities.$$)('[data-modal-hide=\"' + this.element.id + '\"]')).forEach(function (closer) {\n\t\t\treturn closer.addEventListener('click', _this.hide.bind(_this));\n\t\t});\n\t}\n};\n\nvar modalElements = document.querySelectorAll('.modal');\nmodalElements.forEach(function (modalElement) {\n\tvar modal = new Modal(modalElement, '#content');\n});\n\n//# sourceURL=webpack:///./components/modal/modal.js?");

/***/ }),

/***/ "./components/product-description/product-description.js":
/*!***************************************************************!*\
  !*** ./components/product-description/product-description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar AddToCart = function AddToCart(element) {\n  this.element = element;\n  this.quantity = 1;\n  this.quantityInput = document.getElementById('quantity');\n  this.ariaQuantity = this.element.querySelector('.quantity-comp__aria span');\n  this.initEvents();\n};\n\nAddToCart.prototype = {\n  initEvents: function initEvents() {\n    this.incrementBtn = this.element.querySelector('.quantity-comp__increase');\n    this.decrementBtn = this.element.querySelector('.quantity-comp__decrease');\n    this.element.addEventListener('submit', this.onFormSubmit.bind(this));\n    this.incrementBtn.addEventListener('click', this.increment.bind(this));\n    this.decrementBtn.addEventListener('click', this.decrement.bind(this));\n  },\n  onFormSubmit: function onFormSubmit(e) {\n    e.preventDefault();\n    var formData = {\n      name: this.element.querySelector('[name=name]').value,\n      quantity: this.element.querySelector('[name=quantity]').value,\n      color: this.element.querySelector('[name=color]:checked').value,\n      size: this.element.querySelector('[name=size]:checked').value,\n      price: 16.99\n    };\n    var event = new CustomEvent('update:cart', {\n      bubbles: true,\n      detail: formData\n    });\n    document.dispatchEvent(event);\n  },\n  increment: function increment() {\n    console.log('increment: ', this.quantity);\n    this.quantity++;\n    this.quantityInput.value = this.quantity;\n    this.ariaQuantity.innerHTML = this.quantity;\n  },\n  decrement: function decrement() {\n    if (this.quantity > 1) {\n      this.quantity--;\n      this.quantityInput.value = this.quantity;\n      this.ariaQuantity.innerHTML = this.quantity;\n    }\n  }\n};\nvar productForms = document.querySelectorAll('.product-form');\nproductForms.forEach(function (productForm) {\n  var newProductForm = new AddToCart(productForm);\n});\n\n//# sourceURL=webpack:///./components/product-description/product-description.js?");

/***/ }),

/***/ "./components/product-grid/product-grid.js":
/*!*************************************************!*\
  !*** ./components/product-grid/product-grid.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ProductGrid = function ProductGrid() {\n\n\t/* Product Grid Functions */\n\tvar clearFiltersButton = document.querySelector('#showingNumberProducts__clear');\n\tvar numberOfProductsInGridAriaLiveRegion = document.querySelector('#showingNumberProducts__description');\n\tvar numberOfProductsHeading = document.querySelector('#showingNumberProducts__heading');\n\tvar numberOfFiltersAppliedAriaLiveRegion = document.querySelector('#showingNumberFilters__description');\n\tvar filterInputs = document.querySelectorAll('.productGrid__filter');\n\tvar productGrid = document.querySelector('#product-grid');\n\tvar products = productGrid.querySelectorAll('.product');\n\n\t// Add click event to clear filters button\n\tclearFiltersButton.addEventListener('click', function () {\n\t\tsetTimeout(updateNumberOfAppliedFiltersAndProductsShowing, 1);\n\t});\n\n\tfilterInputs.forEach(function (filterInput) {\n\t\tfilterInput.addEventListener('change', updateNumberOfAppliedFiltersAndProductsShowing);\n\t});\n\n\tfunction updateNumberOfAppliedFiltersAndProductsShowing() {\n\t\tupdateNumberOfAppliedFilters();\n\t\tupdateNumberOfProductsShowing();\n\t}\n\n\tfunction updateNumberOfAppliedFilters() {\n\t\tvar numberOfAppliedFilters = 0;\n\t\tfilterInputs.forEach(function (filterInput) {\n\t\t\tif (filterInput.checked) {\n\t\t\t\tnumberOfAppliedFilters++;\n\t\t\t}\n\t\t});\n\t\t// if the number of filters is 1 then we need to use singlular filter\n\t\tvar filterOrFilters = numberOfAppliedFilters === 1 ? 'filter' : 'filters';\n\n\t\tshowingNumberFilters__description.innerHTML = numberOfAppliedFilters + ' ' + filterOrFilters + ' applied';\n\t\tif (numberOfAppliedFilters > 0) {\n\t\t\tclearFiltersButton.setAttribute('aria-label', 'Clear ' + numberOfAppliedFilters + ' applied product ' + filterOrFilters + '.');\n\t\t} else {\n\t\t\tclearFiltersButton.setAttribute('aria-label', 'Clear product filters. There are no filters currently applied.');\n\t\t}\n\t}\n\n\tfunction updateNumberOfProductsShowing() {\n\t\t// for the demo we will generate a random number of products available between 0 and 100\n\t\tvar randomNumberOfProducts = Math.floor(Math.random() * Math.floor(100));\n\t\tnumberOfProductsInGridAriaLiveRegion.innerHTML = 'Showing ' + randomNumberOfProducts + ' products';\n\t}\n\n\tvar pagination = document.querySelectorAll('[data-go-to-page]');\n\n\tpagination.forEach(function (paginationBtn) {\n\t\tpaginationBtn.addEventListener(\"click\", function (evt) {\n\t\t\tevt.preventDefault();\n\t\t\tlocation.hash = \"!/\" + paginationBtn.dataset.goToPage;\n\t\t\t// refresh product list...\n\t\t\tproductGrid.style.opacity = 0.1;\n\t\t\tsetTimeout(function () {\n\t\t\t\tproductGrid.style.opacity = 1;\n\n\t\t\t\t// set focus state\n\t\t\t\tnumberOfProductsHeading.focus();\n\t\t\t}, 500);\n\t\t});\n\t});\n\n\tproducts.forEach(function (product, index) {\n\t\tvar addToCartButton = product.querySelector('.product__cta');\n\t\tvar quantityComponent = product.querySelector('.quantity-comp');\n\t\tvar quantityComponentValue = product.querySelector('.quantity-comp__text');\n\t\tvar productName = product.querySelector('.product__heading').innerHTML;\n\t\tvar decreaseQuantityButton = product.querySelector('.quantity-comp__decrease');\n\t\tvar increaseQuantityButton = product.querySelector('.quantity-comp__increase');\n\t\tvar productDetails = product.querySelector('.product__details');\n\n\t\taddToCartButton.addEventListener(\"click\", function (evt) {\n\t\t\t// toggle the UI to show the + - component\n\t\t\tquantityComponent.classList.add('show');\n\t\t\taddToCartButton.classList.add('hide');\n\n\t\t\t// update the mini cart with the valid info\n\t\t\tupdateMiniCart('123', quantityComponentValue.value, productName);\n\t\t\tproductDetails.focus();\n\t\t});\n\t});\n\n\tfunction updateMiniCart(sku, quantity, name) {\n\t\tMiniCart.update({\n\t\t\tsku: sku,\n\t\t\tquantity: quantity,\n\t\t\tname: name\n\t\t});\n\t}\n};\n\n//# sourceURL=webpack:///./components/product-grid/product-grid.js?");

/***/ }),

/***/ "./components/product-tile/product-tile.js":
/*!*************************************************!*\
  !*** ./components/product-tile/product-tile.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* Product Tile Functions */\n\n\n//# sourceURL=webpack:///./components/product-tile/product-tile.js?");

/***/ }),

/***/ "./components/size-chart/size-chart.js":
/*!*********************************************!*\
  !*** ./components/size-chart/size-chart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar SizeChart = function SizeChart(element) {\n\tthis.element = element;\n\tthis.table = this.element.querySelector('.size-chart-table');\n\tthis.unitsDisplayed = this.element.querySelector('.units-displayed');\n\tthis.alternateUnits = this.element.querySelector('.alternate-units-displayed');\n\tthis.toggleChildren = this.element.querySelectorAll('.units-toggle');\n\n\tthis.initEvents();\n};\nSizeChart.prototype = {\n\tinitEvents: function initEvents() {\n\t\tthis.element.querySelector('.toggle-size-units-button').addEventListener('click', this.onToggle.bind(this));\n\t},\n\tonToggle: function onToggle() {\n\t\tvar selectedUnits = this.unitsDisplayed.textContent;\n\t\tthis.unitsDisplayed.textContent = selectedUnits === 'inches' ? 'centimeters' : 'inches';\n\t\tthis.alternateUnits.textContent = selectedUnits === 'inches' ? 'inches' : 'centimeters';\n\t\tthis.toggleChildren.forEach(function (toggle) {\n\t\t\ttoggle.classList.toggle('selected');\n\t\t});\n\n\t\tthis.table.classList.toggle('show-inches');\n\t\tthis.table.classList.toggle('show-centimeters');\n\t}\n};\nvar sizeChartElements = document.querySelectorAll('.size-chart');\nsizeChartElements.forEach(function (sizeChartElement) {\n\tvar sizeChart = new SizeChart(sizeChartElement);\n});\n\n//# sourceURL=webpack:///./components/size-chart/size-chart.js?");

/***/ }),

/***/ "./pages/preview/preview.js":
/*!**********************************!*\
  !*** ./pages/preview/preview.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _template = __webpack_require__(/*! ../../src/js/template */ \"./src/js/template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Preview = function () {\n  function init() {\n    var components = _template2.default.getComponents();\n    var loadedComponents = _template2.default.load(components);\n\n    console.log('loadedComponent: ', loadedComponents);\n  }\n\n  return {\n    init: init\n  };\n}();\n\nPreview.init();\n\n//# sourceURL=webpack:///./pages/preview/preview.js?");

/***/ }),

/***/ "./src/js/loader.js":
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar HTMLLoader = function () {\n  function load(path, selector) {\n    if (path && selector) {\n      return new Promise(function (resolve) {\n        fetch(path).then(function (response) {\n          return response.text();\n        }).then(function (body) {\n          document.querySelector(selector).innerHTML = body;\n          resolve(body);\n        });\n      });\n    } else {\n      console.error('Loader error: Path and selector are required.');\n    }\n  }\n\n  function loadAll(components) {\n    var _this = this;\n\n    var promises = [];\n    if (Array.isArray(components)) {\n      components.forEach(function (obj) {\n        promises.push(_this.load(obj.path, obj.selector));\n      });\n\n      return Promise.all(promises).then(function () {\n        return components;\n      });\n    } else {\n      console.error('Loader error: loadAll argument is not an iterable array');\n    }\n  }\n\n  return {\n    load: load,\n    loadAll: loadAll\n  };\n}();\n\nexports.default = HTMLLoader;\n\n//# sourceURL=webpack:///./src/js/loader.js?");

/***/ }),

/***/ "./src/js/template.js":
/*!****************************!*\
  !*** ./src/js/template.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _loader = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n\nvar _loader2 = _interopRequireDefault(_loader);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Template = function () {\n  function getComponents() {\n    var componentElements = Array.prototype.slice.call(document.querySelectorAll('[data-component]'));\n    var components = componentElements.map(function (el) {\n      var component = el.dataset.component;\n      return { path: '../../components/' + component + '/' + component + '.html', selector: '[data-component=' + component + ']', js: component };\n    });\n\n    return components;\n  }\n\n  function load(components) {\n    var loadedComponents = {};\n    _loader2.default.loadAll(components).then(function (comps) {\n      comps.forEach(function (comp) {\n        var component = __webpack_require__(\"./components sync recursive ^\\\\.\\\\/.*\\\\.js$\")(\"./\" + comp.js + '/' + comp.js + '.js');\n        if (component.default) {\n          loadedComponents[(0, _utils.normalizeName)(comp.js)] = new component.default();\n        }\n      });\n    });\n\n    return loadedComponents;\n  }\n\n  return {\n    getComponents: getComponents,\n    load: load\n  };\n}();\n\nexports.default = Template;\n\n//# sourceURL=webpack:///./src/js/template.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getFocusableChildren = getFocusableChildren;\nexports.$$ = $$;\nexports.trapTabKey = trapTabKey;\nexports.setFocusToFirstItem = setFocusToFirstItem;\nexports.getElementIndex = getElementIndex;\nexports.normalizeName = normalizeName;\nexports.capitalize = capitalize;\nfunction getFocusableChildren(node) {\n    var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex=\"-1\"])'];\n\n    return $$(focusableElements.join(','), node).filter(function (child) {\n        return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);\n    });\n}\n\n// Helper function to get all nodes in context matching selector as an array\nfunction $$(selector, context) {\n    return Array.prototype.slice.call((context || document).querySelectorAll(selector) || []);\n}\n\n// Helper function trapping the tab key inside a node\nfunction trapTabKey(node, event) {\n    var focusableChildren = getFocusableChildren(node);\n    var focusedItemIndex = focusableChildren.indexOf(document.activeElement);\n\n    if (event.shiftKey && focusedItemIndex === 0) {\n        focusableChildren[focusableChildren.length - 1].focus();\n        event.preventDefault();\n    } else if (!event.shiftKey && focusedItemIndex === focusableChildren.length - 1) {\n        focusableChildren[0].focus();\n        event.preventDefault();\n    }\n}\n\n// Helper function to focus first focusable item in node\nfunction setFocusToFirstItem(node) {\n    var focusableChildren = getFocusableChildren(node);\n    if (focusableChildren.length) focusableChildren[0].focus();\n}\n\n/**\n * Get index of an element inside parent\n * @param  {HTMLElement} element\n */\nfunction getElementIndex(element) {\n    var index = 0;\n    while (element = element.previousElementSibling) {\n        ++index;\n    }\n    return index;\n}\n\nfunction normalizeName(str) {\n    return str.replace(/-([a-z])/g, function (g) {\n        return g[1].toUpperCase();\n    });\n}\n\nfunction capitalize(str) {\n    return str.replace(/^\\w/, function (c) {\n        return c.toUpperCase();\n    });\n}\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });