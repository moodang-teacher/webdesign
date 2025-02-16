// GNB
// $(".gnb > li").on("mouseenter", function() {})
$('.gnb > li').on('mouseenter', function () {
	$('.submenu, .gnb_bg').stop().slideDown();
});

$('.gnb > li').on('mouseleave', function () {
	$('.submenu, .gnb_bg').stop().slideUp();
});

// popup
// $(".open_popup").on("click", function() {})
$('.open_popup').on('click', function () {
	$('.dim, .popup').fadeIn();
});

$('.btn_close').on('click', function () {
	$('.dim, .popup').fadeOut();
});

// 좌우 슬라이더
// setInterval(동작, 시간)
setInterval(function () {
	// $('.slide_wrap').animate(동작옵션, 시간, 끝나고 나서의 동작)
	// $('.slide_wrap').animate({}, 1000, function() {})
	$('.slide_wrap').animate(
		{
			'margin-left': '-100%',
		},
		1000,
		function () {
			$('.slide_wrap').css('margin-left', 0);
			$('.slide_item:first').appendTo('.slide_wrap');
		}
	);
}, 3000);
