//Battleships

//Global variables
const NUM_ROWS = 10;
const NUM_COL = 10;


let grid = createGridArray();
createDivGrid(grid);

//function to generate random location
document.getElementById('start').addEventListener("click", startGame);

document.getElementById("fire").addEventListener("click", checkIfEqual);

