const URLbase = "http://localhost:3000/usuarios";

export async function getUsers(){
    let response = await fetch(`${URLbase}/usuarios`);
    const data = response.json();
    return data;
}

export async function getUsuarioById(id) {
    let response = await fetch(`${URLbase}/usuarios/${id}`);
    const data = response.json();
    return data;
}



//funcion para crear marcador con icono y mostrar modal
export async function createPoint(lat, lng, icon, card){
    var point = L.marker([lat, lng], {icon: icon}).addTo(map); // añade un marcador con un icono

    // Agregar punto a la base de datos
    const newPoint = {
        lat: lat,
        lng: lng,
        icon: icon,
        card: card
    };
    addPointToDB(newPoint);
    
    point.on('click', function() {
        var modal = document.getElementById('myModal'); // obtiene el modal
        var modalContent = document.getElementById('modal-info'); // obtiene el contenido del modal

        modalContent.innerHTML = card; // añade el contenido al modal

        // Calcular posición del modal
        var pointPos = map.latLngToContainerPoint(point.getLatLng()); // convierte la ubicación del marcador en coordenadas de contenedor
        modal.style.left = (pointPos.x - modal.offsetWidth / 2) + 'px'; // establece la posición horizontal del modal
        modal.style.top = (pointPos.y - modal.offsetHeight) + 'px';// establece la posición vertical del modal

        modal.style.display = 'block'; // muestra el modal

        document.getElementById('startRouting').onclick = function() { // añade un evento al botón de inicio de enrutamiento
            if (userLocation) {
                // Establece la ruta desde la ubicación del usuario hasta el punto seleccionado
                control.setWaypoints([userLocation, L.latLng(lat, lng)]);
                modal.style.display = 'none'; // Cierra el modal

                var modal2 = document.getElementById('myModal2'); // obtiene el modal2
                modal2.style.display = 'block'; // muestra el modal2
                    // Calcular posición del modal
                var pointPos = map.latLngToContainerPoint(point.getLatLng()); // convierte la ubicación del marcador en coordenadas de contenedor
                modal2.style.left = (pointPos.x - modal2.offsetWidth / 2) + 'px'; // establece la posición horizontal del modal
                modal2.style.top = (pointPos.y - modal2.offsetHeight) + 'px';// establece la posición vertical del modal
                
            } else {
                alert("Ubicación del usuario no encontrada.");
            }
        };

        document.getElementById('stopRouting').onclick = function() {
            // Detiene el enrutamiento removiendo los puntos de ruta
            control.setWaypoints([]);
            var modal2 = document.getElementById('myModal2'); // obtiene el modal2
            modal2.style.display = 'none'; // oculta el modal2

            var span2 = document.getElementsByClassName('close')[1]; // Obtener el segundo span (el del modal2)

            span2.onclick = function() { // Añadir evento al segundo span
            control.setWaypoints([]); // Detener el enrutamiento removiendo los puntos de ruta
            modal2.style.display = 'none'; // Ocultar el modal2
            };

        };
    });
}

// Función para agregar un punto a la base de datos
async function addPointToDB(point) {
    try {
        const response = await fetch(`${URLbase}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(point)
        });
        const data = await response.json();
        console.log('Point added to database:', data);
    } catch (error) {
        console.error('Error adding point to database:', error);
    }
}
