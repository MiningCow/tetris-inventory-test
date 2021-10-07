
class Item {
  constructor({ x, y, color, origin = {x: 0, y: 0}, shape }) {
    this.shape = shape;
    this.origin = origin;
    this.x = x;
    this.y = y;
    this.color = color;
    this.id = Date.now();
  }
  rotate(rotation) {
    let rotatedShape = [...this.shape];
    switch (rotation) {
      case "left":
        for (let y = -this.origin.y; y < this.shape.length - this.origin.y; y++) {
          for (let x = -this.origin.x; x < this.shape.length - this.origin.x; x++) {
            rotatedShape[y+1] = replaceChar(rotatedShape[y+1], x+1, this.shape[x+1].charAt(-y+1));
          }
        }
        this.shape = rotatedShape;
        break;
      case "right":
        for (let y = -this.origin.y; y < this.shape.length - this.origin.y; y++) {
          for (let x = -this.origin.x; x < this.shape.length - this.origin.x; x++) {
            rotatedShape[y+1] = replaceChar(rotatedShape[y+1], x+1, this.shape[-x+1].charAt(y+1));
          }
        }
        this.shape = rotatedShape;
        break;
      case "flip":
        break;
      default:
        console.log("Incorrect rotation arguments");
        return;
    }
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
