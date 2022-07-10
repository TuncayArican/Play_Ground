import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer"
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Details from "../pages/details/Details"


const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />

        </Routes>
        <Footer />
    </Router>
  );
};

export default AppRouter;