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