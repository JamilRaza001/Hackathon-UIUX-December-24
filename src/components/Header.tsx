'use client';
import { FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

import React, { useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#FF9F0D]">
          Food<span className="text-white">tuck</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:text-[#FF9F0D]">
            Home
          </Link>
          <Link href="/menu" className="hover:text-[#FF9F0D]">
            Menu
          </Link>
          <Link href="/checkout" className="hover:text-[#FF9F0D]">
            Checkout
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-[#FF9F0D] flex items-center"
            >
              Cart
              <span className="ml-1">&#9662;</span>
            </button>
            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-28 bg-white text-black rounded shadow-lg z-50">
                <Link href="/" className="block px-4 py-2 hover:bg-gray-700">
                  Page 1
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-[#FF9F0D]">
            About
          </Link>
          <Link href="/shop" className="hover:text-[#FF9F0D]">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-[#FF9F0D]">
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block px-4 py-2 bg-transparent border border-[#FF9F0D] text-white rounded-full placeholder-gray-400 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#FF9F0D]">
              <IoSearchOutline className="w-5 h-5" />
            </button>
          </div>
          <button>
            <FaShoppingBag className="w-6 h-6 text-white hover:text-[#FF9F0D]" />
          </button>
          <Link href="/signin">
            <button>
              <FaUser className="w-6 h-6 text-white hover:text-[#FF9F0D]" />
            </button>
          </Link>
          <button>
            <IoMenu className="w-6 h-6 text-white lg:hidden" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
