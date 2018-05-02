// initialize accordion events

function setAriaLabelForButton(accordionPanel) {
  var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
  var accordionPanelButton = accordionPanel.querySelector('button');

  if(accordionPanelContent.classList.contains('accordion--open')) {
    accordionPanelButton.setAttribute('aria-label', accordionPanelButton.getAttribute('data-hide-aria-label'));
  } else {
    accordionPanelButton.setAttribute('aria-label', accordionPanelButton.getAttribute('data-open-aria-label'));
  }
}

function onClickToggleAccordionPanel(accordionPanel) {
  return function(event) {
    var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
    var accordionPanelButton = accordionPanel.querySelector('button');

    // toggle the open class
    accordionPanelContent.classList.toggle('accordion--open');
    
    setAriaLabelForButton(accordionPanel);
  }
}

var accordionPanels = document.querySelectorAll('.accordion-panel');
accordionPanels.forEach(function(accordionPanel) {
  var button = accordionPanel.querySelector('button');
  setAriaLabelForButton(accordionPanel);
  button.addEventListener('click', onClickToggleAccordionPanel(accordionPanel));
});