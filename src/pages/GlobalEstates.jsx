import React from "react";
import { Link } from "react-router-dom";
import BurjKhalifa from "../assets/images/burjKhalifa.svg";
import bg from "../assets/images/gestatebg.png";
import island from "../assets/images/damacIsland.png";
import GoldDaddyxAries from "../assets/icons/goldaddyxaries.svg";
import VerticalLine from "../assets/icons/verticalLine.svg";
// import { Footer } from "../components/Footer";
import GDRectangle from "../assets/icons/gdrectangle.png";
import GDlogo from "../assets/icons/logo2.svg";
import horizontalLine from "../assets/icons/horizontalline.svg";
import Linkedin from "../assets/icons/linkedin2.svg";
import twitter from "../assets/icons/twitter2.svg";
import facebook from "../assets/icons/facebook2.svg";
import insta from "../assets/icons/insta2.svg";
import mail from "../assets/icons/mail2.svg";
import call from "../assets/icons/call2.svg";
import tele from "../assets/icons/telephone2.svg";
import GD_logo from "../assets/icons/logo.svg";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export const GlobalEstates = () => {
  const properties = [
    {
      id: 1,
      name: "Damac Islands",
      location: "Dubai",
      image: island,
    },
    {
      id: 2,
      name: "Damac Islands",
      location: "Dubai",
      image: island,
    },
    {
      id: 3,
      name: "Damac Islands",
      location: "Dubai",
      image: island,
    },
    {
      id: 4,
      name: "Damac Islands",
      location: "Dubai",
      image: island,
    },
    {
      id: 5,
      name: "Damac Islands",
      location: "Dubai",
      image: island,
    },
    {
      id: 6,
      name: "Damac Islands",
      location: "Dubai",
      image: island,
    },
  ];

  useGSAP(() => {
    let split = SplitText.create(".landing-text", {
      type: "chars",
    });

    const tl = gsap.timeline();

    tl.from(
      ".burj-khalifa",
      {
        opacity: 0,
        y: 150,
        duration: 0.6,
        ease: "power2.inOut",
      },
      "reveal"
    )
      .from(
        split.chars,
        {
          opacity: 0,
          y: 70,
          stagger: 0.01,
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        "reveal"
      )
      .from(
        ".gd-aries",
        {
          opacity: 0,
          x: 70,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "reveal"
      )
      .from(
        ".gd-rectangle",
        {
          x: 70,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "reveal"
      );

    let split2 = SplitText.create(".property-text", {
      type: "chars",
    });

    let split3 = SplitText.create(".property-subtext", {
      type: "chars",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".properties",
        scroller: "body",
        start: "top 70%",
        end: "top 0",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });

    tl2
      .from(
        split2.chars,
        {
          opacity: 0,
          y: 70,
          stagger: 0.03,
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        "up"
      )
      .from(
        split3.chars,
        {
          opacity: 0,
          y: 70,
          // stagger: -0.02,
          duration: 0.3,
          ease: "back.out(1)",
        },
        "up+=0.2"
      )
      .from(".property-cards", {
        opacity: 0,
        y: 170,
        duration: 1,
        ease: "power4.out",
      });

    // Handle resize and cleanup
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.kill();
      tl2.kill();
      if (split && split.revert) split.revert();
      if (split2 && split2.revert) split2.revert();
      if (split3 && split3.revert) split3.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1A0D1C] text-white pb-12 overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          backdropFilter: `brightness(0.75)`,
        }}
      >
        <div className="container mx-auto px-10 h-full w-full flex items-center justify-center md:justify-between relative z-10">
          {/* Left Side - Content and Burj Khalifa */}
          <div className=" h-full relative flex items-end justify-center md:flex md:justify-center md:items-center">
            <img
              src={BurjKhalifa}
              alt="Burj Khalifa"
              className="burj-khalifa absolute brightness-[0.6] bottom-0 h-[100vh] w-auto object-contain -z-10 lg:relative lg:brightness-[1] lg:translate-y-0 lg:h-auto lg:max-h-[100vh] lg:mb-8"
            />
            <div className=" pb-2 flex flex-col items-center justify-center md:items-start md:relative md:z-10">
              <h1 className="landing-text text-center sm:text-left text-5xl lg:text-7xl font-[Crika-Variable] font-semibold mb-6 text-[#C5A265]">
                Don't
                <br />
                Miss it
              </h1>
              <p className="landing-text text-center sm:text-left text-xl lg:text-2xl mb-4 tracking-wider">
                PREMIUM FURNISHED
                <br />
                APARTMENTS FACING
              </p>
              <h2 className="landing-text text-center sm:text-left text-3xl lg:text-5xl font-[Poi-medium] text-[#C5A265] mb-8">
                BURJ KHALIFA
              </h2>
              <div className="flex items-center justify-center sm:items-stretch gap-2 mb-8">
                <p className="landing-text text-sm uppercase self-start">
                  PAY IN
                </p>
                <span className="landing-text text-6xl lg:text-7xl font-[Poi-medium] text-[#C5A265] self-center">
                  9
                </span>
                <span className="landing-text text-xl sm:self-end">YEARS</span>
              </div>

              <Link
                to="/gold-coins"
                className="mb-5 explore cursor-pointer bg-white px-8 py-3 rounded-full border-[1px] border-slate-500 text-black text-lg font-bold font-[Poi-extraLight] group"
              >
                <div className="relative overflow-hidden">
                  <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    ENQUIRE NOW
                  </p>
                  <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    ENQUIRE NOW
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Vertical line */}

          <img className="hidden md:block" src={VerticalLine} alt="" />

          {/* Right Side - Partnership Badge */}
          <div className="gd-aries hidden flex flex-col items-center justify-center max-w-[500px] md:block">
            <div className="flex items-center justify-center bg-[rgba(255,255,255,0.1)] backdrop-blur-md border-2 border-[rgba(255,255,255,0.6)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-full px-6 py-2">
              <div className="flex items-center mb-3">
                <img src={GoldDaddyxAries} alt="" />
              </div>
            </div>

            <p className="text-xl font-[Crika-Variable] text-center max-w-180px mt-5">
              In exclusive partnership with Areis Global, we present a curated
              portfolio of the finest properties in Dubai, the UK, and
              Singapore.
            </p>
          </div>

          {/* Gold Daddy Logo - Bottom Right */}
        </div>
      </div>
      <div className="gd-rectangle fixed bottom-8 right-0">
        <img
          src={GDRectangle}
          alt="Gold Daddy"
          className="relative h-15 w-auto"
        />
        <img
          src={GD_logo}
          alt=""
          className="h-3/4 w-3/4 absolute top-0 left-7"
        />
      </div>

      <hr className="bg-[linear-gradient(to_right,_#B78D38_0%,_#EFE07B_43%,_#B5822B_100%)] w-full h-[5px]" />

      {/* Properties Section */}
      <div className="properties container mx-auto pt-[15vh] px-4">
        <h2 className="property-text text-4xl md:text-6xl font-[Cirka-Variable] text-center mb-4">
          OUR PROPERTIES
        </h2>
        <p className="property-subtext text-2xl text-center mb-12 font-[Cirka-Variable]">
          Handpicked Luxury In Every Corner
        </p>

        <div className="property-cards flex flex-wrap gap-[10vh] sm:gap-[20vh] justify-center">
          {properties.map((property) => (
            <div
              key={property.id}
              className="px-3 py-4  h-[50vh] w-[30vh] md:h-[60vh] md:w-[35vh] bg-[rgba(255,255,255,0.1)] backdrop-blur-md border-2 border-[rgba(255,255,255,0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[31.02px] overflow-hidden relative flex flex-col items-start justify-center"
            >
              <div className="rounded-xl h-full w-full overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 w-full">
                <h3 className="text-2xl font-[Cirka-Variable]">
                  {property.name}
                </h3>
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z"
                      fill="white"
                    />
                    <path
                      d="M8 1C5.243 1 3 3.243 3 6C3 9.454 7.418 14.41 7.645 14.675C7.75 14.793 7.875 14.853 8 14.853C8.125 14.853 8.25 14.793 8.355 14.675C8.582 14.41 13 9.454 13 6C13 3.243 10.757 1 8 1ZM8 9.5C6.346 9.5 5 8.154 5 6.5C5 4.846 6.346 3.5 8 3.5C9.654 3.5 11 4.846 11 6.5C11 8.154 9.654 9.5 8 9.5Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-lg font-[Cirka-Variable]">
                    {property.location}
                  </p>
                </div>
                <button className="text-lg font-[Cirka-Variable] w-full bg-white text-black py-2 rounded-full mt-4 font-medium transition-all duration-500 ease-in-out hover:bg-black hover:text-white hover:shadow-[0_0_15px_rgba(197,162,101,0.6)] hover:tracking-wider hover:scale-102 cursor-pointer">
                  Explore
                </button>
              </div>
            </div>
          ))}
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
