"use client";
import { slides } from "@/constant/sliderItem";
import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full min-h-[500px] lg:h-[444px] relative bg-[url('/banner.png')] bg-cover bg-center py-10 lg:py-0 flex items-center">
      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between relative px-4 gap-8 lg:gap-0">
        {/* Left Content */}
        <div
          key={currentSlide}
          className="w-full lg:w-1/2 z-10 animate-fadeSlideIn text-center lg:text-left mt-0 lg:mt-0 bg-white/60 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight lg:leading-[53px] font-normal mb-3 lg:mb-1">
            <span className="text-gray-800">Shop </span>
            <span className="text-cyan-500">Computer</span>
            <br />
            <span className="text-cyan-500">& experience</span>
          </h1>
          <div className="w-full lg:w-[380px] mx-auto lg:mx-0">
            <p className="text-black text-sm mb-1 font-normal">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-black text-sm mb-1 font-normal">
              {slides[currentSlide].description}
            </p>
          </div>
          <button className="banner-button mt-4 lg:mt-0">View More</button>
        </div>

        {/* Right Content - Product Display */}
        <div
          key={`img-${currentSlide}`}
          className="w-full lg:w-1/2 relative flex items-center justify-center animate-fadeSlideIn h-auto lg:h-auto order-first lg:order-last mb-4 lg:mb-0"
        >
          <div className="relative lg:absolute w-32 h-32 lg:w-41 lg:h-40 text-white rounded-full text-3xl lg:text-5xl top-0 lg:-top-36 right-0 lg:right-10 bg-linear-to-r from-[#FDC830] to-[#F37335] flex flex-col justify-center items-center shadow-lg">
            <span>{slides[currentSlide].discount}</span>
            <span className="mt-1 lg:mt-2 font-normal text-base lg:text-xl">
              Off
            </span>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="relative mt-8 lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-primary-dark w-6 h-1.5 lg:w-9 lg:h-2"
                  : "bg-gray-light w-6 h-1.5 lg:w-9 lg:h-2 hover:bg-gray-light"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Banner;
