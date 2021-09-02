// header scroll
$(function () {
    $(window).on('load scroll', function () {
        const header = $('.header');
        const visualHeight = $('.visual').outerHeight();
        const h_Height = header.outerHeight();
        const scrollTop = $(window).scrollTop(); //뷰포트 높이값

        // console.log('scrollTop:' + scrollTop);
        // console.log('header:' + h_Height);
        // console.log('visualHeight:' + visualHeight);

        header.addClass('load');
        if (scrollTop >= visualHeight - h_Height) { //visual높이값-header높이값뺀 값이 스크롤 높이가 크거나 같을때
            header.addClass('down');
        } else {
            header.removeClass('down');
        }
    });
});