
window.addEventListener("keyup", event => {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "1":
            heldItem = new Item({
                x: mouseX,
                y: mouseY,
                origin: {x: 1, y: 1},
                color: "#FF0000",
                shape: [
                " # ",
                "## ",
                "#  "
            ]})
            break;
        case "2":
            heldItem = new Item({
                x: mouseX,
                y: mouseY,
                origin: {x: 1, y: 1},
                color: "#00FF00",
                shape: [
                " # ",
                " ##",
                "  #"
            ]})
            break;
        case "3":
            heldItem = new Item({
                x: mouseX,
                y: mouseY,
                origin: {x: 1, y: 1},
                color: "#0000FF",
                shape: [
                " # ",
                " # ",
                "## "
            ]})
            break;
        case "4":
            heldItem = new Item({
                x: mouseX,
                y: mouseY,
                origin: {x: 1, y: 1},
                color: "#FFFF00",
                shape: [
                "##",
                "##"
            ]})
            break;
        case "5":
            heldItem = new Item({
                x: mouseX,
                y: mouseY,
                origin: {x: 1, y: 1},
                color: "#00FFFF",
                shape: [
                " #  ",
                " #  ",
                " #  ",
                " #  "
            ]})
            break;
        case "6":
            heldItem = new Item({
                x: mouseX,
                y: mouseY,
                origin: {x: 1, y: 1},
                color: "#FF00FF",
                shape: [
                " # ",
                "###",
                "   "
            ]})
            break;
        case "7":
            heldItem = new Item({
                x: mouseX,
                y: mouseY,
                origin: {x: 1, y: 1},
                color: "#FFA500",
                shape: [
                " # ",
                " # ",
                " ##"
            ]})
            break;
        case "ArrowLeft":
            heldItem.rotate("left");
            break;
        case "ArrowRight":
            heldItem.rotate("right");
            break;
        case "ArrowUp":
            heldItem.rotate("flip");
            break;
        case " ":
            heldItem = undefined;
            break;
        default:
            console.log(event.key);
            return;
    }
    event.preventDefault();
}, true);
  
canvas.addEventListener("mousemove", event => {
    const rect = canvas.getBoundingClientRect()
    mouseX = Math.round(event.clientX - rect.left);
    mouseY = Math.round(event.clientY - rect.top);
});
canvas.addEventListener("mousedown", event => {
    if (event.button == 0 && heldItem) heldItem.place();
});

//#FFE800 Nice yellow color