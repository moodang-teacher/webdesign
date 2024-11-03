// 상하 슬라이더
// setInterval(function() {}, 3000)
setInterval(function() {

  // $('.slide_wrap').animate({}, 1000, function() {})
  $('.slide_wrap').animate({
    'margin-top': '-300px'
  }, 1000, function() {
    $('.slide_wrap').css('margin-top', 0);
    $('.slide_item:first').appendTo('.slide_wrap');
  })

}, 3000)

// GNB
$('.gnb > li').on('mouseenter', function() {
  $('.submenu, .gnb_bg').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function() {
  $('.submenu, .gnb_bg').stop().slideUp();
})

// popup
$('.open_popup').on('click', function(e) {
  e.preventDefault();

  $('.popup, .dim').fadeIn();
  // $('.dim').fadeIn();
  // setTimeout(function() {
  //   $('.popup').fadeIn();
  // }, 1600)
})

$('.btn_close').on('click', function() {
  $('.dim, .popup').fadeOut();
})