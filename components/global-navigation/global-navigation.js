/* Global Nav Functions */
import HTMLLoader from '../../src/js/loader';
import MiniCart from '../mini-cart/mini-cart';

var menuItems = document.querySelectorAll('li.has-submenu > a');
var activeMenuItem = null;

// hamburger menu
function GlobalNavigation() {
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
    });
  },

  handleHamburgerMenuClick: function () {
    this.isMenuOpen = !this.isMenuOpen;
    this.hamburgerMenuButton.setAttribute('aria-expanded', this.isMenuOpen);
  },

  onDocumentClick: function(event) {
    const target = event.target;
    if(!target.classList.contains('has-submenu') && !target.classList.contains('open') && !target.classList.contains('menu-item-heading')) {
      this.closeAllMenus();
      this.removeOnDocumentClickEventHandler();
    }
  },

  addOnDocumentClickEventHandler: function() {
    setTimeout(function() {
      window.addEventListener('click', this.onDocumentClick);
    }, 1);
  },

  removeOnDocumentClickEventHandler: function() {
    window.removeEventListener('click', this.onDocumentClick);
  },

  onBlurTabableElement: function() {
    this.removeTabOutEventHandler(activeMenuItem);
    this.closeAllMenus();
  },

  addTabOutEventHandler: function(element) {
    const tabableElements = element.querySelectorAll('.submenu a');
    const tabableElementsLength = tabableElements.length;
    if (tabableElementsLength > 0) {
      const lastElement = tabableElements[tabableElementsLength-1];
      lastElement.addEventListener('blur', this.onBlurTabableElement);
    }
  },

  removeTabOutEventHandler: function(element) {
    const tabableElements = element.querySelectorAll('.submenu a');
    const tabableElementsLength = tabableElements.length;
    if (tabableElementsLength > 0) {
      const lastElement = tabableElements[tabableElementsLength-1];
      lastElement.removeEventListener('blur', this.onBlurTabableElement);
    }
  },

  closeMenu: function(element) {
    if (element.parentNode.classList.contains('open')) {
      element.parentNode.classList.remove('open');
      element.setAttribute('aria-expanded', 'false');
      activeMenuItem = null;
    }
  },

  openMenu: function(element) {
    this.closeAllMenus();
    const parent = element.parentNode;
    parent.classList.add('open');
    element.setAttribute('aria-expanded', 'true');
    activeMenuItem = parent;
    this.addOnDocumentClickEventHandler();
    this.addTabOutEventHandler(activeMenuItem);
  },

  closeAllMenus: function() {
    [].forEach.call(menuItems, this.closeMenu);
  },

  onClickMenuItemWithSubmenu: function(event) {
    event.preventDefault();
    const target = event.currentTarget;
    target.parentNode.classList.contains('open') ?
      this.closeMenu(target) :
      this.openMenu(target);
    return false;
  }
};

Array.prototype.forEach.call(menuItems, function(el) {
  el.addEventListener('click', GlobalNavigation.onClickMenuItemWithSubmenu);
});

export default GlobalNavigation;