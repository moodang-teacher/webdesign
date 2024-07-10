// GNB
$('.gnb > li').on('mouseenter', function () {
	$(this).find('.submenu').stop().show();
});
$('.gnb > li').on('mouseleave', function () {
	$(this).find('.submenu').stop().hide();
});

// slider left/right
setInterval(function () {
	$('.slide_wrap').animate(
		{
			'margin-left': '-100%',
		},
		700,
		function () {
			$('.slide_item:first').appendTo('.slide_wrap');
			$('.slide_wrap').css('margin-left', 0);
		}
	);
}, 3000);

// popup
$('.open_popup').on('click', function (e) {
	e.preventDefault();
	$('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
	$('.popup').fadeOut();
});
