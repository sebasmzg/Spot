const loginForm = document.querySelector('#loginForm'); // Formulario de login
loginForm.addEventListener('submit', (e) => { // Evento submit del formulario
    e.preventDefault(); // prevenir el envío del formulario
    const userName = document.querySelector('#userNameLogin').value; // Obtener el valor del campo de nombre de usuario
    const password = document.querySelector('#passwordLogin').value; // Obtener el valor del campo de contraseña
    

    const users = JSON.parse(localStorage.getItem('users')) || []; // Obtener los usuarios del localStorage
    const validUser = users.some(user => user.userName === userName && user.password === password); // Buscar si el usuario es válido


    if(!validUser) { // Si el usuario no es válido
        return alert('Usuario o contraseña incorrectos');
    }

    localStorage.setItem('login_success', JSON.stringify(validUser)); // Guardar el estado de login en el localStorage

    window.location.href = '../../../../index.html'; // Redirigir al usuario a la página de ingresos 
});