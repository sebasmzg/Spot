/* import { divContent} from "./upLoadVideos.js";
import { updateContentVideos } from "./videos.js"; */

let likeButton = null;

let video = null;
let play = null;
let currentVideoIndex = null;

export function clickLike() {
    likeButton = document.querySelectorAll(".likeButton");
    for (let i = 0; i < likeButton.length; i++) {
        likeButton[i].addEventListener("click", () => {
            if (!likeButton[i].classList.contains('colorRed')) {
                likeButton[i].classList.add('colorRed');
            } 
            else {
                likeButton[i].classList.remove('colorRed');
            }        
        });
    }
}



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
    }
}

function playVideo(videoIndex) {
    if (videoIndex !== null) {
        video[videoIndex].play();
        play[videoIndex].classList.add('hidden');
    }
}

export function controlsVideos() {
    video = document.querySelectorAll("video");
    play = document.querySelectorAll(".play");

    for (let i = 0; i < video.length; i++) {
        video[i].addEventListener("click", () => {
            if (video[i].paused) {
                currentVideoIndex = i;
                playVideo(currentVideoIndex);
            } 
            else {
                pauseVideo(currentVideoIndex);
            }
        });
    }
}

export function updateDataContent(){
    clickLike();
    controlsVideos();
}