//      infinite: true ,      // 무한반복
//      slidesToShow: 1,     // 보여지는 슬라이드 개수
//      slidesToScroll: 1,   // 넘어가는 슬라이드 개수
//      dots: true,         // 점 네비게이션 표시
//      arrows: true ,     // 화살표 표시
//      fade: false,            // 페이드 효과
//      vertical: false,         // 상하 슬라이드
//      autoplay: false,       //자동스크롤
//      autoplaySpeed: 1000 ,  //자동스크롤 속도
//      pauseOnHover: true, // 마우스 호버하면 슬라이딩 멈춤

//      

$(document).ready(function(){
    $(".contents-slider").each(function(index, sliderElement){
        const slider = $(sliderElement);
        slider.slick({
            infinite: false,      
            slidesToShow: 7,     
            slidesToScroll: 3,   
            // centerMode: true,
            // centerPadding:"40px",
            dots: false,         
            arrows: true ,     
            fade: false,            // 페이드 효과
            vertical: false,         // 상하 슬라이드
            autoplay: false,       //자동스크롤
            autoplaySpeed: 1000 ,  //자동스크롤 속도
            pauseOnHover: true,

            // 버튼 커스터마이징
            prevArrow: "<button class='prevBtn'><i class='xi-angle-left'></i></button>",
            nextArrow: "<button class='nextBtn'><i class='xi-angle-right'></i></button>"
        });

        // 버튼 감추기    
        const prevBtn = $(".prevBtn");
        const nextBtn = $(".nextBtn");

        // 슬라이더 버튼 상태 업데이트 함수
        function updateArrows() {
            const slickObj = slider.slick("getSlick"); // Slick 객체 가져오기
            const currentSlide = slickObj.currentSlide; // 현재 슬라이드 인덱스
            const totalSlides = slickObj.slideCount; // 슬라이드 총 개수
            const slidesToShow = slickObj.options.slidesToShow; // 한 번에 표시되는 슬라이드 수

            // 이전 버튼 숨김
            if (currentSlide === 0) {
                prevBtn.addClass("hidden");
            } else {
                prevBtn.removeClass("hidden");
            }

            // 다음 버튼 숨김
            if (currentSlide >= totalSlides - slidesToShow) {
                nextBtn.addClass("hidden");
            } else {
                nextBtn.removeClass("hidden");
            }
        }

        // 초기 상태 업데이트
        slider.on("init", function () {
            updateArrows();
        });

        // 슬라이더 변경 시 상태 업데이트
        slider.on("afterChange", function () {
            updateArrows();
        });

        // 슬라이더 초기화 (이벤트 실행)
        slider.slick("setPosition");
        updateArrows(); // 초기 상태 업데이트 호출


        // 각 슬라이드에 번호 추가
        slider.find(".item").each(function (index) {
            const slideNumber = index + 1; // 슬라이드 번호 (0부터 시작하므로 1을 더함)
            $(this).append(`<span class="slide-number">${slideNumber}</span>`);
        });

        // FAQ
        
        // 속성 : property, attribute
        // --------- prop()와 attr() 차이 -------------
        // prop() : Boolean속성(readonly, checked,..) 다룰 때, 
        // attr() : 일반속성(id, name, data-, type, ...) 다룰 때

        $(".faq input[type='checkbox']").click(function(){
            // 현재 클릭된 input을 제외한 모든 input의 체크를 해제
            $(".faq input[type='checkbox']").not(this).prop('checked', false);
        });
    });
});
