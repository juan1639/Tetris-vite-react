import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GRID } from './settings'

function App()
{
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='flex w-screen min-h-screen justify-center items-center bg-neutral-600'>
        <div className='grid grid-cols-14 grid-rows-19 w-[420px] h-[570px] bg-red-500'>
          {
            GRID.map((fila, index) =>
            {
              const coorY = `row-start-${index}`

              return (
                fila.map((columna, index) =>
                {
                  const coorX = `col-start-${index}`
                  const coorXY = coorX + ' ' + coorY

                  return (
                    <span className={coorXY}>{coorXY}</span>
                  )
                })
              )
            })
          }
        </div>
      </main>
    </>
  )
}

export default App
