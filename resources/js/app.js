import Vue from 'vue';

import PhotoChange from './components/PhotoChange.vue';


new Vue({
    el: '#app',
    components: {
        PhotoChange
    },
})

const hamburgerNav = document.querySelector('.hamburger');
hamburgerNav.addEventListener('click', () => {
	document.querySelector('#nav-open').classList.add('open');
});

const closeNav = document.querySelector('.close');
closeNav.addEventListener('click', () => {
	document.querySelector('#nav-open').classList.remove('open');
});

const closeNavKontakt = document.querySelector('.close-nav');
closeNavKontakt.addEventListener('click', () => {
	document.querySelector('#nav-open').classList.remove('open');
});

import Swiper, { Autoplay, EffectFade, Navigation } from 'swiper';

Swiper.use([Autoplay, EffectFade, Navigation]);

const swiper1 = new Swiper('.swiper1', {
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	  },
	spaceBetween: 0,
	followFinger: false,
	speed: 500,
	centeredSlides: true,
	autoplay: {
		delay: 4000,	  
	},
	on: {
		autoplay() {
			swiper1.autoplay.stop()		  
		},
		autoplayStop() {  
			setTimeout(() => {
				swiper1.autoplay.start()	
				swiper2.autoplay.start()
				swiper3.autoplay.start()	
				swiper4.autoplay.start()	
				swiper5.autoplay.start()	
				swiper6.autoplay.start()	
			}, 1000)
		},
	  },
});

const swiper2 = new Swiper('.swiper2', {
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	  },
	spaceBetween: 0,
	followFinger: false,
	speed: 500,
	centeredSlides: true,
	autoplay: {
		delay: 1000,	  
	},
	on: {
		autoplay() {
			swiper2.autoplay.stop()		  
		}
	  },
});

const swiper3 = new Swiper('.swiper3', {
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	  },
	spaceBetween: 0,
	followFinger: false,
	speed: 500,
	centeredSlides: true,
	autoplay: {
		delay: 2000,	  
	},
	on: {
		autoplay() {
			swiper3.autoplay.stop()		  
		},
	  },
});

const swiper4 = new Swiper('.swiper4', {
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	  },
	spaceBetween: 0,
	followFinger: false,
	speed: 500,
	centeredSlides: true,
	autoplay: {
		delay: 5000,	  
	},
	on: {
		autoplay() {
			swiper4.autoplay.stop()		  
		},
	  },
});

const swiper5 = new Swiper('.swiper5', {
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	  },
	spaceBetween: 0,
	followFinger: false,
	speed: 500,
	centeredSlides: true,
	autoplay: {
		delay: 6000,	  
	},
	on: {
		autoplay() {
			swiper5.autoplay.stop()		  
		},
	  },
});

const swiper6 = new Swiper('.swiper6', {
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	  },
	spaceBetween: 0,
	followFinger: false,
	speed: 500,
	centeredSlides: true,
	autoplay: {
		delay: 3000,		
	},
	on: {
		autoplay() {
			swiper6.autoplay.stop()		  
		},
	  },
});