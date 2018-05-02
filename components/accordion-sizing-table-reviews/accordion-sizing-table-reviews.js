function setChartUnits() {
	var selectedUnits = document.getElementById('units-displayed').textContent;
	var addUnit = document.getElementsByClassName('add-unit');
	var addShortUnit = document.getElementsByClassName('add-short-unit');
	var shortUnitText;
	if (selectedUnits === 'inches') {
		shortUnitText = 'in';
	} else {
		shortUnitText = 'cm';
	}
	var i;
	for (i = 0; i < addUnit.length; i++) {
		addUnit[i].textContent = selectedUnits;
	}

	var j;
	for (j = 0; j < addShortUnit.length; j++) {
		addShortUnit[j].textContent = shortUnitText;
	}
}

document.getElementById('toggle-size-units-button').addEventListener("click", function () {
	var toggles = document.getElementsByClassName('units-toggle');
	var i;
	for (i = 0; i < toggles.length; i++) {
		if (toggles[i].classList.contains('inches') && toggles[i].classList.contains('selected')) {
			document.getElementById('units-displayed').textContent = 'centimeters';
			document.getElementById('alternate-units-displayed').textContent = 'inches';
		} else if (toggles[i].classList.contains('centimeters') && toggles[i].classList.contains('selected')) {
			document.getElementById('units-displayed').textContent = 'inches';
			document.getElementById('alternate-units-displayed').textContent = 'centimeters';
		}
		toggles[i].classList.toggle('selected');
	}
	document.getElementById('size-chart-table').classList.toggle('show-inches');
	document.getElementById('size-chart-table').classList.toggle('show-centimeters');
	setChartUnits();
});

setChartUnits();

// initialize accordion events

function setFocusOnContent(accordionPanel) {
  var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
  console.log(accordionPanelContent.firstElementChild);
  accordionPanelContent.firstElementChild.focus();
}

function setAriaLabelForButton(accordionPanel) {
  var accordionPanelContent = accordionPanel.querySelector('.accordion-panel_content');
  var accordionPanelButton = accordionPanel.querySelector('button');

  if(accordionPanelContent.classList.contains('accordion--open')) {
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

