$(function () {

    //프로모션 슬라이드
    new Swiper('.notice .swiper', {
        direction: 'vertical', //수직 슬라이드
        autoplay: true,
        loop: true,
    });

    new Swiper('.promotion .swiper', {
        direction: 'horizontal',
        autoplay: {
            delay: 5000
        },
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10, // 슬라이드 사이 여백
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



    // 스크롤매직
    const spyEls = document.querySelectorAll('section.scroll-spy');
    spyEls.forEach(function (spyEl) {
        new ScrollMagic
            .Scene({ // 감시할 장면(Scene)을 추가
                triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
                triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
            })
            .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
            .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
    });



    // 올해 몇년도
    const thisYear = document.querySelector('.this-year');
    thisYear.textContent = new Date().getFullYear();



    // 토글
    function toggleClass() {
        $('.pop li').toggleClass('on');
        $('.notice .popup').toggleClass('on');
    }

    $('.pop li').on('click', toggleClass);
    $('.popup i').on('click', toggleClass);

    function mopen() {
        $(this).toggleClass('on');
        $('.Gnb').toggleClass('on');
    }

    $('.mopen').on('click', mopen)

})