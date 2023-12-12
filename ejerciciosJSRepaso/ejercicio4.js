function convertirEuros(valor) {
    let pesetas = valor.value;
    let euros = pesetas / 166.386;

    let redondeo = Math.round(euros * 100) / 100;
    document.getElementById("euros").innerHTML = redondeo + "€";

    if (redondeo > 1000) {
        document.getElementById("euros").style.color = "green";
        
    }else{
        document.getElementById("euros").style.color = "brown";
    }
}