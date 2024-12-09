import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div
        className="relative bg-cover bg-center h-48 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/images/menu_1.png')",
        }}
      >
        <h1 className="text-white text-2xl sm:text-3xl font-bold text-center">
          Shop
        </h1>
        <p className="text-white mt-2 text-center flex items-center gap-1">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>
          <span className="text-orange-500">
            <IoIosArrowForward className="w-4 h-4" />
          </span>
          <span className="text-orange-500">Shop</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8">
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap gap-6">
          {/* Left: Thumbnail and Main Image */}
          <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/2">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 w-full md:w-auto">
              {[1, 2, 3, 4, 5].map((item, idx) => (
                <div
                  key={idx}
                  className="w-16 sm:w-20 h-16 sm:h-20 relative border border-gray-200 rounded-md overflow-hidden cursor-pointer hover:border-orange-400 transition-all"
                >
                  <Image
                    src={`/images/shop${item}.png`} // Replace with thumbnail paths
                    alt={`Thumbnail ${item}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-[500px] border border-gray-300 rounded-md overflow-hidden">
              <Image
                src="/images/shop6.png" // Replace with your main image path
                alt="Main Dish"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Right: Product Information */}
          <div className="flex-1 space-y-6">
            {/* Status and Navigation */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-green-600 bg-green-100 px-2 py-1 rounded">
                In stock
              </span>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 text-gray-600 hover:text-black">
                  <IoIosArrowBack />
                  Prev
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-black">
                  Next
                  <IoIosArrowForward />
                </button>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl font-bold">
              Yummy Chicken Chup
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>

            {/* Price */}
            <div className="text-lg sm:text-2xl font-bold text-orange-500">
              $54.00
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-orange-400">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <span key={idx}>&#9733;</span>
                  ))}
              </div>
              <span className="text-gray-600 text-sm">5.0 Rating</span>
              <span className="text-gray-600 text-sm">(22 Review)</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="px-3 sm:px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">
                -
              </button>
              <span className="font-semibold">1</span>
              <button className="px-3 sm:px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">
                +
              </button>
              <button className="px-4 sm:px-6 py-2 bg-orange-400 text-white hover:bg-orange-500 rounded-md">
                Add to cart
              </button>
            </div>

            {/* Wishlist and Compare */}
            <div className="flex gap-4 text-gray-600 text-sm">
              <button className="hover:text-black">Add to Wishlist</button>
              <button className="hover:text-black">Compare</button>
            </div>

            {/* Meta Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <p>Category: Pizza</p>
              <p>Tag: Our Shop</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="border-b pb-4 w-[200px]">
            <h3 className="text-xl text-center font-bold w-full sm:w-auto px-4 py-2 bg-[#FF9F0D] text-white rounded-md">
              Description
            </h3>
          </div>
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem
            incidunt maiores illum eius explicabo reprehenderit aliquam
            consequuntur illo.
          </p>
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-6">
            Similar Products
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {["shop7", "shop8", "shop9", "shop10"].map((product, idx) => (
              <div
                key={idx}
                className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Image
                  width={500}
                  height={500}
                  src={`/images/${product}.png`}
                  alt="Product"
                  className="w-full h-36 sm:h-56 object-cover rounded-lg"
                />
                <h4 className="mt-2 text-lg font-semibold">
                  Product {idx + 1}
                </h4>
                <p className="text-gray-600">$22.00</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
