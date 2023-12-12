function calcularLongitud() {
    let radio = prompt("Introduce el radio");
    let longitud = 2 * Math.PI * radio;
    let area = Math.PI * Math.pow(radio, 2);

    document.getElementById("longitud").innerHTML += longitud;
    document.getElementById("area").innerHTML += area;
}
calcularLongitud();