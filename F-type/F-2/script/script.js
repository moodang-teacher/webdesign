// 페이드 슬라이드
console.log($('.slide_item:gt(0)'));

// 첫번째 .slide_item을 제외한 나머지를 숨기고 시작
$('.slide_item:gt(0)').hide();

// 3초에 한 번씩 실행
setInterval(function () {
  $('.slide_item:first').fadeOut();
  $('.slide_item:first').next().fadeIn();
  $('.slide_item:first').appendTo('.slide_wrap');
}, 3000);


// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
})

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
})

// POPUP
$('.open_popup').on('click', function (e) {
  e.preventDefault();
  $('.popup, .dim').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup, .dim').fadeOut();
})