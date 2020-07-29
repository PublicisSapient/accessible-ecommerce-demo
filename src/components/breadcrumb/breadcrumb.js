import breadcrumbTemplate from './breadcrumb.hbs';

let breadcrumbContainer
let breadcrumbElements
setTimeout(() => {
  breadcrumbContainer = document.getElementById('breadcrumbs');
  breadcrumbElements = document.querySelectorAll('[class="breadcrumb"]')
  breadcrumbContainer.onkeydown = onBreadcrumbEnter;
  breadcrumbContainer.addEventListener('focusin', onBreadcrumbFocusIn)
  breadcrumbContainer.addEventListener('focusout', onBreadcrumbLeave)
}, 1)

function onBreadcrumbEnter(e) {
  if (document.activeElement.id === "breadcrumbs") {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault()
      breadcrumbElements.forEach(element => {
        element.tabIndex = '0'
      });
      breadcrumbElements[0].focus()
    }
  }
}

function onBreadcrumbFocusIn() {
  if (document.activeElement.id !== "breadcrumbs") {
    breadcrumbElements.forEach(element => {
      element.tabIndex = '0'
    });
  }
}

function onBreadcrumbLeave() {
  console.log(document.activeElement)
  if (document.activeElement.id !== "breadcrumbs" && checkBreadcrumbsFocus() === false) {
    breadcrumbElements.forEach(element => {
      element.tabIndex = '-1'
    });
  }
}

function checkBreadcrumbsFocus() {
  breadcrumbElements.forEach(element => {
    if (document.activeElement.id === element.id) {
      return true
    }
  });
  return false
}

function init(breadcrumbs) {
  const element = document.querySelector('[data-template="breadcrumb"]');
  const parent = breadcrumbs[breadcrumbs.length - 2];
  element.outerHTML = breadcrumbTemplate({ breadcrumbs, parent });
}

export { init };
