import React, { useRef } from "react";
import { Link } from "react-router-dom";
import OrangeCoin from "../assets/images/CoinFullOrange.png";
import TealCoin from "../assets/images/CoinFullBlue.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const OrangeCoinRef = useRef(null);
  const BlueCoinRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(
      OrangeCoinRef.current,
      {
        x: -500,
        opacity: 0,
        duration: 0.8,
        ease: "power4.InOut",
      },
      "slide"
    )
      .from(
        BlueCoinRef.current,
        {
          x: 500,
          opacity: 0,
          duration: 0.8,
          ease: "power4.InOut",
        },
        "slide"
      )
      .fromTo(
        ".heading-intro",
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power4.inOut" },
        "slide"
      )
      .fromTo(
        ".heading-title",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power4.inOut" },
        "slide"
      )
      .from(
        ".explore",
        {
        
          opacity: 0,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "slide"
      );

    gsap.to(OrangeCoinRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%", // center of the image
    });

    gsap.to(BlueCoinRef.current, {
      rotation: -360,
      duration: 10,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <>
      <div className="min-h-screen w-[100%] flex items-center justify-center bg-gradient-to-r from-orange-100 via-[#E1DDD7] to-teal-100 relative overflow-hidden">
        <div className=" h-screen sm:h-full container mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col items-center justify-center gap-8">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center gap-5 text-center">
            <h1 className="text-4xl text-[#696969] md:text-5xl font-[Poi-regular]">
              <span className="heading-intro">Introducing</span>
              <div className=" heading-title text-[#696969] md:text-6xl font-[Poi-semibold] mt-5">
                GOLD DADDY COINS
              </div>
            </h1>

            <Link
              to="/gold-coins"
              className="explore cursor-pointer bg-black px-10 py-3 rounded-xl border-[1px] border-slate-500 text-white font-[Poi-extraLight] group"
            >
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  EXPLORE
                </p>
                <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  EXPLORE
                </p>
              </div>
            </Link>
          </div>

          {/* Left Decorative Coin Image */}
          <div className="absolute top-[-20%] md:-left-[21%] md:-top-[8%] 3xl:top-[11%] 3xl:-left-[25%]">
            <img
              ref={OrangeCoinRef}
              src={OrangeCoin}
              alt="Orange Coin Circle"
              className=" sm:w-145 sm:h-145 md:w-180 md:h-180 3xl:w-220 3xl:h-220"
            />
          </div>

          {/* Right Decorative Coin Image */}
          <div className="absolute bottom-[-20%] md:-right-[19%] md:-top-[3%] 3xl:-right-[22%] 3xl:top-[15%]">
            <img
              ref={BlueCoinRef}
              src={TealCoin}
              alt="Teal Coin Circle"
              className="sm:w-140 sm:h-140  md:w-165 md:h-165 3xl:h-200 3xl:w-200"
            />
          </div>
        </div>
      </div>
    </>
  );
};
