// 좌우 슬라이더
// 3초에 한 번씩 실행
// setInterval(동작, 시간)
// setInterval(function () {}, 3000);
setInterval(function () {
  // $('.slide_wrap').animate({옵션}, 시간, 이후에 할 일)
  $('.slide_wrap').animate({
    'margin-left': '-100%'
  }, 1000, function () {
    $('.slide_item:first').appendTo('.slide_wrap');
    $('.slide_wrap').css('margin-left', '0');
  })
}, 3000);


// GNB
// $('.gnb > li').on('mouseenter', function () {})
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
})


// 팝업
// $('.open_popup').on('click', function () {})
$('.open_popup').on('click', function () {
  $('.popup, .dim').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup, .dim').fadeOut();
})