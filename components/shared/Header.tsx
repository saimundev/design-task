"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import BrandImage from "../../assets/images/brand.png";
import SearchIcons from "@/icons/SearchIcons";
import UserIcon from "@/icons/UserIcon";
import HeartIcon from "@/icons/HeartIcon";
import ShoppingCart from "@/icons/ShoppingCart";
import Headphone from "@/icons/Headphone";
import BurgerIcon from "@/icons/BurgerIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import LinkdinIcon from "@/icons/LinkdinIcon";
import InstgramIcon from "@/icons/InstgramIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const [menu, setMenu] = useState([
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "Easy Monthly Installments", link: "#" },
    { id: 3, name: "Shop by Brands", link: "#" },
    { id: 4, name: "Become a Vendor", link: "#" },
  ]);

  return (
    <header className=" ">
      {/* Main Header */}
      <div className="bg-green-soft text-white py-1.5">
        <div className="container mx-auto ">
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
            <div className="hidden lg:flex flex-1 max-w-[534px] h-10 rounded-md ml-10">
              <div className="flex w-full bg-white rounded overflow-hidden">
                <select className="bg-white text-gray px-4 py-2 border-r border-gray outline-none text-sm font-normal">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home & Garden</option>
                </select>
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
            <div className="flex items-center ml-54 ml-auto">
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
                className="lg:hidden"
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
      <nav className="bg-green-dark border-t border-teal-700 text-white">
        <div className="container mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-9 py-3">
            <button
              className="flex items-center space-x-2  font-semibold"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <BurgerIcon className="w-4 h-3" />
              <span className="text-base font-normal">Browse By Category</span>
            </button>
            {menu.map((menuItem) => (
              <a
                key={menuItem.id}
                href={menuItem.link}
                className="text-white text-sm font-normal"
              >
                {menuItem.name}
              </a>
            ))}

            <div className="flex items-center space-x-6 ml-auto">
              <FacebookIcon className="w-3 h-5.5" />
              <TwitterIcon className="w-5.5 h-4.5" />
              <LinkdinIcon className="w-5.5 h-5.5" />
              <InstgramIcon className="w-5.5 h-5.5" />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-3">
              <button
                className="flex items-center space-x-2 w-full text-left"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                <Menu size={20} />
                <span>Browse By Category</span>
              </button>
              <a href="#" className="block hover:text-teal-200 py-2">
                Home
              </a>
              <a href="#" className="block hover:text-teal-200 py-2">
                Easy Monthly Installments
              </a>
              <a href="#" className="block hover:text-teal-200 py-2">
                Shop by Brands
              </a>
              <a href="#" className="block hover:text-teal-200 py-2">
                Become a Vendor
              </a>
            </div>
          )}
        </div>

        {/* Categories Dropdown */}
        {isCategoriesOpen && (
          <div className="bg-white text-gray-800 shadow-lg absolute left-0 right-0 z-50 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
              <div className="space-y-2">
                <h3 className="font-bold text-teal-800">Electronics</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Phones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Cameras
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-teal-800">Fashion</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Men's Wear
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Women's Wear
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-teal-800">Home & Garden</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Furniture
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Kitchen
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Decor
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-teal-800">Sports</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Equipment
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Clothing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-600">
                      Shoes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
