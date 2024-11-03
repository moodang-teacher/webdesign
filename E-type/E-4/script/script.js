// 좌우 슬라이더

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
// $('.gnb > li').on('mouseenter', function() {})
$('.gnb > li').on('mouseenter', function() {
  $(this).find('.submenu').stop().fadeIn();
})

$('.gnb > li').on('mouseleave', function() {
  $(this).find('.submenu').stop().fadeOut();
})

// popup 
$('.open_popup').on('click', function(e) {
  e.preventDefault();

  $('.dim, .popup').fadeIn();
})

$('.btn_close').on('click', function() {
  $('.dim, .popup').fadeOut();
})