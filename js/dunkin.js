$(function () {

    // $('.main_slider').on('init afterChange', function (e, s, c) {
    //     $('.main_slider figure.slick-current').addClass('on').siblings().removeClass('on');
    //     $('.main_visual01 .main_slider').eq(c).show().siblings().hide();
    // })


    $('.main_slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: 0,
    });


    $('.main_visual01 .slide_arrows i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });
    $('.main_visual01 .slide_arrows i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    });











})