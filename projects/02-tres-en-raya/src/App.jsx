import { useEffect, useState } from 'react'
import confetti from "canvas-confetti"
import './App.css'

import { Square } from './Components/Square.jsx'
import { TURNS, WINNER_COMBOS } from './constants.js'
import { WinnerModal } from './Components/WinnerModal.jsx'
import {saveGameToStorage, resetGameToStorage} from './logic/storage/index.js'

//La app se ejecuta cada vez que modificamos un valor, a modo de render
function App() {

  const [board, setBoard] = useState(() => {
    const newboardFromStorage = window.localStorage.getItem('board')
    //Si hay localStorage inicializamos el estado con eso,
    // si no por defecto ||TERNARIA PARA EVALUAR||
    return newboardFromStorage ? JSON.parse(newboardFromStorage) :
    Array(9).fill(null)
  }) 
  //const [board, setBoard] = useState(['x','o','o','x','x','o','o','x','o'])

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    //Las ?? evaluan si lo primero es null o undefined
    return turnFromStorage ?? TURNS.X
  })

  //null no hay ganador, false empate, true ganador
  const [winner, setWinner] = useState(null)
  const checkWinner = (boardToCheck) =>{
    //Revisamos combinaciones ganadoras
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ){
        //devolvemos ganador
        return boardToCheck[a]
      }
    }
    //No hay ganador
    return null

  }

  const checkEndGame = (newBoard) => {
    //si todas las squares del tablero son != null no hay mas posiciones
    return newBoard.every((square) => square!= null)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameToStorage()
  }

  const updateBoard = (index) =>{
    
    //Si ya tiene algo no modificamos
    //Si hay ganador no modificamos
    if(board[index] || winner) return

    //Siempre tenemos que crear una nueva variable y modificar el estado
    //Nunca modificar el estado directamente
    const newBoard = [... board]
    newBoard[index]= turn
    setBoard(newBoard)
    

    //Creamos un turno opuesto al actual
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    //Cambiamos el turno
    setTurn(newTurn)

    //Revisamos ganador
    const newWinner = checkWinner(newBoard)  
    if(newWinner){
      //Aqui modificamos este estado, pero esto es asincrono
      // es independitente al resto de la ejecuion y no ocurre antes de la misma
      setWinner(newWinner) 
      confetti()
    }else if(checkEndGame(newBoard)){
      console.log("Llego aqui")
      setWinner(false)
    }
  }

  useEffect(() => {
    console.log('useEffect')
  }, [winner])

  useEffect(() => {
     //Guardar partida en el localStorage
     saveGameToStorage({board: newBoard,turn: newTurn})
  }, [board, turn])

  return (
    <main className='board'>
      <h1>Tres en Raya</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index)=> {
            //El index es el identificador de cada celda 0=>8
           return(
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
           )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

        <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
    
  ) 
}

export default App
