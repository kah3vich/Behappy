//! Открытие фильтра 

$('.march-content__block-text-filter-block').on('click', function() {
    $('.march-content__block-text-filter-wrapper').toggleClass('display-n');
});

//! -------------------------------------------------------------------------------


//! Передача значение из input range

$('#marchRange-1').on('input',function () {
    $('.march-content__block-text-filter-range-value-1').empty().append($(this).val());
});
$('#marchRange-2').on('input',function () {
    $('.march-content__block-text-filter-range-value-2').empty().append($(this).val());
});

//! -------------------------------------------------------------------------------


//! Сброс всех input в фильтре 

const marchRange_1 = 1680;
const marchRange_2 = 16090;
$('.march-content__block-text-filter-discard').on('click', function() {
    $('#checkbox_1').prop('checked', false);
    $('#checkbox_2').prop('checked', false);
    $('#checkbox_3').prop('checked', false);
    $('#checkbox_4').prop('checked', false);
    $('#checkbox_5').prop('checked', false);
    $('#checkbox_6').prop('checked', true);
    $('#marchRange-1').val(marchRange_1);
    $('.march-content__block-text-filter-range-value-1').empty().append($('#marchRange-1').val());
    $('#marchRange-2').val(marchRange_2);
    $('.march-content__block-text-filter-range-value-2').empty().append($('#marchRange-2').val());
});

//! -------------------------------------------------------------------------------
