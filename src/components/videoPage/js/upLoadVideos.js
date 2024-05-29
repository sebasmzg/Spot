import { createOverlayElements } from "./videos.js";

let videosContait = document.querySelector('#videos');

let videoInput = document.querySelector('#videoInput');

let upLoadForm = document.querySelector('#upLoadVideos');

/* upLoadForm.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log("Toco boton");
    const divVideo = document.createElement('div');
    divVideo.classList.add('content');
    createOverlayElements(divVideo);
    videosContait.appendChild(divVideo)
}) */

upLoadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    videoUpload(videoInput.files);
    console.log("Formulario enviado");
});

function videoUpload(files) {
    if (files.length > 0) {
        const divVideo = document.createElement('div');
        divVideo.classList.add('content');
        const file = files[0];
        const video = document.createElement('video');
        video.classList.add('video')

        const fileURL = URL.createObjectURL(file);
        video.src = fileURL;

        divVideo.appendChild(video);
        console.log("video cargado");
        videosContait.appendChild(divVideo);
        createOverlayElements(videosContait);
    }
    else{
        console.log("No se subio nada");
    }
}