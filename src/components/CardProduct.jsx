import React from "react";

const CardProduct = ({ name, images, description, price, stock, clickCard }) => {
  return (
    <div className="flex flex-col sm:flex-row max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="w-full sm:w-1/2  bg-cover bg-landscape">
        <img
          src={
            images ||
            "https://payit.vcu.edu/C20245_ustores/web/images/product-default-image.png"
          }
          className="object-contain h-48 sm:h-full w-full"
        />
      </div>
      <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between">
        <h1 className="text-md font-bold text-gray-900 line-clamp-3">{name}</h1>
        <p className="mt-2 text-sm line-clamp-3 text-ellipsis text-gray-600">
          {description || "No hay descripción."}
        </p>
        <div className="flex flex-col justify-between mt-3 item-center">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-gray-700">S/{price}</h1>
            <span className="bg-gray-500 rounded p-1 text-xs text-white">{`Quedan ${stock}`}</span>
          </div>

          <button
            onClick={clickCard}
            className="px-3 py-2 mt-4 text-xs font-bold text-white uppercase bg-gray-800 rounded"
          >
            Agregar a carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
