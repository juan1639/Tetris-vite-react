import { plantilla, attrPieza, oldPieza } from "../settings";

export const updatePiezaRotando = (init, fondo, setFondo) =>
{
    borrarDibujar(false, init, fondo, setFondo, true)
    borrarDibujar(true, init, fondo, setFondo, true)
}

export const updatePieza = (init, fondo, setFondo) =>
{
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

  for (let i = iniRotacion; i < finRotacion; i ++)
  {
    const offSetX = plantilla.z[i][0]
    const offSetY = plantilla.z[i][1]

    const updateFondo = [...fondo]

    const args = setUpdatesFondo(dibujar, rotando, init, iniY, iniX, y, x, oldY, oldX, offSetX, offSetY)

    updateFondo[args[0]][args[1]] = args[2] 

    setFondo(updateFondo)
  }
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
