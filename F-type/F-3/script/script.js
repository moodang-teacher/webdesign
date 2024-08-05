// GNB
$('.gnb > li').on('mouseenter', function () {
  $('.submenu, .gnb_bg').stop().slideDown();
});
$('.gnb > li').on('mouseleave', function () {
  $('.submenu, .gnb_bg').stop().slideUp();
});

// popup
$('.open_popup').on('click', function () {
  $('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
});