// 상하 슬라이드
// 3초에 한 번씩 실행

// setInterval(동작, 시간);
// setInterval(function () {}, 3000);
setInterval(function () {

  // $('.slide_wrap').animate({}, 1000, function() {});
  $('.slide_wrap').animate({
    'margin-top': '-400px'
  }, 1000, function() {
    $('.slide_wrap').css('margin-top', '0');
    $('.slide_item:first').appendTo('.slide_wrap');
  });

}, 3000);


// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
})

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
})

// TAB
console.log($('.tab_menu a'));
console.log($('.tab_con_item'));

// .tab_con_item 요소들 중에서 0번째 인덱스보다 큰 인덱스를 가진 요소를 숨겨라
$('.tab_con_item:gt(0)').hide();

$('.tab_menu a').on('click', function (e) {
  // a의 기본동작을 막기
  e.preventDefault();

  // 클릭한 요소의 인덱스를 구해서 변수에 담아
  const tabIndex = $(this).index();
  console.log(tabIndex);

  // 인덱스에 해당하는 .tab_con_item을 화면에 보이게
  $('.tab_con_item').hide();
  $('.tab_con_item').eq(tabIndex).show();

  // a의 활성화 표시
  $('.tab_menu a').removeClass('on');
  $('.tab_menu a').eq(tabIndex).addClass('on');
})

// popup
$('.open_popup').on('click', function () {
  $('.popup').fadeIn();
})

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
})