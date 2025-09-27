// 좌우 슬라이드
// setInterval(동작, 시간)
// setInterval(function () {}, 3000);
setInterval(function () {
  // $('.slide_wrap').animate({}, 1000, function () {})
  $('.slide_wrap').animate({
    'margin-left': '-1200px'
  }, 1000, function () {
    $('.slide_item:first').appendTo('.slide_wrap');
    $('.slide_wrap').css('margin-left', '0');
  })
}, 3000);

// GNB
// $('.gnb > li').on('mouseenter', function () {})
$('.gnb > li').on('mouseenter', function () {
  $('.submenu, .gnb_bg').stop().slideDown();
})

$('.gnb > li').on('mouseleave', function () {
  $('.submenu, .gnb_bg').stop().slideUp();
})


// 팝업
// $('.open_popup').on('click', function () {})
$('.open_popup').on('click', function (e) {
  // a의 기본동작을 막기
  e.preventDefault();

  $('.dim, .popup').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.dim, .popup').fadeOut();
})