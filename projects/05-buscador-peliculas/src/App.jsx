import { useEffect, useState, useRef } from 'react'
import './App.css'
import{ Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'


 function useSearch () {
  //Valor del formulario
  const [search, updateSearch] = useState('')
  //Error del formulario
  const [error, setError] = useState(null)
  //Indica si es el primer Input para no mostrar errores
  const isFirstInput = useRef(true)

  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = search == ''
      return
    }
    if(search == ''){
      setError('No se puede buscar una película vacía')
      return
    }

    if(search.match(/^\d+$/)){
      setError('No se puede busacr una película con un número')
      return
    }
    
    setError(null)
  }, [search])
  return {search, updateSearch, error}
 }


function App() {

  const [sort,setSort] = useState(false)

  //CustomHook
  const { search, updateSearch, error } = useSearch()
  const {movies, loading, getMovies} = useMovies({search, sort})

  //Formulario NO contolado
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleSort = () => {
    setSort(!sort)
  }

  //Formulario controlado
  const handleChange = (event) => {
    const newQuery = event.target.value
    //Prevalidacion
    if(newQuery.startsWith(' ')) return
    //console.log(updateSearch)
    updateSearch(event.target.value)
    
  }

  return (
    <div className='page'>
      <header>
        <h1>Prueba Tecnica Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input 
          style={{  border: '4px solid transparent',
                    borderColor: error ? 'red' : 'transparent'}}
          onChange={handleChange} value={search} name="query" placeholder='Avengers, Star Wars, Alien ...'/>
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color : 'red '}} className='error'>{error}</p>}
      </header>
      
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
