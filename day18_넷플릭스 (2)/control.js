const hero = document.querySelector(".hero");
const playBtn = document.querySelector(".play-btn");
const icon = playBtn.querySelector("i");

let isPlay = true;

playBtn.addEventListener("click", ()=>{
    if(isPlay){
        // 애니메이션 정지
        hero.style.animationPlayState="paused";
        // classList.remove()메서드 : class제거 === jQuery의 removeClass()
        // remove()메서드는 classList객체의 멤버, 
        // add()도 classList객체에 정의 === jQuery의 addClass()
        icon.classList.remove("xi-play");
        icon.classList.add("xi-pause");
    }else{
        // 애니메이션 재생
        hero.style.animationPlayState="running";
        icon.classList.remove("xi-pause");
        icon.classList.add("xi-play");
    }   
    // 클릭시 마다 true false로 반전
    isPlay = !isPlay;
});