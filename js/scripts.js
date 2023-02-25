const botones = document.querySelectorAll(".boton_desplegable");
const listas = document.querySelectorAll(".lista_desplegable");
const simbolos = document.querySelectorAll(".simbolo_desplegable");

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

const urlLinkedin = document.querySelectorAll(".url");

const svg = document.querySelectorAll('.icon-tabler-brand-linkedin');



urlLinkedin.addEventListener('mouseover', () => {
    svg.setAttribute('stroke', '#328ecb');
});

urlLinkedin.addEventListener('mouseout', () => {
  svg.setAttribute('stroke', '#ffffff');
});