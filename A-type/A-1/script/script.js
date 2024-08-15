// GNB
$('.gnb > li').on('mouseenter', function () {
	$('.submenu').stop().slideDown();
});
$('.gnb > li').on('mouseleave', function () {
	$('.submenu').stop().slideUp();
});

// slider
setInterval(function () {
	$('.slide_wrap').animate(
		{
			'margin-left': '-100%',
		},
		1000,
		function () {
			$('.slide_item:first').appendTo('.slide_wrap');
			$('.slide_wrap').css('margin-left', '0');
		}
	);
}, 3000);

// tab

// 1. 공지사항을 제외한 나머지를 숨긴다.
$('.tab_con_item:gt(0)').hide();

// 2. 탭메뉴를 클릭하면
$('.tab_menu > a').on('click', function (e) {
	// a요소의 기본 동작 막기
	e.preventDefault();

	// 3. 클릭한 탭메뉴의 인덱스를 구해서 변수(tabIdx)에 담기
	const tabIdx = $(this).index();

	// 4. .tab_con_item 중에서 인덱스가 같은 애를 보이게(중요! 일단, 다 숨기고!!)
	$('.tab_con_item').hide();
	$('.tab_con_item').eq(tabIdx).show();

	// 5. 클릭한 탭메뉴에게 on클래스 부여(중요! 일단, 다 없애고!!)
	$('.tab_menu > a').removeClass('on');
	$('.tab_menu > a').eq(tabIdx).addClass('on');
});

// popup
$('.open_popup').on('click', function (e) {
	e.preventDefault();

	$('.popup').fadeIn();
});

$('.btn_close').on('click', function () {
	$('.popup').fadeOut();
});
