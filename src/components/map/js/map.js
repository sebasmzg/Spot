import { createNewPoint as createPointService } from '../../../../../../services/userService.js';

var map = L.map('map', {
    zoomControl: false // deshabilita los controles de zoom predeterminados
}).setView([6.2447472222222, -75.574827777778], 13); // crea un mapa y lo centra en una ubicación

var addPointCoords = null;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); //añade una capa de mapa al mapa. mapa base openstreetmap


// Añade los controles de zoom en la posición inferior derecha
L.control.zoom({
    position: 'bottomright'
}).addTo(map);

// Inicializa la variable para la ubicación del usuario
var userLocation = null;

// Añade el control de ubicación en la posición inferior derecha
var locateControl = L.control.locate({
    position: 'bottomright',
    setView: 'once',
    flyTo: true,
    locateOptions: {
        enableHighAccuracy: true, // habilita alta precisión
        timeout: 10000, // tiempo máximo para obtener la posición en milisegundos
        maximumAge: 0, // no usa una posición en caché
        maxZoom: 16 // nivel máximo de zoom cuando encuentra la ubicación
    }
}).addTo(map);

map.on('locationfound', function(e) {
    userLocation = e.latlng; // Guarda la ubicación del usuario
});

map.on('locationerror', function(e) { //muestra un mensaje si no se puede acceder a la ubicación
    alert("Location access denied.");
});

locateControl.start(); // Inicia la localización del usuario

var pointIcon = L.Icon.extend({ //crea una clase de iconos //.EXTEND() es una función que crea una clase que hereda de otra clase
    options: {
        iconSize:     [35, 35],//tamaño del icono
        popupAnchor:  [-3, -76]//punto desde el cual el popup debe abrirse en relación con iconAnchor
    }
});

var logoIcon = new pointIcon({iconUrl: './src/assets/img/logo.png'});
//crea varios iconos a partir de la clase LeafIcon

// Inicializa el control de enrutamiento
var control = L.Routing.control({
    waypoints: [],
    routeWhileDragging: true,
    show: false,
    position: 'topleft',
}).addTo(map);



//agregar un punto en el mapa

var addPointButton = document.getElementById('addPoint');
console.log(addPointButton);
var addingPoint = false;
var pointMarker = null; //marcador para la ubicación

addPointButton.addEventListener('mousedown', function() {
    console.log('Añadir un nuevo Spot');
    var confirmation = confirm('¿Deseas añadir un nuevo Spot?');
    if (confirmation) {
        addingPoint = true; // Activar el modo de adición de puntos
        alert('Haz clic en la ubicación del nuevo Spot en el mapa.');
    }
});


map.on('click', function(e) {
    if (addingPoint) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;

        // Remover el marcador temporal si existe
        if (pointMarker) {
            map.removeLayer(pointMarker);
            pointMarker = null;
        }

        // Crear un marcador temporal en la ubicación del clic
        pointMarker = L.marker(e.latlng, { icon: logoIcon }).addTo(map);

        // Mostrar el modal para confirmar la ubicación
        var confirmation = confirm('¿Confirmar la ubicación del nuevo punto? Latitud: ' + lat + ', Longitud: ' + lng);
        if (confirmation) {
            // Guardar las coordenadas del punto para crearlo posteriormente
            addPointCoords = e.latlng;

            // Ocultar el marcador temporal
            map.removeLayer(pointMarker);
            pointMarker = null;

            // Mostrar el formulario para ingresar detalles del punto
            var modalPoint = document.getElementById('myModalPoint');
            modalPoint.style.display = 'block';

            // Colocar las coordenadas en los campos ocultos del formulario
            document.getElementById('lat').value = lat;
            document.getElementById('lng').value = lng;

            addingPoint = false; // Desactivar el modo de adición de puntos
        } else {
            // Si no se confirma la ubicación, mantener el modo de adición activo
            addingPoint = true;
        }
    }
});


map.on('mousedown', function(e) {
    if (addingPoint) {
        // Almacena las coordenadas del clic en el botón addPoint
        addPointCoords = map.latLngToContainerPoint(e.latlng);

        // Remover el marcador temporal si existe
        if (pointMarker) {
            map.removeLayer(pointMarker);
            pointMarker = null;
        }

        // Crear un marcador temporal en la ubicación del clic
        pointMarker = L.marker(e.latlng, { icon: logoIcon }).addTo(map);
    }
});

// Obtener elementos del DOM
var modalPoint = document.getElementById('myModalPoint');
var closePoint = document.querySelector('.close-point');
var form = document.getElementById('pointForm');


// Cerrar el modal al hacer clic en el botón de cerrar
closePoint.onclick = function() {
    modalPoint.style.display = 'none';
    addingPoint = false; // Desactivar el modo de adición de puntos
}



//Función para crear el evento de clic

function addClickEventToMarker(point, spotName, category, description, lat, lng) {

    point.on('click', function() {
        var modal = document.getElementById('myModal');
        var modalContent = document.getElementById('modal-info');

        /* contenido del modal con la información del punto y del formulario */
        modalContent.innerHTML = "<h3>" + spotName + "</h3>" +
        "<p><strong>Categoría:</strong> " + category + "</p>" +
        "<p><strong>Información:</strong> " + description + "</p>";

        var pointPos = map.latLngToContainerPoint(point.getLatLng());
        modal.style.left = (pointPos.x - modal.offsetWidth / 2) + 'px';
        modal.style.top = (pointPos.y - modal.offsetHeight) + 'px';
        modal.style.display = 'block';

            //Iniciar el enrutamiento
        document.getElementById('startRouting').onclick = function() {
            if (userLocation) {
                control.setWaypoints([userLocation, L.latLng(lat, lng)]);
                modal.style.display = 'none';

                var modal2 = document.getElementById('myModal2');
                modal2.style.display = 'block';
                var pointPos = map.latLngToContainerPoint(point.getLatLng());
                modal2.style.left = (pointPos.x - modal2.offsetWidth / 2) + 'px';
                modal2.style.top = (pointPos.y - modal2.offsetHeight) + 'px';
            } else {
                alert("Ubicación del usuario no encontrada.");
            }
        };

        //Detener el enrutamiento
        document.getElementById('stopRouting').onclick = function() {
            control.setWaypoints([]);
            var modal2 = document.getElementById('myModal2');
            modal2.style.display = 'none';

            var span2 = document.getElementsByClassName('close')[1];
            span2.onclick = function() {
                control.setWaypoints([]);
                modal2.style.display = 'none';
            };
        };   
    });
}

let points = [];

function createPoint(lat, lng, icon,spotName, category, description) {

    // Verificar si el punto ya existe en el array points
    if (points.some(p => p.lat === lat && p.lng === lng)) {
        return; // Si ya existe, salir de la función
    }

    var point = L.marker([lat, lng], {icon: icon}).addTo(map);

    const pointData = {
        lat: lat,
        lng: lng,
        icon: icon,
        spotName: spotName,
        category: category,
        description: description
    }

    points.push(pointData);


    // Asigna el evento de clic al marcador
    addClickEventToMarker(point, spotName, category, description, lat, lng);
}

async function sendDataToBackend() {
    try {
        // Envía todos los puntos al backend en una sola solicitud
        await createPointService(points);
        console.log("Datos enviados al backend:", points);
        // Borra los puntos después de enviarlos al backend
        points = [];
    } catch (error) {
        console.error("Error al enviar los datos al backend:", error);
    }
}

//formulario
form.onsubmit = function(e) {
    e.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    var lat = document.getElementById('lat').value;
    var lng = document.getElementById('lng').value;
    var categoryPoint = document.getElementById('categoryPoint').value;
    var pointName = document.getElementById('pointName').value;
    var cardPoint = document.getElementById('cardPoint').value;

    // Crear el punto
    createPoint(lat, lng, logoIcon,pointName, categoryPoint, cardPoint);

    // Cerrar el modal
    modalPoint.style.display = 'none';
};

//crear los puntos en el mapa
createPoint(6.219228982112051, -75.58360417670856, logoIcon, "punto1", "historia", "descripcion punto 1.");
createPoint(6.217324106489384, -75.58774406747969, logoIcon,"punto2","danza", "descripcion punto 2.");
createPoint(6.225302013240884, -75.58525497750676, logoIcon,"punto3","musica", "descripcion punto 3.");
createPoint(6.218476004247808, -75.57238037419849, logoIcon,"punto4","deporte", "descripcion punto 4.");


// Envía los puntos al backend al hacer clic en el botón
document.getElementById('sendData').addEventListener('click', sendDataToBackend);


// Evento que se dispara cuando se calcula una ruta
control.on('routesfound', function(e) {
    var routes = e.routes;
    var summary = routes[0].summary; // Accede al resumen de la primera ruta encontrada
    
    // Accede a la distancia y tiempo desde el resumen de la ruta
    var distance = summary.totalDistance; // Distancia total en metros

    // Convierte la distancia de metros a kilómetros
    var distanceKm = (distance / 1000).toFixed(2);

    // Muestra la distancia y el tiempo en tu interfaz de usuario
    var distanceElement = document.getElementById('distance');

    distanceElement.innerHTML = 'Distancia: ' + distanceKm + ' km';
});


//cerrar el modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var span = document.getElementsByClassName('close');

// Modifica este fragmento para añadir el evento a cada 'close'
Array.from(span).forEach(function(element) {
    element.onclick = function() {
        modal.style.display = 'none';
        modal2.style.display = 'none';

    }
});

window.onclick = function(event) { // cierra el modal si se hace clic fuera de él
    if (event.target == modal) {
        modal.style.display = 'none';
    }
    if(event.target == modal2) {
        modal.style.display = 'none'
    }
}

/* botones de categoría */
function toggleActive(element) {
    var buttons = document.querySelectorAll('.category'); 
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    element.classList.add('active');
}

var categoryButtons = document.querySelectorAll('.category');

categoryButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        toggleActive(this); // Activar/desactivar el botón actual
        // Aquí puedes realizar otras acciones basadas en la categoría seleccionada, si es necesario
    });
});