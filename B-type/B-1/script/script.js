// GNB
$(".gnb > li").on("mouseenter", function () {
  $(".submenu").stop().slideDown();
});
$(".gnb > li").on("mouseleave", function () {
  $(".submenu").stop().slideUp();
});

// 좌우 슬라이더
// setInterval(function () {}, 3000);
setInterval(function () {
  // $('.slide_wrap').animate({}, 1000, function () {})
  $(".slide_wrap").animate(
    {
      "margin-left": "-100%",
    },
    1000,
    function () {
      $(".slide_item:first").appendTo(".slide_wrap");
      $(".slide_wrap").css("margin-left", "0");
    }
  );
}, 3000);

// 팝업창
$(".open_popup").on("click", function () {
  $(".popup").fadeIn();
});
$(".btn_close").on("click", function () {
  $(".popup").fadeOut();
});

// 탭메뉴
console.log($(".tab_menu a"));
console.log($(".tab_con_item"));

// 첫번째 탭 관련 콘텐츠 영역만 남기고 다 숨기기
$(".tab_con_item:gt(0)").hide();

$(".tab_menu a").on("click", function () {
  const tabIdx = $(this).index();

  $(".tab_con_item").hide();
  $(".tab_con_item").eq(tabIdx).show();

  $(".tab_menu a").removeClass("on");
  $(".tab_menu a").eq(tabIdx).addClass("on");
});
