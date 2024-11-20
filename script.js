const container = document.querySelector("#grid")

//create function for generating grid
function createGrid(){
    for (let v = 1; v <= sideNum; v++){
        const row = document.createElement("div");
        row.classList.add("row", "flex");
        for (let h = 1; h <= sideNum; h++){
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
      
let sideNum = 16;

window.addEventListener("load", (event) => {
    createGrid();
});