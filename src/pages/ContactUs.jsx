import React, { useRef, useState } from "react";
import storeVector from "../assets/icons/StoreVector.svg";
import verticleLine from "../assets/icons/verticleline.svg";
import { Footer } from "../components/Footer";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ContactUs = () => {
  const callNowRef = useRef(null);
  const formRef = useRef(null);
  const mapSectionRef = useRef(null);
  const mapRef = useRef(null);
  const storeLocationRef = useRef(null);
  const CommunityCenterRef = useRef(null);
  const aliManzilRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  useGSAP(() => {
    var tl = gsap.timeline();

    tl.from(
      callNowRef.current,
      {
        y: 300,
        opacity: 0,
        duration: 1,
        ease: "back.out",
      },
      "up"
    ).from(
      formRef.current,
      {
        y: 300,
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      },
      "up"
    );

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: mapSectionRef.current,
        scroller: "body",
        start: "top 30%",
        end: "top -10%",
        markers: false,
        scrub: 2,
      },
    });

    tl2.from(mapRef.current, {
      scale: 0.85,
      duration: 1,
      ease: "expo.out",
    });

    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: mapSectionRef.current,
        scroller: "body",
        start: "top -5%",
        end: "top -30%",
        // markers: true,
        scrub: 2,
      },
    });

    tl3
      .from(
        storeLocationRef.current,
        {
          y: 300,
          opacity: 0,
          duration: 1,
          ease: "power4.inOut",
        },
        "glide"
      )
      .from(
        CommunityCenterRef.current,
        {
          x: -200,
          opacity: 0,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "glide+=0.2"
      )
      .from(
        aliManzilRef.current,
        {
          x: 200,
          opacity: 0,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "glide+=0.2"
      );
  }, []);

  return (
    <>
      <div className="overflow-x-hidden min-h-screen w-[100%] bg-[#E1DDD7] pt-24 pb-12">
        <div className="w-[100%] max-w-6xl mx-auto px-4">
          {/* Call Now Section */}
          <div ref={callNowRef} className="text-center mb-16">
            <h2 className="text-2xl font-[Poi-regular] mb-4">Call now</h2>
            <a
              href="tel:+919311091129"
              className="text-5xl font-[Poi-medium] hover:text-[#B8860B]"
            >
              +91-9311 09 1129
            </a>
            <div className="text-5xl font-[Poi-regular] mt-8 mb-12">or</div>
          </div>

          {/* Contact Form */}
          <div className="text-center mb-16">
            <h3 className="text-xl mb-8 font-[Poi-regular]">
              Looking for something specific? We'd be delighted to help you.
            </h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="max-w-4xl mx-auto space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white"
                  required
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white h-32"
                required
              />
              <button className="cursor-pointer bg-black px-10 py-3 rounded-full border-[1px] border-slate-500 text-white font-[Poi-extraLight] group">
                <div className="relative overflow-hidden">
                  <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Send Message
                  </p>
                  <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Send Message
                  </p>
                </div>
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div ref={mapSectionRef} className="mb-16">
            <h2 className="text-4xl font-[Poi-regular] text-center mb-8">
              Reach Out to Us
            </h2>
            <div
              ref={mapRef}
              className="rounded-[54px] border-[4px] border-[#686868] overflow-hidden shadow-[0px_93px_54.8px_-55px_rgba(0,0,0,0.25)]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14016.863184705866!2d77.278784!3d28.563282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3947f910501%3A0x17dc3e8ceb0a0a92!2sNFC%20Community%20Centre!5e0!3m2!1sen!2sin!4v1748461886047!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Store Locations */}
          <div
            ref={storeLocationRef}
            className="text-center flex items-center justify-center flex-col"
          >
            <div className="flex gap-2 justify-center items-center mb-8">
              <img className="" src={storeVector} alt="" />
              <h2 className="text-3xl font-[Poi-regular]">OUR STORES</h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-8">
              <div ref={CommunityCenterRef} className="space-y-2">
                <h3 className="text-xl font-[Poi-regular]">
                  New Friends Colony Store
                </h3>
                <p className="text-lg">
                  76, Community Center, New
                  <br />
                  Friends Colony
                  <br />
                  New Delhi - 110025
                </p>
              </div>
              <div className="rotate-90 sm:rotate-0 transform">
                <img className="" src={verticleLine} alt="" />
              </div>
              <div ref={aliManzilRef} className="space-y-2">
                <h3 className="text-xl font-[Poi-regular]">Nizamuddin Store</h3>
                <p className="text-lg">
                  20, Ground FloorX
                  <br />
                  Near Ali Manzil Market,
                  <br />
                  New Delhi-110013
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
