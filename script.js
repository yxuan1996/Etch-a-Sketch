const container = document.querySelector(".grid-container");

document.onmousedown = mouseDown;
document.onmouseup   = mouseUp;

var mouseState = "up"

function mouseDown(ev) {
  mouseState = "down";
  console.log('Down State you can now start dragging');
  // console.log(ev.target.classList[0]);
  // if (ev.target.classList[0]=="square") {
  //   console.log('Its a square')
  // }
}

function mouseUp(ev) {
  mouseState = "up";
  console.log('up state you cannot drag now because you are not holding your mouse')
}


// Create 16x16 grid of square divs
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = i.toString() + "-" + j.toString();
    square.addEventListener("mousedown", () => {
      square.style.backgroundColor = "#000";
    });
    square.addEventListener("mouseenter", (e) => {
      console.log(mouseState);
      if (mouseState == 'down'){
        square.style.backgroundColor = "#000";
      }
      
    });
    container.appendChild(square);
  }
}