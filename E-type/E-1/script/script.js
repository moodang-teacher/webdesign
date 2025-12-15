// 가로 슬라이더
// setInterval(동작, 시간);
// setInterval(function () {}, 3000);
setInterval(function () {
  // $('.slide_wrap').animate({}, 1000, function () {})
  $('.slide_wrap').animate({
    'margin-left': '-100%'
  }, 1000, function () {
    $('.slide_item:first').appendTo('.slide_wrap');
    // $('.slide_wrap').animate({'margin-left': '0'}, 0, function () {});
    $('.slide_wrap').css('margin-left', '0');
  });
}, 3000);


// GNB
// $('.gnb > li').on('mouseenter', function () {})
$('.gnb > li').on('mouseenter', function () {
  // $('.submenu').slideDown();
  $(this).find('.submenu').stop().slideDown();
})

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
})


// popup
$('.open_popup').on('click', function (e) {
  e.preventDefault();
  $('.popup, .dim').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup, .dim').fadeOut();
})