$(function () {

    $('.topBanner i').on('click', function () {
        $('.topBanner').slideUp();
    });


    $('.main_slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });


    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });
    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    });





})