const container = document.querySelector("#container");
const button = document.querySelector("#reset");
let counter = 1;

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
    let currentSquare = event.target;
    currentSquare.style.backgroundColor = 
            "rgb(" + Math.floor(Math.random()*200+55) + "," + Math.floor(Math.random()*200+55) + "," 
                + Math.floor(Math.random()*200+55) + ")";
    if (currentSquare.style.opacity === "") {
        currentSquare.style.opacity = 1 ;
    } else if (currentSquare.style.opacity > 0) {
        currentSquare.style.opacity -= 0.1 ;
    }
}

function generateUserGrid () {
    let length = prompt("How many tiles per side of the square grid?", 16);
    if (length > 100 || length < 1 || isNaN(length)) {
        alert("Please enter a positive number under 100.");
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