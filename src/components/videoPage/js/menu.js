import {open, seAbrio, list, listIcon} from "../../../../menu.js"

const menuToggle = document.querySelector('.menuToggle');//selecciona el elemento con la clase menuToggle
const navigation = document.querySelector('.navigation');//selecciona el elemento con la clase navigation

const navBar = document.querySelector('#navBar');
seAbrio(menuToggle, navigation);

console.log(open.openBar);
if (open.openBar == true){
    console.log(open.openBar);
    console.log("buenas");
}


listIcon(list);