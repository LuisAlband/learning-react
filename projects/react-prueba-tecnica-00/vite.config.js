//Definimos configuracion
import { defineConfig } from "vite";

//Importar el plugin de react
import react from '@vitejs/plugin-react'

//Exportamos por defecto en defineconfig
//Y anadimos el plugin de react
export default defineConfig({
    plugins: [react()]
})