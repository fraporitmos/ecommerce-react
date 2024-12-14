import { useContext } from "react";
import { ProductsBuyContext, ProductsContext } from "../../context/ProductsContext";
import OrderCart from "../../components/OrderCart";
import { FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const CartScreen = () => {
  const { productsCart} = useContext(ProductsContext);
  const {productsBuyCart, setProductsBuyCart} = useContext(ProductsBuyContext)

  function buyWithWhatsApp() {
    let mensaje = "Hola Ecommerce Idat 👋🏻\n\nQuiero pedir los siguientes productos:";
  
    productsBuyCart.forEach((producto) => {
      mensaje += `\n\n✅Producto: ${producto.name}\n✅Cantidad: ${producto.count}\n✅Precio: S/${producto.price}\n✅Precio Total: S/${producto.count * producto.price}\n✅Imagen: ${producto.images}`;
    });
  
    // Properly format the WhatsApp URL
    const url = `https://api.whatsapp.com/send?phone=51947254438&text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Detalle del carrito</h2>

      <div className="w-full bg-white rounded-md shadow-md p-4 flex flex-col gap-4">
        {productsCart.length > 0 ? (
          productsCart.map((item) => {
            const validQuantity = item.quantity == undefined ? 1 : item.quantity;
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
                onProduct={ () => buyWithWhatsApp(item)}
              />
            );
          })
        ) : (
          <h1>Cargando ...</h1>
        )}
      </div>

      <div className="flex w-full flex-row justify-end mt-4 gap-4">
          <a
            className="group flex items-center justify-between gap-4 rounded-lg border border-gray-600 bg-gray-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
            href="#"
          >
            <span className="font-medium text-white transition-colors group-hover:text-gray-600 group-active:text-gray-500">
              Pedir por la Web
            </span>

            <span className="shrink-0 rounded-full border border-current bg-white p-2 text-gray-600 group-active:text-gray-500">
              <TbWorld size={28} />
            </span>
          </a>

          <a
            className="group flex items-center justify-between gap-4 rounded-lg border border-green-600 bg-green-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:green"
            href="#"
            onClick={()=> buyWithWhatsApp() }
          >
            <span className="font-medium text-white transition-colors group-hover:text-green-600 group-active:text-green-500">
              Pedir por WhatsApp
            </span>

            <span className="shrink-0 rounded-full border border-current bg-white p-2 text-green-600 group-active:text-green-500">
              <FaWhatsapp size={28}/>
            </span>
          </a>
      </div>

    </div>
  );
};

export default CartScreen;
