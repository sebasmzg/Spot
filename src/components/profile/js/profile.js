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