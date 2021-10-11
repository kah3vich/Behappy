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


//! Модальное окно авторизации 


$('#modelClientEntry').css('color', "#9a9a9a")

$('#modelClientRegistration').on('click', function() {
    $('.model-header__registration').removeClass('display-n')
    $('.model-header__entry').addClass('display-n')
    $(this).css('color', "#9a9a9a")
    $('#modelClientEntry').css('color', "#fff")
    $('.model-header__registration').css('height', '861px')
    $('.model-header__entry').css('height', '861px')
});
$('#modelClientEntry').on('click', function() {
    $('.model-header__entry').removeClass('display-n')
    $('.model-header__registration').addClass('display-n')
    $(this).css('color', "#9a9a9a")
    $('#modelClientRegistration').css('color', "#fff")
    $('.model-header__entry').css('height', '751px')
    $('.model-header__registration').css('height', '751px')
});

//! --------------------------------------------------------------------------------------------





//! Модальное окно авторизации 


$('#mediaModelClientEntry').css('color', "#9a9a9a")

$('#mediaModelClientRegistor').on('click', function() {
    $('.media-model-client__registor').removeClass('display-n')
    $('.media-model-client__entry').addClass('display-n')
    $(this).css('color', "#9a9a9a")
    $('#mediaModelClientEntry').css('color', "#fff")
    $('.media-model-client__registor').css('height', '861px')
    $('.media-model-client__entry').css('height', '861px')
});
$('#mediaModelClientEntry').on('click', function() {
    $('.media-model-client__entry').removeClass('display-n')
    $('.media-model-client__registor').addClass('display-n')
    $(this).css('color', "#9a9a9a")
    $('#mediaModelClientRegistor').css('color', "#fff")
    $('.media-model-client__entry').css('height', '751px')
    $('.media-model-client__registor').css('height', '751px')
});

//! --------------------------------------------------------------------------------------------

//! Открытие выпадающего списка 
$('.i-header__block-model-city').on('click', function() {
    $('.i-header__block-model-city-select').toggleClass('display-n')
    $('.i-header__block-model-city-select').toggleClass('display-b')
});

//! Замена название города на выбранный
$('#i-header-city-1').on('click', function() {
    let i_header_city_1 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_1);
});
$('#i-header-city-2').on('click', function() {
    let i_header_city_2 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_2);
});
$('#i-header-city-3').on('click', function() {
    let i_header_city_3 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_3);
});
$('#i-header-city-4').on('click', function() {
    let i_header_city_4 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_4);
});
$('#i-header-city-5').on('click', function() {
    let i_header_city_5 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_5);
});
$('#i-header-city-6').on('click', function() {
    let i_header_city_6 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_6);
});
$('#i-header-city-7').on('click', function() {
    let i_header_city_7 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_7);
});
$('#i-header-city-8').on('click', function() {
    let i_header_city_8 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_8);
});
$('#i-header-city-9').on('click', function() {
    let i_header_city_9 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_9);
});
$('#i-header-city-10').on('click', function() {
    let i_header_city_10 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_10);
});
$('#i-header-city-11').on('click', function() {
    let i_header_city_11 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_11);
});
$('#i-header-city-12').on('click', function() {
    let i_header_city_12 = $(this).text();
    $('.i-header__block-model-city-title').html(i_header_city_12);
});
// to be continued...


//! События нажатие - выбор доставки 

$('#pickup-ord').on('click', function() {
    $('.ord-pay__block-data-calls').removeClass('display-f')
    $('.ord-pay__block-data-calls').addClass('display-n')
    $('.ord-pay__block-data-call').removeClass('display-n')
    $('.ord-pay__block-data-call').addClass('display-f')
    $('.ord-pay__block-data-address').removeClass('ord-pay-mt')
    $('.ord-pay__block-data-address-street').removeClass('display-n')
    $('.ord-pay__block-data-address-home').removeClass('display-n')
    $('.ord-pay__block-data-address-porch').removeClass('display-n')
    $('.ord-pay__block-data-address-floor').removeClass('display-n')
    $('.ord-pay__block-data-address-apartment').removeClass('display-n')
    $('.ord-pay__block-data-ball').removeClass('display-n')
    $('.ord-pay__block-data-exactly').addClass('display-n')
    $('.ord-pay__block-data-call').addClass('display-n')
    $('.ord-pay__block-data-address-street input').prop('readonly', false);
    $('.ord-pay__block-data-address-street').removeClass('ord-pay__block-data-address-noact');
    $('.ord-pay__block-data-address-home  input').prop('readonly', false);
    $('.ord-pay__block-data-address-home').removeClass('ord-pay__block-data-address-noact');
    $('.ord-pay__block-data-address-porch input').prop('readonly', false);
    $('.ord-pay__block-data-address-porch').removeClass('ord-pay__block-data-address-noact');
    $('.ord-pay__block-data-address-floor input').prop('readonly', false);
    $('.ord-pay__block-data-address-floor').removeClass('ord-pay__block-data-address-noact');
    $('.ord-pay__block-data-address-apartment input').prop('readonly', false);
    $('.ord-pay__block-data-address-apartment').removeClass('ord-pay__block-data-address-noact');
});
$('#delivery-ord').on('click', function() {
    $('.ord-pay__block-data-calls').removeClass('display-n')
    $('.ord-pay__block-data-calls').addClass('display-f')
    $('.ord-pay__block-data-call').addClass('display-n')
    $('.ord-pay__block-data-call').removeClass('display-f')
    $('.ord-pay__block-data-address').addClass('ord-pay-mt')
    $('.ord-pay__block-data-address-street').addClass('ord-pay__block-data-address-noact')
    $('.ord-pay__block-data-address-home').addClass('ord-pay__block-data-address-noact')
    $('.ord-pay__block-data-address-porch').addClass('ord-pay__block-data-address-noact')
    $('.ord-pay__block-data-address-floor').addClass('ord-pay__block-data-address-noact')
    $('.ord-pay__block-data-address-apartment').addClass('ord-pay__block-data-address-noact')
    $('.ord-pay__block-data-ball').addClass('display-n')
    $('.ord-pay__block-data-exactly').removeClass('display-n')
    $('.ord-pay__block-data-call').removeClass('display-n')
    $('.ord-pay__block-data-address-street input').prop('readonly', true);
    $('.ord-pay__block-data-address-home  input').prop('readonly', true);
    $('.ord-pay__block-data-address-porch input').prop('readonly', true);
    $('.ord-pay__block-data-address-floor input').prop('readonly', true);
    $('.ord-pay__block-data-address-apartment input').prop('readonly', true);
    $('.ord-pay__block-data-address-street input').val('');
    $('.ord-pay__block-data-address-home  input').val('');
    $('.ord-pay__block-data-address-porch input').val('');
    $('.ord-pay__block-data-address-floor input').val('');
    $('.ord-pay__block-data-address-apartment input').val('');
    
});

//! --------------------------------------------------------------------------------------------




//! Проверка на заполненные поля в input 

function renderInputOrder() {
    let countRenderInputOrder = 0
    $('.ord-pay__block-data-contact-name input').on('change', function() {
        if($('.ord-pay__block-data-contact-name input').val() !== '') {
            countRenderInputOrder++
        }
        console.log(countRenderInputOrder)
        if(countRenderInputOrder === 4) {
            $('.ord-pay__block-data-address-street input').prop('readonly', false);
            $('.ord-pay__block-data-address-street').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-home  input').prop('readonly', false);
            $('.ord-pay__block-data-address-home').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-porch input').prop('readonly', false);
            $('.ord-pay__block-data-address-porch').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-floor input').prop('readonly', false);
            $('.ord-pay__block-data-address-floor').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-apartment input').prop('readonly', false);
            $('.ord-pay__block-data-address-apartment').removeClass('ord-pay__block-data-address-noact');
        }
    })
    $('.ord-pay__block-data-contact-phone input').on('change', function() {
        if($('.ord-pay__block-data-contact-phone input').val() !== '') {
            countRenderInputOrder++
        }
        console.log(countRenderInputOrder)
        if(countRenderInputOrder === 4) {
            $('.ord-pay__block-data-address-street input').prop('readonly', false);
            $('.ord-pay__block-data-address-street').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-home  input').prop('readonly', false);
            $('.ord-pay__block-data-address-home').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-porch input').prop('readonly', false);
            $('.ord-pay__block-data-address-porch').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-floor input').prop('readonly', false);
            $('.ord-pay__block-data-address-floor').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-apartment input').prop('readonly', false);
            $('.ord-pay__block-data-address-apartment').removeClass('ord-pay__block-data-address-noact');
        }
    })
    $('.ord-pay__block-data-calls-names input').on('change', function() {
        if($('.ord-pay__block-data-calls-names input').val() !== '') {
            countRenderInputOrder++
        }
        console.log(countRenderInputOrder)
        if(countRenderInputOrder === 4) {
            $('.ord-pay__block-data-address-street input').prop('readonly', false);
            $('.ord-pay__block-data-address-street').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-home  input').prop('readonly', false);
            $('.ord-pay__block-data-address-home').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-porch input').prop('readonly', false);
            $('.ord-pay__block-data-address-porch').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-floor input').prop('readonly', false);
            $('.ord-pay__block-data-address-floor').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-apartment input').prop('readonly', false);
            $('.ord-pay__block-data-address-apartment').removeClass('ord-pay__block-data-address-noact');
        }
    })
    $('.ord-pay__block-data-calls-phones input').on('change', function() {
        if($('.ord-pay__block-data-calls-phones input').val() !== '') {
            countRenderInputOrder++
        }
        console.log(countRenderInputOrder)
        if(countRenderInputOrder === 4) {
            $('.ord-pay__block-data-address-street input').prop('readonly', false);
            $('.ord-pay__block-data-address-street').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-home  input').prop('readonly', false);
            $('.ord-pay__block-data-address-home').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-porch input').prop('readonly', false);
            $('.ord-pay__block-data-address-porch').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-floor input').prop('readonly', false);
            $('.ord-pay__block-data-address-floor').removeClass('ord-pay__block-data-address-noact');
            $('.ord-pay__block-data-address-apartment input').prop('readonly', false);
            $('.ord-pay__block-data-address-apartment').removeClass('ord-pay__block-data-address-noact');
        }
    })
    // $('.ord-pay__block-data-address-date').on('change', function() {
    //     if($('.ord-pay__block-data-calls-phones input').val() !== '') {
    //         countRenderInputOrder++
    //     }
    //     console.log(countRenderInputOrder)
    //     if(countRenderInputOrder === 5) {
    //         $('.ord-pay__block-data-address-street input').prop('readonly', false);
    //         $('.ord-pay__block-data-address-street').removeClass('ord-pay__block-data-address-noact');
    //         $('.ord-pay__block-data-address-home  input').prop('readonly', false);
    //         $('.ord-pay__block-data-address-home').removeClass('ord-pay__block-data-address-noact');
    //         $('.ord-pay__block-data-address-porch input').prop('readonly', false);
    //         $('.ord-pay__block-data-address-porch').removeClass('ord-pay__block-data-address-noact');
    //         $('.ord-pay__block-data-address-floor input').prop('readonly', false);
    //         $('.ord-pay__block-data-address-floor').removeClass('ord-pay__block-data-address-noact');
    //         $('.ord-pay__block-data-address-apartment input').prop('readonly', false);
    //         $('.ord-pay__block-data-address-apartment').removeClass('ord-pay__block-data-address-noact');
    //     }
    // })
    
}
renderInputOrder()


//! --------------------------------------------------------------------------------------------


//! Выпадающий список - выбора города

$('select#ord').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('ord-select-hidden'); 
    $this.wrap('<div class="ord-select"></div>');
    $this.after('<div class="ord-select-styled"></div>');

    var $styledSelect = $this.next('div.ord-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'ord-select-options'
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
        $('div.ord-select-styled.ord-active').not(this).each(function(){
            $(this).removeClass('ord-active').next('ul.ord-select-options').hide();
        });
        $(this).toggleClass('ord-active').next('ul.ord-select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('ord-active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('ord-active');
        $list.hide();
    });

});

//! --------------------------------------------------------------------------------------------


//! Выпадающий список - способы оплаты 

$('select#pay').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('pay-select-hidden'); 
    $this.wrap('<div class="pay-select"></div>');
    $this.after('<div class="pay-select-styled"></div>');

    var $styledSelect = $this.next('div.pay-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'pay-select-options'
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
        $('div.pay-select-styled.pay-active').not(this).each(function(){
            $(this).removeClass('pay-active').next('ul.pay-select-options').hide();
        });
        $(this).toggleClass('pay-active').next('ul.pay-select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('pay-active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('pay-active');
        $list.hide();
    });

});

//! --------------------------------------------------------------------------------------------



$('.ord-pay__block-data-card-pay').on('click', function() {
    $(this).toggleClass('ord-pay__block-data-card-pay-active');
    $('.ord-pay__block-data-card-form').toggleClass('display-n')
});



$('.order-model__block-link').on('click', function() {
    $('.order-model__block-description').removeClass('display-n')
});
$('.order-model__block-description-back').on('click', function() {
    $('.order-model__block-description').addClass('display-n')
});




$('.ord-pay__block-data-where-yes').on('click', function() {
    $('.ord-pay__block-data-btn').attr('data-bs-target', '#modelOrderSuburb')
});
$('.ord-pay__block-data-where-no').on('click', function() {
    $('.ord-pay__block-data-btn').attr('data-bs-target', '#modelOrderCity')
});


$('#datepickerOrder tbody').on('click', function() {
    $('.ord-pay__block-data-address-date input').val()
    console.log($('#datepickerOrder').val())
});

$('.ord-pay__block-data-address-model-close').on('click', function() {
    let orderAdrressDateModel = $('#datepickerOrder').val()
    $('.ord-pay__block-data-address-date input').val(orderAdrressDateModel)
});




//! Выпадающий список - сортировка 

$('select#sort').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('sort-select-hidden'); 
    $this.wrap('<div class="sort-select"></div>');
    $this.after('<div class="sort-select-styled"></div>');

    var $styledSelect = $this.next('div.sort-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'sort-select-options'
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
        $('div.sort-select-styled.sort-active').not(this).each(function(){
            $(this).removeClass('sort-active').next('ul.sort-select-options').hide();
        });
        $(this).toggleClass('sort-active').next('ul.sort-select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('sort-active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('sort-active');
        $list.hide();
    });

});

//! --------------------------------------------------------------------------------------------


//! Открытие и закрытие дополнительного каталога новостей 

$('.new-content__block-next').on('click', function() {
    $('.new-content__block-table-add').removeClass('display-n')
    $('.new-content__block-next').addClass('display-n')
    $('.new-content__block-prev').removeClass('display-n')
}); 
$('.new-content__block-prev').on('click', function() {
    $('.new-content__block-table-add').addClass('display-n')
    $('.new-content__block-next').removeClass('display-n')
    $('.new-content__block-prev').addClass('display-n')
}); 

//! --------------------------------------------------------------------------------------------

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


$('.model-catalog__card-info-calendar-select').on('click', function() {
    $('.model-catalog__card-info-calendar-select').toggleClass('model-catalog__card-info-calendar-select-active');
    $('.model-catalog__card-info-calendar-block').toggleClass('display-n');
});




var modelSlider = new Swiper(".modelSlider", {
    simulateTouch: false,
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

var recModelSlider = new Swiper(".recModelSlider", {
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 15, 
    navigation: {
        nextEl: ".model-catalog__card-block-rec-list .swiper-controls .swiper-button-next",
        prevEl: ".model-catalog__card-block-rec-list .swiper-controls .swiper-button-prev",
    },
});


var modelSliderToy = new Swiper(".modelSliderToy", {
    simulateTouch: false,
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".model-toy-slider .swiper-controls .swiper-button-next",
        prevEl: ".model-toy-slider .swiper-controls .swiper-button-prev",
    },
});



var modelToyWrapperSlider = new Swiper(".modelToyWrapperSlider", {
    slidesPerView: 3, 
    spaceBetween: 15, 
    navigation: {
        nextEl: ".model-toy__block-wrapper-slider .swiper-control .swiper-button-next",
        prevEl: ".model-toy__block-wrapper-slider .swiper-control .swiper-button-prev",
    },
    breakpoints: {
        700: {
            slidesPerView: 3,
            spaceBetweenSlides: 15
        },
        500: {
            slidesPerView: 2,
            spaceBetweenSlides: 15
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        }
    }
});

$('.model-toy__block-info-calendar-btn').on('click', function() {
    $('.model-toy__block-info-calendar-item').toggleClass('display-n')
    $('.model-toy__block-info-calendar-btn').toggleClass('model-toy__block-info-calendar-btn-active')
});


var modelSliderBallons = new Swiper(".modelSliderBallons", {
    simulateTouch: false,
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".model-ballons-slider .swiper-controls .swiper-button-next",
        prevEl: ".model-ballons-slider .swiper-controls .swiper-button-prev",
    },
});



var modelBallonsWrapperSlider = new Swiper(".modelBallonsWrapperSlider", {
    slidesPerView: 3, 
    spaceBetween: 15, 
    navigation: {
        nextEl: ".model-ballons__block-wrapper-slider .swiper-control .swiper-button-next",
        prevEl: ".model-ballons__block-wrapper-slider .swiper-control .swiper-button-prev",
    },
    breakpoints: {
        800: {
            slidesPerView: 3,
            spaceBetweenSlides: 15
        },
        630: {
            slidesPerView: 2,
            spaceBetweenSlides: 15
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        }
    }
});

$('.model-ballons__block-info-calendar-btn').on('click', function() {
    $('.model-ballons__block-info-calendar-item').toggleClass('display-n')
    $('.model-ballons__block-info-calendar-btn').toggleClass('model-ballons__block-info-calendar-btn-active')
});

$('.model-ballons__block-wrapper-banner').on('click', function() {
    $('.model-photo-1').removeClass('display-n')
});
$('.model-ballons__block-wrapper-slider-item').on('click', function() {
    $('.model-photo-1').removeClass('display-n')
});
$('.model-photo-1__block-close').on('click', function() {
    $('.model-photo-1').addClass('display-n')
});

$('.model-catalog__card-block-banner').on('click', function() {
    $('.model-photo-2').removeClass('display-n')
});
$('.model-catalog__card-block-banners').on('click', function() {
    $('.model-photo-2').removeClass('display-n')
});
$('.model-photo-2__block-close').on('click', function() {
    $('.model-photo-2').addClass('display-n')
});

$('.model-toy__block-wrapper-banner').on('click', function() {
    $('.model-photo-3').removeClass('display-n')
});
$('.model-photo-3__block-close').on('click', function() {
    $('.model-photo-3').addClass('display-n')
});




var modelBallonsPhotoSlider_1 = new Swiper(".modelBallonsPhotoSlider-1", {
    slidesPerView: 1, 
    spaceBetween: 30,
    navigation: {
        nextEl: ".model-photo-1__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".model-photo-1__block-slider .swiper-controls .swiper-button-prev",
    },
});

var modelBallonsPhotoSlider_2 = new Swiper(".modelBallonsPhotoSlider-2", {
    slidesPerView: 1, 
    spaceBetween: 30,
    navigation: {
        nextEl: ".model-photo-2__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".model-photo-2__block-slider .swiper-controls .swiper-button-prev",
    },
});

var modelBallonsPhotoSlider_3 = new Swiper(".modelBallonsPhotoSlider-3", {
    slidesPerView: 1, 
    spaceBetween: 30,
    navigation: {
        nextEl: ".model-photo-3__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".model-photo-3__block-slider .swiper-controls .swiper-button-prev",
    },
});



$('.header__block-menu-contact-car').on('click', function() {
    $('.model-notice').removeClass('display-n')
    setTimeout(function() {
        $('.model-notice').addClass('display-n')
    }, 7000)
});
$('.model-notice__block-close').on('click', function() {
    $('.model-notice').addClass('display-n')
});


var modelSliderBannersCatalog = new Swiper(".modelSliderBannersCatalog", {
    slidesPerView: 3, 
    spaceBetween: 15,
    navigation: {
        nextEl: ".model-catalog__card-block-banners .swiper-controls .swiper-button-next",
        prevEl: ".model-catalog__card-block-banners .swiper-controls .swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        650: {
            slidesPerView: 3,
            spaceBetweenSlides: 15
        },
        500: {
            slidesPerView: 2,
            spaceBetweenSlides: 15
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        }
    }
});

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


//! Открытие дополнительного блока 


$('.march-content__block-add').on('click', function() {
    $(this).addClass('display-n')
    $('.march-content__block-collection').removeClass('display-n')
    $('.march-content__block-close').removeClass('display-n')
});

$('.march-content__block-close').on('click', function() {
    $(this).addClass('display-n')
    $('.march-content__block-add').removeClass('display-n')
    $('.march-content__block-collection').addClass('display-n')
});


//! -------------------------------------------------------------------------------


//! Передача значение в тег из input-range 

$('#quiz-range').on('input',function () {
    $('#quiz-result-range').empty().append($(this).val());
});

//! ----------------------------------------------------------------


//! Квиз кнопки для переключения 

$('.quiz-content__block-whom-next').on('click', function() {
    $('.quiz-content__block-whom').addClass('display-n');
    $('.quiz-content__block-type').removeClass('display-n');
});

$('.quiz-content__block-type-prev').on('click', function() {
    $('.quiz-content__block-whom').removeClass('display-n');
    $('.quiz-content__block-type').addClass('display-n');
});

$('.quiz-content__block-type-next').on('click', function() {
    $('.quiz-content__block-type').addClass('display-n');
    $('.quiz-content__block-shade').removeClass('display-n');
});

$('.quiz-content__block-shade-prev').on('click', function() {
    $('.quiz-content__block-type').removeClass('display-n');
    $('.quiz-content__block-shade').addClass('display-n');
});

$('.quiz-content__block-shade-next').on('click', function() {
    $('.quiz-content__block-color').removeClass('display-n');
    $('.quiz-content__block-shade').addClass('display-n');
});

$('.quiz-content__block-color-prev').on('click', function() {
    $('.quiz-content__block-color').addClass('display-n');
    $('.quiz-content__block-shade').removeClass('display-n');
});

$('.quiz-content__block-color-next').on('click', function() {
    $('.quiz-content__block-color').addClass('display-n');
    $('.quiz-content__block-range').removeClass('display-n');
});

$('.quiz-content__block-range-prev').on('click', function() {
    $('.quiz-content__block-color').removeClass('display-n');
    $('.quiz-content__block-range').addClass('display-n');
});

$('.quiz-content__block-range-next').on('click', function() {
    $('.quiz-content__block-add').removeClass('display-n');
    $('.quiz-content__block-range').addClass('display-n');
});
$('.quiz-content__block-add-prev').on('click', function() {
    $('.quiz-content__block-range').removeClass('display-n');
    $('.quiz-content__block-add').addClass('display-n');
});
$('.quiz-content__block-add-next').on('click', function() {
    $('.quiz-content__block-add').addClass('display-n');
    $('.ord-quiz').removeClass('display-n');
    $('.quiz-content').css('padding', '0')
});
$('.quiz-content__block-add-text').on('click', function() {
    $('.quiz-content__block-add').addClass('display-n');
    $('.ord-quiz').removeClass('display-n');
    $('.quiz-content').css('padding', '0')
});



//! ----------------------------------------------------------------


//! События нажатие - выбор доставки 

$('#pickups').on('click', function() {
    $('.ord-quiz__block-data-calls').removeClass('display-f')
    $('.ord-quiz__block-data-calls').addClass('display-n')
    $('.ord-quiz__block-data-call').removeClass('display-n')
    $('.ord-quiz__block-data-call').addClass('display-f')
    $('.ord-quiz__block-data-address').removeClass('ord-quiz-mt')
    $('.ord-quiz__block-data-address-street').removeClass('display-n')
    $('.ord-quiz__block-data-address-home').removeClass('display-n')
    $('.ord-quiz__block-data-address-porch').removeClass('display-n')
    $('.ord-quiz__block-data-address-floor').removeClass('display-n')
    $('.ord-quiz__block-data-address-apartment').removeClass('display-n')
    $('.ord-quiz__block-data-ball').removeClass('display-n')
    $('.ord-quiz__block-data-exactly').addClass('display-n')
    $('.ord-quiz__block-data-call').addClass('display-n')
    $('.ord-quiz__block-data-address-street input').prop('readonly', false);
    $('.ord-quiz__block-data-address-street').removeClass('ord-quiz__block-data-address-noact');
    $('.ord-quiz__block-data-address-home  input').prop('readonly', false);
    $('.ord-quiz__block-data-address-home').removeClass('ord-quiz__block-data-address-noact');
    $('.ord-quiz__block-data-address-porch input').prop('readonly', false);
    $('.ord-quiz__block-data-address-porch').removeClass('ord-quiz__block-data-address-noact');
    $('.ord-quiz__block-data-address-floor input').prop('readonly', false);
    $('.ord-quiz__block-data-address-floor').removeClass('ord-quiz__block-data-address-noact');
    $('.ord-quiz__block-data-address-apartment input').prop('readonly', false);
    $('.ord-quiz__block-data-address-apartment').removeClass('ord-quiz__block-data-address-noact');
});
$('#deliverys').on('click', function() {
    $('.ord-quiz__block-data-calls').removeClass('display-n')
    $('.ord-quiz__block-data-calls').addClass('display-f')
    $('.ord-quiz__block-data-call').addClass('display-n')
    $('.ord-quiz__block-data-call').removeClass('display-f')
    $('.ord-quiz__block-data-address').addClass('ord-quiz-mt')
    $('.ord-quiz__block-data-address-street').addClass('ord-quiz__block-data-address-noact')
    $('.ord-quiz__block-data-address-home').addClass('ord-quiz__block-data-address-noact')
    $('.ord-quiz__block-data-address-porch').addClass('ord-quiz__block-data-address-noact')
    $('.ord-quiz__block-data-address-floor').addClass('ord-quiz__block-data-address-noact')
    $('.ord-quiz__block-data-address-apartment').addClass('ord-quiz__block-data-address-noact')
    $('.ord-quiz__block-data-ball').addClass('display-n')
    $('.ord-quiz__block-data-exactly').removeClass('display-n')
    $('.ord-quiz__block-data-call').removeClass('display-n')
    $('.ord-quiz__block-data-address-street input').prop('readonly', true);
    $('.ord-quiz__block-data-address-home  input').prop('readonly', true);
    $('.ord-quiz__block-data-address-porch input').prop('readonly', true);
    $('.ord-quiz__block-data-address-floor input').prop('readonly', true);
    $('.ord-quiz__block-data-address-apartment input').prop('readonly', true);
    $('.ord-quiz__block-data-address-street input').val('');
    $('.ord-quiz__block-data-address-home  input').val('');
    $('.ord-quiz__block-data-address-porch input').val('');
    $('.ord-quiz__block-data-address-floor input').val('');
    $('.ord-quiz__block-data-address-apartment input').val('');
    
});

//! --------------------------------------------------------------------------------------------




//! Проверка на заполненные поля в input 

function renderInputOrderQuiz() {
    let countRenderInputOrderQuiz = 0
    $('.ord-quiz__block-data-contact-name input').on('change', function() {
        if($('.ord-quiz__block-data-contact-name input').val() !== '') {
            countRenderInputOrderQuiz++
        }
        if(countRenderInputOrderQuiz === 4) {
            $('.ord-quiz__block-data-address-street input').prop('readonly', false);
            $('.ord-quiz__block-data-address-street').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-home  input').prop('readonly', false);
            $('.ord-quiz__block-data-address-home').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-porch input').prop('readonly', false);
            $('.ord-quiz__block-data-address-porch').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-floor input').prop('readonly', false);
            $('.ord-quiz__block-data-address-floor').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-apartment input').prop('readonly', false);
            $('.ord-quiz__block-data-address-apartment').removeClass('ord-quiz__block-data-address-noact');
        }
    })
    $('.ord-quiz__block-data-contact-phone input').on('change', function() {
        if($('.ord-quiz__block-data-contact-phone input').val() !== '') {
            countRenderInputOrderQuiz++
        }
        if(countRenderInputOrderQuiz === 4) {
            $('.ord-quiz__block-data-address-street input').prop('readonly', false);
            $('.ord-quiz__block-data-address-street').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-home  input').prop('readonly', false);
            $('.ord-quiz__block-data-address-home').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-porch input').prop('readonly', false);
            $('.ord-quiz__block-data-address-porch').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-floor input').prop('readonly', false);
            $('.ord-quiz__block-data-address-floor').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-apartment input').prop('readonly', false);
            $('.ord-quiz__block-data-address-apartment').removeClass('ord-quiz__block-data-address-noact');
        }
    })
    $('.ord-quiz__block-data-calls-names input').on('change', function() {
        if($('.ord-quiz__block-data-calls-names input').val() !== '') {
            countRenderInputOrderQuiz++
        }
        if(countRenderInputOrderQuiz === 4) {
            $('.ord-quiz__block-data-address-street input').prop('readonly', false);
            $('.ord-quiz__block-data-address-street').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-home  input').prop('readonly', false);
            $('.ord-quiz__block-data-address-home').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-porch input').prop('readonly', false);
            $('.ord-quiz__block-data-address-porch').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-floor input').prop('readonly', false);
            $('.ord-quiz__block-data-address-floor').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-apartment input').prop('readonly', false);
            $('.ord-quiz__block-data-address-apartment').removeClass('ord-quiz__block-data-address-noact');
        }
    })
    $('.ord-quiz__block-data-calls-phones input').on('change', function() {
        if($('.ord-quiz__block-data-calls-phones input').val() !== '') {
            countRenderInputOrderQuiz++
        }
        if(countRenderInputOrderQuiz === 4) {
            $('.ord-quiz__block-data-address-street input').prop('readonly', false);
            $('.ord-quiz__block-data-address-street').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-home  input').prop('readonly', false);
            $('.ord-quiz__block-data-address-home').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-porch input').prop('readonly', false);
            $('.ord-quiz__block-data-address-porch').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-floor input').prop('readonly', false);
            $('.ord-quiz__block-data-address-floor').removeClass('ord-quiz__block-data-address-noact');
            $('.ord-quiz__block-data-address-apartment input').prop('readonly', false);
            $('.ord-quiz__block-data-address-apartment').removeClass('ord-quiz__block-data-address-noact');
        }
    })
    // $('.ord-quiz__block-data-address-date').on('change', function() {
    //     if($('.ord-quiz__block-data-calls-phones input').val() !== '') {
    //         countRenderInputOrderQuiz++
    //     }
    //     if(countRenderInputOrderQuiz === 5) {
    //         $('.ord-quiz__block-data-address-street input').prop('readonly', false);
    //         $('.ord-quiz__block-data-address-street').removeClass('ord-quiz__block-data-address-noact');
    //         $('.ord-quiz__block-data-address-home  input').prop('readonly', false);
    //         $('.ord-quiz__block-data-address-home').removeClass('ord-quiz__block-data-address-noact');
    //         $('.ord-quiz__block-data-address-porch input').prop('readonly', false);
    //         $('.ord-quiz__block-data-address-porch').removeClass('ord-quiz__block-data-address-noact');
    //         $('.ord-quiz__block-data-address-floor input').prop('readonly', false);
    //         $('.ord-quiz__block-data-address-floor').removeClass('ord-quiz__block-data-address-noact');
    //         $('.ord-quiz__block-data-address-apartment input').prop('readonly', false);
    //         $('.ord-quiz__block-data-address-apartment').removeClass('ord-quiz__block-data-address-noact');
    //     }
    // })
    
}
renderInputOrderQuiz()


//! --------------------------------------------------------------------------------------------


//! Выпадающий список - выбора города

$('select#quizCity').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('ord-select-hidden'); 
    $this.wrap('<div class="ord-select"></div>');
    $this.after('<div class="ord-select-styled"></div>');

    var $styledSelect = $this.next('div.ord-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'ord-select-options'
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
        $('div.ord-select-styled.ord-active').not(this).each(function(){
            $(this).removeClass('ord-active').next('ul.ord-select-options').hide();
        });
        $(this).toggleClass('ord-active').next('ul.ord-select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('ord-active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('ord-active');
        $list.hide();
    });

});

//! --------------------------------------------------------------------------------------------


//! Выпадающий список - способы оплаты 

$('select#quiz').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('quiz-select-hidden'); 
    $this.wrap('<div class="quiz-select"></div>');
    $this.after('<div class="quiz-select-styled"></div>');

    var $styledSelect = $this.next('div.quiz-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'quiz-select-options'
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
        $('div.quiz-select-styled.quiz-active').not(this).each(function(){
            $(this).removeClass('quiz-active').next('ul.quiz-select-options').hide();
        });
        $(this).toggleClass('quiz-active').next('ul.quiz-select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('quiz-active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('quiz-active');
        $list.hide();
    });

});

//! --------------------------------------------------------------------------------------------



$('.ord-quiz__block-data-card-quiz').on('click', function() {
    $(this).toggleClass('ord-quiz__block-data-card-quiz-active');
    $('.ord-quiz__block-data-card-form').toggleClass('display-n')
});



//! Слайдер в дополнительном блоке к квизу - 1


var quizContentAddSlider_1 = new Swiper(".quizContentAddSlider-1", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-1 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-1 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-1 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-1').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-1').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-1').on('click', function() {
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});



//! --------------------------------------------------------------------------------------------


//! Слайдер в дополнительном блоке к квизу - 2


var quizContentAddSlider_2 = new Swiper(".quizContentAddSlider-2", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-2 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-2 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-2 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-2').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-2').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-2').on('click', function() {
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});


//! --------------------------------------------------------------------------------------------

//! Слайдер в дополнительном блоке к квизу - 3


var quizContentAddSlider_3 = new Swiper(".quizContentAddSlider-3", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-3 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-3 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-3 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-3').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-3').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-3').on('click', function() {
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});


//! --------------------------------------------------------------------------------------------


//! Слайдер в дополнительном блоке к квизу - 4


var quizContentAddSlider_4 = new Swiper(".quizContentAddSlider-4", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-4 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-4 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-4 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-4').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-4').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-4').on('click', function() {
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});


//! --------------------------------------------------------------------------------------------


//! Слайдер в дополнительном блоке к квизу - 5


var quizContentAddSlider_5 = new Swiper(".quizContentAddSlider-5", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-5 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-5 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-5 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-5').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-5').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-5').on('click', function() {
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});


//! --------------------------------------------------------------------------------------------


//! Слайдер в дополнительном блоке к квизу - 6


var quizContentAddSlider_6 = new Swiper(".quizContentAddSlider-6", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-6 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-6 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-6 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-6').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-6').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-6').on('click', function() {
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});


//! --------------------------------------------------------------------------------------------


//! Слайдер в дополнительном блоке к квизу - 7


var quizContentAddSlider_7 = new Swiper(".quizContentAddSlider-7", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-7 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-7 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-7 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-7').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-7').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-7').on('click', function() {
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});


//! --------------------------------------------------------------------------------------------



//! Слайдер в дополнительном блоке к квизу - 8


var quizContentAddSlider_8 = new Swiper(".quizContentAddSlider-8", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-8 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-8 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-8 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-8').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-8').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-8').on('click', function() {
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});


//! --------------------------------------------------------------------------------------------


//! Слайдер в дополнительном блоке к квизу - 9


var quizContentAddSlider_9 = new Swiper(".quizContentAddSlider-9", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-9 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-9 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-9 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-9').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-9').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-9').on('click', function() {
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});


//! --------------------------------------------------------------------------------------------


//! Слайдер в дополнительном блоке к квизу - 10


var quizContentAddSlider_10 = new Swiper(".quizContentAddSlider-10", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-10 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-10 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-10 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-10').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-10').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-10').on('click', function() {
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});


//! --------------------------------------------------------------------------------------------



//! Слайдер в дополнительном блоке к квизу - 11


var quizContentAddSlider_11 = new Swiper(".quizContentAddSlider-11", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-11 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-11 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-11 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-11').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-11').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-11').on('click', function() {
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});


//! --------------------------------------------------------------------------------------------


//! Слайдер в дополнительном блоке к квизу - 12


var quizContentAddSlider_12 = new Swiper(".quizContentAddSlider-12", {
    slidesPerView: 4, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".quiz-content__block-add-slider-12 .swiper-controls .swiper-button-next",
        prevEl: ".quiz-content__block-add-slider-12 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".quiz-content__block-add-slider-12 .swiper-controls .swiper-pagination",
    },
    breakpoints: {
        1370: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        1110: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        710: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
    }
});

$('#quizContentBlockAdd-12').on('click', function() {
    $('.quiz-content__block-add').addClass('quiz-add-h')
    $('#quizContentBlockSliderAdd-12').toggleClass('display-n')
    $('#quizContentBlockSliderAdd-2').addClass('display-n')
    $('#quizContentBlockSliderAdd-3').addClass('display-n')
    $('#quizContentBlockSliderAdd-4').addClass('display-n')
    $('#quizContentBlockSliderAdd-5').addClass('display-n')
    $('#quizContentBlockSliderAdd-6').addClass('display-n')
    $('#quizContentBlockSliderAdd-7').addClass('display-n')
    $('#quizContentBlockSliderAdd-8').addClass('display-n')
    $('#quizContentBlockSliderAdd-9').addClass('display-n')
    $('#quizContentBlockSliderAdd-10').addClass('display-n')
    $('#quizContentBlockSliderAdd-11').addClass('display-n')
    $('#quizContentBlockSliderAdd-1').addClass('display-n')
});
$('#quizContentBlockSliderAddClose-12').on('click', function() {
    $('#quizContentBlockSliderAdd-12').addClass('display-n')
    $('.quiz-content__block-add').removeClass('quiz-add-h')
});


//! --------------------------------------------------------------------------------------------



//! Получение значение в input date из модального окна 


$('.ord-quiz__block-data-address-date-model-close').on('click', function() {
    let quizOrderDataCalendarInput = $('#datepickerOrderQuiz').val()
    $('.ord-quiz__block-data-address-date input').val(quizOrderDataCalendarInput)
});


//! --------------------------------------------------------------------------------------------

//! Проверка - доставки довара 

$('.ord-quiz__block-data-where-yes').on('click', function() {
    $('.ord-quiz__block-data-btn').attr('data-bs-target', '#modelOrderSuburb')
});
$('.ord-quiz__block-data-where-no').on('click', function() {
    $('.ord-quiz__block-data-btn').attr('data-bs-target', '#modelOrderCity')
});

//! ---------------------------------------------------------------------------------------------


// $(function() {
//     $('.quiz-content__block-add-wrapper-item').on('click', function() {
//         if(window.screen.width >= 920) {
//             $('.quiz-content__block-add-prev').css('top', '1578px')
//             $('.quiz-content__block-add-next').css('top', '1578px')
//         } else if (window.screen.width >= 650) {
//             $('.quiz-content__block-add-prev').css('top', '1580px')
//             $('.quiz-content__block-add-next').css('top', '1580px')
//         }
//     })
// })

//! Переворот карточек 

$('.sub-content__block-card-1').on('click', function() {
		$(this).find('.sub-content__block-card-1-content').addClass('sub-content__block-card-1-flip')
		$('.sub-content__block-card-2').find('.sub-content__block-card-2-content').removeClass('sub-content__block-card-2-flip')
		$('.sub-content__block-card-3').find('.sub-content__block-card-3-content').removeClass('sub-content__block-card-3-flip')
		$('.sub-content__block-card-4').find('.sub-content__block-card-4-content').removeClass('sub-content__block-card-4-flip')
		$('.sub-content__block-card-5').find('.sub-content__block-card-5-content').removeClass('sub-content__block-card-5-flip')
});
$(document).mouseup(function (e) {
    var container = $('.sub-content__block-card-wrapper');
    if (container.has(e.target).length === 0){
        $('.sub-content__block-card-1').find('.sub-content__block-card-1-content').removeClass('sub-content__block-card-1-flip')
    }
});


$('.sub-content__block-card-2').on('click', function() {
	$(this).find('.sub-content__block-card-2-content').addClass('sub-content__block-card-2-flip')
	$('.sub-content__block-card-1').find('.sub-content__block-card-1-content').removeClass('sub-content__block-card-1-flip')
	$('.sub-content__block-card-3').find('.sub-content__block-card-3-content').removeClass('sub-content__block-card-3-flip')
	$('.sub-content__block-card-4').find('.sub-content__block-card-4-content').removeClass('sub-content__block-card-4-flip')
	$('.sub-content__block-card-5').find('.sub-content__block-card-5-content').removeClass('sub-content__block-card-5-flip')
});
$(document).mouseup(function (e) {
	var container = $('.sub-content__block-card-wrapper');
	if (container.has(e.target).length === 0){
		$('.sub-content__block-card-2').find('.sub-content__block-card-2-content').removeClass('sub-content__block-card-2-flip')
	}
});


$('.sub-content__block-card-3').on('click', function() {
	$(this).find('.sub-content__block-card-3-content').addClass('sub-content__block-card-3-flip')
	$('.sub-content__block-card-2').find('.sub-content__block-card-2-content').removeClass('sub-content__block-card-2-flip')
	$('.sub-content__block-card-1').find('.sub-content__block-card-1-content').removeClass('sub-content__block-card-1-flip')
	$('.sub-content__block-card-4').find('.sub-content__block-card-4-content').removeClass('sub-content__block-card-4-flip')
	$('.sub-content__block-card-5').find('.sub-content__block-card-5-content').removeClass('sub-content__block-card-5-flip')
});
$(document).mouseup(function (e) {
	var container = $('.sub-content__block-card-wrapper');
	if (container.has(e.target).length === 0){
		$('.sub-content__block-card-3').find('.sub-content__block-card-3-content').removeClass('sub-content__block-card-3-flip')
	}
});


$('.sub-content__block-card-4').on('click', function() {
	$(this).find('.sub-content__block-card-4-content').addClass('sub-content__block-card-4-flip')
	$('.sub-content__block-card-2').find('.sub-content__block-card-2-content').removeClass('sub-content__block-card-2-flip')
	$('.sub-content__block-card-3').find('.sub-content__block-card-3-content').removeClass('sub-content__block-card-3-flip')
	$('.sub-content__block-card-1').find('.sub-content__block-card-1-content').removeClass('sub-content__block-card-1-flip')
	$('.sub-content__block-card-5').find('.sub-content__block-card-5-content').removeClass('sub-content__block-card-5-flip')
});
$(document).mouseup(function (e) {
	var container = $('.sub-content__block-card-wrapper');
	if (container.has(e.target).length === 0){
		$('.sub-content__block-card-4').find('.sub-content__block-card-4-content').removeClass('sub-content__block-card-4-flip')
	}
});


$('.sub-content__block-card-5').on('click', function() {
	$(this).find('.sub-content__block-card-5-content').addClass('sub-content__block-card-5-flip')
	$('.sub-content__block-card-2').find('.sub-content__block-card-2-content').removeClass('sub-content__block-card-2-flip')
	$('.sub-content__block-card-3').find('.sub-content__block-card-3-content').removeClass('sub-content__block-card-3-flip')
	$('.sub-content__block-card-4').find('.sub-content__block-card-4-content').removeClass('sub-content__block-card-4-flip')
	$('.sub-content__block-card-1').find('.sub-content__block-card-1-content').removeClass('sub-content__block-card-1-flip')
});
$(document).mouseup(function (e) {
	var container = $('.sub-content__block-card-wrapper');
	if (container.has(e.target).length === 0){
		$('.sub-content__block-card-5').find('.sub-content__block-card-5-content').removeClass('sub-content__block-card-5-flip')
	}
});


$(function() {
	
	$('.sub-content__block-card-wrapper').draggable();
	
});

//! -------------------------------------------------------------------------------------------------------------------------------------


//! Слайдер для мобильной версии

var subMediaSlider = new Swiper(".subMediaSlider", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
	breakpoints: {
        1125: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        },
        800: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
		550: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
		0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        }
    }
});

//! -------------------------------------------------------------------------------------------------------------------------------------



//! Модальный функционал 


$('.sub-model-1__block-text-btns-pickup').on('click', function() {
	$(this).addClass('sub-model-1__block-text-btns-active')
	$('.sub-model-1__block-text-btns-delivery').removeClass('sub-model-1__block-text-btns-active')
});

$('.sub-model-1__block-text-btns-delivery').on('click', function() {
	$(this).addClass('sub-model-1__block-text-btns-active')
	$('.sub-model-1__block-text-btns-pickup').removeClass('sub-model-1__block-text-btns-active')
});


$('#subModelCheckItem-1').on('click', function() {
	$(this).addClass('sub-model-1__block-check-list-active')
	$('#subModelCheckItem-2').removeClass('sub-model-1__block-check-list-active')
});

$('#subModelCheckItem-2').on('click', function() {
	$(this).addClass('sub-model-1__block-check-list-active')
	$('#subModelCheckItem-1').removeClass('sub-model-1__block-check-list-active')
});


$('.sub-model-1__block-text-input-city').on('click', function() {
	$('.sub-model-1__block-text-input-city-select').toggleClass('display-n')
});

$('.sub-model-1__block-text-input-city-option-1').on('click', function() {
	let subModelCitySelect_1 = $(this).val()
	$('.sub-model-1__block-text-input-city input').val(subModelCitySelect_1)
});
$('.sub-model-1__block-text-input-city-option-2').on('click', function() {
	let subModelCitySelect_2 = $(this).val()
	$('.sub-model-1__block-text-input-city input').val(subModelCitySelect_2)
});
$('.sub-model-1__block-text-input-city-option-3').on('click', function() {
	let subModelCitySelect_3 = $(this).val()
	$('.sub-model-1__block-text-input-city input').val(subModelCitySelect_3)
});
$('.sub-model-1__block-text-input-city-option-4').on('click', function() {
	let subModelCitySelect_4 = $(this).val()
	$('.sub-model-1__block-text-input-city input').val(subModelCitySelect_4)
});


$('#subModelTimeItem-1').on('click', function() {
	$(this).addClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-2').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-3').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-4').removeClass('sub-model-1__block-text-time-active')
});
$('#subModelTimeItem-2').on('click', function() {
	$(this).addClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-1').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-3').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-4').removeClass('sub-model-1__block-text-time-active')
});
$('#subModelTimeItem-3').on('click', function() {
	$(this).addClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-2').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-1').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-4').removeClass('sub-model-1__block-text-time-active')
});
$('#subModelTimeItem-4').on('click', function() {
	$(this).addClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-2').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-3').removeClass('sub-model-1__block-text-time-active')
	$('#subModelTimeItem-1').removeClass('sub-model-1__block-text-time-active')
});


//! -------------------------------------------------------------------------------------------------------------------------------------


//! Кнопка - самовывоз 

$('.sub-model-1__block-text-btns-pickup').on('click', function() {
	$('.sub-model-1__block-check-call').addClass('active-n')
	$('.sub-model-1__block-text-inputs').addClass('active-n')
	$('.sub-model-1__block-text-addres').addClass('active-n')
	$('.sub-model-1__block-text-input-city').addClass('active-n')
	$('.sub-model-1__block-text-input-phones').addClass('active-n')
	$('.sub-model-1__block-text-input-names').addClass('active-n')
});

$('.sub-model-1__block-text-btns-delivery').on('click', function() {
	$('.sub-model-1__block-check-call').removeClass('active-n')
	$('.sub-model-1__block-text-inputs').addClass('active-n')
	$('.sub-model-1__block-text-addres').removeClass('active-n')
	$('.sub-model-1__block-text-input-city').addClass('active-n')
	$('.sub-model-1__block-text-input-phones').removeClass('active-n')
	$('.sub-model-1__block-text-input-names').removeClass('active-n')
});



function renderInputSubModel() {
    let countRenderInputSubModel = 0
    $('#subModelInputName').on('change', function() {
        if($(this).val() !== '') {
            countRenderInputSubModel++
        }
        console.log(countRenderInputSubModel)
        if(countRenderInputSubModel === 2) {
            $('.sub-model-1__block-check-call').removeClass('active-n')
			$('.sub-model-1__block-text-inputs').removeClass('active-n')
			$('.sub-model-1__block-text-addres').removeClass('active-n')
			$('.sub-model-1__block-text-input-city').removeClass('active-n')
			$('.sub-model-1__block-text-input-phones').removeClass('active-n')
			$('.sub-model-1__block-text-input-names').removeClass('active-n')
        }removeClass
    })
	$('#subModelInputPhone').on('change', function() {
        if($(this).val() !== '') {
            countRenderInputSubModel++
        }
        console.log(countRenderInputSubModel)
        if(countRenderInputSubModel === 2) {
            $('.sub-model-1__block-check-call').removeClass('active-n')
			$('.sub-model-1__block-text-inputs').removeClass('active-n')
			$('.sub-model-1__block-text-addres').removeClass('active-n')
			$('.sub-model-1__block-text-input-city').removeClass('active-n')
			$('.sub-model-1__block-text-input-phones').removeClass('active-n')
			$('.sub-model-1__block-text-input-names').removeClass('active-n')
        }removeClass
    })
    
}
renderInputSubModel()



//! -------------------------------------------------------------------------------------------------------------------------------------


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



//! Открытие дополнительного блока 



$('.toy-content__block-open').on('click', function() {
    $('.toy-content__block-collection').removeClass('display-n')
    $('.toy-content__block-close').removeClass('display-n')
    $('.toy-content__block-open').addClass('display-n')
});

$('.toy-content__block-close').on('click', function() {
    $('.toy-content__block-collection').addClass('display-n')
    $('.toy-content__block-close').addClass('display-n')
    $('.toy-content__block-open').removeClass('display-n')
});



//! -------------------------------------------------------------------------------



//! Нажатие на элемент каталога - 1 

$('#urgListItem_1_img').on('click', function() {
    $('#urgListItem_1_color').removeClass('display-n');
    $('#urgListItem_1_block').removeClass('display-n');
    $('#urgListItem_1_close').removeClass('display-n');
    $('#urgListItem_1_img').addClass('display-n');
    $('#urgListItem_1_text').addClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_2_color').addClass('display-n');
    $('#urgListItem_2_block').addClass('display-n');
    $('#urgListItem_2_close').addClass('display-n');
    $('#urgListItem_2_img').removeClass('display-n');
    $('#urgListItem_2_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_3_color').addClass('display-n');
    $('#urgListItem_3_block').addClass('display-n');
    $('#urgListItem_3_close').addClass('display-n');
    $('#urgListItem_3_img').removeClass('display-n');
    $('#urgListItem_3_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_4_color').addClass('display-n');
    $('#urgListItem_4_block').addClass('display-n');
    $('#urgListItem_4_close').addClass('display-n');
    $('#urgListItem_4_img').removeClass('display-n');
    $('#urgListItem_4_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_5_color').addClass('display-n');
    $('#urgListItem_5_block').addClass('display-n');
    $('#urgListItem_5_close').addClass('display-n');
    $('#urgListItem_5_img').removeClass('display-n');
    $('#urgListItem_5_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_6_color').addClass('display-n');
    $('#urgListItem_6_block').addClass('display-n');
    $('#urgListItem_6_close').addClass('display-n');
    $('#urgListItem_6_img').removeClass('display-n');
    $('#urgListItem_6_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_7_color').addClass('display-n');
    $('#urgListItem_7_block').addClass('display-n');
    $('#urgListItem_7_close').addClass('display-n');
    $('#urgListItem_7_img').removeClass('display-n');
    $('#urgListItem_7_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_8_color').addClass('display-n');
    $('#urgListItem_8_block').addClass('display-n');
    $('#urgListItem_8_close').addClass('display-n');
    $('#urgListItem_8_img').removeClass('display-n');
    $('#urgListItem_8_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_9_color').addClass('display-n');
    $('#urgListItem_9_block').addClass('display-n');
    $('#urgListItem_9_close').addClass('display-n');
    $('#urgListItem_9_img').removeClass('display-n');
    $('#urgListItem_9_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_10_color').addClass('display-n');
    $('#urgListItem_10_block').addClass('display-n');
    $('#urgListItem_10_close').addClass('display-n');
    $('#urgListItem_10_img').removeClass('display-n');
    $('#urgListItem_10_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_11_color').addClass('display-n');
    $('#urgListItem_11_block').addClass('display-n');
    $('#urgListItem_11_close').addClass('display-n');
    $('#urgListItem_11_img').removeClass('display-n');
    $('#urgListItem_11_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_12_color').addClass('display-n');
    $('#urgListItem_12_block').addClass('display-n');
    $('#urgListItem_12_close').addClass('display-n');
    $('#urgListItem_12_img').removeClass('display-n');
    $('#urgListItem_12_text').removeClass('display-n');

    $('#urgBlockControls_1').css('pointerEvents', 'auto')
    $('#urgBlockControls_2').css('pointerEvents', 'none')
    $('#urgBlockControls_3').css('pointerEvents', 'none')
    $('#urgBlockControls_4').css('pointerEvents', 'none')
    $('#urgBlockControls_5').css('pointerEvents', 'none')
    $('#urgBlockControls_6').css('pointerEvents', 'none')
    $('#urgBlockControls_7').css('pointerEvents', 'none')
    $('#urgBlockControls_8').css('pointerEvents', 'none')
    $('#urgBlockControls_9').css('pointerEvents', 'none')
    $('#urgBlockControls_10').css('pointerEvents', 'none')
    $('#urgBlockControls_11').css('pointerEvents', 'none')
    $('#urgBlockControls_12').css('pointerEvents', 'none')

    $('#urgBlockControls_1').removeClass('opacity-5')
    $('#urgBlockControls_2').addClass('opacity-5')
    $('#urgBlockControls_3').addClass('opacity-5')
    $('#urgBlockControls_4').addClass('opacity-5')
    $('#urgBlockControls_5').addClass('opacity-5')
    $('#urgBlockControls_6').addClass('opacity-5')
    $('#urgBlockControls_7').addClass('opacity-5')
    $('#urgBlockControls_8').addClass('opacity-5')
    $('#urgBlockControls_9').addClass('opacity-5')
    $('#urgBlockControls_10').addClass('opacity-5')
    $('#urgBlockControls_11').addClass('opacity-5')
    $('#urgBlockControls_12').addClass('opacity-5')
    
});

$('#urgListItem_1_close').on('click', function() {
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');

    $('#urgBlockControls_1').css('pointerEvents', 'auto')
    $('#urgBlockControls_2').css('pointerEvents', 'auto')
    $('#urgBlockControls_3').css('pointerEvents', 'auto')
    $('#urgBlockControls_4').css('pointerEvents', 'auto')
    $('#urgBlockControls_5').css('pointerEvents', 'auto')
    $('#urgBlockControls_6').css('pointerEvents', 'auto')
    $('#urgBlockControls_7').css('pointerEvents', 'auto')
    $('#urgBlockControls_8').css('pointerEvents', 'auto')
    $('#urgBlockControls_9').css('pointerEvents', 'auto')
    $('#urgBlockControls_10').css('pointerEvents', 'auto')
    $('#urgBlockControls_11').css('pointerEvents', 'auto')
    $('#urgBlockControls_12').css('pointerEvents', 'auto')

    $('#urgBlockControls_1').removeClass('opacity-5')
    $('#urgBlockControls_2').removeClass('opacity-5')
    $('#urgBlockControls_3').removeClass('opacity-5')
    $('#urgBlockControls_4').removeClass('opacity-5')
    $('#urgBlockControls_5').removeClass('opacity-5')
    $('#urgBlockControls_6').removeClass('opacity-5')
    $('#urgBlockControls_7').removeClass('opacity-5')
    $('#urgBlockControls_8').removeClass('opacity-5')
    $('#urgBlockControls_9').removeClass('opacity-5')
    $('#urgBlockControls_10').removeClass('opacity-5')
    $('#urgBlockControls_11').removeClass('opacity-5')
    $('#urgBlockControls_12').removeClass('opacity-5')

    $('#urgListItem_1_color .urg-content__block-list-item-colors').removeClass('opacity-5')
});

$('#urgListItem_1_1_colors').on('click', function() {
    $('#urgListItem_1_1_colors').removeClass('opacity-5');
    $('#urgListItem_1_2_colors').addClass('opacity-5');
    $('#urgListItem_1_3_colors').addClass('opacity-5');
    $('#urgListItem_1_4_colors').addClass('opacity-5');
    $('#urgListItem_1_5_colors').addClass('opacity-5');
    $('#urgListItem_1_6_colors').addClass('opacity-5');
});
$('#urgListItem_1_2_colors').on('click', function() {
    $('#urgListItem_1_2_colors').removeClass('opacity-5');
    $('#urgListItem_1_1_colors').addClass('opacity-5');
    $('#urgListItem_1_3_colors').addClass('opacity-5');
    $('#urgListItem_1_4_colors').addClass('opacity-5');
    $('#urgListItem_1_5_colors').addClass('opacity-5');
    $('#urgListItem_1_6_colors').addClass('opacity-5');
});
$('#urgListItem_1_3_colors').on('click', function() {
    $('#urgListItem_1_3_colors').removeClass('opacity-5');
    $('#urgListItem_1_2_colors').addClass('opacity-5');
    $('#urgListItem_1_1_colors').addClass('opacity-5');
    $('#urgListItem_1_4_colors').addClass('opacity-5');
    $('#urgListItem_1_5_colors').addClass('opacity-5');
    $('#urgListItem_1_6_colors').addClass('opacity-5');
});
$('#urgListItem_1_4_colors').on('click', function() {
    $('#urgListItem_1_4_colors').removeClass('opacity-5');
    $('#urgListItem_1_2_colors').addClass('opacity-5');
    $('#urgListItem_1_3_colors').addClass('opacity-5');
    $('#urgListItem_1_1_colors').addClass('opacity-5');
    $('#urgListItem_1_5_colors').addClass('opacity-5');
    $('#urgListItem_1_6_colors').addClass('opacity-5');
});
$('#urgListItem_1_5_colors').on('click', function() {
    $('#urgListItem_1_5_colors').removeClass('opacity-5');
    $('#urgListItem_1_2_colors').addClass('opacity-5');
    $('#urgListItem_1_3_colors').addClass('opacity-5');
    $('#urgListItem_1_4_colors').addClass('opacity-5');
    $('#urgListItem_1_1_colors').addClass('opacity-5');
    $('#urgListItem_1_6_colors').addClass('opacity-5');
});
$('#urgListItem_1_6_colors').on('click', function() {
    $('#urgListItem_1_6_colors').removeClass('opacity-5');
    $('#urgListItem_1_2_colors').addClass('opacity-5');
    $('#urgListItem_1_3_colors').addClass('opacity-5');
    $('#urgListItem_1_4_colors').addClass('opacity-5');
    $('#urgListItem_1_5_colors').addClass('opacity-5');
    $('#urgListItem_1_1_colors').addClass('opacity-5');
});

let urgButtonBlockSum_1 = 1

$('#urgButtonBlockPlus_1').on('click', function() {
    if($('#urgButtonBlockCount_1').html() > 174) {
        
    } else {
        urgButtonBlockSum_1++
        $('#urgButtonBlockCount_1').html(urgButtonBlockSum_1)
    }
})
$('#urgButtonBlockMinus_1').on('click', function() {
    if($('#urgButtonBlockCount_1').html() == 1) {

    } else {
        urgButtonBlockSum_1--
        $('#urgButtonBlockCount_1').html(urgButtonBlockSum_1)
    }
    
})




//! --------------------------------------------------------------------------------








//! Нажатие на элемент каталога - 2

$('#urgListItem_2_img').on('click', function() {
    $('#urgListItem_2_color').removeClass('display-n');
    $('#urgListItem_2_block').removeClass('display-n');
    $('#urgListItem_2_close').removeClass('display-n');
    $('#urgListItem_2_img').addClass('display-n');
    $('#urgListItem_2_text').addClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_3_color').addClass('display-n');
    $('#urgListItem_3_block').addClass('display-n');
    $('#urgListItem_3_close').addClass('display-n');
    $('#urgListItem_3_img').removeClass('display-n');
    $('#urgListItem_3_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_4_color').addClass('display-n');
    $('#urgListItem_4_block').addClass('display-n');
    $('#urgListItem_4_close').addClass('display-n');
    $('#urgListItem_4_img').removeClass('display-n');
    $('#urgListItem_4_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_5_color').addClass('display-n');
    $('#urgListItem_5_block').addClass('display-n');
    $('#urgListItem_5_close').addClass('display-n');
    $('#urgListItem_5_img').removeClass('display-n');
    $('#urgListItem_5_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_6_color').addClass('display-n');
    $('#urgListItem_6_block').addClass('display-n');
    $('#urgListItem_6_close').addClass('display-n');
    $('#urgListItem_6_img').removeClass('display-n');
    $('#urgListItem_6_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_7_color').addClass('display-n');
    $('#urgListItem_7_block').addClass('display-n');
    $('#urgListItem_7_close').addClass('display-n');
    $('#urgListItem_7_img').removeClass('display-n');
    $('#urgListItem_7_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_8_color').addClass('display-n');
    $('#urgListItem_8_block').addClass('display-n');
    $('#urgListItem_8_close').addClass('display-n');
    $('#urgListItem_8_img').removeClass('display-n');
    $('#urgListItem_8_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_9_color').addClass('display-n');
    $('#urgListItem_9_block').addClass('display-n');
    $('#urgListItem_9_close').addClass('display-n');
    $('#urgListItem_9_img').removeClass('display-n');
    $('#urgListItem_9_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_10_color').addClass('display-n');
    $('#urgListItem_10_block').addClass('display-n');
    $('#urgListItem_10_close').addClass('display-n');
    $('#urgListItem_10_img').removeClass('display-n');
    $('#urgListItem_10_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_11_color').addClass('display-n');
    $('#urgListItem_11_block').addClass('display-n');
    $('#urgListItem_11_close').addClass('display-n');
    $('#urgListItem_11_img').removeClass('display-n');
    $('#urgListItem_11_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_12_color').addClass('display-n');
    $('#urgListItem_12_block').addClass('display-n');
    $('#urgListItem_12_close').addClass('display-n');
    $('#urgListItem_12_img').removeClass('display-n');
    $('#urgListItem_12_text').removeClass('display-n');

    $('#urgBlockControls_2').css('pointerEvents', 'auto')
    $('#urgBlockControls_1').css('pointerEvents', 'none')
    $('#urgBlockControls_3').css('pointerEvents', 'none')
    $('#urgBlockControls_4').css('pointerEvents', 'none')
    $('#urgBlockControls_5').css('pointerEvents', 'none')
    $('#urgBlockControls_6').css('pointerEvents', 'none')
    $('#urgBlockControls_7').css('pointerEvents', 'none')
    $('#urgBlockControls_8').css('pointerEvents', 'none')
    $('#urgBlockControls_9').css('pointerEvents', 'none')
    $('#urgBlockControls_10').css('pointerEvents', 'none')
    $('#urgBlockControls_11').css('pointerEvents', 'none')
    $('#urgBlockControls_12').css('pointerEvents', 'none')


    $('#urgBlockControls_1').addClass('opacity-5')
    $('#urgBlockControls_2').removeClass('opacity-5')
    $('#urgBlockControls_3').addClass('opacity-5')
    $('#urgBlockControls_4').addClass('opacity-5')
    $('#urgBlockControls_5').addClass('opacity-5')
    $('#urgBlockControls_6').addClass('opacity-5')
    $('#urgBlockControls_7').addClass('opacity-5')
    $('#urgBlockControls_8').addClass('opacity-5')
    $('#urgBlockControls_9').addClass('opacity-5')
    $('#urgBlockControls_10').addClass('opacity-5')
    $('#urgBlockControls_11').addClass('opacity-5')
    $('#urgBlockControls_12').addClass('opacity-5')
});

$('#urgListItem_2_close').on('click', function() {
    $('#urgListItem_2_color').addClass('display-n');
    $('#urgListItem_2_block').addClass('display-n');
    $('#urgListItem_2_close').addClass('display-n');
    $('#urgListItem_2_img').removeClass('display-n');
    $('#urgListItem_2_text').removeClass('display-n');

    $('#urgBlockControls_1').css('pointerEvents', 'auto')
    $('#urgBlockControls_2').css('pointerEvents', 'auto')
    $('#urgBlockControls_3').css('pointerEvents', 'auto')
    $('#urgBlockControls_4').css('pointerEvents', 'auto')
    $('#urgBlockControls_5').css('pointerEvents', 'auto')
    $('#urgBlockControls_6').css('pointerEvents', 'auto')
    $('#urgBlockControls_7').css('pointerEvents', 'auto')
    $('#urgBlockControls_8').css('pointerEvents', 'auto')
    $('#urgBlockControls_9').css('pointerEvents', 'auto')
    $('#urgBlockControls_10').css('pointerEvents', 'auto')
    $('#urgBlockControls_11').css('pointerEvents', 'auto')
    $('#urgBlockControls_12').css('pointerEvents', 'auto')

    $('#urgBlockControls_1').removeClass('opacity-5')
    $('#urgBlockControls_2').removeClass('opacity-5')
    $('#urgBlockControls_3').removeClass('opacity-5')
    $('#urgBlockControls_4').removeClass('opacity-5')
    $('#urgBlockControls_5').removeClass('opacity-5')
    $('#urgBlockControls_6').removeClass('opacity-5')
    $('#urgBlockControls_7').removeClass('opacity-5')
    $('#urgBlockControls_8').removeClass('opacity-5')
    $('#urgBlockControls_9').removeClass('opacity-5')
    $('#urgBlockControls_10').removeClass('opacity-5')
    $('#urgBlockControls_11').removeClass('opacity-5')
    $('#urgBlockControls_12').removeClass('opacity-5')

    $('#urgListItem_2_color .urg-content__block-list-item-colors').removeClass('opacity-5')
});

$('#urgListItem_2_1_colors').on('click', function() {
    $('#urgListItem_2_1_colors').removeClass('opacity-5');
    $('#urgListItem_2_2_colors').addClass('opacity-5');
    $('#urgListItem_2_3_colors').addClass('opacity-5');
    $('#urgListItem_2_4_colors').addClass('opacity-5');
    $('#urgListItem_2_5_colors').addClass('opacity-5');
    $('#urgListItem_2_6_colors').addClass('opacity-5');
});
$('#urgListItem_2_2_colors').on('click', function() {
    $('#urgListItem_2_2_colors').removeClass('opacity-5');
    $('#urgListItem_2_1_colors').addClass('opacity-5');
    $('#urgListItem_2_3_colors').addClass('opacity-5');
    $('#urgListItem_2_4_colors').addClass('opacity-5');
    $('#urgListItem_2_5_colors').addClass('opacity-5');
    $('#urgListItem_2_6_colors').addClass('opacity-5');
});
$('#urgListItem_2_3_colors').on('click', function() {
    $('#urgListItem_2_3_colors').removeClass('opacity-5');
    $('#urgListItem_2_2_colors').addClass('opacity-5');
    $('#urgListItem_2_1_colors').addClass('opacity-5');
    $('#urgListItem_2_4_colors').addClass('opacity-5');
    $('#urgListItem_2_5_colors').addClass('opacity-5');
    $('#urgListItem_2_6_colors').addClass('opacity-5');
});
$('#urgListItem_2_4_colors').on('click', function() {
    $('#urgListItem_2_4_colors').removeClass('opacity-5');
    $('#urgListItem_2_2_colors').addClass('opacity-5');
    $('#urgListItem_2_3_colors').addClass('opacity-5');
    $('#urgListItem_2_1_colors').addClass('opacity-5');
    $('#urgListItem_2_5_colors').addClass('opacity-5');
    $('#urgListItem_2_6_colors').addClass('opacity-5');
});
$('#urgListItem_2_5_colors').on('click', function() {
    $('#urgListItem_2_5_colors').removeClass('opacity-5');
    $('#urgListItem_2_2_colors').addClass('opacity-5');
    $('#urgListItem_2_3_colors').addClass('opacity-5');
    $('#urgListItem_2_4_colors').addClass('opacity-5');
    $('#urgListItem_2_1_colors').addClass('opacity-5');
    $('#urgListItem_2_6_colors').addClass('opacity-5');
});
$('#urgListItem_2_6_colors').on('click', function() {
    $('#urgListItem_2_6_colors').removeClass('opacity-5');
    $('#urgListItem_2_2_colors').addClass('opacity-5');
    $('#urgListItem_2_3_colors').addClass('opacity-5');
    $('#urgListItem_2_4_colors').addClass('opacity-5');
    $('#urgListItem_2_5_colors').addClass('opacity-5');
    $('#urgListItem_2_1_colors').addClass('opacity-5');
});

//! --------------------------------------------------------------------------------


// //! Нажатие на элемент каталога - 3

$('#urgListItem_3_img').on('click', function() {
    $('#urgListItem_3_color').removeClass('display-n');
    $('#urgListItem_3_block').removeClass('display-n');
    $('#urgListItem_3_close').removeClass('display-n');
    $('#urgListItem_3_img').addClass('display-n');
    $('#urgListItem_3_text').addClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_2_color').addClass('display-n');
    $('#urgListItem_2_block').addClass('display-n');
    $('#urgListItem_2_close').addClass('display-n');
    $('#urgListItem_2_img').removeClass('display-n');
    $('#urgListItem_2_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_4_color').addClass('display-n');
    $('#urgListItem_4_block').addClass('display-n');
    $('#urgListItem_4_close').addClass('display-n');
    $('#urgListItem_4_img').removeClass('display-n');
    $('#urgListItem_4_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_5_color').addClass('display-n');
    $('#urgListItem_5_block').addClass('display-n');
    $('#urgListItem_5_close').addClass('display-n');
    $('#urgListItem_5_img').removeClass('display-n');
    $('#urgListItem_5_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_6_color').addClass('display-n');
    $('#urgListItem_6_block').addClass('display-n');
    $('#urgListItem_6_close').addClass('display-n');
    $('#urgListItem_6_img').removeClass('display-n');
    $('#urgListItem_6_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_7_color').addClass('display-n');
    $('#urgListItem_7_block').addClass('display-n');
    $('#urgListItem_7_close').addClass('display-n');
    $('#urgListItem_7_img').removeClass('display-n');
    $('#urgListItem_7_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_8_color').addClass('display-n');
    $('#urgListItem_8_block').addClass('display-n');
    $('#urgListItem_8_close').addClass('display-n');
    $('#urgListItem_8_img').removeClass('display-n');
    $('#urgListItem_8_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_9_color').addClass('display-n');
    $('#urgListItem_9_block').addClass('display-n');
    $('#urgListItem_9_close').addClass('display-n');
    $('#urgListItem_9_img').removeClass('display-n');
    $('#urgListItem_9_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_10_color').addClass('display-n');
    $('#urgListItem_10_block').addClass('display-n');
    $('#urgListItem_10_close').addClass('display-n');
    $('#urgListItem_10_img').removeClass('display-n');
    $('#urgListItem_10_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_11_color').addClass('display-n');
    $('#urgListItem_11_block').addClass('display-n');
    $('#urgListItem_11_close').addClass('display-n');
    $('#urgListItem_11_img').removeClass('display-n');
    $('#urgListItem_11_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_12_color').addClass('display-n');
    $('#urgListItem_12_block').addClass('display-n');
    $('#urgListItem_12_close').addClass('display-n');
    $('#urgListItem_12_img').removeClass('display-n');
    $('#urgListItem_12_text').removeClass('display-n');

    if($('#urgBlockControls_1').hasClass('urg-checked')) {
        $('#urgListItem_1_color').removeClass('display-n');
        $('#urgListItem_1_block').removeClass('display-n');
        $('#urgListItem_1_close').removeClass('display-n');
        $('#urgListItem_1_img').addClass('display-n');
        $('#urgListItem_1_text').addClass('display-n');
    }
    if($('#urgBlockControls_2').hasClass('urg-checked')) {
        $('#urgListItem_2_color').removeClass('display-n');
        $('#urgListItem_2_block').removeClass('display-n');
        $('#urgListItem_2_close').removeClass('display-n');
        $('#urgListItem_2_img').addClass('display-n');
        $('#urgListItem_2_text').addClass('display-n');
    }
});

$('#urgListItem_3_close').on('click', function() {
    $('#urgListItem_3_color').addClass('display-n');
    $('#urgListItem_3_block').addClass('display-n');
    $('#urgListItem_3_close').addClass('display-n');
    $('#urgListItem_3_img').removeClass('display-n');
    $('#urgListItem_3_text').removeClass('display-n');
});

$('#urgListItem_3_1_colors').on('click', function() {
    $('#urgListItem_3_1_colors').removeClass('opacity-5');
    $('#urgListItem_3_2_colors').addClass('opacity-5');
    $('#urgListItem_3_3_colors').addClass('opacity-5');
    $('#urgListItem_3_4_colors').addClass('opacity-5');
    $('#urgListItem_3_5_colors').addClass('opacity-5');
    $('#urgListItem_3_6_colors').addClass('opacity-5');
});
$('#urgListItem_3_2_colors').on('click', function() {
    $('#urgListItem_3_2_colors').removeClass('opacity-5');
    $('#urgListItem_3_1_colors').addClass('opacity-5');
    $('#urgListItem_3_3_colors').addClass('opacity-5');
    $('#urgListItem_3_4_colors').addClass('opacity-5');
    $('#urgListItem_3_5_colors').addClass('opacity-5');
    $('#urgListItem_3_6_colors').addClass('opacity-5');
});
$('#urgListItem_3_3_colors').on('click', function() {
    $('#urgListItem_3_3_colors').removeClass('opacity-5');
    $('#urgListItem_3_2_colors').addClass('opacity-5');
    $('#urgListItem_3_1_colors').addClass('opacity-5');
    $('#urgListItem_3_4_colors').addClass('opacity-5');
    $('#urgListItem_3_5_colors').addClass('opacity-5');
    $('#urgListItem_3_6_colors').addClass('opacity-5');
});
$('#urgListItem_3_4_colors').on('click', function() {
    $('#urgListItem_3_4_colors').removeClass('opacity-5');
    $('#urgListItem_3_2_colors').addClass('opacity-5');
    $('#urgListItem_3_3_colors').addClass('opacity-5');
    $('#urgListItem_3_1_colors').addClass('opacity-5');
    $('#urgListItem_3_5_colors').addClass('opacity-5');
    $('#urgListItem_3_6_colors').addClass('opacity-5');
});
$('#urgListItem_3_5_colors').on('click', function() {
    $('#urgListItem_3_5_colors').removeClass('opacity-5');
    $('#urgListItem_3_2_colors').addClass('opacity-5');
    $('#urgListItem_3_3_colors').addClass('opacity-5');
    $('#urgListItem_3_4_colors').addClass('opacity-5');
    $('#urgListItem_3_1_colors').addClass('opacity-5');
    $('#urgListItem_3_6_colors').addClass('opacity-5');
});
$('#urgListItem_3_6_colors').on('click', function() {
    $('#urgListItem_3_6_colors').removeClass('opacity-5');
    $('#urgListItem_3_2_colors').addClass('opacity-5');
    $('#urgListItem_3_3_colors').addClass('opacity-5');
    $('#urgListItem_3_4_colors').addClass('opacity-5');
    $('#urgListItem_3_5_colors').addClass('opacity-5');
    $('#urgListItem_3_1_colors').addClass('opacity-5');
});

//! --------------------------------------------------------------------------------


// //! Нажатие на элемент каталога - 5

// $('#urgListItem_4_img').on('click', function() {
//     $('#urgListItem_4_color').removeClass('display-n');
//     $('#urgListItem_4_block').removeClass('display-n');
//     $('#urgListItem_4_close').removeClass('display-n');
//     $('#urgListItem_4_img').addClass('display-n');
//     $('#urgListItem_4_text').addClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_2_color').addClass('display-n');
//     $('#urgListItem_2_block').addClass('display-n');
//     $('#urgListItem_2_close').addClass('display-n');
//     $('#urgListItem_2_img').removeClass('display-n');
//     $('#urgListItem_2_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_3_color').addClass('display-n');
//     $('#urgListItem_3_block').addClass('display-n');
//     $('#urgListItem_3_close').addClass('display-n');
//     $('#urgListItem_3_img').removeClass('display-n');
//     $('#urgListItem_3_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_1_color').addClass('display-n');
//     $('#urgListItem_1_block').addClass('display-n');
//     $('#urgListItem_1_close').addClass('display-n');
//     $('#urgListItem_1_img').removeClass('display-n');
//     $('#urgListItem_1_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_5_color').addClass('display-n');
//     $('#urgListItem_5_block').addClass('display-n');
//     $('#urgListItem_5_close').addClass('display-n');
//     $('#urgListItem_5_img').removeClass('display-n');
//     $('#urgListItem_5_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_6_color').addClass('display-n');
//     $('#urgListItem_6_block').addClass('display-n');
//     $('#urgListItem_6_close').addClass('display-n');
//     $('#urgListItem_6_img').removeClass('display-n');
//     $('#urgListItem_6_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_7_color').addClass('display-n');
//     $('#urgListItem_7_block').addClass('display-n');
//     $('#urgListItem_7_close').addClass('display-n');
//     $('#urgListItem_7_img').removeClass('display-n');
//     $('#urgListItem_7_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_8_color').addClass('display-n');
//     $('#urgListItem_8_block').addClass('display-n');
//     $('#urgListItem_8_close').addClass('display-n');
//     $('#urgListItem_8_img').removeClass('display-n');
//     $('#urgListItem_8_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_9_color').addClass('display-n');
//     $('#urgListItem_9_block').addClass('display-n');
//     $('#urgListItem_9_close').addClass('display-n');
//     $('#urgListItem_9_img').removeClass('display-n');
//     $('#urgListItem_9_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_10_color').addClass('display-n');
//     $('#urgListItem_10_block').addClass('display-n');
//     $('#urgListItem_10_close').addClass('display-n');
//     $('#urgListItem_10_img').removeClass('display-n');
//     $('#urgListItem_10_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_11_color').addClass('display-n');
//     $('#urgListItem_11_block').addClass('display-n');
//     $('#urgListItem_11_close').addClass('display-n');
//     $('#urgListItem_11_img').removeClass('display-n');
//     $('#urgListItem_11_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_12_color').addClass('display-n');
//     $('#urgListItem_12_block').addClass('display-n');
//     $('#urgListItem_12_close').addClass('display-n');
//     $('#urgListItem_12_img').removeClass('display-n');
//     $('#urgListItem_12_text').removeClass('display-n');
// });

// $('#urgListItem_4_close').on('click', function() {
//     $('#urgListItem_4_color').addClass('display-n');
//     $('#urgListItem_4_block').addClass('display-n');
//     $('#urgListItem_4_close').addClass('display-n');
//     $('#urgListItem_4_img').removeClass('display-n');
//     $('#urgListItem_4_text').removeClass('display-n');
// });

// $('#urgListItem_4_1_colors').on('click', function() {
//     $('#urgListItem_4_1_colors').removeClass('opacity-5');
//     $('#urgListItem_4_2_colors').addClass('opacity-5');
//     $('#urgListItem_4_3_colors').addClass('opacity-5');
//     $('#urgListItem_4_4_colors').addClass('opacity-5');
//     $('#urgListItem_4_5_colors').addClass('opacity-5');
//     $('#urgListItem_4_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_4_2_colors').on('click', function() {
//     $('#urgListItem_4_2_colors').removeClass('opacity-5');
//     $('#urgListItem_4_1_colors').addClass('opacity-5');
//     $('#urgListItem_4_3_colors').addClass('opacity-5');
//     $('#urgListItem_4_4_colors').addClass('opacity-5');
//     $('#urgListItem_4_5_colors').addClass('opacity-5');
//     $('#urgListItem_4_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_4_3_colors').on('click', function() {
//     $('#urgListItem_4_3_colors').removeClass('opacity-5');
//     $('#urgListItem_4_2_colors').addClass('opacity-5');
//     $('#urgListItem_4_1_colors').addClass('opacity-5');
//     $('#urgListItem_4_4_colors').addClass('opacity-5');
//     $('#urgListItem_4_5_colors').addClass('opacity-5');
//     $('#urgListItem_4_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_4_4_colors').on('click', function() {
//     $('#urgListItem_4_4_colors').removeClass('opacity-5');
//     $('#urgListItem_4_2_colors').addClass('opacity-5');
//     $('#urgListItem_4_3_colors').addClass('opacity-5');
//     $('#urgListItem_4_1_colors').addClass('opacity-5');
//     $('#urgListItem_4_5_colors').addClass('opacity-5');
//     $('#urgListItem_4_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_4_5_colors').on('click', function() {
//     $('#urgListItem_4_5_colors').removeClass('opacity-5');
//     $('#urgListItem_4_2_colors').addClass('opacity-5');
//     $('#urgListItem_4_3_colors').addClass('opacity-5');
//     $('#urgListItem_4_4_colors').addClass('opacity-5');
//     $('#urgListItem_4_1_colors').addClass('opacity-5');
//     $('#urgListItem_4_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_4_6_colors').on('click', function() {
//     $('#urgListItem_4_6_colors').removeClass('opacity-5');
//     $('#urgListItem_4_2_colors').addClass('opacity-5');
//     $('#urgListItem_4_3_colors').addClass('opacity-5');
//     $('#urgListItem_4_4_colors').addClass('opacity-5');
//     $('#urgListItem_4_5_colors').addClass('opacity-5');
//     $('#urgListItem_4_1_colors').addClass('opacity-5');
// });

// //! --------------------------------------------------------------------------------

// //! Нажатие на элемент каталога - 5

// $('#urgListItem_5_img').on('click', function() {
//     $('#urgListItem_5_color').removeClass('display-n');
//     $('#urgListItem_5_block').removeClass('display-n');
//     $('#urgListItem_5_close').removeClass('display-n');
//     $('#urgListItem_5_img').addClass('display-n');
//     $('#urgListItem_5_text').addClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_2_color').addClass('display-n');
//     $('#urgListItem_2_block').addClass('display-n');
//     $('#urgListItem_2_close').addClass('display-n');
//     $('#urgListItem_2_img').removeClass('display-n');
//     $('#urgListItem_2_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_3_color').addClass('display-n');
//     $('#urgListItem_3_block').addClass('display-n');
//     $('#urgListItem_3_close').addClass('display-n');
//     $('#urgListItem_3_img').removeClass('display-n');
//     $('#urgListItem_3_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_4_color').addClass('display-n');
//     $('#urgListItem_4_block').addClass('display-n');
//     $('#urgListItem_4_close').addClass('display-n');
//     $('#urgListItem_4_img').removeClass('display-n');
//     $('#urgListItem_4_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_1_color').addClass('display-n');
//     $('#urgListItem_1_block').addClass('display-n');
//     $('#urgListItem_1_close').addClass('display-n');
//     $('#urgListItem_1_img').removeClass('display-n');
//     $('#urgListItem_1_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_6_color').addClass('display-n');
//     $('#urgListItem_6_block').addClass('display-n');
//     $('#urgListItem_6_close').addClass('display-n');
//     $('#urgListItem_6_img').removeClass('display-n');
//     $('#urgListItem_6_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_7_color').addClass('display-n');
//     $('#urgListItem_7_block').addClass('display-n');
//     $('#urgListItem_7_close').addClass('display-n');
//     $('#urgListItem_7_img').removeClass('display-n');
//     $('#urgListItem_7_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_8_color').addClass('display-n');
//     $('#urgListItem_8_block').addClass('display-n');
//     $('#urgListItem_8_close').addClass('display-n');
//     $('#urgListItem_8_img').removeClass('display-n');
//     $('#urgListItem_8_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_9_color').addClass('display-n');
//     $('#urgListItem_9_block').addClass('display-n');
//     $('#urgListItem_9_close').addClass('display-n');
//     $('#urgListItem_9_img').removeClass('display-n');
//     $('#urgListItem_9_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_10_color').addClass('display-n');
//     $('#urgListItem_10_block').addClass('display-n');
//     $('#urgListItem_10_close').addClass('display-n');
//     $('#urgListItem_10_img').removeClass('display-n');
//     $('#urgListItem_10_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_11_color').addClass('display-n');
//     $('#urgListItem_11_block').addClass('display-n');
//     $('#urgListItem_11_close').addClass('display-n');
//     $('#urgListItem_11_img').removeClass('display-n');
//     $('#urgListItem_11_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_12_color').addClass('display-n');
//     $('#urgListItem_12_block').addClass('display-n');
//     $('#urgListItem_12_close').addClass('display-n');
//     $('#urgListItem_12_img').removeClass('display-n');
//     $('#urgListItem_12_text').removeClass('display-n');
// });

// $('#urgListItem_5_close').on('click', function() {
//     $('#urgListItem_5_color').addClass('display-n');
//     $('#urgListItem_5_block').addClass('display-n');
//     $('#urgListItem_5_close').addClass('display-n');
//     $('#urgListItem_5_img').removeClass('display-n');
//     $('#urgListItem_5_text').removeClass('display-n');
// });

// $('#urgListItem_5_1_colors').on('click', function() {
//     $('#urgListItem_5_1_colors').removeClass('opacity-5');
//     $('#urgListItem_5_2_colors').addClass('opacity-5');
//     $('#urgListItem_5_3_colors').addClass('opacity-5');
//     $('#urgListItem_5_4_colors').addClass('opacity-5');
//     $('#urgListItem_5_5_colors').addClass('opacity-5');
//     $('#urgListItem_5_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_5_2_colors').on('click', function() {
//     $('#urgListItem_5_2_colors').removeClass('opacity-5');
//     $('#urgListItem_5_1_colors').addClass('opacity-5');
//     $('#urgListItem_5_3_colors').addClass('opacity-5');
//     $('#urgListItem_5_4_colors').addClass('opacity-5');
//     $('#urgListItem_5_5_colors').addClass('opacity-5');
//     $('#urgListItem_5_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_5_3_colors').on('click', function() {
//     $('#urgListItem_5_3_colors').removeClass('opacity-5');
//     $('#urgListItem_5_2_colors').addClass('opacity-5');
//     $('#urgListItem_5_1_colors').addClass('opacity-5');
//     $('#urgListItem_5_4_colors').addClass('opacity-5');
//     $('#urgListItem_5_5_colors').addClass('opacity-5');
//     $('#urgListItem_5_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_5_4_colors').on('click', function() {
//     $('#urgListItem_5_4_colors').removeClass('opacity-5');
//     $('#urgListItem_5_2_colors').addClass('opacity-5');
//     $('#urgListItem_5_3_colors').addClass('opacity-5');
//     $('#urgListItem_5_1_colors').addClass('opacity-5');
//     $('#urgListItem_5_5_colors').addClass('opacity-5');
//     $('#urgListItem_5_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_5_5_colors').on('click', function() {
//     $('#urgListItem_5_5_colors').removeClass('opacity-5');
//     $('#urgListItem_5_2_colors').addClass('opacity-5');
//     $('#urgListItem_5_3_colors').addClass('opacity-5');
//     $('#urgListItem_5_4_colors').addClass('opacity-5');
//     $('#urgListItem_5_1_colors').addClass('opacity-5');
//     $('#urgListItem_5_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_5_6_colors').on('click', function() {
//     $('#urgListItem_5_6_colors').removeClass('opacity-5');
//     $('#urgListItem_5_2_colors').addClass('opacity-5');
//     $('#urgListItem_5_3_colors').addClass('opacity-5');
//     $('#urgListItem_5_4_colors').addClass('opacity-5');
//     $('#urgListItem_5_5_colors').addClass('opacity-5');
//     $('#urgListItem_5_1_colors').addClass('opacity-5');
// });

// //! --------------------------------------------------------------------------------

// //! Нажатие на элемент каталога - 6

// $('#urgListItem_6_img').on('click', function() {
//     $('#urgListItem_6_color').removeClass('display-n');
//     $('#urgListItem_6_block').removeClass('display-n');
//     $('#urgListItem_6_close').removeClass('display-n');
//     $('#urgListItem_6_img').addClass('display-n');
//     $('#urgListItem_6_text').addClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_2_color').addClass('display-n');
//     $('#urgListItem_2_block').addClass('display-n');
//     $('#urgListItem_2_close').addClass('display-n');
//     $('#urgListItem_2_img').removeClass('display-n');
//     $('#urgListItem_2_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_3_color').addClass('display-n');
//     $('#urgListItem_3_block').addClass('display-n');
//     $('#urgListItem_3_close').addClass('display-n');
//     $('#urgListItem_3_img').removeClass('display-n');
//     $('#urgListItem_3_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_4_color').addClass('display-n');
//     $('#urgListItem_4_block').addClass('display-n');
//     $('#urgListItem_4_close').addClass('display-n');
//     $('#urgListItem_4_img').removeClass('display-n');
//     $('#urgListItem_4_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_5_color').addClass('display-n');
//     $('#urgListItem_5_block').addClass('display-n');
//     $('#urgListItem_5_close').addClass('display-n');
//     $('#urgListItem_5_img').removeClass('display-n');
//     $('#urgListItem_5_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_1_color').addClass('display-n');
//     $('#urgListItem_1_block').addClass('display-n');
//     $('#urgListItem_1_close').addClass('display-n');
//     $('#urgListItem_1_img').removeClass('display-n');
//     $('#urgListItem_1_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_7_color').addClass('display-n');
//     $('#urgListItem_7_block').addClass('display-n');
//     $('#urgListItem_7_close').addClass('display-n');
//     $('#urgListItem_7_img').removeClass('display-n');
//     $('#urgListItem_7_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_8_color').addClass('display-n');
//     $('#urgListItem_8_block').addClass('display-n');
//     $('#urgListItem_8_close').addClass('display-n');
//     $('#urgListItem_8_img').removeClass('display-n');
//     $('#urgListItem_8_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_9_color').addClass('display-n');
//     $('#urgListItem_9_block').addClass('display-n');
//     $('#urgListItem_9_close').addClass('display-n');
//     $('#urgListItem_9_img').removeClass('display-n');
//     $('#urgListItem_9_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_10_color').addClass('display-n');
//     $('#urgListItem_10_block').addClass('display-n');
//     $('#urgListItem_10_close').addClass('display-n');
//     $('#urgListItem_10_img').removeClass('display-n');
//     $('#urgListItem_10_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_11_color').addClass('display-n');
//     $('#urgListItem_11_block').addClass('display-n');
//     $('#urgListItem_11_close').addClass('display-n');
//     $('#urgListItem_11_img').removeClass('display-n');
//     $('#urgListItem_11_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_12_color').addClass('display-n');
//     $('#urgListItem_12_block').addClass('display-n');
//     $('#urgListItem_12_close').addClass('display-n');
//     $('#urgListItem_12_img').removeClass('display-n');
//     $('#urgListItem_12_text').removeClass('display-n');
// });

// $('#urgListItem_6_close').on('click', function() {
//     $('#urgListItem_6_color').addClass('display-n');
//     $('#urgListItem_6_block').addClass('display-n');
//     $('#urgListItem_6_close').addClass('display-n');
//     $('#urgListItem_6_img').removeClass('display-n');
//     $('#urgListItem_6_text').removeClass('display-n');
// });

// $('#urgListItem_6_1_colors').on('click', function() {
//     $('#urgListItem_6_1_colors').removeClass('opacity-5');
//     $('#urgListItem_6_2_colors').addClass('opacity-5');
//     $('#urgListItem_6_3_colors').addClass('opacity-5');
//     $('#urgListItem_6_4_colors').addClass('opacity-5');
//     $('#urgListItem_6_5_colors').addClass('opacity-5');
//     $('#urgListItem_6_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_6_2_colors').on('click', function() {
//     $('#urgListItem_6_2_colors').removeClass('opacity-5');
//     $('#urgListItem_6_1_colors').addClass('opacity-5');
//     $('#urgListItem_6_3_colors').addClass('opacity-5');
//     $('#urgListItem_6_4_colors').addClass('opacity-5');
//     $('#urgListItem_6_5_colors').addClass('opacity-5');
//     $('#urgListItem_6_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_6_3_colors').on('click', function() {
//     $('#urgListItem_6_3_colors').removeClass('opacity-5');
//     $('#urgListItem_6_2_colors').addClass('opacity-5');
//     $('#urgListItem_6_1_colors').addClass('opacity-5');
//     $('#urgListItem_6_4_colors').addClass('opacity-5');
//     $('#urgListItem_6_5_colors').addClass('opacity-5');
//     $('#urgListItem_6_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_6_4_colors').on('click', function() {
//     $('#urgListItem_6_4_colors').removeClass('opacity-5');
//     $('#urgListItem_6_2_colors').addClass('opacity-5');
//     $('#urgListItem_6_3_colors').addClass('opacity-5');
//     $('#urgListItem_6_1_colors').addClass('opacity-5');
//     $('#urgListItem_6_5_colors').addClass('opacity-5');
//     $('#urgListItem_6_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_6_5_colors').on('click', function() {
//     $('#urgListItem_6_5_colors').removeClass('opacity-5');
//     $('#urgListItem_6_2_colors').addClass('opacity-5');
//     $('#urgListItem_6_3_colors').addClass('opacity-5');
//     $('#urgListItem_6_4_colors').addClass('opacity-5');
//     $('#urgListItem_6_1_colors').addClass('opacity-5');
//     $('#urgListItem_6_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_6_6_colors').on('click', function() {
//     $('#urgListItem_6_6_colors').removeClass('opacity-5');
//     $('#urgListItem_6_2_colors').addClass('opacity-5');
//     $('#urgListItem_6_3_colors').addClass('opacity-5');
//     $('#urgListItem_6_4_colors').addClass('opacity-5');
//     $('#urgListItem_6_5_colors').addClass('opacity-5');
//     $('#urgListItem_6_1_colors').addClass('opacity-5');
// });

// //! --------------------------------------------------------------------------------


// //! Нажатие на элемент каталога - 7

// $('#urgListItem_7_img').on('click', function() {
//     $('#urgListItem_7_color').removeClass('display-n');
//     $('#urgListItem_7_block').removeClass('display-n');
//     $('#urgListItem_7_close').removeClass('display-n');
//     $('#urgListItem_7_img').addClass('display-n');
//     $('#urgListItem_7_text').addClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_2_color').addClass('display-n');
//     $('#urgListItem_2_block').addClass('display-n');
//     $('#urgListItem_2_close').addClass('display-n');
//     $('#urgListItem_2_img').removeClass('display-n');
//     $('#urgListItem_2_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_3_color').addClass('display-n');
//     $('#urgListItem_3_block').addClass('display-n');
//     $('#urgListItem_3_close').addClass('display-n');
//     $('#urgListItem_3_img').removeClass('display-n');
//     $('#urgListItem_3_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_4_color').addClass('display-n');
//     $('#urgListItem_4_block').addClass('display-n');
//     $('#urgListItem_4_close').addClass('display-n');
//     $('#urgListItem_4_img').removeClass('display-n');
//     $('#urgListItem_4_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_5_color').addClass('display-n');
//     $('#urgListItem_5_block').addClass('display-n');
//     $('#urgListItem_5_close').addClass('display-n');
//     $('#urgListItem_5_img').removeClass('display-n');
//     $('#urgListItem_5_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_6_color').addClass('display-n');
//     $('#urgListItem_6_block').addClass('display-n');
//     $('#urgListItem_6_close').addClass('display-n');
//     $('#urgListItem_6_img').removeClass('display-n');
//     $('#urgListItem_6_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_1_color').addClass('display-n');
//     $('#urgListItem_1_block').addClass('display-n');
//     $('#urgListItem_1_close').addClass('display-n');
//     $('#urgListItem_1_img').removeClass('display-n');
//     $('#urgListItem_1_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_8_color').addClass('display-n');
//     $('#urgListItem_8_block').addClass('display-n');
//     $('#urgListItem_8_close').addClass('display-n');
//     $('#urgListItem_8_img').removeClass('display-n');
//     $('#urgListItem_8_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_9_color').addClass('display-n');
//     $('#urgListItem_9_block').addClass('display-n');
//     $('#urgListItem_9_close').addClass('display-n');
//     $('#urgListItem_9_img').removeClass('display-n');
//     $('#urgListItem_9_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_10_color').addClass('display-n');
//     $('#urgListItem_10_block').addClass('display-n');
//     $('#urgListItem_10_close').addClass('display-n');
//     $('#urgListItem_10_img').removeClass('display-n');
//     $('#urgListItem_10_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_11_color').addClass('display-n');
//     $('#urgListItem_11_block').addClass('display-n');
//     $('#urgListItem_11_close').addClass('display-n');
//     $('#urgListItem_11_img').removeClass('display-n');
//     $('#urgListItem_11_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_12_color').addClass('display-n');
//     $('#urgListItem_12_block').addClass('display-n');
//     $('#urgListItem_12_close').addClass('display-n');
//     $('#urgListItem_12_img').removeClass('display-n');
//     $('#urgListItem_12_text').removeClass('display-n');
// });

// $('#urgListItem_7_close').on('click', function() {
//     $('#urgListItem_7_color').addClass('display-n');
//     $('#urgListItem_7_block').addClass('display-n');
//     $('#urgListItem_7_close').addClass('display-n');
//     $('#urgListItem_7_img').removeClass('display-n');
//     $('#urgListItem_7_text').removeClass('display-n');
// });

// $('#urgListItem_7_1_colors').on('click', function() {
//     $('#urgListItem_7_1_colors').removeClass('opacity-5');
//     $('#urgListItem_7_2_colors').addClass('opacity-5');
//     $('#urgListItem_7_3_colors').addClass('opacity-5');
//     $('#urgListItem_7_4_colors').addClass('opacity-5');
//     $('#urgListItem_7_5_colors').addClass('opacity-5');
//     $('#urgListItem_7_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_7_2_colors').on('click', function() {
//     $('#urgListItem_7_2_colors').removeClass('opacity-5');
//     $('#urgListItem_7_1_colors').addClass('opacity-5');
//     $('#urgListItem_7_3_colors').addClass('opacity-5');
//     $('#urgListItem_7_4_colors').addClass('opacity-5');
//     $('#urgListItem_7_5_colors').addClass('opacity-5');
//     $('#urgListItem_7_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_7_3_colors').on('click', function() {
//     $('#urgListItem_7_3_colors').removeClass('opacity-5');
//     $('#urgListItem_7_2_colors').addClass('opacity-5');
//     $('#urgListItem_7_1_colors').addClass('opacity-5');
//     $('#urgListItem_7_4_colors').addClass('opacity-5');
//     $('#urgListItem_7_5_colors').addClass('opacity-5');
//     $('#urgListItem_7_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_7_4_colors').on('click', function() {
//     $('#urgListItem_7_4_colors').removeClass('opacity-5');
//     $('#urgListItem_7_2_colors').addClass('opacity-5');
//     $('#urgListItem_7_3_colors').addClass('opacity-5');
//     $('#urgListItem_7_1_colors').addClass('opacity-5');
//     $('#urgListItem_7_5_colors').addClass('opacity-5');
//     $('#urgListItem_7_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_7_5_colors').on('click', function() {
//     $('#urgListItem_7_5_colors').removeClass('opacity-5');
//     $('#urgListItem_7_2_colors').addClass('opacity-5');
//     $('#urgListItem_7_3_colors').addClass('opacity-5');
//     $('#urgListItem_7_4_colors').addClass('opacity-5');
//     $('#urgListItem_7_1_colors').addClass('opacity-5');
//     $('#urgListItem_7_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_7_6_colors').on('click', function() {
//     $('#urgListItem_7_6_colors').removeClass('opacity-5');
//     $('#urgListItem_7_2_colors').addClass('opacity-5');
//     $('#urgListItem_7_3_colors').addClass('opacity-5');
//     $('#urgListItem_7_4_colors').addClass('opacity-5');
//     $('#urgListItem_7_5_colors').addClass('opacity-5');
//     $('#urgListItem_7_1_colors').addClass('opacity-5');
// });

// //! --------------------------------------------------------------------------------

// //! Нажатие на элемент каталога - 8

// $('#urgListItem_8_img').on('click', function() {
//     $('#urgListItem_8_color').removeClass('display-n');
//     $('#urgListItem_8_block').removeClass('display-n');
//     $('#urgListItem_8_close').removeClass('display-n');
//     $('#urgListItem_8_img').addClass('display-n');
//     $('#urgListItem_8_text').addClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_2_color').addClass('display-n');
//     $('#urgListItem_2_block').addClass('display-n');
//     $('#urgListItem_2_close').addClass('display-n');
//     $('#urgListItem_2_img').removeClass('display-n');
//     $('#urgListItem_2_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_3_color').addClass('display-n');
//     $('#urgListItem_3_block').addClass('display-n');
//     $('#urgListItem_3_close').addClass('display-n');
//     $('#urgListItem_3_img').removeClass('display-n');
//     $('#urgListItem_3_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_4_color').addClass('display-n');
//     $('#urgListItem_4_block').addClass('display-n');
//     $('#urgListItem_4_close').addClass('display-n');
//     $('#urgListItem_4_img').removeClass('display-n');
//     $('#urgListItem_4_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_5_color').addClass('display-n');
//     $('#urgListItem_5_block').addClass('display-n');
//     $('#urgListItem_5_close').addClass('display-n');
//     $('#urgListItem_5_img').removeClass('display-n');
//     $('#urgListItem_5_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_6_color').addClass('display-n');
//     $('#urgListItem_6_block').addClass('display-n');
//     $('#urgListItem_6_close').addClass('display-n');
//     $('#urgListItem_6_img').removeClass('display-n');
//     $('#urgListItem_6_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_7_color').addClass('display-n');
//     $('#urgListItem_7_block').addClass('display-n');
//     $('#urgListItem_7_close').addClass('display-n');
//     $('#urgListItem_7_img').removeClass('display-n');
//     $('#urgListItem_7_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_1_color').addClass('display-n');
//     $('#urgListItem_1_block').addClass('display-n');
//     $('#urgListItem_1_close').addClass('display-n');
//     $('#urgListItem_1_img').removeClass('display-n');
//     $('#urgListItem_1_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_9_color').addClass('display-n');
//     $('#urgListItem_9_block').addClass('display-n');
//     $('#urgListItem_9_close').addClass('display-n');
//     $('#urgListItem_9_img').removeClass('display-n');
//     $('#urgListItem_9_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_10_color').addClass('display-n');
//     $('#urgListItem_10_block').addClass('display-n');
//     $('#urgListItem_10_close').addClass('display-n');
//     $('#urgListItem_10_img').removeClass('display-n');
//     $('#urgListItem_10_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_11_color').addClass('display-n');
//     $('#urgListItem_11_block').addClass('display-n');
//     $('#urgListItem_11_close').addClass('display-n');
//     $('#urgListItem_11_img').removeClass('display-n');
//     $('#urgListItem_11_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_12_color').addClass('display-n');
//     $('#urgListItem_12_block').addClass('display-n');
//     $('#urgListItem_12_close').addClass('display-n');
//     $('#urgListItem_12_img').removeClass('display-n');
//     $('#urgListItem_12_text').removeClass('display-n');
// });

// $('#urgListItem_8_close').on('click', function() {
//     $('#urgListItem_8_color').addClass('display-n');
//     $('#urgListItem_8_block').addClass('display-n');
//     $('#urgListItem_8_close').addClass('display-n');
//     $('#urgListItem_8_img').removeClass('display-n');
//     $('#urgListItem_8_text').removeClass('display-n');
// });

// $('#urgListItem_8_1_colors').on('click', function() {
//     $('#urgListItem_8_1_colors').removeClass('opacity-5');
//     $('#urgListItem_8_2_colors').addClass('opacity-5');
//     $('#urgListItem_8_3_colors').addClass('opacity-5');
//     $('#urgListItem_8_4_colors').addClass('opacity-5');
//     $('#urgListItem_8_5_colors').addClass('opacity-5');
//     $('#urgListItem_8_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_8_2_colors').on('click', function() {
//     $('#urgListItem_8_2_colors').removeClass('opacity-5');
//     $('#urgListItem_8_1_colors').addClass('opacity-5');
//     $('#urgListItem_8_3_colors').addClass('opacity-5');
//     $('#urgListItem_8_4_colors').addClass('opacity-5');
//     $('#urgListItem_8_5_colors').addClass('opacity-5');
//     $('#urgListItem_8_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_8_3_colors').on('click', function() {
//     $('#urgListItem_8_3_colors').removeClass('opacity-5');
//     $('#urgListItem_8_2_colors').addClass('opacity-5');
//     $('#urgListItem_8_1_colors').addClass('opacity-5');
//     $('#urgListItem_8_4_colors').addClass('opacity-5');
//     $('#urgListItem_8_5_colors').addClass('opacity-5');
//     $('#urgListItem_8_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_8_4_colors').on('click', function() {
//     $('#urgListItem_8_4_colors').removeClass('opacity-5');
//     $('#urgListItem_8_2_colors').addClass('opacity-5');
//     $('#urgListItem_8_3_colors').addClass('opacity-5');
//     $('#urgListItem_8_1_colors').addClass('opacity-5');
//     $('#urgListItem_8_5_colors').addClass('opacity-5');
//     $('#urgListItem_8_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_8_5_colors').on('click', function() {
//     $('#urgListItem_8_5_colors').removeClass('opacity-5');
//     $('#urgListItem_8_2_colors').addClass('opacity-5');
//     $('#urgListItem_8_3_colors').addClass('opacity-5');
//     $('#urgListItem_8_4_colors').addClass('opacity-5');
//     $('#urgListItem_8_1_colors').addClass('opacity-5');
//     $('#urgListItem_8_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_8_6_colors').on('click', function() {
//     $('#urgListItem_8_6_colors').removeClass('opacity-5');
//     $('#urgListItem_8_2_colors').addClass('opacity-5');
//     $('#urgListItem_8_3_colors').addClass('opacity-5');
//     $('#urgListItem_8_4_colors').addClass('opacity-5');
//     $('#urgListItem_8_5_colors').addClass('opacity-5');
//     $('#urgListItem_8_1_colors').addClass('opacity-5');
// });

// //! --------------------------------------------------------------------------------

// //! Нажатие на элемент каталога - 9

// $('#urgListItem_9_img').on('click', function() {
//     $('#urgListItem_9_color').removeClass('display-n');
//     $('#urgListItem_9_block').removeClass('display-n');
//     $('#urgListItem_9_close').removeClass('display-n');
//     $('#urgListItem_9_img').addClass('display-n');
//     $('#urgListItem_9_text').addClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_2_color').addClass('display-n');
//     $('#urgListItem_2_block').addClass('display-n');
//     $('#urgListItem_2_close').addClass('display-n');
//     $('#urgListItem_2_img').removeClass('display-n');
//     $('#urgListItem_2_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_3_color').addClass('display-n');
//     $('#urgListItem_3_block').addClass('display-n');
//     $('#urgListItem_3_close').addClass('display-n');
//     $('#urgListItem_3_img').removeClass('display-n');
//     $('#urgListItem_3_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_4_color').addClass('display-n');
//     $('#urgListItem_4_block').addClass('display-n');
//     $('#urgListItem_4_close').addClass('display-n');
//     $('#urgListItem_4_img').removeClass('display-n');
//     $('#urgListItem_4_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_5_color').addClass('display-n');
//     $('#urgListItem_5_block').addClass('display-n');
//     $('#urgListItem_5_close').addClass('display-n');
//     $('#urgListItem_5_img').removeClass('display-n');
//     $('#urgListItem_5_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_6_color').addClass('display-n');
//     $('#urgListItem_6_block').addClass('display-n');
//     $('#urgListItem_6_close').addClass('display-n');
//     $('#urgListItem_6_img').removeClass('display-n');
//     $('#urgListItem_6_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_7_color').addClass('display-n');
//     $('#urgListItem_7_block').addClass('display-n');
//     $('#urgListItem_7_close').addClass('display-n');
//     $('#urgListItem_7_img').removeClass('display-n');
//     $('#urgListItem_7_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_8_color').addClass('display-n');
//     $('#urgListItem_8_block').addClass('display-n');
//     $('#urgListItem_8_close').addClass('display-n');
//     $('#urgListItem_8_img').removeClass('display-n');
//     $('#urgListItem_8_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_1_color').addClass('display-n');
//     $('#urgListItem_1_block').addClass('display-n');
//     $('#urgListItem_1_close').addClass('display-n');
//     $('#urgListItem_1_img').removeClass('display-n');
//     $('#urgListItem_1_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_10_color').addClass('display-n');
//     $('#urgListItem_10_block').addClass('display-n');
//     $('#urgListItem_10_close').addClass('display-n');
//     $('#urgListItem_10_img').removeClass('display-n');
//     $('#urgListItem_10_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_11_color').addClass('display-n');
//     $('#urgListItem_11_block').addClass('display-n');
//     $('#urgListItem_11_close').addClass('display-n');
//     $('#urgListItem_11_img').removeClass('display-n');
//     $('#urgListItem_11_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_12_color').addClass('display-n');
//     $('#urgListItem_12_block').addClass('display-n');
//     $('#urgListItem_12_close').addClass('display-n');
//     $('#urgListItem_12_img').removeClass('display-n');
//     $('#urgListItem_12_text').removeClass('display-n');
// });

// $('#urgListItem_9_close').on('click', function() {
//     $('#urgListItem_9_color').addClass('display-n');
//     $('#urgListItem_9_block').addClass('display-n');
//     $('#urgListItem_9_close').addClass('display-n');
//     $('#urgListItem_9_img').removeClass('display-n');
//     $('#urgListItem_9_text').removeClass('display-n');
// });

// $('#urgListItem_9_1_colors').on('click', function() {
//     $('#urgListItem_9_1_colors').removeClass('opacity-5');
//     $('#urgListItem_9_2_colors').addClass('opacity-5');
//     $('#urgListItem_9_3_colors').addClass('opacity-5');
//     $('#urgListItem_9_4_colors').addClass('opacity-5');
//     $('#urgListItem_9_5_colors').addClass('opacity-5');
//     $('#urgListItem_9_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_9_2_colors').on('click', function() {
//     $('#urgListItem_9_2_colors').removeClass('opacity-5');
//     $('#urgListItem_9_1_colors').addClass('opacity-5');
//     $('#urgListItem_9_3_colors').addClass('opacity-5');
//     $('#urgListItem_9_4_colors').addClass('opacity-5');
//     $('#urgListItem_9_5_colors').addClass('opacity-5');
//     $('#urgListItem_9_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_9_3_colors').on('click', function() {
//     $('#urgListItem_9_3_colors').removeClass('opacity-5');
//     $('#urgListItem_9_2_colors').addClass('opacity-5');
//     $('#urgListItem_9_1_colors').addClass('opacity-5');
//     $('#urgListItem_9_4_colors').addClass('opacity-5');
//     $('#urgListItem_9_5_colors').addClass('opacity-5');
//     $('#urgListItem_9_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_9_4_colors').on('click', function() {
//     $('#urgListItem_9_4_colors').removeClass('opacity-5');
//     $('#urgListItem_9_2_colors').addClass('opacity-5');
//     $('#urgListItem_9_3_colors').addClass('opacity-5');
//     $('#urgListItem_9_1_colors').addClass('opacity-5');
//     $('#urgListItem_9_5_colors').addClass('opacity-5');
//     $('#urgListItem_9_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_9_5_colors').on('click', function() {
//     $('#urgListItem_9_5_colors').removeClass('opacity-5');
//     $('#urgListItem_9_2_colors').addClass('opacity-5');
//     $('#urgListItem_9_3_colors').addClass('opacity-5');
//     $('#urgListItem_9_4_colors').addClass('opacity-5');
//     $('#urgListItem_9_1_colors').addClass('opacity-5');
//     $('#urgListItem_9_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_9_6_colors').on('click', function() {
//     $('#urgListItem_9_6_colors').removeClass('opacity-5');
//     $('#urgListItem_9_2_colors').addClass('opacity-5');
//     $('#urgListItem_9_3_colors').addClass('opacity-5');
//     $('#urgListItem_9_4_colors').addClass('opacity-5');
//     $('#urgListItem_9_5_colors').addClass('opacity-5');
//     $('#urgListItem_9_1_colors').addClass('opacity-5');
// });

// //! --------------------------------------------------------------------------------


// //! Нажатие на элемент каталога - 10

// $('#urgListItem_10_img').on('click', function() {
//     $('#urgListItem_10_color').removeClass('display-n');
//     $('#urgListItem_10_block').removeClass('display-n');
//     $('#urgListItem_10_close').removeClass('display-n');
//     $('#urgListItem_10_img').addClass('display-n');
//     $('#urgListItem_10_text').addClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_2_color').addClass('display-n');
//     $('#urgListItem_2_block').addClass('display-n');
//     $('#urgListItem_2_close').addClass('display-n');
//     $('#urgListItem_2_img').removeClass('display-n');
//     $('#urgListItem_2_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_3_color').addClass('display-n');
//     $('#urgListItem_3_block').addClass('display-n');
//     $('#urgListItem_3_close').addClass('display-n');
//     $('#urgListItem_3_img').removeClass('display-n');
//     $('#urgListItem_3_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_4_color').addClass('display-n');
//     $('#urgListItem_4_block').addClass('display-n');
//     $('#urgListItem_4_close').addClass('display-n');
//     $('#urgListItem_4_img').removeClass('display-n');
//     $('#urgListItem_4_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_5_color').addClass('display-n');
//     $('#urgListItem_5_block').addClass('display-n');
//     $('#urgListItem_5_close').addClass('display-n');
//     $('#urgListItem_5_img').removeClass('display-n');
//     $('#urgListItem_5_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_6_color').addClass('display-n');
//     $('#urgListItem_6_block').addClass('display-n');
//     $('#urgListItem_6_close').addClass('display-n');
//     $('#urgListItem_6_img').removeClass('display-n');
//     $('#urgListItem_6_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_7_color').addClass('display-n');
//     $('#urgListItem_7_block').addClass('display-n');
//     $('#urgListItem_7_close').addClass('display-n');
//     $('#urgListItem_7_img').removeClass('display-n');
//     $('#urgListItem_7_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_8_color').addClass('display-n');
//     $('#urgListItem_8_block').addClass('display-n');
//     $('#urgListItem_8_close').addClass('display-n');
//     $('#urgListItem_8_img').removeClass('display-n');
//     $('#urgListItem_8_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_9_color').addClass('display-n');
//     $('#urgListItem_9_block').addClass('display-n');
//     $('#urgListItem_9_close').addClass('display-n');
//     $('#urgListItem_9_img').removeClass('display-n');
//     $('#urgListItem_9_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_1_color').addClass('display-n');
//     $('#urgListItem_1_block').addClass('display-n');
//     $('#urgListItem_1_close').addClass('display-n');
//     $('#urgListItem_1_img').removeClass('display-n');
//     $('#urgListItem_1_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_11_color').addClass('display-n');
//     $('#urgListItem_11_block').addClass('display-n');
//     $('#urgListItem_11_close').addClass('display-n');
//     $('#urgListItem_11_img').removeClass('display-n');
//     $('#urgListItem_11_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_12_color').addClass('display-n');
//     $('#urgListItem_12_block').addClass('display-n');
//     $('#urgListItem_12_close').addClass('display-n');
//     $('#urgListItem_12_img').removeClass('display-n');
//     $('#urgListItem_12_text').removeClass('display-n');
// });

// $('#urgListItem_10_close').on('click', function() {
//     $('#urgListItem_10_color').addClass('display-n');
//     $('#urgListItem_10_block').addClass('display-n');
//     $('#urgListItem_10_close').addClass('display-n');
//     $('#urgListItem_10_img').removeClass('display-n');
//     $('#urgListItem_10_text').removeClass('display-n');
// });

// $('#urgListItem_10_1_colors').on('click', function() {
//     $('#urgListItem_10_1_colors').removeClass('opacity-5');
//     $('#urgListItem_10_2_colors').addClass('opacity-5');
//     $('#urgListItem_10_3_colors').addClass('opacity-5');
//     $('#urgListItem_10_4_colors').addClass('opacity-5');
//     $('#urgListItem_10_5_colors').addClass('opacity-5');
//     $('#urgListItem_10_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_10_2_colors').on('click', function() {
//     $('#urgListItem_10_2_colors').removeClass('opacity-5');
//     $('#urgListItem_10_1_colors').addClass('opacity-5');
//     $('#urgListItem_10_3_colors').addClass('opacity-5');
//     $('#urgListItem_10_4_colors').addClass('opacity-5');
//     $('#urgListItem_10_5_colors').addClass('opacity-5');
//     $('#urgListItem_10_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_10_3_colors').on('click', function() {
//     $('#urgListItem_10_3_colors').removeClass('opacity-5');
//     $('#urgListItem_10_2_colors').addClass('opacity-5');
//     $('#urgListItem_10_1_colors').addClass('opacity-5');
//     $('#urgListItem_10_4_colors').addClass('opacity-5');
//     $('#urgListItem_10_5_colors').addClass('opacity-5');
//     $('#urgListItem_10_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_10_4_colors').on('click', function() {
//     $('#urgListItem_10_4_colors').removeClass('opacity-5');
//     $('#urgListItem_10_2_colors').addClass('opacity-5');
//     $('#urgListItem_10_3_colors').addClass('opacity-5');
//     $('#urgListItem_10_1_colors').addClass('opacity-5');
//     $('#urgListItem_10_5_colors').addClass('opacity-5');
//     $('#urgListItem_10_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_10_5_colors').on('click', function() {
//     $('#urgListItem_10_5_colors').removeClass('opacity-5');
//     $('#urgListItem_10_2_colors').addClass('opacity-5');
//     $('#urgListItem_10_3_colors').addClass('opacity-5');
//     $('#urgListItem_10_4_colors').addClass('opacity-5');
//     $('#urgListItem_10_1_colors').addClass('opacity-5');
//     $('#urgListItem_10_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_10_6_colors').on('click', function() {
//     $('#urgListItem_10_6_colors').removeClass('opacity-5');
//     $('#urgListItem_10_2_colors').addClass('opacity-5');
//     $('#urgListItem_10_3_colors').addClass('opacity-5');
//     $('#urgListItem_10_4_colors').addClass('opacity-5');
//     $('#urgListItem_10_5_colors').addClass('opacity-5');
//     $('#urgListItem_10_1_colors').addClass('opacity-5');
// });

// //! --------------------------------------------------------------------------------




// //! Нажатие на элемент каталога - 11

// $('#urgListItem_11_img').on('click', function() {
//     $('#urgListItem_11_color').removeClass('display-n');
//     $('#urgListItem_11_block').removeClass('display-n');
//     $('#urgListItem_11_close').removeClass('display-n');
//     $('#urgListItem_11_img').addClass('display-n');
//     $('#urgListItem_11_text').addClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_2_color').addClass('display-n');
//     $('#urgListItem_2_block').addClass('display-n');
//     $('#urgListItem_2_close').addClass('display-n');
//     $('#urgListItem_2_img').removeClass('display-n');
//     $('#urgListItem_2_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_3_color').addClass('display-n');
//     $('#urgListItem_3_block').addClass('display-n');
//     $('#urgListItem_3_close').addClass('display-n');
//     $('#urgListItem_3_img').removeClass('display-n');
//     $('#urgListItem_3_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_4_color').addClass('display-n');
//     $('#urgListItem_4_block').addClass('display-n');
//     $('#urgListItem_4_close').addClass('display-n');
//     $('#urgListItem_4_img').removeClass('display-n');
//     $('#urgListItem_4_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_5_color').addClass('display-n');
//     $('#urgListItem_5_block').addClass('display-n');
//     $('#urgListItem_5_close').addClass('display-n');
//     $('#urgListItem_5_img').removeClass('display-n');
//     $('#urgListItem_5_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_6_color').addClass('display-n');
//     $('#urgListItem_6_block').addClass('display-n');
//     $('#urgListItem_6_close').addClass('display-n');
//     $('#urgListItem_6_img').removeClass('display-n');
//     $('#urgListItem_6_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_7_color').addClass('display-n');
//     $('#urgListItem_7_block').addClass('display-n');
//     $('#urgListItem_7_close').addClass('display-n');
//     $('#urgListItem_7_img').removeClass('display-n');
//     $('#urgListItem_7_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_8_color').addClass('display-n');
//     $('#urgListItem_8_block').addClass('display-n');
//     $('#urgListItem_8_close').addClass('display-n');
//     $('#urgListItem_8_img').removeClass('display-n');
//     $('#urgListItem_8_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_9_color').addClass('display-n');
//     $('#urgListItem_9_block').addClass('display-n');
//     $('#urgListItem_9_close').addClass('display-n');
//     $('#urgListItem_9_img').removeClass('display-n');
//     $('#urgListItem_9_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_10_color').addClass('display-n');
//     $('#urgListItem_10_block').addClass('display-n');
//     $('#urgListItem_10_close').addClass('display-n');
//     $('#urgListItem_10_img').removeClass('display-n');
//     $('#urgListItem_10_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_1_color').addClass('display-n');
//     $('#urgListItem_1_block').addClass('display-n');
//     $('#urgListItem_1_close').addClass('display-n');
//     $('#urgListItem_1_img').removeClass('display-n');
//     $('#urgListItem_1_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_12_color').addClass('display-n');
//     $('#urgListItem_12_block').addClass('display-n');
//     $('#urgListItem_12_close').addClass('display-n');
//     $('#urgListItem_12_img').removeClass('display-n');
//     $('#urgListItem_12_text').removeClass('display-n');
// });

// $('#urgListItem_11_close').on('click', function() {
//     $('#urgListItem_11_color').addClass('display-n');
//     $('#urgListItem_11_block').addClass('display-n');
//     $('#urgListItem_11_close').addClass('display-n');
//     $('#urgListItem_11_img').removeClass('display-n');
//     $('#urgListItem_11_text').removeClass('display-n');
// });

// $('#urgListItem_11_1_colors').on('click', function() {
//     $('#urgListItem_11_1_colors').removeClass('opacity-5');
//     $('#urgListItem_11_2_colors').addClass('opacity-5');
//     $('#urgListItem_11_3_colors').addClass('opacity-5');
//     $('#urgListItem_11_4_colors').addClass('opacity-5');
//     $('#urgListItem_11_5_colors').addClass('opacity-5');
//     $('#urgListItem_11_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_11_2_colors').on('click', function() {
//     $('#urgListItem_11_2_colors').removeClass('opacity-5');
//     $('#urgListItem_11_1_colors').addClass('opacity-5');
//     $('#urgListItem_11_3_colors').addClass('opacity-5');
//     $('#urgListItem_11_4_colors').addClass('opacity-5');
//     $('#urgListItem_11_5_colors').addClass('opacity-5');
//     $('#urgListItem_11_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_11_3_colors').on('click', function() {
//     $('#urgListItem_11_3_colors').removeClass('opacity-5');
//     $('#urgListItem_11_2_colors').addClass('opacity-5');
//     $('#urgListItem_11_1_colors').addClass('opacity-5');
//     $('#urgListItem_11_4_colors').addClass('opacity-5');
//     $('#urgListItem_11_5_colors').addClass('opacity-5');
//     $('#urgListItem_11_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_11_4_colors').on('click', function() {
//     $('#urgListItem_11_4_colors').removeClass('opacity-5');
//     $('#urgListItem_11_2_colors').addClass('opacity-5');
//     $('#urgListItem_11_3_colors').addClass('opacity-5');
//     $('#urgListItem_11_1_colors').addClass('opacity-5');
//     $('#urgListItem_11_5_colors').addClass('opacity-5');
//     $('#urgListItem_11_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_11_5_colors').on('click', function() {
//     $('#urgListItem_11_5_colors').removeClass('opacity-5');
//     $('#urgListItem_11_2_colors').addClass('opacity-5');
//     $('#urgListItem_11_3_colors').addClass('opacity-5');
//     $('#urgListItem_11_4_colors').addClass('opacity-5');
//     $('#urgListItem_11_1_colors').addClass('opacity-5');
//     $('#urgListItem_11_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_11_6_colors').on('click', function() {
//     $('#urgListItem_11_6_colors').removeClass('opacity-5');
//     $('#urgListItem_11_2_colors').addClass('opacity-5');
//     $('#urgListItem_11_3_colors').addClass('opacity-5');
//     $('#urgListItem_11_4_colors').addClass('opacity-5');
//     $('#urgListItem_11_5_colors').addClass('opacity-5');
//     $('#urgListItem_11_1_colors').addClass('opacity-5');
// });

// //! --------------------------------------------------------------------------------

// //! Нажатие на элемент каталога - 12

// $('#urgListItem_12_img').on('click', function() {
//     $('#urgListItem_12_color').removeClass('display-n');
//     $('#urgListItem_12_block').removeClass('display-n');
//     $('#urgListItem_12_close').removeClass('display-n');
//     $('#urgListItem_12_img').addClass('display-n');
//     $('#urgListItem_12_text').addClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_2_color').addClass('display-n');
//     $('#urgListItem_2_block').addClass('display-n');
//     $('#urgListItem_2_close').addClass('display-n');
//     $('#urgListItem_2_img').removeClass('display-n');
//     $('#urgListItem_2_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_3_color').addClass('display-n');
//     $('#urgListItem_3_block').addClass('display-n');
//     $('#urgListItem_3_close').addClass('display-n');
//     $('#urgListItem_3_img').removeClass('display-n');
//     $('#urgListItem_3_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_4_color').addClass('display-n');
//     $('#urgListItem_4_block').addClass('display-n');
//     $('#urgListItem_4_close').addClass('display-n');
//     $('#urgListItem_4_img').removeClass('display-n');
//     $('#urgListItem_4_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_5_color').addClass('display-n');
//     $('#urgListItem_5_block').addClass('display-n');
//     $('#urgListItem_5_close').addClass('display-n');
//     $('#urgListItem_5_img').removeClass('display-n');
//     $('#urgListItem_5_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_6_color').addClass('display-n');
//     $('#urgListItem_6_block').addClass('display-n');
//     $('#urgListItem_6_close').addClass('display-n');
//     $('#urgListItem_6_img').removeClass('display-n');
//     $('#urgListItem_6_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_7_color').addClass('display-n');
//     $('#urgListItem_7_block').addClass('display-n');
//     $('#urgListItem_7_close').addClass('display-n');
//     $('#urgListItem_7_img').removeClass('display-n');
//     $('#urgListItem_7_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_8_color').addClass('display-n');
//     $('#urgListItem_8_block').addClass('display-n');
//     $('#urgListItem_8_close').addClass('display-n');
//     $('#urgListItem_8_img').removeClass('display-n');
//     $('#urgListItem_8_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_9_color').addClass('display-n');
//     $('#urgListItem_9_block').addClass('display-n');
//     $('#urgListItem_9_close').addClass('display-n');
//     $('#urgListItem_9_img').removeClass('display-n');
//     $('#urgListItem_9_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_10_color').addClass('display-n');
//     $('#urgListItem_10_block').addClass('display-n');
//     $('#urgListItem_10_close').addClass('display-n');
//     $('#urgListItem_10_img').removeClass('display-n');
//     $('#urgListItem_10_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_11_color').addClass('display-n');
//     $('#urgListItem_11_block').addClass('display-n');
//     $('#urgListItem_11_close').addClass('display-n');
//     $('#urgListItem_11_img').removeClass('display-n');
//     $('#urgListItem_11_text').removeClass('display-n');
//     //! ----------------------------------------------
//     $('#urgListItem_1_color').addClass('display-n');
//     $('#urgListItem_1_block').addClass('display-n');
//     $('#urgListItem_1_close').addClass('display-n');
//     $('#urgListItem_1_img').removeClass('display-n');
//     $('#urgListItem_1_text').removeClass('display-n');
// });

// $('#urgListItem_12_close').on('click', function() {
//     $('#urgListItem_12_color').addClass('display-n');
//     $('#urgListItem_12_block').addClass('display-n');
//     $('#urgListItem_12_close').addClass('display-n');
//     $('#urgListItem_12_img').removeClass('display-n');
//     $('#urgListItem_12_text').removeClass('display-n');
// });

// $('#urgListItem_12_1_colors').on('click', function() {
//     $('#urgListItem_12_1_colors').removeClass('opacity-5');
//     $('#urgListItem_12_2_colors').addClass('opacity-5');
//     $('#urgListItem_12_3_colors').addClass('opacity-5');
//     $('#urgListItem_12_4_colors').addClass('opacity-5');
//     $('#urgListItem_12_5_colors').addClass('opacity-5');
//     $('#urgListItem_12_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_12_2_colors').on('click', function() {
//     $('#urgListItem_12_2_colors').removeClass('opacity-5');
//     $('#urgListItem_12_1_colors').addClass('opacity-5');
//     $('#urgListItem_12_3_colors').addClass('opacity-5');
//     $('#urgListItem_12_4_colors').addClass('opacity-5');
//     $('#urgListItem_12_5_colors').addClass('opacity-5');
//     $('#urgListItem_12_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_12_3_colors').on('click', function() {
//     $('#urgListItem_12_3_colors').removeClass('opacity-5');
//     $('#urgListItem_12_2_colors').addClass('opacity-5');
//     $('#urgListItem_12_1_colors').addClass('opacity-5');
//     $('#urgListItem_12_4_colors').addClass('opacity-5');
//     $('#urgListItem_12_5_colors').addClass('opacity-5');
//     $('#urgListItem_12_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_12_4_colors').on('click', function() {
//     $('#urgListItem_12_4_colors').removeClass('opacity-5');
//     $('#urgListItem_12_2_colors').addClass('opacity-5');
//     $('#urgListItem_12_3_colors').addClass('opacity-5');
//     $('#urgListItem_12_1_colors').addClass('opacity-5');
//     $('#urgListItem_12_5_colors').addClass('opacity-5');
//     $('#urgListItem_12_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_12_5_colors').on('click', function() {
//     $('#urgListItem_12_5_colors').removeClass('opacity-5');
//     $('#urgListItem_12_2_colors').addClass('opacity-5');
//     $('#urgListItem_12_3_colors').addClass('opacity-5');
//     $('#urgListItem_12_4_colors').addClass('opacity-5');
//     $('#urgListItem_12_1_colors').addClass('opacity-5');
//     $('#urgListItem_12_6_colors').addClass('opacity-5');
// });
// $('#urgListItem_12_6_colors').on('click', function() {
//     $('#urgListItem_12_6_colors').removeClass('opacity-5');
//     $('#urgListItem_12_2_colors').addClass('opacity-5');
//     $('#urgListItem_12_3_colors').addClass('opacity-5');
//     $('#urgListItem_12_4_colors').addClass('opacity-5');
//     $('#urgListItem_12_5_colors').addClass('opacity-5');
//     $('#urgListItem_12_1_colors').addClass('opacity-5');
// });


//! Модель upsell 


var swiper = new Swiper(".modelUpsell", {
    slidesPerView: 3, 
    spaceBetween: 60, 
    navigation: {
        nextEl: ".model-upsell__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".model-upsell__block-slider .swiper-controls .swiper-button-prev",
    },
});

$('.model-upsell__close').on('click', function() {
    window.location.href = "order.html";
});

//! ------------------------------------------------------------------------------------------




//! Функционал баннера 


//! 1-й блок 

$('#urgListItem_1_1_colors').on('click', function() {
    let urgElementBannerItem_1 = document.getElementById("urgBannerList")
    const id = 1
    const urgListItem_1_1_count = 1
    let urgButtonBlockCountSum_1 = $('#urgButtonBlockCount_1').html()
    console.log(urgButtonBlockCountSum_1)
    let urgListItem_1_1_Value = $(this).val()
    for (var i = 0; i < urgButtonBlockCountSum_1; i++) {
        let newElement = document.createElement("div");
        newElement.classList.add("urg-content__block-banner-item")
        newElement.id = `urgBannerItem_${id}_${urgListItem_1_1_count}`;
        newElement.innerHTML = `<img src="./img/constructor/${urgListItem_1_1_Value}.png" alt="img">`
        urgElementBannerItem_1.appendChild(newElement);
    }

    $(this).attr('disabled', 'disabled')
    $("#urgBannerItem_1_2").remove()
    $("#urgListItem_1_2_colors").removeAttr('disabled')
    $("#urgBannerItem_1_3").remove()
    $("#urgListItem_1_3_colors").removeAttr('disabled')
    $("#urgBannerItem_1_4").remove()
    $("#urgListItem_1_4_colors").removeAttr('disabled')
    $("#urgBannerItem_1_5").remove()
    $("#urgListItem_1_5_colors").removeAttr('disabled')
    $("#urgBannerItem_1_6").remove()
    $("#urgListItem_1_6_colors").removeAttr('disabled')

    $('#urgBlockControls_1').addClass('urg-checked')

    urgCheckerPosition()
});


$('#urgListItem_1_2_colors').on('click', function() {
    id = 1
    const urgListItem_1_2_count = 2
    let urgListItem_1_2_Value = $(this).val()
    let newElement = document.createElement("div");
    newElement.classList.add("urg-content__block-banner-item")
    newElement.id = `urgBannerItem_${id}_${urgListItem_1_2_count}`;
    newElement.innerHTML = `<img src="./img/constructor/${urgListItem_1_2_Value}.png" alt="img">`
    document.getElementById("urgBannerList").appendChild(newElement);

    $(this).attr('disabled', 'disabled')
    $("#urgBannerItem_1_1").remove()
    $("#urgListItem_1_1_colors").removeAttr('disabled')
    $("#urgBannerItem_1_3").remove()
    $("#urgListItem_1_3_colors").removeAttr('disabled')
    $("#urgBannerItem_1_4").remove()
    $("#urgListItem_1_4_colors").removeAttr('disabled')
    $("#urgBannerItem_1_5").remove()
    $("#urgListItem_1_6_colors").removeAttr('disabled')
    $("#urgBannerItem_1_6").remove()
    $("#urgListItem_1_6_colors").removeAttr('disabled')

    $('#urgBlockControls_1').addClass('urg-checked')

    urgCheckerPosition()
});


$('#urgListItem_1_3_colors').on('click', function() {
    id = 1
    const urgListItem_1_3_count = 3
    let urgListItem_1_3_Value = $(this).val()
    let newElement = document.createElement("div");
    newElement.classList.add("urg-content__block-banner-item")
    newElement.id = `urgBannerItem_${id}_${urgListItem_1_3_count}`;
    newElement.innerHTML = `<img src="./img/constructor/${urgListItem_1_3_Value}.png" alt="img">`
    document.getElementById("urgBannerList").appendChild(newElement);

    $(this).attr('disabled', 'disabled')
    $("#urgBannerItem_1_1").remove()
    $("#urgListItem_1_1_colors").removeAttr('disabled')
    $("#urgBannerItem_1_2").remove()
    $("#urgListItem_1_2_colors").removeAttr('disabled')
    $("#urgBannerItem_1_4").remove()
    $("#urgListItem_1_4_colors").removeAttr('disabled')
    $("#urgBannerItem_1_5").remove()
    $("#urgListItem_1_5_colors").removeAttr('disabled')
    $("#urgBannerItem_1_6").remove()
    $("#urgListItem_1_6_colors").removeAttr('disabled')

    $('#urgBlockControls_1').addClass('urg-checked')

    urgCheckerPosition()
});


$('#urgListItem_1_4_colors').on('click', function() {
    id = 1
    const urgListItem_1_4_count = 4
    let urgListItem_1_4_Value = $(this).val()
    let newElement = document.createElement("div");
    newElement.classList.add("urg-content__block-banner-item")
    newElement.id = `urgBannerItem_${id}_${urgListItem_1_4_count}`;
    newElement.innerHTML = `<img src="./img/constructor/${urgListItem_1_4_Value}.png" alt="img">`
    document.getElementById("urgBannerList").appendChild(newElement);

    $(this).attr('disabled', 'disabled')
    $("#urgBannerItem_1_1").remove()
    $("#urgListItem_1_1_colors").removeAttr('disabled')
    $("#urgBannerItem_1_2").remove()
    $("#urgListItem_1_2_colors").removeAttr('disabled')
    $("#urgBannerItem_1_3").remove()
    $("#urgListItem_1_3_colors").removeAttr('disabled')
    $("#urgBannerItem_1_5").remove()
    $("#urgListItem_1_5_colors").removeAttr('disabled')
    $("#urgBannerItem_1_6").remove()
    $("#urgListItem_1_6_colors").removeAttr('disabled')

    $('#urgBlockControls_1').addClass('urg-checked')

    urgCheckerPosition()
});


$('#urgListItem_1_5_colors').on('click', function() {
    id = 1
    const urgListItem_1_5_count = 5
    let urgListItem_1_5_Value = $(this).val()
    let newElement = document.createElement("div");
    newElement.classList.add("urg-content__block-banner-item")
    newElement.id = `urgBannerItem_${id}_${urgListItem_1_5_count}`;
    newElement.innerHTML = `<img src="./img/constructor/${urgListItem_1_5_Value}.png" alt="img">`
    document.getElementById("urgBannerList").appendChild(newElement);

    $(this).attr('disabled', 'disabled')
    $("#urgBannerItem_1_1").remove()
    $("#urgListItem_1_1_colors").removeAttr('disabled')
    $("#urgBannerItem_1_2").remove()
    $("#urgListItem_1_2_colors").removeAttr('disabled')
    $("#urgBannerItem_1_3").remove()
    $("#urgListItem_1_3_colors").removeAttr('disabled')
    $("#urgBannerItem_1_4").remove()
    $("#urgListItem_1_4_colors").removeAttr('disabled')
    $("#urgBannerItem_1_6").remove()
    $("#urgListItem_1_6_colors").removeAttr('disabled')

    $('#urgBlockControls_1').addClass('urg-checked')

    urgCheckerPosition()
});


$('#urgListItem_1_6_colors').on('click', function() {
    id = 1
    const urgListItem_1_6_count = 6
    let urgListItem_1_6_Value = $(this).val()
    let newElement = document.createElement("div");
    newElement.classList.add("urg-content__block-banner-item")
    newElement.id = `urgBannerItem_${id}_${urgListItem_1_6_count}`;
    newElement.innerHTML = `<img src="./img/constructor/${urgListItem_1_6_Value}.png" alt="img">`
    document.getElementById("urgBannerList").appendChild(newElement);

    $(this).attr('disabled', 'disabled')
    $("#urgBannerItem_1_1").remove()
    $("#urgListItem_1_1_colors").removeAttr('disabled')
    $("#urgBannerItem_1_2").remove()
    $("#urgListItem_1_2_colors").removeAttr('disabled')
    $("#urgBannerItem_1_3").remove()
    $("#urgListItem_1_3_colors").removeAttr('disabled')
    $("#urgBannerItem_1_4").remove()
    $("#urgListItem_1_4_colors").removeAttr('disabled')
    $("#urgBannerItem_1_5").remove()
    $("#urgListItem_1_5_colors").removeAttr('disabled')

    $('#urgBlockControls_1').addClass('urg-checked')

    urgCheckerPosition()
});

//! ================================================================================




// //! 2-й блок 

// $('#urgListItem_2_1_colors').on('click', function() {
//     id = 2
//     const urgListItem_2_1_count = 1
//     let urgListItem_2_1_Value = $(this).val()
//     let newElement = document.createElement("div");
//     newElement.classList.add("urg-content__block-banner-item")
//     newElement.id = `urgBannerItem_${id}_${urgListItem_2_1_count}`;
//     newElement.innerHTML = `<img src="./img/constructor/${urgListItem_2_1_Value}.png" alt="img">`
//     document.getElementById("urgBannerList").appendChild(newElement);

//     $(this).attr('disabled', 'disabled')
//     $("#urgBannerItem_2_2").remove()
//     $("#urgListItem_2_2_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_3").remove()
//     $("#urgListItem_2_3_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_4").remove()
//     $("#urgListItem_2_4_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_5").remove()
//     $("#urgListItem_2_5_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_6").remove()
//     $("#urgListItem_2_6_colors").removeAttr('disabled')

//     $('#urgBlockControls_2').addClass('urg-checked')

//     urgCheckerPosition()
// });


// $('#urgListItem_2_2_colors').on('click', function() {
//     id = 2
//     const urgListItem_2_2_count = 2
//     let urgListItem_2_2_Value = $(this).val()
//     let newElement = document.createElement("div");
//     newElement.classList.add("urg-content__block-banner-item")
//     newElement.id = `urgBannerItem_${id}_${urgListItem_2_2_count}`;
//     newElement.innerHTML = `<img src="./img/constructor/${urgListItem_2_2_Value}.png" alt="img">`
//     document.getElementById("urgBannerList").appendChild(newElement);

//     $(this).attr('disabled', 'disabled')
//     $("#urgBannerItem_2_1").remove()
//     $("#urgListItem_2_1_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_3").remove()
//     $("#urgListItem_2_3_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_4").remove()
//     $("#urgListItem_2_4_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_5").remove()
//     $("#urgListItem_2_6_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_6").remove()
//     $("#urgListItem_2_6_colors").removeAttr('disabled')

//     $('#urgBlockControls_2').addClass('urg-checked')

//     urgCheckerPosition()
// });


// $('#urgListItem_2_3_colors').on('click', function() {
//     id = 2
//     const urgListItem_2_3_count = 3
//     let urgListItem_2_3_Value = $(this).val()
//     let newElement = document.createElement("div");
//     newElement.classList.add("urg-content__block-banner-item")
//     newElement.id = `urgBannerItem_${id}_${urgListItem_2_3_count}`;
//     newElement.innerHTML = `<img src="./img/constructor/${urgListItem_2_3_Value}.png" alt="img">`
//     document.getElementById("urgBannerList").appendChild(newElement);

//     $(this).attr('disabled', 'disabled')
//     $("#urgBannerItem_2_1").remove()
//     $("#urgListItem_2_1_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_2").remove()
//     $("#urgListItem_2_2_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_4").remove()
//     $("#urgListItem_2_4_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_5").remove()
//     $("#urgListItem_2_5_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_6").remove()
//     $("#urgListItem_2_6_colors").removeAttr('disabled')

//     $('#urgBlockControls_2').addClass('urg-checked')

//     urgCheckerPosition()
// });


// $('#urgListItem_2_4_colors').on('click', function() {
//     id = 2
//     const urgListItem_2_4_count = 4
//     let urgListItem_2_4_Value = $(this).val()
//     let newElement = document.createElement("div");
//     newElement.classList.add("urg-content__block-banner-item")
//     newElement.id = `urgBannerItem_${id}_${urgListItem_2_4_count}`;
//     newElement.innerHTML = `<img src="./img/constructor/${urgListItem_2_4_Value}.png" alt="img">`
//     document.getElementById("urgBannerList").appendChild(newElement);

//     $(this).attr('disabled', 'disabled')
//     $("#urgBannerItem_2_1").remove()
//     $("#urgListItem_2_1_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_2").remove()
//     $("#urgListItem_2_2_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_3").remove()
//     $("#urgListItem_2_3_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_5").remove()
//     $("#urgListItem_2_5_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_6").remove()
//     $("#urgListItem_2_6_colors").removeAttr('disabled')

//     $('#urgBlockControls_2').addClass('urg-checked')

//     urgCheckerPosition()
// });


// $('#urgListItem_2_5_colors').on('click', function() {
//     id = 2
//     const urgListItem_2_5_count = 5
//     let urgListItem_2_5_Value = $(this).val()
//     let newElement = document.createElement("div");
//     newElement.classList.add("urg-content__block-banner-item")
//     newElement.id = `urgBannerItem_${id}_${urgListItem_2_5_count}`;
//     newElement.innerHTML = `<img src="./img/constructor/${urgListItem_2_5_Value}.png" alt="img">`
//     document.getElementById("urgBannerList").appendChild(newElement);

//     $(this).attr('disabled', 'disabled')
//     $("#urgBannerItem_2_1").remove()
//     $("#urgListItem_2_1_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_2").remove()
//     $("#urgListItem_2_2_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_3").remove()
//     $("#urgListItem_2_3_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_4").remove()
//     $("#urgListItem_2_4_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_6").remove()
//     $("#urgListItem_2_6_colors").removeAttr('disabled')

//     $('#urgBlockControls_2').addClass('urg-checked')

//     urgCheckerPosition()
// });


// $('#urgListItem_2_6_colors').on('click', function() {
//     id = 2
//     const urgListItem_2_6_count = 6
//     let urgListItem_2_6_Value = $(this).val()
//     let newElement = document.createElement("div");
//     newElement.classList.add("urg-content__block-banner-item")
//     newElement.id = `urgBannerItem_${id}_${urgListItem_2_6_count}`;
//     newElement.innerHTML = `<img src="./img/constructor/${urgListItem_2_6_Value}.png" alt="img">`
//     document.getElementById("urgBannerList").appendChild(newElement);

//     $(this).attr('disabled', 'disabled')
//     $("#urgBannerItem_2_1").remove()
//     $("#urgListItem_2_1_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_2").remove()
//     $("#urgListItem_2_2_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_3").remove()
//     $("#urgListItem_2_3_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_4").remove()
//     $("#urgListItem_2_4_colors").removeAttr('disabled')
//     $("#urgBannerItem_2_5").remove()
//     $("#urgListItem_2_5_colors").removeAttr('disabled')

//     $('#urgBlockControls_2').addClass('urg-checked')

//     urgCheckerPosition()
// });

//! ================================================================================



function urgCheckerPosition() {

}

$('.urg-content__block-list-item-close').on('click', function() {
    let urgButtonClose = $(this).attr('value')
    if( urgButtonClose == 'urgListItem_1') {
        $('#urgBannerItem_1_1').remove()
        $('#urgBannerItem_1_2').remove()
        $('#urgBannerItem_1_3').remove()
        $('#urgBannerItem_1_4').remove()
        $('#urgBannerItem_1_5').remove()
        $('#urgBannerItem_1_6').remove()

        $('#urgListItem_1_color .urg-content__block-list-item-colors').removeClass('opacity-5')

        $('#urgBlockControls_1').removeClass('urg-checked')

    } else if( urgButtonClose == 'urgListItem_2') {
        $('#urgBannerItem_2_1').remove()
        $('#urgBannerItem_2_2').remove()
        $('#urgBannerItem_2_3').remove()
        $('#urgBannerItem_2_4').remove()
        $('#urgBannerItem_2_5').remove()
        $('#urgBannerItem_2_6').remove()

        $('#urgListItem_2_color .urg-content__block-list-item-colors').removeClass('opacity-5')

        $('#urgBlockControls_2').removeClass('urg-checked')

    } else if( urgButtonClose == 'urgListItem_3') {
        $('#urgBannerItem_3_1').remove()
        $('#urgBannerItem_3_2').remove()
        $('#urgBannerItem_3_3').remove()
        $('#urgBannerItem_3_4').remove()
        $('#urgBannerItem_3_5').remove()
        $('#urgBannerItem_3_6').remove()

        $('#urgListItem_3_color .urg-content__block-list-item-colors').removeClass('opacity-5')

        $('#urgBlockControls_3').removeClass('urg-checked')

    }

});


//! ------------------------------------------------------------------------------------------



//! Свайп блока внизу 


$('.const-content__swipe').on('click', function() {
    $(this).addClass('display-n');
    $('.const-content__swipers').removeClass('display-n');
});
$('.const-content__swipers-btn').on('click', function() {
    $('.const-content__swipers').addClass('display-n');
    $('.const-content__swipe').removeClass('display-n');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 1


var constListSlider_1 = new Swiper(".constListSlider-1", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-1 .swiper-control-1 .swiper-button-next",
        prevEl: ".const-content__block-slider-1 .swiper-control-1 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 1


$('#constListItem-1').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-1').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
});
$('#constBlockSliderClose-1').on('click', function() {
    $('#constListItem-1').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-1').toggleClass('display-n');
});
$('#constBlockSliderColor-1-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-1-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-1-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-1-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-1-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-1-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-1-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-1-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-1-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-1-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-1-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-1-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-1-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-1-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-1-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-1-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-1-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-1-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-1-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-1-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------



//! Слайдеры для каталогов - 2


var constListSlider_1 = new Swiper(".constListSlider-2", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-2 .swiper-control-2 .swiper-button-next",
        prevEl: ".const-content__block-slider-2 .swiper-control-2 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 2


$('#constListItem-2').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-2').toggleClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
});
$('#constBlockSliderClose-2').on('click', function() {
    $('#constListItem-2').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-2').toggleClass('display-n');
});
$('#constBlockSliderColor-2-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-2-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-2-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-2-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-2-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-2-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-2-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-2-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-2-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-2-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-2-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-2-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 3


var constListSlider_1 = new Swiper(".constListSlider-3", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-3 .swiper-control-3 .swiper-button-next",
        prevEl: ".const-content__block-slider-3 .swiper-control-3 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 3


$('#constListItem-3').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-3').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
});
$('#constBlockSliderClose-3').on('click', function() {
    $('#constListItem-3').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-3').toggleClass('display-n');
});
$('#constBlockSliderColor-3-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-3-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-3-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-3-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-3-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-3-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-3-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-3-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-3-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-3-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-3-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-3-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-3-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-3-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-3-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-3-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-3-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-3-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-3-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-3-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 4


var constListSlider_1 = new Swiper(".constListSlider-4", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-4 .swiper-control-4 .swiper-button-next",
        prevEl: ".const-content__block-slider-4 .swiper-control-4 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 4


$('#constListItem-4').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-4').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
});
$('#constBlockSliderClose-4').on('click', function() {
    $('#constListItem-4').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-4').toggleClass('display-n');
});
$('#constBlockSliderColor-4-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-4-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-4-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-4-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-4-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-4-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-4-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-4-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-4-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-4-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-4-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-4-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-4-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-4-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-4-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-4-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-4-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-4-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-4-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-4-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 5


var constListSlider_1 = new Swiper(".constListSlider-5", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-5 .swiper-control-5 .swiper-button-next",
        prevEl: ".const-content__block-slider-5 .swiper-control-5 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 5


$('#constListItem-5').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-5').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
});
$('#constBlockSliderClose-5').on('click', function() {
    $('#constListItem-5').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-5').toggleClass('display-n');
});
$('#constBlockSliderColor-5-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-5-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-5-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-5-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-5-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-5-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-5-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-5-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-5-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-5-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-5-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-5-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-5-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-5-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-5-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-5-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-5-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-5-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-5-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-5-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 6


var constListSlider_1 = new Swiper(".constListSlider-6", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-6 .swiper-control-6 .swiper-button-next",
        prevEl: ".const-content__block-slider-6 .swiper-control-6 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 6


$('#constListItem-6').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-6').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
});
$('#constBlockSliderClose-6').on('click', function() {
    $('#constListItem-6').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-6').toggleClass('display-n');
});
$('#constBlockSliderColor-6-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-6-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-6-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-6-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-6-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-6-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-6-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-6-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-6-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-6-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-6-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-6-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-6-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-6-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-6-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-6-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-6-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-6-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-6-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-6-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 7


var constListSlider_1 = new Swiper(".constListSlider-7", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-7 .swiper-control-7 .swiper-button-next",
        prevEl: ".const-content__block-slider-7 .swiper-control-7 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 7


$('#constListItem-7').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-7').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
});
$('#constBlockSliderClose-7').on('click', function() {
    $('#constListItem-7').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-7').toggleClass('display-n');
});
$('#constBlockSliderColor-7-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-7-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-7-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-7-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-7-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-7-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-7-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-7-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-7-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-7-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-7-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-7-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-7-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-7-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-7-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-7-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-7-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-7-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-7-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-7-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 8


var constListSlider_1 = new Swiper(".constListSlider-8", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-8 .swiper-control-8 .swiper-button-next",
        prevEl: ".const-content__block-slider-8 .swiper-control-8 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 8


$('#constListItem-8').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-8').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
});
$('#constBlockSliderClose-8').on('click', function() {
    $('#constListItem-8').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-8').toggleClass('display-n');
});
$('#constBlockSliderColor-8-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-8-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-8-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-8-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-8-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-8-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-8-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-8-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-8-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-8-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-8-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-8-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-8-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-8-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-8-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-8-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-8-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-8-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-8-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-8-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 9


var constListSlider_1 = new Swiper(".constListSlider-9", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-9 .swiper-control-9 .swiper-button-next",
        prevEl: ".const-content__block-slider-9 .swiper-control-9 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 9


$('#constListItem-9').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-9').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
});
$('#constBlockSliderClose-9').on('click', function() {
    $('#constListItem-9').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-9').toggleClass('display-n');
});
$('#constBlockSliderColor-9-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-9-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-9-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-9-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-9-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-9-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-9-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-9-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-9-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-9-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-9-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-9-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-9-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-9-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-9-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-9-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-9-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-9-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-9-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-9-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 10


var constListSlider_1 = new Swiper(".constListSlider-10", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-10 .swiper-control-10 .swiper-button-next",
        prevEl: ".const-content__block-slider-10 .swiper-control-10 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 10


$('#constListItem-10').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-10').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
});
$('#constBlockSliderClose-10').on('click', function() {
    $('#constListItem-10').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-10').toggleClass('display-n');
});
$('#constBlockSliderColor-10-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-10-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-10-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-10-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-10-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-10-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-10-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-10-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-10-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-10-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-10-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-10-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-10-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-10-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-10-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-10-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-10-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-10-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-10-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-10-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------



//! Слайдеры для каталогов - 11


var constListSlider_1 = new Swiper(".constListSlider-11", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-11 .swiper-control-11 .swiper-button-next",
        prevEl: ".const-content__block-slider-11 .swiper-control-11 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 11


$('#constListItem-11').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constListItem-12').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-11').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
    $('#constBlockSlider-12').addClass('display-n');
});
$('#constBlockSliderClose-11').on('click', function() {
    $('#constListItem-11').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-11').toggleClass('display-n');
});
$('#constBlockSliderColor-11-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-11-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-11-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-11-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-11-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-11-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-11-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-11-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-11-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-11-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-11-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-11-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-11-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-11-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-11-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-11-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-11-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-11-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-11-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-11-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для каталогов - 12


var constListSlider_1 = new Swiper(".constListSlider-12", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-slider-12 .swiper-control-12 .swiper-button-next",
        prevEl: ".const-content__block-slider-12 .swiper-control-12 .swiper-button-prev",
    },
});


//! ------------------------------------------------------------------------------------


//! Нажатие на блоки в каталогах - 12


$('#constListItem-12').on('click', function() {
    $(this).toggleClass('const-content__block-list-item-active');
    $('#constListItem-2').removeClass('const-content__block-list-item-active');
    $('#constListItem-3').removeClass('const-content__block-list-item-active');
    $('#constListItem-4').removeClass('const-content__block-list-item-active');
    $('#constListItem-5').removeClass('const-content__block-list-item-active');
    $('#constListItem-6').removeClass('const-content__block-list-item-active');
    $('#constListItem-7').removeClass('const-content__block-list-item-active');
    $('#constListItem-8').removeClass('const-content__block-list-item-active');
    $('#constListItem-9').removeClass('const-content__block-list-item-active');
    $('#constListItem-10').removeClass('const-content__block-list-item-active');
    $('#constListItem-11').removeClass('const-content__block-list-item-active');
    $('#constListItem-1').removeClass('const-content__block-list-item-active');
    $('#constBlockSlider-12').toggleClass('display-n');
    $('#constBlockSlider-2').addClass('display-n');
    $('#constBlockSlider-3').addClass('display-n');
    $('#constBlockSlider-4').addClass('display-n');
    $('#constBlockSlider-5').addClass('display-n');
    $('#constBlockSlider-6').addClass('display-n');
    $('#constBlockSlider-7').addClass('display-n');
    $('#constBlockSlider-8').addClass('display-n');
    $('#constBlockSlider-9').addClass('display-n');
    $('#constBlockSlider-10').addClass('display-n');
    $('#constBlockSlider-11').addClass('display-n');
    $('#constBlockSlider-1').addClass('display-n');
});
$('#constBlockSliderClose-12').on('click', function() {
    $('#constListItem-12').toggleClass('const-content__block-list-item-active');
    $('#constBlockSlider-12').toggleClass('display-n');
});
$('#constBlockSliderColor-12-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-12-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-12-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-12-4-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-12-5-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-1').addClass('opacity-5');
});
$('#constBlockSliderColor-12-6-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-1').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-1').addClass('opacity-5');
});


$('#constBlockSliderColor-12-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-12-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-12-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-12-4-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-12-5-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-2').addClass('opacity-5');
});
$('#constBlockSliderColor-12-6-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-2').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-2').addClass('opacity-5');
});


$('#constBlockSliderColor-12-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-12-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-12-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-12-4-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-12-5-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-6-3').addClass('opacity-5');
});
$('#constBlockSliderColor-12-6-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-12-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-4-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-5-3').addClass('opacity-5');
    $('#constBlockSliderColor-12-1-3').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------



//! Слайдеры для корзин  - 1


var constListSliders_1 = new Swiper(".constListSliders-1", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-sliders-1 .swiper-controls-1 .swiper-button-next",
        prevEl: ".const-content__block-sliders-1 .swiper-controls-1 .swiper-button-prev",
    },
});


$('#constBlockBasket-1').on('click', function() {
    $('#constBlockSliders-1').toggleClass('display-n')
    $('#constBlockSliders-2').addClass('display-n')
    $('#constBlockSliders-3').addClass('display-n')
    $('#constBlockSliders-4').addClass('display-n')
});
$('#constBlockSlidersClose-1').on('click', function() {
    $('#constBlockSliders-1').addClass('display-n')
});

//! ------------------------------------------------------------------------------------


//! Кнопки в слайдере корзины - 1-1


$('.const-content__block-sliders-1-content-img-container').on('click', function() {
    $('#constSlidersContent-1-1-Box').addClass('display-n');
    $('#constSlidersContent-1-1-Container').removeClass('display-n');
    $('#constSlidersContent-1-1-Heart').addClass('display-n');
    $('#constSlidersContent-1-1-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-1-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-box').on('click', function() {
    $('#constSlidersContent-1-1-Box').removeClass('display-n');
    $('#constSlidersContent-1-1-Container').addClass('display-n');
    $('#constSlidersContent-1-1-Heart').addClass('display-n');
    $('#constSlidersContent-1-1-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-1-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-heart').on('click', function() {
    $('#constSlidersContent-1-1-Box').addClass('display-n');
    $('#constSlidersContent-1-1-Container').addClass('display-n');
    $('#constSlidersContent-1-1-Heart').removeClass('display-n');
    $('#constSlidersContent-1-1-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-1-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-cylinder').on('click', function() {
    $('#constSlidersContent-1-1-Box').addClass('display-n');
    $('#constSlidersContent-1-1-Container').addClass('display-n');
    $('#constSlidersContent-1-1-Heart').addClass('display-n');
    $('#constSlidersContent-1-1-Cylinder').removeClass('display-n');
    $('#constSlidersContent-1-1-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-basket').on('click', function() {
    $('#constSlidersContent-1-1-Box').addClass('display-n');
    $('#constSlidersContent-1-1-Container').addClass('display-n');
    $('#constSlidersContent-1-1-Heart').addClass('display-n');
    $('#constSlidersContent-1-1-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-1-Basket').removeClass('display-n');
});


//! ------------------------------------------------------------------------------------


//! Кнопки в слайдере корзины - 1-2


$('.const-content__block-sliders-1-content-img-container').on('click', function() {
    $('#constSlidersContent-1-2-Box').addClass('display-n');
    $('#constSlidersContent-1-2-Container').removeClass('display-n');
    $('#constSlidersContent-1-2-Heart').addClass('display-n');
    $('#constSlidersContent-1-2-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-2-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-box').on('click', function() {
    $('#constSlidersContent-1-2-Box').removeClass('display-n');
    $('#constSlidersContent-1-2-Container').addClass('display-n');
    $('#constSlidersContent-1-2-Heart').addClass('display-n');
    $('#constSlidersContent-1-2-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-2-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-heart').on('click', function() {
    $('#constSlidersContent-1-2-Box').addClass('display-n');
    $('#constSlidersContent-1-2-Container').addClass('display-n');
    $('#constSlidersContent-1-2-Heart').removeClass('display-n');
    $('#constSlidersContent-1-2-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-2-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-cylinder').on('click', function() {
    $('#constSlidersContent-1-2-Box').addClass('display-n');
    $('#constSlidersContent-1-2-Container').addClass('display-n');
    $('#constSlidersContent-1-2-Heart').addClass('display-n');
    $('#constSlidersContent-1-2-Cylinder').removeClass('display-n');
    $('#constSlidersContent-1-2-Basket').addClass('display-n');
});
$('.const-content__block-sliders-1-content-img-basket').on('click', function() {
    $('#constSlidersContent-1-2-Box').addClass('display-n');
    $('#constSlidersContent-1-2-Container').addClass('display-n');
    $('#constSlidersContent-1-2-Heart').addClass('display-n');
    $('#constSlidersContent-1-2-Cylinder').addClass('display-n');
    $('#constSlidersContent-1-2-Basket').removeClass('display-n');
});


//! ------------------------------------------------------------------------------------



//! Слайдеры для корзин  - 2

var constListSliders_2 = new Swiper(".constListSliders-2", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-sliders-2 .swiper-controls-2 .swiper-button-next",
        prevEl: ".const-content__block-sliders-2 .swiper-controls-2 .swiper-button-prev",
    },
});
$('#constBlockBasket-2').on('click', function() {
    $('#constBlockSliders-2').toggleClass('display-n')
    $('#constBlockSliders-1').addClass('display-n')
    $('#constBlockSliders-3').addClass('display-n')
    $('#constBlockSliders-4').addClass('display-n')
});
$('#constBlockSlidersClose-2').on('click', function() {
    $('#constBlockSliders-2').addClass('display-n')
});

//! ------------------------------------------------------------------------------------


//! Слайдеры для корзин color  - 2-1


$('#constBlockSliderColor-2-1-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-1-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-1-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-1-4').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-1-5').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-1-6').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-1-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-1-1').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для корзин color  - 2-2


$('#constBlockSliderColor-2-2-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-4').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-5').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-2-6').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-2-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-2-1').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для корзин color  - 2-3


$('#constBlockSliderColor-2-3-1').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-2').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-3').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-4').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-5').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-6').addClass('opacity-5');
});
$('#constBlockSliderColor-2-3-6').on('click', function() {
    $(this).removeClass('opacity-5');
    $('#constBlockSliderColor-2-3-2').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-3').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-4').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-5').addClass('opacity-5');
    $('#constBlockSliderColor-2-3-1').addClass('opacity-5');
});


//! ------------------------------------------------------------------------------------


//! Слайдеры для корзин  - 3

var constListSliders_3 = new Swiper(".constListSliders-3", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-sliders-3 .swiper-controls-3 .swiper-button-next",
        prevEl: ".const-content__block-sliders-3 .swiper-controls-3 .swiper-button-prev",
    },
});
$('#constBlockBasket-3').on('click', function() {
    $('#constBlockSliders-3').toggleClass('display-n')
    $('#constBlockSliders-2').addClass('display-n')
    $('#constBlockSliders-1').addClass('display-n')
    $('#constBlockSliders-4').addClass('display-n')
});
$('#constBlockSlidersClose-3').on('click', function() {
    $('#constBlockSliders-3').addClass('display-n')
});

//! ------------------------------------------------------------------------------------


//! Слайдеры для корзин  - 4

var constListSliders_4 = new Swiper(".constListSliders-4", {
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
        nextEl: ".const-content__block-sliders-4 .swiper-controls-4 .swiper-button-next",
        prevEl: ".const-content__block-sliders-4 .swiper-controls-4 .swiper-button-prev",
    },
});
$('#constBlockBasket-4').on('click', function() {
    $('#constBlockSliders-4').toggleClass('display-n')
    $('#constBlockSliders-2').addClass('display-n')
    $('#constBlockSliders-3').addClass('display-n')
    $('#constBlockSliders-1').addClass('display-n')
});
$('#constBlockSlidersClose-4').on('click', function() {
    $('#constBlockSliders-4').addClass('display-n')
});

//! ------------------------------------------------------------------------------------


function CloseElementBlockConstructor(el) {
    let idElement = el.id
    let valueElement = $(`#${idElement} button`).val()
    $(`#${valueElement}`).remove()
    $(`#${idElement}`).remove()
    checkCountElementObjConstructor()
}

let elementObjConstructor = {}

//! Кнопка цветов 1.1

let countConstructorBtnItem_1_1 = 0
$('#constructorBtnItem-1-1').on('click', function() {
    let id = 1
    countConstructorBtnItem_1_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_1_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_1_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_1_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_1}" value="constBannerItem_${id}_${countConstructorBtnItem_1_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------

//! Кнопка цветов 1.2

let countConstructorBtnItem_1_2 = 0
$('#constructorBtnItem-1-2').on('click', function() {
    let id = 2
    countConstructorBtnItem_1_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_1_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_1_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_1_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_2}" value="constBannerItem_${id}_${countConstructorBtnItem_1_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------

//! Кнопка цветов 1.3

let countConstructorBtnItem_1_3 = 0
$('#constructorBtnItem-1-3').on('click', function() {
    let id = 3
    countConstructorBtnItem_1_3++
    let constBannerRow_Item_1 = $(this).val()
    console.log(constBannerRow_Item_1)
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_1_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_1_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_1_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_1_3}" value="constBannerItem_${id}_${countConstructorBtnItem_1_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 2.1

let countConstructorBtnItem_2_1 = 0
$('#constructorBtnItem-2-1').on('click', function() {
    let id = 4
    countConstructorBtnItem_2_1++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_2_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_2_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_2_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_1}" value="constBannerItem_${id}_${countConstructorBtnItem_2_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 2.2

let countConstructorBtnItem_2_2 = 0
$('#constructorBtnItem-2-2').on('click', function() {
    let id = 5
    countConstructorBtnItem_2_2++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_2_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_2_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_2_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_2}" value="constBannerItem_${id}_${countConstructorBtnItem_2_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 2.3

let countConstructorBtnItem_2_3 = 0
$('#constructorBtnItem-2-3').on('click', function() {
    let id = 6
    countConstructorBtnItem_2_3++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_2_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_2_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_2_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_2_3}" value="constBannerItem_${id}_${countConstructorBtnItem_2_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 3.1

let countConstructorBtnItem_3_1 = 0
$('#constructorBtnItem-3-1').on('click', function() {
    let id = 7
    countConstructorBtnItem_3_1++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_3_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_3_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_3_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_1}" value="constBannerItem_${id}_${countConstructorBtnItem_3_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 3.2

let countConstructorBtnItem_3_2 = 0
$('#constructorBtnItem-3-2').on('click', function() {
    let id = 8
    countConstructorBtnItem_3_2++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_3_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_3_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_3_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_2}" value="constBannerItem_${id}_${countConstructorBtnItem_3_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 3.3

let countConstructorBtnItem_3_3 = 0
$('#constructorBtnItem-3-3').on('click', function() {
    let id = 9
    countConstructorBtnItem_3_3++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_3_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_3_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_3_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_3_3}" value="constBannerItem_${id}_${countConstructorBtnItem_3_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 4.1

let countConstructorBtnItem_4_1 = 0
$('#constructorBtnItem-4-1').on('click', function() {
    let id = 10
    countConstructorBtnItem_4_1++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_4_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_4_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_4_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_1}" value="constBannerItem_${id}_${countConstructorBtnItem_4_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 4.2

let countConstructorBtnItem_4_2 = 0
$('#constructorBtnItem-4-2').on('click', function() {
    let id = 11
    countConstructorBtnItem_4_2++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_4_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_4_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_4_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_2}" value="constBannerItem_${id}_${countConstructorBtnItem_4_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 4.3

let countConstructorBtnItem_4_3 = 0
$('#constructorBtnItem-4-3').on('click', function() {
    let id = 12
    countConstructorBtnItem_4_3++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_4_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_4_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_4_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_4_3}" value="constBannerItem_${id}_${countConstructorBtnItem_4_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 5.1

let countConstructorBtnItem_5_1 = 0
$('#constructorBtnItem-5-1').on('click', function() {
    let id = 13
    countConstructorBtnItem_5_1++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_5_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_5_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_5_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_1}" value="constBannerItem_${id}_${countConstructorBtnItem_5_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 5.2

let countConstructorBtnItem_5_2 = 0
$('#constructorBtnItem-5-2').on('click', function() {
    let id = 14
    countConstructorBtnItem_5_2++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_5_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_5_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_5_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_2}" value="constBannerItem_${id}_${countConstructorBtnItem_5_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 5.3

let countConstructorBtnItem_5_3 = 0
$('#constructorBtnItem-5-3').on('click', function() {
    let id = 15
    countConstructorBtnItem_5_3++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_5_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_5_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_5_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_5_3}" value="constBannerItem_${id}_${countConstructorBtnItem_5_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------



//! Кнопка цветов 6.1

let countConstructorBtnItem_6_1 = 0
$('#constructorBtnItem-6-1').on('click', function() {
    let id = 16
    countConstructorBtnItem_6_1++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_6_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_6_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_6_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_1}" value="constBannerItem_${id}_${countConstructorBtnItem_6_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 6.2

let countConstructorBtnItem_6_2 = 0
$('#constructorBtnItem-6-2').on('click', function() {
    let id = 17
    countConstructorBtnItem_6_2++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_6_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_6_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_6_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_2}" value="constBannerItem_${id}_${countConstructorBtnItem_6_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 6.3

let countConstructorBtnItem_6_3 = 0
$('#constructorBtnItem-6-3').on('click', function() {
    let id = 18
    countConstructorBtnItem_6_3++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_6_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_6_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_6_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_6_3}" value="constBannerItem_${id}_${countConstructorBtnItem_6_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 7.1

let countConstructorBtnItem_7_1 = 0
$('#constructorBtnItem-7-1').on('click', function() {
    let id = 19
    countConstructorBtnItem_7_1++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_7_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_7_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_7_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_1}" value="constBannerItem_${id}_${countConstructorBtnItem_7_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 7.2

let countConstructorBtnItem_7_2 = 0
$('#constructorBtnItem-7-2').on('click', function() {
    let id = 20
    countConstructorBtnItem_7_2++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_7_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_7_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_7_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_2}" value="constBannerItem_${id}_${countConstructorBtnItem_7_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 7.3

let countConstructorBtnItem_7_3 = 0
$('#constructorBtnItem-7-3').on('click', function() {
    let id = 21
    countConstructorBtnItem_7_3++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_7_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_7_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_7_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_7_3}" value="constBannerItem_${id}_${countConstructorBtnItem_7_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 8.1

let countConstructorBtnItem_8_1 = 0
$('#constructorBtnItem-8-1').on('click', function() {
    let id = 22
    countConstructorBtnItem_8_1++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_8_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_8_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_8_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_1}" value="constBannerItem_${id}_${countConstructorBtnItem_8_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 8.2

let countConstructorBtnItem_8_2 = 0
$('#constructorBtnItem-8-2').on('click', function() {
    let id = 23
    countConstructorBtnItem_8_2++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_8_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_8_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_8_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_2}" value="constBannerItem_${id}_${countConstructorBtnItem_8_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 8.3

let countConstructorBtnItem_8_3 = 0
$('#constructorBtnItem-8-3').on('click', function() {
    let id = 24
    countConstructorBtnItem_8_3++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_8_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_8_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_8_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_8_3}" value="constBannerItem_${id}_${countConstructorBtnItem_8_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 9.1

let countConstructorBtnItem_9_1 = 0
$('#constructorBtnItem-9-1').on('click', function() {
    let id = 25
    countConstructorBtnItem_9_1++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_9_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_9_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_9_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_1}" value="constBannerItem_${id}_${countConstructorBtnItem_9_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 9.2

let countConstructorBtnItem_9_2 = 0
$('#constructorBtnItem-9-2').on('click', function() {
    let id = 26
    countConstructorBtnItem_9_2++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_9_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_9_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_9_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_2}" value="constBannerItem_${id}_${countConstructorBtnItem_9_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 9.3

let countConstructorBtnItem_9_3 = 0
$('#constructorBtnItem-9-3').on('click', function() {
    let id = 27
    countConstructorBtnItem_9_3++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_9_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_9_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_9_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_9_3}" value="constBannerItem_${id}_${countConstructorBtnItem_9_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 10.1

let countConstructorBtnItem_10_1 = 0
$('#constructorBtnItem-10-1').on('click', function() {
    let id = 28
    countConstructorBtnItem_10_1++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_10_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_10_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_10_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_1}" value="constBannerItem_${id}_${countConstructorBtnItem_10_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 10.2

let countConstructorBtnItem_10_2 = 0
$('#constructorBtnItem-10-2').on('click', function() {
    let id = 29
    countConstructorBtnItem_10_2++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_10_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_10_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_10_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_2}" value="constBannerItem_${id}_${countConstructorBtnItem_10_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 10.3

let countConstructorBtnItem_10_3 = 0
$('#constructorBtnItem-10-3').on('click', function() {
    let id = 30
    countConstructorBtnItem_10_3++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_10_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_10_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_10_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_10_3}" value="constBannerItem_${id}_${countConstructorBtnItem_10_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 11.1

let countConstructorBtnItem_11_1 = 0
$('#constructorBtnItem-11-1').on('click', function() {
    let id = 31
    countConstructorBtnItem_11_1++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_11_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_11_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_11_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_1}" value="constBannerItem_${id}_${countConstructorBtnItem_11_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 11.2

let countConstructorBtnItem_11_2 = 0
$('#constructorBtnItem-11-2').on('click', function() {
    let id = 32
    countConstructorBtnItem_11_2++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_11_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_11_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_11_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_2}" value="constBannerItem_${id}_${countConstructorBtnItem_11_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------



//! Кнопка цветов 11.3

let countConstructorBtnItem_11_3 = 0
$('#constructorBtnItem-11-3').on('click', function() {
    let id = 33
    countConstructorBtnItem_11_3++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_11_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_11_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_11_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_11_3}" value="constBannerItem_${id}_${countConstructorBtnItem_11_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 12.1

let countConstructorBtnItem_12_1 = 0
$('#constructorBtnItem-12-1').on('click', function() {
    let id = 34
    countConstructorBtnItem_12_1++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_12_1
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_12_1}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_12_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_1}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_1}" value="constBannerItem_${id}_${countConstructorBtnItem_12_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка цветов 12.2

let countConstructorBtnItem_12_2 = 0
$('#constructorBtnItem-12-2').on('click', function() {
    let id = 35
    countConstructorBtnItem_12_2++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_12_2
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_12_2}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_12_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_2}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_2}" value="constBannerItem_${id}_${countConstructorBtnItem_12_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------



//! Кнопка цветов 12.3

let countConstructorBtnItem_12_3 = 0
$('#constructorBtnItem-12-3').on('click', function() {
    let id = 36
    countConstructorBtnItem_12_3++
    let constBannerRow_Item_1 = $(this).attr('value')
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnItem_12_3
    }
    elementObjConstructor.obj = obj
    let newElement = document.createElement("li");
    newElement.classList.add("const-content__block-banner-row-item")
    newElement.id = `constBannerItem_${id}_${countConstructorBtnItem_12_3}`;
    newElement.innerHTML = `<img src="./img/constructor/${constBannerRow_Item_1}.png" alt="img">`
    document.getElementById("listConstructorBlock").appendChild(newElement);


    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerItemClose_${id}_${countConstructorBtnItem_12_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_3}">
        <button class="const-content__swipers-list-close" id="constBannerItemClose_${id}_${countConstructorBtnItem_12_3}" value="constBannerItem_${id}_${countConstructorBtnItem_12_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">Лилия белая</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------




//! Кнопка товара 1.1

let countConstructorBtnObject_1_1 = 0
$('#constructorBtnObject-1-1').on('click', function() {
    let id = 1
    countConstructorBtnObject_1_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_1_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_1_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_1_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_1_1}" value="constBannerObject_${id}_${countConstructorBtnObject_1_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 1.2

let countConstructorBtnObject_1_2 = 0
$('#constructorBtnObject-1-2').on('click', function() {
    let id = 2
    countConstructorBtnObject_1_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_1_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_1_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_1_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_1_2}" value="constBannerObject_${id}_${countConstructorBtnObject_1_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 1.3

let countConstructorBtnObject_1_3 = 0
$('#constructorBtnObject-1-3').on('click', function() {
    let id = 3
    countConstructorBtnObject_1_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_1_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_1_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_1_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_1_3}" value="constBannerObject_${id}_${countConstructorBtnObject_1_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 1.4

let countConstructorBtnObject_1_4 = 0
$('#constructorBtnObject-1-4').on('click', function() {
    let id = 4
    countConstructorBtnObject_1_4++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_1_4
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_1_4}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_1_4}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_1_4}" value="constBannerObject_${id}_${countConstructorBtnObject_1_4}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 1.5

let countConstructorBtnObject_1_5 = 0
$('#constructorBtnObject-1-5').on('click', function() {
    let id = 5
    countConstructorBtnObject_1_5++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_1_5
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_1_5}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_1_5}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_1_5}" value="constBannerObject_${id}_${countConstructorBtnObject_1_5}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 2.1

let countConstructorBtnObject_2_1 = 0
$('#constructorBtnObject-2-1').on('click', function() {
    let id = 6
    countConstructorBtnObject_2_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_2_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_2_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_2_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_2_1}" value="constBannerObject_${id}_${countConstructorBtnObject_2_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 2.2

let countConstructorBtnObject_2_2 = 0
$('#constructorBtnObject-2-2').on('click', function() {
    let id = 7
    countConstructorBtnObject_2_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_2_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_2_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_2_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_2_2}" value="constBannerObject_${id}_${countConstructorBtnObject_2_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 2.3

let countConstructorBtnObject_2_3 = 0
$('#constructorBtnObject-2-3').on('click', function() {
    let id = 8
    countConstructorBtnObject_2_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_2_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_2_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_2_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_2_3}" value="constBannerObject_${id}_${countConstructorBtnObject_2_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------



//! Кнопка товара 2.4

let countConstructorBtnObject_2_4 = 0
$('#constructorBtnObject-2-4').on('click', function() {
    let id = 9
    countConstructorBtnObject_2_4++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_2_4
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_2_4}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_2_4}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_2_4}" value="constBannerObject_${id}_${countConstructorBtnObject_2_4}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 2.5

let countConstructorBtnObject_2_5 = 0
$('#constructorBtnObject-2-5').on('click', function() {
    let id = 10
    countConstructorBtnObject_2_5++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_2_5
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_2_5}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_2_5}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_2_5}" value="constBannerObject_${id}_${countConstructorBtnObject_2_5}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------




//! Кнопка товара 3.1

let countConstructorBtnObject_3_1 = 0
$('#constructorBtnObject-3-1').on('click', function() {
    let id = 11
    countConstructorBtnObject_3_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_3_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_3_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_3_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_3_1}" value="constBannerObject_${id}_${countConstructorBtnObject_3_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------



//! Кнопка товара 3.2

let countConstructorBtnObject_3_2 = 0
$('#constructorBtnObject-3-2').on('click', function() {
    let id = 12
    countConstructorBtnObject_3_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_3_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_3_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_3_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_3_2}" value="constBannerObject_${id}_${countConstructorBtnObject_3_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 3.3

let countConstructorBtnObject_3_3 = 0
$('#constructorBtnObject-3-3').on('click', function() {
    let id = 13
    countConstructorBtnObject_3_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_3_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_3_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_3_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_3_3}" value="constBannerObject_${id}_${countConstructorBtnObject_3_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 4.1

let countConstructorBtnObject_4_1 = 0
$('#constructorBtnObject-4-1').on('click', function() {
    let id = 14
    countConstructorBtnObject_4_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_4_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_4_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_4_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_4_1}" value="constBannerObject_${id}_${countConstructorBtnObject_4_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 4.2

let countConstructorBtnObject_4_2 = 0
$('#constructorBtnObject-4-2').on('click', function() {
    let id = 15
    countConstructorBtnObject_4_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_4_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_4_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_4_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_4_2}" value="constBannerObject_${id}_${countConstructorBtnObject_4_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 4.3

let countConstructorBtnObject_4_3 = 0
$('#constructorBtnObject-4-3').on('click', function() {
    let id = 16
    countConstructorBtnObject_4_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_4_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_4_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_4_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_4_3}" value="constBannerObject_${id}_${countConstructorBtnObject_4_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------



//! Кнопка товара 5.1

let countConstructorBtnObject_5_1 = 0
$('#constructorBtnObject-5-1').on('click', function() {
    let id = 17
    countConstructorBtnObject_5_1++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_5_1
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_5_1}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_5_1}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_5_1}" value="constBannerObject_${id}_${countConstructorBtnObject_5_1}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 5.2

let countConstructorBtnObject_5_2 = 0
$('#constructorBtnObject-5-2').on('click', function() {
    let id = 18
    countConstructorBtnObject_5_2++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_5_2
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_5_2}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_5_2}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_5_2}" value="constBannerObject_${id}_${countConstructorBtnObject_5_2}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------


//! Кнопка товара 5.3

let countConstructorBtnObject_5_3 = 0
$('#constructorBtnObject-5-3').on('click', function() {
    let id = 19
    countConstructorBtnObject_5_3++
    let constBannerRow_Item_1 = $(this).val()
    let obj = {
        name: `${constBannerRow_Item_1}`,
        id: id,
        count: countConstructorBtnObject_5_3
    }
    elementObjConstructor.obj = obj

    let newElementBlock = document.createElement("div");
    newElementBlock.classList.add("swiper-slide")
    newElementBlock.id = `constBannerObjectClose_${id}_${countConstructorBtnObject_5_3}`;
    newElementBlock.innerHTML = `
    <div class="const-content__swipers-list-item" id="constBannerItemClose_${id}_${countConstructorBtnObject_5_3}">
        <button class="const-content__swipers-list-close" id="constBannerObjectClose_${id}_${countConstructorBtnObject_5_3}" value="constBannerObject_${id}_${countConstructorBtnObject_5_3}" onclick="CloseElementBlockConstructor()">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3281 22.3296L40.2735 40.275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1313 40.4727L40.4712 22.1328" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="const-content__swipers-list-block">
            <div class="const-content__swipers-list-text">${constBannerRow_Item_1}</div>
            <div class="const-content__swipers-list-count">
                <div class="const-content__swipers-list-count-minus">
                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9.34615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="const-content__swipers-list-count-sum">1</div>
                <div class="const-content__swipers-list-count-plus">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69238 3.41699V11.5837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51855 7.5H11.8647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="const-content__swipers-list-price">2990₽</div>
        </div>
    </div>
    `
    document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
    $(`.const-content__swipers-list-close`).attr('onclick', `CloseElementBlockConstructor(this)`)
    checkCountElementObjConstructor()
})

//! ------------------------------------------------------------------------------------------------------------------








function checkCountElementObjConstructor() {
    
    let countElementObjConstructor = document.getElementById('listConstructorBlock').getElementsByClassName('const-content__block-banner-row-item').length
    // console.log(countElementObjConstructor)
    
    let countElementObjConstructorIllustrations = document.getElementById('listConstructorElementPay').getElementsByClassName('swiper-slide').length
    // console.log(countElementObjConstructorIllustrations)

    if(countElementObjConstructor != 0 || countElementObjConstructorIllustrations != 0) {
        $('.const-content__swipe').removeAttr('disabled')
    } else {
        $('.const-content__swipe').attr('disabled', 'disabled')
        $('.const-content__swipers').addClass('display-n')
        $('.const-content__swipe').removeClass('display-n')
    }
    if (countElementObjConstructorIllustrations == 1) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 2) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 3) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 4) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 5) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 6) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 7) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 8) {
        $('.const-content__block-banner-row-item img').css('width', '128px')
    } else if (countElementObjConstructorIllustrations == 9) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 10) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 11) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 12) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 13) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 14) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 15) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 16) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 17) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 18) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 19) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 20) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 21) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 22) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 23) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 24) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 25) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 26) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 27) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 28) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 29) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 30) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 31) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 32) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 33) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 34) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 35) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 36) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 37) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 38) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 39) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 40) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 41) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 42) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 43) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 44) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 45) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 46) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 47) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 48) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 49) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 50) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 51) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
    } else if (countElementObjConstructorIllustrations == 52) {
        $('.const-content__block-banner-row-item img').css('width', '48px')
    }

    


    if (countElementObjConstructorIllustrations == 51) {
        $('.const-content__block-banner-row-item img').css('width', '48px')
        $('.const-content__block-banner-row').css("grid-template-rows", "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr")
        $('.const-content__block-banner-row').css("grid-template-columns", "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr")
        $('.const-content__block-banner-row').css("grid-template-areas",`
            ". . . . . . . item-163 item-164 item-165 item-166 item-167 item-168 item-169 item-170 item-171 item-172 item-173 item-174 item-175 . ."
            ". . . . . . item-149 item-150 item-151 item-152 item-153 item-154 item-155 item-156 item-157 item-158 item-159 item-160 item-161 item-162 . ."
            ". . . . . item-134 item-135 item-136 item-137 item-138 item-139 item-140 item-141 item-142 item-143 item-144 item-145 item-146 item-147 item-148 . ."
            ". . . . item-118 item-119 item-120 item-121 item-122 item-123 item-124 item-125 item-126 item-127 item-128 item-129 item-130 item-131 item-132 item-133 . ."
            ". . . item-101 item-102 item-103 item-104 item-105 item-106 item-107 item-108 item-109 item-110 item-111 item-112 item-113 item-114 item-115 item-116 item-117 . ."
            ". . item-83 item-84 item-85 item-86 item-87 item-88 item-89 item-90 item-91 item-92 item-93 item-94 item-95 item-96 item-97 item-98 item-99 item-100 . ."
            ". item-64 item-65 item-66 item-67 item-68 item-69 item-70 item-71 item-72 item-73 item-74 item-75 item-76 item-77 item-78 item-79 item-80 item-81 item-82 . ."
            "item-44 item-45 item-46 item-47 item-48 item-49 item-50 item-51 item-52 item-53 item-54 item-55 item-56 item-57 item-58 item-59 item-60 item-61 item-62 item-63 . ."
            "item-23 item-24 item-25 item-26 item-27 item-28 item-29 item-30 item-31 item-32 item-33 item-34 item-35 item-36 item-37 item-38 item-39 item-40 item-41 item-42 item-43 ."
            "item-1 item-2 item-3 item-4 item-5 item-6 item-7 item-8 item-9 item-10 item-11 item-12 item-13 item-14 item-15 item-16 item-17 item-18 item-19 item-20 item-21 item-22"
        `)

        $(".const-content__block-banner-row-item img")[0].style.position = 'static'
        $(".const-content__block-banner-row-item img")[1].style.position = 'static'
        $(".const-content__block-banner-row-item img")[2].style.position = 'static'
        $(".const-content__block-banner-row-item img")[3].style.position = 'static'
        $(".const-content__block-banner-row-item img")[4].style.position = 'static'
        $(".const-content__block-banner-row-item img")[5].style.position = 'static'
        $(".const-content__block-banner-row-item img")[6].style.position = 'static'
        $(".const-content__block-banner-row-item img")[7].style.position = 'static'
        $(".const-content__block-banner-row-item img")[8].style.position = 'static'
        $(".const-content__block-banner-row-item img")[9].style.position = 'static'
        $(".const-content__block-banner-row-item img")[10].style.position = 'static'
        $(".const-content__block-banner-row-item img")[11].style.position = 'static'
        $(".const-content__block-banner-row-item img")[12].style.position = 'static'
        $(".const-content__block-banner-row-item img")[13].style.position = 'static'
        $(".const-content__block-banner-row-item img")[14].style.position = 'static'
        $(".const-content__block-banner-row-item img")[15].style.position = 'static'
        $(".const-content__block-banner-row-item img")[16].style.position = 'static'
        $(".const-content__block-banner-row-item img")[17].style.position = 'static'
        $(".const-content__block-banner-row-item img")[18].style.position = 'static'
        $(".const-content__block-banner-row-item img")[19].style.position = 'static'
        $(".const-content__block-banner-row-item img")[20].style.position = 'static'
        $(".const-content__block-banner-row-item img")[21].style.position = 'static'
        $(".const-content__block-banner-row-item img")[22].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[22].style.right = '-25px'
        
        $(".const-content__block-banner-row-item img")[23].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[23].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[24].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[24].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[25].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[25].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[26].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[26].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[27].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[27].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[28].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[28].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[29].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[29].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[30].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[30].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[31].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[31].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[32].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[32].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[33].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[33].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[34].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[34].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[35].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[35].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[36].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[36].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[37].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[37].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[38].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[38].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[39].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[39].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[40].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[40].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[41].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[41].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[42].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[42].style.right = '-25px'

        $(".const-content__block-banner-row-item img")[42].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[42].style.right = '-30px'
        // bottom: -10px;
        // right: -30px;

        $(".const-content__block-banner-row-item img")[43].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[43].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[44].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[44].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[45].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[45].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[46].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[46].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[47].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[47].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[48].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[48].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[49].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[49].style.right = '-50px'

        $(".const-content__block-banner-row-item img")[50].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[50].style.right = '-50px'

        // $(".const-content__block-banner-row-item img")[51].style.bottom = '-20px'
        // $(".const-content__block-banner-row-item img")[51].style.right = '-50px'
    }
    if (countElementObjConstructorIllustrations == 50) {
        $('.const-content__block-banner-row-item img').css('width', '90px')
        $('.const-content__block-banner-row').css('grid-template-rows', '')
        $('.const-content__block-banner-row').css('grid-template-columns', '')
        $('.const-content__block-banner-row').css('grid-template-areas', ``)

        $(".const-content__block-banner-row-item img")[0].style.position = ''
        $(".const-content__block-banner-row-item img")[1].style.position = ''
        $(".const-content__block-banner-row-item img")[2].style.position = ''
        $(".const-content__block-banner-row-item img")[3].style.position = ''
        $(".const-content__block-banner-row-item img")[4].style.position = ''
        $(".const-content__block-banner-row-item img")[5].style.position = ''
        $(".const-content__block-banner-row-item img")[6].style.position = ''
        $(".const-content__block-banner-row-item img")[7].style.position = ''
        $(".const-content__block-banner-row-item img")[8].style.position = ''
        $(".const-content__block-banner-row-item img")[9].style.position = ''
        $(".const-content__block-banner-row-item img")[10].style.position = ''
        $(".const-content__block-banner-row-item img")[11].style.position = ''
        $(".const-content__block-banner-row-item img")[12].style.position = ''
        $(".const-content__block-banner-row-item img")[13].style.position = ''
        $(".const-content__block-banner-row-item img")[14].style.position = ''
        $(".const-content__block-banner-row-item img")[15].style.position = ''
        $(".const-content__block-banner-row-item img")[16].style.position = ''
        $(".const-content__block-banner-row-item img")[17].style.position = ''
        $(".const-content__block-banner-row-item img")[18].style.position = ''
        $(".const-content__block-banner-row-item img")[19].style.position = ''
        $(".const-content__block-banner-row-item img")[20].style.position = ''
        $(".const-content__block-banner-row-item img")[21].style.position = ''
        $(".const-content__block-banner-row-item img")[22].style.bottom = ''
        $(".const-content__block-banner-row-item img")[22].style.right = ''
        $(".const-content__block-banner-row-item img")[23].style.bottom = ''
        $(".const-content__block-banner-row-item img")[23].style.right = ''

        $(".const-content__block-banner-row-item img")[24].style.bottom = ''
        $(".const-content__block-banner-row-item img")[24].style.right = ''

        $(".const-content__block-banner-row-item img")[25].style.bottom = ''
        $(".const-content__block-banner-row-item img")[25].style.right = ''

        $(".const-content__block-banner-row-item img")[26].style.bottom = ''
        $(".const-content__block-banner-row-item img")[26].style.right = ''

        $(".const-content__block-banner-row-item img")[27].style.bottom = ''
        $(".const-content__block-banner-row-item img")[27].style.right = ''

        $(".const-content__block-banner-row-item img")[28].style.bottom = ''
        $(".const-content__block-banner-row-item img")[28].style.right = ''

        $(".const-content__block-banner-row-item img")[29].style.bottom = ''
        $(".const-content__block-banner-row-item img")[29].style.right = ''

        $(".const-content__block-banner-row-item img")[30].style.bottom = ''
        $(".const-content__block-banner-row-item img")[30].style.right = ''

        $(".const-content__block-banner-row-item img")[31].style.bottom = ''
        $(".const-content__block-banner-row-item img")[31].style.right = ''

        $(".const-content__block-banner-row-item img")[32].style.bottom = ''
        $(".const-content__block-banner-row-item img")[32].style.right = ''

        $(".const-content__block-banner-row-item img")[33].style.bottom = ''
        $(".const-content__block-banner-row-item img")[33].style.right = ''

        $(".const-content__block-banner-row-item img")[34].style.bottom = ''
        $(".const-content__block-banner-row-item img")[34].style.right = ''

        $(".const-content__block-banner-row-item img")[35].style.bottom = ''
        $(".const-content__block-banner-row-item img")[35].style.right = ''

        $(".const-content__block-banner-row-item img")[36].style.bottom = ''
        $(".const-content__block-banner-row-item img")[36].style.right = ''

        $(".const-content__block-banner-row-item img")[37].style.bottom = ''
        $(".const-content__block-banner-row-item img")[37].style.right = ''

        $(".const-content__block-banner-row-item img")[38].style.bottom = ''
        $(".const-content__block-banner-row-item img")[38].style.right = ''

        $(".const-content__block-banner-row-item img")[39].style.bottom = ''
        $(".const-content__block-banner-row-item img")[39].style.right = ''

        $(".const-content__block-banner-row-item img")[40].style.bottom = ''
        $(".const-content__block-banner-row-item img")[40].style.right = ''

        $(".const-content__block-banner-row-item img")[41].style.bottom = ''
        $(".const-content__block-banner-row-item img")[41].style.right = ''

        $(".const-content__block-banner-row-item img")[42].style.bottom = ''
        $(".const-content__block-banner-row-item img")[42].style.right = ''

        $(".const-content__block-banner-row-item img")[42].style.bottom = ''
        $(".const-content__block-banner-row-item img")[42].style.right = ''

        $(".const-content__block-banner-row-item img")[43].style.bottom = ''
        $(".const-content__block-banner-row-item img")[43].style.right = ''

        $(".const-content__block-banner-row-item img")[44].style.bottom = ''
        $(".const-content__block-banner-row-item img")[44].style.right = ''

        $(".const-content__block-banner-row-item img")[45].style.bottom = ''
        $(".const-content__block-banner-row-item img")[45].style.right = ''

        $(".const-content__block-banner-row-item img")[46].style.bottom = ''
        $(".const-content__block-banner-row-item img")[46].style.right = ''

        $(".const-content__block-banner-row-item img")[47].style.bottom = ''
        $(".const-content__block-banner-row-item img")[47].style.right = ''

        $(".const-content__block-banner-row-item img")[48].style.bottom = ''
        $(".const-content__block-banner-row-item img")[48].style.right = ''

        $(".const-content__block-banner-row-item img")[49].style.bottom = ''
        $(".const-content__block-banner-row-item img")[49].style.right = ''

        // $(".const-content__block-banner-row-item img")[50].style.bottom = ''
        // $(".const-content__block-banner-row-item img")[50].style.right = ''
    }
    // if (countElementObjConstructorIllustrations == 51) {
    //     $(".const-content__block-banner-row-item img")[50].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[50].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 52) {
    //     $(".const-content__block-banner-row-item img")[51].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[51].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 53) {
    //     $(".const-content__block-banner-row-item img")[52].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[52].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 54) {
    //     $(".const-content__block-banner-row-item img")[53].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[53].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 55) {
    //     $(".const-content__block-banner-row-item img")[54].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[54].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 56) {
    //     $(".const-content__block-banner-row-item img")[55].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[55].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 57) {
    //     $(".const-content__block-banner-row-item img")[56].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[56].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 58) {
    //     $(".const-content__block-banner-row-item img")[57].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[57].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 59) {
    //     $(".const-content__block-banner-row-item img")[58].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[58].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 60) {
    //     $(".const-content__block-banner-row-item img")[59].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[59].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 61) {
    //     $(".const-content__block-banner-row-item img")[60].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[60].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 62) {
    //     $(".const-content__block-banner-row-item img")[61].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[61].style.right = '-50px'
    // }
    // if (countElementObjConstructorIllustrations == 63) {
    //     $(".const-content__block-banner-row-item img")[62].style.bottom = '-20px'
    //     $(".const-content__block-banner-row-item img")[62].style.right = '-50px'
    // }
    if (countElementObjConstructorIllustrations > 174) {
        $('.const-content__block button').attr('disabled', 'disabled')
        $('.const-content__block-sliders-1 button').removeAttr('disabled', 'disabled')
        $('.const-content__block-sliders-2 button').removeAttr('disabled', 'disabled')
        $('.const-content__block-sliders-3 button').removeAttr('disabled', 'disabled')
        $('.const-content__block-sliders-4 button').removeAttr('disabled', 'disabled')
    } else {
        $('.const-content__block button').removeAttr('disabled', 'disabled')
    }

    if (countElementObjConstructorIllustrations == 52 
        || countElementObjConstructorIllustrations == 53 
        || countElementObjConstructorIllustrations == 54 
        || countElementObjConstructorIllustrations == 55
        || countElementObjConstructorIllustrations == 56
        || countElementObjConstructorIllustrations == 57
        || countElementObjConstructorIllustrations == 58
        || countElementObjConstructorIllustrations == 59
        || countElementObjConstructorIllustrations == 60
        || countElementObjConstructorIllustrations == 61
        || countElementObjConstructorIllustrations == 62
        || countElementObjConstructorIllustrations == 63
        || countElementObjConstructorIllustrations == 64
        || countElementObjConstructorIllustrations == 65
        || countElementObjConstructorIllustrations == 66
        || countElementObjConstructorIllustrations == 67
        || countElementObjConstructorIllustrations == 68
        || countElementObjConstructorIllustrations == 69
        || countElementObjConstructorIllustrations == 70
        || countElementObjConstructorIllustrations == 71
        || countElementObjConstructorIllustrations == 72
        || countElementObjConstructorIllustrations == 73
        || countElementObjConstructorIllustrations == 74
        || countElementObjConstructorIllustrations == 75
        || countElementObjConstructorIllustrations == 76
        || countElementObjConstructorIllustrations == 77
        || countElementObjConstructorIllustrations == 78
        || countElementObjConstructorIllustrations == 79
        || countElementObjConstructorIllustrations == 80
        || countElementObjConstructorIllustrations == 81
        || countElementObjConstructorIllustrations == 82
        || countElementObjConstructorIllustrations == 83
        || countElementObjConstructorIllustrations == 84
        || countElementObjConstructorIllustrations == 85
        || countElementObjConstructorIllustrations == 86
        || countElementObjConstructorIllustrations == 87
        || countElementObjConstructorIllustrations == 88
        || countElementObjConstructorIllustrations == 89
        || countElementObjConstructorIllustrations == 90
        || countElementObjConstructorIllustrations == 91
        || countElementObjConstructorIllustrations == 92
        || countElementObjConstructorIllustrations == 93
        || countElementObjConstructorIllustrations == 94
        || countElementObjConstructorIllustrations == 95
        || countElementObjConstructorIllustrations == 96
        || countElementObjConstructorIllustrations == 97
        || countElementObjConstructorIllustrations == 98
        || countElementObjConstructorIllustrations == 99
        || countElementObjConstructorIllustrations == 100
        || countElementObjConstructorIllustrations == 101
        || countElementObjConstructorIllustrations == 102
        || countElementObjConstructorIllustrations == 103
        || countElementObjConstructorIllustrations == 104
        || countElementObjConstructorIllustrations == 105
        || countElementObjConstructorIllustrations == 106
        || countElementObjConstructorIllustrations == 107
        || countElementObjConstructorIllustrations == 108
        || countElementObjConstructorIllustrations == 109
        || countElementObjConstructorIllustrations == 110
        || countElementObjConstructorIllustrations == 111
        || countElementObjConstructorIllustrations == 112
        || countElementObjConstructorIllustrations == 113
        || countElementObjConstructorIllustrations == 114
        || countElementObjConstructorIllustrations == 115
        || countElementObjConstructorIllustrations == 116
        || countElementObjConstructorIllustrations == 117
        || countElementObjConstructorIllustrations == 118
        || countElementObjConstructorIllustrations == 119
        || countElementObjConstructorIllustrations == 120
        || countElementObjConstructorIllustrations == 121
        || countElementObjConstructorIllustrations == 122
        || countElementObjConstructorIllustrations == 123
        || countElementObjConstructorIllustrations == 124
        || countElementObjConstructorIllustrations == 125
        || countElementObjConstructorIllustrations == 126
        || countElementObjConstructorIllustrations == 127
        || countElementObjConstructorIllustrations == 128
        || countElementObjConstructorIllustrations == 129
        || countElementObjConstructorIllustrations == 130
        || countElementObjConstructorIllustrations == 131
        || countElementObjConstructorIllustrations == 132
        || countElementObjConstructorIllustrations == 133
        || countElementObjConstructorIllustrations == 134
        || countElementObjConstructorIllustrations == 135
        || countElementObjConstructorIllustrations == 136
        || countElementObjConstructorIllustrations == 137
        || countElementObjConstructorIllustrations == 138
        || countElementObjConstructorIllustrations == 139
        || countElementObjConstructorIllustrations == 140
        || countElementObjConstructorIllustrations == 141
        || countElementObjConstructorIllustrations == 142
        || countElementObjConstructorIllustrations == 143
        || countElementObjConstructorIllustrations == 144
        || countElementObjConstructorIllustrations == 145
        || countElementObjConstructorIllustrations == 146
        || countElementObjConstructorIllustrations == 147
        || countElementObjConstructorIllustrations == 148
        || countElementObjConstructorIllustrations == 149
        || countElementObjConstructorIllustrations == 150
        || countElementObjConstructorIllustrations == 151
        || countElementObjConstructorIllustrations == 152
        || countElementObjConstructorIllustrations == 153
        || countElementObjConstructorIllustrations == 154
        || countElementObjConstructorIllustrations == 155
        || countElementObjConstructorIllustrations == 156
        || countElementObjConstructorIllustrations == 157
        || countElementObjConstructorIllustrations == 158
        || countElementObjConstructorIllustrations == 159
        || countElementObjConstructorIllustrations == 160
        || countElementObjConstructorIllustrations == 161
        || countElementObjConstructorIllustrations == 162
        || countElementObjConstructorIllustrations == 163
        || countElementObjConstructorIllustrations == 164
        || countElementObjConstructorIllustrations == 165
        || countElementObjConstructorIllustrations == 166
        || countElementObjConstructorIllustrations == 167
        || countElementObjConstructorIllustrations == 168
        || countElementObjConstructorIllustrations == 169
        || countElementObjConstructorIllustrations == 170
        || countElementObjConstructorIllustrations == 171
        || countElementObjConstructorIllustrations == 172
        || countElementObjConstructorIllustrations == 173
        || countElementObjConstructorIllustrations == 174
        || countElementObjConstructorIllustrations == 175
        ) {
        $(".const-content__block-banner-row-item img")[0].style.position = 'static'
        $(".const-content__block-banner-row-item img")[1].style.position = 'static'
        $(".const-content__block-banner-row-item img")[2].style.position = 'static'
        $(".const-content__block-banner-row-item img")[3].style.position = 'static'
        $(".const-content__block-banner-row-item img")[4].style.position = 'static'
        $(".const-content__block-banner-row-item img")[5].style.position = 'static'
        $(".const-content__block-banner-row-item img")[6].style.position = 'static'
        $(".const-content__block-banner-row-item img")[7].style.position = 'static'
        $(".const-content__block-banner-row-item img")[8].style.position = 'static'
        $(".const-content__block-banner-row-item img")[9].style.position = 'static'
        $(".const-content__block-banner-row-item img")[10].style.position = 'static'
        $(".const-content__block-banner-row-item img")[11].style.position = 'static'
        $(".const-content__block-banner-row-item img")[12].style.position = 'static'
        $(".const-content__block-banner-row-item img")[13].style.position = 'static'
        $(".const-content__block-banner-row-item img")[14].style.position = 'static'
        $(".const-content__block-banner-row-item img")[15].style.position = 'static'
        $(".const-content__block-banner-row-item img")[16].style.position = 'static'
        $(".const-content__block-banner-row-item img")[17].style.position = 'static'
        $(".const-content__block-banner-row-item img")[18].style.position = 'static'
        $(".const-content__block-banner-row-item img")[19].style.position = 'static'
        $(".const-content__block-banner-row-item img")[20].style.position = 'static'
        $(".const-content__block-banner-row-item img")[21].style.position = 'static'
        $(".const-content__block-banner-row-item img")[22].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[22].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[23].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[23].style.right = '-25px';
        $(".const-content__block-banner-row-item img")[24].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[24].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[25].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[25].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[26].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[26].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[27].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[27].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[28].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[28].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[29].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[29].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[30].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[30].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[31].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[31].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[32].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[32].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[33].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[33].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[34].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[34].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[35].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[35].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[36].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[36].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[37].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[37].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[38].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[38].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[39].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[39].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[40].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[40].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[41].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[41].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[42].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[42].style.right = '-25px'
        $(".const-content__block-banner-row-item img")[42].style.bottom = '-10px'
        $(".const-content__block-banner-row-item img")[42].style.right = '-30px'
        $(".const-content__block-banner-row-item img")[43].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[43].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[44].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[44].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[45].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[45].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[46].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[46].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[47].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[47].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[48].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[48].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[49].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[49].style.right = '-50px'
        $(".const-content__block-banner-row-item img")[50].style.bottom = '-20px'
        $(".const-content__block-banner-row-item img")[50].style.right = '-50px'
    }
}




var constSwiperListBlock = new Swiper(".constSwiperListBlock", {
    slidesPerView: 9,
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".const-content__swipers-list .swiper-controls .swiper-button-next",
        prevEl: ".const-content__swipers-list .swiper-controls .swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});


var searchConstructSlider = new Swiper(".searchConstructSlider", {

    navigation: {
        nextEl: ".search-content__block-constructs .swiper-controls .swiper-button-next",
        prevEl: ".search-content__block-constructs .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".search-content__block-constructs .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 6,
    spaceBetween: 15,
    breakpoints: {
        1430: {
            slidesPerView: 6,
            spaceBetweenSlides: 0
        },
        1100: {
            slidesPerView: 5,
            spaceBetweenSlides: 0
        },
        850: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        600: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        }
    }
});



var searchCollectionsSlider = new Swiper(".searchCollectionsSlider", {

    navigation: {
        nextEl: ".search-content__block-collections .swiper-controls .swiper-button-next",
        prevEl: ".search-content__block-collections .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".search-content__block-collections .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 4,
    spaceBetween: 15,
    breakpoints: {
        // when window width is <= 499px
        1400: {
            slidesPerView: 4,
            spaceBetweenSlides: 15
        },
        950: {
            slidesPerView: 3,
            spaceBetweenSlides: 15
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 15
        }
    }
});



var searchMonobouquetsSlider = new Swiper(".searchMonobouquetsSlider", {

    navigation: {
        nextEl: ".search-content__block-monobouquets .swiper-controls .swiper-button-next",
        prevEl: ".search-content__block-monobouquets .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".search-content__block-monobouquets .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 4,
    spaceBetween: 15,
    breakpoints: {
        // when window width is <= 499px
        1400: {
            slidesPerView: 4,
            spaceBetweenSlides: 15
        },
        950: {
            slidesPerView: 3,
            spaceBetweenSlides: 15
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 15
        }
    }
});


var searchAddsSlider = new Swiper(".searchAddsSlider", {

    navigation: {
        nextEl: ".search-content__block-adds .swiper-controls .swiper-button-next",
        prevEl: ".search-content__block-adds .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".search-content__block-adds .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 6,
    spaceBetween: 15,
    breakpoints: {
        // when window width is <= 499px
        1350: {
            slidesPerView: 6,
            spaceBetweenSlides: 15
        },
        950: {
            slidesPerView: 5,
            spaceBetweenSlides: 15
        },
        850: {
            slidesPerView: 4,
            spaceBetweenSlides: 15
        },
        0: {
            slidesPerView: 3,
            spaceBetweenSlides: 15
        }
    }
});


$('.search-content__block-collection h3').on('click', function() {
    $(this).toggleClass('search-content__block-collection-active')
    $('.search-content__block-collections .swiper-pagination').toggleClass('display-n')
    $('.search-content__block-collections-adds').toggleClass('display-n')
})
$('.search-content__block-monobouquet h3').on('click', function() {
    $(this).toggleClass('search-content__block-monobouquet-active')
    $('.search-content__block-monobouquets .swiper-pagination').toggleClass('display-n')
    $('.search-content__block-monobouquets-adds').toggleClass('display-n')
})



//! Открытие фильтра 

$('.searchs-content__block-text-filter-block').on('click', function() {
    $('.searchs-content__block-text-filter-wrapper').toggleClass('display-n');
});


//! -------------------------------------------------------------------------------


//! Передача значение из input range

$('#searchsRange-1').on('input',function () {
    $('.searchs-content__block-text-filter-range-value-1').empty().append($(this).val());
});
$('#searchsRange-2').on('input',function () {
    $('.searchs-content__block-text-filter-range-value-2').empty().append($(this).val());
});

//! -------------------------------------------------------------------------------


//! Сброс всех input в фильтре 

const searchsRange_1 = 1680;
const searchsRange_2 = 16090;
$('.searchs-content__block-text-filter-discard').on('click', function() {
    $('#checkbox_1').prop('checked', false);
    $('#checkbox_2').prop('checked', false);
    $('#checkbox_3').prop('checked', false);
    $('#checkbox_4').prop('checked', false);
    $('#checkbox_5').prop('checked', false);
    $('#checkbox_6').prop('checked', true);
    $('#searchsRange-1').val(searchsRange_1);
    $('.searchs-content__block-text-filter-range-value-1').empty().append($('#searchsRange-1').val());
    $('#searchsRange-2').val(searchsRange_2);
    $('.searchs-content__block-text-filter-range-value-2').empty().append($('#searchsRange-2').val());
});

//! -------------------------------------------------------------------------------





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


//! Открытие дополнительного блока 


$('#headerProfileOffersOpen').on('click', function() {
    $(this).addClass('display-n');
    $('#headerProfileOffersAdd').removeClass('display-n');
    $('#headerProfileOffersClose').removeClass('display-n');
    $('.header-profile__offers').addClass('height-100');
    $('.header-profile__offers-title').css('margin', '27px 0 0 0')
});
$('#headerProfileOffersClose').on('click', function() {
    $(this).addClass('display-n');
    $('#headerProfileOffersAdd').addClass('display-n');
    $('#headerProfileOffersOpen').removeClass('display-n');
    $('.header-profile__offers').removeClass('height-100');
    $('.header-profile__offers-title').css('margin', '47px 0 0 0')
});


//! ------------------------------------------------------------------------------

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


// var dates = [new Date(2011, 9 - 1, 19), 
//     new Date(2011, 9 - 1, 20), 
//     new Date(2011, 9 - 1, 21), 
//     new Date(2011, 10 - 1, 31)];

// $('#datepickerProfileEvent').datepicker({
//     numberOfMonths: [1, 1],
//     beforeShowDay: highlightDays
//         }).click(function() {
//         $('.ui-datepicker-today a', $(this).next()).removeClass('ui-state-highlight ui-state-hover');
//         $('.highlight a', $(this).next()).addClass('ui-state-highlight');
//     });


//     $('#datepickerProfileEvent').click(function() {
//     // put your selected date into the data object
//     var data = $('#datepickerProfileEvent').val();
//     /*
//     $.get('getdata.php?date=' + data, function(data) {
//     $('#events').html(data).show('slow');
//     });*/
//     });

//     function highlightDays(date) {
//     for (var i = 0; i < dates.length; i++) {
//     if (dates[i].getTime() == date.getTime()) {
//         return [true, 'highlight'];
//     }
//     }
//     return [true, ''];
// }

var eventDates = {};
eventDates[ new Date( '08/07/2016' )] = new Date( '08/07/2016' );
eventDates[ new Date( '08/12/2016' )] = new Date( '08/12/2016' );
eventDates[ new Date( '08/18/2016' )] = new Date( '08/18/2016' );

// datepicker
$('#datepickerProfileEvent').datepicker({
    altField: $('#datepickerProfileEvent').data('altfield'),
    beforeShowDay: function( date ) {
        var highlight = eventDates[date];
        if( highlight ) {
            return [true, "event", 'Tooltip text'];
        } else {
            return [true, '', ''];
        }
    }
});


$(function() {
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $('.date').datepicker({
        altField: $('.date').data('altfield'),
        format: 'dd.MM.yyyy'
    });
})


$('.header-profile__event-table-calendar-btn').on('click', function() {
    let profileEventDate = $('#datepickerProfileEvent').val()
    $('.header-profile__event-table-calendar-model-date').val(profileEventDate)
})


$('.header-profile__event-table-calendar-model-type').on('click', function() {
    $('.header-profile__event-table-calendar-model-block').toggleClass('display-n')
})

$('.header-profile__event-table-calendar-model-item-1').on('click', function() {
    $('.header-profile__event-table-calendar-model-block').addClass('display-n')
    let profileEventModelItem_1 = $(this).text()
    $('.header-profile__event-table-calendar-model-type').html(profileEventModelItem_1)
    $('.header-profile__event-table-calendar-model-type').css('color', 'white')
})
$('.header-profile__event-table-calendar-model-item-2').on('click', function() {
    $('.header-profile__event-table-calendar-model-block').addClass('display-n')
    let profileEventModelItem_2 = $(this).text()
    $('.header-profile__event-table-calendar-model-type').html(profileEventModelItem_2)
    $('.header-profile__event-table-calendar-model-type').css('color', 'white')
})
$('.header-profile__event-table-calendar-model-item-3').on('click', function() {
    $('.header-profile__event-table-calendar-model-block').addClass('display-n')
    let profileEventModelItem_3 = $(this).text()
    $('.header-profile__event-table-calendar-model-type').html(profileEventModelItem_3)
    $('.header-profile__event-table-calendar-model-type').css('color', 'white')
})
$('.header-profile__event-table-calendar-model-item-4').on('click', function() {
    $('.header-profile__event-table-calendar-model-block').addClass('display-n')
    let profileEventModelItem_4 = $(this).text()
    $('.header-profile__event-table-calendar-model-type').html(profileEventModelItem_4)
    $('.header-profile__event-table-calendar-model-type').css('color', 'white')
})

var modelOrdersSliders = new Swiper(".modelOrdersSliders", {
    slidesPerView: 1, 
    spaceBetween: 10,
    navigation: {
        nextEl: ".header-profile__orders-table-info-slider .swiper-sliders .swiper-button-next",
        prevEl: ".header-profile__orders-table-info-slider .swiper-sliders .swiper-button-prev",
    },
});

$('.header-profile__burger').on('click', function() {
    $('.header-profile__menu-list').addClass('menu-profile-open')
});
$('.header-profile__menu-list-close').on('click', function() {
    $('.header-profile__menu-list').removeClass('menu-profile-open')
})


//! Календарь скидок 

// const date = new Date();

// const renderCalendar = () => {
//     date.setDate(1);

//     const monthDays = document.querySelector(".days");

//     const lastDay = new Date(
//         date.getFullYear(),
//         date.getMonth() + 1,
//         0
//     ).getDate();

//     const prevLastDay = new Date(
//         date.getFullYear(),
//         date.getMonth(),
//         0
//     ).getDate();

//     const firstDayIndex = date.getDay();

//     // console.log(lastDay)

//     const lastDayIndex = new Date(
//         date.getFullYear(),
//         date.getMonth() + 1,
//         0
//     ).getDay();

//     const nextDays = 7 - lastDayIndex - 1;

//     const months = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December",
//     ];
    

//     document.querySelector(".date h1").innerHTML = months[date.getMonth()];

//     document.querySelector(".date p").innerHTML = new Date().getFullYear();

//     const mouthRu = $('.calendar h1').text()
//     if(mouthRu === 'January') {
//         $('.calendar h1').html('Январь')
//     } else if(mouthRu === 'February') {
//         $('.calendar h1').html('Февраль')
//     } else if(mouthRu === 'March') {
//         $('.calendar h1').html('Март')
//     } else if(mouthRu === 'April') {
//         $('.calendar h1').html('Апрель')
//     } else if(mouthRu === 'May') {
//         $('.calendar h1').html('Май')
//     } else if(mouthRu === 'June') {
//         $('.calendar h1').html('Июнь')
//     } else if(mouthRu === 'July') {
//         $('.calendar h1').html('Июль')
//     } else if(mouthRu === 'August') {
//         $('.calendar h1').html('Август')
//     } else if(mouthRu === 'September') {
//         $('.calendar h1').html('Сентябрь')
//     } else if(mouthRu === 'October') {
//         $('.calendar h1').html('Октябрь')
//     } else if(mouthRu === 'November') {
//         $('.calendar h1').html('Ноябрь')
//     } else if(mouthRu === 'December') {
//         $('.calendar h1').html('Декабрь')
//     } else {
//         $('.calendar h1').html('')
//     }



//     let days = "";

//     for (let x = firstDayIndex; x > 0; x--) {
//         days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//     }

//     for (let i = 1; i <= lastDay; i++) {
//         if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
//             days += `<div class="today">${i}</div>`;
//         } else {
//             days += `<div>${i}</div>`;
//         }
//     }

//     for (let j = 1; j <= nextDays; j++) {
//         days += `<div class="next-date">${j}</div>`;
//         monthDays.innerHTML = days;
//     }
//     };

//     $(".prev").on("click", function() {
//         date.setMonth(date.getMonth() - 1);
//         renderCalendar();
//     });

//     $(".next").on("click", function() {
//         date.setMonth(date.getMonth() + 1);
//         renderCalendar();
//     });



// renderCalendar();


$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);


	$("#datepickerIndex").datepicker();


	$("#datepickerCatalog-1").datepicker();
    $("#datepickerCatalog-2").datepicker();
    $("#datepickerCatalog-3").datepicker();

    $("#datepickerToy-1").datepicker();
    $("#datepickerToy-2").datepicker();
    $("#datepickerToy-3").datepicker();

    $("#datepickerBallons-1").datepicker();
    $("#datepickerBallons-2").datepicker();
    $("#datepickerBallons-3").datepicker();

    $("#datepickerOrder").datepicker();
    $("#datepickerOrderQuiz").datepicker();

	$("#datepickerStock").datepicker();

	$("#datepickerSubModel").datepicker();

	$("#datepickerMediaModelClientMenu").datepicker();

	$("#datepickerModelClientMenu").datepicker();






//! ------------------------------------------------------------------------------------






