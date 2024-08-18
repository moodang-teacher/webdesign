// 페이드슬라이더
$(".slide_item:gt(0)").hide();

setInterval(function () {
  $(".slide_item:first").fadeOut();
  $(".slide_item:first").next().fadeIn();
  $(".slide_item:first").appendTo(".slide_wrap");
}, 3000);

// 팝업
$('.open_popup').on('click', function (e) {
  e.preventDefault();
  $('.popup').fadeIn();
});

$('.btn_close').on('click', function () {

  $('.popup').fadeOut();
});

// GNB
$('.gnb > li').on('mouseenter', function () {
  $('.submenu, .gnb_bg').stop().fadeIn();
});

$('.gnb > li').on('mouseleave', function () {
  $('.submenu, .gnb_bg').stop().fadeOut();
});