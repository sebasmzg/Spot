// const translateYValue = `translateY(-${index * 100}%)`;
import { hiddenPlay, repeatVideo } from "./contentVideo.js";
import { divContent } from "./upLoadVideos.js";

export let contentVideos = [divContent];
let indexCounter = 0;
let isChanging = false; // Variable de control

export function updateContentVideos() {
    contentVideos = document.querySelectorAll('.content');
    for (let i = 0; i < contentVideos.length; i++) {
        if (i > 0) {
            console.log(i);
            contentVideos[contentVideos.length -1].style.transform = `translateY(${i * 100}%)`
        }
    }
}

function videos(index) {
    if (!isChanging && index >= 0 && index < contentVideos.length) {
        isChanging = true; // Bloquear cambios mientras se realiza la transición
        contentVideos.forEach((contentItem, i) => {
            if (index === i) {
                contentItem.style.transform = 'translateY(0)';
                hiddenPlay();
                repeatVideo();
            } else if (i < index) {
                contentItem.style.transform = 'translateY(-100%)';
            } else {
                contentItem.style.transform = 'translateY(100%)';
            }
        });
        indexCounter = index;
        setTimeout(() => {
            isChanging = false; // Desbloquear cambios después de 1 segundo
        }, 1000);
    }
}

function movement() {
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            videos(indexCounter + 1);
        } else {
            videos(indexCounter - 1);
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp' && indexCounter > 0) {
            videos(indexCounter - 1);
        } else if (event.key === 'ArrowDown' && indexCounter < contentVideos.length - 1) {
            videos(indexCounter + 1);
        }
    });

    let touchStartY = 0;
    let touchEndY = 0;

    window.addEventListener('touchstart', (event) => {
        touchStartY = event.touches[0].clientY;
    });

    window.addEventListener('touchend', (event) => {
        touchEndY = event.changedTouches[0].clientY;
        if (touchStartY - touchEndY > 50) {
            videos(indexCounter + 1);
        } else if (touchEndY - touchStartY > 50) {
            videos(indexCounter - 1);
        }
    });
}

updateContentVideos();
movement();

