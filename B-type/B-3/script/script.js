// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
})

// 상하 슬라이드
// setInterval(function () {}, 3000)
setInterval(function () {
  
  // $('.slide_wrap').animate({}, 1000, function () {})
  $('.slide_wrap').animate({
    'margin-top': '-300px'
  }, 1000, function () {

    $('.slide_item:first').appendTo('.slide_wrap');
    $('.slide_wrap').css('margin-top', '0');
  })

}, 3000);


// popup
$('.open_popup').on('click', function () {
  $('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
});
