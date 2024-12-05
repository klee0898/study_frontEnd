const hero = document.querySelector(".hero");
const playBtn = document.querySelector(".play-btn");
const icon = document.querySelector(".xi-play");

let isPlay = true;

playBtn.addEventListener("click", ()=>{
    if(isPlay){
    // animation 정지
        hero.style.animationPlayState="paused";
        // classList.remove() method : class 제거=jQery removeClass()
        // remove()method도 classList객체의 멤버,
        // add(도) classList객체에 정의=jquery의 addClass()
        icon.classList.remove("xi-play");
        icon.classList.add("xi-plause");
    }else{
        // 애니메이션 재생
        hero.style.animationPlayState="running";
        icon.classList.remove("xi-play");
        icon.classList.add("xi-plause");
    }
    // CLICK 시마다 true/false
    isPlay = !isPlay;
});