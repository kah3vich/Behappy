//! Слайдеры 

var sliderCatalogInfo = new Swiper(".sliderCatalogInfo", {
    loop: true,
    // cssMode: true,
    navigation: {
        nextEl: ".cat-info__block-slider .swiper-button-next",
        prevEl: ".cat-info__block-slider .swiper-button-prev",
    },
    pagination: {
        el: ".cat-info__block-slider .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: { 
        1700: { 
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1050: {
            slidesPerView: 3, 
            spaceBetween: 20, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 20, 
        }
    },
});

var swiper = new Swiper(".sliderCatalogAdd", {
    loop: true,
    pagination: {
        el: ".cat-add__block-slider .swiper-pagination",
    },
    breakpoints: { 
        1700: { 
            slidesPerView: 6, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 6, 
            spaceBetween: 30, 
        },
        1000: {
            slidesPerView: 3, 
            spaceBetween: 20, 
        },
        0: {
            slidesPerView: 3, 
            spaceBetween: 20, 
        }
    },
});

var collections_1 = new Swiper(".sliderCatalogCollections-1", {
    loop: true,
    navigation: {
        nextEl: ".cat-collections__block-slider-1 .swiper-button-next",
        prevEl: ".cat-collections__block-slider-1 .swiper-button-prev",
    },
    pagination: {
        el: ".cat-collections__block-slider-1 .swiper-pagination",
    },
    breakpoints: { 
        1700: { 
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1000: {
            slidesPerView: 3, 
            spaceBetween: 20, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 20, 
        }
    },
});

var collections_2 = new Swiper(".sliderCatalogCollections-2", {
    loop: true,
    navigation: {
        nextEl: ".cat-collections__block-slider-2 .swiper-button-next",
        prevEl: ".cat-collections__block-slider-2 .swiper-button-prev",
    },
    pagination: {
        el: ".cat-collections__block-slider-2 .swiper-pagination",
    },
    breakpoints: { 
        1700: { 
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 4, 
            spaceBetween: 30, 
        },
        1000: {
            slidesPerView: 3, 
            spaceBetween: 20, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 20, 
        }
    },
});

//! --------------------------------------------------------------------------------------------


//! События нажатия - открывающие дополнительные блоки 

$('.cat-collections__block-styled').on('click', function() {
    $(this).toggleClass('c-active')
    $('.cat-collections__block-list').toggleClass('c-display')
    $('.cat-add__block-slider .swiper-control').toggleClass('c-display-none')
});

$('.cat-collections__block-styled-1').on('click', function() {
    $(this).toggleClass('c-active')
    $('.cat-collections__block-list-1').toggleClass('c-display')
    $('.cat-collections__block-slider-1 .swiper-control-1 .swiper-pagination').toggleClass('c-display-none')
});

$('.cat-collections__block-styled-2').on('click', function() {
    $(this).toggleClass('c-active')
    $('.cat-collections__block-list-2').toggleClass('c-display')
    $('.cat-collections__block-slider-2 .swiper-control-2 .swiper-pagination').toggleClass('c-display-none')
});

//! --------------------------------------------------------------------------------------------


//! Star оценка товара 

$('#star-1').on('click', function() {
    $('.model-catalog__card-info-reviews-stars-num').html('1');
});
$('#star-2').on('click', function() {
    $('.model-catalog__card-info-reviews-stars-num').html('2');
});
$('#star-3').on('click', function() {
    $('.model-catalog__card-info-reviews-stars-num').html('3');
});
$('#star-4').on('click', function() {
    $('.model-catalog__card-info-reviews-stars-num').html('4');
});
$('#star-5').on('click', function() {
    $('.model-catalog__card-info-reviews-stars-num').html('5');
});


//! --------------------------------------------------------------------------------------------

// //! Выпадающий список - способы оплаты 

// $('select#calendar').each(function(){
//     var $this = $(this), numberOfOptions = $(this).children('option').length;

//     $this.addClass('calendar-select-hidden'); 
//     $this.wrap('<div class="calendar-select"></div>');
//     $this.after('<div class="calendar-select-styled"></div>');

//     var $styledSelect = $this.next('div.calendar-select-styled');
//     $styledSelect.text($this.children('option').eq(0).text());

//     var $list = $('<ul />', {
//         'class': 'calendar-select-options'
//     }).insertAfter($styledSelect);

//     for (var i = 0; i < numberOfOptions; i++) {
//         $('<li />', {
//             text: $this.children('option').eq(i).text(),
//             rel: $this.children('option').eq(i).val()
//         }).appendTo($list);
//     }

//     var $listItems = $list.children('li');

//     $styledSelect.click(function(e) {
//         e.stopPropagation();
//         $('div.calendar-select-styled.calendar-active').not(this).each(function(){
//             $(this).removeClass('calendar-active').next('ul.calendar-select-options').hide();
//         });
//         $(this).toggleClass('calendar-active').next('ul.calendar-select-options').toggle();
//     });

//     $listItems.click(function(e) {
//         e.stopPropagation();
//         $styledSelect.text($(this).text()).removeClass('calendar-active');
//         $this.val($(this).attr('rel'));
//         $list.hide();
//         //console.log($this.val());
//     });

//     $(document).click(function() {
//         $styledSelect.removeClass('calendar-active');
//         $list.hide();
//     });

// });

// //! --------------------------------------------------------------------------------------------



$('.model-catalog__card-info-calendar-select').on('click', function() {
    $('.model-catalog__card-info-calendar-select').toggleClass('model-catalog__card-info-calendar-select-active');
    $('.model-catalog__card-info-calendar-block').toggleClass('display-n');
});




var modelSlider = new Swiper(".modelSlider", {
    loop: true,
    simulateTouch:false,
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".model-catalog-slider .swiper-control .swiper-button-next",
        prevEl: ".model-catalog-slider .swiper-control .swiper-button-prev",
    },
});


var addModelSlider = new Swiper(".addModelSlider", {
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 15, 
    navigation: {
        nextEl: ".model-catalog__card-block-add-list .swiper-controls .swiper-button-next",
        prevEl: ".model-catalog__card-block-add-list .swiper-controls .swiper-button-prev",
    },
});


// const numberSteps = $('.quiz__step').length - 1;
// let disableButtons = false;
// const tick = '<div class="answer__tick"><svg width="14" height="14" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></div>'; 
// let thanks = '<div class="thanks"><div class="thanks__tick">✔ </div><h1 class="thanks__title">Thank you!</h1></div>';

// $('.answer__input').on('change', function(e) { 
 
//     if($(this).next().children('.answer__tick').length>0){
//       return false
//     }
//   $(this).next().append(tick)
// });


// $('.navigation__btn--right').click(function(e){
// let currentIndex = Number($('.quiz__step--current').attr('data-question'));
//   if($('.quiz__step--current input:checked').length == 0){
//      //console.log('input empty');
//      return false;
//  }
//   //console.log({'currentIndex': currentIndex, 'numberSteps': numberSteps-1})
//   if(currentIndex == numberSteps + 1 || disableButtons==true){
//     //console.log('last')
//     return false;
//   }
//   if(currentIndex + 1 == numberSteps + 1 ){
//     $(this).addClass('navigation__btn--disabled');
//   }
//   if(currentIndex == numberSteps){
//   $('.summary__item').remove();
//     $('.quiz__step:not(.quiz__summary)').each(function(index, item){
//       console.log(item)
//       let icon = $(item).children('.question__emoji').text()
//       let answer = $(item).children('.answer').find('input:checked').val();
//       let node = '<div class="summary__item"><div class="question__emoji">'+icon+'</div>'+answer+'</div>'
//       $('#summary').append(node)
//     })
//   }
//   const percentage = (currentIndex * 100)/ numberSteps;
//   $('.progress__inner').width(percentage+ '%');
//   console.log('input ok')
//   $('.quiz__step--current').hide('300');
//   $('.quiz__step--current').removeClass('quiz__step--current');
//   $('.quiz__step--'+(currentIndex+1)).show('300').addClass('quiz__step--current');
//   currentIndex = Number($('.quiz__step--current').attr('data-question'));
//    if(currentIndex > 1 ){
//     $('.navigation__btn--left').removeClass('navigation__btn--disabled');
//   }
// });
// /*
// function keypressEvent(e){
//     let key = e.which || e.keyCode;

//   if(key==65 || key==66){
//     $('.quiz__step--current input[data-char="'+key+'"]').prop('checked', true).change();
//     console.log($('.quiz__step--current input[data-char="'+key+'"]'))
//    // $('.quiz__step--current input[data-char="'+key+'"] + .answer__label').change();
//   }
// }
// */



// $('.navigation__btn--left').click(function(e){
// let currentIndex = Number($('.quiz__step--current').attr('data-question'));
 
//   console.log({'currentIndex': currentIndex, 'numberSteps': numberSteps-1})
//   if(currentIndex == 1 || disableButtons==true){
//     console.log('first')
//     $(this).addClass('navigation__btn--disabled');
//     return false;
//   }
 

//   $('.navigation__btn--right').removeClass('navigation__btn--disabled')

//   console.log('input ok')
//   $('.quiz__step--current').hide('300');
//   $('.quiz__step--current').removeClass('quiz__step--current');
//   $('.quiz__step--'+(currentIndex-1)).show('300').addClass('quiz__step--current');
//   currentIndex = Number($('.quiz__step--current').attr('data-question'));
//   if(currentIndex == 1 ){
//     $(this).addClass('navigation__btn--disabled');
//   }
//     const percentage = ((currentIndex-1)  * 100)/ numberSteps+1;
//   $('.progress__inner').width(percentage+ '%');
// $('.quiz__step--current').keyup(keypressEvent);
// });
// $('.submit').click(function(e){
//   e.preventDefault();
//   $('.quiz').remove();
//   $(thanks).appendTo('.container');
//   disableButtons=true;
//   $('.navigation__btn').addClass('navigation__btn--disabled')
// })
