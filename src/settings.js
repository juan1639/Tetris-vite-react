const FILAS = 19;
const COLUMNAS = 14;

const GRID = new Array(FILAS);

for (let i = 0; i < FILAS; i ++)
{
    GRID[i] = new Array(COLUMNAS);

    for (let ii = 0; ii < COLUMNAS; ii ++)
    {
        GRID[i][ii] = 0;
    }
}
console.log(GRID);

export {
    GRID
};
