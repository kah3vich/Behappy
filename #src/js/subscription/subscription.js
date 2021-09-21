
// Поворот карты по двойному клику
$('.sub-content__block-card-1').on('click', function() {
	if($(this).find('.sub-content__block-card-1-content').hasClass('sub-content__block-card-1-flip')) { 
		$(this).find('.sub-content__block-card-1-content').removeClass('sub-content__block-card-1-flip')

	} else {
		$(this).find('.sub-content__block-card-1-content').addClass('sub-content__block-card-1-flip')
	}
});
$('.sub-content__block-card-2').on('click', function() {
	if($(this).find('.sub-content__block-card-2-content').hasClass('sub-content__block-card-2-flip')) { 
		$(this).find('.sub-content__block-card-2-content').removeClass('sub-content__block-card-2-flip')

	} else {
		$(this).find('.sub-content__block-card-2-content').addClass('sub-content__block-card-2-flip')
	}
});
$('.sub-content__block-card-3').on('click', function() {
	if($(this).find('.sub-content__block-card-3-content').hasClass('sub-content__block-card-3-flip')) { 
		$(this).find('.sub-content__block-card-3-content').removeClass('sub-content__block-card-3-flip')

	} else {
		$(this).find('.sub-content__block-card-3-content').addClass('sub-content__block-card-3-flip')
	}
});
$('.sub-content__block-card-4').on('click', function() {
	if($(this).find('.sub-content__block-card-4-content').hasClass('sub-content__block-card-4-flip')) { 
		$(this).find('.sub-content__block-card-4-content').removeClass('sub-content__block-card-4-flip')

	} else {
		$(this).find('.sub-content__block-card-4-content').addClass('sub-content__block-card-4-flip')
	}
});
$('.sub-content__block-card-5').on('click', function() {
	if($(this).find('.sub-content__block-card-5-content').hasClass('sub-content__block-card-5-flip')) { 
		$(this).find('.sub-content__block-card-5-content').removeClass('sub-content__block-card-5-flip')

	} else {
		$(this).find('.sub-content__block-card-5-content').addClass('sub-content__block-card-5-flip')
	}
});


// Поворот карты по ховеру
// $('.card-block').hover( function() {
// 	$(this).find('.card').addClass('flip')
// },
// function() {
// 	$(this).find('.card').removeClass('flip')
// })

$(function() {
	
	$('.sub-content__block-card-wrapper').draggable();
	
});