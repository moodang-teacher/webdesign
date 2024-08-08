// fade slider
// 현재 겹쳐져있는 상태, 맨 처음 슬라이드 제외한 나머지를 숨기고 시작
// = 인덱스가 0보다 큰 슬라이드를 숨기자 --> 대상:gt(0).hide()

$(".slide_item:gt(0)").hide();

// 3초에 한 번씩 실행
// setInterval(function(){}, 3000)
setInterval(function () {
  // 첫번째 슬라이드가 페이드 아웃
  $(".slide_item:first").fadeOut();

  // 그 첫번째 슬라이드의 바로 다음 동생은 페이드 인
  $(".slide_item:first").next().fadeIn();

  // 첫번째 슬라이드를 부모 기준, 막내로 만들자
  $(".slide_item:first").appendTo(".slide_wrap");
}, 3000);

// 팝업
$(".open_popup").on("click", function () {
  $(".dim, .popup").fadeIn();
});
$(".btn_close").on("click", function () {
  $(".dim, .popup").fadeOut();
});

// GNB
// $('.gnb > li').on('mouseenter', function () {})
$(".gnb > li").on("mouseenter", function () {
  $(this).find(".submenu").stop().slideDown();
});
$(".gnb > li").on("mouseleave", function () {
  $(this).find(".submenu").stop().slideUp();
});
