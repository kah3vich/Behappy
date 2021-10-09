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





// $(function() {

//     let elementArrayConstructor = []

//     $('#constructorBtnItem-1-1').on('click', function() {
//         let constBannerRow_Item_1 = $(this).val()
//         elementArrayConstructor.push(constBannerRow_Item_1)
//         let constBannerRow_Item_1_Element = elementArrayConstructor[elementArrayConstructor.length - 1]
//         $(`#constBannerRow_Item_${elementArrayConstructor.length} img`).attr('src', `./img/constructor/${constBannerRow_Item_1_Element}.png`)
//         checkCountElementObjConstructor()
//     })
//     $('#constructorBtnItem-1-2').on('click', function() {
//         let constBannerRow_Item_2 = $(this).val()
//         elementArrayConstructor.push(constBannerRow_Item_2)
//         let constBannerRow_Item_2_Element = elementArrayConstructor[elementArrayConstructor.length - 1]
//         $(`#constBannerRow_Item_${elementArrayConstructor.length} img`).attr('src', `./img/constructor/${constBannerRow_Item_2_Element}.png`)
//         checkCountElementObjConstructor()
//     })
//     function checkCountElementObjConstructor() {
//         let countElementArrayConstructor = elementArrayConstructor.length;
//         if(countElementArrayConstructor == 1) {
//             $('#constBannerRow_Item_1').removeClass('display-n')
//         } else if(countElementArrayConstructor == 2) {
//             $('#constBannerRow_Item_2').removeClass('display-n')
//         } else if(countElementArrayConstructor == 3) {
//             $('#constBannerRow_Item_3').removeClass('display-n')
//         } else if(countElementArrayConstructor == 4) {
//             $('#constBannerRow_Item_4').removeClass('display-n')
//         } else if(countElementArrayConstructor == 5) {
//             $('#constBannerRow_Item_5').removeClass('display-n')
//         } else if(countElementArrayConstructor == 6) {
//             $('#constBannerRow_Item_6').removeClass('display-n')
//         } else if(countElementArrayConstructor == 7) {
//             $('#constBannerRow_Item_7').removeClass('display-n')
//         } else if(countElementArrayConstructor == 8) {
//             $('#constBannerRow_Item_8').removeClass('display-n')
//             $('#constBannerRow_Item_1 img').css('width', '90px')
//             $('#constBannerRow_Item_2 img').css('width', '90px')
//             $('#constBannerRow_Item_3 img').css('width', '90px')
//             $('#constBannerRow_Item_4 img').css('width', '90px')
//             $('#constBannerRow_Item_5 img').css('width', '90px')
//             $('#constBannerRow_Item_6 img').css('width', '90px')
//             $('#constBannerRow_Item_7 img').css('width', '90px')
//             $('#constBannerRow_Item_8 img').css('width', '90px')
//             $('.const-content__block-banner-row').css('margin', 'auto 0 0 0')
//         } else if(countElementArrayConstructor == 9) {
//             $('#constBannerRow_Item_9').removeClass('display-n')
//         } else if(countElementArrayConstructor == 10) {
//             $('#constBannerRow_Item_10').removeClass('display-n')
//         } else if(countElementArrayConstructor == 11) {
//             $('#constBannerRow_Item_11').removeClass('display-n')
//         } else if(countElementArrayConstructor == 12) {
//             $('#constBannerRow_Item_12').removeClass('display-n')
//             $('.const-content__block-banner-row').css('height', '180px')
//         } else if(countElementArrayConstructor == 13) {
//             $('#constBannerRow_Item_13').removeClass('display-n')
//         } else if(countElementArrayConstructor == 14) {
//             $('#constBannerRow_Item_14').removeClass('display-n')
//         } else if(countElementArrayConstructor == 15) {
//             $('#constBannerRow_Item_15').removeClass('display-n')
//         } else if(countElementArrayConstructor == 16) {
//             $('#constBannerRow_Item_16').removeClass('display-n')
//         } else if(countElementArrayConstructor == 17) {
//             $('#constBannerRow_Item_17').removeClass('display-n')
//         } else if(countElementArrayConstructor == 18) {
//             $('#constBannerRow_Item_18').removeClass('display-n')
//         } else if(countElementArrayConstructor == 19) {
//             $('#constBannerRow_Item_19').removeClass('display-n')
//         } else if(countElementArrayConstructor == 20) {
//             $('#constBannerRow_Item_20').removeClass('display-n')
//         } else if(countElementArrayConstructor == 21) {
//             $('#constBannerRow_Item_21').removeClass('display-n')
//         } else if(countElementArrayConstructor == 22) {
//             $('#constBannerRow_Item_22').removeClass('display-n')
//             $('.const-content__block-banner-row').css('height', '500px')
//         } else if(countElementArrayConstructor == 23) {
//             $('#constBannerRow_Item_23').removeClass('display-n')
//         } else if(countElementArrayConstructor == 24) {
//             $('#constBannerRow_Item_24').removeClass('display-n')
//         } else if(countElementArrayConstructor == 25) {
//             $('#constBannerRow_Item_25').removeClass('display-n')
//         } else if(countElementArrayConstructor == 26) {
//             $('#constBannerRow_Item_26').removeClass('display-n')
//         } else if(countElementArrayConstructor == 27) {
//             $('#constBannerRow_Item_27').removeClass('display-n')
//         } else if(countElementArrayConstructor == 28) {
//             $('#constBannerRow_Item_28').removeClass('display-n')
//         } else if(countElementArrayConstructor == 29) {
//             $('#constBannerRow_Item_29').removeClass('display-n')
//         } else if(countElementArrayConstructor == 30) {
//             $('#constBannerRow_Item_30').removeClass('display-n')
//         } else if(countElementArrayConstructor == 31) {
//             $('#constBannerRow_Item_31').removeClass('display-n')
//         } else if(countElementArrayConstructor == 32) {
//             $('#constBannerRow_Item_32').removeClass('display-n')
//         } else if(countElementArrayConstructor == 33) {
//             $('#constBannerRow_Item_33').removeClass('display-n')
//         } else if(countElementArrayConstructor == 34) {
//             $('#constBannerRow_Item_34').removeClass('display-n')
//         } else if(countElementArrayConstructor == 35) {
//             $('#constBannerRow_Item_35').removeClass('display-n')
//         } else if(countElementArrayConstructor == 36) {
//             $('#constBannerRow_Item_36').removeClass('display-n')
//         } else if(countElementArrayConstructor == 37) {
//             $('#constBannerRow_Item_37').removeClass('display-n')
//         } else if(countElementArrayConstructor == 38) {
//             $('#constBannerRow_Item_38').removeClass('display-n')
//         } else if(countElementArrayConstructor == 39) {
//             $('#constBannerRow_Item_39').removeClass('display-n')
//         } else if(countElementArrayConstructor == 40) {
//             $('#constBannerRow_Item_40').removeClass('display-n')
//         } else if(countElementArrayConstructor == 41) {
//             $('#constBannerRow_Item_41').removeClass('display-n')
//         } else if(countElementArrayConstructor == 42) {
//             $('#constBannerRow_Item_42').removeClass('display-n')
//         } else if(countElementArrayConstructor == 43) {
//             $('#constBannerRow_Item_43').removeClass('display-n')
//         } else if(countElementArrayConstructor == 44) {
//             $('#constBannerRow_Item_44').removeClass('display-n')
//         } else if(countElementArrayConstructor == 45) {
//             $('#constBannerRow_Item_45').removeClass('display-n')
//         } else if(countElementArrayConstructor == 46) {
//             $('#constBannerRow_Item_46').removeClass('display-n')
//         } else if(countElementArrayConstructor == 47) {
//             $('#constBannerRow_Item_47').removeClass('display-n')
//         } else if(countElementArrayConstructor == 48) {
//             $('#constBannerRow_Item_48').removeClass('display-n')
//         } else if(countElementArrayConstructor == 49) {
//             $('#constBannerRow_Item_49').removeClass('display-n')
//         } else if(countElementArrayConstructor == 50) {
//             $('#constBannerRow_Item_50').removeClass('display-n')
//         } else if(countElementArrayConstructor == 51) {
//             $('#constBannerRow_Item_51').removeClass('display-n')
//         }
//         console.log(elementArrayConstructor)
//     }
    
// })

// $('.const-content__swipers-list-item img').on('click', 'button', function() {
//     alert(1)
// })




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
    let id = 1
    countConstructorBtnItem_1_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_1_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_1_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


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
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------

//! Кнопка цветов 1.2

let countConstructorBtnItem_1_2 = 0
$('#constructorBtnItem-1-2').on('click', function() {
    let id = 2
    countConstructorBtnItem_1_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_1_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_1_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


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
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------

//! Кнопка цветов 1.3

let countConstructorBtnItem_1_3 = 0
$('#constructorBtnItem-1-3').on('click', function() {
    let id = 3
    countConstructorBtnItem_1_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_1_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_1_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


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
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


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

//! ------------------------------------------------------------------------------------------------------------------












function checkCountElementObjConstructor() {
    
    let countElementObjConstructor = document.getElementById('listConstructorBlock').getElementsByClassName('const-content__block-banner-row-item').length
    console.log(countElementObjConstructor)
    
    let countElementObjConstructorIllustrations = document.getElementById('listConstructorElementPay').getElementsByClassName('swiper-slide').length
    console.log(countElementObjConstructorIllustrations)

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
    } 
    if (countElementObjConstructor > 50) {
        $('.const-content__block button').attr('disabled', 'disabled')
        $('.const-content__block-sliders-1 button').removeAttr('disabled', 'disabled')
        $('.const-content__block-sliders-2 button').removeAttr('disabled', 'disabled')
        $('.const-content__block-sliders-3 button').removeAttr('disabled', 'disabled')
        $('.const-content__block-sliders-4 button').removeAttr('disabled', 'disabled')
    } else {
        $('.const-content__block button').removeAttr('disabled', 'disabled')
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
    mousewheel: true,
    keyboard: true,
});
