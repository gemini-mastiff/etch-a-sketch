const container = document.querySelector("#grid");
const btn = document.querySelector("#newGrid");
let sideNum = 16;

function getNum(){
    return num = parseInt(prompt("How many squares per side? 1-100"));
}

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

    const gridSquares = document.querySelectorAll(".square");
    const gridRows = document.querySelectorAll(".row")

    gridSquares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.classList.add("hover");
        });
    });

    btn.addEventListener("click", () =>{
        gridRows.forEach((row) =>{
            row.remove()
        });
        let sideNum = getNum()
        createGrid(sideNum);
    })
}

window.addEventListener("load", () => {
    createGrid(sideNum);
});

