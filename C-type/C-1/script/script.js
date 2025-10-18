// 페이드 슬라이드

// 1번을 제외하고 나머지를 숨겨라 : gt(0)
// console.log( $('.slide_item') );
$('.slide_item:gt(0)').hide();

setInterval(function(){  
  
  // 첫번째 슬라이드는 페이드 아웃
  $('.slide_item:first').fadeOut();
  
  // 그 슬라이드의 바로 다음 동생이 페이드 인
  $('.slide_item:first').next().fadeIn();
  
  // 첫번째 슬라이드가 마지막 슬라이드 자리로 이동 --> 순서를 바꿈
  $('.slide_item:first').appendTo('.slide_wrap');
}, 3000);


// GNB
// $('.gnb > li').on('mouseenter', function () {})
$('.gnb > li').on('mouseenter', function () {
  $(this).find('.submenu').stop().slideDown();
})

$('.gnb > li').on('mouseleave', function () {
  $(this).find('.submenu').stop().slideUp();
})


// TAB
$('.tab_con_item:gt(0)').hide();

console.log($('.tab_menu a'));

$('.tab_menu a').on('click', function () {
  // 클릭한 메뉴의 인덱스를 구해서 변수에 담자
  const tabIndex = $(this).index();
  console.log(tabIndex);

  // 모두 숨기고
  $('.tab_con_item').hide();

  // 그 인덱스에 해당하는 tab_con_item을 보여주자
  $('.tab_con_item').eq(tabIndex).show();

  // 활성화 표시
  $('.tab_menu a').removeClass('on');
  $('.tab_menu a').eq(tabIndex).addClass('on');
})

// popup
$('.open_popup').on('click', function () {
  $('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
  $('.popup').fadeOut();
});