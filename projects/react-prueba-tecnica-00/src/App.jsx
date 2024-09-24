import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
    const { fact, refreshFact } = useCatFact()
    const { imgText }           = useCatImage({fact})
 
    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {/*<section>*/}
               {fact && <p>{fact}</p>}
                {imgText && <img src={`https://cataas.com/cat/says/${imgText.threeFisrtWorlds}?fontSize=50&fontColor=red`} width={500} height={500} alt={`Imagen obtenida usando
                las palabras: ${imgText.threeFisrtWorlds}`}></img> } 
            {/*</section>*/}
            
        </main>
        
    )
}