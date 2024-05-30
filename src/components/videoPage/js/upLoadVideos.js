import {createOverlayElements, videosContait, updateDataContent} from "./contentVideo.js";

import { updateContentVideos } from "./videos.js";
// let videosContait = document.querySelector('#videos');

export let divContent = null;
let videoInput = document.querySelector('#videoInput');

let upLoadForm = document.querySelector('#upLoadVideos');


upLoadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    videoUpload(videoInput.files);
    console.log("Formulario enviado");
});


function videoUpload(files) {
    if (files.length > 0) {
        divContent = document.createElement('div');
        divContent.classList.add('content');
        const file = files[0];
        const video = document.createElement('video');
        video.classList.add('video')
        // video.controls = true;
        
        const fileURL = URL.createObjectURL(file);
        video.src = fileURL;
        
        divContent.appendChild(video);
        console.log("video cargado");
        console.log(divContent);
        
        createOverlayElements([divContent]);
        // divContent = document.querySelectorAll('content')
        videosContait.appendChild(divContent);
        updateContentVideos();
        updateDataContent();
    }
    else{
        console.log("No se subio nada");
    }
}



/* upLoadForm.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log("Toco boton");
    const divContent = document.createElement('div');
    divContent.classList.add('content');
    videosContait.appendChild(divContent)
}) */