var contenedorExperiencia = document.getElementById("contenedorExperiencia");
var botonHabilidades = document.getElementById("botonHabilidades");
var botonExperiencia = document.getElementById("botonExperiencia");
var botonEducacion = document.getElementById("botonEducacion");

var simboloHabilidades = document.getElementById("simboloHabilidades");
var listas = [document.getElementById("lista1"), document.getElementById("lista2"), document.getElementById("lista3")];

function mostrarOcultarLista(numero) {
  if (listas[numero].style.display === "none") {
    listas[numero].style.display = "flex";
    simboloHabilidades.innerHTML = '-';
    //contenedorExperiencia.style.gap = 0;
  } else {
    listas[numero].style.display = "none";
    simboloHabilidades.innerHTML = '+';
    //contenedorExperiencia.style.gap = '157px';
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
