import { useContext, useEffect, useRef, useState } from "react";
import {
  ProductsBuyContext,
  ProductsContext,
} from "../context/ProductsContext";
import { showErrorMessage } from "../utils/Alert";


const OrderCart = ({
  _id,
  name,
  images,
  description,
  price,
  oldPrice,
  discount,
  stock,
  quantity
}) => {
  const [count, setCount] = useState(quantity);
  const { productsCart } = useContext(ProductsContext);
  const { productsBuyCart, setProductsBuyCart } = useContext(ProductsBuyContext);
  const effectCalled = useRef(false);



  useEffect(() => {
    if (effectCalled.current) return;
    var actualCarrito = productsCart.map((item) => {
      return { ...item, count: 1 };
    });
    setProductsBuyCart(actualCarrito);

    effectCalled.current = true;
  }, []);

  function onDecrease() {
    if (count > 1) {
      setCount(count - 1);
      const updateProducts = productsBuyCart.map((item) =>
        item._id === _id ? { ...item, count: item.count - 1 } : item
      );
      setProductsBuyCart(updateProducts);
    }
  }

  function onIncrease() {
    if (count < stock) {
      setCount(count + 1);

      const updateProducts = productsBuyCart.map((item) =>
        item._id === _id ? { ...item, count: item.count + 1 } : item
      );
      setProductsBuyCart(updateProducts);
    }else{
      showErrorMessage(
        "Error",
        `Solo hay  ${stock} unidades de ${name} disponibles de este producto.`,
        "error"
      )
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md">
    
      <div className="w-24 h-24 md:w-32 md:h-32">
        <img
          src={
            images ||
            "https://payit.vcu.edu/C20245_ustores/web/images/product-default-image.png"
          }
          alt={name}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <h1 className="text-sm font-bold text-gray-900 line-clamp-2">{name}</h1>
        <p className="text-xs text-gray-600 line-clamp-2">
          {description || "Sin descripción disponible"}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-red-500">S/{price}</span>
          {oldPrice && (
            <span className="text-sm line-through text-gray-500">
              S/{oldPrice}
            </span>
          )}
          {discount && (
            <span className="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-md">
              -{discount}%
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDecrease()}
            className="w-8 h-8 flex text-2xl items-center justify-center  border-2 border-black rounded hover:bg-gray-200"
          >
            −
          </button>
          <span className="text-xl">{count}</span>
          <button
            onClick={() => onIncrease()}
            className="w-8 h-8 flex text-2xl items-center justify-center border-2 border-black rounded hover:bg-gray-200"
          >
            +
          </button>
        </div>
        <span className="text-xl text-gray-500">Máx {stock} unidades</span>
      </div>
    </div>
  );
};

export default OrderCart;
