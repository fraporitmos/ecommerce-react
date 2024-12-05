import React, { useEffect, useRef, useState } from 'react'
import CardProduct from '../../components/CardProduct'

const HomeScreem = () => {
  const [data, setData] = useState([])
  const effectCalled = useRef(false)

  useEffect(()=>{
     if(effectCalled.current) return

     const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:4043/api/product")
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


  return (
    <div className="flex gap-6 flex-wrap justify-around ">
      {
        data.length > 0 
        ?
          data.map( item=> (
            <CardProduct
            name={item.name} 
            images={item.images}
            description={item.description}
            price={item.price}
            stock={item.stock}
            />
        ))
        : <h1>Cargando ...</h1>
      }
    </div>

  )
}

export default HomeScreem