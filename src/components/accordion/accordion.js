import { focusOnElement } from '../../js/utils';

function toggleState(button) {
  const header = button.closest('.accordion__heading');
  const ariaExpanded = button.getAttribute('aria-expanded') === 'true' ? false : true;
  button.setAttribute('aria-expanded', ariaExpanded);
  header.classList.toggle('collapsed', !ariaExpanded);
}

function accordionToggleClick(event) {
  toggleState(event.currentTarget);
}

function enableToggle(button) {
  button.addEventListener('click', accordionToggleClick);
}

function openAccordionButton(hashElement) {
  return hashElement && hashElement.getAttribute('aria-expanded') == 'false';
}

function hashClicked(event) {
  const hashElement = document.querySelector(event.currentTarget.hash);

  focusOnElement(hashElement);

  if (openAccordionButton(hashElement)) {
    toggleState(hashElement);
  }
}

function enableToggles(parentElement) {
  const accordionButtons = parentElement.querySelectorAll('[data-js="accordion-toggle"]');
  accordionButtons.forEach(enableToggle);
}

function createToggle(accordionElement, panel, startCollapsed) {
  let header = document.createElement('h2');
  let toggle = document.createElement('button');
  if (startCollapsed) header.classList.add('collapsed');
  header.classList.add('accordion__heading');
  toggle.setAttribute('id', panel.dataset.id);
  toggle.classList.add('accordion__toggle');
  toggle.setAttribute('aria-expanded', !startCollapsed);
  panel.classList.add('accordion__panel');

  toggle.innerHTML = `
    ${panel.dataset.title}
    <svg class="icon icon--toggle-btn">
        <use xlink:href="../sprite.svg#chevron"></use>
    </svg>
  `;
  enableToggle(toggle);
  header.appendChild(toggle);
  accordionElement.insertBefore(header, panel);
}

function init(accordionElement, startCollapsed) {
  // Create toggle buttons, set up classes
  const accordionPanels = accordionElement.querySelectorAll('[data-js="accordion-panel"]');
  accordionPanels.forEach(
    function initAccordionPanel(panel) {
      createToggle(accordionElement, panel, startCollapsed);
    }
  );

  // Listen to any "hash links" (starting with "#") and toggle accordions
  const hashLinks = document.querySelectorAll('[href^="#"]');
  hashLinks.forEach(
    function initHashLink(link) {
      if (link.hash) link.addEventListener('click', hashClicked);
    }
  );

  // Open accordion if page loads with hash
  if (window.location.hash) {
    const hashElement = document.querySelector(window.location.hash);
    if (openAccordionButton(hashElement)) {
      toggleState(hashElement);
    }
  }
}

export { init, enableToggles };
