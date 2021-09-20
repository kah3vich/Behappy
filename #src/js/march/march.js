
$('.march-content__block-text-filter-block').on('click', function() {
    $('.march-content__block-text-filter-wrapper').toggleClass('display-n');
});




// var lowerSlider = document.querySelector('#lower');
// var upperSlider = document.querySelector('#upper');

// document.querySelector('#price-max').value = upperSlider.value;
// document.querySelector('#price-min').value = lowerSlider.value;

// var lowerVal = parseInt(lowerSlider.value);
// var upperVal = parseInt(upperSlider.value);

// upperSlider.oninput = function () {
//     lowerVal = parseInt(lowerSlider.value);
//     upperVal = parseInt(upperSlider.value);

//     if (upperVal < lowerVal + 4) {
//         lowerSlider.value = upperVal - 4;
//         if (lowerVal == lowerSlider.min) {
//             upperSlider.value = 4;
//         }
//     }
//     document.querySelector('#price-max').value = this.value
// };

// lowerSlider.oninput = function () {
//     lowerVal = parseInt(lowerSlider.value);
//     upperVal = parseInt(upperSlider.value);
//     if (lowerVal > upperVal - 4) {
//         upperSlider.value = lowerVal + 4;
//         if (upperVal == upperSlider.max) {
//             lowerSlider.value = parseInt(upperSlider.max) - 4;
//         }
//     }
//     document.querySelector('#price-min').value = this.value
// }; 

