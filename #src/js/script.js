
var sliderInfo = new Swiper(".sliderInfo", {
    loop: true,
    // cssMode: true,
    navigation: {
        nextEl: ".info__block-slider .swiper-button-next",
        prevEl: ".info__block-slider .swiper-button-prev",
    },
    pagination: {
        el: ".info__block-slider .swiper-pagination",
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

var swiper = new Swiper(".sliderAdd", {
    pagination: {
        el: ".add__block-slider .swiper-pagination",
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
            spaceBetween: 15, 
        },
        0: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        }
    },
});



var collections_1 = new Swiper(".sliderCollections-1", {
    loop: true,
    navigation: {
        nextEl: ".collections__block-slider-1 .swiper-button-next",
        prevEl: ".collections__block-slider-1 .swiper-button-prev",
    },
    pagination: {
        el: ".collections__block-slider-1 .swiper-pagination",
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
            spaceBetween: 15, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        }
    },
});

var collections_2 = new Swiper(".sliderCollections-2", {
    loop: true,
    navigation: {
        nextEl: ".collections__block-slider-2 .swiper-button-next",
        prevEl: ".collections__block-slider-2 .swiper-button-prev",
    },
    pagination: {
        el: ".collections__block-slider-2 .swiper-pagination",
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
            spaceBetween: 15, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        }
    },
});

$('select#collections').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('c-select-hidden'); 
    $this.wrap('<div class="c-select"></div>');
    $this.after('<div class="c-select-styled"></div>');

    var $styledSelect = $this.next('div.c-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'c-select-options'
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
        $('div.select-styled.c-active').not(this).each(function(){
            $(this).removeClass('c-active').next('ul.c-select-options').hide();
        });
        $(this).toggleClass('c-active').next('ul.c-select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('c-active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('c-active');
        $list.hide();
    });

});