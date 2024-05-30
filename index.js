//INGRESOS SE USUARIO

const userLogin = JSON.parse(localStorage.getItem('login_success')) || false; // Obtiene el usuario logueado 

if (!userLogin) {
    window.location.href = './src/components/incomePage/income.html'; 
}

//Para el botón de inicio
const loginButton = document.getElementById("loginButton"); //Obetenemos una referencia al elemento del DOM
loginButton.addEventListener("click", function() {
    window.location.href = "index.html";
});
