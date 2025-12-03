// fade in/out 슬라이드

// console.log($('.slide_item'));

// 첫번째 요소를 제외한 나머지를 숨긴다. 
// --> 0번째 인덱스보다 큰 인덱스를 가진 요소를 숨겨라
$('.slide_item:gt(0)').hide();

// 3초에 한 번씩 실행
// setInterval(동작, 시간);
setInterval(function () {
  $('.slide_item:first').fadeOut();
  $('.slide_item:first').next().fadeIn();
  $('.slide_item:first').appendTo('.slide_wrap');
}, 3000);


// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
});

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
});

// TAB
console.log($('.tab_con_item'));

// 첫번째를 제외한 나머지를 숨기고 시작 --> 인덱스
$('.tab_con_item:gt(0)').hide();

// 사용자가 클릭한 메뉴의 인덱스를 구해서, 
$('.tab_menu a').on('click', function (e) {
  e.preventDefault();
  const tabIndex = $(this).index();
  console.log(tabIndex);

  // 일단, 모두 숨기고
  $('.tab_con_item').hide();

  // 그 인덱스에 해당하는 .tab_con_item을 보여주자
  $('.tab_con_item').eq(tabIndex).show();

  // 메뉴의 활성화 표시
  // 1. 일단 모두 제거하고: removeClass('on')
  $('.tab_menu a').removeClass('on');

  // 2. 선택한 인덱스에 해당하는 메뉴에 클래스 부여: addClass('on')
  $('.tab_menu a').eq(tabIndex).addClass('on');
});

// POPUP
$('.open_popup').on('click', function (e) {
  e.preventDefault();
  $('.popup').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
})