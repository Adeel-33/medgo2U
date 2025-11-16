import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // optional icons

export default function Navbar() {
  const categories = [
    "All",
    "Premium Picks",
    "In-Person Consultation",
    "Online_consultation",
    "Emergency Vet Care",
    "Exoctic Animals Care Specialists",
    "Athletics",
    "Works in Private Clinic",
    "Own a Clinic",
    "Dual Expertise",
    "Works for NHS",
    "Works for Agency",
    "Available Now",
    "Availability 24/7",
  ];

  const swiperRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const checkArrows = () => {
      if (!swiper.wrapperEl) return;
      const maxTranslate = swiper.maxTranslate();
      const currentTranslate = swiper.getTranslate();

      setShowLeft(currentTranslate < 0);
      setShowRight(currentTranslate > maxTranslate);
    };

    swiper.on("slideChangeTransitionEnd", checkArrows);
    swiper.on("progress", checkArrows);

    // initial check after render
    setTimeout(checkArrows, 300);

    return () => {
      swiper.off("slideChangeTransitionEnd", checkArrows);
      swiper.off("progress", checkArrows);
    };
  }, []);

  const scrollLeft = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const scrollRight = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <nav className="relative w-full bg-white  py-4">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Left Arrow */}
        {showLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <button className="px-4 py-2.5 border border-black/10 rounded-full bg-[#FFFFFF] text-[14px] font-[400] text-black hover:bg-[#F3A391] whitespace-nowrap">
                {item}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        {showRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </nav>
  );
}
