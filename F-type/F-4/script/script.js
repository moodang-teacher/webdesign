// 상하 슬라이더

// setInterval(function () {}, 3000)
setInterval(function () {
  // $('.slide_wrap').animate({}, 1000, function () {})
  $(".slide_wrap").animate(
    {
      "margin-top": "-350px",
    },
    1000,
    function () {
      $(".slide_item:first").appendTo(".slide_wrap");
      $(".slide_wrap").css("margin-top", 0);
    }
  );
}, 3000);

// GNB
// $('.gnb > li').on('mouseenter', function () {})
$(".gnb > li").on("mouseenter", function () {
  $(".submenu, .gnb_bg").stop().slideDown();
});

$(".gnb > li").on("mouseleave", function () {
  $(".submenu, .gnb_bg").stop().slideUp();
});

// Popup
// $('.open_popup').on('click', function () {})
$(".open_popup").on("click", function (e) {
  e.preventDefault();

  $(".dim, .popup").fadeIn();
});

$(".btn_close").on("click", function () {
  $(".dim, .popup").fadeOut();
});
