const container = document.querySelector(".grid-container");

document.onmousedown = mouseDown;
document.onmouseup   = mouseUp;

// Default Mouse State
var mouseState = "up"

// Default Pen Color
var penColor = "#000"
var penState = "penMode"

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

// Function to generate random colors RGBA
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// Create 16x16 grid of square divs
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = i.toString() + "-" + j.toString();
    square.addEventListener("mousedown", () => {
      if (penState == 'penMode') {
        square.style.backgroundColor = penColor;
      } else if (penState == 'randomMode') {
        square.style.backgroundColor = getRandomColor();
      } else if (penState == 'eraserMode') {
        square.style.backgroundColor = "#ffffff";
      };
      
    });
    square.addEventListener("mouseenter", (e) => {
      console.log(mouseState);
      if (mouseState == 'down'){
        if (penState == 'penMode') {
          square.style.backgroundColor = penColor;
        } else if (penState == 'randomMode') {
          square.style.backgroundColor = getRandomColor();
        } else if (penState == 'eraserMode') {
          square.style.backgroundColor = "#ffffff";
        };
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
  onChange: (color) => {
    penColor = color;
    penState = "penMode";
  },
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

// Ensure that only one button can be clicked at a time
const buttons = document.querySelectorAll('.button-column .btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((b) => {
      if (b !== button) {
        b.classList.remove('active');
      }
    });
    console.log(button.id + ' is active');
    penState = button.id;

  });
});

// Clear the Grid
const clear = document.querySelector('#clearMode');

clear.addEventListener('click', () => {
  const docGrid = document.querySelectorAll('.square');
  docGrid.forEach((cell) => {
    cell.style.backgroundColor = "#ffffff";
  });
});