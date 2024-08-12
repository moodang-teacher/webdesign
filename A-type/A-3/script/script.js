// GNB
// $('.gnb > li').on('mouseenter', function () {})
$(".gnb > li").on("mouseenter", function () {
  $(this).find(".submenu").stop().slideDown();
});

$(".gnb > li").on("mouseleave", function () {
  $(this).find(".submenu").stop().slideUp();
});

// 페이드 슬라이더
$(".slide_item:gt(0)").hide();

// setInterval(function () {}, 3000)
setInterval(function () {
  $(".slide_item:first").fadeOut();
  $(".slide_item:first").next().fadeIn();
  $(".slide_item:first").appendTo(".slide_wrap");
}, 3000);

// 팝업
// $('.open_popup').on('click', function () {})
$(".open_popup").on("click", function (e) {
  // a의 기본 동작을 막기
  e.preventDefault();
  $(".popup").fadeIn();
});

$(".btn_close").on("click", function () {
  $(".popup").fadeOut();
});

// 탭
$(".tab_con_item:gt(0)").hide();

// $('.tab_menu a').on('click', function() {})
$(".tab_menu a").on("click", function (e) {
  // a의 기본 동작을 막기
  e.preventDefault();

  const tabIdx = $(this).index();

  $(".tab_con_item").hide();
  $(".tab_con_item").eq(tabIdx).show();

  $(".tab_menu a").removeClass("on");
  $(".tab_menu a").eq(tabIdx).addClass("on");
});
