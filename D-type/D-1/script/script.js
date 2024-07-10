// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
});
$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
});

// 이미지 슬라이드 : 상하
setInterval(function () {
  $('.slide_wrap').animate(
    {
      'margin-top': '-400px',
    },
    1000,
    function () {
      $('.slide_item:first').appendTo('.slide_wrap');
      $('.slide_wrap').css('margin-top', 0);
    }
  );
}, 3000);

// tab menu
$('.tab_con_item:gt(0)').hide();
$('.tab_menu a').on('click', function (e) {
  e.preventDefault();
  let tIdx = $(this).index();

  $('.tab_menu a').removeClass('on').eq(tIdx).addClass('on');
  $('.tab_con_item').hide().eq(tIdx).show();
});

// popup
$('.open_popup').on('click', function (e) {
  e.preventDefault();
  $('.popup').show();
});

$('.btn_close').on('click', function () {
  $('.popup').hide();
});
