const container = document.querySelector("#grid")

//create function for generating grid
function createGrid(sideNum){
    for (let v in sideNum){
        let row = document.createElement("div");
        row.classList.add("row");
        for (let h in sideNum){
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
      
let sideNum = 16;

document.addEventListener("load", () => {
    createGrid(sideNum);
});