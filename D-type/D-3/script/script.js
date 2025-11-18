// 페이드 슬라이드

// slide_item이름을 가진 요소를 선택: 인덱스를 확인
// console.log($('.slide_item'));

// 0번째 인덱스보다 큰 요소를 숨겨라
$('.slide_item:gt(0)').hide();

// 3초에 한 번씩 실행
// setInterval(동작, 시간)
// setInterval(function () {}, 3000);
setInterval(function () {

  // 첫번째 slide_item이 사라짐
  $('.slide_item:first').fadeOut();

  // 바로 다음 동생이 나타남
  $('.slide_item:first').next().fadeIn();

  // 첫번째는 맨 마지막 자리로 이동
  $('.slide_item:first').appendTo('.slide_wrap');

}, 3000);

// GNB
$('.gnb > li').on('mouseenter', function () {
  $('.submenu, .gnb_bg').show();
})

$('.gnb > li').on('mouseleave', function () {
  $('.submenu, .gnb_bg').hide();
})

// TAB
console.log($('.tab_con_item'));

$('.tab_con_item:gt(0)').hide();

$('.tab_menu a').on('click', function (e) {
  // a의 기본동작 막기
  e.preventDefault();

  // 클릭한 메뉴의 인덱스 구해오기 -> 변수에 담기
  const tabIndex = $(this).index();

  // 모두 다 숨기고
  $('.tab_con_item').hide();

  // 구해온 인덱스에 해당하는 .tab_con_item을 보여주기
  $('.tab_con_item').eq(tabIndex).show();

  // 모든 메뉴에서 on클래스 삭제
  $('.tab_menu a').removeClass('on');

  // 클릭한 메뉴에 on클래스 부여
  $('.tab_menu a').eq(tabIndex).addClass('on');
})

// popup
$('.open_popup').on('click', function (e) {
  e.preventDefault();

  $('.popup').fadeIn();
})

$('.btn_close').on('click', function (e) {

  $('.popup').fadeOut();
})