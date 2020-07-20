//Global Variables
let hits = 0;
let misses = 0;


function createGridArray() {
    //Create and return a grid array
    return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}

function createDivGrid(grid) {

    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COL; col++) {
            //Create a div for each element in 2d grid 
            let divEl = document.createElement("div");
            divEl.id = "points"

            //add Data values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col;

            //Add an event listener to each divEl
            divEl.addEventListener("click", cellClicked)
            //Add div to container
            document.getElementById("container").append(divEl);
            //generateRandomLocation();
            //if (row == locationRow && col == locationCol) {
            grid[row][col] = 1;
        }

    }





    function cellClicked() {

    }
    //Get row and col of the clicked cell
    //Get row and col of the clicked cell
    //let row = event.target.dataset.row;
    //let col = event.target.dataset.col;

    //clear class list of cell
    //event.target.classList = "";
    //grid[row][col] = 0; // set grid to white

}

function startGame(arrayRow, arrayCol, num) {
    arrayRow = [];
    arrayCol = []
    let locationRow = Math.randomInt(0, 10);
    let locationCol = Math.randomInt(0, 10);
    arrayRow.push(locationRow);
    arrayCol.push(locationCol);
    for (let i = 1; i < num; i++) {
        arrayRow.push(locationRow + i);
    }
    for (let n = 1; n < num; n++) {
        arrayCol.push(locationCol + n);
    }
    console.log(arrayRow, arrayCol)
}
let shipRow = []
let shipCol = []

startGame(shipRow, shipCol, 10);


let x = shipRow;
let y = shipRow;



function checkIfEqual(par1, par2) {

    //let locationX = Number(document.getElementById("rowCoor").value);
    //let locationY = Number(document.getElementById("colCoor").value);
    let arrRow = x;
    let arrCol = y;
    console.log(arrRow, arrCol);


    //for (let n = 0; n < arrRow.length && n < arrCol.length; n++) {
    //   console.log(arrRow[n], arrCol[n]);
    // if (locationX == arrRow[n] && locationY == arrCol[n]) {
    //     hit ++;
    //   console.log("hit");
    // }

    // }



    //if (hits == 0) {
    //   console.log("miss");
    //}



    //if (locationX == locationRow && locationY == locationCol) {
    //  hits++;
    // document.getElementById("hit").innerHTML = hits;
    //} else {
    //  misses++;
    //document.getElementById("miss").innerHTML = misses;
    //}
    //console.log(arrayRow);

}
checkIfEqual(x, y);


