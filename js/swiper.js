const slider = document.querySelector(".swiper-container");

let mySwiper = new Swiper(slider, {
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	// loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	// grabCursor: true,
	mousewheel: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	// autoHeight: true,
	watchOverflow: true,
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
	},
});
