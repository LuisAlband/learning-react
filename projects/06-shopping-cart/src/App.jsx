import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { products as initialProducts } from "./mocks/products.json"
import { IS_DEVELOPMENT } from "./config.js"
import { useFilters } from "./hooks/useFilters.js"




function App() {

  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
    <Header />
    <Products products={filteredProducts}  />
    { IS_DEVELOPMENT && <Footer /> }
    </>
    
  )
}

export default App
