/* Carousel Functions */
const carouselList = document.querySelector('.carousel__items');
const items = carouselList.querySelectorAll('.card')

let carouselWidth = () => carouselList.getBoundingClientRect().width;
let totalWidth = () => carouselList.scrollWidth;
let itemWidth = () => items[0].getBoundingClientRect().width;
let numItemsVisible = () => Math.floor(carouselWidth() / itemWidth());
let minX = () => (totalWidth() >= carouselWidth()) ? -(Math.floor(totalWidth()/carouselWidth()) * carouselWidth()) + carouselWidth() - (totalWidth() % carouselWidth()) : 0;

let shiftAmount = () => {
	return numItemsVisible() * itemWidth();
}

// setup item focus listeners
// items.forEach( item => {
// 	item.addEventListener('focusin', () => {
// 		const offset = item.offsetLeft - 67; // TODO: this could be programatic
// 		if (offset > Math.abs(carouselPosition)) {
// 			carouselPosition = carouselPosition - itemWidth()
// 			shiftCarousel(carouselPosition);
// 		} else if (offset < Math.abs(carouselPosition)) {
// 			var nextPos = carouselPosition + itemWidth();
// 			if (nextPos > 0) carouselPosition = 0;
// 			shiftCarousel(nextPos);
// 		}
// 	})
// })




function shiftCarousel(amount) {
	carouselList.style.transform = `translatex(${amount}px)`;
}

const buttonRight = document.querySelector('.carousel__arrow--right');
const buttonLeft = document.querySelector('.carousel__arrow--left');


// UI State + Interactions
let carouselPosition = 0;
buttonRight.addEventListener('click', (e) => {
	let nextPos = (carouselPosition - shiftAmount() > minX()) ? carouselPosition - shiftAmount() : minX();
	carouselPosition = nextPos;
	shiftCarousel(nextPos);
});
buttonLeft.addEventListener('click', (e) => {
	let nextPos = (carouselPosition + shiftAmount() <= 0) ? carouselPosition + shiftAmount() : 0;
	carouselPosition = nextPos;
	shiftCarousel(nextPos);
});

// function getActiveItem() {
// 	const activeItem =
// }

