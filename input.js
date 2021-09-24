
window.addEventListener("keyup", event => {
    if (event.defaultPrevented) {
      return;
    }
  
    switch (event.key) {
      case "1":
        heldItem = new Item({
          x: 2*tileSize,
          y: 2*tileSize,
          origin: {x: 1, y: 1},
          color: "#FFE800",
          shape: [
            " # ",
            " ##",
            "  #"
          ]
        })
        break;
      case "2":
        heldItem = new Item({
          x: 2*tileSize,
          y: 2*tileSize,
          origin: {x: 1, y: 1},
          color: "#FF0000",
          shape: [
            " # ",
            "## ",
            "#  "
          ]
        })
        break;
      case "3":
        heldItem = new Item({
          x: 2*tileSize,
          y: 2*tileSize,
          origin: {x: 1, y: 1},
          color: "#FFE800",
          shape: [
            " # ",
            " ##",
            "  #"
          ]
        })
        break;
      case "4":
        heldItem = new Item({
          x: 2*tileSize,
          y: 2*tileSize,
          origin: {x: 1, y: 1},
          color: "#FFE800",
          shape: [
            " # ",
            " ##",
            "  #"
          ]
        })
        break;
      default:
        return;
    }
    event.preventDefault();
}, true);
  
canvas.addEventListener("mousemove", event => {
    const rect = canvas.getBoundingClientRect()
    mouseX = Math.round(event.clientX - rect.left);
    mouseY = Math.round(event.clientY - rect.top);
});