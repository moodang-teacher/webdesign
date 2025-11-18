// 페이드 슬라이드

console.log( $('.slide_item') );

// 첫번째 slide_item만 남기고 숨겨라.
$('.slide_item:gt(0)').hide();

// 3초에 한 번씩 실행
// setInterval(동작, 시간);
setInterval(function () {
  // 첫번째를 숨기고
  $('.slide_item:first').fadeOut();

  // 첫번째의 바로 다음 동생을 보이게
  $('.slide_item:first').next().fadeIn();

  // 첫번째를 막내로 만들기
  $('.slide_item:first').appendTo('.slide_wrap');
}, 3000);


// GNB
$('.gnb > li').on('mouseenter', function () {
  $('.submenu, .gnb_bg').show();
})

$('.gnb > li').on('mouseleave', function () {
  $('.submenu, .gnb_bg').hide();
})


// popup
$('.open_popup').on('click', function (e) {
  //a의 기본동작(링크 이동) 막기
  e.preventDefault();

  $('.popup').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
})