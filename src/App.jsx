// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
import { GRID, plantilla, attrPieza } from './settings'

function App()
{
  const [fondo, setFondo] = useState(GRID)

  const piezaActual = () =>
  {
    const {iniX, iniY, rotacion} = attrPieza;
    const iniRotacion = rotacion * 4
    const finRotacion = iniRotacion + 4

    for (let i = iniRotacion; i < finRotacion; i ++)
    {
      const offSetX = plantilla.z[i][0]
      const offSetY = plantilla.z[i][1]

      const updateFondo = [...fondo]
      updateFondo[iniY + offSetY][iniX + offSetX] = 5
      setFondo(updateFondo)
    }
  }

  useEffect(() =>
  {
    piezaActual()
    setInterval(() => console.log('1sg'), 1000)
  }, [])

  // console.log(fondo)

  return (
    <>
      <main className='flex w-screen min-h-screen justify-center items-center bg-neutral-600'>
        <div className='grid grid-cols-14 grid-rows-19 w-[392px] h-[532px] bg-red-500 border-slate-100 border-solid border'>
          {
            GRID.map((fila, index) =>
            {
              const coorY = `row-start-${index}`

              return (
                fila.map((columna, i) =>
                {
                  const coorX = `col-start-${i}]`
                  const estilo = `${coorX} ${coorY} border border-blue-600 border-solid`

                  return <Casilla
                      estilo={estilo}
                      key={i + index}
                      fondo={fondo}
                      setFondo={setFondo}
                      index={index}
                      i={i}
                    >{fondo[index][i]}</Casilla>
                })
              )
            })
          }
        </div>
      </main>
    </>
  )
}

const Casilla = ({estilo, children, fondo, setFondo, index, i}) =>
{
  const handleClick = () =>
  {
    const updateFondo = [...fondo]
    updateFondo[index][i] = 0
    setFondo(updateFondo)
  }

  return <span className={estilo} onClick={handleClick}>{children}</span>
}

export default App
