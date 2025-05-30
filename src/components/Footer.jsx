import React from "react";
import { Link } from "react-router-dom";
import GDlogo from "../assets/icons/logo2.svg";
import horizontalLine from "../assets/icons/horizontalline.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import insta from "../assets/icons/insta.svg";
import mail from "../assets/icons/mail.svg";
import call from "../assets/icons/call.svg";
import tele from "../assets/icons/telephone.svg";

export const Footer = () => {
  return (
    <footer className="bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img src={GDlogo} alt="Gold Daddy" className="h-12" />
          </Link>
        </div>

        <div>
          <img src={horizontalLine} alt="" />
        </div>
        {/* Follow Us Section */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium mb-4">Follow Us</h3>
          <div className="mx-auto sm:w-[20%] py-2 px-7 flex justify-center items-center space-x-6 border-[1px] rounded-full">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={twitter} alt="Twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={insta} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact Info, Timings, and Warning */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Contact Information */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <img src={mail} alt="Email" className="w-6 h-6" />
              <a
                href="mailto:info@golddaddy.in"
                className="font-[Poi-regular] text-lg hover:text-[#B8860B]"
              >
                info@golddaddy.in
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <img src={call} alt="Phone" className="w-6 h-6" />
              <a
                href="tel:+919311091129"
                className="font-[Poi-regular] text-lg hover:text-[#B8860B]"
              >
                +91-9311 09 1129
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <img src={tele} alt="Phone" className="w-6 h-6" />
              <a
                href="tel:+911146024832"
                className="font-[Poi-regular] text-lg hover:text-[#B8860B]"
              >
                +91-11 4602 4832
              </a>
            </div>
          </div>

          {/* Timings */}
          <div className="text-center space-y-2">
            <h3 className="font-[Poi-medium] text-xl mb-4">TIMINGS</h3>
            <p className="font-[Poi-regular] text-md">Mon-Fri : 10:00 - 19:00</p>
            <p className="font-[Poi-regular] text-md">Saturday : By Appointment Only</p>
            <p className="font-[Poi-regular] text-md">Sunday : By Appointment Only</p>
          </div>

          {/* Warning */}
          <div className="text-right text-xs leading-relaxed">
            <h3 className="font-[Poi-medium] text-xl mb-4 text-center md:text-right">
              WARNING
            </h3>
            <p className="text-center text-sm md:text-right font-[Poi-light]">
              Selling of Stolen / Theft Items is a Punishable Criminal Offense,
              One should produce required Documents for Transaction. We do not
              accept any Transaction from minors under any circumstances.If any
              Customer found suspicious will be reported to the appropriate
              (Police) Departments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
