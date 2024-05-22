/*Income zone*/
let incomeZone = document.querySelector("#incomeForm");
incomeZone.classList.add('hidden');

/**Zone to open the income */
const incomeButton = document.querySelector('#incomeButton')

incomeButton.addEventListener("click", () => {
    incomeZone.classList.remove('hidden');
});


/*All of this is used to flow between login and registrate.*/
let income = document.querySelector("#income");
let register = document.querySelector("#register");
let buttonLogIn = document.querySelector('#buttonLogIn');

const textLogIn = document.querySelector('.textLogIn');

let tightened = false;
register.classList.add("hidden");
buttonLogIn.addEventListener("click", () =>{

    if (!tightened && register.classList.contains("hidden")) {
        income.classList.add("hidden");
        register.classList.remove("hidden");
        buttonLogIn.innerHTML = "Inicio sesion";
        tightened = true;
        textLogIn.innerHTML = "¿Ya tienes cuenta?";
    }
    else{
        income.classList.remove("hidden");
        register.classList.add("hidden");
        buttonLogIn.innerHTML = "Registrate";
        tightened = false;
        textLogIn.innerHTML = "¿Es tu primera vez en spot?";
    }
});

/**Exit the form */
let buttonSvg = document.querySelector('.buttonSvg');

buttonSvg.addEventListener("click", () =>{
    incomeZone.classList.add('hidden');
    if(income.classList.contains('hidden')){
        income.classList.remove("hidden");
        register.classList.add("hidden");
        buttonLogIn.innerHTML = "Registrate";
        textLogIn.innerHTML = "¿Es tu primera vez en spot?";
        tightened = false;
    }
});