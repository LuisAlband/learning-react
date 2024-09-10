import './App.css'
import { useEffect, useState  } from 'react'
import { Circle } from './Components/Circle'



const SeguirRaton = () => {
  const[seguir, setSeguir]  = useState(false)
  const[position, setPosition] = useState({x: 0, y: 0})
  
  //Seguir el raton
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

  //Oultar en raton
  useEffect(()=>{
    document.body.classList.toggle('no-cursor', seguir)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [seguir])

return(
  <>
    <Circle able={seguir} positionx = {position.x} positiony = {position.y}></Circle>
    {/*<Circle able={seguir} positionx = {position.x+100} positiony = {position.y+100}></Circle>
    <Circle able={seguir} positionx = {position.x-100} positiony = {position.y-100}></Circle>
    <Circle able={seguir} positionx = {position.x-100} positiony = {position.y+100}></Circle>
    <Circle able={seguir} positionx = {position.x+100} positiony = {position.y-100}></Circle>*/}
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
