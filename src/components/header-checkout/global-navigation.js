/* Global Nav Functions */

let componentEl;
let hamburgerDropdown;
let isMenuOpen = false;
let activeMenuItem = null;

function onHamburgerMenuClick(event) {
  isMenuOpen = !isMenuOpen;
  event.currentTarget.setAttribute('aria-expanded', isMenuOpen);
  hamburgerDropdown.forEach(function(dropdown) {
    dropdown.classList.toggle('open');
  });
}

function onDocumentClick(event) {
  const target = event.target;
  if (!target.classList.contains('has-submenu') && !target.classList.contains('open') && !target.classList.contains('primary-nav__heading')) {
    closeMenu(activeMenuItem);
    removeDocumentClickHandler();
  }
}

function addDocumentClickHandler() {
  setTimeout(function() {
    window.addEventListener('click', onDocumentClick);
  }, 1);
}

function removeDocumentClickHandler() {
  window.removeEventListener('click', onDocumentClick);
}

function getActiveElement() {
  // the active element (with focus) isn't available yet when the blur event fires
  // so we kick this function down the stack a little with setTimeout
  return new Promise(function(resolve) {
    setTimeout(function() {
      const activeFocusElement = document.activeElement;
      resolve({
        inOpenMenu: activeFocusElement.matches('.has-submenu.open *')
      });
    }, 1);
  });
}

function onMenuItemBlur(event) {
  const blurFromOpenMenu = event.currentTarget.matches('.has-submenu.open *');
  getActiveElement().then(function(focusElement) {
    if (blurFromOpenMenu && !focusElement.inOpenMenu) {
      closeMenu(activeMenuItem);
    }
  });
}

function closeMenu(element) {
  if (element && element.parentNode.classList.contains('open')) {
    element.parentNode.classList.remove('open');
    element.setAttribute('aria-expanded', 'false');
    activeMenuItem = null;
  }
}

function openMenu(element) {
  const parent = element.parentNode;
  closeMenu(activeMenuItem);
  parent.classList.add('open');
  element.setAttribute('aria-expanded', 'true');
  activeMenuItem = element;
  addDocumentClickHandler();
}

function onClickMenuItemWithSubmenu(event) {
  event.stopPropagation();
  const target = event.currentTarget;
  target.parentNode.classList.contains('open') ? closeMenu(target) : openMenu(target);
  return false;
}

function setActiveClass() {
  // temporary way to set active class on "Women" nav item when in PLP or PDP page
  var pathname = window.location.pathname;
  if(pathname.indexOf("/plp/") >= 0 || pathname.indexOf("/pdp/") >= 0) {
    document.querySelector('#main-nav-women').className += " active";
  }
}

function init() {
  componentEl = document.querySelector('[data-component="global-header-checkout"]');
  const menuItems = componentEl.querySelectorAll('[data-js="dropdown-toggle"]');
  const submenuLastChildren = componentEl.querySelectorAll('.submenu-item:last-child a');
  const hamburgerMenuButton = componentEl.querySelector('[data-js="hamburger-toggle"]');
  hamburgerDropdown = componentEl.querySelectorAll('[data-js="hamburger-dropdown"]');

  menuItems.forEach(el => {
    el.addEventListener('click', onClickMenuItemWithSubmenu);
    el.addEventListener('blur', onMenuItemBlur);
  });

  submenuLastChildren.forEach(el => {
    el.addEventListener('blur', onMenuItemBlur);
  });

  hamburgerMenuButton.addEventListener('click', onHamburgerMenuClick);

  setActiveClass();
}

export { init };
