import {hiddenPlay, repeatVideo} from "./contentVideo.js";

import { content } from "./contentVideo.js";

// import { divContent } from "./upLoadVideos.js";

export let contentVideos = content;
let move = false;

let indexCounter = 0;

export function updateContentVideos() {
    contentVideos = document.querySelectorAll('.content');
    /* contentVideos.forEach((contentItem, i) =>{
        if (contentVideos <= 0) {
            contentItem.style.transform = 'translateY(0%)';
        }
        else if(i < indexCounter){
            const translateYValue = `translateY(-${index * 100}%)`;
            contentItem.style.transform = translateYValue;

        }
    }) */
}

// contentVideos = document.querySelectorAll('.content');

function videos(index) {
    if(index >= 0 && index < contentVideos.length ){
        const translateYValue = `translateY(-${index * 100}%)`;
        contentVideos.forEach((contentItem, i) =>{
            if(index == i){
                contentItem.style.transform = 'translateY(0%)';
                hiddenPlay();
                repeatVideo();
            }
            else if (i < index) {
                contentItem.style.transform = 'translateY(-100%)';
            } 
            else {
                contentItem.style.transform = `translateY(100%)`;
            }
            // contentItem.style.transform = translateYValue;
        })
        indexCounter = index;
        /* setTimeout(() => {
            move = false;
        }, 2000); */
    }
}

// videos(indexCounter);

function movement() {
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            videos(indexCounter + 1);
        } 
        else {
            videos(indexCounter - 1);
        }
    });
    
    
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp' && indexCounter > 0) {
            videos(indexCounter - 1);
        } 
        else if (event.key === 'ArrowDown' && indexCounter < content.length -1) {
            videos(indexCounter + 1);
        }
    });
    
    let touchStartY = 0;
    let touchEndY = 0;
    
    window.addEventListener('touchstart', (event) => {
        touchStartY = event.touches[0].clientY;
        console.log("hola");
    });
    
    window.addEventListener('touchend', (event) => {
        touchEndY = event.changedTouches[0].clientY;
        if (touchStartY - touchEndY > 50){
            videos(indexCounter + 1);
        } 
        else if (touchEndY - touchStartY > 50) {
            videos(indexCounter - 1);
        }
    });
}

movement();

