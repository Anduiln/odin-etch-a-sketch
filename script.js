const container = document.querySelector("#container");

createGrid(container, 16, 16);


function createSquare (parent) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    parent.appendChild(square);
}

function createLine (parent, width) {
    const line = document.createElement("div");
    line.setAttribute("class", "line");

    for (let i = 1 ; i <= width ; i++) {
        createSquare(line);
    }
    parent.appendChild(line);
}

function createGrid (parent, height, width) {
    for (let i = 1 ; i <= height ; i++) {
        createLine(parent, width);
    }
}