// 가로 슬라이드
// setInterval(동작, 시간);
setInterval(function () {
  $('.slide_wrap').animate({
    'margin-left': '-100%'
  }, 1000, function () {
    $('.slide_wrap').css('margin-left', '0');
    $('.slide_item:first').appendTo('.slide_wrap');
  })
}, 3000);


// GNB
$('.gnb > li').on('mouseenter', function () {
  $('.submenu, .gnb_bg').stop().slideDown();
})

$('.gnb > li').on('mouseleave', function () {
  $('.submenu, .gnb_bg').stop().slideUp();
})

// TAB
console.log($('.tab_menu a'), $('.tab_con_item'));

// 첫번째 .tab_con_item를 제외하고 숨긴 후 시작
// $('.tab_con_item').eq(1).hide();
$('.tab_con_item:gt(0)').hide();

// 사용자가 메뉴를 클릭했을 때
$('.tab_menu a').on('click', function (e) {
  e.preventDefault(); // a의 기본동작 막기

  // 클릭한 메뉴의 인덱스를 구하자 --> 변수에 담아서 활용
  const tabIndex = $(this).index();
  
  // 모두 숨기고 시작
  $('.tab_con_item').hide();

  // 그 인덱스에 해당하는 .tab_con_item을 보여주자
  $('.tab_con_item').eq(tabIndex).show();

  // 메뉴의 활성화 표시
  // 1. 일단 모두 제거하고: removeClass()
  $('.tab_menu a').removeClass('on');

  // 2. 그 인덱스에 해당하는 .tab_menu a에게 클래스 부여: addClass()
  $('.tab_menu a').eq(tabIndex).addClass('on');
})


// POPUP
$('.open_popup').on('click', function (e) {
  e.preventDefault();

  $('.popup').fadeIn();
})

$('.btn_close').on('click', function () {

  $('.popup').fadeOut();
})