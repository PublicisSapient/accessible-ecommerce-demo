function setFocusOnContent(accordionPanel) {
	var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
	console.log(accordionPanelContent.firstElementChild);
	console.log("clicking");
	accordionPanelContent.firstElementChild.focus();
}

function setAriaLabelForButton(accordionPanel) {
	var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
	var accordionPanelButton = accordionPanel.querySelector('button');

	if (accordionPanelContent.classList.contains('accordion--open')) {
		accordionPanelButton.setAttribute('aria-label', accordionPanelButton.getAttribute('data-hide-aria-label'));
		setFocusOnContent(accordionPanel);
	} else {
		accordionPanelButton.setAttribute('aria-label', accordionPanelButton.getAttribute('data-open-aria-label'));
	}
}

function onClickToggleAccordionPanel(accordionPanel) {
	return function(event) {
		var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
		var accordionPanelHeading = accordionPanel.querySelector('.accordion-panel_heading');
		var accordionPanelButton = accordionPanel.querySelector('button');

		// toggle the open class
		accordionPanelContent.classList.toggle('accordion--open');
		accordionPanelHeading.classList.toggle('accordion--open');

		setAriaLabelForButton(accordionPanel);
	}
}

var accordionPanels = document.querySelectorAll('.accordion-panel');
accordionPanels.forEach(function(accordionPanel) {
	var button = accordionPanel.querySelector('button');
	setAriaLabelForButton(accordionPanel);
	button.addEventListener('click', onClickToggleAccordionPanel(accordionPanel));
});