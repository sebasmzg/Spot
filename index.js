//INGRESOS SE USUARIO

const userLogin = JSON.parse(localStorage.getItem('login_success')) || false; // Obtiene el usuario logueado 

if (!userLogin) {
    window.location.href = './src/components/incomePage/income.html'; 
}

const openSearchModal = document.getElementById('openSearchModal');
const searchModal = document.getElementById('myModalSearch');
const closeSearchModal = document.querySelector('.close-Search');

openSearchModal.addEventListener('click', () => {
    searchModal.style.display = 'block';
});

closeSearchModal.addEventListener('click', () => {
    searchModal.style.display = 'none';
});
