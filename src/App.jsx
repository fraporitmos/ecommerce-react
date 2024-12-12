import React, { createContext, useState } from 'react'
import Sidebar from './pages/Slidebar/Sidebar'
import { ProductsContext } from './context/ProductsContext'


const App = () => {
  const [productsCart, setProductsCart] = useState([])

  return (
    <>
      <ProductsContext.Provider
           value={{productsCart, setProductsCart}}>
          <Sidebar />
      </ProductsContext.Provider>
   
    </>
  )
}

export default App