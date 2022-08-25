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
        pagination: { // 페이지 번호 사용
            el: '.main_visual .swiper-pagination', // 페이지 번호 요소
            clickable: true // 사용자의 페이지 번호 제어 여부
        },
        navigation: { // 슬라이드 이전/다음 버튼 사용
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
        spaceBetween: 30, // 슬라이드 사이 여백
        centeredSlides: true, // 1번 슬라이드가 가운데 보이기
        pagination: { // 페이지 번호 사용
            el: '.promotion .swiper-pagination', // 페이지 번호 요소
            clickable: true // 사용자의 페이지 번호 제어 여부
        },
        navigation: { // 슬라이드 이전/다음 버튼 사용
            prevEl: '.promotion .swiper-button-prev',
            nextEl: '.promotion .swiper-button-next'
        }
    });



    // var swiper = new Swiper(".mySwiper", {
    //     effect: "coverflow",
    //     loop: true,
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: "auto",
    //     coverflowEffect: {
    //         rotate: 50,
    //         stretch: 0,
    //         depth: 100,
    //         modifier: 1,
    //         slideShadows: true,
    //     },
    // });




})