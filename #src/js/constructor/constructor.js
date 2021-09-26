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
