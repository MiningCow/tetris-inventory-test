
let mouseX = 0;
let mouseY = 0;
const tileSize = 100;
const canvas = document.getElementById("boardCanvas");
const ctx = canvas.getContext("2d");
const boardWidth = canvas.width / tileSize;
const boardHeight = canvas.height / tileSize;
console.log(boardWidth, boardHeight);

let heldItem;
let board = create2DArray(boardWidth, boardHeight);
console.log(board);
let items = [
  new Item({
    x: 200,
    y: 200,
    origin: {x: 1, y: 1},
    color: "#FFE800",
    shape: [
      " # ",
      " ##",
      "  #"
    ]
  }),
  new Item({
    x: 600,
    y: 200,
    origin: {x: 1, y: 1},
    color: "#00FF00",
    shape: [
      "## ",
      " # ",
      " # "
    ]
  }),
  new Item({
    x: 100,
    y: 400,
    origin: {x: 1, y: 1},
    color: "#FF00FF",
    shape: [
      " # ",
      "###",
      "   "
    ]
  })
];

function create2DArray(rows, columns) {
  let arr = Array(columns);
  for(let i = 0; i < columns; i++){
   arr[i] = Array(rows);
  }
  return arr;
}

function drawBoard() {
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

function main() {
  ctx.fillStyle = "#cccccc";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  items.forEach(item => {
    item.draw();
  });
  drawBoard();
  if (heldItem) {
    heldItem.draw();
    heldItem.x = mouseX - tileSize/2;
    heldItem.y = mouseY - tileSize/2;
  }
  requestAnimationFrame(main);
}

main();