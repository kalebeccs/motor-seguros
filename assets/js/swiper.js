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
        delay: 5000,
        disableOnInteraction: false,
    }
});

/*=============== SWIPER INDEX ===============*/
let swiperCardsIndex = new Swiper('.comment__content', {
    loop: true,
    spaceBetween: 0,
    grabCursor: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    //autoplay
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    }
});