// fade 슬라이더

// 첫번째 slide_item만 남기고 숨기자
$('.slide_item:gt(0)').hide();

// 3초에 한 번씩 실행
// setInterval(동작, 시간)
setInterval(function () {

  // 첫번째 slide_item을 숨기자
  $('.slide_item:first').fadeOut();

  // 첫번째 slide_item의 바로 다음 동생을 보여지게
  $('.slide_item:first').next().fadeIn();

  // 첫번째 slide_item을 막내로 만들기
  $('.slide_item:first').appendTo('.slide_wrap');


}, 3000);

// GNB
// $('.gnb > li').on('mouseenter', function () {})
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
})

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
})

// tab
$('.tab_con_item:gt(0)').hide();
// console.log( $('.tab_con_item') );

$('.tab_menu a').on('click', function (e) {
  // a의 기본동작 막기
  e.preventDefault();

  // 선택한 메뉴의 인덱스를 구해서 변수 tabIndex에 담기
  const tabIndex = $(this).index();
  // console.log(tabIndex);

  // 먼저 다 숨기고
  $('.tab_con_item').hide();

  // 인덱스에 해당하는 tab_con_item를 보여지게
  $('.tab_con_item').eq(tabIndex).show();

  // 메뉴를 선택하면 일단 다 on클래스를 없애고
  $('.tab_menu a').removeClass('on');

  // 인덱스에 해당하는 a에 on클래스 부여
  $('.tab_menu a').eq(tabIndex).addClass('on');
})


// popup
$('.open_popup').on('click', function (e) {
  e.preventDefault();

  $('.popup').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
})