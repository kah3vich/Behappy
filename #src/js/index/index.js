//! Открытие выпадающего списка 
$('.i-header__block-model-indexCity').on('click', function() {
    $('.i-header__block-model-indexCity-index__city-select').toggleClass('display-n')
    $('.i-header__block-model-indexCity-index__city-select').toggleClass('display-b')
});

//! Замена название города на выбранный
// $('#i-header-indexCity-1').on('click', function() {
//     let i_header_indexCity_1 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_1);
// });
// $('#i-header-indexCity-2').on('click', function() {
//     let i_header_indexCity_2 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_2);
// });
// $('#i-header-indexCity-3').on('click', function() {
//     let i_header_indexCity_3 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_3);
// });
// $('#i-header-indexCity-4').on('click', function() {
//     let i_header_indexCity_4 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_4);
// });
// $('#i-header-indexCity-5').on('click', function() {
//     let i_header_indexCity_5 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_5);
// });
// $('#i-header-indexCity-6').on('click', function() {
//     let i_header_indexCity_6 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_6);
// });
// $('#i-header-indexCity-7').on('click', function() {
//     let i_header_indexCity_7 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_7);
// });
// $('#i-header-indexCity-8').on('click', function() {
//     let i_header_indexCity_8 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_8);
// });
// $('#i-header-indexCity-9').on('click', function() {
//     let i_header_indexCity_9 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_9);
// });
// $('#i-header-indexCity-10').on('click', function() {
//     let i_header_indexCity_10 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_10);
// });
// $('#i-header-indexCity-11').on('click', function() {
//     let i_header_indexCity_11 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_11);
// });
// $('#i-header-indexCity-12').on('click', function() {
//     let i_header_indexCity_12 = $(this).text();
//     $('.i-header__block-model-indexCity-title').html(i_header_indexCity_12);
// });
// // to be continued...



$(function() {
    $('#indexCity').css('display', 'none')
    $('#indexCity').after('<div class="index__city-select-item"><div class="index__city-select-placeholder">Выберите город</div><div id="indexCityElement" class="index__city-select-wrapper display-n"></div></div>')
    let count = $('#indexCity').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#indexCity').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("index__city-select-element")
        newElementBlock.id = `index__city-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("indexCityElement").appendChild(newElementBlock);
        $(`#index__city-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#index__city-select-element-0').css('display', 'none')
    $('.index__city-select-item').on('click', function() {
        $('.index__city-select-wrapper').toggleClass('display-n')
    })
    $(".index__city-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.index__city-select-placeholder').html(valueElement)
        $('#indexCity option:nth-child(1)').val(valueElement)
        $('#indexCity option:nth-child(1)').html(valueElement)
    })
})
