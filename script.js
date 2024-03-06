const container = document.querySelector("#container");

let rowCount = 16;
let colCount = 16;

function generateGrid(row, col) {
  for (let i = 0; i < row; i++) {
    const rowCoordinates = "row-" + i;
    const row = document.createElement("div");

    row.className = rowCoordinates;
    container.appendChild(row);

    for (let j = 0; j < col; j++) {
      const cellCoordinates = "cell-" + i + "-" + j;
      const cell = document.createElement("div");

      cell.className = cellCoordinates;
      row.appendChild(cell);
    }
  }

  const cellList = container.querySelectorAll("#container > div > div");

  for (const cell of cellList) {
    cell.addEventListener("mouseenter", (e) => {
      e.target.classList.add("focus");
    });

    cell.addEventListener("mouseleave", (e) => {
      e.target.classList.remove("focus");
    });
  }
}

generateGrid(rowCount, colCount);

const resetButton = document.querySelector("#reset-grid");

resetButton.addEventListener("click", () => {
    let userInput;

    do {
        userInput = Number(prompt("Please enter the dimension of the grid as a number less than 100:"));
    } while (isNaN(userInput) || userInput <= 0 || userInput > 100);

    container.replaceChildren();

    generateGrid(userInput, userInput);
});
