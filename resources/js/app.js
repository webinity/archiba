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

import Swiper, { Autoplay } from 'swiper';
// import Swiper styles
import 'swiper/css';

Swiper.use([ Autoplay]);

const swiper = new Swiper('.swiper', {	
	effect: 'flip',
	flipEffect: {
	  slideShadows: false,
	},
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
	  delay: 1500,
	  disableOnInteraction: false,
	  reverseDirection: true,
	},

});

