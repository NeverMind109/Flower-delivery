//  Инициализируем первый slider 
const flowersSlider = new Swiper('.flowers-slider', {
    // Параметры слайдера
  loop: true,
  speed: 100,
  keyboard: {
     enabled: true,
  },

  // Стрелки навигации
  navigation: {
    nextEl: '.flowers-slider__button--next',
    prevEl: '.flowers-slider__button--prev',
  },

  // Настройки для адаптивной версии
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 6,
    }
  }
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