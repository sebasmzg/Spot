const midButtom0 = document.getElementById("mid-buttom-0");
const midButtom1 = document.getElementById("mid-buttom-1");
const midButtom2 = document.getElementById("mid-buttom-2");
const grid = document.getElementById("gridZone");
const Zcomen = document.getElementById("comentarios");
const map = document.getElementById("Map");
const mainButtom1 = document.getElementById("main-buttom");
const mainButtom2 = document.getElementById("main-buttom2");


mainButtom1.onclick = function(){
    mainButtom1.style.display = "none";
    mainButtom2.style.display = "block";
}

midButtom0.onclick = function(){
    grid.style.display = "block";
    map.style.display = "none";
    Zcomen.style.display = "none";
}

midButtom1.onclick = function(){
    Zcomen.style.display = "block";
    grid.style.display = "none";
    map.style.display = "none";
}

midButtom2.onclick = function(){
    map.style.display = "block";
    Zcomen.style.display = "none";
    grid.style.display = "none";
}

// codigo js de zona mapa

var map2 = L.map('map1', {
    zoomControl: false // deshabilita los controles de zoom predeterminados
}).setView([6.2447472222222, -75.574827777778], 13); // crea un mapa y lo centra en una ubicación

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map2); //añade una capa de mapa al mapa. mapa base openstreetmap


// Añade los controles de zoom en la posición inferior derecha
L.control.zoom({
    position: 'bottomright'
}).addTo(map2);

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
}).addTo(map2);

map1.on('locationfound', function(e) {
    userLocation = e.latlng; // Guarda la ubicación del usuario
});

map2.on('locationerror', function(e) { //muestra un mensaje si no se puede acceder a la ubicación
    alert("Location access denied.");
});

locateControl.start(); // Inicia la localización del usuario