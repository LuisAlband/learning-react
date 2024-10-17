const API_KEY = '4287ad07'
import valid_result   from '../mocks/Valid_result.json'
import invalid_result from '../mocks/Invalid_result.json'
export const searchMovies = async ({ search }) => {
    if(search == '') return null
    
    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
    
        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch (e) {
        throw new Error('Error searching movies')
        
    }
}