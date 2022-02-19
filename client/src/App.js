import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Pages/UserRegistrationForm/Register";
import CompanyRegister from "./Pages/CompanyRegistrationForm/CompanyRegister";
import ContactUs from "./Pages/ContactUs/ContactUs";
import UserProfile from "./Components/User Profile/UserProfile";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/jobLookUp" element={<Register />} />
            <Route exact path="/recruit" element={<CompanyRegister />} />
            <Route exact path="/user" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
