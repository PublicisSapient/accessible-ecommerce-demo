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
