// 페이드 슬라이더
$('.slide_item:gt(0)').hide();

// setInterval(function() {}, 3000);
setInterval(function() {

  $('.slide_item:first').fadeOut();
  $('.slide_item:first').next().fadeIn();
  $('.slide_item:first').appendTo('.slide_wrap');

}, 3000);


// GNB
// $('.gnb > li').on('mouseenter', function() {})
$('.gnb > li').on('mouseenter', function() {
  $('.gnb_bg, .submenu').stop().fadeIn();
})

$('.gnb > li').on('mouseleave', function() {
  $('.gnb_bg, .submenu').stop().fadeOut();
})

// 팝업
$('.open_popup').on('click', function(e) {
  e.preventDefault();
  $('.popup').fadeIn();
})

$('.btn_close').on('click', function() {
  $('.popup').fadeOut();
})