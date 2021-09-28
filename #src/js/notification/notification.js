$('#profileNotifBtnOpen').on('click', function() {
    $(this).addClass('display-n');
    $('#profileNotifBtnAdd').removeClass('display-n');
    $('#profileNotifBtnClose').removeClass('display-n');
    $('.header-profile__menu').css('height', '1130px');
    $('.header-profile__notif').css('height', '1150px');
});
$('#profileNotifBtnClose').on('click', function() {
    $(this).addClass('display-n');
    $('#profileNotifBtnAdd').addClass('display-n');
    $('#profileNotifBtnOpen').removeClass('display-n');
    $('.header-profile__menu').css('height', '985px');
    $('.header-profile__notif').css('height', '884px');
});
