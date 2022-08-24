$(function () {

    $('.topBanner i').on('click', function () {
        $('.topBanner').slideUp();
    });


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







})