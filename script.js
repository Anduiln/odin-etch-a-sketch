const container = document.querySelector("#container");
const button = document.querySelector("#reset");

createGrid(container, 16, 16);
const squareList = document.querySelectorAll(".square");
squareList.forEach((item) => item.addEventListener("mouseover", changeColor));

button.addEventListener("click", generateUserGrid);

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

function changeColor (event) {
    event.target.className = "square hover";
}

function generateUserGrid () {
    let length = prompt("How many tiles per side of the square grid?", 16);
    if (length > 100) {
        alert("Please enter a value under 100.");
        return;
    }
    
    const lineList = document.querySelectorAll(".line");
    for (line of lineList) {
        container.removeChild(line);
    }

    createGrid(container, length, length);
    const squareList = document.querySelectorAll(".square");
    squareList.forEach((item) => item.addEventListener("mouseover", changeColor));
}