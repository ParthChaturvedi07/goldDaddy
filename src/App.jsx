import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Faq } from "./pages/Faq";
import { ContactUs } from "./pages/ContactUs";
import { RealEstates } from "./pages/RealEstates";
import { GoldCoin } from "./pages/GoldCoin";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/real-estates" element={<RealEstates />} />
        <Route path="/gold-coins" element={<GoldCoin />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};
