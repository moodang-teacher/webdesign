// 세로 슬라이드
// 3초에 한 번씩 실행
// setInterval(동작, 시간)
setInterval(function () {
  // $('.slide_wrap').animate({}, 1000, function () {});
  $('.slide_wrap').animate({
    'margin-top': '-350px'
  }, 1000, function () {
    $('.slide_wrap').css('margin-top', '0');
    $('.slide_item:first').appendTo('.slide_wrap');
  });
}, 3000);

// GNB
$('.gnb > li').on('mouseenter', function () {
  $('.submenu, .gnb_bg').stop().slideDown();
});

$('.gnb > li').on('mouseleave', function () {
  $('.submenu, .gnb_bg').stop().slideUp();
});

// POPUP
$('.open_popup').on('click', function (e) {
  e.preventDefault();
  
  $('.popup, .dim').fadeIn();
});

$('.btn_close').on('click', function () {
  $('.popup, .dim').fadeOut();
});