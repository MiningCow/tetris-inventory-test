
class Item {
  constructor({ x, y, color, origin = {x: 0, y: 0}, shape }) {
    this.shape = shape;
    this.origin = origin;
    this.x = x;
    this.y = y;
    this.color = color;
    this.id = Date.now();
  }
  rotateLeft() {
    let shape = this.shape;
    let newShape = [];
    let xMax = shape[0].length;
    let yMax = shape.length;
    let newLine = "";
    for (let x = xMax-1; x >= 0; x--){
      for(let y = 0; y < yMax; y++){
        newLine += shape[y].charAt(x);
      }
      newShape.push(newLine);
      newLine = "";
    }
    this.shape = newShape;
    this.origin = {x: this.origin.y, y: 0-this.origin.x + this.shape.length - 1}
  }
  rotateRight() {
    let shape = this.shape;
    let newShape = [];
    let xMax = shape[0].length;
    let yMax = shape.length;
    let newLine = "";
    for (let x = 0; x < xMax; x++){
      for(let y = yMax-1; y >= 0; y--){
        newLine += shape[y].charAt(x);
      }
      newShape.push(newLine);
      newLine = "";
    }
    this.shape = newShape;
    this.origin = {x: 0-this.origin.y + this.shape[0].length - 1, y: this.origin.x}
  }
  flip() {
    let shape = this.shape;
    let newShape = [];
    let xMax = shape[0].length-1;
    let yMax = shape.length-1;
    let newLine = "";
    for(let y = yMax; y >= 0; y--){
      for (let x = xMax; x >= 0; x--){
        newLine += shape[y].charAt(x);
      }
      newShape.push(newLine);
      newLine = "";
    }
    this.shape = newShape;
    this.origin = {x: 0-this.origin.x + xMax, y: 0-this.origin.y + yMax}
  }
  place () {
    let placeX = Math.abs(Math.round((mouseX - tileSize/2) / tileSize));
    let placeY = Math.abs(Math.round((mouseY - tileSize/2) / tileSize));
    let tileLocations = [];
    let canPlace = true;
    for (let y = 0; y < this.shape.length; y++) {
      for (let x = 0; x < this.shape[y].length; x++) {
        if (this.shape[y].charAt(x) == "#" && canPlace) {
          let tileX = placeX + x - this.origin.x;
          let tileY = placeY + y - this.origin.y;

          if (tileX >= boardWidth || tileX < 0 || tileY >= boardHeight || tileY < 0) {
            canPlace = false;
            console.log("Outside board", tileX, tileY);
          } else if (board[tileX][tileY]) {
            canPlace = false;
            console.log("Intersection", tileX, tileY);
          }

          tileLocations.push({tileX, tileY});
        }
      }
    }
    if (canPlace) {
      tileLocations.forEach(({tileX, tileY}) => { board[tileX][tileY] = { color: this.color, id: this.id }});
      heldItem.x = placeX*tileSize;
      heldItem.y = placeY*tileSize;
      items.push(heldItem);
      heldItem = undefined;
    } else {
      console.log("You cannot place an item there.");
    }
  }
  draw(preview = false) {
    for (let y = 0; y < this.shape.length; y++) {
      for (let x = 0; x < this.shape[y].length; x++) {
        if (this.shape[y].charAt(x) == "#") {
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x + x*tileSize - this.origin.x*tileSize, this.y + y*tileSize - this.origin.y*tileSize, tileSize, tileSize);
        } /* else {
          ctx.fillStyle = "red";
          ctx.fillRect(this.x*tileSize + x*tileSize - this.origin.x*tileSize, this.y*tileSize + y*tileSize - this.origin.y*tileSize, tileSize, tileSize);
        } */
      }
    }
  }
}
