import breadcrumbTemplate from './breadcrumb.hbs';

function init(breadcrumbs){
  const element = document.querySelector('[data-template="breadcrumb"]');
  element.outerHTML = breadcrumbTemplate({breadcrumbs});
}

export { init };