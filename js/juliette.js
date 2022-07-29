$(function () {

    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });



    $('.new02').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 0,
        speed: 3000,
        slidesToShow: 4,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    infinite: true,

                }
            }],
    });



    AOS.init();



    var scroll_menu = $('#scroll_menu').offset().top;
    $(window).scroll(function () {
        var window = $(this).scrollTop();
        if (scroll_menu <= window) {
            $('#scroll_menu').addClass("fixed");
        } else {
            $('#scroll_menu').removeClass("fixed");
        }
    });



    $('.slide02').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 0,
        speed: 3000,
        slidesToShow: 4,
        cssEase: "linear",
        responsive: [
            {
                arrows: false,
                autoplay: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                autoplaySpeed: 0,
                speed: 5000,
                slidesToShow: 4,
                cssEase: "linear",
            }],
    });




})
