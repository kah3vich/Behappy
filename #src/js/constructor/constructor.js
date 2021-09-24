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


//! Нажатие на блоки в каталогах 


$('#constListItem-1').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-1').toggleClass('display-n');
});
$('#constBlockSliderClose-1').on('click', function() {
    $('#constListItem-1').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-1').toggleClass('display-n');
});
$('#constBlockSliderColor-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-1-4').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-1-5').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-1-6').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-1-1').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов 


var constListSlider_1 = new Swiper(".constListSlider-1", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-1 .swiper-control-1 .swiper-button-next",
        prevEl: ".const-content__block-slider-1 .swiper-control-1 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для корзин 


var constListSliders_1 = new Swiper(".constListSliders-1", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-sliders-1 .swiper-controls-1 .swiper-button-next",
        prevEl: ".const-content__block-sliders-1 .swiper-controls-1 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------
