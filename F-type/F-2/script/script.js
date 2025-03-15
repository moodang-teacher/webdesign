// 페이드 슬라이더

// setInterval(동작, 시간)
// setInterval(function () {}, 3000);

// 1. 첫번째 슬라이드를 제외한 나머지를 숨긴다.
$('.slide_item:gt(0)').hide();

// console.log( $('.slide_item') );

setInterval(function () {

  // 2. 첫번째 슬라이드를 fadeOut, 그 다음 슬라이드를 fadeIn
  // $('.slide_item:first').fadeOut();
  // $('.slide_item:first').next().fadeIn();

  $('.slide_item:first').fadeOut().next().fadeIn();

  // 3. 첫번째 슬라이드를 막내로 만들기
  $('.slide_item:first').appendTo('.slide_wrap');
}, 3000);


// GNB
$('.gnb > li').on('mouseenter', function() {
  $(this).find('.submenu').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function() {
  $(this).find('.submenu').stop().slideUp();
})

// popup
$('.open_popup').on('click', function () {
  $('.popup, .dim').fadeIn();
});

$('.btn_close').on('click', function () {
  $('.popup, .dim').fadeOut();
});

