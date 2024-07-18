// GNB
$('.gnb > li').on('mouseenter', function () {
	$('.submenu').stop().slideDown();
	// $('.submenu').stop().fadeIn();
});
$('.gnb > li').on('mouseleave', function () {
	$('.submenu').stop().slideUp();
	// $('.submenu').stop().fadeOut();
});

// 이미지 슬라이드
setInterval(function () {
	$('.slide_wrap').animate(
		{
			'margin-left': '-100%',
		},
		1000,
		function () {
			$('.slide_item:first').appendTo('.slide_wrap');
			$('.slide_wrap').css('margin-left', 0);
		}
	);
}, 3000);

// tab
$('.tab_con_item:last').hide();
$('.tab_menu > a').on('click', function (e) {
	e.preventDefault();
	let tabIdx = $(this).index();
	$('.tab_menu > a').removeClass('on');
	$('.tab_menu > a').eq(tabIdx).addClass('on');

	$('.tab_con_item').hide();
	$('.tab_con_item').eq(tabIdx).show();
});

// 팝업
$('.open_popup').on('click', function (e) {
	e.preventDefault();
	$('.dim').fadeIn();
	$('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
	$('.dim').fadeOut();
	$('.popup').fadeOut();
});
