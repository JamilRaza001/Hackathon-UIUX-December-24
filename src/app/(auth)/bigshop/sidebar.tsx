import { FaRegArrowAltCircleRight } from "react-icons/fa";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="w-full sm:w-64 bg-white p-4 border-r border-gray-200">
      {/* Search Box */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full sm:w-[217px] p-2 pr-10 border bg-orange-200 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF9F0D] text-white px-2 py-2">
            <IoSearchOutline className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Category</h2>
        <ul className="space-y-2">
          {[
            "Sandwiches",
            "Burger",
            "Chicken Chup",
            "Drink",
            "Pizza",
            "Thi",
            "Non Veg",
            "Uncategorized",
          ].map((category) => (
            <li key={category}>
              <label className="flex items-center space-x-2 text-gray-700">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-[#FF9F0D] focus:ring-[#FF9F0D]"
                />
                <span>{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Ad Section */}
      <div className="relative mb-6">
        <Image
          width={400}
          height={200}
          src="/images/bigshop_side1.png"
          alt="Ad"
          className="rounded-lg shadow-md w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 rounded-lg">
          <h3 className="text-white text-sm font-light">Perfect Taste</h3>
          <h2 className="text-white text-lg font-bold">Classic Restaurant</h2>
          <p className="text-[#FF9F0D] font-bold mt-1">45.00$</p>
          <button className="text-white text-sm flex items-center gap-1 mt-2">
            Shop Now
            <FaRegArrowAltCircleRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter by Price */}
      <div className="mb-6 mt-4">
        <h2 className="text-lg font-bold mb-4">Filter By Price</h2>
        <div className="flex flex-col gap-2">
          <input type="range" className="w-full accent-[#FF9F0D]" />
          <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600">
            <span>From $0 to $8000</span>
            <button className="text-[#FF9F0D] font-bold mt-2 sm:mt-0">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Latest Products */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Latest Products</h2>
        <ul className="space-y-4">
          {["Pizza", "Cupcake", "Cookies", "Burger"].map((product, index) => (
            <li key={index} className="flex items-center gap-4">
              <Image
                width={48}
                height={48}
                src={"/images/bigshop_side2.png"}
                alt={product}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <h3 className="text-sm font-medium">{product}</h3>
                <p className="text-gray-600 text-sm">$35.00</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Tags */}
      <div>
        <h2 className="text-lg font-bold mb-4">Product Tags</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Services",
            "Our Menu",
            "Pizza",
            "Cupcake",
            "Burger",
            "Cookies",
            "Our Shop",
            "Tandoori Chicken",
          ].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-sm text-gray-700 rounded hover:bg-gray-200 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
