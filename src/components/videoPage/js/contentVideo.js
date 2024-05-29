export let video = document.querySelectorAll("video");
let play = document.querySelectorAll(".play");
let comenzarVideos = false;
let currentVideoIndex = null;

/* export function playVideo(videoIndex) {
    if (comenzarVideos) {
        for (let i = 0; i < video.length; i++) {
            videoIndex = i;
            if(videoIndex + 1 < video.length){
                video[videoIndex + 1].play();
                console.log("inicio");
            }
        }
    }
} */

//hace que desaparesca el icono de play cuando cambia de video
export function hiddenPlay() {
    for (let i = 0; i < play.length; i++) {
        play[i].classList.add('hidden'); 
    }
}

export function repeatVideo() {
    for (let i = 0; i < video.length; i++) {
        video[i].currentTime = 0;   
        video[i].pause();
    }
}

function pauseVideo(videoIndex) {
    if (videoIndex !== null) {
        video[videoIndex].pause();
        play[videoIndex].classList.remove('hidden');
        console.log(videoIndex);
    }
}

function playVideo(videoIndex) {
    if (videoIndex !== null) {
        video[videoIndex].play();
        play[videoIndex].classList.add('hidden');
        console.log(videoIndex);
    }
}

/* function touchSpace(videoIndex) {
    if (videoIndex !== null) {
        if (video[videoIndex].paused) {
            playVideo(videoIndex);
            console.log(videoIndex);
        } 
        else{
            pauseVideo(videoIndex);
            console.log(videoIndex);
        }
    }
} */

function controlsVideos() {
    for (let i = 0; i < video.length; i++) {
        video[i].addEventListener("click", () =>{
            if (video[i].paused) {
                /* video[i].play();
                play[i].classList.add('hidden');
                comenzarVideos = true; */
                // pauseVideo(currentVideoIndex);
                currentVideoIndex = i;
                playVideo(currentVideoIndex);
            } 
            else {
                pauseVideo(currentVideoIndex);
                video[i].pause();
                play[i].classList.remove('hidden');
            }
        })
        /* document.addEventListener('keydown', (event) => {
            if (event.keyCode === 32) {
                touchSpace(currentVideoIndex);
                
            }
        }); */

    }
}

// pausedVideo();
controlsVideos();
