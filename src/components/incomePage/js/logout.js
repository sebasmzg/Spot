const logout = document.querySelector('#logout'); // Botón de cerrar sesión

logout.addEventListener('click', () => { // Evento click del botón de cerrar sesión
    confirm('¿Estás seguro de que deseas cerrar sesión?'); // Pregunta al usuario si está seguro de cerrar sesión
    localStorage.removeItem('login_success'); // Elimina el estado de login del localStorage
    window.location.href = '../income.hmtl'; // Redirige al usuario a la página de ingresos
});