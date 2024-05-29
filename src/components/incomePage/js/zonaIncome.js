/*Income zone*/
let incomeZone = document.querySelector("#incomeForm");
incomeZone.classList.add('hidden');

/**Zone to open the income */
const incomeButton = document.querySelector('#incomeButton')

/* Info web site */
const infoContainer = document.querySelector('#info-container');

/* Back income btn */
const backIncome = document.querySelector('#backIncome');





incomeButton.addEventListener("click", () => {
    incomeZone.classList.remove('hidden');
    /* ocultar container info */
    infoContainer.classList.add('hidden');
    /* ocultar botón */
    incomeButton.classList.add('hidden');
});

backIncome.addEventListener("click", () => {
    infoContainer.classList.remove('hidden');
    incomeButton.classList.remove('hidden');
})


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
        infoContainer.classList.remove('hidden');
        buttonLogIn.innerHTML = "Registrate";
        textLogIn.innerHTML = "¿Es tu primera vez en spot?";
        tightened = false;
    }
});


/*Show and hide password */

const eyeIcons = {
    open: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="eye-icon"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" /></svg>',
    closed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="eye-icon"><path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" /><path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" /><path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" /></svg>'
};

function addListeners() {
    const toggleButton = document.querySelector(".toggle-button");
    
    if (!toggleButton) {
       return;
    }
    
    toggleButton.addEventListener("click", togglePassword);
}
 
function togglePassword() {
    const passwordField = document.querySelector("#passwordLogin");
    const toggleButton = document.querySelector(".toggle-button");
    
    if (!passwordField || !toggleButton) {
       return;
    }
    
    toggleButton.classList.toggle("open");
    
    const isEyeOpen = toggleButton.classList.contains("open");
 
    toggleButton.innerHTML = isEyeOpen ? eyeIcons.closed : eyeIcons.open;
    passwordField.type = isEyeOpen ? "text" : "password";
}
 
document.addEventListener("DOMContentLoaded", addListeners);