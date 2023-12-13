var primera = true;

function cambiarColor() {
  //Si es la primera vez, creamos el h3
  if (primera) {
    let resultado = document.createElement("h3");
    resultado.id = "resultadoChild";
    document.getElementById("resultado").appendChild(resultado);
    primera = false;
  }

  //Obtenemos el color seleccionado
  var select = document.getElementById("colorSelect");
  let color = select.options[select.selectedIndex].value;

  //Cargamos el h3 con el resultado
  let resultado = document.getElementById("resultadoChild");
  resultado.style.color = color;
  resultado.innerHTML =
    "El color seleccionado es: " +
    select.options[select.selectedIndex].innerHTML;
}
