// Solar Team
//Natalia Solar
//Game of life


const  ALIVE = 1;
const DEAD = 0;
const maxX = 700;//grid dimentions
const maxY =700;


quit = false;


let currentGrid = [];
let newGrid = [];
//create 2D array
for (let i = 0; i < maxY; i++) {
    newGrid[i] = new Array(maxY);
}

//initialize the grid
initializeTheGrid(newGrid); 
//start the game
playTheGame();



/**
 * Runs the game. Copies new grid to the current grid, draws the current grid in canvas, applies game rules to every cell,
 * detects keypresses and calls according functions, and calls itself again
 */
function playTheGame(){

    currentGrid = JSON.parse(JSON.stringify(newGrid));//copying the grid to current grid

    drawTheGrid(currentGrid);

    for (let y = 1; y < maxY - 1; y++)
    {
        for (let x = 1; x < maxX - 1; x++)
        {
            let neighbors = aliveNeighborsNumber(currentGrid, x, y);

            applyRulesOfLife(currentGrid, newGrid, x, y, neighbors);
        }
    }
    //detect keypresses
    document.addEventListener('keydown', (event) => {
        switch (event.key)
        {
            case 'q'||'Q':
                quit = true;
                break;
            case 'r'||'R':
                initializeTheGrid(newGrid);
                break;
            case 'f'||'F':
                fillUpEveryCell(newGrid);
                break;
            case 'a'||'A':
                fillUpEverySecondCell(newGrid);
                break;  
            case 'b'||'B':
                fillUpEveryTenthCell(newGrid);
                break;
            case 'c'||'C':
                fillUpEvery50Cell(newGrid);
                break;
            case 'd'||'D':
                fillUpEvery55and10Cell(newGrid);
                break;
            case 'e'||'E':
                fillUpEvery35Cell(newGrid);
                break;
            default:
                break;
        }
    });


    if (quit) return;
    requestAnimationFrame(playTheGame);
}

/**
 * Initializes the grid randomly with alive and dead cells
 * @param {*} grid the grid to be initialized
 */
function initializeTheGrid(grid)
{
    for (let y = 0; y < maxY; y++) {
        for (let x = 0; x < maxX; x++) {
            if (Math.floor(Math.random()*101) < 15)
                grid[y][x] = ALIVE;
            else
                grid[y][x] = DEAD;
        }
    }
}

/**
 * Draws the content of the grid with alive and dead cells to the html canvas
 * @param {*} grid the grid to be drawn
 */
function drawTheGrid(grid) { 
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(1, 1, 700, 700); //this should clear the canvas ahead of each redraw
    for (let j = 1; j < maxX; j++) { 
        for (let k = 1; k < maxY; k++) {
            if (grid[j][k] === ALIVE) {
                ctx.fillStyle = "#0000FF";
                ctx.fillRect(j, k, 1, 1);
            }
        }
    }
}

    


/**
 * Fills up every cell with alive cells
 * @param {*} grid the grid to be filled
 */
function fillUpEveryCell(grid)
{
    
    for (let y = 0; y < maxY; y++)
    {
        for (let x = 0; x < maxX; x++)
        {
            grid[y][x] =ALIVE ;
        }
    }
}


  /**
   * fills up every second cell of a row with alive cells, the rest are dead
   * @param {*} grid the grid to be filled
   */
  function fillUpEverySecondCell(grid)
{
    
    for (let y = 0; y < maxY; y++)
    {
        for (let x = 0; x < maxX; x++)
        {
            if(y%2 === 0) grid[y][x] = ALIVE;
            else grid[y][x] = DEAD;
        }
    }
}


/**
 * Filles every 10th cell of a column with alive cell, the rest are dead
 * @param {*} grid the grid to be filled
 */
function fillUpEveryTenthCell(grid)
{
    
    for (let y = 0; y < maxY; y++)
    {
        for (let x = 0; x < maxX; x++)
        {
            if(x%10 === 0) grid[y][x] = ALIVE;
            else grid[y][x] = DEAD;
        }
    }
}

/**
 * fills up every 50th rows cell with alive cell, the rest are dead
 * @param {*} grid the grid to be filled
 */
function fillUpEvery50Cell(grid)
{
    
    for (let y = 0; y < maxY; y++)
    {
        for (let x = 0; x < maxX; x++)
        {
            if(y%50 === 0) grid[y][x] = ALIVE;
            else grid[y][x] = DEAD;
        }
    }
}

/**
 * Filles every 55th column cell and every 10th row cell with alive cells, the rest are dead
 * @param {*} grid the grid to be filled
 */
function fillUpEvery55and10Cell(grid)
{
    
    for (let y = 0; y < maxY; y++)
    {
        for (let x = 0; x < maxX; x++)
        {
            if(x%55 === 0 || y%10 === 0 ) grid[y][x] = ALIVE;
            else grid[y][x] = DEAD;
        }
    }
}

/**
 * Filles every 35th cell in a row and column with alive cell, the rest are dead
 * @param {*} grid the grid to be filled
 */
function fillUpEvery35Cell(grid)
{
    
    for (let y = 0; y < maxY; y++)
    {
        for (let x = 0; x < maxX; x++)
        {
            if(x%35 === 0 || y%35 === 0 ) grid[y][x] = ALIVE;
            else grid[y][x] = DEAD;
        }
    }
}



/**
 * Counts the number of alive neighbours of a cell and returns it
 * @param {*} grid the grid to be counted from
 * @param {*} x column number
 * @param {*} y row number
 */
function aliveNeighborsNumber(grid, x, y)
{
    
    let neighbors = 0;
    for (let i = -1; i <= 1; i++)
    {
        for (let j = -1; j <= 1; j++)
        {
            neighbors += grid[y + i][x + j];
        }
    }

    neighbors -= grid[y][x];
    return neighbors;
}

/**
 * Applies game rules to every cell and saves new cell status in new grid (next generarion)
 * @param {*} currentGrid the grid to be rules applied to
 * @param {*} newGrid the grid with new generarion of cells
 * @param {*} x column number
 * @param {*} y row number
 * @param {*} neighbors number of alive neigbours of a cell
 */
function applyRulesOfLife(currentGrid, newGrid, x, y, neighbors)
{
    
    if ((currentGrid[y][x] === ALIVE) && (neighbors < 2))
        newGrid[y][x] = DEAD;
    else if ((currentGrid[y][x] === ALIVE) && (neighbors > 3))
        newGrid[y][x] = DEAD;
    else if ((currentGrid[y][x] === DEAD) && (neighbors == 3))
        newGrid[y][x] = ALIVE;
    else
        newGrid[y][x] = currentGrid[y][x];
}
 


