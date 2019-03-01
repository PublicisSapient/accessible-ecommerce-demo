var Accordion = function (element) {
  this.element = element;
  this.accordionPanels = element.querySelectorAll('.accordion-panel');

  this.initEvents();
};

Accordion.prototype = {
  setFocusOnContent: function (accordionPanel) {
    var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
    accordionPanelContent.firstElementChild.focus();
  },

  setAriaLabelForButton: function (accordionPanel) {
    var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
    var accordionPanelButton = accordionPanel.querySelector('button');

    if (accordionPanelContent.classList.contains('accordion--open')) {
      accordionPanelButton.setAttribute('aria-label', accordionPanelButton.getAttribute('data-hide-aria-label'));
      this.setFocusOnContent(accordionPanel);
    } else {
      accordionPanelButton.setAttribute('aria-label', accordionPanelButton.getAttribute('data-open-aria-label'));
    }
  },

  onClickToggleAccordionPanel: function (accordionPanel) {
    return function () {
      var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
      var accordionPanelHeading = accordionPanel.querySelector('.accordion-panel_heading');

      // toggle the open class
      accordionPanelContent.classList.toggle('accordion--open');
      accordionPanelHeading.classList.toggle('accordion--open');

      this.setAriaLabelForButton(accordionPanel);
    };
  },

  initEvents: function () {
    this.accordionPanels.forEach(accordionPanel => {
      var button = accordionPanel.querySelector('button');
      this.setAriaLabelForButton(accordionPanel);
      button.addEventListener('click', this.onClickToggleAccordionPanel(accordionPanel).bind(this));
    });
  }
};

var accordionElements = document.querySelectorAll('.accordion');
accordionElements.forEach(function (accordionElement) {
  new Accordion(accordionElement);
});