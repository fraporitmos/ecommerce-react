import { useContext } from "react";
import {
  ProductsBuyContext,
  ProductsContext,
} from "../../context/ProductsContext";
import OrderCart from "../../components/OrderCart";
import { FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { PaypalWrapper } from "../../components/PaypalWrapper";
import Lottie from "lottie-react";
import Empty from "../../assets/empty.json";

const CartScreen = () => {
  const { productsCart } = useContext(ProductsContext);
  const { productsBuyCart } = useContext(ProductsBuyContext);

  function buyWithWhatsApp() {
    let mensaje =
      "Hola Ecommerce Idat 👋🏻\n\nQuiero pedir los siguientes productos:";
    console.log(productsBuyCart);
    productsBuyCart.forEach((producto) => {
      mensaje += `\n\n✅Producto: ${producto.name}\n✅Cantidad: ${
        producto.count
      }\n✅Precio: S/${producto.price}\n✅Precio Total: S/${
        producto.count * producto.price
      }\n✅Imagen: ${producto.images}`;
    });
    const url = `https://api.whatsapp.com/send?phone=51947254438&text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
        {
          productsCart.length > 0 
          ?
          <h2 className="text-2xl font-bold mb-4">Detalle del carrito</h2>
          :   <h2 className="text-2xl font-bold mb-4">Carrito vacio</h2>
        }

      <div className="w-full bg-white rounded-md shadow-md p-4 flex flex-col gap-4">
        {productsCart.length > 0 ? (
          productsCart.map((item) => {
            const validQuantity =
              item.quantity == undefined ? 1 : item.quantity;
            return (
              <OrderCart
                key={item._id}
                _id={item._id}
                name={item.name}
                images={item.images}
                description={item.description}
                price={item.price}
                stock={item.stock}
                category={item.category}
                quantity={validQuantity}
                onProduct={() => buyWithWhatsApp(item)}
              />
            );
          })
        ) : (
            <div className="flex justify-center items-center">
                   <Lottie
                    className="top-0 left-0 w-96 h-96"
                    animationData={Empty}
                    loop={true}
                
                  />

            </div>
        )}
      </div>

        {
          productsCart.length >0 ?
          <section className="flex justify-end flex-col items-end mt-8">
         

            <a
              className="group flex w-64 h-14 items-center justify-between gap-4 rounded-lg border border-green-600 bg-green-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:green"
              href="#"
              onClick={() => buyWithWhatsApp()}
            >
              <span className="font-medium text-white transition-colors group-hover:text-green-600 group-active:text-green-500">
                Pedir por WhatsApp
              </span>
  
              <span className="shrink-0 rounded-full border border-current bg-white p-2 text-green-600 group-active:text-green-500">
                <FaWhatsapp size={28} />
              </span>
            </a>

          <PaypalWrapper showSpinner={false} />

  

      
        </section>
        : 
         null
        }
        
    </div>
  );
};

export default CartScreen;
