const slider = document.querySelector(".swiper-container");

let mySwiper = new Swiper(slider, {
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	grabCursor: true,
	mousewheel: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
  },
  autoHeight: true,
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
});
