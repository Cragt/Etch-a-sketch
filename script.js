let color = "black";
function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  document.getElementById("title").innerHTML = "SketchPad";

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if ((input >= 2) & (input <= 100)) {
    populateBoard(input);
  } else if (input > 100) {
    document.getElementById("title").innerHTML = "Too many squares!";
  } else if (input < 2) {
    document.getElementById("title").innerHTML = "Too few squares!";
  } else if (input != Number) {
    document.getElementById("title").innerHTML = "Please enter a number";
  }
}

function colorSquare() {
  if (color === "Random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function getRandomColor(choice) {
  var letters = "0123456789ABCDEF";
  var randomColor = "#";
  for (var i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  color = randomColor;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}
