import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import CardProduct from '../../components/CardProduct'

const CartScreen = () => {
  const {productsCart, setProductsCart} = useContext(ProductsContext)

  useEffect(() => {
  
  
  }, [])
  

  function clickSubTotalProduct(subTotalProduct){
    var id = 0
    var count = 0
    
  }

  return (

    <div className="flex gap-6  flex-wrap justify-around z-50">
    {
      productsCart.length > 0 
      ?
      productsCart.map( item=> (
          <CardProduct
          key={item.id}
          name={item.name} 
          images={item.images}
          description={item.description}
          price={item.price}
          stock={item.stock}
          clickCard={() => clickItem(item)}
          />
      ))
      : <h1>Cargando ...</h1>
    }
  </div>

  )
}

export default CartScreen