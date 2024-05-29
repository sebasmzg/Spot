// import { createOverlayElements } from "./videos";
// let seApreto = false;

// createOverlayElements()
// let svg = document.querySelectorAll(".svgInteration");
let likeButton = document.querySelectorAll(".likeButton");
// console.log(svg);

/* function svgSize() {
    svg.forEach(element => {
        if (!seApreto) {
            element.style.width = "45px";
            element.style.heigth = "45px";
            console.log("hola");
        }
        else{
            element.style.width = "40px";
            element.style.heigth = "40px";
            console.log("buenas");
        }
    });

} */

function clickLike() {
    for (let i = 0; i < likeButton.length; i++) {
        likeButton[i].addEventListener("click", () =>{
            if(!likeButton[i].classList.contains('colorRed')){
                likeButton[i].classList.add('colorRed');
            }
            else if(likeButton[i].classList.contains('colorRed')){
                likeButton[i].classList.remove('colorRed');
            }        
        })
    }

}

clickLike();
// svgSize();
