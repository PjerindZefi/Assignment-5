//start with one row and 3 columns
let rows = 1;
let columns = 3;
let colored = false;

//getElementById will take the table
let tbl = document.getElementById("myTable");

//it will add rows to the grid
function appendRow() {
    let newRow = document.createElement("tr");
    for (let i = 0; i < columns; i++) {
        let newCell = document.createElement("td");
        setProperties(newCell);
        newRow.appendChild(newCell);
    }
    tbl.appendChild(newRow);
    rows++;
}

//it will add columns to the grid
function appendColumn() {
    let selectAllRows = document.querySelectorAll("tr");
    for (let i = 0; i < rows; i++) {
        //it will select all the rows
        let newCell = document.createElement("td");
        setProperties(newCell);
        selectAllRows[i].appendChild(newCell);
    }
    columns++;
}

//it will remove rows from the grid
function deleteRow() {
    tbl.deleteRow(-1);
    rows--;
}

//it will remove columns from the grid
function deleteColumn() {
    let selectAllRows = document.querySelectorAll("tr");
    for (let i = 0; i < rows; i++) {
        selectAllRows[i].deleteCell(-1);
    }
    columns--;
}

//it will use addEventListener to each cell
//also it will add and delete cells
function setProperties(cell) {

    //click on a single cell, it will call back function to change color
    cell.classList.add("noColor");
    cell.addEventListener("click", changeColor);

    //here click and hold the mouse over from a single cell and start to a differetn cell
    //so all the effected from hovered cells it will change the color to the current selected color
    cell.addEventListener("mousedown", e => {
        colored = true;
    });
    cell.addEventListener("mousemove", e => {
        if (colored) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("noColor");
        }
    });
    cell.addEventListener("mouseup", e => {
        if (colored) {
            colored = false;
        }
    });
}

//here it will move the cell in an unpacked array
let tblCells = document.getElementsByTagName("td");
let tblCellsArray = [...tblCells];

//it will call the setProperties function add properties to all cell
for (let i = 0; i < tblCellsArray.length; i++) {
    const cell = tblCellsArray[i];
    setProperties(cell);
}

//it will get the selected color
let currentColor;

function selectedColor(color) {
    currentColor = color;
}

//it will callback the function changeColor() changing cell color to the currently selected color
function changeColor() {
    this.style.backgroundColor = currentColor;
    this.classList.remove("noColor");
}

//it will fill all uncolored cells with the currently selected color 
function fillNonColored() {

    //it will put all the cells in an array
    let fillCell = document.getElementsByTagName("td");
    let fillCellarray = [...fillCell];

    //it will filter the cells that have class property
    const nonColored = fillCellarray.filter(cell => {
        return cell.classList.contains("noColor");
    });

    //it will change the background color of each uncolored cell
    nonColored.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("noColor");
    })
}

//it will fill all cells with the currently selected color
function fillAllColor() {

    //put all the cell in an unpacked array;
    let fillAllCells = document.getElementsByTagName("td");
    let fillAllCellarray = [...fillAllCells];

    //fill alll the cell to selected color
    fillAllCellarray.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("noColor");
    });
}

//it will clear all cells and restore all cells to their initial color 
function clearAll() {

    //it will put all the cell in an array;
    let allCells = document.getElementsByTagName("td");
    let allCellsrray = [...allCells];

    //it will add a no color class to cell, and it will change to starting background color
    allCellsrray.forEach(cell => {
        cell.style.backgroundColor = 'darkblue';
        cell.classList.add("noColor");
    });
}

//for the picture make it biger size
function bigImg(x) {
    x.style.height = "250px";
    x.style.width = "200px";
}

//keep to the original size
function normalImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}