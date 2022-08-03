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



    $('.bxSlider2').bxSlider({
        slideWidth: 600,
        auto: true,
        autoControls: true,
        stopAutoOnclick: true,
        autoplaySpeed: 2000,
    });

})