// initialize accordion events
function onClickToggleAccordionPanel(accordionPanel) {
  console.log('creating click event');
  return function(event) {
    var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
    accordionPanelContent.classList.toggle('accordion--open');
  }
}
var accordionPanels = document.querySelectorAll('.accordion-panel');
accordionPanels.forEach(function(accordionPanel) {
  var button = accordionPanel.querySelector('button');
  button.addEventListener('click', onClickToggleAccordionPanel(accordionPanel));
});