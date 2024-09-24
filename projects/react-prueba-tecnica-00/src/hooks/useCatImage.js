import { useEffect, useState} from 'react'

//CustomHook
export function useCatImage({ fact }) {

    const CAT_PREFIX_IMAGE_URL  = `https://cataas.com/cat/says/`
    const CAT_SUFIX_IMAGE_URL   = `?fontSize=50&fontColor=red`
    const [imgText, setImg]  = useState()

    //Filtramos la cita y obtenemos la informacion que queremos
    useEffect(()=>{
        if(!fact) return
        const threeFisrtWorlds = fact.split(' ').slice(0, 3).join(' ')
        //console.log(threeFisrtWorlds)                                                      
        //const threeFisrtWorld = fact.split(' ', 3).join(' ')
        

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
    //console.log(imgText)
    return { imgText }
}