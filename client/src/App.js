import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Pages/RegistrationForm/Register";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/contact" element={<ContactUs/>} />
            <Route exact path="/recruit" element={<Register/>} />
            <Route exact path="/register" element={<Register/>} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </>
  );
}

export default App;