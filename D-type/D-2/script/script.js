// 좌우 슬라이더
// setInterval(function() {}, 3000);
setInterval(function() {

  // $('.slide_wrap').animate({옵션}, 시간, 종료후 동작)
  // $('.slide_wrap').animate({}, 1000, function() {})
  $('.slide_wrap').animate({

    'margin-left': '-100%'

  }, 1000, function() {

    // 위치를 재조정
    $('.slide_wrap').css('margin-left', 0);

    // 첫번째 슬라이드를 맨 마지막으로 보내기
    $('.slide_item:first').appendTo('.slide_wrap');
    
  })

}, 3000);


// GNB
// $('.gnb > li').on('mouseenter', function() {})
$('.gnb > li').on('mouseenter', function() {
  $(this).find('.submenu').stop().slideDown();
})
$('.gnb > li').on('mouseleave', function() {
  $(this).find('.submenu').stop().slideUp();
})

// popup
// $('.open_popup').on('click', function() {})
$('.open_popup').on('click', function(e) {
  // a의 기본동작(링크이동)을 막기
  e.preventDefault();
  $('.dim, .popup').fadeIn();
})

$('.btn_close').on('click', function() {
  $('.dim, .popup').fadeOut();
})