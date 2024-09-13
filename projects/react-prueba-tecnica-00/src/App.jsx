import {useState, useEffect} from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`

export function App () {
    
    const [fact, setFact]   = useState()
    const [imgText, setImg]  = useState()

    //useEffect(() =>{},[])
    //Recuperamos la cita
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            setFact(fact)
        }) 
    }, [])

    //Filtramos la cita y obtenemos la informacion que queremos
    useEffect(()=>{
        if(!fact) return
        const threeFisrtWorlds = fact.split(' ').slice(0, 3).join(' ')                                                       
            //const threeFisrtWorld = fact.split(' ', 3).join(' ')
            //console.log(threeFisrtWorlds)

            //Separamos el string de fact por espacios, y lo introducimos en un array
            //Nos quedamos con las 3 primeras posicions del array desde el 0
            //Juntamos las posiciones de un array en un string separado por espacios
            //mdn para busacr info

            /*fetch(`https://cataas.com/cat/says/${threeFisrtWorlds}?size=50&color=red&json=true`)
                .then(res => res.json())
                .then(response =>{
                    console.log(response)
                    const { url } = response
                    //console.log(url)
                })*/

            //Cuando recupero el json no me devuelve la url, asique me guardo la url de la imagen diractamente
            setImg({threeFisrtWorlds})
    } , [fact])

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
               {fact && <p>{fact}</p>}
                {imgText && <img src={`https://cataas.com/cat/says/${imgText.threeFisrtWorlds}?fontSize=50&fontColor=red`} width={500} height={500} alt={`Imagen obtenida usando
                las palabras: ${imgText.threeFisrtWorlds}`}></img> } 
            </section>
            
        </main>
        
    )
}