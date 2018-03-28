/* Global Nav Functions */
var menuItems = document.querySelectorAll('li.has-submenu');

Array.prototype.forEach.call(menuItems, function(el, i){
	el.querySelector('a').addEventListener("click",  function(event){
		event.preventDefault();
		
		if (this.parentNode.className == "has-submenu") {

			var openMenuItems = document.querySelectorAll('li.has-submenu.open');

			console.log(openMenuItems);

			[].forEach.call(openMenuItems, function(item) {
				console.log('looping', item);
				item.className = "has-submenu";
				item.querySelector('a').setAttribute('aria-expanded', "false");
			});

			this.parentNode.className = "has-submenu open";
			this.setAttribute('aria-expanded', "true");
		} else {
			this.parentNode.className = "has-submenu";
			this.setAttribute('aria-expanded', "false");
		}
		event.preventDefault();
		return false;
	});

	// el.querySelector('a').addEventListener("blur",  function(event){
	// 	if (this.parentNode.className == "has-submenu open") {
	// 		this.parentNode.className = "has-submenu";
	// 		this.setAttribute('aria-expanded', "false");
	// 	} else {
	// 		this.parentNode.className = "has-submenu open";
	// 		this.setAttribute('aria-expanded', "true");
	// 	}
	// 	event.preventDefault();
	// 	return false;
	// });
});