import "./login-style.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        userData
      );
      localStorage.setItem("token", response.data.token);
      const token = response.data.token;
      navigate("/");
    } catch (error) {
      console.error("Error logging in user", error);
      setError(error.response?.data?.message || "Ошибка входа");
    }
  };
  return (
    <div className="log-page">
      <form action="login" onSubmit={handleSubmit}>
        <div className="username">
          <p>login</p>
          <input
            type="username"
            name=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
      <NavLink to={"/register"}>
        <button className="reg">Зарегистрироваться</button>
      </NavLink>
    </div>
  );
}

export default Login;
