var contenedorExperiencia = document.getElementById("contenedorExperiencia");
var botonHabilidades = document.getElementById("botonHabilidades");
var botonExperiencia = document.getElementById("botonExperiencia");
var botonEducacion = document.getElementById("botonEducacion");

var listas = [document.getElementById("listaHabilidades"), document.getElementById("listaExperiencia"), document.getElementById("listaEducacion")];

var simbolos = [document.getElementById("simboloHabilidades"), document.getElementById("simboloExperiencia"), document.getElementById("simboloEducacion")];

function mostrarOcultarLista(numero) {
  if (listas[numero].style.display === "none") {
    listas[numero].style.display = "flex";
  } else {
    listas[numero].style.display = "none";
  }
  cambioDeSimbolo(numero);
}

function cambioDeSimbolo(numero){
  if(simbolos[numero].innerHTML === '+'){
    simbolos[numero].innerHTML = '-';
  } else {
    simbolos[numero].innerHTML = '+';
  }
}

botonHabilidades.addEventListener("click", function() {
  mostrarOcultarLista(0);
});

botonExperiencia.addEventListener("click", function() {
  mostrarOcultarLista(1);
});

botonEducacion.addEventListener("click", function() {
  mostrarOcultarLista(2);
});
