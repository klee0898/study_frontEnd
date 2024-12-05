
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

$(document).ready(function(){
    $(".demo-slider").slick({
        Infinity: true ,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true ,
        arrows: true, 
        fade: false,           
        vertical: false,        
        autoplay: false,       
        autoplaySpeed: 1000 , 
        pauseOnHover: true,

        // button 커스마이징

         prevArrow: "<button class='prevBtn'><i class='xi-angle-left'></i></button>",
        nextArrow: "<button class='nextBtn'><i class='xi-angle-right'></i></button>"
    
    });
});