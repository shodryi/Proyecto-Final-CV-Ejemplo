var botones = document.querySelectorAll(".boton_desplegable");
var listas = document.querySelectorAll(".lista_desplegable");
var simbolos = document.querySelectorAll(".simbolo_desplegable");

botones.forEach(function(boton, indice) {
  boton.addEventListener("click", function() {
    if (listas[indice].style.display === "flex") {
      listas[indice].style.display = "none";
      simbolos[indice].innerHTML = "+";
    } else {
      listas[indice].style.display = "flex";
      simbolos[indice].innerHTML = "-";
    }
  });
});