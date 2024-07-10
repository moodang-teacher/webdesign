// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
});

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
});

// 이미지 슬라이드 : 페이드
$('.slide_item:gt(0)').hide();

setInterval(function () {
  $('.slide_item:first').fadeOut();
  $('.slide_item:first').next().fadeIn();
  $('.slide_item:first').appendTo('.slide_wrap');
}, 3000);

// tab
$('.tab_con_item:gt(0)').hide();
$('.tab_menu a').on('click', function (e) {
  e.preventDefault();

  let tIdx = $(this).index();
  $('.tab_con_item').hide().eq(tIdx).show();
  $('.tab_menu a').removeClass('on').eq(tIdx).addClass('on');
});

// open popup
$('.open_popup').on('click', function (e) {
  e.preventDefault();
  $('.popup').show();
});
$('.btn_close').on('click', function () {
  $('.popup').hide();
});
