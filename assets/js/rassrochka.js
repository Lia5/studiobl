$(document).ready(function() {

$('.minus').click(function() {
    $(this).parent().siblings().toggleClass('rassrochka__close');
    $(this).siblings().toggleClass('plus-open');
});
  
  $('.plus').click(function() {
    $(this).parent().siblings().removeClass('rassrochka__close');
    $(this).removeClass('plus-open');
  });
});