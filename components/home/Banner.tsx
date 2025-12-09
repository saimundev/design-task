"use client";
import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Shop Computer & experience",
      subtitle:
        "You cannot inspect quality into the product; it is already there.",
      description:
        "I Am Not A Product Of My Circumstances. I Am A Product Of My Decisions.",
      discount: "40%",
    },
    {
      title: "Discover Audio Excellence",
      subtitle: "Premium Sound Quality For Every Moment",
      description: "Experience Music The Way It Was Meant To Be Heard.",
      discount: "35%",
    },
    {
      title: "Tech That Inspires",
      subtitle: "Innovation Meets Design In Perfect Harmony",
      description:
        "Transform Your Digital Lifestyle With Cutting-Edge Technology.",
      discount: "45%",
    },
  ];

  return (
    <div className="w-full h-[444px] relative bg-[url('/banner.png')] bg-cover bg-center">
      <div className="container mx-auto h-full flex items-center justify-between relative px-4">
        {/* Left Content */}
        <div key={currentSlide} className="w-1/2 z-10 animate-fadeSlideIn">
          <h1 className="text-6xl leading-[53px] font-normal mb-1">
            <span className="text-gray-800">Shop </span>
            <span className="text-cyan-500">Computer</span>
            <br />
            <span className="text-cyan-500">& experience</span>
          </h1>
          <div className="w-[380px]">
            <p className="text-black text-sm mb-1 font-normal">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-black text-sm mb-1 font-normal">
              {slides[currentSlide].description}
            </p>
          </div>
          <button className="banner-button">View More</button>
        </div>

        {/* Right Content - Product Display */}
        <div
          key={`img-${currentSlide}`}
          className="w-1/2 relative flex items-center justify-center animate-fadeSlideIn"
        >
          <div className="absolute w-41 h-40 text-white rounded-full text-5xl -top-36 right-10 bg-linear-to-r from-[#FDC830] to-[#F37335] flex flex-col justify-center items-center">
            
            <span>
              {slides[currentSlide].discount}
            </span>
            <span className="mt-2 font-normal">Off</span>
          </div>
         
          
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-primary-dark w-9 h-2"
                  : "bg-gray-light w-9 h-2 hover:bg-gray-light"
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
