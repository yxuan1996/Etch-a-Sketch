const container = document.querySelector(".grid-container");

document.onmousedown = mouseDown;
document.onmouseup   = mouseUp;

// Default Mouse State
var mouseState = "up"

// Default Pen Color
var penColor = "#000"

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
      square.style.backgroundColor = penColor;
    });
    square.addEventListener("mouseenter", (e) => {
      console.log(mouseState);
      if (mouseState == 'down'){
        square.style.backgroundColor = penColor;
      }
      
    });
    container.appendChild(square);
  }
}

// Create Color Picker from the Coloris library
Coloris({
  // A custom selector to bind the color picker to. This must point to HTML input fields.
  el: '.coloris',
  themeMode: 'dark',
  autoClose: true,
  // Defines what happens after a new color is selected
  onChange: (color) => penColor = color,
  swatches: [
    "#000",
    '#264653',
    '#2a9d8f',
    '#e9c46a',
    '#f4a261',
    '#e76f51',
    '#d62828',
    '#023e8a',
    // '#0077b6',
    '#0096c7',
    // '#00b4d8',
    '#48cae4',
    '#ffffff',
  ],
});