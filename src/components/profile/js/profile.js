const midButtom0 = document.getElementById("mid-buttom-0");
const midButtom1 = document.getElementById("mid-buttom-1");
const midButtom2 = document.getElementById("mid-buttom-2");
const grid = document.getElementById("gridZone");
const Zcomen = document.getElementById("comentarios");
const map2 = document.getElementById("Map");
const mainButtom1 = document.getElementById("main-buttom");
const mainButtom2 = document.getElementById("main-buttom2");

/* script de boton seguir*/
mainButtom1.addEventListener("click", () => {
  mainButtom2.classList.toggle(
    "show"
  ); /* configurarion de boton seguir para que con cada click*/
  mainButtom1.classList.toggle("hidden");
});
/* fin de script de boton seguir*/

/** script de botones de zona mid */
mainButtom2.addEventListener("click", () => {
  mainButtom1.classList.toggle("hidden");
  mainButtom2.classList.toggle("show");
});

midButtom0.onclick = function () {
  grid.style.display = "block";
  map2.style.display =
    "none"; /** quita y da display block a los botones dela zona mid */
  Zcomen.style.display = "none";
};

midButtom1.onclick = function () {
  Zcomen.style.display = "block";
  grid.style.display = "none";
  map2.style.display = "none";
};

midButtom2.onclick = function () {
  map2.style.display = "block";
  Zcomen.style.display = "none";
  grid.style.display = "none";
};
/* fin de scripts de botones zona mid*/

// Script modals
const openEls =
  document.querySelectorAll(
    "[data-open]"
  ); /**seleccionamos la etiqueta en html para abrir */
const closeEls =
  document.querySelectorAll(
    "[data-close]"
  ); /**selecionamos la etiqueta en html para cerrar*/
const isVisible =
  "is-visible"; /**selecccionamos la etiqueta en html para darle visibilidad */

for (const el of openEls) {
  /**damos el evento de que si damos click le dara la opcio visibilidad al modal */
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  /**aqui al detectear el evento de de click  cerrara el modal */
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(
      isVisible
    ); /** usando pa propiedad parentElement seleccionamos la lista y que removemos el isvisible */
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    // si presionamos ESC se cierrra el modal*/
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

// Fin de script modals

// script guardar archivo

const selectVideo =
  document.getElementById("file"); /* abrimos la opcion de subir archivo*/
selectVideo.addEventListener("change", () => {
  /* si detecta un cambio ejecutara la funcion*/
  const archivo = selectVideo.files[0];
  const objeto = new FileReader();
  objeto.readAsDataURL(archivo); /* lee la direccion del archivo*/
  objeto.onload = () => {
    /**si se detecta el cambio y se detecta un archivo lo subira y lo creara en el contenedor destino */
    const papaGrid = document.getElementById("grid-papa2");
    papaGrid.innerHTML += `<video src="${objeto.result}" controls autoplay class="ctn-video"></video>`;
  };
});

// fin script agregar archivo

// codigo zona de comentarios

const submitButton = document.getElementById("submit-button");/** seleccionamos el boton del html */
const commentInput = document.getElementById("comment-input");/**seleccionamos la zona del input en html */
const commentsContainer = document.getElementById("comment-container");/**seleccionamos el contenedor de los comentarios */

submitButton.addEventListener("click", function () { /**creamos la funcion que cuando precionemos el boton de sumit creara un div dentro del contenedor */
  const comment = commentInput.value;
  const commentElement = document.createElement("div");
  const commentElement1 = document.createElement("div");
  const commentElement2 = document.createElement("div");

  commentElement.classList.add("ctn-comments"); /* le damos una clase al div recien creado*/
  commentElement1.classList.add("ctn-comments1");
  commentElement2.classList.add("ctn-comments2");
  commentElement2.innerHTML = comment;
  commentElement.appendChild(commentElement1);/**añadimos dos div dentro de uno para darle forma a la casilla de comentario */
  commentElement.appendChild(commentElement2);
  commentsContainer.appendChild(commentElement);
  commentInput.value = "";
});

// fin codigo zona de comentarios

// codigo js de zona mapa

var map = L.map("map1", {
  zoomControl: false, // deshabilita los controles de zoom predeterminados
}).setView([6.2447472222222, -75.574827777778], 13); // crea un mapa y lo centra en una ubicación

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map); //añade una capa de mapa al mapa. mapa base openstreetmap

// Añade los controles de zoom en la posición inferior derecha
L.control
  .zoom({
    position: "bottomright",
  })
  .addTo(map);

// Inicializa la variable para la ubicación del usuario
var userLocation = null;

// Añade el control de ubicación en la posición inferior derecha
var locateControl = L.control
  .locate({
    position: "bottomright",
    setView: "once",
    flyTo: true,
    locateOptions: {
      enableHighAccuracy: true, // habilita alta precisión
      timeout: 10000, // tiempo máximo para obtener la posición en milisegundos
      maximumAge: 0, // no usa una posición en caché
      maxZoom: 16, // nivel máximo de zoom cuando encuentra la ubicación
    },
  })
  .addTo(map);

map.on("locationfound", function (e) {
  userLocation = e.latlng; // Guarda la ubicación del usuario
});

map.on("locationerror", function (e) {
  //muestra un mensaje si no se puede acceder a la ubicación
  alert("Location access denied.");
});

locateControl.start(); // Inicia la localización del usuario
