import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../assets/productos.json";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

function ItemDetailContainer() {
  const [itemDetalle, setItemDetalle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const encontrarItem = ItemList.find((item) => item.id == id);
    setItemDetalle(encontrarItem);
  }, []);

  const fakeSKU = Math.floor(Math.random() * 100000);

  return (
    <div className=" min-h-screen flex flex-col item-center">
      <div className="itemDetailContainer">
        <button disabled className="flex self-start justify-self-start m-3 bottom-0 items-center justify-center px-3 py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-800 focus:ring-4 "> Volver </button>
        <img className="imagenDetalle" src={itemDetalle.imagenRuta} />
        <div className="itemDetailDescription">
          <h3 className="font-semibold">{itemDetalle.nombreProducto}</h3>
          <p className="opacity-60">{itemDetalle.nombreMarca}</p>
          <p className="opacity-80">Categoría: {itemDetalle.categoria}</p>
          <p className="text-xs">SKU: #{fakeSKU}</p>
          <p className="text-2xl ">${new Intl.NumberFormat('en-US').format(itemDetalle.valor)}</p>

          <button disabled  className="botonCard bottom-0 inline-flex self-center w-1/3 items-center justify-center px-3 py-2 text-sm font-medium text-white bg-lime-600 rounded-lg hover:bg-lime-800 focus:ring-4 ">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
