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
    $(".contents-slider").slick({
        infinite: false,      
        slidesToShow: 7,     
        slidesToScroll: 3,   
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

