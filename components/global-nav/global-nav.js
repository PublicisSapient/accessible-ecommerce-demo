/* Global Nav Functions */
var menuItems = document.querySelectorAll('li.has-submenu');
Array.prototype.forEach.call(menuItems, function(el, i){
	el.querySelector('a').addEventListener("focus",  function(event){
		if (this.parentNode.className == "has-submenu") {
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