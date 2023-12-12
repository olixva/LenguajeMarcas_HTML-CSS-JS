function pedirColor() {
  var color = prompt("Introduce el color");

  document.body.style.backgroundColor = color;
}

function cambiarFondo() {
  let color = document.getElementById("color").value;
  document.body.style.backgroundColor = color;
}
