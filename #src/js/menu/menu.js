//! Меню 

let t1 = new TimelineMax({ paused: true });

t1.to(".menu", 0.4, {
  right: "0%",
});
// t1.staggerFrom(".link", 0.4, { opacity: 0 }, 0.1, "-=0.2");
t1.reverse();
$(".menu-open").on("click", function () {
  t1.reversed(!t1.reversed());
});
$(".menu-close, .menu__block-title-close p").on("click", function () {
  t1.reversed(!t1.reversed());
});
$('.menu-open').on('click', function() {
    $('.header__block-list-1-item-catalog-block').addClass('display-n');
    $('.header__block-list-1-btn-title-catalog').removeClass('header__block-list-1-btn-active');
    $('.header__block-list-1-item-select-block').addClass('display-n');
    $('.header__block-list-2-item-create').removeClass('display-n');
    $('.header__block-list-2-item-florist').removeClass('display-n');
    $('.header__block-list-2-item-order').removeClass('display-n');
    $('.header__block-list-2-item-search').addClass('display-n');
})


//! --------------------------------------------------------------------------------------------

//! Корзина  

let b1 = new TimelineMax({ paused: true });

b1.to(".basket", 0.4, {
  right: "0wv",
});
// t1.staggerFrom(".link", 0.4, { opacity: 0 }, 0.1, "-=0.2");
b1.reverse();
$(".basket-open").on("click", function () {
    b1.reversed(!b1.reversed());
    $('.basket').toggleClass('display-n')
});
$(".basket__block-title-btn").on("click", function () {
    b1.reversed(!b1.reversed());
    $('.basket').toggleClass('display-n')
});

//! --------------------------------------------------------------------------------------------


//! --------------------------------------------------------------------------------------------

//! Пустая Корзина  

let b2 = new TimelineMax({ paused: true });

b2.to(".baskets", 0.4, {
  right: "0wv",
});
// t1.staggerFrom(".link", 0.4, { opacity: 0 }, 0.1, "-=0.2");
b2.reverse();
$(".baskets-open").on("click", function () {
    b2.reversed(!b2.reversed());
    $('.baskets').toggleClass('display-n')
});
$(".baskets__block-btn").on("click", function () {
    b2.reversed(!b2.reversed());
    $('.baskets').toggleClass('display-n')
});

//! --------------------------------------------------------------------------------------------


//! Выпадающий список выбора города

$('select#header').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('header-select-hidden'); 
    $this.wrap('<div class="header-select"></div>');
    $this.after('<div class="header-select-styled"></div>');

    var $styledSelect = $this.next('div.header-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'header-select-options'
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
        $('div.header-select-styled.header-active').not(this).each(function(){
            $(this).removeClass('header-active').next('ul.header-select-options').hide();
        });
        $(this).toggleClass('header-active').next('ul.header-select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('header-active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('header-active');
        $list.hide();
    });

});


//! --------------------------------------------------------------------------------------------


//! Выпадающий список выбора города ( media )

$('select#media-city').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('media-city-select-hidden'); 
    $this.wrap('<div class="media-city-select"></div>');
    $this.after('<div class="media-city-select-styled"></div>');

    var $styledSelect = $this.next('div.media-city-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'media-city-select-options'
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
        $('div.media-city-select-styled.media-city-active').not(this).each(function(){
            $(this).removeClass('media-city-active').next('ul.media-city-select-options').hide();
        });
        $(this).toggleClass('media-city-active').next('ul.media-city-select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('media-city-active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('media-city-active');
        $list.hide();
    });

});

//! --------------------------------------------------------------------------------------------


//! Выпадающий список выбора catalog ( media )

$('select#media-catalog').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('media-catalog-select-hidden'); 
    $this.wrap('<div class="media-catalog-select"></div>');
    $this.after('<div class="media-catalog-select-styled"></div>');

    var $styledSelect = $this.next('div.media-catalog-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'media-catalog-select-options'
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
        $('div.media-catalog-select-styled.media-catalog-active').not(this).each(function(){
            $(this).removeClass('media-catalog-active').next('ul.media-catalog-select-options').hide();
        });
        $(this).toggleClass('media-catalog-active').next('ul.media-catalog-select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('media-catalog-active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('media-catalog-active');
        $list.hide();
    });

});

//! --------------------------------------------------------------------------------------------



//! Поиск 

$('.header__block-menu-list-search').on('click', function(e) {
    $('.header__block-list-2-item-create').toggleClass('display-n');
    $('.header__block-list-2-item-florist').toggleClass('display-n');
    $('.header__block-list-2-item-order').toggleClass('display-n');
    $('.header__block-list-2-item-search').toggleClass('display-n');
    $('.header__block-list-1-item-select-block').addClass('display-n');
    $('.header__block-list-1-btn-title').removeClass('header__block-list-1-btn-active');
    $('.header__block-list-1-item-catalog-block').addClass('display-n');
    $('.header__block-list-1-btn-title-catalog').removeClass('header__block-list-1-btn-active');
    e.stopPropagation();
});



//! Выбор города - select 

$('.header__block-list-1-item-select').on('click', function() {
    $('.header__block-list-1-item-select-block').toggleClass('display-n');
    $('.header__block-list-1-btn-title-city').toggleClass('header__block-list-1-btn-active');
    $('.header__block-list-1-item-catalog-block').addClass('display-n');
    $('.header__block-list-2-item-create').removeClass('display-n');
    $('.header__block-list-2-item-florist').removeClass('display-n');
    $('.header__block-list-2-item-order').removeClass('display-n');
    $('.header__block-list-2-item-search').addClass('display-n');
});
$('#header-city-1').on('click', function() {
    let header_city_1 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_1);
});
$('#header-city-2').on('click', function() {
    let header_city_2 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_2);
});
$('#header-city-3').on('click', function() {
    let header_city_3 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_3);
});
$('#header-city-4').on('click', function() {
    let header_city_4 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_4);
});
$('#header-city-5').on('click', function() {
    let header_city_5 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_5);
});
$('#header-city-6').on('click', function() {
    let header_city_6 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_6);
});
$('#header-city-7').on('click', function() {
    let header_city_7 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_7);
});
$('#header-city-8').on('click', function() {
    let header_city_8 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_8);
});
$('#header-city-9').on('click', function() {
    let header_city_9 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_9);
});
$('#header-city-10').on('click', function() {
    let header_city_10 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_10);
});
$('#header-city-11').on('click', function() {
    let header_city_11 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_11);
});
$('#header-city-12').on('click', function() {
    let header_city_12 = $(this).text();
    $('.header__block-list-1-btn-title-city').html(header_city_12);
});

//! --------------------------------------------------------------------------------------------


//! Выбор каталога - catalog 

$('.header__block-list-1-item-catalog').on('click', function() {
    $('.header__block-list-1-item-catalog-block').toggleClass('display-n');
    $('.header__block-list-1-btn-title-catalog').toggleClass('header__block-list-1-btn-active');
    $('.header__block-list-1-item-select-block').addClass('display-n');
    $('.header__block-list-2-item-create').removeClass('display-n');
    $('.header__block-list-2-item-florist').removeClass('display-n');
    $('.header__block-list-2-item-order').removeClass('display-n');
    $('.header__block-list-2-item-search').addClass('display-n');
});

//! --------------------------------------------------------------------------------------------



//! Проверка на выбранной валюты  


$('.menu__block-title-currency-rus').on('click', function() {
    $(this).addClass('opacity-5')
    $('.menu__block-title-currency-usd').removeClass('opacity-5')
    $('.menu__block-title-currency-teng').removeClass('opacity-5')
});
$('.menu__block-title-currency-usd').on('click', function() {
    $(this).addClass('opacity-5')
    $('.menu__block-title-currency-rus').removeClass('opacity-5')
    $('.menu__block-title-currency-teng').removeClass('opacity-5')
});
$('.menu__block-title-currency-teng').on('click', function() {
    $(this).addClass('opacity-5')
    $('.menu__block-title-currency-usd').removeClass('opacity-5')
    $('.menu__block-title-currency-rus').removeClass('opacity-5')
});


//! --------------------------------------------------------------------------------------------



//! Проверка на выбранного языка  


$('.menu__block-title-language-rus').on('click', function() {
    $(this).addClass('opacity-5')
    $('.menu__block-title-language-eng').removeClass('opacity-5')
});
$('.menu__block-title-language-eng').on('click', function() {
    $(this).addClass('opacity-5')
    $('.menu__block-title-language-rus').removeClass('opacity-5')
});



//! --------------------------------------------------------------------------------------------




//! Мобильный версия выпадающего списка - выбор города 


$('.media-header__block-client-select').on('click', function() {
    $('.media-header__block-client-select-arrow').toggleClass('media-header__block-client-select-arrow-active')
    $('.media-header__block-client-select-wrapper').toggleClass('display-n')
});

$('#mediaMenuSelectItemCity-1').on('click', function() {
    let mediaMenuSelectItemCity_1 = $(this).text()
    $('.media-header__block-client-select-text').html(mediaMenuSelectItemCity_1)
});

$('#mediaMenuSelectItemCity-2').on('click', function() {
    let mediaMenuSelectItemCity_2 = $(this).text()
    $('.media-header__block-client-select-text').html(mediaMenuSelectItemCity_2)
});

$('#mediaMenuSelectItemCity-3').on('click', function() {
    let mediaMenuSelectItemCity_3 = $(this).text()
    $('.media-header__block-client-select-text').html(mediaMenuSelectItemCity_3)
});

$('#mediaMenuSelectItemCity-4').on('click', function() {
    let mediaMenuSelectItemCity_4 = $(this).text()
    $('.media-header__block-client-select-text').html(mediaMenuSelectItemCity_4)
});


//! --------------------------------------------------------------------------------------------




//! Мобильный версия выпадающего списка - выбор подборки


$('.media-header__block-contact-catalog').on('click', function() {
    $('.media-header__block-contact-catalog-arrow').toggleClass('media-header__block-contact-catalog-arrow-active')
    $('.media-header__block-contact-catalog-select').toggleClass('display-n')
});

$('#mediaMenuSelectItemCatalog-1').on('click', function() {
    let mediaMenuSelectItemCatalog_1 = $(this).text()
    $('.media-header__block-contact-catalog-text').html(mediaMenuSelectItemCatalog_1)
});
$('#mediaMenuSelectItemCatalog-2').on('click', function() {
    let mediaMenuSelectItemCatalog_2 = $(this).text()
    $('.media-header__block-contact-catalog-text').html(mediaMenuSelectItemCatalog_2)
});
$('#mediaMenuSelectItemCatalog-3').on('click', function() {
    let mediaMenuSelectItemCatalog_3 = $(this).text()
    $('.media-header__block-contact-catalog-text').html(mediaMenuSelectItemCatalog_3)
});
$('#mediaMenuSelectItemCatalog-4').on('click', function() {
    let mediaMenuSelectItemCatalog_4 = $(this).text()
    $('.media-header__block-contact-catalog-text').html(mediaMenuSelectItemCatalog_4)
});
$('#mediaMenuSelectItemCatalog-5').on('click', function() {
    let mediaMenuSelectItemCatalog_5 = $(this).text()
    $('.media-header__block-contact-catalog-text').html(mediaMenuSelectItemCatalog_5)
});
$('#mediaMenuSelectItemCatalog-6').on('click', function() {
    let mediaMenuSelectItemCatalog_6 = $(this).text()
    $('.media-header__block-contact-catalog-text').html(mediaMenuSelectItemCatalog_6)
});



//! --------------------------------------------------------------------------------------------



//! Модальное окно входа и регистрации для мобилки 


$('.media-header__block-client-account').on('click', function() {
    $('#blockMediaModelClient').removeClass('display-n')
});
$('.menu__block-title-client-media').on('click', function() {
    $('#blockMediaModelClient').removeClass('display-n')
});
$('.media-model-client__block-close').on('click', function() {
    $('.media-model-client').addClass('display-n')
});


//! -------------------------------------------------------------------------------------------



//! Открытие и закрытие мобильного меню 



$('.media-header__click').on('click', function() {
    $('.media-header__block').addClass('display-n')
    $('.media-header__stories').removeClass('display-n')
    $('.media-header').css('height', '110px')
});
$('.media-header__stories-close').on('click', function() {
    $('.media-header__block').removeClass('display-n')
    $('.media-header__stories').addClass('display-n')
    $('.media-header').css('height', '175px')
});



var menuMediaStories = new Swiper(".menuMediaStories", {
    loop: false,
    mousewheel: true,
    keyboard: true,
    // slidesPerView: 11,
    // spaceBetween: 15,
    breakpoints: {
        1220: {
            slidesPerView: 10,
            spaceBetween: 20
        },
        1170: {
            slidesPerView: 10,
            spaceBetween: 20
        },
        1130: {
            slidesPerView: 9,
            spaceBetween: 30
        },
        1100: {
            slidesPerView: 9,
            spaceBetween: 25
        },
        1080: {
            slidesPerView: 9,
            spaceBetween: 20
        },
        1060: {
            slidesPerView: 9,
            spaceBetween: 20
        },
        1030: {
            slidesPerView: 9,
            spaceBetween: 15
        },
        1000: {
            slidesPerView: 9,
            spaceBetween: 10
        },
        990: {
            slidesPerView: 9,
            spaceBetween: 25
        },
        980: {
            slidesPerView: 9,
            spaceBetween: 20
        },
        940: {
            slidesPerView: 8,
            spaceBetween: 30
        },
        915: {
            slidesPerView: 8,
            spaceBetween: 25
        },
        900: {
            slidesPerView: 8,
            spaceBetween: 20
        },
        870: {
            slidesPerView: 7,
            spaceBetween: 30
        },
        830: {
            slidesPerView: 7,
            spaceBetween: 25
        },
        810: {
            slidesPerView: 7,
            spaceBetween: 20
        },
        800: {
            slidesPerView: 7,
            spaceBetween: 15
        },
        780: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        760: {
            slidesPerView: 6,
            spaceBetween: 25,
        },
        740: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        720: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
        700: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        681: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        650: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
        610: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
        590: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        590: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        570: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        560: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        540: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        530: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        500: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        490: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        490: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        470: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        460: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        440: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        430: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        420: {
            slidesPerView: 3,
            spaceBetween: 37
        },
        415: {
            slidesPerView: 3,
            spaceBetween: 35
        },
        410: {
            slidesPerView: 3,
            spaceBetween: 33
        },
        400: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        390: {
            slidesPerView: 3,
            spaceBetween: 25
        },
        380: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        370: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        0: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});


//! --------------------------------------------------------------------------------------------



