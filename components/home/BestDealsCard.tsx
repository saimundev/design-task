"use client";

import { ProductItems } from "@/types/product";
import { useState } from "react";

type BestDealsCard = {
  products: ProductItems[];
};

const BestDealsCard = ({ products }: BestDealsCard) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "KITCHEN APPLIANCES",
    "CONSOLES",
    "TV & VIDEOS",
    "CELL PHONES",
    "GROCERY",
    "LAPTOPS",
    "CAMERAS",
    "FURNITURE",
    "SMART WATCHES",
    "HEADPHONES",
    "TABLETS",
    "SPEAKERS",
    "MONITORS",
    "ACCESSORIES",
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(categories.length - 1, prev + 1));
  };

  const handleCategoryClick = (index: number) => {
    setActiveIndex(index);
  };

  // Calculate scroll position to keep active category visible
  const scrollPosition = Math.max(
    0,
    Math.min(activeIndex - 2, categories.length - 5)
  );

  return (
    <div className="bg-white">
      <div className="relative">
        {/* Border line across full width */}
        <div className="border-b border-gray-300"></div>

        {/* Navigation and Categories Container */}
        <div className="flex items-center relative">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="flex-shrink-0 p-3 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed border-r border-gray-300"
            style={{ height: "56px" }}
          >
            {/* <ChevronLeft className="w-5 h-5 text-gray-800" /> */}
          </button>

          {/* Categories Scrollable Container */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${scrollPosition * 200}px)`,
              }}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(index)}
                  className={`flex-shrink-0 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                    index === activeIndex
                      ? "text-cyan-500 border-b-4 border-cyan-500"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Right Arrow Button and Counter */}
          <div className="flex-shrink-0 flex items-center border-l border-gray-300">
            <button
              onClick={handleNext}
              disabled={activeIndex >= categories.length - 1}
              className="p-3 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ height: "56px" }}
            >
              {/* <ChevronRight className="w-5 h-5 text-gray-800" /> */}
            </button>

            {/* Counter Badge */}
            <div className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 mr-2">
              {activeIndex + 1} × {categories.length}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area - Shows which category is selected */}
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {categories[activeIndex]}
        </h2>
        <p className="text-gray-600">
          Content for {categories[activeIndex]} category
        </p>
      </div>
    </div>
  );
};

export default BestDealsCard;
