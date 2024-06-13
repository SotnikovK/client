import { NavLink, useParams } from "react-router-dom";
import { products } from "../Data/db";

function ProductMain({ img, name, price }) {
  return (
    <div className="product">
      <img height={200} src={img} alt="superlight" />
      <div className="product-info">
        <p className="product-title">
          <p>{name}</p>
        </p>
        <p class="product-price">Цена : {price}руб.</p>
      </div>
      <div className="product-buy">
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

export default ProductMain;
