import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import React from "react";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-[#FF9F0D] text-xl font-bold">
              Still You Need Our Support?
            </h2>
            <p className="text-gray-400 mt-2">
              Dont wait; make a smart & logical quote here. Its pretty easy.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md focus:outline-none w-64"
              />
              <button
                type="submit"
                className="bg-[#FF9F0D] text-[14px] px-2 text-white lg:px-4 py-2 lg:py-2 rounded-r-md hover:bg-yellow-600 transition"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-400">
          {/* About Us */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
            <p>
              Corporate clients and leisure travelers have been relying on us
              for dependable, safe, and professional services across major
              cities worldwide.
            </p>
            <p className="mt-4 text-[#FF9F0D] font-medium">
              Opening Hours:
              <br />
              Mon - Sat: 8:00 - 6:00
              <br />
              Sunday: Closed
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Help?</h3>
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Recent Post</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center">
                  <Image
                    src="/images/footer1.png" // Replace with your actual image path
                    alt="Post Thumbnail"
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <p className="text-gray-300 text-sm">20 Feb 2022</p>
                    <p className="text-white">Keep Your Business</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Image
                    src="/images/footer1.png" // Replace with your actual image path
                    alt="Post Thumbnail"
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <p className="text-gray-300 text-sm">20 Feb 2022</p>
                    <p className="text-white">Keep Your Business</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Image
                    src="/images/footer1.png" // Replace with your actual image path
                    alt="Post Thumbnail"
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <p className="text-gray-300 text-sm">20 Feb 2022</p>
                    <p className="text-white">Keep Your Business</p>
                  </div>
                </div>
              </li>
              {/* Repeat the same structure for additional posts */}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t  border-gray-700 pt-4 flex justify-center items-center gap-5">
          <div className="">
            <p className="text-gray-500 text-center">
              Copyright © 2022 by Ayxemn. All Rights Reserved.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-4"></div>
          <FiFacebook className="w-4 h-4 md:w-6 md:h-6  text-white hover:text-gray-300 transition duration-300" />
          <CiTwitter className="md:w-6 h-4 w-4 md:h-6 text-white hover:text-yellow-500 transition duration-300" />
          <FaInstagram className="w-4 h-4 md:w-6 md:h-6 text-white hover:text-gray-300 transition duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
