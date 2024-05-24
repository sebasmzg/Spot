import {list ,listIcon} from "../../../../menu.js"

let openBar = false;

let contador = 0

const menuToggle = document.querySelector('.menuToggle');//selecciona el elemento con la clase menuToggle
const navigation = document.querySelector('.navigation');//selecciona el elemento con la clase navigation

const navBar = document.querySelector('#navBar');
navBar.classList.add("navBarWidthLess");


menuToggle.onclick = function() {
    navigation.classList.toggle('open');
    contador = contador +1;
        if(contador == 1){
            openBar = true;
            navBar.classList.add("navBarWidthMore");
            navBar.classList.remove("navBarWidthLess");
        }
        else{
            openBar = false;
            navBar.classList.remove("navBarWidthMore");
            navBar.classList.add("navBarWidthLess");
            contador = 0;
        }
}//cuando se haga click en el menuToggle, se le agrega o quita la clase open al elemento con la clase navigation

listIcon(list);