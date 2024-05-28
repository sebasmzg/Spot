import {list ,listIcon} from "../../../../menu.js"

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

listIcon(list);