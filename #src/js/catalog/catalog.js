//! Слайдеры 

var sliderCatalogInfo = new Swiper(".sliderCatalogInfo", {
    loop: true,
    // cssMode: true,
    navigation: {
        nextEl: ".cat-info__block-slider .swiper-button-next",
        prevEl: ".cat-info__block-slider .swiper-button-prev",
    },
    pagination: {
        el: ".cat-info__block-slider .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: { 
        1700: { 
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1050: {
            slidesPerView: 3, 
            spaceBetween: 20, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 20, 
        }
    },
});

var swiper = new Swiper(".sliderCatalogAdd", {
    loop: true,
    pagination: {
        el: ".cat-add__block-slider .swiper-pagination",
    },
    breakpoints: { 
        1700: { 
            slidesPerView: 6, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 6, 
            spaceBetween: 30, 
        },
        1000: {
            slidesPerView: 3, 
            spaceBetween: 20, 
        },
        0: {
            slidesPerView: 3, 
            spaceBetween: 20, 
        }
    },
});

var collections_1 = new Swiper(".sliderCatalogCollections-1", {
    loop: true,
    navigation: {
        nextEl: ".cat-collections__block-slider-1 .swiper-button-next",
        prevEl: ".cat-collections__block-slider-1 .swiper-button-prev",
    },
    pagination: {
        el: ".cat-collections__block-slider-1 .swiper-pagination",
    },
    breakpoints: { 
        1700: { 
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1000: {
            slidesPerView: 3, 
            spaceBetween: 20, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 20, 
        }
    },
});

var collections_2 = new Swiper(".sliderCatalogCollections-2", {
    loop: true,
    navigation: {
        nextEl: ".cat-collections__block-slider-2 .swiper-button-next",
        prevEl: ".cat-collections__block-slider-2 .swiper-button-prev",
    },
    pagination: {
        el: ".cat-collections__block-slider-2 .swiper-pagination",
    },
    breakpoints: { 
        1700: { 
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1000: {
            slidesPerView: 3, 
            spaceBetween: 20, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 20, 
        }
    },
});

//! --------------------------------------------------------------------------------------------


//! События нажатия - открывающие дополнительные блоки 

$('.cat-collections__block-styled').on('click', function() {
    $(this).toggleClass('c-active')
    $('.cat-collections__block-list').toggleClass('c-display')
    $('.cat-add__block-slider .swiper-control').toggleClass('c-display-none')
});

$('.cat-collections__block-styled-1').on('click', function() {
    $(this).toggleClass('c-active')
    $('.cat-collections__block-list-1').toggleClass('c-display')
    $('.cat-collections__block-slider-1 .swiper-control-1 .swiper-pagination').toggleClass('c-display-none')
});

$('.cat-collections__block-styled-2').on('click', function() {
    $(this).toggleClass('c-active')
    $('.cat-collections__block-list-2').toggleClass('c-display')
    $('.cat-collections__block-slider-2 .swiper-control-2 .swiper-pagination').toggleClass('c-display-none')
});

//! --------------------------------------------------------------------------------------------


//! Star оценка товара 

$('#star-1').on('click', function() {
    $('.model-catalog__card-info-reviews-stars-num').html('1');
});
$('#star-2').on('click', function() {
    $('.model-catalog__card-info-reviews-stars-num').html('2');
});
$('#star-3').on('click', function() {
    $('.model-catalog__card-info-reviews-stars-num').html('3');
});
$('#star-4').on('click', function() {
    $('.model-catalog__card-info-reviews-stars-num').html('4');
});
$('#star-5').on('click', function() {
    $('.model-catalog__card-info-reviews-stars-num').html('5');
});


//! --------------------------------------------------------------------------------------------


$('.model-catalog__card-info-calendar-select').on('click', function() {
    $('.model-catalog__card-info-calendar-select').toggleClass('model-catalog__card-info-calendar-select-active');
    $('.model-catalog__card-info-calendar-block').toggleClass('display-n');
});




var modelSlider = new Swiper(".modelSlider", {
    simulateTouch: false,
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".model-catalog-slider .swiper-control .swiper-button-next",
        prevEl: ".model-catalog-slider .swiper-control .swiper-button-prev",
    },
});


var addModelSlider = new Swiper(".addModelSlider", {
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 15, 
    navigation: {
        nextEl: ".model-catalog__card-block-add-list .swiper-controls .swiper-button-next",
        prevEl: ".model-catalog__card-block-add-list .swiper-controls .swiper-button-prev",
    },
});

var recModelSlider = new Swiper(".recModelSlider", {
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 15, 
    navigation: {
        nextEl: ".model-catalog__card-block-rec-list .swiper-controls .swiper-button-next",
        prevEl: ".model-catalog__card-block-rec-list .swiper-controls .swiper-button-prev",
    },
});


var modelSliderToy = new Swiper(".modelSliderToy", {
    simulateTouch: false,
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".model-toy-slider .swiper-controls .swiper-button-next",
        prevEl: ".model-toy-slider .swiper-controls .swiper-button-prev",
    },
});



var modelToyWrapperSlider = new Swiper(".modelToyWrapperSlider", {
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 15, 
    navigation: {
        nextEl: ".model-toy__block-wrapper-slider .swiper-control .swiper-button-next",
        prevEl: ".model-toy__block-wrapper-slider .swiper-control .swiper-button-prev",
    },
});

$('.model-toy__block-info-calendar-btn').on('click', function() {
    $('.model-toy__block-info-calendar-item').toggleClass('display-n')
    $('.model-toy__block-info-calendar-btn').toggleClass('model-toy__block-info-calendar-btn-active')
});


var modelSliderBallons = new Swiper(".modelSliderBallons", {
    simulateTouch: false,
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".model-ballons-slider .swiper-controls .swiper-button-next",
        prevEl: ".model-ballons-slider .swiper-controls .swiper-button-prev",
    },
});



var modelBallonsWrapperSlider = new Swiper(".modelBallonsWrapperSlider", {
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 15, 
    navigation: {
        nextEl: ".model-ballons__block-wrapper-slider .swiper-control .swiper-button-next",
        prevEl: ".model-ballons__block-wrapper-slider .swiper-control .swiper-button-prev",
    },
});

$('.model-ballons__block-info-calendar-btn').on('click', function() {
    $('.model-ballons__block-info-calendar-item').toggleClass('display-n')
    $('.model-ballons__block-info-calendar-btn').toggleClass('model-ballons__block-info-calendar-btn-active')
});