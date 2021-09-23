const tileSize = 100;
const canvas = document.getElementById("boardCanvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width / tileSize;
const canvasHeight = canvas.height / tileSize;

console.log(canvasWidth, canvasHeight);

let items = [new Item(2, 2)];

function drawBoard() {
  ctx.strokeStyle = "#a1a1a1";
  for (let y = 0; y < canvasHeight + 1; y++) {
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, y * tileSize);
    ctx.lineTo(canvas.width, y * tileSize);
    ctx.stroke(); 
  }
  for (let x = 0; x < canvasWidth + 1; x++) {
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
  drawBoard();
  // items.forEach(item => {
  //   item.draw();
  // });
  frame++;
  requestAnimationFrame(main);
}

main();