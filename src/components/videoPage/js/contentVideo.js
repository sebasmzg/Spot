let content = document.querySelectorAll(".content");
let indexCounter = 0;
// let isScrolling = false;

console.log(content);

function videos(index) {
    if(index >= 0 && index < content.length){
        const translateYValue = `translateY(-${index * 100}%)`;
        content.forEach((contentItem, i) =>{
            if(index == i){
                contentItem.style.transform = 'translateY(0%)';
            }
            /* else if (i < index) {
                contentItem.style.transform = 'translateY(-100%)';
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

