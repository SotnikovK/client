import { NavLink, useParams } from "react-router-dom";
import { products } from "../../components/Data/db";

function Product() {
  const { id } = useParams();
  const product = products[id];
  console.log(product.image);
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
