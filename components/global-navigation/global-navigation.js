/* Global Nav Functions */
import HTMLLoader from '../../src/js/loader';
import MiniCart from '../mini-cart/mini-cart';

var menuItems = document.querySelectorAll('li.has-submenu > a');
var activeMenuItem = null;

// hamburger menu
function GlobalNavigation() {
  console.log('GlobalNavigation');
  this.miniCart = {};
  this.isMenuOpen = false;
  this.hamburgerMenuButton = document.getElementById('button');
  this.hamburgerMenuButton.addEventListener('click', this.handleHamburgerMenuClick.bind(this));

  this.loadMiniCart();
}

GlobalNavigation.prototype = {
  loadMiniCart: function() {
    HTMLLoader.load('../../components/mini-cart/mini-cart', '[data-component="mini-cart"]').then(() => {
      const miniCartElement = document.querySelector('.mini-cart');
      this.miniCart = new MiniCart(miniCartElement);
    })
  },

  handleHamburgerMenuClick: function (evt) {
    this.isMenuOpen = !this.isMenuOpen;
    this.hamburgerMenuButton.setAttribute('aria-expanded', this.isMenuOpen);
  },

  onDocumentClick: function(event) {
    const target = event.target;
    if(!target.classList.contains('has-submenu') && !target.classList.contains('open') && !target.classList.contains('menu-item-heading')) {
      closeAllMenus();
      removeOnDocumentClickEventHandler();
    }
  },

  addOnDocumentClickEventHandler: function() {
    setTimeout(function() {
      window.addEventListener('click', onDocumentClick);
    }, 1);
  },

  removeOnDocumentClickEventHandler: function() {
    window.removeEventListener('click', onDocumentClick);
  },

  onBlurTabableElement: function(event) {
    removeTabOutEventHandler(activeMenuItem);
    closeAllMenus();
  },

  addTabOutEventHandler: function(element) {
    const tabableElements = element.querySelectorAll('.submenu a');
    const tabableElementsLength = tabableElements.length;
    if (tabableElementsLength > 0) {
      const lastElement = tabableElements[tabableElementsLength-1];
      lastElement.addEventListener('blur', onBlurTabableElement);
    }
  },

  removeTabOutEventHandler: function(element) {
    const tabableElements = element.querySelectorAll('.submenu a');
    const tabableElementsLength = tabableElements.length;
    if (tabableElementsLength > 0) {
      const lastElement = tabableElements[tabableElementsLength-1];
      lastElement.removeEventListener('blur', onBlurTabableElement);
    }
  },

  closeMenu: function(element) {
    if (element.parentNode.classList.contains('open')) {
      element.parentNode.classList.remove('open');
      element.setAttribute('aria-expanded', "false");
      activeMenuItem = null;
    }
  },

  openMenu: function(element) {
    closeAllMenus();
    const parent = element.parentNode;
    parent.classList.add('open');
    element.setAttribute('aria-expanded', "true");
    activeMenuItem = parent;
    addOnDocumentClickEventHandler();
    addTabOutEventHandler(activeMenuItem);
  },

  closeAllMenus: function() {
    [].forEach.call(menuItems, closeMenu);
  },

  onClickMenuItemWithSubmenu: function(event) {
    event.preventDefault();
    const target = event.currentTarget;
    target.parentNode.classList.contains('open') ?
      closeMenu(target) :
      openMenu(target);
    return false;
  }
}

Array.prototype.forEach.call(menuItems, function(el, i) {
	el.addEventListener("click", GlobalNavigation.onClickMenuItemWithSubmenu);
});

export default GlobalNavigation;