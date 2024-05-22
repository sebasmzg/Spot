let income = document.querySelector("#income")
let register = document.querySelector("#register")
let buttonLogIn = document.querySelector('#buttonLogIn');

let tightened = false;
register.classList.add("hidden");

buttonLogIn.addEventListener("click", () =>{
    if (!tightened && register.classList.contains("hidden")) {
        income.classList.add("hidden");
        register.classList.remove("hidden");
        buttonLogIn.innerHTML = "Inicio sesion";
        tightened = true;
    }
    else{
        income.classList.remove("hidden");
        register.classList.add("hidden");
        buttonLogIn.innerHTML = "Registrate";
        tightened = false;
    }
});