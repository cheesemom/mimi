$(function () {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        autoplay: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $('.Top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });



})