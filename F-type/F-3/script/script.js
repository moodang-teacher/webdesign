// GNB
$('.gnb > li').on('mouseenter', function () {
  $('.submenu, .gnb_bg').stop().slideDown();
});
$('.gnb > li').on('mouseleave', function () {
  $('.submenu, .gnb_bg').stop().slideUp();
});

// slider
setInterval(function () {
  $('.slide_wrap').animate(
    {
      'margin-left': '-100%',
    },
    1000,
    function () {
      $('.slide_item:first').appendTo('.slide_wrap');
      $('.slide_wrap').css('margin-left', '0');
    }
  );
}, 3000);

// Tab
$('.tab_con_item:gt(0)').hide();

$('.tab_menu a').on('click', function (e) {
  e.preventDefault();
  let tabIdx = $(this).index();

  $('.tab_menu a').removeClass().eq(tabIdx).addClass('on');
  $('.tab_con_item').hide().eq(tabIdx).show();
});

// popup
$('.open_popup').on('click', function (e) {
  e.preventDefault();
  $('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
});
