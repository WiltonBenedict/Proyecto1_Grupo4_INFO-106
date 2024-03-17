//Magnify
$(document).ready(function() {
  $('.zoom').magnify();
});

//Countdown
$('#reloj1').countdown('2024/03/20', function(event) {
  $(this).html(event.strftime('%D días %H horas %M minutos'));
});

$('#reloj2').countdown('2024/03/26', function(event) {
  $(this).html(event.strftime('%D días %H horas %M minutos'));
});

$('#reloj3').countdown('2024/03/29', function(event) {
  $(this).html(event.strftime('%D días %H horas %M minutos'));
});