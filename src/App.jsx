// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {useState, useEffect} from 'react'
import {updatePiezaBajando, updatePiezaRotando} from './functions/pieza'
import {GRID, attrPieza, oldPieza, dificultad} from './settings'

function App()
{
  const [fondo, setFondo] = useState(GRID)
  const [piezaY, setPiezaY] = useState(attrPieza.y)
  const [rotar, setRotar] = useState(attrPieza.rotacion)

  useEffect(() =>
  {
    updatePiezaBajando(true, fondo, setFondo, setPiezaY)

    setInterval(() =>
    {
      console.log('5sg')
      const bajaPieza = attrPieza
      if (!bajaPieza.activa) return
      
      oldPieza.oldY = bajaPieza.y
      bajaPieza.y ++
      setPiezaY(bajaPieza.y)
    },
    dificultad.bajaPieza)

    document.addEventListener('keydown', handleRotar)

    return () => document.removeEventListener('keydown', handleRotar)
  }, [])

  useEffect(() => updatePiezaRotando(false, fondo, setFondo, setPiezaY), [rotar])
  useEffect(() => updatePiezaBajando(false, fondo, setFondo, setPiezaY), [piezaY])

  const handleRotar = ({keyCode}) =>
  {
    if (keyCode !== 32) return

    console.log('rotar')

    oldPieza.oldRotacion = attrPieza.rotacion
    attrPieza.rotacion ++;
    if (attrPieza.rotacion >= 4) attrPieza.rotacion = 0
    
    setRotar(attrPieza.rotacion)
    console.log(attrPieza.rotacion)
  }

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
                  const valor = fondo[index][i]
                  const coorX = `col-start-${i}`
                  const estilo = `${coorX} ${coorY} border border-blue-600 border-solid`

                  return <Casilla estilo={estilo} key={i + index}>{valor}</Casilla>
                })
              )
            })
          }
        </div>
      </main>
    </>
  )
}

const Casilla = ({estilo, children}) =>
{
  if (children === 5) estilo += ' bg-neutral-800'

  return <span className={estilo}>{children}</span>
}

export default App
