$(function () {
    // header scroll
    $(window).on('load scroll', function () {
        const header = $('header');
        const visualHeight = $('.visual').outerHeight();
        const h_Height = header.outerHeight();
        const scrollTop = $(window).scrollTop(); //뷰포트 높이값
        header.addClass('load');
        if (scrollTop >= visualHeight - h_Height) { //visual높이값-header높이값뺀 값이 스크롤 높이가 크거나 같을때
            header.addClass('down');
        } else {
            header.removeClass('down');
        }
    });

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
});