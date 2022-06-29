$(function () {

    var createNum = 0;

    $('.main_slider').on('init afterChange', function (e, s, c) {
        $('.main_slider figure.slick-current').addClass('on').siblings().removeClass('on');
        // $('.num').css({ backgroundPositionY: -100 * createNum + "px" });
        // $('.custom_dots li').eq(c).addClass('on').siblings().removeClass('on');
        // createNum++;
        $('.main_visual01 .info_wrap .inner ul>li').eq(c).show().siblings().hide();
    })

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 4000,
    });


    $('.slider_wrap').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 4000,
    });

    $('.arrows03 i:nth-child(1)').on('click', function () {
        $('.slider_wrap').slick('slickPrev')
    });
    $('.arrows03 i:nth-child(2)').on('click', function () {
        $('.slider_wrap').slick('slickNext')
    });


    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });
    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    });


    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });




})