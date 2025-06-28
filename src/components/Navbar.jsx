import React, { useState } from "react";
import { Link } from "react-router-dom";
import GD_logo from "../assets/icons/logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".nav-link", {
      y: -300,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.09,
    });
  }, []);

  return (
    <nav className="bg-transparent py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link to="/" className=" nav-link flex items-center">
          <img src={GD_logo} alt="Gold Daddy" className="h-8" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="nav-link nav-link  text-[#B8860B] hover:text-[#8B6914] font-[Poi-regular] text-lg"
          >
            Home
          </Link>
          <Link
            to="/faq"
            className=" nav-link text-[#707070] hover:text-gray-900 font-[Poi-regular] text-lg"
          >
            FaQs
          </Link>
          <Link
            to="/global-estates"
            className=" nav-link text-[#707070] hover:text-gray-900 font-[Poi-regular] text-lg"
          >
            Global Estates
          </Link>
          <Link
            to="/gold-coins"
            className=" nav-link text-[#707070] hover:text-gray-900 font-[Poi-regular] text-lg"
          >
            Gold Coin
          </Link>
          <Link
            to="/contact"
            className=" nav-link bg-[#B8860B] font-[Poi-regular] text-white px-8 py-2 rounded-full hover:bg-[#8B6914] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Navigation Links - Mobile */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full lg:hidden mt-4 
     bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md p-4`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-[#B8860B] hover:text-[#8B6914] font-medium"
            >
              Home
            </Link>
            <Link
              to="/faqs"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              FaQs
            </Link>
            <Link
              to="/global-estates"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Global Estates
            </Link>
            <Link
              to="/gold-coins"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Gold Coin
            </Link>
            <Link
              to="/contact"
              className="bg-[#B8860B] text-white px-6 py-2 rounded-full hover:bg-[#8B6914] transition-colors duration-300 inline-block text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
