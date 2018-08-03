var Gallery = function (element) {
	this.element = element;
	this.thumbnailsEl = this.element.getElementsByClassName('gallery__thumbnail-list')[0];
	this.thumbnailButtonEls = this.thumbnailsEl.querySelectorAll('.gallery__thumbnail-list-item button');
	this.mainImageEl = document.getElementById('gallery__main-image');
	this.mainImageContainerEl = this.element.getElementsByClassName('gallery__main-image__inner-container')[0];
	this.minimizeEl = document.getElementById('gallery__minimize');
	this.maximizeEl = document.getElementById('gallery__maximize');

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
			button.addEventListener('click', (e) => {
				image = e.currentTarget.getElementsByTagName('img')[0];
				this.mainImageEl.setAttribute("src", image.attributes["data-main-image-url"].value);
			});
		});

		this.maximizeEl.addEventListener('click', this.maximizeButtonClick.bind(this));
		this.minimizeEl.addEventListener('click', this.minimizeButtonClick.bind(this));
	}
}

var galleryElements = document.querySelectorAll('.gallery');
galleryElements.forEach(function (galleryElement) {
	var gallery = new Gallery(galleryElement);
});