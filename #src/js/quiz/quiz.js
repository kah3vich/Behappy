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

function renderInputOrder() {
    let countRenderInputOrder = 0
    $('.ord-quiz__block-data-contact-name input').on('change', function() {
        if($('.ord-quiz__block-data-contact-name input').val() !== '') {
            countRenderInputOrder++
        }
        if(countRenderInputOrder === 5) {
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
            countRenderInputOrder++
        }
        if(countRenderInputOrder === 5) {
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
            countRenderInputOrder++
        }
        if(countRenderInputOrder === 5) {
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
            countRenderInputOrder++
        }
        if(countRenderInputOrder === 5) {
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
    $('.ord-quiz__block-data-address-date').on('change', function() {
        if($('.ord-quiz__block-data-calls-phones input').val() !== '') {
            countRenderInputOrder++
        }
        if(countRenderInputOrder === 5) {
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
    
}
renderInputOrder()


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