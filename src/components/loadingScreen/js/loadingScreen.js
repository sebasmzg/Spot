//Archivo JavaScript con funcionalidad de ocultar la pantalla de carga y mostrar el contenido principal

//Llama y selecciona el elemento de video con el ID 'loading-video' y agrega un listener para el evento 'ended'
document.getElementById('loading-video').addEventListener('ended', function() {
    //La función se ejecutará cuando el video termine de reproducirse

    //Llama y selecciona el elemento con el ID 'loading-screen' y oculta su display
    document.getElementById('loading-screen').style.display = 'none';
    //Su función es hacer que el contenedor de la pantalla de carga desaparezca
<<<<<<< HEAD
    
});
=======

    //Llama y selecciona el elemento con el ID 'main-content y muestra su display'
    document.getElementById('main-content').style.display = 'block';
    //Su función es hacer que el contenido principal de la página se muestre
});
>>>>>>> 462554b9bdf506ba2f78784140b2bdc61ba86e2f
