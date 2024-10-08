// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').fadeIn();
});
$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').fadeOut();
});

// slide
setInterval(function () {
  $('.slide_wrap').animate(
    {
      'margin-left': '-100%',
    },
    700,
    function () {
      $('.slide_item:first').appendTo('.slide_wrap');
      $('.slide_wrap').css('margin-left', 0);
    }
  );
}, 3000);

// popup
$('.open_popup').on('click', function () {
  $('.dim').fadeIn();
  $('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
  $('.dim, .popup').fadeOut();
});
