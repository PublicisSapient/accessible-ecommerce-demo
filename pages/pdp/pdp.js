/* Product Details Page Functions */

// This script from https://www.cssscript.com/fully-accessible-modal-window-with-pure-javascript/
// License: MIT
// modal.js
(function (global) {
    'use strict';
  
    // Helper function to get all focusable children from a node
    function getFocusableChildren (node) {
      var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'];
  
      return $$(focusableElements.join(','), node).filter(function (child) {
        return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
      });
    }
  
    // Helper function to get all nodes in context matching selector as an array
    function $$ (selector, context) {
      return Array.prototype.slice.call((context || document).querySelectorAll(selector) || []);
    }
  
    // Helper function trapping the tab key inside a node
    function trapTabKey (node, event) {
      var focusableChildren = getFocusableChildren(node);
      var focusedItemIndex = focusableChildren.indexOf(document.activeElement);
  
      if (event.shiftKey && focusedItemIndex === 0) {
        focusableChildren[focusableChildren.length - 1].focus();
        event.preventDefault();
      } else if (!event.shiftKey && focusedItemIndex === focusableChildren.length - 1) {
        focusableChildren[0].focus();
        event.preventDefault();
      }
    }
  
    // Helper function to focus first focusable item in node
    function setFocusToFirstItem (node) {
      var focusableChildren = getFocusableChildren(node);
      if (focusableChildren.length) focusableChildren[0].focus();
    }
  
    var focusedElementBeforeModal;
  
    /**
     * Modal constructor
     * @param {Node} node - Modal element
     * @param {Node} main - Main element of the page
     */
    var Modal = function (node, main) {
      var that = this;
      main = main || document.querySelector('#main');
      this.shown = false;
  
      $$('[data-modal-show="' + node.id + '"]').forEach(function (opener) {
        opener.addEventListener('click', show);
      });
  
      $$('[data-modal-hide]', node).concat($$('[data-modal-hide="' + node.id + '"]')).forEach(function (closer) {
        closer.addEventListener('click', hide);
      });
  
      document.addEventListener('keydown', function (event) {
        if (that.shown && event.which === 27) {
          event.preventDefault();
          hide();
        }
  
        if (that.shown && event.which === 9) {
          trapTabKey(node, event);
        }
      });
  
      document.body.addEventListener('focus', function (event) {
        if (that.shown && !node.contains(event.target)) {
          setFocusToFirstItem(node);
        }
      }, true);
  
      this.show = show;
      this.hide = hide;
  
      function show () {
        that.shown = true;
        node.setAttribute('aria-hidden', 'false');
        node.setAttribute('aria-expanded', 'true');
        main.setAttribute('aria-hidden', 'true');
        focusedElementBeforeModal = document.activeElement;
        setFocusToFirstItem(node);
      }
  
      function hide () {
        that.shown = false;
        node.setAttribute('aria-hidden', 'true');
        node.setAttribute('aria-expanded', 'false');
        main.setAttribute('aria-hidden', 'false');
        focusedElementBeforeModal.focus();
      }
    };
  
    global.Modal = Modal;
  }(window));
  
var modalEl = document.getElementById('my-accessible-modal');
var mainEl = document.getElementById('main');
var modal = new window.Modal(modalEl, mainEl);

// gallery.js

const rootClass = 'gallery';
const el = document.getElementsByClassName(rootClass)[0];
const thumbnailsEl = el.getElementsByClassName(`${rootClass}__thumbnail-list`)[0];
const thumbnailButtonEls = thumbnailsEl.getElementsByTagName('button');
const mainImageEl = document.getElementById(`${rootClass}__main-image`);
const mainImageContainerEl = el.getElementsByClassName(`${rootClass}__main-image__inner-container`)[0];
const minimizeEl = document.getElementById(`${rootClass}__minimize`);
const maximizeEl = document.getElementById(`${rootClass}__maximize`);

for (let i=0; i<thumbnailButtonEls.length; i++) {
    const button = thumbnailButtonEls[i];
    button.addEventListener('click', (e) => {
        image = e.currentTarget.getElementsByTagName('img')[0];
        mainImageEl.setAttribute("src",  image.attributes["data-main-image-url"].value);
    });
}


maximizeEl.addEventListener('click', (e) => {
    mainImageEl.style.width = "150%";
    mainImageContainerEl.style.overflow = "auto";
    maximizeEl.setAttribute("disabled", true);
    minimizeEl.removeAttribute("disabled");
});

minimizeEl.addEventListener('click', (e) => {
    mainImageEl.style.width ="100%";
    mainImageContainerEl.style.overflow = "initial";
    minimizeEl.setAttribute("disabled", true);
    maximizeEl.removeAttribute("disabled");;
});

// Accordion Sizing Tables Reviews Function
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