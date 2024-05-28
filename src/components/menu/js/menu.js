const menuToggle = document.querySelector('.menuToggle');//selecciona el elemento con la clase menuToggle
const navigation = document.querySelector('.navigation');//selecciona el elemento con la clase navigation

//seAbrio(menuToggle, navigation);

export const list = document.querySelectorAll('.list');
export function listIcon(list) {
    function activarLink(){
        list.forEach((item)=>
        item.classList.remove('active'));//remueve la clase active de todos los elementos con la clase list
        this.classList.add('active');//agrega la clase active al elemento que se le hizo click
    }
    
    list.forEach((item)=>
    item.addEventListener('click', activarLink));//cuando se haga click en un elemento con la clase list, se ejecuta la función activarLink
}

listIcon(list)