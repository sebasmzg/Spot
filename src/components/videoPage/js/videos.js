import {hiddenPlay, repeatVideo} from "./contentVideo.js";

let content = document.querySelectorAll(".content");
let indexCounter = 0;

function createOverlayElements() {
    for (let i = 0; i < content.length; i++) {
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

    /** Crear la información del video */
    const infoVideoDiv = document.createElement('div');
    infoVideoDiv.classList.add('infoVideo');

    const divZoneInfo = document.createElement('div');
    divZoneInfo.classList.add('zoneInfo');

    /** Crear la zona donde se ve la imagen y el nombre del perfil */
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

    /** Crear la zona de la descripción */
    const description = document.createElement('div');
    description.classList.add('description');

    const textoDescription = document.createElement('p');
    textoDescription.textContent = "Es un gran lugar, yo se que te encantaria visitarlo";
    description.appendChild(textoDescription);

    infoVideoDiv.appendChild(divZoneInfo);
    divZoneInfo.append(profileVideo, description);

    /** Zona de los intereses */
    const interests = document.createElement('div');
    interests.classList.add('interests');

    const likes = document.createElement('div');
    likes.classList.add('like');

    const buttonLikes = document.createElement('button');
    buttonLikes.type = 'button';
    buttonLikes.classList.add('likeButton');

    // Crear el elemento SVG
    const svgNSlike = "http://www.w3.org/2000/svg";
    const svgLikes = document.createElementNS(svgNSlike, "svg");

    // Establecer los atributos del SVG
    svgLikes.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgLikes.setAttribute("fill", "currentColor");
    svgLikes.setAttribute("viewBox", "0 0 16 16");

    // Añadir las clases al SVG
    svgLikes.classList.add("svgInteration", "bi", "bi-heart-fill");

    // Crear el elemento <path>
    const pathLike = document.createElementNS(svgNSlike, "path");

    // Establecer los atributos del <path>
    pathLike.setAttribute("fill-rule", "evenodd");
    pathLike.setAttribute("d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314");

    // Añadir el <path> al SVG
    svgLikes.appendChild(pathLike);

    interests.appendChild(buttonLikes);
    buttonLikes.appendChild(svgLikes);

    /** Añadir los elementos al contenedor */
    content[i].appendChild(divPlay);
    content[i].appendChild(infoVideoDiv);
    content[i].appendChild(interests); 
    }
    
}

createOverlayElements();
// let video = document.querySelectorAll("video");
// let isScrolling = false;

function videos(index) {
    if(index >= 0 && index < content.length){
        const translateYValue = `translateY(-${index * 100}%)`;
        content.forEach((contentItem, i) =>{
            if(index == i){
                contentItem.style.transform = 'translateY(0%)';
                hiddenPlay();
                repeatVideo();
            }
            /* else if (i < index) {
                // contentItem.style.transform = 'translateY(-100%)';
                console.log("buenas", index, i);
            }  */
            else {
                contentItem.style.transform = `translateY(100%)`;
            }
            contentItem.style.transform = translateYValue;
        })
        indexCounter = index;
        /* setTimeout(() => {
            isScrolling = false;
        }, 5); */
    }
}

videos(indexCounter);


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
    } else if (event.key === 'ArrowDown' && indexCounter < content.length - 1) {
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
    } else if (touchEndY - touchStartY > 50) {
        videos(indexCounter - 1);
    }
});

/* function createOverlayElements() {
    content.forEach(video => {
        const playDiv = document.createElement('div');
        playDiv.className = 'play hidden';

        const playSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        playSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        playSvg.setAttribute('fill', 'currentColor');
        playSvg.setAttribute('class', 'bi bi-play');
        playSvg.setAttribute('viewBox', '0 0 16 16');

        const playPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        playPath.setAttribute('d', 'M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z');

        playSvg.appendChild(playPath);
        playDiv.appendChild(playSvg);

        // Crear contenedor de infoVideo
        const infoVideoDiv = document.createElement('div');
        infoVideoDiv.className = 'infoVideo';

        const zoneInfoDiv = document.createElement('div');
        zoneInfoDiv.className = 'zoneInfo';

        const profileVideoDiv = document.createElement('div');
        profileVideoDiv.className = 'profileVideo';

        const profileLink = document.createElement('a');
        profileLink.href = '../profile/profile.html';

        const imgProfileDiv = document.createElement('div');
        imgProfileDiv.className = 'imgProfile';

        const profileName = document.createElement('strong');
        profileName.textContent = 'Suares de los alpez';

        profileLink.appendChild(imgProfileDiv);
        profileLink.appendChild(profileName);
        profileVideoDiv.appendChild(profileLink);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description';
        descriptionDiv.innerHTML = '<p>Es un gran lugar, yo se que te encantaria visitarlo</p>';

        zoneInfoDiv.appendChild(profileVideoDiv);
        zoneInfoDiv.appendChild(descriptionDiv);
        infoVideoDiv.appendChild(zoneInfoDiv);

        // Crear contenedor de interests
        const interestsDiv = document.createElement('div');
        interestsDiv.className = 'interests';

        const likeDiv = document.createElement('div');
        likeDiv.className = 'like';

        const likeButton = document.createElement('button');
        likeButton.type = 'button';
        likeButton.className = 'likeButton';

        const likeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        likeSvg.setAttribute('class', 'svgInteration');
        likeSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        likeSvg.setAttribute('fill', 'currentColor');
        likeSvg.setAttribute('viewBox', '0 0 16 16');

        const likePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        likePath.setAttribute('fill-rule', 'evenodd');
        likePath.setAttribute('d', 'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314');

        likeSvg.appendChild(likePath);
        likeButton.appendChild(likeSvg);
        likeDiv.appendChild(likeButton);
        interestsDiv.appendChild(likeDiv);

        // Añadir todos los elementos creados al contenedor del video
        const videoContainer = video.parentElement;
        videoContainer.appendChild(playDiv);
        videoContainer.appendChild(infoVideoDiv);
        videoContainer.appendChild(interestsDiv);
    });
} */


