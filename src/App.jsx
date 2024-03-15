// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {useState, useEffect} from 'react'
import {updatePieza} from './functions/pieza'
import {GRID, attrPieza, oldPieza} from './settings'

function App()
{
  const [fondo, setFondo] = useState(GRID)
  const [piezaY, setPiezaY] = useState(attrPieza.y)
  const [rotar, setRotar] = useState(attrPieza.rotacion)

  useEffect(() =>
  {
    updatePieza(true, fondo, setFondo)

    /* document.addEventListener('keydown', () =>
    {
      attrPieza.rotacion ++;
      if (attrPieza.rotacion >= 4) attrPieza.rotacion = 0

      setRotar(attrPieza.rotacion)
    }) */

    setInterval(() =>
    {
      console.log('5sg')
      const bajaPieza = attrPieza
      oldPieza.oldY = bajaPieza.y
      bajaPieza.y ++
      setPiezaY(bajaPieza.y)
    } , 1000)
  }, [])

  useEffect(() =>
  {
    updatePieza(false, fondo, setFondo)
  }, [piezaY, rotar])

  // console.log(fondo)

  return (
    <>
      <main className='flex w-screen min-h-screen justify-center items-center bg-neutral-600'>
        <div className='grid grid-cols-14 grid-rows-19 w-[392px] h-[532px] bg-red-500 border-slate-100 border-solid border'>
          {
            fondo.map((fila, index) =>
            {
              const coorY = `row-start-${index}`

              return (
                fila.map((columna, i) =>
                {
                  const coorX = `col-start-${i}`
                  let estilo

                  if (fondo[index][i] === 5)
                  {
                    estilo = `${coorX} ${coorY} border border-blue-600 border-solid bg-neutral-800`
                  }
                  else
                  {
                    estilo = `${coorX} ${coorY} border border-blue-600 border-solid`
                  }

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
