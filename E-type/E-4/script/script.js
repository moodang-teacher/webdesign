// popup
$('.open_popup').on('click', function () {
  $('.dim').fadeIn();
  $('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
  $('.dim, .popup').fadeOut();
});