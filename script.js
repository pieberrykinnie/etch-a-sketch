const container = document.querySelector("#container");

const ROW_COUNT = 16;
const COL_COUNT = 16;

for (let i = 0; i < ROW_COUNT; i++) {
    const rowCoordinates = "row-" + i;
    const row = document.createElement("div");
    
    row.className = rowCoordinates;
    container.appendChild(row);

    for (let j = 0; j < COL_COUNT; j++) {
        const cellCoordinates = "cell-" + i + "-" + j;
        const cell = document.createElement("div");
        
        cell.className = cellCoordinates;
        row.appendChild(cell);
    }
}