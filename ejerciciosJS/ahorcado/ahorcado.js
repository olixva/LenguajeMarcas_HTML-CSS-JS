var vidas = 7;
var letrasEncontradas = 0;
var letras = document.getElementsByClassName("letra");
var imagen;
var letrasElegidas = [];

var palabras = [
  "almohada",
  "caminata",
  "delantal",
  "florista",
  "gigantes",
  "hermosas",
  "juguetón",
  "kilogram",
  "limonada",
  "narrador",
  "orquesta",
  "paraguas",
  "quemador",
  "radiador",
  "unicorno",
  "vibrador",
  "zapatero",
];

var palabraSeleccionada = seleccionarPalabraAleatoria();

function seleccionarPalabraAleatoria() {
  var indiceAleatorio = generarNumeroAleatorio();
  var palabraAleatoria = palabras[indiceAleatorio];
  var arrayDePalabra = palabraAleatoria.split("");
  return arrayDePalabra;
}

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * palabras.length);
}

function validarInput(input) {
  var valor = input.value;

  valor = valor.replace(/[^a-zA-Z]/g, "");

  input.value = valor;
}

function letraYaElegida(letra) {
  return letrasElegidas.includes(letra);
}

function marcarLetraComoElegida(letra) {
  letrasElegidas.push(letra);
}

function enviarLetra() {
  if (vidas == 0) {
    imagen.src = "imagenesAhorcado/0.gif";
    return;
  }
  
  var letraElegida = document
    .getElementById("entradaLetra")
    .value.toLowerCase();

  if (letraYaElegida(letraElegida)) {
    alert("Ya has elegido esa letra.");
    return;
  }

  marcarLetraComoElegida(letraElegida);

  var letraEncontrada = false;

  for (let index = 0; index < palabraSeleccionada.length; index++) {
    
    if (palabraSeleccionada[index] == letraElegida) {
      
      var letra = document.createTextNode(letraElegida);
      letras[index].appendChild(letra);
      letraEncontrada = true;
      letrasEncontradas++;

      if (letrasEncontradas == 8) {
        imagen.src = "imagenesAhorcado/ganado.gif";
        return;
      }
    }
  }

  if (!letraEncontrada) {
    
    vidas--;
    imagen = document.getElementById("imagen");
    
    if (vidas != 0) {
      imagen.src = "imagenesAhorcado/" + vidas + ".png";
    }
    
    alert("Vidas restantes: " + vidas);
  }
}
