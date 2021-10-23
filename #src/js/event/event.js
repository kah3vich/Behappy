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



$(function() {
    $('#event-events').css('display', 'none')
    $('#event-events').after('<div class="event-select-item"><div class="event-select-placeholder">Тип события</div><div id="event-select-wrapper" class="event-select-wrapper display-n"></div></div>')
    let count = $('#event-events').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#event-events').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("event-select-element")
        newElementBlock.id = `event-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("event-select-wrapper").appendChild(newElementBlock);
        $(`#event-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#event-select-element-0').css('display', 'none')
    $('.event-select-item').on('click', function() {
        $('.event-select-wrapper').toggleClass('display-n')
    })
    $(".event-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.event-select-placeholder').html(valueElement)
        $('#event-events option:nth-child(1)').val(valueElement)
        $('#event-events option:nth-child(1)').html(valueElement)
        $('.event-select-placeholder').css('color', '#fff')
    })
})
