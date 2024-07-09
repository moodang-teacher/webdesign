// GNB
$('.gnb > li').on('mouseenter', function () {
	$('.submenu, .gnb_bg').stop().show();
	$('.submenu').css('display', 'flex');
});
$('.gnb_bg').on('mouseleave', function () {
	$('.submenu, .gnb_bg').stop().hide();
});

// 이미지 슬라이드 : fade In/Out

// popup
$('.open_popup').on('click', function (e) {
	e.preventDefault();
	$('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
	$('.popup').fadeOut();
});
