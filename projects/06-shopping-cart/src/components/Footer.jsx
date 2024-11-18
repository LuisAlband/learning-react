import { useFilters } from '../hooks/useFilters.js'
import './Footer.css'

export function Footer() {
    const {filters} = useFilters()
    return(
        <footer className='footer'>
            <h4>Prueba técnica de React 
                <span>@LuisAlba</span></h4>
                <h5>Shopping Cart con useContext & useReducer</h5>
            {
                JSON.stringify(filters, null, 2)
            }
        </footer>
    )
}