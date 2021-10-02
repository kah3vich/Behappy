var searchConstructSlider = new Swiper(".searchConstructSlider", {

    navigation: {
        nextEl: ".search-content__block-constructs .swiper-controls .swiper-button-next",
        prevEl: ".search-content__block-constructs .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".search-content__block-constructs .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 6,
    spaceBetween: 15,
    breakpoints: {
        1430: {
            slidesPerView: 6,
            spaceBetweenSlides: 0
        },
        1100: {
            slidesPerView: 5,
            spaceBetweenSlides: 0
        },
        850: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        600: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        }
    }
});



var searchCollectionsSlider = new Swiper(".searchCollectionsSlider", {

    navigation: {
        nextEl: ".search-content__block-collections .swiper-controls .swiper-button-next",
        prevEl: ".search-content__block-collections .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".search-content__block-collections .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 4,
    spaceBetween: 15,
    breakpoints: {
        // when window width is <= 499px
        1400: {
            slidesPerView: 4,
            spaceBetweenSlides: 15
        },
        950: {
            slidesPerView: 3,
            spaceBetweenSlides: 15
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 15
        }
    }
});



var searchMonobouquetsSlider = new Swiper(".searchMonobouquetsSlider", {

    navigation: {
        nextEl: ".search-content__block-monobouquets .swiper-controls .swiper-button-next",
        prevEl: ".search-content__block-monobouquets .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".search-content__block-monobouquets .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 4,
    spaceBetween: 15,
    breakpoints: {
        // when window width is <= 499px
        1400: {
            slidesPerView: 4,
            spaceBetweenSlides: 15
        },
        950: {
            slidesPerView: 3,
            spaceBetweenSlides: 15
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 15
        }
    }
});


var searchAddsSlider = new Swiper(".searchAddsSlider", {

    navigation: {
        nextEl: ".search-content__block-adds .swiper-controls .swiper-button-next",
        prevEl: ".search-content__block-adds .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".search-content__block-adds .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 6,
    spaceBetween: 15,
    breakpoints: {
        // when window width is <= 499px
        1350: {
            slidesPerView: 6,
            spaceBetweenSlides: 15
        },
        950: {
            slidesPerView: 5,
            spaceBetweenSlides: 15
        },
        850: {
            slidesPerView: 4,
            spaceBetweenSlides: 15
        },
        0: {
            slidesPerView: 3,
            spaceBetweenSlides: 15
        }
    }
});


$('.search-content__block-collection h3').on('click', function() {
    $(this).toggleClass('search-content__block-collection-active')
    $('.search-content__block-collections .swiper-pagination').toggleClass('display-n')
    $('.search-content__block-collections-adds').toggleClass('display-n')
})
$('.search-content__block-monobouquet h3').on('click', function() {
    $(this).toggleClass('search-content__block-monobouquet-active')
    $('.search-content__block-monobouquets .swiper-pagination').toggleClass('display-n')
    $('.search-content__block-monobouquets-adds').toggleClass('display-n')
})

