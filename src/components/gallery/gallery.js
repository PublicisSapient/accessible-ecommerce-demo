import galleryTemplate from './gallery.hbs';

function init(galleryData){
  const targetElement = document.querySelector('[data-template="gallery"]');
  targetElement.outerHTML = galleryTemplate();
}

export { init };