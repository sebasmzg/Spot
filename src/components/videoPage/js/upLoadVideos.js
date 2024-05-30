import { updateDataContent, controlsVideos, clickLike } from "./contentVideo.js";
import { updateContentVideos } from "./videos.js";

let videosContait = document.querySelector('#videos');

export let divContent = null;
let videoInput = document.querySelector('#videoInput');
let upLoadForm = document.querySelector('#upLoadVideos');

upLoadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    videoUpload(videoInput.files);
});

function videoUpload(files) {
    if (files.length > 0) {
        divContent = document.createElement('div');
        divContent.classList.add('content');
        const file = files[0];

        const video = document.createElement('video');
        video.classList.add('video');

        const fileURL = URL.createObjectURL(file);
        video.src = fileURL;
        
        divContent.appendChild(video);
        createOverlayElements([divContent]);
        updateContentVideos();
        updateDataContent(); // Llamar a esta función después de actualizar el contenido
    } else {
        console.log("No se subió nada");
    }
}


// export let content = divContent;

export function createOverlayElements(contentVideos) {
    for (let i = 0; i < contentVideos.length; i++) {
        const divPlay = document.createElement('div');
        divPlay.classList.add('play', 'hidden');
        
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("viewBox", "0 0 16 16");   
        
        svg.classList.add("bi", "bi-play");
        
        const path = document.createElementNS(svgNS, "path");
        
        path.setAttribute("d", "M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z");
        
        svg.appendChild(path);
        divPlay.appendChild(svg);
        
        /** se Crea la información del video */
        const infoVideoDiv = document.createElement('div');
        infoVideoDiv.classList.add('infoVideo');

        const divZoneInfo = document.createElement('div');
        divZoneInfo.classList.add('zoneInfo');

        /** se Crea la zona donde se ve la imagen y el nombre del perfil */
        const profileVideo = document.createElement('div');
        profileVideo.classList.add('profileVideo');

        const aProfile = document.createElement('a');
        aProfile.href = '../profile/profile.html';

        const profileImg = document.createElement('div');
        profileImg.classList.add('imgProfile');

        const profileName = document.createElement('strong');
        profileName.textContent = "Suares de los alpez";

        profileVideo.appendChild(aProfile);
        aProfile.append(profileImg, profileName);

        /** se Crea la zona de la descripción */
        const description = document.createElement('div');
        description.classList.add('description');

        const textoDescription = document.createElement('p');
        textoDescription.textContent = "Es un gran lugar, yo se que te encantaria visitarlo";
        description.appendChild(textoDescription);

        infoVideoDiv.appendChild(divZoneInfo);
        divZoneInfo.append(profileVideo, description);

        /**se crea Zona de los intereses */
        const interests = document.createElement('div');
        interests.classList.add('interests');

        const likes = document.createElement('div');
        likes.classList.add('like');

        const buttonLikes = document.createElement('button');
        buttonLikes.type = 'button';
        buttonLikes.classList.add('likeButton');

        // se Crea el elemento SVG
        const svgNSlike = "http://www.w3.org/2000/svg";
        const svgLikes = document.createElementNS(svgNSlike, "svg");

        // se Establece los atributos del SVG
        svgLikes.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgLikes.setAttribute("fill", "currentColor");
        svgLikes.setAttribute("viewBox", "0 0 16 16");

        //se crea Añade las clases al SVG
        svgLikes.classList.add("svgInteration", "bi", "bi-heart-fill");

        const pathLike = document.createElementNS(svgNSlike, "path");

        pathLike.setAttribute("fill-rule", "evenodd");
        pathLike.setAttribute("d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314");

        svgLikes.appendChild(pathLike);

        interests.appendChild(buttonLikes);
        buttonLikes.appendChild(svgLikes);

        /** Añadir los elementos al contenedor */
        contentVideos[i].appendChild(divPlay);
        contentVideos[i].appendChild(infoVideoDiv);
        contentVideos[i].appendChild(interests); 

        videosContait.appendChild(contentVideos[i]);
    }
}
divContent = document.querySelectorAll(".content");
createOverlayElements(divContent);

updateDataContent();


/* upLoadForm.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log("Toco boton");
    const divContent = document.createElement('div');
    divContent.classList.add('content');
    videosContait.appendChild(divContent)
}) */