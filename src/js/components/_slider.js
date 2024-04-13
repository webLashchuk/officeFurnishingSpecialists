import Swiper, { Navigation, Pagination } from 'swiper';

const swiperTeam = new Swiper('.team-slider', {
  slidesPerView: 3,
  spaceBetween: 20,

  modules: [Navigation, Pagination],
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },

  draggable: true,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 1.8,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
