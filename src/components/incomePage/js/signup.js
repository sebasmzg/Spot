const signUp = document.querySelector('#signUp'); // Formulario de registro


//Funcion para registrar usuarios
signUp.addEventListener('submit',(e)=>{ // Evento submit del formulario
    e.preventDefault(); // Previene el envío del formulario
    // Obtiene los valores de los campos del formulario
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const userName = document.querySelector('#userName').value;
    const password = document.querySelector('#password').value;

    console.log(`Email: ${email}, Nombre: ${name}, userName: ${userName}, Contraseña: ${password}`);

    const users = JSON.parse(localStorage.getItem('users')) || []; // Obtiene los usuarios del localStorage
    const isUserRegistred = users.some(user => user.email === email); // Busca si el usuario ya está registrado con ese email
    const isUserNameRegistred = users.some(user => user.userName === userName); // Busca si el usuario ya está registrado con ese nombre de usuario

    if (isUserRegistred) { // Si el usuario ya está registrado
        return alert('El email ya se encuentra registrado');
    } 

    if (isUserNameRegistred) { // Si el nombre de usuario ya está registrado
        return alert('El nombre de usuario no se encuentra disponible.');
    }

    users.push({
        email: email,
        name: name,
        userName: userName,
        password: password
    });

    localStorage.setItem('users', JSON.stringify(users)); // Guarda los usuarios en el localStorage
    alert('Usuario registrado correctamente'); // Muestra un mensaje de éxito

    //redirect to login
 /*    document.getElementById('loginForm').scrollIntoView({behavior: 'smooth'}); */
    /* window.location.href = 'income.html'; */

    const incomeForm = document.querySelector('#income');
    const registerForm = document.querySelector('#register');

    registerForm.classList.add('hidden');
    incomeForm.classList.remove('hidden');


})