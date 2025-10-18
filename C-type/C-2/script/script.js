// 페이드 슬라이드
console.log($('.slide_item'));

// 현재는 겹쳐있는 상태, 첫번째 슬라이드를 제외한 나머지 숨기기.
$('.slide_item:gt(0)').hide();

// 3초에 한 번씩 실행
// setInterval(동작, 시간)
// setInterval(function () {}, 3000);
setInterval(function () {
  // 첫번째 슬라이드가 페이드 아웃(사라짐)
  $('.slide_item:first').fadeOut();

  // 첫번째 슬라이드의 바로 인접한 동생이 나타남
  $('.slide_item:first').next().fadeIn();

  // 첫번째 슬라이드를 막내로 만들기
  $('.slide_item:first').appendTo('.slide_wrap');
}, 3000);


// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
})

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
})

// popup
$('.open_popup').on('click', function () {
  $('.popup, .dim').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup, .dim').fadeOut();
})