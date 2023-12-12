//Funcion que calcula el numero de billetes y monedas de una cantidad de dinero
function calcularDinero() {
    var cantidad = document.getElementById("cantidad").value;
    var billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    var monedas = [0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
    var resultado = "";
    var resto = 0;
    var i = 0;
    var j = 0;
    
    while (cantidad > 0) {
        if (cantidad >= billetes[i]) {
            resto = cantidad % billetes[i];
            resultado += "Billetes de " + billetes[i] + ": " + Math.floor(cantidad / billetes[i]) + "<br>";
            cantidad = resto;
        } else {
            i++;
        }
    }
    while (cantidad > 0) {
        if (cantidad >= monedas[j]) {
            resto = cantidad % monedas[j];
            resultado += "Monedas de " + monedas[j] + ": " + Math.floor(cantidad / monedas[j]) + "<br>";
            cantidad = resto;
        } else {
            j++;
        }
    }
    
    
}