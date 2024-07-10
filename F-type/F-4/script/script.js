// GNB
$('.gnb > li').on('mouseenter', function () {
	$('.gnb_bg, .submenu').stop().slideDown();
});
$('.gnb > li').on('mouseleave', function () {
	$('.gnb_bg, .submenu').stop().slideUp();
});

// slider : top/bottom
setInterval(function () {
	$('.slide_wrap').animate(
		{
			'margin-top': '-350px',
		},
		700,
		function () {
			$('.slide_item:first').appendTo('.slide_wrap');
			$('.slide_wrap').css('margin-top', 0);
		}
	);
}, 3000);

// popup
$('.open_popup').on('click', function (e) {
	e.preventDefault();
	$('.dim, .popup').fadeIn();
});
$('.btn_close').on('click', function (e) {
	$('.dim, .popup').fadeOut();
});
