/* Global Nav Functions */
import HTMLLoader from '../../src/js/loader';
import MiniCart from '../mini-cart/mini-cart';

// hamburger menu
function GlobalNavigation() {
  this.menuItems = document.querySelectorAll('li.has-submenu > a');
  this.activeMenuItem = null;
  this.miniCart = {};
  this.isMenuOpen = false;
  this.hamburgerMenuButton = document.getElementById('button');
  this.hamburgerMenuButton.addEventListener('click', this.handleHamburgerMenuClick.bind(this));

  this.loadMiniCart();
  this.bindEvents();
}

GlobalNavigation.prototype = {
  loadMiniCart: function() {
    HTMLLoader.load('../../components/mini-cart/mini-cart', '[data-component="mini-cart"]').then(() => {
      const miniCartElement = document.querySelector('.mini-cart');
      this.miniCart = new MiniCart(miniCartElement);
    });
  },

  bindEvents: function() {
    this.menuItems.forEach(el => {
      el.addEventListener('click', this.onClickMenuItemWithSubmenu.bind(this));
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
    this.removeTabOutEventHandler(this.activeMenuItem);
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
      this.activeMenuItem = null;
    }
  },

  openMenu: function(element) {
    const parent = element.parentNode;
    this.closeAllMenus();
    parent.classList.add('open');
    element.setAttribute('aria-expanded', 'true');
    this.activeMenuItem = parent;
    this.addOnDocumentClickEventHandler();
    this.addTabOutEventHandler(this.activeMenuItem);
  },

  closeAllMenus: function() {
    [].forEach.call(this.menuItems, this.closeMenu);
  },

  onClickMenuItemWithSubmenu: function(event) {
    event.preventDefault();
    const target = event.target;
    target.parentNode.classList.contains('open') ?
      this.closeMenu(target) :
      this.openMenu(target);
    return false;
  }
};

export default GlobalNavigation;