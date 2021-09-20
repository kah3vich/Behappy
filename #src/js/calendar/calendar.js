
//! Календарь скидок 

const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    console.log(lastDay)

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().getFullYear();

    const mouthRu = $('.calendar h1').text()
    if(mouthRu === 'January') {
        $('.calendar h1').html('Январь')
    } else if(mouthRu === 'February') {
        $('.calendar h1').html('Февраль')
    } else if(mouthRu === 'March') {
        $('.calendar h1').html('Март')
    } else if(mouthRu === 'April') {
        $('.calendar h1').html('Апрель')
    } else if(mouthRu === 'May') {
        $('.calendar h1').html('Май')
    } else if(mouthRu === 'June') {
        $('.calendar h1').html('Июнь')
    } else if(mouthRu === 'July') {
        $('.calendar h1').html('Июль')
    } else if(mouthRu === 'August') {
        $('.calendar h1').html('Август')
    } else if(mouthRu === 'September') {
        $('.calendar h1').html('Сентябрь')
    } else if(mouthRu === 'October') {
        $('.calendar h1').html('Октябрь')
    } else if(mouthRu === 'November') {
        $('.calendar h1').html('Ноябрь')
    } else if(mouthRu === 'December') {
        $('.calendar h1').html('Декабрь')
    } else {
        $('.calendar h1').html('')
    }



    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
    };

    document.querySelector(".prev").addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    document.querySelector(".next").addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });



renderCalendar();


//! ------------------------------------------------------------------------------------