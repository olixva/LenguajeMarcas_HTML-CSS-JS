function calcularEdad() {
    let edad = document.getElementById("edad").value.split("-");
    //Calculamos la edad en años, meses y días
    let date = new Date();
    let anios = 2023 - edad[0];
    let meses = (12 * anios) + date.getMonth() - edad[1];
    let dias = (365 * anios) + date.getDay() - edad[2];

    document.getElementById("anios").innerHTML = 'Tienes: ' + anios + ' años';
    document.getElementById("meses").innerHTML = 'Tienes: ' + meses + ' meses';
    document.getElementById("dias").innerHTML = 'Tienes: ' + dias + ' dias';
}