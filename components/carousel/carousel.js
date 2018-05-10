/* Carousel Functions */
const carouselList = document.querySelector('.carousel__items');
const items = carouselList.querySelectorAll('.card');
const buttonRight = document.querySelector('.carousel__arrow--right');
const buttonLeft = document.querySelector('.carousel__arrow--left');

let carouselPosition = 0;
let currentPage = 0;
let carouselWidth = () => carouselList.getBoundingClientRect().width;
let totalWidth = () => carouselList.scrollWidth;
let itemWidth = () => items[0].getBoundingClientRect().width;
let numItemsVisible = () => Math.floor(carouselWidth() / itemWidth());
let minX = () => (totalWidth() >= carouselWidth()) ? -(Math.floor(totalWidth()/carouselWidth()) * carouselWidth()) + carouselWidth() - (totalWidth() % carouselWidth()) : 0;
let pageCount = () => Math.ceil(items.length / numItemsVisible());

let shiftAmount = () => {
	return numItemsVisible() * itemWidth() * -1;
}

/**
 * Get index of an element inside parent
 * @param  {HTMLElement} element
 */
function getElementIndex(element) {
	var index = 0;
	while ((element = element.previousElementSibling)) {
		++index;
	}
	return index;
}
function shiftCarousel(pageIndex) {
	currentPage = pageIndex;
	let amount = (currentPage < pageCount() -1) ? currentPage * shiftAmount() : minX();
	carouselList.style.transform = `translatex(${amount}px)`;
	refreshArrowButtons();
}
function toggleButton(button, isDisabled){
	return isDisabled ? button.setAttribute("disabled", "disabled") : button.removeAttribute("disabled");
}
function refreshArrowButtons(){
	toggleButton(buttonLeft, currentPage === 0);
	toggleButton(buttonRight, currentPage === pageCount() - 1);
}
function refreshCarousel(){
	/*
	* TODO: Add a (buffered) window resize event call that will reflow the carousel if the page count needs to change
	 */
	refreshArrowButtons();
}

// UI State + Interactions
buttonRight.addEventListener('click', (e) => {
	shiftCarousel(currentPage + 1);
});
buttonLeft.addEventListener('click', (e) => {
	shiftCarousel(currentPage -1);
});

// setup card focus listeners
items.forEach( card => {
	card.addEventListener('focusin', evt => {
		const cardIndex = getElementIndex(evt.target.closest(".card"));
		const cardPage = Math.ceil((cardIndex + 1) / numItemsVisible()) - 1;
		if(cardPage != currentPage){
			shiftCarousel(cardPage);
		}
	});
});

refreshCarousel();
