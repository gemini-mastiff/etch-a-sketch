const container = document.querySelector("#grid");
const btn = document.querySelector("#newGrid");
let gridRows;
let gridSquares;

function getNum(){
    let choiceLoop = true;
    const pattern = /[\D]/gm
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

function generateSquares(num){
    for (let v = 1; v <= num; v++){
        const row = document.createElement("div");
        row.classList.add("row", "flex");
        for (let h = 1; h <= num; h++){
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    container.appendChild(row);
    }
};

function createGrid(num){
    generateSquares(num);
    //Each time generateSquares is called, gridRows & gridSquares
    //are reassigned to current grid
    gridRows = document.querySelectorAll(".row")
    gridSquares = document.querySelectorAll(".square");

    //Must stay within same scope as gridSquares to function
    gridSquares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.classList.add("hover");
        });
    });
};

function removeGrid() {
    gridRows.forEach((row) =>{
        row.remove()
    });
};

createGrid(16);

btn.addEventListener("click", () => {
    removeGrid();
    createGrid(getNum());
});