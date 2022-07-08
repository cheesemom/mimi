$(function () {

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


    $('.main_visual04 .productArrows i:nth-child(1)').on('click', function () {
        $('.productSlider').slick('slickPrev')
    });

    $('.main_visual04 .productArrows i:nth-child(2)').on('click', function () {
        $('.productSlider').slick('slickNext')
    });



})