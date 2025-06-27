import React from "react";
import { Footer } from "../components/Footer";
import island from "../assets/images/island2.png";
import damacfont from "../assets/icons/damacfont.svg";
import GDlogo from "../assets/icons/logo2.svg";
import horizontalLine from "../assets/icons/horizontalline2.svg";
import Linkedin from "../assets/icons/linkedin2.svg";
import twitter from "../assets/icons/twitter2.svg";
import facebook from "../assets/icons/facebook2.svg";
import insta from "../assets/icons/insta2.svg";
import mail from "../assets/icons/mail2.svg";
import call from "../assets/icons/call2.svg";
import tele from "../assets/icons/telephone2.svg";
import Handover from "../assets/icons/handover.svg";
import Expo from "../assets/icons/expo.svg";
import Payment from "../assets/icons/payment.svg";
import Downtown from "../assets/icons/downtown.svg";
import Airport from "../assets/icons/airport.svg";
import D_Airport from "../assets/icons/dairport.svg";
import Bedroom from "../assets/icons/bedroom.svg";

import { Link } from "react-router-dom";

export const Properties = () => {
  return (
    <div className="min-h-screen bg-[#1A0D1C] text-white pt-12 pb-12">
      {/* Hero Section */}
      <div className="h-screen w-full flex justify-center container mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-[0vh] sm:gap-[20vh] sm:flex-row">
          <div className="relative rounded-[24px] overflow-hidden">
            <img
              src={island}
              alt="Damac Islands Aerial View"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start">
            <img src={damacfont} alt="Damac" className="h-50 w-50 -mb-2" />
            <p className="text-2xl mb-4 font-[Cirka-Variable]">
              The future of Island Living
            </p>
            <p className="text-lg max-w-60 mb-6 font-[Cirka-Variable]">
              Luxury townhouses and villas starting at AED 2.5M
            </p>
            <Link
              to="/gold-coins"
              className="w-full sm:w-3/4 mb-5 explore cursor-pointer bg-white px-4 py-2 rounded-full border border-slate-500 text-black text-sm sm:text-md font-bold font-[Poi-extraLight] group"
            >
              <div className="relative overflow-hidden ">
                <p className="text-center group-hover:-translate-y-[150%] duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  ENQUIRE NOW
                </p>
                <p className="absolute whitespace-nowrap top-7 left-[50%] -translate-x-1/2 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  ENQUIRE NOW
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="container mx-auto px-4 sm:px-30 mb-16">
        <h2 className="text-3xl md:text-5xl text-center font-[Cirka-Variable] mb-6">
          Location
        </h2>
        <div className="bg-[#1E1E1E] h-[50vh] sm:h-[65vh] md:h-[70vh] w-full rounded-[32px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79173.92591608631!2d55.20715732340205!3d25.028062012391075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f7100631fbbb5%3A0x3f0e24f0e55aef88!2sDamac%20Islands!5e0!3m2!1sen!2sin!4v1751064176954!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Top Reasons Section */}
      <div className="text-center container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-[Crik-Variable] mb-10">
          Top Reasons to Own This Villa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <img src={Bedroom} alt="Bedroom" className="h-20 mx-auto mb-2" />
          <img src={Handover} alt="Handover" className="h-20 mx-auto mb-2" />
          <img src={Payment} alt="Payment Plan" className="h-20 mx-auto mb-2" />
        </div>
      </div>

      {/* Famous Landmarks Section */}
      <div className="text-center container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-[Crik-Variable] mb-10">
          Famous landmarks nearby
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <img
            src={Downtown}
            alt="Downtown Dubai"
            className="h-20 mx-auto mb-4"
          />
          <img
            src={Airport}
            alt="Al Maktoum International Airport"
            className="h-20 mx-auto mb-4"
          />
          <img
            src={D_Airport}
            alt="Dubai International Airport"
            className="h-20 mx-auto mb-4"
          />
          <img src={Expo} alt="Expo 2020 Venue" className="h-20 mx-auto mb-4" />
        </div>
      </div>

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
              <p className="font-[Poi-regular] text-md">
                Mon-Fri : 10:00 - 19:00
              </p>
              <p className="font-[Poi-regular] text-md">
                Saturday : By Appointment Only
              </p>
              <p className="font-[Poi-regular] text-md">
                Sunday : By Appointment Only
              </p>
            </div>

            {/* Warning */}
            <div className="text-right text-xs leading-relaxed">
              <h3 className="font-[Poi-medium] text-xl mb-4 text-center md:text-right">
                WARNING
              </h3>
              <p className="text-center text-sm md:text-right font-[Poi-light]">
                Selling of Stolen / Theft Items is a Punishable Criminal
                Offense, One should produce required Documents for Transaction.
                We do not accept any Transaction from minors under any
                circumstances.If any Customer found suspicious will be reported
                to the appropriate (Police) Departments.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
