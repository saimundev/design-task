"use client";

import { ProductItems } from "@/types/product";
import ProductCard from "./ProductCard";
import { useEffect, useState, useRef } from "react";

const NewArrivalsCarousel = ({ products }: { products: ProductItems[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate products to create a seamless loop
  // We need enough duplicates to fill the screen and allow for smooth looping
  const carouselProducts = [...products, ...products, ...products];
  const itemWidth = 312; // 280px width + 32px margin (mx-4 = 16px * 2)

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
    // If we've reached the end of the first set of products, reset to the start of the second set
    // This creates the infinite loop illusion
    if (currentIndex >= products.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(products.length);
    }
  };

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
