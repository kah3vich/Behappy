//! Свайп блока внизу 


$('.const-content__swipe').on('click', function() {
    $(this).addClass('display-n');
    $('.const-content__swipers').removeClass('display-n');
});
$('.const-content__swipers-btn').on('click', function() {
    $('.const-content__swipers').addClass('display-n');
    $('.const-content__swipe').removeClass('display-n');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 1


var constListSlider_1 = new Swiper(".constListSlider-1", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-1 .swiper-control-1 .swiper-button-next",
        prevEl: ".const-content__block-slider-1 .swiper-control-1 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 1


$('#constListItem-1').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-1').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-1').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-1').on('click', function() {
    $('#constListItem-1').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-1').toggleClass('display-n');
});
$('#constBlockSliderColor-1-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-1-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-1-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-1-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-1-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-1-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-1-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-1-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-1-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-1-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-1-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-1-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-1-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-1-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-1-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-1-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-1-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-1-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------



//! Слайдеры для каталогов - 2


var constListSlider_1 = new Swiper(".constListSlider-2", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-2 .swiper-control-2 .swiper-button-next",
        prevEl: ".const-content__block-slider-2 .swiper-control-2 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 2


$('#constListItem-2').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-2').toggleClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-2').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-2').on('click', function() {
    $('#constListItem-2').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-2').toggleClass('display-n');
});
$('#constBlockSliderColor-2-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-2-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-2-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-2-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-2-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-2-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-2-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-2-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-2-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-2-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-2-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-2-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 3


var constListSlider_1 = new Swiper(".constListSlider-3", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-3 .swiper-control-3 .swiper-button-next",
        prevEl: ".const-content__block-slider-3 .swiper-control-3 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 3


$('#constListItem-3').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-3').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-3').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-3').on('click', function() {
    $('#constListItem-3').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-3').toggleClass('display-n');
});
$('#constBlockSliderColor-3-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-3-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-3-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-3-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-3-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-3-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-3-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-3-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-3-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-3-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-3-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-3-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-3-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-3-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-3-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-3-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-3-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-3-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 4


var constListSlider_1 = new Swiper(".constListSlider-4", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-4 .swiper-control-4 .swiper-button-next",
        prevEl: ".const-content__block-slider-4 .swiper-control-4 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 4


$('#constListItem-4').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-4').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-4').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-4').on('click', function() {
    $('#constListItem-4').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-4').toggleClass('display-n');
});
$('#constBlockSliderColor-4-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-4-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-4-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-4-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-4-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-4-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-4-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-4-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-4-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-4-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-4-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-4-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-4-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-4-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-4-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-4-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-4-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-4-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 5


var constListSlider_1 = new Swiper(".constListSlider-5", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-5 .swiper-control-5 .swiper-button-next",
        prevEl: ".const-content__block-slider-5 .swiper-control-5 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 5


$('#constListItem-5').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-5').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-5').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-5').on('click', function() {
    $('#constListItem-5').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-5').toggleClass('display-n');
});
$('#constBlockSliderColor-5-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-5-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-5-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-5-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-5-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-5-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-5-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-5-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-5-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-5-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-5-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-5-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-5-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-5-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-5-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-5-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-5-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-5-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 6


var constListSlider_1 = new Swiper(".constListSlider-6", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-6 .swiper-control-6 .swiper-button-next",
        prevEl: ".const-content__block-slider-6 .swiper-control-6 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 6


$('#constListItem-6').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-6').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-6').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-6').on('click', function() {
    $('#constListItem-6').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-6').toggleClass('display-n');
});
$('#constBlockSliderColor-6-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-6-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-6-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-6-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-6-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-6-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-6-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-6-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-6-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-6-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-6-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-6-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-6-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-6-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-6-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-6-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-6-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-6-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 7


var constListSlider_1 = new Swiper(".constListSlider-7", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-7 .swiper-control-7 .swiper-button-next",
        prevEl: ".const-content__block-slider-7 .swiper-control-7 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 7


$('#constListItem-7').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-7').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-7').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-7').on('click', function() {
    $('#constListItem-7').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-7').toggleClass('display-n');
});
$('#constBlockSliderColor-7-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-7-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-7-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-7-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-7-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-7-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-7-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-7-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-7-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-7-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-7-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-7-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-7-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-7-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-7-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-7-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-7-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-7-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 8


var constListSlider_1 = new Swiper(".constListSlider-8", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-8 .swiper-control-8 .swiper-button-next",
        prevEl: ".const-content__block-slider-8 .swiper-control-8 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 8


$('#constListItem-8').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-8').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-8').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-8').on('click', function() {
    $('#constListItem-8').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-8').toggleClass('display-n');
});
$('#constBlockSliderColor-8-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-8-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-8-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-8-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-8-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-8-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-8-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-8-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-8-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-8-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-8-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-8-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-8-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-8-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-8-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-8-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-8-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-8-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 9


var constListSlider_1 = new Swiper(".constListSlider-9", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-9 .swiper-control-9 .swiper-button-next",
        prevEl: ".const-content__block-slider-9 .swiper-control-9 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 9


$('#constListItem-9').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-9').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-9').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-9').on('click', function() {
    $('#constListItem-9').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-9').toggleClass('display-n');
});
$('#constBlockSliderColor-9-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-9-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-9-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-9-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-9-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-9-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-9-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-9-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-9-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-9-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-9-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-9-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-9-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-9-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-9-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-9-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-9-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-9-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 10


var constListSlider_1 = new Swiper(".constListSlider-10", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-10 .swiper-control-10 .swiper-button-next",
        prevEl: ".const-content__block-slider-10 .swiper-control-10 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 10


$('#constListItem-10').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-10').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-10').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-10').on('click', function() {
    $('#constListItem-10').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-10').toggleClass('display-n');
});
$('#constBlockSliderColor-10-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-10-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-10-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-10-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-10-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-10-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-10-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-10-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-10-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-10-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-10-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-10-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-10-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-10-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-10-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-10-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-10-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-10-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------



//! Слайдеры для каталогов - 11


var constListSlider_1 = new Swiper(".constListSlider-11", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-11 .swiper-control-11 .swiper-button-next",
        prevEl: ".const-content__block-slider-11 .swiper-control-11 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 11


$('#constListItem-11').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-11').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-11').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-11').on('click', function() {
    $('#constListItem-11').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-11').toggleClass('display-n');
});
$('#constBlockSliderColor-11-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-11-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-11-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-11-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-11-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-11-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-11-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-11-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-11-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-11-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-11-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-11-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-11-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-11-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-11-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-11-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-11-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-11-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 12


var constListSlider_1 = new Swiper(".constListSlider-12", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-12 .swiper-control-12 .swiper-button-next",
        prevEl: ".const-content__block-slider-12 .swiper-control-12 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 12


$('#constListItem-12').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-12').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-12').removeClass('display-n');
        $('.const-content__block-back').addClass('display-n')
        $('.const-content__block-title').addClass('display-n')
        $('.const-content__block-text').addClass('display-n')
        $('.const-content__block-banner').addClass('display-n')
        $('.const-content__block-list').addClass('display-n')
        $('.const-content').css('padding', '0px')
    }
});
$('#constBlockSliderClose-12').on('click', function() {
    $('#constListItem-12').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-12').toggleClass('display-n');
});
$('#constBlockSliderColor-12-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-12-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-12-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-12-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-12-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-12-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-12-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-12-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-12-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-12-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-12-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-12-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-12-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-12-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-12-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-12-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-12-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-12-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------



//! Слайдеры для корзин  - 1


var constListSliders_1 = new Swiper(".constListSliders-1", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-sliders-1 .swiper-controls-1 .swiper-button-next",
        prevEl: ".const-content__block-sliders-1 .swiper-controls-1 .swiper-button-prev",
    },
});


$('#constBlockBasket-1').on('click', function() {
    $('#constBlockSliders-1').toggleClass('display-n')
    $('#constBlockSliders-2').addClass('display-n')
    $('#constBlockSliders-3').addClass('display-n')
    $('#constBlockSliders-4').addClass('display-n')
});
$('#constBlockSlidersClose-1').on('click', function() {
    $('#constBlockSliders-1').addClass('display-n')
});

//! ------------------------------------------------------------------------------------


//! Кнопки в слайдере корзины - 1-1


$('.const-content__block-sliders-1-content-img-container').on('click', function() {
    $('#constSlidersContent-1-1-Box').addClass('display-n');
    $('#constSlidersContent-1-1-Container').removeClass('display-n');
    $('#constSlidersContent-1-1-Heart').addClass('display-n');
    $('#constSlidersContent-1-1-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-1-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-box').on('click', function() {
    $('#constSlidersContent-1-1-Box').removeClass('display-n');
    $('#constSlidersContent-1-1-Container').addClass('display-n');
    $('#constSlidersContent-1-1-Heart').addClass('display-n');
    $('#constSlidersContent-1-1-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-1-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-heart').on('click', function() {
    $('#constSlidersContent-1-1-Box').addClass('display-n');
    $('#constSlidersContent-1-1-Container').addClass('display-n');
    $('#constSlidersContent-1-1-Heart').removeClass('display-n');
    $('#constSlidersContent-1-1-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-1-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-cylinder').on('click', function() {
    $('#constSlidersContent-1-1-Box').addClass('display-n');
    $('#constSlidersContent-1-1-Container').addClass('display-n');
    $('#constSlidersContent-1-1-Heart').addClass('display-n');
    $('#constSlidersContent-1-1-Cylinder').removeClass('display-n');
    $('#constSlidersContent-1-1-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-basket').on('click', function() {
    $('#constSlidersContent-1-1-Box').addClass('display-n');
    $('#constSlidersContent-1-1-Container').addClass('display-n');
    $('#constSlidersContent-1-1-Heart').addClass('display-n');
    $('#constSlidersContent-1-1-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-1-Basket').removeClass('display-n');
});


//! ------------------------------------------------------------------------------------


//! Кнопки в слайдере корзины - 1-2


$('.const-content__block-sliders-1-content-img-container').on('click', function() {
    $('#constSlidersContent-1-2-Box').addClass('display-n');
    $('#constSlidersContent-1-2-Container').removeClass('display-n');
    $('#constSlidersContent-1-2-Heart').addClass('display-n');
    $('#constSlidersContent-1-2-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-2-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-box').on('click', function() {
    $('#constSlidersContent-1-2-Box').removeClass('display-n');
    $('#constSlidersContent-1-2-Container').addClass('display-n');
    $('#constSlidersContent-1-2-Heart').addClass('display-n');
    $('#constSlidersContent-1-2-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-2-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-heart').on('click', function() {
    $('#constSlidersContent-1-2-Box').addClass('display-n');
    $('#constSlidersContent-1-2-Container').addClass('display-n');
    $('#constSlidersContent-1-2-Heart').removeClass('display-n');
    $('#constSlidersContent-1-2-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-2-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-cylinder').on('click', function() {
    $('#constSlidersContent-1-2-Box').addClass('display-n');
    $('#constSlidersContent-1-2-Container').addClass('display-n');
    $('#constSlidersContent-1-2-Heart').addClass('display-n');
    $('#constSlidersContent-1-2-Cylinder').removeClass('display-n');
    $('#constSlidersContent-1-2-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-basket').on('click', function() {
    $('#constSlidersContent-1-2-Box').addClass('display-n');
    $('#constSlidersContent-1-2-Container').addClass('display-n');
    $('#constSlidersContent-1-2-Heart').addClass('display-n');
    $('#constSlidersContent-1-2-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-2-Basket').removeClass('display-n');
});


//! ------------------------------------------------------------------------------------



//! Слайдеры для корзин  - 2

var constListSliders_2 = new Swiper(".constListSliders-2", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-sliders-2 .swiper-controls-2 .swiper-button-next",
        prevEl: ".const-content__block-sliders-2 .swiper-controls-2 .swiper-button-prev",
    },
});
$('#constBlockBasket-2').on('click', function() {
    $('#constBlockSliders-2').toggleClass('display-n')
    $('#constBlockSliders-1').addClass('display-n')
    $('#constBlockSliders-3').addClass('display-n')
    $('#constBlockSliders-4').addClass('display-n')
});
$('#constBlockSlidersClose-2').on('click', function() {
    $('#constBlockSliders-2').addClass('display-n')
});

//! ------------------------------------------------------------------------------------


//! Слайдеры для корзин color  - 2-1


$('#constBlockSliderColor-2-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-1-4').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-1-5').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-1-6').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для корзин color  - 2-2


$('#constBlockSliderColor-2-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-4').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-5').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-6').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для корзин color  - 2-3


$('#constBlockSliderColor-2-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-4').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-5').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-6').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для корзин  - 3

var constListSliders_3 = new Swiper(".constListSliders-3", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-sliders-3 .swiper-controls-3 .swiper-button-next",
        prevEl: ".const-content__block-sliders-3 .swiper-controls-3 .swiper-button-prev",
    },
});
$('#constBlockBasket-3').on('click', function() {
    $('#constBlockSliders-3').toggleClass('display-n')
    $('#constBlockSliders-2').addClass('display-n')
    $('#constBlockSliders-1').addClass('display-n')
    $('#constBlockSliders-4').addClass('display-n')
});
$('#constBlockSlidersClose-3').on('click', function() {
    $('#constBlockSliders-3').addClass('display-n')
});

//! ------------------------------------------------------------------------------------


//! Слайдеры для корзин  - 4

var constListSliders_4 = new Swiper(".constListSliders-4", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-sliders-4 .swiper-controls-4 .swiper-button-next",
        prevEl: ".const-content__block-sliders-4 .swiper-controls-4 .swiper-button-prev",
    },
});
$('#constBlockBasket-4').on('click', function() {
    $('#constBlockSliders-4').toggleClass('display-n')
    $('#constBlockSliders-2').addClass('display-n')
    $('#constBlockSliders-3').addClass('display-n')
    $('#constBlockSliders-1').addClass('display-n')
});
$('#constBlockSlidersClose-4').on('click', function() {
    $('#constBlockSliders-4').addClass('display-n')
});

//! ------------------------------------------------------------------------------------


function CloseElementBlockConstructor(el) {
    let idElement = el.id
    let valueElement = $(`#${idElement} button`).val()
    $(`#${valueElement}`).remove()
    $(`#${idElement}`).remove()
    checkCountElementObjConstructor()
}

let elementObjConstructor = {}

//! Кнопка цветов 1.1




let countConstructorBtnItem_1_1 = 0
$('#constructorBtnItem-1-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_1_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_1_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_1_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_1_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_1}" value="constBannerItem_${id}_${countConstructorBtnItem_1_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_1_1 = 0
$('#constructorMediaBtnItem-1-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-1').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-1').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-1-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_1_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_1_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_1_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_1_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_1_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_1_2 = 0
$('#constructorBtnItem-1-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_1_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_1_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_1_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_1_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_2}" value="constBannerItem_${id}_${countConstructorBtnItem_1_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_1_2 = 0
$('#constructorMediaBtnItem-1-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-1').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-1').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-1-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_1_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_1_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_1_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_1_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_1_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_1_3 = 0
$('#constructorBtnItem-1-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_1_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_1_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_1_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_1_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_3}" value="constBannerItem_${id}_${countConstructorBtnItem_1_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_1_3 = 0
$('#constructorMediaBtnItem-1-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-1').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-1').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-1-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_1_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_1_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_1_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_1_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_1_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-1-back').on('click', function() {
    $('.const-media-content__block-slider-1').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-1').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})

//! ------------------------------------------------------------------------------------------------------------------


let countConstructorBtnItem_2_1 = 0
$('#constructorBtnItem-2-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-2-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 2
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_2_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_2_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_2_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_2_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_1}" value="constBannerItem_${id}_${countConstructorBtnItem_2_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_2_1 = 0
$('#constructorMediaBtnItem-2-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-2').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-2').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-2-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_2_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_2_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_2_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_2_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_2_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_2_2 = 0
$('#constructorBtnItem-2-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-2-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 2
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_2_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_2_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_2_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_2_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_2}" value="constBannerItem_${id}_${countConstructorBtnItem_2_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_2_2 = 0
$('#constructorMediaBtnItem-2-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-2').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-2').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-2-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_2_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_2_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_2_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_2_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_2_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_2_3 = 0
$('#constructorBtnItem-2-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_2_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_2_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_2_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_2_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_3}" value="constBannerItem_${id}_${countConstructorBtnItem_2_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_2_3 = 0
$('#constructorMediaBtnItem-2-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-2').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-2').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-2-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_2_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_2_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_2_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_2_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_2_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-2-back').on('click', function() {
    $('.const-media-content__block-slider-2').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-2').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})




let countConstructorBtnItem_3_1 = 0
$('#constructorBtnItem-3-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-3-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 3
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_3_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_3_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_3_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_3_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_1}" value="constBannerItem_${id}_${countConstructorBtnItem_3_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_3_1 = 0
$('#constructorMediaBtnItem-3-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-3').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-3').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-3-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_3_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_3_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_3_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_3_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_3_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_3_2 = 0
$('#constructorBtnItem-3-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-3-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 3
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_3_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_3_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_3_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_3_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_2}" value="constBannerItem_${id}_${countConstructorBtnItem_3_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_3_2 = 0
$('#constructorMediaBtnItem-3-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-3').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-3').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-3-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_3_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_3_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_3_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_3_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_3_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_3_3 = 0
$('#constructorBtnItem-3-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_3_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_3_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_3_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_3_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_3}" value="constBannerItem_${id}_${countConstructorBtnItem_3_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_3_3 = 0
$('#constructorMediaBtnItem-3-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-3').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-3').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-3-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_3_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_3_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_3_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_3_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_3_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-3-back').on('click', function() {
    $('.const-media-content__block-slider-3').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-3').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})




let countConstructorBtnItem_4_1 = 0
$('#constructorBtnItem-4-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-4-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 4
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_4_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_4_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_4_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_4_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_1}" value="constBannerItem_${id}_${countConstructorBtnItem_4_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_4_1 = 0
$('#constructorMediaBtnItem-4-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-4').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-4').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-4-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_4_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_4_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_4_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_4_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_4_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_4_2 = 0
$('#constructorBtnItem-4-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-4-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 4
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_4_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_4_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_4_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_4_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_2}" value="constBannerItem_${id}_${countConstructorBtnItem_4_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_4_2 = 0
$('#constructorMediaBtnItem-4-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-4').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-4').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-4-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_4_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_4_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_4_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_4_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_4_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_4_3 = 0
$('#constructorBtnItem-4-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_4_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_4_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_4_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_4_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_3}" value="constBannerItem_${id}_${countConstructorBtnItem_4_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_4_3 = 0
$('#constructorMediaBtnItem-4-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-4').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-4').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-4-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_4_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_4_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_4_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_4_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_4_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-4-back').on('click', function() {
    $('.const-media-content__block-slider-4').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-4').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})




let countConstructorBtnItem_5_1 = 0
$('#constructorBtnItem-5-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-5-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 5
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_5_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_5_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_5_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_5_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_1}" value="constBannerItem_${id}_${countConstructorBtnItem_5_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_5_1 = 0
$('#constructorMediaBtnItem-5-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-5').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-5').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-5-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_5_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_5_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_5_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_5_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_5_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_5_2 = 0
$('#constructorBtnItem-5-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-5-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 5
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_5_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_5_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_5_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_5_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_2}" value="constBannerItem_${id}_${countConstructorBtnItem_5_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_5_2 = 0
$('#constructorMediaBtnItem-5-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-5').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-5').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-5-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_5_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_5_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_5_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_5_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_5_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_5_3 = 0
$('#constructorBtnItem-5-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_5_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_5_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_5_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_5_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_3}" value="constBannerItem_${id}_${countConstructorBtnItem_5_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_5_3 = 0
$('#constructorMediaBtnItem-5-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-5').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-5').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-5-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_5_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_5_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_5_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_5_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_5_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-5-back').on('click', function() {
    $('.const-media-content__block-slider-5').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-5').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})




let countConstructorBtnItem_6_1 = 0
$('#constructorBtnItem-6-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-6-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 6
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_6_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_6_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_6_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_6_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_1}" value="constBannerItem_${id}_${countConstructorBtnItem_6_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_6_1 = 0
$('#constructorMediaBtnItem-6-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-6').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-6').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-6-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_6_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_6_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_6_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_6_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_6_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_6_2 = 0
$('#constructorBtnItem-6-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-6-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 6
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_6_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_6_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_6_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_6_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_2}" value="constBannerItem_${id}_${countConstructorBtnItem_6_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_6_2 = 0
$('#constructorMediaBtnItem-6-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-6').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-6').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-6-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_6_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_6_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_6_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_6_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_6_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_6_3 = 0
$('#constructorBtnItem-6-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_6_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_6_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_6_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_6_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_3}" value="constBannerItem_${id}_${countConstructorBtnItem_6_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_6_3 = 0
$('#constructorMediaBtnItem-6-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-6').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-6').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-6-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_6_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_6_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_6_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_6_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_6_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-6-back').on('click', function() {
    $('.const-media-content__block-slider-6').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-6').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})




let countConstructorBtnItem_7_1 = 0
$('#constructorBtnItem-7-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-7-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 7
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_7_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_7_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_7_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_7_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_1}" value="constBannerItem_${id}_${countConstructorBtnItem_7_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_7_1 = 0
$('#constructorMediaBtnItem-7-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-7').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-7').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-7-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_7_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_7_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_7_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_7_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_7_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_7_2 = 0
$('#constructorBtnItem-7-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-7-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 7
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_7_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_7_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_7_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_7_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_2}" value="constBannerItem_${id}_${countConstructorBtnItem_7_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_7_2 = 0
$('#constructorMediaBtnItem-7-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-7').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-7').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-7-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_7_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_7_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_7_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_7_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_7_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_7_3 = 0
$('#constructorBtnItem-7-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_7_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_7_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_7_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_7_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_3}" value="constBannerItem_${id}_${countConstructorBtnItem_7_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_7_3 = 0
$('#constructorMediaBtnItem-7-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-7').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-7').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-7-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_7_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_7_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_7_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_7_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_7_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-7-back').on('click', function() {
    $('.const-media-content__block-slider-7').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-7').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})




let countConstructorBtnItem_8_1 = 0
$('#constructorBtnItem-8-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-8-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 8
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_8_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_8_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_8_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_8_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_1}" value="constBannerItem_${id}_${countConstructorBtnItem_8_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_8_1 = 0
$('#constructorMediaBtnItem-8-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-8').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-8').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-8-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_8_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_8_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_8_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_8_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_8_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_8_2 = 0
$('#constructorBtnItem-8-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-8-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 8
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_8_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_8_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_8_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_8_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_2}" value="constBannerItem_${id}_${countConstructorBtnItem_8_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_8_2 = 0
$('#constructorMediaBtnItem-8-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-8').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-8').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-8-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_8_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_8_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_8_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_8_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_8_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_8_3 = 0
$('#constructorBtnItem-8-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_8_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_8_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_8_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_8_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_3}" value="constBannerItem_${id}_${countConstructorBtnItem_8_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_8_3 = 0
$('#constructorMediaBtnItem-8-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-8').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-8').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-8-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_8_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_8_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_8_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_8_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_8_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-8-back').on('click', function() {
    $('.const-media-content__block-slider-8').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-8').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})




let countConstructorBtnItem_9_1 = 0
$('#constructorBtnItem-9-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-9-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 9
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_9_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_9_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_9_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_9_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_1}" value="constBannerItem_${id}_${countConstructorBtnItem_9_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_9_1 = 0
$('#constructorMediaBtnItem-9-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-9').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-9').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-9-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_9_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_9_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_9_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_9_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_9_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_9_2 = 0
$('#constructorBtnItem-9-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-9-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 9
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_9_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_9_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_9_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_9_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_2}" value="constBannerItem_${id}_${countConstructorBtnItem_9_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_9_2 = 0
$('#constructorMediaBtnItem-9-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-9').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-9').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-9-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_9_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_9_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_9_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_9_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_9_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_9_3 = 0
$('#constructorBtnItem-9-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_9_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_9_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_9_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_9_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_3}" value="constBannerItem_${id}_${countConstructorBtnItem_9_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_9_3 = 0
$('#constructorMediaBtnItem-9-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-9').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-9').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-9-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_9_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_9_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_9_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_9_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_9_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-9-back').on('click', function() {
    $('.const-media-content__block-slider-9').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-9').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})




let countConstructorBtnItem_10_1 = 0
$('#constructorBtnItem-10-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-10-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 10
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_10_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_10_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_10_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_10_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_1}" value="constBannerItem_${id}_${countConstructorBtnItem_10_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_10_1 = 0
$('#constructorMediaBtnItem-10-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-10').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-10').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-10-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_10_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_10_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_10_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_10_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_10_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_10_2 = 0
$('#constructorBtnItem-10-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-10-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 10
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_10_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_10_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_10_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_10_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_2}" value="constBannerItem_${id}_${countConstructorBtnItem_10_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_10_2 = 0
$('#constructorMediaBtnItem-10-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-10').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-10').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-10-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_10_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_10_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_10_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_10_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_10_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_10_3 = 0
$('#constructorBtnItem-10-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_10_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_10_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_10_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_10_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_3}" value="constBannerItem_${id}_${countConstructorBtnItem_10_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_10_3 = 0
$('#constructorMediaBtnItem-10-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-10').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-10').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-10-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_10_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_10_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_10_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_10_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_10_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-10-back').on('click', function() {
    $('.const-media-content__block-slider-10').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-10').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})




let countConstructorBtnItem_11_1 = 0
$('#constructorBtnItem-11-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-11-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 11
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_11_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_11_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_11_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_11_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_1}" value="constBannerItem_${id}_${countConstructorBtnItem_11_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_11_1 = 0
$('#constructorMediaBtnItem-11-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-11').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-11').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-11-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_11_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_11_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_11_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_11_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_11_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_11_2 = 0
$('#constructorBtnItem-11-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-11-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 11
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_11_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_11_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_11_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_11_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_2}" value="constBannerItem_${id}_${countConstructorBtnItem_11_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_11_2 = 0
$('#constructorMediaBtnItem-11-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-11').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-11').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-11-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_11_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_11_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_11_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_11_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_11_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_11_3 = 0
$('#constructorBtnItem-11-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_11_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_11_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_11_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_11_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_3}" value="constBannerItem_${id}_${countConstructorBtnItem_11_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_11_3 = 0
$('#constructorMediaBtnItem-11-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-11').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-11').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-11-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_11_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_11_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_11_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_11_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_11_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-11-back').on('click', function() {
    $('.const-media-content__block-slider-11').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-11').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})




let countConstructorBtnItem_12_1 = 0
$('#constructorBtnItem-12-1').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-12-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 12
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_12_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_12_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_12_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_12_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_1}" value="constBannerItem_${id}_${countConstructorBtnItem_12_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_12_1 = 0
$('#constructorMediaBtnItem-12-1').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-12').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-12').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-12-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_12_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_12_1
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_12_1++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_12_1}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_1}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_1}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_12_1}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})



let countConstructorBtnItem_12_2 = 0
$('#constructorBtnItem-12-2').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-12-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 12
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_12_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_12_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_12_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_12_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_2}" value="constBannerItem_${id}_${countConstructorBtnItem_12_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_12_2 = 0
$('#constructorMediaBtnItem-12-2').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-12').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-12').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-12-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_12_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_12_2
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_12_2++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_12_2}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_2}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_2}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_12_2}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})




let countConstructorBtnItem_12_3 = 0
$('#constructorBtnItem-12-3').on('click', function() {
    let constButtonBlockCountSum_1 = $('.const-content__block-slider-1-info-btn-count-sum').html()
    console.log(constButtonBlockCountSum_1)
    let id = 1
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_12_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0;  i < constButtonBlockCountSum_1; i++) {
        countConstructorBtnItem_12_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_12_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);
        $(".const-content__block-banner-row-item").attr('value', `${constBannerRow_Item_1}`)


        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_12_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_3}" value="constBannerItem_${id}_${countConstructorBtnItem_12_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})





let countConstructorMediaBtnItem_12_3 = 0
$('#constructorMediaBtnItem-12-3').on('click', function() {
    if ( window.innerWidth <= 1110) {
        $('.const-media-content__block-slider-12').addClass('display-n');
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('#constListItem-12').removeClass('const-content__block-list-item-active')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let constButtonBlockCountSum_1 = $('.const-media-content__block-slider-12-btns-count-sum').html()
    let id = 1
    countConstructorMediaBtnItem_12_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnItem_12_3
    }
    elementObjConstructor.obj = obj
    for (let i = 0; i < constButtonBlockCountSum_1; i++) {
        countConstructorMediaBtnItem_12_3++
        let newElement = document.createElement("li");
        newElement.classList.add("const-content__block-banner-row-item")
        newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_12_3}`;
        newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
        document.getElementById("listConstructorBlock").appendChild(newElement);

        let newElementBlock = document.createElement("div");
        newElementBlock.classList.add("swiper-slide")
        newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_3}`;
        newElementBlock.innerHTML = `
        <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_3}">
            <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_12_3}" onclick="CloseElementBlockConstructor()">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="const-content__swipers-list-block">
                <div class="const-content__swipers-list-text">Лилия белая</div>
                <div class="const-content__swipers-list-count">
                    <div class="const-content__swipers-list-count-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="const-content__swipers-list-count-sum">1</div>
                    <div class="const-content__swipers-list-count-plus">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="const-content__swipers-list-price">2990₽</div>
            </div>
        </div>
        `
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    }
    checkCountElementObjConstructor()
})


$('.const-media-content__block-slider-12-back').on('click', function() {
    $('.const-media-content__block-slider-12').addClass('display-n');
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('#constListItem-12').removeClass('const-content__block-list-item-active')
    $('.const-content').css('padding', '100px 0 0 0')
})



// // //! Кнопка цветов 1.2

// let countConstructorBtnItem_1_2 = 0
// $('#constructorBtnItem-1-2').on('click', function() {
//     let id = 2
//     countConstructorBtnItem_1_2++
//     let constBannerRow_Item_1 = $(this).val()
//     console.log(constBannerRow_Item_1)
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_1_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_1_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_1_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_2}" value="constBannerItem_${id}_${countConstructorBtnItem_1_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_1_2 = 0
// $('#constructorMediaBtnItem-1-2').on('click', function() {
//     let id = 2
//     countConstructorMediaBtnItem_1_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_1_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_1_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_1_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------

// //! Кнопка цветов 1.3

// let countConstructorBtnItem_1_3 = 0
// $('#constructorBtnItem-1-3').on('click', function() {
//     let id = 3
//     countConstructorBtnItem_1_3++
//     let constBannerRow_Item_1 = $(this).val()
//     console.log(constBannerRow_Item_1)
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_1_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_1_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_1_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_3}" value="constBannerItem_${id}_${countConstructorBtnItem_1_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_1_3 = 0
// $('#constructorMediaBtnItem-1-3').on('click', function() {
//     let id = 3
//     countConstructorMediaBtnItem_1_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_1_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_1_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_1_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_1_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 2.1

// let countConstructorBtnItem_2_1 = 0
// $('#constructorBtnItem-2-1').on('click', function() {
//     let id = 4
//     countConstructorBtnItem_2_1++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_2_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_2_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_2_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_1}" value="constBannerItem_${id}_${countConstructorBtnItem_2_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_2_1 = 0
// $('#constructorMediaBtnItem-2-1').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-2').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-2').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_2_1++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_2_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_2_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_2_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// $('.const-media-content__block-slider-2-back').on('click', function() {
//     $('.const-media-content__block-slider-2').addClass('display-n');
//     $('.const-content__block-back').removeClass('display-n')
//     $('.const-content__block-title').removeClass('display-n')
//     $('.const-content__block-text').removeClass('display-n')
//     $('.const-content__block-banner').removeClass('display-n')
//     $('.const-content__block-list').removeClass('display-n')
//     $('#constListItem-2').removeClass('const-content__block-list-item-active')
//     $('.const-content').css('padding', '100px 0 0 0')
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 2.2

// let countConstructorBtnItem_2_2 = 0
// $('#constructorBtnItem-2-2').on('click', function() {
//     let id = 5
//     countConstructorBtnItem_2_2++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_2_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_2_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_2_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_2}" value="constBannerItem_${id}_${countConstructorBtnItem_2_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_2_2 = 0
// $('#constructorMediaBtnItem-2-2').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-2').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-2').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_2_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_2_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_2_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_2_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 2.3

// let countConstructorBtnItem_2_3 = 0
// $('#constructorBtnItem-2-3').on('click', function() {
//     let id = 6
//     countConstructorBtnItem_2_3++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_2_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_2_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_2_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_3}" value="constBannerItem_${id}_${countConstructorBtnItem_2_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_2_3 = 0
// $('#constructorMediaBtnItem-2-3').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-2').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-2').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_2_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_2_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_2_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_2_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_2_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 3.1

// let countConstructorBtnItem_3_1 = 0
// $('#constructorBtnItem-3-1').on('click', function() {
//     let id = 7
//     countConstructorBtnItem_3_1++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_3_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_3_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_3_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_1}" value="constBannerItem_${id}_${countConstructorBtnItem_3_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_3_1 = 0
// $('#constructorMediaBtnItem-3-1').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-3').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-3').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_3_1++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_3_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_3_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_3_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// $('.const-media-content__block-slider-3-back').on('click', function() {
//     $('.const-media-content__block-slider-3').addClass('display-n');
//     $('.const-content__block-back').removeClass('display-n')
//     $('.const-content__block-title').removeClass('display-n')
//     $('.const-content__block-text').removeClass('display-n')
//     $('.const-content__block-banner').removeClass('display-n')
//     $('.const-content__block-list').removeClass('display-n')
//     $('#constListItem-3').removeClass('const-content__block-list-item-active')
//     $('.const-content').css('padding', '100px 0 0 0')
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 3.2

// let countConstructorBtnItem_3_2 = 0
// $('#constructorBtnItem-3-2').on('click', function() {
//     let id = 8
//     countConstructorBtnItem_3_2++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_3_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_3_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_3_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_2}" value="constBannerItem_${id}_${countConstructorBtnItem_3_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_3_2 = 0
// $('#constructorMediaBtnItem-3-2').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-3').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-3').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_3_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_3_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_3_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_3_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 3.3

// let countConstructorBtnItem_3_3 = 0
// $('#constructorBtnItem-3-3').on('click', function() {
//     let id = 9
//     countConstructorBtnItem_3_3++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_3_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_3_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_3_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_3}" value="constBannerItem_${id}_${countConstructorBtnItem_3_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_3_3 = 0
// $('#constructorMediaBtnItem-3-3').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-3').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-3').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_3_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_3_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_3_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_3_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_3_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 4.1

// let countConstructorBtnItem_4_1 = 0
// $('#constructorBtnItem-4-1').on('click', function() {
//     let id = 10
//     countConstructorBtnItem_4_1++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_4_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_4_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_4_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_1}" value="constBannerItem_${id}_${countConstructorBtnItem_4_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_4_1 = 0
// $('#constructorMediaBtnItem-4-1').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-4').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-4').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_4_1++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_4_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_4_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_4_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// $('.const-media-content__block-slider-4-back').on('click', function() {
//     $('.const-media-content__block-slider-4').addClass('display-n');
//     $('.const-content__block-back').removeClass('display-n')
//     $('.const-content__block-title').removeClass('display-n')
//     $('.const-content__block-text').removeClass('display-n')
//     $('.const-content__block-banner').removeClass('display-n')
//     $('.const-content__block-list').removeClass('display-n')
//     $('#constListItem-4').removeClass('const-content__block-list-item-active')
//     $('.const-content').css('padding', '100px 0 0 0')
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 4.2

// let countConstructorBtnItem_4_2 = 0
// $('#constructorBtnItem-4-2').on('click', function() {
//     let id = 11
//     countConstructorBtnItem_4_2++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_4_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_4_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_4_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_2}" value="constBannerItem_${id}_${countConstructorBtnItem_4_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_4_2 = 0
// $('#constructorMediaBtnItem-4-2').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-4').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-4').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_4_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_4_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_4_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_4_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 4.3

// let countConstructorBtnItem_4_3 = 0
// $('#constructorBtnItem-4-3').on('click', function() {
//     let id = 12
//     countConstructorBtnItem_4_3++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_4_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_4_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_4_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_3}" value="constBannerItem_${id}_${countConstructorBtnItem_4_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_4_3 = 0
// $('#constructorMediaBtnItem-4-3').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-4').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-4').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_4_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_4_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_4_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_4_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_4_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 5.1

// let countConstructorBtnItem_5_1 = 0
// $('#constructorBtnItem-5-1').on('click', function() {
//     let id = 13
//     countConstructorBtnItem_5_1++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_5_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_5_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_5_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_1}" value="constBannerItem_${id}_${countConstructorBtnItem_5_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_5_1 = 0
// $('#constructorMediaBtnItem-5-1').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-5').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-5').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_5_1++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_5_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_5_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_5_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// $('.const-media-content__block-slider-5-back').on('click', function() {
//     $('.const-media-content__block-slider-5').addClass('display-n');
//     $('.const-content__block-back').removeClass('display-n')
//     $('.const-content__block-title').removeClass('display-n')
//     $('.const-content__block-text').removeClass('display-n')
//     $('.const-content__block-banner').removeClass('display-n')
//     $('.const-content__block-list').removeClass('display-n')
//     $('#constListItem-5').removeClass('const-content__block-list-item-active')
//     $('.const-content').css('padding', '100px 0 0 0')
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 5.2

// let countConstructorBtnItem_5_2 = 0
// $('#constructorBtnItem-5-2').on('click', function() {
//     let id = 14
//     countConstructorBtnItem_5_2++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_5_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_5_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_5_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_2}" value="constBannerItem_${id}_${countConstructorBtnItem_5_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_5_2 = 0
// $('#constructorMediaBtnItem-5-2').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-5').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-5').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_5_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_5_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_5_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_5_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 5.3

// let countConstructorBtnItem_5_3 = 0
// $('#constructorBtnItem-5-3').on('click', function() {
//     let id = 15
//     countConstructorBtnItem_5_3++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_5_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_5_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_5_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_3}" value="constBannerItem_${id}_${countConstructorBtnItem_5_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_5_3 = 0
// $('#constructorMediaBtnItem-5-3').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-5').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-5').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_5_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_5_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_5_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_5_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_5_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------



// //! Кнопка цветов 6.1

// let countConstructorBtnItem_6_1 = 0
// $('#constructorBtnItem-6-1').on('click', function() {
//     let id = 16
//     countConstructorBtnItem_6_1++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_6_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_6_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_6_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_1}" value="constBannerItem_${id}_${countConstructorBtnItem_6_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// let countConstructorMediaBtnItem_6_1 = 0
// $('#constructorMediaBtnItem-6-1').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-6').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-6').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_6_1++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_6_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_6_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_6_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// $('.const-media-content__block-slider-6-back').on('click', function() {
//     $('.const-media-content__block-slider-6').addClass('display-n');
//     $('.const-content__block-back').removeClass('display-n')
//     $('.const-content__block-title').removeClass('display-n')
//     $('.const-content__block-text').removeClass('display-n')
//     $('.const-content__block-banner').removeClass('display-n')
//     $('.const-content__block-list').removeClass('display-n')
//     $('#constListItem-6').removeClass('const-content__block-list-item-active')
//     $('.const-content').css('padding', '100px 0 0 0')
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 6.2

// let countConstructorBtnItem_6_2 = 0
// $('#constructorBtnItem-6-2').on('click', function() {
//     let id = 17
//     countConstructorBtnItem_6_2++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_6_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_6_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_6_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_2}" value="constBannerItem_${id}_${countConstructorBtnItem_6_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// let countConstructorMediaBtnItem_6_2 = 0
// $('#constructorMediaBtnItem-6-2').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-6').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-6').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_6_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_6_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_6_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_6_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 6.3

// let countConstructorBtnItem_6_3 = 0
// $('#constructorBtnItem-6-3').on('click', function() {
//     let id = 18
//     countConstructorBtnItem_6_3++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_6_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_6_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_6_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_3}" value="constBannerItem_${id}_${countConstructorBtnItem_6_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_6_3 = 0
// $('#constructorMediaBtnItem-6-3').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-6').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-6').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_6_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_6_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_6_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_6_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_6_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 7.1

// let countConstructorBtnItem_7_1 = 0
// $('#constructorBtnItem-7-1').on('click', function() {
//     let id = 19
//     countConstructorBtnItem_7_1++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_7_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_7_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_7_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_1}" value="constBannerItem_${id}_${countConstructorBtnItem_7_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_7_1 = 0
// $('#constructorMediaBtnItem-7-1').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-7').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-7').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_7_1++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_7_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_7_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_7_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// $('.const-media-content__block-slider-7-back').on('click', function() {
//     $('.const-media-content__block-slider-7').addClass('display-n');
//     $('.const-content__block-back').removeClass('display-n')
//     $('.const-content__block-title').removeClass('display-n')
//     $('.const-content__block-text').removeClass('display-n')
//     $('.const-content__block-banner').removeClass('display-n')
//     $('.const-content__block-list').removeClass('display-n')
//     $('#constListItem-7').removeClass('const-content__block-list-item-active')
//     $('.const-content').css('padding', '100px 0 0 0')
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 7.2

// let countConstructorBtnItem_7_2 = 0
// $('#constructorBtnItem-7-2').on('click', function() {
//     let id = 20
//     countConstructorBtnItem_7_2++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_7_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_7_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_7_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_2}" value="constBannerItem_${id}_${countConstructorBtnItem_7_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// let countConstructorMediaBtnItem_7_2 = 0
// $('#constructorMediaBtnItem-7-2').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-7').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-7').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_7_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_7_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_7_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_7_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 7.3

// let countConstructorBtnItem_7_3 = 0
// $('#constructorBtnItem-7-3').on('click', function() {
//     let id = 21
//     countConstructorBtnItem_7_3++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_7_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_7_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_7_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_3}" value="constBannerItem_${id}_${countConstructorBtnItem_7_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// let countConstructorMediaBtnItem_7_3 = 0
// $('#constructorMediaBtnItem-7-3').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-7').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-7').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_7_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_7_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_7_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_7_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_7_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 8.1

// let countConstructorBtnItem_8_1 = 0
// $('#constructorBtnItem-8-1').on('click', function() {
//     let id = 22
//     countConstructorBtnItem_8_1++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_8_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_8_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_8_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_1}" value="constBannerItem_${id}_${countConstructorBtnItem_8_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// let countConstructorMediaBtnItem_8_1 = 0
// $('#constructorMediaBtnItem-8-1').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-8').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-8').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_8_1++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_8_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_8_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_8_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// $('.const-media-content__block-slider-8-back').on('click', function() {
//     $('.const-media-content__block-slider-8').addClass('display-n');
//     $('.const-content__block-back').removeClass('display-n')
//     $('.const-content__block-title').removeClass('display-n')
//     $('.const-content__block-text').removeClass('display-n')
//     $('.const-content__block-banner').removeClass('display-n')
//     $('.const-content__block-list').removeClass('display-n')
//     $('#constListItem-8').removeClass('const-content__block-list-item-active')
//     $('.const-content').css('padding', '100px 0 0 0')
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 8.2

// let countConstructorBtnItem_8_2 = 0
// $('#constructorBtnItem-8-2').on('click', function() {
//     let id = 23
//     countConstructorBtnItem_8_2++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_8_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_8_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_8_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_2}" value="constBannerItem_${id}_${countConstructorBtnItem_8_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_8_2 = 0
// $('#constructorMediaBtnItem-8-2').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-8').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-8').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_8_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_8_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_8_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_8_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 8.3

// let countConstructorBtnItem_8_3 = 0
// $('#constructorBtnItem-8-3').on('click', function() {
//     let id = 24
//     countConstructorBtnItem_8_3++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_8_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_8_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_8_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_3}" value="constBannerItem_${id}_${countConstructorBtnItem_8_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_8_3 = 0
// $('#constructorMediaBtnItem-8-3').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-8').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-8').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_8_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_8_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_8_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_8_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_8_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 9.1

// let countConstructorBtnItem_9_1 = 0
// $('#constructorBtnItem-9-1').on('click', function() {
//     let id = 25
//     countConstructorBtnItem_9_1++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_9_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_9_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_9_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_1}" value="constBannerItem_${id}_${countConstructorBtnItem_9_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// let countConstructorMediaBtnItem_9_1 = 0
// $('#constructorMediaBtnItem-9-1').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-9').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-9').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_9_1++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_9_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_9_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_9_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// $('.const-media-content__block-slider-9-back').on('click', function() {
//     $('.const-media-content__block-slider-9').addClass('display-n');
//     $('.const-content__block-back').removeClass('display-n')
//     $('.const-content__block-title').removeClass('display-n')
//     $('.const-content__block-text').removeClass('display-n')
//     $('.const-content__block-banner').removeClass('display-n')
//     $('.const-content__block-list').removeClass('display-n')
//     $('#constListItem-9').removeClass('const-content__block-list-item-active')
//     $('.const-content').css('padding', '100px 0 0 0')
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 9.2

// let countConstructorBtnItem_9_2 = 0
// $('#constructorBtnItem-9-2').on('click', function() {
//     let id = 26
//     countConstructorBtnItem_9_2++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_9_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_9_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_9_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_2}" value="constBannerItem_${id}_${countConstructorBtnItem_9_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_9_2 = 0
// $('#constructorMediaBtnItem-9-2').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-9').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-9').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_9_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_9_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_9_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_9_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 9.3

// let countConstructorBtnItem_9_3 = 0
// $('#constructorBtnItem-9-3').on('click', function() {
//     let id = 27
//     countConstructorBtnItem_9_3++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_9_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_9_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_9_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_3}" value="constBannerItem_${id}_${countConstructorBtnItem_9_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// let countConstructorMediaBtnItem_9_3 = 0
// $('#constructorMediaBtnItem-9-3').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-9').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-9').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_9_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_9_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_9_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_9_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_9_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 10.1

// let countConstructorBtnItem_10_1 = 0
// $('#constructorBtnItem-10-1').on('click', function() {
//     let id = 28
//     countConstructorBtnItem_10_1++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_10_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_10_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_10_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_1}" value="constBannerItem_${id}_${countConstructorBtnItem_10_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_10_1 = 0
// $('#constructorMediaBtnItem-10-1').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-10').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-10').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_10_1++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_10_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_10_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_10_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// $('.const-media-content__block-slider-10-back').on('click', function() {
//     $('.const-media-content__block-slider-10').addClass('display-n');
//     $('.const-content__block-back').removeClass('display-n')
//     $('.const-content__block-title').removeClass('display-n')
//     $('.const-content__block-text').removeClass('display-n')
//     $('.const-content__block-banner').removeClass('display-n')
//     $('.const-content__block-list').removeClass('display-n')
//     $('#constListItem-10').removeClass('const-content__block-list-item-active')
//     $('.const-content').css('padding', '100px 0 0 0')
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 10.2

// let countConstructorBtnItem_10_2 = 0
// $('#constructorBtnItem-10-2').on('click', function() {
//     let id = 29
//     countConstructorBtnItem_10_2++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_10_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_10_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_10_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_2}" value="constBannerItem_${id}_${countConstructorBtnItem_10_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_10_2 = 0
// $('#constructorMediaBtnItem-10-2').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-10').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-10').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_10_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_10_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_10_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_10_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 10.3

// let countConstructorBtnItem_10_3 = 0
// $('#constructorBtnItem-10-3').on('click', function() {
//     let id = 30
//     countConstructorBtnItem_10_3++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_10_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_10_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_10_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_3}" value="constBannerItem_${id}_${countConstructorBtnItem_10_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_10_3 = 0
// $('#constructorMediaBtnItem-10-3').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-10').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-10').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_10_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_10_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_10_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_10_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_10_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 11.1

// let countConstructorBtnItem_11_1 = 0
// $('#constructorBtnItem-11-1').on('click', function() {
//     let id = 31
//     countConstructorBtnItem_11_1++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_11_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_11_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_11_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_1}" value="constBannerItem_${id}_${countConstructorBtnItem_11_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_11_1 = 0
// $('#constructorMediaBtnItem-11-1').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-11').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-11').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_11_1++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_11_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_11_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_11_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// $('.const-media-content__block-slider-11-back').on('click', function() {
//     $('.const-media-content__block-slider-11').addClass('display-n');
//     $('.const-content__block-back').removeClass('display-n')
//     $('.const-content__block-title').removeClass('display-n')
//     $('.const-content__block-text').removeClass('display-n')
//     $('.const-content__block-banner').removeClass('display-n')
//     $('.const-content__block-list').removeClass('display-n')
//     $('#constListItem-11').removeClass('const-content__block-list-item-active')
//     $('.const-content').css('padding', '100px 0 0 0')
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 11.2

// let countConstructorBtnItem_11_2 = 0
// $('#constructorBtnItem-11-2').on('click', function() {
//     let id = 32
//     countConstructorBtnItem_11_2++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_11_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_11_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_11_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_2}" value="constBannerItem_${id}_${countConstructorBtnItem_11_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_11_2 = 0
// $('#constructorMediaBtnItem-11-2').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-11').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-11').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_11_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_11_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_11_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_11_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// //! ------------------------------------------------------------------------------------------------------------------



// //! Кнопка цветов 11.3

// let countConstructorBtnItem_11_3 = 0
// $('#constructorBtnItem-11-3').on('click', function() {
//     let id = 33
//     countConstructorBtnItem_11_3++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_11_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_11_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_11_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_3}" value="constBannerItem_${id}_${countConstructorBtnItem_11_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_11_3 = 0
// $('#constructorMediaBtnItem-11-3').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-11').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-11').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_11_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_11_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_11_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_11_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_11_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 12.1

// let countConstructorBtnItem_12_1 = 0
// $('#constructorBtnItem-12-1').on('click', function() {
//     let id = 34
//     countConstructorBtnItem_12_1++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_12_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_12_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_12_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_1}" value="constBannerItem_${id}_${countConstructorBtnItem_12_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_12_1 = 0
// $('#constructorMediaBtnItem-12-1').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-12').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-12').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_12_1++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_12_1
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_12_1}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_1}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_1}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_1}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_12_1}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// $('.const-media-content__block-slider-12-back').on('click', function() {
//     $('.const-media-content__block-slider-12').addClass('display-n');
//     $('.const-content__block-back').removeClass('display-n')
//     $('.const-content__block-title').removeClass('display-n')
//     $('.const-content__block-text').removeClass('display-n')
//     $('.const-content__block-banner').removeClass('display-n')
//     $('.const-content__block-list').removeClass('display-n')
//     $('#constListItem-12').removeClass('const-content__block-list-item-active')
//     $('.const-content').css('padding', '100px 0 0 0')
// })

// //! ------------------------------------------------------------------------------------------------------------------


// //! Кнопка цветов 12.2

// let countConstructorBtnItem_12_2 = 0
// $('#constructorBtnItem-12-2').on('click', function() {
//     let id = 35
//     countConstructorBtnItem_12_2++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_12_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_12_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_12_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_2}" value="constBannerItem_${id}_${countConstructorBtnItem_12_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_12_2 = 0
// $('#constructorMediaBtnItem-12-2').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-12').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-12').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_12_2++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_12_2
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_12_2}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_2}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_2}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_2}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_12_2}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })


// //! ------------------------------------------------------------------------------------------------------------------



// //! Кнопка цветов 12.3

// let countConstructorBtnItem_12_3 = 0
// $('#constructorBtnItem-12-3').on('click', function() {
//     let id = 36
//     countConstructorBtnItem_12_3++
//     let constBannerRow_Item_1 = $(this).attr('value')
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorBtnItem_12_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_12_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_12_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_3}" value="constBannerItem_${id}_${countConstructorBtnItem_12_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// let countConstructorMediaBtnItem_12_3 = 0
// $('#constructorMediaBtnItem-12-3').on('click', function() {
//     if ( window.innerWidth <= 1110) {
//         $('.const-media-content__block-slider-12').addClass('display-n');
//         $('.const-content__block-back').removeClass('display-n')
//         $('.const-content__block-title').removeClass('display-n')
//         $('.const-content__block-text').removeClass('display-n')
//         $('.const-content__block-banner').removeClass('display-n')
//         $('.const-content__block-list').removeClass('display-n')
//         $('#constListItem-12').removeClass('const-content__block-list-item-active')
//         $('.const-content').css('padding', '100px 0 0 0')
//     }
//     let id = 1
//     countConstructorMediaBtnItem_12_3++
//     let constBannerRow_Item_1 = $(this).val()
//     let obj = {
//         name: `${constBannerRow_Item_1}`,
//         id: id,
//         count: countConstructorMediaBtnItem_12_3
//     }
//     elementObjConstructor.obj = obj
//     let newElement = document.createElement("li");
//     newElement.classList.add("const-content__block-banner-row-item")
//     newElement.id = `constBannerItem_${id}_${countConstructorMediaBtnItem_12_3}`;
//     newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
//     document.getElementById("listConstructorBlock").appendChild(newElement);


//     let newElementBlock = document.createElement("div");
//     newElementBlock.classList.add("swiper-slide")
//     newElementBlock.id = `constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_3}`;
//     newElementBlock.innerHTML = `
//     <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_3}">
//         <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorMediaBtnItem_12_3}" value="constBannerItem_${id}_${countConstructorMediaBtnItem_12_3}" onclick="CloseElementBlockConstructor()">
//             <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//         </button>
//         <div class="const-content__swipers-list-block">
//             <div class="const-content__swipers-list-text">Лилия белая</div>
//             <div class="const-content__swipers-list-count">
//                 <div class="const-content__swipers-list-count-minus">
//                     <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//                 <div class="const-content__swipers-list-count-sum">1</div>
//                 <div class="const-content__swipers-list-count-plus">
//                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </div>
//             </div>
//             <div class="const-content__swipers-list-price">2990₽</div>
//         </div>
//     </div>
//     `
//     document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
//     $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
//     checkCountElementObjConstructor()
// })

// // //! ------------------------------------------------------------------------------------------------------------------




//! Кнопка товара 1.1

let countConstructorBtnObject_1_1 = 0
$('#constructorBtnObject-1-1').on('click', function() {
    let id = 1
    countConstructorBtnObject_1_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_1_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_1_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_1_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_1_1}" value="constBannerObject_${id}_${countConstructorBtnObject_1_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_1_1 = 0
$('#constructorMediaBtnObject-1-1').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-1').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 1
    countConstructorMediaBtnObject_1_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_1_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_1_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_1_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_1_1}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_1_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 1.2

let countConstructorBtnObject_1_2 = 0
$('#constructorBtnObject-1-2').on('click', function() {
    let id = 2
    countConstructorBtnObject_1_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_1_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_1_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_1_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_1_2}" value="constBannerObject_${id}_${countConstructorBtnObject_1_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_1_2 = 0
$('#constructorMediaBtnObject-1-2').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-1').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_1_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_1_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_1_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_1_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_1_2}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_1_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 1.3

let countConstructorBtnObject_1_3 = 0
$('#constructorBtnObject-1-3').on('click', function() {
    let id = 3
    countConstructorBtnObject_1_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_1_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_1_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_1_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_1_3}" value="constBannerObject_${id}_${countConstructorBtnObject_1_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})


let countConstructorMediaBtnObject_1_3 = 0
$('#constructorMediaBtnObject-1-3').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-1').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_1_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_1_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_1_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_1_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_1_3}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_1_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 1.4

let countConstructorBtnObject_1_4 = 0
$('#constructorBtnObject-1-4').on('click', function() {
    let id = 4
    countConstructorBtnObject_1_4++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_1_4
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_1_4}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_1_4}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_1_4}" value="constBannerObject_${id}_${countConstructorBtnObject_1_4}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_1_4 = 0
$('#constructorMediaBtnObject-1-4').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-1').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_1_4++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_1_4
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_1_4}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_1_4}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_1_4}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_1_4}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 1.5

let countConstructorBtnObject_1_5 = 0
$('#constructorBtnObject-1-5').on('click', function() {
    let id = 5
    countConstructorBtnObject_1_5++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_1_5
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_1_5}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_1_5}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_1_5}" value="constBannerObject_${id}_${countConstructorBtnObject_1_5}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_1_5 = 0
$('#constructorMediaBtnObject-1-5').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-1').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_1_5++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_1_5
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_1_5}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_1_5}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_1_5}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_1_5}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 2.1

let countConstructorBtnObject_2_1 = 0
$('#constructorBtnObject-2-1').on('click', function() {
    let id = 6
    countConstructorBtnObject_2_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_2_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_2_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_2_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_2_1}" value="constBannerObject_${id}_${countConstructorBtnObject_2_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_2_1 = 0
$('#constructorMediaBtnObject-2-1').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-2').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_2_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_2_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_2_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_2_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_2_1}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_2_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 2.2

let countConstructorBtnObject_2_2 = 0
$('#constructorBtnObject-2-2').on('click', function() {
    let id = 7
    countConstructorBtnObject_2_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_2_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_2_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_2_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_2_2}" value="constBannerObject_${id}_${countConstructorBtnObject_2_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_2_2 = 0
$('#constructorMediaBtnObject-2-2').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-2').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_2_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_2_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_2_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_2_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_2_2}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_2_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 2.3

let countConstructorBtnObject_2_3 = 0
$('#constructorBtnObject-2-3').on('click', function() {
    let id = 8
    countConstructorBtnObject_2_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_2_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_2_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_2_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_2_3}" value="constBannerObject_${id}_${countConstructorBtnObject_2_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_2_3 = 0
$('#constructorMediaBtnObject-2-3').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-2').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_2_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_2_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_2_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_2_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_2_3}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_2_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------



//! Кнопка товара 2.4

let countConstructorBtnObject_2_4 = 0
$('#constructorBtnObject-2-4').on('click', function() {
    let id = 9
    countConstructorBtnObject_2_4++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_2_4
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_2_4}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_2_4}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_2_4}" value="constBannerObject_${id}_${countConstructorBtnObject_2_4}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 2.5

let countConstructorBtnObject_2_5 = 0
$('#constructorBtnObject-2-5').on('click', function() {
    let id = 10
    countConstructorBtnObject_2_5++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_2_5
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_2_5}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_2_5}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_2_5}" value="constBannerObject_${id}_${countConstructorBtnObject_2_5}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------




//! Кнопка товара 3.1

let countConstructorBtnObject_3_1 = 0
$('#constructorBtnObject-3-1').on('click', function() {
    let id = 11
    countConstructorBtnObject_3_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_3_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_3_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_3_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_3_1}" value="constBannerObject_${id}_${countConstructorBtnObject_3_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_3_1 = 0
$('#constructorMediaBtnObject-3-1').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-3').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_3_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_3_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_3_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_3_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_3_1}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_3_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})


//! ------------------------------------------------------------------------------------------------------------------



//! Кнопка товара 3.2

let countConstructorBtnObject_3_2 = 0
$('#constructorBtnObject-3-2').on('click', function() {
    let id = 12
    countConstructorBtnObject_3_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_3_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_3_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_3_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_3_2}" value="constBannerObject_${id}_${countConstructorBtnObject_3_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_3_2 = 0
$('#constructorMediaBtnObject-3-2').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-3').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_3_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_3_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_3_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_3_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_3_2}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_3_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 3.3

let countConstructorBtnObject_3_3 = 0
$('#constructorBtnObject-3-3').on('click', function() {
    let id = 13
    countConstructorBtnObject_3_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_3_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_3_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_3_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_3_3}" value="constBannerObject_${id}_${countConstructorBtnObject_3_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})


let countConstructorMediaBtnObject_3_3 = 0
$('#constructorMediaBtnObject-3-3').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-3').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_3_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_3_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_3_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_3_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_3_3}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_3_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 4.1

let countConstructorBtnObject_4_1 = 0
$('#constructorBtnObject-4-1').on('click', function() {
    let id = 14
    countConstructorBtnObject_4_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_4_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_4_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_4_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_4_1}" value="constBannerObject_${id}_${countConstructorBtnObject_4_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_4_1 = 0
$('#constructorMediaBtnObject-4-1').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-4').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_4_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_4_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_4_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_4_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_4_1}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_4_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})


//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 4.2

let countConstructorBtnObject_4_2 = 0
$('#constructorBtnObject-4-2').on('click', function() {
    let id = 15
    countConstructorBtnObject_4_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_4_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_4_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_4_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_4_2}" value="constBannerObject_${id}_${countConstructorBtnObject_4_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_4_2 = 0
$('#constructorMediaBtnObject-4-2').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-4').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_4_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_4_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_4_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_4_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_4_2}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_4_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})


//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 4.3

let countConstructorBtnObject_4_3 = 0
$('#constructorBtnObject-4-3').on('click', function() {
    let id = 16
    countConstructorBtnObject_4_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_4_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_4_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_4_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_4_3}" value="constBannerObject_${id}_${countConstructorBtnObject_4_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

let countConstructorMediaBtnObject_4_3 = 0
$('#constructorMediaBtnObject-4-3').on('click', function() {
    if (window.innerWidth <= 1100) {
        $('.const-content__swipers').removeClass('display-n')
        $('.const-content__swiper').removeClass('display-n')
        $('.const-content__block-list').removeClass('display-n')
        $('.const-content__block-banner').removeClass('display-n')
        $('.const-content__block-title').removeClass('display-n')
        $('.const-content__block-back').removeClass('display-n')
        $('.const-content__block-text').removeClass('display-n')

        $('.const-media-content__block-sliders-4').addClass('display-n')
        $('.const-content').css('padding', '100px 0 0 0')
    }
    let id = 2
    countConstructorMediaBtnObject_4_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorMediaBtnObject_4_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorMediaBtnObject_4_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorMediaBtnObject_4_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorMediaBtnObject_4_3}" value="constBannerObject_${id}_${countConstructorMediaBtnObject_4_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------



//! Кнопка товара 5.1

let countConstructorBtnObject_5_1 = 0
$('#constructorBtnObject-5-1').on('click', function() {
    let id = 17
    countConstructorBtnObject_5_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_5_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_5_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_5_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_5_1}" value="constBannerObject_${id}_${countConstructorBtnObject_5_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 5.2

let countConstructorBtnObject_5_2 = 0
$('#constructorBtnObject-5-2').on('click', function() {
    let id = 18
    countConstructorBtnObject_5_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_5_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_5_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_5_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_5_2}" value="constBannerObject_${id}_${countConstructorBtnObject_5_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 5.3

let countConstructorBtnObject_5_3 = 0
$('#constructorBtnObject-5-3').on('click', function() {
    let id = 19
    countConstructorBtnObject_5_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_5_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_5_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_5_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_5_3}" value="constBannerObject_${id}_${countConstructorBtnObject_5_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------








function checkCountElementObjConstructor() {
    
    let countElementObjConstructor = document.getElementById('listConstructorBlock').getElementsByClassName('const-content__block-banner-row-item').length
    // console.log(countElementObjConstructor)
    
    let countElementObjConstructorIllustrations = document.getElementById('listConstructorElementPay').getElementsByClassName('swiper-slide').length
    // console.log(countElementObjConstructorIllustrations)

    if(countElementObjConstructor != 0 || countElementObjConstructorIllustrations != 0) {
        $('.const-content__swipe').removeAttr('disabled')
    } else {
        $('.const-content__swipe').attr('disabled', 'disabled')
        $('.const-content__swipers').addClass('display-n')
        $('.const-content__swipe').removeClass('display-n')
    }
    if (countElementObjConstructorIllustrations == 1) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 2) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 3) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 4) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 5) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 6) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 7) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 8) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 9) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 10) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 11) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 12) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 13) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 14) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 15) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 16) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 17) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 18) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 19) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 20) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 21) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 22) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 23) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 24) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 25) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 26) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 27) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 28) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 29) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 30) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 31) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 32) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 33) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 34) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 35) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 36) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 37) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 38) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 39) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 40) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 41) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 42) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 43) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 44) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 45) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 46) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 47) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 48) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 49) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 50) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 51) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 52) {
        $('.const-content__block-banner-row-item img').css('width', '48px')
    }

    if (countElementObjConstructorIllustrations == 51) {
        $('.const-content__block-banner-row-item img').css('width', '48px')
        $('.const-content__block-banner-row').css("grid-template-rows", "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr")
        $('.const-content__block-banner-row').css("grid-template-columns", "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr")
        $('.const-content__block-banner-row').css("grid-template-areas",`
            ". . . . . . . item-163 item-164 item-165 item-166 item-167 item-168 item-169 item-170 item-171 item-172 item-173 item-174 item-175 . ."
            ". . . . . . item-149 item-150 item-151 item-152 item-153 item-154 item-155 item-156 item-157 item-158 item-159 item-160 item-161 item-162 . ."
            ". . . . . item-134 item-135 item-136 item-137 item-138 item-139 item-140 item-141 item-142 item-143 item-144 item-145 item-146 item-147 item-148 . ."
            ". . . . item-118 item-119 item-120 item-121 item-122 item-123 item-124 item-125 item-126 item-127 item-128 item-129 item-130 item-131 item-132 item-133 . ."
            ". . . item-101 item-102 item-103 item-104 item-105 item-106 item-107 item-108 item-109 item-110 item-111 item-112 item-113 item-114 item-115 item-116 item-117 . ."
            ". . item-83 item-84 item-85 item-86 item-87 item-88 item-89 item-90 item-91 item-92 item-93 item-94 item-95 item-96 item-97 item-98 item-99 item-100 . ."
            ". item-64 item-65 item-66 item-67 item-68 item-69 item-70 item-71 item-72 item-73 item-74 item-75 item-76 item-77 item-78 item-79 item-80 item-81 item-82 . ."
            "item-44 item-45 item-46 item-47 item-48 item-49 item-50 item-51 item-52 item-53 item-54 item-55 item-56 item-57 item-58 item-59 item-60 item-61 item-62 item-63 . ."
            "item-23 item-24 item-25 item-26 item-27 item-28 item-29 item-30 item-31 item-32 item-33 item-34 item-35 item-36 item-37 item-38 item-39 item-40 item-41 item-42 item-43 ."
            "item-1 item-2 item-3 item-4 item-5 item-6 item-7 item-8 item-9 item-10 item-11 item-12 item-13 item-14 item-15 item-16 item-17 item-18 item-19 item-20 item-21 item-22"
        `)

        $(".const-content__block-banner-row-item img")[0].style.position = 'static'
        $(".const-content__block-banner-row-item img")[1].style.position = 'static'
        $(".const-content__block-banner-row-item img")[2].style.position = 'static'
        $(".const-content__block-banner-row-item img")[3].style.position = 'static'
        $(".const-content__block-banner-row-item img")[4].style.position = 'static'
        $(".const-content__block-banner-row-item img")[5].style.position = 'static'
        $(".const-content__block-banner-row-item img")[6].style.position = 'static'
        $(".const-content__block-banner-row-item img")[7].style.position = 'static'
        $(".const-content__block-banner-row-item img")[8].style.position = 'static'
        $(".const-content__block-banner-row-item img")[9].style.position = 'static'
        $(".const-content__block-banner-row-item img")[10].style.position = 'static'
        $(".const-content__block-banner-row-item img")[11].style.position = 'static'
        $(".const-content__block-banner-row-item img")[12].style.position = 'static'
        $(".const-content__block-banner-row-item img")[13].style.position = 'static'
        $(".const-content__block-banner-row-item img")[14].style.position = 'static'
        $(".const-content__block-banner-row-item img")[15].style.position = 'static'
        $(".const-content__block-banner-row-item img")[16].style.position = 'static'
        $(".const-content__block-banner-row-item img")[17].style.position = 'static'
        $(".const-content__block-banner-row-item img")[18].style.position = 'static'
        $(".const-content__block-banner-row-item img")[19].style.position = 'static'
        $(".const-content__block-banner-row-item img")[20].style.position = 'static'
        $(".const-content__block-banner-row-item img")[21].style.position = 'static'
        $(".const-content__block-banner-row-item img")[22].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[22].style.right = '-25px'
        
        $(".const-content__block-banner-row-item img")[23].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[23].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[24].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[24].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[25].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[25].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[26].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[26].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[27].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[27].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[28].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[28].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[29].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[29].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[30].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[30].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[31].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[31].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[32].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[32].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[33].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[33].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[34].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[34].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[35].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[35].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[36].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[36].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[37].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[37].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[38].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[38].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[39].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[39].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[40].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[40].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[41].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[41].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[42].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[42].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[42].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[42].style.right = '-30px'
        // bottom: -10px;
        // right: -30px;

        $(".const-content__block-banner-row-item img")[43].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[43].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[44].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[44].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[45].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[45].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[46].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[46].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[47].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[47].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[48].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[48].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[49].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[49].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[50].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[50].style.right = '-50px'

        // $(".const-content__block-banner-row-item img")[51].style.bottom = '-20px'
        // $(".const-content__block-banner-row-item img")[51].style.right = '-50px'
    }
    if (countElementObjConstructorIllustrations == 50) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
        $('.const-content__block-banner-row').css('grid-template-rows', '')
        $('.const-content__block-banner-row').css('grid-template-columns', '')
        $('.const-content__block-banner-row').css('grid-template-areas', ``)

        $(".const-content__block-banner-row-item img")[0].style.position = ''
        $(".const-content__block-banner-row-item img")[1].style.position = ''
        $(".const-content__block-banner-row-item img")[2].style.position = ''
        $(".const-content__block-banner-row-item img")[3].style.position = ''
        $(".const-content__block-banner-row-item img")[4].style.position = ''
        $(".const-content__block-banner-row-item img")[5].style.position = ''
        $(".const-content__block-banner-row-item img")[6].style.position = ''
        $(".const-content__block-banner-row-item img")[7].style.position = ''
        $(".const-content__block-banner-row-item img")[8].style.position = ''
        $(".const-content__block-banner-row-item img")[9].style.position = ''
        $(".const-content__block-banner-row-item img")[10].style.position = ''
        $(".const-content__block-banner-row-item img")[11].style.position = ''
        $(".const-content__block-banner-row-item img")[12].style.position = ''
        $(".const-content__block-banner-row-item img")[13].style.position = ''
        $(".const-content__block-banner-row-item img")[14].style.position = ''
        $(".const-content__block-banner-row-item img")[15].style.position = ''
        $(".const-content__block-banner-row-item img")[16].style.position = ''
        $(".const-content__block-banner-row-item img")[17].style.position = ''
        $(".const-content__block-banner-row-item img")[18].style.position = ''
        $(".const-content__block-banner-row-item img")[19].style.position = ''
        $(".const-content__block-banner-row-item img")[20].style.position = ''
        $(".const-content__block-banner-row-item img")[21].style.position = ''
        $(".const-content__block-banner-row-item img")[22].style.bottom = ''
        $(".const-content__block-banner-row-item img")[22].style.right = ''
        $(".const-content__block-banner-row-item img")[23].style.bottom = ''
        $(".const-content__block-banner-row-item img")[23].style.right = ''

        $(".const-content__block-banner-row-item img")[24].style.bottom = ''
        $(".const-content__block-banner-row-item img")[24].style.right = ''

        $(".const-content__block-banner-row-item img")[25].style.bottom = ''
        $(".const-content__block-banner-row-item img")[25].style.right = ''

        $(".const-content__block-banner-row-item img")[26].style.bottom = ''
        $(".const-content__block-banner-row-item img")[26].style.right = ''

        $(".const-content__block-banner-row-item img")[27].style.bottom = ''
        $(".const-content__block-banner-row-item img")[27].style.right = ''

        $(".const-content__block-banner-row-item img")[28].style.bottom = ''
        $(".const-content__block-banner-row-item img")[28].style.right = ''

        $(".const-content__block-banner-row-item img")[29].style.bottom = ''
        $(".const-content__block-banner-row-item img")[29].style.right = ''

        $(".const-content__block-banner-row-item img")[30].style.bottom = ''
        $(".const-content__block-banner-row-item img")[30].style.right = ''

        $(".const-content__block-banner-row-item img")[31].style.bottom = ''
        $(".const-content__block-banner-row-item img")[31].style.right = ''

        $(".const-content__block-banner-row-item img")[32].style.bottom = ''
        $(".const-content__block-banner-row-item img")[32].style.right = ''

        $(".const-content__block-banner-row-item img")[33].style.bottom = ''
        $(".const-content__block-banner-row-item img")[33].style.right = ''

        $(".const-content__block-banner-row-item img")[34].style.bottom = ''
        $(".const-content__block-banner-row-item img")[34].style.right = ''

        $(".const-content__block-banner-row-item img")[35].style.bottom = ''
        $(".const-content__block-banner-row-item img")[35].style.right = ''

        $(".const-content__block-banner-row-item img")[36].style.bottom = ''
        $(".const-content__block-banner-row-item img")[36].style.right = ''

        $(".const-content__block-banner-row-item img")[37].style.bottom = ''
        $(".const-content__block-banner-row-item img")[37].style.right = ''

        $(".const-content__block-banner-row-item img")[38].style.bottom = ''
        $(".const-content__block-banner-row-item img")[38].style.right = ''

        $(".const-content__block-banner-row-item img")[39].style.bottom = ''
        $(".const-content__block-banner-row-item img")[39].style.right = ''

        $(".const-content__block-banner-row-item img")[40].style.bottom = ''
        $(".const-content__block-banner-row-item img")[40].style.right = ''

        $(".const-content__block-banner-row-item img")[41].style.bottom = ''
        $(".const-content__block-banner-row-item img")[41].style.right = ''

        $(".const-content__block-banner-row-item img")[42].style.bottom = ''
        $(".const-content__block-banner-row-item img")[42].style.right = ''

        $(".const-content__block-banner-row-item img")[42].style.bottom = ''
        $(".const-content__block-banner-row-item img")[42].style.right = ''

        $(".const-content__block-banner-row-item img")[43].style.bottom = ''
        $(".const-content__block-banner-row-item img")[43].style.right = ''

        $(".const-content__block-banner-row-item img")[44].style.bottom = ''
        $(".const-content__block-banner-row-item img")[44].style.right = ''

        $(".const-content__block-banner-row-item img")[45].style.bottom = ''
        $(".const-content__block-banner-row-item img")[45].style.right = ''

        $(".const-content__block-banner-row-item img")[46].style.bottom = ''
        $(".const-content__block-banner-row-item img")[46].style.right = ''

        $(".const-content__block-banner-row-item img")[47].style.bottom = ''
        $(".const-content__block-banner-row-item img")[47].style.right = ''

        $(".const-content__block-banner-row-item img")[48].style.bottom = ''
        $(".const-content__block-banner-row-item img")[48].style.right = ''

        $(".const-content__block-banner-row-item img")[49].style.bottom = ''
        $(".const-content__block-banner-row-item img")[49].style.right = ''

        // $(".const-content__block-banner-row-item img")[50].style.bottom = ''
        // $(".const-content__block-banner-row-item img")[50].style.right = ''
    }
    
    if (countElementObjConstructorIllustrations > 174) {
        $('.const-content__block button').attr('disabled', 'disabled')
        $('.const-content__block-sliders-1 button').removeAttr('disabled', 'disabled')
        $('.const-content__block-sliders-2 button').removeAttr('disabled', 'disabled')
        $('.const-content__block-sliders-3 button').removeAttr('disabled', 'disabled')
        $('.const-content__block-sliders-4 button').removeAttr('disabled', 'disabled')
    } else {
        $('.const-content__block button').removeAttr('disabled', 'disabled')
    }

    if (countElementObjConstructorIllustrations == 52 
        || countElementObjConstructorIllustrations == 53 
        || countElementObjConstructorIllustrations == 54 
        || countElementObjConstructorIllustrations == 55
        || countElementObjConstructorIllustrations == 56
        || countElementObjConstructorIllustrations == 57
        || countElementObjConstructorIllustrations == 58
        || countElementObjConstructorIllustrations == 59
        || countElementObjConstructorIllustrations == 60
        || countElementObjConstructorIllustrations == 61
        || countElementObjConstructorIllustrations == 62
        || countElementObjConstructorIllustrations == 63
        || countElementObjConstructorIllustrations == 64
        || countElementObjConstructorIllustrations == 65
        || countElementObjConstructorIllustrations == 66
        || countElementObjConstructorIllustrations == 67
        || countElementObjConstructorIllustrations == 68
        || countElementObjConstructorIllustrations == 69
        || countElementObjConstructorIllustrations == 70
        || countElementObjConstructorIllustrations == 71
        || countElementObjConstructorIllustrations == 72
        || countElementObjConstructorIllustrations == 73
        || countElementObjConstructorIllustrations == 74
        || countElementObjConstructorIllustrations == 75
        || countElementObjConstructorIllustrations == 76
        || countElementObjConstructorIllustrations == 77
        || countElementObjConstructorIllustrations == 78
        || countElementObjConstructorIllustrations == 79
        || countElementObjConstructorIllustrations == 80
        || countElementObjConstructorIllustrations == 81
        || countElementObjConstructorIllustrations == 82
        || countElementObjConstructorIllustrations == 83
        || countElementObjConstructorIllustrations == 84
        || countElementObjConstructorIllustrations == 85
        || countElementObjConstructorIllustrations == 86
        || countElementObjConstructorIllustrations == 87
        || countElementObjConstructorIllustrations == 88
        || countElementObjConstructorIllustrations == 89
        || countElementObjConstructorIllustrations == 90
        || countElementObjConstructorIllustrations == 91
        || countElementObjConstructorIllustrations == 92
        || countElementObjConstructorIllustrations == 93
        || countElementObjConstructorIllustrations == 94
        || countElementObjConstructorIllustrations == 95
        || countElementObjConstructorIllustrations == 96
        || countElementObjConstructorIllustrations == 97
        || countElementObjConstructorIllustrations == 98
        || countElementObjConstructorIllustrations == 99
        || countElementObjConstructorIllustrations == 100
        || countElementObjConstructorIllustrations == 101
        || countElementObjConstructorIllustrations == 102
        || countElementObjConstructorIllustrations == 103
        || countElementObjConstructorIllustrations == 104
        || countElementObjConstructorIllustrations == 105
        || countElementObjConstructorIllustrations == 106
        || countElementObjConstructorIllustrations == 107
        || countElementObjConstructorIllustrations == 108
        || countElementObjConstructorIllustrations == 109
        || countElementObjConstructorIllustrations == 110
        || countElementObjConstructorIllustrations == 111
        || countElementObjConstructorIllustrations == 112
        || countElementObjConstructorIllustrations == 113
        || countElementObjConstructorIllustrations == 114
        || countElementObjConstructorIllustrations == 115
        || countElementObjConstructorIllustrations == 116
        || countElementObjConstructorIllustrations == 117
        || countElementObjConstructorIllustrations == 118
        || countElementObjConstructorIllustrations == 119
        || countElementObjConstructorIllustrations == 120
        || countElementObjConstructorIllustrations == 121
        || countElementObjConstructorIllustrations == 122
        || countElementObjConstructorIllustrations == 123
        || countElementObjConstructorIllustrations == 124
        || countElementObjConstructorIllustrations == 125
        || countElementObjConstructorIllustrations == 126
        || countElementObjConstructorIllustrations == 127
        || countElementObjConstructorIllustrations == 128
        || countElementObjConstructorIllustrations == 129
        || countElementObjConstructorIllustrations == 130
        || countElementObjConstructorIllustrations == 131
        || countElementObjConstructorIllustrations == 132
        || countElementObjConstructorIllustrations == 133
        || countElementObjConstructorIllustrations == 134
        || countElementObjConstructorIllustrations == 135
        || countElementObjConstructorIllustrations == 136
        || countElementObjConstructorIllustrations == 137
        || countElementObjConstructorIllustrations == 138
        || countElementObjConstructorIllustrations == 139
        || countElementObjConstructorIllustrations == 140
        || countElementObjConstructorIllustrations == 141
        || countElementObjConstructorIllustrations == 142
        || countElementObjConstructorIllustrations == 143
        || countElementObjConstructorIllustrations == 144
        || countElementObjConstructorIllustrations == 145
        || countElementObjConstructorIllustrations == 146
        || countElementObjConstructorIllustrations == 147
        || countElementObjConstructorIllustrations == 148
        || countElementObjConstructorIllustrations == 149
        || countElementObjConstructorIllustrations == 150
        || countElementObjConstructorIllustrations == 151
        || countElementObjConstructorIllustrations == 152
        || countElementObjConstructorIllustrations == 153
        || countElementObjConstructorIllustrations == 154
        || countElementObjConstructorIllustrations == 155
        || countElementObjConstructorIllustrations == 156
        || countElementObjConstructorIllustrations == 157
        || countElementObjConstructorIllustrations == 158
        || countElementObjConstructorIllustrations == 159
        || countElementObjConstructorIllustrations == 160
        || countElementObjConstructorIllustrations == 161
        || countElementObjConstructorIllustrations == 162
        || countElementObjConstructorIllustrations == 163
        || countElementObjConstructorIllustrations == 164
        || countElementObjConstructorIllustrations == 165
        || countElementObjConstructorIllustrations == 166
        || countElementObjConstructorIllustrations == 167
        || countElementObjConstructorIllustrations == 168
        || countElementObjConstructorIllustrations == 169
        || countElementObjConstructorIllustrations == 170
        || countElementObjConstructorIllustrations == 171
        || countElementObjConstructorIllustrations == 172
        || countElementObjConstructorIllustrations == 173
        || countElementObjConstructorIllustrations == 174
        || countElementObjConstructorIllustrations == 175
        ) {
        $(".const-content__block-banner-row-item img")[0].style.position = 'static'
        $(".const-content__block-banner-row-item img")[1].style.position = 'static'
        $(".const-content__block-banner-row-item img")[2].style.position = 'static'
        $(".const-content__block-banner-row-item img")[3].style.position = 'static'
        $(".const-content__block-banner-row-item img")[4].style.position = 'static'
        $(".const-content__block-banner-row-item img")[5].style.position = 'static'
        $(".const-content__block-banner-row-item img")[6].style.position = 'static'
        $(".const-content__block-banner-row-item img")[7].style.position = 'static'
        $(".const-content__block-banner-row-item img")[8].style.position = 'static'
        $(".const-content__block-banner-row-item img")[9].style.position = 'static'
        $(".const-content__block-banner-row-item img")[10].style.position = 'static'
        $(".const-content__block-banner-row-item img")[11].style.position = 'static'
        $(".const-content__block-banner-row-item img")[12].style.position = 'static'
        $(".const-content__block-banner-row-item img")[13].style.position = 'static'
        $(".const-content__block-banner-row-item img")[14].style.position = 'static'
        $(".const-content__block-banner-row-item img")[15].style.position = 'static'
        $(".const-content__block-banner-row-item img")[16].style.position = 'static'
        $(".const-content__block-banner-row-item img")[17].style.position = 'static'
        $(".const-content__block-banner-row-item img")[18].style.position = 'static'
        $(".const-content__block-banner-row-item img")[19].style.position = 'static'
        $(".const-content__block-banner-row-item img")[20].style.position = 'static'
        $(".const-content__block-banner-row-item img")[21].style.position = 'static'
        $(".const-content__block-banner-row-item img")[22].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[22].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[23].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[23].style.right = '-25px';
        $(".const-content__block-banner-row-item img")[24].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[24].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[25].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[25].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[26].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[26].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[27].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[27].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[28].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[28].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[29].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[29].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[30].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[30].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[31].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[31].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[32].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[32].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[33].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[33].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[34].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[34].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[35].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[35].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[36].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[36].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[37].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[37].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[38].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[38].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[39].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[39].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[40].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[40].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[41].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[41].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[42].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[42].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[42].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[42].style.right = '-30px'
        $(".const-content__block-banner-row-item img")[43].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[43].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[44].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[44].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[45].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[45].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[46].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[46].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[47].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[47].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[48].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[48].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[49].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[49].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[50].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[50].style.right = '-50px'
    }
    let constMediaBreakPoint = window.screen.width

    if (constMediaBreakPoint <= 1400) {
        if(countElementObjConstructorIllustrations >= 1) {
            $('.const-content__block-banner-row-item img').css('width', '90px');
            $('.const-content__block-banner-row').css('grid-template-rows', '');
            $('.const-content__block-banner-row').css('grid-template-columns', 'repeat(auto-fit,105px)');
            $('.const-content__block-banner-row').css('grid-template-areas', `
            ". . . item-41 item-42 item-43 item-44 item-45 . . ."
            ". . item-35 item-36 item-37 item-38 item-39 item-40 . . ."
            ". item-28 item-29 item-30 item-31 item-32 item-33 item-34 . . ."
            ". item-20 item-21 item-22 item-23 item-24 item-25 item-26 item-27 . ."
            "item-11 item-12 item-13 item-14 item-15 item-16 item-17 item-18 item-19 . ."
            "item-1 item-2 item-3 item-4 item-5 item-6 item-7 item-8 item-9 item-10 ."
            `);

            $('.const-content__block-banner-row-item:nth-child(11)').css('position', 'relative')
            $('.const-content__block-banner-row-item:nth-child(11) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(11) img').css('top', '20px')
            $('.const-content__block-banner-row-item:nth-child(11) img').css('left', '60px')

            $('.const-content__block-banner-row-item:nth-child(20) img').css('top', '40px')
            $('.const-content__block-banner-row-item:nth-child(20) img').css('left', '10px')

            $('.const-content__block-banner-row-item:nth-child(21) img').css('top', '40px')
            $('.const-content__block-banner-row-item:nth-child(21) img').css('left', '10px')

            $('.const-content__block-banner-row-item:nth-child(22) img').css('top', '40px')
            $('.const-content__block-banner-row-item:nth-child(22) img').css('left', '10px')

            $('.const-content__block-banner-row-item:nth-child(23) img').css('top', '40px')
            $('.const-content__block-banner-row-item:nth-child(23) img').css('left', '10px')

            $('.const-content__block-banner-row-item:nth-child(24) img').css('top', '40px')
            $('.const-content__block-banner-row-item:nth-child(24) img').css('left', '10px')

            $('.const-content__block-banner-row-item:nth-child(25) img').css('top', '40px')
            $('.const-content__block-banner-row-item:nth-child(25) img').css('left', '10px')

            $('.const-content__block-banner-row-item:nth-child(26) img').css('top', '40px')
            $('.const-content__block-banner-row-item:nth-child(26) img').css('left', '10px')

            $('.const-content__block-banner-row-item:nth-child(27) img').css('top', '40px')
            $('.const-content__block-banner-row-item:nth-child(27) img').css('left', '10px')

            $('.const-content__block-banner-row-item:nth-child(28) img').css('top', '60px')
            $('.const-content__block-banner-row-item:nth-child(28) img').css('left', '65px')

            $('.const-content__block-banner-row-item:nth-child(29) img').css('top', '60px')
            $('.const-content__block-banner-row-item:nth-child(29) img').css('left', '65px')

            $('.const-content__block-banner-row-item:nth-child(30) img').css('top', '60px')
            $('.const-content__block-banner-row-item:nth-child(30) img').css('left', '65px')

            $('.const-content__block-banner-row-item:nth-child(31) img').css('top', '60px')
            $('.const-content__block-banner-row-item:nth-child(31) img').css('left', '65px')

            $('.const-content__block-banner-row-item:nth-child(32) img').css('top', '60px')
            $('.const-content__block-banner-row-item:nth-child(32) img').css('left', '65px')

            $('.const-content__block-banner-row-item:nth-child(33) img').css('top', '60px')
            $('.const-content__block-banner-row-item:nth-child(33) img').css('left', '65px')

            $('.const-content__block-banner-row-item:nth-child(34) img').css('top', '60px')
            $('.const-content__block-banner-row-item:nth-child(34) img').css('left', '65px')

            $('.const-content__block-banner-row-item:nth-child(35) img').css('top', '80px')
            $('.const-content__block-banner-row-item:nth-child(35) img').css('left', '15px')

            $('.const-content__block-banner-row-item:nth-child(36) img').css('top', '80px')
            $('.const-content__block-banner-row-item:nth-child(36) img').css('left', '15px')

            $('.const-content__block-banner-row-item:nth-child(37) img').css('top', '80px')
            $('.const-content__block-banner-row-item:nth-child(37) img').css('left', '15px')

            $('.const-content__block-banner-row-item:nth-child(38) img').css('top', '80px')
            $('.const-content__block-banner-row-item:nth-child(38) img').css('left', '15px')

            $('.const-content__block-banner-row-item:nth-child(39) img').css('top', '80px')
            $('.const-content__block-banner-row-item:nth-child(39) img').css('left', '15px')

            $('.const-content__block-banner-row-item:nth-child(40) img').css('top', '80px')
            $('.const-content__block-banner-row-item:nth-child(40) img').css('left', '15px')

            $('.const-content__block-banner-row-item:nth-child(41) img').css('top', '95px')
            $('.const-content__block-banner-row-item:nth-child(41) img').css('left', '-35px')

            $('.const-content__block-banner-row-item:nth-child(42) img').css('top', '95px')
            $('.const-content__block-banner-row-item:nth-child(42) img').css('left', '-35px')

            $('.const-content__block-banner-row-item:nth-child(43) img').css('top', '95px')
            $('.const-content__block-banner-row-item:nth-child(43) img').css('left', '-35px')

            $('.const-content__block-banner-row-item:nth-child(44) img').css('top', '95px')
            $('.const-content__block-banner-row-item:nth-child(44) img').css('left', '-35px')

            $('.const-content__block-banner-row-item:nth-child(45) img').css('top', '95px')
            $('.const-content__block-banner-row-item:nth-child(45) img').css('left', '-35px')

            $('.const-content__block-banner-row-item:nth-child(46) img').css('top', '95px')
            $('.const-content__block-banner-row-item:nth-child(46) img').css('left', '-35px')
            
            $('.const-content__block-banner-row-item:nth-child(47) img').css('top', '95px')
            $('.const-content__block-banner-row-item:nth-child(47) img').css('left', '-35px')
        }
        
        if(countElementObjConstructorIllustrations >= 45) {
            $('.const-content__block-banner-row-item img').css('width', '48px')
        $('.const-content__block-banner-row').css("grid-template-rows", "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr")
        $('.const-content__block-banner-row').css("grid-template-columns", "repeat(auto-fit,50px)")
        $('.const-content__block-banner-row').css("grid-template-areas",`
            ". . . . . . . item-154 item-155 item-156 item-157 item-158 item-159 item-160 item-161 item-162 item-163 item-164 item-165 . . ."
            ". . . . . . item-141 item-142 item-143 item-144 item-145 item-146 item-147 item-148 item-149 item-150 item-151 item-152 item-153 . . ."
            ". . . . . item-127 item-128 item-129 item-130 item-131 item-132 item-133 item-134 item-135 item-136 item-137 item-138 item-139 item-140 . . ."
            ". . . . item-112 item-113 item-114 item-115 item-116 item-117 item-118 item-119 item-120 item-121 item-122 item-123 item-124 item-125 item-126 . . ."
            ". . . item-96 item-97 item-98 item-99 item-100 item-101 item-102 item-103 item-104 item-105 item-106 item-107 item-108 item-109 item-110 item-111 . . ."
            ". . item-79 item-80 item-81 item-82 item-83 item-84 item-85 item-86 item-87 item-88 item-89 item-90 item-91 item-92 item-93 item-94 item-95 . . ."
            ". . item-62 item-63 item-64 item-65 item-66 item-67 item-68 item-69 item-70 item-71 item-72 item-73 item-74 item-75 item-76 item-77 item-78 . . ."
            "item-42 item-43 item-44 item-45 item-46 item-47 item-48 item-49 item-50 item-51 item-52 item-53 item-54 item-55 item-56 item-57 item-58 item-59 item-60 item-61 . ."
            "item-22 item-23 item-24 item-25 item-26 item-27 item-28 item-29 item-30 item-31 item-32 item-33 item-34 item-35 item-36 item-37 item-38 item-39 item-40 item-41 . ."
            "item-1 item-2 item-3 item-4 item-5 item-6 item-7 item-8 item-9 item-10 item-11 item-12 item-13 item-14 item-15 item-16 item-17 item-18 item-19 item-20 item-21 ."
        `)

        $('.const-content__block-banner-row-item:nth-child(1) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(2) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(3) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(4) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(5) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(6) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(7) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(8) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(9) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(10) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(11) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(12) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(13) img').css('position', 'static')

        $('.const-content__block-banner-row-item:nth-child(14) img').css('position', 'static')
        
        $('.const-content__block-banner-row-item:nth-child(15) img').css('position', 'static')
        
        $('.const-content__block-banner-row-item:nth-child(16) img').css('position', 'static')
        
        $('.const-content__block-banner-row-item:nth-child(17) img').css('position', 'static')
        
        $('.const-content__block-banner-row-item:nth-child(18) img').css('position', 'static')
        
        $('.const-content__block-banner-row-item:nth-child(19) img').css('position', 'static')
        
        $('.const-content__block-banner-row-item:nth-child(20) img').css('position', 'static')
        
        $('.const-content__block-banner-row-item:nth-child(21) img').css('position', 'static')
        
        $('.const-content__block-banner-row-item:nth-child(22) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(22) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(22) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(23) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(23) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(23) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(24) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(24) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(24) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(25) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(25) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(25) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(26) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(26) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(26) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(27) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(27) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(27) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(28) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(28) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(28) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(29) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(29) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(29) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(30) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(30) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(30) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(31) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(31) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(31) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(32) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(32) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(32) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(33) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(33) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(33) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(34) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(34) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(34) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(35) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(35) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(35) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(36) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(36) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(36) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(37) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(37) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(37) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(38) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(38) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(38) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(39) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(39) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(39) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(40) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(40) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(40) img').css('left', '25px')
        
        $('.const-content__block-banner-row-item:nth-child(41) img').css('position', 'absolute')
        $('.const-content__block-banner-row-item:nth-child(41) img').css('top', '20px')
        $('.const-content__block-banner-row-item:nth-child(41) img').css('left', '25px')

        $('.const-content__block-banner-row-item:nth-child(42) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(42) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(43) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(43) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(44) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(44) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(45) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(45) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(46) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(46) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(47) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(47) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(48) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(48) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(49) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(49) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(50) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(50) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(51) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(51) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(52) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(52) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(53) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(53) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(54) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(54) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(55) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(55) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(56) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(56) img').css('left', '50px')
        
        $('.const-content__block-banner-row-item:nth-child(57) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(57) img').css('left', '50px')

        $('.const-content__block-banner-row-item:nth-child(58) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(58) img').css('left', '50px')

        $('.const-content__block-banner-row-item:nth-child(59) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(59) img').css('left', '50px')

        $('.const-content__block-banner-row-item:nth-child(60) img').css('top', '40px')
        $('.const-content__block-banner-row-item:nth-child(60) img').css('left', '50px')

        $('.const-content__block-banner-row-item:nth-child(61) img').css('top', '10px')
        $('.const-content__block-banner-row-item:nth-child(61) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(62) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(62) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(63) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(63) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(64) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(64) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(65) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(65) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(66) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(66) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(67) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(67) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(68) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(68) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(69) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(69) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(70) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(70) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(71) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(71) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(72) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(72) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(73) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(73) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(74) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(74) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(75) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(75) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(76) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(76) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(77) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(77) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(78) img').css('top', '60px')
        $('.const-content__block-banner-row-item:nth-child(78) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(79) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(79) img').css('left', '0')
        
        $('.const-content__block-banner-row-item:nth-child(80) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(80) img').css('left', '0')
        
        $('.const-content__block-banner-row-item:nth-child(81) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(81) img').css('left', '0')
        
        $('.const-content__block-banner-row-item:nth-child(82) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(82) img').css('left', '0')
        
        $('.const-content__block-banner-row-item:nth-child(83) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(83) img').css('left', '0')

        $('.const-content__block-banner-row-item:nth-child(84) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(84) img').css('left', '0')
        
        $('.const-content__block-banner-row-item:nth-child(85) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(85) img').css('left', '0')
        
        $('.const-content__block-banner-row-item:nth-child(86) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(86) img').css('left', '0')
        
        $('.const-content__block-banner-row-item:nth-child(87) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(87) img').css('left', '0')
        
        $('.const-content__block-banner-row-item:nth-child(88) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(88) img').css('left', '0')
        
        $('.const-content__block-banner-row-item:nth-child(89) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(89) img').css('left', '0')
        
        $('.const-content__block-banner-row-item:nth-child(90) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(90) img').css('left', '0')
        
        $('.const-content__block-banner-row-item:nth-child(91) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(91) img').css('left', '0')

        $('.const-content__block-banner-row-item:nth-child(92) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(92) img').css('left', '0')

        $('.const-content__block-banner-row-item:nth-child(93) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(93) img').css('left', '0')

        $('.const-content__block-banner-row-item:nth-child(94) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(94) img').css('left', '0')

        $('.const-content__block-banner-row-item:nth-child(95) img').css('top', '80px')
        $('.const-content__block-banner-row-item:nth-child(95) img').css('left', '0')

        $('.const-content__block-banner-row-item:nth-child(96) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(96) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(97) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(97) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(98) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(98) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(99) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(99) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(100) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(100) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(101) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(101) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(102) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(102) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(103) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(103) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(104) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(104) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(105) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(105) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(106) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(106) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(107) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(107) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(108) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(108) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(109) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(109) img').css('left', '-25px')
        
        $('.const-content__block-banner-row-item:nth-child(110) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(110) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(111) img').css('top', '100px')
        $('.const-content__block-banner-row-item:nth-child(111) img').css('left', '-25px')

        $('.const-content__block-banner-row-item:nth-child(112) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(112) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(113) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(113) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(114) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(114) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(115) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(115) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(116) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(116) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(117) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(117) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(118) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(118) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(119) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(119) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(120) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(120) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(121) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(121) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(122) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(122) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(123) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(123) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(124) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(124) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(125) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(125) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(126) img').css('top', '120px')
        $('.const-content__block-banner-row-item:nth-child(126) img').css('left', '-50px')

        $('.const-content__block-banner-row-item:nth-child(127) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(127) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(128) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(128) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(129) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(129) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(130) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(130) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(131) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(131) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(132) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(132) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(133) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(133) img').css('left', '-75px') 

        $('.const-content__block-banner-row-item:nth-child(134) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(134) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(135) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(135) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(136) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(136) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(137) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(137) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(138) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(138) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(139) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(139) img').css('left', '-75px') 

        $('.const-content__block-banner-row-item:nth-child(140) img').css('top', '140px')
        $('.const-content__block-banner-row-item:nth-child(140) img').css('left', '-75px') 
        
        $('.const-content__block-banner-row-item:nth-child(141) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(141) img').css('left', '-100px') 
        
        $('.const-content__block-banner-row-item:nth-child(142) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(142) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(143) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(143) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(144) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(144) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(145) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(145) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(146) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(146) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(147) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(147) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(148) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(148) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(149) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(149) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(150) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(150) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(151) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(151) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(152) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(152) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(153) img').css('top', '160px')
        $('.const-content__block-banner-row-item:nth-child(153) img').css('left', '-100px') 
                
        $('.const-content__block-banner-row-item:nth-child(154) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(154) img').css('left', '-125px') 
                
        $('.const-content__block-banner-row-item:nth-child(155) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(155) img').css('left', '-125px') 
                
        $('.const-content__block-banner-row-item:nth-child(156) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(156) img').css('left', '-125px') 
                
        $('.const-content__block-banner-row-item:nth-child(157) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(157) img').css('left', '-125px') 
                
        $('.const-content__block-banner-row-item:nth-child(158) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(158) img').css('left', '-125px') 
                
        $('.const-content__block-banner-row-item:nth-child(159) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(159) img').css('left', '-125px') 
                
        $('.const-content__block-banner-row-item:nth-child(160) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(160) img').css('left', '-125px') 
                
        $('.const-content__block-banner-row-item:nth-child(161) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(161) img').css('left', '-125px') 
                
        $('.const-content__block-banner-row-item:nth-child(162) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(162) img').css('left', '-125px') 
                
        $('.const-content__block-banner-row-item:nth-child(163) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(163) img').css('left', '-125px') 
                
        $('.const-content__block-banner-row-item:nth-child(164) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(164) img').css('left', '-125px') 
                
        $('.const-content__block-banner-row-item:nth-child(165) img').css('top', '180px')
        $('.const-content__block-banner-row-item:nth-child(165) img').css('left', '-125px') 
        }
        if(countElementObjConstructorIllustrations >= 165) {
            $('.const-media-content__block-slider-1-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-2-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-3-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-4-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-5-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-6-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-7-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-8-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-9-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-10-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-11-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-12-btns-btn').attr('disabled', 'disabled')
            $('.const-content__block-slider-1-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-2-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-3-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-4-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-5-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-6-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-7-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-8-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-9-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-10-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-11-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-12-info-btn-item').attr('disabled', 'disabled')
        } else {
            $('.const-media-content__block-slider-1-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-2-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-3-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-4-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-5-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-6-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-7-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-8-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-9-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-10-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-11-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-12-btns-btn').removeAttr('disabled')
            $('.const-content__block-slider-1-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-2-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-3-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-4-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-5-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-6-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-7-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-8-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-9-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-10-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-11-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-12-info-btn-item').removeAttr('disabled')
        }
    }
    if (constMediaBreakPoint <= 1070) {
        if(countElementObjConstructorIllustrations >= 1) {
            $('.const-content__block-banner-row-item img').css('width', '90px');
            $('.const-content__block-banner-row').css('grid-template-rows', '1fr 1fr 1fr 1fr 1fr 1fr');
            $('.const-content__block-banner-row').css('grid-template-columns', '1fr 1fr 1fr 1fr 1fr 1fr');
            $('.const-content__block-banner-row').css('grid-template-areas', `
            "item-21 . . . . ."
            "item-19 item-20 . . . ."
            "item-16 item-17 item-18 . . ."
            "item-12 item-13 item-14 item-15 . ."
            "item-7 item-8 item-9 item-10 item-11 ."
            "item-1 item-2 item-3 item-4 item-5 item-6"
            `);
            
        }
        if(countElementObjConstructorIllustrations >= 7) {
            $('.const-content__block-banner-row-item img').css('width', '60px');
            $('.const-content__block-banner-row').css('grid-template-rows', '1fr 1fr 1fr 1fr 1fr 1fr');
            $('.const-content__block-banner-row').css('grid-template-columns', '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr');
            $('.const-content__block-banner-row').css('grid-template-areas', `
            ". . . . item-41 item-42 item-43 item-44 item-45  ."
            ". . . item-35 item-36 item-37 item-38 item-39 item-40  ."
            ". . item-28 item-29 item-30 item-31 item-32 item-33 item-34  ."
            ". item-20 item-21 item-22 item-23 item-24 item-25 item-26 item-27 ."
            "item-11 item-12 item-13 item-14 item-15 item-16 item-17 item-18 item-19 ."
            "item-1 item-2 item-3 item-4 item-5 item-6 item-7 item-8 item-9  item-10"
            `);

            $('.const-content__block-banner-row-item:nth-child(1)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(1)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(2)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(2)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(3)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(3)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(4)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(4)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(5)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(5)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(6)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(6)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(7)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(7)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(8)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(8)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(9)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(9)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(10)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(10)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(11) img').css('left', '30px')
            $('.const-content__block-banner-row-item:nth-child(11) img').css('top', '55px')

            $('.const-content__block-banner-row-item:nth-child(12) img').css('left', '30px')
            $('.const-content__block-banner-row-item:nth-child(12) img').css('top', '55px')

            $('.const-content__block-banner-row-item:nth-child(13) img').css('left', '30px')
            $('.const-content__block-banner-row-item:nth-child(13) img').css('top', '55px')

            $('.const-content__block-banner-row-item:nth-child(14) img').css('left', '30px')
            $('.const-content__block-banner-row-item:nth-child(14) img').css('top', '55px')

            $('.const-content__block-banner-row-item:nth-child(15) img').css('left', '30px')
            $('.const-content__block-banner-row-item:nth-child(15) img').css('top', '55px')

            $('.const-content__block-banner-row-item:nth-child(16) img').css('left', '30px')
            $('.const-content__block-banner-row-item:nth-child(16) img').css('top', '55px')

            $('.const-content__block-banner-row-item:nth-child(17) img').css('left', '30px')
            $('.const-content__block-banner-row-item:nth-child(17) img').css('top', '55px')

            $('.const-content__block-banner-row-item:nth-child(18) img').css('left', '30px')
            $('.const-content__block-banner-row-item:nth-child(18) img').css('top', '55px')

            $('.const-content__block-banner-row-item:nth-child(19) img').css('left', '30px')
            $('.const-content__block-banner-row-item:nth-child(19) img').css('top', '55px')

            $('.const-content__block-banner-row-item:nth-child(20) img').css('left', '0')
            $('.const-content__block-banner-row-item:nth-child(20) img').css('top', '100px')

            $('.const-content__block-banner-row-item:nth-child(21) img').css('left', '0')
            $('.const-content__block-banner-row-item:nth-child(21) img').css('top', '100px')
            
            $('.const-content__block-banner-row-item:nth-child(22) img').css('left', '0')
            $('.const-content__block-banner-row-item:nth-child(22) img').css('top', '100px')
            
            $('.const-content__block-banner-row-item:nth-child(23) img').css('left', '0')
            $('.const-content__block-banner-row-item:nth-child(23) img').css('top', '100px')
            
            $('.const-content__block-banner-row-item:nth-child(24) img').css('left', '0')
            $('.const-content__block-banner-row-item:nth-child(24) img').css('top', '100px')
            
            $('.const-content__block-banner-row-item:nth-child(25) img').css('left', '0')
            $('.const-content__block-banner-row-item:nth-child(25) img').css('top', '100px')
            
            $('.const-content__block-banner-row-item:nth-child(26) img').css('left', '0')
            $('.const-content__block-banner-row-item:nth-child(26) img').css('top', '100px')
            
            $('.const-content__block-banner-row-item:nth-child(27) img').css('left', '0')
            $('.const-content__block-banner-row-item:nth-child(27) img').css('top', '100px')
            
            $('.const-content__block-banner-row-item:nth-child(28) img').css('left', '-30px')
            $('.const-content__block-banner-row-item:nth-child(28) img').css('top', '145px')
            
            $('.const-content__block-banner-row-item:nth-child(29) img').css('left', '-30px')
            $('.const-content__block-banner-row-item:nth-child(29) img').css('top', '145px')

            $('.const-content__block-banner-row-item:nth-child(30) img').css('left', '-30px')
            $('.const-content__block-banner-row-item:nth-child(30) img').css('top', '145px')

            $('.const-content__block-banner-row-item:nth-child(31) img').css('left', '-30px')
            $('.const-content__block-banner-row-item:nth-child(31) img').css('top', '145px')

            $('.const-content__block-banner-row-item:nth-child(32) img').css('left', '-30px')
            $('.const-content__block-banner-row-item:nth-child(32) img').css('top', '145px')

            $('.const-content__block-banner-row-item:nth-child(33) img').css('left', '-30px')
            $('.const-content__block-banner-row-item:nth-child(33) img').css('top', '145px')

            $('.const-content__block-banner-row-item:nth-child(34) img').css('left', '-30px')
            $('.const-content__block-banner-row-item:nth-child(34) img').css('top', '145px')
            
            $('.const-content__block-banner-row-item:nth-child(35) img').css('left', '-60px')
            $('.const-content__block-banner-row-item:nth-child(35) img').css('top', '190px')
            
            $('.const-content__block-banner-row-item:nth-child(36) img').css('left', '-60px')
            $('.const-content__block-banner-row-item:nth-child(36) img').css('top', '190px')
            
            $('.const-content__block-banner-row-item:nth-child(37) img').css('left', '-60px')
            $('.const-content__block-banner-row-item:nth-child(37) img').css('top', '190px')
            
            $('.const-content__block-banner-row-item:nth-child(38) img').css('left', '-60px')
            $('.const-content__block-banner-row-item:nth-child(38) img').css('top', '190px')
            
            $('.const-content__block-banner-row-item:nth-child(39) img').css('left', '-60px')
            $('.const-content__block-banner-row-item:nth-child(39) img').css('top', '190px')
            
            $('.const-content__block-banner-row-item:nth-child(40) img').css('left', '-60px')
            $('.const-content__block-banner-row-item:nth-child(40) img').css('top', '190px')
            
            $('.const-content__block-banner-row-item:nth-child(41) img').css('left', '-90px')
            $('.const-content__block-banner-row-item:nth-child(41) img').css('top', '235px')
            
            $('.const-content__block-banner-row-item:nth-child(42) img').css('left', '-90px')
            $('.const-content__block-banner-row-item:nth-child(42) img').css('top', '235px')
            
            $('.const-content__block-banner-row-item:nth-child(43) img').css('left', '-90px')
            $('.const-content__block-banner-row-item:nth-child(43) img').css('top', '235px')
            
            $('.const-content__block-banner-row-item:nth-child(44) img').css('left', '-90px')
            $('.const-content__block-banner-row-item:nth-child(44) img').css('top', '235px')
            
            // $('.const-content__block-banner-row-item:nth-child(45) img').css('left', '-90px')
            // $('.const-content__block-banner-row-item:nth-child(45) img').css('top', '235px')
        }
        if(countElementObjConstructorIllustrations >= 45) {
            $('.const-content__block-banner-row-item img').css('width', '35px');
            $('.const-content__block-banner-row').css('width', '100%');
            $('.const-content__block-banner-row').css('grid-template-rows', '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr');
            $('.const-content__block-banner-row').css('grid-template-columns', '1fr 1fr 1rf 1fr 1fr 1fr 1fr 1rf 1fr 1fr 1fr 1fr 1rf 1fr 1fr');
            $('.const-content__block-banner-row').css('grid-template-areas', `
            ". . . . . . . . item-100 item-101 item-102 item-103 item-104 item-105 ."
            ". . . . . . . item-93 item-94 item-95 item-96 item-97 item-98 item-99 ."
            ". . . . . . item-85 item-86 item-87 item-88 item-89 item-90 item-91 item-92 ."
            ". . . . . item-76 item-77 item-78 item-79 item-80 item-81 item-82 item-83 item-84 ."
            ". . . . item-66 item-67 item-68 item-69 item-70 item-71 item-72 item-73 item-74 item-75 ."
            ". . . item-55 item-56 item-57 item-58 item-59 item-60 item-61 item-62 item-63 item-64 item-65 ."
            ". . item-43 item-44 item-45 item-46 item-47 item-48 item-49 item-50 item-51 item-52 item-53 item-54 ."
            ". item-30 item-31 item-32 item-33 item-34 item-35 item-36 item-37 item-38 item-39 item-40 item-41 item-42 ."
            "item-16 item-17 item-18 item-19 item-20 item-21 item-22 item-23 item-24 item-25 item-26 item-27 item-28 item-29 ."
            "item-1 item-2 item-3 item-4 item-5 item-6 item-7 item-8 item-9 item-10 item-11 item-12 item-13 item-14 item-15"
            `);

            $('.const-content__block-banner-row-item:nth-child(11) img').css('position', 'static')
            $('.const-content__block-banner-row-item:nth-child(11)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(11)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(12) img').css('position', 'static')
            $('.const-content__block-banner-row-item:nth-child(12)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(12)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(13) img').css('position', 'static')
            $('.const-content__block-banner-row-item:nth-child(13)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(13)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(14) img').css('position', 'static')
            $('.const-content__block-banner-row-item:nth-child(14)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(14)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(15) img').css('position', 'static')
            $('.const-content__block-banner-row-item:nth-child(15)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(15)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(16) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(16) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(16) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(17) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(17) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(17) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(18) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(18) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(18) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(19) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(19) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(19) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(20) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(20) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(20) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(21) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(21) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(21) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(22) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(22) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(22) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(23) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(23) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(23) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(24) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(24) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(24) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(25) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(25) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(25) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(26) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(26) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(26) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(27) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(27) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(27) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(28) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(28) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(28) img').css('top', '35px')
            
            $('.const-content__block-banner-row-item:nth-child(29) img').css('position', 'absolute')
            $('.const-content__block-banner-row-item:nth-child(29) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(29) img').css('top', '35px')

            $('.const-content__block-banner-row-item:nth-child(30) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(30) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(31) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(31) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(32) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(32) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(33) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(33) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(34) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(34) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(35) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(35) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(36) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(36) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(37) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(37) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(38) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(38) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(39) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(39) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(40) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(40) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(41) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(41) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(42) img').css('left', '5px')
            $('.const-content__block-banner-row-item:nth-child(42) img').css('top', '65px')
            
            $('.const-content__block-banner-row-item:nth-child(43) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(43) img').css('top', '95px')
            
            $('.const-content__block-banner-row-item:nth-child(44) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(44) img').css('top', '95px')
                        
            $('.const-content__block-banner-row-item:nth-child(45) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(45) img').css('top', '95px')
                        
            $('.const-content__block-banner-row-item:nth-child(46) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(46) img').css('top', '95px')
                        
            $('.const-content__block-banner-row-item:nth-child(47) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(47) img').css('top', '95px')
                        
            $('.const-content__block-banner-row-item:nth-child(48) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(48) img').css('top', '95px')
                        
            $('.const-content__block-banner-row-item:nth-child(49) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(49) img').css('top', '95px')
                        
            $('.const-content__block-banner-row-item:nth-child(50) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(50) img').css('top', '95px')
                        
            $('.const-content__block-banner-row-item:nth-child(51) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(51) img').css('top', '95px')
                        
            $('.const-content__block-banner-row-item:nth-child(52) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(52) img').css('top', '95px')
                        
            $('.const-content__block-banner-row-item:nth-child(53) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(53) img').css('top', '95px')
                        
            $('.const-content__block-banner-row-item:nth-child(54) img').css('left', '-15px')
            $('.const-content__block-banner-row-item:nth-child(54) img').css('top', '95px')
                        
            $('.const-content__block-banner-row-item:nth-child(55) img').css('left', '-35px')
            $('.const-content__block-banner-row-item:nth-child(55) img').css('top', '125px')
                        
            $('.const-content__block-banner-row-item:nth-child(56) img').css('left', '-35px')
            $('.const-content__block-banner-row-item:nth-child(56) img').css('top', '125px')
                        
            $('.const-content__block-banner-row-item:nth-child(57) img').css('left', '-35px')
            $('.const-content__block-banner-row-item:nth-child(57) img').css('top', '125px')
                        
            $('.const-content__block-banner-row-item:nth-child(58) img').css('left', '-35px')
            $('.const-content__block-banner-row-item:nth-child(58) img').css('top', '125px')
                        
            $('.const-content__block-banner-row-item:nth-child(59) img').css('left', '-35px')
            $('.const-content__block-banner-row-item:nth-child(59) img').css('top', '125px')
                        
            $('.const-content__block-banner-row-item:nth-child(60) img').css('left', '-35px')
            $('.const-content__block-banner-row-item:nth-child(60) img').css('top', '125px')
                        
            $('.const-content__block-banner-row-item:nth-child(61) img').css('left', '-35px')
            $('.const-content__block-banner-row-item:nth-child(61) img').css('top', '125px')
                        
            $('.const-content__block-banner-row-item:nth-child(62) img').css('left', '-35px')
            $('.const-content__block-banner-row-item:nth-child(62) img').css('top', '125px')
                        
            $('.const-content__block-banner-row-item:nth-child(63) img').css('left', '-35px')
            $('.const-content__block-banner-row-item:nth-child(63) img').css('top', '125px')
                        
            $('.const-content__block-banner-row-item:nth-child(64) img').css('left', '-35px')
            $('.const-content__block-banner-row-item:nth-child(64) img').css('top', '125px')
                        
            $('.const-content__block-banner-row-item:nth-child(65) img').css('left', '-35px')
            $('.const-content__block-banner-row-item:nth-child(65) img').css('top', '125px')
                        
            $('.const-content__block-banner-row-item:nth-child(66) img').css('left', '-55px')
            $('.const-content__block-banner-row-item:nth-child(66) img').css('top', '155px')
                        
            $('.const-content__block-banner-row-item:nth-child(67) img').css('left', '-55px')
            $('.const-content__block-banner-row-item:nth-child(67) img').css('top', '155px')
            
            $('.const-content__block-banner-row-item:nth-child(68) img').css('left', '-55px')
            $('.const-content__block-banner-row-item:nth-child(68) img').css('top', '155px')
            
            $('.const-content__block-banner-row-item:nth-child(69) img').css('left', '-55px')
            $('.const-content__block-banner-row-item:nth-child(69) img').css('top', '155px')
            
            $('.const-content__block-banner-row-item:nth-child(70) img').css('left', '-55px')
            $('.const-content__block-banner-row-item:nth-child(70) img').css('top', '155px')
            
            $('.const-content__block-banner-row-item:nth-child(71) img').css('left', '-55px')
            $('.const-content__block-banner-row-item:nth-child(71) img').css('top', '155px')
            
            $('.const-content__block-banner-row-item:nth-child(72) img').css('left', '-55px')
            $('.const-content__block-banner-row-item:nth-child(72) img').css('top', '155px')
            
            $('.const-content__block-banner-row-item:nth-child(73) img').css('left', '-55px')
            $('.const-content__block-banner-row-item:nth-child(73) img').css('top', '155px')
            
            $('.const-content__block-banner-row-item:nth-child(74) img').css('left', '-55px')
            $('.const-content__block-banner-row-item:nth-child(74) img').css('top', '155px')
            
            $('.const-content__block-banner-row-item:nth-child(75) img').css('left', '-55px')
            $('.const-content__block-banner-row-item:nth-child(75) img').css('top', '155px')
            
            $('.const-content__block-banner-row-item:nth-child(76) img').css('left', '-75px')
            $('.const-content__block-banner-row-item:nth-child(76) img').css('top', '185px')
            
            $('.const-content__block-banner-row-item:nth-child(76) img').css('left', '-75px')
            $('.const-content__block-banner-row-item:nth-child(76) img').css('top', '185px')
            
            $('.const-content__block-banner-row-item:nth-child(77) img').css('left', '-75px')
            $('.const-content__block-banner-row-item:nth-child(77) img').css('top', '185px')
            
            $('.const-content__block-banner-row-item:nth-child(78) img').css('left', '-75px')
            $('.const-content__block-banner-row-item:nth-child(78) img').css('top', '185px')
            
            $('.const-content__block-banner-row-item:nth-child(79) img').css('left', '-75px')
            $('.const-content__block-banner-row-item:nth-child(79) img').css('top', '185px')
            
            $('.const-content__block-banner-row-item:nth-child(80) img').css('left', '-75px')
            $('.const-content__block-banner-row-item:nth-child(80) img').css('top', '185px')
            
            $('.const-content__block-banner-row-item:nth-child(81) img').css('left', '-75px')
            $('.const-content__block-banner-row-item:nth-child(81) img').css('top', '185px')
            
            $('.const-content__block-banner-row-item:nth-child(82) img').css('left', '-75px')
            $('.const-content__block-banner-row-item:nth-child(82) img').css('top', '185px')
            
            $('.const-content__block-banner-row-item:nth-child(83) img').css('left', '-75px')
            $('.const-content__block-banner-row-item:nth-child(83) img').css('top', '185px')
            
            $('.const-content__block-banner-row-item:nth-child(84) img').css('left', '-75px')
            $('.const-content__block-banner-row-item:nth-child(84) img').css('top', '185px')
            
            $('.const-content__block-banner-row-item:nth-child(85) img').css('left', '-95px')
            $('.const-content__block-banner-row-item:nth-child(85) img').css('top', '215px')
            
            $('.const-content__block-banner-row-item:nth-child(86) img').css('left', '-95px')
            $('.const-content__block-banner-row-item:nth-child(86) img').css('top', '215px')
            
            $('.const-content__block-banner-row-item:nth-child(87) img').css('left', '-95px')
            $('.const-content__block-banner-row-item:nth-child(87) img').css('top', '215px')
            
            $('.const-content__block-banner-row-item:nth-child(88) img').css('left', '-95px')
            $('.const-content__block-banner-row-item:nth-child(88) img').css('top', '215px')
            
            $('.const-content__block-banner-row-item:nth-child(89) img').css('left', '-95px')
            $('.const-content__block-banner-row-item:nth-child(89) img').css('top', '215px')
            
            $('.const-content__block-banner-row-item:nth-child(90) img').css('left', '-95px')
            $('.const-content__block-banner-row-item:nth-child(90) img').css('top', '215px')
            
            $('.const-content__block-banner-row-item:nth-child(91) img').css('left', '-95px')
            $('.const-content__block-banner-row-item:nth-child(91) img').css('top', '215px')
            
            $('.const-content__block-banner-row-item:nth-child(92) img').css('left', '-95px')
            $('.const-content__block-banner-row-item:nth-child(92) img').css('top', '215px')

            $('.const-content__block-banner-row-item:nth-child(93) img').css('left', '-115px')
            $('.const-content__block-banner-row-item:nth-child(93) img').css('top', '245px')
            
            $('.const-content__block-banner-row-item:nth-child(94) img').css('left', '-115px')
            $('.const-content__block-banner-row-item:nth-child(94) img').css('top', '245px')
            
            $('.const-content__block-banner-row-item:nth-child(95) img').css('left', '-115px')
            $('.const-content__block-banner-row-item:nth-child(95) img').css('top', '245px')
            
            $('.const-content__block-banner-row-item:nth-child(96) img').css('left', '-115px')
            $('.const-content__block-banner-row-item:nth-child(96) img').css('top', '245px')
            
            $('.const-content__block-banner-row-item:nth-child(97) img').css('left', '-115px')
            $('.const-content__block-banner-row-item:nth-child(97) img').css('top', '245px')
            
            $('.const-content__block-banner-row-item:nth-child(98) img').css('left', '-115px')
            $('.const-content__block-banner-row-item:nth-child(98) img').css('top', '245px')
            
            $('.const-content__block-banner-row-item:nth-child(99) img').css('left', '-115px')
            $('.const-content__block-banner-row-item:nth-child(99) img').css('top', '245px')
            
            $('.const-content__block-banner-row-item:nth-child(100) img').css('left', '-135px')
            $('.const-content__block-banner-row-item:nth-child(100) img').css('top', '275px')
                        
            $('.const-content__block-banner-row-item:nth-child(101) img').css('left', '-135px')
            $('.const-content__block-banner-row-item:nth-child(101) img').css('top', '275px')
                        
            $('.const-content__block-banner-row-item:nth-child(102) img').css('left', '-135px')
            $('.const-content__block-banner-row-item:nth-child(102) img').css('top', '275px')
                        
            $('.const-content__block-banner-row-item:nth-child(103) img').css('left', '-135px')
            $('.const-content__block-banner-row-item:nth-child(103) img').css('top', '275px')
                        
            $('.const-content__block-banner-row-item:nth-child(104) img').css('left', '-135px')
            $('.const-content__block-banner-row-item:nth-child(104) img').css('top', '275px')
                        
            $('.const-content__block-banner-row-item:nth-child(105) img').css('left', '-135px')
            $('.const-content__block-banner-row-item:nth-child(105) img').css('top', '275px')
            
            
        }
        if(countElementObjConstructorIllustrations >= 105) {
            $('.const-media-content__block-slider-1-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-2-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-3-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-4-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-5-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-6-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-7-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-8-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-9-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-10-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-11-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-12-btns-btn').attr('disabled', 'disabled')
            $('.const-content__block-slider-1-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-2-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-3-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-4-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-5-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-6-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-7-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-8-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-9-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-10-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-11-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-12-info-btn-item').attr('disabled', 'disabled')
        } else {
            $('.const-media-content__block-slider-1-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-2-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-3-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-4-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-5-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-6-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-7-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-8-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-9-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-10-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-11-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-12-btns-btn').removeAttr('disabled')
            $('.const-content__block-slider-1-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-2-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-3-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-4-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-5-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-6-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-7-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-8-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-9-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-10-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-11-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-12-info-btn-item').removeAttr('disabled')
        }
    }
    if (constMediaBreakPoint <= 630) {
        if(countElementObjConstructorIllustrations >= 1) {
            $('.const-content__block-banner-row').css('margin', '0');
            $('.const-content__block-banner-row').css('width', '100%');
            $('.const-content__block-banner-row-item img').css('width', '90px');
            $('.const-content__block-banner-row').css('grid-template-rows', 'repeat(4, 1fr)');
            $('.const-content__block-banner-row').css('grid-template-columns', 'repeat(auto-fit,100px)');
            $('.const-content__block-banner-row').css('grid-template-areas', `
            ". . . ."
            ". . . ."
            ". . . ."
            "item-1 item-2 item-3 item-4"
            `);
            $('.const-content__block-banner-row-item:nth-child(1)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(1)').css('align-items', 'flex-end')

            $('.const-content__block-banner-row-item:nth-child(2)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(2)').css('align-items', 'flex-end')

            $('.const-content__block-banner-row-item:nth-child(3)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(3)').css('align-items', 'flex-end')

            $('.const-content__block-banner-row-item:nth-child(4)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(4)').css('align-items', 'flex-end')
        }
        if(countElementObjConstructorIllustrations >= 5) {
            $('.const-content__block-banner-row-item img').css('width', '35px');
            $('.const-content__block-banner-row').css('grid-template-rows', 'repeat(6, 1fr)');
            $('.const-content__block-banner-row').css('grid-template-columns', 'repeat(9, 1fr)');
            $('.const-content__block-banner-row').css('grid-template-areas', `
            "item-36 item-37 item-38 item-39 . . . . ."
            "item-31 item-32 item-33 item-34 item-35 . . . ."
            "item-25 item-26 item-27 item-28 item-29 item-30 . . ."
            "item-18 item-19 item-20 item-21 item-22 item-23 item-24 . ."
            "item-10 item-11 item-12 item-13 item-14 item-15 item-16 item-17 ."
            "item-1 item-2 item-3 item-4 item-5 item-6 item-7 item-8 item-9"
            `);

            $('.const-content__block-banner-row-item:nth-child(1)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(1)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(2)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(2)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(3)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(3)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(4)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(4)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(5)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(5)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(6)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(6)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(7)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(7)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(8)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(8)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(9)').css('display', 'flex')
            $('.const-content__block-banner-row-item:nth-child(9)').css('align-items', 'center')

            $('.const-content__block-banner-row-item:nth-child(10)').css('position', 'relative')
            $('.const-content__block-banner-row-item:nth-child(10) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(10) img').css('top', '80px')
            $('.const-content__block-banner-row-item:nth-child(10) img').css('position', 'absolute')
            
            $('.const-content__block-banner-row-item:nth-child(11) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(11) img').css('top', '80px')
            
            $('.const-content__block-banner-row-item:nth-child(12) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(12) img').css('top', '80px')
            
            $('.const-content__block-banner-row-item:nth-child(13) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(13) img').css('top', '80px')
            
            $('.const-content__block-banner-row-item:nth-child(14) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(14) img').css('top', '80px')
            
            $('.const-content__block-banner-row-item:nth-child(15) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(15) img').css('top', '80px')
            
            $('.const-content__block-banner-row-item:nth-child(16) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(16) img').css('top', '80px')
            
            $('.const-content__block-banner-row-item:nth-child(17) img').css('left', '25px')
            $('.const-content__block-banner-row-item:nth-child(17) img').css('top', '80px')
            
            $('.const-content__block-banner-row-item:nth-child(18) img').css('left', '50px')
            $('.const-content__block-banner-row-item:nth-child(18) img').css('top', '140px')
                        
            $('.const-content__block-banner-row-item:nth-child(19) img').css('left', '50px')
            $('.const-content__block-banner-row-item:nth-child(19) img').css('top', '140px')
                        
            $('.const-content__block-banner-row-item:nth-child(20) img').css('left', '50px')
            $('.const-content__block-banner-row-item:nth-child(20) img').css('top', '140px')
                        
            $('.const-content__block-banner-row-item:nth-child(21) img').css('left', '50px')
            $('.const-content__block-banner-row-item:nth-child(21) img').css('top', '140px')
                        
            $('.const-content__block-banner-row-item:nth-child(22) img').css('left', '50px')
            $('.const-content__block-banner-row-item:nth-child(22) img').css('top', '140px')
                        
            $('.const-content__block-banner-row-item:nth-child(23) img').css('left', '50px')
            $('.const-content__block-banner-row-item:nth-child(23) img').css('top', '140px')
                        
            $('.const-content__block-banner-row-item:nth-child(24) img').css('left', '50px')
            $('.const-content__block-banner-row-item:nth-child(24) img').css('top', '140px')
                        
            $('.const-content__block-banner-row-item:nth-child(25) img').css('left', '75px')
            $('.const-content__block-banner-row-item:nth-child(25) img').css('top', '200px')
            
            $('.const-content__block-banner-row-item:nth-child(26) img').css('left', '75px')
            $('.const-content__block-banner-row-item:nth-child(26) img').css('top', '200px')
            
            $('.const-content__block-banner-row-item:nth-child(27) img').css('left', '75px')
            $('.const-content__block-banner-row-item:nth-child(27) img').css('top', '200px')
            
            $('.const-content__block-banner-row-item:nth-child(28) img').css('left', '75px')
            $('.const-content__block-banner-row-item:nth-child(28) img').css('top', '200px')
            
            $('.const-content__block-banner-row-item:nth-child(29) img').css('left', '75px')
            $('.const-content__block-banner-row-item:nth-child(29) img').css('top', '200px')
            
            $('.const-content__block-banner-row-item:nth-child(30) img').css('left', '75px')
            $('.const-content__block-banner-row-item:nth-child(30) img').css('top', '200px')
            
            $('.const-content__block-banner-row-item:nth-child(31) img').css('left', '100px')
            $('.const-content__block-banner-row-item:nth-child(31) img').css('top', '260px')
            
            $('.const-content__block-banner-row-item:nth-child(32) img').css('left', '100px')
            $('.const-content__block-banner-row-item:nth-child(32) img').css('top', '260px')
            
            $('.const-content__block-banner-row-item:nth-child(33) img').css('left', '100px')
            $('.const-content__block-banner-row-item:nth-child(33) img').css('top', '260px')
            
            $('.const-content__block-banner-row-item:nth-child(34) img').css('left', '100px')
            $('.const-content__block-banner-row-item:nth-child(34) img').css('top', '260px')
            
            $('.const-content__block-banner-row-item:nth-child(35) img').css('left', '100px')
            $('.const-content__block-banner-row-item:nth-child(35) img').css('top', '260px')
            
            $('.const-content__block-banner-row-item:nth-child(36) img').css('left', '125px')
            $('.const-content__block-banner-row-item:nth-child(36) img').css('top', '320px')
            
            $('.const-content__block-banner-row-item:nth-child(37) img').css('left', '125px')
            $('.const-content__block-banner-row-item:nth-child(37) img').css('top', '320px')
            
            $('.const-content__block-banner-row-item:nth-child(38) img').css('left', '125px')
            $('.const-content__block-banner-row-item:nth-child(38) img').css('top', '320px')
            
            $('.const-content__block-banner-row-item:nth-child(39) img').css('left', '125px')
            $('.const-content__block-banner-row-item:nth-child(39) img').css('top', '320px')
        }
        if(countElementObjConstructorIllustrations >= 39) {
            $('.const-media-content__block-slider-1-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-2-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-3-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-4-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-5-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-6-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-7-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-8-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-9-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-10-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-11-btns-btn').attr('disabled', 'disabled')
            $('.const-media-content__block-slider-12-btns-btn').attr('disabled', 'disabled')
            $('.const-content__block-slider-1-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-2-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-3-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-4-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-5-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-6-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-7-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-8-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-9-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-10-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-11-info-btn-item').attr('disabled', 'disabled')
            $('.const-content__block-slider-12-info-btn-item').attr('disabled', 'disabled')
        } else {
            $('.const-media-content__block-slider-1-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-2-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-3-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-4-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-5-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-6-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-7-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-8-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-9-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-10-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-11-btns-btn').removeAttr('disabled')
            $('.const-media-content__block-slider-12-btns-btn').removeAttr('disabled')
            $('.const-content__block-slider-1-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-2-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-3-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-4-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-5-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-6-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-7-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-8-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-9-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-10-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-11-info-btn-item').removeAttr('disabled')
            $('.const-content__block-slider-12-info-btn-item').removeAttr('disabled')
        }
    }
}




var constSwiperListBlock = new Swiper(".constSwiperListBlock", {
    slidesPerView: 9,
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".const-content__swipers-list .swiper-controls .swiper-button-next",
        prevEl: ".const-content__swipers-list .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
    breakpoints: {
        1350: {
            slidesPerView: 9,
            spaceBetween: 15,
        },
        1300: {
            slidesPerView: 8,
            spaceBetween: 15,
        },
        1100: {
            slidesPerView: 7,
            spaceBetween: 15,
        },
        1000: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
        850: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        710: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        660: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
    }
});


$('.const-content__swipers-media-block').on('click', function() {
    $('.const-content__swipers').addClass('display-n')
    $('.const-content__swipe').removeClass('display-n')
});




var constMediaContentSlider_1 = new Swiper(".constMediaContentSlider_1", {
    pagination: {
        el: ".const-media-content__block-slider-1 .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
var constMediaContentSlider_2 = new Swiper(".constMediaContentSlider_2", {
    pagination: {
        el: ".const-media-content__block-slider-2 .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
var constMediaContentSlider_3 = new Swiper(".constMediaContentSlider_3", {
    pagination: {
        el: ".const-media-content__block-slider-3 .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});


var constMediaContentSliders_2 = new Swiper(".constMediaContentSliders_2", {
    pagination: {
        el: ".const-media-content__block-sliders-2 .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
var constMediaContentSliders_3 = new Swiper(".constMediaContentSliders_3", {
    pagination: {
        el: ".const-media-content__block-sliders-3 .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
var constMediaContentSliders_4 = new Swiper(".constMediaContentSliders_4", {
    pagination: {
        el: ".const-media-content__block-sliders-4 .swiper-controls .swiper-pagination",
    },
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});




$('#constMediaBlockSliders_1').on('click', function() {
    $('.const-content__swipers').addClass('display-n')
    $('.const-content__swiper').addClass('display-n')
    $('.const-content__block-list').addClass('display-n')
    $('.const-content__block-banner').addClass('display-n')
    $('.const-content__block-title').addClass('display-n')
    $('.const-content__block-back').addClass('display-n')
    $('.const-content__block-text').addClass('display-n')

    $('.const-media-content__block-sliders-1').removeClass('display-n')
    $('.const-content').css('padding', '0px')
})
$('.const-media-content__block-sliders-1-back').on('click', function() {
    $('.const-content__swipers').removeClass('display-n')
    $('.const-content__swiper').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')

    $('.const-media-content__block-sliders-1').addClass('display-n')
    $('.const-content').css('padding', '100px 0 0 0')
})


$('#constMediaBlockSliders_2').on('click', function() {
    $('.const-content__swipers').addClass('display-n')
    $('.const-content__swiper').addClass('display-n')
    $('.const-content__block-list').addClass('display-n')
    $('.const-content__block-banner').addClass('display-n')
    $('.const-content__block-title').addClass('display-n')
    $('.const-content__block-back').addClass('display-n')
    $('.const-content__block-text').addClass('display-n')

    $('.const-media-content__block-sliders-2').removeClass('display-n')
    $('.const-content').css('padding', '0px')
})
$('.const-media-content__block-sliders-2-back').on('click', function() {
    $('.const-content__swipers').removeClass('display-n')
    $('.const-content__swiper').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')

    $('.const-media-content__block-sliders-2').addClass('display-n')
    $('.const-content').css('padding', '100px 0 0 0')
})

$('#constMediaBlockSliders_3').on('click', function() {
    $('.const-content__swipers').addClass('display-n')
    $('.const-content__swiper').addClass('display-n')
    $('.const-content__block-list').addClass('display-n')
    $('.const-content__block-banner').addClass('display-n')
    $('.const-content__block-title').addClass('display-n')
    $('.const-content__block-back').addClass('display-n')
    $('.const-content__block-text').addClass('display-n')

    $('.const-media-content__block-sliders-3').removeClass('display-n')
    $('.const-content').css('padding', '0px')
})
$('.const-media-content__block-sliders-3-back').on('click', function() {
    $('.const-content__swipers').removeClass('display-n')
    $('.const-content__swiper').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')

    $('.const-media-content__block-sliders-3').addClass('display-n')
    $('.const-content').css('padding', '100px 0 0 0')
})


$('#constMediaBlockSliders_4').on('click', function() {
    $('.const-content__swipers').addClass('display-n')
    $('.const-content__swiper').addClass('display-n')
    $('.const-content__block-list').addClass('display-n')
    $('.const-content__block-banner').addClass('display-n')
    $('.const-content__block-title').addClass('display-n')
    $('.const-content__block-back').addClass('display-n')
    $('.const-content__block-text').addClass('display-n')

    $('.const-media-content__block-sliders-4').removeClass('display-n')
    $('.const-content').css('padding', '0px')
})
$('.const-media-content__block-sliders-4-back').on('click', function() {
    $('.const-content__swipers').removeClass('display-n')
    $('.const-content__swiper').removeClass('display-n')
    $('.const-content__block-list').removeClass('display-n')
    $('.const-content__block-banner').removeClass('display-n')
    $('.const-content__block-title').removeClass('display-n')
    $('.const-content__block-back').removeClass('display-n')
    $('.const-content__block-text').removeClass('display-n')

    $('.const-media-content__block-sliders-4').addClass('display-n')
    $('.const-content').css('padding', '100px 0 0 0')
})








$('.const-media-content__block-sliders-1-banner-img-container').on('click', function() {
    $('.const-media-content__block-sliders-1-container').removeClass('display-n')
    $('.const-media-content__block-sliders-1-box').addClass('display-n')
    $('.const-media-content__block-sliders-1-heart').addClass('display-n')
    $('.const-media-content__block-sliders-1-cylinder').addClass('display-n')
    $('.const-media-content__block-sliders-1-basket').addClass('display-n')
});
$('.const-media-content__block-sliders-1-banner-img-box').on('click', function() {
    $('.const-media-content__block-sliders-1-box').removeClass('display-n')
    $('.const-media-content__block-sliders-1-container').addClass('display-n')
    $('.const-media-content__block-sliders-1-heart').addClass('display-n')
    $('.const-media-content__block-sliders-1-cylinder').addClass('display-n')
    $('.const-media-content__block-sliders-1-basket').addClass('display-n')
});
$('.const-media-content__block-sliders-1-banner-img-heart').on('click', function() {
    $('.const-media-content__block-sliders-1-heart').removeClass('display-n')
    $('.const-media-content__block-sliders-1-container').addClass('display-n')
    $('.const-media-content__block-sliders-1-box').addClass('display-n')
    $('.const-media-content__block-sliders-1-cylinder').addClass('display-n')
    $('.const-media-content__block-sliders-1-basket').addClass('display-n')
});
$('.const-media-content__block-sliders-1-banner-img-cylinder').on('click', function() {
    $('.const-media-content__block-sliders-1-cylinder').removeClass('display-n')
    $('.const-media-content__block-sliders-1-container').addClass('display-n')
    $('.const-media-content__block-sliders-1-box').addClass('display-n')
    $('.const-media-content__block-sliders-1-heart').addClass('display-n')
    $('.const-media-content__block-sliders-1-basket').addClass('display-n')
});
$('.const-media-content__block-sliders-1-banner-img-basket').on('click', function() {
    $('.const-media-content__block-sliders-1-basket').removeClass('display-n')
    $('.const-media-content__block-sliders-1-container').addClass('display-n')
    $('.const-media-content__block-sliders-1-box').addClass('display-n')
    $('.const-media-content__block-sliders-1-heart').addClass('display-n')
    $('.const-media-content__block-sliders-1-cylinder').addClass('display-n')
});
