import { NavLink } from "react-router-dom";

import Product from "../components/Product/Product";
import { products } from "../components/Data/db";

function Home() {
  const token = localStorage.getItem("token");
  console.log(token);

  return (
    <>
      <div className="content">
        <h1></h1>
      </div>
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
      <div className="main__filter">
        <div className="filter">
          <p>Цена</p>
          <div className="pricefilter">
            <td>
              <div className="minprice">
                <input
                  type="text"
                  placeholder="От..."
                  className="minpriceinput"
                />
              </div>
            </td>
            <td>
              <div className="maxprice">
                <input
                  type="text"
                  placeholder="До..."
                  className="maxpriceinput"
                />
              </div>
            </td>
          </div>
          <hr />
          <div className="firmfilter">
            <p>Производитель:</p>
            <input
              type="text"
              placeholder="Поиск..."
              className="firmfilterinput"
            />
            <main>
              <div>
                <li>A4tech</li>
                <li>Acer</li>
                <li>Asus</li>
                <li>Cooler Master</li>
                <li>Deepcool</li>
                <li>Dell</li>
                <li>Gigabyte</li>
                <li>HyperX</li>
                <li>Lenovo</li>
                <li>Logitech</li>
                <li>MSI</li>
                <li>Oklick</li>
                <li>Razer</li>
                <li>Xiaomi</li>
              </div>
            </main>
          </div>
        </div>
        <div className="cards">
          {products.map((obj, index) => (
            <NavLink key={index} to={`/Product/${index}`}>
              <div>
                <Product
                  img={obj.image}
                  name={obj.name}
                  description={obj.description}
                  price={obj.price}
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
