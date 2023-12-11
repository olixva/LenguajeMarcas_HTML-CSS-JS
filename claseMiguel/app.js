var tablero = Array(9).fill(null);
const TURNS = {
  X: "X",
  O: "O",
};
var turn = TURNS.X;
var winner = null;
var gameover = false;

function render() {
  let board = document.getElementById("board");
  board.innerHTML = "";
  tablero.forEach(function (value, index) {
    let cell = document.createElement("div");
    cell.className =
      "bg-stone-600 w-20 h-20 text-5xl text-center rounded-md cursor-pointer flex items-center justify-center font-bold hover:bg-stone-500";
    cell.innerHTML = value;
    cell.dataset.index = index;
    cell.addEventListener("click", handleClick);
    board.appendChild(cell);
  });

  let message = document.getElementById("message");
  if (winner != null) {
    message.childNodes[0].innerHTML = "Ganador: ";
    message.childNodes[1].innerHTML = turn;
  } else if (gameover) {
    message.childNodes[0].innerHTML = "Juego terminado: ";
    message.childNodes[1].innerHTML = "Empate";
  } else {
    message.childNodes[0].innerHTML = "Turno: ";
    message.childNodes[1].innerHTML = turn;
  }
}

function handleClick(event) {
  let index = event.target.dataset.index;

  if (tablero[index] || gameover || winner) return;

  tablero[index] = turn;

  if (checkWinner()) {
    winner = turn;
  } else if (checkGameOver()) {
    gameover = true;
  } else {
    if (turn === TURNS.X) {
      turn = TURNS.O;
    } else {
      turn = TURNS.X;
    }
  }

  render();
}

function checkWinner() {
  let winnerCombinations = [
    [0, 1, 2], // Horizontal
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], // Vertical
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6], //Diagonal
  ];

  for (const combination of winnerCombinations) {
    const [a, b, c] = combination;

    if (
      tablero[a] != null &&
      tablero[a] == tablero[b] &&
      tablero[a] == tablero[c]
    ) {
      console.log("Ganador: " + turn);
      return true;
    } else{
      console.log("No hay ganador");
    }
  }
  return false;
}

function checkGameOver() {
  return tablero.every(function (value) {
    return value !== null;
  });
}

function reset() { 
  tablero = Array(9).fill(null);
  turn = TURNS.X;
  winner = null;
  gameover = false;
  render();
}
render();
