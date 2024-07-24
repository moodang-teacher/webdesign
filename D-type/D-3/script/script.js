// GNB
// $('.gnb > li').on('mouseenter', function () {
// 	$('.submenu, .gnb_bg').stop().show();
// 	$('.submenu').css('display', 'flex');
// });
// $('.gnb > li').on('mouseleave', function () {
// 	$('.submenu, .gnb_bg').stop().hide();
// });

$('.gnb > li').on('mouseenter', function () {
	$('.submenu, .gnb_bg').stop().slideDown();
});
$('.gnb > li').on('mouseleave', function () {
	$('.submenu, .gnb_bg').stop().slideUp();
});

// 이미지 슬라이드 : fade In/Out
$('.slide_item:gt(0)').hide();
setInterval(function () {
	$('.slide_item:first').fadeOut().next().fadeIn();
	$('.slide_item:first').appendTo('.slide_wrap');
}, 3000);

// tab
$('.tab_menu > a').on('click', function (e) {
	e.preventDefault();
	let tabIdx = $(this).index();

	$('.tab_con_item').hide().eq(tabIdx).show();
	$('.tab_menu > a').removeClass('on').eq(tabIdx).addClass('on');
});

// popup
$('.open_popup').on('click', function (e) {
	e.preventDefault();
	$('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
	$('.popup').fadeOut();
});
