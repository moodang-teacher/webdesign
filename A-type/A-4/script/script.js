// 첫번째 슬라이드만 남기고 숨기기
$('.slide_item:gt(0)').hide();

// 3초에 한 번씩 실행
// setInterval(function() {}, 3000);
setInterval(function() {

  // 첫번째 슬라이드를 페이드 아웃
  $('.slide_item:first').fadeOut();

  // 첫번째 슬라이드의 다음(동생) 슬라이드를 페이드 인
  $('.slide_item:first').next().fadeIn();

  // 첫번째 슬라이드를 마지막 슬라이드의 동생으로 삽입
  $('.slide_item:first').appendTo('.slide_wrap');

}, 3000);

// GNB
$('.gnb > li').on('mouseenter', function() {
  $('.gnb_bg, .submenu').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function() {
  $('.gnb_bg, .submenu').stop().slideUp();
})


// popup
$('.open_popup').on('click', function(e) {
  e.preventDefault();
  $('.popup').fadeIn();
});

$('.btn_close').on('click', function() {
  $('.popup').fadeOut();
});

