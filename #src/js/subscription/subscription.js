

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







$(function() {
	
	$('.sub-content__block-card-wrapper').draggable();
	
});