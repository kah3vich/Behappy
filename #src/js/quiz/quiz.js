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



$('#quizWhomItem_1').on('click', function() {
    $("#quizWhomItems_1").css('border', '1px solid #16B8C3')
    $("#quizWhomItems_2").css('border', '1px solid #002685')
    $("#quizWhomItems_3").css('border', '1px solid #002685')
    $("#quizWhomItems_4").css('border', '1px solid #002685')
    $("#quizWhomItems_5").css('border', '1px solid #002685')
    $("#quizWhomItems_6").css('border', '1px solid #002685')
    $("#quizWhomItems_7").css('border', '1px solid #002685')
})
$('#quizWhomItem_2').on('click', function() {
    $("#quizWhomItems_2").css('border', '1px solid #16B8C3')
    $("#quizWhomItems_1").css('border', '1px solid #002685')
    $("#quizWhomItems_3").css('border', '1px solid #002685')
    $("#quizWhomItems_4").css('border', '1px solid #002685')
    $("#quizWhomItems_5").css('border', '1px solid #002685')
    $("#quizWhomItems_6").css('border', '1px solid #002685')
    $("#quizWhomItems_7").css('border', '1px solid #002685')
})
$('#quizWhomItem_3').on('click', function() {
    $("#quizWhomItems_3").css('border', '1px solid #16B8C3')
    $("#quizWhomItems_2").css('border', '1px solid #002685')
    $("#quizWhomItems_1").css('border', '1px solid #002685')
    $("#quizWhomItems_4").css('border', '1px solid #002685')
    $("#quizWhomItems_5").css('border', '1px solid #002685')
    $("#quizWhomItems_6").css('border', '1px solid #002685')
    $("#quizWhomItems_7").css('border', '1px solid #002685')
})
$('#quizWhomItem_4').on('click', function() {
    $("#quizWhomItems_4").css('border', '1px solid #16B8C3')
    $("#quizWhomItems_2").css('border', '1px solid #002685')
    $("#quizWhomItems_3").css('border', '1px solid #002685')
    $("#quizWhomItems_1").css('border', '1px solid #002685')
    $("#quizWhomItems_5").css('border', '1px solid #002685')
    $("#quizWhomItems_6").css('border', '1px solid #002685')
    $("#quizWhomItems_7").css('border', '1px solid #002685')
})
$('#quizWhomItem_5').on('click', function() {
    $("#quizWhomItems_5").css('border', '1px solid #16B8C3')
    $("#quizWhomItems_2").css('border', '1px solid #002685')
    $("#quizWhomItems_3").css('border', '1px solid #002685')
    $("#quizWhomItems_4").css('border', '1px solid #002685')
    $("#quizWhomItems_1").css('border', '1px solid #002685')
    $("#quizWhomItems_6").css('border', '1px solid #002685')
    $("#quizWhomItems_7").css('border', '1px solid #002685')
})
$('#quizWhomItem_6').on('click', function() {
    $("#quizWhomItems_6").css('border', '1px solid #16B8C3')
    $("#quizWhomItems_2").css('border', '1px solid #002685')
    $("#quizWhomItems_3").css('border', '1px solid #002685')
    $("#quizWhomItems_4").css('border', '1px solid #002685')
    $("#quizWhomItems_5").css('border', '1px solid #002685')
    $("#quizWhomItems_1").css('border', '1px solid #002685')
    $("#quizWhomItems_7").css('border', '1px solid #002685')
})
$('#quizWhomItem_7').on('click', function() {
    $("#quizWhomItems_7").css('border', '1px solid #16B8C3')
    $("#quizWhomItems_2").css('border', '1px solid #002685')
    $("#quizWhomItems_3").css('border', '1px solid #002685')
    $("#quizWhomItems_4").css('border', '1px solid #002685')
    $("#quizWhomItems_5").css('border', '1px solid #002685')
    $("#quizWhomItems_6").css('border', '1px solid #002685')
    $("#quizWhomItems_1").css('border', '1px solid #002685')
})