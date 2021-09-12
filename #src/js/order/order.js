
$('#radio_1').on('click', function() {
    if($("#radio_1").attr('checked', 'checked')) {
        $("#radio_1").addClass('red')
        if($('.block-2').hasClass('red')) {
            $('.block-2').removeClass('red')
            $('.block-1').addClass('red')
        }
    } 
});
$('#radio_2').on('click', function() {
    if($("#radio_2").attr('checked', 'checked')) {
    $("#radio_2").addClass('red')
        if($('.block-1').hasClass('red')) {
            $('.block-1').removeClass('red')
            $('.block-2').addClass('red')
        }
    } 
});