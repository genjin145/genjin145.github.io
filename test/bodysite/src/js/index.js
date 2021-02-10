import 'core-js/features/number';
import svg4everybody from 'svg4everybody';
import Swiper, { Navigation } from 'swiper';

svg4everybody();

Swiper.use([Navigation]);

new Swiper('.hit__slider', {
  navigation: {
    prevEl: '.hit__prev',
    nextEl: '.hit__next'
  },
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
