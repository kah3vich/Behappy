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

