
let mouseX = 0;
let mouseY = 0;
const tileSize = 100;
const canvas = document.getElementById("boardCanvas");
const ctx = canvas.getContext("2d");
const boardWidth = canvas.width / tileSize;
const boardHeight = canvas.height / tileSize;
console.log(boardWidth, boardHeight);

let heldItem;
let items = [];
let board = create2DArray(boardWidth, boardHeight);

function create2DArray(rows, columns) {
  let arr = Array(rows);
  for(let i = 0; i < rows; i++){
   arr[i] = Array(columns);
  }
  return arr;
}

function replaceChar(str, index, char) {
  console.log(`str: ${str}, index: ${index}, char: ${char}`);
  return(str.substr(0, index) + char + str.substr(index + 1));
}

function drawGrid() {
  ctx.strokeStyle = "#a1a1a1";
  for (let y = 0; y < boardHeight + 1; y++) {
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, y * tileSize);
    ctx.lineTo(canvas.width, y * tileSize);
    ctx.stroke();
  }
  for (let x = 0; x < boardWidth + 1; x++) {
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(x * tileSize, 0);
    ctx.lineTo(x * tileSize, canvas.height);
    ctx.stroke(); 
  }
}

function drawBoard() {
  ctx.fillStyle = "#696969";
  for (let x = 0; x < boardWidth; x++) {
    for (let y = 0; y < boardHeight; y++) {
      if (board[x][y]) {
        // ctx.fillStyle = board[x][y].color;
        ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);
      }
    }
  }
}

function main() {
  ctx.fillStyle = "#cccccc";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // drawBoard();
  if (items) {
    items.forEach(item => {
      item.draw();
    });
  }
  drawGrid();
  if (heldItem) {
    heldItem.draw();
    heldItem.x = mouseX - tileSize/2;
    heldItem.y = mouseY - tileSize/2;
  }
  requestAnimationFrame(main);
}

main();