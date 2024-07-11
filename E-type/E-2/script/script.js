// GNB
$('.gnb > li').on('mouseenter', function () {
	$(this).find('.submenu').stop().slideDown();
});
$('.gnb > li').on('mouseleave', function () {
	$(this).find('.submenu').stop().slideUp();
});

// slide
setInterval(function () {
	$('.slide_wrap').animate(
		{
			'margin-top': '-700px',
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

$('.btn_close').on('click', function () {
	$('.dim, .popup').fadeOut();
});
