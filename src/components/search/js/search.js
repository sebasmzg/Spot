//Evento `DOMContentLoaded`
document.addEventListener('DOMContentLoaded', () => {
    // Eliminar elementos individuales al hacer clic en "✕".
    document.querySelectorAll('.eliminar').forEach(button => {
        button.addEventListener('click', (event) => {
            const item = event.target.closest('.lugar-item');
            item.remove();
        });
    });

    //Eliminar todos los elementos al hacer clic en "Borrar todo".
    document.querySelector('.reciente span:nth-child(2)').addEventListener('click', () => {
        document.querySelectorAll('.lugar-item').forEach(item => {
            item.remove();
        });
    });

    //Filtrar la lista de lugares según lo que se escriba en la barra de búsqueda.
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
