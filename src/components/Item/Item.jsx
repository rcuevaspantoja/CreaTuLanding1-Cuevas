import React from "react";
import { Link } from "react-router-dom";
function Item({ producto }) {
  return (
    <div className=" item max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src={producto.imagenRuta}
        alt="imagen Producto"
        width="300px"
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ${producto.valor.toLocaleString("en-US")}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 opacity-60">
          {producto.nombreMarca}
        </p>
        <p className="nombreProducto">{producto.nombreProducto}</p>

        <div className="flex w-full justify-center">
          <Link
            to={"/producto/" + producto.id}
            className="botonCard bottom-0 inline-flex w-1/3 items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Detalle
          </Link>
          <Link className="botonCard bottom-0 inline-flex w-1/3 items-center justify-center px-3 py-2 text-sm font-medium text-white bg-lime-600 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Agregar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
