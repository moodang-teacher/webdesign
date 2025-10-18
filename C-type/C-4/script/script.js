// 좌우 슬라이더
// 3초에 한 번씩 실행
// setInterval(동작, 시간)
// setInterval(function () {}, 3000);
setInterval(function () {

  // $('.slide_wrap').animate({}, 1000, function () {})
  $('.slide_wrap').animate({
    'margin-left': '-800px'
  }, 1000, function () {
    $('.slide_item:first').appendTo('.slide_wrap');
    $('.slide_wrap').css('margin-left', '0');
    // $('.slide_wrap').animate({
    //   'margin-left': '0'
    // }, 0, function () {

    // })
  })

}, 3000);


// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').show();
})

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').hide();
})


// POPUP
$('.open_popup').on('click', function () {
  $('.popup, .dim').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup, .dim').fadeOut();
})