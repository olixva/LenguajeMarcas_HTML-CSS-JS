flores = ["imagenes/rosa.jpg", "imagenes/lirio.jpg", "imagenes/loto.jpg"];
i = 0;

function cambiarImagenes() {
  document.images[2].src = document.images[1].src;
  document.images[1].src = document.images[0].src;
  document.images[0].src = flores[i];

  i++;
  if (i >= 3) {
    i = 0;
  }

  setTimeout(cambiarImagenes, 1000);
}


