import {list ,listIcon} from "../../../../menu.js"

const menuToggle = document.querySelector('.menuToggle');//selecciona el elemento con la clase menuToggle
const navigation = document.querySelector('.navigation');//selecciona el elemento con la clase navigation

const navBar = document.querySelector('#navBar');

menuToggle.onclick = function() {
    navigation.classList.toggle('open');
}//cuando se haga click en el menuToggle, se le agrega o quita la clase open al elemento con la clase navigation


listIcon(list);