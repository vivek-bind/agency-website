import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/landingPage/HomePage";
import Solutions from "./components/solutionsPage/Solutions";
import Contact from "./components/contactPage/ContactHero";
import Client from "./components/clientPage/Client";
import AboutUs from "./components/about/aboutUs/AboutUs";
import Career from "./components/about/career/Career";
import Footer from "./components/Footer";
import ScrollToHash from "./ScrollToHash";
import "./App.css";

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Clients" element={<Client />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Career" element={<Career />} />
      </Routes>

      <Footer />
    </Router>
  );
};
export default App;
