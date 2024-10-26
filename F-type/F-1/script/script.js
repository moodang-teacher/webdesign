// 페이드 슬라이더

// console.log( $('.slide_item') );

// 첫번째 슬라이드만 보여지고 나머지는 숨겨라
$('.slide_item:gt(0)').hide();

// 3초에 한 번씩 실행
// setInterval(function() {}, 3000)
setInterval(function () {
	// 첫번째 슬라이드는 사라지고
	$('.slide_item:first').fadeOut();

	// 첫번째 슬라이드의 바로 다음 동생이 나타나고
	$('.slide_item:first').next().fadeIn();

	// 첫번째 슬라이드를 맨 마지막으로 위치 이동
	$('.slide_item:first').appendTo('.slide_wrap');
}, 3000);

// GNB
// $('.gnb > li').on('mouseenter', function() {})
$('.gnb > li').on('mouseenter', function () {
	$(this).find('.submenu').stop().slideDown();
});
$('.gnb > li').on('mouseleave', function () {
	$(this).find('.submenu').stop().slideUp();
});

// 팝업
$('.open_popup').on('click', function (e) {
	e.preventDefault(); // a의 기본동작(링크 이동) 막기
	$('.popup').fadeIn();
});
$('.btn_close').on('click', function () {
	$('.popup').fadeOut();
});

// 탭메뉴
// 첫번째를 제외한 나머지 .tab_con_item 숨기기
$('.tab_con_item:gt(0)').hide();

// 탭메뉴를 클릭했을 때
$('.tab_menu a').on('click', function (e) {
	// a의 기본동작 막기
	e.preventDefault();

	// 클릭한 요소의 인덱스 구하기
	const tabIndex = $(this).index();
	console.log(tabIndex);

	// 일단 다 숨기고
	$('.tab_con_item').hide();

	// 인덱스에 해당하는 .tab_con_item 보이게
	$('.tab_con_item').eq(tabIndex).show();

	// 탭메뉴에 있는 on클래스를 다 지우고 클릭한 인덱스에 해당하는 메뉴에만 on클래스 부여
	$('.tab_menu a').removeClass('on');
	$('.tab_menu a').eq(tabIndex).addClass('on');
});
