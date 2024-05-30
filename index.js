//INGRESOS SE USUARIO

const userLogin = JSON.parse(localStorage.getItem('login_success')) || false; // Obtiene el usuario logueado 

if (!userLogin) {
    window.location.href = './src/components/incomePage/income.html'; 
}

<<<<<<< HEAD
//Para el botón de inicio
const loginButton = document.getElementById("loginButton"); //Obetenemos una referencia al elemento del DOM
loginButton.addEventListener("click", function() {
    window.location.href = "index.html";
=======
const openSearchModal = document.getElementById('openSearchModal');
const searchModal = document.getElementById('myModalSearch');
const closeSearchModal = document.querySelector('.close-Search');

openSearchModal.addEventListener('click', () => {
    searchModal.style.display = 'block';
});

closeSearchModal.addEventListener('click', () => {
    searchModal.style.display = 'none';
>>>>>>> 462554b9bdf506ba2f78784140b2bdc61ba86e2f
});
