"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import BrandImage from "../../assets/images/brand.png";
import SearchIcons from "@/icons/SearchIcons";
import UserIcon from "@/icons/UserIcon";
import HeartIcon from "@/icons/HeartIcon";
import ShoppingCart from "@/icons/ShoppingCart";
import Headphone from "@/icons/Headphone";
import NavigationBar from "./NavigationBar";
import { NAV_MENU } from "@/constant/navmenu";
import { CategoryItem, ProductItems } from "@/types/product";

const HeaderClient = ({
  categories: serverCategories,
  products,
}: {
  categories?: CategoryItem[];
  products?: ProductItems[];
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    ...(serverCategories?.map((c) => c.name) || []),
  ];

  return (
    <header className="">
      <div className="bg-green-soft text-white py-1.5 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            {/* Logo */}

            <div className="flex items-center">
              <Image
                src={BrandImage}
                alt="brand_image"
                width={132}
                height={48}
              />
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-[534px] h-10 rounded-md ml-10 ">
              <div className="flex w-full bg-white rounded">
                <div className="relative h-full">
                  <button
                    className="flex items-center justify-between h-full px-4 min-w-[160px] border-r border-gray outline-none bg-white text-gray text-sm font-normal"
                    onClick={() =>
                      setIsSearchDropdownOpen(!isSearchDropdownOpen)
                    }
                  >
                    <span>{selectedCategory}</span>
                    <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
                  </button>

                  {isSearchDropdownOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-md py-1 z-50 border-t border-gray-100">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-colors"
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsSearchDropdownOpen(false);
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Search for products"
                  className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder:text-gray placeholder:font-normal placeholder:text-sm"
                />
                <button className="bg-gray flex items-center justify-center w-11">
                  <SearchIcons className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center ml-auto">
              <div className="flex flex-col items-start space-y-1">
                <span className="hidden md:inline text-xs">Call us Now</span>
                <div className="flex items-center gap-1">
                  <Headphone className="w-7 h-6" />
                  <small className="text-sm font-normal"> +011 3827918</small>
                </div>
                <span className="text-sm font-normal">Sign In</span>
              </div>

              <div className="ml-10 flex items-center space-x-6">
                <UserIcon className="h-6 w-6" />
                <HeartIcon className="h-6 w-6" />
                <div className="flex">
                  <button className=" relative flex items-center">
                    <ShoppingCart className="h-6 w-6" />

                    <span className="absolute -top-2 -right-1 text-[#FDDE3B] text-base font-normal rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </span>
                  </button>
                  <span className="hidden text-white text-base font-normal md:inline ml-1">
                    Cart
                  </span>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Search Bar - Mobile */}
          <div className="lg:hidden mt-4">
            <div className="flex w-full bg-white rounded overflow-hidden">
              <select className="bg-gray-50 text-gray-700 px-3 py-2 border-r border-gray-300 outline-none text-sm">
                <option>All</option>
                <option>Electronics</option>
                <option>Fashion</option>
              </select>
              <input
                type="text"
                placeholder="Search for products"
                className="flex-1 px-3 py-2 outline-none text-gray-700 text-sm"
              />
              <button className="bg-teal-600 hover:bg-teal-700 px-4 flex items-center justify-center">
                <SearchIcons className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <NavigationBar
        isCategoriesOpen={isCategoriesOpen}
        isMenuOpen={isMenuOpen}
        setIsCategoriesOpen={setIsCategoriesOpen}
        setIsMenuOpen={setIsMenuOpen}
        menu={NAV_MENU}
        products={products}
      />
    </header>
  );
};

export default HeaderClient;
