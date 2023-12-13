var aumentadas = false;

/*
Alternativa a usar el #hover en css para cambiar el tamaño de las imagenes

function reducirMitad(nombre) {
  imagen = document.getElementById(nombre);

  if (aumentadas) {
    imagen.style.width = "100px";
    imagen.style.height = "100px";
  } else {
    imagen.style.width = "50px";
    imagen.style.height = "50px";
  }
}

function aumentarDoble(nombre) {
  imagen = document.getElementById(nombre);

  if (aumentadas) {
    imagen.style.width = "200px";
    imagen.style.height = "200px";
  } else {
    imagen.style.width = "100px";
    imagen.style.height = "100px";
  }
}
*/

function aumentarReducir() {
  let imagenes = document.getElementsByClassName("imagen");
  let mensaje = document.getElementById("mensaje");

  if (aumentadas == false) {
    for (imagen of imagenes) {
      imagen.style.width = "200px";
      imagen.style.height = "200px";
    }
    mensaje.innerHTML = "Reducir";
    aumentadas = true;
  } else {
    for (imagen of imagenes) {
      imagen.style.width = "100px";
      imagen.style.height = "100px";
    }
    mensaje.innerHTML = "Aumentar";
    aumentadas = false;
  }
}