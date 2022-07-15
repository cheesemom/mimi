$(function () {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        autoplay: true,
        autoplaySpeed: 2000,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });



    $('.Top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });



    $('.main_slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 2,
        autoplaySpeed: 2000,
    })


    AOS.init();

});







