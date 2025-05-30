import React, { useRef } from "react";
import { Footer } from "../components/Footer";
import heading from "../assets/icons/golddaddyheading.svg";
import goldCoins from "../assets/images/GoldCoins.svg";
import redGradient from "../assets/images/redGradient.svg";
import yellowGradient from "../assets/images/yellowGradient.svg";
import greenGradient from "../assets/images/greenGradient.svg";
import blueGradient from "../assets/images/blueGradient.svg";
import blueGradient2 from "../assets/images/blueGradient2.svg";
import orangeGradient from "../assets/images/OrangeGradient.svg";
import orangeCoin from "../assets/images/OrangeFront.png";
import blueCoin from "../assets/images/BlueFront.png";
import tenGM from "../assets/images/10gm.svg";
import oneGM from "../assets/images/1gm.svg";
import arrow from "../assets/icons/arrow.svg";
import coin from "../assets/images/coin.svg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GoldCoin = () => {
  const GoldCoinSectionRef = useRef(null);
  const introSectionRef = useRef(null);
  const videoRef = useRef(null);
  const coinCardsSectionRef = useRef(null);
  const coinCardsContainerRef = useRef(null);
  const weightCompSectionRef = useRef(null);
  const valuePropositionSectionRef = useRef(null);
  const blueCoinRef = useRef(null);
  const orangeCoinRef = useRef(null);
  const tenGMref = useRef(null);
  const oneGMref = useRef(null);
  const blueGradientRef = useRef(null);
  const orangeGradientRef = useRef(null);
  const coinRollRef = useRef(null);
  const arrowRef = useRef(null);

  useGSAP(() => {
    var tl = gsap.timeline();

    tl.from(introSectionRef.current, {
      y: 300,
      opacity: 0,
      duration: 1,
      ease: "back.out",
    });

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-section",
        scroller: "body",
        start: "top 30%",
        end: "top -10%",
        markers: false,
        scrub: 2,
      },
    });

    tl2.to(videoRef.current, {
      scale: 0.9,
      duration: 1.2,
      ease: "linear",
    });

    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: coinCardsSectionRef.current,
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        markers: false,
        scrub: 2,
      },
    });

    tl3.from(coinCardsContainerRef.current, {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "linear",
    });

    var tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: weightCompSectionRef.current,
        scroller: "body",
        start: "top 80%",
        end: "top 15%",
        markers: false,
        scrub: 2,
      },
    });

    tl4
      .from(
        blueCoinRef.current,
        {
          x: "600",
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        },
        "slideIn"
      )
      .from(
        blueGradientRef.current,
        {
          x: "600",
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        },
        "slideIn"
      )
      .from(
        tenGMref.current,
        {
          x: "600",
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        },
        "slideIn+=0.2"
      )
      .from(
        orangeCoinRef.current,
        {
          x: "-600",
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        },
        "slideIn"
      )
      .from(
        orangeGradientRef.current,
        {
          x: "-600",
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        },
        "slideIn"
      )
      .from(
        oneGMref.current,
        {
          x: "-600",
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        },
        "slideIn+=0.2"
      );

    var tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: valuePropositionSectionRef.current,
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        markers: false,
        scrub: 2,
      },
    });

    tl5.fromTo(
      coinRollRef.current,
      {
        x: -100,
        y: 80,
        rotate: -180,
      },
      {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
      },
      "push"
    );
    // Timeline
    tl5.from(
      arrowRef.current,
      {
        opacity: 0,
        ease: "power2.out",
        duration: "1",
      },
      "push+=0.5"
    );
  }, []);

  return (
    <div
      ref={GoldCoinSectionRef}
      className="overflow-x-hidden min-h-screen w-full bg-[#E1DDD7] pt-24 pb-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Introduction Section */}
        <div
          ref={introSectionRef}
          className="text-center flex items-center justify-center gap-4 flex-col mb-16"
        >
          <h2 className="text-4xl text-[#696969] font-[Poi-regular]">
            Introducing
          </h2>
          <img className="h-[100%] w-120" src={heading} alt="" />
          <p className=" font-[Poi-light] text-2xl text-[#696969]">
            An investment in purity.
          </p>
        </div>

        {/* Video Section */}
        <div className="video-section mb-16">
          <div
            ref={videoRef}
            className="video-container aspect-video bg-[#949494] rounded-4xl max-w-6xl mx-auto flex items-center justify-center"
          >
            <span className="text-4xl text-white">VIDEO</span>
          </div>
          <div className="text-center mt-8">
            <button className="cursor-pointer bg-black px-10 py-3 rounded-full border-[1px] border-slate-500 text-white font-[Poi-extraLight] group">
              <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  ENQUIRE NOW
                </p>
                <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  ENQUIRE NOW
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Coin Cards Section */}
        <div ref={coinCardsSectionRef} className="mb-24">
          <div ref={coinCardsContainerRef} className="relative w-full">
            <div className="flex relative justify-center items-center gap-4 flex-wrap mb-10 w-full">
              {/* Main coins image - make it responsive */}
              <div className="relative bg-blu-200 w-full max-w-[1000px] mx-auto px-4">
                <img
                  className="z-10 w-full h-auto relative"
                  src={goldCoins}
                  alt="Gold Coins Collection"
                />
                {/* Gradient images with responsive positioning */}
                <img
                  className="absolute top-0 left-[5%] md:left-[10%] lg:left-[5%] w-[20%]"
                  src={redGradient}
                  alt=""
                />
                <img
                  className="absolute top-0 left-[25%] md:left-[30%] lg:left-[20%] w-[20%] "
                  src={yellowGradient}
                  alt=""
                />
                <img
                  className="absolute top-0 right-[25%] md:right-[30%] lg:right-[20%] w-[20%]"
                  src={greenGradient}
                  alt=""
                />
                <img
                  className="absolute top-0 right-[5%] md:right-[10%] lg:right-[5%] w-[20%]"
                  src={blueGradient}
                  alt=""
                />
              </div>
            </div>
            <p className="text-center text-[#696969] font-[Poi-regular] text-xl sm:text-2xl md:text-3xl mb-12 px-4">
              Available in multi-color{" "}
              <span className="text-[#005E9D]">gift packaging</span>.
            </p>
          </div>
        </div>

        {/* Weight Comparison Section */}
        <div
          ref={weightCompSectionRef}
          className="mb-24 sm:pr-18"
          style={{ perspective: "1000px" }}
        >
          <div className="relative flex justify-center items-center flex-wrap">
            <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-1">
              <img
                className="absolute sm:-left-30"
                src={blueGradient2}
                alt=""
                ref={blueGradientRef}
              />
              <img ref={tenGMref} src={tenGM} alt="" />
              <div className="relative group mt-4">
                <div
                  ref={blueCoinRef}
                  className="relative rounded-4xl overflow-hidden z-10"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={blueCoin}
                    alt="10GM Gold Coin"
                    className=" h-full w-58 object-cover "
                  />
                </div>
              </div>
            </div>
            <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-1">
              <div className="relative group mt-4">
                <div
                  ref={orangeCoinRef}
                  className="relative rounded-4xl overflow-hidden z-10"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={orangeCoin}
                    alt="1GM Gold Coin"
                    className=" h-full w-55 object-cover "
                  />
                </div>
              </div>
              <img ref={oneGMref} src={oneGM} alt="" />
              <img
                className="absolute sm:-right-25"
                src={orangeGradient}
                alt=""
                ref={orangeGradientRef}
              />
            </div>
          </div>
        </div>

        {/* Available Coins Section */}
        <div className="text-center mb-24">
          <h3 className="text-4xl mb-6 font-[Poi-light]">Coins Available</h3>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            <span className="text-2xl text-[#696969] font-[Poi-light]">
              1gm
            </span>
            <span className="text-2xl text-[#696969] font-[Poi-light]">
              10gm
            </span>
            <span className="text-2xl text-[#696969] font-[Poi-light]">
              50gm
            </span>
            <span className="text-2xl text-[#696969] font-[Poi-light]">
              100gm
            </span>
          </div>
          <button className="cursor-pointer mt-8 bg-black px-10 py-3 rounded-full border-[1px] border-slate-500 text-white font-[Poi-extraLight] group">
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                ENQUIRE NOW
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                ENQUIRE NOW
              </p>
            </div>
          </button>
        </div>

        {/* Value Proposition Section */}
        <div
          ref={valuePropositionSectionRef}
          className=" md:px-30 text-center flex items-center justify-center sm:justify-between flex-col sm:flex-row gap-15 sm:gap-0 mb-16"
        >
          <h2 className=" text-4xl sm:text-6xl max-w-130 sm:text-left text-[#474747] font-[Poi-medium]">
            Gift something that appreciates its{" "}
            <span className="text-[#006aff]">value</span>.
          </h2>
          <div className="flex relative justify-center items-end gap-2">
            <div className="h-12 w-6 bg-[#969696]"></div>
            <div className="h-20 w-6 bg-[#969696]"></div>
            <div className="h-28 w-6 bg-[#969696]"></div>
            <div className="h-36 w-6 bg-[#969696]"></div>
            <img
              ref={arrowRef}
              src={arrow}
              alt="arrow"
              className="absolute w-25 h-24 -top-3 -left-2"
            />
            <img
              ref={coinRollRef}
              src={coin}
              alt="Coin"
              className="absolute -top-11 -right-2 w-10 h-10"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
