import React, { createContext, useState } from "react";
import Sidebar from "./pages/Slidebar/Sidebar";
import { ProductsContext, ProductsBuyContext } from "./context/ProductsContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const App = () => {
  const [productsCart, setProductsCart] = useState([]);
  const [productsBuyCart, setProductsBuyCart] = useState([]);

  return (
    <>
      <ProductsContext.Provider value={{ productsCart, setProductsCart }}>
        <ProductsBuyContext.Provider
          value={{ productsBuyCart, setProductsBuyCart }}>
            <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD", locale: "es_ES" }}>
             <Sidebar />
          </PayPalScriptProvider>
        </ProductsBuyContext.Provider>
      </ProductsContext.Provider>
    </>
  );
};

export default App;
