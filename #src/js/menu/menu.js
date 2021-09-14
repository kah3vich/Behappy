//! Меню 

let t1 = new TimelineMax({ paused: true });

t1.to(".menu", 0.4, {
  right: "0%",
});
// t1.staggerFrom(".link", 0.4, { opacity: 0 }, 0.1, "-=0.2");
t1.reverse();
$(document).on("click", ".menu-open", function () {
  t1.reversed(!t1.reversed());
});
$(document).on("click", ".menu-close, .menu__block-title-close p", function () {
  t1.reversed(!t1.reversed());
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