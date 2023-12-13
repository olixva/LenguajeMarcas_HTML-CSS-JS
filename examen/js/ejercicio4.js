var aumentadas = false;

function reducirMitad(nombre) {
  imagen = document.getElementById(nombre);

  if (imagen.dataset.tamano == "grande") {
    imagen.style.width = "100px";
    imagen.style.height = "100px";
  } else {
    imagen.style.width = "50px";
    imagen.style.height = "50px";
  }
}

function aumentarDoble(nombre) {
  imagen = document.getElementById(nombre);

  if (imagen.dataset.tamano == "grande") {
    imagen.style.width = "200px";
    imagen.style.height = "200px";
  } else {
    imagen.style.width = "100px";
    imagen.style.height = "100px";
  }
}

function aumentarReducir() {
  let imagenes = document.getElementsByClassName("imagen");
  let mensaje = document.getElementById("mensaje");

  if (aumentadas == false) {
    for (imagen of imagenes) {
      imagen.style.width = "200px";
      imagen.style.height = "200px";
      imagen.dataset.tamano = "grande";
    }
    mensaje.innerHTML = "Reducir";
    aumentadas = true;
  } else {
    for (imagen of imagenes) {
      imagen.style.width = "100px";
      imagen.style.height = "100px";
      imagen.dataset.tamano = "normal";
    }
    mensaje.innerHTML = "Aumentar";
    aumentadas = false;
  }
}
