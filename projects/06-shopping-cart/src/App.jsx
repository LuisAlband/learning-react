import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Cart } from "./components/Cart.jsx"
import { products as initialProducts } from "./mocks/products.json"
import { IS_DEVELOPMENT } from "./config.js"
import { useFilters } from "./hooks/useFilters.js"
import { CartProvider } from "./context/cart.jsx"




function App() {

  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Products products={filteredProducts}  />
      { IS_DEVELOPMENT && <Footer /> }
    </CartProvider>
    
  )
}

export default App
