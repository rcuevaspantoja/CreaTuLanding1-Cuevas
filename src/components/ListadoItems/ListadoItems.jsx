import React from "react";
import Item from "../Item/Item";

function ListadoItems({ productos }) {
  return (
    <div className="flex flex-wrap justify-center">

      {productos.map((e) => (
        <Item key={e.id} producto={e} />
      ))}
    </div>
  );
}

export default ListadoItems;
