//! Переворот карточек 

$('.sub-content__block-card-1').on('click', function() {
		$(this).find('.sub-content__block-card-1-content').addClass('sub-content__block-card-1-flip')
		$('.sub-content__block-card-2').find('.sub-content__block-card-2-content').removeClass('sub-content__block-card-2-flip')
		$('.sub-content__block-card-3').find('.sub-content__block-card-3-content').removeClass('sub-content__block-card-3-flip')
		$('.sub-content__block-card-4').find('.sub-content__block-card-4-content').removeClass('sub-content__block-card-4-flip')
		$('.sub-content__block-card-5').find('.sub-content__block-card-5-content').removeClass('sub-content__block-card-5-flip')
});
$(document).mouseup(function (e) {
    var container = $('.sub-content__block-card-wrapper');
    if (container.has(e.target).length === 0){
        $('.sub-content__block-card-1').find('.sub-content__block-card-1-content').removeClass('sub-content__block-card-1-flip')
    }
});


$('.sub-content__block-card-2').on('click', function() {
	$(this).find('.sub-content__block-card-2-content').addClass('sub-content__block-card-2-flip')
	$('.sub-content__block-card-1').find('.sub-content__block-card-1-content').removeClass('sub-content__block-card-1-flip')
	$('.sub-content__block-card-3').find('.sub-content__block-card-3-content').removeClass('sub-content__block-card-3-flip')
	$('.sub-content__block-card-4').find('.sub-content__block-card-4-content').removeClass('sub-content__block-card-4-flip')
	$('.sub-content__block-card-5').find('.sub-content__block-card-5-content').removeClass('sub-content__block-card-5-flip')
});
$(document).mouseup(function (e) {
	var container = $('.sub-content__block-card-wrapper');
	if (container.has(e.target).length === 0){
		$('.sub-content__block-card-2').find('.sub-content__block-card-2-content').removeClass('sub-content__block-card-2-flip')
	}
});


$('.sub-content__block-card-3').on('click', function() {
	$(this).find('.sub-content__block-card-3-content').addClass('sub-content__block-card-3-flip')
	$('.sub-content__block-card-2').find('.sub-content__block-card-2-content').removeClass('sub-content__block-card-2-flip')
	$('.sub-content__block-card-1').find('.sub-content__block-card-1-content').removeClass('sub-content__block-card-1-flip')
	$('.sub-content__block-card-4').find('.sub-content__block-card-4-content').removeClass('sub-content__block-card-4-flip')
	$('.sub-content__block-card-5').find('.sub-content__block-card-5-content').removeClass('sub-content__block-card-5-flip')
});
$(document).mouseup(function (e) {
	var container = $('.sub-content__block-card-wrapper');
	if (container.has(e.target).length === 0){
		$('.sub-content__block-card-3').find('.sub-content__block-card-3-content').removeClass('sub-content__block-card-3-flip')
	}
});


$('.sub-content__block-card-4').on('click', function() {
	$(this).find('.sub-content__block-card-4-content').addClass('sub-content__block-card-4-flip')
	$('.sub-content__block-card-2').find('.sub-content__block-card-2-content').removeClass('sub-content__block-card-2-flip')
	$('.sub-content__block-card-3').find('.sub-content__block-card-3-content').removeClass('sub-content__block-card-3-flip')
	$('.sub-content__block-card-1').find('.sub-content__block-card-1-content').removeClass('sub-content__block-card-1-flip')
	$('.sub-content__block-card-5').find('.sub-content__block-card-5-content').removeClass('sub-content__block-card-5-flip')
});
$(document).mouseup(function (e) {
	var container = $('.sub-content__block-card-wrapper');
	if (container.has(e.target).length === 0){
		$('.sub-content__block-card-4').find('.sub-content__block-card-4-content').removeClass('sub-content__block-card-4-flip')
	}
});


$('.sub-content__block-card-5').on('click', function() {
	$(this).find('.sub-content__block-card-5-content').addClass('sub-content__block-card-5-flip')
	$('.sub-content__block-card-2').find('.sub-content__block-card-2-content').removeClass('sub-content__block-card-2-flip')
	$('.sub-content__block-card-3').find('.sub-content__block-card-3-content').removeClass('sub-content__block-card-3-flip')
	$('.sub-content__block-card-4').find('.sub-content__block-card-4-content').removeClass('sub-content__block-card-4-flip')
	$('.sub-content__block-card-1').find('.sub-content__block-card-1-content').removeClass('sub-content__block-card-1-flip')
});
$(document).mouseup(function (e) {
	var container = $('.sub-content__block-card-wrapper');
	if (container.has(e.target).length === 0){
		$('.sub-content__block-card-5').find('.sub-content__block-card-5-content').removeClass('sub-content__block-card-5-flip')
	}
});


$(function() {
	
	$('.sub-content__block-card-wrapper').draggable();
	
});

//! -------------------------------------------------------------------------------------------------------------------------------------


//! Слайдер для мобильной версии

var subMediaSlider = new Swiper(".subMediaSlider", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
	breakpoints: {
        1125: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        800: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
		550: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
		0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        }
    }
});

//! -------------------------------------------------------------------------------------------------------------------------------------



//! Модальный функционал 


$('.sub-model-1__block-text-btns-pickup').on('click', function() {
	$(this).addClass('sub-model-1__block-text-btns-active')
	$('.sub-model-1__block-text-btns-delivery').removeClass('sub-model-1__block-text-btns-active')
});

$('.sub-model-1__block-text-btns-delivery').on('click', function() {
	$(this).addClass('sub-model-1__block-text-btns-active')
	$('.sub-model-1__block-text-btns-pickup').removeClass('sub-model-1__block-text-btns-active')
});


$('#subModelCheckItem-1').on('click', function() {
	$(this).addClass('sub-model-1__block-check-list-active')
	$('#subModelCheckItem-2').removeClass('sub-model-1__block-check-list-active')
});

$('#subModelCheckItem-2').on('click', function() {
	$(this).addClass('sub-model-1__block-check-list-active')
	$('#subModelCheckItem-1').removeClass('sub-model-1__block-check-list-active')
});


$('.sub-model-1__block-text-input-city').on('click', function() {
	$('.sub-model-1__block-text-input-city-select').toggleClass('display-n')
});

$('.sub-model-1__block-text-input-city-option-1').on('click', function() {
	let subModelCitySelect_1 = $(this).val()
	$('.sub-model-1__block-text-input-city input').val(subModelCitySelect_1)
});
$('.sub-model-1__block-text-input-city-option-2').on('click', function() {
	let subModelCitySelect_2 = $(this).val()
	$('.sub-model-1__block-text-input-city input').val(subModelCitySelect_2)
});
$('.sub-model-1__block-text-input-city-option-3').on('click', function() {
	let subModelCitySelect_3 = $(this).val()
	$('.sub-model-1__block-text-input-city input').val(subModelCitySelect_3)
});
$('.sub-model-1__block-text-input-city-option-4').on('click', function() {
	let subModelCitySelect_4 = $(this).val()
	$('.sub-model-1__block-text-input-city input').val(subModelCitySelect_4)
});


$('#subModelTimeItem-1').on('click', function() {
	$(this).addClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-2').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-3').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-4').removeClass('sub-model-1__block-text-time-active')
});
$('#subModelTimeItem-2').on('click', function() {
	$(this).addClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-1').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-3').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-4').removeClass('sub-model-1__block-text-time-active')
});
$('#subModelTimeItem-3').on('click', function() {
	$(this).addClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-2').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-1').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-4').removeClass('sub-model-1__block-text-time-active')
});
$('#subModelTimeItem-4').on('click', function() {
	$(this).addClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-2').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-3').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-1').removeClass('sub-model-1__block-text-time-active')
});


//! -------------------------------------------------------------------------------------------------------------------------------------


//! Кнопка - самовывоз 

$('.sub-model-1__block-text-btns-pickup').on('click', function() {
	$('.sub-model-1__block-check-call').addClass('active-n')
	$('.sub-model-1__block-text-inputs').addClass('active-n')
	$('.sub-model-1__block-text-addres').addClass('active-n')
	$('.sub-model-1__block-text-input-city').addClass('active-n')
	$('.sub-model-1__block-text-input-phones').addClass('active-n')
	$('.sub-model-1__block-text-input-names').addClass('active-n')
});

$('.sub-model-1__block-text-btns-delivery').on('click', function() {
	$('.sub-model-1__block-check-call').removeClass('active-n')
	$('.sub-model-1__block-text-inputs').addClass('active-n')
	$('.sub-model-1__block-text-addres').removeClass('active-n')
	$('.sub-model-1__block-text-input-city').addClass('active-n')
	$('.sub-model-1__block-text-input-phones').removeClass('active-n')
	$('.sub-model-1__block-text-input-names').removeClass('active-n')
});



function renderInputSubModel() {
    let countRenderInputSubModel = 0
    $('#subModelInputName').on('change', function() {
        if($(this).val() !== '') {
            countRenderInputSubModel++
        }
        console.log(countRenderInputSubModel)
        if(countRenderInputSubModel === 2) {
            $('.sub-model-1__block-check-call').removeClass('active-n')
			$('.sub-model-1__block-text-inputs').removeClass('active-n')
			$('.sub-model-1__block-text-addres').removeClass('active-n')
			$('.sub-model-1__block-text-input-city').removeClass('active-n')
			$('.sub-model-1__block-text-input-phones').removeClass('active-n')
			$('.sub-model-1__block-text-input-names').removeClass('active-n')
        }removeClass
    })
	$('#subModelInputPhone').on('change', function() {
        if($(this).val() !== '') {
            countRenderInputSubModel++
        }
        console.log(countRenderInputSubModel)
        if(countRenderInputSubModel === 2) {
            $('.sub-model-1__block-check-call').removeClass('active-n')
			$('.sub-model-1__block-text-inputs').removeClass('active-n')
			$('.sub-model-1__block-text-addres').removeClass('active-n')
			$('.sub-model-1__block-text-input-city').removeClass('active-n')
			$('.sub-model-1__block-text-input-phones').removeClass('active-n')
			$('.sub-model-1__block-text-input-names').removeClass('active-n')
        }removeClass
    })
    
}
renderInputSubModel()



//! -------------------------------------------------------------------------------------------------------------------------------------
