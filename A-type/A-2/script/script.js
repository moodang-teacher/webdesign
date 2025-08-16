// 좌우 슬라이더

// 3초에 한 번씩 실행
// setInterval(동작, 시간)
setInterval(function () {

  // $('.slide_wrap').animate({동작옵션}, 시간, 끝나고 나서의 동작)
  $('.slide_wrap').animate({
    'margin-left': '-1200px'
  }, 1000, function () {
    $('.slide_item:first').appendTo('.slide_wrap');
    $('.slide_wrap').css('margin-left', '0');
  })

}, 3000)


// GNB
// $('.gnb > li').on('mouseenter', function () {})
$('.gnb > li').on('mouseenter', function () {
  $('.gnb_bg, .submenu').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function () {
  $('.gnb_bg, .submenu').stop().slideUp();
})

// popup
$('.open_popup').on('click', function (e) {
  e.preventDefault();

  $('.dim, .popup').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.dim, .popup').fadeOut();
})