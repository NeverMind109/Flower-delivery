//  Инициализируем первый slider 
const flowersSlider = new Swiper('.flowers-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 6,

    // Стрелки навигации
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });