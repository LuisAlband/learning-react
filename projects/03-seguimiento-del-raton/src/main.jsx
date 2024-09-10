import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  //Monta y desmonta los componentes para ver posibles errores
  <StrictMode>
    <App />
  </StrictMode>,
)
