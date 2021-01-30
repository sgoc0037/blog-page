let image = document.querySelectorAll('.gallery-slider .slider__row img')
let slider = document.querySelector('.gallery-slider .slider__row')
let activeSlide = 0
let width;

function initWidth() {
	width = document.querySelector('.gallery-slider').offsetWidth;
	slider.style.width = width * image.length + 'px';
	image.forEach(item => {
		item.style.width = width + 'px';
		item.style.height = 'auto';
	})
	roll()
}

document.querySelector('.gallery__left').addEventListener('click',function() {
	activeSlide++
	if(activeSlide >= image.length) {
		activeSlide = 0
	}
	roll()
})
document.querySelector('.gallery__right').addEventListener('click',function() {
	activeSlide--
	if(activeSlide < 0) {
		activeSlide = image.length -1
	}
	roll()
})
function roll() {
	slider.style.transform = "translate(-" + activeSlide * width +"px)"
}

initWidth()

window.addEventListener('resize', initWidth);
