import CommonHeader from "@/components/CommonHeader";
import React from "react";
import Products from "./products";
import Sidebar from "./sidebar";

const MainShop = () => {
  return (
    <div>
      {/* Header Section */}
      <CommonHeader title="Shop" subTitle="Home" />

      {/* Main Content */}
      <div className="flex flex-col">
        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="flex flex-col sm:flex-row sm:gap-1 items-center mb-4 mt-4">
            <h3 className="font-semibold text-lg text-[#333333] mb-2 sm:mb-0">
              Sort By
            </h3>
            <input
              type="text"
              placeholder="Search"
              className="border-2 w-full sm:w-44 p-2 rounded h-8"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-3 items-center mb-4 mt-4">
            <h3 className="font-semibold text-lg text-[#333333] mb-2 sm:mb-0">
              Show
            </h3>
            <input
              type="text"
              placeholder="Search"
              className="border-2 w-full sm:w-44 p-2 rounded h-8"
            />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row lg:gap-6">
          {/* Product Grid */}
          <div className="w-full lg:w-2/3">
            <Products />
          </div>
          {/* Sidebar */}
          <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainShop;
