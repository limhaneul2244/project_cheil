$(function () {
    const ani = $('.ani');

    // header scroll
    $(window).on('load scroll', function () {
        const header = $('header');
        const visualHeight = $('.visual').outerHeight();
        const h_Height = header.outerHeight();
        const scrollTop = $(window).scrollTop(); //뷰포트 높이값
        const visual = $('.visual');

        header.addClass('load');
        visual.addClass('down');
        if (scrollTop >= visualHeight - h_Height) { //visual높이값-header높이값뺀 값이 스크롤 높이가 크거나 같을때
            header.addClass('down');
        } else {
            header.removeClass('down');
        }
    });

    //visual class on붙었을 때
    visual();

    function visual() {
        const visualSlider = $('.visual .visual_slider li'); //슬라이드 이미지
        const visualNav = $('.visual_nav li'); //슬라이드 왼쪽 nav
        const visualLength = visualSlider.length - 1;

        setInterval(slideEvent, 3500);
        first();

        function first() {
            visualSlider.eq(0).addClass('on');
            visualNav.eq(0).addClass('active');
        }

        function slideEvent() {
            let i = $('.visual .visual_slider li.on').index();
            reset(); //초기화
            console.log(i);

            if (i < visualLength) {
                visualSlider.eq(i + 1).addClass('on');
                visualNav.eq(i + 1).addClass('active');
            }
            if (i == visualLength) { //값이 동일해질 경우
                i = 0;
                visualSlider.eq(i).addClass('on');
                visualNav.eq(i).addClass('active');
            }
        }

        //visualNav 클릭 이벤트
        visualNav.click(function () {
            let i = $(this).index();

            reset();
            $(this).addClass('active');
            visualSlider.eq(i).addClass('on');
        });

        function reset() {
            visualSlider.removeClass('on');
            visualNav.removeClass('active');
        }
    };

    //gnbmenu 클릭
    gnbMenu();

    function gnbMenu() {
        const allMenu = $('header .btn_all_menu'); //햄버거 버튼
        const $header = $('header'); //조건문에 들어가야 하므로 $를 붙여주어야 함
        const allBg = $('.menu_wrap_bg'); //배경

        allMenu.click(function (e) { //햄버거 버튼 클릭시 event 발생
            e.preventDefault(); //a태그 클릭시 위로 올라가는 속성을 막아줌
            if ($header.hasClass('active') == false) {
                $header.addClass('active');
                allBg.fadeIn(300);
            } else {
                $header.removeClass('active');
                allBg.fadeOut(300);
            }
        });
    };

    //화면 스크롤시 애니메이션 효과
    $.fn.moving = function () {
        let elementTop = $(this).offset().top;
        let elementBottom = elementTop + $(this).outerHeight();
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();

        return (viewportTop < elementBottom) && (elementTop < viewportBottom);
    };

    $(window).on('load resize scroll', function () {
        ani.each(function () { //ani라는 클래스를 순차적으로 찾아줌
            if ($(this).moving()) {
                $(this).addClass('moving');
            } else {
                $(this).removeClass('moving');
            }
        });
    });
});