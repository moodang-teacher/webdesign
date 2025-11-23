// 가로 슬라이드
// setInterval(동작, 시간)
setInterval(function () {
  // $('.slide_wrap').animate({}, 1000, function () {})
  $('.slide_wrap').animate({
    'margin-left': '-100%'
  }, 1000, function () {
    $('.slide_item:first').appendTo('.slide_wrap');
    $('.slide_wrap').css('margin-left', '0');
  })
}, 3000);

// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().fadeIn();
});

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().fadeOut();
});

// popup
$('.open_popup').on('click', function (e) {
  e.preventDefault(); /* a의 기본동작 막기 */

  $('.dim, .popup').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.dim, .popup').fadeOut();
})