// 상하 슬라이드
// 3초에 한 번씩 전환
// setInterval(동작, 시간);
setInterval(function () {
  // $('.slide_wrap').animate({}, 1000, function () {})
  $('.slide_wrap').animate({
    'margin-top': '-800px'
  }, 1000, function () {
    $('.slide_wrap').css('margin-top', '0');
    $('.slide_item:first').appendTo('.slide_wrap');
  })
}, 3000);


// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
})

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
})

// popup
$('.open_popup').on('click', function (e) {
  e.preventDefault();
  
  $('.popup, .dim').fadeIn();
});

$('.btn_close').on('click', function () {
  $('.popup, .dim').fadeOut();
});