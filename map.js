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

var LeafIcon = L.Icon.extend({ //crea una clase de iconos //.EXTEND() es una función que crea una clase que hereda de otra clase
    options: {
        shadowUrl: './src/assets/img/leaf-shadow.png',
        iconSize:     [38, 95],//tamaño del icono
        shadowSize:   [50, 64],//tamaño de la sombra
        iconAnchor:   [22, 94],//punto del icono que corresponderá a la ubicación del marcador
        shadowAnchor: [4, 62],//lo mismo para la sombra
        popupAnchor:  [-3, -76]//punto desde el cual el popup debe abrirse en relación con iconAnchor
    }
});

var greenIcon = new LeafIcon({iconUrl: './src/assets/img/leaf-green.png'});
var redIcon = new LeafIcon({iconUrl: './src/assets/img/leaf-red.png'});
var orangeIcon = new LeafIcon({iconUrl: './src/assets/img/leaf-orange.png'});
//crea varios iconos a partir de la clase LeafIcon

// Inicializa el control de enrutamiento
var control = L.Routing.control({
    waypoints: [],
    routeWhileDragging: true,
    show: false,
    position: 'topleft',
}).addTo(map);

//funcion para crear marcador con icono y mostrar modal
function createPoint(lat, lng, icon, card){
    var point = L.marker([lat, lng], {icon: icon}).addTo(map); // añade un marcador con un icono
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
            } else {
                alert("Ubicación del usuario no encontrada.");
            }
        };

        document.getElementById('stopRouting').onclick = function() {
            // Detiene el enrutamiento removiendo los puntos de ruta
            control.setWaypoints([]);
            modal.style.display = 'none'; // Cierra el modal
        };
    });
}

/*
// Evento que se dispara cuando se calcula una ruta
control.on('routesfound', function(e) {
    var routes = e.routes;
    var summary = routes[0].summary; // Accede al resumen de la primera ruta encontrada
    
    // Accede a la distancia y tiempo desde el resumen de la ruta
    var distance = summary.totalDistance; // Distancia total en metros
    var time = summary.totalTime; // Tiempo total en segundos

    // Convierte la distancia de metros a kilómetros
    var distanceKm = (distance / 1000).toFixed(2);

    // Convierte el tiempo de segundos a minutos
    var timeMin = (time / 60).toFixed(0);

    // Muestra la distancia y el tiempo en tu interfaz de usuario
    var distanceElement = document.getElementById('distance');
    var timeElement = document.getElementById('time');

    distanceElement.innerHTML = 'Distancia: ' + distanceKm + ' km';
    timeElement.innerHTML = 'Tiempo estimado: ' + timeMin + ' minutos';
});
*/


//crear los puntos

createPoint(6.219228982112051, -75.58360417670856, greenIcon, "<b>Green Leaf Information</b><br>More details about this location.");
createPoint(6.217324106489384, -75.58774406747969, greenIcon, "<b>Green Leaf Information</b><br>Additional details about this place.");
createPoint(6.225302013240884, -75.58525497750676, redIcon, "<b>Red Leaf Information</b><br>More details about this red leaf location.");
createPoint(6.218476004247808, -75.57238037419849, orangeIcon, "<b>Orange Leaf Information</b><br>Additional details about this orange leaf place.");

//cerrar el modal
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];

span.onclick = function() { // cierra el modal si se hace clic en la 'x'
    modal.style.display = 'none';
}

window.onclick = function(event) { // cierra el modal si se hace clic fuera de él
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}