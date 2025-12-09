"use client";

import { useState } from "react";
import CategoryCard from "./CategoryCard";
import ArrowLeft from "@/icons/ArrowLeft";
import ArrowRights from "@/icons/ArrowRights";
import { CategoryItem } from "@/types/product";

type CategoryProps = {
  categorys: CategoryItem[];
};

const CategorySlider = ({ categorys }: CategoryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      id: 1,
      title: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop",
      alt: "Electronics - Laptop and workspace",
    },
    {
      id: 2,
      title: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
      alt: "Fashion - Clothing and accessories",
    },
    {
      id: 3,
      title: "Appliances",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
      alt: "Appliances - Modern kitchen",
    },
    {
      id: 4,
      title: "Babies Store",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop",
      alt: "Babies Store - Baby products",
    },
    {
      id: 5,
      title: "Home & Garden",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
      alt: "Home & Garden - Interior design",
    },
  ];

  const itemsPerView = 4;
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
        <div className="overflow-hidden container mx-auto">
          <div
            className="flex p-4 space-x-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {categorys?.map((category: CategoryItem) => {
              const matchedImage = categories.find(
                (item) => item.id === category.id
              );
              return (
                <CategoryCard
                  key={category.id}
                  name={category.name}
                  image={matchedImage?.image || ""}
                />
              );
            })}
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-4 z-10 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-4 h-8 text-black" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className="absolute right-10 top-1/2 -translate-y-1/2 translate-x-4 z-10 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
        >
          <ArrowRights className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default CategorySlider;
