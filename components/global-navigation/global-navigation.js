/* Global Nav Functions */
import HTMLLoader from '../../src/js/loader';
import MiniCart from '../mini-cart/mini-cart';
import SearchBar from '../search-bar/search-bar';
import LanguageSelector from '../language-selector/language-selector';

var menuItems = document.querySelectorAll('li.has-submenu > button');
var activeMenuItem = null;

// hamburger menu
const GlobalNavigation = function() {
  this.miniCart = {};
  this.searchBar = {};
  this.languageSelector = {};
  this.isMenuOpen = false;

  this.initEvents();
};

GlobalNavigation.prototype = {
  initEvents: function() {
    this.loadMiniCart = this.loadMiniCart.bind(this);
    this.loadSearchBar = this.loadSearchBar.bind(this);
    this.loadLanguageSelector = this.loadLanguageSelector.bind(this);
    this.handleHamburgerMenuClick = this.handleHamburgerMenuClick.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.addOnDocumentClickEventHandler = this.addOnDocumentClickEventHandler.bind(this);
    this.removeOnDocumentClickEventHandler = this.removeOnDocumentClickEventHandler.bind(this);
    this.onBlurTabableElement = this.onBlurTabableElement.bind(this);
    this.addTabOutEventHandler = this.addTabOutEventHandler.bind(this);
    this.removeTabOutEventHandler = this.removeTabOutEventHandler.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeAllMenus = this.closeAllMenus.bind(this);

    this.hamburgerMenuButton = document.getElementById('button');
    this.hamburgerMenuButton.addEventListener('click', this.handleHamburgerMenuClick);
    
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", this.onClickMenuItemWithSubmenu.bind(this));
	}
	
	this.loadMiniCart();
	this.loadSearchBar();
	this.loadLanguageSelector();
  },

  loadMiniCart: function() {
    HTMLLoader.load('../../components/mini-cart/mini-cart', '[data-component="mini-cart"]').then(() => {
      const miniCartElement = document.querySelector('.mini-cart');
      this.miniCart = new MiniCart(miniCartElement);
    });
  },

  loadSearchBar: function() {
      HTMLLoader.load('../../components/search-bar/search-bar', '[data-component="search-bar"]').then(() => {
          const searchBarElement = document.querySelector('.search-bar');
          this.searchBar = new SearchBar(searchBarElement);
      });
  },

  loadLanguageSelector: function() {
      HTMLLoader.load('../../components/language-selector/language-selector', '[data-component="language-selector"]').then(() => {
          const languageSelectorElement = document.querySelector('.language-selector');
          this.languageSelector = new LanguageSelector(languageSelectorElement);
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
  },
};

export default GlobalNavigation;