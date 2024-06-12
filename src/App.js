import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product/Product";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Login from "./pages/Login/Login";

function App() {
    return ( <
        >
        <
        Router >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/Product/:id"
        element = { < Product / > }
        /> <
        Route path = "/Profile"
        element = { < Profile / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/register"
        element = { < Register / > }
        /> <
        /Routes> <
        Footer / >
        <
        /Router> <
        />
    );
}
export default App;