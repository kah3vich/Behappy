
$('#quiz-range').on('input',function () {
    $('#quiz-result-range').empty().append($(this).val());
});