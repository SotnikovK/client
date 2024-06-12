import { NavLink } from "react-router-dom";
import React from "react";

function Header() {
  const categories = [
    "Каталог",
    "Наши магазины",
    "Оплата",
    "Доставка",
    "Гарантия",
    "Партнёры",
    "О нас",
    "Помощь",
    "Акции",
  ];

  const [token, setToken] = React.useState(localStorage.getItem("token"));

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(false);
  };

  return (
    <div className="header">
      <header>
        <NavLink to="/">
          <div className="headerleft">
            <img src="/img/mainLogo.png" alt="" className="main_logo" />
            <h1> Kiber </h1>{" "}
          </div>{" "}
        </NavLink>{" "}
        <div className="form">
          <form className="search_from"> </form>{" "}
          <input type="text" placeholder="Поиск..." className="search_input" />
        </div>{" "}
        <NavLink to={"/profile"}>
          {" "}
          {token && (
            <div className="headerright">
              <img src="/img/svg/svgUser.svg" alt="svg" className="userLogo" />
            </div>
          )}{" "}
        </NavLink>{" "}
        {token ? (
          <div>
            <button onClick={logOut} className="btnLogin">
              {" "}
              Выйти{" "}
            </button>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>
            <div>
              <button className="btnLogin"> Войти </button>{" "}
            </div>{" "}
          </NavLink>
        )}{" "}
      </header>{" "}
      <div className="Navigation">
        {" "}
        {categories.map((category) => (
          <div>
            <hr />
            <li> {category} </li>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}

export default Header;
