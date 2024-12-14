import React, { createContext, useState } from "react";
import Sidebar from "./pages/Slidebar/Sidebar";
import { ProductsContext, ProductsBuyContext } from "./context/ProductsContext";

const App = () => {
  const [productsCart, setProductsCart] = useState([]);
  const [productsBuyCart, setProductsBuyCart] = useState([]);

  return (
    <>
      <ProductsContext.Provider value={{ productsCart, setProductsCart }}>
        <ProductsBuyContext.Provider
          value={{ productsBuyCart, setProductsBuyCart }}
        >
          <Sidebar />
        </ProductsBuyContext.Provider>
      </ProductsContext.Provider>
    </>
  );
};

export default App;
