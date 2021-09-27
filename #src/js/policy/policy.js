//! Открытие дополнительного блока 


$('#headerProfilePolicyOpen').on('click', function() {
    $(this).addClass('display-n');
    $('#headerProfilePolicyAdd').removeClass('display-n');
    $('#headerProfilePolicyClose').removeClass('display-n');
    $('.header-profile__policy').addClass('height-100');
    $('.header-profile__policy-title').css('margin', '27px 0 0 0')
});
$('#headerProfilePolicyClose').on('click', function() {
    $(this).addClass('display-n');
    $('#headerProfilePolicyAdd').addClass('display-n');
    $('#headerProfilePolicyOpen').removeClass('display-n');
    $('.header-profile__policy').removeClass('height-100');
    $('.header-profile__policy-title').css('margin', '47px 0 0 0')
});


//! ------------------------------------------------------------------------------
