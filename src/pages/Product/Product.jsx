import { NavLink, useParams } from "react-router-dom";
import db from "../../components/Data/db.json";
import React from "react";

function Product() {
  const { id } = useParams();
  const product = db.devices[id];

  return (
    <main className="main-prod">
      <div className="prod">
        <div>
          <img src={product.image} alt="" />
        </div>
        <div className="prod-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button>Купить</button>
        </div>
      </div>
    </main>
  );
}

export default Product;
