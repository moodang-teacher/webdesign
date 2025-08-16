// 슬라이더
// setInterval(동작, 시간)
setInterval(function () {

  // 1. slide_wrap이 위로 이동
  // $('.slide_wrap').animate({옵션}, 시간, 이후 동작)
  $('.slide_wrap').animate({
    'margin-top': '-300px'
  }, 1000, function () {

    // 2. 첫번째 slide_item이 막내로 이동
    $('.slide_item:first').appendTo('.slide_wrap');

    // 3. 즉시 원위치
    $('.slide_wrap').css('margin-top', '0');
  });


}, 3000)

// GNB
$('.gnb > li').on('mouseenter', function () {
  $('.submenu').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function () {
  $('.submenu').stop().slideUp();
})


// 탭메뉴
// 1. tab_con_item 중에서 첫번째를 제외하고 숨겨라.
$('.tab_con_item:gt(0)').hide();

// 2. 탭메뉴를 클릭하면
$('.tab_menu > a').on('click', function (e) {
  // a의 기본동작 막기
  e.preventDefault();

  // 3. 클릭한 탭메뉴의 인덱스를 구해서 변수(tabIndex)에 담기
  const tabIndex = $(this).index();
  // console.log(tabIndex);

  // 4. tab_con_item 중에서 인덱스 같은 애를 보여줌
  $('.tab_con_item').hide(); // 일단 다 숨기고
  $('.tab_con_item').eq(tabIndex).show();
  

  // 5. 클릭한 탭메뉴에게 on클래스를 부여(일단, 다 빼고)
  $('.tab_menu > a').removeClass('on');
  $('.tab_menu > a').eq(tabIndex).addClass('on');
})

// 팝업
$('.open_popup').on('click', function (e) {
  // a의 기본동작막기
  e.preventDefault();

  $('.popup').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
})