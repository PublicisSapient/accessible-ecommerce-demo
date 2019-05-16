import breadcrumbTemplate from './breadcrumb.hbs';

function init(breadcrumbs) {
  const element = document.querySelector('[data-template="breadcrumb"]');
  const parent = breadcrumbs[breadcrumbs.length - 2];
  element.outerHTML = breadcrumbTemplate({ breadcrumbs, parent });
}

export { init };
