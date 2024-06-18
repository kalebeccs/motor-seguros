/*=============== SWIPER PROMOTION AND BENEFITS ===============*/
let swiperCards = new Swiper('.card__content', {
    loop: true,
    spaceBetween: 0,
    grabCursor: true,
// Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {   //native from Swiper library
        delay: 3000,
        disableOnInteraction: false, 
    }
});

    /*=============== SWIPER INDEX ===============*/
let swiperCards2 = new Swiper('.comment__content', {
    loop: true,
    spaceBetween: 0,
    grabCursor: true,
// Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});