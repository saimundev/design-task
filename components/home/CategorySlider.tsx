"use client";

import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import ArrowLeft from "@/icons/ArrowLeft";
import ArrowRights from "@/icons/ArrowRights";
import { CategoryItem } from "@/types/product";
import { categories } from "@/constant/categoryItem";

type CategoryProps = {
  categorys: CategoryItem[];
};

const CategorySlider = ({ categorys }: CategoryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, categorys?.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="w-full bg-linear-to-b from-[#F3EDC9] to-[#FFFFFF00]">
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden container mx-auto px-4 lg:px-0">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {categorys?.map((category: CategoryItem) => {
              const matchedImage = categories.find(
                (item) => item.id === category.id
              );
              return (
                <div
                  key={category.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <CategoryCard
                    name={category.name}
                    image={matchedImage?.image || ""}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-2 lg:left-20 top-1/2 -translate-y-1/2 z-10 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-4 h-8 text-black" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className="absolute right-2 lg:right-20 top-1/2 -translate-y-1/2 z-10 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
        >
          <ArrowRights className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default CategorySlider;
