import './App.css'
import { useEffect, useState  } from 'react'


const SeguirRaton = () => {
  const[seguir, setSeguir]  = useState(false)
  const[position, setPosition] = useState({x: 0, y: 0})
  
  useEffect(() => {
    console.log('efecto', {seguir})

    const handleMove = (event) => {
      const {clientX, clientY} = event
      //console.log('handleMove', {clientX,clientY})
      setPosition({x: clientX,y: clientY})
    }

    //Si tenermos que seguir anadimos el evento
    if(seguir){
      window.addEventListener('pointermove', handleMove)
    }

    //Cleanup -> Funcion que resetea los valores del useEffect
    //Se ejecuta cada vez que cambian las dependencias
    return() => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [seguir])

return(
  <>
    <div style={{
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid #fff',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 50,
      height: 50,
      transform: `translate(${position.x}px, ${position.y}px)`
      //transform: 'tranlate(0px, 0px)'
    }} />
    <h3>Proyecto de seguir el raton</h3>
    <button onClick={() => setSeguir(!seguir)}>
      {seguir ? 'Desactivar' : 'Activar'} seguimiento del puntero
    </button>
  </>
  
)

}

function App() {
  return (
    <main>
      <SeguirRaton />
    </main>
    
  )
}

export default App
