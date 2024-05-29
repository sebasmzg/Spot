const URLbase = "http://localhost:3000/usuarios";

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

/* export async function getUsers(){
    let response = await fetch(`${URLbase}/usuarios`);
    const data = response.json();
    return data;
} */

/* export async function getUsuarioById(id) {
    let response = await fetch(`${URLbase}/usuarios/${id}`);
    const data = response.json();
    return data;
} */



//funcion para crear marcador con icono y mostrar modal
async function createPoint(lat, lng, icon, card){
    var point = L.marker([lat, lng], {icon: icon}).addTo(map); // añade un marcador con un icono

    // Agregar punto a la base de datos
    const newPoint = {
        lat: lat,
        lng: lng,
        icon: icon,
        card: card
    };
    addPointToDB(newPoint);
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

createPoint(19.4326, -99.1332, 'icon', 'card');