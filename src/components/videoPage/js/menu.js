// import {list ,listIcon} from "../../../../menu.js"

let openBar = false;

const menuToggle = document.querySelector('.menuToggle');//selecciona el elemento con la clase menuToggle
const navigation = document.querySelector('.navigation');//selecciona el elemento con la clase navigation

const navBar = document.querySelector('#navBar');
navBar.classList.add("navBarWidthLess");


// let logo = document.querySelector(".logoZone");


menuToggle.onclick = function() {
    navigation.classList.toggle('open');
        if(!openBar){
            openBar = true;
            navBar.classList.add("navBarWidthMore");
            navBar.classList.remove("navBarWidthLess");
            // logo.classList.remove('hidden');
        }
        else{
            openBar = false;
            navBar.classList.remove("navBarWidthMore");
            navBar.classList.add("navBarWidthLess");
            // logo.classList.add('hidden');
        }
}//cuando se haga click en el menuToggle, se le agrega o quita la clase open al elemento con la clase navigation

const list = document.querySelectorAll('.list');
function activarLink(){
    list.forEach((item)=>
    item.classList.remove('active'));//remueve la clase active de todos los elementos con la clase list
    this.classList.add('active');//agrega la clase active al elemento que se le hizo click
}

list.forEach((item)=>
item.addEventListener('click', activarLink));