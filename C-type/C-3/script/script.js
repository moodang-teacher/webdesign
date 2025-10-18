// 좌우 슬라이드
// 3초에 한 번씩 실행
// setInterval(동작, 시간)
setInterval(function () {
  // $('.slide_wrap').animate({}, 1000, function () {})
  $('.slide_wrap').animate({
    'margin-left': '-800px' // -100%
  }, 1000, function () {
    $('.slide_item:first').appendTo('.slide_wrap');
    $('.slide_wrap').css('margin-left', '0');
  })
}, 3000);

// GNB
$('.gnb > li').on('mouseenter', function () {
  // $('.submenu').slideDown();
  $(this).find('.submenu').stop().show();
})

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().hide();
})

// popup
$('.open_popup').on('click', function () {
  $('.popup').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
})