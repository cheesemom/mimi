$(function () {


    AOS.init();


    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 4000,
    });



    $('.bxSlider').bxSlider({
        slideWidth: 600,
        auto: true,
        autoControls: true,
        stopAutoOnclick: true,
        autoplaySpeed: 2000,
    });


    $('.tab_menu>div>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.tab_content>div').removeClass('on')
        $('.tab_content>div').eq(idx).addClass('on');
        $('.tap_menu>div').removeClass('on')
        $(this).parent().addClass('on');
    });


    $('.living_slider').slick({
        slidesToShow: 4,
    });

    $('.kitchen_slider').slick({
        slidesToShow: 4,
    });

    $('.bath_slider').slick({
        slidesToShow: 4,
    });

    $('.pool_slider').slick({
        slidesToShow: 4,
    });


})