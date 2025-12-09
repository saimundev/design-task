"use client";

import { Category, CategoryItem, ProductItems } from "@/types/product";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ArrowLeft from "@/icons/ArrowLeft";
import Left from "@/icons/Left";
import Right from "@/icons/Right";
import { useSearchParams, useRouter } from "next/navigation";

type BestDealsCard = {
  products: ProductItems[];
  categorys: CategoryItem[];
  initialActiveIndex: number;
};

const BestDealsCard = ({
  products,
  categorys,
  initialActiveIndex,
}: BestDealsCard) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const router = useRouter();
  useEffect(() => {
    router.push(`?active=${activeIndex}`, { scroll: false });
  }, [activeIndex, router]);

  useEffect(() => {
    setActiveIndex(initialActiveIndex);
  }, [initialActiveIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(categorys.length - 1, prev + 1));
  };

  const handleCategoryClick = (index: number) => {
    setActiveIndex(index);
  };

  // Calculate scroll position to keep active category visible
  const scrollPosition = Math.max(
    0,
    Math.min(activeIndex - 2, categorys.length - 5)
  );

  return (
    <div className="container mx-auto mt-10 lg:mt-24 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
        <div className="text-[28px] font-normal ml-0 lg:ml-10">
          <span className="text-primary-soft">Best</span> Deals
        </div>
        <div className="relative w-full lg:w-auto">
          <div className="flex items-center relative">
            {/* Categories Scrollable Container */}
            <div className="flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${scrollPosition * 200}px)`,
                }}
              >
                {categorys.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(index)}
                    className={`flex-shrink-0 px-6 py-4 text-lg font-normal ${
                      index === activeIndex
                        ? "text-primary-soft border-b-3 border-[#0AAEB9]"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Arrow Button and Counter */}
            <div className="ml-4 lg:ml-14 flex-shrink-0">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="p-3 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ height: "56px" }}
              >
                <Left className="w-2.5 h-3.5 text-gray-800" />
              </button>

              {/* Left Arrow Button */}
              <button
                onClick={handleNext}
                disabled={activeIndex >= categorys.length - 1}
                className=" p-3 h hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ height: "56px" }}
              >
                <Right className="w-2.5 h-3.5 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area - Shows which category is selected */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-5">
        {products?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BestDealsCard;
