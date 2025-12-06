const btn = document.querySelector("button");
const container = document.querySelector("div.container");

function drawSketch(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", `row ${i}`);
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", `square ${i}x${j}`);
            square.style.backgroundColor = getRandomColor();
            square.style.opacity = 0;
            row.appendChild(square);
        };
        container.appendChild(row);
    };
};

function clearSketch() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
};

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    while (color.length < 7) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};

function colorSquare() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            if (square.style.opacity < 1) {
                square.style.opacity = +square.style.opacity + 0.1;
            };
        });
    });
};

function main() {
    console.log(getRandomColor())
    drawSketch(16);
    colorSquare();
    btn.addEventListener("click", () => {
        let size = parseInt(prompt("Enter the number of squares per side for the new grid"));
        if (Number.isInteger(size) && size > 0 && size <=100) {
            clearSketch();
            drawSketch(size);
            colorSquare();
        } else {
            alert("Please enter an integer number between 1-100")
        };
    });
};

main()