//! Открытие дополнительного блока 


$('#headerProfileOffersOpen').on('click', function() {
    $(this).addClass('display-n');
    $('#headerProfileOffersAdd').removeClass('display-n');
    $('#headerProfileOffersClose').removeClass('display-n');
    $('.header-profile__offers').addClass('height-100');
    $('.header-profile__offers-title').css('margin', '27px 0 0 0')
    if (window.innerWidth <= 1330) {
        $('.offers-wrapper .header-profile__menu').css('height', '990px')
    }
});
$('#headerProfileOffersClose').on('click', function() {
    $(this).addClass('display-n');
    $('#headerProfileOffersAdd').addClass('display-n');
    $('#headerProfileOffersOpen').removeClass('display-n');
    $('.header-profile__offers').removeClass('height-100');
    $('.header-profile__offers-title').css('margin', '47px 0 0 0')
    if (window.innerWidth <= 1330) {
        $('.offers-wrapper .header-profile__menu').css('height', '550px')
    }
});


//! ------------------------------------------------------------------------------