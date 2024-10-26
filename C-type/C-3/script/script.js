// GNB
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').show();
  // $('.submenu').show();
})
$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').hide();
})

// slider
setInterval(function () {
  $('.slide_wrap').animate({
    'margin-left': '-100%'
  }, 1000, function () {
    $('.slide_item:first').appendTo('.slide_wrap');
    $('.slide_wrap').css('margin-left', '0');
  });
}, 3000);



// popup
$('.open_popup').on('click', function () {
  $('.popup').fadeIn();
});
$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
});