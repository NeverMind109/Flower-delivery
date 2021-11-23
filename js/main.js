//  Инициализируем первый slider 
const flowersSlider = new Swiper('.flowers-slider', {
    // Параметры слайдера
  loop: true,
  slidesPerView: 6,
  speed: 100,
  keyboard: {
     enabled: true,
  },

  // Стрелки навигации
  navigation: {
    nextEl: '.flowers-slider__button--next',
    prevEl: '.flowers-slider__button--prev',
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 1,
  speed: 400,

  // Стрелки навигации
  navigation: {
    nextEl: '.review-slider__button--next',
    prevEl: '.review-slider__button--prev',
  },
});