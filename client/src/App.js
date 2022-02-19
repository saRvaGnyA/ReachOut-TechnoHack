import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Pages/UserRegistrationForm/Register";
import CompanyRegister from "./Pages/CompanyRegistrationForm/CompanyRegister";
import UserProfile from "./Components/User Profile/UserProfile";
import ContactUs from "./Pages/ContactUs/ContactUs";
import LoginFormRecruit from "./Pages/LoginForm/LoginFormRecruit/LoginFormRecruit";
import LoginFormJob from "./Pages/LoginForm/LoginFormJob/LoginFormJob";
import FloatingButton from "./Components/FloatingButton/FloatingButton";
import Jobs from "./Pages/UserRegistrationForm/Jobs";
import JobSpecifics from "./Pages/CompanyRegistrationForm/Job_Specifics";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <FloatingButton />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/jobLookUp" element={<Register />} />
            <Route exact path="/jobs" element={<Jobs />} />
            <Route exact path="/recruit" element={<CompanyRegister />} />
            <Route exact path="/recruitnow" element={<JobSpecifics />} />
            <Route exact path="/user" element={<UserProfile />} />
            <Route exact path="/loginCompany" element={<LoginFormRecruit />} />
            <Route exact path="/loginEmployee" element={<LoginFormJob />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
