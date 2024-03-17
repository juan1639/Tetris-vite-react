const FILAS = 19;
const COLUMNAS = 14;

const GRID = new Array(FILAS);

for (let i = 0; i < FILAS; i ++)
{
    GRID[i] = new Array(COLUMNAS);

    for (let ii = 0; ii < COLUMNAS; ii ++)
    {
        GRID[i][ii] = 0; // 0 = fondo (sin rastro)
        // if (i === 17 || i === 18) GRID[i][ii] = 1
    }
}
console.log(GRID);

const plantilla =
{
    z: [[0, 0], [0, -1], [-1, -1], [1, 0],
        [0, 0], [0, -1], [-1, 0], [-1, 1],
        [0, 0], [0, -1], [-1, -1], [1, 0],
        [0, 0], [0, -1], [-1, 0], [-1, 1]
    ],
    s: [[0, 0], [0, -1], [1, -1], [-1, 0],
        [0, 0], [0, 1], [-1, -1], [-1, 0],
        [0, 0], [0, -1], [1, -1], [-1, 0],
        [0, 0], [0, 1], [-1, -1], [-1, 0]
    ],
    l: [[0, 0], [0, -1], [0, -2], [1, 0],
        [0, 0], [-1, 0], [1, 0], [1, -1],
        [0, 0], [0, -1], [0, -2], [-1, -2],
        [0, 0], [0, -1], [1, -1], [2, -1]
    ],
    j: [[0, 0], [1, 0], [1, -1], [1, -2],
        [0, 0], [0, -1], [-1, -1], [-2, -1],
        [0, 0], [0, -1], [0, -2], [1, -2],
        [0, 0], [0, -1], [1, 0], [2, 0]
    ],
    o: [[0, 0], [0, -1], [1, -1], [1, 0],
        [0, 0], [0, -1], [1, -1], [1, 0],
        [0, 0], [0, -1], [1, -1], [1, 0],
        [0, 0], [0, -1], [1, -1], [1, 0]
    ],
    i: [[0, 0], [-1, 0], [1, 0], [2, 0],
        [0, 0], [0, -1], [0, -2], [0, -3],
        [0, 0], [-1, 0], [1, 0], [2, 0],
        [0, 0], [0, -1], [0, -2], [0, -3]
    ],
    t: [[0, 0], [0, -1], [-1, 0], [1, 0],
        [0, 0], [0, -1], [0, -2], [-1, -1],
        [0, 0], [-1, 0], [1, 0], [0, 1],
        [0, 0], [0, -1], [0, -2], [1, -1]
    ],
};

const piezasStringArray = 'zsljoit'

const attrPieza =
{
    iniX: 7,
    iniY: 2,
    x: 7,
    y: 2,
    rotacion: 0,
    activa: true,
    id: piezasStringArray.charAt(Math.floor(Math.random()*piezasStringArray.length))
};

const oldPieza =
{
    oldX: 7,
    oldY: 2,
    oldRotacion: 0
};

const dificultad =
{
    bajaPieza: 500
};

const pausas =
{
    entrePiezas: 1100
}

export {
    FILAS,
    COLUMNAS,
    GRID,
    plantilla,
    piezasStringArray,
    attrPieza,
    oldPieza,
    dificultad,
    pausas
};
