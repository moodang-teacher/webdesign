// 가로 슬라이더
// setInterval(function() {}, 3000)
setInterval(function() {

  // $('.slide_wrap').animate({}, 1000, function() {})
  $('.slide_wrap').animate({

    'margin-left': '-100%'

  }, 1000, function() {

    $('.slide_wrap').css('margin-left', 0);
    $('.slide_item:first').appendTo('.slide_wrap');

  });
}, 3000)

// GNB
$('.gnb > li').on('mouseenter', function() {
  $('.gnb_bg, .submenu').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function() {
  $('.gnb_bg, .submenu').stop().slideUp();
})

// tab menu
$('.tab_con_item:gt(0)').hide();

$('.tab_menu a').on('click', function(e) {
  e.preventDefault();

  const tabIndex = $(this).index();

  $('.tab_con_item').hide();
  $('.tab_con_item').eq(tabIndex).show();

  $('.tab_menu a').removeClass('on');
  $('.tab_menu a').eq(tabIndex).addClass('on');
})

// popup
$('.open_popup').on('click', function(e) {
  e.preventDefault();

  $('.popup').fadeIn();
})

$('.btn_close').on('click', function() {
  $('.popup').fadeOut();
})