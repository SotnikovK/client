import "../Login/login-style.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const baseURL = "http://localhost:3001"; // базовый URL сервера

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        `${baseURL}/api/auth/register`,
        userData
      );
      navigate("/login");
      console.log(response.data);
    } catch (error) {
      console.error("Error registering user", error);
      setError(error.response?.data?.message || "Ошибка регистрации");
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
            id=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            name=""
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Register;
