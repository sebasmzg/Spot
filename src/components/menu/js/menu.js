export let open = {
    openBar: false
};
let contador = 0;
const menuToggle = document.querySelector('.menuToggle');//selecciona el elemento con la clase menuToggle
const navigation = document.querySelector('.navigation');//selecciona el elemento con la clase navigation
export function seAbrio(menuToggle, navigation) {
    menuToggle.onclick = function() {
        navigation.classList.toggle('open');
        contador = contador +1;
        if(contador == 1){
            open.openBar = true;
            console.log(open.openBar);
        }
        else{
            open.openBar = false;
            contador = 0;
            console.log(open.openBar);
        }
        
    }//cuando se haga click en el menuToggle, se le agrega o quita la clase open al elemento con la clase navigation
}

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
