// 좌우 슬라이드
// setInterval(동작, 시간)
// setInterval(function () {}, 3000);
setInterval(function () {
  // $('.slide_wrap').animate({옵션}, 시간, 이 후에 할 동작)
  // $('.slide_wrap').animate({옵션}, 1000, function () {})
  $('.slide_wrap').animate({
    'margin-left': '-100%'
  }, 1000, function () {
    $('.slide_item:first').appendTo('.slide_wrap');
    $('.slide_wrap').css('margin-left', '0');
  })
}, 3000);


// GNB
// $('.gnb > li').on('mouseenter', function () {})
$('.gnb > li').on('mouseenter', function () {
  $('.submenu').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function () {
  $('.submenu').stop().slideUp();
})

// 탭메뉴
// console.log($('.tab_con_item'));

$('.tab_con_item:gt(0)').hide();

$('.tab_menu a').on('click', function () {
  // 사용자가 선택한 메뉴의 인덱스를 구해서 tabIndex변수에 담기
  const tabIndex = $(this).index();

  console.log(tabIndex);

  // 일단 모두 숨기고
  $('.tab_con_item').hide();

  // tab_con_item중에 해당 인덱스를 보여지게
  $('.tab_con_item').eq(tabIndex).show();

  // 일단 모든 on클래스 삭제
  $('.tab_menu a').removeClass('on');

  // 인덱스에 해당하는 a에만 on클래스 부여
  $('.tab_menu a').eq(tabIndex).addClass('on');
})


// 팝업
// $('.open_popup').on('click', function () {})
$('.open_popup').on('click', function (e) {
  e.preventDefault();

  $('.popup').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
})