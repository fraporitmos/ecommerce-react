import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { ProductsBuyContext, ProductsContext } from "../context/ProductsContext";
import {useNavigate} from 'react-router-dom'
import { useContext } from "react";

export const PaypalWrapper = ({ showSpinner }) => {
    //.env
    const [{ isPending }] = usePayPalScriptReducer();
    const {productsBuyCart, setProductsBuyCart} = useContext(ProductsBuyContext)
    const { setProductsCart} = useContext(ProductsContext)

    const navigate = useNavigate()
    const style = {"layout":"horizontal" };

    const registerOrder = async () => {

        try {
         const objeto = {
            arrayProducts: productsBuyCart.map( (product) => ({
                productId: product._id,
                quantity: product.count
            }))
         }

          const response = await fetch("http://18.189.52.252:4043/api/cart",{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(objeto)
          })

          if(response.ok){
            setProductsBuyCart([])
            setProductsCart([])
            const data = await response.json()
            navigate("/success")
          }
        } catch (error) {
          console.log(error)
        }
     }


    function createOrder() {
        return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cart: [
                    {
                        sku: "1blwyeo8",
                        quantity: 2,
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((order) => {
                return order.id;
            });
    }

    function onApprove(data) {
        // replace this url with your server
        return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID,
            }),
        })
            .then((response) => response.json())
            .then((orderData) => {
               console.log(orderData)
               registerOrder()
            });
    }
    
    return (
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style]}
                fundingSource={undefined}
                createOrder={createOrder}
                onApprove={onApprove}
                className="w-64 h-14 mt-4"
            />
        </>
    );
}
