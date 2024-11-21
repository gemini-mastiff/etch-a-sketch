const container = document.querySelector("#grid");
const btn = document.querySelector("#newGrid");
let sideNum;

function getNum(){
    let choiceLoop = true;
    let pattern = /[\D]/gm
    while (choiceLoop === true){
        num = parseInt(prompt("How many squares per side? 1-100"));
        if (pattern.test(num)
            || num > 100
            || num < 1 ){
                continue;
        } else {
            choiceLoop = false;
            return num;
        }
    }
};

function createGrid(num){
    for (let v = 1; v <= num; v++){
        const row = document.createElement("div");
        row.classList.add("row", "flex");
        for (let h = 1; h <= num; h++){
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    container.appendChild(row);
    }
};

createGrid(16);
let gridRows = document.querySelectorAll(".row")
let gridSquares = document.querySelectorAll(".square");

function removeGrid() {
    gridRows.forEach((row) =>{
        row.remove()
    });
};

gridSquares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add("hover");
    });
});

btn.addEventListener("click", () => {
    removeGrid();
    sideNum = getNum();
    createGrid(sideNum);
    gridRows = document.querySelectorAll(".row")
    gridSquares = document.querySelectorAll(".square");
});