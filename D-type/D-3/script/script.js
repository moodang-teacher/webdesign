// GNB
// $('.gnb > li').on('mouseenter', function () {})
$('.gnb > li').on('mouseenter', function () {
  $('.submenu, .gnb_bg').stop().fadeIn();
});

$('.gnb > li').on('mouseleave', function () {
  $('.submenu, .gnb_bg').stop().fadeOut();
});


// 페이드 슬라이더

// 겹쳐진 slide_item중에서 첫번째를 제외하고 다 숨기자.
console.log( $('.slide_item') );
$('.slide_item:gt(0)').hide();

// 3초에 한 번씩 실행
// setInterval(function () {}, 3000)
setInterval(function () {

  // 첫번째 슬라이드가 페이드 아웃
  $('.slide_item:first').fadeOut();

  // 첫번째 슬라이드의 바로 다음 동생을 페이드 인
  $('.slide_item:first').next().fadeIn();

  // 첫번째 슬라이드를 막내로 만들기
  $('.slide_item:first').appendTo('.slide_wrap');

}, 3000);

// 팝업 띄우기
// $('.open_popup').on('click', function () {})
$('.open_popup').on('click', function () {
  $('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
});

// 탭메뉴

// 갤러리 영역을 숨기고 시작 (첫번째를 남기고 나머지를 숨기기)
$('.tab_con_item:gt(0)').hide();

// 탭메뉴를 클릭했을 때
// $('.tab_menu a').on('click', function () {})
$('.tab_menu a').on('click', function (e) {
  // a가 가진 기본동작 막기
  e.preventDefault();

  // 클릭한 메뉴의 인덱스를 구해서 변수 tabIdx에 담기
  const tabIdx = $(this).index();
  console.log(tabIdx);

  // 인덱스가 같은 tab_con_item를 보이게 (일단 다 숨기고)
  $('.tab_con_item').hide();
  $('.tab_con_item').eq(tabIdx).show();

  // 탭메뉴 활성화 표시 (일단 on클래스를 다 없애고)
  $('.tab_menu a').removeClass('on');
  $('.tab_menu a').eq(tabIdx).addClass('on');
})