$(function () {


    //main slide
    $('.main_slider').on('init afterChange', function (e, s, c) {
        $('.main_slider figure.slick-current').addClass('on').siblings().removeClass('on');
    })

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 4000,
    });

    $('.lang strong').on('click', function () {
        $(this).toggleClass('on');
        $('.lang').toggleClass('on');
    });

    $('.top_search strong').on('click', function () {
        $(this).toggleClass('on');
        $('.top_search').toggleClass('on');
    })


    //num slide
    $('.main_slider').on('init reInit afterChange', function (e, ms, c) {
        var current = $('.main_slider .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.slide_dots li').eq(c).addClass('on').siblings().removeClass('on');
        $('.main_visual .num').html('0' + ((c ? c : 0) + 1) + '<span> / 0' + ms.slideCount + '</span>');
    });


    //slide_dots slide
    $('.main_visual .slide_dots li').on('click', function () {
        var idx = $(this).index();
        console.log(idx)
        $('.main_slider').slick('slickGoTo', idx)
    })


    //arrow slide
    $('.main_visual .slide_handler button:first-child').on('click', function () {
        $('.main_slider').slick('slickPrev')
    })
    $('.main_visual .slide_handler button:last-child').on('click', function () {
        $('.main_slider').slick('slickNext')
    })



    //feild slide
    $('.slider_wrap').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 4000,
    });

    $('.arrows i:nth-child(1)').on('click', function () {
        $('.slider_wrap').slick('slickPrev')
    });
    $('.arrows i:nth-child(2)').on('click', function () {
        $('.slider_wrap').slick('slickNext')
    });



    //innovation tab slide
    $('.tab_menu>div>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.tab_content>div').removeClass('on')
        $('.tab_content>div').eq(idx).addClass('on');
        $('.tap_menu>div').removeClass('on')
        $(this).parent().addClass('on');
    });

    $('.work').slick({
        slidesToShow: 3,
        arrows: false,
    });

    $('.factory').slick({
        slidesToShow: 3,
        arrows: false,
    });

    $('.education').slick({
        slidesToShow: 3,
        arrows: false,
    });













    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });


    const thisYear = document.querySelector('.this-year');
    thisYear.textContent = new Date().getFullYear();


})