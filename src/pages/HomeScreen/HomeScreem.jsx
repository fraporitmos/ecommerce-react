import React, { useContext, useEffect, useRef, useState } from 'react'
import CardProduct from '../../components/CardProduct'
import { ProductsContext } from '../../context/ProductsContext'
import { showErrorMessage } from '../../utils/Alert'

const HomeScreem = () => {
  const [data, setData] = useState([])
  const effectCalled = useRef(false)

  const {productsCart, setProductsCart} = useContext(ProductsContext)

  useEffect(()=>{

     if(effectCalled.current) return

     const fetchData = async () => {
        try {
          const response = await fetch("http://18.189.52.252:4043/api/product")
          if(response.ok){
            const data = await response.json()
            setData(data.products)
          }
        } catch (error) {
          console.log(error)
        }
     }

     fetchData()

     effectCalled.current = true
  },[])

  function clickItem(product){
    const existProduct = productsCart.some( item=> item._id === product._id)
    if(!existProduct){
      setProductsCart([...productsCart, product ])
    }else{
        showErrorMessage(
            "Ups, producto agregado ",
            `Revisa tu carrito de compras, parece que el producta ya esta ahí.`,
            "info"
          )
    }
  }


  return (
    <div className="flex gap-6  flex-wrap justify-around z-50">
      {
        data.length > 0 
        ?
          data.map( item=> (
            <CardProduct
            key={item._id}
            _id={item._id}
            name={item.name} 
            images={item.images}
            description={item.description}
            price={item.price}
            stock={item.stock}
            category={item.category}
            clickCard={() => clickItem(item)}
            />
        ))
        : <h1>Cargando ...</h1>
      }
    </div>

  )
}

export default HomeScreem