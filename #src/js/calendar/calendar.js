
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


// console.log(yts / 24 / 3600 / 1000)


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
	yearSuffix: '',
};
$.datepicker.setDefaults($.datepicker.regional['ru']);


	$("#datepickerIndex").datepicker();


	$("#datepickerCatalog-1").datepicker();
    $("#datepickerCatalog-2").datepicker();
    $("#datepickerCatalog-3").datepicker();

    $("#datepickerToy-1").datepicker();
    $("#datepickerToy-2").datepicker();
    $("#datepickerToy-3").datepicker();

	let d = new Date("2021-11-10");
	let calendarCardEventDay_1 = d.setHours(0,0,0,0)
	let calendarCardEventDay_2 = d.setHours(0,0,0,0) + (24*3600*1000)
	let calendarCardEventDay_3 = d.setHours(0,0,0,0) + (24*3600*1000) * 2
	let calendarCardEventDay_4 = d.setHours(0,0,0,0) + (24*3600*1000) * 3
	let calendarCardEventDay_5 = d.setHours(0,0,0,0) + (24*3600*1000) * 4
	let calendarCardEventDay_6 = d.setHours(0,0,0,0) + (24*3600*1000) * 5
	// let yts = d.setHours(0,0,0,0) + (24*3600*1000);

    $("#datepickerBallons-1").datepicker({
		beforeShowDay: function(d){      
			if(d.getTime() == calendarCardEventDay_1){
				return [true, 'calendarCardEventDay-1', ''];
			} else if(d.getTime() == calendarCardEventDay_2){
				return [true, 'calendarCardEventDay-2', ''];
			} else if(d.getTime() == calendarCardEventDay_3){
				return [true, 'calendarCardEventDay-3', ''];
			} else if(d.getTime() == calendarCardEventDay_4){
				return [true, 'calendarCardEventDay-4', ''];
			} else if(d.getTime() == calendarCardEventDay_5){
				return [true, 'calendarCardEventDay-5', ''];
			} else if(d.getTime() == calendarCardEventDay_6){
				return [true, 'calendarCardEventDay-6', ''];
			}
			return [true];
		}
	});
    $("#datepickerBallons-2").datepicker();
    $("#datepickerBallons-3").datepicker();

    $("#datepickerOrder").datepicker();
    $("#datepickerOrderQuiz").datepicker().on('change', function(){
        $('.model-calendar').addClass('display-n')
		let quizOrderDataCalendarInput = $('#datepickerOrderQuiz').val()
		$('.ord-quiz__block-data-address-date input').val(quizOrderDataCalendarInput)
    });

	$("#datepickerStock").datepicker();

	$("#datepickerSubModel").datepicker();

	$("#datepickerMediaModelClientMenu").datepicker();

	$("#datepickerModelClientMenu").datepicker();



$('#modelCalendarCloseButton').on('click', function() {
	$('.model-calendar').addClass('display-n')
})


//! ------------------------------------------------------------------------------------


