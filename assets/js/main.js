/*=============== SWIPER PROMOTION AND BENEFITS ===============*/
let swiperCards = new Swiper('.carousel__content', {
    loop: true,
    spaceBetween: 0,
    grabCursor: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //autoplay
    autoplay: {
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