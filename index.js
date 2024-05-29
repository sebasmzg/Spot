//INGRESOS SE USUARIO

const userLogin = JSON.parse(localStorage.getItem('login_success')) || false; // Obtiene el usuario logueado 

if (!userLogin) {
    window.location.href = './src/components/incomePage/income.html'; 
}