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

$('.ord-pay__block-data-address-city').on('click', function() {
    $('.ord-pay__block-data-address-city-select').toggleClass('display-n')
    $(this).toggleClass('ord-pay__block-data-address-city-active')
});
$('#ordSelectCityItem-1').on('click', function() {
    let ordSelectCityItem = $(this).val()
    $('.ord-pay__block-data-address-city p').html(ordSelectCityItem)
});
$('#ordSelectCityItem-2').on('click', function() {
    let ordSelectCityItem = $(this).val()
    $('.ord-pay__block-data-address-city p').html(ordSelectCityItem)
});
$('#ordSelectCityItem-3').on('click', function() {
    let ordSelectCityItem = $(this).val()
    $('.ord-pay__block-data-address-city p').html(ordSelectCityItem)
});
$('#ordSelectCityItem-4').on('click', function() {
    let ordSelectCityItem = $(this).val()
    $('.ord-pay__block-data-address-city p').html(ordSelectCityItem)
});
$('#ordSelectCityItem-5').on('click', function() {
    let ordSelectCityItem = $(this).val()
    $('.ord-pay__block-data-address-city p').html(ordSelectCityItem)
});
$('#ordSelectCityItem-6').on('click', function() {
    let ordSelectCityItem = $(this).val()
    $('.ord-pay__block-data-address-city p').html(ordSelectCityItem)
});
$('#ordSelectCityItem-7').on('click', function() {
    let ordSelectCityItem = $(this).val()
    $('.ord-pay__block-data-address-city p').html(ordSelectCityItem)
});


// order city


$(function() {
    $('#orderCity').css('display', 'none')
    $('#orderCity').after('<input class="order__city-select-item" placeholder="Выберите город" value=""><div id="orderCityElement" class="order__city-select-wrapper display-n"></div></input>')
    let count = $('#orderCity').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#orderCity').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("order__city-select-element")
        newElementBlock.id = `order__city-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("orderCityElement").appendChild(newElementBlock);
        $(`#order__city-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#order__city-select-element-0').css('display', 'none')
    $('.order__city-select-item').on('click', function() {
        $('.order__city-select-wrapper').toggleClass('display-n')
    })
    $(".order__city-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.order__city-select-placeholder').css('opacity', '1')
        $('.order__city-select-placeholder').html(valueElement)
        $('#orderCity option:nth-child(1)').val(valueElement)
        $('#orderCity option:nth-child(1)').html(valueElement)
        $('.order__city-select-item').val(valueElement)
        $('.order__city-select-wrapper').toggleClass('display-n')
    })
})