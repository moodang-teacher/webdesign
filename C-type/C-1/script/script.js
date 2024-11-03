// 페이드 슬라이드
$('.slide_item:gt(0)').hide();

// setInterval(function() {}, 3000);
setInterval(function() {

  $('.slide_item:first').fadeOut();
  $('.slide_item:first').next().fadeIn();
  $('.slide_item:first').appendTo('.slide_wrap');

}, 3000);


// GNB
// $('.gnb > li').on('mouseenter', function() {})
$('.gnb > li').on('mouseenter', function() {
  $(this).find('.submenu').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function() {
  $(this).find('.submenu').stop().slideUp();
})

// 탭메뉴
$('.tab_con_item:gt(0)').hide();

// $('.tab_menu a').on('click', function() {})
$('.tab_menu a').on('click', function(e) {
  e.preventDefault(); /* a 기본동작(링크이동) 막기 */

  const tabIndex = $(this).index();

  $('.tab_con_item').hide();
  $('.tab_con_item').eq(tabIndex).show();

  $('.tab_menu a').removeClass('on');
  $('.tab_menu a').eq(tabIndex).addClass('on');
})


// 팝업
$('.open_popup').on('click', function(e) {
  e.preventDefault();

  $('.popup').fadeIn();
})

$('.btn_close').on('click', function() {
  $('.popup').fadeOut();
})