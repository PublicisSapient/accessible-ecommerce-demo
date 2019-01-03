var SizeChart = function (element) {
  this.element = element;
  this.table = this.element.querySelector('.size-chart-table');
  this.unitsDisplayed = this.element.querySelector('.units-displayed');
  this.alternateUnits = this.element.querySelector('.alternate-units-displayed');
  this.toggleChildren = this.element.querySelectorAll('.units-toggle');

  this.initEvents();
}
SizeChart.prototype = {
  initEvents: function () {
    this.element.querySelector('.toggle-size-units-button').addEventListener('click', this.onToggle.bind(this));
  },
  onToggle: function () {
    const selectedUnits = this.unitsDisplayed.textContent;
    this.unitsDisplayed.textContent = (selectedUnits === 'inches') ? 'centimeters' : 'inches';
    this.alternateUnits.textContent = (selectedUnits === 'inches') ? 'inches' : 'centimeters';
    this.toggleChildren.forEach(toggle => {
      toggle.classList.toggle('selected');
      toggle.classList.toggle('btn');
      toggle.classList.toggle('btn-primary');
    });

    this.table.classList.toggle('show-inches');
    this.table.classList.toggle('show-centimeters');
  },
}
var sizeChartElements = document.querySelectorAll('.size-chart');
sizeChartElements.forEach(function (sizeChartElement) {
  var sizeChart = new SizeChart(sizeChartElement);
});