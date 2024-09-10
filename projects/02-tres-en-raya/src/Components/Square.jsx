export const Square = ({children, isSelected, updateBoard, index}) =>{
  //Añade un className para mostrar el turno
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}