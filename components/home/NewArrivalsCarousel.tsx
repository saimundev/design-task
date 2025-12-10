"use client";

import { ProductItems } from "@/types/product";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const NewArrivalsCarousel = ({ products }: { products: ProductItems[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const carouselProducts = [...products, ...products, ...products];
  const itemWidth = 312;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= products.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(products.length);
    }
  };

  if (!products || products.length === 0) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <p className="text-gray-500 text-lg">No new arrivals available</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden py-5">
      <div
        className="flex w-max"
        style={{
          transform: `translateX(-${currentIndex * itemWidth}px)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {carouselProducts.map((product, index) => (
          <div key={`${product.id}-${index}`} className="mx-4 w-[280px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsCarousel;
