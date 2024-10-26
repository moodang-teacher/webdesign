// 팝업
// $('.open_popup').on('click', function() {})
$('.open_popup').on('click', function() {
  $('.popup, .dim').fadeIn();
})

$('.btn_close').on('click', function() {
  $('.popup, .dim').fadeOut();
})

// 상하 슬라이더
// 3초에 한 번씩
// setInterval(동작, 시간)
// setInterval(function() {

//   // $('.slide_wrap').animate({}, 1000, function() {})
//   $('.slide_wrap').animate({
//     'margin-top': '-700px'
//   }, 1000, function() {

//     $('.slide_wrap').css('margin-top', 0);
//     $('.slide_item:first').appendTo('.slide_wrap');
//   })

// }, 3000)

// 좌우 슬라이더로 변경(테스트)
setInterval(function() {

  $('.slide_wrap').animate({
    'margin-left': '-100%'
  }, 1000, function() {

    $('.slide_wrap').css('margin-left', 0);
    $('.slide_item:first').appendTo('.slide_wrap');

  });

}, 3000);


// GNB
// $('.gnb > li').on('mouseenter', function() {})
$('.gnb > li').on('mouseenter', function() {
  $(this).find('.submenu').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function() {
  $(this).find('.submenu').stop().slideUp();
})