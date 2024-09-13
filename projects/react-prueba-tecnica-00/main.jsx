//Este es el primer archivo que se va a cargar de la aplicacion
//Importamos el createRoot
import { createRoot } from 'react-dom/client'

import { App } from './src/App.jsx'

//Declaro que aqui es donde quiero cargar el resto de la aplicacion
const rootv = createRoot(document.getElementById('app'))
rootv.render(<App />)