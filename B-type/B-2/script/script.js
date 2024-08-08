// GNB
$('.gnb > li').on('mouseenter', function () {
  $('.gnb_bg, .submenu').stop().slideDown();
  // $('.submenu').stop().fadeIn();
});
$('.gnb > li').on('mouseleave', function () {
  $('.gnb_bg, .submenu').stop().slideUp();
  // $('.submenu').stop().fadeOut();
});

// 상하 슬라이드
// setInterval(function () {}, 3000)
setInterval(function () {
  // $('.slide_wrap').animate({}, 1000, function () {})
  $('.slide_wrap').animate(
    {
      'margin-top': '-300px',
    },
    1000,
    function () {
      $('.slide_item:first').appendTo('.slide_wrap');
      $('.slide_wrap').css('margin-top', '0');
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
