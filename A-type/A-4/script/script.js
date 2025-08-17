// 페이드 슬라이더

// 첫번째 .slide_item을 제외한 나머지를 숨긴다.
$('.slide_item:gt(0)').hide();

// 3초에 한 번씩 반복
// setInterval(동작, 시간)
// setInterval(function () {}, 3000)
setInterval(function () {

  // 첫번째 .slide_item이 사라진다.
  $('.slide_item:first').fadeOut();

  // 첫번째 .slide_item의 다로 다음 동생이 나타난다.
  $('.slide_item:first').next().fadeIn();

  // 첫번째 .slide_item을 마지막 슬라이드로 위치 이동
  $('.slide_item:first').appendTo('.slide_wrap');
}, 3000)


// GNB
// $('.gnb > li').on('mouseenter', function () {})
$('.gnb > li').on('mouseenter', function () {
  $('.submenu, .gnb_bg').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function () {
  $('.submenu, .gnb_bg').stop().slideUp();
})

// 팝업구현
// $('.open_popup').on('click', function () {})
$('.open_popup').on('click', function (e) {
  // a의 기본동작막기
  e.preventDefault();

  $('.popup').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
})