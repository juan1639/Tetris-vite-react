import { plantilla, attrPieza, oldPieza } from "../settings";

export const updatePieza = (init, fondo, setFondo) =>
{
    borrarDibujar(false, init, fondo, setFondo)
    borrarDibujar(true, init, fondo, setFondo)
}

const borrarDibujar = (dibujar, init, fondo, setFondo) =>
{
    const {oldX, oldY, oldRotacion} = oldPieza
    const {iniX, iniY, x, y, rotacion} = attrPieza

    let iniRotacion
    let finRotacion

    if (!dibujar)
    {
        iniRotacion = oldRotacion * 4
        finRotacion = iniRotacion + 4
    }
    else
    {
        iniRotacion = rotacion * 4
        finRotacion = iniRotacion + 4
    }

    for (let i = iniRotacion; i < finRotacion; i ++)
    {
      const offSetX = plantilla.z[i][0]
      const offSetY = plantilla.z[i][1]

      const updateFondo = [...fondo]

      if (dibujar)
      {
        if (init)
        {
            updateFondo[iniY + offSetY][iniX + offSetX] = 5 // 5 = piezaActual
        }
        else
        {
            updateFondo[y + offSetY][x + offSetX] = 5 // 5 = piezaActual
        }
      }
      else
      {
        updateFondo[oldY + offSetY][oldX + offSetX] = 0 // 0 = fondo (sin rastro)
      }

      setFondo(updateFondo)
    }
}
