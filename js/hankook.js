$(function () {

    new Swiper('.main .swiper', {
        autoplay: {
            delay: 3000
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10, // 슬라이드 사이 여백
        centeredSlides: true, // 1번 슬라이드가 가운데 보이기
        pagination: { // 페이지 번호 사용
            el: '.main .swiper-pagination', // 페이지 번호 요소
            clickable: true // 사용자의 페이지 번호 제어 여부
        },
        navigation: { // 슬라이드 이전/다음 버튼 사용
            prevEl: '.main .swiper-button-prev',
            nextEl: '.main .swiper-button-next'
        }
    });

















})