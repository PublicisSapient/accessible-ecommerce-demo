import PouchDB from '../../src/js/pouchdb';

var Gallery = function (element) {
  this.element = element;
	this.thumbnailsEl = this.element.getElementsByClassName('gallery__thumbnail-list')[0];
	this.thumbnailButtonEls = this.thumbnailsEl.querySelectorAll('.gallery__thumbnail-list-item button');
	this.mainImageEl = document.getElementById('gallery__main-image');
	this.mainImageContainerEl = this.element.getElementsByClassName('gallery__main-image__inner-container')[0];
	this.minimizeEl = document.getElementById('gallery__minimize');
  this.maximizeEl = document.getElementById('gallery__maximize');
  this.scrollLeftEl = document.getElementById('gallery__thumbnail-container__scroll-left');
  this.scrollRightEl = document.getElementById('gallery__thumbnail-container__scroll-right');

  this.thumbnailWidth = this.element.getElementsByClassName('gallery__thumbnail-list-item')[0].offsetWidth;
  this.containerWidth = document.getElementsByClassName('gallery__thumbnail-container')[0].offsetWidth;
  this.thumbnailsWidth = this.thumbnailWidth * this.thumbnailsEl.children.length;
  this.totalOffset = Math.floor((this.containerWidth - this.thumbnailsWidth) / 100) * 100;
  
	this.initEvents();
}

Gallery.prototype = {
	minimizeButtonClick: function () {
		this.mainImageEl.style.width = "100%";
		this.mainImageContainerEl.style.overflow = "initial";
		this.minimizeEl.setAttribute("disabled", true);
		this.maximizeEl.removeAttribute("disabled");
	},
	maximizeButtonClick: function () {
		this.mainImageEl.style.width = "150%";
		this.mainImageContainerEl.style.overflow = "auto";
		this.maximizeEl.setAttribute("disabled", true);
		this.minimizeEl.removeAttribute("disabled");
	},
	initEvents: function () {
		this.thumbnailButtonEls.forEach(button => {
			button.addEventListener('click', this.handleImageClick.bind(this));
		});

		this.maximizeEl.addEventListener('click', this.maximizeButtonClick.bind(this));
    this.minimizeEl.addEventListener('click', this.minimizeButtonClick.bind(this));
    this.scrollLeftEl.addEventListener('mouseup', this.handleScroll.bind(this));
    this.scrollRightEl.addEventListener('mouseup', this.handleScroll.bind(this));
  },
  handleImageClick: function (evt) {
    var image = evt.currentTarget.getElementsByTagName('img')[0];
    this.mainImageEl.setAttribute("src", image.attributes["data-main-image-url"].value);
  },
  handleLeftScroll: function () {
    this.thumbnailsEl.style.marginLeft = (this.getCurrentPosition() - this.thumbnailWidth) + 'px';
  },
  handleRightScroll: function () {
    this.thumbnailsEl.style.marginLeft = (this.getCurrentPosition() + this.thumbnailWidth) + 'px';
  },
  handleScroll: function (evt) {
    var dir = evt.currentTarget.dataset.scrollDir;
    if(this.canScroll()) {
      if(dir === 'left') {
        this.handleLeftScroll();
      } else {
        this.handleRightScroll();
      }
    }
    this.toggleControls();
  },
  canScroll: function () {
    var curPos = this.getCurrentPosition();
    return curPos <= 0 && curPos >= this.totalOffset;
  },
  toggleControls: function() {
    var curPos = this.getCurrentPosition();
    if(curPos < 0 && curPos > this.totalOffset) {
      this.scrollRightEl.removeAttribute('disabled');
      this.scrollLeftEl.removeAttribute('disabled');
    }
    if(curPos >= 0) {
      this.scrollLeftEl.setAttribute('disabled', true);
    }
    if(curPos <= this.totalOffset) {
      this.scrollRightEl.setAttribute('disabled', true);
    }
  },
  getCurrentPosition: function () {
    return Number(this.thumbnailsEl.style.marginLeft.replace('px', '')) || 0;
  }
}
const urlParams = new URLSearchParams(window.location.search);
const product_id = urlParams.get('product_id');
var product_data;

PouchDB.find({
  include_docs: true,
  selector: {
    _id: product_id
  } 
}).then(function(doc){
  product_data = doc.docs;
  //console.log("product data: ", product_data[0]);
}).then(function(){
  var productGalleryTemplate = Handlebars.compile(document.getElementById('product-gallery-template').innerHTML);
  var compiledHtml = productGalleryTemplate(product_data[0]);
  document.getElementById('gallery').innerHTML = compiledHtml;
}).then(function(){
  var galleryElements = document.querySelectorAll('.gallery');
  galleryElements.forEach(function (galleryElement) {
    new Gallery(galleryElement);
  });
});

