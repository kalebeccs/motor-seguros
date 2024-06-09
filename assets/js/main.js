let swiperCards = new Swiper('.card__content', {
    loop: true,
    spaceBetween: 0,
    grabCursor: true,
// Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});