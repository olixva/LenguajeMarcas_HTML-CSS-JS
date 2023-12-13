function actualizar() {
    let alturaVentana = window.innerHeight;
    let anchuraVentana = window.innerWidth;

    let spanAnchura = document.getElementById("ancho");
    let spanAltura = document.getElementById("alto");

    spanAnchura.innerHTML = "Ancho ventana= " + anchuraVentana + "px";
    spanAltura.innerHTML = "Alto ventana= " + alturaVentana + "px";
}
actualizar();