import React, { useRef } from "react";
import { Link } from "react-router-dom";
import OrangeCoin from "../assets/images/CoinFullOrange.png";
import TealCoin from "../assets/images/CoinFullBlue.png";
import GoldBar from "../assets/images/GoldBar.svg";
import Cash from "../assets/images/cash1.svg";
import Jail from "../assets/images/Jail.svg";
import watch from "../assets/images/watches.svg";
import { useGSAP } from "@gsap/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

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

    let split = SplitText.create(".text", {
      type: "chars",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".service",
        scroller: "body",
        start: "top 80%",
        end: "bottom 20%",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });

    tl2.from(split.chars, {
      opacity: 0,
      y: 70,
      stagger: 0.03,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    let splited = SplitText.create(".buy", {
      type: "chars",
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".buy-sell-gold",
        scroller: "body",
        start: "top 68%",
        end: "bottom 20%",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });

    tl3
      .from(
        splited.chars,
        {
          opacity: 0,
          y: 70,
          stagger: 0.03,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "reveal"
      )
      .from(
        ".goldbar",
        {
          opacity: 0,
          y: 150,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "reveal"
      )
      .from(".service hr", {
        clipPath: "inset(0 0% 0 0)",
        duration: 1,
        ease: "power2.out",
      });

    let spliting = SplitText.create(".instant", {
      type: "chars",
    });

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".cash-container",
        scroller: "body",
        start: "top 68%",
        end: "bottom 20%",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });

    tl4
      .from(
        spliting.chars,
        {
          opacity: 0,
          y: 70,
          stagger: 0.03,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "reveal"
      )
      .from(
        ".cash",
        {
          opacity: 0,
          y: 150,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "reveal"
      );

    let slipt = SplitText.create(".release-text", {
      type: "chars",
    });

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".release",
        scroller: "body",
        start: "top 68%",
        end: "bottom 20%",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });

    tl5
      .from(
        slipt.chars,
        {
          opacity: 0,
          y: 70,
          stagger: 0.03,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "reveal"
      )
      .from(
        ".jail",
        {
          opacity: 0,
          y: 150,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "reveal"
      );
    let slipted = SplitText.create(".watch-text", {
      type: "chars",
    });

    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".watch-container",
        scroller: "body",
        start: "top 60%",
        end: "bottom 20%",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });

    tl6
      .from(
        slipted.chars,
        {
          opacity: 0,
          y: 70,
          stagger: 0.03,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "reveal"
      )
      .from(
        ".watch",
        {
          opacity: 0,
          y: 150,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "reveal"
      );

    const tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".watch-container",
        scroller: "body",
        start: "top 20%",
        end: "top 0",
        scrub: 1.2,
        markers: true,
        toggleActions: "play none none reverse",
      },
    });

    tl7.from(".footer-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Handle resize and cleanup
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // Kill all timelines and scroll triggers
      tl.kill();
      tl2.kill();
      tl3.kill();
      tl4.kill();
      tl5.kill();
      tl6.kill();
      tl7.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div className="min-h-screen w-[100%] pt-16 flex items-center justify-center flex-col bg-gradient-to-r from-orange-100 via-[#E1DDD7] to-teal-100 relative overflow-hidden">
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

        <div className="service container w-[100%] px-4 py-16">
          <h2 className="text text-4xl sm:text-5xl text-[#525252] font-[Poi-medium] text-center mt-24 sm:mt-12 mb-16">
            OUR SERVICES
          </h2>

          <div className="buy-sell-gold w-full max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-center md:items-start overflow-hidden">
                <h3 className="buy text-5xl md:text-7xl font-[Poi-medium] mb-1">
                  We Buy
                </h3>
                <h3 className="buy text-5xl md:text-7xl font-[Poi-medium] mb-1">
                  &amp; Sell
                </h3>
                <span className="buy text-5xl md:text-7xl font-[Poi-medium] text-[#B87100]">
                  Gold
                </span>
              </div>
              <div className="flex justify-center">
                <img
                  src={GoldBar}
                  alt="Gold Bar"
                  className="goldbar w-48 h-48 md:w-80 md:h-80 sm:w-56 sm:h-56 object-contain"
                />
              </div>
            </div>
          </div>
          <hr className="hr mx-auto max-w-3xl mt-12" />
        </div>

        <div className="cash-container container w-[100%] px-4">
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
              <div className="flex justify-center">
                <img
                  src={Cash}
                  alt=""
                  className="cash w-48 h-48 md:w-80 md:h-80 sm:w-56 sm:h-56 object-contain"
                />
              </div>
              <div className="flex flex-col items-center md:items-end overflow-hidden">
                <h3 className="instant text-5xl md:text-7xl font-[Poi-medium] mb-1">
                  Get Instant
                </h3>
                <span className="instant text-5xl md:text-7xl font-[Poi-medium] text-[#007537]">
                  Cash
                </span>
              </div>
            </div>
          </div>
          <hr className="hr mx-auto max-w-3xl mt-12" />
        </div>

        <div className="release container w-[100%] px-4 py-16">
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-center md:items-start overflow-hidden">
                <h3 className="release-text text-5xl md:text-7xl font-[Poi-medium] mb-1">
                  We Release
                </h3>
                <h3 className="release-text text-5xl md:text-7xl font-[Poi-medium] mb-1">
                  and Buy
                </h3>
                <span className="release-text text-5xl md:text-7xl font-[Poi-medium] text-[#B87100]">
                  Pledged Gold
                </span>
              </div>
              <div className="jail flex justify-center">
                <img
                  src={Jail}
                  alt="Gold Bar"
                  className="w-48 h-48 md:w-80 md:h-80 sm:w-56 sm:h-56 object-contain"
                />
              </div>
            </div>
          </div>
          <hr className="hr mx-auto max-w-3xl mt-12" />
        </div>

        <div className="watch-container w-full max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-between gap-8">
            <div className="pt-2 flex flex-col items-center overflow-hidden">
              <h3 className="watch-text text-4xl md:text-6xl text-center font-[Poi-regular] mb-1">
                We Buy & Sell Premium Watches
              </h3>
            </div>
            <div className="flex justify-center">
              <img
                src={watch}
                alt="Gold Bar"
                className="watch w-48 h-48 md:w-80 md:h-80 sm:w-56 sm:h-56 object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="footer-text text-2xl md:text-3xl text-center font-[Poi-light] mb-1">
                Sell your premium timepieces quickly and confidently.
              </h4>
            </div>

            <Link
              to="/gold-coins"
              className="mb-5 explore cursor-pointer bg-black px-12 py-3 rounded-full border-[1px] border-slate-500 text-white font-[Poi-extraLight] group"
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

        <Footer />
      </div>
    </>
  );
};
