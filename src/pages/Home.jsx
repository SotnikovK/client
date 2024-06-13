import Filter from "../components/Filter/Filter";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDevicesRequest,
  fetchDevicesSuccess,
  fetchDevicesFailure,
} from "../redux/actions/devices";
import { setSortFilter } from "../redux/actions/filter";
import { NavLink } from "react-router-dom";

import db from "../components/Data/db.json";
import ProductMain from "../components/Product/ProductMain";

function Home() {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const { devices, loading, error } = useSelector((state) => state.devices);
  const { sortBy } = useSelector((state) => state.filter);

  React.useEffect(() => {
    dispatch(fetchDevicesRequest());
    try {
      const data = require("../components/Data/db.json");
      dispatch(fetchDevicesSuccess(data.devices));
    } catch (error) {
      dispatch(fetchDevicesFailure(error.message));
    }
  }, [dispatch]);

  const sortProducts = (products, sortBy) => {
    switch (sortBy) {
      case "price":
        return [...products].sort((a, b) => a.price - b.price);
      case "name":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return products;
    }
  };

  const handleSortChange = (sortBy) => {
    dispatch(setSortFilter(sortBy));
  };

  const sortedProducts = sortProducts(db.devices, sortBy);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="content"></div>
      <div className="contentblock">
        <table class="grid">
          <tr>
            <td>
              <img src="img/mfu.png" alt="mfu" className="mfupng" />
              <div class="item">МФУ</div>
            </td>
            <td>
              <img src="img/mouse.png" alt="mouse" className="mousepng" />
              <div class="item">Мыши</div>
            </td>
            <td>
              <img
                src="img/netfilter.png"
                alt="netfilter"
                className="netfilterpng"
              />
              <div class="item">Сетевые фильтры</div>
            </td>
            <td>
              <img src="img/kbr.png" alt="kbr" className="kbrpng" />
              <div class="item">Клавиатуры</div>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="img/garniture.png"
                alt="garniture"
                className="garniturepng"
              />
              <div class="item">Гарнитуры</div>
            </td>
            <td>
              <img
                src="img/complect.png"
                alt="complect"
                className="complectpng"
              />
              <div class="item">Комлпекты</div>
            </td>
            <td>
              <img
                src="img/microphone.png"
                alt="microphone"
                className="microphonepng"
              />
              <div class="item">Микрофоны</div>
            </td>
            <td>
              <img
                src="img/streamdeck.png"
                alt="streamdeck"
                className="streamdeckpng"
              />
              <div class="item">
                Стримерские <br />
                панели
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="main-filter-cards">
        <Filter sortBy={sortBy} handleSortChange={handleSortChange} />
        <div className="cards">
          {sortedProducts.map((product) => (
            <NavLink key={product.id} to={`/product/${product.id}`}>
              <ProductMain
                img={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
