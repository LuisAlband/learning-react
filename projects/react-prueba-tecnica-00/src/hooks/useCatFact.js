import { useEffect, useState} from 'react'
import { getRandomFact } from "../services/facts"

export function useCatFact (){
    const [fact, setFact]   = useState()

    //Recuperamos y actualizamos un Fact nuevocd 
    const refreshFact = () => {
        getRandomFact().then(setFact)
    }

    //useEffect(() =>{},[])
    //Recuperamos la cita
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}