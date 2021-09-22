//! Открытие фильтра 

$('.toy-content__block-text-filter-block').on('click', function() {
    $('.toy-content__block-text-filter-wrapper').toggleClass('display-n');
});


//! -------------------------------------------------------------------------------


//! Передача значение из input range

$('#toyRange-1').on('input',function () {
    $('.toy-content__block-text-filter-range-value-1').empty().append($(this).val());
});
$('#toyRange-2').on('input',function () {
    $('.toy-content__block-text-filter-range-value-2').empty().append($(this).val());
});

//! -------------------------------------------------------------------------------


//! Сброс всех input в фильтре 

const toyRange_1 = 1680;
const toyRange_2 = 16090;
$('.toy-content__block-text-filter-discard').on('click', function() {
    $('#checkbox_1').prop('checked', false);
    $('#checkbox_2').prop('checked', false);
    $('#checkbox_3').prop('checked', false);
    $('#checkbox_4').prop('checked', false);
    $('#checkbox_5').prop('checked', false);
    $('#checkbox_6').prop('checked', true);
    $('#toyRange-1').val(toyRange_1);
    $('.toy-content__block-text-filter-range-value-1').empty().append($('#toyRange-1').val());
    $('#toyRange-2').val(toyRange_2);
    $('.toy-content__block-text-filter-range-value-2').empty().append($('#toyRange-2').val());
});

//! -------------------------------------------------------------------------------
