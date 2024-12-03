import React from "react";

const CardProduct = ({name,img,description, price, onClick}) => {
  return (
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="w-1/3 bg-cover bg-landscape">
        <img src={img || "https://payit.vcu.edu/C20245_ustores/web/images/product-default-image.png"} className="h-72"  />
      </div>

      <div className="w-2/3 p-4">
        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
        <p className="mt-2 text-sm line-clamp-3 text-ellipsis text-gray-600">
            {description || "No hay descripción."}
        </p>
        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-xl font-bold text-gray-700">S/{price}</h1>
          <button onClick={onClick} className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
            Agregar a carrito 
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
