$(function() {
    $('.mono-content__block-items').addClass('display-n')
    for ( let i = 0; i < 25; i++) {
        $(`.mono-content__block-items:nth-child(${i})`).removeClass('display-n')
    }
});
$('.mono-content__block-add').on('click', function() {
    $(this).addClass('display-n')
    $('.mono-content__block-items').removeClass('display-n')
    $('.mono-content__block-close').removeClass('display-n')
});
$('.mono-content__block-close').on('click', function() {
    $(this).addClass('display-n')
    $('.mono-content__block-add').removeClass('display-n')
    $('.mono-content__block-items').addClass('display-n')
    for ( let i = 0; i < 25; i++) {
        $(`.mono-content__block-items:nth-child(${i})`).removeClass('display-n')
    }
});