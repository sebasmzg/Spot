const loginForm = document.querySelector('#loginForm'); // Formulario de login
loginForm.addEventListener('submit', (e) => { // Evento submit del formulario
    e.preventDefault(); // prevenir el envío del formulario
    const userName = document.querySelector('#userName').value; // Obtener el valor del campo de nombre de usuario
    const password = document.querySelector('#password').value; // Obtener el valor del campo de contraseña

    const users = JSON.parse(localStorage.getItem('users')) || []; // Obtener los usuarios del localStorage
    const validUser = users.find(user => user.userName === userName && user.password === password); // Buscar si el usuario es válido
    
    if(!validUser) { // Si el usuario no es válido
        return alert('Usuario o contraseña incorrectos');
    }

    alert($`Nos alegra tenerte acá, ${validUser.name}.`); // Mostrar mensaje de bienvenida

    window.location.href = '../index.html'; // Redirigir al usuario a la página de ingresos
});