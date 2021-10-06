$('.header-profile__burger').on('click', function() {
    $('.header-profile__menu-list').addClass('menu-profile-open')
});
$('.header-profile__menu-list-close').on('click', function() {
    $('.header-profile__menu-list').removeClass('menu-profile-open')
})