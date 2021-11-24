$(document).ready(function() {
  // fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  animated: false,
  showClass: false,
  hideClass: false,

  Toolbar: false,

  closeButton: "top",
  click: false,
  dragToClose: false,

  Image: {
    // Disable animation from/to thumbnail on start/close
    zoom: true,

    // Disable zoom on scroll event
    wheel: false,

    // Disable zoom on image click
    click: false,

    // Fit image horizontally only
    fit: "contain-w",
  },
  Carousel: {
    Navigation: {
      prevTpl:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5l-7 7 7 7"/><path d="M4 12h16"/></svg>',
      nextTpl:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12h16"/><path d="M13 5l7 7-7 7"/></svg>',
    },
  },
});


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

})