// GNB
$('.gnb > li').on('mouseenter', function () {
	// $('.submenu').stop().slideDown();
	$(this).find('.submenu').stop().slideDown();
});
$('.gnb > li').on('mouseleave', function () {
	// $('.submenu').stop().slideDown();
	$(this).find('.submenu').stop().slideUp();
});

// popup
$('.open_popup').on('click', function (e) {
	e.preventDefault();
	$('.popup').fadeIn();
});
$('.btn_close').on('click', function () {
	$('.popup').fadeOut();
});

// 상하 슬라이더

setInterval(function () {
	// $('.slide_wrap').animate({}, 1000, function() {})
	$('.slide_wrap').animate(
		{
			'margin-top': '-400px',
		},
		1000,
		function () {
			// alert('동작 끝!');
			$('.slide_wrap').css('margin-top', 0);
			$('.slide_item:first').appendTo('.slide_wrap');
		}
	);
}, 3000);

// tab
$('.tab_con_item:gt(0)').hide();

$('.tab_menu a').on('click', function (e) {
	e.preventDefault();
	const tabIndex = $(this).index();

	$('.tab_menu a').removeClass('on');
	$('.tab_menu a').eq(tabIndex).addClass('on');

	$('.tab_con_item').hide();
	$('.tab_con_item').eq(tabIndex).show();
});
