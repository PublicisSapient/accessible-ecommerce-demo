import HTMLLoader from '../../src/js/loader';

var Accordion = function (element, panels) {
  this.element = element;
  this.panels = panels;
  this.accordionPanels = {};
	
  this.loadPanels();
  this.initEvents();
}

Accordion.prototype = {
  loadPanels: function() {
    for(let i = 0; i < this.panels; i++) {
      let id = `panel${i}`;
      let li = document.createElement('li');
      li.setAttribute('class', 'accordion-panel');
      li.setAttribute('id', id);
      this.element.appendChild(li);
      HTMLLoader.load(`../../components/accordion/pdp-content/panel${i + 1}.html`, `#${id}`);
    }
    this.accordionPanels = this.element.querySelectorAll('.accordion-panel');
  },

	setFocusOnContent: function(accordionPanel) {
		var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
		accordionPanelContent.firstElementChild.focus();
	},

	setAriaLabelForButton: function(accordionPanel) {
		var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
		var accordionPanelButton = accordionPanel.querySelector('button');
    console.log('accordionPanel: ', accordionPanel);
		if (accordionPanelContent.classList.contains('accordion--open')) {
			accordionPanelButton.setAttribute('aria-label', accordionPanelButton.getAttribute('data-hide-aria-label'));
			this.setFocusOnContent(accordionPanel);
		} else {
			accordionPanelButton.setAttribute('aria-label', accordionPanelButton.getAttribute('data-open-aria-label'));
		}
	},

	onClickToggleAccordionPanel: function(accordionPanel) {
		return function (event) {
			var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
			var accordionPanelHeading = accordionPanel.querySelector('.accordion-panel_heading');

			// toggle the open class
			accordionPanelContent.classList.toggle('accordion--open');
			accordionPanelHeading.classList.toggle('accordion--open');

			this.setAriaLabelForButton(accordionPanel);
		}
	},

	initEvents: function(){
		this.accordionPanels.forEach(accordionPanel => {
			var button = accordionPanel.querySelector('button');
			this.setAriaLabelForButton(accordionPanel);
			button.addEventListener('click', this.onClickToggleAccordionPanel(accordionPanel).bind(this));
		});
	}
}
var accordionElements = document.querySelectorAll('.accordion');
accordionElements.forEach(function (accordionElement) {
	var accordion = new Accordion(accordionElement, 4);
});