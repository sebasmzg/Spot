import { createNewPoint as createPointService } from '../../../../../../services/userService.js';

var map = L.map('map', {
    zoomControl: false // deshabilita los controles de zoom predeterminados
}).setView([6.2447472222222, -75.574827777778], 13); // crea un mapa y lo centra en una ubicación

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




// Define la función para crear el evento de clic
function addClickEventToMarker(point, card, lat, lng) {
    point.on('click', function() {
        var modal = document.getElementById('myModal');
        var modalContent = document.getElementById('modal-info');
        modalContent.innerHTML = card;

        var pointPos = map.latLngToContainerPoint(point.getLatLng());
        modal.style.left = (pointPos.x - modal.offsetWidth / 2) + 'px';
        modal.style.top = (pointPos.y - modal.offsetHeight) + 'px';
        modal.style.display = 'block';

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

function createPoint(lat, lng, icon, category, card) {

    // Verificar si el punto ya existe en el array points
    if (points.some(p => p.lat === lat && p.lng === lng)) {
        return; // Si ya existe, salir de la función
    }

    var point = L.marker([lat, lng], {icon: icon}).addTo(map);

    const pointData = {
        lat: lat,
        lng: lng,
        icon: icon,
        category: category,
        card: card
    }

    points.push(pointData);


    // Asigna el evento de clic al marcador
    addClickEventToMarker(point, card, lat, lng);
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

//crear los puntos en el mapa
createPoint(6.219228982112051, -75.58360417670856, logoIcon,"historia", "<b>Nombre de spot</b><br>Información detallada del spot.");
createPoint(6.217324106489384, -75.58774406747969, logoIcon,"danza", "<b>Nombre de spot</b><br>Información detallada del spot.");
createPoint(6.225302013240884, -75.58525497750676, logoIcon,"musica", "<b>Nombre de spot</b><br>Información detallada del spot.");
createPoint(6.218476004247808, -75.57238037419849, logoIcon,"deporte", "<b>Nombre de spot</b><br>Información detallada del spot.");


// Envía los datos de los puntos al backend
sendDataToBackend();

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
var span = document.getElementsByClassName('close')[0];

span.onclick = function() { // cierra el modal si se hace clic en la 'x'
    modal.style.display = 'none';
}

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