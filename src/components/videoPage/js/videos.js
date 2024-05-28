let seApreto = false;
let svg = document.querySelector(".svgInteration");

function svgSize() {  
    svg.style.width = "40px";
    svg.style.heigth = "40px";
}

svgSize();

function clickLike() {
    let likeButton = document.querySelector(".likeButton");

    if(!seApreto){
        likeButton.style.color = "red";
        seApreto = true;
        svg.style.width = "45px";
        svg.style.heigth = "45px";
    }
    else{
        likeButton.style.color = "black";
        seApreto = false;
        svgSize();   
    }
}