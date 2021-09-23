
class Item {
  constructor(x, y, rotation = 0, origin = {x: 2, y: 2}) {
    this.shape = [
      " #  ",
      " ## ",
      "  # "
    ];
    this.origin = origin;
    this.x = x;
    this.y = y;
    this.color = "#FFE800";
    this.rotation = rotation;
  }
  draw(preview = false) {
    
  }
}
