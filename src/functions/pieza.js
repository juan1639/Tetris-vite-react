import {
  FILAS,
  COLUMNAS,
  plantilla,
  piezasStringArray,
  attrPieza,
  oldPieza,
  pausas
} from "../settings";

export const updatePiezaRotando = (init, fondo, setFondo, setPiezaY) =>
{
  borrarDibujar(false, init, fondo, setFondo, true)
  borrarDibujar(true, init, fondo, setFondo, true)
}

export const updatePiezaBajando = (init, fondo, setFondo, setPiezaY) =>
{
  if (checkColisiones(false, fondo))
  {
    dejaRastroPiezaYNextPieza(fondo, setFondo, setPiezaY)
    return
  }
  
  borrarDibujar(false, init, fondo, setFondo, false)
  borrarDibujar(true, init, fondo, setFondo, false)
}

const borrarDibujar = (dibujar, init, fondo, setFondo, rotando) =>
{
  const {oldX, oldY, oldRotacion} = oldPieza
  const {iniX, iniY, x, y, rotacion} = attrPieza

  console.log(rotacion, oldRotacion)

  const rotaciones = setRotaciones(dibujar, rotacion, oldRotacion, rotando)
  let iniRotacion = rotaciones[0]
  let finRotacion = rotaciones[1]

  const updateFondo = [...fondo]

  for (let i = iniRotacion; i < finRotacion; i ++)
  {
    const offSetX = plantilla[attrPieza.id][i][0]
    const offSetY = plantilla[attrPieza.id][i][1]

    const args = setUpdatesFondo(dibujar, rotando, init, iniY, iniX, y, x, oldY, oldX, offSetX, offSetY)

    updateFondo[args[0]][args[1]] = args[2] 
  }

  setFondo(updateFondo)
}

const setRotaciones = (dibujar, rotacion, oldRotacion, rotando) =>
{
  if (rotando)
  {
    if (!dibujar)
    {
      return [oldRotacion * 4, oldRotacion * 4 + 4]
    }
    else
    {
      return [rotacion * 4, rotacion * 4 + 4]
    }
  }
  else
  {
    return [rotacion * 4, rotacion * 4 + 4]
  }
}

const setUpdatesFondo = (dibujar, rotando, init, iniY, iniX, y, x, oldY, oldX, offSetX, offSetY) =>
{
  if (rotando)
  {
    if (dibujar)
    {
      if (init)
      {
        return [iniY + offSetY, iniX + offSetX, 5] // 5 = piezaActual
      }
      else
      {
        return [y + offSetY, x + offSetX, 5] // 5 = piezaActual
      }
    }
    else
    {
      return [y + offSetY, x + offSetX, 0] // 0 = fondo (sin rastro)
    }
  }
  else
  {
    if (dibujar)
    {
      if (init)
      {
        return [iniY + offSetY, iniX + offSetX, 5] // 5 = piezaActual
      }
      else
      {
        return [y + offSetY, x + offSetX, 5] // 5 = piezaActual
      }
    }
    else
    {
      return [oldY + offSetY, oldX + offSetX, 0] // 0 = fondo (sin rastro)
    }
  }
}

const checkColisiones = (rotando, fondo) =>
{
  const {x, y, rotacion} = attrPieza

  if (!rotando)
  {
    const iniRotacion = rotacion * 4
    const finRotacion = rotacion * 4 + 4

    for (let i = iniRotacion; i < finRotacion; i ++)
    {
      const offSetX = plantilla[attrPieza.id][i][0]
      const offSetY = plantilla[attrPieza.id][i][1]

      if (y + offSetY >= FILAS) return true

      if (fondo[y + offSetY][x + offSetX] === 1) return true
    }
  }
}

const dejaRastroPiezaYNextPieza = (fondo, setFondo, setPiezaY) =>
{
  const iniRotacion = attrPieza.rotacion * 4
  const finRotacion = attrPieza.rotacion * 4 + 4
  
  const rastroFondo = [...fondo]

  for (let i = iniRotacion; i < finRotacion; i ++)
  {
    const offSetX = plantilla[attrPieza.id][i][0]
    const offSetY = plantilla[attrPieza.id][i][1]

    rastroFondo[oldPieza.oldY + offSetY][attrPieza.x + offSetX] = 7
  }
  
  setFondo(rastroFondo)
  attrPieza.activa = false

  setTimeout(() =>
  {
    attrPieza.id = piezasStringArray.charAt(Math.floor(Math.random()*piezasStringArray.length))
    attrPieza.activa = true
    attrPieza.y = attrPieza.iniY
    attrPieza.x = attrPieza.iniX
    oldPieza.oldY = attrPieza.iniY
    oldPieza.oldX = attrPieza.iniX
    setPiezaY(attrPieza.y)
  },
  pausas.entrePiezas)
}
