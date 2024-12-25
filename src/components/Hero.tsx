import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import React from "react";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative bg-black text-white pt-12 pb-10 px-4 sm:px-8 md:px-16 lg:px-20 flex items-center justify-center">
      <div className="relative w-full max-w-7xl flex flex-col items-center md:flex-row md:items-center gap-12 md:gap-16">
        {/* Left Section */}
        <div className="relative flex-1 flex flex-col md:flex-row md:gap-8">
          {/* Social Buttons Section */}
          <div className="flex md:flex-col mb-6 justify-center items-center md:items-start gap-4 md:gap-6">
            {/* Top Divider */}
            <div className="bg-white rounded w-1 h-5 sm:h-14"></div>
            {/* Icons */}
            <div className="flex flex-row justify-center items-center md:flex-col  gap-4 md:gap-6">
              <FiFacebook className="w-4 h-4 md:w-6 md:h-6  text-white hover:text-gray-300 transition duration-300" />
              <CiTwitter className="md:w-6 h-4 w-4 md:h-6 text-[#FF9F0D] hover:text-yellow-500 transition duration-300" />
              <FaInstagram className="w-4 h-4 md:w-6 md:h-6 text-white hover:text-gray-300 transition duration-300" />
            </div>
            {/* Bottom Divider */}
            <div className="bg-white rounded w-1 h-5  sm:h-16"></div>
          </div>

          {/* Text Content Section */}
          <div className="text-center md:text-left flex-1">
            <p className="text-[#FF9F0D] font-vibes text-sm sm:text-base md:text-lg font-medium">
              Its Quick & Amazing!
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                The Art of
              </h1>
              <h1 className="text-[#FF9F0D] text-2xl sm:text-3xl lg:text-4xl font-bold">
                speed food Quality
              </h1>
            </div>
            <p className="text-gray-400 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
            <button className="mt-6 bg-[#FF9F0D] text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition-all duration-300">
              See More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Plate Image */}
          <div className="relative">
            <Image
              src="/images/hero1.png"
              width={1000}
              height={1000}
              alt="Delicious food"
              className=" w-[400px] h-[300px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
