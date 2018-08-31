/* Global Nav Functions */
var menuItems = document.querySelectorAll('li.has-submenu > a');
var activeMenuItem = null;


// hamburger menu
function GlobalNavigation() {
  console.log('GlobalNavigation');
  this.isMenuOpen = false;
  this.hamburgerMenuButton = document.getElementById('button');
  this.hamburgerMenuButton.addEventListener('click', this.handleHamburgerMenuClick.bind(this));
}

GlobalNavigation.prototype = {
  handleHamburgerMenuClick: function (evt) {
    this.isMenuOpen = !this.isMenuOpen;
    this.hamburgerMenuButton.setAttribute('aria-expanded', this.isMenuOpen);
  }
}

// new GlobalNavigation();

// TOOD: Move code below into GlobalNavigation object
function onDocumentClick(event) {
	const target = event.target;
	if(!target.classList.contains('has-submenu') && !target.classList.contains('open') && !target.classList.contains('menu-item-heading')) {
		closeAllMenus();
		removeOnDocumentClickEventHandler();
	}
}

function addOnDocumentClickEventHandler() {
	setTimeout(function() {
		window.addEventListener('click', onDocumentClick);
	}, 1);
}

function removeOnDocumentClickEventHandler() {
	window.removeEventListener('click', onDocumentClick);
}

function onBlurTabableElement(event) {
	removeTabOutEventHandler(activeMenuItem);
	closeAllMenus();
}

function addTabOutEventHandler(element) {
	const tabableElements = element.querySelectorAll('.submenu a');
	const tabableElementsLength = tabableElements.length;
	if (tabableElementsLength > 0) {
		const lastElement = tabableElements[tabableElementsLength-1];
		lastElement.addEventListener('blur', onBlurTabableElement);
	}
}

function removeTabOutEventHandler(element) {
	const tabableElements = element.querySelectorAll('.submenu a');
	const tabableElementsLength = tabableElements.length;
	if (tabableElementsLength > 0) {
		const lastElement = tabableElements[tabableElementsLength-1];
		lastElement.removeEventListener('blur', onBlurTabableElement);
	}
}

function closeMenu(element) {
	if (element.parentNode.classList.contains('open')) {
		element.parentNode.classList.remove('open');
		element.setAttribute('aria-expanded', "false");
		activeMenuItem = null;
	}
}

function openMenu(element) {
	closeAllMenus();
	const parent = element.parentNode;
	parent.classList.add('open');
	element.setAttribute('aria-expanded', "true");
	activeMenuItem = parent;
	addOnDocumentClickEventHandler();
	addTabOutEventHandler(activeMenuItem);
}

function closeAllMenus() {
	[].forEach.call(menuItems, closeMenu);
}

function onClickMenuItemWithSubmenu(event) {
	event.preventDefault();
	const target = event.currentTarget;
	target.parentNode.classList.contains('open') ?
		closeMenu(target) :
		openMenu(target);
	return false;
}

Array.prototype.forEach.call(menuItems, function(el, i) {
	el.addEventListener("click", onClickMenuItemWithSubmenu);
});

export default GlobalNavigation;