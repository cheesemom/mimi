$(function () {

    $('.topBanner i').on('click', function () {
        $('.topBanner').slideUp();
    });



    //메인화면슬라이드
    new Swiper('.main_visual .swiper', {
        direction: 'horizontal',
        autoplay: {
            delay: 4000
        },
        loop: true,
        pagination: {
            el: '.main_visual .swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.main_visual .swiper-button-prev',
            nextEl: '.main_visual .swiper-button-next'
        }
    });



    //new슬라이드
    new Swiper('.New .swiper', {
        direction: 'horizontal',
        autoplay: {
            delay: 3000
        },
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                }
            }],
    });



    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200);
        return false;
    });

    $('.toBottom').on('click', function () {
        $('html,body').animate({ scrollTop: $(document).height() }, 200);
        return false;
    });


})