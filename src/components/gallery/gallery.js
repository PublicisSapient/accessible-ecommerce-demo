import galleryTemplate from './gallery.hbs';
import galleryModalTemplate from './gallery-modal.hbs';
import * as Modal from '../modal/modal';

var thumbnails;

function onClickViewImage(event){
  var currElement = event.target;
  if (currElement.nodeName == 'IMG')
    currElement = currElement.parentElement;

  thumbnails.forEach(function(thumbnail){
    thumbnail.className = thumbnail.className.replace(/\bselected\b/g, "");
  });
  currElement.className += "selected";
 var mainImage = currElement.children[0].getAttribute("data-main-image-url");
 // set main image
 document.querySelector("#gallery__main-image").setAttribute("src", mainImage);
 // set modal image
 document.querySelector("#gallery-modal img").setAttribute("src", mainImage);
}

function init(galleryData){
  const targetElement = document.querySelector('[data-template="gallery"]');
  targetElement.outerHTML = galleryTemplate();

  thumbnails = document.querySelectorAll('.gallery__thumbnail-list-item button');
  thumbnails.forEach(function(thumbnail){
    thumbnail.addEventListener('click', onClickViewImage);
  });
  

  const galleryModalDOM = document.querySelector('[data-template="gallery-modal"]');
  if (galleryModalDOM) galleryModalDOM.outerHTML = galleryModalTemplate();
  Modal.init("gallery-modal");

  // set initial modal image based on initial main image
  document.querySelector("#gallery-modal img").setAttribute("src",document.querySelector("#gallery__main-image").getAttribute("src"));

}

export { init };