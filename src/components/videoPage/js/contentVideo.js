let video = document.querySelectorAll("video");
let play = document.querySelectorAll(".play");


function controlsVideos() {
    for (let i = 0; i < video.length; i++) {
        video[i].addEventListener("click", () =>{
            console.log("hola");
            if (video[i].paused) {
                video[i].play();
            } else {
                video[i].pause();
            }
        })
    }
}

controlsVideos();
