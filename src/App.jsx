import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Faq } from "./pages/Faq";
import { ContactUs } from "./pages/ContactUs";
import { GoldCoin } from "./pages/GoldCoin";
import { Navbar } from "./components/Navbar";
import { GlobalEstates } from "./pages/GlobalEstates";
import { Properties } from "./pages/Properties";
import { ScrollToTop } from "./components/ScrollToTop";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/real-estates" element={<GlobalEstates />} />
        <Route path="/gold-coins" element={<GoldCoin />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </Router>
  );
};
