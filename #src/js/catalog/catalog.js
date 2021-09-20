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

//! Выпадающий список - способы оплаты 

$('select#calendar').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('calendar-select-hidden'); 
    $this.wrap('<div class="calendar-select"></div>');
    $this.after('<div class="calendar-select-styled"></div>');

    var $styledSelect = $this.next('div.calendar-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'calendar-select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.calendar-select-styled.calendar-active').not(this).each(function(){
            $(this).removeClass('calendar-active').next('ul.calendar-select-options').hide();
        });
        $(this).toggleClass('calendar-active').next('ul.calendar-select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('calendar-active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('calendar-active');
        $list.hide();
    });

});

//! --------------------------------------------------------------------------------------------

