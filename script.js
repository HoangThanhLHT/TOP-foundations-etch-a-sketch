const gridSize = 16;
const container = document.querySelector("div.container");

for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", `row ${i}`);
    for (let j = 0; j < gridSize; j++) {
        const square = document.createElement("div");
        square.setAttribute("class", `square ${i}x${j}`)
        square.style.backgroundColor = "red";
        row.appendChild(square)
    }
    container.appendChild(row)
}