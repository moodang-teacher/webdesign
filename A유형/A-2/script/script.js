// GNB
$('.gnb > li').on('mouseenter', function () {
  $('.nav_bg, .submenu').stop().slideDown();
  // $('.submenu').stop().fadeIn();
});
$('.gnb > li').on('mouseleave', function () {
  $('.nav_bg, .submenu').stop().slideUp();
  // $('.submenu').stop().fadeOut();
});

// 이미지 슬라이드
setInterval(function () {
  $('.slide_wrap').animate(
    {
      'margin-left': '-100%',
    },
    1000,
    function () {
      $('.slide_item:first').appendTo('.slide_wrap');
      $('.slide_wrap').css('margin-left', 0);
    }
  );
}, 3000);

// 팝업
$('.open_popup').on('click', function (e) {
  e.preventDefault();
  $('.dim').fadeIn();
  $('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
  $('.dim').fadeOut();
  $('.popup').fadeOut();
});
