// 좌우 슬라이더
// 3초에 한 번씩 실행
// setInterval(function () {}, 3000)
setInterval(function () {

  // $('.slide_wrap').animate({}, 1000, function () {})
  $('.slide_wrap').animate({
    'margin-left': '-100%'
  }, 1000, function () {
    $('.slide_item:first').appendTo('.slide_wrap');
    $('.slide_wrap').css('margin-left', '0');
  })

}, 3000)


// GNB
// $('.gnb > li').on('mouseenter', function () {})
$('.gnb > li').on('mouseenter', function () {
  // $('.submenu').fadeIn();
  $(this).find('.submenu').stop().fadeIn();
})

$('.gnb > li').on('mouseleave', function () {
  // $('.submenu').fadeIn();
  $(this).find('.submenu').stop().fadeOut();
})


// 팝업
// $('.open_popup').on('click', function () {})
$('.open_popup').on('click', function () {
  $('.popup, .dim').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup, .dim').fadeOut();
})