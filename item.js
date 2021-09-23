
class Item {
  constructor(x, y, color = "#FFE800", rotation = 0, origin = {x: 1, y: 1}) {
    this.shape = [
      " #  ",
      " ## ",
      "  # "
    ];
    this.origin = origin;
    this.x = x;
    this.y = y;
    this.color = color;
    this.rotation = rotation;
  }
  draw(preview = false) {
    for (let y = 0; y < this.shape.length; y++) {
      for (let x = 0; x < this.shape[y].length; x++) {
        if (this.shape[y].charAt(x) == "#") {
          if(x==this.origin.x && y==this.origin.y) {
            ctx.fillStyle = "lime";
          } else {ctx.fillStyle = this.color;}
          ctx.fillRect(this.x*tileSize + x*tileSize - this.origin.x*tileSize, this.y*tileSize + y*tileSize - this.origin.y*tileSize, tileSize, tileSize);
        } /* else {
          ctx.fillStyle = "red";
          ctx.fillRect(this.x*tileSize + x*tileSize - this.origin.x*tileSize, this.y*tileSize + y*tileSize - this.origin.y*tileSize, tileSize, tileSize);
        } */
      }
    }
  }
}
