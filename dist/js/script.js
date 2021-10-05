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
});
$(".basket__block-title-btn").on("click", function () {
    b1.reversed(!b1.reversed());
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
});
$(".baskets__block-btn").on("click", function () {
    b2.reversed(!b2.reversed());
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
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 15, 
    navigation: {
        nextEl: ".model-toy__block-wrapper-slider .swiper-control .swiper-button-next",
        prevEl: ".model-toy__block-wrapper-slider .swiper-control .swiper-button-prev",
    },
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
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 15, 
    navigation: {
        nextEl: ".model-ballons__block-wrapper-slider .swiper-control .swiper-button-next",
        prevEl: ".model-ballons__block-wrapper-slider .swiper-control .swiper-button-prev",
    },
});

$('.model-ballons__block-info-calendar-btn').on('click', function() {
    $('.model-ballons__block-info-calendar-item').toggleClass('display-n')
    $('.model-ballons__block-info-calendar-btn').toggleClass('model-ballons__block-info-calendar-btn-active')
});

$('.model-ballons__block-wrapper-banner').on('click', function() {
    $('.model-photo-1').removeClass('display-n')
});
$('.model-photo-1__block-close').on('click', function() {
    $('.model-photo-1').addClass('display-n')
});

$('.model-catalog__card-block-banner').on('click', function() {
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
});

$('#urgListItem_1_close').on('click', function() {
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
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
});

$('#urgListItem_2_close').on('click', function() {
    $('#urgListItem_2_color').addClass('display-n');
    $('#urgListItem_2_block').addClass('display-n');
    $('#urgListItem_2_close').addClass('display-n');
    $('#urgListItem_2_img').removeClass('display-n');
    $('#urgListItem_2_text').removeClass('display-n');
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


//! Нажатие на элемент каталога - 3

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


//! Нажатие на элемент каталога - 5

$('#urgListItem_4_img').on('click', function() {
    $('#urgListItem_4_color').removeClass('display-n');
    $('#urgListItem_4_block').removeClass('display-n');
    $('#urgListItem_4_close').removeClass('display-n');
    $('#urgListItem_4_img').addClass('display-n');
    $('#urgListItem_4_text').addClass('display-n');
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
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
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
});

$('#urgListItem_4_close').on('click', function() {
    $('#urgListItem_4_color').addClass('display-n');
    $('#urgListItem_4_block').addClass('display-n');
    $('#urgListItem_4_close').addClass('display-n');
    $('#urgListItem_4_img').removeClass('display-n');
    $('#urgListItem_4_text').removeClass('display-n');
});

$('#urgListItem_4_1_colors').on('click', function() {
    $('#urgListItem_4_1_colors').removeClass('opacity-5');
    $('#urgListItem_4_2_colors').addClass('opacity-5');
    $('#urgListItem_4_3_colors').addClass('opacity-5');
    $('#urgListItem_4_4_colors').addClass('opacity-5');
    $('#urgListItem_4_5_colors').addClass('opacity-5');
    $('#urgListItem_4_6_colors').addClass('opacity-5');
});
$('#urgListItem_4_2_colors').on('click', function() {
    $('#urgListItem_4_2_colors').removeClass('opacity-5');
    $('#urgListItem_4_1_colors').addClass('opacity-5');
    $('#urgListItem_4_3_colors').addClass('opacity-5');
    $('#urgListItem_4_4_colors').addClass('opacity-5');
    $('#urgListItem_4_5_colors').addClass('opacity-5');
    $('#urgListItem_4_6_colors').addClass('opacity-5');
});
$('#urgListItem_4_3_colors').on('click', function() {
    $('#urgListItem_4_3_colors').removeClass('opacity-5');
    $('#urgListItem_4_2_colors').addClass('opacity-5');
    $('#urgListItem_4_1_colors').addClass('opacity-5');
    $('#urgListItem_4_4_colors').addClass('opacity-5');
    $('#urgListItem_4_5_colors').addClass('opacity-5');
    $('#urgListItem_4_6_colors').addClass('opacity-5');
});
$('#urgListItem_4_4_colors').on('click', function() {
    $('#urgListItem_4_4_colors').removeClass('opacity-5');
    $('#urgListItem_4_2_colors').addClass('opacity-5');
    $('#urgListItem_4_3_colors').addClass('opacity-5');
    $('#urgListItem_4_1_colors').addClass('opacity-5');
    $('#urgListItem_4_5_colors').addClass('opacity-5');
    $('#urgListItem_4_6_colors').addClass('opacity-5');
});
$('#urgListItem_4_5_colors').on('click', function() {
    $('#urgListItem_4_5_colors').removeClass('opacity-5');
    $('#urgListItem_4_2_colors').addClass('opacity-5');
    $('#urgListItem_4_3_colors').addClass('opacity-5');
    $('#urgListItem_4_4_colors').addClass('opacity-5');
    $('#urgListItem_4_1_colors').addClass('opacity-5');
    $('#urgListItem_4_6_colors').addClass('opacity-5');
});
$('#urgListItem_4_6_colors').on('click', function() {
    $('#urgListItem_4_6_colors').removeClass('opacity-5');
    $('#urgListItem_4_2_colors').addClass('opacity-5');
    $('#urgListItem_4_3_colors').addClass('opacity-5');
    $('#urgListItem_4_4_colors').addClass('opacity-5');
    $('#urgListItem_4_5_colors').addClass('opacity-5');
    $('#urgListItem_4_1_colors').addClass('opacity-5');
});

//! --------------------------------------------------------------------------------

//! Нажатие на элемент каталога - 5

$('#urgListItem_5_img').on('click', function() {
    $('#urgListItem_5_color').removeClass('display-n');
    $('#urgListItem_5_block').removeClass('display-n');
    $('#urgListItem_5_close').removeClass('display-n');
    $('#urgListItem_5_img').addClass('display-n');
    $('#urgListItem_5_text').addClass('display-n');
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
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
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
});

$('#urgListItem_5_close').on('click', function() {
    $('#urgListItem_5_color').addClass('display-n');
    $('#urgListItem_5_block').addClass('display-n');
    $('#urgListItem_5_close').addClass('display-n');
    $('#urgListItem_5_img').removeClass('display-n');
    $('#urgListItem_5_text').removeClass('display-n');
});

$('#urgListItem_5_1_colors').on('click', function() {
    $('#urgListItem_5_1_colors').removeClass('opacity-5');
    $('#urgListItem_5_2_colors').addClass('opacity-5');
    $('#urgListItem_5_3_colors').addClass('opacity-5');
    $('#urgListItem_5_4_colors').addClass('opacity-5');
    $('#urgListItem_5_5_colors').addClass('opacity-5');
    $('#urgListItem_5_6_colors').addClass('opacity-5');
});
$('#urgListItem_5_2_colors').on('click', function() {
    $('#urgListItem_5_2_colors').removeClass('opacity-5');
    $('#urgListItem_5_1_colors').addClass('opacity-5');
    $('#urgListItem_5_3_colors').addClass('opacity-5');
    $('#urgListItem_5_4_colors').addClass('opacity-5');
    $('#urgListItem_5_5_colors').addClass('opacity-5');
    $('#urgListItem_5_6_colors').addClass('opacity-5');
});
$('#urgListItem_5_3_colors').on('click', function() {
    $('#urgListItem_5_3_colors').removeClass('opacity-5');
    $('#urgListItem_5_2_colors').addClass('opacity-5');
    $('#urgListItem_5_1_colors').addClass('opacity-5');
    $('#urgListItem_5_4_colors').addClass('opacity-5');
    $('#urgListItem_5_5_colors').addClass('opacity-5');
    $('#urgListItem_5_6_colors').addClass('opacity-5');
});
$('#urgListItem_5_4_colors').on('click', function() {
    $('#urgListItem_5_4_colors').removeClass('opacity-5');
    $('#urgListItem_5_2_colors').addClass('opacity-5');
    $('#urgListItem_5_3_colors').addClass('opacity-5');
    $('#urgListItem_5_1_colors').addClass('opacity-5');
    $('#urgListItem_5_5_colors').addClass('opacity-5');
    $('#urgListItem_5_6_colors').addClass('opacity-5');
});
$('#urgListItem_5_5_colors').on('click', function() {
    $('#urgListItem_5_5_colors').removeClass('opacity-5');
    $('#urgListItem_5_2_colors').addClass('opacity-5');
    $('#urgListItem_5_3_colors').addClass('opacity-5');
    $('#urgListItem_5_4_colors').addClass('opacity-5');
    $('#urgListItem_5_1_colors').addClass('opacity-5');
    $('#urgListItem_5_6_colors').addClass('opacity-5');
});
$('#urgListItem_5_6_colors').on('click', function() {
    $('#urgListItem_5_6_colors').removeClass('opacity-5');
    $('#urgListItem_5_2_colors').addClass('opacity-5');
    $('#urgListItem_5_3_colors').addClass('opacity-5');
    $('#urgListItem_5_4_colors').addClass('opacity-5');
    $('#urgListItem_5_5_colors').addClass('opacity-5');
    $('#urgListItem_5_1_colors').addClass('opacity-5');
});

//! --------------------------------------------------------------------------------

//! Нажатие на элемент каталога - 6

$('#urgListItem_6_img').on('click', function() {
    $('#urgListItem_6_color').removeClass('display-n');
    $('#urgListItem_6_block').removeClass('display-n');
    $('#urgListItem_6_close').removeClass('display-n');
    $('#urgListItem_6_img').addClass('display-n');
    $('#urgListItem_6_text').addClass('display-n');
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
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
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
});

$('#urgListItem_6_close').on('click', function() {
    $('#urgListItem_6_color').addClass('display-n');
    $('#urgListItem_6_block').addClass('display-n');
    $('#urgListItem_6_close').addClass('display-n');
    $('#urgListItem_6_img').removeClass('display-n');
    $('#urgListItem_6_text').removeClass('display-n');
});

$('#urgListItem_6_1_colors').on('click', function() {
    $('#urgListItem_6_1_colors').removeClass('opacity-5');
    $('#urgListItem_6_2_colors').addClass('opacity-5');
    $('#urgListItem_6_3_colors').addClass('opacity-5');
    $('#urgListItem_6_4_colors').addClass('opacity-5');
    $('#urgListItem_6_5_colors').addClass('opacity-5');
    $('#urgListItem_6_6_colors').addClass('opacity-5');
});
$('#urgListItem_6_2_colors').on('click', function() {
    $('#urgListItem_6_2_colors').removeClass('opacity-5');
    $('#urgListItem_6_1_colors').addClass('opacity-5');
    $('#urgListItem_6_3_colors').addClass('opacity-5');
    $('#urgListItem_6_4_colors').addClass('opacity-5');
    $('#urgListItem_6_5_colors').addClass('opacity-5');
    $('#urgListItem_6_6_colors').addClass('opacity-5');
});
$('#urgListItem_6_3_colors').on('click', function() {
    $('#urgListItem_6_3_colors').removeClass('opacity-5');
    $('#urgListItem_6_2_colors').addClass('opacity-5');
    $('#urgListItem_6_1_colors').addClass('opacity-5');
    $('#urgListItem_6_4_colors').addClass('opacity-5');
    $('#urgListItem_6_5_colors').addClass('opacity-5');
    $('#urgListItem_6_6_colors').addClass('opacity-5');
});
$('#urgListItem_6_4_colors').on('click', function() {
    $('#urgListItem_6_4_colors').removeClass('opacity-5');
    $('#urgListItem_6_2_colors').addClass('opacity-5');
    $('#urgListItem_6_3_colors').addClass('opacity-5');
    $('#urgListItem_6_1_colors').addClass('opacity-5');
    $('#urgListItem_6_5_colors').addClass('opacity-5');
    $('#urgListItem_6_6_colors').addClass('opacity-5');
});
$('#urgListItem_6_5_colors').on('click', function() {
    $('#urgListItem_6_5_colors').removeClass('opacity-5');
    $('#urgListItem_6_2_colors').addClass('opacity-5');
    $('#urgListItem_6_3_colors').addClass('opacity-5');
    $('#urgListItem_6_4_colors').addClass('opacity-5');
    $('#urgListItem_6_1_colors').addClass('opacity-5');
    $('#urgListItem_6_6_colors').addClass('opacity-5');
});
$('#urgListItem_6_6_colors').on('click', function() {
    $('#urgListItem_6_6_colors').removeClass('opacity-5');
    $('#urgListItem_6_2_colors').addClass('opacity-5');
    $('#urgListItem_6_3_colors').addClass('opacity-5');
    $('#urgListItem_6_4_colors').addClass('opacity-5');
    $('#urgListItem_6_5_colors').addClass('opacity-5');
    $('#urgListItem_6_1_colors').addClass('opacity-5');
});

//! --------------------------------------------------------------------------------


//! Нажатие на элемент каталога - 7

$('#urgListItem_7_img').on('click', function() {
    $('#urgListItem_7_color').removeClass('display-n');
    $('#urgListItem_7_block').removeClass('display-n');
    $('#urgListItem_7_close').removeClass('display-n');
    $('#urgListItem_7_img').addClass('display-n');
    $('#urgListItem_7_text').addClass('display-n');
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
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
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
});

$('#urgListItem_7_close').on('click', function() {
    $('#urgListItem_7_color').addClass('display-n');
    $('#urgListItem_7_block').addClass('display-n');
    $('#urgListItem_7_close').addClass('display-n');
    $('#urgListItem_7_img').removeClass('display-n');
    $('#urgListItem_7_text').removeClass('display-n');
});

$('#urgListItem_7_1_colors').on('click', function() {
    $('#urgListItem_7_1_colors').removeClass('opacity-5');
    $('#urgListItem_7_2_colors').addClass('opacity-5');
    $('#urgListItem_7_3_colors').addClass('opacity-5');
    $('#urgListItem_7_4_colors').addClass('opacity-5');
    $('#urgListItem_7_5_colors').addClass('opacity-5');
    $('#urgListItem_7_6_colors').addClass('opacity-5');
});
$('#urgListItem_7_2_colors').on('click', function() {
    $('#urgListItem_7_2_colors').removeClass('opacity-5');
    $('#urgListItem_7_1_colors').addClass('opacity-5');
    $('#urgListItem_7_3_colors').addClass('opacity-5');
    $('#urgListItem_7_4_colors').addClass('opacity-5');
    $('#urgListItem_7_5_colors').addClass('opacity-5');
    $('#urgListItem_7_6_colors').addClass('opacity-5');
});
$('#urgListItem_7_3_colors').on('click', function() {
    $('#urgListItem_7_3_colors').removeClass('opacity-5');
    $('#urgListItem_7_2_colors').addClass('opacity-5');
    $('#urgListItem_7_1_colors').addClass('opacity-5');
    $('#urgListItem_7_4_colors').addClass('opacity-5');
    $('#urgListItem_7_5_colors').addClass('opacity-5');
    $('#urgListItem_7_6_colors').addClass('opacity-5');
});
$('#urgListItem_7_4_colors').on('click', function() {
    $('#urgListItem_7_4_colors').removeClass('opacity-5');
    $('#urgListItem_7_2_colors').addClass('opacity-5');
    $('#urgListItem_7_3_colors').addClass('opacity-5');
    $('#urgListItem_7_1_colors').addClass('opacity-5');
    $('#urgListItem_7_5_colors').addClass('opacity-5');
    $('#urgListItem_7_6_colors').addClass('opacity-5');
});
$('#urgListItem_7_5_colors').on('click', function() {
    $('#urgListItem_7_5_colors').removeClass('opacity-5');
    $('#urgListItem_7_2_colors').addClass('opacity-5');
    $('#urgListItem_7_3_colors').addClass('opacity-5');
    $('#urgListItem_7_4_colors').addClass('opacity-5');
    $('#urgListItem_7_1_colors').addClass('opacity-5');
    $('#urgListItem_7_6_colors').addClass('opacity-5');
});
$('#urgListItem_7_6_colors').on('click', function() {
    $('#urgListItem_7_6_colors').removeClass('opacity-5');
    $('#urgListItem_7_2_colors').addClass('opacity-5');
    $('#urgListItem_7_3_colors').addClass('opacity-5');
    $('#urgListItem_7_4_colors').addClass('opacity-5');
    $('#urgListItem_7_5_colors').addClass('opacity-5');
    $('#urgListItem_7_1_colors').addClass('opacity-5');
});

//! --------------------------------------------------------------------------------

//! Нажатие на элемент каталога - 8

$('#urgListItem_8_img').on('click', function() {
    $('#urgListItem_8_color').removeClass('display-n');
    $('#urgListItem_8_block').removeClass('display-n');
    $('#urgListItem_8_close').removeClass('display-n');
    $('#urgListItem_8_img').addClass('display-n');
    $('#urgListItem_8_text').addClass('display-n');
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
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
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
});

$('#urgListItem_8_close').on('click', function() {
    $('#urgListItem_8_color').addClass('display-n');
    $('#urgListItem_8_block').addClass('display-n');
    $('#urgListItem_8_close').addClass('display-n');
    $('#urgListItem_8_img').removeClass('display-n');
    $('#urgListItem_8_text').removeClass('display-n');
});

$('#urgListItem_8_1_colors').on('click', function() {
    $('#urgListItem_8_1_colors').removeClass('opacity-5');
    $('#urgListItem_8_2_colors').addClass('opacity-5');
    $('#urgListItem_8_3_colors').addClass('opacity-5');
    $('#urgListItem_8_4_colors').addClass('opacity-5');
    $('#urgListItem_8_5_colors').addClass('opacity-5');
    $('#urgListItem_8_6_colors').addClass('opacity-5');
});
$('#urgListItem_8_2_colors').on('click', function() {
    $('#urgListItem_8_2_colors').removeClass('opacity-5');
    $('#urgListItem_8_1_colors').addClass('opacity-5');
    $('#urgListItem_8_3_colors').addClass('opacity-5');
    $('#urgListItem_8_4_colors').addClass('opacity-5');
    $('#urgListItem_8_5_colors').addClass('opacity-5');
    $('#urgListItem_8_6_colors').addClass('opacity-5');
});
$('#urgListItem_8_3_colors').on('click', function() {
    $('#urgListItem_8_3_colors').removeClass('opacity-5');
    $('#urgListItem_8_2_colors').addClass('opacity-5');
    $('#urgListItem_8_1_colors').addClass('opacity-5');
    $('#urgListItem_8_4_colors').addClass('opacity-5');
    $('#urgListItem_8_5_colors').addClass('opacity-5');
    $('#urgListItem_8_6_colors').addClass('opacity-5');
});
$('#urgListItem_8_4_colors').on('click', function() {
    $('#urgListItem_8_4_colors').removeClass('opacity-5');
    $('#urgListItem_8_2_colors').addClass('opacity-5');
    $('#urgListItem_8_3_colors').addClass('opacity-5');
    $('#urgListItem_8_1_colors').addClass('opacity-5');
    $('#urgListItem_8_5_colors').addClass('opacity-5');
    $('#urgListItem_8_6_colors').addClass('opacity-5');
});
$('#urgListItem_8_5_colors').on('click', function() {
    $('#urgListItem_8_5_colors').removeClass('opacity-5');
    $('#urgListItem_8_2_colors').addClass('opacity-5');
    $('#urgListItem_8_3_colors').addClass('opacity-5');
    $('#urgListItem_8_4_colors').addClass('opacity-5');
    $('#urgListItem_8_1_colors').addClass('opacity-5');
    $('#urgListItem_8_6_colors').addClass('opacity-5');
});
$('#urgListItem_8_6_colors').on('click', function() {
    $('#urgListItem_8_6_colors').removeClass('opacity-5');
    $('#urgListItem_8_2_colors').addClass('opacity-5');
    $('#urgListItem_8_3_colors').addClass('opacity-5');
    $('#urgListItem_8_4_colors').addClass('opacity-5');
    $('#urgListItem_8_5_colors').addClass('opacity-5');
    $('#urgListItem_8_1_colors').addClass('opacity-5');
});

//! --------------------------------------------------------------------------------

//! Нажатие на элемент каталога - 9

$('#urgListItem_9_img').on('click', function() {
    $('#urgListItem_9_color').removeClass('display-n');
    $('#urgListItem_9_block').removeClass('display-n');
    $('#urgListItem_9_close').removeClass('display-n');
    $('#urgListItem_9_img').addClass('display-n');
    $('#urgListItem_9_text').addClass('display-n');
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
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
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
});

$('#urgListItem_9_close').on('click', function() {
    $('#urgListItem_9_color').addClass('display-n');
    $('#urgListItem_9_block').addClass('display-n');
    $('#urgListItem_9_close').addClass('display-n');
    $('#urgListItem_9_img').removeClass('display-n');
    $('#urgListItem_9_text').removeClass('display-n');
});

$('#urgListItem_9_1_colors').on('click', function() {
    $('#urgListItem_9_1_colors').removeClass('opacity-5');
    $('#urgListItem_9_2_colors').addClass('opacity-5');
    $('#urgListItem_9_3_colors').addClass('opacity-5');
    $('#urgListItem_9_4_colors').addClass('opacity-5');
    $('#urgListItem_9_5_colors').addClass('opacity-5');
    $('#urgListItem_9_6_colors').addClass('opacity-5');
});
$('#urgListItem_9_2_colors').on('click', function() {
    $('#urgListItem_9_2_colors').removeClass('opacity-5');
    $('#urgListItem_9_1_colors').addClass('opacity-5');
    $('#urgListItem_9_3_colors').addClass('opacity-5');
    $('#urgListItem_9_4_colors').addClass('opacity-5');
    $('#urgListItem_9_5_colors').addClass('opacity-5');
    $('#urgListItem_9_6_colors').addClass('opacity-5');
});
$('#urgListItem_9_3_colors').on('click', function() {
    $('#urgListItem_9_3_colors').removeClass('opacity-5');
    $('#urgListItem_9_2_colors').addClass('opacity-5');
    $('#urgListItem_9_1_colors').addClass('opacity-5');
    $('#urgListItem_9_4_colors').addClass('opacity-5');
    $('#urgListItem_9_5_colors').addClass('opacity-5');
    $('#urgListItem_9_6_colors').addClass('opacity-5');
});
$('#urgListItem_9_4_colors').on('click', function() {
    $('#urgListItem_9_4_colors').removeClass('opacity-5');
    $('#urgListItem_9_2_colors').addClass('opacity-5');
    $('#urgListItem_9_3_colors').addClass('opacity-5');
    $('#urgListItem_9_1_colors').addClass('opacity-5');
    $('#urgListItem_9_5_colors').addClass('opacity-5');
    $('#urgListItem_9_6_colors').addClass('opacity-5');
});
$('#urgListItem_9_5_colors').on('click', function() {
    $('#urgListItem_9_5_colors').removeClass('opacity-5');
    $('#urgListItem_9_2_colors').addClass('opacity-5');
    $('#urgListItem_9_3_colors').addClass('opacity-5');
    $('#urgListItem_9_4_colors').addClass('opacity-5');
    $('#urgListItem_9_1_colors').addClass('opacity-5');
    $('#urgListItem_9_6_colors').addClass('opacity-5');
});
$('#urgListItem_9_6_colors').on('click', function() {
    $('#urgListItem_9_6_colors').removeClass('opacity-5');
    $('#urgListItem_9_2_colors').addClass('opacity-5');
    $('#urgListItem_9_3_colors').addClass('opacity-5');
    $('#urgListItem_9_4_colors').addClass('opacity-5');
    $('#urgListItem_9_5_colors').addClass('opacity-5');
    $('#urgListItem_9_1_colors').addClass('opacity-5');
});

//! --------------------------------------------------------------------------------


//! Нажатие на элемент каталога - 10

$('#urgListItem_10_img').on('click', function() {
    $('#urgListItem_10_color').removeClass('display-n');
    $('#urgListItem_10_block').removeClass('display-n');
    $('#urgListItem_10_close').removeClass('display-n');
    $('#urgListItem_10_img').addClass('display-n');
    $('#urgListItem_10_text').addClass('display-n');
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
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
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
});

$('#urgListItem_10_close').on('click', function() {
    $('#urgListItem_10_color').addClass('display-n');
    $('#urgListItem_10_block').addClass('display-n');
    $('#urgListItem_10_close').addClass('display-n');
    $('#urgListItem_10_img').removeClass('display-n');
    $('#urgListItem_10_text').removeClass('display-n');
});

$('#urgListItem_10_1_colors').on('click', function() {
    $('#urgListItem_10_1_colors').removeClass('opacity-5');
    $('#urgListItem_10_2_colors').addClass('opacity-5');
    $('#urgListItem_10_3_colors').addClass('opacity-5');
    $('#urgListItem_10_4_colors').addClass('opacity-5');
    $('#urgListItem_10_5_colors').addClass('opacity-5');
    $('#urgListItem_10_6_colors').addClass('opacity-5');
});
$('#urgListItem_10_2_colors').on('click', function() {
    $('#urgListItem_10_2_colors').removeClass('opacity-5');
    $('#urgListItem_10_1_colors').addClass('opacity-5');
    $('#urgListItem_10_3_colors').addClass('opacity-5');
    $('#urgListItem_10_4_colors').addClass('opacity-5');
    $('#urgListItem_10_5_colors').addClass('opacity-5');
    $('#urgListItem_10_6_colors').addClass('opacity-5');
});
$('#urgListItem_10_3_colors').on('click', function() {
    $('#urgListItem_10_3_colors').removeClass('opacity-5');
    $('#urgListItem_10_2_colors').addClass('opacity-5');
    $('#urgListItem_10_1_colors').addClass('opacity-5');
    $('#urgListItem_10_4_colors').addClass('opacity-5');
    $('#urgListItem_10_5_colors').addClass('opacity-5');
    $('#urgListItem_10_6_colors').addClass('opacity-5');
});
$('#urgListItem_10_4_colors').on('click', function() {
    $('#urgListItem_10_4_colors').removeClass('opacity-5');
    $('#urgListItem_10_2_colors').addClass('opacity-5');
    $('#urgListItem_10_3_colors').addClass('opacity-5');
    $('#urgListItem_10_1_colors').addClass('opacity-5');
    $('#urgListItem_10_5_colors').addClass('opacity-5');
    $('#urgListItem_10_6_colors').addClass('opacity-5');
});
$('#urgListItem_10_5_colors').on('click', function() {
    $('#urgListItem_10_5_colors').removeClass('opacity-5');
    $('#urgListItem_10_2_colors').addClass('opacity-5');
    $('#urgListItem_10_3_colors').addClass('opacity-5');
    $('#urgListItem_10_4_colors').addClass('opacity-5');
    $('#urgListItem_10_1_colors').addClass('opacity-5');
    $('#urgListItem_10_6_colors').addClass('opacity-5');
});
$('#urgListItem_10_6_colors').on('click', function() {
    $('#urgListItem_10_6_colors').removeClass('opacity-5');
    $('#urgListItem_10_2_colors').addClass('opacity-5');
    $('#urgListItem_10_3_colors').addClass('opacity-5');
    $('#urgListItem_10_4_colors').addClass('opacity-5');
    $('#urgListItem_10_5_colors').addClass('opacity-5');
    $('#urgListItem_10_1_colors').addClass('opacity-5');
});

//! --------------------------------------------------------------------------------




//! Нажатие на элемент каталога - 11

$('#urgListItem_11_img').on('click', function() {
    $('#urgListItem_11_color').removeClass('display-n');
    $('#urgListItem_11_block').removeClass('display-n');
    $('#urgListItem_11_close').removeClass('display-n');
    $('#urgListItem_11_img').addClass('display-n');
    $('#urgListItem_11_text').addClass('display-n');
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
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
    //! ----------------------------------------------
    $('#urgListItem_12_color').addClass('display-n');
    $('#urgListItem_12_block').addClass('display-n');
    $('#urgListItem_12_close').addClass('display-n');
    $('#urgListItem_12_img').removeClass('display-n');
    $('#urgListItem_12_text').removeClass('display-n');
});

$('#urgListItem_11_close').on('click', function() {
    $('#urgListItem_11_color').addClass('display-n');
    $('#urgListItem_11_block').addClass('display-n');
    $('#urgListItem_11_close').addClass('display-n');
    $('#urgListItem_11_img').removeClass('display-n');
    $('#urgListItem_11_text').removeClass('display-n');
});

$('#urgListItem_11_1_colors').on('click', function() {
    $('#urgListItem_11_1_colors').removeClass('opacity-5');
    $('#urgListItem_11_2_colors').addClass('opacity-5');
    $('#urgListItem_11_3_colors').addClass('opacity-5');
    $('#urgListItem_11_4_colors').addClass('opacity-5');
    $('#urgListItem_11_5_colors').addClass('opacity-5');
    $('#urgListItem_11_6_colors').addClass('opacity-5');
});
$('#urgListItem_11_2_colors').on('click', function() {
    $('#urgListItem_11_2_colors').removeClass('opacity-5');
    $('#urgListItem_11_1_colors').addClass('opacity-5');
    $('#urgListItem_11_3_colors').addClass('opacity-5');
    $('#urgListItem_11_4_colors').addClass('opacity-5');
    $('#urgListItem_11_5_colors').addClass('opacity-5');
    $('#urgListItem_11_6_colors').addClass('opacity-5');
});
$('#urgListItem_11_3_colors').on('click', function() {
    $('#urgListItem_11_3_colors').removeClass('opacity-5');
    $('#urgListItem_11_2_colors').addClass('opacity-5');
    $('#urgListItem_11_1_colors').addClass('opacity-5');
    $('#urgListItem_11_4_colors').addClass('opacity-5');
    $('#urgListItem_11_5_colors').addClass('opacity-5');
    $('#urgListItem_11_6_colors').addClass('opacity-5');
});
$('#urgListItem_11_4_colors').on('click', function() {
    $('#urgListItem_11_4_colors').removeClass('opacity-5');
    $('#urgListItem_11_2_colors').addClass('opacity-5');
    $('#urgListItem_11_3_colors').addClass('opacity-5');
    $('#urgListItem_11_1_colors').addClass('opacity-5');
    $('#urgListItem_11_5_colors').addClass('opacity-5');
    $('#urgListItem_11_6_colors').addClass('opacity-5');
});
$('#urgListItem_11_5_colors').on('click', function() {
    $('#urgListItem_11_5_colors').removeClass('opacity-5');
    $('#urgListItem_11_2_colors').addClass('opacity-5');
    $('#urgListItem_11_3_colors').addClass('opacity-5');
    $('#urgListItem_11_4_colors').addClass('opacity-5');
    $('#urgListItem_11_1_colors').addClass('opacity-5');
    $('#urgListItem_11_6_colors').addClass('opacity-5');
});
$('#urgListItem_11_6_colors').on('click', function() {
    $('#urgListItem_11_6_colors').removeClass('opacity-5');
    $('#urgListItem_11_2_colors').addClass('opacity-5');
    $('#urgListItem_11_3_colors').addClass('opacity-5');
    $('#urgListItem_11_4_colors').addClass('opacity-5');
    $('#urgListItem_11_5_colors').addClass('opacity-5');
    $('#urgListItem_11_1_colors').addClass('opacity-5');
});

//! --------------------------------------------------------------------------------

//! Нажатие на элемент каталога - 12

$('#urgListItem_12_img').on('click', function() {
    $('#urgListItem_12_color').removeClass('display-n');
    $('#urgListItem_12_block').removeClass('display-n');
    $('#urgListItem_12_close').removeClass('display-n');
    $('#urgListItem_12_img').addClass('display-n');
    $('#urgListItem_12_text').addClass('display-n');
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
    $('#urgListItem_1_color').addClass('display-n');
    $('#urgListItem_1_block').addClass('display-n');
    $('#urgListItem_1_close').addClass('display-n');
    $('#urgListItem_1_img').removeClass('display-n');
    $('#urgListItem_1_text').removeClass('display-n');
});

$('#urgListItem_12_close').on('click', function() {
    $('#urgListItem_12_color').addClass('display-n');
    $('#urgListItem_12_block').addClass('display-n');
    $('#urgListItem_12_close').addClass('display-n');
    $('#urgListItem_12_img').removeClass('display-n');
    $('#urgListItem_12_text').removeClass('display-n');
});

$('#urgListItem_12_1_colors').on('click', function() {
    $('#urgListItem_12_1_colors').removeClass('opacity-5');
    $('#urgListItem_12_2_colors').addClass('opacity-5');
    $('#urgListItem_12_3_colors').addClass('opacity-5');
    $('#urgListItem_12_4_colors').addClass('opacity-5');
    $('#urgListItem_12_5_colors').addClass('opacity-5');
    $('#urgListItem_12_6_colors').addClass('opacity-5');
});
$('#urgListItem_12_2_colors').on('click', function() {
    $('#urgListItem_12_2_colors').removeClass('opacity-5');
    $('#urgListItem_12_1_colors').addClass('opacity-5');
    $('#urgListItem_12_3_colors').addClass('opacity-5');
    $('#urgListItem_12_4_colors').addClass('opacity-5');
    $('#urgListItem_12_5_colors').addClass('opacity-5');
    $('#urgListItem_12_6_colors').addClass('opacity-5');
});
$('#urgListItem_12_3_colors').on('click', function() {
    $('#urgListItem_12_3_colors').removeClass('opacity-5');
    $('#urgListItem_12_2_colors').addClass('opacity-5');
    $('#urgListItem_12_1_colors').addClass('opacity-5');
    $('#urgListItem_12_4_colors').addClass('opacity-5');
    $('#urgListItem_12_5_colors').addClass('opacity-5');
    $('#urgListItem_12_6_colors').addClass('opacity-5');
});
$('#urgListItem_12_4_colors').on('click', function() {
    $('#urgListItem_12_4_colors').removeClass('opacity-5');
    $('#urgListItem_12_2_colors').addClass('opacity-5');
    $('#urgListItem_12_3_colors').addClass('opacity-5');
    $('#urgListItem_12_1_colors').addClass('opacity-5');
    $('#urgListItem_12_5_colors').addClass('opacity-5');
    $('#urgListItem_12_6_colors').addClass('opacity-5');
});
$('#urgListItem_12_5_colors').on('click', function() {
    $('#urgListItem_12_5_colors').removeClass('opacity-5');
    $('#urgListItem_12_2_colors').addClass('opacity-5');
    $('#urgListItem_12_3_colors').addClass('opacity-5');
    $('#urgListItem_12_4_colors').addClass('opacity-5');
    $('#urgListItem_12_1_colors').addClass('opacity-5');
    $('#urgListItem_12_6_colors').addClass('opacity-5');
});
$('#urgListItem_12_6_colors').on('click', function() {
    $('#urgListItem_12_6_colors').removeClass('opacity-5');
    $('#urgListItem_12_2_colors').addClass('opacity-5');
    $('#urgListItem_12_3_colors').addClass('opacity-5');
    $('#urgListItem_12_4_colors').addClass('opacity-5');
    $('#urgListItem_12_5_colors').addClass('opacity-5');
    $('#urgListItem_12_1_colors').addClass('opacity-5');
});


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






//! ------------------------------------------------------------------------------------






