$(function () {

    //푸터 슬라이드
    new Swiper('.awards .swiper', {
        autoplay: true,
        loop: true,
        slidesPerView: 5,
        navigation: {
            prevEl: '.awards .swiper-button-prev',
            nextEl: '.awards .swiper-button-next'
        }
    });



    // 올해 몇년도
    const thisYear = document.querySelector('.this-year');
    thisYear.textContent = new Date().getFullYear();

})