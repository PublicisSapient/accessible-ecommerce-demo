import renderTemplate from './size-chart.hbs';

let table;
let unitsDisplayed;
let alternateUnits;
let toggleChildren;

function onToggle() {
  const selectedUnits = unitsDisplayed.textContent;
  unitsDisplayed.textContent = (selectedUnits === 'inches') ? 'centimeters' : 'inches';
  alternateUnits.textContent = (selectedUnits === 'inches') ? 'inches' : 'centimeters';
  toggleChildren.forEach(toggle => {
    toggle.classList.toggle('selected');
    // toggle.classList.toggle('btn');
    // toggle.classList.toggle('btn-primary');
  });

  table.classList.toggle('show-inches');
  table.classList.toggle('show-centimeters');
}

function init() {
  const sizeChartElement = document.querySelector('[data-component="size-chart"]');
  sizeChartElement.innerHTML = renderTemplate();

  table = sizeChartElement.querySelector('.size-chart-table');
  unitsDisplayed = sizeChartElement.querySelector('.units-displayed');
  alternateUnits = sizeChartElement.querySelector('.alternate-units-displayed');
  toggleChildren = sizeChartElement.querySelectorAll('.units-toggle');

  sizeChartElement.querySelector('.toggle-size-units-button').addEventListener('click', onToggle);
}

export { init };
