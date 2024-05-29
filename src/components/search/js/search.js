<<<<<<< HEAD
//Evento `DOMContentLoaded`
document.addEventListener('DOMContentLoaded', () => {
    // Eliminar elementos individuales al hacer clic en "✕".
    document.querySelectorAll('.eliminar').forEach(button => {
        button.addEventListener('click', (event) => {
            const item = event.target.closest('.lugar-item');
            item.remove();
        });
    });

    // Eliminar todos los elementos al hacer clic en "Borrar todo".
    document.querySelector('.reciente span:nth-child(2)').addEventListener('click', () => {
        document.querySelectorAll('.lugar-item').forEach(item => {
            item.remove();
        });
    });

    // Filtrar la lista de lugares según lo que se escriba en la barra de búsqueda.
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        document.querySelectorAll('.lugar-item').forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
=======

document.addEventListener('DOMContentLoaded', () => {

    var modal = document.getElementById('myModalSearch'); // obtiene el modal
    var btn = document.getElementById('openSearchModal'); // obtiene el botón que abre el modal
    var span = document.getElementsByClassName('close-Search')[0]; // obtiene el primer span (el de cerrar)

    btn.onclick = function () {
        modal.style.display = 'block'; // muestra el modal
    }

    span.onclick = function () { // cierra el modal si se hace clic en la 'x'
        modal.style.display = 'none';
    }

    window.onclick = function (event) { // cierra el modal si se hace clic fuera de él
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Eliminar elementos individuales al hacer clic en "✕".
    document.querySelectorAll('.eliminar').forEach(button => {
        button.addEventListener('click', (event) => {
            const item = event.target.closest('.lugar-item');
            item.remove();
        });
    });

    // Eliminar todos los elementos al hacer clic en "Borrar todo".
    document.querySelector('.reciente span:nth-child(2)').addEventListener('click', () => {
        document.querySelectorAll('.lugar-item').forEach(item => {
            item.remove();
        });
    });

    // Filtrar la lista de lugares según lo que se escriba en la barra de búsqueda.
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        document.querySelectorAll('.lugar-item').forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
>>>>>>> 2a0d079fb78f20fe4cef8526bc87072905a000ea
