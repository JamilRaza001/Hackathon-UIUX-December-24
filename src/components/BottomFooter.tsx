import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import React from "react";
import { FiFacebook } from "react-icons/fi";

const BottomFooter = () => {
  return (
            <div className=" text-center border-t bg-gray-800 border-gray-700 pt-4 flex justify-center items-center gap-5">
              <div className="">
                <p className="text-gray-500 text-center">
                  Copyright © 2022 by Ayxemn. All Rights Reserved.
                </p>
              </div>
              <div className="flex justify-center space-x-4 mt-4"></div>
              <FiFacebook className="bg-white w-4 h-4 md:w-6 md:h-6  text-gray-400 hover:text-gray-300 transition duration-300" />
              <CiTwitter className="bg-white md:w-6 h-4 w-4 md:h-6 text-[#FF9F0D] hover:text-yellow-500 transition duration-300" />
              <FaInstagram className="bg-white w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:text-gray-300 transition duration-300" />
            </div>
  )
}

export default BottomFooter
