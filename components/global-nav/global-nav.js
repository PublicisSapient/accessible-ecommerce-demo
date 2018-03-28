/* Global Nav Functions */
var menuItems = document.querySelectorAll('li.has-submenu');

Array.prototype.forEach.call(menuItems, function(el, i){
	el.querySelector('a').addEventListener("click",  function(event){
		event.preventDefault();
		
		if (this.parentNode.className == "has-submenu") {
			// var openMenuItem = document.querySelector('li.has-submenu.open');

			// openMenuItem.className = "has-submenu";
			// openMenuItem.setAttribute('aria-expanded', "false");

			this.parentNode.className = "has-submenu open";
			this.setAttribute('aria-expanded', "true");
		} else {
			this.parentNode.className = "has-submenu";
			this.setAttribute('aria-expanded', "false");
		}
		event.preventDefault();
		return false;
	});
});