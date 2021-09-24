
class Item {
  constructor({ x, y, color, origin = {x: 0, y: 0}, shape }) {
    this.shape = shape;
    this.origin = origin;
    this.x = x;
    this.y = y;
    this.color = color;
  }
  rotate() {

  }
  place () {
    // Math.abs(Math.round((mouseX - tileSize/2) / tileSize))
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
