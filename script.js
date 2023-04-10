const container = document.querySelector(".grid-container");

// Create 16x16 grid of square divs
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mousedown", () => {
      square.style.backgroundColor = "#000";
    });
    container.appendChild(square);
}