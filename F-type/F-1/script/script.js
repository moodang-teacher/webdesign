// GNB
$('.gnb li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
});
$('.gnb li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
});

// Slider
$('.slide:gt(0)').hide();
setInterval(function () {
  $('.slide:first').fadeOut().next().fadeIn();
  $('.slide:first').appendTo('.slider-wrap');
}, 3000);

// Tab
$('.tab-con-item:last').hide();

$('.tab-menu a').on('click', function (e) {
  e.preventDefault();
  let tabIdx = $(this).index();

  $('.tab-menu a').removeClass().eq(tabIdx).addClass('on');
  $('.tab-con-item').hide().eq(tabIdx).show();
});

// Popup
$('.show_popup').on('click', function (e) {
  e.preventDefault();
  $('.popup').show();
});

$('.btn_close').on('click', function () {
  $('.popup').hide();
});
